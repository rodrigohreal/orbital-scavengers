(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var Ud={exports:{}},Cl={};var X_;function Lb(){if(X_)return Cl;X_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:u,ref:s!==void 0?s:null,props:l}}return Cl.Fragment=e,Cl.jsx=t,Cl.jsxs=t,Cl}var W_;function Ub(){return W_||(W_=1,Ud.exports=Lb()),Ud.exports}var pe=Ub(),Pd={exports:{}},Mt={};var q_;function Pb(){if(q_)return Mt;q_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function y(z,ne,ye){this.props=z,this.context=ne,this.refs=S,this.updater=ye||M}y.prototype.isReactComponent={},y.prototype.setState=function(z,ne){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ne,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function L(){}L.prototype=y.prototype;function R(z,ne,ye){this.props=z,this.context=ne,this.refs=S,this.updater=ye||M}var w=R.prototype=new L;w.constructor=R,T(w,y.prototype),w.isPureReactComponent=!0;var U=Array.isArray;function I(){}var O={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function A(z,ne,ye){var Ue=ye.ref;return{$$typeof:o,type:z,key:ne,ref:Ue!==void 0?Ue:null,props:ye}}function N(z,ne){return A(z.type,ne,z.props)}function V(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function J(z){var ne={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ye){return ne[ye]})}var te=/\/+/g;function ce(z,ne){return typeof z=="object"&&z!==null&&z.key!=null?J(""+z.key):ne.toString(36)}function le(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(I,I):(z.status="pending",z.then(function(ne){z.status==="pending"&&(z.status="fulfilled",z.value=ne)},function(ne){z.status==="pending"&&(z.status="rejected",z.reason=ne)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function H(z,ne,ye,Ue,ge){var K=typeof z;(K==="undefined"||K==="boolean")&&(z=null);var se=!1;if(z===null)se=!0;else switch(K){case"bigint":case"string":case"number":se=!0;break;case"object":switch(z.$$typeof){case o:case e:se=!0;break;case g:return se=z._init,H(se(z._payload),ne,ye,Ue,ge)}}if(se)return ge=ge(z),se=Ue===""?"."+ce(z,0):Ue,U(ge)?(ye="",se!=null&&(ye=se.replace(te,"$&/")+"/"),H(ge,ne,ye,"",function(Xe){return Xe})):ge!=null&&(V(ge)&&(ge=N(ge,ye+(ge.key==null||z&&z.key===ge.key?"":(""+ge.key).replace(te,"$&/")+"/")+se)),ne.push(ge)),1;se=0;var He=Ue===""?".":Ue+":";if(U(z))for(var Pe=0;Pe<z.length;Pe++)Ue=z[Pe],K=He+ce(Ue,Pe),se+=H(Ue,ne,ye,K,ge);else if(Pe=x(z),typeof Pe=="function")for(z=Pe.call(z),Pe=0;!(Ue=z.next()).done;)Ue=Ue.value,K=He+ce(Ue,Pe++),se+=H(Ue,ne,ye,K,ge);else if(K==="object"){if(typeof z.then=="function")return H(le(z),ne,ye,Ue,ge);throw ne=String(z),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return se}function k(z,ne,ye){if(z==null)return z;var Ue=[],ge=0;return H(z,Ue,"","",function(K){return ne.call(ye,K,ge++)}),Ue}function ae(z){if(z._status===-1){var ne=z._result;ne=ne(),ne.then(function(ye){(z._status===0||z._status===-1)&&(z._status=1,z._result=ye)},function(ye){(z._status===0||z._status===-1)&&(z._status=2,z._result=ye)}),z._status===-1&&(z._status=0,z._result=ne)}if(z._status===1)return z._result.default;throw z._result}var Te=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Ee={map:k,forEach:function(z,ne,ye){k(z,function(){ne.apply(this,arguments)},ye)},count:function(z){var ne=0;return k(z,function(){ne++}),ne},toArray:function(z){return k(z,function(ne){return ne})||[]},only:function(z){if(!V(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return Mt.Activity=v,Mt.Children=Ee,Mt.Component=y,Mt.Fragment=t,Mt.Profiler=s,Mt.PureComponent=R,Mt.StrictMode=a,Mt.Suspense=h,Mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,Mt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},Mt.cache=function(z){return function(){return z.apply(null,arguments)}},Mt.cacheSignal=function(){return null},Mt.cloneElement=function(z,ne,ye){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ue=T({},z.props),ge=z.key;if(ne!=null)for(K in ne.key!==void 0&&(ge=""+ne.key),ne)!q.call(ne,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&ne.ref===void 0||(Ue[K]=ne[K]);var K=arguments.length-2;if(K===1)Ue.children=ye;else if(1<K){for(var se=Array(K),He=0;He<K;He++)se[He]=arguments[He+2];Ue.children=se}return A(z.type,ge,Ue)},Mt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},Mt.createElement=function(z,ne,ye){var Ue,ge={},K=null;if(ne!=null)for(Ue in ne.key!==void 0&&(K=""+ne.key),ne)q.call(ne,Ue)&&Ue!=="key"&&Ue!=="__self"&&Ue!=="__source"&&(ge[Ue]=ne[Ue]);var se=arguments.length-2;if(se===1)ge.children=ye;else if(1<se){for(var He=Array(se),Pe=0;Pe<se;Pe++)He[Pe]=arguments[Pe+2];ge.children=He}if(z&&z.defaultProps)for(Ue in se=z.defaultProps,se)ge[Ue]===void 0&&(ge[Ue]=se[Ue]);return A(z,K,ge)},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(z){return{$$typeof:f,render:z}},Mt.isValidElement=V,Mt.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:ae}},Mt.memo=function(z,ne){return{$$typeof:d,type:z,compare:ne===void 0?null:ne}},Mt.startTransition=function(z){var ne=O.T,ye={};O.T=ye;try{var Ue=z(),ge=O.S;ge!==null&&ge(ye,Ue),typeof Ue=="object"&&Ue!==null&&typeof Ue.then=="function"&&Ue.then(I,Te)}catch(K){Te(K)}finally{ne!==null&&ye.types!==null&&(ne.types=ye.types),O.T=ne}},Mt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},Mt.use=function(z){return O.H.use(z)},Mt.useActionState=function(z,ne,ye){return O.H.useActionState(z,ne,ye)},Mt.useCallback=function(z,ne){return O.H.useCallback(z,ne)},Mt.useContext=function(z){return O.H.useContext(z)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(z,ne){return O.H.useDeferredValue(z,ne)},Mt.useEffect=function(z,ne){return O.H.useEffect(z,ne)},Mt.useEffectEvent=function(z){return O.H.useEffectEvent(z)},Mt.useId=function(){return O.H.useId()},Mt.useImperativeHandle=function(z,ne,ye){return O.H.useImperativeHandle(z,ne,ye)},Mt.useInsertionEffect=function(z,ne){return O.H.useInsertionEffect(z,ne)},Mt.useLayoutEffect=function(z,ne){return O.H.useLayoutEffect(z,ne)},Mt.useMemo=function(z,ne){return O.H.useMemo(z,ne)},Mt.useOptimistic=function(z,ne){return O.H.useOptimistic(z,ne)},Mt.useReducer=function(z,ne,ye){return O.H.useReducer(z,ne,ye)},Mt.useRef=function(z){return O.H.useRef(z)},Mt.useState=function(z){return O.H.useState(z)},Mt.useSyncExternalStore=function(z,ne,ye){return O.H.useSyncExternalStore(z,ne,ye)},Mt.useTransition=function(){return O.H.useTransition()},Mt.version="19.2.3",Mt}var j_;function Dm(){return j_||(j_=1,Pd.exports=Pb()),Pd.exports}var bt=Dm(),Od={exports:{}},Dl={},Id={exports:{}},zd={};var Y_;function Ob(){return Y_||(Y_=1,(function(o){function e(H,k){var ae=H.length;H.push(k);e:for(;0<ae;){var Te=ae-1>>>1,Ee=H[Te];if(0<s(Ee,k))H[Te]=k,H[ae]=Ee,ae=Te;else break e}}function t(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var k=H[0],ae=H.pop();if(ae!==k){H[0]=ae;e:for(var Te=0,Ee=H.length,z=Ee>>>1;Te<z;){var ne=2*(Te+1)-1,ye=H[ne],Ue=ne+1,ge=H[Ue];if(0>s(ye,ae))Ue<Ee&&0>s(ge,ye)?(H[Te]=ge,H[Ue]=ae,Te=Ue):(H[Te]=ye,H[ne]=ae,Te=ne);else if(Ue<Ee&&0>s(ge,ae))H[Te]=ge,H[Ue]=ae,Te=Ue;else break e}}return k}function s(H,k){var ae=H.sortIndex-k.sortIndex;return ae!==0?ae:H.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var h=[],d=[],g=1,v=null,_=3,x=!1,M=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function w(H){for(var k=t(d);k!==null;){if(k.callback===null)a(d);else if(k.startTime<=H)a(d),k.sortIndex=k.expirationTime,e(h,k);else break;k=t(d)}}function U(H){if(T=!1,w(H),!M)if(t(h)!==null)M=!0,I||(I=!0,J());else{var k=t(d);k!==null&&le(U,k.startTime-H)}}var I=!1,O=-1,q=5,A=-1;function N(){return S?!0:!(o.unstable_now()-A<q)}function V(){if(S=!1,I){var H=o.unstable_now();A=H;var k=!0;try{e:{M=!1,T&&(T=!1,L(O),O=-1),x=!0;var ae=_;try{t:{for(w(H),v=t(h);v!==null&&!(v.expirationTime>H&&N());){var Te=v.callback;if(typeof Te=="function"){v.callback=null,_=v.priorityLevel;var Ee=Te(v.expirationTime<=H);if(H=o.unstable_now(),typeof Ee=="function"){v.callback=Ee,w(H),k=!0;break t}v===t(h)&&a(h),w(H)}else a(h);v=t(h)}if(v!==null)k=!0;else{var z=t(d);z!==null&&le(U,z.startTime-H),k=!1}}break e}finally{v=null,_=ae,x=!1}k=void 0}}finally{k?J():I=!1}}}var J;if(typeof R=="function")J=function(){R(V)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ce=te.port2;te.port1.onmessage=V,J=function(){ce.postMessage(null)}}else J=function(){y(V,0)};function le(H,k){O=y(function(){H(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(H){switch(_){case 1:case 2:case 3:var k=3;break;default:k=_}var ae=_;_=k;try{return H()}finally{_=ae}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(H,k){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=_;_=H;try{return k()}finally{_=ae}},o.unstable_scheduleCallback=function(H,k,ae){var Te=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Te+ae:Te):ae=Te,H){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ae+Ee,H={id:g++,callback:k,priorityLevel:H,startTime:ae,expirationTime:Ee,sortIndex:-1},ae>Te?(H.sortIndex=ae,e(d,H),t(h)===null&&H===t(d)&&(T?(L(O),O=-1):T=!0,le(U,ae-Te))):(H.sortIndex=Ee,e(h,H),M||x||(M=!0,I||(I=!0,J()))),H},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(H){var k=_;return function(){var ae=_;_=k;try{return H.apply(this,arguments)}finally{_=ae}}}})(zd)),zd}var Z_;function Ib(){return Z_||(Z_=1,Id.exports=Ob()),Id.exports}var Bd={exports:{}},ti={};var K_;function zb(){if(K_)return ti;K_=1;var o=Dm();function e(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:h,containerInfo:d,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ti.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ti.createPortal=function(h,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(h,d,null,g)},ti.flushSync=function(h){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=d,a.p=g,a.d.f()}},ti.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(h,d))},ti.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},ti.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ti.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(h)},ti.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);a.d.L(h,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ti.preloadModule=function(h,d){if(typeof h=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(h)},ti.requestFormReset=function(h){a.d.r(h)},ti.unstable_batchedUpdates=function(h,d){return h(d)},ti.useFormState=function(h,d,g){return u.H.useFormState(h,d,g)},ti.useFormStatus=function(){return u.H.useHostTransitionStatus()},ti.version="19.2.3",ti}var J_;function Bb(){if(J_)return Bd.exports;J_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bd.exports=zb(),Bd.exports}var Q_;function Fb(){if(Q_)return Dl;Q_=1;var o=Ib(),e=Dm(),t=Bb();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,r=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(r=i.return),n=i.return;while(n)}return i.tag===3?r:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(a(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var r=n,c=i;;){var p=r.return;if(p===null)break;var m=p.alternate;if(m===null){if(c=p.return,c!==null){r=c;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===r)return h(p),n;if(m===c)return h(p),i;m=m.sibling}throw Error(a(188))}if(r.return!==c.return)r=p,c=m;else{for(var b=!1,C=p.child;C;){if(C===r){b=!0,r=p,c=m;break}if(C===c){b=!0,c=p,r=m;break}C=C.sibling}if(!b){for(C=m.child;C;){if(C===r){b=!0,r=m,c=p;break}if(C===c){b=!0,c=m,r=p;break}C=C.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==c)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),R=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var te=Symbol.for("react.client.reference");function ce(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===te?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case U:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case M:return"Portal";case R:return n.displayName||"Context";case L:return(n._context.displayName||"Context")+".Consumer";case w:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return i=n.displayName||null,i!==null?i:ce(n.type)||"Memo";case q:i=n._payload,n=n._init;try{return ce(n(i))}catch{}}return null}var le=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Te=[],Ee=-1;function z(n){return{current:n}}function ne(n){0>Ee||(n.current=Te[Ee],Te[Ee]=null,Ee--)}function ye(n,i){Ee++,Te[Ee]=n.current,n.current=i}var Ue=z(null),ge=z(null),K=z(null),se=z(null);function He(n,i){switch(ye(K,i),ye(ge,n),ye(Ue,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?d_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=d_(i),n=p_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(Ue),ye(Ue,n)}function Pe(){ne(Ue),ne(ge),ne(K)}function Xe(n){n.memoizedState!==null&&ye(se,n);var i=Ue.current,r=p_(i,n.type);i!==r&&(ye(ge,n),ye(Ue,r))}function _t(n){ge.current===n&&(ne(Ue),ne(ge)),se.current===n&&(ne(se),El._currentValue=ae)}var xt,ht;function xe(n){if(xt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);xt=i&&i[1]||"",ht=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+n+ht}var we=!1;function De(n,i){if(!n||we)return"";we=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(_e){var fe=_e}Reflect.construct(n,[],Ce)}else{try{Ce.call()}catch(_e){fe=_e}n.call(Ce.prototype)}}else{try{throw Error()}catch(_e){fe=_e}(Ce=n())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(_e){if(_e&&fe&&typeof _e.stack=="string")return[_e.stack,fe.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],C=m[1];if(b&&C){var X=b.split(`
`),oe=C.split(`
`);for(p=c=0;c<X.length&&!X[c].includes("DetermineComponentFrameRoot");)c++;for(;p<oe.length&&!oe[p].includes("DetermineComponentFrameRoot");)p++;if(c===X.length||p===oe.length)for(c=X.length-1,p=oe.length-1;1<=c&&0<=p&&X[c]!==oe[p];)p--;for(;1<=c&&0<=p;c--,p--)if(X[c]!==oe[p]){if(c!==1||p!==1)do if(c--,p--,0>p||X[c]!==oe[p]){var Me=`
`+X[c].replace(" at new "," at ");return n.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",n.displayName)),Me}while(1<=c&&0<=p);break}}}finally{we=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?xe(r):""}function Ye(n,i){switch(n.tag){case 26:case 27:case 5:return xe(n.type);case 16:return xe("Lazy");case 13:return n.child!==i&&i!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return De(n.type,!1);case 11:return De(n.type.render,!1);case 1:return De(n.type,!0);case 31:return xe("Activity");default:return""}}function F(n){try{var i="",r=null;do i+=Ye(n,r),r=n,n=n.return;while(n);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var it=Object.prototype.hasOwnProperty,Ze=o.unstable_scheduleCallback,ot=o.unstable_cancelCallback,Ve=o.unstable_shouldYield,P=o.unstable_requestPaint,E=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,ve=o.unstable_ImmediatePriority,he=o.unstable_UserBlockingPriority,B=o.unstable_NormalPriority,ee=o.unstable_LowPriority,de=o.unstable_IdlePriority,Ne=o.log,Ie=o.unstable_setDisableYieldValue,j=null,Se=null;function We(n){if(typeof Ne=="function"&&Ie(n),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(j,n)}catch{}}var ke=Math.clz32?Math.clz32:W,qe=Math.log,Ge=Math.LN2;function W(n){return n>>>=0,n===0?32:31-(qe(n)/Ge|0)|0}var ze=256,Re=262144,je=4194304;function Le(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function be(n,i,r){var c=n.pendingLanes;if(c===0)return 0;var p=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var C=c&134217727;return C!==0?(c=C&~m,c!==0?p=Le(c):(b&=C,b!==0?p=Le(b):r||(r=C&~n,r!==0&&(p=Le(r))))):(C=c&~m,C!==0?p=Le(C):b!==0?p=Le(b):r||(r=c&~n,r!==0&&(p=Le(r)))),p===0?0:i!==0&&i!==p&&(i&m)===0&&(m=p&-p,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:p}function Be(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function dt(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var n=je;return je<<=1,(je&62914560)===0&&(je=4194304),n}function Lt(n){for(var i=[],r=0;31>r;r++)i.push(n);return i}function Fe(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ke(n,i,r,c,p,m){var b=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var C=n.entanglements,X=n.expirationTimes,oe=n.hiddenUpdates;for(r=b&~r;0<r;){var Me=31-ke(r),Ce=1<<Me;C[Me]=0,X[Me]=-1;var fe=oe[Me];if(fe!==null)for(oe[Me]=null,Me=0;Me<fe.length;Me++){var _e=fe[Me];_e!==null&&(_e.lane&=-536870913)}r&=~Ce}c!==0&&yt(n,c,0),m!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~i))}function yt(n,i,r){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-ke(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|r&261930}function Nt(n,i){var r=n.entangledLanes|=i;for(n=n.entanglements;r;){var c=31-ke(r),p=1<<c;p&i|n[c]&i&&(n[c]|=i),r&=~p}}function Tt(n,i){var r=i&-i;return r=(r&42)!==0?1:En(r),(r&(n.suspendedLanes|i))!==0?0:r}function En(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function An(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function on(){var n=k.p;return n!==0?n:(n=window.event,n===void 0?32:z_(n.type))}function vn(n,i){var r=k.p;try{return k.p=n,i()}finally{k.p=r}}var wn=Math.random().toString(36).slice(2),dn="__reactFiber$"+wn,_n="__reactProps$"+wn,yn="__reactContainer$"+wn,oa="__reactEvents$"+wn,$a="__reactListeners$"+wn,Sr="__reactHandles$"+wn,Ho="__reactResources$"+wn,zs="__reactMarker$"+wn;function Go(n){delete n[dn],delete n[_n],delete n[oa],delete n[$a],delete n[Sr]}function es(n){var i=n[dn];if(i)return i;for(var r=n.parentNode;r;){if(i=r[yn]||r[dn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(n=S_(n);n!==null;){if(r=n[dn])return r;n=S_(n)}return i}n=r,r=n.parentNode}return null}function ts(n){if(n=n[dn]||n[yn]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function Bs(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function ns(n){var i=n[Ho];return i||(i=n[Ho]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function D(n){n[zs]=!0}var Q=new Set,me={};function ue(n,i){ie(n,i),ie(n+"Capture",i)}function ie(n,i){for(me[n]=i,n=0;n<i.length;n++)Q.add(i[n])}var Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},Qe={};function tt(n){return it.call(Qe,n)?!0:it.call(et,n)?!1:Je.test(n)?Qe[n]=!0:(et[n]=!0,!1)}function at(n,i,r){if(tt(i))if(r===null)n.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+r)}}function pt(n,i,r){if(r===null)n.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+r)}}function st(n,i,r,c){if(c===null)n.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(i,r,""+c)}}function mt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Wt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pn(n,i,r){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,m=c.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:c.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ln(n){if(!n._valueTracker){var i=Wt(n)?"checked":"value";n._valueTracker=pn(n,i,""+n[i])}}function Yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var r=i.getValue(),c="";return n&&(c=Wt(n)?n.checked?"true":"false":n.value),n=c,n!==r?(i.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var qt=/[\n"\\]/g;function St(n){return n.replace(qt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Wn(n,i,r,c,p,m,b,C){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),i!=null?b==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+mt(i)):n.value!==""+mt(i)&&(n.value=""+mt(i)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),i!=null?qn(n,b,mt(i)):r!=null?qn(n,b,mt(r)):c!=null&&n.removeAttribute("value"),p==null&&m!=null&&(n.defaultChecked=!!m),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?n.name=""+mt(C):n.removeAttribute("name")}function ba(n,i,r,c,p,m,b,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){ln(n);return}r=r!=null?""+mt(r):"",i=i!=null?""+mt(i):r,C||i===n.value||(n.value=i),n.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=C?n.checked:!!c,n.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),ln(n)}function qn(n,i,r){i==="number"&&ct(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function Li(n,i,r,c){if(n=n.options,i){i={};for(var p=0;p<r.length;p++)i["$"+r[p]]=!0;for(r=0;r<n.length;r++)p=i.hasOwnProperty("$"+n[r].value),n[r].selected!==p&&(n[r].selected=p),p&&c&&(n[r].defaultSelected=!0)}else{for(r=""+mt(r),i=null,p=0;p<n.length;p++){if(n[p].value===r){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function Kt(n,i,r){if(i!=null&&(i=""+mt(i),i!==n.value&&(n.value=i),r==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=r!=null?""+mt(r):""}function jn(n,i,r,c){if(i==null){if(c!=null){if(r!=null)throw Error(a(92));if(le(c)){if(1<c.length)throw Error(a(93));c=c[0]}r=c}r==null&&(r=""),i=r}r=mt(i),n.defaultValue=r,c=n.textContent,c===r&&c!==""&&c!==null&&(n.value=c),ln(n)}function Un(n,i){if(i){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=i;return}}n.textContent=i}var Yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zn(n,i,r){var c=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,r):typeof r!="number"||r===0||Yn.has(i)?i==="float"?n.cssFloat=r:n[i]=(""+r).trim():n[i]=r+"px"}function Mr(n,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&r[p]!==c&&Zn(n,p,c)}else for(var m in i)i.hasOwnProperty(m)&&Zn(n,m,i[m])}function Yi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var RS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),CS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gc(n){return CS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ta(){}var Df=null;function Nf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var br=null,Tr=null;function h0(n){var i=ts(n);if(i&&(n=i.stateNode)){var r=n[_n]||null;e:switch(n=i.stateNode,i.type){case"input":if(Wn(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+St(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var c=r[i];if(c!==n&&c.form===n.form){var p=c[_n]||null;if(!p)throw Error(a(90));Wn(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<r.length;i++)c=r[i],c.form===n.form&&Yt(c)}break e;case"textarea":Kt(n,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Li(n,!!r.multiple,i,!1)}}}var Lf=!1;function d0(n,i,r){if(Lf)return n(i,r);Lf=!0;try{var c=n(i);return c}finally{if(Lf=!1,(br!==null||Tr!==null)&&(iu(),br&&(i=br,n=Tr,Tr=br=null,h0(i),n)))for(i=0;i<n.length;i++)h0(n[i])}}function Vo(n,i){var r=n.stateNode;if(r===null)return null;var c=r[_n]||null;if(c===null)return null;r=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(Ea)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{Uf=!1}var is=null,Pf=null,vc=null;function p0(){if(vc)return vc;var n,i=Pf,r=i.length,c,p="value"in is?is.value:is.textContent,m=p.length;for(n=0;n<r&&i[n]===p[n];n++);var b=r-n;for(c=1;c<=b&&i[r-c]===p[m-c];c++);return vc=p.slice(n,1<c?1-c:void 0)}function _c(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xc(){return!0}function m0(){return!1}function ui(n){function i(r,c,p,m,b){this._reactName=r,this._targetInst=p,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(r=n[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xc:m0,this.isPropagationStopped=m0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),i}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=ui(Fs),Xo=v({},Fs,{view:0,detail:0}),DS=ui(Xo),Of,If,Wo,Sc=v({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wo&&(Wo&&n.type==="mousemove"?(Of=n.screenX-Wo.screenX,If=n.screenY-Wo.screenY):If=Of=0,Wo=n),Of)},movementY:function(n){return"movementY"in n?n.movementY:If}}),g0=ui(Sc),NS=v({},Sc,{dataTransfer:0}),LS=ui(NS),US=v({},Xo,{relatedTarget:0}),zf=ui(US),PS=v({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),OS=ui(PS),IS=v({},Fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zS=ui(IS),BS=v({},Fs,{data:0}),v0=ui(BS),FS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VS(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=GS[n])?!!i[n]:!1}function Bf(){return VS}var kS=v({},Xo,{key:function(n){if(n.key){var i=FS[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_c(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?HS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(n){return n.type==="keypress"?_c(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_c(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),XS=ui(kS),WS=v({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=ui(WS),qS=v({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),jS=ui(qS),YS=v({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZS=ui(YS),KS=v({},Sc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),JS=ui(KS),QS=v({},Fs,{newState:0,oldState:0}),$S=ui(QS),eM=[9,13,27,32],Ff=Ea&&"CompositionEvent"in window,qo=null;Ea&&"documentMode"in document&&(qo=document.documentMode);var tM=Ea&&"TextEvent"in window&&!qo,x0=Ea&&(!Ff||qo&&8<qo&&11>=qo),y0=" ",S0=!1;function M0(n,i){switch(n){case"keyup":return eM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Er=!1;function nM(n,i){switch(n){case"compositionend":return b0(i);case"keypress":return i.which!==32?null:(S0=!0,y0);case"textInput":return n=i.data,n===y0&&S0?null:n;default:return null}}function iM(n,i){if(Er)return n==="compositionend"||!Ff&&M0(n,i)?(n=p0(),vc=Pf=is=null,Er=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return x0&&i.locale!=="ko"?null:i.data;default:return null}}var aM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!aM[n.type]:i==="textarea"}function E0(n,i,r,c){br?Tr?Tr.push(c):Tr=[c]:br=c,i=uu(i,"onChange"),0<i.length&&(r=new yc("onChange","change",null,r,c),n.push({event:r,listeners:i}))}var jo=null,Yo=null;function sM(n){o_(n,0)}function Mc(n){var i=Bs(n);if(Yt(i))return n}function A0(n,i){if(n==="change")return i}var w0=!1;if(Ea){var Hf;if(Ea){var Gf="oninput"in document;if(!Gf){var R0=document.createElement("div");R0.setAttribute("oninput","return;"),Gf=typeof R0.oninput=="function"}Hf=Gf}else Hf=!1;w0=Hf&&(!document.documentMode||9<document.documentMode)}function C0(){jo&&(jo.detachEvent("onpropertychange",D0),Yo=jo=null)}function D0(n){if(n.propertyName==="value"&&Mc(Yo)){var i=[];E0(i,Yo,n,Nf(n)),d0(sM,i)}}function rM(n,i,r){n==="focusin"?(C0(),jo=i,Yo=r,jo.attachEvent("onpropertychange",D0)):n==="focusout"&&C0()}function oM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Mc(Yo)}function lM(n,i){if(n==="click")return Mc(i)}function cM(n,i){if(n==="input"||n==="change")return Mc(i)}function uM(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var yi=typeof Object.is=="function"?Object.is:uM;function Zo(n,i){if(yi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var r=Object.keys(n),c=Object.keys(i);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var p=r[c];if(!it.call(i,p)||!yi(n[p],i[p]))return!1}return!0}function N0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function L0(n,i){var r=N0(n);n=0;for(var c;r;){if(r.nodeType===3){if(c=n+r.textContent.length,n<=i&&c>=i)return{node:r,offset:i-n};n=c}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=N0(r)}}function U0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?U0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function P0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=ct(n.document);i instanceof n.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)n=i.contentWindow;else break;i=ct(n.document)}return i}function Vf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var fM=Ea&&"documentMode"in document&&11>=document.documentMode,Ar=null,kf=null,Ko=null,Xf=!1;function O0(n,i,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xf||Ar==null||Ar!==ct(c)||(c=Ar,"selectionStart"in c&&Vf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ko&&Zo(Ko,c)||(Ko=c,c=uu(kf,"onSelect"),0<c.length&&(i=new yc("onSelect","select",null,i,r),n.push({event:i,listeners:c}),i.target=Ar)))}function Hs(n,i){var r={};return r[n.toLowerCase()]=i.toLowerCase(),r["Webkit"+n]="webkit"+i,r["Moz"+n]="moz"+i,r}var wr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},Wf={},I0={};Ea&&(I0=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Gs(n){if(Wf[n])return Wf[n];if(!wr[n])return n;var i=wr[n],r;for(r in i)if(i.hasOwnProperty(r)&&r in I0)return Wf[n]=i[r];return n}var z0=Gs("animationend"),B0=Gs("animationiteration"),F0=Gs("animationstart"),hM=Gs("transitionrun"),dM=Gs("transitionstart"),pM=Gs("transitioncancel"),H0=Gs("transitionend"),G0=new Map,qf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qf.push("scrollEnd");function Zi(n,i){G0.set(n,i),ue(i,[n])}var bc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Ui=[],Rr=0,jf=0;function Tc(){for(var n=Rr,i=jf=Rr=0;i<n;){var r=Ui[i];Ui[i++]=null;var c=Ui[i];Ui[i++]=null;var p=Ui[i];Ui[i++]=null;var m=Ui[i];if(Ui[i++]=null,c!==null&&p!==null){var b=c.pending;b===null?p.next=p:(p.next=b.next,b.next=p),c.pending=p}m!==0&&V0(r,p,m)}}function Ec(n,i,r,c){Ui[Rr++]=n,Ui[Rr++]=i,Ui[Rr++]=r,Ui[Rr++]=c,jf|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Yf(n,i,r,c){return Ec(n,i,r,c),Ac(n)}function Vs(n,i){return Ec(n,null,null,i),Ac(n)}function V0(n,i,r){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r);for(var p=!1,m=n.return;m!==null;)m.childLanes|=r,c=m.alternate,c!==null&&(c.childLanes|=r),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(p=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,p&&i!==null&&(p=31-ke(r),n=m.hiddenUpdates,c=n[p],c===null?n[p]=[i]:c.push(i),i.lane=r|536870912),m):null}function Ac(n){if(50<_l)throw _l=0,id=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Cr={};function mM(n,i,r,c){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(n,i,r,c){return new mM(n,i,r,c)}function Zf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Aa(n,i){var r=n.alternate;return r===null?(r=Si(n.tag,i,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=i,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&65011712,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,i=n.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function k0(n,i){n.flags&=65011714;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,i=r.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function wc(n,i,r,c,p,m){var b=0;if(c=n,typeof n=="function")Zf(n)&&(b=1);else if(typeof n=="string")b=yb(n,r,Ue.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case A:return n=Si(31,r,i,p),n.elementType=A,n.lanes=m,n;case T:return ks(r.children,p,m,i);case S:b=8,p|=24;break;case y:return n=Si(12,r,i,p|2),n.elementType=y,n.lanes=m,n;case U:return n=Si(13,r,i,p),n.elementType=U,n.lanes=m,n;case I:return n=Si(19,r,i,p),n.elementType=I,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:b=10;break e;case L:b=9;break e;case w:b=11;break e;case O:b=14;break e;case q:b=16,c=null;break e}b=29,r=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=Si(b,r,i,p),i.elementType=n,i.type=c,i.lanes=m,i}function ks(n,i,r,c){return n=Si(7,n,c,i),n.lanes=r,n}function Kf(n,i,r){return n=Si(6,n,null,i),n.lanes=r,n}function X0(n){var i=Si(18,null,null,0);return i.stateNode=n,i}function Jf(n,i,r){return i=Si(4,n.children!==null?n.children:[],n.key,i),i.lanes=r,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var W0=new WeakMap;function Pi(n,i){if(typeof n=="object"&&n!==null){var r=W0.get(n);return r!==void 0?r:(i={value:n,source:i,stack:F(i)},W0.set(n,i),i)}return{value:n,source:i,stack:F(i)}}var Dr=[],Nr=0,Rc=null,Jo=0,Oi=[],Ii=0,as=null,la=1,ca="";function wa(n,i){Dr[Nr++]=Jo,Dr[Nr++]=Rc,Rc=n,Jo=i}function q0(n,i,r){Oi[Ii++]=la,Oi[Ii++]=ca,Oi[Ii++]=as,as=n;var c=la;n=ca;var p=32-ke(c)-1;c&=~(1<<p),r+=1;var m=32-ke(i)+p;if(30<m){var b=p-p%5;m=(c&(1<<b)-1).toString(32),c>>=b,p-=b,la=1<<32-ke(i)+p|r<<p|c,ca=m+n}else la=1<<m|r<<p|c,ca=n}function Qf(n){n.return!==null&&(wa(n,1),q0(n,1,0))}function $f(n){for(;n===Rc;)Rc=Dr[--Nr],Dr[Nr]=null,Jo=Dr[--Nr],Dr[Nr]=null;for(;n===as;)as=Oi[--Ii],Oi[Ii]=null,ca=Oi[--Ii],Oi[Ii]=null,la=Oi[--Ii],Oi[Ii]=null}function j0(n,i){Oi[Ii++]=la,Oi[Ii++]=ca,Oi[Ii++]=as,la=i.id,ca=i.overflow,as=n}var Kn=null,cn=null,Gt=!1,ss=null,zi=!1,eh=Error(a(519));function rs(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qo(Pi(i,n)),eh}function Y0(n){var i=n.stateNode,r=n.type,c=n.memoizedProps;switch(i[dn]=n,i[_n]=c,r){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<yl.length;r++)Pt(yl[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":Pt("invalid",i),ba(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Pt("invalid",i);break;case"textarea":Pt("invalid",i),jn(i,c.value,c.defaultValue,c.children)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||c.suppressHydrationWarning===!0||f_(i.textContent,r)?(c.popover!=null&&(Pt("beforetoggle",i),Pt("toggle",i)),c.onScroll!=null&&Pt("scroll",i),c.onScrollEnd!=null&&Pt("scrollend",i),c.onClick!=null&&(i.onclick=Ta),i=!0):i=!1,i||rs(n,!0)}function Z0(n){for(Kn=n.return;Kn;)switch(Kn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Kn=Kn.return}}function Lr(n){if(n!==Kn)return!1;if(!Gt)return Z0(n),Gt=!0,!1;var i=n.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||_d(n.type,n.memoizedProps)),r=!r),r&&cn&&rs(n),Z0(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));cn=y_(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));cn=y_(n)}else i===27?(i=cn,ys(n.type)?(n=bd,bd=null,cn=n):cn=i):cn=Kn?Fi(n.stateNode.nextSibling):null;return!0}function Xs(){cn=Kn=null,Gt=!1}function th(){var n=ss;return n!==null&&(pi===null?pi=n:pi.push.apply(pi,n),ss=null),n}function Qo(n){ss===null?ss=[n]:ss.push(n)}var nh=z(null),Ws=null,Ra=null;function os(n,i,r){ye(nh,i._currentValue),i._currentValue=r}function Ca(n){n._currentValue=nh.current,ne(nh)}function ih(n,i,r){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===r)break;n=n.return}}function ah(n,i,r,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var m=p.dependencies;if(m!==null){var b=p.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=p;for(var X=0;X<i.length;X++)if(C.context===i[X]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),ih(m.return,r,n),c||(b=null);break e}m=C.next}}else if(p.tag===18){if(b=p.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),ih(b,r,n),b=null}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}}function Ur(n,i,r,c){n=null;for(var p=i,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var b=p.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var C=p.type;yi(p.pendingProps.value,b.value)||(n!==null?n.push(C):n=[C])}}else if(p===se.current){if(b=p.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(El):n=[El])}p=p.return}n!==null&&ah(i,n,r,c),i.flags|=262144}function Cc(n){for(n=n.firstContext;n!==null;){if(!yi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function qs(n){Ws=n,Ra=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Jn(n){return K0(Ws,n)}function Dc(n,i){return Ws===null&&qs(n),K0(n,i)}function K0(n,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ra===null){if(n===null)throw Error(a(308));Ra=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Ra=Ra.next=i;return r}var gM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(r,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(r){return r()})}},vM=o.unstable_scheduleCallback,_M=o.unstable_NormalPriority,Rn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new gM,data:new Map,refCount:0}}function $o(n){n.refCount--,n.refCount===0&&vM(_M,function(){n.controller.abort()})}var el=null,rh=0,Pr=0,Or=null;function xM(n,i){if(el===null){var r=el=[];rh=0,Pr=cd(),Or={status:"pending",value:void 0,then:function(c){r.push(c)}}}return rh++,i.then(J0,J0),i}function J0(){if(--rh===0&&el!==null){Or!==null&&(Or.status="fulfilled");var n=el;el=null,Pr=0,Or=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function yM(n,i){var r=[],c={status:"pending",value:null,reason:null,then:function(p){r.push(p)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<r.length;p++)(0,r[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<r.length;p++)(0,r[p])(void 0)}),c}var Q0=H.S;H.S=function(n,i){Ov=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&xM(n,i),Q0!==null&&Q0(n,i)};var js=z(null);function oh(){var n=js.current;return n!==null?n:rn.pooledCache}function Nc(n,i){i===null?ye(js,js.current):ye(js,i.pool)}function $0(){var n=oh();return n===null?null:{parent:Rn._currentValue,pool:n}}var Ir=Error(a(460)),lh=Error(a(474)),Lc=Error(a(542)),Uc={then:function(){}};function eg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function tg(n,i,r){switch(r=n[r],r===void 0?n.push(i):r!==i&&(i.then(Ta,Ta),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,ig(n),n;default:if(typeof i.status=="string")i.then(Ta,Ta);else{if(n=rn,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,ig(n),n}throw Zs=i,Ir}}function Ys(n){try{var i=n._init;return i(n._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Zs=r,Ir):r}}var Zs=null;function ng(){if(Zs===null)throw Error(a(459));var n=Zs;return Zs=null,n}function ig(n){if(n===Ir||n===Lc)throw Error(a(483))}var zr=null,tl=0;function Pc(n){var i=tl;return tl+=1,zr===null&&(zr=[]),tg(zr,n,i)}function nl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Oc(n,i){throw i.$$typeof===_?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function ag(n){function i($,Z){if(n){var re=$.deletions;re===null?($.deletions=[Z],$.flags|=16):re.push(Z)}}function r($,Z){if(!n)return null;for(;Z!==null;)i($,Z),Z=Z.sibling;return null}function c($){for(var Z=new Map;$!==null;)$.key!==null?Z.set($.key,$):Z.set($.index,$),$=$.sibling;return Z}function p($,Z){return $=Aa($,Z),$.index=0,$.sibling=null,$}function m($,Z,re){return $.index=re,n?(re=$.alternate,re!==null?(re=re.index,re<Z?($.flags|=67108866,Z):re):($.flags|=67108866,Z)):($.flags|=1048576,Z)}function b($){return n&&$.alternate===null&&($.flags|=67108866),$}function C($,Z,re,Ae){return Z===null||Z.tag!==6?(Z=Kf(re,$.mode,Ae),Z.return=$,Z):(Z=p(Z,re),Z.return=$,Z)}function X($,Z,re,Ae){var ft=re.type;return ft===T?Me($,Z,re.props.children,Ae,re.key):Z!==null&&(Z.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===q&&Ys(ft)===Z.type)?(Z=p(Z,re.props),nl(Z,re),Z.return=$,Z):(Z=wc(re.type,re.key,re.props,null,$.mode,Ae),nl(Z,re),Z.return=$,Z)}function oe($,Z,re,Ae){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==re.containerInfo||Z.stateNode.implementation!==re.implementation?(Z=Jf(re,$.mode,Ae),Z.return=$,Z):(Z=p(Z,re.children||[]),Z.return=$,Z)}function Me($,Z,re,Ae,ft){return Z===null||Z.tag!==7?(Z=ks(re,$.mode,Ae,ft),Z.return=$,Z):(Z=p(Z,re),Z.return=$,Z)}function Ce($,Z,re){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Kf(""+Z,$.mode,re),Z.return=$,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case x:return re=wc(Z.type,Z.key,Z.props,null,$.mode,re),nl(re,Z),re.return=$,re;case M:return Z=Jf(Z,$.mode,re),Z.return=$,Z;case q:return Z=Ys(Z),Ce($,Z,re)}if(le(Z)||J(Z))return Z=ks(Z,$.mode,re,null),Z.return=$,Z;if(typeof Z.then=="function")return Ce($,Pc(Z),re);if(Z.$$typeof===R)return Ce($,Dc($,Z),re);Oc($,Z)}return null}function fe($,Z,re,Ae){var ft=Z!==null?Z.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return ft!==null?null:C($,Z,""+re,Ae);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case x:return re.key===ft?X($,Z,re,Ae):null;case M:return re.key===ft?oe($,Z,re,Ae):null;case q:return re=Ys(re),fe($,Z,re,Ae)}if(le(re)||J(re))return ft!==null?null:Me($,Z,re,Ae,null);if(typeof re.then=="function")return fe($,Z,Pc(re),Ae);if(re.$$typeof===R)return fe($,Z,Dc($,re),Ae);Oc($,re)}return null}function _e($,Z,re,Ae,ft){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return $=$.get(re)||null,C(Z,$,""+Ae,ft);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case x:return $=$.get(Ae.key===null?re:Ae.key)||null,X(Z,$,Ae,ft);case M:return $=$.get(Ae.key===null?re:Ae.key)||null,oe(Z,$,Ae,ft);case q:return Ae=Ys(Ae),_e($,Z,re,Ae,ft)}if(le(Ae)||J(Ae))return $=$.get(re)||null,Me(Z,$,Ae,ft,null);if(typeof Ae.then=="function")return _e($,Z,re,Pc(Ae),ft);if(Ae.$$typeof===R)return _e($,Z,re,Dc(Z,Ae),ft);Oc(Z,Ae)}return null}function nt($,Z,re,Ae){for(var ft=null,Vt=null,rt=Z,wt=Z=0,Bt=null;rt!==null&&wt<re.length;wt++){rt.index>wt?(Bt=rt,rt=null):Bt=rt.sibling;var kt=fe($,rt,re[wt],Ae);if(kt===null){rt===null&&(rt=Bt);break}n&&rt&&kt.alternate===null&&i($,rt),Z=m(kt,Z,wt),Vt===null?ft=kt:Vt.sibling=kt,Vt=kt,rt=Bt}if(wt===re.length)return r($,rt),Gt&&wa($,wt),ft;if(rt===null){for(;wt<re.length;wt++)rt=Ce($,re[wt],Ae),rt!==null&&(Z=m(rt,Z,wt),Vt===null?ft=rt:Vt.sibling=rt,Vt=rt);return Gt&&wa($,wt),ft}for(rt=c(rt);wt<re.length;wt++)Bt=_e(rt,$,wt,re[wt],Ae),Bt!==null&&(n&&Bt.alternate!==null&&rt.delete(Bt.key===null?wt:Bt.key),Z=m(Bt,Z,wt),Vt===null?ft=Bt:Vt.sibling=Bt,Vt=Bt);return n&&rt.forEach(function(Es){return i($,Es)}),Gt&&wa($,wt),ft}function gt($,Z,re,Ae){if(re==null)throw Error(a(151));for(var ft=null,Vt=null,rt=Z,wt=Z=0,Bt=null,kt=re.next();rt!==null&&!kt.done;wt++,kt=re.next()){rt.index>wt?(Bt=rt,rt=null):Bt=rt.sibling;var Es=fe($,rt,kt.value,Ae);if(Es===null){rt===null&&(rt=Bt);break}n&&rt&&Es.alternate===null&&i($,rt),Z=m(Es,Z,wt),Vt===null?ft=Es:Vt.sibling=Es,Vt=Es,rt=Bt}if(kt.done)return r($,rt),Gt&&wa($,wt),ft;if(rt===null){for(;!kt.done;wt++,kt=re.next())kt=Ce($,kt.value,Ae),kt!==null&&(Z=m(kt,Z,wt),Vt===null?ft=kt:Vt.sibling=kt,Vt=kt);return Gt&&wa($,wt),ft}for(rt=c(rt);!kt.done;wt++,kt=re.next())kt=_e(rt,$,wt,kt.value,Ae),kt!==null&&(n&&kt.alternate!==null&&rt.delete(kt.key===null?wt:kt.key),Z=m(kt,Z,wt),Vt===null?ft=kt:Vt.sibling=kt,Vt=kt);return n&&rt.forEach(function(Nb){return i($,Nb)}),Gt&&wa($,wt),ft}function an($,Z,re,Ae){if(typeof re=="object"&&re!==null&&re.type===T&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case x:e:{for(var ft=re.key;Z!==null;){if(Z.key===ft){if(ft=re.type,ft===T){if(Z.tag===7){r($,Z.sibling),Ae=p(Z,re.props.children),Ae.return=$,$=Ae;break e}}else if(Z.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===q&&Ys(ft)===Z.type){r($,Z.sibling),Ae=p(Z,re.props),nl(Ae,re),Ae.return=$,$=Ae;break e}r($,Z);break}else i($,Z);Z=Z.sibling}re.type===T?(Ae=ks(re.props.children,$.mode,Ae,re.key),Ae.return=$,$=Ae):(Ae=wc(re.type,re.key,re.props,null,$.mode,Ae),nl(Ae,re),Ae.return=$,$=Ae)}return b($);case M:e:{for(ft=re.key;Z!==null;){if(Z.key===ft)if(Z.tag===4&&Z.stateNode.containerInfo===re.containerInfo&&Z.stateNode.implementation===re.implementation){r($,Z.sibling),Ae=p(Z,re.children||[]),Ae.return=$,$=Ae;break e}else{r($,Z);break}else i($,Z);Z=Z.sibling}Ae=Jf(re,$.mode,Ae),Ae.return=$,$=Ae}return b($);case q:return re=Ys(re),an($,Z,re,Ae)}if(le(re))return nt($,Z,re,Ae);if(J(re)){if(ft=J(re),typeof ft!="function")throw Error(a(150));return re=ft.call(re),gt($,Z,re,Ae)}if(typeof re.then=="function")return an($,Z,Pc(re),Ae);if(re.$$typeof===R)return an($,Z,Dc($,re),Ae);Oc($,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,Z!==null&&Z.tag===6?(r($,Z.sibling),Ae=p(Z,re),Ae.return=$,$=Ae):(r($,Z),Ae=Kf(re,$.mode,Ae),Ae.return=$,$=Ae),b($)):r($,Z)}return function($,Z,re,Ae){try{tl=0;var ft=an($,Z,re,Ae);return zr=null,ft}catch(rt){if(rt===Ir||rt===Lc)throw rt;var Vt=Si(29,rt,null,$.mode);return Vt.lanes=Ae,Vt.return=$,Vt}finally{}}}var Ks=ag(!0),sg=ag(!1),ls=!1;function ch(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function cs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function us(n,i,r){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(jt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=Ac(n),V0(n,null,r),i}return Ec(n,c,i,r),Ac(n)}function il(n,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,r|=c,i.lanes=r,Nt(n,r)}}function fh(n,i){var r=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var p=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?p=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?p=m=i:m=m.next=i}else p=m=i;r={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=i:n.next=i,r.lastBaseUpdate=i}var hh=!1;function al(){if(hh){var n=Or;if(n!==null)throw n}}function sl(n,i,r,c){hh=!1;var p=n.updateQueue;ls=!1;var m=p.firstBaseUpdate,b=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var X=C,oe=X.next;X.next=null,b===null?m=oe:b.next=oe,b=X;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,C=Me.lastBaseUpdate,C!==b&&(C===null?Me.firstBaseUpdate=oe:C.next=oe,Me.lastBaseUpdate=X))}if(m!==null){var Ce=p.baseState;b=0,Me=oe=X=null,C=m;do{var fe=C.lane&-536870913,_e=fe!==C.lane;if(_e?(zt&fe)===fe:(c&fe)===fe){fe!==0&&fe===Pr&&(hh=!0),Me!==null&&(Me=Me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var nt=n,gt=C;fe=i;var an=r;switch(gt.tag){case 1:if(nt=gt.payload,typeof nt=="function"){Ce=nt.call(an,Ce,fe);break e}Ce=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=gt.payload,fe=typeof nt=="function"?nt.call(an,Ce,fe):nt,fe==null)break e;Ce=v({},Ce,fe);break e;case 2:ls=!0}}fe=C.callback,fe!==null&&(n.flags|=64,_e&&(n.flags|=8192),_e=p.callbacks,_e===null?p.callbacks=[fe]:_e.push(fe))}else _e={lane:fe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Me===null?(oe=Me=_e,X=Ce):Me=Me.next=_e,b|=fe;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;_e=C,C=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);Me===null&&(X=Ce),p.baseState=X,p.firstBaseUpdate=oe,p.lastBaseUpdate=Me,m===null&&(p.shared.lanes=0),ms|=b,n.lanes=b,n.memoizedState=Ce}}function rg(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function og(n,i){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)rg(r[n],i)}var Br=z(null),Ic=z(0);function lg(n,i){n=Ba,ye(Ic,n),ye(Br,i),Ba=n|i.baseLanes}function dh(){ye(Ic,Ba),ye(Br,Br.current)}function ph(){Ba=Ic.current,ne(Br),ne(Ic)}var Mi=z(null),Bi=null;function fs(n){var i=n.alternate;ye(bn,bn.current&1),ye(Mi,n),Bi===null&&(i===null||Br.current!==null||i.memoizedState!==null)&&(Bi=n)}function mh(n){ye(bn,bn.current),ye(Mi,n),Bi===null&&(Bi=n)}function cg(n){n.tag===22?(ye(bn,bn.current),ye(Mi,n),Bi===null&&(Bi=n)):hs()}function hs(){ye(bn,bn.current),ye(Mi,Mi.current)}function bi(n){ne(Mi),Bi===n&&(Bi=null),ne(bn)}var bn=z(0);function zc(n){for(var i=n;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Sd(r)||Md(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Da=0,Et=null,tn=null,Cn=null,Bc=!1,Fr=!1,Js=!1,Fc=0,rl=0,Hr=null,SM=0;function Sn(){throw Error(a(321))}function gh(n,i){if(i===null)return!1;for(var r=0;r<i.length&&r<n.length;r++)if(!yi(n[r],i[r]))return!1;return!0}function vh(n,i,r,c,p,m){return Da=m,Et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=n===null||n.memoizedState===null?qg:Lh,Js=!1,m=r(c,p),Js=!1,Fr&&(m=fg(i,r,c,p)),ug(n),m}function ug(n){H.H=cl;var i=tn!==null&&tn.next!==null;if(Da=0,Cn=tn=Et=null,Bc=!1,rl=0,Hr=null,i)throw Error(a(300));n===null||Dn||(n=n.dependencies,n!==null&&Cc(n)&&(Dn=!0))}function fg(n,i,r,c){Et=n;var p=0;do{if(Fr&&(Hr=null),rl=0,Fr=!1,25<=p)throw Error(a(301));if(p+=1,Cn=tn=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}H.H=jg,m=i(r,c)}while(Fr);return m}function MM(){var n=H.H,i=n.useState()[0];return i=typeof i.then=="function"?ol(i):i,n=n.useState()[0],(tn!==null?tn.memoizedState:null)!==n&&(Et.flags|=1024),i}function _h(){var n=Fc!==0;return Fc=0,n}function xh(n,i,r){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~r}function yh(n){if(Bc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Bc=!1}Da=0,Cn=tn=Et=null,Fr=!1,rl=Fc=0,Hr=null}function si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?Et.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function Tn(){if(tn===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=Cn===null?Et.memoizedState:Cn.next;if(i!==null)Cn=i,tn=n;else{if(n===null)throw Et.alternate===null?Error(a(467)):Error(a(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Cn===null?Et.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function Hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(n){var i=rl;return rl+=1,Hr===null&&(Hr=[]),n=tg(Hr,n,i),i=Et,(Cn===null?i.memoizedState:Cn.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?qg:Lh),n}function Gc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ol(n);if(n.$$typeof===R)return Jn(n)}throw Error(a(438,String(n)))}function Sh(n){var i=null,r=Et.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var c=Et.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Hc(),Et.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(n),c=0;c<n;c++)r[c]=N;return i.index++,r}function Na(n,i){return typeof i=="function"?i(n):i}function Vc(n){var i=Tn();return Mh(i,tn,n)}function Mh(n,i,r){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=r;var p=n.baseQueue,m=c.pending;if(m!==null){if(p!==null){var b=p.next;p.next=m.next,m.next=b}i.baseQueue=p=m,c.pending=null}if(m=n.baseState,p===null)n.memoizedState=m;else{i=p.next;var C=b=null,X=null,oe=i,Me=!1;do{var Ce=oe.lane&-536870913;if(Ce!==oe.lane?(zt&Ce)===Ce:(Da&Ce)===Ce){var fe=oe.revertLane;if(fe===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Ce===Pr&&(Me=!0);else if((Da&fe)===fe){oe=oe.next,fe===Pr&&(Me=!0);continue}else Ce={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},X===null?(C=X=Ce,b=m):X=X.next=Ce,Et.lanes|=fe,ms|=fe;Ce=oe.action,Js&&r(m,Ce),m=oe.hasEagerState?oe.eagerState:r(m,Ce)}else fe={lane:Ce,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},X===null?(C=X=fe,b=m):X=X.next=fe,Et.lanes|=Ce,ms|=Ce;oe=oe.next}while(oe!==null&&oe!==i);if(X===null?b=m:X.next=C,!yi(m,n.memoizedState)&&(Dn=!0,Me&&(r=Or,r!==null)))throw r;n.memoizedState=m,n.baseState=b,n.baseQueue=X,c.lastRenderedState=m}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function bh(n){var i=Tn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var c=r.dispatch,p=r.pending,m=i.memoizedState;if(p!==null){r.pending=null;var b=p=p.next;do m=n(m,b.action),b=b.next;while(b!==p);yi(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,c]}function hg(n,i,r){var c=Et,p=Tn(),m=Gt;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!yi((tn||p).memoizedState,r);if(b&&(p.memoizedState=r,Dn=!0),p=p.queue,Ah(mg.bind(null,c,p,n),[n]),p.getSnapshot!==i||b||Cn!==null&&Cn.memoizedState.tag&1){if(c.flags|=2048,Gr(9,{destroy:void 0},pg.bind(null,c,p,r,i),null),rn===null)throw Error(a(349));m||(Da&127)!==0||dg(c,i,r)}return r}function dg(n,i,r){n.flags|=16384,n={getSnapshot:i,value:r},i=Et.updateQueue,i===null?(i=Hc(),Et.updateQueue=i,i.stores=[n]):(r=i.stores,r===null?i.stores=[n]:r.push(n))}function pg(n,i,r,c){i.value=r,i.getSnapshot=c,gg(i)&&vg(n)}function mg(n,i,r){return r(function(){gg(i)&&vg(n)})}function gg(n){var i=n.getSnapshot;n=n.value;try{var r=i();return!yi(n,r)}catch{return!0}}function vg(n){var i=Vs(n,2);i!==null&&mi(i,n,2)}function Th(n){var i=si();if(typeof n=="function"){var r=n;if(n=r(),Js){We(!0);try{r()}finally{We(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:n},i}function _g(n,i,r,c){return n.baseState=r,Mh(n,tn,typeof c=="function"?c:Na)}function bM(n,i,r,c,p){if(Wc(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};H.T!==null?r(!0):m.isTransition=!1,c(m),r=i.pending,r===null?(m.next=i.pending=m,xg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function xg(n,i){var r=i.action,c=i.payload,p=n.state;if(i.isTransition){var m=H.T,b={};H.T=b;try{var C=r(p,c),X=H.S;X!==null&&X(b,C),yg(n,i,C)}catch(oe){Eh(n,i,oe)}finally{m!==null&&b.types!==null&&(m.types=b.types),H.T=m}}else try{m=r(p,c),yg(n,i,m)}catch(oe){Eh(n,i,oe)}}function yg(n,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){Sg(n,i,c)},function(c){return Eh(n,i,c)}):Sg(n,i,r)}function Sg(n,i,r){i.status="fulfilled",i.value=r,Mg(i),n.state=r,i=n.pending,i!==null&&(r=i.next,r===i?n.pending=null:(r=r.next,i.next=r,xg(n,r)))}function Eh(n,i,r){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=r,Mg(i),i=i.next;while(i!==c)}n.action=null}function Mg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function bg(n,i){return i}function Tg(n,i){if(Gt){var r=rn.formState;if(r!==null){e:{var c=Et;if(Gt){if(cn){t:{for(var p=cn,m=zi;p.nodeType!==8;){if(!m){p=null;break t}if(p=Fi(p.nextSibling),p===null){p=null;break t}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){cn=Fi(p.nextSibling),c=p.data==="F!";break e}}rs(c)}c=!1}c&&(i=r[0])}}return r=si(),r.memoizedState=r.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bg,lastRenderedState:i},r.queue=c,r=kg.bind(null,Et,c),c.dispatch=r,c=Th(!1),m=Nh.bind(null,Et,!1,c.queue),c=si(),p={state:i,dispatch:null,action:n,pending:null},c.queue=p,r=bM.bind(null,Et,p,m,r),p.dispatch=r,c.memoizedState=n,[i,r,!1]}function Eg(n){var i=Tn();return Ag(i,tn,n)}function Ag(n,i,r){if(i=Mh(n,i,bg)[0],n=Vc(Na)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=ol(i)}catch(b){throw b===Ir?Lc:b}else c=i;i=Tn();var p=i.queue,m=p.dispatch;return r!==i.memoizedState&&(Et.flags|=2048,Gr(9,{destroy:void 0},TM.bind(null,p,r),null)),[c,m,n]}function TM(n,i){n.action=i}function wg(n){var i=Tn(),r=tn;if(r!==null)return Ag(i,r,n);Tn(),i=i.memoizedState,r=Tn();var c=r.queue.dispatch;return r.memoizedState=n,[i,c,!1]}function Gr(n,i,r,c){return n={tag:n,create:r,deps:c,inst:i,next:null},i=Et.updateQueue,i===null&&(i=Hc(),Et.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=n.next=n:(c=r.next,r.next=n,n.next=c,i.lastEffect=n),n}function Rg(){return Tn().memoizedState}function kc(n,i,r,c){var p=si();Et.flags|=n,p.memoizedState=Gr(1|i,{destroy:void 0},r,c===void 0?null:c)}function Xc(n,i,r,c){var p=Tn();c=c===void 0?null:c;var m=p.memoizedState.inst;tn!==null&&c!==null&&gh(c,tn.memoizedState.deps)?p.memoizedState=Gr(i,m,r,c):(Et.flags|=n,p.memoizedState=Gr(1|i,m,r,c))}function Cg(n,i){kc(8390656,8,n,i)}function Ah(n,i){Xc(2048,8,n,i)}function EM(n){Et.flags|=4;var i=Et.updateQueue;if(i===null)i=Hc(),Et.updateQueue=i,i.events=[n];else{var r=i.events;r===null?i.events=[n]:r.push(n)}}function Dg(n){var i=Tn().memoizedState;return EM({ref:i,nextImpl:n}),function(){if((jt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Ng(n,i){return Xc(4,2,n,i)}function Lg(n,i){return Xc(4,4,n,i)}function Ug(n,i){if(typeof i=="function"){n=n();var r=i(n);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Pg(n,i,r){r=r!=null?r.concat([n]):null,Xc(4,4,Ug.bind(null,i,n),r)}function wh(){}function Og(n,i){var r=Tn();i=i===void 0?null:i;var c=r.memoizedState;return i!==null&&gh(i,c[1])?c[0]:(r.memoizedState=[n,i],n)}function Ig(n,i){var r=Tn();i=i===void 0?null:i;var c=r.memoizedState;if(i!==null&&gh(i,c[1]))return c[0];if(c=n(),Js){We(!0);try{n()}finally{We(!1)}}return r.memoizedState=[c,i],c}function Rh(n,i,r){return r===void 0||(Da&1073741824)!==0&&(zt&261930)===0?n.memoizedState=i:(n.memoizedState=r,n=zv(),Et.lanes|=n,ms|=n,r)}function zg(n,i,r,c){return yi(r,i)?r:Br.current!==null?(n=Rh(n,r,c),yi(n,i)||(Dn=!0),n):(Da&42)===0||(Da&1073741824)!==0&&(zt&261930)===0?(Dn=!0,n.memoizedState=r):(n=zv(),Et.lanes|=n,ms|=n,i)}function Bg(n,i,r,c,p){var m=k.p;k.p=m!==0&&8>m?m:8;var b=H.T,C={};H.T=C,Nh(n,!1,i,r);try{var X=p(),oe=H.S;if(oe!==null&&oe(C,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Me=yM(X,c);ll(n,i,Me,Ai(n))}else ll(n,i,c,Ai(n))}catch(Ce){ll(n,i,{then:function(){},status:"rejected",reason:Ce},Ai())}finally{k.p=m,b!==null&&C.types!==null&&(b.types=C.types),H.T=b}}function AM(){}function Ch(n,i,r,c){if(n.tag!==5)throw Error(a(476));var p=Fg(n).queue;Bg(n,p,i,ae,r===null?AM:function(){return Hg(n),r(c)})}function Fg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:ae},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:r},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Hg(n){var i=Fg(n);i.next===null&&(i=n.alternate.memoizedState),ll(n,i.next.queue,{},Ai())}function Dh(){return Jn(El)}function Gg(){return Tn().memoizedState}function Vg(){return Tn().memoizedState}function wM(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ai();n=cs(r);var c=us(i,n,r);c!==null&&(mi(c,i,r),il(c,i,r)),i={cache:sh()},n.payload=i;return}i=i.return}}function RM(n,i,r){var c=Ai();r={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Wc(n)?Xg(i,r):(r=Yf(n,i,r,c),r!==null&&(mi(r,n,c),Wg(r,i,c)))}function kg(n,i,r){var c=Ai();ll(n,i,r,c)}function ll(n,i,r,c){var p={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wc(n))Xg(i,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,C=m(b,r);if(p.hasEagerState=!0,p.eagerState=C,yi(C,b))return Ec(n,i,p,0),rn===null&&Tc(),!1}catch{}finally{}if(r=Yf(n,i,p,c),r!==null)return mi(r,n,c),Wg(r,i,c),!0}return!1}function Nh(n,i,r,c){if(c={lane:2,revertLane:cd(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Wc(n)){if(i)throw Error(a(479))}else i=Yf(n,r,c,2),i!==null&&mi(i,n,2)}function Wc(n){var i=n.alternate;return n===Et||i!==null&&i===Et}function Xg(n,i){Fr=Bc=!0;var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}function Wg(n,i,r){if((r&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,r|=c,i.lanes=r,Nt(n,r)}}var cl={readContext:Jn,use:Gc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};cl.useEffectEvent=Sn;var qg={readContext:Jn,use:Gc,useCallback:function(n,i){return si().memoizedState=[n,i===void 0?null:i],n},useContext:Jn,useEffect:Cg,useImperativeHandle:function(n,i,r){r=r!=null?r.concat([n]):null,kc(4194308,4,Ug.bind(null,i,n),r)},useLayoutEffect:function(n,i){return kc(4194308,4,n,i)},useInsertionEffect:function(n,i){kc(4,2,n,i)},useMemo:function(n,i){var r=si();i=i===void 0?null:i;var c=n();if(Js){We(!0);try{n()}finally{We(!1)}}return r.memoizedState=[c,i],c},useReducer:function(n,i,r){var c=si();if(r!==void 0){var p=r(i);if(Js){We(!0);try{r(i)}finally{We(!1)}}}else p=i;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=RM.bind(null,Et,n),[c.memoizedState,n]},useRef:function(n){var i=si();return n={current:n},i.memoizedState=n},useState:function(n){n=Th(n);var i=n.queue,r=kg.bind(null,Et,i);return i.dispatch=r,[n.memoizedState,r]},useDebugValue:wh,useDeferredValue:function(n,i){var r=si();return Rh(r,n,i)},useTransition:function(){var n=Th(!1);return n=Bg.bind(null,Et,n.queue,!0,!1),si().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,r){var c=Et,p=si();if(Gt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),rn===null)throw Error(a(349));(zt&127)!==0||dg(c,i,r)}p.memoizedState=r;var m={value:r,getSnapshot:i};return p.queue=m,Cg(mg.bind(null,c,m,n),[n]),c.flags|=2048,Gr(9,{destroy:void 0},pg.bind(null,c,m,r,i),null),r},useId:function(){var n=si(),i=rn.identifierPrefix;if(Gt){var r=ca,c=la;r=(c&~(1<<32-ke(c)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Fc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=SM++,i="_"+i+"r_"+r.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Dh,useFormState:Tg,useActionState:Tg,useOptimistic:function(n){var i=si();i.memoizedState=i.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Nh.bind(null,Et,!0,r),r.dispatch=i,[n,i]},useMemoCache:Sh,useCacheRefresh:function(){return si().memoizedState=wM.bind(null,Et)},useEffectEvent:function(n){var i=si(),r={impl:n};return i.memoizedState=r,function(){if((jt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Lh={readContext:Jn,use:Gc,useCallback:Og,useContext:Jn,useEffect:Ah,useImperativeHandle:Pg,useInsertionEffect:Ng,useLayoutEffect:Lg,useMemo:Ig,useReducer:Vc,useRef:Rg,useState:function(){return Vc(Na)},useDebugValue:wh,useDeferredValue:function(n,i){var r=Tn();return zg(r,tn.memoizedState,n,i)},useTransition:function(){var n=Vc(Na)[0],i=Tn().memoizedState;return[typeof n=="boolean"?n:ol(n),i]},useSyncExternalStore:hg,useId:Gg,useHostTransitionStatus:Dh,useFormState:Eg,useActionState:Eg,useOptimistic:function(n,i){var r=Tn();return _g(r,tn,n,i)},useMemoCache:Sh,useCacheRefresh:Vg};Lh.useEffectEvent=Dg;var jg={readContext:Jn,use:Gc,useCallback:Og,useContext:Jn,useEffect:Ah,useImperativeHandle:Pg,useInsertionEffect:Ng,useLayoutEffect:Lg,useMemo:Ig,useReducer:bh,useRef:Rg,useState:function(){return bh(Na)},useDebugValue:wh,useDeferredValue:function(n,i){var r=Tn();return tn===null?Rh(r,n,i):zg(r,tn.memoizedState,n,i)},useTransition:function(){var n=bh(Na)[0],i=Tn().memoizedState;return[typeof n=="boolean"?n:ol(n),i]},useSyncExternalStore:hg,useId:Gg,useHostTransitionStatus:Dh,useFormState:wg,useActionState:wg,useOptimistic:function(n,i){var r=Tn();return tn!==null?_g(r,tn,n,i):(r.baseState=n,[n,r.queue.dispatch])},useMemoCache:Sh,useCacheRefresh:Vg};jg.useEffectEvent=Dg;function Uh(n,i,r,c){i=n.memoizedState,r=r(c,i),r=r==null?i:v({},i,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var Ph={enqueueSetState:function(n,i,r){n=n._reactInternals;var c=Ai(),p=cs(c);p.payload=i,r!=null&&(p.callback=r),i=us(n,p,c),i!==null&&(mi(i,n,c),il(i,n,c))},enqueueReplaceState:function(n,i,r){n=n._reactInternals;var c=Ai(),p=cs(c);p.tag=1,p.payload=i,r!=null&&(p.callback=r),i=us(n,p,c),i!==null&&(mi(i,n,c),il(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var r=Ai(),c=cs(r);c.tag=2,i!=null&&(c.callback=i),i=us(n,c,r),i!==null&&(mi(i,n,r),il(i,n,r))}};function Yg(n,i,r,c,p,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Zo(r,c)||!Zo(p,m):!0}function Zg(n,i,r,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,c),i.state!==n&&Ph.enqueueReplaceState(i,i.state,null)}function Qs(n,i){var r=i;if("ref"in i){r={};for(var c in i)c!=="ref"&&(r[c]=i[c])}if(n=n.defaultProps){r===i&&(r=v({},r));for(var p in n)r[p]===void 0&&(r[p]=n[p])}return r}function Kg(n){bc(n)}function Jg(n){console.error(n)}function Qg(n){bc(n)}function qc(n,i){try{var r=n.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function $g(n,i,r){try{var c=n.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Oh(n,i,r){return r=cs(r),r.tag=3,r.payload={element:null},r.callback=function(){qc(n,i)},r}function ev(n){return n=cs(n),n.tag=3,n}function tv(n,i,r,c){var p=r.type.getDerivedStateFromError;if(typeof p=="function"){var m=c.value;n.payload=function(){return p(m)},n.callback=function(){$g(i,r,c)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){$g(i,r,c),typeof p!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var C=c.stack;this.componentDidCatch(c.value,{componentStack:C!==null?C:""})})}function CM(n,i,r,c,p){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=r.alternate,i!==null&&Ur(i,r,p,!0),r=Mi.current,r!==null){switch(r.tag){case 31:case 13:return Bi===null?au():r.alternate===null&&Mn===0&&(Mn=3),r.flags&=-257,r.flags|=65536,r.lanes=p,c===Uc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([c]):i.add(c),rd(n,c,p)),!1;case 22:return r.flags|=65536,c===Uc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([c]):r.add(c)),rd(n,c,p)),!1}throw Error(a(435,r.tag))}return rd(n,c,p),au(),!1}if(Gt)return i=Mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==eh&&(n=Error(a(422),{cause:c}),Qo(Pi(n,r)))):(c!==eh&&(i=Error(a(423),{cause:c}),Qo(Pi(i,r))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=Pi(c,r),p=Oh(n.stateNode,c,p),fh(n,p),Mn!==4&&(Mn=2)),!1;var m=Error(a(520),{cause:c});if(m=Pi(m,r),vl===null?vl=[m]:vl.push(m),Mn!==4&&(Mn=2),i===null)return!0;c=Pi(c,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,n=p&-p,r.lanes|=n,n=Oh(r.stateNode,c,n),fh(r,n),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gs===null||!gs.has(m))))return r.flags|=65536,p&=-p,r.lanes|=p,p=ev(p),tv(p,n,r,c),fh(r,p),!1}r=r.return}while(r!==null);return!1}var Ih=Error(a(461)),Dn=!1;function Qn(n,i,r,c){i.child=n===null?sg(i,null,r,c):Ks(i,n.child,r,c)}function nv(n,i,r,c,p){r=r.render;var m=i.ref;if("ref"in c){var b={};for(var C in c)C!=="ref"&&(b[C]=c[C])}else b=c;return qs(i),c=vh(n,i,r,b,m,p),C=_h(),n!==null&&!Dn?(xh(n,i,p),La(n,i,p)):(Gt&&C&&Qf(i),i.flags|=1,Qn(n,i,c,p),i.child)}function iv(n,i,r,c,p){if(n===null){var m=r.type;return typeof m=="function"&&!Zf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,av(n,i,m,c,p)):(n=wc(r.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!Xh(n,p)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:Zo,r(b,c)&&n.ref===i.ref)return La(n,i,p)}return i.flags|=1,n=Aa(m,c),n.ref=i.ref,n.return=i,i.child=n}function av(n,i,r,c,p){if(n!==null){var m=n.memoizedProps;if(Zo(m,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,Xh(n,p))(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,La(n,i,p)}return zh(n,i,r,c,p)}function sv(n,i,r,c){var p=c.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,n!==null){for(c=i.child=n.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~m}else c=0,i.child=null;return rv(n,i,m,r,c)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Nc(i,m!==null?m.cachePool:null),m!==null?lg(i,m):dh(),cg(i);else return c=i.lanes=536870912,rv(n,i,m!==null?m.baseLanes|r:r,r,c)}else m!==null?(Nc(i,m.cachePool),lg(i,m),hs(),i.memoizedState=null):(n!==null&&Nc(i,null),dh(),hs());return Qn(n,i,p,r),i.child}function ul(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function rv(n,i,r,c,p){var m=oh();return m=m===null?null:{parent:Rn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},n!==null&&Nc(i,null),dh(),cg(i),n!==null&&Ur(n,i,c,!0),i.childLanes=p,null}function jc(n,i){return i=Zc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function ov(n,i,r){return Ks(i,n.child,null,r),n=jc(i,i.pendingProps),n.flags|=2,bi(i),i.memoizedState=null,n}function DM(n,i,r){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Gt){if(c.mode==="hidden")return n=jc(i,c),i.lanes=536870912,ul(null,n);if(mh(i),(n=cn)?(n=x_(n,zi),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:as!==null?{id:la,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},r=X0(n),r.return=i,i.child=r,Kn=i,cn=null)):n=null,n===null)throw rs(i);return i.lanes=536870912,null}return jc(i,c)}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(mh(i),p)if(i.flags&256)i.flags&=-257,i=ov(n,i,r);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(Dn||Ur(n,i,r,!1),p=(r&n.childLanes)!==0,Dn||p){if(c=rn,c!==null&&(b=Tt(c,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,Vs(n,b),mi(c,n,b),Ih;au(),i=ov(n,i,r)}else n=m.treeContext,cn=Fi(b.nextSibling),Kn=i,Gt=!0,ss=null,zi=!1,n!==null&&j0(i,n),i=jc(i,c),i.flags|=4096;return i}return n=Aa(n.child,{mode:c.mode,children:c.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Yc(n,i){var r=i.ref;if(r===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(n===null||n.ref!==r)&&(i.flags|=4194816)}}function zh(n,i,r,c,p){return qs(i),r=vh(n,i,r,c,void 0,p),c=_h(),n!==null&&!Dn?(xh(n,i,p),La(n,i,p)):(Gt&&c&&Qf(i),i.flags|=1,Qn(n,i,r,p),i.child)}function lv(n,i,r,c,p,m){return qs(i),i.updateQueue=null,r=fg(i,c,r,p),ug(n),c=_h(),n!==null&&!Dn?(xh(n,i,m),La(n,i,m)):(Gt&&c&&Qf(i),i.flags|=1,Qn(n,i,r,m),i.child)}function cv(n,i,r,c,p){if(qs(i),i.stateNode===null){var m=Cr,b=r.contextType;typeof b=="object"&&b!==null&&(m=Jn(b)),m=new r(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ph,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},ch(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?Jn(b):Cr,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Uh(i,r,b,c),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Ph.enqueueReplaceState(m,m.state,null),sl(i,c,m,p),al(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var C=i.memoizedProps,X=Qs(r,C);m.props=X;var oe=m.context,Me=r.contextType;b=Cr,typeof Me=="object"&&Me!==null&&(b=Jn(Me));var Ce=r.getDerivedStateFromProps;Me=typeof Ce=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,Me||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||oe!==b)&&Zg(i,m,c,b),ls=!1;var fe=i.memoizedState;m.state=fe,sl(i,c,m,p),al(),oe=i.memoizedState,C||fe!==oe||ls?(typeof Ce=="function"&&(Uh(i,r,Ce,c),oe=i.memoizedState),(X=ls||Yg(i,r,X,c,fe,oe,b))?(Me||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=oe),m.props=c,m.state=oe,m.context=b,c=X):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,uh(n,i),b=i.memoizedProps,Me=Qs(r,b),m.props=Me,Ce=i.pendingProps,fe=m.context,oe=r.contextType,X=Cr,typeof oe=="object"&&oe!==null&&(X=Jn(oe)),C=r.getDerivedStateFromProps,(oe=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==Ce||fe!==X)&&Zg(i,m,c,X),ls=!1,fe=i.memoizedState,m.state=fe,sl(i,c,m,p),al();var _e=i.memoizedState;b!==Ce||fe!==_e||ls||n!==null&&n.dependencies!==null&&Cc(n.dependencies)?(typeof C=="function"&&(Uh(i,r,C,c),_e=i.memoizedState),(Me=ls||Yg(i,r,Me,c,fe,_e,X)||n!==null&&n.dependencies!==null&&Cc(n.dependencies))?(oe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,_e,X),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,_e,X)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&fe===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&fe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=_e),m.props=c,m.state=_e,m.context=X,c=Me):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&fe===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&fe===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,Yc(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=Ks(i,n.child,null,p),i.child=Ks(i,null,r,p)):Qn(n,i,r,p),i.memoizedState=m.state,n=i.child):n=La(n,i,p),n}function uv(n,i,r,c){return Xs(),i.flags|=256,Qn(n,i,r,c),i.child}var Bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fh(n){return{baseLanes:n,cachePool:$0()}}function Hh(n,i,r){return n=n!==null?n.childLanes&~r:0,i&&(n|=Ei),n}function fv(n,i,r){var c=i.pendingProps,p=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(bn.current&2)!==0),b&&(p=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,n===null){if(Gt){if(p?fs(i):hs(),(n=cn)?(n=x_(n,zi),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:as!==null?{id:la,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},r=X0(n),r.return=i,i.child=r,Kn=i,cn=null)):n=null,n===null)throw rs(i);return Md(n)?i.lanes=32:i.lanes=536870912,null}var C=c.children;return c=c.fallback,p?(hs(),p=i.mode,C=Zc({mode:"hidden",children:C},p),c=ks(c,p,r,null),C.return=i,c.return=i,C.sibling=c,i.child=C,c=i.child,c.memoizedState=Fh(r),c.childLanes=Hh(n,b,r),i.memoizedState=Bh,ul(null,c)):(fs(i),Gh(i,C))}var X=n.memoizedState;if(X!==null&&(C=X.dehydrated,C!==null)){if(m)i.flags&256?(fs(i),i.flags&=-257,i=Vh(n,i,r)):i.memoizedState!==null?(hs(),i.child=n.child,i.flags|=128,i=null):(hs(),C=c.fallback,p=i.mode,c=Zc({mode:"visible",children:c.children},p),C=ks(C,p,r,null),C.flags|=2,c.return=i,C.return=i,c.sibling=C,i.child=c,Ks(i,n.child,null,r),c=i.child,c.memoizedState=Fh(r),c.childLanes=Hh(n,b,r),i.memoizedState=Bh,i=ul(null,c));else if(fs(i),Md(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var oe=b.dgst;b=oe,c=Error(a(419)),c.stack="",c.digest=b,Qo({value:c,source:null,stack:null}),i=Vh(n,i,r)}else if(Dn||Ur(n,i,r,!1),b=(r&n.childLanes)!==0,Dn||b){if(b=rn,b!==null&&(c=Tt(b,r),c!==0&&c!==X.retryLane))throw X.retryLane=c,Vs(n,c),mi(b,n,c),Ih;Sd(C)||au(),i=Vh(n,i,r)}else Sd(C)?(i.flags|=192,i.child=n.child,i=null):(n=X.treeContext,cn=Fi(C.nextSibling),Kn=i,Gt=!0,ss=null,zi=!1,n!==null&&j0(i,n),i=Gh(i,c.children),i.flags|=4096);return i}return p?(hs(),C=c.fallback,p=i.mode,X=n.child,oe=X.sibling,c=Aa(X,{mode:"hidden",children:c.children}),c.subtreeFlags=X.subtreeFlags&65011712,oe!==null?C=Aa(oe,C):(C=ks(C,p,r,null),C.flags|=2),C.return=i,c.return=i,c.sibling=C,i.child=c,ul(null,c),c=i.child,C=n.child.memoizedState,C===null?C=Fh(r):(p=C.cachePool,p!==null?(X=Rn._currentValue,p=p.parent!==X?{parent:X,pool:X}:p):p=$0(),C={baseLanes:C.baseLanes|r,cachePool:p}),c.memoizedState=C,c.childLanes=Hh(n,b,r),i.memoizedState=Bh,ul(n.child,c)):(fs(i),r=n.child,n=r.sibling,r=Aa(r,{mode:"visible",children:c.children}),r.return=i,r.sibling=null,n!==null&&(b=i.deletions,b===null?(i.deletions=[n],i.flags|=16):b.push(n)),i.child=r,i.memoizedState=null,r)}function Gh(n,i){return i=Zc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Zc(n,i){return n=Si(22,n,null,i),n.lanes=0,n}function Vh(n,i,r){return Ks(i,n.child,null,r),n=Gh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function hv(n,i,r){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ih(n.return,i,r)}function kh(n,i,r,c,p,m){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:p,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=r,b.tailMode=p,b.treeForkCount=m)}function dv(n,i,r){var c=i.pendingProps,p=c.revealOrder,m=c.tail;c=c.children;var b=bn.current,C=(b&2)!==0;if(C?(b=b&1|2,i.flags|=128):b&=1,ye(bn,b),Qn(n,i,c,r),c=Gt?Jo:0,!C&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hv(n,r,i);else if(n.tag===19)hv(n,r,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(r=i.child,p=null;r!==null;)n=r.alternate,n!==null&&zc(n)===null&&(p=r),r=r.sibling;r=p,r===null?(p=i.child,i.child=null):(p=r.sibling,r.sibling=null),kh(i,!1,p,r,m,c);break;case"backwards":case"unstable_legacy-backwards":for(r=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&zc(n)===null){i.child=p;break}n=p.sibling,p.sibling=r,r=p,p=n}kh(i,!0,r,null,m,c);break;case"together":kh(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function La(n,i,r){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(r&i.childLanes)===0)if(n!==null){if(Ur(n,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,r=Aa(n,n.pendingProps),i.child=r,r.return=i;n.sibling!==null;)n=n.sibling,r=r.sibling=Aa(n,n.pendingProps),r.return=i;r.sibling=null}return i.child}function Xh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Cc(n)))}function NM(n,i,r){switch(i.tag){case 3:He(i,i.stateNode.containerInfo),os(i,Rn,n.memoizedState.cache),Xs();break;case 27:case 5:Xe(i);break;case 4:He(i,i.stateNode.containerInfo);break;case 10:os(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,mh(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(fs(i),i.flags|=128,null):(r&i.child.childLanes)!==0?fv(n,i,r):(fs(i),n=La(n,i,r),n!==null?n.sibling:null);fs(i);break;case 19:var p=(n.flags&128)!==0;if(c=(r&i.childLanes)!==0,c||(Ur(n,i,r,!1),c=(r&i.childLanes)!==0),p){if(c)return dv(n,i,r);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ye(bn,bn.current),c)break;return null;case 22:return i.lanes=0,sv(n,i,r,i.pendingProps);case 24:os(i,Rn,n.memoizedState.cache)}return La(n,i,r)}function pv(n,i,r){if(n!==null)if(n.memoizedProps!==i.pendingProps)Dn=!0;else{if(!Xh(n,r)&&(i.flags&128)===0)return Dn=!1,NM(n,i,r);Dn=(n.flags&131072)!==0}else Dn=!1,Gt&&(i.flags&1048576)!==0&&q0(i,Jo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(n=Ys(i.elementType),i.type=n,typeof n=="function")Zf(n)?(c=Qs(n,c),i.tag=1,i=cv(null,i,n,c,r)):(i.tag=0,i=zh(null,i,n,c,r));else{if(n!=null){var p=n.$$typeof;if(p===w){i.tag=11,i=nv(null,i,n,c,r);break e}else if(p===O){i.tag=14,i=iv(null,i,n,c,r);break e}}throw i=ce(n)||n,Error(a(306,i,""))}}return i;case 0:return zh(n,i,i.type,i.pendingProps,r);case 1:return c=i.type,p=Qs(c,i.pendingProps),cv(n,i,c,p,r);case 3:e:{if(He(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;p=m.element,uh(n,i),sl(i,c,null,r);var b=i.memoizedState;if(c=b.cache,os(i,Rn,c),c!==m.cache&&ah(i,[Rn],r,!0),al(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=uv(n,i,c,r);break e}else if(c!==p){p=Pi(Error(a(424)),i),Qo(p),i=uv(n,i,c,r);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(cn=Fi(n.firstChild),Kn=i,Gt=!0,ss=null,zi=!0,r=sg(i,null,c,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Xs(),c===p){i=La(n,i,r);break e}Qn(n,i,c,r)}i=i.child}return i;case 26:return Yc(n,i),n===null?(r=E_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Gt||(r=i.type,n=i.pendingProps,c=fu(K.current).createElement(r),c[dn]=i,c[_n]=n,$n(c,r,n),D(c),i.stateNode=c):i.memoizedState=E_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Xe(i),n===null&&Gt&&(c=i.stateNode=M_(i.type,i.pendingProps,K.current),Kn=i,zi=!0,p=cn,ys(i.type)?(bd=p,cn=Fi(c.firstChild)):cn=p),Qn(n,i,i.pendingProps.children,r),Yc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Gt&&((p=c=cn)&&(c=ob(c,i.type,i.pendingProps,zi),c!==null?(i.stateNode=c,Kn=i,cn=Fi(c.firstChild),zi=!1,p=!0):p=!1),p||rs(i)),Xe(i),p=i.type,m=i.pendingProps,b=n!==null?n.memoizedProps:null,c=m.children,_d(p,m)?c=null:b!==null&&_d(p,b)&&(i.flags|=32),i.memoizedState!==null&&(p=vh(n,i,MM,null,null,r),El._currentValue=p),Yc(n,i),Qn(n,i,c,r),i.child;case 6:return n===null&&Gt&&((n=r=cn)&&(r=lb(r,i.pendingProps,zi),r!==null?(i.stateNode=r,Kn=i,cn=null,n=!0):n=!1),n||rs(i)),null;case 13:return fv(n,i,r);case 4:return He(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ks(i,null,c,r):Qn(n,i,c,r),i.child;case 11:return nv(n,i,i.type,i.pendingProps,r);case 7:return Qn(n,i,i.pendingProps,r),i.child;case 8:return Qn(n,i,i.pendingProps.children,r),i.child;case 12:return Qn(n,i,i.pendingProps.children,r),i.child;case 10:return c=i.pendingProps,os(i,i.type,c.value),Qn(n,i,c.children,r),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,qs(i),p=Jn(p),c=c(p),i.flags|=1,Qn(n,i,c,r),i.child;case 14:return iv(n,i,i.type,i.pendingProps,r);case 15:return av(n,i,i.type,i.pendingProps,r);case 19:return dv(n,i,r);case 31:return DM(n,i,r);case 22:return sv(n,i,r,i.pendingProps);case 24:return qs(i),c=Jn(Rn),n===null?(p=oh(),p===null&&(p=rn,m=sh(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=r),p=m),i.memoizedState={parent:c,cache:p},ch(i),os(i,Rn,p)):((n.lanes&r)!==0&&(uh(n,i),sl(i,null,null,r),al()),p=n.memoizedState,m=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),os(i,Rn,c)):(c=m.cache,os(i,Rn,c),c!==p.cache&&ah(i,[Rn],r,!0))),Qn(n,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ua(n){n.flags|=4}function Wh(n,i,r,c,p){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(Gv())n.flags|=8192;else throw Zs=Uc,lh}else n.flags&=-16777217}function mv(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!D_(i))if(Gv())n.flags|=8192;else throw Zs=Uc,lh}function Kc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ht():536870912,n.lanes|=i,Wr|=i)}function fl(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function un(n){var i=n.alternate!==null&&n.alternate.child===n.child,r=0,c=0;if(i)for(var p=n.child;p!==null;)r|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)r|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=r,i}function LM(n,i,r){var c=i.pendingProps;switch($f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return un(i),null;case 3:return r=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Ca(Rn),Pe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Lr(i)?Ua(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,th())),un(i),null;case 26:var p=i.type,m=i.memoizedState;return n===null?(Ua(i),m!==null?(un(i),mv(i,m)):(un(i),Wh(i,p,null,c,r))):m?m!==n.memoizedState?(Ua(i),un(i),mv(i,m)):(un(i),i.flags&=-16777217):(n=n.memoizedProps,n!==c&&Ua(i),un(i),Wh(i,p,n,c,r)),null;case 27:if(_t(i),r=K.current,p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Ua(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return un(i),null}n=Ue.current,Lr(i)?Y0(i):(n=M_(p,c,r),i.stateNode=n,Ua(i))}return un(i),null;case 5:if(_t(i),p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Ua(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return un(i),null}if(m=Ue.current,Lr(i))Y0(i);else{var b=fu(K.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?b.createElement("select",{is:c.is}):b.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?b.createElement(p,{is:c.is}):b.createElement(p)}}m[dn]=i,m[_n]=c;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;e:switch($n(m,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Ua(i)}}return un(i),Wh(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,r),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&Ua(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=K.current,Lr(i)){if(n=i.stateNode,r=i.memoizedProps,c=null,p=Kn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[dn]=i,n=!!(n.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||f_(n.nodeValue,r)),n||rs(i,!0)}else n=fu(n).createTextNode(c),n[dn]=i,i.stateNode=n}return un(i),null;case 31:if(r=i.memoizedState,n===null||n.memoizedState!==null){if(c=Lr(i),r!==null){if(n===null){if(!c)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[dn]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),n=!1}else r=th(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),n=!0;if(!n)return i.flags&256?(bi(i),i):(bi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return un(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=Lr(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[dn]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),p=!1}else p=th(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(bi(i),i):(bi(i),null)}return bi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=c!==null,n=n!==null&&n.memoizedState!==null,r&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==p&&(c.flags|=2048)),r!==n&&r&&(i.child.flags|=8192),Kc(i,i.updateQueue),un(i),null);case 4:return Pe(),n===null&&dd(i.stateNode.containerInfo),un(i),null;case 10:return Ca(i.type),un(i),null;case 19:if(ne(bn),c=i.memoizedState,c===null)return un(i),null;if(p=(i.flags&128)!==0,m=c.rendering,m===null)if(p)fl(c,!1);else{if(Mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=zc(n),m!==null){for(i.flags|=128,fl(c,!1),n=m.updateQueue,i.updateQueue=n,Kc(i,n),i.subtreeFlags=0,n=r,r=i.child;r!==null;)k0(r,n),r=r.sibling;return ye(bn,bn.current&1|2),Gt&&wa(i,c.treeForkCount),i.child}n=n.sibling}c.tail!==null&&E()>tu&&(i.flags|=128,p=!0,fl(c,!1),i.lanes=4194304)}else{if(!p)if(n=zc(m),n!==null){if(i.flags|=128,p=!0,n=n.updateQueue,i.updateQueue=n,Kc(i,n),fl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Gt)return un(i),null}else 2*E()-c.renderingStartTime>tu&&r!==536870912&&(i.flags|=128,p=!0,fl(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(n=c.last,n!==null?n.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=E(),n.sibling=null,r=bn.current,ye(bn,p?r&1|2:r&1),Gt&&wa(i,c.treeForkCount),n):(un(i),null);case 22:case 23:return bi(i),ph(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(r&536870912)!==0&&(i.flags&128)===0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),r=i.updateQueue,r!==null&&Kc(i,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048),n!==null&&ne(js),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ca(Rn),un(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function UM(n,i){switch($f(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ca(Rn),Pe(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return _t(i),null;case 31:if(i.memoizedState!==null){if(bi(i),i.alternate===null)throw Error(a(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(bi(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ne(bn),null;case 4:return Pe(),null;case 10:return Ca(i.type),null;case 22:case 23:return bi(i),ph(),n!==null&&ne(js),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Ca(Rn),null;case 25:return null;default:return null}}function gv(n,i){switch($f(i),i.tag){case 3:Ca(Rn),Pe();break;case 26:case 27:case 5:_t(i);break;case 4:Pe();break;case 31:i.memoizedState!==null&&bi(i);break;case 13:bi(i);break;case 19:ne(bn);break;case 10:Ca(i.type);break;case 22:case 23:bi(i),ph(),n!==null&&ne(js);break;case 24:Ca(Rn)}}function hl(n,i){try{var r=i.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var p=c.next;r=p;do{if((r.tag&n)===n){c=void 0;var m=r.create,b=r.inst;c=m(),b.destroy=c}r=r.next}while(r!==p)}}catch(C){Qt(i,i.return,C)}}function ds(n,i,r){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var m=p.next;c=m;do{if((c.tag&n)===n){var b=c.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,p=i;var X=r,oe=C;try{oe()}catch(Me){Qt(p,X,Me)}}}c=c.next}while(c!==m)}}catch(Me){Qt(i,i.return,Me)}}function vv(n){var i=n.updateQueue;if(i!==null){var r=n.stateNode;try{og(i,r)}catch(c){Qt(n,n.return,c)}}}function _v(n,i,r){r.props=Qs(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(c){Qt(n,i,c)}}function dl(n,i){try{var r=n.ref;if(r!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof r=="function"?n.refCleanup=r(c):r.current=c}}catch(p){Qt(n,i,p)}}function ua(n,i){var r=n.ref,c=n.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(p){Qt(n,i,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(p){Qt(n,i,p)}else r.current=null}function xv(n){var i=n.type,r=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break e;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(p){Qt(n,n.return,p)}}function qh(n,i,r){try{var c=n.stateNode;tb(c,n.type,r,i),c[_n]=i}catch(p){Qt(n,n.return,p)}}function yv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ys(n.type)||n.tag===4}function jh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ys(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yh(n,i,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(n,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(n),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Ta));else if(c!==4&&(c===27&&ys(n.type)&&(r=n.stateNode,i=null),n=n.child,n!==null))for(Yh(n,i,r),n=n.sibling;n!==null;)Yh(n,i,r),n=n.sibling}function Jc(n,i,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?r.insertBefore(n,i):r.appendChild(n);else if(c!==4&&(c===27&&ys(n.type)&&(r=n.stateNode),n=n.child,n!==null))for(Jc(n,i,r),n=n.sibling;n!==null;)Jc(n,i,r),n=n.sibling}function Sv(n){var i=n.stateNode,r=n.memoizedProps;try{for(var c=n.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);$n(i,c,r),i[dn]=n,i[_n]=r}catch(m){Qt(n,n.return,m)}}var Pa=!1,Nn=!1,Zh=!1,Mv=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function PM(n,i){if(n=n.containerInfo,gd=_u,n=P0(n),Vf(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else e:{r=(r=n.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var p=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var b=0,C=-1,X=-1,oe=0,Me=0,Ce=n,fe=null;t:for(;;){for(var _e;Ce!==r||p!==0&&Ce.nodeType!==3||(C=b+p),Ce!==m||c!==0&&Ce.nodeType!==3||(X=b+c),Ce.nodeType===3&&(b+=Ce.nodeValue.length),(_e=Ce.firstChild)!==null;)fe=Ce,Ce=_e;for(;;){if(Ce===n)break t;if(fe===r&&++oe===p&&(C=b),fe===m&&++Me===c&&(X=b),(_e=Ce.nextSibling)!==null)break;Ce=fe,fe=Ce.parentNode}Ce=_e}r=C===-1||X===-1?null:{start:C,end:X}}else r=null}r=r||{start:0,end:0}}else r=null;for(vd={focusedElem:n,selectionRange:r},_u=!1,Gn=i;Gn!==null;)if(i=Gn,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Gn=n;else for(;Gn!==null;){switch(i=Gn,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(r=0;r<n.length;r++)p=n[r],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,r=i,p=m.memoizedProps,m=m.memoizedState,c=r.stateNode;try{var nt=Qs(r.type,p);n=c.getSnapshotBeforeUpdate(nt,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(gt){Qt(r,r.return,gt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,r=n.nodeType,r===9)yd(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":yd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Gn=n;break}Gn=i.return}}function bv(n,i,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:Ia(n,r),c&4&&hl(5,r);break;case 1:if(Ia(n,r),c&4)if(n=r.stateNode,i===null)try{n.componentDidMount()}catch(b){Qt(r,r.return,b)}else{var p=Qs(r.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(p,i,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Qt(r,r.return,b)}}c&64&&vv(r),c&512&&dl(r,r.return);break;case 3:if(Ia(n,r),c&64&&(n=r.updateQueue,n!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{og(n,i)}catch(b){Qt(r,r.return,b)}}break;case 27:i===null&&c&4&&Sv(r);case 26:case 5:Ia(n,r),i===null&&c&4&&xv(r),c&512&&dl(r,r.return);break;case 12:Ia(n,r);break;case 31:Ia(n,r),c&4&&Av(n,r);break;case 13:Ia(n,r),c&4&&wv(n,r),c&64&&(n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(r=kM.bind(null,r),cb(n,r))));break;case 22:if(c=r.memoizedState!==null||Pa,!c){i=i!==null&&i.memoizedState!==null||Nn,p=Pa;var m=Nn;Pa=c,(Nn=i)&&!m?za(n,r,(r.subtreeFlags&8772)!==0):Ia(n,r),Pa=p,Nn=m}break;case 30:break;default:Ia(n,r)}}function Tv(n){var i=n.alternate;i!==null&&(n.alternate=null,Tv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Go(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var mn=null,fi=!1;function Oa(n,i,r){for(r=r.child;r!==null;)Ev(n,i,r),r=r.sibling}function Ev(n,i,r){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(j,r)}catch{}switch(r.tag){case 26:Nn||ua(r,i),Oa(n,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Nn||ua(r,i);var c=mn,p=fi;ys(r.type)&&(mn=r.stateNode,fi=!1),Oa(n,i,r),Ml(r.stateNode),mn=c,fi=p;break;case 5:Nn||ua(r,i);case 6:if(c=mn,p=fi,mn=null,Oa(n,i,r),mn=c,fi=p,mn!==null)if(fi)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(r.stateNode)}catch(m){Qt(r,i,m)}else try{mn.removeChild(r.stateNode)}catch(m){Qt(r,i,m)}break;case 18:mn!==null&&(fi?(n=mn,v_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,r.stateNode),$r(n)):v_(mn,r.stateNode));break;case 4:c=mn,p=fi,mn=r.stateNode.containerInfo,fi=!0,Oa(n,i,r),mn=c,fi=p;break;case 0:case 11:case 14:case 15:ds(2,r,i),Nn||ds(4,r,i),Oa(n,i,r);break;case 1:Nn||(ua(r,i),c=r.stateNode,typeof c.componentWillUnmount=="function"&&_v(r,i,c)),Oa(n,i,r);break;case 21:Oa(n,i,r);break;case 22:Nn=(c=Nn)||r.memoizedState!==null,Oa(n,i,r),Nn=c;break;default:Oa(n,i,r)}}function Av(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{$r(n)}catch(r){Qt(i,i.return,r)}}}function wv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{$r(n)}catch(r){Qt(i,i.return,r)}}function OM(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Mv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Mv),i;default:throw Error(a(435,n.tag))}}function Qc(n,i){var r=OM(n);i.forEach(function(c){if(!r.has(c)){r.add(c);var p=XM.bind(null,n,c);c.then(p,p)}})}function hi(n,i){var r=i.deletions;if(r!==null)for(var c=0;c<r.length;c++){var p=r[c],m=n,b=i,C=b;e:for(;C!==null;){switch(C.tag){case 27:if(ys(C.type)){mn=C.stateNode,fi=!1;break e}break;case 5:mn=C.stateNode,fi=!1;break e;case 3:case 4:mn=C.stateNode.containerInfo,fi=!0;break e}C=C.return}if(mn===null)throw Error(a(160));Ev(m,b,p),mn=null,fi=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Rv(i,n),i=i.sibling}var Ki=null;function Rv(n,i){var r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:hi(i,n),di(n),c&4&&(ds(3,n,n.return),hl(3,n),ds(5,n,n.return));break;case 1:hi(i,n),di(n),c&512&&(Nn||r===null||ua(r,r.return)),c&64&&Pa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var p=Ki;if(hi(i,n),di(n),c&512&&(Nn||r===null||ua(r,r.return)),c&4){var m=r!==null?r.memoizedState:null;if(c=n.memoizedState,r===null)if(c===null)if(n.stateNode===null){e:{c=n.type,r=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":m=p.getElementsByTagName("title")[0],(!m||m[zs]||m[dn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(c),p.head.insertBefore(m,p.querySelector("head > title"))),$n(m,c,r),m[dn]=n,D(m),c=m;break e;case"link":var b=R_("link","href",p).get(c+(r.href||""));if(b){for(var C=0;C<b.length;C++)if(m=b[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(C,1);break t}}m=p.createElement(c),$n(m,c,r),p.head.appendChild(m);break;case"meta":if(b=R_("meta","content",p).get(c+(r.content||""))){for(C=0;C<b.length;C++)if(m=b[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(C,1);break t}}m=p.createElement(c),$n(m,c,r),p.head.appendChild(m);break;default:throw Error(a(468,c))}m[dn]=n,D(m),c=m}n.stateNode=c}else C_(p,n.type,n.stateNode);else n.stateNode=w_(p,c,n.memoizedProps);else m!==c?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,c===null?C_(p,n.type,n.stateNode):w_(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&qh(n,n.memoizedProps,r.memoizedProps)}break;case 27:hi(i,n),di(n),c&512&&(Nn||r===null||ua(r,r.return)),r!==null&&c&4&&qh(n,n.memoizedProps,r.memoizedProps);break;case 5:if(hi(i,n),di(n),c&512&&(Nn||r===null||ua(r,r.return)),n.flags&32){p=n.stateNode;try{Un(p,"")}catch(nt){Qt(n,n.return,nt)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,qh(n,p,r!==null?r.memoizedProps:p)),c&1024&&(Zh=!0);break;case 6:if(hi(i,n),di(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,r=n.stateNode;try{r.nodeValue=c}catch(nt){Qt(n,n.return,nt)}}break;case 3:if(pu=null,p=Ki,Ki=hu(i.containerInfo),hi(i,n),Ki=p,di(n),c&4&&r!==null&&r.memoizedState.isDehydrated)try{$r(i.containerInfo)}catch(nt){Qt(n,n.return,nt)}Zh&&(Zh=!1,Cv(n));break;case 4:c=Ki,Ki=hu(n.stateNode.containerInfo),hi(i,n),di(n),Ki=c;break;case 12:hi(i,n),di(n);break;case 31:hi(i,n),di(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Qc(n,c)));break;case 13:hi(i,n),di(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(eu=E()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Qc(n,c)));break;case 22:p=n.memoizedState!==null;var X=r!==null&&r.memoizedState!==null,oe=Pa,Me=Nn;if(Pa=oe||p,Nn=Me||X,hi(i,n),Nn=Me,Pa=oe,di(n),c&8192)e:for(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(r===null||X||Pa||Nn||$s(n)),r=null,i=n;;){if(i.tag===5||i.tag===26){if(r===null){X=r=i;try{if(m=X.stateNode,p)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=X.stateNode;var Ce=X.memoizedProps.style,fe=Ce!=null&&Ce.hasOwnProperty("display")?Ce.display:null;C.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(nt){Qt(X,X.return,nt)}}}else if(i.tag===6){if(r===null){X=i;try{X.stateNode.nodeValue=p?"":X.memoizedProps}catch(nt){Qt(X,X.return,nt)}}}else if(i.tag===18){if(r===null){X=i;try{var _e=X.stateNode;p?__(_e,!0):__(X.stateNode,!1)}catch(nt){Qt(X,X.return,nt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,Qc(n,r))));break;case 19:hi(i,n),di(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Qc(n,c)));break;case 30:break;case 21:break;default:hi(i,n),di(n)}}function di(n){var i=n.flags;if(i&2){try{for(var r,c=n.return;c!==null;){if(yv(c)){r=c;break}c=c.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var p=r.stateNode,m=jh(n);Jc(n,m,p);break;case 5:var b=r.stateNode;r.flags&32&&(Un(b,""),r.flags&=-33);var C=jh(n);Jc(n,C,b);break;case 3:case 4:var X=r.stateNode.containerInfo,oe=jh(n);Yh(n,oe,X);break;default:throw Error(a(161))}}catch(Me){Qt(n,n.return,Me)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Cv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Cv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Ia(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)bv(n,i.alternate,i),i=i.sibling}function $s(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:ds(4,i,i.return),$s(i);break;case 1:ua(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&_v(i,i.return,r),$s(i);break;case 27:Ml(i.stateNode);case 26:case 5:ua(i,i.return),$s(i);break;case 22:i.memoizedState===null&&$s(i);break;case 30:$s(i);break;default:$s(i)}n=n.sibling}}function za(n,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=n,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:za(p,m,r),hl(4,m);break;case 1:if(za(p,m,r),c=m,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(oe){Qt(c,c.return,oe)}if(c=m,p=c.updateQueue,p!==null){var C=c.stateNode;try{var X=p.shared.hiddenCallbacks;if(X!==null)for(p.shared.hiddenCallbacks=null,p=0;p<X.length;p++)rg(X[p],C)}catch(oe){Qt(c,c.return,oe)}}r&&b&64&&vv(m),dl(m,m.return);break;case 27:Sv(m);case 26:case 5:za(p,m,r),r&&c===null&&b&4&&xv(m),dl(m,m.return);break;case 12:za(p,m,r);break;case 31:za(p,m,r),r&&b&4&&Av(p,m);break;case 13:za(p,m,r),r&&b&4&&wv(p,m);break;case 22:m.memoizedState===null&&za(p,m,r),dl(m,m.return);break;case 30:break;default:za(p,m,r)}i=i.sibling}}function Kh(n,i){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&$o(r))}function Jh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&$o(n))}function Ji(n,i,r,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Dv(n,i,r,c),i=i.sibling}function Dv(n,i,r,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:Ji(n,i,r,c),p&2048&&hl(9,i);break;case 1:Ji(n,i,r,c);break;case 3:Ji(n,i,r,c),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&$o(n)));break;case 12:if(p&2048){Ji(n,i,r,c),n=i.stateNode;try{var m=i.memoizedProps,b=m.id,C=m.onPostCommit;typeof C=="function"&&C(b,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(X){Qt(i,i.return,X)}}else Ji(n,i,r,c);break;case 31:Ji(n,i,r,c);break;case 13:Ji(n,i,r,c);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Ji(n,i,r,c):pl(n,i):m._visibility&2?Ji(n,i,r,c):(m._visibility|=2,Vr(n,i,r,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&Kh(b,i);break;case 24:Ji(n,i,r,c),p&2048&&Jh(i.alternate,i);break;default:Ji(n,i,r,c)}}function Vr(n,i,r,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,b=i,C=r,X=c,oe=b.flags;switch(b.tag){case 0:case 11:case 15:Vr(m,b,C,X,p),hl(8,b);break;case 23:break;case 22:var Me=b.stateNode;b.memoizedState!==null?Me._visibility&2?Vr(m,b,C,X,p):pl(m,b):(Me._visibility|=2,Vr(m,b,C,X,p)),p&&oe&2048&&Kh(b.alternate,b);break;case 24:Vr(m,b,C,X,p),p&&oe&2048&&Jh(b.alternate,b);break;default:Vr(m,b,C,X,p)}i=i.sibling}}function pl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=n,c=i,p=c.flags;switch(c.tag){case 22:pl(r,c),p&2048&&Kh(c.alternate,c);break;case 24:pl(r,c),p&2048&&Jh(c.alternate,c);break;default:pl(r,c)}i=i.sibling}}var ml=8192;function kr(n,i,r){if(n.subtreeFlags&ml)for(n=n.child;n!==null;)Nv(n,i,r),n=n.sibling}function Nv(n,i,r){switch(n.tag){case 26:kr(n,i,r),n.flags&ml&&n.memoizedState!==null&&Sb(r,Ki,n.memoizedState,n.memoizedProps);break;case 5:kr(n,i,r);break;case 3:case 4:var c=Ki;Ki=hu(n.stateNode.containerInfo),kr(n,i,r),Ki=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=ml,ml=16777216,kr(n,i,r),ml=c):kr(n,i,r));break;default:kr(n,i,r)}}function Lv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function gl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Gn=c,Pv(c,n)}Lv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Uv(n),n=n.sibling}function Uv(n){switch(n.tag){case 0:case 11:case 15:gl(n),n.flags&2048&&ds(9,n,n.return);break;case 3:gl(n);break;case 12:gl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,$c(n)):gl(n);break;default:gl(n)}}function $c(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Gn=c,Pv(c,n)}Lv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ds(8,i,i.return),$c(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,$c(i));break;default:$c(i)}n=n.sibling}}function Pv(n,i){for(;Gn!==null;){var r=Gn;switch(r.tag){case 0:case 11:case 15:ds(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:$o(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,Gn=c;else e:for(r=n;Gn!==null;){c=Gn;var p=c.sibling,m=c.return;if(Tv(c),c===r){Gn=null;break e}if(p!==null){p.return=m,Gn=p;break e}Gn=m}}}var IM={getCacheForType:function(n){var i=Jn(Rn),r=i.data.get(n);return r===void 0&&(r=n(),i.data.set(n,r)),r},cacheSignal:function(){return Jn(Rn).controller.signal}},zM=typeof WeakMap=="function"?WeakMap:Map,jt=0,rn=null,Ut=null,zt=0,Jt=0,Ti=null,ps=!1,Xr=!1,Qh=!1,Ba=0,Mn=0,ms=0,er=0,$h=0,Ei=0,Wr=0,vl=null,pi=null,ed=!1,eu=0,Ov=0,tu=1/0,nu=null,gs=null,Pn=0,vs=null,qr=null,Fa=0,td=0,nd=null,Iv=null,_l=0,id=null;function Ai(){return(jt&2)!==0&&zt!==0?zt&-zt:H.T!==null?cd():on()}function zv(){if(Ei===0)if((zt&536870912)===0||Gt){var n=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Ei=n}else Ei=536870912;return n=Mi.current,n!==null&&(n.flags|=32),Ei}function mi(n,i,r){(n===rn&&(Jt===2||Jt===9)||n.cancelPendingCommit!==null)&&(jr(n,0),_s(n,zt,Ei,!1)),Fe(n,r),((jt&2)===0||n!==rn)&&(n===rn&&((jt&2)===0&&(er|=r),Mn===4&&_s(n,zt,Ei,!1)),fa(n))}function Bv(n,i,r){if((jt&6)!==0)throw Error(a(327));var c=!r&&(i&127)===0&&(i&n.expiredLanes)===0||Be(n,i),p=c?HM(n,i):sd(n,i,!0),m=c;do{if(p===0){Xr&&!c&&_s(n,i,0,!1);break}else{if(r=n.current.alternate,m&&!BM(r)){p=sd(n,i,!1),m=!1;continue}if(p===2){if(m=i,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var C=n;p=vl;var X=C.current.memoizedState.isDehydrated;if(X&&(jr(C,b).flags|=256),b=sd(C,b,!1),b!==2){if(Qh&&!X){C.errorRecoveryDisabledLanes|=m,er|=m,p=4;break e}m=pi,pi=p,m!==null&&(pi===null?pi=m:pi.push.apply(pi,m))}p=b}if(m=!1,p!==2)continue}}if(p===1){jr(n,0),_s(n,i,0,!0);break}e:{switch(c=n,m=p,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:_s(c,i,Ei,!ps);break e;case 2:pi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=eu+300-E(),10<p)){if(_s(c,i,Ei,!ps),be(c,0,!0)!==0)break e;Fa=i,c.timeoutHandle=m_(Fv.bind(null,c,r,pi,nu,ed,i,Ei,er,Wr,ps,m,"Throttled",-0,0),p);break e}Fv(c,r,pi,nu,ed,i,Ei,er,Wr,ps,m,null,-0,0)}}break}while(!0);fa(n)}function Fv(n,i,r,c,p,m,b,C,X,oe,Me,Ce,fe,_e){if(n.timeoutHandle=-1,Ce=i.subtreeFlags,Ce&8192||(Ce&16785408)===16785408){Ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ta},Nv(i,m,Ce);var nt=(m&62914560)===m?eu-E():(m&4194048)===m?Ov-E():0;if(nt=Mb(Ce,nt),nt!==null){Fa=m,n.cancelPendingCommit=nt(jv.bind(null,n,i,m,r,c,p,b,C,X,Me,Ce,null,fe,_e)),_s(n,m,b,!oe);return}}jv(n,i,m,r,c,p,b,C,X)}function BM(n){for(var i=n;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var p=r[c],m=p.getSnapshot;p=p.value;try{if(!yi(m(),p))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _s(n,i,r,c){i&=~$h,i&=~er,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var p=i;0<p;){var m=31-ke(p),b=1<<m;c[m]=-1,p&=~b}r!==0&&yt(n,r,i)}function iu(){return(jt&6)===0?(xl(0),!1):!0}function ad(){if(Ut!==null){if(Jt===0)var n=Ut.return;else n=Ut,Ra=Ws=null,yh(n),zr=null,tl=0,n=Ut;for(;n!==null;)gv(n.alternate,n),n=n.return;Ut=null}}function jr(n,i){var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,ab(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),Fa=0,ad(),rn=n,Ut=r=Aa(n.current,null),zt=i,Jt=0,Ti=null,ps=!1,Xr=Be(n,i),Qh=!1,Wr=Ei=$h=er=ms=Mn=0,pi=vl=null,ed=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var p=31-ke(c),m=1<<p;i|=n[p],c&=~m}return Ba=i,Tc(),r}function Hv(n,i){Et=null,H.H=cl,i===Ir||i===Lc?(i=ng(),Jt=3):i===lh?(i=ng(),Jt=4):Jt=i===Ih?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ti=i,Ut===null&&(Mn=1,qc(n,Pi(i,n.current)))}function Gv(){var n=Mi.current;return n===null?!0:(zt&4194048)===zt?Bi===null:(zt&62914560)===zt||(zt&536870912)!==0?n===Bi:!1}function Vv(){var n=H.H;return H.H=cl,n===null?cl:n}function kv(){var n=H.A;return H.A=IM,n}function au(){Mn=4,ps||(zt&4194048)!==zt&&Mi.current!==null||(Xr=!0),(ms&134217727)===0&&(er&134217727)===0||rn===null||_s(rn,zt,Ei,!1)}function sd(n,i,r){var c=jt;jt|=2;var p=Vv(),m=kv();(rn!==n||zt!==i)&&(nu=null,jr(n,i)),i=!1;var b=Mn;e:do try{if(Jt!==0&&Ut!==null){var C=Ut,X=Ti;switch(Jt){case 8:ad(),b=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(i=!0);var oe=Jt;if(Jt=0,Ti=null,Yr(n,C,X,oe),r&&Xr){b=0;break e}break;default:oe=Jt,Jt=0,Ti=null,Yr(n,C,X,oe)}}FM(),b=Mn;break}catch(Me){Hv(n,Me)}while(!0);return i&&n.shellSuspendCounter++,Ra=Ws=null,jt=c,H.H=p,H.A=m,Ut===null&&(rn=null,zt=0,Tc()),b}function FM(){for(;Ut!==null;)Xv(Ut)}function HM(n,i){var r=jt;jt|=2;var c=Vv(),p=kv();rn!==n||zt!==i?(nu=null,tu=E()+500,jr(n,i)):Xr=Be(n,i);e:do try{if(Jt!==0&&Ut!==null){i=Ut;var m=Ti;t:switch(Jt){case 1:Jt=0,Ti=null,Yr(n,i,m,1);break;case 2:case 9:if(eg(m)){Jt=0,Ti=null,Wv(i);break}i=function(){Jt!==2&&Jt!==9||rn!==n||(Jt=7),fa(n)},m.then(i,i);break e;case 3:Jt=7;break e;case 4:Jt=5;break e;case 7:eg(m)?(Jt=0,Ti=null,Wv(i)):(Jt=0,Ti=null,Yr(n,i,m,7));break;case 5:var b=null;switch(Ut.tag){case 26:b=Ut.memoizedState;case 5:case 27:var C=Ut;if(b?D_(b):C.stateNode.complete){Jt=0,Ti=null;var X=C.sibling;if(X!==null)Ut=X;else{var oe=C.return;oe!==null?(Ut=oe,su(oe)):Ut=null}break t}}Jt=0,Ti=null,Yr(n,i,m,5);break;case 6:Jt=0,Ti=null,Yr(n,i,m,6);break;case 8:ad(),Mn=6;break e;default:throw Error(a(462))}}GM();break}catch(Me){Hv(n,Me)}while(!0);return Ra=Ws=null,H.H=c,H.A=p,jt=r,Ut!==null?0:(rn=null,zt=0,Tc(),Mn)}function GM(){for(;Ut!==null&&!Ve();)Xv(Ut)}function Xv(n){var i=pv(n.alternate,n,Ba);n.memoizedProps=n.pendingProps,i===null?su(n):Ut=i}function Wv(n){var i=n,r=i.alternate;switch(i.tag){case 15:case 0:i=lv(r,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=lv(r,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:yh(i);default:gv(r,i),i=Ut=k0(i,Ba),i=pv(r,i,Ba)}n.memoizedProps=n.pendingProps,i===null?su(n):Ut=i}function Yr(n,i,r,c){Ra=Ws=null,yh(i),zr=null,tl=0;var p=i.return;try{if(CM(n,p,i,r,zt)){Mn=1,qc(n,Pi(r,n.current)),Ut=null;return}}catch(m){if(p!==null)throw Ut=p,m;Mn=1,qc(n,Pi(r,n.current)),Ut=null;return}i.flags&32768?(Gt||c===1?n=!0:Xr||(zt&536870912)!==0?n=!1:(ps=n=!0,(c===2||c===9||c===3||c===6)&&(c=Mi.current,c!==null&&c.tag===13&&(c.flags|=16384))),qv(i,n)):su(i)}function su(n){var i=n;do{if((i.flags&32768)!==0){qv(i,ps);return}n=i.return;var r=LM(i.alternate,i,Ba);if(r!==null){Ut=r;return}if(i=i.sibling,i!==null){Ut=i;return}Ut=i=n}while(i!==null);Mn===0&&(Mn=5)}function qv(n,i){do{var r=UM(n.alternate,n);if(r!==null){r.flags&=32767,Ut=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(n=n.sibling,n!==null)){Ut=n;return}Ut=n=r}while(n!==null);Mn=6,Ut=null}function jv(n,i,r,c,p,m,b,C,X){n.cancelPendingCommit=null;do ru();while(Pn!==0);if((jt&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=jf,Ke(n,r,m,b,C,X),n===rn&&(Ut=rn=null,zt=0),qr=i,vs=n,Fa=r,td=m,nd=p,Iv=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,WM(B,function(){return Qv(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=H.T,H.T=null,p=k.p,k.p=2,b=jt,jt|=4;try{PM(n,i,r)}finally{jt=b,k.p=p,H.T=c}}Pn=1,Yv(),Zv(),Kv()}}function Yv(){if(Pn===1){Pn=0;var n=vs,i=qr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var c=k.p;k.p=2;var p=jt;jt|=4;try{Rv(i,n);var m=vd,b=P0(n.containerInfo),C=m.focusedElem,X=m.selectionRange;if(b!==C&&C&&C.ownerDocument&&U0(C.ownerDocument.documentElement,C)){if(X!==null&&Vf(C)){var oe=X.start,Me=X.end;if(Me===void 0&&(Me=oe),"selectionStart"in C)C.selectionStart=oe,C.selectionEnd=Math.min(Me,C.value.length);else{var Ce=C.ownerDocument||document,fe=Ce&&Ce.defaultView||window;if(fe.getSelection){var _e=fe.getSelection(),nt=C.textContent.length,gt=Math.min(X.start,nt),an=X.end===void 0?gt:Math.min(X.end,nt);!_e.extend&&gt>an&&(b=an,an=gt,gt=b);var $=L0(C,gt),Z=L0(C,an);if($&&Z&&(_e.rangeCount!==1||_e.anchorNode!==$.node||_e.anchorOffset!==$.offset||_e.focusNode!==Z.node||_e.focusOffset!==Z.offset)){var re=Ce.createRange();re.setStart($.node,$.offset),_e.removeAllRanges(),gt>an?(_e.addRange(re),_e.extend(Z.node,Z.offset)):(re.setEnd(Z.node,Z.offset),_e.addRange(re))}}}}for(Ce=[],_e=C;_e=_e.parentNode;)_e.nodeType===1&&Ce.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ce.length;C++){var Ae=Ce[C];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}_u=!!gd,vd=gd=null}finally{jt=p,k.p=c,H.T=r}}n.current=i,Pn=2}}function Zv(){if(Pn===2){Pn=0;var n=vs,i=qr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var c=k.p;k.p=2;var p=jt;jt|=4;try{bv(n,i.alternate,i)}finally{jt=p,k.p=c,H.T=r}}Pn=3}}function Kv(){if(Pn===4||Pn===3){Pn=0,P();var n=vs,i=qr,r=Fa,c=Iv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pn=5:(Pn=0,qr=vs=null,Jv(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(gs=null),An(r),i=i.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(j,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=H.T,p=k.p,k.p=2,H.T=null;try{for(var m=n.onRecoverableError,b=0;b<c.length;b++){var C=c[b];m(C.value,{componentStack:C.stack})}}finally{H.T=i,k.p=p}}(Fa&3)!==0&&ru(),fa(n),p=n.pendingLanes,(r&261930)!==0&&(p&42)!==0?n===id?_l++:(_l=0,id=n):_l=0,xl(0)}}function Jv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,$o(i)))}function ru(){return Yv(),Zv(),Kv(),Qv()}function Qv(){if(Pn!==5)return!1;var n=vs,i=td;td=0;var r=An(Fa),c=H.T,p=k.p;try{k.p=32>r?32:r,H.T=null,r=nd,nd=null;var m=vs,b=Fa;if(Pn=0,qr=vs=null,Fa=0,(jt&6)!==0)throw Error(a(331));var C=jt;if(jt|=4,Uv(m.current),Dv(m,m.current,b,r),jt=C,xl(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(j,m)}catch{}return!0}finally{k.p=p,H.T=c,Jv(n,i)}}function $v(n,i,r){i=Pi(r,i),i=Oh(n.stateNode,i,2),n=us(n,i,2),n!==null&&(Fe(n,2),fa(n))}function Qt(n,i,r){if(n.tag===3)$v(n,n,r);else for(;i!==null;){if(i.tag===3){$v(i,n,r);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gs===null||!gs.has(c))){n=Pi(r,n),r=ev(2),c=us(i,r,2),c!==null&&(tv(r,c,i,n),Fe(c,2),fa(c));break}}i=i.return}}function rd(n,i,r){var c=n.pingCache;if(c===null){c=n.pingCache=new zM;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(r)||(Qh=!0,p.add(r),n=VM.bind(null,n,i,r),i.then(n,n))}function VM(n,i,r){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,rn===n&&(zt&r)===r&&(Mn===4||Mn===3&&(zt&62914560)===zt&&300>E()-eu?(jt&2)===0&&jr(n,0):$h|=r,Wr===zt&&(Wr=0)),fa(n)}function e_(n,i){i===0&&(i=Ht()),n=Vs(n,i),n!==null&&(Fe(n,i),fa(n))}function kM(n){var i=n.memoizedState,r=0;i!==null&&(r=i.retryLane),e_(n,r)}function XM(n,i){var r=0;switch(n.tag){case 31:case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(r=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),e_(n,r)}function WM(n,i){return Ze(n,i)}var ou=null,Zr=null,od=!1,lu=!1,ld=!1,xs=0;function fa(n){n!==Zr&&n.next===null&&(Zr===null?ou=Zr=n:Zr=Zr.next=n),lu=!0,od||(od=!0,jM())}function xl(n,i){if(!ld&&lu){ld=!0;do for(var r=!1,c=ou;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var m=0;else{var b=c.suspendedLanes,C=c.pingedLanes;m=(1<<31-ke(42|n)+1)-1,m&=p&~(b&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,a_(c,m))}else m=zt,m=be(c,c===rn?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Be(c,m)||(r=!0,a_(c,m));c=c.next}while(r);ld=!1}}function qM(){t_()}function t_(){lu=od=!1;var n=0;xs!==0&&ib()&&(n=xs);for(var i=E(),r=null,c=ou;c!==null;){var p=c.next,m=n_(c,i);m===0?(c.next=null,r===null?ou=p:r.next=p,p===null&&(Zr=r)):(r=c,(n!==0||(m&3)!==0)&&(lu=!0)),c=p}Pn!==0&&Pn!==5||xl(n),xs!==0&&(xs=0)}function n_(n,i){for(var r=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-ke(m),C=1<<b,X=p[b];X===-1?((C&r)===0||(C&c)!==0)&&(p[b]=dt(C,i)):X<=i&&(n.expiredLanes|=C),m&=~C}if(i=rn,r=zt,r=be(n,n===i?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,r===0||n===i&&(Jt===2||Jt===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&ot(c),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||Be(n,r)){if(i=r&-r,i===n.callbackPriority)return i;switch(c!==null&&ot(c),An(r)){case 2:case 8:r=he;break;case 32:r=B;break;case 268435456:r=de;break;default:r=B}return c=i_.bind(null,n),r=Ze(r,c),n.callbackPriority=i,n.callbackNode=r,i}return c!==null&&c!==null&&ot(c),n.callbackPriority=2,n.callbackNode=null,2}function i_(n,i){if(Pn!==0&&Pn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var r=n.callbackNode;if(ru()&&n.callbackNode!==r)return null;var c=zt;return c=be(n,n===rn?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(Bv(n,c,i),n_(n,E()),n.callbackNode!=null&&n.callbackNode===r?i_.bind(null,n):null)}function a_(n,i){if(ru())return null;Bv(n,i,!0)}function jM(){sb(function(){(jt&6)!==0?Ze(ve,qM):t_()})}function cd(){if(xs===0){var n=Pr;n===0&&(n=ze,ze<<=1,(ze&261888)===0&&(ze=256)),xs=n}return xs}function s_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:gc(""+n)}function r_(n,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,n.id&&r.setAttribute("form",n.id),i.parentNode.insertBefore(r,i),n=new FormData(n),r.parentNode.removeChild(r),n}function YM(n,i,r,c,p){if(i==="submit"&&r&&r.stateNode===p){var m=s_((p[_n]||null).action),b=c.submitter;b&&(i=(i=b[_n]||null)?s_(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var C=new yc("action","action",null,c,p);n.push({event:C,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(xs!==0){var X=b?r_(p,b):new FormData(p);Ch(r,{pending:!0,data:X,method:p.method,action:m},null,X)}}else typeof m=="function"&&(C.preventDefault(),X=b?r_(p,b):new FormData(p),Ch(r,{pending:!0,data:X,method:p.method,action:m},m,X))},currentTarget:p}]})}}for(var ud=0;ud<qf.length;ud++){var fd=qf[ud],ZM=fd.toLowerCase(),KM=fd[0].toUpperCase()+fd.slice(1);Zi(ZM,"on"+KM)}Zi(z0,"onAnimationEnd"),Zi(B0,"onAnimationIteration"),Zi(F0,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(hM,"onTransitionRun"),Zi(dM,"onTransitionStart"),Zi(pM,"onTransitionCancel"),Zi(H0,"onTransitionEnd"),ie("onMouseEnter",["mouseout","mouseover"]),ie("onMouseLeave",["mouseout","mouseover"]),ie("onPointerEnter",["pointerout","pointerover"]),ie("onPointerLeave",["pointerout","pointerover"]),ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function o_(n,i){i=(i&4)!==0;for(var r=0;r<n.length;r++){var c=n[r],p=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var C=c[b],X=C.instance,oe=C.currentTarget;if(C=C.listener,X!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=oe;try{m(p)}catch(Me){bc(Me)}p.currentTarget=null,m=X}else for(b=0;b<c.length;b++){if(C=c[b],X=C.instance,oe=C.currentTarget,C=C.listener,X!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=oe;try{m(p)}catch(Me){bc(Me)}p.currentTarget=null,m=X}}}}function Pt(n,i){var r=i[oa];r===void 0&&(r=i[oa]=new Set);var c=n+"__bubble";r.has(c)||(l_(i,n,2,!1),r.add(c))}function hd(n,i,r){var c=0;i&&(c|=4),l_(r,n,c,i)}var cu="_reactListening"+Math.random().toString(36).slice(2);function dd(n){if(!n[cu]){n[cu]=!0,Q.forEach(function(r){r!=="selectionchange"&&(JM.has(r)||hd(r,!1,n),hd(r,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[cu]||(i[cu]=!0,hd("selectionchange",!1,i))}}function l_(n,i,r,c){switch(z_(i)){case 2:var p=Eb;break;case 8:p=Ab;break;default:p=Rd}r=p.bind(null,i,r,n),p=void 0,!Uf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,r,{capture:!0,passive:p}):n.addEventListener(i,r,!0):p!==void 0?n.addEventListener(i,r,{passive:p}):n.addEventListener(i,r,!1)}function pd(n,i,r,c,p){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var C=c.stateNode.containerInfo;if(C===p)break;if(b===4)for(b=c.return;b!==null;){var X=b.tag;if((X===3||X===4)&&b.stateNode.containerInfo===p)return;b=b.return}for(;C!==null;){if(b=es(C),b===null)return;if(X=b.tag,X===5||X===6||X===26||X===27){c=m=b;continue e}C=C.parentNode}}c=c.return}d0(function(){var oe=m,Me=Nf(r),Ce=[];e:{var fe=G0.get(n);if(fe!==void 0){var _e=yc,nt=n;switch(n){case"keypress":if(_c(r)===0)break e;case"keydown":case"keyup":_e=XS;break;case"focusin":nt="focus",_e=zf;break;case"focusout":nt="blur",_e=zf;break;case"beforeblur":case"afterblur":_e=zf;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=LS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=jS;break;case z0:case B0:case F0:_e=OS;break;case H0:_e=ZS;break;case"scroll":case"scrollend":_e=DS;break;case"wheel":_e=JS;break;case"copy":case"cut":case"paste":_e=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=_0;break;case"toggle":case"beforetoggle":_e=$S}var gt=(i&4)!==0,an=!gt&&(n==="scroll"||n==="scrollend"),$=gt?fe!==null?fe+"Capture":null:fe;gt=[];for(var Z=oe,re;Z!==null;){var Ae=Z;if(re=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||re===null||$===null||(Ae=Vo(Z,$),Ae!=null&&gt.push(Sl(Z,Ae,re))),an)break;Z=Z.return}0<gt.length&&(fe=new _e(fe,nt,null,r,Me),Ce.push({event:fe,listeners:gt}))}}if((i&7)===0){e:{if(fe=n==="mouseover"||n==="pointerover",_e=n==="mouseout"||n==="pointerout",fe&&r!==Df&&(nt=r.relatedTarget||r.fromElement)&&(es(nt)||nt[yn]))break e;if((_e||fe)&&(fe=Me.window===Me?Me:(fe=Me.ownerDocument)?fe.defaultView||fe.parentWindow:window,_e?(nt=r.relatedTarget||r.toElement,_e=oe,nt=nt?es(nt):null,nt!==null&&(an=l(nt),gt=nt.tag,nt!==an||gt!==5&&gt!==27&&gt!==6)&&(nt=null)):(_e=null,nt=oe),_e!==nt)){if(gt=g0,Ae="onMouseLeave",$="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(gt=_0,Ae="onPointerLeave",$="onPointerEnter",Z="pointer"),an=_e==null?fe:Bs(_e),re=nt==null?fe:Bs(nt),fe=new gt(Ae,Z+"leave",_e,r,Me),fe.target=an,fe.relatedTarget=re,Ae=null,es(Me)===oe&&(gt=new gt($,Z+"enter",nt,r,Me),gt.target=re,gt.relatedTarget=an,Ae=gt),an=Ae,_e&&nt)t:{for(gt=QM,$=_e,Z=nt,re=0,Ae=$;Ae;Ae=gt(Ae))re++;Ae=0;for(var ft=Z;ft;ft=gt(ft))Ae++;for(;0<re-Ae;)$=gt($),re--;for(;0<Ae-re;)Z=gt(Z),Ae--;for(;re--;){if($===Z||Z!==null&&$===Z.alternate){gt=$;break t}$=gt($),Z=gt(Z)}gt=null}else gt=null;_e!==null&&c_(Ce,fe,_e,gt,!1),nt!==null&&an!==null&&c_(Ce,an,nt,gt,!0)}}e:{if(fe=oe?Bs(oe):window,_e=fe.nodeName&&fe.nodeName.toLowerCase(),_e==="select"||_e==="input"&&fe.type==="file")var Vt=A0;else if(T0(fe))if(w0)Vt=cM;else{Vt=oM;var rt=rM}else _e=fe.nodeName,!_e||_e.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?oe&&Yi(oe.elementType)&&(Vt=A0):Vt=lM;if(Vt&&(Vt=Vt(n,oe))){E0(Ce,Vt,r,Me);break e}rt&&rt(n,fe,oe),n==="focusout"&&oe&&fe.type==="number"&&oe.memoizedProps.value!=null&&qn(fe,"number",fe.value)}switch(rt=oe?Bs(oe):window,n){case"focusin":(T0(rt)||rt.contentEditable==="true")&&(Ar=rt,kf=oe,Ko=null);break;case"focusout":Ko=kf=Ar=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,O0(Ce,r,Me);break;case"selectionchange":if(fM)break;case"keydown":case"keyup":O0(Ce,r,Me)}var wt;if(Ff)e:{switch(n){case"compositionstart":var Bt="onCompositionStart";break e;case"compositionend":Bt="onCompositionEnd";break e;case"compositionupdate":Bt="onCompositionUpdate";break e}Bt=void 0}else Er?M0(n,r)&&(Bt="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(Bt="onCompositionStart");Bt&&(x0&&r.locale!=="ko"&&(Er||Bt!=="onCompositionStart"?Bt==="onCompositionEnd"&&Er&&(wt=p0()):(is=Me,Pf="value"in is?is.value:is.textContent,Er=!0)),rt=uu(oe,Bt),0<rt.length&&(Bt=new v0(Bt,n,null,r,Me),Ce.push({event:Bt,listeners:rt}),wt?Bt.data=wt:(wt=b0(r),wt!==null&&(Bt.data=wt)))),(wt=tM?nM(n,r):iM(n,r))&&(Bt=uu(oe,"onBeforeInput"),0<Bt.length&&(rt=new v0("onBeforeInput","beforeinput",null,r,Me),Ce.push({event:rt,listeners:Bt}),rt.data=wt)),YM(Ce,n,oe,r,Me)}o_(Ce,i)})}function Sl(n,i,r){return{instance:n,listener:i,currentTarget:r}}function uu(n,i){for(var r=i+"Capture",c=[];n!==null;){var p=n,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=Vo(n,r),p!=null&&c.unshift(Sl(n,p,m)),p=Vo(n,i),p!=null&&c.push(Sl(n,p,m))),n.tag===3)return c;n=n.return}return[]}function QM(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function c_(n,i,r,c,p){for(var m=i._reactName,b=[];r!==null&&r!==c;){var C=r,X=C.alternate,oe=C.stateNode;if(C=C.tag,X!==null&&X===c)break;C!==5&&C!==26&&C!==27||oe===null||(X=oe,p?(oe=Vo(r,m),oe!=null&&b.unshift(Sl(r,oe,X))):p||(oe=Vo(r,m),oe!=null&&b.push(Sl(r,oe,X)))),r=r.return}b.length!==0&&n.push({event:i,listeners:b})}var $M=/\r\n?/g,eb=/\u0000|\uFFFD/g;function u_(n){return(typeof n=="string"?n:""+n).replace($M,`
`).replace(eb,"")}function f_(n,i){return i=u_(i),u_(n)===i}function nn(n,i,r,c,p,m){switch(r){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Un(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Un(n,""+c);break;case"className":pt(n,"class",c);break;case"tabIndex":pt(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":pt(n,r,c);break;case"style":Mr(n,c,m);break;case"data":if(i!=="object"){pt(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||r!=="href")){n.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=gc(""+c),n.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&nn(n,i,"name",p.name,p,null),nn(n,i,"formEncType",p.formEncType,p,null),nn(n,i,"formMethod",p.formMethod,p,null),nn(n,i,"formTarget",p.formTarget,p,null)):(nn(n,i,"encType",p.encType,p,null),nn(n,i,"method",p.method,p,null),nn(n,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=gc(""+c),n.setAttribute(r,c);break;case"onClick":c!=null&&(n.onclick=Ta);break;case"onScroll":c!=null&&Pt("scroll",n);break;case"onScrollEnd":c!=null&&Pt("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=r}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}r=gc(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""+c):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":c===!0?n.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,c):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(r,c):n.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(r):n.setAttribute(r,c);break;case"popover":Pt("beforetoggle",n),Pt("toggle",n),at(n,"popover",c);break;case"xlinkActuate":st(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":st(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":st(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":st(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":st(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":st(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":st(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":st(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":st(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":at(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=RS.get(r)||r,at(n,r,c))}}function md(n,i,r,c,p,m){switch(r){case"style":Mr(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=r}}break;case"children":typeof c=="string"?Un(n,c):(typeof c=="number"||typeof c=="bigint")&&Un(n,""+c);break;case"onScroll":c!=null&&Pt("scroll",n);break;case"onScrollEnd":c!=null&&Pt("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!me.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(p=r.endsWith("Capture"),i=r.slice(2,p?r.length-7:void 0),m=n[_n]||null,m=m!=null?m[r]:null,typeof m=="function"&&n.removeEventListener(i,m,p),typeof c=="function")){typeof m!="function"&&m!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(i,c,p);break e}r in n?n[r]=c:c===!0?n.setAttribute(r,""):at(n,r,c)}}}function $n(n,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pt("error",n),Pt("load",n);var c=!1,p=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:nn(n,i,m,b,r,null)}}p&&nn(n,i,"srcSet",r.srcSet,r,null),c&&nn(n,i,"src",r.src,r,null);return;case"input":Pt("invalid",n);var C=m=b=p=null,X=null,oe=null;for(c in r)if(r.hasOwnProperty(c)){var Me=r[c];if(Me!=null)switch(c){case"name":p=Me;break;case"type":b=Me;break;case"checked":X=Me;break;case"defaultChecked":oe=Me;break;case"value":m=Me;break;case"defaultValue":C=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(a(137,i));break;default:nn(n,i,c,Me,r,null)}}ba(n,m,C,X,oe,b,p,!1);return;case"select":Pt("invalid",n),c=b=m=null;for(p in r)if(r.hasOwnProperty(p)&&(C=r[p],C!=null))switch(p){case"value":m=C;break;case"defaultValue":b=C;break;case"multiple":c=C;default:nn(n,i,p,C,r,null)}i=m,r=b,n.multiple=!!c,i!=null?Li(n,!!c,i,!1):r!=null&&Li(n,!!c,r,!0);return;case"textarea":Pt("invalid",n),m=p=c=null;for(b in r)if(r.hasOwnProperty(b)&&(C=r[b],C!=null))switch(b){case"value":c=C;break;case"defaultValue":p=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:nn(n,i,b,C,r,null)}jn(n,c,p,m);return;case"option":for(X in r)if(r.hasOwnProperty(X)&&(c=r[X],c!=null))switch(X){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:nn(n,i,X,c,r,null)}return;case"dialog":Pt("beforetoggle",n),Pt("toggle",n),Pt("cancel",n),Pt("close",n);break;case"iframe":case"object":Pt("load",n);break;case"video":case"audio":for(c=0;c<yl.length;c++)Pt(yl[c],n);break;case"image":Pt("error",n),Pt("load",n);break;case"details":Pt("toggle",n);break;case"embed":case"source":case"link":Pt("error",n),Pt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in r)if(r.hasOwnProperty(oe)&&(c=r[oe],c!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:nn(n,i,oe,c,r,null)}return;default:if(Yi(i)){for(Me in r)r.hasOwnProperty(Me)&&(c=r[Me],c!==void 0&&md(n,i,Me,c,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(c=r[C],c!=null&&nn(n,i,C,c,r,null))}function tb(n,i,r,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,b=null,C=null,X=null,oe=null,Me=null;for(_e in r){var Ce=r[_e];if(r.hasOwnProperty(_e)&&Ce!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":X=Ce;default:c.hasOwnProperty(_e)||nn(n,i,_e,null,c,Ce)}}for(var fe in c){var _e=c[fe];if(Ce=r[fe],c.hasOwnProperty(fe)&&(_e!=null||Ce!=null))switch(fe){case"type":m=_e;break;case"name":p=_e;break;case"checked":oe=_e;break;case"defaultChecked":Me=_e;break;case"value":b=_e;break;case"defaultValue":C=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,i));break;default:_e!==Ce&&nn(n,i,fe,_e,c,Ce)}}Wn(n,b,C,X,oe,Me,m,p);return;case"select":_e=b=C=fe=null;for(m in r)if(X=r[m],r.hasOwnProperty(m)&&X!=null)switch(m){case"value":break;case"multiple":_e=X;default:c.hasOwnProperty(m)||nn(n,i,m,null,c,X)}for(p in c)if(m=c[p],X=r[p],c.hasOwnProperty(p)&&(m!=null||X!=null))switch(p){case"value":fe=m;break;case"defaultValue":C=m;break;case"multiple":b=m;default:m!==X&&nn(n,i,p,m,c,X)}i=C,r=b,c=_e,fe!=null?Li(n,!!r,fe,!1):!!c!=!!r&&(i!=null?Li(n,!!r,i,!0):Li(n,!!r,r?[]:"",!1));return;case"textarea":_e=fe=null;for(C in r)if(p=r[C],r.hasOwnProperty(C)&&p!=null&&!c.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:nn(n,i,C,null,c,p)}for(b in c)if(p=c[b],m=r[b],c.hasOwnProperty(b)&&(p!=null||m!=null))switch(b){case"value":fe=p;break;case"defaultValue":_e=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==m&&nn(n,i,b,p,c,m)}Kt(n,fe,_e);return;case"option":for(var nt in r)if(fe=r[nt],r.hasOwnProperty(nt)&&fe!=null&&!c.hasOwnProperty(nt))switch(nt){case"selected":n.selected=!1;break;default:nn(n,i,nt,null,c,fe)}for(X in c)if(fe=c[X],_e=r[X],c.hasOwnProperty(X)&&fe!==_e&&(fe!=null||_e!=null))switch(X){case"selected":n.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:nn(n,i,X,fe,c,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in r)fe=r[gt],r.hasOwnProperty(gt)&&fe!=null&&!c.hasOwnProperty(gt)&&nn(n,i,gt,null,c,fe);for(oe in c)if(fe=c[oe],_e=r[oe],c.hasOwnProperty(oe)&&fe!==_e&&(fe!=null||_e!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:nn(n,i,oe,fe,c,_e)}return;default:if(Yi(i)){for(var an in r)fe=r[an],r.hasOwnProperty(an)&&fe!==void 0&&!c.hasOwnProperty(an)&&md(n,i,an,void 0,c,fe);for(Me in c)fe=c[Me],_e=r[Me],!c.hasOwnProperty(Me)||fe===_e||fe===void 0&&_e===void 0||md(n,i,Me,fe,c,_e);return}}for(var $ in r)fe=r[$],r.hasOwnProperty($)&&fe!=null&&!c.hasOwnProperty($)&&nn(n,i,$,null,c,fe);for(Ce in c)fe=c[Ce],_e=r[Ce],!c.hasOwnProperty(Ce)||fe===_e||fe==null&&_e==null||nn(n,i,Ce,fe,c,_e)}function h_(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nb(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,r=performance.getEntriesByType("resource"),c=0;c<r.length;c++){var p=r[c],m=p.transferSize,b=p.initiatorType,C=p.duration;if(m&&C&&h_(b)){for(b=0,C=p.responseEnd,c+=1;c<r.length;c++){var X=r[c],oe=X.startTime;if(oe>C)break;var Me=X.transferSize,Ce=X.initiatorType;Me&&h_(Ce)&&(X=X.responseEnd,b+=Me*(X<C?1:(C-oe)/(X-oe)))}if(--c,i+=8*(m+b)/(p.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var gd=null,vd=null;function fu(n){return n.nodeType===9?n:n.ownerDocument}function d_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function _d(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xd=null;function ib(){var n=window.event;return n&&n.type==="popstate"?n===xd?!1:(xd=n,!0):(xd=null,!1)}var m_=typeof setTimeout=="function"?setTimeout:void 0,ab=typeof clearTimeout=="function"?clearTimeout:void 0,g_=typeof Promise=="function"?Promise:void 0,sb=typeof queueMicrotask=="function"?queueMicrotask:typeof g_<"u"?function(n){return g_.resolve(null).then(n).catch(rb)}:m_;function rb(n){setTimeout(function(){throw n})}function ys(n){return n==="head"}function v_(n,i){var r=i,c=0;do{var p=r.nextSibling;if(n.removeChild(r),p&&p.nodeType===8)if(r=p.data,r==="/$"||r==="/&"){if(c===0){n.removeChild(p),$r(i);return}c--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")c++;else if(r==="html")Ml(n.ownerDocument.documentElement);else if(r==="head"){r=n.ownerDocument.head,Ml(r);for(var m=r.firstChild;m;){var b=m.nextSibling,C=m.nodeName;m[zs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&Ml(n.ownerDocument.body);r=p}while(r);$r(i)}function __(n,i){var r=n;n=0;do{var c=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(n===0)break;n--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||n++;r=c}while(r)}function yd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":yd(r),Go(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function ob(n,i,r,c){for(;n.nodeType===1;){var p=r;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[zs])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Fi(n.nextSibling),n===null)break}return null}function lb(n,i,r){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Fi(n.nextSibling),n===null))return null;return n}function x_(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=Fi(n.nextSibling),n===null))return null;return n}function Sd(n){return n.data==="$?"||n.data==="$~"}function Md(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function cb(n,i){var r=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||r.readyState!=="loading")i();else{var c=function(){i(),r.removeEventListener("DOMContentLoaded",c)};r.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Fi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var bd=null;function y_(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"||r==="/&"){if(i===0)return Fi(n.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}n=n.nextSibling}return null}function S_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return n;i--}else r!=="/$"&&r!=="/&"||i++}n=n.previousSibling}return null}function M_(n,i,r){switch(i=fu(r),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Ml(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Go(n)}var Hi=new Map,b_=new Set;function hu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ha=k.d;k.d={f:ub,r:fb,D:hb,C:db,L:pb,m:mb,X:vb,S:gb,M:_b};function ub(){var n=Ha.f(),i=iu();return n||i}function fb(n){var i=ts(n);i!==null&&i.tag===5&&i.type==="form"?Hg(i):Ha.r(n)}var Kr=typeof document>"u"?null:document;function T_(n,i,r){var c=Kr;if(c&&typeof i=="string"&&i){var p=St(i);p='link[rel="'+n+'"][href="'+p+'"]',typeof r=="string"&&(p+='[crossorigin="'+r+'"]'),b_.has(p)||(b_.add(p),n={rel:n,crossOrigin:r,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),$n(i,"link",n),D(i),c.head.appendChild(i)))}}function hb(n){Ha.D(n),T_("dns-prefetch",n,null)}function db(n,i){Ha.C(n,i),T_("preconnect",n,i)}function pb(n,i,r){Ha.L(n,i,r);var c=Kr;if(c&&n&&i){var p='link[rel="preload"][as="'+St(i)+'"]';i==="image"&&r&&r.imageSrcSet?(p+='[imagesrcset="'+St(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(p+='[imagesizes="'+St(r.imageSizes)+'"]')):p+='[href="'+St(n)+'"]';var m=p;switch(i){case"style":m=Jr(n);break;case"script":m=Qr(n)}Hi.has(m)||(n=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:n,as:i},r),Hi.set(m,n),c.querySelector(p)!==null||i==="style"&&c.querySelector(bl(m))||i==="script"&&c.querySelector(Tl(m))||(i=c.createElement("link"),$n(i,"link",n),D(i),c.head.appendChild(i)))}}function mb(n,i){Ha.m(n,i);var r=Kr;if(r&&n){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+St(c)+'"][href="'+St(n)+'"]',m=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Qr(n)}if(!Hi.has(m)&&(n=v({rel:"modulepreload",href:n},i),Hi.set(m,n),r.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Tl(m)))return}c=r.createElement("link"),$n(c,"link",n),D(c),r.head.appendChild(c)}}}function gb(n,i,r){Ha.S(n,i,r);var c=Kr;if(c&&n){var p=ns(c).hoistableStyles,m=Jr(n);i=i||"default";var b=p.get(m);if(!b){var C={loading:0,preload:null};if(b=c.querySelector(bl(m)))C.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},r),(r=Hi.get(m))&&Td(n,r);var X=b=c.createElement("link");D(X),$n(X,"link",n),X._p=new Promise(function(oe,Me){X.onload=oe,X.onerror=Me}),X.addEventListener("load",function(){C.loading|=1}),X.addEventListener("error",function(){C.loading|=2}),C.loading|=4,du(b,i,c)}b={type:"stylesheet",instance:b,count:1,state:C},p.set(m,b)}}}function vb(n,i){Ha.X(n,i);var r=Kr;if(r&&n){var c=ns(r).hoistableScripts,p=Qr(n),m=c.get(p);m||(m=r.querySelector(Tl(p)),m||(n=v({src:n,async:!0},i),(i=Hi.get(p))&&Ed(n,i),m=r.createElement("script"),D(m),$n(m,"link",n),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function _b(n,i){Ha.M(n,i);var r=Kr;if(r&&n){var c=ns(r).hoistableScripts,p=Qr(n),m=c.get(p);m||(m=r.querySelector(Tl(p)),m||(n=v({src:n,async:!0,type:"module"},i),(i=Hi.get(p))&&Ed(n,i),m=r.createElement("script"),D(m),$n(m,"link",n),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function E_(n,i,r,c){var p=(p=K.current)?hu(p):null;if(!p)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Jr(r.href),r=ns(p).hoistableStyles,c=r.get(i),c||(c={type:"style",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=Jr(r.href);var m=ns(p).hoistableStyles,b=m.get(n);if(b||(p=p.ownerDocument||p,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=p.querySelector(bl(n)))&&!m._p&&(b.instance=m,b.state.loading=5),Hi.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Hi.set(n,r),m||xb(p,n,r,b.state))),i&&c===null)throw Error(a(528,""));return b}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Qr(r),r=ns(p).hoistableScripts,c=r.get(i),c||(c={type:"script",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Jr(n){return'href="'+St(n)+'"'}function bl(n){return'link[rel="stylesheet"]['+n+"]"}function A_(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function xb(n,i,r,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),$n(i,"link",r),D(i),n.head.appendChild(i))}function Qr(n){return'[src="'+St(n)+'"]'}function Tl(n){return"script[async]"+n}function w_(n,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+St(r.href)+'"]');if(c)return i.instance=c,D(c),c;var p=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),D(c),$n(c,"style",p),du(c,r.precedence,n),i.instance=c;case"stylesheet":p=Jr(r.href);var m=n.querySelector(bl(p));if(m)return i.state.loading|=4,i.instance=m,D(m),m;c=A_(r),(p=Hi.get(p))&&Td(c,p),m=(n.ownerDocument||n).createElement("link"),D(m);var b=m;return b._p=new Promise(function(C,X){b.onload=C,b.onerror=X}),$n(m,"link",c),i.state.loading|=4,du(m,r.precedence,n),i.instance=m;case"script":return m=Qr(r.src),(p=n.querySelector(Tl(m)))?(i.instance=p,D(p),p):(c=r,(p=Hi.get(m))&&(c=v({},r),Ed(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),D(p),$n(p,"link",c),n.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,du(c,r.precedence,n));return i.instance}function du(n,i,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,m=p,b=0;b<c.length;b++){var C=c[b];if(C.dataset.precedence===i)m=C;else if(m!==p)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(n,i.firstChild))}function Td(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Ed(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var pu=null;function R_(n,i,r){if(pu===null){var c=new Map,p=pu=new Map;p.set(r,c)}else p=pu,c=p.get(r),c||(c=new Map,p.set(r,c));if(c.has(n))return c;for(c.set(n,null),r=r.getElementsByTagName(n),p=0;p<r.length;p++){var m=r[p];if(!(m[zs]||m[dn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=n+b;var C=c.get(b);C?C.push(m):c.set(b,[m])}}return c}function C_(n,i,r){n=n.ownerDocument||n,n.head.insertBefore(r,i==="title"?n.querySelector("head > title"):null)}function yb(n,i,r){if(r===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function D_(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Sb(n,i,r,c){if(r.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=Jr(c.href),m=i.querySelector(bl(p));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=mu.bind(n),i.then(n,n)),r.state.loading|=4,r.instance=m,D(m);return}m=i.ownerDocument||i,c=A_(c),(p=Hi.get(p))&&Td(c,p),m=m.createElement("link"),D(m);var b=m;b._p=new Promise(function(C,X){b.onload=C,b.onerror=X}),$n(m,"link",c),r.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(n.count++,r=mu.bind(n),i.addEventListener("load",r),i.addEventListener("error",r))}}var Ad=0;function Mb(n,i){return n.stylesheets&&n.count===0&&vu(n,n.stylesheets),0<n.count||0<n.imgCount?function(r){var c=setTimeout(function(){if(n.stylesheets&&vu(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&Ad===0&&(Ad=62500*nb());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&vu(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Ad?50:800)+i);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vu(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var gu=null;function vu(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,gu=new Map,i.forEach(bb,n),gu=null,mu.call(n))}function bb(n,i){if(!(i.state.loading&4)){var r=gu.get(n);if(r)var c=r.get(null);else{r=new Map,gu.set(n,r);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var b=p[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),c=b)}c&&r.set(null,c)}p=i.instance,b=p.getAttribute("data-precedence"),m=r.get(b)||c,m===c&&r.set(null,p),r.set(b,p),this.count++,c=mu.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),m?m.parentNode.insertBefore(p,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),i.state.loading|=4}}var El={$$typeof:R,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Tb(n,i,r,c,p,m,b,C,X){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function N_(n,i,r,c,p,m,b,C,X,oe,Me,Ce){return n=new Tb(n,i,r,b,X,oe,Me,Ce,C),i=1,m===!0&&(i|=24),m=Si(3,null,null,i),n.current=m,m.stateNode=n,i=sh(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:r,cache:i},ch(m),n}function L_(n){return n?(n=Cr,n):Cr}function U_(n,i,r,c,p,m){p=L_(p),c.context===null?c.context=p:c.pendingContext=p,c=cs(i),c.payload={element:r},m=m===void 0?null:m,m!==null&&(c.callback=m),r=us(n,c,i),r!==null&&(mi(r,n,i),il(r,n,i))}function P_(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<i?r:i}}function wd(n,i){P_(n,i),(n=n.alternate)&&P_(n,i)}function O_(n){if(n.tag===13||n.tag===31){var i=Vs(n,67108864);i!==null&&mi(i,n,67108864),wd(n,67108864)}}function I_(n){if(n.tag===13||n.tag===31){var i=Ai();i=En(i);var r=Vs(n,i);r!==null&&mi(r,n,i),wd(n,i)}}var _u=!0;function Eb(n,i,r,c){var p=H.T;H.T=null;var m=k.p;try{k.p=2,Rd(n,i,r,c)}finally{k.p=m,H.T=p}}function Ab(n,i,r,c){var p=H.T;H.T=null;var m=k.p;try{k.p=8,Rd(n,i,r,c)}finally{k.p=m,H.T=p}}function Rd(n,i,r,c){if(_u){var p=Cd(c);if(p===null)pd(n,i,c,xu,r),B_(n,c);else if(Rb(p,n,i,r,c))c.stopPropagation();else if(B_(n,c),i&4&&-1<wb.indexOf(n)){for(;p!==null;){var m=ts(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Le(m.pendingLanes);if(b!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var X=1<<31-ke(b);C.entanglements[1]|=X,b&=~X}fa(m),(jt&6)===0&&(tu=E()+500,xl(0))}}break;case 31:case 13:C=Vs(m,2),C!==null&&mi(C,m,2),iu(),wd(m,2)}if(m=Cd(c),m===null&&pd(n,i,c,xu,r),m===p)break;p=m}p!==null&&c.stopPropagation()}else pd(n,i,c,null,r)}}function Cd(n){return n=Nf(n),Dd(n)}var xu=null;function Dd(n){if(xu=null,n=es(n),n!==null){var i=l(n);if(i===null)n=null;else{var r=i.tag;if(r===13){if(n=u(i),n!==null)return n;n=null}else if(r===31){if(n=f(i),n!==null)return n;n=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return xu=n,null}function z_(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case ve:return 2;case he:return 8;case B:case ee:return 32;case de:return 268435456;default:return 32}default:return 32}}var Nd=!1,Ss=null,Ms=null,bs=null,Al=new Map,wl=new Map,Ts=[],wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B_(n,i){switch(n){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(i.pointerId)}}function Rl(n,i,r,c,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:r,eventSystemFlags:c,nativeEvent:m,targetContainers:[p]},i!==null&&(i=ts(i),i!==null&&O_(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Rb(n,i,r,c,p){switch(i){case"focusin":return Ss=Rl(Ss,n,i,r,c,p),!0;case"dragenter":return Ms=Rl(Ms,n,i,r,c,p),!0;case"mouseover":return bs=Rl(bs,n,i,r,c,p),!0;case"pointerover":var m=p.pointerId;return Al.set(m,Rl(Al.get(m)||null,n,i,r,c,p)),!0;case"gotpointercapture":return m=p.pointerId,wl.set(m,Rl(wl.get(m)||null,n,i,r,c,p)),!0}return!1}function F_(n){var i=es(n.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){n.blockedOn=i,vn(n.priority,function(){I_(r)});return}}else if(i===31){if(i=f(r),i!==null){n.blockedOn=i,vn(n.priority,function(){I_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yu(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var r=Cd(n.nativeEvent);if(r===null){r=n.nativeEvent;var c=new r.constructor(r.type,r);Df=c,r.target.dispatchEvent(c),Df=null}else return i=ts(r),i!==null&&O_(i),n.blockedOn=r,!1;i.shift()}return!0}function H_(n,i,r){yu(n)&&r.delete(i)}function Cb(){Nd=!1,Ss!==null&&yu(Ss)&&(Ss=null),Ms!==null&&yu(Ms)&&(Ms=null),bs!==null&&yu(bs)&&(bs=null),Al.forEach(H_),wl.forEach(H_)}function Su(n,i){n.blockedOn===i&&(n.blockedOn=null,Nd||(Nd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Cb)))}var Mu=null;function G_(n){Mu!==n&&(Mu=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Mu===n&&(Mu=null);for(var i=0;i<n.length;i+=3){var r=n[i],c=n[i+1],p=n[i+2];if(typeof c!="function"){if(Dd(c||r)===null)continue;break}var m=ts(r);m!==null&&(n.splice(i,3),i-=3,Ch(m,{pending:!0,data:p,method:r.method,action:c},c,p))}}))}function $r(n){function i(X){return Su(X,n)}Ss!==null&&Su(Ss,n),Ms!==null&&Su(Ms,n),bs!==null&&Su(bs,n),Al.forEach(i),wl.forEach(i);for(var r=0;r<Ts.length;r++){var c=Ts[r];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Ts.length&&(r=Ts[0],r.blockedOn===null);)F_(r),r.blockedOn===null&&Ts.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var p=r[c],m=r[c+1],b=p[_n]||null;if(typeof m=="function")b||G_(r);else if(b){var C=null;if(m&&m.hasAttribute("formAction")){if(p=m,b=m[_n]||null)C=b.formAction;else if(Dd(p)!==null)continue}else C=b.action;typeof C=="function"?r[c+1]=C:(r.splice(c,3),c-=3),G_(r)}}}function V_(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return p=b})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(r,20)}function r(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function Ld(n){this._internalRoot=n}bu.prototype.render=Ld.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,c=Ai();U_(r,c,n,i,null,null)},bu.prototype.unmount=Ld.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;U_(n.current,2,null,n,null,null),iu(),i[yn]=null}};function bu(n){this._internalRoot=n}bu.prototype.unstable_scheduleHydration=function(n){if(n){var i=on();n={blockedOn:null,target:n,priority:i};for(var r=0;r<Ts.length&&i!==0&&i<Ts[r].priority;r++);Ts.splice(r,0,n),r===0&&F_(n)}};var k_=e.version;if(k_!=="19.2.3")throw Error(a(527,k_,"19.2.3"));k.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=d(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var Db={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{j=Tu.inject(Db),Se=Tu}catch{}}return Dl.createRoot=function(n,i){if(!s(n))throw Error(a(299));var r=!1,c="",p=Kg,m=Jg,b=Qg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=N_(n,1,!1,null,null,r,c,null,p,m,b,V_),n[yn]=i.current,dd(n),new Ld(i)},Dl.hydrateRoot=function(n,i,r){if(!s(n))throw Error(a(299));var c=!1,p="",m=Kg,b=Jg,C=Qg,X=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(X=r.formState)),i=N_(n,1,!0,i,r??null,c,p,X,m,b,C,V_),i.context=L_(null),r=i.current,c=Ai(),c=En(c),p=cs(c),p.callback=null,us(r,p,c),r=c,i.current.lanes=r,Fe(i,r),fa(i),n[yn]=i.current,dd(n),new bu(i)},Dl.version="19.2.3",Dl}var $_;function Hb(){if($_)return Od.exports;$_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Od.exports=Fb(),Od.exports}var Gb=Hb();const Nm="182",Vb=0,ex=1,kb=2,of=1,Ry=2,Wl=3,Ja=0,ei=1,na=2,_a=0,Za=1,vi=2,tx=3,nx=4,Xb=5,ur=100,Wb=101,qb=102,jb=103,Yb=104,Zb=200,Kb=201,Jb=202,Qb=203,Ap=204,wp=205,$b=206,eT=207,tT=208,nT=209,iT=210,aT=211,sT=212,rT=213,oT=214,Rp=0,Cp=1,Dp=2,Eo=3,Np=4,Lp=5,Up=6,Pp=7,Cy=0,lT=1,cT=2,xa=0,Lm=1,Um=2,Pm=3,fc=4,Om=5,Im=6,zm=7,ix="attached",uT="detached",Dy=300,pr=301,Ao=302,Op=303,Ip=304,Mf=306,Os=1e3,ga=1001,mf=1002,In=1003,Ny=1004,ql=1005,zn=1006,lf=1007,ja=1008,Ci=1009,Ly=1010,Uy=1011,ec=1012,Bm=1013,ya=1014,Xi=1015,Di=1016,Fm=1017,Hm=1018,tc=1020,Py=35902,Oy=35899,Iy=1021,zy=1022,Wi=1023,Qa=1026,dr=1027,Gm=1028,Vm=1029,wo=1030,km=1031,Xm=1033,cf=33776,uf=33777,ff=33778,hf=33779,zp=35840,Bp=35841,Fp=35842,Hp=35843,Gp=36196,Vp=37492,kp=37496,Xp=37488,Wp=37489,qp=37490,jp=37491,Yp=37808,Zp=37809,Kp=37810,Jp=37811,Qp=37812,$p=37813,em=37814,tm=37815,nm=37816,im=37817,am=37818,sm=37819,rm=37820,om=37821,lm=36492,cm=36494,um=36495,fm=36283,hm=36284,dm=36285,pm=36286,nc=2300,ic=2301,Fd=2302,ax=2400,sx=2401,rx=2402,fT=2500,hT=0,By=1,mm=2,dT=3200,Wm=0,pT=1,Us="",On="srgb",ci="srgb-linear",gf="linear",Zt="srgb",eo=7680,ox=519,mT=512,gT=513,vT=514,qm=515,_T=516,xT=517,jm=518,yT=519,gm=35044,lx="300 es",va=2e3,vf=2001;function Fy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ST(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function ac(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function MT(){const o=ac("canvas");return o.style.display="block",o}const cx={};function _f(...o){const e="THREE."+o.shift();console.log(e,...o)}function ut(...o){const e="THREE."+o.shift();console.warn(e,...o)}function vt(...o){const e="THREE."+o.shift();console.error(e,...o)}function sc(...o){const e=o.join(" ");e in cx||(cx[e]=!0,ut(...o))}function bT(o,e,t){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}class Oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ux=1234567;const Zl=Math.PI/180,Ro=180/Math.PI;function qi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ni[o&255]+ni[o>>8&255]+ni[o>>16&255]+ni[o>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[a&255]+ni[a>>8&255]+ni[a>>16&255]+ni[a>>24&255]).toLowerCase()}function Dt(o,e,t){return Math.max(e,Math.min(t,o))}function Ym(o,e){return(o%e+e)%e}function TT(o,e,t,a,s){return a+(o-e)*(s-a)/(t-e)}function ET(o,e,t){return o!==e?(t-o)/(e-o):0}function Kl(o,e,t){return(1-t)*o+t*e}function AT(o,e,t,a){return Kl(o,e,1-Math.exp(-t*a))}function wT(o,e=1){return e-Math.abs(Ym(o,e*2)-e)}function RT(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function CT(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function DT(o,e){return o+Math.floor(Math.random()*(e-o+1))}function NT(o,e){return o+Math.random()*(e-o)}function LT(o){return o*(.5-Math.random())}function UT(o){o!==void 0&&(ux=o);let e=ux+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function PT(o){return o*Zl}function OT(o){return o*Ro}function IT(o){return(o&o-1)===0&&o!==0}function zT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function BT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function FT(o,e,t,a,s){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),d=l((e+a)/2),g=u((e+a)/2),v=l((e-a)/2),_=u((e-a)/2),x=l((a-e)/2),M=u((a-e)/2);switch(s){case"XYX":o.set(f*g,h*v,h*_,f*d);break;case"YZY":o.set(h*_,f*g,h*v,f*d);break;case"ZXZ":o.set(h*v,h*_,f*g,f*d);break;case"XZX":o.set(f*g,h*M,h*x,f*d);break;case"YXY":o.set(h*x,f*g,h*M,f*d);break;case"ZYZ":o.set(h*M,h*x,f*g,f*d);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ia(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function $t(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const gi={DEG2RAD:Zl,RAD2DEG:Ro,generateUUID:qi,clamp:Dt,euclideanModulo:Ym,mapLinear:TT,inverseLerp:ET,lerp:Kl,damp:AT,pingpong:wT,smoothstep:RT,smootherstep:CT,randInt:DT,randFloat:NT,randFloatSpread:LT,seededRandom:UT,degToRad:PT,radToDeg:OT,isPowerOfTwo:IT,ceilPowerOfTwo:zT,floorPowerOfTwo:BT,setQuaternionFromProperEuler:FT,normalize:$t,denormalize:ia};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Dt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*s+e.x,this.y=l*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,u,f){let h=a[s+0],d=a[s+1],g=a[s+2],v=a[s+3],_=l[u+0],x=l[u+1],M=l[u+2],T=l[u+3];if(f<=0){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f>=1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=T;return}if(v!==T||h!==_||d!==x||g!==M){let S=h*_+d*x+g*M+v*T;S<0&&(_=-_,x=-x,M=-M,T=-T,S=-S);let y=1-f;if(S<.9995){const L=Math.acos(S),R=Math.sin(L);y=Math.sin(y*L)/R,f=Math.sin(f*L)/R,h=h*y+_*f,d=d*y+x*f,g=g*y+M*f,v=v*y+T*f}else{h=h*y+_*f,d=d*y+x*f,g=g*y+M*f,v=v*y+T*f;const L=1/Math.sqrt(h*h+d*d+g*g+v*v);h*=L,d*=L,g*=L,v*=L}}e[t]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,a,s,l,u){const f=a[s],h=a[s+1],d=a[s+2],g=a[s+3],v=l[u],_=l[u+1],x=l[u+2],M=l[u+3];return e[t]=f*M+g*v+h*x-d*_,e[t+1]=h*M+g*_+d*v-f*x,e[t+2]=d*M+g*x+f*_-h*v,e[t+3]=g*M-f*v-h*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,d=f(a/2),g=f(s/2),v=f(l/2),_=h(a/2),x=h(s/2),M=h(l/2);switch(u){case"XYZ":this._x=_*g*v+d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v-_*x*M;break;case"YXZ":this._x=_*g*v+d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v+_*x*M;break;case"ZXY":this._x=_*g*v-d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v-_*x*M;break;case"ZYX":this._x=_*g*v-d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v+_*x*M;break;case"YZX":this._x=_*g*v+d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v-_*x*M;break;case"XZY":this._x=_*g*v-d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v+_*x*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],u=t[1],f=t[5],h=t[9],d=t[2],g=t[6],v=t[10],_=a+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-h)*x,this._y=(l-d)*x,this._z=(u-s)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(g-h)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-d)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(u-s)/x,this._x=(l+d)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,u=e._w,f=t._x,h=t._y,d=t._z,g=t._w;return this._x=a*g+u*f+s*d-l*h,this._y=s*g+u*h+l*f-a*d,this._z=l*g+u*d+a*h-s*f,this._w=u*g-a*f-s*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let a=e._x,s=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(a=-a,s=-s,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);h=Math.sin(h*d)/g,t=Math.sin(t*d)/g,this._x=this._x*h+a*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+a*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,a=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,u=e.y,f=e.z,h=e.w,d=2*(u*s-f*a),g=2*(f*t-l*s),v=2*(l*a-u*t);return this.x=t+h*d+u*v-f*g,this.y=a+h*g+f*d-l*v,this.z=s+h*v+l*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=s*h-l*f,this.y=l*u-a*h,this.z=a*f-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Dt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new G,fx=new Is;class Rt{constructor(e,t,a,s,l,u,f,h,d){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,f,h,d)}set(e,t,a,s,l,u,f,h,d){const g=this.elements;return g[0]=e,g[1]=s,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],f=a[3],h=a[6],d=a[1],g=a[4],v=a[7],_=a[2],x=a[5],M=a[8],T=s[0],S=s[3],y=s[6],L=s[1],R=s[4],w=s[7],U=s[2],I=s[5],O=s[8];return l[0]=u*T+f*L+h*U,l[3]=u*S+f*R+h*I,l[6]=u*y+f*w+h*O,l[1]=d*T+g*L+v*U,l[4]=d*S+g*R+v*I,l[7]=d*y+g*w+v*O,l[2]=_*T+x*L+M*U,l[5]=_*S+x*R+M*I,l[8]=_*y+x*w+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8];return t*u*g-t*f*d-a*l*g+a*f*h+s*l*d-s*u*h}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8],v=g*u-f*d,_=f*h-g*l,x=d*l-u*h,M=t*v+a*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(s*d-g*a)*T,e[2]=(f*a-s*u)*T,e[3]=_*T,e[4]=(g*t-s*h)*T,e[5]=(s*l-f*t)*T,e[6]=x*T,e[7]=(a*h-d*t)*T,e[8]=(u*t-a*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,u,f){const h=Math.cos(l),d=Math.sin(l);return this.set(a*h,a*d,-a*(h*u+d*f)+u+e,-s*d,s*h,-s*(-d*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Gd.makeScale(e,t)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new Rt,hx=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dx=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HT(){const o={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Zt&&(s.r=Ka(s.r),s.g=Ka(s.g),s.b=Ka(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Zt&&(s.r=bo(s.r),s.g=bo(s.g),s.b=bo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Us?gf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return sc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return sc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[ci]:{primaries:e,whitePoint:a,transfer:gf,toXYZ:hx,fromXYZ:dx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:a,transfer:Zt,toXYZ:hx,fromXYZ:dx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),o}const Ft=HT();function Ka(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let to;class GT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{to===void 0&&(to=ac("canvas")),to.width=e.width,to.height=e.height;const s=to.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=to}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ac("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=Ka(l[u]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Ka(t[a]/255)*255):t[a]=Ka(t[a]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VT=0;class Zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(Vd(s[u].image)):l.push(Vd(s[u]))}else l=Vd(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function Vd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?GT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let kT=0;const kd=new G;class Bn extends Oo{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,a=ga,s=ga,l=zn,u=ja,f=Wi,h=Ci,d=Bn.DEFAULT_ANISOTROPY,g=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=qi(),this.name="",this.source=new Zm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Dy;Bn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,t=0,a=0,s=1){fn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const h=e.elements,d=h[0],g=h[4],v=h[8],_=h[1],x=h[5],M=h[9],T=h[2],S=h[6],y=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,w=(x+1)/2,U=(y+1)/2,I=(g+_)/4,O=(v+T)/4,q=(M+S)/4;return R>w&&R>U?R<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(R),s=I/a,l=O/a):w>U?w<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(w),a=I/s,l=q/s):U<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(U),a=O/l,s=q/l),this.set(a,s,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(v-T)/L,this.z=(_-g)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XT extends Oo{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const s={width:e,height:t,depth:a.depth},l=new Bn(s);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zm(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends XT{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class Hy extends Bn{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WT extends Bn{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Qi):Qi.fromBufferAttribute(l,u),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Eu.copy(a.boundingBox)),Eu.applyMatrix4(e.matrixWorld),this.union(Eu)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),Au.subVectors(this.max,Nl),no.subVectors(e.a,Nl),io.subVectors(e.b,Nl),ao.subVectors(e.c,Nl),As.subVectors(io,no),ws.subVectors(ao,io),tr.subVectors(no,ao);let t=[0,-As.z,As.y,0,-ws.z,ws.y,0,-tr.z,tr.y,As.z,0,-As.x,ws.z,0,-ws.x,tr.z,0,-tr.x,-As.y,As.x,0,-ws.y,ws.x,0,-tr.y,tr.x,0];return!Xd(t,no,io,ao,Au)||(t=[1,0,0,0,1,0,0,0,1],!Xd(t,no,io,ao,Au))?!1:(wu.crossVectors(As,ws),t=[wu.x,wu.y,wu.z],Xd(t,no,io,ao,Au))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ga=[new G,new G,new G,new G,new G,new G,new G,new G],Qi=new G,Eu=new aa,no=new G,io=new G,ao=new G,As=new G,ws=new G,tr=new G,Nl=new G,Au=new G,wu=new G,nr=new G;function Xd(o,e,t,a,s){for(let l=0,u=o.length-3;l<=u;l+=3){nr.fromArray(o,l);const f=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),h=e.dot(nr),d=t.dot(nr),g=a.dot(nr);if(Math.max(-Math.max(h,d,g),Math.min(h,d,g))>f)return!1}return!0}const qT=new aa,Ll=new G,Wd=new G;class Sa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):qT.setFromPoints(e).getCenter(a);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ll.subVectors(e,this.center);const t=Ll.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(Ll,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ll.copy(e.center).add(Wd)),this.expandByPoint(Ll.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Va=new G,qd=new G,Ru=new G,Rs=new G,jd=new G,Cu=new G,Yd=new G;class bf{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Va)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Va.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Va.copy(this.origin).addScaledVector(this.direction,t),Va.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){qd.copy(e).add(t).multiplyScalar(.5),Ru.copy(t).sub(e).normalize(),Rs.copy(this.origin).sub(qd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ru),f=Rs.dot(this.direction),h=-Rs.dot(Ru),d=Rs.lengthSq(),g=Math.abs(1-u*u);let v,_,x,M;if(g>0)if(v=u*h-f,_=u*f-h,M=l*g,v>=0)if(_>=-M)if(_<=M){const T=1/g;v*=T,_*=T,x=v*(v+u*_+2*f)+_*(u*v+_+2*h)+d}else _=l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;else _=-l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+d):_<=M?(v=0,_=Math.min(Math.max(-l,-h),l),x=_*(_+2*h)+d):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+d);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(qd).addScaledVector(Ru,_),x}intersectSphere(e,t){Va.subVectors(e.center,this.origin);const a=Va.dot(this.direction),s=Va.dot(Va)-a*a,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=a-u,h=a+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,u,f,h;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(a=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(a=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),v>=0?(f=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),a>h||f>s)||((f>a||a!==a)&&(a=f),(h<s||s!==s)&&(s=h),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,Va)!==null}intersectTriangle(e,t,a,s,l){jd.subVectors(t,e),Cu.subVectors(a,e),Yd.crossVectors(jd,Cu);let u=this.direction.dot(Yd),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Rs.subVectors(this.origin,e);const h=f*this.direction.dot(Cu.crossVectors(Rs,Cu));if(h<0)return null;const d=f*this.direction.dot(jd.cross(Rs));if(d<0||h+d>u)return null;const g=-f*Rs.dot(Yd);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,a,s,l,u,f,h,d,g,v,_,x,M,T,S){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,f,h,d,g,v,_,x,M,T,S)}set(e,t,a,s,l,u,f,h,d,g,v,_,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=a,y[12]=s,y[1]=l,y[5]=u,y[9]=f,y[13]=h,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,a=e.elements,s=1/so.setFromMatrixColumn(e,0).length(),l=1/so.setFromMatrixColumn(e,1).length(),u=1/so.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,u=Math.cos(a),f=Math.sin(a),h=Math.cos(s),d=Math.sin(s),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,x=u*v,M=f*g,T=f*v;t[0]=h*g,t[4]=-h*v,t[8]=d,t[1]=x+M*d,t[5]=_-T*d,t[9]=-f*h,t[2]=T-_*d,t[6]=M+x*d,t[10]=u*h}else if(e.order==="YXZ"){const _=h*g,x=h*v,M=d*g,T=d*v;t[0]=_+T*f,t[4]=M*f-x,t[8]=u*d,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=x*f-M,t[6]=T+_*f,t[10]=u*h}else if(e.order==="ZXY"){const _=h*g,x=h*v,M=d*g,T=d*v;t[0]=_-T*f,t[4]=-u*v,t[8]=M+x*f,t[1]=x+M*f,t[5]=u*g,t[9]=T-_*f,t[2]=-u*d,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const _=u*g,x=u*v,M=f*g,T=f*v;t[0]=h*g,t[4]=M*d-x,t[8]=_*d+T,t[1]=h*v,t[5]=T*d+_,t[9]=x*d-M,t[2]=-d,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,x=u*d,M=f*h,T=f*d;t[0]=h*g,t[4]=T-_*v,t[8]=M*v+x,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-d*g,t[6]=x*v+M,t[10]=_-T*v}else if(e.order==="XZY"){const _=u*h,x=u*d,M=f*h,T=f*d;t[0]=h*g,t[4]=-v,t[8]=d*g,t[1]=_*v+T,t[5]=u*g,t[9]=x*v-M,t[2]=M*v-x,t[6]=f*g,t[10]=T*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jT,e,YT)}lookAt(e,t,a){const s=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Cs.crossVectors(a,wi),Cs.lengthSq()===0&&(Math.abs(a.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Cs.crossVectors(a,wi)),Cs.normalize(),Du.crossVectors(wi,Cs),s[0]=Cs.x,s[4]=Du.x,s[8]=wi.x,s[1]=Cs.y,s[5]=Du.y,s[9]=wi.y,s[2]=Cs.z,s[6]=Du.z,s[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],f=a[4],h=a[8],d=a[12],g=a[1],v=a[5],_=a[9],x=a[13],M=a[2],T=a[6],S=a[10],y=a[14],L=a[3],R=a[7],w=a[11],U=a[15],I=s[0],O=s[4],q=s[8],A=s[12],N=s[1],V=s[5],J=s[9],te=s[13],ce=s[2],le=s[6],H=s[10],k=s[14],ae=s[3],Te=s[7],Ee=s[11],z=s[15];return l[0]=u*I+f*N+h*ce+d*ae,l[4]=u*O+f*V+h*le+d*Te,l[8]=u*q+f*J+h*H+d*Ee,l[12]=u*A+f*te+h*k+d*z,l[1]=g*I+v*N+_*ce+x*ae,l[5]=g*O+v*V+_*le+x*Te,l[9]=g*q+v*J+_*H+x*Ee,l[13]=g*A+v*te+_*k+x*z,l[2]=M*I+T*N+S*ce+y*ae,l[6]=M*O+T*V+S*le+y*Te,l[10]=M*q+T*J+S*H+y*Ee,l[14]=M*A+T*te+S*k+y*z,l[3]=L*I+R*N+w*ce+U*ae,l[7]=L*O+R*V+w*le+U*Te,l[11]=L*q+R*J+w*H+U*Ee,l[15]=L*A+R*te+w*k+U*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],u=e[1],f=e[5],h=e[9],d=e[13],g=e[2],v=e[6],_=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15],L=h*x-d*_,R=f*x-d*v,w=f*_-h*v,U=u*x-d*g,I=u*_-h*g,O=u*v-f*g;return t*(T*L-S*R+y*w)-a*(M*L-S*U+y*I)+s*(M*R-T*U+y*O)-l*(M*w-T*I+S*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8],v=e[9],_=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],L=v*S*d-T*_*d+T*h*x-f*S*x-v*h*y+f*_*y,R=M*_*d-g*S*d-M*h*x+u*S*x+g*h*y-u*_*y,w=g*T*d-M*v*d+M*f*x-u*T*x-g*f*y+u*v*y,U=M*v*h-g*T*h-M*f*_+u*T*_+g*f*S-u*v*S,I=t*L+a*R+s*w+l*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=L*O,e[1]=(T*_*l-v*S*l-T*s*x+a*S*x+v*s*y-a*_*y)*O,e[2]=(f*S*l-T*h*l+T*s*d-a*S*d-f*s*y+a*h*y)*O,e[3]=(v*h*l-f*_*l-v*s*d+a*_*d+f*s*x-a*h*x)*O,e[4]=R*O,e[5]=(g*S*l-M*_*l+M*s*x-t*S*x-g*s*y+t*_*y)*O,e[6]=(M*h*l-u*S*l-M*s*d+t*S*d+u*s*y-t*h*y)*O,e[7]=(u*_*l-g*h*l+g*s*d-t*_*d-u*s*x+t*h*x)*O,e[8]=w*O,e[9]=(M*v*l-g*T*l-M*a*x+t*T*x+g*a*y-t*v*y)*O,e[10]=(u*T*l-M*f*l+M*a*d-t*T*d-u*a*y+t*f*y)*O,e[11]=(g*f*l-u*v*l-g*a*d+t*v*d+u*a*x-t*f*x)*O,e[12]=U*O,e[13]=(g*T*s-M*v*s+M*a*_-t*T*_-g*a*S+t*v*S)*O,e[14]=(M*f*s-u*T*s-M*a*h+t*T*h+u*a*S-t*f*S)*O,e[15]=(u*v*s-g*f*s+g*a*h-t*v*h-u*a*_+t*f*_)*O,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,u=e.x,f=e.y,h=e.z,d=l*u,g=l*f;return this.set(d*u+a,d*f-s*h,d*h+s*f,0,d*f+s*h,g*f+a,g*h-s*u,0,d*h-s*f,g*h+s*u,l*h*h+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,u){return this.set(1,a,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,d=l+l,g=u+u,v=f+f,_=l*d,x=l*g,M=l*v,T=u*g,S=u*v,y=f*v,L=h*d,R=h*g,w=h*v,U=a.x,I=a.y,O=a.z;return s[0]=(1-(T+y))*U,s[1]=(x+w)*U,s[2]=(M-R)*U,s[3]=0,s[4]=(x-w)*I,s[5]=(1-(_+y))*I,s[6]=(S+L)*I,s[7]=0,s[8]=(M+R)*O,s[9]=(S-L)*O,s[10]=(1-(_+T))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return a.set(1,1,1),t.identity(),this;let l=so.set(s[0],s[1],s[2]).length();const u=so.set(s[4],s[5],s[6]).length(),f=so.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),$i.copy(this);const d=1/l,g=1/u,v=1/f;return $i.elements[0]*=d,$i.elements[1]*=d,$i.elements[2]*=d,$i.elements[4]*=g,$i.elements[5]*=g,$i.elements[6]*=g,$i.elements[8]*=v,$i.elements[9]*=v,$i.elements[10]*=v,t.setFromRotationMatrix($i),a.x=l,a.y=u,a.z=f,this}makePerspective(e,t,a,s,l,u,f=va,h=!1){const d=this.elements,g=2*l/(t-e),v=2*l/(a-s),_=(t+e)/(t-e),x=(a+s)/(a-s);let M,T;if(h)M=l/(u-l),T=u*l/(u-l);else if(f===va)M=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(f===vf)M=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,a,s,l,u,f=va,h=!1){const d=this.elements,g=2/(t-e),v=2/(a-s),_=-(t+e)/(t-e),x=-(a+s)/(a-s);let M,T;if(h)M=1/(u-l),T=u/(u-l);else if(f===va)M=-2/(u-l),T=-(u+l)/(u-l);else if(f===vf)M=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const so=new G,$i=new At,jT=new G(0,0,0),YT=new G(1,1,1),Cs=new G,Du=new G,wi=new G,px=new At,mx=new Is;class Ni{constructor(e=0,t=0,a=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],u=s[4],f=s[8],h=s[1],d=s[5],g=s[9],v=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return px.makeRotationFromQuaternion(e),this.setFromRotationMatrix(px,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mx.setFromEuler(this),this.setFromQuaternion(mx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Gy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZT=0;const gx=new G,ro=new Is,ka=new At,Nu=new G,Ul=new G,KT=new G,JT=new Is,vx=new G(1,0,0),_x=new G(0,1,0),xx=new G(0,0,1),yx={type:"added"},QT={type:"removed"},oo={type:"childadded",child:null},Zd={type:"childremoved",child:null};class hn extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new G,t=new Ni,a=new Is,s=new G(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Rt}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(vx,e)}rotateY(e){return this.rotateOnAxis(_x,e)}rotateZ(e){return this.rotateOnAxis(xx,e)}translateOnAxis(e,t){return gx.copy(e).applyQuaternion(this.quaternion),this.position.add(gx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vx,e)}translateY(e){return this.translateOnAxis(_x,e)}translateZ(e){return this.translateOnAxis(xx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ka.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Nu.copy(e):Nu.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ka.lookAt(Ul,Nu,this.up):ka.lookAt(Nu,Ul,this.up),this.quaternion.setFromRotationMatrix(ka),s&&(ka.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(ka),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yx),oo.child=e,this.dispatchEvent(oo),oo.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QT),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ka.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ka.multiply(e.parent.matrixWorld)),e.applyMatrix4(ka),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yx),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,KT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,JT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,g=h.length;d<g;d++){const v=h[d];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];s.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),d=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(a.geometries=f),h.length>0&&(a.materials=h),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=s,a;function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}}hn.DEFAULT_UP=new G(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ea=new G,Xa=new G,Kd=new G,Wa=new G,lo=new G,co=new G,Sx=new G,Jd=new G,Qd=new G,$d=new G,ep=new fn,tp=new fn,np=new fn;class ki{constructor(e=new G,t=new G,a=new G){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),ea.subVectors(e,t),s.cross(ea);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){ea.subVectors(s,t),Xa.subVectors(a,t),Kd.subVectors(e,t);const u=ea.dot(ea),f=ea.dot(Xa),h=ea.dot(Kd),d=Xa.dot(Xa),g=Xa.dot(Kd),v=u*d-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(d*h-f*g)*_,M=(u*g-f*h)*_;return l.set(1-x-M,M,x)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,Wa)===null?!1:Wa.x>=0&&Wa.y>=0&&Wa.x+Wa.y<=1}static getInterpolation(e,t,a,s,l,u,f,h){return this.getBarycoord(e,t,a,s,Wa)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Wa.x),h.addScaledVector(u,Wa.y),h.addScaledVector(f,Wa.z),h)}static getInterpolatedAttribute(e,t,a,s,l,u){return ep.setScalar(0),tp.setScalar(0),np.setScalar(0),ep.fromBufferAttribute(e,t),tp.fromBufferAttribute(e,a),np.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(ep,l.x),u.addScaledVector(tp,l.y),u.addScaledVector(np,l.z),u}static isFrontFacing(e,t,a,s){return ea.subVectors(a,t),Xa.subVectors(e,t),ea.cross(Xa).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ea.subVectors(this.c,this.b),Xa.subVectors(this.a,this.b),ea.cross(Xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ki.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return ki.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let u,f;lo.subVectors(s,a),co.subVectors(l,a),Jd.subVectors(e,a);const h=lo.dot(Jd),d=co.dot(Jd);if(h<=0&&d<=0)return t.copy(a);Qd.subVectors(e,s);const g=lo.dot(Qd),v=co.dot(Qd);if(g>=0&&v<=g)return t.copy(s);const _=h*v-g*d;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(a).addScaledVector(lo,u);$d.subVectors(e,l);const x=lo.dot($d),M=co.dot($d);if(M>=0&&x<=M)return t.copy(l);const T=x*d-h*M;if(T<=0&&d>=0&&M<=0)return f=d/(d-M),t.copy(a).addScaledVector(co,f);const S=g*M-x*v;if(S<=0&&v-g>=0&&x-M>=0)return Sx.subVectors(l,s),f=(v-g)/(v-g+(x-M)),t.copy(s).addScaledVector(Sx,f);const y=1/(S+T+_);return u=T*y,f=_*y,t.copy(a).addScaledVector(lo,u).addScaledVector(co,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function ip(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class lt{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=a,Ft.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=Ft.workingColorSpace){if(e=Ym(e,1),t=Dt(t,0,1),a=Dt(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=ip(u,l,e+1/3),this.g=ip(u,l,e),this.b=ip(u,l,e-1/3)}return Ft.colorSpaceToWorking(this,s),this}setStyle(e,t=On){function a(l){l!==void 0&&parseFloat(l)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const a=Vy[e.toLowerCase()];return a!==void 0?this.setHex(a,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Ft.workingToColorSpace(ii.copy(this),e),Math.round(Dt(ii.r*255,0,255))*65536+Math.round(Dt(ii.g*255,0,255))*256+Math.round(Dt(ii.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(ii.copy(this),t);const a=ii.r,s=ii.g,l=ii.b,u=Math.max(a,s,l),f=Math.min(a,s,l);let h,d;const g=(f+u)/2;if(f===u)h=0,d=0;else{const v=u-f;switch(d=g<=.5?v/(u+f):v/(2-u-f),u){case a:h=(s-l)/v+(s<l?6:0);break;case s:h=(l-a)/v+2;break;case l:h=(a-s)/v+4;break}h/=6}return e.h=h,e.s=d,e.l=g,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=On){Ft.workingToColorSpace(ii.copy(this),e);const t=ii.r,a=ii.g,s=ii.b;return e!==On?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(Lu);const a=Kl(Ds.h,Lu.h,t),s=Kl(Ds.s,Lu.s,t),l=Kl(Ds.l,Lu.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ii=new lt;lt.NAMES=Vy;let $T=0;class ji extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Za,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=wp,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ox,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Za&&(a.blending=this.blending),this.side!==Ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ap&&(a.blendSrc=this.blendSrc),this.blendDst!==wp&&(a.blendDst=this.blendDst),this.blendEquation!==ur&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ox&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class li extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ln=new G,Uu=new Oe;let e1=0;class Xn{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=gm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Uu.fromBufferAttribute(this,t),Uu.applyMatrix3(e),this.setXY(t,Uu.x,Uu.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix3(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=ia(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=$t(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),a=$t(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),a=$t(a,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),a=$t(a,this.array),s=$t(s,this.array),l=$t(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gm&&(e.usage=this.usage),e}}class ky extends Xn{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class Xy extends Xn{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Xt extends Xn{constructor(e,t,a){super(new Float32Array(e),t,a)}}let t1=0;const Gi=new At,ap=new hn,uo=new G,Ri=new aa,Pl=new aa,Vn=new G;class gn extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fy(e)?Xy:ky)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new Rt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,a){return Gi.makeTranslation(e,t,a),this.applyMatrix4(Gi),this}scale(e,t,a){return Gi.makeScale(e,t,a),this.applyMatrix4(Gi),this}lookAt(e){return ap.lookAt(e),ap.updateMatrix(),this.applyMatrix4(ap.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xt(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];Ri.setFromBufferAttribute(l),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const a=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Pl.setFromBufferAttribute(f),this.morphTargetsRelative?(Vn.addVectors(Ri.min,Pl.min),Ri.expandByPoint(Vn),Vn.addVectors(Ri.max,Pl.max),Ri.expandByPoint(Vn)):(Ri.expandByPoint(Pl.min),Ri.expandByPoint(Pl.max))}Ri.getCenter(a);let s=0;for(let l=0,u=e.count;l<u;l++)Vn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(Vn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Vn.fromBufferAttribute(f,d),h&&(uo.fromBufferAttribute(e,d),Vn.add(uo)),s=Math.max(s,a.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let q=0;q<a.count;q++)f[q]=new G,h[q]=new G;const d=new G,g=new G,v=new G,_=new Oe,x=new Oe,M=new Oe,T=new G,S=new G;function y(q,A,N){d.fromBufferAttribute(a,q),g.fromBufferAttribute(a,A),v.fromBufferAttribute(a,N),_.fromBufferAttribute(l,q),x.fromBufferAttribute(l,A),M.fromBufferAttribute(l,N),g.sub(d),v.sub(d),x.sub(_),M.sub(_);const V=1/(x.x*M.y-M.x*x.y);isFinite(V)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(V),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(V),f[q].add(T),f[A].add(T),f[N].add(T),h[q].add(S),h[A].add(S),h[N].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let q=0,A=L.length;q<A;++q){const N=L[q],V=N.start,J=N.count;for(let te=V,ce=V+J;te<ce;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const R=new G,w=new G,U=new G,I=new G;function O(q){U.fromBufferAttribute(s,q),I.copy(U);const A=f[q];R.copy(A),R.sub(U.multiplyScalar(U.dot(A))).normalize(),w.crossVectors(I,A);const V=w.dot(h[q])<0?-1:1;u.setXYZW(q,R.x,R.y,R.z,V)}for(let q=0,A=L.length;q<A;++q){const N=L[q],V=N.start,J=N.count;for(let te=V,ce=V+J;te<ce;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const s=new G,l=new G,u=new G,f=new G,h=new G,d=new G,g=new G,v=new G;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),g.subVectors(u,l),v.subVectors(s,l),g.cross(v),f.fromBufferAttribute(a,M),h.fromBufferAttribute(a,T),d.fromBufferAttribute(a,S),f.add(g),h.add(g),d.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(T,h.x,h.y,h.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(s,l),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Vn.fromBufferAttribute(e,t),Vn.normalize(),e.setXYZ(t,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function e(f,h){const d=f.array,g=f.itemSize,v=f.normalized,_=new d.constructor(h.length*g);let x=0,M=0;for(let T=0,S=h.length;T<S;T++){f.isInterleavedBufferAttribute?x=h[T]*f.data.stride+f.offset:x=h[T]*g;for(let y=0;y<g;y++)_[M++]=d[x++]}return new Xn(_,g,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,a=this.index.array,s=this.attributes;for(const f in s){const h=s[f],d=e(h,a);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=e(_,a);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const d=u[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const h in a){const d=a[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(e.data))}g.length>0&&(s[h]=g,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const d in s){const g=s[d];this.setAttribute(d,g.clone(t))}const l=e.morphAttributes;for(const d in l){const g=[],v=l[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mx=new At,ir=new bf,Pu=new Sa,bx=new G,Ou=new G,Iu=new G,zu=new G,sp=new G,Bu=new G,Tx=new G,Fu=new G;class Ot extends hn{constructor(e=new gn,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){Bu.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const g=f[h],v=l[h];g!==0&&(sp.fromBufferAttribute(v,e),u?Bu.addScaledVector(sp,g):Bu.addScaledVector(sp.sub(t),g))}t.add(Bu)}return t}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pu.copy(a.boundingSphere),Pu.applyMatrix4(l),ir.copy(e.ray).recast(e.near),!(Pu.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Pu,bx)===null||ir.origin.distanceToSquared(bx)>(e.far-e.near)**2))&&(Mx.copy(l).invert(),ir.copy(e.ray).applyMatrix4(Mx),!(a.boundingBox!==null&&ir.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,a){let s;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),R=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,U=R;w<U;w+=3){const I=f.getX(w),O=f.getX(w+1),q=f.getX(w+2);s=Hu(this,y,e,a,d,g,v,I,O,q),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const L=f.getX(S),R=f.getX(S+1),w=f.getX(S+2);s=Hu(this,u,e,a,d,g,v,L,R,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),R=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,U=R;w<U;w+=3){const I=w,O=w+1,q=w+2;s=Hu(this,y,e,a,d,g,v,I,O,q),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const L=S,R=S+1,w=S+2;s=Hu(this,u,e,a,d,g,v,L,R,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function n1(o,e,t,a,s,l,u,f){let h;if(e.side===ei?h=a.intersectTriangle(u,l,s,!0,f):h=a.intersectTriangle(s,l,u,e.side===Ja,f),h===null)return null;Fu.copy(f),Fu.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Fu);return d<t.near||d>t.far?null:{distance:d,point:Fu.clone(),object:o}}function Hu(o,e,t,a,s,l,u,f,h,d){o.getVertexPosition(f,Ou),o.getVertexPosition(h,Iu),o.getVertexPosition(d,zu);const g=n1(o,e,t,a,Ou,Iu,zu,Tx);if(g){const v=new G;ki.getBarycoord(Tx,Ou,Iu,zu,v),s&&(g.uv=ki.getInterpolatedAttribute(s,f,h,d,v,new Oe)),l&&(g.uv1=ki.getInterpolatedAttribute(l,f,h,d,v,new Oe)),u&&(g.normal=ki.getInterpolatedAttribute(u,f,h,d,v,new G),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:d,normal:new G,materialIndex:0};ki.getNormal(Ou,Iu,zu,_.normal),g.face=_,g.barycoord=v}return g}class xr extends gn{constructor(e=1,t=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const h=[],d=[],g=[],v=[];let _=0,x=0;M("z","y","x",-1,-1,a,t,e,u,l,0),M("z","y","x",1,-1,a,t,-e,u,l,1),M("x","z","y",1,1,e,a,t,s,u,2),M("x","z","y",1,-1,e,a,-t,s,u,3),M("x","y","z",1,-1,e,t,a,s,l,4),M("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(h),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(v,2));function M(T,S,y,L,R,w,U,I,O,q,A){const N=w/O,V=U/q,J=w/2,te=U/2,ce=I/2,le=O+1,H=q+1;let k=0,ae=0;const Te=new G;for(let Ee=0;Ee<H;Ee++){const z=Ee*V-te;for(let ne=0;ne<le;ne++){const ye=ne*N-J;Te[T]=ye*L,Te[S]=z*R,Te[y]=ce,d.push(Te.x,Te.y,Te.z),Te[T]=0,Te[S]=0,Te[y]=I>0?1:-1,g.push(Te.x,Te.y,Te.z),v.push(ne/O),v.push(1-Ee/q),k+=1}}for(let Ee=0;Ee<q;Ee++)for(let z=0;z<O;z++){const ne=_+z+le*Ee,ye=_+z+le*(Ee+1),Ue=_+(z+1)+le*(Ee+1),ge=_+(z+1)+le*Ee;h.push(ne,ye,ge),h.push(ye,Ue,ge),ae+=6}f.addGroup(x,ae,A),x+=ae,_+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(o){const e={};for(const t in o){e[t]={};for(const a in o[t]){const s=o[t][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone():Array.isArray(s)?e[t][a]=s.slice():e[t][a]=s}}return e}function oi(o){const e={};for(let t=0;t<o.length;t++){const a=Co(o[t]);for(const s in a)e[s]=a[s]}return e}function i1(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Wy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const Do={clone:Co,merge:oi};var a1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a1,this.fragmentShader=s1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=i1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class qy extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=va,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new G,Ex=new Oe,Ax=new Oe;class ai extends qy{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,Ex,Ax),t.subVectors(Ax,Ex)}setViewOffset(e,t,a,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zl*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;l+=u.offsetX*s/h,t-=u.offsetY*a/d,s*=u.width/h,a*=u.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=-90,ho=1;class r1 extends hn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ai(fo,ho,e,t);s.layers=this.layers,this.add(s);const l=new ai(fo,ho,e,t);l.layers=this.layers,this.add(l);const u=new ai(fo,ho,e,t);u.layers=this.layers,this.add(u);const f=new ai(fo,ho,e,t);f.layers=this.layers,this.add(f);const h=new ai(fo,ho,e,t);h.layers=this.layers,this.add(h);const d=new ai(fo,ho,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,u,f,h]=t;for(const d of t)this.remove(d);if(e===va)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===vf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,d,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,s),e.render(t,l),e.setRenderTarget(a,1,s),e.render(t,u),e.setRenderTarget(a,2,s),e.render(t,f),e.setRenderTarget(a,3,s),e.render(t,h),e.setRenderTarget(a,4,s),e.render(t,d),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,s),e.render(t,g),e.setRenderTarget(v,_,x),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class jy extends Bn{constructor(e=[],t=pr,a,s,l,u,f,h,d,g){super(e,t,a,s,l,u,f,h,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yy extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new jy(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xr(5,5,5),l=new kn({name:"CubemapFromEquirect",uniforms:Co(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:_a});l.uniforms.tEquirect.value=t;const u=new Ot(s,l),f=t.minFilter;return t.minFilter===ja&&(t.minFilter=zn),new r1(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,s);e.setRenderTarget(l)}}class _i extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o1={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,u=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,a),y=this._getHandJoint(d,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,M=.005;d.inputState.pinching&&_>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return f!==null&&(f.visible=s!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new _i;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class Tf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=t}clone(){return new Tf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zy extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ky{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gm,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[a+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ri=new G;class rc{constructor(e,t,a,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=ia(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=$t(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ia(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ia(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ia(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ia(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),a=$t(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),a=$t(a,this.array),s=$t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),a=$t(a,this.array),s=$t(s,this.array),l=$t(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){_f("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new Xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_f("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jy extends ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let po;const Ol=new G,mo=new G,go=new G,vo=new Oe,Il=new Oe,Qy=new At,Gu=new G,zl=new G,Vu=new G,wx=new Oe,op=new Oe,Rx=new Oe;class l1 extends hn{constructor(e=new Jy){if(super(),this.isSprite=!0,this.type="Sprite",po===void 0){po=new gn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new Ky(t,5);po.setIndex([0,1,2,0,2,3]),po.setAttribute("position",new rc(a,3,0,!1)),po.setAttribute("uv",new rc(a,2,3,!1))}this.geometry=po,this.material=e,this.center=new Oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mo.setFromMatrixScale(this.matrixWorld),Qy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),go.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mo.multiplyScalar(-go.z);const a=this.material.rotation;let s,l;a!==0&&(l=Math.cos(a),s=Math.sin(a));const u=this.center;ku(Gu.set(-.5,-.5,0),go,u,mo,s,l),ku(zl.set(.5,-.5,0),go,u,mo,s,l),ku(Vu.set(.5,.5,0),go,u,mo,s,l),wx.set(0,0),op.set(1,0),Rx.set(1,1);let f=e.ray.intersectTriangle(Gu,zl,Vu,!1,Ol);if(f===null&&(ku(zl.set(-.5,.5,0),go,u,mo,s,l),op.set(0,1),f=e.ray.intersectTriangle(Gu,Vu,zl,!1,Ol),f===null))return;const h=e.ray.origin.distanceTo(Ol);h<e.near||h>e.far||t.push({distance:h,point:Ol.clone(),uv:ki.getInterpolation(Ol,Gu,zl,Vu,wx,op,Rx,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ku(o,e,t,a,s,l){vo.subVectors(o,t).addScalar(.5).multiply(a),s!==void 0?(Il.x=l*vo.x-s*vo.y,Il.y=s*vo.x+l*vo.y):Il.copy(vo),o.copy(e),o.x+=Il.x,o.y+=Il.y,o.applyMatrix4(Qy)}const Cx=new G,Dx=new fn,Nx=new fn,c1=new G,Lx=new At,Xu=new G,lp=new Sa,Ux=new At,cp=new bf;class u1 extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ix,this.bindMatrix=new At,this.bindMatrixInverse=new At,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new aa),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,Xu),this.boundingBox.expandByPoint(Xu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sa),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,Xu),this.boundingSphere.expandByPoint(Xu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const a=this.material,s=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lp.copy(this.boundingSphere),lp.applyMatrix4(s),e.ray.intersectsSphere(lp)!==!1&&(Ux.copy(s).invert(),cp.copy(e.ray).applyMatrix4(Ux),!(this.boundingBox!==null&&cp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new fn,t=this.geometry.attributes.skinWeight;for(let a=0,s=t.count;a<s;a++){e.fromBufferAttribute(t,a);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ix?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uT?this.bindMatrixInverse.copy(this.bindMatrix).invert():ut("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const a=this.skeleton,s=this.geometry;Dx.fromBufferAttribute(s.attributes.skinIndex,e),Nx.fromBufferAttribute(s.attributes.skinWeight,e),Cx.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const u=Nx.getComponent(l);if(u!==0){const f=Dx.getComponent(l);Lx.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),t.addScaledVector(c1.copy(Cx).applyMatrix4(Lx),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $y extends hn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Km extends Bn{constructor(e=null,t=1,a=1,s,l,u,f,h,d=In,g=In,v,_){super(null,u,f,h,d,g,s,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Px=new At,f1=new At;class Jm{constructor(e=[],t=[]){this.uuid=qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ut("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,s=this.bones.length;a<s;a++)this.boneInverses.push(new At)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const a=new At;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,t=this.boneInverses,a=this.boneMatrices,s=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const f=e[l]?e[l].matrixWorld:f1;Px.multiplyMatrices(f,t[l]),Px.toArray(a,l*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Jm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const a=new Km(t,e,e,Wi,Xi);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,s=e.bones.length;a<s;a++){const l=e.bones[a];let u=t[l];u===void 0&&(ut("Skeleton: No bone found with UUID:",l),u=new $y),this.bones.push(u),this.boneInverses.push(new At().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,a=this.boneInverses;for(let s=0,l=t.length;s<l;s++){const u=t[s];e.bones.push(u.uuid);const f=a[s];e.boneInverses.push(f.toArray())}return e}}class vm extends Xn{constructor(e,t,a,s=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _o=new At,Ox=new At,Wu=[],Ix=new aa,h1=new At,Bl=new Ot,Fl=new Sa;class d1 extends Ot{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vm(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<a;s++)this.setMatrixAt(s,h1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new aa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,_o),Ix.copy(e.boundingBox).applyMatrix4(_o),this.boundingBox.union(Ix)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,_o),Fl.copy(e.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(Fl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,s=this.morphTexture.source.data.data,l=a.length+1,u=e*l+1;for(let f=0;f<a.length;f++)a[f]=s[u+f]}raycast(e,t){const a=this.matrixWorld,s=this.count;if(Bl.geometry=this.geometry,Bl.material=this.material,Bl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(a),e.ray.intersectsSphere(Fl)!==!1))for(let l=0;l<s;l++){this.getMatrixAt(l,_o),Ox.multiplyMatrices(a,_o),Bl.matrixWorld=Ox,Bl.raycast(e,Wu);for(let u=0,f=Wu.length;u<f;u++){const h=Wu[u];h.instanceId=l,h.object=this,t.push(h)}Wu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,s=a.length+1;this.morphTexture===null&&(this.morphTexture=new Km(new Float32Array(s*this.count),s,this.count,Gm,Xi));const l=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const f=this.geometry.morphTargetsRelative?1:1-u,h=s*e;l[h]=f,l.set(a,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const up=new G,p1=new G,m1=new Rt;class cr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=up.subVectors(a,t).cross(p1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(up),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||m1.getNormalMatrix(e),s=this.coplanarPoint(up).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Sa,g1=new Oe(.5,.5),qu=new G;class Qm{constructor(e=new cr,t=new cr,a=new cr,s=new cr,l=new cr,u=new cr){this.planes=[e,t,a,s,l,u]}set(e,t,a,s,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=va,a=!1){const s=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],d=l[3],g=l[4],v=l[5],_=l[6],x=l[7],M=l[8],T=l[9],S=l[10],y=l[11],L=l[12],R=l[13],w=l[14],U=l[15];if(s[0].setComponents(d-u,x-g,y-M,U-L).normalize(),s[1].setComponents(d+u,x+g,y+M,U+L).normalize(),s[2].setComponents(d+f,x+v,y+T,U+R).normalize(),s[3].setComponents(d-f,x-v,y-T,U-R).normalize(),a)s[4].setComponents(h,_,S,w).normalize(),s[5].setComponents(d-h,x-_,y-S,U-w).normalize();else if(s[4].setComponents(d-h,x-_,y-S,U-w).normalize(),t===va)s[5].setComponents(d+h,x+_,y+S,U+w).normalize();else if(t===vf)s[5].setComponents(h,_,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);const t=g1.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(qu.x=s.normal.x>0?e.max.x:e.min.x,qu.y=s.normal.y>0?e.max.y:e.min.y,qu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hc extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xf=new G,yf=new G,zx=new At,Hl=new bf,ju=new Sa,fp=new G,Bx=new G;class Ef extends hn{constructor(e=new gn,t=new hc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let s=1,l=t.count;s<l;s++)xf.fromBufferAttribute(t,s-1),yf.fromBufferAttribute(t,s),a[s]=a[s-1],a[s]+=xf.distanceTo(yf);e.setAttribute("lineDistance",new Xt(a,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ju.copy(a.boundingSphere),ju.applyMatrix4(s),ju.radius+=l,e.ray.intersectsSphere(ju)===!1)return;zx.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(zx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let T=x,S=M-1;T<S;T+=d){const y=g.getX(T),L=g.getX(T+1),R=Yu(this,e,Hl,h,y,L,T);R&&t.push(R)}if(this.isLineLoop){const T=g.getX(M-1),S=g.getX(x),y=Yu(this,e,Hl,h,T,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let T=x,S=M-1;T<S;T+=d){const y=Yu(this,e,Hl,h,T,T+1,T);y&&t.push(y)}if(this.isLineLoop){const T=Yu(this,e,Hl,h,M-1,x,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Yu(o,e,t,a,s,l,u){const f=o.geometry.attributes.position;if(xf.fromBufferAttribute(f,s),yf.fromBufferAttribute(f,l),t.distanceSqToSegment(xf,yf,fp,Bx)>a)return;fp.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(fp);if(!(d<e.near||d>e.far))return{distance:d,point:Bx.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Fx=new G,Hx=new G;class $m extends Ef{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let s=0,l=t.count;s<l;s+=2)Fx.fromBufferAttribute(t,s),Hx.fromBufferAttribute(t,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+Fx.distanceTo(Hx);e.setAttribute("lineDistance",new Xt(a,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v1 extends Ef{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class e0 extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gx=new At,_m=new bf,Zu=new Sa,Ku=new G;class eS extends hn{constructor(e=new gn,t=new e0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const a=this.geometry,s=this.matrixWorld,l=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Zu.copy(a.boundingSphere),Zu.applyMatrix4(s),Zu.radius+=l,e.ray.intersectsSphere(Zu)===!1)return;Gx.copy(s).invert(),_m.copy(e.ray).applyMatrix4(Gx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=a.index,v=a.attributes.position;if(d!==null){const _=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let M=_,T=x;M<T;M++){const S=d.getX(M);Ku.fromBufferAttribute(v,S),Vx(Ku,S,h,s,e,t,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=_,T=x;M<T;M++)Ku.fromBufferAttribute(v,M),Vx(Ku,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Vx(o,e,t,a,s,l,u){const f=_m.distanceSqToPoint(o);if(f<t){const h=new G;_m.closestPointToPoint(o,h),h.applyMatrix4(a);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class xm extends Bn{constructor(e,t,a,s,l,u,f,h,d){super(e,t,a,s,l,u,f,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oc extends Bn{constructor(e,t,a=ya,s,l,u,f=In,h=In,d,g=Qa,v=1){if(g!==Qa&&g!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,s,l,u,f,h,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _1 extends oc{constructor(e,t=ya,a=pr,s,l,u=In,f=In,h,d=Qa){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,a,s,l,u,f,h,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tS extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class t0 extends gn{constructor(e=1,t=1,a=4,s=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:a,radialSegments:s,heightSegments:l},t=Math.max(0,t),a=Math.max(1,Math.floor(a)),s=Math.max(3,Math.floor(s)),l=Math.max(1,Math.floor(l));const u=[],f=[],h=[],d=[],g=t/2,v=Math.PI/2*e,_=t,x=2*v+_,M=a*2+l,T=s+1,S=new G,y=new G;for(let L=0;L<=M;L++){let R=0,w=0,U=0,I=0;if(L<=a){const A=L/a,N=A*Math.PI/2;w=-g-e*Math.cos(N),U=e*Math.sin(N),I=-e*Math.cos(N),R=A*v}else if(L<=a+l){const A=(L-a)/l;w=-g+A*t,U=e,I=0,R=v+A*_}else{const A=(L-a-l)/a,N=A*Math.PI/2;w=g+e*Math.sin(N),U=e*Math.cos(N),I=e*Math.sin(N),R=v+_+A*v}const O=Math.max(0,Math.min(1,R/x));let q=0;L===0?q=.5/s:L===M&&(q=-.5/s);for(let A=0;A<=s;A++){const N=A/s,V=N*Math.PI*2,J=Math.sin(V),te=Math.cos(V);y.x=-U*te,y.y=w,y.z=U*J,f.push(y.x,y.y,y.z),S.set(-U*te,I,U*J),S.normalize(),h.push(S.x,S.y,S.z),d.push(N+q,O)}if(L>0){const A=(L-1)*T;for(let N=0;N<s;N++){const V=A+N,J=A+N+1,te=L*T+N,ce=L*T+N+1;u.push(V,J,te),u.push(J,ce,te)}}}this.setIndex(u),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t0(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class mr extends gn{constructor(e=1,t=1,a=1,s=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:a,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const d=this;s=Math.floor(s),l=Math.floor(l);const g=[],v=[],_=[],x=[];let M=0;const T=[],S=a/2;let y=0;L(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(g),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(x,2));function L(){const w=new G,U=new G;let I=0;const O=(t-e)/a;for(let q=0;q<=l;q++){const A=[],N=q/l,V=N*(t-e)+e;for(let J=0;J<=s;J++){const te=J/s,ce=te*h+f,le=Math.sin(ce),H=Math.cos(ce);U.x=V*le,U.y=-N*a+S,U.z=V*H,v.push(U.x,U.y,U.z),w.set(le,O,H).normalize(),_.push(w.x,w.y,w.z),x.push(te,1-N),A.push(M++)}T.push(A)}for(let q=0;q<s;q++)for(let A=0;A<l;A++){const N=T[A][q],V=T[A+1][q],J=T[A+1][q+1],te=T[A][q+1];(e>0||A!==0)&&(g.push(N,V,te),I+=3),(t>0||A!==l-1)&&(g.push(V,J,te),I+=3)}d.addGroup(y,I,0),y+=I}function R(w){const U=M,I=new Oe,O=new G;let q=0;const A=w===!0?e:t,N=w===!0?1:-1;for(let J=1;J<=s;J++)v.push(0,S*N,0),_.push(0,N,0),x.push(.5,.5),M++;const V=M;for(let J=0;J<=s;J++){const ce=J/s*h+f,le=Math.cos(ce),H=Math.sin(ce);O.x=A*H,O.y=S*N,O.z=A*le,v.push(O.x,O.y,O.z),_.push(0,N,0),I.x=le*.5+.5,I.y=H*.5*N+.5,x.push(I.x,I.y),M++}for(let J=0;J<s;J++){const te=U+J,ce=V+J;w===!0?g.push(ce,ce+1,te):g.push(ce+1,ce,te),q+=3}d.addGroup(y,q,w===!0?1:2),y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class n0 extends mr{constructor(e=1,t=1,a=32,s=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,a,s,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:a,heightSegments:s,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new n0(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ma{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){const a=this.getUtoTmapping(e);return this.getPoint(a,t)}getPoints(e=5){const t=[];for(let a=0;a<=e;a++)t.push(this.getPoint(a/e));return t}getSpacedPoints(e=5){const t=[];for(let a=0;a<=e;a++)t.push(this.getPointAt(a/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let a,s=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)a=this.getPoint(u/e),l+=a.distanceTo(s),t.push(l),s=a;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const a=this.getLengths();let s=0;const l=a.length;let u;t?u=t:u=e*a[l-1];let f=0,h=l-1,d;for(;f<=h;)if(s=Math.floor(f+(h-f)/2),d=a[s]-u,d<0)f=s+1;else if(d>0)h=s-1;else{h=s;break}if(s=h,a[s]===u)return s/(l-1);const g=a[s],_=a[s+1]-g,x=(u-g)/_;return(s+x)/(l-1)}getTangent(e,t){let s=e-1e-4,l=e+1e-4;s<0&&(s=0),l>1&&(l=1);const u=this.getPoint(s),f=this.getPoint(l),h=t||(u.isVector2?new Oe:new G);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const a=this.getUtoTmapping(e);return this.getTangent(a,t)}computeFrenetFrames(e,t=!1){const a=new G,s=[],l=[],u=[],f=new G,h=new At;for(let x=0;x<=e;x++){const M=x/e;s[x]=this.getTangentAt(M,new G)}l[0]=new G,u[0]=new G;let d=Number.MAX_VALUE;const g=Math.abs(s[0].x),v=Math.abs(s[0].y),_=Math.abs(s[0].z);g<=d&&(d=g,a.set(1,0,0)),v<=d&&(d=v,a.set(0,1,0)),_<=d&&a.set(0,0,1),f.crossVectors(s[0],a).normalize(),l[0].crossVectors(s[0],f),u[0].crossVectors(s[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(s[x-1],s[x]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Dt(s[x-1].dot(s[x]),-1,1));l[x].applyMatrix4(h.makeRotationAxis(f,M))}u[x].crossVectors(s[x],l[x])}if(t===!0){let x=Math.acos(Dt(l[0].dot(l[e]),-1,1));x/=e,s[0].dot(f.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(s[M],x*M)),u[M].crossVectors(s[M],l[M])}return{tangents:s,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class i0 extends Ma{constructor(e=0,t=0,a=1,s=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=a,this.yRadius=s,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Oe){const a=t,s=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=s;for(;l>s;)l-=s;l<Number.EPSILON&&(u?l=0:l=s),this.aClockwise===!0&&!u&&(l===s?l=-s:l=l-s);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),d=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=h-this.aX,x=d-this.aY;h=_*g-x*v+this.aX,d=_*v+x*g+this.aY}return a.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class x1 extends i0{constructor(e,t,a,s,l,u){super(e,t,a,a,s,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function a0(){let o=0,e=0,t=0,a=0;function s(l,u,f,h){o=l,e=f,t=-3*l+3*u-2*f-h,a=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,d){s(u,f,d*(f-l),d*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,d,g,v){let _=(u-l)/d-(f-l)/(d+g)+(f-u)/g,x=(f-u)/g-(h-u)/(g+v)+(h-f)/v;_*=g,x*=g,s(u,f,_,x)},calc:function(l){const u=l*l,f=u*l;return o+e*l+t*u+a*f}}}const Ju=new G,hp=new a0,dp=new a0,pp=new a0;class ym extends Ma{constructor(e=[],t=!1,a="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=a,this.tension=s}getPoint(e,t=new G){const a=t,s=this.points,l=s.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let d,g;this.closed||f>0?d=s[(f-1)%l]:(Ju.subVectors(s[0],s[1]).add(s[0]),d=Ju);const v=s[f%l],_=s[(f+1)%l];if(this.closed||f+2<l?g=s[(f+2)%l]:(Ju.subVectors(s[l-1],s[l-2]).add(s[l-1]),g=Ju),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(v),x),T=Math.pow(v.distanceToSquared(_),x),S=Math.pow(_.distanceToSquared(g),x);T<1e-4&&(T=1),M<1e-4&&(M=T),S<1e-4&&(S=T),hp.initNonuniformCatmullRom(d.x,v.x,_.x,g.x,M,T,S),dp.initNonuniformCatmullRom(d.y,v.y,_.y,g.y,M,T,S),pp.initNonuniformCatmullRom(d.z,v.z,_.z,g.z,M,T,S)}else this.curveType==="catmullrom"&&(hp.initCatmullRom(d.x,v.x,_.x,g.x,this.tension),dp.initCatmullRom(d.y,v.y,_.y,g.y,this.tension),pp.initCatmullRom(d.z,v.z,_.z,g.z,this.tension));return a.set(hp.calc(h),dp.calc(h),pp.calc(h)),a}copy(e){super.copy(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,a=this.points.length;t<a;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kx(o,e,t,a,s){const l=(a-e)*.5,u=(s-t)*.5,f=o*o,h=o*f;return(2*t-2*a+l+u)*h+(-3*t+3*a-2*l-u)*f+l*o+t}function y1(o,e){const t=1-o;return t*t*e}function S1(o,e){return 2*(1-o)*o*e}function M1(o,e){return o*o*e}function Jl(o,e,t,a){return y1(o,e)+S1(o,t)+M1(o,a)}function b1(o,e){const t=1-o;return t*t*t*e}function T1(o,e){const t=1-o;return 3*t*t*o*e}function E1(o,e){return 3*(1-o)*o*o*e}function A1(o,e){return o*o*o*e}function Ql(o,e,t,a,s){return b1(o,e)+T1(o,t)+E1(o,a)+A1(o,s)}class nS extends Ma{constructor(e=new Oe,t=new Oe,a=new Oe,s=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=a,this.v3=s}getPoint(e,t=new Oe){const a=t,s=this.v0,l=this.v1,u=this.v2,f=this.v3;return a.set(Ql(e,s.x,l.x,u.x,f.x),Ql(e,s.y,l.y,u.y,f.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w1 extends Ma{constructor(e=new G,t=new G,a=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=a,this.v3=s}getPoint(e,t=new G){const a=t,s=this.v0,l=this.v1,u=this.v2,f=this.v3;return a.set(Ql(e,s.x,l.x,u.x,f.x),Ql(e,s.y,l.y,u.y,f.y),Ql(e,s.z,l.z,u.z,f.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iS extends Ma{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const a=t;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R1 extends Ma{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const a=t;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aS extends Ma{constructor(e=new Oe,t=new Oe,a=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=a}getPoint(e,t=new Oe){const a=t,s=this.v0,l=this.v1,u=this.v2;return a.set(Jl(e,s.x,l.x,u.x),Jl(e,s.y,l.y,u.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C1 extends Ma{constructor(e=new G,t=new G,a=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=a}getPoint(e,t=new G){const a=t,s=this.v0,l=this.v1,u=this.v2;return a.set(Jl(e,s.x,l.x,u.x),Jl(e,s.y,l.y,u.y),Jl(e,s.z,l.z,u.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sS extends Ma{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const a=t,s=this.points,l=(s.length-1)*e,u=Math.floor(l),f=l-u,h=s[u===0?u:u-1],d=s[u],g=s[u>s.length-2?s.length-1:u+1],v=s[u>s.length-3?s.length-1:u+2];return a.set(kx(f,h.x,d.x,g.x,v.x),kx(f,h.y,d.y,g.y,v.y)),a}copy(e){super.copy(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,a=this.points.length;t<a;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(new Oe().fromArray(s))}return this}}var Sm=Object.freeze({__proto__:null,ArcCurve:x1,CatmullRomCurve3:ym,CubicBezierCurve:nS,CubicBezierCurve3:w1,EllipseCurve:i0,LineCurve:iS,LineCurve3:R1,QuadraticBezierCurve:aS,QuadraticBezierCurve3:C1,SplineCurve:sS});class D1 extends Ma{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const a=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sm[a](t,e))}return this}getPoint(e,t){const a=e*this.getLength(),s=this.getCurveLengths();let l=0;for(;l<s.length;){if(s[l]>=a){const u=s[l]-a,f=this.curves[l],h=f.getLength(),d=h===0?0:1-u/h;return f.getPointAt(d,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let a=0,s=this.curves.length;a<s;a++)t+=this.curves[a].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let a=0;a<=e;a++)t.push(this.getPoint(a/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let a;for(let s=0,l=this.curves;s<l.length;s++){const u=l[s],f=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,h=u.getPoints(f);for(let d=0;d<h.length;d++){const g=h[d];a&&a.equals(g)||(t.push(g),a=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,a=e.curves.length;t<a;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,a=this.curves.length;t<a;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,a=e.curves.length;t<a;t++){const s=e.curves[t];this.curves.push(new Sm[s.type]().fromJSON(s))}return this}}class Xx extends D1{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,a=e.length;t<a;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const a=new iS(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(a),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,a,s){const l=new aS(this.currentPoint.clone(),new Oe(e,t),new Oe(a,s));return this.curves.push(l),this.currentPoint.set(a,s),this}bezierCurveTo(e,t,a,s,l,u){const f=new nS(this.currentPoint.clone(),new Oe(e,t),new Oe(a,s),new Oe(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),a=new sS(t);return this.curves.push(a),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,a,s,l,u){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,a,s,l,u),this}absarc(e,t,a,s,l,u){return this.absellipse(e,t,a,a,s,l,u),this}ellipse(e,t,a,s,l,u,f,h){const d=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+d,t+g,a,s,l,u,f,h),this}absellipse(e,t,a,s,l,u,f,h){const d=new i0(e,t,a,s,l,u,f,h);if(this.curves.length>0){const v=d.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(d);const g=d.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rS extends Xx{constructor(e){super(e),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let a=0,s=this.holes.length;a<s;a++)t[a]=this.holes[a].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,a=e.holes.length;t<a;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,a=this.holes.length;t<a;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,a=e.holes.length;t<a;t++){const s=e.holes[t];this.holes.push(new Xx().fromJSON(s))}return this}}function N1(o,e,t=2){const a=e&&e.length,s=a?e[0]*t:o.length;let l=oS(o,0,s,t,!0);const u=[];if(!l||l.next===l.prev)return u;let f,h,d;if(a&&(l=I1(o,e,l,t)),o.length>80*t){f=o[0],h=o[1];let g=f,v=h;for(let _=t;_<s;_+=t){const x=o[_],M=o[_+1];x<f&&(f=x),M<h&&(h=M),x>g&&(g=x),M>v&&(v=M)}d=Math.max(g-f,v-h),d=d!==0?32767/d:0}return lc(l,u,t,f,h,d,0),u}function oS(o,e,t,a,s){let l;if(s===j1(o,e,t,a)>0)for(let u=e;u<t;u+=a)l=Wx(u/a|0,o[u],o[u+1],l);else for(let u=t-a;u>=e;u-=a)l=Wx(u/a|0,o[u],o[u+1],l);return l&&No(l,l.next)&&(uc(l),l=l.next),l}function gr(o,e){if(!o)return o;e||(e=o);let t=o,a;do if(a=!1,!t.steiner&&(No(t,t.next)||xn(t.prev,t,t.next)===0)){if(uc(t),t=e=t.prev,t===t.next)break;a=!0}else t=t.next;while(a||t!==e);return e}function lc(o,e,t,a,s,l,u){if(!o)return;!u&&l&&G1(o,a,s,l);let f=o;for(;o.prev!==o.next;){const h=o.prev,d=o.next;if(l?U1(o,a,s,l):L1(o)){e.push(h.i,o.i,d.i),uc(o),o=d.next,f=d.next;continue}if(o=d,o===f){u?u===1?(o=P1(gr(o),e),lc(o,e,t,a,s,l,2)):u===2&&O1(o,e,t,a,s,l):lc(gr(o),e,t,a,s,l,1);break}}}function L1(o){const e=o.prev,t=o,a=o.next;if(xn(e,t,a)>=0)return!1;const s=e.x,l=t.x,u=a.x,f=e.y,h=t.y,d=a.y,g=Math.min(s,l,u),v=Math.min(f,h,d),_=Math.max(s,l,u),x=Math.max(f,h,d);let M=a.next;for(;M!==e;){if(M.x>=g&&M.x<=_&&M.y>=v&&M.y<=x&&jl(s,f,l,h,u,d,M.x,M.y)&&xn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function U1(o,e,t,a){const s=o.prev,l=o,u=o.next;if(xn(s,l,u)>=0)return!1;const f=s.x,h=l.x,d=u.x,g=s.y,v=l.y,_=u.y,x=Math.min(f,h,d),M=Math.min(g,v,_),T=Math.max(f,h,d),S=Math.max(g,v,_),y=Mm(x,M,e,t,a),L=Mm(T,S,e,t,a);let R=o.prevZ,w=o.nextZ;for(;R&&R.z>=y&&w&&w.z<=L;){if(R.x>=x&&R.x<=T&&R.y>=M&&R.y<=S&&R!==s&&R!==u&&jl(f,g,h,v,d,_,R.x,R.y)&&xn(R.prev,R,R.next)>=0||(R=R.prevZ,w.x>=x&&w.x<=T&&w.y>=M&&w.y<=S&&w!==s&&w!==u&&jl(f,g,h,v,d,_,w.x,w.y)&&xn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;R&&R.z>=y;){if(R.x>=x&&R.x<=T&&R.y>=M&&R.y<=S&&R!==s&&R!==u&&jl(f,g,h,v,d,_,R.x,R.y)&&xn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;w&&w.z<=L;){if(w.x>=x&&w.x<=T&&w.y>=M&&w.y<=S&&w!==s&&w!==u&&jl(f,g,h,v,d,_,w.x,w.y)&&xn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function P1(o,e){let t=o;do{const a=t.prev,s=t.next.next;!No(a,s)&&cS(a,t,t.next,s)&&cc(a,s)&&cc(s,a)&&(e.push(a.i,t.i,s.i),uc(t),uc(t.next),t=o=s),t=t.next}while(t!==o);return gr(t)}function O1(o,e,t,a,s,l){let u=o;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&X1(u,f)){let h=uS(u,f);u=gr(u,u.next),h=gr(h,h.next),lc(u,e,t,a,s,l,0),lc(h,e,t,a,s,l,0);return}f=f.next}u=u.next}while(u!==o)}function I1(o,e,t,a){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l]*a,h=l<u-1?e[l+1]*a:o.length,d=oS(o,f,h,a,!1);d===d.next&&(d.steiner=!0),s.push(k1(d))}s.sort(z1);for(let l=0;l<s.length;l++)t=B1(s[l],t);return t}function z1(o,e){let t=o.x-e.x;if(t===0&&(t=o.y-e.y,t===0)){const a=(o.next.y-o.y)/(o.next.x-o.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=a-s}return t}function B1(o,e){const t=F1(o,e);if(!t)return e;const a=uS(t,o);return gr(a,a.next),gr(t,t.next)}function F1(o,e){let t=e;const a=o.x,s=o.y;let l=-1/0,u;if(No(o,t))return t;do{if(No(o,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const v=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>l&&(l=v,u=t.x<t.next.x?t:t.next,v===a))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,h=u.x,d=u.y;let g=1/0;t=u;do{if(a>=t.x&&t.x>=h&&a!==t.x&&lS(s<d?a:l,s,h,d,s<d?l:a,s,t.x,t.y)){const v=Math.abs(s-t.y)/(a-t.x);cc(t,o)&&(v<g||v===g&&(t.x>u.x||t.x===u.x&&H1(u,t)))&&(u=t,g=v)}t=t.next}while(t!==f);return u}function H1(o,e){return xn(o.prev,o,e.prev)<0&&xn(e.next,o,o.next)<0}function G1(o,e,t,a){let s=o;do s.z===0&&(s.z=Mm(s.x,s.y,e,t,a)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,V1(s)}function V1(o){let e,t=1;do{let a=o,s;o=null;let l=null;for(e=0;a;){e++;let u=a,f=0;for(let d=0;d<t&&(f++,u=u.nextZ,!!u);d++);let h=t;for(;f>0||h>0&&u;)f!==0&&(h===0||!u||a.z<=u.z)?(s=a,a=a.nextZ,f--):(s=u,u=u.nextZ,h--),l?l.nextZ=s:o=s,s.prevZ=l,l=s;a=u}l.nextZ=null,t*=2}while(e>1);return o}function Mm(o,e,t,a,s){return o=(o-t)*s|0,e=(e-a)*s|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function k1(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function lS(o,e,t,a,s,l,u,f){return(s-u)*(e-f)>=(o-u)*(l-f)&&(o-u)*(a-f)>=(t-u)*(e-f)&&(t-u)*(l-f)>=(s-u)*(a-f)}function jl(o,e,t,a,s,l,u,f){return!(o===u&&e===f)&&lS(o,e,t,a,s,l,u,f)}function X1(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!W1(o,e)&&(cc(o,e)&&cc(e,o)&&q1(o,e)&&(xn(o.prev,o,e.prev)||xn(o,e.prev,e))||No(o,e)&&xn(o.prev,o,o.next)>0&&xn(e.prev,e,e.next)>0)}function xn(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function No(o,e){return o.x===e.x&&o.y===e.y}function cS(o,e,t,a){const s=$u(xn(o,e,t)),l=$u(xn(o,e,a)),u=$u(xn(t,a,o)),f=$u(xn(t,a,e));return!!(s!==l&&u!==f||s===0&&Qu(o,t,e)||l===0&&Qu(o,a,e)||u===0&&Qu(t,o,a)||f===0&&Qu(t,e,a))}function Qu(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function $u(o){return o>0?1:o<0?-1:0}function W1(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&cS(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function cc(o,e){return xn(o.prev,o,o.next)<0?xn(o,e,o.next)>=0&&xn(o,o.prev,e)>=0:xn(o,e,o.prev)<0||xn(o,o.next,e)<0}function q1(o,e){let t=o,a=!1;const s=(o.x+e.x)/2,l=(o.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&s<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(a=!a),t=t.next;while(t!==o);return a}function uS(o,e){const t=bm(o.i,o.x,o.y),a=bm(e.i,e.x,e.y),s=o.next,l=e.prev;return o.next=e,e.prev=o,t.next=s,s.prev=t,a.next=t,t.prev=a,l.next=a,a.prev=l,a}function Wx(o,e,t,a){const s=bm(o,e,t);return a?(s.next=a.next,s.prev=a,a.next.prev=s,a.next=s):(s.prev=s,s.next=s),s}function uc(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function bm(o,e,t){return{i:o,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function j1(o,e,t,a){let s=0;for(let l=e,u=t-a;l<t;l+=a)s+=(o[u]-o[l])*(o[l+1]+o[u+1]),u=l;return s}class Y1{static triangulate(e,t,a=2){return N1(e,t,a)}}class So{static area(e){const t=e.length;let a=0;for(let s=t-1,l=0;l<t;s=l++)a+=e[s].x*e[l].y-e[l].x*e[s].y;return a*.5}static isClockWise(e){return So.area(e)<0}static triangulateShape(e,t){const a=[],s=[],l=[];qx(e),jx(a,e);let u=e.length;t.forEach(qx);for(let h=0;h<t.length;h++)s.push(u),u+=t[h].length,jx(a,t[h]);const f=Y1.triangulate(a,s);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function qx(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function jx(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class s0 extends gn{constructor(e=new rS([new Oe(.5,.5),new Oe(-.5,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const a=this,s=[],l=[];for(let f=0,h=e.length;f<h;f++){const d=e[f];u(d)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(l,2)),this.computeVertexNormals();function u(f){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:x-.1,T=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,L=t.UVGenerator!==void 0?t.UVGenerator:Z1;let R,w=!1,U,I,O,q;if(y){R=y.getSpacedPoints(g),w=!0,_=!1;const xe=y.isCatmullRomCurve3?y.closed:!1;U=y.computeFrenetFrames(g,xe),I=new G,O=new G,q=new G}_||(S=0,x=0,M=0,T=0);const A=f.extractPoints(d);let N=A.shape;const V=A.holes;if(!So.isClockWise(N)){N=N.reverse();for(let xe=0,we=V.length;xe<we;xe++){const De=V[xe];So.isClockWise(De)&&(V[xe]=De.reverse())}}function te(xe){const De=10000000000000001e-36;let Ye=xe[0];for(let F=1;F<=xe.length;F++){const it=F%xe.length,Ze=xe[it],ot=Ze.x-Ye.x,Ve=Ze.y-Ye.y,P=ot*ot+Ve*Ve,E=Math.max(Math.abs(Ze.x),Math.abs(Ze.y),Math.abs(Ye.x),Math.abs(Ye.y)),Y=De*E*E;if(P<=Y){xe.splice(it,1),F--;continue}Ye=Ze}}te(N),V.forEach(te);const ce=V.length,le=N;for(let xe=0;xe<ce;xe++){const we=V[xe];N=N.concat(we)}function H(xe,we,De){return we||vt("ExtrudeGeometry: vec does not exist"),xe.clone().addScaledVector(we,De)}const k=N.length;function ae(xe,we,De){let Ye,F,it;const Ze=xe.x-we.x,ot=xe.y-we.y,Ve=De.x-xe.x,P=De.y-xe.y,E=Ze*Ze+ot*ot,Y=Ze*P-ot*Ve;if(Math.abs(Y)>Number.EPSILON){const ve=Math.sqrt(E),he=Math.sqrt(Ve*Ve+P*P),B=we.x-ot/ve,ee=we.y+Ze/ve,de=De.x-P/he,Ne=De.y+Ve/he,Ie=((de-B)*P-(Ne-ee)*Ve)/(Ze*P-ot*Ve);Ye=B+Ze*Ie-xe.x,F=ee+ot*Ie-xe.y;const j=Ye*Ye+F*F;if(j<=2)return new Oe(Ye,F);it=Math.sqrt(j/2)}else{let ve=!1;Ze>Number.EPSILON?Ve>Number.EPSILON&&(ve=!0):Ze<-Number.EPSILON?Ve<-Number.EPSILON&&(ve=!0):Math.sign(ot)===Math.sign(P)&&(ve=!0),ve?(Ye=-ot,F=Ze,it=Math.sqrt(E)):(Ye=Ze,F=ot,it=Math.sqrt(E/2))}return new Oe(Ye/it,F/it)}const Te=[];for(let xe=0,we=le.length,De=we-1,Ye=xe+1;xe<we;xe++,De++,Ye++)De===we&&(De=0),Ye===we&&(Ye=0),Te[xe]=ae(le[xe],le[De],le[Ye]);const Ee=[];let z,ne=Te.concat();for(let xe=0,we=ce;xe<we;xe++){const De=V[xe];z=[];for(let Ye=0,F=De.length,it=F-1,Ze=Ye+1;Ye<F;Ye++,it++,Ze++)it===F&&(it=0),Ze===F&&(Ze=0),z[Ye]=ae(De[Ye],De[it],De[Ze]);Ee.push(z),ne=ne.concat(z)}let ye;if(S===0)ye=So.triangulateShape(le,V);else{const xe=[],we=[];for(let De=0;De<S;De++){const Ye=De/S,F=x*Math.cos(Ye*Math.PI/2),it=M*Math.sin(Ye*Math.PI/2)+T;for(let Ze=0,ot=le.length;Ze<ot;Ze++){const Ve=H(le[Ze],Te[Ze],it);Pe(Ve.x,Ve.y,-F),Ye===0&&xe.push(Ve)}for(let Ze=0,ot=ce;Ze<ot;Ze++){const Ve=V[Ze];z=Ee[Ze];const P=[];for(let E=0,Y=Ve.length;E<Y;E++){const ve=H(Ve[E],z[E],it);Pe(ve.x,ve.y,-F),Ye===0&&P.push(ve)}Ye===0&&we.push(P)}}ye=So.triangulateShape(xe,we)}const Ue=ye.length,ge=M+T;for(let xe=0;xe<k;xe++){const we=_?H(N[xe],ne[xe],ge):N[xe];w?(O.copy(U.normals[0]).multiplyScalar(we.x),I.copy(U.binormals[0]).multiplyScalar(we.y),q.copy(R[0]).add(O).add(I),Pe(q.x,q.y,q.z)):Pe(we.x,we.y,0)}for(let xe=1;xe<=g;xe++)for(let we=0;we<k;we++){const De=_?H(N[we],ne[we],ge):N[we];w?(O.copy(U.normals[xe]).multiplyScalar(De.x),I.copy(U.binormals[xe]).multiplyScalar(De.y),q.copy(R[xe]).add(O).add(I),Pe(q.x,q.y,q.z)):Pe(De.x,De.y,v/g*xe)}for(let xe=S-1;xe>=0;xe--){const we=xe/S,De=x*Math.cos(we*Math.PI/2),Ye=M*Math.sin(we*Math.PI/2)+T;for(let F=0,it=le.length;F<it;F++){const Ze=H(le[F],Te[F],Ye);Pe(Ze.x,Ze.y,v+De)}for(let F=0,it=V.length;F<it;F++){const Ze=V[F];z=Ee[F];for(let ot=0,Ve=Ze.length;ot<Ve;ot++){const P=H(Ze[ot],z[ot],Ye);w?Pe(P.x,P.y+R[g-1].y,R[g-1].x+De):Pe(P.x,P.y,v+De)}}}K(),se();function K(){const xe=s.length/3;if(_){let we=0,De=k*we;for(let Ye=0;Ye<Ue;Ye++){const F=ye[Ye];Xe(F[2]+De,F[1]+De,F[0]+De)}we=g+S*2,De=k*we;for(let Ye=0;Ye<Ue;Ye++){const F=ye[Ye];Xe(F[0]+De,F[1]+De,F[2]+De)}}else{for(let we=0;we<Ue;we++){const De=ye[we];Xe(De[2],De[1],De[0])}for(let we=0;we<Ue;we++){const De=ye[we];Xe(De[0]+k*g,De[1]+k*g,De[2]+k*g)}}a.addGroup(xe,s.length/3-xe,0)}function se(){const xe=s.length/3;let we=0;He(le,we),we+=le.length;for(let De=0,Ye=V.length;De<Ye;De++){const F=V[De];He(F,we),we+=F.length}a.addGroup(xe,s.length/3-xe,1)}function He(xe,we){let De=xe.length;for(;--De>=0;){const Ye=De;let F=De-1;F<0&&(F=xe.length-1);for(let it=0,Ze=g+S*2;it<Ze;it++){const ot=k*it,Ve=k*(it+1),P=we+Ye+ot,E=we+F+ot,Y=we+F+Ve,ve=we+Ye+Ve;_t(P,E,Y,ve)}}}function Pe(xe,we,De){h.push(xe),h.push(we),h.push(De)}function Xe(xe,we,De){xt(xe),xt(we),xt(De);const Ye=s.length/3,F=L.generateTopUV(a,s,Ye-3,Ye-2,Ye-1);ht(F[0]),ht(F[1]),ht(F[2])}function _t(xe,we,De,Ye){xt(xe),xt(we),xt(Ye),xt(we),xt(De),xt(Ye);const F=s.length/3,it=L.generateSideWallUV(a,s,F-6,F-3,F-2,F-1);ht(it[0]),ht(it[1]),ht(it[3]),ht(it[1]),ht(it[2]),ht(it[3])}function xt(xe){s.push(h[xe*3+0]),s.push(h[xe*3+1]),s.push(h[xe*3+2])}function ht(xe){l.push(xe.x),l.push(xe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,a=this.parameters.options;return K1(t,a,e)}static fromJSON(e,t){const a=[];for(let l=0,u=e.shapes.length;l<u;l++){const f=t[e.shapes[l]];a.push(f)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Sm[s.type]().fromJSON(s)),new s0(a,e.options)}}const Z1={generateTopUV:function(o,e,t,a,s){const l=e[t*3],u=e[t*3+1],f=e[a*3],h=e[a*3+1],d=e[s*3],g=e[s*3+1];return[new Oe(l,u),new Oe(f,h),new Oe(d,g)]},generateSideWallUV:function(o,e,t,a,s,l){const u=e[t*3],f=e[t*3+1],h=e[t*3+2],d=e[a*3],g=e[a*3+1],v=e[a*3+2],_=e[s*3],x=e[s*3+1],M=e[s*3+2],T=e[l*3],S=e[l*3+1],y=e[l*3+2];return Math.abs(f-g)<Math.abs(u-d)?[new Oe(u,1-h),new Oe(d,1-v),new Oe(_,1-M),new Oe(T,1-y)]:[new Oe(f,1-h),new Oe(g,1-v),new Oe(x,1-M),new Oe(S,1-y)]}};function K1(o,e,t){if(t.shapes=[],Array.isArray(o))for(let a=0,s=o.length;a<s;a++){const l=o[a];t.shapes.push(l.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dc extends gn{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,u=t/2,f=Math.floor(a),h=Math.floor(s),d=f+1,g=h+1,v=e/f,_=t/h,x=[],M=[],T=[],S=[];for(let y=0;y<g;y++){const L=y*_-u;for(let R=0;R<d;R++){const w=R*v-l;M.push(w,-L,0),T.push(0,0,1),S.push(R/f),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let L=0;L<f;L++){const R=L+d*y,w=L+d*(y+1),U=L+1+d*(y+1),I=L+1+d*y;x.push(R,w,I),x.push(w,U,I)}this.setIndex(x),this.setAttribute("position",new Xt(M,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class r0 extends gn{constructor(e=.5,t=1,a=32,s=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:a,phiSegments:s,thetaStart:l,thetaLength:u},a=Math.max(3,a),s=Math.max(1,s);const f=[],h=[],d=[],g=[];let v=e;const _=(t-e)/s,x=new G,M=new Oe;for(let T=0;T<=s;T++){for(let S=0;S<=a;S++){const y=l+S/a*u;x.x=v*Math.cos(y),x.y=v*Math.sin(y),h.push(x.x,x.y,x.z),d.push(0,0,1),M.x=(x.x/t+1)/2,M.y=(x.y/t+1)/2,g.push(M.x,M.y)}v+=_}for(let T=0;T<s;T++){const S=T*(a+1);for(let y=0;y<a;y++){const L=y+S,R=L,w=L+a+1,U=L+a+2,I=L+1;f.push(R,w,I),f.push(w,U,I)}}this.setIndex(f),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ta extends gn{constructor(e=1,t=32,a=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const h=Math.min(u+f,Math.PI);let d=0;const g=[],v=new G,_=new G,x=[],M=[],T=[],S=[];for(let y=0;y<=a;y++){const L=[],R=y/a;let w=0;y===0&&u===0?w=.5/t:y===a&&h===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){const I=U/t;v.x=-e*Math.cos(s+I*l)*Math.sin(u+R*f),v.y=e*Math.cos(u+R*f),v.z=e*Math.sin(s+I*l)*Math.sin(u+R*f),M.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),S.push(I+w,1-R),L.push(d++)}g.push(L)}for(let y=0;y<a;y++)for(let L=0;L<t;L++){const R=g[y][L+1],w=g[y][L],U=g[y+1][L],I=g[y+1][L+1];(y!==0||u>0)&&x.push(R,w,I),(y!==a-1||h<Math.PI)&&x.push(w,U,I)}this.setIndex(x),this.setAttribute("position",new Xt(M,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mo extends gn{constructor(e=1,t=.4,a=12,s=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:s,arc:l},a=Math.floor(a),s=Math.floor(s);const u=[],f=[],h=[],d=[],g=new G,v=new G,_=new G;for(let x=0;x<=a;x++)for(let M=0;M<=s;M++){const T=M/s*l,S=x/a*Math.PI*2;v.x=(e+t*Math.cos(S))*Math.cos(T),v.y=(e+t*Math.cos(S))*Math.sin(T),v.z=t*Math.sin(S),f.push(v.x,v.y,v.z),g.x=e*Math.cos(T),g.y=e*Math.sin(T),_.subVectors(v,g).normalize(),h.push(_.x,_.y,_.z),d.push(M/s),d.push(x/a)}for(let x=1;x<=a;x++)for(let M=1;M<=s;M++){const T=(s+1)*x+M-1,S=(s+1)*(x-1)+M-1,y=(s+1)*(x-1)+M,L=(s+1)*x+M;u.push(T,S,L),u.push(S,y,L)}this.setIndex(u),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fS extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vr extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wm,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sa extends vr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tm extends ji{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wm,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class J1 extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q1 extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ef(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function $1(o){function e(s,l){return o[s]-o[l]}const t=o.length,a=new Array(t);for(let s=0;s!==t;++s)a[s]=s;return a.sort(e),a}function Yx(o,e,t){const a=o.length,s=new o.constructor(a);for(let l=0,u=0;u!==a;++l){const f=t[l]*e;for(let h=0;h!==e;++h)s[u++]=o[f+h]}return s}function hS(o,e,t,a){let s=1,l=o[0];for(;l!==void 0&&l[a]===void 0;)l=o[s++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(e.push(l.time),t.push(...u)),l=o[s++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(e.push(l.time),u.toArray(t,t.length)),l=o[s++];while(l!==void 0);else do u=l[a],u!==void 0&&(e.push(l.time),t.push(u)),l=o[s++];while(l!==void 0)}class pc{constructor(e,t,a,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let a=this._cachedIndex,s=t[a],l=t[a-1];e:{t:{let u;n:{i:if(!(e<s)){for(let f=a+2;;){if(s===void 0){if(e<l)break i;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(l=s,s=t[++a],e<s)break t}u=t.length;break n}if(!(e>=l)){const f=t[1];e<f&&(a=2,l=f);for(let h=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===h)break;if(s=l,l=t[--a-1],e>=l)break t}u=a,a=0;break n}break e}for(;a<u;){const f=a+u>>>1;e<t[f]?u=f:a=f+1}if(s=t[a],l=t[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,s)}return this.interpolate_(a,l,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s;for(let u=0;u!==s;++u)t[u]=a[l+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class eE extends pc{constructor(e,t,a,s){super(e,t,a,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ax,endingEnd:ax}}intervalChanged_(e,t,a){const s=this.parameterPositions;let l=e-2,u=e+1,f=s[l],h=s[u];if(f===void 0)switch(this.getSettings_().endingStart){case sx:l=e,f=2*t-a;break;case rx:l=s.length-2,f=t+s[l]-s[l+1];break;default:l=e,f=a}if(h===void 0)switch(this.getSettings_().endingEnd){case sx:u=e,h=2*a-t;break;case rx:u=1,h=a+s[1]-s[0];break;default:u=e-1,h=t}const d=(a-t)*.5,g=this.valueSize;this._weightPrev=d/(t-f),this._weightNext=d/(h-a),this._offsetPrev=l*g,this._offsetNext=u*g}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(a-t)/(s-t),T=M*M,S=T*M,y=-_*S+2*_*T-_*M,L=(1+_)*S+(-1.5-2*_)*T+(-.5+_)*M+1,R=(-1-x)*S+(1.5+x)*T+.5*M,w=x*S-x*T;for(let U=0;U!==f;++U)l[U]=y*u[g+U]+L*u[d+U]+R*u[h+U]+w*u[v+U];return l}}class tE extends pc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=(a-t)/(s-t),v=1-g;for(let _=0;_!==f;++_)l[_]=u[d+_]*v+u[h+_]*g;return l}}class nE extends pc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ra{constructor(e,t,a,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ef(t,this.TimeBufferType),this.values=ef(a,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:ef(e.times,Array),values:ef(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(a.interpolation=s)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new nE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nc:t=this.InterpolantFactoryMethodDiscrete;break;case ic:t=this.InterpolantFactoryMethodLinear;break;case Fd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return ut("KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nc;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return Fd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let a=0,s=t.length;a!==s;++a)t[a]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let a=0,s=t.length;a!==s;++a)t[a]*=e}return this}trim(e,t){const a=this.times,s=a.length;let l=0,u=s-1;for(;l!==s&&a[l]<e;)++l;for(;u!==-1&&a[u]>t;)--u;if(++u,l!==0||u!==s){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(vt("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,s=this.values,l=a.length;l===0&&(vt("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==l;f++){const h=a[f];if(typeof h=="number"&&isNaN(h)){vt("KeyframeTrack: Time is not a valid number.",this,f,h),e=!1;break}if(u!==null&&u>h){vt("KeyframeTrack: Out of order keys.",this,f,h,u),e=!1;break}u=h}if(s!==void 0&&ST(s))for(let f=0,h=s.length;f!==h;++f){const d=s[f];if(isNaN(d)){vt("KeyframeTrack: Value is not a valid number.",this,f,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),s=this.getInterpolation()===Fd,l=e.length-1;let u=1;for(let f=1;f<l;++f){let h=!1;const d=e[f],g=e[f+1];if(d!==g&&(f!==1||d!==e[0]))if(s)h=!0;else{const v=f*a,_=v-a,x=v+a;for(let M=0;M!==a;++M){const T=t[v+M];if(T!==t[_+M]||T!==t[x+M]){h=!0;break}}}if(h){if(f!==u){e[u]=e[f];const v=f*a,_=u*a;for(let x=0;x!==a;++x)t[_+x]=t[v+x]}++u}}if(l>0){e[u]=e[l];for(let f=l*a,h=u*a,d=0;d!==a;++d)t[h+d]=t[f+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*a)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),a=this.constructor,s=new a(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ra.prototype.ValueTypeName="";ra.prototype.TimeBufferType=Float32Array;ra.prototype.ValueBufferType=Float32Array;ra.prototype.DefaultInterpolation=ic;class Io extends ra{constructor(e,t,a){super(e,t,a)}}Io.prototype.ValueTypeName="bool";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=nc;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class dS extends ra{constructor(e,t,a,s){super(e,t,a,s)}}dS.prototype.ValueTypeName="color";class Lo extends ra{constructor(e,t,a,s){super(e,t,a,s)}}Lo.prototype.ValueTypeName="number";class iE extends pc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=(a-t)/(s-t);let d=e*f;for(let g=d+f;d!==g;d+=4)Is.slerpFlat(l,0,u,d-f,u,d,h);return l}}class Uo extends ra{constructor(e,t,a,s){super(e,t,a,s)}InterpolantFactoryMethodLinear(e){return new iE(this.times,this.values,this.getValueSize(),e)}}Uo.prototype.ValueTypeName="quaternion";Uo.prototype.InterpolantFactoryMethodSmooth=void 0;class zo extends ra{constructor(e,t,a){super(e,t,a)}}zo.prototype.ValueTypeName="string";zo.prototype.ValueBufferType=Array;zo.prototype.DefaultInterpolation=nc;zo.prototype.InterpolantFactoryMethodLinear=void 0;zo.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends ra{constructor(e,t,a,s){super(e,t,a,s)}}Po.prototype.ValueTypeName="vector";class aE{constructor(e="",t=-1,a=[],s=fT){this.name=e,this.tracks=a,this.duration=t,this.blendMode=s,this.uuid=qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],a=e.tracks,s=1/(e.fps||1);for(let u=0,f=a.length;u!==f;++u)t.push(rE(a[u]).scale(s));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l.userData=JSON.parse(e.userData||"{}"),l}static toJSON(e){const t=[],a=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let l=0,u=a.length;l!==u;++l)t.push(ra.toJSON(a[l]));return s}static CreateFromMorphTargetSequence(e,t,a,s){const l=t.length,u=[];for(let f=0;f<l;f++){let h=[],d=[];h.push((f+l-1)%l,f,(f+1)%l),d.push(0,1,0);const g=$1(h);h=Yx(h,1,g),d=Yx(d,1,g),!s&&h[0]===0&&(h.push(l),d.push(d[0])),u.push(new Lo(".morphTargetInfluences["+t[f].name+"]",h,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,t){let a=e;if(!Array.isArray(e)){const s=e;a=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<a.length;s++)if(a[s].name===t)return a[s];return null}static CreateClipsFromMorphTargetSequences(e,t,a){const s={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,h=e.length;f<h;f++){const d=e[f],g=d.name.match(l);if(g&&g.length>1){const v=g[1];let _=s[v];_||(s[v]=_=[]),_.push(d)}}const u=[];for(const f in s)u.push(this.CreateFromMorphTargetSequence(f,s[f],t,a));return u}static parseAnimation(e,t){if(ut("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return vt("AnimationClip: No animation in JSONLoader data."),null;const a=function(v,_,x,M,T){if(x.length!==0){const S=[],y=[];hS(x,S,y,M),S.length!==0&&T.push(new v(_,S,y))}},s=[],l=e.name||"default",u=e.fps||30,f=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let v=0;v<d.length;v++){const _=d[v].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let T=0;T<_[M].morphTargets.length;T++)x[_[M].morphTargets[T]]=-1;for(const T in x){const S=[],y=[];for(let L=0;L!==_[M].morphTargets.length;++L){const R=_[M];S.push(R.time),y.push(R.morphTarget===T?1:0)}s.push(new Lo(".morphTargetInfluence["+T+"]",S,y))}h=x.length*u}else{const x=".bones["+t[v].name+"]";a(Po,x+".position",_,"pos",s),a(Uo,x+".quaternion",_,"rot",s),a(Po,x+".scale",_,"scl",s)}}return s.length===0?null:new this(l,h,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let a=0,s=e.length;a!==s;++a){const l=this.tracks[a];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function sE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lo;case"vector":case"vector2":case"vector3":case"vector4":return Po;case"color":return dS;case"quaternion":return Uo;case"bool":case"boolean":return Io;case"string":return zo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function rE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sE(o.type);if(o.times===void 0){const t=[],a=[];hS(o.keys,t,a,"value"),o.times=t,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Ya={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class oE{constructor(e,t,a){const s=this;let l=!1,u=0,f=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(g){f++,l===!1&&s.onStart!==void 0&&s.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,s.onProgress!==void 0&&s.onProgress(g,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){const v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){const x=d[v],M=d[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lE=new oE;class Bo{constructor(e){this.manager=e!==void 0?e:lE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const a=this;return new Promise(function(s,l){a.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const qa={};class cE extends Error{constructor(e,t){super(e),this.response=t}}class pS extends Bo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Ya.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(qa[e]!==void 0){qa[e].push({onLoad:t,onProgress:a,onError:s});return}qa[e]=[],qa[e].push({onLoad:t,onProgress:a,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,h=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ut("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=qa[e],v=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let T=0;const S=new ReadableStream({start(y){L();function L(){v.read().then(({done:R,value:w})=>{if(R)y.close();else{T+=w.byteLength;const U=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:x});for(let I=0,O=g.length;I<O;I++){const q=g[I];q.onProgress&&q.onProgress(U)}y.enqueue(w),L()}},R=>{y.error(R)})}}});return new Response(S)}else throw new cE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return d.json();default:if(f==="")return d.text();{const v=/charset="?([^;"\s]*)"?/i.exec(f),_=v&&v[1]?v[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{Ya.add(`file:${e}`,d);const g=qa[e];delete qa[e];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=qa[e];if(g===void 0)throw this.manager.itemError(e),d;delete qa[e];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const xo=new WeakMap;class uE extends Bo{constructor(e){super(e)}load(e,t,a,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Ya.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let v=xo.get(u);v===void 0&&(v=[],xo.set(u,v)),v.push({onLoad:t,onError:s})}return u}const f=ac("img");function h(){g(),t&&t(this);const v=xo.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}xo.delete(this),l.manager.itemEnd(e)}function d(v){g(),s&&s(v),Ya.remove(`image:${e}`);const _=xo.get(this)||[];for(let x=0;x<_.length;x++){const M=_[x];M.onError&&M.onError(v)}xo.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Ya.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class fE extends Bo{constructor(e){super(e)}load(e,t,a,s){const l=new Bn,u=new uE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},a,s),l}}class Af extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mS extends Af{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mp=new At,Zx=new G,Kx=new G;class o0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qm,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,a=this.matrix;Zx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zx),Kx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kx),t.updateMatrixWorld(),mp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp,t.coordinateSystem,t.reversedDepth),t.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(mp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hE extends o0{constructor(){super(new ai(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,a=Ro*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(a!==t.fov||s!==t.aspect||l!==t.far)&&(t.fov=a,t.aspect=s,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gS extends Af{constructor(e,t,a=0,s=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=a,this.angle=s,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new hE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class dE extends o0{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}}class l0 extends Af{constructor(e,t,a=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=s,this.shadow=new dE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class mc extends qy{constructor(e=-1,t=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,u=a+e,f=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pE extends o0{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sf extends Af{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new pE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class $l{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const gp=new WeakMap;class mE extends Bo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ut("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ut("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Ya.get(`image-bitmap:${e}`);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(d=>{if(gp.has(u)===!0)s&&s(gp.get(u)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(d),l.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,f).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(d){return Ya.add(`image-bitmap:${e}`,d),t&&t(d),l.manager.itemEnd(e),d}).catch(function(d){s&&s(d),gp.set(h,d),Ya.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});Ya.add(`image-bitmap:${e}`,h),l.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class gE extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class c0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const u0="\\[\\]\\.:\\/",vE=new RegExp("["+u0+"]","g"),f0="[^"+u0+"]",_E="[^"+u0.replace("\\.","")+"]",xE=/((?:WC+[\/:])*)/.source.replace("WC",f0),yE=/(WCOD+)?/.source.replace("WCOD",_E),SE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",f0),ME=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",f0),bE=new RegExp("^"+xE+yE+SE+ME+"$"),TE=["material","materials","bones","map"];class EE{constructor(e,t,a){const s=a||en.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const a=this._targetGroup.nCachedObjects_,s=this._bindings[a];s!==void 0&&s.getValue(e,t)}setValue(e,t){const a=this._bindings;for(let s=this._targetGroup.nCachedObjects_,l=a.length;s!==l;++s)a[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}}class en{constructor(e,t,a){this.path=t,this.parsedPath=a||en.parseTrackName(t),this.node=en.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new en.Composite(e,t,a):new en(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vE,"")}static parseTrackName(e){const t=bE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=a.nodeName&&a.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const l=a.nodeName.substring(s+1);TE.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,s),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){const a=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===t||f.uuid===t)return f;const h=a(f.children);if(h)return h}return null},s=a(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)e[t++]=a[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,a=t.objectName,s=t.propertyName;let l=t.propertyIndex;if(e||(e=en.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=t.objectIndex;switch(a){case"materials":if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[s];if(u===void 0){const d=t.nodeName;vt("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(l!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}h=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(h=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}en.Composite=EE;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class AE extends $m{constructor(e=10,t=10,a=4473924,s=8947848){a=new lt(a),s=new lt(s);const l=t/2,u=e/t,f=e/2,h=[],d=[];for(let _=0,x=0,M=-f;_<=t;_++,M+=u){h.push(-f,0,M,f,0,M),h.push(M,0,-f,M,0,f);const T=_===l?a:s;T.toArray(d,x),x+=3,T.toArray(d,x),x+=3,T.toArray(d,x),x+=3,T.toArray(d,x),x+=3}const g=new gn;g.setAttribute("position",new Xt(h,3)),g.setAttribute("color",new Xt(d,3));const v=new hc({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jx(o,e,t,a){const s=wE(a);switch(t){case Iy:return o*e;case Gm:return o*e/s.components*s.byteLength;case Vm:return o*e/s.components*s.byteLength;case wo:return o*e*2/s.components*s.byteLength;case km:return o*e*2/s.components*s.byteLength;case zy:return o*e*3/s.components*s.byteLength;case Wi:return o*e*4/s.components*s.byteLength;case Xm:return o*e*4/s.components*s.byteLength;case cf:case uf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ff:case hf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bp:case Hp:return Math.max(o,16)*Math.max(e,8)/4;case zp:case Fp:return Math.max(o,8)*Math.max(e,8)/2;case Gp:case Vp:case Xp:case Wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kp:case qp:case jp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Kp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case $p:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case em:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case tm:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case nm:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case im:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case am:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case sm:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case om:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case lm:case cm:case um:return Math.ceil(o/4)*Math.ceil(e/4)*16;case fm:case hm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case dm:case pm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wE(o){switch(o){case Ci:case Ly:return{byteLength:1,components:1};case ec:case Uy:case Di:return{byteLength:2,components:1};case Fm:case Hm:return{byteLength:2,components:4};case ya:case Bm:case Xi:return{byteLength:4,components:1};case Py:case Oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nm}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nm);function vS(){let o=null,e=!1,t=null,a=null;function s(l,u){t(l,u),a=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(a=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){o=l}}}function RE(o){const e=new WeakMap;function t(f,h){const d=f.array,g=f.usage,v=d.byteLength,_=o.createBuffer();o.bindBuffer(h,_),o.bufferData(h,d,g),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,h,d){const g=h.array,v=h.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,g);else{v.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<v.length;x++){const M=v[_],T=v[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,M=v.length;x<M;x++){const T=v[x];o.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(o.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,h),d.version=f.version}}return{get:s,remove:l,update:u}}var CE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DE=`#ifdef USE_ALPHAHASH
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
#endif`,NE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OE=`#ifdef USE_AOMAP
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
#endif`,IE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zE=`#ifdef USE_BATCHING
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
#endif`,BE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VE=`#ifdef USE_IRIDESCENCE
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
#endif`,kE=`#ifdef USE_BUMPMAP
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
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QE=`#define PI 3.141592653589793
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
} // validated`,$E=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eA=`vec3 transformedNormal = objectNormal;
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
#endif`,tA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sA="gl_FragColor = linearToOutputTexel( gl_FragColor );",rA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oA=`#ifdef USE_ENVMAP
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
#endif`,lA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
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
#endif`,uA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
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
#endif`,hA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gA=`#ifdef USE_GRADIENTMAP
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
}`,vA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_A=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yA=`uniform bool receiveShadow;
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
#endif`,SA=`#ifdef USE_ENVMAP
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
#endif`,MA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AA=`PhysicalMaterial material;
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
#endif`,wA=`uniform sampler2D dfgLUT;
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
}`,RA=`
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
#endif`,CA=`#if defined( RE_IndirectDiffuse )
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
#endif`,DA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BA=`#if defined( USE_POINTS_UV )
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
#endif`,FA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XA=`#ifdef USE_MORPHTARGETS
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
#endif`,WA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JA=`#ifdef USE_NORMALMAP
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
#endif`,QA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$A=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ew=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dw=`float getShadowMask() {
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
}`,pw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mw=`#ifdef USE_SKINNING
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
#endif`,gw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vw=`#ifdef USE_SKINNING
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
#endif`,_w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mw=`#ifdef USE_TRANSMISSION
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
#endif`,bw=`#ifdef USE_TRANSMISSION
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
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cw=`uniform sampler2D t2D;
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
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`#include <common>
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
}`,Ow=`#if DEPTH_PACKING == 3200
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
}`,Iw=`#define DISTANCE
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
}`,zw=`#define DISTANCE
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
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`uniform float scale;
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
}`,Gw=`uniform vec3 diffuse;
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
}`,Vw=`#include <common>
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
}`,kw=`uniform vec3 diffuse;
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
}`,Xw=`#define LAMBERT
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
}`,Ww=`#define LAMBERT
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
}`,qw=`#define MATCAP
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
}`,jw=`#define MATCAP
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
}`,Yw=`#define NORMAL
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
}`,Zw=`#define NORMAL
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
}`,Kw=`#define PHONG
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
}`,Jw=`#define PHONG
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
}`,Qw=`#define STANDARD
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
}`,$w=`#define STANDARD
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
}`,e2=`#define TOON
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
}`,t2=`#define TOON
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
}`,n2=`uniform float size;
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
}`,i2=`uniform vec3 diffuse;
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
}`,a2=`#include <common>
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
}`,s2=`uniform vec3 color;
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
}`,r2=`uniform float rotation;
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
}`,o2=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:CE,alphahash_pars_fragment:DE,alphamap_fragment:NE,alphamap_pars_fragment:LE,alphatest_fragment:UE,alphatest_pars_fragment:PE,aomap_fragment:OE,aomap_pars_fragment:IE,batching_pars_vertex:zE,batching_vertex:BE,begin_vertex:FE,beginnormal_vertex:HE,bsdfs:GE,iridescence_fragment:VE,bumpmap_pars_fragment:kE,clipping_planes_fragment:XE,clipping_planes_pars_fragment:WE,clipping_planes_pars_vertex:qE,clipping_planes_vertex:jE,color_fragment:YE,color_pars_fragment:ZE,color_pars_vertex:KE,color_vertex:JE,common:QE,cube_uv_reflection_fragment:$E,defaultnormal_vertex:eA,displacementmap_pars_vertex:tA,displacementmap_vertex:nA,emissivemap_fragment:iA,emissivemap_pars_fragment:aA,colorspace_fragment:sA,colorspace_pars_fragment:rA,envmap_fragment:oA,envmap_common_pars_fragment:lA,envmap_pars_fragment:cA,envmap_pars_vertex:uA,envmap_physical_pars_fragment:SA,envmap_vertex:fA,fog_vertex:hA,fog_pars_vertex:dA,fog_fragment:pA,fog_pars_fragment:mA,gradientmap_pars_fragment:gA,lightmap_pars_fragment:vA,lights_lambert_fragment:_A,lights_lambert_pars_fragment:xA,lights_pars_begin:yA,lights_toon_fragment:MA,lights_toon_pars_fragment:bA,lights_phong_fragment:TA,lights_phong_pars_fragment:EA,lights_physical_fragment:AA,lights_physical_pars_fragment:wA,lights_fragment_begin:RA,lights_fragment_maps:CA,lights_fragment_end:DA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:LA,logdepthbuf_pars_vertex:UA,logdepthbuf_vertex:PA,map_fragment:OA,map_pars_fragment:IA,map_particle_fragment:zA,map_particle_pars_fragment:BA,metalnessmap_fragment:FA,metalnessmap_pars_fragment:HA,morphinstance_vertex:GA,morphcolor_vertex:VA,morphnormal_vertex:kA,morphtarget_pars_vertex:XA,morphtarget_vertex:WA,normal_fragment_begin:qA,normal_fragment_maps:jA,normal_pars_fragment:YA,normal_pars_vertex:ZA,normal_vertex:KA,normalmap_pars_fragment:JA,clearcoat_normal_fragment_begin:QA,clearcoat_normal_fragment_maps:$A,clearcoat_pars_fragment:ew,iridescence_pars_fragment:tw,opaque_fragment:nw,packing:iw,premultiplied_alpha_fragment:aw,project_vertex:sw,dithering_fragment:rw,dithering_pars_fragment:ow,roughnessmap_fragment:lw,roughnessmap_pars_fragment:cw,shadowmap_pars_fragment:uw,shadowmap_pars_vertex:fw,shadowmap_vertex:hw,shadowmask_pars_fragment:dw,skinbase_vertex:pw,skinning_pars_vertex:mw,skinning_vertex:gw,skinnormal_vertex:vw,specularmap_fragment:_w,specularmap_pars_fragment:xw,tonemapping_fragment:yw,tonemapping_pars_fragment:Sw,transmission_fragment:Mw,transmission_pars_fragment:bw,uv_pars_fragment:Tw,uv_pars_vertex:Ew,uv_vertex:Aw,worldpos_vertex:ww,background_vert:Rw,background_frag:Cw,backgroundCube_vert:Dw,backgroundCube_frag:Nw,cube_vert:Lw,cube_frag:Uw,depth_vert:Pw,depth_frag:Ow,distance_vert:Iw,distance_frag:zw,equirect_vert:Bw,equirect_frag:Fw,linedashed_vert:Hw,linedashed_frag:Gw,meshbasic_vert:Vw,meshbasic_frag:kw,meshlambert_vert:Xw,meshlambert_frag:Ww,meshmatcap_vert:qw,meshmatcap_frag:jw,meshnormal_vert:Yw,meshnormal_frag:Zw,meshphong_vert:Kw,meshphong_frag:Jw,meshphysical_vert:Qw,meshphysical_frag:$w,meshtoon_vert:e2,meshtoon_frag:t2,points_vert:n2,points_frag:i2,shadow_vert:a2,shadow_frag:s2,sprite_vert:r2,sprite_frag:o2},$e={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},ma={basic:{uniforms:oi([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:oi([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:oi([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:oi([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:oi([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:oi([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:oi([$e.points,$e.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:oi([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:oi([$e.common,$e.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:oi([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:oi([$e.sprite,$e.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:oi([$e.common,$e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:oi([$e.lights,$e.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};ma.physical={uniforms:oi([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const tf={r:0,b:0,g:0},sr=new Ni,l2=new At;function c2(o,e,t,a,s,l,u){const f=new lt(0);let h=l===!0?0:1,d,g,v=null,_=0,x=null;function M(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?t:e).get(w)),w}function T(R){let w=!1;const U=M(R);U===null?y(f,h):U&&U.isColor&&(y(U,1),w=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(R,w){const U=M(w);U&&(U.isCubeTexture||U.mapping===Mf)?(g===void 0&&(g=new Ot(new xr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Co(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),sr.copy(w.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(l2.makeRotationFromEuler(sr)),g.material.toneMapped=Ft.getTransfer(U.colorSpace)!==Zt,(v!==U||_!==U.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,v=U,_=U.version,x=o.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new Ot(new dc(2,2),new kn({name:"BackgroundMaterial",uniforms:Co(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Ft.getTransfer(U.colorSpace)!==Zt,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||_!==U.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,v=U,_=U.version,x=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,w){R.getRGB(tf,Wy(o)),a.buffers.color.setClear(tf.r,tf.g,tf.b,w,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,w=1){f.set(R),h=w,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(f,h)},render:T,addToRenderList:S,dispose:L}}function u2(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,u=!1;function f(N,V,J,te,ce){let le=!1;const H=v(te,J,V);l!==H&&(l=H,d(l.object)),le=x(N,te,J,ce),le&&M(N,te,J,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,w(N,V,J,te),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return o.createVertexArray()}function d(N){return o.bindVertexArray(N)}function g(N){return o.deleteVertexArray(N)}function v(N,V,J){const te=J.wireframe===!0;let ce=a[N.id];ce===void 0&&(ce={},a[N.id]=ce);let le=ce[V.id];le===void 0&&(le={},ce[V.id]=le);let H=le[te];return H===void 0&&(H=_(h()),le[te]=H),H}function _(N){const V=[],J=[],te=[];for(let ce=0;ce<t;ce++)V[ce]=0,J[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:te,object:N,attributes:{},index:null}}function x(N,V,J,te){const ce=l.attributes,le=V.attributes;let H=0;const k=J.getAttributes();for(const ae in k)if(k[ae].location>=0){const Ee=ce[ae];let z=le[ae];if(z===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),Ee===void 0||Ee.attribute!==z||z&&Ee.data!==z.data)return!0;H++}return l.attributesNum!==H||l.index!==te}function M(N,V,J,te){const ce={},le=V.attributes;let H=0;const k=J.getAttributes();for(const ae in k)if(k[ae].location>=0){let Ee=le[ae];Ee===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor));const z={};z.attribute=Ee,Ee&&Ee.data&&(z.data=Ee.data),ce[ae]=z,H++}l.attributes=ce,l.attributesNum=H,l.index=te}function T(){const N=l.newAttributes;for(let V=0,J=N.length;V<J;V++)N[V]=0}function S(N){y(N,0)}function y(N,V){const J=l.newAttributes,te=l.enabledAttributes,ce=l.attributeDivisors;J[N]=1,te[N]===0&&(o.enableVertexAttribArray(N),te[N]=1),ce[N]!==V&&(o.vertexAttribDivisor(N,V),ce[N]=V)}function L(){const N=l.newAttributes,V=l.enabledAttributes;for(let J=0,te=V.length;J<te;J++)V[J]!==N[J]&&(o.disableVertexAttribArray(J),V[J]=0)}function R(N,V,J,te,ce,le,H){H===!0?o.vertexAttribIPointer(N,V,J,ce,le):o.vertexAttribPointer(N,V,J,te,ce,le)}function w(N,V,J,te){T();const ce=te.attributes,le=J.getAttributes(),H=V.defaultAttributeValues;for(const k in le){const ae=le[k];if(ae.location>=0){let Te=ce[k];if(Te===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),Te!==void 0){const Ee=Te.normalized,z=Te.itemSize,ne=e.get(Te);if(ne===void 0)continue;const ye=ne.buffer,Ue=ne.type,ge=ne.bytesPerElement,K=Ue===o.INT||Ue===o.UNSIGNED_INT||Te.gpuType===Bm;if(Te.isInterleavedBufferAttribute){const se=Te.data,He=se.stride,Pe=Te.offset;if(se.isInstancedInterleavedBuffer){for(let Xe=0;Xe<ae.locationSize;Xe++)y(ae.location+Xe,se.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Xe=0;Xe<ae.locationSize;Xe++)S(ae.location+Xe);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Xe=0;Xe<ae.locationSize;Xe++)R(ae.location+Xe,z/ae.locationSize,Ue,Ee,He*ge,(Pe+z/ae.locationSize*Xe)*ge,K)}else{if(Te.isInstancedBufferAttribute){for(let se=0;se<ae.locationSize;se++)y(ae.location+se,Te.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let se=0;se<ae.locationSize;se++)S(ae.location+se);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let se=0;se<ae.locationSize;se++)R(ae.location+se,z/ae.locationSize,Ue,Ee,z*ge,z/ae.locationSize*se*ge,K)}}else if(H!==void 0){const Ee=H[k];if(Ee!==void 0)switch(Ee.length){case 2:o.vertexAttrib2fv(ae.location,Ee);break;case 3:o.vertexAttrib3fv(ae.location,Ee);break;case 4:o.vertexAttrib4fv(ae.location,Ee);break;default:o.vertexAttrib1fv(ae.location,Ee)}}}}L()}function U(){q();for(const N in a){const V=a[N];for(const J in V){const te=V[J];for(const ce in te)g(te[ce].object),delete te[ce];delete V[J]}delete a[N]}}function I(N){if(a[N.id]===void 0)return;const V=a[N.id];for(const J in V){const te=V[J];for(const ce in te)g(te[ce].object),delete te[ce];delete V[J]}delete a[N.id]}function O(N){for(const V in a){const J=a[V];if(J[N.id]===void 0)continue;const te=J[N.id];for(const ce in te)g(te[ce].object),delete te[ce];delete J[N.id]}}function q(){A(),u=!0,l!==s&&(l=s,d(l.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:q,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function f2(o,e,t){let a;function s(d){a=d}function l(d,g){o.drawArrays(a,d,g),t.update(g,a,1)}function u(d,g,v){v!==0&&(o.drawArraysInstanced(a,d,g,v),t.update(g,a,v))}function f(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,v);let x=0;for(let M=0;M<v;M++)x+=g[M];t.update(x,a,1)}function h(d,g,v,_){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)u(d[M],g[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*_[T];t.update(M,a,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function h2(o,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(O){return!(O!==Wi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const q=O===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ci&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!q)}function h(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=h(d);g!==d&&(ut("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:w,maxSamples:U,samples:I}}function d2(o){const e=this;let t=null,a=0,s=!1,l=!1;const u=new cr,f=new Rt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||s;return s=_,a=v.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,x){const M=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,y=o.get(v);if(!s||M===null||M.length===0||l&&!S)l?g(null):d();else{const L=l?0:a,R=L*4;let w=y.clippingState||null;h.value=w,w=g(M,_,R,x);for(let U=0;U!==R;++U)w[U]=t[U];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,_,x,M){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=h.value,M!==!0||S===null){const y=x+T*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let R=0,w=x;R!==T;++R,w+=4)u.copy(v[R]).applyMatrix4(L,f),u.normal.toArray(S,w),S[w+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function p2(o){let e=new WeakMap;function t(u,f){return f===Op?u.mapping=pr:f===Ip&&(u.mapping=Ao),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Op||f===Ip)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new Yy(h.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const f=u.target;f.removeEventListener("dispose",s);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const Ps=4,Qx=[.125,.215,.35,.446,.526,.582],fr=20,m2=256,Gl=new mc,$x=new lt;let vp=null,_p=0,xp=0,yp=!1;const g2=new G;class ey{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,s=100,l={}){const{size:u=256,position:f=g2}=l;vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,a,s,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ny(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vp,_p,xp),this._renderer.xr.enabled=yp,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Di,format:Wi,colorSpace:ci,depthBuffer:!1},s=ty(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ty(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=v2(l)),this._blurMaterial=x2(l,e,t),this._ggxMaterial=_2(l,e,t)}return s}_compileMaterial(e){const t=new Ot(new gn,e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,a,s,l){const h=new ai(90,1,t,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor($x),v.toneMapping=xa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new xr,new li({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let y=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,y=!0):(S.color.copy($x),y=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(h.up.set(0,d[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[R],l.y,l.z)):w===1?(h.up.set(0,0,d[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[R],l.z)):(h.up.set(0,d[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[R]));const U=this._cubeSize;yo(s,w*U,R>2?U:0,U,U),v.setRenderTarget(s),y&&v.render(T,h),v.render(e,h)}v.toneMapping=x,v.autoClear=_,e.background=L}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===pr||e.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ny());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;yo(t,0,0,3*h,2*h),a.setRenderTarget(t),a.render(u,Gl)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const h=u.uniforms,d=a/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,x=v*_,{_lodMax:M}=this,T=this._sizeLods[a],S=3*T*(a>M-Ps?a-M+Ps:0),y=4*(this._cubeSize-T);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,yo(l,S,y,3*T,2*T),s.setRenderTarget(l),s.render(f,Gl),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-a,yo(e,S,y,3*T,2*T),s.setRenderTarget(e),s.render(f,Gl)}_blur(e,t,a,s,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,a,s,"latitudinal",l),this._halfBlur(u,e,a,a,s,"longitudinal",l)}_halfBlur(e,t,a,s,l,u,f){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[s];v.material=d;const _=d.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*fr-1),T=l/M,S=isFinite(l)?1+Math.floor(g*T):fr;S>fr&&ut(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${fr}`);const y=[];let L=0;for(let O=0;O<fr;++O){const q=O/T,A=Math.exp(-q*q/2);y.push(A),O===0?L+=A:O<S&&(L+=2*A)}for(let O=0;O<y.length;O++)y[O]=y[O]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:R}=this;_.dTheta.value=M,_.mipInt.value=R-a;const w=this._sizeLods[s],U=3*w*(s>R-Ps?s-R+Ps:0),I=4*(this._cubeSize-w);yo(t,U,I,3*w,2*w),h.setRenderTarget(t),h.render(v,Gl)}}function v2(o){const e=[],t=[],a=[];let s=o;const l=o-Ps+1+Qx.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);e.push(f);let h=1/f;u>o-Ps?h=Qx[u-o+Ps-1]:u===0&&(h=0),t.push(h);const d=1/(f-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,M=6,T=3,S=2,y=1,L=new Float32Array(T*M*x),R=new Float32Array(S*M*x),w=new Float32Array(y*M*x);for(let I=0;I<x;I++){const O=I%3*2/3-1,q=I>2?0:-1,A=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];L.set(A,T*M*I),R.set(_,S*M*I);const N=[I,I,I,I,I,I];w.set(N,y*M*I)}const U=new gn;U.setAttribute("position",new Xn(L,T)),U.setAttribute("uv",new Xn(R,S)),U.setAttribute("faceIndex",new Xn(w,y)),a.push(new Ot(U,null)),s>Ps&&s--}return{lodMeshes:a,sizeLods:e,sigmas:t}}function ty(o,e,t){const a=new xi(o,e,t);return a.texture.mapping=Mf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function yo(o,e,t,a,s){o.viewport.set(e,t,a,s),o.scissor.set(e,t,a,s)}function _2(o,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wf(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function x2(o,e,t){const a=new Float32Array(fr),s=new G(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wf(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function ny(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function iy(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function y2(o){let e=new WeakMap,t=null;function a(f){if(f&&f.isTexture){const h=f.mapping,d=h===Op||h===Ip,g=h===pr||h===Ao;if(d||g){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new ey(o)),v=d?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const x=f.image;return d&&x&&x.height>0||g&&x&&s(x)?(t===null&&(t=new ey(o)),v=d?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function s(f){let h=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&h++;return h===d}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:u}}function S2(o){const e={};function t(a){if(e[a]!==void 0)return e[a];const s=o.getExtension(a);return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&sc("WebGLRenderer: "+a+" extension not supported."),s}}}function M2(o,e,t,a){const s={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const x=l.get(_);x&&(e.remove(x),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const x in _)e.update(_[x],o.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,M=v.attributes.position;let T=0;if(x!==null){const L=x.array;T=x.version;for(let R=0,w=L.length;R<w;R+=3){const U=L[R+0],I=L[R+1],O=L[R+2];_.push(U,I,I,O,O,U)}}else if(M!==void 0){const L=M.array;T=M.version;for(let R=0,w=L.length/3-1;R<w;R+=3){const U=R+0,I=R+1,O=R+2;_.push(U,I,I,O,O,U)}}else return;const S=new(Fy(_)?Xy:ky)(_,1);S.version=T;const y=l.get(v);y&&e.remove(y),l.set(v,S)}function g(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function b2(o,e,t){let a;function s(_){a=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,x){o.drawElements(a,x,l,_*u),t.update(x,a,1)}function d(_,x,M){M!==0&&(o.drawElementsInstanced(a,x,l,_*u,M),t.update(x,a,M))}function g(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,a,1)}function v(_,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,_,0,T,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*T[L];t.update(y,a,1)}}this.setMode=s,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function T2(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=f*(l/3);break;case o.LINES:t.lines+=f*(l/2);break;case o.LINE_STRIP:t.lines+=f*(l-1);break;case o.LINE_LOOP:t.lines+=f*l;break;case o.POINTS:t.points+=f*l;break;default:vt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function E2(o,e,t){const a=new WeakMap,s=new fn;function l(u,f,h){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let N=function(){q.dispose(),a.delete(f),f.removeEventListener("dispose",N)};var x=N;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let w=0;M===!0&&(w=1),T===!0&&(w=2),S===!0&&(w=3);let U=f.attributes.position.count*w,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*I*4*v),q=new Hy(O,U,I,v);q.type=Xi,q.needsUpdate=!0;const A=w*4;for(let V=0;V<v;V++){const J=y[V],te=L[V],ce=R[V],le=U*I*4*V;for(let H=0;H<J.count;H++){const k=H*A;M===!0&&(s.fromBufferAttribute(J,H),O[le+k+0]=s.x,O[le+k+1]=s.y,O[le+k+2]=s.z,O[le+k+3]=0),T===!0&&(s.fromBufferAttribute(te,H),O[le+k+4]=s.x,O[le+k+5]=s.y,O[le+k+6]=s.z,O[le+k+7]=0),S===!0&&(s.fromBufferAttribute(ce,H),O[le+k+8]=s.x,O[le+k+9]=s.y,O[le+k+10]=s.z,O[le+k+11]=ce.itemSize===4?s.w:1)}}_={count:v,texture:q,size:new Oe(U,I)},a.set(f,_),f.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const T=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",T),h.getUniforms().setValue(o,"morphTargetInfluences",d)}h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:l}}function A2(o,e,t,a){let s=new WeakMap;function l(h){const d=a.render.frame,g=h.geometry,v=e.get(h,g);if(s.get(v)!==d&&(e.update(v),s.set(v,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),s.get(h)!==d&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return v}function u(){s=new WeakMap}function f(h){const d=h.target;d.removeEventListener("dispose",f),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}const w2={[Lm]:"LINEAR_TONE_MAPPING",[Um]:"REINHARD_TONE_MAPPING",[Pm]:"CINEON_TONE_MAPPING",[fc]:"ACES_FILMIC_TONE_MAPPING",[Im]:"AGX_TONE_MAPPING",[zm]:"NEUTRAL_TONE_MAPPING",[Om]:"CUSTOM_TONE_MAPPING"};function R2(o,e,t,a,s){const l=new xi(e,t,{type:o,depthBuffer:a,stencilBuffer:s}),u=new xi(e,t,{type:Di,depthBuffer:!1,stencilBuffer:!1}),f=new gn;f.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const h=new fS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ot(f,h),g=new mc(-1,1,1,-1,0,1);let v=null,_=null,x=!1,M,T=null,S=[],y=!1;this.setSize=function(L,R){l.setSize(L,R),u.setSize(L,R);for(let w=0;w<S.length;w++){const U=S[w];U.setSize&&U.setSize(L,R)}},this.setEffects=function(L){S=L,y=S.length>0&&S[0].isRenderPass===!0;const R=l.width,w=l.height;for(let U=0;U<S.length;U++){const I=S[U];I.setSize&&I.setSize(R,w)}},this.begin=function(L,R){if(x||L.toneMapping===xa&&S.length===0)return!1;if(T=R,R!==null){const w=R.width,U=R.height;(l.width!==w||l.height!==U)&&this.setSize(w,U)}return y===!1&&L.setRenderTarget(l),M=L.toneMapping,L.toneMapping=xa,!0},this.hasRenderPass=function(){return y},this.end=function(L,R){L.toneMapping=M,x=!0;let w=l,U=u;for(let I=0;I<S.length;I++){const O=S[I];if(O.enabled!==!1&&(O.render(L,U,w,R),O.needsSwap!==!1)){const q=w;w=U,U=q}}if(v!==L.outputColorSpace||_!==L.toneMapping){v=L.outputColorSpace,_=L.toneMapping,h.defines={},Ft.getTransfer(v)===Zt&&(h.defines.SRGB_TRANSFER="");const I=w2[_];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,L.setRenderTarget(T),L.render(d,g),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const _S=new Bn,Em=new oc(1,1),xS=new Hy,yS=new WT,SS=new jy,ay=[],sy=[],ry=new Float32Array(16),oy=new Float32Array(9),ly=new Float32Array(4);function Fo(o,e,t){const a=o[0];if(a<=0||a>0)return o;const s=e*t;let l=ay[s];if(l===void 0&&(l=new Float32Array(s),ay[s]=l),e!==0){a.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,o[u].toArray(l,f)}return l}function Fn(o,e){if(o.length!==e.length)return!1;for(let t=0,a=o.length;t<a;t++)if(o[t]!==e[t])return!1;return!0}function Hn(o,e){for(let t=0,a=e.length;t<a;t++)o[t]=e[t]}function Rf(o,e){let t=sy[e];t===void 0&&(t=new Int32Array(e),sy[e]=t);for(let a=0;a!==e;++a)t[a]=o.allocateTextureUnit();return t}function C2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function D2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;o.uniform2fv(this.addr,e),Hn(t,e)}}function N2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;o.uniform3fv(this.addr,e),Hn(t,e)}}function L2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;o.uniform4fv(this.addr,e),Hn(t,e)}}function U2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(Fn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Hn(t,e)}else{if(Fn(t,a))return;ly.set(a),o.uniformMatrix2fv(this.addr,!1,ly),Hn(t,a)}}function P2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(Fn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Hn(t,e)}else{if(Fn(t,a))return;oy.set(a),o.uniformMatrix3fv(this.addr,!1,oy),Hn(t,a)}}function O2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(Fn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Hn(t,e)}else{if(Fn(t,a))return;ry.set(a),o.uniformMatrix4fv(this.addr,!1,ry),Hn(t,a)}}function I2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function z2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;o.uniform2iv(this.addr,e),Hn(t,e)}}function B2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;o.uniform3iv(this.addr,e),Hn(t,e)}}function F2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;o.uniform4iv(this.addr,e),Hn(t,e)}}function H2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function G2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;o.uniform2uiv(this.addr,e),Hn(t,e)}}function V2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;o.uniform3uiv(this.addr,e),Hn(t,e)}}function k2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;o.uniform4uiv(this.addr,e),Hn(t,e)}}function X2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Em.compareFunction=t.isReversedDepthBuffer()?jm:qm,l=Em):l=_S,t.setTexture2D(e||l,s)}function W2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||yS,s)}function q2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||SS,s)}function j2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||xS,s)}function Y2(o){switch(o){case 5126:return C2;case 35664:return D2;case 35665:return N2;case 35666:return L2;case 35674:return U2;case 35675:return P2;case 35676:return O2;case 5124:case 35670:return I2;case 35667:case 35671:return z2;case 35668:case 35672:return B2;case 35669:case 35673:return F2;case 5125:return H2;case 36294:return G2;case 36295:return V2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return j2}}function Z2(o,e){o.uniform1fv(this.addr,e)}function K2(o,e){const t=Fo(e,this.size,2);o.uniform2fv(this.addr,t)}function J2(o,e){const t=Fo(e,this.size,3);o.uniform3fv(this.addr,t)}function Q2(o,e){const t=Fo(e,this.size,4);o.uniform4fv(this.addr,t)}function $2(o,e){const t=Fo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function eR(o,e){const t=Fo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function tR(o,e){const t=Fo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function nR(o,e){o.uniform1iv(this.addr,e)}function iR(o,e){o.uniform2iv(this.addr,e)}function aR(o,e){o.uniform3iv(this.addr,e)}function sR(o,e){o.uniform4iv(this.addr,e)}function rR(o,e){o.uniform1uiv(this.addr,e)}function oR(o,e){o.uniform2uiv(this.addr,e)}function lR(o,e){o.uniform3uiv(this.addr,e)}function cR(o,e){o.uniform4uiv(this.addr,e)}function uR(o,e,t){const a=this.cache,s=e.length,l=Rf(t,s);Fn(a,l)||(o.uniform1iv(this.addr,l),Hn(a,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=Em:u=_S;for(let f=0;f!==s;++f)t.setTexture2D(e[f]||u,l[f])}function fR(o,e,t){const a=this.cache,s=e.length,l=Rf(t,s);Fn(a,l)||(o.uniform1iv(this.addr,l),Hn(a,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||yS,l[u])}function hR(o,e,t){const a=this.cache,s=e.length,l=Rf(t,s);Fn(a,l)||(o.uniform1iv(this.addr,l),Hn(a,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||SS,l[u])}function dR(o,e,t){const a=this.cache,s=e.length,l=Rf(t,s);Fn(a,l)||(o.uniform1iv(this.addr,l),Hn(a,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||xS,l[u])}function pR(o){switch(o){case 5126:return Z2;case 35664:return K2;case 35665:return J2;case 35666:return Q2;case 35674:return $2;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return aR;case 35669:case 35673:return sR;case 5125:return rR;case 36294:return oR;case 36295:return lR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return dR}}class mR{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=Y2(t.type)}}class gR{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pR(t.type)}}class vR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(e,t[f.id],a)}}}const Sp=/(\w+)(\])?(\[|\.)?/g;function cy(o,e){o.seq.push(e),o.map[e.id]=e}function _R(o,e,t){const a=o.name,s=a.length;for(Sp.lastIndex=0;;){const l=Sp.exec(a),u=Sp.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&u+2===s){cy(t,d===void 0?new mR(f,o,e):new gR(f,o,e));break}else{let v=t.map[f];v===void 0&&(v=new vR(f),cy(t,v)),t=v}}}class df{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);_R(f,h,this)}const s=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=a[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&a.push(u)}return a}}function uy(o,e,t){const a=o.createShader(e);return o.shaderSource(a,t),o.compileShader(a),a}const xR=37297;let yR=0;function SR(o,e){const t=o.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return a.join(`
`)}const fy=new Rt;function MR(o){Ft._getMatrix(fy,Ft.workingColorSpace,o);const e=`mat3( ${fy.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(o)){case gf:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function hy(o,e,t){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+SR(o.getShaderSource(e),f)}else return l}function bR(o,e){const t=MR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const TR={[Lm]:"Linear",[Um]:"Reinhard",[Pm]:"Cineon",[fc]:"ACESFilmic",[Im]:"AgX",[zm]:"Neutral",[Om]:"Custom"};function ER(o,e){const t=TR[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nf=new G;function AR(){Ft.getLuminanceCoefficients(nf);const o=nf.x.toFixed(4),e=nf.y.toFixed(4),t=nf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yl).join(`
`)}function RR(o){const e=[];for(const t in o){const a=o[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function CR(o,e){const t={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(e,s),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:f}}return t}function Yl(o){return o!==""}function dy(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function py(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Am(o){return o.replace(DR,LR)}const NR=new Map;function LR(o,e){let t=Ct[e];if(t===void 0){const a=NR.get(e);if(a!==void 0)t=Ct[a],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Am(t)}const UR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function my(o){return o.replace(UR,PR)}function PR(o,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function gy(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const OR={[of]:"SHADOWMAP_TYPE_PCF",[Wl]:"SHADOWMAP_TYPE_VSM"};function IR(o){return OR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zR={[pr]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE",[Mf]:"ENVMAP_TYPE_CUBE_UV"};function BR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":zR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const FR={[Ao]:"ENVMAP_MODE_REFRACTION"};function HR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":FR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GR={[Cy]:"ENVMAP_BLENDING_MULTIPLY",[lT]:"ENVMAP_BLENDING_MIX",[cT]:"ENVMAP_BLENDING_ADD"};function VR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":GR[o.combine]||"ENVMAP_BLENDING_NONE"}function kR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function XR(o,e,t,a){const s=o.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=IR(t),d=BR(t),g=HR(t),v=VR(t),_=kR(t),x=wR(t),M=RR(l),T=s.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yl).join(`
`),y.length>0&&(y+=`
`)):(S=[gy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yl).join(`
`),y=[gy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xa?"#define TONE_MAPPING":"",t.toneMapping!==xa?Ct.tonemapping_pars_fragment:"",t.toneMapping!==xa?ER("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,bR("linearToOutputTexel",t.outputColorSpace),AR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yl).join(`
`)),u=Am(u),u=dy(u,t),u=py(u,t),f=Am(f),f=dy(f,t),f=py(f,t),u=my(u),f=my(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===lx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=L+S+u,w=L+y+f,U=uy(s,s.VERTEX_SHADER,R),I=uy(s,s.FRAGMENT_SHADER,w);s.attachShader(T,U),s.attachShader(T,I),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function O(V){if(o.debug.checkShaderErrors){const J=s.getProgramInfoLog(T)||"",te=s.getShaderInfoLog(U)||"",ce=s.getShaderInfoLog(I)||"",le=J.trim(),H=te.trim(),k=ce.trim();let ae=!0,Te=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,T,U,I);else{const Ee=hy(s,U,"vertex"),z=hy(s,I,"fragment");vt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+Ee+`
`+z)}else le!==""?ut("WebGLProgram: Program Info Log:",le):(H===""||k==="")&&(Te=!1);Te&&(V.diagnostics={runnable:ae,programLog:le,vertexShader:{log:H,prefix:S},fragmentShader:{log:k,prefix:y}})}s.deleteShader(U),s.deleteShader(I),q=new df(s,T),A=CR(s,T)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(T,xR)),N},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=I,this}let WR=0;class qR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new jR(e),t.set(e,a)),a}}class jR{constructor(e){this.id=WR++,this.code=e,this.usedTimes=0}}function YR(o,e,t,a,s,l,u){const f=new Gy,h=new qR,d=new Set,g=[],v=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return d.add(A),A===0?"uv":`uv${A}`}function S(A,N,V,J,te){const ce=J.fog,le=te.geometry,H=A.isMeshStandardMaterial?J.environment:null,k=(A.isMeshStandardMaterial?t:e).get(A.envMap||H),ae=k&&k.mapping===Mf?k.image.height:null,Te=M[A.type];A.precision!==null&&(x=s.getMaxPrecision(A.precision),x!==A.precision&&ut("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const Ee=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,z=Ee!==void 0?Ee.length:0;let ne=0;le.morphAttributes.position!==void 0&&(ne=1),le.morphAttributes.normal!==void 0&&(ne=2),le.morphAttributes.color!==void 0&&(ne=3);let ye,Ue,ge,K;if(Te){const Lt=ma[Te];ye=Lt.vertexShader,Ue=Lt.fragmentShader}else ye=A.vertexShader,Ue=A.fragmentShader,h.update(A),ge=h.getVertexShaderID(A),K=h.getFragmentShaderID(A);const se=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),Pe=te.isInstancedMesh===!0,Xe=te.isBatchedMesh===!0,_t=!!A.map,xt=!!A.matcap,ht=!!k,xe=!!A.aoMap,we=!!A.lightMap,De=!!A.bumpMap,Ye=!!A.normalMap,F=!!A.displacementMap,it=!!A.emissiveMap,Ze=!!A.metalnessMap,ot=!!A.roughnessMap,Ve=A.anisotropy>0,P=A.clearcoat>0,E=A.dispersion>0,Y=A.iridescence>0,ve=A.sheen>0,he=A.transmission>0,B=Ve&&!!A.anisotropyMap,ee=P&&!!A.clearcoatMap,de=P&&!!A.clearcoatNormalMap,Ne=P&&!!A.clearcoatRoughnessMap,Ie=Y&&!!A.iridescenceMap,j=Y&&!!A.iridescenceThicknessMap,Se=ve&&!!A.sheenColorMap,We=ve&&!!A.sheenRoughnessMap,ke=!!A.specularMap,qe=!!A.specularColorMap,Ge=!!A.specularIntensityMap,W=he&&!!A.transmissionMap,ze=he&&!!A.thicknessMap,Re=!!A.gradientMap,je=!!A.alphaMap,Le=A.alphaTest>0,be=!!A.alphaHash,Be=!!A.extensions;let dt=xa;A.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(dt=o.toneMapping);const Ht={shaderID:Te,shaderType:A.type,shaderName:A.name,vertexShader:ye,fragmentShader:Ue,defines:A.defines,customVertexShaderID:ge,customFragmentShaderID:K,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Xe,batchingColor:Xe&&te._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&te.instanceColor!==null,instancingMorph:Pe&&te.morphTexture!==null,outputColorSpace:se===null?o.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ci,alphaToCoverage:!!A.alphaToCoverage,map:_t,matcap:xt,envMap:ht,envMapMode:ht&&k.mapping,envMapCubeUVHeight:ae,aoMap:xe,lightMap:we,bumpMap:De,normalMap:Ye,displacementMap:F,emissiveMap:it,normalMapObjectSpace:Ye&&A.normalMapType===pT,normalMapTangentSpace:Ye&&A.normalMapType===Wm,metalnessMap:Ze,roughnessMap:ot,anisotropy:Ve,anisotropyMap:B,clearcoat:P,clearcoatMap:ee,clearcoatNormalMap:de,clearcoatRoughnessMap:Ne,dispersion:E,iridescence:Y,iridescenceMap:Ie,iridescenceThicknessMap:j,sheen:ve,sheenColorMap:Se,sheenRoughnessMap:We,specularMap:ke,specularColorMap:qe,specularIntensityMap:Ge,transmission:he,transmissionMap:W,thicknessMap:ze,gradientMap:Re,opaque:A.transparent===!1&&A.blending===Za&&A.alphaToCoverage===!1,alphaMap:je,alphaTest:Le,alphaHash:be,combine:A.combine,mapUv:_t&&T(A.map.channel),aoMapUv:xe&&T(A.aoMap.channel),lightMapUv:we&&T(A.lightMap.channel),bumpMapUv:De&&T(A.bumpMap.channel),normalMapUv:Ye&&T(A.normalMap.channel),displacementMapUv:F&&T(A.displacementMap.channel),emissiveMapUv:it&&T(A.emissiveMap.channel),metalnessMapUv:Ze&&T(A.metalnessMap.channel),roughnessMapUv:ot&&T(A.roughnessMap.channel),anisotropyMapUv:B&&T(A.anisotropyMap.channel),clearcoatMapUv:ee&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:de&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:j&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(A.sheenRoughnessMap.channel),specularMapUv:ke&&T(A.specularMap.channel),specularColorMapUv:qe&&T(A.specularColorMap.channel),specularIntensityMapUv:Ge&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:ze&&T(A.thicknessMap.channel),alphaMapUv:je&&T(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ye||Ve),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!le.attributes.uv&&(_t||je),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:te.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:dt,decodeVideoTexture:_t&&A.map.isVideoTexture===!0&&Ft.getTransfer(A.map.colorSpace)===Zt,decodeVideoTextureEmissive:it&&A.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(A.emissiveMap.colorSpace)===Zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===na,flipSided:A.side===ei,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Be&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&A.extensions.multiDraw===!0||Xe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ht.vertexUv1s=d.has(1),Ht.vertexUv2s=d.has(2),Ht.vertexUv3s=d.has(3),d.clear(),Ht}function y(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)N.push(V),N.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(L(N,A),R(N,A),N.push(o.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function L(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function R(A,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),A.push(f.mask)}function w(A){const N=M[A.type];let V;if(N){const J=ma[N];V=Do.clone(J.uniforms)}else V=A.uniforms;return V}function U(A,N){let V=v.get(N);return V!==void 0?++V.usedTimes:(V=new XR(o,N,A,l),g.push(V),v.set(N,V)),V}function I(A){if(--A.usedTimes===0){const N=g.indexOf(A);g[N]=g[g.length-1],g.pop(),v.delete(A.cacheKey),A.destroy()}}function O(A){h.remove(A)}function q(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:U,releaseProgram:I,releaseShaderCache:O,programs:g,dispose:q}}function ZR(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function s(u,f,h){o.get(u)[f]=h}function l(){o=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function KR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function vy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function _y(){const o=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function u(v,_,x,M,T,S){let y=o[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:M,renderOrder:v.renderOrder,z:T,group:S},o[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=v.renderOrder,y.z=T,y.group=S),e++,y}function f(v,_,x,M,T,S){const y=u(v,_,x,M,T,S);x.transmission>0?a.push(y):x.transparent===!0?s.push(y):t.push(y)}function h(v,_,x,M,T,S){const y=u(v,_,x,M,T,S);x.transmission>0?a.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function d(v,_){t.length>1&&t.sort(v||KR),a.length>1&&a.sort(_||vy),s.length>1&&s.sort(_||vy)}function g(){for(let v=e,_=o.length;v<_;v++){const x=o[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:f,unshift:h,finish:g,sort:d}}function JR(){let o=new WeakMap;function e(a,s){const l=o.get(a);let u;return l===void 0?(u=new _y,o.set(a,[u])):s>=l.length?(u=new _y,l.push(u)):u=l[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function QR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new lt};break;case"SpotLight":t={position:new G,direction:new G,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=t,t}}}function $R(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let eC=0;function tC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function nC(o){const e=new QR,t=$R(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new G);const s=new G,l=new At,u=new At;function f(d){let g=0,v=0,_=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,L=0,R=0,w=0,U=0,I=0,O=0;d.sort(tC);for(let A=0,N=d.length;A<N;A++){const V=d[A],J=V.color,te=V.intensity,ce=V.distance;let le=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===wo?le=V.shadow.map.texture:le=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=J.r*te,v+=J.g*te,_+=J.b*te;else if(V.isLightProbe){for(let H=0;H<9;H++)a.probe[H].addScaledVector(V.sh.coefficients[H],te);O++}else if(V.isDirectionalLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const k=V.shadow,ae=t.get(V);ae.shadowIntensity=k.intensity,ae.shadowBias=k.bias,ae.shadowNormalBias=k.normalBias,ae.shadowRadius=k.radius,ae.shadowMapSize=k.mapSize,a.directionalShadow[x]=ae,a.directionalShadowMap[x]=le,a.directionalShadowMatrix[x]=V.shadow.matrix,L++}a.directional[x]=H,x++}else if(V.isSpotLight){const H=e.get(V);H.position.setFromMatrixPosition(V.matrixWorld),H.color.copy(J).multiplyScalar(te),H.distance=ce,H.coneCos=Math.cos(V.angle),H.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),H.decay=V.decay,a.spot[T]=H;const k=V.shadow;if(V.map&&(a.spotLightMap[U]=V.map,U++,k.updateMatrices(V),V.castShadow&&I++),a.spotLightMatrix[T]=k.matrix,V.castShadow){const ae=t.get(V);ae.shadowIntensity=k.intensity,ae.shadowBias=k.bias,ae.shadowNormalBias=k.normalBias,ae.shadowRadius=k.radius,ae.shadowMapSize=k.mapSize,a.spotShadow[T]=ae,a.spotShadowMap[T]=le,w++}T++}else if(V.isRectAreaLight){const H=e.get(V);H.color.copy(J).multiplyScalar(te),H.halfWidth.set(V.width*.5,0,0),H.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=H,S++}else if(V.isPointLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),H.distance=V.distance,H.decay=V.decay,V.castShadow){const k=V.shadow,ae=t.get(V);ae.shadowIntensity=k.intensity,ae.shadowBias=k.bias,ae.shadowNormalBias=k.normalBias,ae.shadowRadius=k.radius,ae.shadowMapSize=k.mapSize,ae.shadowCameraNear=k.camera.near,ae.shadowCameraFar=k.camera.far,a.pointShadow[M]=ae,a.pointShadowMap[M]=le,a.pointShadowMatrix[M]=V.shadow.matrix,R++}a.point[M]=H,M++}else if(V.isHemisphereLight){const H=e.get(V);H.skyColor.copy(V.color).multiplyScalar(te),H.groundColor.copy(V.groundColor).multiplyScalar(te),a.hemi[y]=H,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=$e.LTC_FLOAT_1,a.rectAreaLTC2=$e.LTC_FLOAT_2):(a.rectAreaLTC1=$e.LTC_HALF_1,a.rectAreaLTC2=$e.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const q=a.hash;(q.directionalLength!==x||q.pointLength!==M||q.spotLength!==T||q.rectAreaLength!==S||q.hemiLength!==y||q.numDirectionalShadows!==L||q.numPointShadows!==R||q.numSpotShadows!==w||q.numSpotMaps!==U||q.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=R,a.pointShadowMap.length=R,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=R,a.spotLightMatrix.length=w+U-I,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=O,q.directionalLength=x,q.pointLength=M,q.spotLength=T,q.rectAreaLength=S,q.hemiLength=y,q.numDirectionalShadows=L,q.numPointShadows=R,q.numSpotShadows=w,q.numSpotMaps=U,q.numLightProbes=O,a.version=eC++)}function h(d,g){let v=0,_=0,x=0,M=0,T=0;const S=g.matrixWorldInverse;for(let y=0,L=d.length;y<L;y++){const R=d[y];if(R.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),v++}else if(R.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),x++}else if(R.isRectAreaLight){const w=a.rectArea[M];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),_++}else if(R.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(S),T++}}}return{setup:f,setupView:h,state:a}}function xy(o){const e=new nC(o),t=[],a=[];function s(g){d.camera=g,t.length=0,a.length=0}function l(g){t.push(g)}function u(g){a.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function iC(o){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let f;return u===void 0?(f=new xy(o),e.set(s,[f])):l>=u.length?(f=new xy(o),u.push(f)):f=u[l],f}function a(){e=new WeakMap}return{get:t,dispose:a}}const aC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sC=`uniform sampler2D shadow_pass;
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
}`,rC=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],oC=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],yy=new At,Vl=new G,Mp=new G;function lC(o,e,t){let a=new Qm;const s=new Oe,l=new Oe,u=new fn,f=new J1,h=new Q1,d={},g=t.maxTextureSize,v={[Ja]:ei,[ei]:Ja,[na]:na},_=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:aC,fragmentShader:sC}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new gn;M.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ot(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let y=this.type;this.render=function(I,O,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;I.type===Ry&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=of);const A=o.getRenderTarget(),N=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),J=o.state;J.setBlending(_a),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const te=y!==this.type;te&&O.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(le=>le.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,le=I.length;ce<le;ce++){const H=I[ce],k=H.shadow;if(k===void 0){ut("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ae=k.getFrameExtents();if(s.multiply(ae),l.copy(k.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(l.x=Math.floor(g/ae.x),s.x=l.x*ae.x,k.mapSize.x=l.x),s.y>g&&(l.y=Math.floor(g/ae.y),s.y=l.y*ae.y,k.mapSize.y=l.y)),k.map===null||te===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Wl){if(H.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new xi(s.x,s.y,{format:wo,type:Di,minFilter:zn,magFilter:zn,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new oc(s.x,s.y,Xi),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=Qa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=In,k.map.depthTexture.magFilter=In}else{H.isPointLight?(k.map=new Yy(s.x),k.map.depthTexture=new _1(s.x,ya)):(k.map=new xi(s.x,s.y),k.map.depthTexture=new oc(s.x,s.y,ya)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=Qa;const Ee=o.state.buffers.depth.getReversed();this.type===of?(k.map.depthTexture.compareFunction=Ee?jm:qm,k.map.depthTexture.minFilter=zn,k.map.depthTexture.magFilter=zn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=In,k.map.depthTexture.magFilter=In)}k.camera.updateProjectionMatrix()}const Te=k.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<Te;Ee++){if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,Ee),o.clear();else{Ee===0&&(o.setRenderTarget(k.map),o.clear());const z=k.getViewport(Ee);u.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),J.viewport(u)}if(H.isPointLight){const z=k.camera,ne=k.matrix,ye=H.distance||z.far;ye!==z.far&&(z.far=ye,z.updateProjectionMatrix()),Vl.setFromMatrixPosition(H.matrixWorld),z.position.copy(Vl),Mp.copy(z.position),Mp.add(rC[Ee]),z.up.copy(oC[Ee]),z.lookAt(Mp),z.updateMatrixWorld(),ne.makeTranslation(-Vl.x,-Vl.y,-Vl.z),yy.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(yy,z.coordinateSystem,z.reversedDepth)}else k.updateMatrices(H);a=k.getFrustum(),w(O,q,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===Wl&&L(k,q),k.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(A,N,V)};function L(I,O){const q=e.update(T);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new xi(s.x,s.y,{format:wo,type:Di})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(O,null,q,_,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(O,null,q,x,T,null)}function R(I,O,q,A){let N=null;const V=q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)N=V;else if(N=q.isPointLight===!0?h:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=N.uuid,te=O.uuid;let ce=d[J];ce===void 0&&(ce={},d[J]=ce);let le=ce[te];le===void 0&&(le=N.clone(),ce[te]=le,O.addEventListener("dispose",U)),N=le}if(N.visible=O.visible,N.wireframe=O.wireframe,A===Wl?N.side=O.shadowSide!==null?O.shadowSide:O.side:N.side=O.shadowSide!==null?O.shadowSide:v[O.side],N.alphaMap=O.alphaMap,N.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,N.map=O.map,N.clipShadows=O.clipShadows,N.clippingPlanes=O.clippingPlanes,N.clipIntersection=O.clipIntersection,N.displacementMap=O.displacementMap,N.displacementScale=O.displacementScale,N.displacementBias=O.displacementBias,N.wireframeLinewidth=O.wireframeLinewidth,N.linewidth=O.linewidth,q.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const J=o.properties.get(N);J.light=q}return N}function w(I,O,q,A,N){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===Wl)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld);const te=e.update(I),ce=I.material;if(Array.isArray(ce)){const le=te.groups;for(let H=0,k=le.length;H<k;H++){const ae=le[H],Te=ce[ae.materialIndex];if(Te&&Te.visible){const Ee=R(I,Te,A,N);I.onBeforeShadow(o,I,O,q,te,Ee,ae),o.renderBufferDirect(q,null,te,Ee,I,ae),I.onAfterShadow(o,I,O,q,te,Ee,ae)}}}else if(ce.visible){const le=R(I,ce,A,N);I.onBeforeShadow(o,I,O,q,te,le,null),o.renderBufferDirect(q,null,te,le,I,null),I.onAfterShadow(o,I,O,q,te,le,null)}}const J=I.children;for(let te=0,ce=J.length;te<ce;te++)w(J[te],O,q,A,N)}function U(I){I.target.removeEventListener("dispose",U);for(const q in d){const A=d[q],N=I.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}const cC={[Rp]:Cp,[Dp]:Up,[Np]:Pp,[Eo]:Lp,[Cp]:Rp,[Up]:Dp,[Pp]:Np,[Lp]:Eo};function uC(o,e){function t(){let W=!1;const ze=new fn;let Re=null;const je=new fn(0,0,0,0);return{setMask:function(Le){Re!==Le&&!W&&(o.colorMask(Le,Le,Le,Le),Re=Le)},setLocked:function(Le){W=Le},setClear:function(Le,be,Be,dt,Ht){Ht===!0&&(Le*=dt,be*=dt,Be*=dt),ze.set(Le,be,Be,dt),je.equals(ze)===!1&&(o.clearColor(Le,be,Be,dt),je.copy(ze))},reset:function(){W=!1,Re=null,je.set(-1,0,0,0)}}}function a(){let W=!1,ze=!1,Re=null,je=null,Le=null;return{setReversed:function(be){if(ze!==be){const Be=e.get("EXT_clip_control");be?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ze=be;const dt=Le;Le=null,this.setClear(dt)}},getReversed:function(){return ze},setTest:function(be){be?se(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(be){Re!==be&&!W&&(o.depthMask(be),Re=be)},setFunc:function(be){if(ze&&(be=cC[be]),je!==be){switch(be){case Rp:o.depthFunc(o.NEVER);break;case Cp:o.depthFunc(o.ALWAYS);break;case Dp:o.depthFunc(o.LESS);break;case Eo:o.depthFunc(o.LEQUAL);break;case Np:o.depthFunc(o.EQUAL);break;case Lp:o.depthFunc(o.GEQUAL);break;case Up:o.depthFunc(o.GREATER);break;case Pp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}je=be}},setLocked:function(be){W=be},setClear:function(be){Le!==be&&(ze&&(be=1-be),o.clearDepth(be),Le=be)},reset:function(){W=!1,Re=null,je=null,Le=null,ze=!1}}}function s(){let W=!1,ze=null,Re=null,je=null,Le=null,be=null,Be=null,dt=null,Ht=null;return{setTest:function(Lt){W||(Lt?se(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(Lt){ze!==Lt&&!W&&(o.stencilMask(Lt),ze=Lt)},setFunc:function(Lt,Fe,Ke){(Re!==Lt||je!==Fe||Le!==Ke)&&(o.stencilFunc(Lt,Fe,Ke),Re=Lt,je=Fe,Le=Ke)},setOp:function(Lt,Fe,Ke){(be!==Lt||Be!==Fe||dt!==Ke)&&(o.stencilOp(Lt,Fe,Ke),be=Lt,Be=Fe,dt=Ke)},setLocked:function(Lt){W=Lt},setClear:function(Lt){Ht!==Lt&&(o.clearStencil(Lt),Ht=Lt)},reset:function(){W=!1,ze=null,Re=null,je=null,Le=null,be=null,Be=null,dt=null,Ht=null}}}const l=new t,u=new a,f=new s,h=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],M=null,T=!1,S=null,y=null,L=null,R=null,w=null,U=null,I=null,O=new lt(0,0,0),q=0,A=!1,N=null,V=null,J=null,te=null,ce=null;const le=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const ae=o.getParameter(o.VERSION);ae.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ae)[1]),H=k>=1):ae.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),H=k>=2);let Te=null,Ee={};const z=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),ye=new fn().fromArray(z),Ue=new fn().fromArray(ne);function ge(W,ze,Re,je){const Le=new Uint8Array(4),be=o.createTexture();o.bindTexture(W,be),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Be=0;Be<Re;Be++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(ze,0,o.RGBA,1,1,je,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(ze+Be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return be}const K={};K[o.TEXTURE_2D]=ge(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=ge(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=ge(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=ge(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),se(o.DEPTH_TEST),u.setFunc(Eo),De(!1),Ye(ex),se(o.CULL_FACE),xe(_a);function se(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function He(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Pe(W,ze){return v[W]!==ze?(o.bindFramebuffer(W,ze),v[W]=ze,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=ze),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=ze),!0):!1}function Xe(W,ze){let Re=x,je=!1;if(W){Re=_.get(ze),Re===void 0&&(Re=[],_.set(ze,Re));const Le=W.textures;if(Re.length!==Le.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let be=0,Be=Le.length;be<Be;be++)Re[be]=o.COLOR_ATTACHMENT0+be;Re.length=Le.length,je=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,je=!0);je&&o.drawBuffers(Re)}function _t(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const xt={[ur]:o.FUNC_ADD,[Wb]:o.FUNC_SUBTRACT,[qb]:o.FUNC_REVERSE_SUBTRACT};xt[jb]=o.MIN,xt[Yb]=o.MAX;const ht={[Zb]:o.ZERO,[Kb]:o.ONE,[Jb]:o.SRC_COLOR,[Ap]:o.SRC_ALPHA,[iT]:o.SRC_ALPHA_SATURATE,[tT]:o.DST_COLOR,[$b]:o.DST_ALPHA,[Qb]:o.ONE_MINUS_SRC_COLOR,[wp]:o.ONE_MINUS_SRC_ALPHA,[nT]:o.ONE_MINUS_DST_COLOR,[eT]:o.ONE_MINUS_DST_ALPHA,[aT]:o.CONSTANT_COLOR,[sT]:o.ONE_MINUS_CONSTANT_COLOR,[rT]:o.CONSTANT_ALPHA,[oT]:o.ONE_MINUS_CONSTANT_ALPHA};function xe(W,ze,Re,je,Le,be,Be,dt,Ht,Lt){if(W===_a){T===!0&&(He(o.BLEND),T=!1);return}if(T===!1&&(se(o.BLEND),T=!0),W!==Xb){if(W!==S||Lt!==A){if((y!==ur||w!==ur)&&(o.blendEquation(o.FUNC_ADD),y=ur,w=ur),Lt)switch(W){case Za:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vi:o.blendFunc(o.ONE,o.ONE);break;case tx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:vt("WebGLState: Invalid blending: ",W);break}else switch(W){case Za:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vi:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case tx:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nx:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",W);break}L=null,R=null,U=null,I=null,O.set(0,0,0),q=0,S=W,A=Lt}return}Le=Le||ze,be=be||Re,Be=Be||je,(ze!==y||Le!==w)&&(o.blendEquationSeparate(xt[ze],xt[Le]),y=ze,w=Le),(Re!==L||je!==R||be!==U||Be!==I)&&(o.blendFuncSeparate(ht[Re],ht[je],ht[be],ht[Be]),L=Re,R=je,U=be,I=Be),(dt.equals(O)===!1||Ht!==q)&&(o.blendColor(dt.r,dt.g,dt.b,Ht),O.copy(dt),q=Ht),S=W,A=!1}function we(W,ze){W.side===na?He(o.CULL_FACE):se(o.CULL_FACE);let Re=W.side===ei;ze&&(Re=!Re),De(Re),W.blending===Za&&W.transparent===!1?xe(_a):xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const je=W.stencilWrite;f.setTest(je),je&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),it(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?se(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function De(W){N!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),N=W)}function Ye(W){W!==Vb?(se(o.CULL_FACE),W!==V&&(W===ex?o.cullFace(o.BACK):W===kb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),V=W}function F(W){W!==J&&(H&&o.lineWidth(W),J=W)}function it(W,ze,Re){W?(se(o.POLYGON_OFFSET_FILL),(te!==ze||ce!==Re)&&(o.polygonOffset(ze,Re),te=ze,ce=Re)):He(o.POLYGON_OFFSET_FILL)}function Ze(W){W?se(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function ot(W){W===void 0&&(W=o.TEXTURE0+le-1),Te!==W&&(o.activeTexture(W),Te=W)}function Ve(W,ze,Re){Re===void 0&&(Te===null?Re=o.TEXTURE0+le-1:Re=Te);let je=Ee[Re];je===void 0&&(je={type:void 0,texture:void 0},Ee[Re]=je),(je.type!==W||je.texture!==ze)&&(Te!==Re&&(o.activeTexture(Re),Te=Re),o.bindTexture(W,ze||K[W]),je.type=W,je.texture=ze)}function P(){const W=Ee[Te];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){vt("WebGLState:",W)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(W){vt("WebGLState:",W)}}function ve(){try{o.texSubImage2D(...arguments)}catch(W){vt("WebGLState:",W)}}function he(){try{o.texSubImage3D(...arguments)}catch(W){vt("WebGLState:",W)}}function B(){try{o.compressedTexSubImage2D(...arguments)}catch(W){vt("WebGLState:",W)}}function ee(){try{o.compressedTexSubImage3D(...arguments)}catch(W){vt("WebGLState:",W)}}function de(){try{o.texStorage2D(...arguments)}catch(W){vt("WebGLState:",W)}}function Ne(){try{o.texStorage3D(...arguments)}catch(W){vt("WebGLState:",W)}}function Ie(){try{o.texImage2D(...arguments)}catch(W){vt("WebGLState:",W)}}function j(){try{o.texImage3D(...arguments)}catch(W){vt("WebGLState:",W)}}function Se(W){ye.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ye.copy(W))}function We(W){Ue.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ue.copy(W))}function ke(W,ze){let Re=d.get(ze);Re===void 0&&(Re=new WeakMap,d.set(ze,Re));let je=Re.get(W);je===void 0&&(je=o.getUniformBlockIndex(ze,W.name),Re.set(W,je))}function qe(W,ze){const je=d.get(ze).get(W);h.get(ze)!==je&&(o.uniformBlockBinding(ze,je,W.__bindingPointIndex),h.set(ze,je))}function Ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Te=null,Ee={},v={},_=new WeakMap,x=[],M=null,T=!1,S=null,y=null,L=null,R=null,w=null,U=null,I=null,O=new lt(0,0,0),q=0,A=!1,N=null,V=null,J=null,te=null,ce=null,ye.set(0,0,o.canvas.width,o.canvas.height),Ue.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:se,disable:He,bindFramebuffer:Pe,drawBuffers:Xe,useProgram:_t,setBlending:xe,setMaterial:we,setFlipSided:De,setCullFace:Ye,setLineWidth:F,setPolygonOffset:it,setScissorTest:Ze,activeTexture:ot,bindTexture:Ve,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:Ie,texImage3D:j,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:de,texStorage3D:Ne,texSubImage2D:ve,texSubImage3D:he,compressedTexSubImage2D:B,compressedTexSubImage3D:ee,scissor:Se,viewport:We,reset:Ge}}function fC(o,e,t,a,s,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Oe,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return x?new OffscreenCanvas(P,E):ac("canvas")}function T(P,E,Y){let ve=1;const he=Ve(P);if((he.width>Y||he.height>Y)&&(ve=Y/Math.max(he.width,he.height)),ve<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const B=Math.floor(ve*he.width),ee=Math.floor(ve*he.height);v===void 0&&(v=M(B,ee));const de=E?M(B,ee):v;return de.width=B,de.height=ee,de.getContext("2d").drawImage(P,0,0,B,ee),ut("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+B+"x"+ee+")."),de}else return"data"in P&&ut("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){o.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(P,E,Y,ve,he=!1){if(P!==null){if(o[P]!==void 0)return o[P];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let B=E;if(E===o.RED&&(Y===o.FLOAT&&(B=o.R32F),Y===o.HALF_FLOAT&&(B=o.R16F),Y===o.UNSIGNED_BYTE&&(B=o.R8)),E===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(B=o.R8UI),Y===o.UNSIGNED_SHORT&&(B=o.R16UI),Y===o.UNSIGNED_INT&&(B=o.R32UI),Y===o.BYTE&&(B=o.R8I),Y===o.SHORT&&(B=o.R16I),Y===o.INT&&(B=o.R32I)),E===o.RG&&(Y===o.FLOAT&&(B=o.RG32F),Y===o.HALF_FLOAT&&(B=o.RG16F),Y===o.UNSIGNED_BYTE&&(B=o.RG8)),E===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(B=o.RG8UI),Y===o.UNSIGNED_SHORT&&(B=o.RG16UI),Y===o.UNSIGNED_INT&&(B=o.RG32UI),Y===o.BYTE&&(B=o.RG8I),Y===o.SHORT&&(B=o.RG16I),Y===o.INT&&(B=o.RG32I)),E===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(B=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(B=o.RGB16UI),Y===o.UNSIGNED_INT&&(B=o.RGB32UI),Y===o.BYTE&&(B=o.RGB8I),Y===o.SHORT&&(B=o.RGB16I),Y===o.INT&&(B=o.RGB32I)),E===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(B=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(B=o.RGBA16UI),Y===o.UNSIGNED_INT&&(B=o.RGBA32UI),Y===o.BYTE&&(B=o.RGBA8I),Y===o.SHORT&&(B=o.RGBA16I),Y===o.INT&&(B=o.RGBA32I)),E===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(B=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(B=o.R11F_G11F_B10F)),E===o.RGBA){const ee=he?gf:Ft.getTransfer(ve);Y===o.FLOAT&&(B=o.RGBA32F),Y===o.HALF_FLOAT&&(B=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(B=ee===Zt?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(B=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(B=o.RGB5_A1)}return(B===o.R16F||B===o.R32F||B===o.RG16F||B===o.RG32F||B===o.RGBA16F||B===o.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function w(P,E){let Y;return P?E===null||E===ya||E===tc?Y=o.DEPTH24_STENCIL8:E===Xi?Y=o.DEPTH32F_STENCIL8:E===ec&&(Y=o.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ya||E===tc?Y=o.DEPTH_COMPONENT24:E===Xi?Y=o.DEPTH_COMPONENT32F:E===ec&&(Y=o.DEPTH_COMPONENT16),Y}function U(P,E){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){const E=P.target;E.removeEventListener("dispose",I),q(E),E.isVideoTexture&&g.delete(E)}function O(P){const E=P.target;E.removeEventListener("dispose",O),N(E)}function q(P){const E=a.get(P);if(E.__webglInit===void 0)return;const Y=P.source,ve=_.get(Y);if(ve){const he=ve[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&A(P),Object.keys(ve).length===0&&_.delete(Y)}a.remove(P)}function A(P){const E=a.get(P);o.deleteTexture(E.__webglTexture);const Y=P.source,ve=_.get(Y);delete ve[E.__cacheKey],u.memory.textures--}function N(P){const E=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let he=0;he<E.__webglFramebuffer[ve].length;he++)o.deleteFramebuffer(E.__webglFramebuffer[ve][he]);else o.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)o.deleteFramebuffer(E.__webglFramebuffer[ve]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=P.textures;for(let ve=0,he=Y.length;ve<he;ve++){const B=a.get(Y[ve]);B.__webglTexture&&(o.deleteTexture(B.__webglTexture),u.memory.textures--),a.remove(Y[ve])}a.remove(P)}let V=0;function J(){V=0}function te(){const P=V;return P>=s.maxTextures&&ut("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),V+=1,P}function ce(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function le(P,E){const Y=a.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){const ve=P.image;if(ve===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{K(Y,P,E);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+E)}function H(P,E){const Y=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){K(Y,P,E);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+E)}function k(P,E){const Y=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){K(Y,P,E);return}t.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+E)}function ae(P,E){const Y=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Y.__version!==P.version){se(Y,P,E);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+E)}const Te={[Os]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[mf]:o.MIRRORED_REPEAT},Ee={[In]:o.NEAREST,[Ny]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[lf]:o.LINEAR_MIPMAP_NEAREST,[ja]:o.LINEAR_MIPMAP_LINEAR},z={[mT]:o.NEVER,[yT]:o.ALWAYS,[gT]:o.LESS,[qm]:o.LEQUAL,[vT]:o.EQUAL,[jm]:o.GEQUAL,[_T]:o.GREATER,[xT]:o.NOTEQUAL};function ne(P,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===lf||E.magFilter===ql||E.magFilter===ja||E.minFilter===zn||E.minFilter===lf||E.minFilter===ql||E.minFilter===ja)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Te[E.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Te[E.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Te[E.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Ee[E.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==ql&&E.minFilter!==ja||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function ye(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I));const ve=E.source;let he=_.get(ve);he===void 0&&(he={},_.set(ve,he));const B=ce(E);if(B!==P.__cacheKey){he[B]===void 0&&(he[B]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),he[B].usedTimes++;const ee=he[P.__cacheKey];ee!==void 0&&(he[P.__cacheKey].usedTimes--,ee.usedTimes===0&&A(E)),P.__cacheKey=B,P.__webglTexture=he[B].texture}return Y}function Ue(P,E,Y){return Math.floor(Math.floor(P/Y)/E)}function ge(P,E,Y,ve){const B=P.updateRanges;if(B.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Y,ve,E.data);else{B.sort((j,Se)=>j.start-Se.start);let ee=0;for(let j=1;j<B.length;j++){const Se=B[ee],We=B[j],ke=Se.start+Se.count,qe=Ue(We.start,E.width,4),Ge=Ue(Se.start,E.width,4);We.start<=ke+1&&qe===Ge&&Ue(We.start+We.count-1,E.width,4)===qe?Se.count=Math.max(Se.count,We.start+We.count-Se.start):(++ee,B[ee]=We)}B.length=ee+1;const de=o.getParameter(o.UNPACK_ROW_LENGTH),Ne=o.getParameter(o.UNPACK_SKIP_PIXELS),Ie=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let j=0,Se=B.length;j<Se;j++){const We=B[j],ke=Math.floor(We.start/4),qe=Math.ceil(We.count/4),Ge=ke%E.width,W=Math.floor(ke/E.width),ze=qe,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),t.texSubImage2D(o.TEXTURE_2D,0,Ge,W,ze,Re,Y,ve,E.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,de),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ie)}}function K(P,E,Y){let ve=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=o.TEXTURE_3D);const he=ye(P,E),B=E.source;t.bindTexture(ve,P.__webglTexture,o.TEXTURE0+Y);const ee=a.get(B);if(B.version!==ee.__version||he===!0){t.activeTexture(o.TEXTURE0+Y);const de=Ft.getPrimaries(Ft.workingColorSpace),Ne=E.colorSpace===Us?null:Ft.getPrimaries(E.colorSpace),Ie=E.colorSpace===Us||de===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let j=T(E.image,!1,s.maxTextureSize);j=ot(E,j);const Se=l.convert(E.format,E.colorSpace),We=l.convert(E.type);let ke=R(E.internalFormat,Se,We,E.colorSpace,E.isVideoTexture);ne(ve,E);let qe;const Ge=E.mipmaps,W=E.isVideoTexture!==!0,ze=ee.__version===void 0||he===!0,Re=B.dataReady,je=U(E,j);if(E.isDepthTexture)ke=w(E.format===dr,E.type),ze&&(W?t.texStorage2D(o.TEXTURE_2D,1,ke,j.width,j.height):t.texImage2D(o.TEXTURE_2D,0,ke,j.width,j.height,0,Se,We,null));else if(E.isDataTexture)if(Ge.length>0){W&&ze&&t.texStorage2D(o.TEXTURE_2D,je,ke,Ge[0].width,Ge[0].height);for(let Le=0,be=Ge.length;Le<be;Le++)qe=Ge[Le],W?Re&&t.texSubImage2D(o.TEXTURE_2D,Le,0,0,qe.width,qe.height,Se,We,qe.data):t.texImage2D(o.TEXTURE_2D,Le,ke,qe.width,qe.height,0,Se,We,qe.data);E.generateMipmaps=!1}else W?(ze&&t.texStorage2D(o.TEXTURE_2D,je,ke,j.width,j.height),Re&&ge(E,j,Se,We)):t.texImage2D(o.TEXTURE_2D,0,ke,j.width,j.height,0,Se,We,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&ze&&t.texStorage3D(o.TEXTURE_2D_ARRAY,je,ke,Ge[0].width,Ge[0].height,j.depth);for(let Le=0,be=Ge.length;Le<be;Le++)if(qe=Ge[Le],E.format!==Wi)if(Se!==null)if(W){if(Re)if(E.layerUpdates.size>0){const Be=Jx(qe.width,qe.height,E.format,E.type);for(const dt of E.layerUpdates){const Ht=qe.data.subarray(dt*Be/qe.data.BYTES_PER_ELEMENT,(dt+1)*Be/qe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Le,0,0,dt,qe.width,qe.height,1,Se,Ht)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Le,0,0,0,qe.width,qe.height,j.depth,Se,qe.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Le,ke,qe.width,qe.height,j.depth,0,qe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Le,0,0,0,qe.width,qe.height,j.depth,Se,We,qe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Le,ke,qe.width,qe.height,j.depth,0,Se,We,qe.data)}else{W&&ze&&t.texStorage2D(o.TEXTURE_2D,je,ke,Ge[0].width,Ge[0].height);for(let Le=0,be=Ge.length;Le<be;Le++)qe=Ge[Le],E.format!==Wi?Se!==null?W?Re&&t.compressedTexSubImage2D(o.TEXTURE_2D,Le,0,0,qe.width,qe.height,Se,qe.data):t.compressedTexImage2D(o.TEXTURE_2D,Le,ke,qe.width,qe.height,0,qe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&t.texSubImage2D(o.TEXTURE_2D,Le,0,0,qe.width,qe.height,Se,We,qe.data):t.texImage2D(o.TEXTURE_2D,Le,ke,qe.width,qe.height,0,Se,We,qe.data)}else if(E.isDataArrayTexture)if(W){if(ze&&t.texStorage3D(o.TEXTURE_2D_ARRAY,je,ke,j.width,j.height,j.depth),Re)if(E.layerUpdates.size>0){const Le=Jx(j.width,j.height,E.format,E.type);for(const be of E.layerUpdates){const Be=j.data.subarray(be*Le/j.data.BYTES_PER_ELEMENT,(be+1)*Le/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,be,j.width,j.height,1,Se,We,Be)}E.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Se,We,j.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,ke,j.width,j.height,j.depth,0,Se,We,j.data);else if(E.isData3DTexture)W?(ze&&t.texStorage3D(o.TEXTURE_3D,je,ke,j.width,j.height,j.depth),Re&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Se,We,j.data)):t.texImage3D(o.TEXTURE_3D,0,ke,j.width,j.height,j.depth,0,Se,We,j.data);else if(E.isFramebufferTexture){if(ze)if(W)t.texStorage2D(o.TEXTURE_2D,je,ke,j.width,j.height);else{let Le=j.width,be=j.height;for(let Be=0;Be<je;Be++)t.texImage2D(o.TEXTURE_2D,Be,ke,Le,be,0,Se,We,null),Le>>=1,be>>=1}}else if(Ge.length>0){if(W&&ze){const Le=Ve(Ge[0]);t.texStorage2D(o.TEXTURE_2D,je,ke,Le.width,Le.height)}for(let Le=0,be=Ge.length;Le<be;Le++)qe=Ge[Le],W?Re&&t.texSubImage2D(o.TEXTURE_2D,Le,0,0,Se,We,qe):t.texImage2D(o.TEXTURE_2D,Le,ke,Se,We,qe);E.generateMipmaps=!1}else if(W){if(ze){const Le=Ve(j);t.texStorage2D(o.TEXTURE_2D,je,ke,Le.width,Le.height)}Re&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se,We,j)}else t.texImage2D(o.TEXTURE_2D,0,ke,Se,We,j);S(E)&&y(ve),ee.__version=B.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function se(P,E,Y){if(E.image.length!==6)return;const ve=ye(P,E),he=E.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+Y);const B=a.get(he);if(he.version!==B.__version||ve===!0){t.activeTexture(o.TEXTURE0+Y);const ee=Ft.getPrimaries(Ft.workingColorSpace),de=E.colorSpace===Us?null:Ft.getPrimaries(E.colorSpace),Ne=E.colorSpace===Us||ee===de?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,j=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let be=0;be<6;be++)!Ie&&!j?Se[be]=T(E.image[be],!0,s.maxCubemapSize):Se[be]=j?E.image[be].image:E.image[be],Se[be]=ot(E,Se[be]);const We=Se[0],ke=l.convert(E.format,E.colorSpace),qe=l.convert(E.type),Ge=R(E.internalFormat,ke,qe,E.colorSpace),W=E.isVideoTexture!==!0,ze=B.__version===void 0||ve===!0,Re=he.dataReady;let je=U(E,We);ne(o.TEXTURE_CUBE_MAP,E);let Le;if(Ie){W&&ze&&t.texStorage2D(o.TEXTURE_CUBE_MAP,je,Ge,We.width,We.height);for(let be=0;be<6;be++){Le=Se[be].mipmaps;for(let Be=0;Be<Le.length;Be++){const dt=Le[Be];E.format!==Wi?ke!==null?W?Re&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be,0,0,dt.width,dt.height,ke,dt.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be,Ge,dt.width,dt.height,0,dt.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be,0,0,dt.width,dt.height,ke,qe,dt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be,Ge,dt.width,dt.height,0,ke,qe,dt.data)}}}else{if(Le=E.mipmaps,W&&ze){Le.length>0&&je++;const be=Ve(Se[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,je,Ge,be.width,be.height)}for(let be=0;be<6;be++)if(j){W?Re&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Se[be].width,Se[be].height,ke,qe,Se[be].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ge,Se[be].width,Se[be].height,0,ke,qe,Se[be].data);for(let Be=0;Be<Le.length;Be++){const Ht=Le[Be].image[be].image;W?Re&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be+1,0,0,Ht.width,Ht.height,ke,qe,Ht.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be+1,Ge,Ht.width,Ht.height,0,ke,qe,Ht.data)}}else{W?Re&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ke,qe,Se[be]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ge,ke,qe,Se[be]);for(let Be=0;Be<Le.length;Be++){const dt=Le[Be];W?Re&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be+1,0,0,ke,qe,dt.image[be]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be+1,Ge,ke,qe,dt.image[be])}}}S(E)&&y(o.TEXTURE_CUBE_MAP),B.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function He(P,E,Y,ve,he,B){const ee=l.convert(Y.format,Y.colorSpace),de=l.convert(Y.type),Ne=R(Y.internalFormat,ee,de,Y.colorSpace),Ie=a.get(E),j=a.get(Y);if(j.__renderTarget=E,!Ie.__hasExternalTextures){const Se=Math.max(1,E.width>>B),We=Math.max(1,E.height>>B);he===o.TEXTURE_3D||he===o.TEXTURE_2D_ARRAY?t.texImage3D(he,B,Ne,Se,We,E.depth,0,ee,de,null):t.texImage2D(he,B,Ne,Se,We,0,ee,de,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),it(E)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,he,j.__webglTexture,0,F(E)):(he===o.TEXTURE_2D||he>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,he,j.__webglTexture,B),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Pe(P,E,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,P),E.depthBuffer){const ve=E.depthTexture,he=ve&&ve.isDepthTexture?ve.type:null,B=w(E.stencilBuffer,he),ee=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;it(E)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,F(E),B,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,F(E),B,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,B,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ee,o.RENDERBUFFER,P)}else{const ve=E.textures;for(let he=0;he<ve.length;he++){const B=ve[he],ee=l.convert(B.format,B.colorSpace),de=l.convert(B.type),Ne=R(B.internalFormat,ee,de,B.colorSpace);it(E)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,F(E),Ne,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,F(E),Ne,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xe(P,E,Y){const ve=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=a.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ve){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),he.__webglTexture===void 0){he.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ne(o.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=l.convert(E.depthTexture.format),j=l.convert(E.depthTexture.type);let Se;E.depthTexture.format===Qa?Se=o.DEPTH_COMPONENT24:E.depthTexture.format===dr&&(Se=o.DEPTH24_STENCIL8);for(let We=0;We<6;We++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Se,E.width,E.height,0,Ie,j,null)}}else le(E.depthTexture,0);const B=he.__webglTexture,ee=F(E),de=ve?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,Ne=E.depthTexture.format===dr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Qa)it(E)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ne,de,B,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,Ne,de,B,0);else if(E.depthTexture.format===dr)it(E)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ne,de,B,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,Ne,de,B,0);else throw new Error("Unknown depthTexture format")}function _t(P){const E=a.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ve=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",he)};ve.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ve}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let ve=0;ve<6;ve++)Xe(E.__webglFramebuffer[ve],P,ve);else{const ve=P.texture.mipmaps;ve&&ve.length>0?Xe(E.__webglFramebuffer[0],P,0):Xe(E.__webglFramebuffer,P,0)}else if(Y){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=o.createRenderbuffer(),Pe(E.__webglDepthbuffer[ve],P,!1);else{const he=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer[ve];o.bindRenderbuffer(o.RENDERBUFFER,B),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,B)}}else{const ve=P.texture.mipmaps;if(ve&&ve.length>0?t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Pe(E.__webglDepthbuffer,P,!1);else{const he=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,B),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,B)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(P,E,Y){const ve=a.get(P);E!==void 0&&He(ve.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&_t(P)}function ht(P){const E=P.texture,Y=a.get(P),ve=a.get(E);P.addEventListener("dispose",O);const he=P.textures,B=P.isWebGLCubeRenderTarget===!0,ee=he.length>1;if(ee||(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=E.version,u.memory.textures++),B){Y.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[de]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Y.__webglFramebuffer[de][Ne]=o.createFramebuffer()}else Y.__webglFramebuffer[de]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)Y.__webglFramebuffer[de]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(ee)for(let de=0,Ne=he.length;de<Ne;de++){const Ie=a.get(he[de]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=o.createTexture(),u.memory.textures++)}if(P.samples>0&&it(P)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const Ne=he[de];Y.__webglColorRenderbuffer[de]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[de]);const Ie=l.convert(Ne.format,Ne.colorSpace),j=l.convert(Ne.type),Se=R(Ne.internalFormat,Ie,j,Ne.colorSpace,P.isXRRenderTarget===!0),We=F(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Se,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+de,o.RENDERBUFFER,Y.__webglColorRenderbuffer[de])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Pe(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(B){t.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),ne(o.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)He(Y.__webglFramebuffer[de][Ne],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne);else He(Y.__webglFramebuffer[de],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(E)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){for(let de=0,Ne=he.length;de<Ne;de++){const Ie=he[de],j=a.get(Ie);let Se=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Se,j.__webglTexture),ne(Se,Ie),He(Y.__webglFramebuffer,P,Ie,o.COLOR_ATTACHMENT0+de,Se,0),S(Ie)&&y(Se)}t.unbindTexture()}else{let de=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(de,ve.__webglTexture),ne(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)He(Y.__webglFramebuffer[Ne],P,E,o.COLOR_ATTACHMENT0,de,Ne);else He(Y.__webglFramebuffer,P,E,o.COLOR_ATTACHMENT0,de,0);S(E)&&y(de),t.unbindTexture()}P.depthBuffer&&_t(P)}function xe(P){const E=P.textures;for(let Y=0,ve=E.length;Y<ve;Y++){const he=E[Y];if(S(he)){const B=L(P),ee=a.get(he).__webglTexture;t.bindTexture(B,ee),y(B),t.unbindTexture()}}}const we=[],De=[];function Ye(P){if(P.samples>0){if(it(P)===!1){const E=P.textures,Y=P.width,ve=P.height;let he=o.COLOR_BUFFER_BIT;const B=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ee=a.get(P),de=E.length>1;if(de)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);const Ne=P.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=o.STENCIL_BUFFER_BIT)),de){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const j=a.get(E[Ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,j,0)}o.blitFramebuffer(0,0,Y,ve,0,0,Y,ve,he,o.NEAREST),h===!0&&(we.length=0,De.length=0,we.push(o.COLOR_ATTACHMENT0+Ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(we.push(B),De.push(B),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,De)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),de)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const j=a.get(E[Ie]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,j,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function F(P){return Math.min(s.maxSamples,P.samples)}function it(P){const E=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(P){const E=u.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function ot(P,E){const Y=P.colorSpace,ve=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==ci&&Y!==Us&&(Ft.getTransfer(Y)===Zt?(ve!==Wi||he!==Ci)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",Y)),E}function Ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=J,this.setTexture2D=le,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=ae,this.rebindTextures=xt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=He,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hC(o,e){function t(a,s=Us){let l;const u=Ft.getTransfer(s);if(a===Ci)return o.UNSIGNED_BYTE;if(a===Fm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Hm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Py)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Oy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Ly)return o.BYTE;if(a===Uy)return o.SHORT;if(a===ec)return o.UNSIGNED_SHORT;if(a===Bm)return o.INT;if(a===ya)return o.UNSIGNED_INT;if(a===Xi)return o.FLOAT;if(a===Di)return o.HALF_FLOAT;if(a===Iy)return o.ALPHA;if(a===zy)return o.RGB;if(a===Wi)return o.RGBA;if(a===Qa)return o.DEPTH_COMPONENT;if(a===dr)return o.DEPTH_STENCIL;if(a===Gm)return o.RED;if(a===Vm)return o.RED_INTEGER;if(a===wo)return o.RG;if(a===km)return o.RG_INTEGER;if(a===Xm)return o.RGBA_INTEGER;if(a===cf||a===uf||a===ff||a===hf)if(u===Zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===cf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===cf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===uf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zp||a===Bp||a===Fp||a===Hp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===zp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Fp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gp||a===Vp||a===kp||a===Xp||a===Wp||a===qp||a===jp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Gp||a===Vp)return u===Zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===kp)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Xp)return l.COMPRESSED_R11_EAC;if(a===Wp)return l.COMPRESSED_SIGNED_R11_EAC;if(a===qp)return l.COMPRESSED_RG11_EAC;if(a===jp)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Yp||a===Zp||a===Kp||a===Jp||a===Qp||a===$p||a===em||a===tm||a===nm||a===im||a===am||a===sm||a===rm||a===om)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Yp)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Zp)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Kp)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Jp)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Qp)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===$p)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===em)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===tm)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===nm)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===im)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===am)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===sm)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===rm)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===om)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===lm||a===cm||a===um)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===lm)return u===Zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===cm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===um)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===fm||a===hm||a===dm||a===pm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===fm)return l.COMPRESSED_RED_RGTC1_EXT;if(a===hm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===dm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===pm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===tc?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:t}}const dC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pC=`
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

}`;class mC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new tS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new kn({vertexShader:dC,fragmentShader:pC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new dc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gC extends Oo{constructor(e,t){super();const a=this;let s=null,l=1,u=null,f="local-floor",h=1,d=null,g=null,v=null,_=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",S=new mC,y={},L=t.getContextAttributes();let R=null,w=null;const U=[],I=[],O=new Oe;let q=null;const A=new ai;A.viewport=new fn;const N=new ai;N.viewport=new fn;const V=[A,N],J=new gE;let te=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=U[K];return se===void 0&&(se=new rp,U[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=U[K];return se===void 0&&(se=new rp,U[K]=se),se.getGripSpace()},this.getHand=function(K){let se=U[K];return se===void 0&&(se=new rp,U[K]=se),se.getHandSpace()};function le(K){const se=I.indexOf(K.inputSource);if(se===-1)return;const He=U[se];He!==void 0&&(He.update(K.inputSource,K.frame,d||u),He.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",k);for(let K=0;K<U.length;K++){const se=I[K];se!==null&&(I[K]=null,U[K].disconnect(se))}te=null,ce=null,S.reset();for(const K in y)delete y[K];e.setRenderTarget(R),x=null,_=null,v=null,s=null,w=null,ge.stop(),a.isPresenting=!1,e.setPixelRatio(q),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,a.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,a.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",H),s.addEventListener("inputsourceschange",k),L.xrCompatible!==!0&&await t.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let He=null,Pe=null,Xe=null;L.depth&&(Xe=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,He=L.stencil?dr:Qa,Pe=L.stencil?tc:ya);const _t={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(_t),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new xi(_.textureWidth,_.textureHeight,{format:Wi,type:Ci,depthTexture:new oc(_.textureWidth,_.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,He),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const He={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,t,He),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new xi(x.framebufferWidth,x.framebufferHeight,{format:Wi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await s.requestReferenceSpace(f),ge.setContext(s),ge.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(K){for(let se=0;se<K.removed.length;se++){const He=K.removed[se],Pe=I.indexOf(He);Pe>=0&&(I[Pe]=null,U[Pe].disconnect(He))}for(let se=0;se<K.added.length;se++){const He=K.added[se];let Pe=I.indexOf(He);if(Pe===-1){for(let _t=0;_t<U.length;_t++)if(_t>=I.length){I.push(He),Pe=_t;break}else if(I[_t]===null){I[_t]=He,Pe=_t;break}if(Pe===-1)break}const Xe=U[Pe];Xe&&Xe.connect(He)}}const ae=new G,Te=new G;function Ee(K,se,He){ae.setFromMatrixPosition(se.matrixWorld),Te.setFromMatrixPosition(He.matrixWorld);const Pe=ae.distanceTo(Te),Xe=se.projectionMatrix.elements,_t=He.projectionMatrix.elements,xt=Xe[14]/(Xe[10]-1),ht=Xe[14]/(Xe[10]+1),xe=(Xe[9]+1)/Xe[5],we=(Xe[9]-1)/Xe[5],De=(Xe[8]-1)/Xe[0],Ye=(_t[8]+1)/_t[0],F=xt*De,it=xt*Ye,Ze=Pe/(-De+Ye),ot=Ze*-De;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ot),K.translateZ(Ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Xe[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ve=xt+Ze,P=ht+Ze,E=F-ot,Y=it+(Pe-ot),ve=xe*ht/P*Ve,he=we*ht/P*Ve;K.projectionMatrix.makePerspective(E,Y,ve,he,Ve,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function z(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let se=K.near,He=K.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(He=S.depthFar)),J.near=N.near=A.near=se,J.far=N.far=A.far=He,(te!==J.near||ce!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),te=J.near,ce=J.far),J.layers.mask=K.layers.mask|6,A.layers.mask=J.layers.mask&3,N.layers.mask=J.layers.mask&5;const Pe=K.parent,Xe=J.cameras;z(J,Pe);for(let _t=0;_t<Xe.length;_t++)z(Xe[_t],Pe);Xe.length===2?Ee(J,A,N):J.projectionMatrix.copy(A.projectionMatrix),ne(K,J,Pe)};function ne(K,se,He){He===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(He.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ro*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(K){h=K,_!==null&&(_.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(K){return y[K]};let ye=null;function Ue(K,se){if(g=se.getViewerPose(d||u),M=se,g!==null){const He=g.views;x!==null&&(e.setRenderTargetFramebuffer(w,x.framebuffer),e.setRenderTarget(w));let Pe=!1;He.length!==J.cameras.length&&(J.cameras.length=0,Pe=!0);for(let ht=0;ht<He.length;ht++){const xe=He[ht];let we=null;if(x!==null)we=x.getViewport(xe);else{const Ye=v.getViewSubImage(_,xe);we=Ye.viewport,ht===0&&(e.setRenderTargetTextures(w,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(w))}let De=V[ht];De===void 0&&(De=new ai,De.layers.enable(ht),De.viewport=new fn,V[ht]=De),De.matrix.fromArray(xe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(xe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(we.x,we.y,we.width,we.height),ht===0&&(J.matrix.copy(De.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Pe===!0&&J.cameras.push(De)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const ht=v.getDepthInformation(He[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,s.renderState)}if(Xe&&Xe.includes("camera-access")&&T){e.state.unbindTexture(),v=a.getBinding();for(let ht=0;ht<He.length;ht++){const xe=He[ht].camera;if(xe){let we=y[xe];we||(we=new tS,y[xe]=we);const De=v.getCameraImage(xe);we.sourceTexture=De}}}}for(let He=0;He<U.length;He++){const Pe=I[He],Xe=U[He];Pe!==null&&Xe!==void 0&&Xe.update(Pe,se,d||u)}ye&&ye(K,se),se.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:se}),M=null}const ge=new vS;ge.setAnimationLoop(Ue),this.setAnimationLoop=function(K){ye=K},this.dispose=function(){}}}const rr=new Ni,vC=new At;function _C(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,Wy(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,L,R,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?h(S,y,L,R):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ei&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ei&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),R=L.envMap,w=L.envMapRotation;R&&(S.envMap.value=R,rr.copy(w),rr.x*=-1,rr.y*=-1,rr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),S.envMapRotation.value.setFromMatrix4(vC.makeRotationFromEuler(rr)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,L,R){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=R*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function xC(o,e,t,a){let s={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const w=R.program;a.uniformBlockBinding(L,w)}function d(L,R){let w=s[L.id];w===void 0&&(M(L),w=g(L),s[L.id]=w,L.addEventListener("dispose",S));const U=R.program;a.updateUBOMapping(L,U);const I=e.render.frame;l[L.id]!==I&&(_(L),l[L.id]=I)}function g(L){const R=v();L.__bindingPointIndex=R;const w=o.createBuffer(),U=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,U,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,w),w}function v(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const R=s[L.id],w=L.uniforms,U=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let I=0,O=w.length;I<O;I++){const q=Array.isArray(w[I])?w[I]:[w[I]];for(let A=0,N=q.length;A<N;A++){const V=q[A];if(x(V,I,A,U)===!0){const J=V.__offset,te=Array.isArray(V.value)?V.value:[V.value];let ce=0;for(let le=0;le<te.length;le++){const H=te[le],k=T(H);typeof H=="number"||typeof H=="boolean"?(V.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,J+ce,V.__data)):H.isMatrix3?(V.__data[0]=H.elements[0],V.__data[1]=H.elements[1],V.__data[2]=H.elements[2],V.__data[3]=0,V.__data[4]=H.elements[3],V.__data[5]=H.elements[4],V.__data[6]=H.elements[5],V.__data[7]=0,V.__data[8]=H.elements[6],V.__data[9]=H.elements[7],V.__data[10]=H.elements[8],V.__data[11]=0):(H.toArray(V.__data,ce),ce+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(L,R,w,U){const I=L.value,O=R+"_"+w;if(U[O]===void 0)return typeof I=="number"||typeof I=="boolean"?U[O]=I:U[O]=I.clone(),!0;{const q=U[O];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return U[O]=I,!0}else if(q.equals(I)===!1)return q.copy(I),!0}return!1}function M(L){const R=L.uniforms;let w=0;const U=16;for(let O=0,q=R.length;O<q;O++){const A=Array.isArray(R[O])?R[O]:[R[O]];for(let N=0,V=A.length;N<V;N++){const J=A[N],te=Array.isArray(J.value)?J.value:[J.value];for(let ce=0,le=te.length;ce<le;ce++){const H=te[ce],k=T(H),ae=w%U,Te=ae%k.boundary,Ee=ae+Te;w+=Te,Ee!==0&&U-Ee<k.storage&&(w+=U-Ee),J.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=k.storage}}}const I=w%U;return I>0&&(w+=U-I),L.__size=w,L.__cache={},this}function T(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",L),R}function S(L){const R=L.target;R.removeEventListener("dispose",S);const w=u.indexOf(R.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(s[R.id]),delete s[R.id],delete l[R.id]}function y(){for(const L in s)o.deleteBuffer(s[L]);u=[],s={},l={}}return{bind:h,update:d,dispose:y}}const yC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ha=null;function SC(){return ha===null&&(ha=new Km(yC,16,16,wo,Di),ha.name="DFG_LUT",ha.minFilter=zn,ha.magFilter=zn,ha.wrapS=ga,ha.wrapT=ga,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class MS{constructor(e={}){const{canvas:t=MT(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Ci}=e;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const T=x,S=new Set([Xm,km,Vm]),y=new Set([Ci,ya,ec,tc,Fm,Hm]),L=new Uint32Array(4),R=new Int32Array(4);let w=null,U=null;const I=[],O=[];let q=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=On;let V=0,J=0,te=null,ce=-1,le=null;const H=new fn,k=new fn;let ae=null;const Te=new lt(0);let Ee=0,z=t.width,ne=t.height,ye=1,Ue=null,ge=null;const K=new fn(0,0,z,ne),se=new fn(0,0,z,ne);let He=!1;const Pe=new Qm;let Xe=!1,_t=!1;const xt=new At,ht=new G,xe=new fn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ye(){return te===null?ye:1}let F=a;function it(D,Q){return t.getContext(D,Q)}try{const D={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nm}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",Ht,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),F===null){const Q="webgl2";if(F=it(Q,D),F===null)throw it(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw vt("WebGLRenderer: "+D.message),D}let Ze,ot,Ve,P,E,Y,ve,he,B,ee,de,Ne,Ie,j,Se,We,ke,qe,Ge,W,ze,Re,je,Le;function be(){Ze=new S2(F),Ze.init(),Re=new hC(F,Ze),ot=new h2(F,Ze,e,Re),Ve=new uC(F,Ze),ot.reversedDepthBuffer&&_&&Ve.buffers.depth.setReversed(!0),P=new T2(F),E=new ZR,Y=new fC(F,Ze,Ve,E,ot,Re,P),ve=new p2(A),he=new y2(A),B=new RE(F),je=new u2(F,B),ee=new M2(F,B,P,je),de=new A2(F,ee,B,P),Ge=new E2(F,ot,Y),We=new d2(E),Ne=new YR(A,ve,he,Ze,ot,je,We),Ie=new _C(A,E),j=new JR,Se=new iC(Ze),qe=new c2(A,ve,he,Ve,de,M,h),ke=new lC(A,de,ot),Le=new xC(F,P,ot,Ve),W=new f2(F,Ze,P),ze=new b2(F,Ze,P),P.programs=Ne.programs,A.capabilities=ot,A.extensions=Ze,A.properties=E,A.renderLists=j,A.shadowMap=ke,A.state=Ve,A.info=P}be(),T!==Ci&&(q=new R2(T,t.width,t.height,s,l));const Be=new gC(A,F);this.xr=Be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=Ze.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ze.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(D){D!==void 0&&(ye=D,this.setSize(z,ne,!1))},this.getSize=function(D){return D.set(z,ne)},this.setSize=function(D,Q,me=!0){if(Be.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}z=D,ne=Q,t.width=Math.floor(D*ye),t.height=Math.floor(Q*ye),me===!0&&(t.style.width=D+"px",t.style.height=Q+"px"),q!==null&&q.setSize(t.width,t.height),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(z*ye,ne*ye).floor()},this.setDrawingBufferSize=function(D,Q,me){z=D,ne=Q,ye=me,t.width=Math.floor(D*me),t.height=Math.floor(Q*me),this.setViewport(0,0,D,Q)},this.setEffects=function(D){if(T===Ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Q=0;Q<D.length;Q++)if(D[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(K)},this.setViewport=function(D,Q,me,ue){D.isVector4?K.set(D.x,D.y,D.z,D.w):K.set(D,Q,me,ue),Ve.viewport(H.copy(K).multiplyScalar(ye).round())},this.getScissor=function(D){return D.copy(se)},this.setScissor=function(D,Q,me,ue){D.isVector4?se.set(D.x,D.y,D.z,D.w):se.set(D,Q,me,ue),Ve.scissor(k.copy(se).multiplyScalar(ye).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(D){Ve.setScissorTest(He=D)},this.setOpaqueSort=function(D){Ue=D},this.setTransparentSort=function(D){ge=D},this.getClearColor=function(D){return D.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,me=!0){let ue=0;if(D){let ie=!1;if(te!==null){const Je=te.texture.format;ie=S.has(Je)}if(ie){const Je=te.texture.type,et=y.has(Je),Qe=qe.getClearColor(),tt=qe.getClearAlpha(),at=Qe.r,pt=Qe.g,st=Qe.b;et?(L[0]=at,L[1]=pt,L[2]=st,L[3]=tt,F.clearBufferuiv(F.COLOR,0,L)):(R[0]=at,R[1]=pt,R[2]=st,R[3]=tt,F.clearBufferiv(F.COLOR,0,R))}else ue|=F.COLOR_BUFFER_BIT}Q&&(ue|=F.DEPTH_BUFFER_BIT),me&&(ue|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",Ht,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),qe.dispose(),j.dispose(),Se.dispose(),E.dispose(),ve.dispose(),he.dispose(),de.dispose(),je.dispose(),Le.dispose(),Ne.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",An),Be.removeEventListener("sessionend",on),vn.stop()};function dt(D){D.preventDefault(),_f("WebGLRenderer: Context Lost."),N=!0}function Ht(){_f("WebGLRenderer: Context Restored."),N=!1;const D=P.autoReset,Q=ke.enabled,me=ke.autoUpdate,ue=ke.needsUpdate,ie=ke.type;be(),P.autoReset=D,ke.enabled=Q,ke.autoUpdate=me,ke.needsUpdate=ue,ke.type=ie}function Lt(D){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Fe(D){const Q=D.target;Q.removeEventListener("dispose",Fe),Ke(Q)}function Ke(D){yt(D),E.remove(D)}function yt(D){const Q=E.get(D).programs;Q!==void 0&&(Q.forEach(function(me){Ne.releaseProgram(me)}),D.isShaderMaterial&&Ne.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,me,ue,ie,Je){Q===null&&(Q=we);const et=ie.isMesh&&ie.matrixWorld.determinant()<0,Qe=zs(D,Q,me,ue,ie);Ve.setMaterial(ue,et);let tt=me.index,at=1;if(ue.wireframe===!0){if(tt=ee.getWireframeAttribute(me),tt===void 0)return;at=2}const pt=me.drawRange,st=me.attributes.position;let mt=pt.start*at,Wt=(pt.start+pt.count)*at;Je!==null&&(mt=Math.max(mt,Je.start*at),Wt=Math.min(Wt,(Je.start+Je.count)*at)),tt!==null?(mt=Math.max(mt,0),Wt=Math.min(Wt,tt.count)):st!=null&&(mt=Math.max(mt,0),Wt=Math.min(Wt,st.count));const pn=Wt-mt;if(pn<0||pn===1/0)return;je.setup(ie,ue,Qe,me,tt);let ln,Yt=W;if(tt!==null&&(ln=B.get(tt),Yt=ze,Yt.setIndex(ln)),ie.isMesh)ue.wireframe===!0?(Ve.setLineWidth(ue.wireframeLinewidth*Ye()),Yt.setMode(F.LINES)):Yt.setMode(F.TRIANGLES);else if(ie.isLine){let ct=ue.linewidth;ct===void 0&&(ct=1),Ve.setLineWidth(ct*Ye()),ie.isLineSegments?Yt.setMode(F.LINES):ie.isLineLoop?Yt.setMode(F.LINE_LOOP):Yt.setMode(F.LINE_STRIP)}else ie.isPoints?Yt.setMode(F.POINTS):ie.isSprite&&Yt.setMode(F.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)sc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Yt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const ct=ie._multiDrawStarts,qt=ie._multiDrawCounts,St=ie._multiDrawCount,Wn=tt?B.get(tt).bytesPerElement:1,ba=E.get(ue).currentProgram.getUniforms();for(let qn=0;qn<St;qn++)ba.setValue(F,"_gl_DrawID",qn),Yt.render(ct[qn]/Wn,qt[qn])}else if(ie.isInstancedMesh)Yt.renderInstances(mt,pn,ie.count);else if(me.isInstancedBufferGeometry){const ct=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,qt=Math.min(me.instanceCount,ct);Yt.renderInstances(mt,pn,qt)}else Yt.render(mt,pn)};function Nt(D,Q,me){D.transparent===!0&&D.side===na&&D.forceSinglePass===!1?(D.side=ei,D.needsUpdate=!0,$a(D,Q,me),D.side=Ja,D.needsUpdate=!0,$a(D,Q,me),D.side=na):$a(D,Q,me)}this.compile=function(D,Q,me=null){me===null&&(me=D),U=Se.get(me),U.init(Q),O.push(U),me.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Q.layers)&&(U.pushLight(ie),ie.castShadow&&U.pushShadow(ie))}),D!==me&&D.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Q.layers)&&(U.pushLight(ie),ie.castShadow&&U.pushShadow(ie))}),U.setupLights();const ue=new Set;return D.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Je=ie.material;if(Je)if(Array.isArray(Je))for(let et=0;et<Je.length;et++){const Qe=Je[et];Nt(Qe,me,ie),ue.add(Qe)}else Nt(Je,me,ie),ue.add(Je)}),U=O.pop(),ue},this.compileAsync=function(D,Q,me=null){const ue=this.compile(D,Q,me);return new Promise(ie=>{function Je(){if(ue.forEach(function(et){E.get(et).currentProgram.isReady()&&ue.delete(et)}),ue.size===0){ie(D);return}setTimeout(Je,10)}Ze.get("KHR_parallel_shader_compile")!==null?Je():setTimeout(Je,10)})};let Tt=null;function En(D){Tt&&Tt(D)}function An(){vn.stop()}function on(){vn.start()}const vn=new vS;vn.setAnimationLoop(En),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(D){Tt=D,Be.setAnimationLoop(D),D===null?vn.stop():vn.start()},Be.addEventListener("sessionstart",An),Be.addEventListener("sessionend",on),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const me=Be.enabled===!0&&Be.isPresenting===!0,ue=q!==null&&(te===null||me)&&q.begin(A,te);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(Q),Q=Be.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Q,te),U=Se.get(D,O.length),U.init(Q),O.push(U),xt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Pe.setFromProjectionMatrix(xt,va,Q.reversedDepth),_t=this.localClippingEnabled,Xe=We.init(this.clippingPlanes,_t),w=j.get(D,I.length),w.init(),I.push(w),Be.enabled===!0&&Be.isPresenting===!0){const et=A.xr.getDepthSensingMesh();et!==null&&wn(et,Q,-1/0,A.sortObjects)}wn(D,Q,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(Ue,ge),De=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,De&&qe.addToRenderList(w,D),this.info.render.frame++,Xe===!0&&We.beginShadows();const ie=U.state.shadowsArray;if(ke.render(ie,D,Q),Xe===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ue&&q.hasRenderPass())===!1){const et=w.opaque,Qe=w.transmissive;if(U.setupLights(),Q.isArrayCamera){const tt=Q.cameras;if(Qe.length>0)for(let at=0,pt=tt.length;at<pt;at++){const st=tt[at];_n(et,Qe,D,st)}De&&qe.render(D);for(let at=0,pt=tt.length;at<pt;at++){const st=tt[at];dn(w,D,st,st.viewport)}}else Qe.length>0&&_n(et,Qe,D,Q),De&&qe.render(D),dn(w,D,Q)}te!==null&&J===0&&(Y.updateMultisampleRenderTarget(te),Y.updateRenderTargetMipmap(te)),ue&&q.end(A),D.isScene===!0&&D.onAfterRender(A,D,Q),je.resetDefaultState(),ce=-1,le=null,O.pop(),O.length>0?(U=O[O.length-1],Xe===!0&&We.setGlobalState(A.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?w=I[I.length-1]:w=null};function wn(D,Q,me,ue){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)me=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)U.pushLight(D),D.castShadow&&U.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Pe.intersectsSprite(D)){ue&&xe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(xt);const et=de.update(D),Qe=D.material;Qe.visible&&w.push(D,et,Qe,me,xe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Pe.intersectsObject(D))){const et=de.update(D),Qe=D.material;if(ue&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),xe.copy(D.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),xe.copy(et.boundingSphere.center)),xe.applyMatrix4(D.matrixWorld).applyMatrix4(xt)),Array.isArray(Qe)){const tt=et.groups;for(let at=0,pt=tt.length;at<pt;at++){const st=tt[at],mt=Qe[st.materialIndex];mt&&mt.visible&&w.push(D,et,mt,me,xe.z,st)}}else Qe.visible&&w.push(D,et,Qe,me,xe.z,null)}}const Je=D.children;for(let et=0,Qe=Je.length;et<Qe;et++)wn(Je[et],Q,me,ue)}function dn(D,Q,me,ue){const{opaque:ie,transmissive:Je,transparent:et}=D;U.setupLightsView(me),Xe===!0&&We.setGlobalState(A.clippingPlanes,me),ue&&Ve.viewport(H.copy(ue)),ie.length>0&&yn(ie,Q,me),Je.length>0&&yn(Je,Q,me),et.length>0&&yn(et,Q,me),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function _n(D,Q,me,ue){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ue.id]===void 0){const mt=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ue.id]=new xi(1,1,{generateMipmaps:!0,type:mt?Di:Ci,minFilter:ja,samples:ot.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const Je=U.state.transmissionRenderTarget[ue.id],et=ue.viewport||H;Je.setSize(et.z*A.transmissionResolutionScale,et.w*A.transmissionResolutionScale);const Qe=A.getRenderTarget(),tt=A.getActiveCubeFace(),at=A.getActiveMipmapLevel();A.setRenderTarget(Je),A.getClearColor(Te),Ee=A.getClearAlpha(),Ee<1&&A.setClearColor(16777215,.5),A.clear(),De&&qe.render(me);const pt=A.toneMapping;A.toneMapping=xa;const st=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),U.setupLightsView(ue),Xe===!0&&We.setGlobalState(A.clippingPlanes,ue),yn(D,me,ue),Y.updateMultisampleRenderTarget(Je),Y.updateRenderTargetMipmap(Je),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Wt=0,pn=Q.length;Wt<pn;Wt++){const ln=Q[Wt],{object:Yt,geometry:ct,material:qt,group:St}=ln;if(qt.side===na&&Yt.layers.test(ue.layers)){const Wn=qt.side;qt.side=ei,qt.needsUpdate=!0,oa(Yt,me,ue,ct,qt,St),qt.side=Wn,qt.needsUpdate=!0,mt=!0}}mt===!0&&(Y.updateMultisampleRenderTarget(Je),Y.updateRenderTargetMipmap(Je))}A.setRenderTarget(Qe,tt,at),A.setClearColor(Te,Ee),st!==void 0&&(ue.viewport=st),A.toneMapping=pt}function yn(D,Q,me){const ue=Q.isScene===!0?Q.overrideMaterial:null;for(let ie=0,Je=D.length;ie<Je;ie++){const et=D[ie],{object:Qe,geometry:tt,group:at}=et;let pt=et.material;pt.allowOverride===!0&&ue!==null&&(pt=ue),Qe.layers.test(me.layers)&&oa(Qe,Q,me,tt,pt,at)}}function oa(D,Q,me,ue,ie,Je){D.onBeforeRender(A,Q,me,ue,ie,Je),D.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ie.onBeforeRender(A,Q,me,ue,D,Je),ie.transparent===!0&&ie.side===na&&ie.forceSinglePass===!1?(ie.side=ei,ie.needsUpdate=!0,A.renderBufferDirect(me,Q,ue,ie,D,Je),ie.side=Ja,ie.needsUpdate=!0,A.renderBufferDirect(me,Q,ue,ie,D,Je),ie.side=na):A.renderBufferDirect(me,Q,ue,ie,D,Je),D.onAfterRender(A,Q,me,ue,ie,Je)}function $a(D,Q,me){Q.isScene!==!0&&(Q=we);const ue=E.get(D),ie=U.state.lights,Je=U.state.shadowsArray,et=ie.state.version,Qe=Ne.getParameters(D,ie.state,Je,Q,me),tt=Ne.getProgramCacheKey(Qe);let at=ue.programs;ue.environment=D.isMeshStandardMaterial?Q.environment:null,ue.fog=Q.fog,ue.envMap=(D.isMeshStandardMaterial?he:ve).get(D.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,at===void 0&&(D.addEventListener("dispose",Fe),at=new Map,ue.programs=at);let pt=at.get(tt);if(pt!==void 0){if(ue.currentProgram===pt&&ue.lightsStateVersion===et)return Ho(D,Qe),pt}else Qe.uniforms=Ne.getUniforms(D),D.onBeforeCompile(Qe,A),pt=Ne.acquireProgram(Qe,tt),at.set(tt,pt),ue.uniforms=Qe.uniforms;const st=ue.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(st.clippingPlanes=We.uniform),Ho(D,Qe),ue.needsLights=es(D),ue.lightsStateVersion=et,ue.needsLights&&(st.ambientLightColor.value=ie.state.ambient,st.lightProbe.value=ie.state.probe,st.directionalLights.value=ie.state.directional,st.directionalLightShadows.value=ie.state.directionalShadow,st.spotLights.value=ie.state.spot,st.spotLightShadows.value=ie.state.spotShadow,st.rectAreaLights.value=ie.state.rectArea,st.ltc_1.value=ie.state.rectAreaLTC1,st.ltc_2.value=ie.state.rectAreaLTC2,st.pointLights.value=ie.state.point,st.pointLightShadows.value=ie.state.pointShadow,st.hemisphereLights.value=ie.state.hemi,st.directionalShadowMap.value=ie.state.directionalShadowMap,st.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,st.spotShadowMap.value=ie.state.spotShadowMap,st.spotLightMatrix.value=ie.state.spotLightMatrix,st.spotLightMap.value=ie.state.spotLightMap,st.pointShadowMap.value=ie.state.pointShadowMap,st.pointShadowMatrix.value=ie.state.pointShadowMatrix),ue.currentProgram=pt,ue.uniformsList=null,pt}function Sr(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=df.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function Ho(D,Q){const me=E.get(D);me.outputColorSpace=Q.outputColorSpace,me.batching=Q.batching,me.batchingColor=Q.batchingColor,me.instancing=Q.instancing,me.instancingColor=Q.instancingColor,me.instancingMorph=Q.instancingMorph,me.skinning=Q.skinning,me.morphTargets=Q.morphTargets,me.morphNormals=Q.morphNormals,me.morphColors=Q.morphColors,me.morphTargetsCount=Q.morphTargetsCount,me.numClippingPlanes=Q.numClippingPlanes,me.numIntersection=Q.numClipIntersection,me.vertexAlphas=Q.vertexAlphas,me.vertexTangents=Q.vertexTangents,me.toneMapping=Q.toneMapping}function zs(D,Q,me,ue,ie){Q.isScene!==!0&&(Q=we),Y.resetTextureUnits();const Je=Q.fog,et=ue.isMeshStandardMaterial?Q.environment:null,Qe=te===null?A.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ci,tt=(ue.isMeshStandardMaterial?he:ve).get(ue.envMap||et),at=ue.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pt=!!me.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),st=!!me.morphAttributes.position,mt=!!me.morphAttributes.normal,Wt=!!me.morphAttributes.color;let pn=xa;ue.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(pn=A.toneMapping);const ln=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Yt=ln!==void 0?ln.length:0,ct=E.get(ue),qt=U.state.lights;if(Xe===!0&&(_t===!0||D!==le)){const Yn=D===le&&ue.id===ce;We.setState(ue,D,Yn)}let St=!1;ue.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==qt.state.version||ct.outputColorSpace!==Qe||ie.isBatchedMesh&&ct.batching===!1||!ie.isBatchedMesh&&ct.batching===!0||ie.isBatchedMesh&&ct.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&ct.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&ct.instancing===!1||!ie.isInstancedMesh&&ct.instancing===!0||ie.isSkinnedMesh&&ct.skinning===!1||!ie.isSkinnedMesh&&ct.skinning===!0||ie.isInstancedMesh&&ct.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ct.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ct.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ct.instancingMorph===!1&&ie.morphTexture!==null||ct.envMap!==tt||ue.fog===!0&&ct.fog!==Je||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==We.numPlanes||ct.numIntersection!==We.numIntersection)||ct.vertexAlphas!==at||ct.vertexTangents!==pt||ct.morphTargets!==st||ct.morphNormals!==mt||ct.morphColors!==Wt||ct.toneMapping!==pn||ct.morphTargetsCount!==Yt)&&(St=!0):(St=!0,ct.__version=ue.version);let Wn=ct.currentProgram;St===!0&&(Wn=$a(ue,Q,ie));let ba=!1,qn=!1,Li=!1;const Kt=Wn.getUniforms(),jn=ct.uniforms;if(Ve.useProgram(Wn.program)&&(ba=!0,qn=!0,Li=!0),ue.id!==ce&&(ce=ue.id,qn=!0),ba||le!==D){Ve.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Kt.setValue(F,"projectionMatrix",D.projectionMatrix),Kt.setValue(F,"viewMatrix",D.matrixWorldInverse);const Zn=Kt.map.cameraPosition;Zn!==void 0&&Zn.setValue(F,ht.setFromMatrixPosition(D.matrixWorld)),ot.logarithmicDepthBuffer&&Kt.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Kt.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),le!==D&&(le=D,qn=!0,Li=!0)}if(ct.needsLights&&(qt.state.directionalShadowMap.length>0&&Kt.setValue(F,"directionalShadowMap",qt.state.directionalShadowMap,Y),qt.state.spotShadowMap.length>0&&Kt.setValue(F,"spotShadowMap",qt.state.spotShadowMap,Y),qt.state.pointShadowMap.length>0&&Kt.setValue(F,"pointShadowMap",qt.state.pointShadowMap,Y)),ie.isSkinnedMesh){Kt.setOptional(F,ie,"bindMatrix"),Kt.setOptional(F,ie,"bindMatrixInverse");const Yn=ie.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Kt.setValue(F,"boneTexture",Yn.boneTexture,Y))}ie.isBatchedMesh&&(Kt.setOptional(F,ie,"batchingTexture"),Kt.setValue(F,"batchingTexture",ie._matricesTexture,Y),Kt.setOptional(F,ie,"batchingIdTexture"),Kt.setValue(F,"batchingIdTexture",ie._indirectTexture,Y),Kt.setOptional(F,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Kt.setValue(F,"batchingColorTexture",ie._colorsTexture,Y));const Un=me.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ge.update(ie,me,Wn),(qn||ct.receiveShadow!==ie.receiveShadow)&&(ct.receiveShadow=ie.receiveShadow,Kt.setValue(F,"receiveShadow",ie.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(jn.envMap.value=tt,jn.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Q.environment!==null&&(jn.envMapIntensity.value=Q.environmentIntensity),jn.dfgLUT!==void 0&&(jn.dfgLUT.value=SC()),qn&&(Kt.setValue(F,"toneMappingExposure",A.toneMappingExposure),ct.needsLights&&Go(jn,Li),Je&&ue.fog===!0&&Ie.refreshFogUniforms(jn,Je),Ie.refreshMaterialUniforms(jn,ue,ye,ne,U.state.transmissionRenderTarget[D.id]),df.upload(F,Sr(ct),jn,Y)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(df.upload(F,Sr(ct),jn,Y),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Kt.setValue(F,"center",ie.center),Kt.setValue(F,"modelViewMatrix",ie.modelViewMatrix),Kt.setValue(F,"normalMatrix",ie.normalMatrix),Kt.setValue(F,"modelMatrix",ie.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Yn=ue.uniformsGroups;for(let Zn=0,Mr=Yn.length;Zn<Mr;Zn++){const Yi=Yn[Zn];Le.update(Yi,Wn),Le.bind(Yi,Wn)}}return Wn}function Go(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function es(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(D,Q,me){const ue=E.get(D);ue.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),E.get(D.texture).__webglTexture=Q,E.get(D.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:me,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Q){const me=E.get(D);me.__webglFramebuffer=Q,me.__useDefaultFramebuffer=Q===void 0};const ts=F.createFramebuffer();this.setRenderTarget=function(D,Q=0,me=0){te=D,V=Q,J=me;let ue=null,ie=!1,Je=!1;if(D){const Qe=E.get(D);if(Qe.__useDefaultFramebuffer!==void 0){Ve.bindFramebuffer(F.FRAMEBUFFER,Qe.__webglFramebuffer),H.copy(D.viewport),k.copy(D.scissor),ae=D.scissorTest,Ve.viewport(H),Ve.scissor(k),Ve.setScissorTest(ae),ce=-1;return}else if(Qe.__webglFramebuffer===void 0)Y.setupRenderTarget(D);else if(Qe.__hasExternalTextures)Y.rebindTextures(D,E.get(D.texture).__webglTexture,E.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const pt=D.depthTexture;if(Qe.__boundDepthTexture!==pt){if(pt!==null&&E.has(pt)&&(D.width!==pt.image.width||D.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(D)}}const tt=D.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Je=!0);const at=E.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(at[Q])?ue=at[Q][me]:ue=at[Q],ie=!0):D.samples>0&&Y.useMultisampledRTT(D)===!1?ue=E.get(D).__webglMultisampledFramebuffer:Array.isArray(at)?ue=at[me]:ue=at,H.copy(D.viewport),k.copy(D.scissor),ae=D.scissorTest}else H.copy(K).multiplyScalar(ye).floor(),k.copy(se).multiplyScalar(ye).floor(),ae=He;if(me!==0&&(ue=ts),Ve.bindFramebuffer(F.FRAMEBUFFER,ue)&&Ve.drawBuffers(D,ue),Ve.viewport(H),Ve.scissor(k),Ve.setScissorTest(ae),ie){const Qe=E.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Qe.__webglTexture,me)}else if(Je){const Qe=Q;for(let tt=0;tt<D.textures.length;tt++){const at=E.get(D.textures[tt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+tt,at.__webglTexture,me,Qe)}}else if(D!==null&&me!==0){const Qe=E.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,me)}ce=-1},this.readRenderTargetPixels=function(D,Q,me,ue,ie,Je,et,Qe=0){if(!(D&&D.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&et!==void 0&&(tt=tt[et]),tt){Ve.bindFramebuffer(F.FRAMEBUFFER,tt);try{const at=D.textures[Qe],pt=at.format,st=at.type;if(!ot.textureFormatReadable(pt)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(st)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-ue&&me>=0&&me<=D.height-ie&&(D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Qe),F.readPixels(Q,me,ue,ie,Re.convert(pt),Re.convert(st),Je))}finally{const at=te!==null?E.get(te).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(D,Q,me,ue,ie,Je,et,Qe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&et!==void 0&&(tt=tt[et]),tt)if(Q>=0&&Q<=D.width-ue&&me>=0&&me<=D.height-ie){Ve.bindFramebuffer(F.FRAMEBUFFER,tt);const at=D.textures[Qe],pt=at.format,st=at.type;if(!ot.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.bufferData(F.PIXEL_PACK_BUFFER,Je.byteLength,F.STREAM_READ),D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Qe),F.readPixels(Q,me,ue,ie,Re.convert(pt),Re.convert(st),0);const Wt=te!==null?E.get(te).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,Wt);const pn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bT(F,pn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Je),F.deleteBuffer(mt),F.deleteSync(pn),Je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Q=null,me=0){const ue=Math.pow(2,-me),ie=Math.floor(D.image.width*ue),Je=Math.floor(D.image.height*ue),et=Q!==null?Q.x:0,Qe=Q!==null?Q.y:0;Y.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,me,0,0,et,Qe,ie,Je),Ve.unbindTexture()};const Bs=F.createFramebuffer(),ns=F.createFramebuffer();this.copyTextureToTexture=function(D,Q,me=null,ue=null,ie=0,Je=null){Je===null&&(ie!==0?(sc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Je=ie,ie=0):Je=0);let et,Qe,tt,at,pt,st,mt,Wt,pn;const ln=D.isCompressedTexture?D.mipmaps[Je]:D.image;if(me!==null)et=me.max.x-me.min.x,Qe=me.max.y-me.min.y,tt=me.isBox3?me.max.z-me.min.z:1,at=me.min.x,pt=me.min.y,st=me.isBox3?me.min.z:0;else{const Un=Math.pow(2,-ie);et=Math.floor(ln.width*Un),Qe=Math.floor(ln.height*Un),D.isDataArrayTexture?tt=ln.depth:D.isData3DTexture?tt=Math.floor(ln.depth*Un):tt=1,at=0,pt=0,st=0}ue!==null?(mt=ue.x,Wt=ue.y,pn=ue.z):(mt=0,Wt=0,pn=0);const Yt=Re.convert(Q.format),ct=Re.convert(Q.type);let qt;Q.isData3DTexture?(Y.setTexture3D(Q,0),qt=F.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Y.setTexture2DArray(Q,0),qt=F.TEXTURE_2D_ARRAY):(Y.setTexture2D(Q,0),qt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Q.unpackAlignment);const St=F.getParameter(F.UNPACK_ROW_LENGTH),Wn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ba=F.getParameter(F.UNPACK_SKIP_PIXELS),qn=F.getParameter(F.UNPACK_SKIP_ROWS),Li=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ln.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ln.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,at),F.pixelStorei(F.UNPACK_SKIP_ROWS,pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,st);const Kt=D.isDataArrayTexture||D.isData3DTexture,jn=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const Un=E.get(D),Yn=E.get(Q),Zn=E.get(Un.__renderTarget),Mr=E.get(Yn.__renderTarget);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,Zn.__webglFramebuffer),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let Yi=0;Yi<tt;Yi++)Kt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,E.get(D).__webglTexture,ie,st+Yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,E.get(Q).__webglTexture,Je,pn+Yi)),F.blitFramebuffer(at,pt,et,Qe,mt,Wt,et,Qe,F.DEPTH_BUFFER_BIT,F.NEAREST);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ie!==0||D.isRenderTargetTexture||E.has(D)){const Un=E.get(D),Yn=E.get(Q);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,Bs),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,ns);for(let Zn=0;Zn<tt;Zn++)Kt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,ie,st+Zn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,ie),jn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yn.__webglTexture,Je,pn+Zn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yn.__webglTexture,Je),ie!==0?F.blitFramebuffer(at,pt,et,Qe,mt,Wt,et,Qe,F.COLOR_BUFFER_BIT,F.NEAREST):jn?F.copyTexSubImage3D(qt,Je,mt,Wt,pn+Zn,at,pt,et,Qe):F.copyTexSubImage2D(qt,Je,mt,Wt,at,pt,et,Qe);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else jn?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(qt,Je,mt,Wt,pn,et,Qe,tt,Yt,ct,ln.data):Q.isCompressedArrayTexture?F.compressedTexSubImage3D(qt,Je,mt,Wt,pn,et,Qe,tt,Yt,ln.data):F.texSubImage3D(qt,Je,mt,Wt,pn,et,Qe,tt,Yt,ct,ln):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Je,mt,Wt,et,Qe,Yt,ct,ln.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Je,mt,Wt,ln.width,ln.height,Yt,ln.data):F.texSubImage2D(F.TEXTURE_2D,Je,mt,Wt,et,Qe,Yt,ct,ln);F.pixelStorei(F.UNPACK_ROW_LENGTH,St),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Wn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ba),F.pixelStorei(F.UNPACK_SKIP_ROWS,qn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Li),Je===0&&Q.generateMipmaps&&F.generateMipmap(qt),Ve.unbindTexture()},this.initRenderTarget=function(D){E.get(D).__webglFramebuffer===void 0&&Y.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Y.setTextureCube(D,0):D.isData3DTexture?Y.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Y.setTexture2DArray(D,0):Y.setTexture2D(D,0),Ve.unbindTexture()},this.resetState=function(){V=0,J=0,te=null,Ve.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return va}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}}const pf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class yr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const MC=new mc(-1,1,1,-1,0,1);class bC extends gn{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const TC=new bC;class Cf{constructor(e){this._mesh=new Ot(TC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,MC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class wm extends yr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Do.clone(e.uniforms),this.material=new kn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cf(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Sy extends yr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const s=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),l.buffers.stencil.setFunc(s.ALWAYS,u,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(s.EQUAL,1,4294967295),l.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),l.buffers.stencil.setLocked(!0)}}class EC extends yr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new Oe);this._width=a.width,this._height=a.height,t=new xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wm(pf),this.copyPass.material.blending=_a,this.clock=new c0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let s=0,l=this.passes.length;s<l;s++){const u=this.passes[s];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),u.needsSwap){if(a){const f=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Sy!==void 0&&(u instanceof Sy?a=!0:u instanceof EC&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(a,s),this.renderTarget2.setSize(a,s);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(a,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class TS extends yr{constructor(e,t,a=null,s=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=s,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new lt}render(e,t,a){const s=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=s}}const AC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class _r extends yr{constructor(e,t=1,a,s){super(),this.strength=t,this.radius=a,this.threshold=s,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new xi(l,u,{type:Di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new xi(l,u,{type:Di});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new xi(l,u,{type:Di});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),l=Math.round(l/2),u=Math.round(u/2)}const f=AC;this.highPassUniforms=Do.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Oe(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Do.clone(pf.uniforms),this.blendMaterial=new kn({uniforms:this.copyUniforms,vertexShader:pf.vertexShader,fragmentShader:pf.fragmentShader,premultipliedAlpha:!0,blending:vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new lt,this._oldClearAlpha=1,this._basic=new li,this._fsQuad=new Cf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let a=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(a,s);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(a,s),this.renderTargetsVertical[l].setSize(a,s),this.separableBlurMaterials[l].uniforms.invSize.value=new Oe(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2)}render(e,t,a,s,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let f=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[h].uniforms.direction.value=_r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=_r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),f=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],a=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(a*a))/a);return new kn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new kn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}_r.BlurDirectionX=new Oe(1,0);_r.BlurDirectionY=new Oe(0,1);function My(o,e){if(e===hT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===mm||e===By){let t=o.getIndex();if(t===null){const u=[],f=o.getAttribute("position");if(f!==void 0){for(let h=0;h<f.count;h++)u.push(h);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=t.count-2,s=[];if(e===mm)for(let u=1;u<=a;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=o.clone();return l.setIndex(s),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class ES extends Bo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NC(t)}),this.register(function(t){return new LC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new VC(t)}),this.register(function(t){return new kC(t)}),this.register(function(t){return new PC(t)}),this.register(function(t){return new OC(t)}),this.register(function(t){return new IC(t)}),this.register(function(t){return new zC(t)}),this.register(function(t){return new DC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new HC(t)}),this.register(function(t){return new FC(t)}),this.register(function(t){return new RC(t)}),this.register(function(t){return new XC(t)}),this.register(function(t){return new WC(t)})}load(e,t,a,s){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=$l.extractUrlBase(e);u=$l.resolveURL(d,this.path)}else u=$l.extractUrlBase(e);this.manager.itemStart(e);const f=function(d){s?s(d):console.error(d),l.manager.itemError(e),l.manager.itemEnd(e)},h=new pS(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{l.parse(d,u,function(g){t(g),l.manager.itemEnd(e)},f)}catch(g){f(g)}},a,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,s){let l;const u={},f={},h=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===AS){try{u[It.KHR_BINARY_GLTF]=new qC(e)}catch(v){s&&s(v);return}l=JSON.parse(u[It.KHR_BINARY_GLTF].content)}else l=JSON.parse(h.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new s3(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const v=this.pluginCallbacks[g](d);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[v.name]=v,u[v.name]=!0}if(l.extensionsUsed)for(let g=0;g<l.extensionsUsed.length;++g){const v=l.extensionsUsed[g],_=l.extensionsRequired||[];switch(v){case It.KHR_MATERIALS_UNLIT:u[v]=new CC;break;case It.KHR_DRACO_MESH_COMPRESSION:u[v]=new jC(l,this.dracoLoader);break;case It.KHR_TEXTURE_TRANSFORM:u[v]=new YC;break;case It.KHR_MESH_QUANTIZATION:u[v]=new ZC;break;default:_.indexOf(v)>=0&&f[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}d.setExtensions(u),d.setPlugins(f),d.parse(a,s)}parseAsync(e,t){const a=this;return new Promise(function(s,l){a.parse(e,t,s,l)})}}function wC(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const It={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class RC{constructor(e){this.parser=e,this.name=It.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let a=0,s=t.length;a<s;a++){const l=t[a];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,a="light:"+e;let s=t.cache.get(a);if(s)return s;const l=t.json,h=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let d;const g=new lt(16777215);h.color!==void 0&&g.setRGB(h.color[0],h.color[1],h.color[2],ci);const v=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new Sf(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new l0(g),d.distance=v;break;case"spot":d=new gS(g),d.distance=v,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),pa(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),s=Promise.resolve(d),t.cache.add(a,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,a=this.parser,l=a.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(h){return a._getNodeRef(t.cache,f,h)})}}class CC{constructor(){this.name=It.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,a){const s=[];e.color=new lt(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],ci),e.opacity=u[3]}l.baseColorTexture!==void 0&&s.push(a.assignTexture(e,"map",l.baseColorTexture,On))}return Promise.all(s)}}class DC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class NC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(a.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(f,f)}return Promise.all(l)}}class LC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class UC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class PC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new lt(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;t.sheenColor.setRGB(f[0],f[1],f[2],ci)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(a.assignTexture(t,"sheenColorMap",u.sheenColorTexture,On)),u.sheenRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class OC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(a.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class IC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(a.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return t.attenuationColor=new lt().setRGB(f[0],f[1],f[2],ci),Promise.all(l)}}class zC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class BC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(a.assignTexture(t,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return t.specularColor=new lt().setRGB(f[0],f[1],f[2],ci),u.specularColorTexture!==void 0&&l.push(a.assignTexture(t,"specularColorMap",u.specularColorTexture,On)),Promise.all(l)}}class FC{constructor(e){this.parser=e,this.name=It.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(a.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(l)}}class HC{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(a.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class GC{constructor(e){this.parser=e,this.name=It.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,a=t.json,s=a.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const l=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,u)}}class VC{constructor(e){this.parser=e,this.name=It.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,a=this.parser,s=a.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let h=a.textureLoader;if(f.uri){const d=a.options.manager.getHandler(f.uri);d!==null&&(h=d)}return a.loadTextureImage(e,u.source,h)}}class kC{constructor(e){this.parser=e,this.name=It.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,a=this.parser,s=a.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let h=a.textureLoader;if(f.uri){const d=a.options.manager.getHandler(f.uri);d!==null&&(h=d)}return a.loadTextureImage(e,u.source,h)}}class XC{constructor(e){this.name=It.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const s=a.extensions[this.name],l=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const h=s.byteOffset||0,d=s.byteLength||0,g=s.count,v=s.byteStride,_=new Uint8Array(f,h,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,v,_,s.mode,s.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*v);return u.decodeGltfBuffer(new Uint8Array(x),g,v,_,s.mode,s.filter),x})})}else return null}}class WC{constructor(e){this.name=It.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const s=t.meshes[a.mesh];for(const d of s.primitives)if(d.mode!==Vi.TRIANGLES&&d.mode!==Vi.TRIANGLE_STRIP&&d.mode!==Vi.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,f=[],h={};for(const d in u)f.push(this.parser.getDependency("accessor",u[d]).then(g=>(h[d]=g,h[d])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(d=>{const g=d.pop(),v=g.isGroup?g.children:[g],_=d[0].count,x=[];for(const M of v){const T=new At,S=new G,y=new Is,L=new G(1,1,1),R=new d1(M.geometry,M.material,_);for(let w=0;w<_;w++)h.TRANSLATION&&S.fromBufferAttribute(h.TRANSLATION,w),h.ROTATION&&y.fromBufferAttribute(h.ROTATION,w),h.SCALE&&L.fromBufferAttribute(h.SCALE,w),R.setMatrixAt(w,T.compose(S,y,L));for(const w in h)if(w==="_COLOR_0"){const U=h[w];R.instanceColor=new vm(U.array,U.itemSize,U.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,h[w]);hn.prototype.copy.call(R,M),this.parser.assignFinalMaterial(R),x.push(R)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const AS="glTF",kl=12,by={JSON:1313821514,BIN:5130562};class qC{constructor(e){this.name=It.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==AS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-kl,l=new DataView(e,kl);let u=0;for(;u<s;){const f=l.getUint32(u,!0);u+=4;const h=l.getUint32(u,!0);if(u+=4,h===by.JSON){const d=new Uint8Array(e,kl+u,f);this.content=a.decode(d)}else if(h===by.BIN){const d=kl+u;this.body=e.slice(d,d+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=It.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const a=this.json,s=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},h={},d={};for(const g in u){const v=Rm[g]||g.toLowerCase();f[v]=u[g]}for(const g in e.attributes){const v=Rm[g]||g.toLowerCase();if(u[g]!==void 0){const _=a.accessors[e.attributes[g]],x=To[_.componentType];d[v]=x.name,h[v]=_.normalized===!0}}return t.getDependency("bufferView",l).then(function(g){return new Promise(function(v,_){s.decodeDracoFile(g,function(x){for(const M in x.attributes){const T=x.attributes[M],S=h[M];S!==void 0&&(T.normalized=S)}v(x)},f,d,ci,_)})})}}class YC{constructor(){this.name=It.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ZC{constructor(){this.name=It.KHR_MESH_QUANTIZATION}}class wS extends pc{constructor(e,t,a,s){super(e,t,a,s)}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s*3+s;for(let u=0;u!==s;u++)t[u]=a[l+u];return t}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=f*2,d=f*3,g=s-t,v=(a-t)/g,_=v*v,x=_*v,M=e*d,T=M-d,S=-2*x+3*_,y=x-_,L=1-S,R=y-_+v;for(let w=0;w!==f;w++){const U=u[T+w+f],I=u[T+w+h]*g,O=u[M+w+f],q=u[M+w]*g;l[w]=L*U+R*I+S*O+y*q}return l}}const KC=new Is;class JC extends wS{interpolate_(e,t,a,s){const l=super.interpolate_(e,t,a,s);return KC.fromArray(l).normalize().toArray(l),l}}const Vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},To={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ty={9728:In,9729:zn,9984:Ny,9985:lf,9986:ql,9987:ja},Ey={33071:ga,33648:mf,10497:Os},bp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QC={CUBICSPLINE:void 0,LINEAR:ic,STEP:nc},Tp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $C(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new vr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ja})),o.DefaultMaterial}function or(o,e,t){for(const a in t.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function pa(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function e3(o,e,t){let a=!1,s=!1,l=!1;for(let d=0,g=e.length;d<g;d++){const v=e[d];if(v.POSITION!==void 0&&(a=!0),v.NORMAL!==void 0&&(s=!0),v.COLOR_0!==void 0&&(l=!0),a&&s&&l)break}if(!a&&!s&&!l)return Promise.resolve(o);const u=[],f=[],h=[];for(let d=0,g=e.length;d<g;d++){const v=e[d];if(a){const _=v.POSITION!==void 0?t.getDependency("accessor",v.POSITION):o.attributes.position;u.push(_)}if(s){const _=v.NORMAL!==void 0?t.getDependency("accessor",v.NORMAL):o.attributes.normal;f.push(_)}if(l){const _=v.COLOR_0!==void 0?t.getDependency("accessor",v.COLOR_0):o.attributes.color;h.push(_)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(h)]).then(function(d){const g=d[0],v=d[1],_=d[2];return a&&(o.morphAttributes.position=g),s&&(o.morphAttributes.normal=v),l&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function t3(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let a=0,s=t.length;a<s;a++)o.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function n3(o){let e;const t=o.extensions&&o.extensions[It.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ep(t.attributes):e=o.indices+":"+Ep(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,s=o.targets.length;a<s;a++)e+=":"+Ep(o.targets[a]);return e}function Ep(o){let e="";const t=Object.keys(o).sort();for(let a=0,s=t.length;a<s;a++)e+=t[a]+":"+o[t[a]]+";";return e}function Cm(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function i3(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const a3=new At;class s3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,s=-1,l=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(f)===!0;const h=f.match(/Version\/(\d+)/);s=a&&h?parseInt(h[1],10):-1,l=f.indexOf("Firefox")>-1,u=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&s<17||l&&u<98?this.textureLoader=new fE(this.options.manager):this.textureLoader=new mE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pS(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const a=this,s=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const f={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:a,userData:{}};return or(l,f,s),pa(f,s),Promise.all(a._invokeAll(function(h){return h.afterRoot&&h.afterRoot(f)})).then(function(){for(const h of f.scenes)h.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let s=0,l=t.length;s<l;s++){const u=t[s].joints;for(let f=0,h=u.length;f<h;f++)e[u[f]].isBone=!0}for(let s=0,l=e.length;s<l;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;const s=a.clone(),l=(u,f)=>{const h=this.associations.get(u);h!=null&&this.associations.set(f,h);for(const[d,g]of u.children.entries())l(g,f.children[d])};return l(a,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){const s=e(t[a]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const a=[];for(let s=0;s<t.length;s++){const l=e(t[s]);l&&a.push(l)}return a}getDependency(e,t){const a=e+":"+t;let s=this.cache.get(a);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":s=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(a,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const a=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(l,u){return a.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[It.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(l,u){a.load($l.resolveURL(t.uri,s.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){const s=t.byteLength||0,l=t.byteOffset||0;return a.slice(l,l+s)})}loadAccessor(e){const t=this,a=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=bp[s.type],f=To[s.componentType],h=s.normalized===!0,d=new f(s.count*u);return Promise.resolve(new Xn(d,u,h))}const l=[];return s.bufferView!==void 0?l.push(this.getDependency("bufferView",s.bufferView)):l.push(null),s.sparse!==void 0&&(l.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(l).then(function(u){const f=u[0],h=bp[s.type],d=To[s.componentType],g=d.BYTES_PER_ELEMENT,v=g*h,_=s.byteOffset||0,x=s.bufferView!==void 0?a.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let T,S;if(x&&x!==v){const y=Math.floor(_/x),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let R=t.cache.get(L);R||(T=new d(f,y*x,s.count*x/g),R=new Ky(T,x/g),t.cache.add(L,R)),S=new rc(R,h,_%x/g,M)}else f===null?T=new d(s.count*h):T=new d(f,_,s.count*h),S=new Xn(T,h,M);if(s.sparse!==void 0){const y=bp.SCALAR,L=To[s.sparse.indices.componentType],R=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,U=new L(u[1],R,s.sparse.count*y),I=new d(u[2],w,s.sparse.count*h);f!==null&&(S=new Xn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let O=0,q=U.length;O<q;O++){const A=U[O];if(S.setX(A,I[O*h]),h>=2&&S.setY(A,I[O*h+1]),h>=3&&S.setZ(A,I[O*h+2]),h>=4&&S.setW(A,I[O*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,a=this.options,l=t.textures[e].source,u=t.images[l];let f=this.textureLoader;if(u.uri){const h=a.manager.getHandler(u.uri);h!==null&&(f=h)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,t,a){const s=this,l=this.json,u=l.textures[e],f=l.images[t],h=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(t,a).then(function(g){g.flipY=!1,g.name=u.name||f.name||"",g.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(g.name=f.uri);const _=(l.samplers||{})[u.sampler]||{};return g.magFilter=Ty[_.magFilter]||zn,g.minFilter=Ty[_.minFilter]||ja,g.wrapS=Ey[_.wrapS]||Os,g.wrapT=Ey[_.wrapT]||Os,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==In&&g.minFilter!==zn,s.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){const a=this,s=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(v=>v.clone());const u=s.images[e],f=self.URL||self.webkitURL;let h=u.uri||"",d=!1;if(u.bufferView!==void 0)h=a.getDependency("bufferView",u.bufferView).then(function(v){d=!0;const _=new Blob([v],{type:u.mimeType});return h=f.createObjectURL(_),h});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(h).then(function(v){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(T){const S=new Bn(T);S.needsUpdate=!0,_(S)}),t.load($l.resolveURL(v,l.path),M,void 0,x)})}).then(function(v){return d===!0&&f.revokeObjectURL(h),pa(v,u),v.userData.mimeType=u.mimeType||i3(u.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),v});return this.sourceCache[e]=g,g}assignTexture(e,t,a,s){const l=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),l.extensions[It.KHR_TEXTURE_TRANSFORM]){const f=a.extensions!==void 0?a.extensions[It.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const h=l.associations.get(u);u=l.extensions[It.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),l.associations.set(u,h)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let a=e.material;const s=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+a.uuid;let h=this.cache.get(f);h||(h=new e0,ji.prototype.copy.call(h,a),h.color.copy(a.color),h.map=a.map,h.sizeAttenuation=!1,this.cache.add(f,h)),a=h}else if(e.isLine){const f="LineBasicMaterial:"+a.uuid;let h=this.cache.get(f);h||(h=new hc,ji.prototype.copy.call(h,a),h.color.copy(a.color),h.map=a.map,this.cache.add(f,h)),a=h}if(s||l||u){let f="ClonedMaterial:"+a.uuid+":";s&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let h=this.cache.get(f);h||(h=a.clone(),l&&(h.vertexColors=!0),u&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(f,h),this.associations.set(h,this.associations.get(a))),a=h}e.material=a}getMaterialType(){return vr}loadMaterial(e){const t=this,a=this.json,s=this.extensions,l=a.materials[e];let u;const f={},h=l.extensions||{},d=[];if(h[It.KHR_MATERIALS_UNLIT]){const v=s[It.KHR_MATERIALS_UNLIT];u=v.getMaterialType(),d.push(v.extendParams(f,l,t))}else{const v=l.pbrMetallicRoughness||{};if(f.color=new lt(1,1,1),f.opacity=1,Array.isArray(v.baseColorFactor)){const _=v.baseColorFactor;f.color.setRGB(_[0],_[1],_[2],ci),f.opacity=_[3]}v.baseColorTexture!==void 0&&d.push(t.assignTexture(f,"map",v.baseColorTexture,On)),f.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,f.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(f,"metalnessMap",v.metallicRoughnessTexture)),d.push(t.assignTexture(f,"roughnessMap",v.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=na);const g=l.alphaMode||Tp.OPAQUE;if(g===Tp.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,g===Tp.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==li&&(d.push(t.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new Oe(1,1),l.normalTexture.scale!==void 0)){const v=l.normalTexture.scale;f.normalScale.set(v,v)}if(l.occlusionTexture!==void 0&&u!==li&&(d.push(t.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==li){const v=l.emissiveFactor;f.emissive=new lt().setRGB(v[0],v[1],v[2],ci)}return l.emissiveTexture!==void 0&&u!==li&&d.push(t.assignTexture(f,"emissiveMap",l.emissiveTexture,On)),Promise.all(d).then(function(){const v=new u(f);return l.name&&(v.name=l.name),pa(v,l),t.associations.set(v,{materials:e}),l.extensions&&or(s,v,l),v})}createUniqueName(e){const t=en.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,a=this.extensions,s=this.primitiveCache;function l(f){return a[It.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(h){return Ay(h,f,t)})}const u=[];for(let f=0,h=e.length;f<h;f++){const d=e[f],g=n3(d),v=s[g];if(v)u.push(v.promise);else{let _;d.extensions&&d.extensions[It.KHR_DRACO_MESH_COMPRESSION]?_=l(d):_=Ay(new gn,d,t),s[g]={primitive:d,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,a=this.json,s=this.extensions,l=a.meshes[e],u=l.primitives,f=[];for(let h=0,d=u.length;h<d;h++){const g=u[h].material===void 0?$C(this.cache):this.getDependency("material",u[h].material);f.push(g)}return f.push(t.loadGeometries(u)),Promise.all(f).then(function(h){const d=h.slice(0,h.length-1),g=h[h.length-1],v=[];for(let x=0,M=g.length;x<M;x++){const T=g[x],S=u[x];let y;const L=d[x];if(S.mode===Vi.TRIANGLES||S.mode===Vi.TRIANGLE_STRIP||S.mode===Vi.TRIANGLE_FAN||S.mode===void 0)y=l.isSkinnedMesh===!0?new u1(T,L):new Ot(T,L),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===Vi.TRIANGLE_STRIP?y.geometry=My(y.geometry,By):S.mode===Vi.TRIANGLE_FAN&&(y.geometry=My(y.geometry,mm));else if(S.mode===Vi.LINES)y=new $m(T,L);else if(S.mode===Vi.LINE_STRIP)y=new Ef(T,L);else if(S.mode===Vi.LINE_LOOP)y=new v1(T,L);else if(S.mode===Vi.POINTS)y=new eS(T,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&t3(y,l),y.name=t.createUniqueName(l.name||"mesh_"+e),pa(y,l),S.extensions&&or(s,y,S),t.assignFinalMaterial(y),v.push(y)}for(let x=0,M=v.length;x<M;x++)t.associations.set(v[x],{meshes:e,primitives:x});if(v.length===1)return l.extensions&&or(s,v[0],l),v[0];const _=new _i;l.extensions&&or(s,_,l),t.associations.set(_,{meshes:e});for(let x=0,M=v.length;x<M;x++)_.add(v[x]);return _})}loadCamera(e){let t;const a=this.json.cameras[e],s=a[a.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new ai(gi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):a.type==="orthographic"&&(t=new mc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),pa(t,a),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],a=[];for(let s=0,l=t.joints.length;s<l;s++)a.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(s){const l=s.pop(),u=s,f=[],h=[];for(let d=0,g=u.length;d<g;d++){const v=u[d];if(v){f.push(v);const _=new At;l!==null&&_.fromArray(l.array,d*16),h.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Jm(f,h)})}loadAnimation(e){const t=this.json,a=this,s=t.animations[e],l=s.name?s.name:"animation_"+e,u=[],f=[],h=[],d=[],g=[];for(let v=0,_=s.channels.length;v<_;v++){const x=s.channels[v],M=s.samplers[x.sampler],T=x.target,S=T.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,L=s.parameters!==void 0?s.parameters[M.output]:M.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),f.push(this.getDependency("accessor",y)),h.push(this.getDependency("accessor",L)),d.push(M),g.push(T))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(d),Promise.all(g)]).then(function(v){const _=v[0],x=v[1],M=v[2],T=v[3],S=v[4],y=[];for(let R=0,w=_.length;R<w;R++){const U=_[R],I=x[R],O=M[R],q=T[R],A=S[R];if(U===void 0)continue;U.updateMatrix&&U.updateMatrix();const N=a._createAnimationTracks(U,I,O,q,A);if(N)for(let V=0;V<N.length;V++)y.push(N[V])}const L=new aE(l,void 0,y);return pa(L,s),L})}createNodeMesh(e){const t=this.json,a=this,s=t.nodes[e];return s.mesh===void 0?null:a.getDependency("mesh",s.mesh).then(function(l){const u=a._getNodeRef(a.meshCache,s.mesh,l);return s.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let h=0,d=s.weights.length;h<d;h++)f.morphTargetInfluences[h]=s.weights[h]}),u})}loadNode(e){const t=this.json,a=this,s=t.nodes[e],l=a._loadNodeShallow(e),u=[],f=s.children||[];for(let d=0,g=f.length;d<g;d++)u.push(a.getDependency("node",f[d]));const h=s.skin===void 0?Promise.resolve(null):a.getDependency("skin",s.skin);return Promise.all([l,Promise.all(u),h]).then(function(d){const g=d[0],v=d[1],_=d[2];_!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(_,a3)});for(let x=0,M=v.length;x<M;x++)g.add(v[x]);return g})}_loadNodeShallow(e){const t=this.json,a=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],u=l.name?s.createUniqueName(l.name):"",f=[],h=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&f.push(h),l.camera!==void 0&&f.push(s.getDependency("camera",l.camera).then(function(d){return s._getNodeRef(s.cameraCache,l.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){f.push(d)}),this.nodeCache[e]=Promise.all(f).then(function(d){let g;if(l.isBone===!0?g=new $y:d.length>1?g=new _i:d.length===1?g=d[0]:g=new hn,g!==d[0])for(let v=0,_=d.length;v<_;v++)g.add(d[v]);if(l.name&&(g.userData.name=l.name,g.name=u),pa(g,l),l.extensions&&or(a,g,l),l.matrix!==void 0){const v=new At;v.fromArray(l.matrix),g.applyMatrix4(v)}else l.translation!==void 0&&g.position.fromArray(l.translation),l.rotation!==void 0&&g.quaternion.fromArray(l.rotation),l.scale!==void 0&&g.scale.fromArray(l.scale);if(!s.associations.has(g))s.associations.set(g,{});else if(l.mesh!==void 0&&s.meshCache.refs[l.mesh]>1){const v=s.associations.get(g);s.associations.set(g,{...v})}return s.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,a=this.json.scenes[e],s=this,l=new _i;a.name&&(l.name=s.createUniqueName(a.name)),pa(l,a),a.extensions&&or(t,l,a);const u=a.nodes||[],f=[];for(let h=0,d=u.length;h<d;h++)f.push(s.getDependency("node",u[h]));return Promise.all(f).then(function(h){for(let g=0,v=h.length;g<v;g++)l.add(h[g]);const d=g=>{const v=new Map;for(const[_,x]of s.associations)(_ instanceof ji||_ instanceof Bn)&&v.set(_,x);return g.traverse(_=>{const x=s.associations.get(_);x!=null&&v.set(_,x)}),v};return s.associations=d(l),l})}_createAnimationTracks(e,t,a,s,l){const u=[],f=e.name?e.name:e.uuid,h=[];Ls[l.path]===Ls.weights?e.traverse(function(_){_.morphTargetInfluences&&h.push(_.name?_.name:_.uuid)}):h.push(f);let d;switch(Ls[l.path]){case Ls.weights:d=Lo;break;case Ls.rotation:d=Uo;break;case Ls.translation:case Ls.scale:d=Po;break;default:switch(a.itemSize){case 1:d=Lo;break;case 2:case 3:default:d=Po;break}break}const g=s.interpolation!==void 0?QC[s.interpolation]:ic,v=this._getArrayFromAccessor(a);for(let _=0,x=h.length;_<x;_++){const M=new d(h[_]+"."+Ls[l.path],t.array,v,g);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const a=Cm(t.constructor),s=new Float32Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=t[l]*a;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const s=this instanceof Uo?JC:wS;return new s(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function r3(o,e,t){const a=e.attributes,s=new aa;if(a.POSITION!==void 0){const f=t.json.accessors[a.POSITION],h=f.min,d=f.max;if(h!==void 0&&d!==void 0){if(s.set(new G(h[0],h[1],h[2]),new G(d[0],d[1],d[2])),f.normalized){const g=Cm(To[f.componentType]);s.min.multiplyScalar(g),s.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new G,h=new G;for(let d=0,g=l.length;d<g;d++){const v=l[d];if(v.POSITION!==void 0){const _=t.json.accessors[v.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const T=Cm(To[_.componentType]);h.multiplyScalar(T)}f.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}o.boundingBox=s;const u=new Sa;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=u}function Ay(o,e,t){const a=e.attributes,s=[];function l(u,f){return t.getDependency("accessor",u).then(function(h){o.setAttribute(f,h)})}for(const u in a){const f=Rm[u]||u.toLowerCase();f in o.attributes||s.push(l(a[u],f))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});s.push(u)}return Ft.workingColorSpace!==ci&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ft.workingColorSpace}" not supported.`),pa(o,e),r3(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?e3(o,e.targets,t):o})}const hr=[{id:0,name:"Sistema Solar",cost:0,rarityMultiplier:1,style:{planetColor1:"#1e3c72",planetColor2:"#2a5298",atmosphereColor:4491519,ringColor:8965375,hasRings:!0}},{id:1,name:"Mercurio",cost:1e4,rarityMultiplier:1.1,style:{planetColor1:"#A9A9A9",planetColor2:"#696969",atmosphereColor:8947848,ringColor:13421772,hasRings:!1}},{id:2,name:"Venus",cost:2e4,rarityMultiplier:1.2,style:{planetColor1:"#E6DBAC",planetColor2:"#D3A569",atmosphereColor:16766720,ringColor:16768426,hasRings:!1}},{id:3,name:"Tierra",cost:4e4,rarityMultiplier:1.3,style:{planetColor1:"#2244aa",planetColor2:"#228833",atmosphereColor:4491519,ringColor:13421772,hasRings:!1}},{id:4,name:"Marte",cost:1e5,rarityMultiplier:1.5,style:{planetColor1:"#C1440E",planetColor2:"#8B0000",atmosphereColor:16729344,ringColor:16755336,hasRings:!1}},{id:5,name:"Júpiter",cost:2e5,rarityMultiplier:1.8,style:{planetColor1:"#C99039",planetColor2:"#8B4513",atmosphereColor:13808780,ringColor:14527078,hasRings:!1}},{id:6,name:"Saturno",cost:5e5,rarityMultiplier:2.2,style:{planetColor1:"#F4D03F",planetColor2:"#B7950B",atmosphereColor:16243823,ringColor:12623968,hasRings:!0}},{id:7,name:"Urano",cost:1e6,rarityMultiplier:2.6,style:{planetColor1:"#73C6B6",planetColor2:"#1ABC9C",atmosphereColor:52945,ringColor:11529966,hasRings:!0}},{id:8,name:"Neptuno",cost:2e6,rarityMultiplier:3,style:{planetColor1:"#2E86C1",planetColor2:"#1B4F72",atmosphereColor:4286945,ringColor:5601279,hasRings:!1}},{id:9,name:"Nebulosa Roja",cost:5e6,rarityMultiplier:4,style:{planetColor1:"#7a1f1f",planetColor2:"#a83232",atmosphereColor:16729156,ringColor:16737894,hasRings:!1}},{id:10,name:"Cúmulo Estelar",cost:1e7,rarityMultiplier:5,style:{planetColor1:"#4a1e7a",planetColor2:"#6b2d9f",atmosphereColor:11158783,ringColor:13395711,hasRings:!0}},{id:11,name:"Galaxia Remota",cost:2e7,rarityMultiplier:6,style:{planetColor1:"#1e4a3c",planetColor2:"#2d6b5a",atmosphereColor:4521864,ringColor:6750122,hasRings:!0}},{id:12,name:"Agujero Negro",cost:5e7,rarityMultiplier:8,style:{planetColor1:"#0a0a0a",planetColor2:"#1a1a1a",atmosphereColor:4456703,ringColor:6684927,hasRings:!0}}],af=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,o3=o=>o*o*(3-2*o),sn=(o,e,t,a)=>gi.lerp(o,e,1-Math.exp(-t*a)),l3=({missionState:o,level:e,totalDuration:t,timeLeft:a,planet:s,spaceshipModel:l})=>{const u=bt.useRef(null),f=bt.useRef(null),h=bt.useRef(null),d=bt.useRef(null),g=bt.useRef(null),v=bt.useRef([]),_=bt.useRef(null),x=bt.useRef(null),M=bt.useRef(null),T=bt.useRef({shipPos:new G(0,0,0),shipRot:new Ni(0,Math.PI/2,0),shipVelocity:new G(0,0,0),cameraPos:new G(0,3,12),cameraTarget:new G(0,0,0),engineIntensity:0,prevProgress:0,missionStartTime:0,isMissionActive:!1,smoothProgress:0}),S=bt.useRef([]),y=(L,R)=>{const U=document.createElement("canvas");U.width=512,U.height=512;const I=U.getContext("2d");I.fillStyle=L,I.fillRect(0,0,512,512);for(let O=0;O<300;O++){const q=Math.random()*512,A=Math.random()*512,N=Math.random()*40+5;I.beginPath(),I.arc(q,A,N,0,Math.PI*2),I.fillStyle=R,I.globalAlpha=.2,I.fill()}return new xm(U)};return bt.useEffect(()=>{const L=new Zy;L.fog=new Tf(657952,.005);const R=new ai(50,window.innerWidth/window.innerHeight,.1,1e3);x.current=R;const w=new MS({alpha:!1,antialias:!0,powerPreference:"high-performance"});w.setSize(window.innerWidth,window.innerHeight),w.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),w.toneMapping=fc,w.toneMappingExposure=1.2,u.current&&(u.current.innerHTML="",u.current.appendChild(w.domElement));const U=new TS(L,R),I=new _r(new Oe(window.innerWidth,window.innerHeight),1.5,.4,.85);I.threshold=.2,I.strength=1.2,I.radius=.5;const O=new bS(w);O.addPass(U),O.addPass(I);const q=new mS(4210784,0,3);L.add(q);const A=new Sf(16777215,2);A.position.set(10,10,10),L.add(A);const N=new gS(10309341,10);N.position.set(-5,5,-5),L.add(N);const V=new _i;L.add(V),f.current=V;const J=()=>{const B=new _i,ee=new Tm({color:9055202}),de=new Tm({color:1118481}),Ne=new sa({color:8965375,roughness:.2,metalness:.9,transmission:.9,transparent:!0}),Ie=new vr({color:12632256,metalness:.8,roughness:.3}),j=new ta(1,32,32),Se=new Ot(j,ee);Se.scale.set(1.8,1,1),B.add(Se);const We=new Ot(new Mo(.98,.06,16,64),de);We.rotation.y=Math.PI/2,B.add(We);const ke=new Ot(new Mo(.8,.06,16,64),de);ke.rotation.y=Math.PI/2,ke.position.x=.8,B.add(ke);const qe=new Ot(new Mo(.8,.06,16,64),de);qe.rotation.y=Math.PI/2,qe.position.x=-.8,B.add(qe);const Ge=new Ot(new Mo(1,.06,16,64),de);Ge.rotation.x=Math.PI/2,Ge.scale.set(1.8,1,1),B.add(Ge);const W=new Ot(new t0(.15,.4,4,8),Ne);W.rotation.z=Math.PI/2,W.rotation.x=Math.PI/6,W.position.set(1,.4,.25),B.add(W);const ze=W.clone();ze.position.set(1,.4,-.25),B.add(ze);const Re=new rS;Re.moveTo(0,0),Re.quadraticCurveTo(.5,.5,.5,1),Re.lineTo(-.8,.8),Re.quadraticCurveTo(-.5,.4,-.8,0);const je=new Ot(new s0(Re,{depth:.1,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05}),ee);je.position.set(-.5,.85,-.05),B.add(je);const Le=new xr(1,.1,.8),be=new Ot(Le,ee);be.position.set(-.5,-.5,.8),be.rotation.set(.5,0,.2),B.add(be);const Be=new Ot(Le,ee);Be.position.set(-.5,-.5,-.8),Be.rotation.set(-.5,0,.2),B.add(Be);const dt=new Ot(new mr(.5,.7,.6,32),Ie);return dt.rotation.z=Math.PI/2,dt.position.set(-1.8,0,0),B.add(dt),B},te=new ES,ce=`/orbital-scavengers/${l||"nave.glb"}`;console.log(`Intentando cargar modelo desde: ${ce}`),te.load(ce,B=>{console.log(`${l||"nave.glb"} cargado con éxito!`,B);const ee=B.scene,Ne=new aa().setFromObject(ee).getSize(new G);console.log(`Tamaño de ${l||"nave.glb"}:`,Ne),ee.rotation.y=0;const Ie=Math.max(Ne.x,Ne.y,Ne.z),j=3.45;if(Ie>0){const Se=j/Ie;ee.scale.set(Se,Se,Se),console.log(`Escalando ${l||"nave.glb"} por factor:`,Se)}else ee.scale.set(.5,.5,.5);V.clear(),V.add(ee)},B=>{console.log(B.loaded/B.total*100+"% cargado")},B=>{console.error(`Error al cargar ${l||"nave.glb"}:`,B),console.log("Usando nave por defecto (fallback).");const ee=J();V.clear(),V.add(ee)}),V.rotation.y=Math.PI/2;const le=new l0(16755200,0,10);le.position.set(-2.5,0,0),L.add(le),_.current=le;const H=new _i,k=s?.id??0,ae=hr[k]||hr[0],Te=y(ae.style.planetColor1,ae.style.planetColor2),Ee=new vr({map:Te,roughness:.8}),z=new Ot(new ta(60,64,64),Ee);H.add(z);const ne=new li({color:ae.style.atmosphereColor,transparent:!0,opacity:.2,blending:vi,side:ei}),ye=new Ot(new ta(64,64,64),ne);if(H.add(ye),ae.style.hasRings){const B=new r0(80,110,64),ee=new li({color:ae.style.ringColor,side:na,transparent:!0,opacity:.4}),de=new Ot(B,ee);de.rotation.x=Math.PI/2.5,H.add(de)}H.position.set(0,10,-300),L.add(H),h.current=H;const Ue=new _i,ge=(B,ee,de,Ne=16777215)=>{const Ie=new gn,j=new Float32Array(B*3);for(let ke=0;ke<B*3;ke++)j[ke]=(Math.random()-.5)*1500;Ie.setAttribute("position",new Xn(j,3));const Se=new e0({color:Ne,size:ee,transparent:!0,opacity:.8,sizeAttenuation:!0}),We=new eS(Ie,Se);return We.userData={speedFactor:de},We},K=ge(2e3,.6,.2),se=ge(1500,1,.5),He=ge(500,2,1);Ue.add(K,se,He),L.add(Ue),d.current=Ue;const Pe=new _i,Xe=200,_t=new gn,xt=new Float32Array(Xe*6);for(let B=0;B<Xe;B++){let ee=(Math.random()-.5)*500,de=(Math.random()-.5)*500;Math.abs(ee)<50&&Math.abs(de)<50&&(ee+=ee>0?50:-50,de+=de>0?50:-50);const Ne=(Math.random()-.5)*1e3,Ie=100+Math.random()*200;xt[B*6]=ee,xt[B*6+1]=de,xt[B*6+2]=Ne,xt[B*6+3]=ee,xt[B*6+4]=de,xt[B*6+5]=Ne+Ie}_t.setAttribute("position",new Xn(xt,3));const ht=new hc({color:8965375,transparent:!0,opacity:0,blending:vi}),xe=new $m(_t,ht);Pe.add(xe);const we=new mr(40,40,1e3,16,1,!0),De=new li({color:4456703,transparent:!0,opacity:0,side:ei,blending:vi,wireframe:!0}),Ye=new Ot(we,De);Ye.rotation.x=Math.PI/2,Pe.add(Ye),L.add(Pe),g.current={group:Pe,lines:xe,tunnel:Ye,speed:0};const F=[],it=new n0(.2,80,8);it.rotateX(Math.PI/2);const Ze=new li({color:16777215,transparent:!0,opacity:1});for(let B=0;B<5;B++){const ee=new Ot(it,Ze.clone());ee.visible=!1,L.add(ee),F.push({mesh:ee,active:!1,life:0,velocity:new G})}v.current=F;const ot=new ta(.15,6,6),Ve=new ta(.25,4,4),P=new ta(.08,4,4),E=(B,ee=.9)=>new li({color:B,transparent:!0,opacity:ee,blending:vi,depthWrite:!1});S.current=[];for(let B=0;B<150;B++){const ee=B<50?"core":B<100?"outer":"spark",de=ee==="core"?ot:ee==="outer"?Ve:P,Ne=ee==="core"?16777215:ee==="outer"?16755200:16733440,Ie=new Ot(de,E(Ne,ee==="core"?1:.8));Ie.visible=!1,L.add(Ie),S.current.push({mesh:Ie,life:0,maxLife:1,velocity:new G,type:ee,baseScale:ee==="core"?.8:ee==="outer"?1.2:.5})}R.position.set(0,3,12),R.lookAt(0,0,0),M.current=new c0,T.current.shipPos.set(0,0,0),T.current.cameraPos.copy(R.position);let Y;const ve=()=>{Y=requestAnimationFrame(ve);const B=Math.min(M.current.getDelta(),.1),ee=B*60,de=window.missionActive,Ne=window.totalTime||1,Ie=Date.now()*.001,j=T.current;let Se=0;if(de){j.isMissionActive||(j.isMissionActive=!0,j.missionStartTime=performance.now(),j.smoothProgress=0);const Ke=(performance.now()-j.missionStartTime)/1e3,yt=Math.min(Ke/Ne,.999);j.smoothProgress=sn(j.smoothProgress,yt,6,B),Se=j.smoothProgress}else j.isMissionActive&&(j.isMissionActive=!1,j.smoothProgress=sn(j.smoothProgress,0,3,B)),Se=j.smoothProgress;if(f.current){let Fe=0,Ke=0,yt=0,Nt=0,Tt=0,En=0;const An=4,on=3;if(de){if(f.current.visible=!0,Se<.35){const yn=af(Se/.35);Fe=-200*yn;const oa=Math.sin(yn*Math.PI)*12;Ke=15*yn+oa,Nt=Math.PI/2,En=Math.cos(yn*Math.PI)*.12,Tt=Math.sin(Ie*1.2)*.06}else if(Se<.7)f.current.visible=!1,Fe=-200,Ke=15;else{f.current.visible=!0;const yn=af((Se-.7)/.3),oa=-200,$a=15;Fe=oa*(1-yn);const Sr=Math.sin(yn*Math.PI)*8;Ke=$a*(1-yn)+Sr,Nt=-Math.PI/2,En=Math.cos(yn*Math.PI)*.08,Tt=Math.sin(Ie*1)*.04*(1-yn)}j.shipPos.x=sn(j.shipPos.x,yt,An,B),j.shipPos.y=sn(j.shipPos.y,Ke,An,B),j.shipPos.z=sn(j.shipPos.z,Fe,An,B),f.current.position.copy(j.shipPos);let dn=j.shipRot.y,_n=Nt-dn;for(;_n>Math.PI;)_n-=Math.PI*2;for(;_n<-Math.PI;)_n+=Math.PI*2;j.shipRot.y=sn(dn,dn+_n,on,B),j.shipRot.z=sn(j.shipRot.z,Tt,on,B),j.shipRot.x=sn(j.shipRot.x,En,on,B),f.current.rotation.y=j.shipRot.y,f.current.rotation.z=j.shipRot.z,f.current.rotation.x=j.shipRot.x}else{j.shipRot.y+=.008*ee;const vn=Math.sin(Ie*1.5)*.4+Math.sin(Ie*2.3)*.15,wn=Math.sin(Ie*1.1)*.1;j.shipPos.y=sn(j.shipPos.y,vn,3,B),j.shipPos.z=sn(j.shipPos.z,0,2,B),j.shipPos.x=sn(j.shipPos.x,wn,3,B),j.shipRot.z=sn(j.shipRot.z,Math.sin(Ie*.8)*.05,2,B),j.shipRot.x=sn(j.shipRot.x,Math.sin(Ie*1.2)*.03,2,B),f.current.position.copy(j.shipPos),f.current.rotation.y=j.shipRot.y,f.current.rotation.z=j.shipRot.z,f.current.rotation.x=j.shipRot.x}}if(x.current)if(de){let Ke,yt;if(Se<.35){const Nt=j.shipPos.z,Tt=35;Ke=new G(20+Math.sin(Ie*.3)*2,12+Math.sin(Ie*.5)*1.5,Nt+Tt),yt=new G(0,j.shipPos.y,Nt-20)}else if(Se<.55)Ke=new G(30+Math.sin(Ie*.4)*2,20+Math.sin(Ie*.6)*1.5,-170),yt=new G(0,8,-220);else if(Se<.7){const Nt=(Se-.55)/.15;Ke=new G(35-Nt*10,25+Nt*5,-150+Nt*50),yt=new G(0,j.shipPos.y,j.shipPos.z)}else{const Nt=j.shipPos.z,Tt=(Se-.7)/.3;Ke=new G(-20-Math.sin(Ie*.3)*2,12+Math.sin(Ie*.5)*1.5-Tt*5,Nt-35),yt=new G(0,j.shipPos.y,Nt+20)}j.cameraPos.x=sn(j.cameraPos.x,Ke.x,2.5,B),j.cameraPos.y=sn(j.cameraPos.y,Ke.y,2.5,B),j.cameraPos.z=sn(j.cameraPos.z,Ke.z,2.5,B),x.current.position.copy(j.cameraPos),j.cameraTarget.x=sn(j.cameraTarget.x,yt.x,2.5*1.5,B),j.cameraTarget.y=sn(j.cameraTarget.y,yt.y,2.5*1.5,B),j.cameraTarget.z=sn(j.cameraTarget.z,yt.z,2.5*1.5,B),x.current.lookAt(j.cameraTarget)}else{const Ke=new G(Math.sin(Ie*.2)*2,3+Math.sin(Ie*.3)*.5,12+Math.sin(Ie*.25)*1);if(j.cameraPos.x=sn(j.cameraPos.x,Ke.x,2.5,B),j.cameraPos.y=sn(j.cameraPos.y,Ke.y,2.5,B),j.cameraPos.z=sn(j.cameraPos.z,Ke.z,2.5,B),x.current.position.copy(j.cameraPos),f.current){const yt=new G(j.shipPos.x,j.shipPos.y*.5,j.shipPos.z-5);j.cameraTarget.x=sn(j.cameraTarget.x,yt.x,3,B),j.cameraTarget.y=sn(j.cameraTarget.y,yt.y,3,B),j.cameraTarget.z=sn(j.cameraTarget.z,yt.z,3,B),x.current.lookAt(j.cameraTarget)}}h.current&&(h.current.rotation.y+=8e-4*ee,h.current.rotation.x=Math.sin(Ie*.1)*.02);let We=.5;const ke=Se>.42&&Se<.58,qe=Se>.55&&Se<.72;if(de)if(ke)We=.1;else if(qe)We=.5;else if(Se<.35)We=8*af(Se/.35);else if(Se>.7){const Fe=(Se-.7)/.3;We=8*(1-af(Fe)*.5)}else We=2;d.current.userData.speed||(d.current.userData.speed=.1);const Ge=gi.lerp(d.current.userData.speed,We,.03);if(d.current.userData.speed=Ge,d.current&&d.current.children.forEach(Fe=>{const Ke=Fe.userData.speedFactor*Ge,yt=Fe.geometry.attributes.position.array,Nt=yt.length/3;for(let Tt=0;Tt<Nt;Tt++)yt[Tt*3+2]+=Ke*ee*10,yt[Tt*3+2]>200&&(yt[Tt*3+2]-=1500);Fe.geometry.attributes.position.needsUpdate=!0}),g.current){const{lines:Fe,tunnel:Ke}=g.current,yt=Ge>3&&Se<.5,Nt=yt?Math.min((Ge-3)*.2,.8):0;if(Fe.material.opacity=sn(Fe.material.opacity,Nt,5,B),Fe.material.opacity>.01){const Tt=Fe.geometry.attributes.position.array,En=Tt.length/6,An=Ge*20;for(let on=0;on<En;on++)if(Tt[on*6+2]+=An*ee,Tt[on*6+5]+=An*ee,Tt[on*6+2]>200){const vn=Tt[on*6+5]-Tt[on*6+2],wn=-800-Math.random()*200;Tt[on*6+2]=wn,Tt[on*6+5]=wn+vn}Fe.geometry.attributes.position.needsUpdate=!0}Ke.material.opacity=sn(Ke.material.opacity,yt?.3:0,2,B),Ke.rotation.z+=Ge*.005*ee}const W=v.current;if(Math.random()<.02*(de?2:1)){const Fe=W.find(Ke=>!Ke.active);if(Fe){Fe.active=!0,Fe.life=1;const Ke=(Math.random()-.5)*400,yt=(Math.random()-.5)*200+50;Fe.mesh.position.set(Ke,yt,-400),Fe.velocity=new G((Math.random()-.5)*20,(Math.random()-.5)*10,200+Math.random()*100),Fe.mesh.visible=!0,Fe.mesh.material.opacity=1,Fe.mesh.lookAt(Fe.mesh.position.x+Fe.velocity.x,Fe.mesh.position.y+Fe.velocity.y,Fe.mesh.position.z+Fe.velocity.z)}}W.forEach(Fe=>{Fe.active&&(Fe.mesh.position.add(Fe.velocity.clone().multiplyScalar(B*2)),Fe.life-=B*1.5,Fe.mesh.material.opacity=Fe.life,(Fe.life<=0||Fe.mesh.position.z>100)&&(Fe.active=!1,Fe.mesh.visible=!1))});const ze=S.current,Re=Se>.43&&Se<.57,Le=Re?.3:de?.95:.6,be=de?2.5:1,Be=de?16777215:16777130,dt=de?52479:16755200,Ht=de?26367:16733440,Lt=Math.random()<Le?de?3:2:0;for(let Fe=0;Fe<Lt;Fe++){const Ke=ze.find(yt=>yt.life<=0);if(Ke&&f.current){Ke.maxLife=.8+Math.random()*.4,Ke.life=Ke.maxLife,Ke.mesh.visible=!0;const yt=-1.8-Math.random()*.3,Nt=Ke.type==="core"?.1:Ke.type==="outer"?.25:.15,Tt=new G(yt,(Math.random()-.5)*Nt,(Math.random()-.5)*Nt);Tt.applyEuler(f.current.rotation),Ke.mesh.position.copy(f.current.position).add(Tt);const En=(de?.6:.15)*(Ke.type==="core"?1.2:1),An=Ke.type==="spark"?.15:.08,on=new G(-En-Math.random()*.15,(Math.random()-.5)*An,(Math.random()-.5)*An);on.applyEuler(f.current.rotation),Ke.velocity.copy(on);const vn=Ke.type==="core"?Be:Ke.type==="outer"?dt:Ht;Ke.mesh.material.color.setHex(vn),Ke.mesh.material.opacity=1}}if(ze.forEach(Fe=>{if(Fe.life>0){const Ke=Fe.life/Fe.maxLife,yt=.025*ee*(Fe.type==="spark"?1.5:1);Fe.life-=yt,Fe.velocity.multiplyScalar(.98),Fe.velocity.y-=.002*ee,Fe.velocity.x+=(Math.random()-.5)*.01,Fe.velocity.y+=(Math.random()-.5)*.008,Fe.velocity.z+=(Math.random()-.5)*.008,Fe.mesh.position.add(Fe.velocity.clone().multiplyScalar(ee));const Nt=o3(Ke)*be*Fe.baseScale;Fe.mesh.scale.setScalar(Nt);const Tt=Ke*Ke;Fe.mesh.material.opacity=Tt,Fe.life<=0&&(Fe.mesh.visible=!1)}}),_.current&&f.current){const Fe=Math.sin(Ie*8)*.3+Math.sin(Ie*13)*.15;let Ke=Re?1.5:de?10+Fe*3:3+Fe;j.engineIntensity=sn(j.engineIntensity,Ke,4,B),_.current.intensity=j.engineIntensity;const yt=de?43775:16755200,Nt=new lt(_.current.color),Tt=new lt(yt);Nt.lerp(Tt,.05),_.current.color.copy(Nt);const En=new G(-2.5,0,0);En.applyEuler(f.current.rotation),_.current.position.copy(f.current.position).add(En)}O.render()};ve();const he=()=>{!x.current||!u.current||(x.current.aspect=window.innerWidth/window.innerHeight,x.current.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight),O.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",he),()=>{window.removeEventListener("resize",he),cancelAnimationFrame(Y),u.current&&(u.current.innerHTML=""),w.dispose()}},[e,s,l]),bt.useEffect(()=>{window.missionActive=o==="mining",window.totalTime=t,window.currentTime=a},[o,t,a]),pe.jsx("div",{ref:u,id:"canvas-container",className:"absolute top-0 left-0 w-full h-full z-0 bg-black"})},c3={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

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

		}`};class u3 extends yr{constructor(e=.5,t=!1){super();const a=c3;this.uniforms=Do.clone(a.uniforms),this.material=new kn({name:a.name,uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this._fsQuad=new Cf(this.material)}render(e,t,a,s){this.uniforms.tDiffuse.value=a.texture,this.uniforms.time.value+=s,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const sf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class f3 extends yr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Do.clone(sf.uniforms),this.material=new fS({name:sf.name,uniforms:this.uniforms,vertexShader:sf.vertexShader,fragmentShader:sf.fragmentShader}),this._fsQuad=new Cf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ft.getTransfer(this._outputColorSpace)===Zt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Um?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Im?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zm?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Om&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const h3={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

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

		}`},d3={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`},p3=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,m3=o=>1-Math.pow(1-o,4),rf=o=>o*o*(3-2*o),lr=(o,e,t,a)=>gi.lerp(o,e,1-Math.exp(-t*a)),g3=({missionState:o,timeLeft:e,totalDuration:t,planet:a})=>{const s=bt.useRef(null),l=bt.useRef(null),u=bt.useRef(null),f=bt.useRef(null),h=bt.useRef([]),d=bt.useRef(null),g=bt.useRef(null);bt.useRef(null);const v=bt.useRef(null),_=bt.useRef(null),x=bt.useRef({shipPos:new G(0,50,0),shipRot:new Ni(0,0,0),cameraPos:new G(0,5,20),cameraTarget:new G(0,5,0),cameraFov:60,engineIntensity:0,shakeIntensity:0,missionStartTime:0,isMissionActive:!1,smoothProgress:0,opacity:0,shockwaveTime:-1}),M=(S,y)=>{const R=document.createElement("canvas");R.width=512,R.height=512;const w=R.getContext("2d");w.fillStyle=S,w.fillRect(0,0,512,512);for(let U=0;U<400;U++){const I=Math.random()*512,O=Math.random()*512,q=Math.random()*20+2;w.beginPath(),w.arc(I,O,q,0,Math.PI*2),w.fillStyle=y,w.globalAlpha=.3,w.fill()}return new xm(R)},T=S=>{const L=document.createElement("canvas");L.width=256,L.height=256;const R=L.getContext("2d"),w=R.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2),U=new lt(S),I=q=>`rgba(${Math.floor(U.r*255)}, ${Math.floor(U.g*255)}, ${Math.floor(U.b*255)}, ${q})`;w.addColorStop(0,I(1)),w.addColorStop(.2,I(.8)),w.addColorStop(.5,I(.25)),w.addColorStop(1,I(0)),R.fillStyle=w,R.fillRect(0,0,256,256);const O=new xm(L);return O.colorSpace=On,O};return bt.useEffect(()=>{const S=new Zy,y=new lt(a?.style?.atmosphereColor||4491519),L=a?.style?.planetColor1||"#1e3c72",R=a?.style?.planetColor2||"#2a5298";S.fog=new Tf(y,.018),S.background=y;const w=new ai(60,window.innerWidth/window.innerHeight,.1,1e3);u.current=w;const U=new MS({alpha:!0,antialias:!0,powerPreference:"high-performance"});U.setSize(window.innerWidth,window.innerHeight),U.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),U.toneMapping=fc,U.toneMappingExposure=1.1,U.outputColorSpace=On,U.useLegacyLights=!1,U.shadowMap.enabled=!0,U.shadowMap.type=Ry,s.current&&(s.current.innerHTML="",s.current.appendChild(U.domElement));const I=new TS(S,w),O=new _r(new Oe(window.innerWidth,window.innerHeight),.9,.45,.85);O.threshold=.55,O.strength=.7,O.radius=.55;const q=new u3(.28,.18,648,!1),A=new wm(d3);A.uniforms.offset.value=.88,A.uniforms.darkness.value=1.15;const N=new wm(h3);N.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight);const V=new f3,J=new bS(U);J.addPass(I),J.addPass(O),J.addPass(q),J.addPass(A),J.addPass(N),J.addPass(V);const te=new mS(y,657936,.9);S.add(te);const ce=new Sf(16777215,2.2);ce.position.set(70,120,35),ce.castShadow=!0,ce.shadow.mapSize.set(1024,1024),ce.shadow.camera.near=10,ce.shadow.camera.far=300,ce.shadow.camera.left=-80,ce.shadow.camera.right=80,ce.shadow.camera.top=80,ce.shadow.camera.bottom=-80,S.add(ce);const le=new Sf(y.clone().lerp(new lt(16777215),.25),1.35);le.position.set(-60,45,-80),S.add(le);const H=new ta(800,48,48),k=new kn({uniforms:{topColor:{value:y.clone().multiplyScalar(1.1)},bottomColor:{value:new lt(329226)},sunDir:{value:ce.position.clone().normalize()},time:{value:0}},vertexShader:`
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
      `,side:ei,depthWrite:!1}),ae=new Ot(H,k);ae.renderOrder=-10,S.add(ae),g.current=ae;const Te=new dc(200,200,64,64),Ee=Te.attributes.position;for(let he=0;he<Ee.count;he++){const B=Ee.getX(he),ee=Ee.getY(he),de=Math.sin(B*.08)*Math.cos(ee*.08),Ne=Math.sin(B*.22+1.2)*Math.cos(ee*.18-.7)*.45,Ie=Math.sin(B*.5+2)*Math.cos(ee*.45-1.1)*.12,j=de*2.2+Ne*1.6+Ie*1.1+(Math.random()-.5)*.25;Ee.setZ(he,j)}Te.computeVertexNormals();const z=M(L,R);z.wrapS=Os,z.wrapT=Os,z.repeat.set(10,10),z.anisotropy=U.capabilities.getMaxAnisotropy?.()??1;const ne=new vr({map:z,roughness:.95,metalness:.05,color:16777215}),ye=new Ot(Te,ne);ye.rotation.x=-Math.PI/2,ye.receiveShadow=!0,S.add(ye);const Ue=new AE(200,50,16777215,16777215);Ue.position.y=.1,Ue.material.transparent=!0,Ue.material.opacity=.05,S.add(Ue);const ge=new _i;S.add(ge),l.current=ge;const K=()=>{const he=new _i,B=new Tm({color:9055202}),ee=new vr({color:12632256,metalness:.8,roughness:.3}),de=new Ot(new ta(1,32,32),B);de.scale.set(1.8,1,1),he.add(de);const Ne=new Ot(new mr(.5,.7,.6,32),ee);Ne.rotation.z=Math.PI/2,Ne.position.set(-1.8,0,0),he.add(Ne);const Ie=new xr(1,.1,1.5),j=new Ot(Ie,B);return j.position.set(-.5,0,0),he.add(j),he};new ES().load("/orbital-scavengers/nave.glb",he=>{const B=he.scene;B.rotation.y=0;const de=new aa().setFromObject(B).getSize(new G),Ne=Math.max(de.x,de.y,de.z),Ie=3.45;if(Ne>0){const j=Ie/Ne;B.scale.set(j,j,j)}ge.add(B)},void 0,()=>{ge.add(K())});const Pe=new l0(16755200,0,15);S.add(Pe);const Xe=T(16738816),_t=new Jy({map:Xe,color:16777215,transparent:!0,opacity:0,blending:vi,depthWrite:!1}),xt=new l1(_t);xt.scale.set(10,10,1),xt.position.set(2.2,.1,0),xt.visible=!0,ge.add(xt),_.current=xt;const ht=80,xe=new Float32Array(ht*3),we=new gn;we.setAttribute("position",new Xn(xe,3));const De=new hc({color:16742912,transparent:!0,opacity:0,blending:vi,depthWrite:!1}),Ye=new Ef(we,De);Ye.frustumCulled=!1,Ye.visible=!0,S.add(Ye),v.current={line:Ye,max:ht,positions:xe};const F=new mr(.1,.1,1,8);F.translate(0,.5,0);const it=new li({color:65280,transparent:!0,opacity:.8,blending:vi}),Ze=new Ot(F,it);Ze.rotation.x=Math.PI,Ze.visible=!1,ge.add(Ze),d.current=Ze,h.current=[];const ot=new ta(.12,6,6),Ve=new li({color:16777215,transparent:!0,opacity:.8,blending:vi,depthWrite:!1});for(let he=0;he<260;he++){const B=new Ot(ot,Ve.clone());B.visible=!1,S.add(B),h.current.push({mesh:B,life:0,maxLife:1,velocity:new G,type:"thrust",baseScale:1})}f.current=new c0,x.current.shipPos.set(0,100,0);let P;const E=()=>{P=requestAnimationFrame(E);const he=Math.min(f.current.getDelta(),.1),B=x.current,ee=window.totalTime||15,de=performance.now()*.001;if(o==="mining"){B.isMissionActive||(B.isMissionActive=!0,B.missionStartTime=performance.now(),B.smoothProgress=0,B.shockwaveTime=-1);const W=(performance.now()-B.missionStartTime)/1e3,ze=Math.min(W/ee,1);B.smoothProgress=lr(B.smoothProgress,ze,6,he)}else B.isMissionActive=!1,B.smoothProgress=0,B.shockwaveTime=-1;const Ne=B.smoothProgress,Ie=.22,j=.86,Se=Ie+.05,We=j-.07;let ke=0;if(o==="mining"&&(Ne<Ie||Ne>j?ke=0:Ne<Se?ke=rf((Ne-Ie)/(Se-Ie)):Ne>We?ke=1-rf((Ne-We)/(j-We)):ke=1),B.opacity=lr(B.opacity,ke,4.5,he),U.domElement.style.opacity=B.opacity,g.current&&(g.current.material.uniforms.time.value=de,g.current.position.copy(u.current.position)),l.current){let Ge=new G(0,0,0),W=new Ni(0,0,0),ze=new G(0,6,24),Re=0,je=60;const Le=.22,be=.42,Be=.62,dt=.84,Ht=Math.PI/2;if(Ne<be){const Fe=gi.clamp((Ne-Le)/(be-Le),0,1),Ke=p3(Fe),yt=new ym([new G(2,130,-15),new G(1,80,-8),new G(.3,30,-2),new G(0,3,0)]),Nt=yt.getPoint(Ke),Tt=yt.getTangent(Ke).normalize();Ge.copy(Nt);const En=Math.atan2(Tt.x,Tt.z),An=Math.sin(de*1.2)*.03;W.set(0,En,Ht+An),je=gi.lerp(70,58,Ke);const on=new G(18,8,22);ze.copy(on),ze.lerp(new G(12,5,16),Ke),Re=(1-Ke)*.06;const vn=rf(1-Math.abs(Ke-.35)/.35);if(_.current&&(_.current.material.opacity=gi.lerp(_.current.material.opacity,vn*.85,.12),_.current.scale.setScalar(2+vn*24),_.current.position.set(2.2,.1,0)),Ke>.75){const wn=(Ke-.75)/.25;Math.random()<.3*wn&&Y(new G(0,0,0),"dust")}Math.random()<.65&&Y(l.current.position,"heat"),Math.random()<.3&&Y(l.current.position,"thrust"),d.current&&(d.current.visible=!1)}else if(Ne<Be){Ge.set(Math.sin(de*2.3)*.06,1.85+Math.sin(de*1.7)*.03,Math.cos(de*1.9)*.06),W.set(Math.sin(de*2.1)*.015,Math.sin(de*.7)*.05,Ht+Math.sin(de*1.3)*.02);const Fe=(Ne-be)/(Be-be),Ke=Fe*Math.PI*1.1+de*.25,yt=11.5+Math.sin(Fe*Math.PI)*2;if(ze.set(Math.sin(Ke)*yt,4.5,Math.cos(Ke)*yt),Re=.018,je=56,d.current&&(d.current.visible=!0,d.current.scale.set(1,4.5,1),d.current.material.opacity=.6),Math.random()<.15){const Nt=new G((Math.random()-.5)*.3,.02,(Math.random()-.5)*.3);Y(Nt,"spark")}Math.random()<.06&&Y(new G(0,0,0),"debris"),Math.random()<.08&&Y(new G(0,0,0),"microdust"),Pe&&(Pe.intensity=1+Math.random()*.5,Pe.color.setHex(3538820)),_.current&&(_.current.material.opacity=gi.lerp(_.current.material.opacity,0,.1),_.current.scale.setScalar(1))}else{d.current&&(d.current.visible=!1);const Fe=gi.clamp((Ne-Be)/(dt-Be),0,1),Ke=m3(Fe),yt=new ym([new G(0,1.9,0),new G(.5,18,2),new G(1.5,55,6),new G(3,140,12)]),Nt=yt.getPoint(Ke),Tt=yt.getTangent(Ke).normalize();Ge.copy(Nt);const En=Math.atan2(Tt.x,Tt.z),An=Math.sin(de*1)*.02;W.set(0,En,Ht+An),je=gi.lerp(56,62,rf(Fe)),ze.set(12,2+Ke*6,14),Re=.04*Ke;const on=Math.floor(2+Ke*5);for(let vn=0;vn<on;vn++)Y(l.current.position,"thrust");Fe<.16&&Math.random()<.85&&Y(new G(0,0,0),"dust"),Pe&&(Pe.intensity=6+Math.random()*8,Pe.color.setHex(16755200)),_.current&&(_.current.material.opacity=gi.lerp(_.current.material.opacity,.05,.08))}B.shipPos.lerp(Ge,.12),l.current.position.copy(B.shipPos),B.shipRot.x=lr(B.shipRot.x,W.x,5,he),B.shipRot.y=lr(B.shipRot.y,W.y,5,he),B.shipRot.z=lr(B.shipRot.z,W.z,5,he),l.current.rotation.copy(B.shipRot),B.shakeIntensity=lr(B.shakeIntensity,Re,5,he);const Lt=new G((Math.random()-.5)*B.shakeIntensity,(Math.random()-.5)*B.shakeIntensity,(Math.random()-.5)*B.shakeIntensity);B.cameraPos.lerp(ze,.05),u.current.position.copy(B.cameraPos).add(Lt),u.current.lookAt(B.shipPos),B.cameraFov=lr(B.cameraFov,je,3,he),u.current.fov=B.cameraFov,u.current.updateProjectionMatrix(),Pe&&(Pe.position.copy(B.shipPos),Pe.position.y-=1,o==="mining"&&Ne>.22&&Ne<.84||(Pe.intensity=0))}if(v.current?.line&&l.current){const{positions:Ge,max:W}=v.current;Ge.copyWithin(3,0,(W-1)*3);const ze=new G(-2.15,0,0);ze.applyEuler(l.current.rotation);const Re=l.current.position.clone().add(ze);Ge[0]=Re.x,Ge[1]=Re.y,Ge[2]=Re.z,v.current.line.geometry.attributes.position.needsUpdate=!0;const je=o==="mining"&&(Ne<.45||Ne>.62)?1:0;v.current.line.material.opacity=gi.lerp(v.current.line.material.opacity,je?.25+Math.sin(de*8)*.05:0,.08)}h.current.forEach(Ge=>{if(Ge.life>0){Ge.life-=he;const W=gi.clamp(Ge.life/Ge.maxLife,0,1),ze=Ge.type==="dust"?.9:Ge.type==="debris"?.94:.92;Ge.velocity.multiplyScalar(ze),Ge.type==="debris"&&(Ge.velocity.y-=.18*he),Ge.type==="dust"&&(Ge.velocity.y-=.08*he),Ge.mesh.position.addScaledVector(Ge.velocity,he*7.5);let Re=1;Ge.type==="spark"?Re=Ge.baseScale*(.35+W*.9):Ge.type==="heat"?Re=Ge.baseScale*(.55+(1-W)*1.2):Ge.type==="dust"?Re=Ge.baseScale*(.85+(1-W)*1.4):Ge.type==="debris"?Re=Ge.baseScale*(.65+W*.4):Re=Ge.baseScale*(.5+(1-W)*1.1),Ge.mesh.scale.setScalar(Re);const je=Ge.type==="dust"?W*.55:W*W;Ge.mesh.material.opacity=je,Ge.life<=0&&(Ge.mesh.visible=!1)}});const qe=o==="mining"&&Ne<.45?1.15:o==="mining"&&Ne<.62?.65:.9;O.strength=gi.lerp(O.strength,qe,.06),J.render()};E();function Y(he,B="thrust"){const ee=h.current.find(de=>de.life<=0);if(ee)if(ee.mesh.visible=!0,ee.type=B,B==="thrust")ee.maxLife=.75+Math.random()*.35,ee.life=ee.maxLife,ee.baseScale=1,ee.mesh.position.copy(he).add(new G(-.4,-.7,0)),ee.mesh.material.blending=vi,ee.mesh.material.color.setHex(16755285),ee.velocity.set((Math.random()-.5)*.8,-2.2-Math.random()*.8,(Math.random()-.5)*.8);else if(B==="heat")ee.maxLife=.55+Math.random()*.35,ee.life=ee.maxLife,ee.baseScale=.9+Math.random()*.9,ee.mesh.position.copy(he).add(new G((Math.random()-.5)*.6,(Math.random()-.5)*.4,(Math.random()-.5)*.6)),ee.mesh.material.blending=vi,ee.mesh.material.color.setHex(16726784),ee.velocity.set((Math.random()-.5)*.5,.6+Math.random()*1.4,(Math.random()-.5)*.5);else if(B==="spark")ee.maxLife=.5+Math.random()*.3,ee.life=ee.maxLife,ee.baseScale=.18,ee.mesh.position.copy(he),ee.mesh.material.blending=vi,ee.mesh.material.color.setHex(5111697),ee.velocity.set((Math.random()-.5)*1.2,Math.random()*2.5+.8,(Math.random()-.5)*1.2);else if(B==="debris")ee.maxLife=1.8+Math.random()*.6,ee.life=ee.maxLife,ee.baseScale=.25+Math.random()*.25,ee.mesh.position.copy(he).add(new G((Math.random()-.5)*.3,.05,(Math.random()-.5)*.3)),ee.mesh.material.blending=Za,ee.mesh.material.color.setHex(5921370),ee.velocity.set((Math.random()-.5)*.8,Math.random()*1.5+.5,(Math.random()-.5)*.8);else if(B==="microdust"){const de=Math.random()*Math.PI*2,Ne=.15+Math.random()*.2;ee.mesh.position.set(Math.cos(de)*Ne,.05,Math.sin(de)*Ne),ee.maxLife=1.2+Math.random()*.5,ee.life=ee.maxLife,ee.baseScale=.08+Math.random()*.06,ee.mesh.material.blending=Za,ee.mesh.material.color.setHex(9079434),ee.mesh.material.opacity=.35,ee.velocity.set(Math.cos(de)*.2,.3+Math.random()*.25,Math.sin(de)*.2)}else{const de=Math.random()*Math.PI*2,Ne=.3+Math.random()*.3;ee.mesh.position.set(Math.cos(de)*Ne,.08,Math.sin(de)*Ne),ee.maxLife=1+Math.random()*.5,ee.life=ee.maxLife,ee.baseScale=.15+Math.random()*.15,ee.mesh.material.blending=Za,ee.mesh.material.color.setHex(10132122),ee.mesh.material.opacity=.3,ee.velocity.set(Math.cos(de)*.6,.2+Math.random()*.15,Math.sin(de)*.6)}}const ve=()=>{!u.current||!s.current||(u.current.aspect=window.innerWidth/window.innerHeight,u.current.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight),J.setSize(window.innerWidth,window.innerHeight),N.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight))};return window.addEventListener("resize",ve),()=>{window.removeEventListener("resize",ve),cancelAnimationFrame(P),s.current&&(s.current.innerHTML="");try{h.current.forEach(he=>{he?.mesh?.material?.dispose&&he.mesh.material.dispose()})}catch{}ot.dispose(),Ve.dispose(),Te.dispose(),ne.dispose(),z.dispose(),F.dispose(),it.dispose(),Xe.dispose(),_t.dispose(),we.dispose(),De.dispose(),H.dispose(),k.dispose(),U.dispose()}},[a,o]),bt.useEffect(()=>{window.missionActive=o==="mining",window.totalTime=t,window.currentTime=e},[o,t,e]),pe.jsx("div",{ref:s,className:"absolute top-0 left-0 w-full h-full z-1",style:{pointerEvents:"none",transition:"opacity 0.5s"}})},v3=({item:o,onClose:e})=>pe.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-[pop_0.4s_ease-out] p-4",onClick:e,children:pe.jsxs("div",{className:`relative bg-gray-900/90 border-2 ${o.border} rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]`,onClick:t=>t.stopPropagation(),children:[pe.jsx("div",{className:`absolute inset-0 rounded-3xl opacity-20 bg-gradient-to-tr from-transparent via-${o.style.split("-")[1]}-500 to-transparent animate-pulse pointer-events-none`}),pe.jsx("h2",{className:"text-2xl font-bold text-white mb-8 font-orbitron tracking-[0.2em] border-b border-white/10 pb-4",children:"RECOMPENSA"}),pe.jsx("div",{className:"text-9xl mb-6 animate-bounce drop-shadow-2xl",children:o.icon}),pe.jsxs("div",{className:"space-y-2 mb-8",children:[pe.jsx("h3",{className:`text-3xl font-bold font-orbitron ${o.style} drop-shadow-md`,children:o.name}),pe.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border ${o.border} ${o.style}`,children:o.rarity})]}),pe.jsxs("div",{className:"bg-black/50 rounded-2xl p-4 mb-8 border border-white/5",children:[pe.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-widest mb-1",children:"Valor Estimado"}),pe.jsxs("p",{className:"text-4xl font-mono font-bold text-yellow-400 drop-shadow-lg",children:["+",o.val.toLocaleString()," ₡"]})]}),pe.jsx("button",{onClick:e,className:"w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold text-lg tracking-widest font-orbitron shadow-xl active:scale-95 transition-all",children:"ACEPTAR"})]})}),da={Bolt:({size:o=24,className:e})=>pe.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:pe.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),Home:({size:o=24,className:e})=>pe.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[pe.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),pe.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Bag:({size:o=24,className:e})=>pe.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[pe.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),pe.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),pe.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Trash:({size:o=16,className:e})=>pe.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[pe.jsx("polyline",{points:"3 6 5 6 21 6"}),pe.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Coins:({size:o=16,className:e})=>pe.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[pe.jsx("circle",{cx:"8",cy:"8",r:"6"}),pe.jsx("path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"})]}),Lock:({size:o=16,className:e})=>pe.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[pe.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),pe.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),ArrowLeft:({size:o=24,className:e})=>pe.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:pe.jsx("polyline",{points:"15 18 9 12 15 6"})}),ArrowRight:({size:o=24,className:e})=>pe.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:pe.jsx("polyline",{points:"9 18 15 12 9 6"})})},wy=[{name:"Tuerca Oxidada",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔩",chance:.2},{name:"Cable Pelado",val:8,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔌",chance:.18},{name:"Lata Espacial",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥫",chance:.18},{name:"Fragmento Metálico",val:4,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"⚙️",chance:.16},{name:"Residuo Plástico",val:2,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🧩",chance:.15},{name:"Cristal Roto",val:6,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"💎",chance:.14},{name:"Tornillo Suelto",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔧",chance:.13},{name:"Chapa Abollada",val:7,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"📦",chance:.12},{name:"Restos de Comida",val:1,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🦴",chance:.15},{name:"Papel Aluminio",val:2,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🗞️",chance:.14},{name:"Vidrio Opaco",val:4,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥃",chance:.13},{name:"Muelle Viejo",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"➰",chance:.12},{name:"Tubo de Cobre",val:7,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🎺",chance:.11},{name:"Placa de Acero",val:25,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🛡️",chance:.12},{name:"Batería de Iones",val:40,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔋",chance:.1},{name:"Sensor Óptico",val:35,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"👁️",chance:.09},{name:"Conductor de Energía",val:50,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚡",chance:.08},{name:"Aleación Refinada",val:60,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔬",chance:.07},{name:"Núcleo de Plasma",val:80,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚛️",chance:.06},{name:"Circuito Impreso",val:30,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"📟",chance:.08},{name:"Lente de Cámara",val:45,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"📷",chance:.07},{name:"Bobina Tesla",val:55,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🌀",chance:.07},{name:"Engranaje Titanio",val:65,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚙️",chance:.06},{name:"Fibra Óptica",val:70,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🧵",chance:.06},{name:"Chip Cuántico",val:150,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💾",chance:.07},{name:"Motor de Iones",val:200,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🛸",chance:.06},{name:"Cristal de Energía",val:300,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💠",chance:.05},{name:"Dispositivo Holográfico",val:400,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"📡",chance:.04},{name:"Procesador Cuántico",val:180,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💻",chance:.05},{name:"Celda de Combustible",val:250,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"⛽",chance:.05},{name:"Mapa Estelar",val:320,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🗺️",chance:.04},{name:"Dron Espía",val:350,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🚁",chance:.04},{name:"Armadura Nanotech",val:380,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🥋",chance:.04},{name:"Motor WARP",val:750,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🚀",chance:.04},{name:"Núcleo Estelar",val:1200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"⭐",chance:.03},{name:"Artefacto Antiguo",val:2e3,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🏺",chance:.025},{name:"Generador de Campo",val:3500,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🌀",chance:.02},{name:"Generador de Escudos",val:900,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🛡️",chance:.03},{name:"Motor de Curvatura",val:1500,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🌌",chance:.025},{name:"Inteligencia Artificial",val:2200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🧠",chance:.02},{name:"Cañón de Plasma",val:2800,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🔫",chance:.02},{name:"Cristal Kyber",val:3200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🔮",chance:.02},{name:"Antimateria",val:5e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚛️",chance:.015},{name:"Huevo Dragón",val:8e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🥚",chance:.01},{name:"Fragmento de Agujero Negro",val:15e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🕳️",chance:.008},{name:"Esencia Cósmica",val:25e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"✨",chance:.005},{name:"Corona Galáctica",val:6e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"👑",chance:.01},{name:"Llave Maestra Alienígena",val:9e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🗝️",chance:.009},{name:"Semilla de Vida",val:12e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🌱",chance:.008},{name:"Esfera de Dyson (Plano)",val:18e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"☀️",chance:.007},{name:"Materia Oscura Concentrada",val:22e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚫",chance:.006},{name:"Partícula Dios",val:5e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌌",chance:.002},{name:"Corazón de Estrella",val:1e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"❤️",chance:.001},{name:"Fragmento del Big Bang",val:25e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"💥",chance:5e-4},{name:"Huevo de Fénix Cósmico",val:6e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🔥",chance:.0015},{name:"Tridente de Poseidón Espacial",val:8e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🔱",chance:.0012},{name:"Gema del Infinito",val:15e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"💎",chance:8e-4},{name:"Orbe de la Creación",val:2e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌐",chance:6e-4},{name:"Reloj del Tiempo Absoluto",val:3e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"⏳",chance:4e-4}],Xl=[{id:0,name:"Nave Estándar",model:"nave.glb",cost:0,rarity:"Común"},{id:1,name:"Nave Básica",model:"n_basica.glb",cost:1e3,rarity:"Poco Común"},{id:2,name:"Nave Graffiti",model:"n_graffiti.glb",cost:2e3,rarity:"Rara"}];function _3(){const[o,e]=bt.useState("home"),[t,a]=bt.useState(()=>parseInt(localStorage.getItem("os_ultra_credits"))||500),[s,l]=bt.useState(()=>parseInt(localStorage.getItem("os_ultra_level"))||1),[u,f]=bt.useState(()=>JSON.parse(localStorage.getItem("os_ultra_inv"))||[]),[h,d]=bt.useState("idle"),[g,v]=bt.useState(0),[_,x]=bt.useState(0),[M,T]=bt.useState(null),[S,y]=bt.useState("planet"),[L,R]=bt.useState(()=>{const ge=localStorage.getItem("os_ultra_planet");return ge?parseInt(ge):0}),[w,U]=bt.useState(()=>{const ge=localStorage.getItem("os_ultra_unlocked_planets");return ge?JSON.parse(ge):[0]}),[I,O]=bt.useState(()=>{const ge=localStorage.getItem("os_ultra_spaceship");return ge?parseInt(ge):0}),[q,A]=bt.useState(()=>{const ge=localStorage.getItem("os_ultra_unlocked_spaceships");return ge?JSON.parse(ge):[0]});bt.useEffect(()=>{localStorage.setItem("os_ultra_credits",t),localStorage.setItem("os_ultra_level",s),localStorage.setItem("os_ultra_inv",JSON.stringify(u)),localStorage.setItem("os_ultra_planet",L),localStorage.setItem("os_ultra_unlocked_planets",JSON.stringify(w)),localStorage.setItem("os_ultra_spaceship",I),localStorage.setItem("os_ultra_unlocked_spaceships",JSON.stringify(q))},[t,s,u,L,w,I,q]),bt.useEffect(()=>{let ge;return h==="mining"&&g>0?ge=setInterval(()=>v(K=>K-1),1e3):h==="mining"&&g===0&&(d("ready"),navigator.vibrate&&navigator.vibrate(200)),()=>clearInterval(ge)},[h,g]);const N=()=>{const ge=Math.max(10,15-Math.floor(s/10));x(ge),v(ge),d("mining")},V=()=>{const ge=Math.random();let K=wy[0];const se=s*.1,Pe=hr[L]?.rarityMultiplier||1,Xe=wy.map(xe=>{let we=xe.chance;return xe.rarity==="Común"&&(we/=1+se,we/=Pe),xe.rarity==="Poco Común"&&(we*=1+se*.3,we*=Pe*.5),(xe.rarity==="Raro"||xe.rarity==="Épico")&&(we*=1+se*.5,we*=Pe),xe.rarity==="Legendario"&&(we*=1+se,we*=Pe*1.5),xe.rarity==="Mítico"&&(we*=1+se*1.5,we*=Pe*2),{...xe,weight:we}});let _t=Xe.reduce((xe,we)=>xe+we.weight,0),xt=ge*_t;for(let xe of Xe)if(xt-=xe.weight,xt<=0){K=xe;break}const ht={...K,id:Date.now()};f(xe=>[...xe,ht]),T(ht),d("idle")},J=ge=>{const K=hr[ge];!K||w.includes(ge)||t>=K.cost&&(a(se=>se-K.cost),U(se=>[...se,ge]),R(ge))},te=ge=>{const K=Xl[ge];!K||q.includes(ge)||t>=K.cost&&(a(se=>se-K.cost),A(se=>[...se,ge]),O(ge))},ce=ge=>{h!=="mining"&&(S==="planet"?R(K=>{const se=K+ge;return se<0?hr.length-1:se>=hr.length?0:se}):O(K=>{const se=K+ge;return se<0?Xl.length-1:se>=Xl.length?0:se}))},le=()=>{if(u.length===0)return;const ge=u.reduce((K,se)=>K+se.val,0);a(K=>K+ge),f([])},H=(ge,K=!1)=>{if(K){const se=u.filter(Xe=>Xe.name===ge.name),He=u.filter(Xe=>Xe.name!==ge.name),Pe=se.reduce((Xe,_t)=>Xe+_t.val,0);a(Xe=>Xe+Pe),f(He)}else{const se=u.findIndex(He=>He.name===ge.name);if(se>-1){const He=[...u];He.splice(se,1),a(Pe=>Pe+ge.val),f(He)}}},k=()=>{const ge=s*250;t>=ge&&(a(K=>K-ge),l(K=>K+1))},ae=bt.useMemo(()=>{const ge={};return u.forEach(K=>{ge[K.name]||(ge[K.name]={...K,count:0,total:0}),ge[K.name].count++,ge[K.name].total+=K.val}),Object.values(ge).sort((K,se)=>se.val-K.val)},[u]),Te=hr[L],Ee=w.includes(Te.id),z=t>=Te.cost,ne=Xl[I],ye=q.includes(ne.id)||ne.cost===0,Ue=t>=ne.cost;return pe.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black text-white font-rajdhani select-none",children:[pe.jsx(l3,{missionState:h,level:s,totalDuration:_,timeLeft:g,planet:Te,spaceshipModel:Xl[I].model}),pe.jsx(g3,{missionState:h,level:s,totalDuration:_,timeLeft:g,planet:Te}),pe.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between z-10 pointer-events-none",children:[o==="home"&&pe.jsxs("div",{className:"h-full flex flex-col justify-between p-4 pb-28 pointer-events-none",children:[pe.jsxs("div",{className:"flex gap-3 justify-end pointer-events-auto",children:[pe.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl border-l-4 border-blue-500/80 bg-black/70 backdrop-blur-xl shadow-lg animate-[slideUp_0.5s_ease-out]",children:[pe.jsx("span",{className:"text-gray-400 text-[10px] uppercase block tracking-wider font-bold mb-0.5",children:"CRÉDITOS"}),pe.jsxs("span",{className:"text-xl font-bold font-mono text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]",children:[t.toLocaleString()," ₡"]})]}),pe.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-300 border border-white/10 bg-black/70 backdrop-blur-xl shadow-lg font-orbitron flex items-center animate-[slideUp_0.5s_ease-out]",children:["MK-",s]})]}),pe.jsxs("div",{className:"w-full max-w-md mx-auto glass-panel p-5 rounded-3xl border border-blue-500/30 pointer-events-auto shadow-2xl bg-black/80 backdrop-blur-xl animate-[slideUp_0.6s_ease-out]",children:[pe.jsx("div",{className:"flex justify-center mb-4",children:pe.jsxs("div",{className:"bg-gray-900/80 p-1 rounded-full border border-white/10 flex relative",children:[pe.jsx("button",{onClick:()=>y("planet"),className:`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${S==="planet"?"bg-blue-600 text-white shadow-lg":"text-gray-500 hover:text-gray-300"}`,children:"Planetas"}),pe.jsx("button",{onClick:()=>y("spaceship"),className:`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${S==="spaceship"?"bg-purple-600 text-white shadow-lg":"text-gray-500 hover:text-gray-300"}`,children:"Naves"})]})}),pe.jsx("div",{className:"mb-4 text-center min-h-[60px] flex flex-col justify-center items-center",children:S==="planet"?Ee?pe.jsxs(pe.Fragment,{children:[pe.jsx("p",{className:`text-xs font-mono tracking-[0.3em] uppercase font-bold mb-1 ${h==="mining"?"text-yellow-400 animate-pulse":"text-cyan-400"}`,children:h==="idle"?"• SISTEMAS ONLINE •":h==="mining"?">>> VELOCIDAD LUZ <<<":"• DESTINO ALCANZADO •"}),pe.jsx("h3",{className:"text-2xl font-orbitron font-bold text-white tracking-widest drop-shadow-md",children:Te.name}),pe.jsxs("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider",children:["Multiplicador: ",Te.rarityMultiplier.toFixed(1),"x"]})]}):pe.jsxs("button",{onClick:()=>J(Te.id),disabled:!z,className:`w-full py-3 rounded-xl border font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${z?"bg-yellow-600 hover:bg-yellow-500 border-yellow-400 text-white animate-pulse":"bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"}`,children:[pe.jsx(da.Lock,{size:14}),pe.jsxs("div",{className:"flex flex-col items-start leading-none",children:[pe.jsxs("span",{className:"text-[10px]",children:["COMPRAR ",Te.name]}),pe.jsxs("span",{className:"text-sm font-mono",children:[Te.cost.toLocaleString()," ₡"]})]})]}):ye?pe.jsxs(pe.Fragment,{children:[pe.jsx("p",{className:"text-xs font-mono tracking-[0.3em] uppercase font-bold mb-1 text-purple-400",children:"• NAVE SELECCIONADA •"}),pe.jsx("h3",{className:"text-2xl font-orbitron font-bold text-white tracking-widest drop-shadow-md",children:ne.name}),pe.jsxs("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider",children:["Rareza: ",ne.rarity]})]}):pe.jsxs("button",{onClick:()=>te(ne.id),disabled:!Ue,className:`w-full py-3 rounded-xl border font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${Ue?"bg-purple-600 hover:bg-purple-500 border-purple-400 text-white animate-pulse":"bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"}`,children:[pe.jsx(da.Lock,{size:14}),pe.jsxs("div",{className:"flex flex-col items-start leading-none",children:[pe.jsxs("span",{className:"text-[10px]",children:["COMPRAR ",ne.name]}),pe.jsxs("span",{className:"text-sm font-mono",children:[ne.cost.toLocaleString()," ₡"]})]})]})}),pe.jsxs("div",{className:"flex items-center gap-3",children:[pe.jsx("button",{onClick:()=>ce(-1),disabled:h==="mining",className:`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${h==="mining"?"opacity-30 border-gray-800 cursor-not-allowed":"border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95"}`,children:pe.jsx(da.ArrowLeft,{size:20})}),pe.jsxs("div",{className:"flex-1",children:[h==="idle"&&pe.jsx("button",{onClick:N,disabled:!Ee||!ye,className:`w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base transition-all ${Ee&&ye?"bg-gradient-to-br from-blue-600 to-blue-700 hover:to-blue-600 text-white border-blue-800 active:border-b-0 active:translate-y-1 hover:shadow-blue-500/50":"bg-gray-800 text-gray-500 border-gray-900 cursor-not-allowed"}`,children:Ee&&ye?"INICIAR MISIÓN":"BLOQUEADO"}),h==="mining"&&pe.jsxs("div",{className:"w-full bg-gray-900/80 h-14 rounded-2xl overflow-hidden relative border border-gray-700/50 shadow-inner backdrop-blur-sm",children:[pe.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 animate-pulse transition-all duration-1000",style:{width:`${(1-g/_)*100}%`}}),pe.jsxs("span",{className:"absolute inset-0 flex items-center justify-center font-bold text-gray-900 font-mono tracking-wider text-lg drop-shadow-lg",children:["T-",g,"s"]})]}),h==="ready"&&pe.jsx("button",{onClick:V,className:"w-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:to-green-300 py-4 rounded-2xl font-bold text-gray-900 tracking-widest shadow-[0_0_25px_rgba(74,222,128,0.6)] animate-pulse active:scale-95 transition-all border-b-4 border-green-700 font-orbitron text-base",children:"RECUPERAR CARGA"})]}),pe.jsx("button",{onClick:()=>ce(1),disabled:h==="mining",className:`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${h==="mining"?"opacity-30 border-gray-800 cursor-not-allowed":"border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95"}`,children:pe.jsx(da.ArrowRight,{size:20})})]})]})]}),o==="inventory"&&pe.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-4 pt-12 pb-32 overflow-y-auto pointer-events-auto animate-[slideUp_0.4s_ease-out]",children:[pe.jsxs("div",{className:"flex justify-between items-end mb-8 border-b border-white/10 pb-4",children:[pe.jsxs("div",{children:[pe.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron tracking-wider",children:"BODEGA"}),pe.jsxs("p",{className:"text-xs text-gray-500 mt-1 uppercase tracking-widest",children:["Capacidad: ",u.length," items"]})]}),u.length>0&&pe.jsxs("button",{onClick:le,className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-lg border border-red-500/30 active:scale-95 transition-all flex items-center gap-2",children:[pe.jsx(da.Trash,{size:14,className:"inline"})," VENDER TODO"]})]}),ae.length===0?pe.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-gray-600",children:[pe.jsx("div",{className:"text-6xl mb-4 opacity-20",children:"📦"}),pe.jsx("p",{className:"font-bold uppercase tracking-widest",children:"Bodega Vacía"})]}):pe.jsx("div",{className:"grid gap-3",children:ae.map(ge=>pe.jsxs("div",{className:`bg-gray-900/40 border-l-4 ${ge.border} p-4 rounded-r-xl flex flex-col gap-3 relative overflow-hidden group`,children:[pe.jsxs("div",{className:"flex justify-between items-start relative z-10",children:[pe.jsxs("div",{className:"flex gap-4 items-center",children:[pe.jsx("div",{className:"text-4xl bg-black/50 w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 shadow-inner",children:ge.icon}),pe.jsxs("div",{children:[pe.jsx("h3",{className:`font-bold text-lg leading-tight ${ge.style}`,children:ge.name}),pe.jsx("span",{className:"text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-0.5 rounded mt-1 inline-block text-gray-400",children:ge.rarity})]})]}),pe.jsxs("div",{className:"text-right",children:[pe.jsxs("div",{className:"text-xl font-mono text-white font-bold tracking-tight",children:["+",ge.val.toLocaleString(),"₡"]}),pe.jsxs("div",{className:"text-xs text-gray-500 mt-1 font-mono",children:["x",ge.count]})]})]}),pe.jsxs("div",{className:"flex gap-2 mt-2",children:[pe.jsxs("button",{onClick:()=>H(ge),className:"flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors",children:[pe.jsx(da.Coins,{size:14,className:"text-yellow-500"})," Vender 1"]}),pe.jsxs("button",{onClick:()=>H(ge,!0),className:"flex-1 bg-blue-500/10 hover:bg-blue-500/20 py-2 rounded-lg text-xs font-bold text-blue-300 flex items-center justify-center gap-2 border border-blue-500/20 transition-colors",children:[pe.jsx(da.Trash,{size:14})," Vender Todo"]})]})]},ge.name))})]}),o==="shop"&&pe.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-6 pt-12 pb-32 pointer-events-auto animate-[slideUp_0.4s_ease-out] flex flex-col",children:[pe.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron mb-2 text-center tracking-widest",children:"INGENIERÍA"}),pe.jsx("p",{className:"text-center text-gray-500 text-xs uppercase tracking-widest mb-8",children:"Mejoras de Dron & Sistemas"}),pe.jsx("div",{className:"flex-1 flex flex-col items-center justify-center",children:pe.jsxs("div",{className:"w-full max-w-sm bg-gray-900/80 rounded-2xl p-6 border border-white/10",children:[pe.jsxs("div",{className:"flex justify-between items-end mb-4",children:[pe.jsxs("div",{children:[pe.jsxs("h3",{className:"text-lg font-bold text-white font-orbitron",children:["Interceptor MK-",s+1]}),pe.jsx("p",{className:"text-xs text-blue-400 uppercase tracking-widest",children:"Próxima Generación"})]}),pe.jsxs("div",{className:"text-right",children:[pe.jsx("span",{className:"block text-[10px] text-gray-500 uppercase",children:"Costo"}),pe.jsxs("span",{className:`font-mono font-bold text-lg ${t>=s*250?"text-green-400":"text-red-400"}`,children:[(s*250).toLocaleString()," ₡"]})]})]}),pe.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[pe.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[pe.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Velocidad"}),pe.jsx("span",{className:"text-green-400 font-bold text-xl",children:"+5%"})]}),pe.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[pe.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Suerte"}),pe.jsx("span",{className:"text-yellow-400 font-bold text-xl",children:"+2%"})]})]}),pe.jsx("button",{onClick:k,disabled:t<s*250,className:`w-full py-4 rounded-xl font-bold font-orbitron text-lg shadow-lg active:scale-95 transition-all ${t>=s*250?"bg-gradient-to-r from-blue-600 to-blue-500 text-white":"bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700"}`,children:t>=s*250?"INSTALAR MEJORA":"CRÉDITOS INSUFICIENTES"})]})})]})]}),pe.jsx("div",{className:"absolute bottom-6 w-full px-6 z-50 pointer-events-auto",children:pe.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-2xl rounded-full p-2 flex justify-between items-center h-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 relative",children:[pe.jsxs("button",{onClick:()=>e("shop"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${o==="shop"?"text-blue-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[pe.jsx(da.Bolt,{className:"w-6 h-6"}),pe.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"NAVE"})]}),pe.jsx("div",{className:"relative -top-8",children:pe.jsx("button",{onClick:()=>e("home"),className:`w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-black shadow-2xl transition-all duration-300 ${o==="home"?"bg-blue-600 scale-110 shadow-blue-500/50":"bg-gray-800 hover:bg-gray-700"}`,children:pe.jsx(da.Home,{className:"w-8 h-8 text-white"})})}),pe.jsxs("button",{onClick:()=>e("inventory"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${o==="inventory"?"text-yellow-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[pe.jsxs("div",{className:"relative",children:[pe.jsx(da.Bag,{className:"w-6 h-6"}),u.length>0&&pe.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping border border-black"})]}),pe.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"CARGA"})]})]})}),M&&pe.jsx(v3,{item:M,onClose:()=>T(null)})]})}Gb.createRoot(document.getElementById("root")).render(pe.jsx(bt.StrictMode,{children:pe.jsx(_3,{})}));
