(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var Ud={exports:{}},Cl={};var W_;function Ub(){if(W_)return Cl;W_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:u,ref:s!==void 0?s:null,props:l}}return Cl.Fragment=e,Cl.jsx=t,Cl.jsxs=t,Cl}var j_;function Pb(){return j_||(j_=1,Ud.exports=Ub()),Ud.exports}var ee=Pb(),Pd={exports:{}},Mt={};var q_;function Ob(){if(q_)return Mt;q_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function y(I,se,Me){this.props=I,this.context=se,this.refs=S,this.updater=Me||M}y.prototype.isReactComponent={},y.prototype.setState=function(I,se){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,se,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function L(){}L.prototype=y.prototype;function R(I,se,Me){this.props=I,this.context=se,this.refs=S,this.updater=Me||M}var w=R.prototype=new L;w.constructor=R,E(w,y.prototype),w.isPureReactComponent=!0;var U=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function A(I,se,Me){var Ie=Me.ref;return{$$typeof:o,type:I,key:se,ref:Ie!==void 0?Ie:null,props:Me}}function N(I,se){return A(I.type,se,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function K(I){var se={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Me){return se[Me]})}var te=/\/+/g;function ue(I,se){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):se.toString(36)}function fe(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(F,F):(I.status="pending",I.then(function(se){I.status==="pending"&&(I.status="fulfilled",I.value=se)},function(se){I.status==="pending"&&(I.status="rejected",I.reason=se)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,se,Me,Ie,Ye){var re=typeof I;(re==="undefined"||re==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(re){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case o:case e:ve=!0;break;case g:return ve=I._init,B(ve(I._payload),se,Me,Ie,Ye)}}if(ve)return Ye=Ye(I),ve=Ie===""?"."+ue(I,0):Ie,U(Ye)?(Me="",ve!=null&&(Me=ve.replace(te,"$&/")+"/"),B(Ye,se,Me,"",function(We){return We})):Ye!=null&&(G(Ye)&&(Ye=N(Ye,Me+(Ye.key==null||I&&I.key===Ye.key?"":(""+Ye.key).replace(te,"$&/")+"/")+ve)),se.push(Ye)),1;ve=0;var ke=Ie===""?".":Ie+":";if(U(I))for(var Xe=0;Xe<I.length;Xe++)Ie=I[Xe],re=ke+ue(Ie,Xe),ve+=B(Ie,se,Me,re,Ye);else if(Xe=x(I),typeof Xe=="function")for(I=Xe.call(I),Xe=0;!(Ie=I.next()).done;)Ie=Ie.value,re=ke+ue(Ie,Xe++),ve+=B(Ie,se,Me,re,Ye);else if(re==="object"){if(typeof I.then=="function")return B(fe(I),se,Me,Ie,Ye);throw se=String(I),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return ve}function V(I,se,Me){if(I==null)return I;var Ie=[],Ye=0;return B(I,Ie,"","",function(re){return se.call(Me,re,Ye++)}),Ie}function oe(I){if(I._status===-1){var se=I._result;se=se(),se.then(function(Me){(I._status===0||I._status===-1)&&(I._status=1,I._result=Me)},function(Me){(I._status===0||I._status===-1)&&(I._status=2,I._result=Me)}),I._status===-1&&(I._status=0,I._result=se)}if(I._status===1)return I._result.default;throw I._result}var Re=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Ce={map:V,forEach:function(I,se,Me){V(I,function(){se.apply(this,arguments)},Me)},count:function(I){var se=0;return V(I,function(){se++}),se},toArray:function(I){return V(I,function(se){return se})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Mt.Activity=v,Mt.Children=Ce,Mt.Component=y,Mt.Fragment=t,Mt.Profiler=s,Mt.PureComponent=R,Mt.StrictMode=a,Mt.Suspense=h,Mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,Mt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},Mt.cache=function(I){return function(){return I.apply(null,arguments)}},Mt.cacheSignal=function(){return null},Mt.cloneElement=function(I,se,Me){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ie=E({},I.props),Ye=I.key;if(se!=null)for(re in se.key!==void 0&&(Ye=""+se.key),se)!W.call(se,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&se.ref===void 0||(Ie[re]=se[re]);var re=arguments.length-2;if(re===1)Ie.children=Me;else if(1<re){for(var ve=Array(re),ke=0;ke<re;ke++)ve[ke]=arguments[ke+2];Ie.children=ve}return A(I.type,Ye,Ie)},Mt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},Mt.createElement=function(I,se,Me){var Ie,Ye={},re=null;if(se!=null)for(Ie in se.key!==void 0&&(re=""+se.key),se)W.call(se,Ie)&&Ie!=="key"&&Ie!=="__self"&&Ie!=="__source"&&(Ye[Ie]=se[Ie]);var ve=arguments.length-2;if(ve===1)Ye.children=Me;else if(1<ve){for(var ke=Array(ve),Xe=0;Xe<ve;Xe++)ke[Xe]=arguments[Xe+2];Ye.children=ke}if(I&&I.defaultProps)for(Ie in ve=I.defaultProps,ve)Ye[Ie]===void 0&&(Ye[Ie]=ve[Ie]);return A(I,re,Ye)},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(I){return{$$typeof:f,render:I}},Mt.isValidElement=G,Mt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:oe}},Mt.memo=function(I,se){return{$$typeof:d,type:I,compare:se===void 0?null:se}},Mt.startTransition=function(I){var se=O.T,Me={};O.T=Me;try{var Ie=I(),Ye=O.S;Ye!==null&&Ye(Me,Ie),typeof Ie=="object"&&Ie!==null&&typeof Ie.then=="function"&&Ie.then(F,Re)}catch(re){Re(re)}finally{se!==null&&Me.types!==null&&(se.types=Me.types),O.T=se}},Mt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},Mt.use=function(I){return O.H.use(I)},Mt.useActionState=function(I,se,Me){return O.H.useActionState(I,se,Me)},Mt.useCallback=function(I,se){return O.H.useCallback(I,se)},Mt.useContext=function(I){return O.H.useContext(I)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(I,se){return O.H.useDeferredValue(I,se)},Mt.useEffect=function(I,se){return O.H.useEffect(I,se)},Mt.useEffectEvent=function(I){return O.H.useEffectEvent(I)},Mt.useId=function(){return O.H.useId()},Mt.useImperativeHandle=function(I,se,Me){return O.H.useImperativeHandle(I,se,Me)},Mt.useInsertionEffect=function(I,se){return O.H.useInsertionEffect(I,se)},Mt.useLayoutEffect=function(I,se){return O.H.useLayoutEffect(I,se)},Mt.useMemo=function(I,se){return O.H.useMemo(I,se)},Mt.useOptimistic=function(I,se){return O.H.useOptimistic(I,se)},Mt.useReducer=function(I,se,Me){return O.H.useReducer(I,se,Me)},Mt.useRef=function(I){return O.H.useRef(I)},Mt.useState=function(I){return O.H.useState(I)},Mt.useSyncExternalStore=function(I,se,Me){return O.H.useSyncExternalStore(I,se,Me)},Mt.useTransition=function(){return O.H.useTransition()},Mt.version="19.2.3",Mt}var Y_;function Nm(){return Y_||(Y_=1,Pd.exports=Ob()),Pd.exports}var xt=Nm(),Od={exports:{}},Dl={},Id={exports:{}},zd={};var Z_;function Ib(){return Z_||(Z_=1,(function(o){function e(B,V){var oe=B.length;B.push(V);e:for(;0<oe;){var Re=oe-1>>>1,Ce=B[Re];if(0<s(Ce,V))B[Re]=V,B[oe]=Ce,oe=Re;else break e}}function t(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var V=B[0],oe=B.pop();if(oe!==V){B[0]=oe;e:for(var Re=0,Ce=B.length,I=Ce>>>1;Re<I;){var se=2*(Re+1)-1,Me=B[se],Ie=se+1,Ye=B[Ie];if(0>s(Me,oe))Ie<Ce&&0>s(Ye,Me)?(B[Re]=Ye,B[Ie]=oe,Re=Ie):(B[Re]=Me,B[se]=oe,Re=se);else if(Ie<Ce&&0>s(Ye,oe))B[Re]=Ye,B[Ie]=oe,Re=Ie;else break e}}return V}function s(B,V){var oe=B.sortIndex-V.sortIndex;return oe!==0?oe:B.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var h=[],d=[],g=1,v=null,_=3,x=!1,M=!1,E=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var V=t(d);V!==null;){if(V.callback===null)a(d);else if(V.startTime<=B)a(d),V.sortIndex=V.expirationTime,e(h,V);else break;V=t(d)}}function U(B){if(E=!1,w(B),!M)if(t(h)!==null)M=!0,F||(F=!0,K());else{var V=t(d);V!==null&&fe(U,V.startTime-B)}}var F=!1,O=-1,W=5,A=-1;function N(){return S?!0:!(o.unstable_now()-A<W)}function G(){if(S=!1,F){var B=o.unstable_now();A=B;var V=!0;try{e:{M=!1,E&&(E=!1,L(O),O=-1),x=!0;var oe=_;try{t:{for(w(B),v=t(h);v!==null&&!(v.expirationTime>B&&N());){var Re=v.callback;if(typeof Re=="function"){v.callback=null,_=v.priorityLevel;var Ce=Re(v.expirationTime<=B);if(B=o.unstable_now(),typeof Ce=="function"){v.callback=Ce,w(B),V=!0;break t}v===t(h)&&a(h),w(B)}else a(h);v=t(h)}if(v!==null)V=!0;else{var I=t(d);I!==null&&fe(U,I.startTime-B),V=!1}}break e}finally{v=null,_=oe,x=!1}V=void 0}}finally{V?K():F=!1}}}var K;if(typeof R=="function")K=function(){R(G)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ue=te.port2;te.port1.onmessage=G,K=function(){ue.postMessage(null)}}else K=function(){y(G,0)};function fe(B,V){O=y(function(){B(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var oe=_;_=V;try{return B()}finally{_=oe}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=_;_=B;try{return V()}finally{_=oe}},o.unstable_scheduleCallback=function(B,V,oe){var Re=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Re+oe:Re):oe=Re,B){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=oe+Ce,B={id:g++,callback:V,priorityLevel:B,startTime:oe,expirationTime:Ce,sortIndex:-1},oe>Re?(B.sortIndex=oe,e(d,B),t(h)===null&&B===t(d)&&(E?(L(O),O=-1):E=!0,fe(U,oe-Re))):(B.sortIndex=Ce,e(h,B),M||x||(M=!0,F||(F=!0,K()))),B},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(B){var V=_;return function(){var oe=_;_=V;try{return B.apply(this,arguments)}finally{_=oe}}}})(zd)),zd}var K_;function zb(){return K_||(K_=1,Id.exports=Ib()),Id.exports}var Fd={exports:{}},ei={};var J_;function Fb(){if(J_)return ei;J_=1;var o=Nm();function e(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:h,containerInfo:d,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ei.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ei.createPortal=function(h,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(h,d,null,g)},ei.flushSync=function(h){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=d,a.p=g,a.d.f()}},ei.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(h,d))},ei.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},ei.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ei.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(h)},ei.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);a.d.L(h,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ei.preloadModule=function(h,d){if(typeof h=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(h)},ei.requestFormReset=function(h){a.d.r(h)},ei.unstable_batchedUpdates=function(h,d){return h(d)},ei.useFormState=function(h,d,g){return u.H.useFormState(h,d,g)},ei.useFormStatus=function(){return u.H.useHostTransitionStatus()},ei.version="19.2.3",ei}var Q_;function Bb(){if(Q_)return Fd.exports;Q_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Fd.exports=Fb(),Fd.exports}var $_;function Hb(){if($_)return Dl;$_=1;var o=zb(),e=Nm(),t=Bb();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,r=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(r=i.return),n=i.return;while(n)}return i.tag===3?r:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(a(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var r=n,c=i;;){var p=r.return;if(p===null)break;var m=p.alternate;if(m===null){if(c=p.return,c!==null){r=c;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===r)return h(p),n;if(m===c)return h(p),i;m=m.sibling}throw Error(a(188))}if(r.return!==c.return)r=p,c=m;else{for(var b=!1,C=p.child;C;){if(C===r){b=!0,r=p,c=m;break}if(C===c){b=!0,c=p,r=m;break}C=C.sibling}if(!b){for(C=m.child;C;){if(C===r){b=!0,r=m,c=p;break}if(C===c){b=!0,c=m,r=p;break}C=C.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==c)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),R=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var te=Symbol.for("react.client.reference");function ue(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===te?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case U:return"Suspense";case F:return"SuspenseList";case A:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case M:return"Portal";case R:return n.displayName||"Context";case L:return(n._context.displayName||"Context")+".Consumer";case w:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return i=n.displayName||null,i!==null?i:ue(n.type)||"Memo";case W:i=n._payload,n=n._init;try{return ue(n(i))}catch{}}return null}var fe=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Re=[],Ce=-1;function I(n){return{current:n}}function se(n){0>Ce||(n.current=Re[Ce],Re[Ce]=null,Ce--)}function Me(n,i){Ce++,Re[Ce]=n.current,n.current=i}var Ie=I(null),Ye=I(null),re=I(null),ve=I(null);function ke(n,i){switch(Me(re,i),Me(Ye,n),Me(Ie,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?p_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=p_(i),n=m_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}se(Ie),Me(Ie,n)}function Xe(){se(Ie),se(Ye),se(re)}function We(n){n.memoizedState!==null&&Me(ve,n);var i=Ie.current,r=m_(i,n.type);i!==r&&(Me(Ye,n),Me(Ie,r))}function vt(n){Ye.current===n&&(se(Ie),se(Ye)),ve.current===n&&(se(ve),El._currentValue=oe)}var St,pe;function ie(n){if(St===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);St=i&&i[1]||"",pe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+n+pe}var xe=!1;function Ee(n,i){if(!n||xe)return"";xe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var De=function(){throw Error()};if(Object.defineProperty(De.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(De,[])}catch(Se){var de=Se}Reflect.construct(n,[],De)}else{try{De.call()}catch(Se){de=Se}n.call(De.prototype)}}else{try{throw Error()}catch(Se){de=Se}(De=n())&&typeof De.catch=="function"&&De.catch(function(){})}}catch(Se){if(Se&&de&&typeof Se.stack=="string")return[Se.stack,de.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],C=m[1];if(b&&C){var k=b.split(`
`),ce=C.split(`
`);for(p=c=0;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;for(;p<ce.length&&!ce[p].includes("DetermineComponentFrameRoot");)p++;if(c===k.length||p===ce.length)for(c=k.length-1,p=ce.length-1;1<=c&&0<=p&&k[c]!==ce[p];)p--;for(;1<=c&&0<=p;c--,p--)if(k[c]!==ce[p]){if(c!==1||p!==1)do if(c--,p--,0>p||k[c]!==ce[p]){var Te=`
`+k[c].replace(" at new "," at ");return n.displayName&&Te.includes("<anonymous>")&&(Te=Te.replace("<anonymous>",n.displayName)),Te}while(1<=c&&0<=p);break}}}finally{xe=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?ie(r):""}function Pe(n,i){switch(n.tag){case 26:case 27:case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return n.child!==i&&i!==null?ie("Suspense Fallback"):ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return Ee(n.type,!1);case 11:return Ee(n.type.render,!1);case 1:return Ee(n.type,!0);case 31:return ie("Activity");default:return""}}function z(n){try{var i="",r=null;do i+=Pe(n,r),r=n,n=n.return;while(n);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var tt=Object.prototype.hasOwnProperty,qe=o.unstable_scheduleCallback,at=o.unstable_cancelCallback,Oe=o.unstable_shouldYield,P=o.unstable_requestPaint,T=o.unstable_now,j=o.unstable_getCurrentPriorityLevel,ye=o.unstable_ImmediatePriority,me=o.unstable_UserBlockingPriority,Z=o.unstable_NormalPriority,q=o.unstable_LowPriority,ae=o.unstable_IdlePriority,be=o.log,Ke=o.unstable_setDisableYieldValue,ge=null,J=null;function Le(n){if(typeof be=="function"&&Ke(n),J&&typeof J.setStrictMode=="function")try{J.setStrictMode(ge,n)}catch{}}var He=Math.clz32?Math.clz32:X,Ge=Math.log,je=Math.LN2;function X(n){return n>>>=0,n===0?32:31-(Ge(n)/je|0)|0}var ze=256,Ne=262144,Ve=4194304;function Ue(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ae(n,i,r){var c=n.pendingLanes;if(c===0)return 0;var p=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var C=c&134217727;return C!==0?(c=C&~m,c!==0?p=Ue(c):(b&=C,b!==0?p=Ue(b):r||(r=C&~n,r!==0&&(p=Ue(r))))):(C=c&~m,C!==0?p=Ue(C):b!==0?p=Ue(b):r||(r=c&~n,r!==0&&(p=Ue(r)))),p===0?0:i!==0&&i!==p&&(i&m)===0&&(m=p&-p,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:p}function Be(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function ht(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(){var n=Ve;return Ve<<=1,(Ve&62914560)===0&&(Ve=4194304),n}function Lt(n){for(var i=[],r=0;31>r;r++)i.push(n);return i}function Qt(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function jt(n,i,r,c,p,m){var b=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var C=n.entanglements,k=n.expirationTimes,ce=n.hiddenUpdates;for(r=b&~r;0<r;){var Te=31-He(r),De=1<<Te;C[Te]=0,k[Te]=-1;var de=ce[Te];if(de!==null)for(ce[Te]=null,Te=0;Te<de.length;Te++){var Se=de[Te];Se!==null&&(Se.lane&=-536870913)}r&=~De}c!==0&&ai(n,c,0),m!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~i))}function ai(n,i,r){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-He(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|r&261930}function Ze(n,i){var r=n.entangledLanes|=i;for(n=n.entanglements;r;){var c=31-He(r),p=1<<c;p&i|n[c]&i&&(n[c]|=i),r&=~p}}function st(n,i){var r=i&-i;return r=(r&42)!==0?1:bt(r),(r&(n.suspendedLanes|i))!==0?0:r}function bt(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ut(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Dt(){var n=V.p;return n!==0?n:(n=window.event,n===void 0?32:F_(n.type))}function cn(n,i){var r=V.p;try{return V.p=n,i()}finally{V.p=r}}var gn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+gn,vn="__reactProps$"+gn,kn="__reactContainer$"+gn,ca="__reactEvents$"+gn,Ui="__reactListeners$"+gn,si="__reactHandles$"+gn,Ea="__reactResources$"+gn,Aa="__reactMarker$"+gn;function Hs(n){delete n[Pt],delete n[vn],delete n[ca],delete n[Ui],delete n[si]}function is(n){var i=n[Pt];if(i)return i;for(var r=n.parentNode;r;){if(i=r[kn]||r[Pt]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(n=M_(n);n!==null;){if(r=n[Pt])return r;n=M_(n)}return i}n=r,r=n.parentNode}return null}function as(n){if(n=n[Pt]||n[kn]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function Gs(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function ss(n){var i=n[Ea];return i||(i=n[Ea]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function D(n){n[Aa]=!0}var Q=new Set,_e={};function he(n,i){ne(n,i),ne(n+"Capture",i)}function ne(n,i){for(_e[n]=i,n=0;n<i.length;n++)Q.add(i[n])}var Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},Qe={};function nt(n){return tt.call(Qe,n)?!0:tt.call(et,n)?!1:Je.test(n)?Qe[n]=!0:(et[n]=!0,!1)}function rt(n,i,r){if(nt(i))if(r===null)n.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+r)}}function pt(n,i,r){if(r===null)n.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+r)}}function ot(n,i,r,c){if(c===null)n.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(i,r,""+c)}}function mt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _n(n,i,r){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,m=c.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:c.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function fn(n){if(!n._valueTracker){var i=qt(n)?"checked":"value";n._valueTracker=_n(n,i,""+n[i])}}function Kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var r=i.getValue(),c="";return n&&(c=qt(n)?n.checked?"true":"false":n.value),n=c,n!==r?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Yt=/[\n"\\]/g;function yt(n){return n.replace(Yt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xn(n,i,r,c,p,m,b,C){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),i!=null?b==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+mt(i)):n.value!==""+mt(i)&&(n.value=""+mt(i)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),i!=null?Wn(n,b,mt(i)):r!=null?Wn(n,b,mt(r)):c!=null&&n.removeAttribute("value"),p==null&&m!=null&&(n.defaultChecked=!!m),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?n.name=""+mt(C):n.removeAttribute("name")}function wa(n,i,r,c,p,m,b,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){fn(n);return}r=r!=null?""+mt(r):"",i=i!=null?""+mt(i):r,C||i===n.value||(n.value=i),n.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=C?n.checked:!!c,n.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),fn(n)}function Wn(n,i,r){i==="number"&&ut(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function Pi(n,i,r,c){if(n=n.options,i){i={};for(var p=0;p<r.length;p++)i["$"+r[p]]=!0;for(r=0;r<n.length;r++)p=i.hasOwnProperty("$"+n[r].value),n[r].selected!==p&&(n[r].selected=p),p&&c&&(n[r].defaultSelected=!0)}else{for(r=""+mt(r),i=null,p=0;p<n.length;p++){if(n[p].value===r){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function $t(n,i,r){if(i!=null&&(i=""+mt(i),i!==n.value&&(n.value=i),r==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=r!=null?""+mt(r):""}function jn(n,i,r,c){if(i==null){if(c!=null){if(r!=null)throw Error(a(92));if(fe(c)){if(1<c.length)throw Error(a(93));c=c[0]}r=c}r==null&&(r=""),i=r}r=mt(i),n.defaultValue=r,c=n.textContent,c===r&&c!==""&&c!==null&&(n.value=c),fn(n)}function Nn(n,i){if(i){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=i;return}}n.textContent=i}var qn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yn(n,i,r){var c=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,r):typeof r!="number"||r===0||qn.has(i)?i==="float"?n.cssFloat=r:n[i]=(""+r).trim():n[i]=r+"px"}function Tr(n,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&r[p]!==c&&Yn(n,p,c)}else for(var m in i)i.hasOwnProperty(m)&&Yn(n,m,i[m])}function Ki(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),DS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gc(n){return DS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ra(){}var Df=null;function Nf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Er=null,Ar=null;function d0(n){var i=as(n);if(i&&(n=i.stateNode)){var r=n[vn]||null;e:switch(n=i.stateNode,i.type){case"input":if(Xn(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+yt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var c=r[i];if(c!==n&&c.form===n.form){var p=c[vn]||null;if(!p)throw Error(a(90));Xn(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<r.length;i++)c=r[i],c.form===n.form&&Kt(c)}break e;case"textarea":$t(n,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Pi(n,!!r.multiple,i,!1)}}}var Lf=!1;function p0(n,i,r){if(Lf)return n(i,r);Lf=!0;try{var c=n(i);return c}finally{if(Lf=!1,(Er!==null||Ar!==null)&&(iu(),Er&&(i=Er,n=Ar,Ar=Er=null,d0(i),n)))for(i=0;i<n.length;i++)d0(n[i])}}function Vo(n,i){var r=n.stateNode;if(r===null)return null;var c=r[vn]||null;if(c===null)return null;r=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(Ca)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{Uf=!1}var rs=null,Pf=null,vc=null;function m0(){if(vc)return vc;var n,i=Pf,r=i.length,c,p="value"in rs?rs.value:rs.textContent,m=p.length;for(n=0;n<r&&i[n]===p[n];n++);var b=r-n;for(c=1;c<=b&&i[r-c]===p[m-c];c++);return vc=p.slice(n,1<c?1-c:void 0)}function _c(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xc(){return!0}function g0(){return!1}function fi(n){function i(r,c,p,m,b){this._reactName=r,this._targetInst=p,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(r=n[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xc:g0,this.isPropagationStopped=g0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),i}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=fi(Vs),Xo=v({},Vs,{view:0,detail:0}),NS=fi(Xo),Of,If,Wo,Sc=v({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wo&&(Wo&&n.type==="mousemove"?(Of=n.screenX-Wo.screenX,If=n.screenY-Wo.screenY):If=Of=0,Wo=n),Of)},movementY:function(n){return"movementY"in n?n.movementY:If}}),v0=fi(Sc),LS=v({},Sc,{dataTransfer:0}),US=fi(LS),PS=v({},Xo,{relatedTarget:0}),zf=fi(PS),OS=v({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),IS=fi(OS),zS=v({},Vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),FS=fi(zS),BS=v({},Vs,{data:0}),_0=fi(BS),HS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=VS[n])?!!i[n]:!1}function Ff(){return kS}var XS=v({},Xo,{key:function(n){if(n.key){var i=HS[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_c(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?GS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(n){return n.type==="keypress"?_c(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_c(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),WS=fi(XS),jS=v({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=fi(jS),qS=v({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),YS=fi(qS),ZS=v({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=fi(ZS),JS=v({},Sc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),QS=fi(JS),$S=v({},Vs,{newState:0,oldState:0}),eM=fi($S),tM=[9,13,27,32],Bf=Ca&&"CompositionEvent"in window,jo=null;Ca&&"documentMode"in document&&(jo=document.documentMode);var nM=Ca&&"TextEvent"in window&&!jo,y0=Ca&&(!Bf||jo&&8<jo&&11>=jo),S0=" ",M0=!1;function b0(n,i){switch(n){case"keyup":return tM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var wr=!1;function iM(n,i){switch(n){case"compositionend":return T0(i);case"keypress":return i.which!==32?null:(M0=!0,S0);case"textInput":return n=i.data,n===S0&&M0?null:n;default:return null}}function aM(n,i){if(wr)return n==="compositionend"||!Bf&&b0(n,i)?(n=m0(),vc=Pf=rs=null,wr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y0&&i.locale!=="ko"?null:i.data;default:return null}}var sM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E0(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!sM[n.type]:i==="textarea"}function A0(n,i,r,c){Er?Ar?Ar.push(c):Ar=[c]:Er=c,i=uu(i,"onChange"),0<i.length&&(r=new yc("onChange","change",null,r,c),n.push({event:r,listeners:i}))}var qo=null,Yo=null;function rM(n){l_(n,0)}function Mc(n){var i=Gs(n);if(Kt(i))return n}function w0(n,i){if(n==="change")return i}var R0=!1;if(Ca){var Hf;if(Ca){var Gf="oninput"in document;if(!Gf){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),Gf=typeof C0.oninput=="function"}Hf=Gf}else Hf=!1;R0=Hf&&(!document.documentMode||9<document.documentMode)}function D0(){qo&&(qo.detachEvent("onpropertychange",N0),Yo=qo=null)}function N0(n){if(n.propertyName==="value"&&Mc(Yo)){var i=[];A0(i,Yo,n,Nf(n)),p0(rM,i)}}function oM(n,i,r){n==="focusin"?(D0(),qo=i,Yo=r,qo.attachEvent("onpropertychange",N0)):n==="focusout"&&D0()}function lM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Mc(Yo)}function cM(n,i){if(n==="click")return Mc(i)}function uM(n,i){if(n==="input"||n==="change")return Mc(i)}function fM(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Si=typeof Object.is=="function"?Object.is:fM;function Zo(n,i){if(Si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var r=Object.keys(n),c=Object.keys(i);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var p=r[c];if(!tt.call(i,p)||!Si(n[p],i[p]))return!1}return!0}function L0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function U0(n,i){var r=L0(n);n=0;for(var c;r;){if(r.nodeType===3){if(c=n+r.textContent.length,n<=i&&c>=i)return{node:r,offset:i-n};n=c}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=L0(r)}}function P0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?P0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function O0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=ut(n.document);i instanceof n.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)n=i.contentWindow;else break;i=ut(n.document)}return i}function Vf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var hM=Ca&&"documentMode"in document&&11>=document.documentMode,Rr=null,kf=null,Ko=null,Xf=!1;function I0(n,i,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xf||Rr==null||Rr!==ut(c)||(c=Rr,"selectionStart"in c&&Vf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ko&&Zo(Ko,c)||(Ko=c,c=uu(kf,"onSelect"),0<c.length&&(i=new yc("onSelect","select",null,i,r),n.push({event:i,listeners:c}),i.target=Rr)))}function ks(n,i){var r={};return r[n.toLowerCase()]=i.toLowerCase(),r["Webkit"+n]="webkit"+i,r["Moz"+n]="moz"+i,r}var Cr={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionrun:ks("Transition","TransitionRun"),transitionstart:ks("Transition","TransitionStart"),transitioncancel:ks("Transition","TransitionCancel"),transitionend:ks("Transition","TransitionEnd")},Wf={},z0={};Ca&&(z0=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Xs(n){if(Wf[n])return Wf[n];if(!Cr[n])return n;var i=Cr[n],r;for(r in i)if(i.hasOwnProperty(r)&&r in z0)return Wf[n]=i[r];return n}var F0=Xs("animationend"),B0=Xs("animationiteration"),H0=Xs("animationstart"),dM=Xs("transitionrun"),pM=Xs("transitionstart"),mM=Xs("transitioncancel"),G0=Xs("transitionend"),V0=new Map,jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jf.push("scrollEnd");function Ji(n,i){V0.set(n,i),he(i,[n])}var bc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Oi=[],Dr=0,qf=0;function Tc(){for(var n=Dr,i=qf=Dr=0;i<n;){var r=Oi[i];Oi[i++]=null;var c=Oi[i];Oi[i++]=null;var p=Oi[i];Oi[i++]=null;var m=Oi[i];if(Oi[i++]=null,c!==null&&p!==null){var b=c.pending;b===null?p.next=p:(p.next=b.next,b.next=p),c.pending=p}m!==0&&k0(r,p,m)}}function Ec(n,i,r,c){Oi[Dr++]=n,Oi[Dr++]=i,Oi[Dr++]=r,Oi[Dr++]=c,qf|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Yf(n,i,r,c){return Ec(n,i,r,c),Ac(n)}function Ws(n,i){return Ec(n,null,null,i),Ac(n)}function k0(n,i,r){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r);for(var p=!1,m=n.return;m!==null;)m.childLanes|=r,c=m.alternate,c!==null&&(c.childLanes|=r),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(p=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,p&&i!==null&&(p=31-He(r),n=m.hiddenUpdates,c=n[p],c===null?n[p]=[i]:c.push(i),i.lane=r|536870912),m):null}function Ac(n){if(50<_l)throw _l=0,id=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Nr={};function gM(n,i,r,c){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(n,i,r,c){return new gM(n,i,r,c)}function Zf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Da(n,i){var r=n.alternate;return r===null?(r=Mi(n.tag,i,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=i,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&65011712,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,i=n.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function X0(n,i){n.flags&=65011714;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,i=r.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function wc(n,i,r,c,p,m){var b=0;if(c=n,typeof n=="function")Zf(n)&&(b=1);else if(typeof n=="string")b=Sb(n,r,Ie.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case A:return n=Mi(31,r,i,p),n.elementType=A,n.lanes=m,n;case E:return js(r.children,p,m,i);case S:b=8,p|=24;break;case y:return n=Mi(12,r,i,p|2),n.elementType=y,n.lanes=m,n;case U:return n=Mi(13,r,i,p),n.elementType=U,n.lanes=m,n;case F:return n=Mi(19,r,i,p),n.elementType=F,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:b=10;break e;case L:b=9;break e;case w:b=11;break e;case O:b=14;break e;case W:b=16,c=null;break e}b=29,r=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=Mi(b,r,i,p),i.elementType=n,i.type=c,i.lanes=m,i}function js(n,i,r,c){return n=Mi(7,n,c,i),n.lanes=r,n}function Kf(n,i,r){return n=Mi(6,n,null,i),n.lanes=r,n}function W0(n){var i=Mi(18,null,null,0);return i.stateNode=n,i}function Jf(n,i,r){return i=Mi(4,n.children!==null?n.children:[],n.key,i),i.lanes=r,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var j0=new WeakMap;function Ii(n,i){if(typeof n=="object"&&n!==null){var r=j0.get(n);return r!==void 0?r:(i={value:n,source:i,stack:z(i)},j0.set(n,i),i)}return{value:n,source:i,stack:z(i)}}var Lr=[],Ur=0,Rc=null,Jo=0,zi=[],Fi=0,os=null,ua=1,fa="";function Na(n,i){Lr[Ur++]=Jo,Lr[Ur++]=Rc,Rc=n,Jo=i}function q0(n,i,r){zi[Fi++]=ua,zi[Fi++]=fa,zi[Fi++]=os,os=n;var c=ua;n=fa;var p=32-He(c)-1;c&=~(1<<p),r+=1;var m=32-He(i)+p;if(30<m){var b=p-p%5;m=(c&(1<<b)-1).toString(32),c>>=b,p-=b,ua=1<<32-He(i)+p|r<<p|c,fa=m+n}else ua=1<<m|r<<p|c,fa=n}function Qf(n){n.return!==null&&(Na(n,1),q0(n,1,0))}function $f(n){for(;n===Rc;)Rc=Lr[--Ur],Lr[Ur]=null,Jo=Lr[--Ur],Lr[Ur]=null;for(;n===os;)os=zi[--Fi],zi[Fi]=null,fa=zi[--Fi],zi[Fi]=null,ua=zi[--Fi],zi[Fi]=null}function Y0(n,i){zi[Fi++]=ua,zi[Fi++]=fa,zi[Fi++]=os,ua=i.id,fa=i.overflow,os=n}var Zn=null,hn=null,Vt=!1,ls=null,Bi=!1,eh=Error(a(519));function cs(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qo(Ii(i,n)),eh}function Z0(n){var i=n.stateNode,r=n.type,c=n.memoizedProps;switch(i[Pt]=n,i[vn]=c,r){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(r=0;r<yl.length;r++)It(yl[r],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":It("invalid",i),wa(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":It("invalid",i);break;case"textarea":It("invalid",i),jn(i,c.value,c.defaultValue,c.children)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||c.suppressHydrationWarning===!0||h_(i.textContent,r)?(c.popover!=null&&(It("beforetoggle",i),It("toggle",i)),c.onScroll!=null&&It("scroll",i),c.onScrollEnd!=null&&It("scrollend",i),c.onClick!=null&&(i.onclick=Ra),i=!0):i=!1,i||cs(n,!0)}function K0(n){for(Zn=n.return;Zn;)switch(Zn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Zn=Zn.return}}function Pr(n){if(n!==Zn)return!1;if(!Vt)return K0(n),Vt=!0,!1;var i=n.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||_d(n.type,n.memoizedProps)),r=!r),r&&hn&&cs(n),K0(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));hn=S_(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));hn=S_(n)}else i===27?(i=hn,bs(n.type)?(n=bd,bd=null,hn=n):hn=i):hn=Zn?Gi(n.stateNode.nextSibling):null;return!0}function qs(){hn=Zn=null,Vt=!1}function th(){var n=ls;return n!==null&&(mi===null?mi=n:mi.push.apply(mi,n),ls=null),n}function Qo(n){ls===null?ls=[n]:ls.push(n)}var nh=I(null),Ys=null,La=null;function us(n,i,r){Me(nh,i._currentValue),i._currentValue=r}function Ua(n){n._currentValue=nh.current,se(nh)}function ih(n,i,r){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===r)break;n=n.return}}function ah(n,i,r,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var m=p.dependencies;if(m!==null){var b=p.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=p;for(var k=0;k<i.length;k++)if(C.context===i[k]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),ih(m.return,r,n),c||(b=null);break e}m=C.next}}else if(p.tag===18){if(b=p.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),ih(b,r,n),b=null}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}}function Or(n,i,r,c){n=null;for(var p=i,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var b=p.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var C=p.type;Si(p.pendingProps.value,b.value)||(n!==null?n.push(C):n=[C])}}else if(p===ve.current){if(b=p.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(El):n=[El])}p=p.return}n!==null&&ah(i,n,r,c),i.flags|=262144}function Cc(n){for(n=n.firstContext;n!==null;){if(!Si(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Zs(n){Ys=n,La=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Kn(n){return J0(Ys,n)}function Dc(n,i){return Ys===null&&Zs(n),J0(n,i)}function J0(n,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},La===null){if(n===null)throw Error(a(308));La=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else La=La.next=i;return r}var vM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(r,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(r){return r()})}},_M=o.unstable_scheduleCallback,xM=o.unstable_NormalPriority,An={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new vM,data:new Map,refCount:0}}function $o(n){n.refCount--,n.refCount===0&&_M(xM,function(){n.controller.abort()})}var el=null,rh=0,Ir=0,zr=null;function yM(n,i){if(el===null){var r=el=[];rh=0,Ir=cd(),zr={status:"pending",value:void 0,then:function(c){r.push(c)}}}return rh++,i.then(Q0,Q0),i}function Q0(){if(--rh===0&&el!==null){zr!==null&&(zr.status="fulfilled");var n=el;el=null,Ir=0,zr=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function SM(n,i){var r=[],c={status:"pending",value:null,reason:null,then:function(p){r.push(p)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<r.length;p++)(0,r[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<r.length;p++)(0,r[p])(void 0)}),c}var $0=B.S;B.S=function(n,i){Iv=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&yM(n,i),$0!==null&&$0(n,i)};var Ks=I(null);function oh(){var n=Ks.current;return n!==null?n:un.pooledCache}function Nc(n,i){i===null?Me(Ks,Ks.current):Me(Ks,i.pool)}function eg(){var n=oh();return n===null?null:{parent:An._currentValue,pool:n}}var Fr=Error(a(460)),lh=Error(a(474)),Lc=Error(a(542)),Uc={then:function(){}};function tg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ng(n,i,r){switch(r=n[r],r===void 0?n.push(i):r!==i&&(i.then(Ra,Ra),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,ag(n),n;default:if(typeof i.status=="string")i.then(Ra,Ra);else{if(n=un,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,ag(n),n}throw Qs=i,Fr}}function Js(n){try{var i=n._init;return i(n._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Qs=r,Fr):r}}var Qs=null;function ig(){if(Qs===null)throw Error(a(459));var n=Qs;return Qs=null,n}function ag(n){if(n===Fr||n===Lc)throw Error(a(483))}var Br=null,tl=0;function Pc(n){var i=tl;return tl+=1,Br===null&&(Br=[]),ng(Br,n,i)}function nl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Oc(n,i){throw i.$$typeof===_?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function sg(n){function i($,Y){if(n){var le=$.deletions;le===null?($.deletions=[Y],$.flags|=16):le.push(Y)}}function r($,Y){if(!n)return null;for(;Y!==null;)i($,Y),Y=Y.sibling;return null}function c($){for(var Y=new Map;$!==null;)$.key!==null?Y.set($.key,$):Y.set($.index,$),$=$.sibling;return Y}function p($,Y){return $=Da($,Y),$.index=0,$.sibling=null,$}function m($,Y,le){return $.index=le,n?(le=$.alternate,le!==null?(le=le.index,le<Y?($.flags|=67108866,Y):le):($.flags|=67108866,Y)):($.flags|=1048576,Y)}function b($){return n&&$.alternate===null&&($.flags|=67108866),$}function C($,Y,le,we){return Y===null||Y.tag!==6?(Y=Kf(le,$.mode,we),Y.return=$,Y):(Y=p(Y,le),Y.return=$,Y)}function k($,Y,le,we){var dt=le.type;return dt===E?Te($,Y,le.props.children,we,le.key):Y!==null&&(Y.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===W&&Js(dt)===Y.type)?(Y=p(Y,le.props),nl(Y,le),Y.return=$,Y):(Y=wc(le.type,le.key,le.props,null,$.mode,we),nl(Y,le),Y.return=$,Y)}function ce($,Y,le,we){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==le.containerInfo||Y.stateNode.implementation!==le.implementation?(Y=Jf(le,$.mode,we),Y.return=$,Y):(Y=p(Y,le.children||[]),Y.return=$,Y)}function Te($,Y,le,we,dt){return Y===null||Y.tag!==7?(Y=js(le,$.mode,we,dt),Y.return=$,Y):(Y=p(Y,le),Y.return=$,Y)}function De($,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Kf(""+Y,$.mode,le),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case x:return le=wc(Y.type,Y.key,Y.props,null,$.mode,le),nl(le,Y),le.return=$,le;case M:return Y=Jf(Y,$.mode,le),Y.return=$,Y;case W:return Y=Js(Y),De($,Y,le)}if(fe(Y)||K(Y))return Y=js(Y,$.mode,le,null),Y.return=$,Y;if(typeof Y.then=="function")return De($,Pc(Y),le);if(Y.$$typeof===R)return De($,Dc($,Y),le);Oc($,Y)}return null}function de($,Y,le,we){var dt=Y!==null?Y.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return dt!==null?null:C($,Y,""+le,we);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case x:return le.key===dt?k($,Y,le,we):null;case M:return le.key===dt?ce($,Y,le,we):null;case W:return le=Js(le),de($,Y,le,we)}if(fe(le)||K(le))return dt!==null?null:Te($,Y,le,we,null);if(typeof le.then=="function")return de($,Y,Pc(le),we);if(le.$$typeof===R)return de($,Y,Dc($,le),we);Oc($,le)}return null}function Se($,Y,le,we,dt){if(typeof we=="string"&&we!==""||typeof we=="number"||typeof we=="bigint")return $=$.get(le)||null,C(Y,$,""+we,dt);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case x:return $=$.get(we.key===null?le:we.key)||null,k(Y,$,we,dt);case M:return $=$.get(we.key===null?le:we.key)||null,ce(Y,$,we,dt);case W:return we=Js(we),Se($,Y,le,we,dt)}if(fe(we)||K(we))return $=$.get(le)||null,Te(Y,$,we,dt,null);if(typeof we.then=="function")return Se($,Y,le,Pc(we),dt);if(we.$$typeof===R)return Se($,Y,le,Dc(Y,we),dt);Oc(Y,we)}return null}function it($,Y,le,we){for(var dt=null,kt=null,lt=Y,wt=Y=0,Ht=null;lt!==null&&wt<le.length;wt++){lt.index>wt?(Ht=lt,lt=null):Ht=lt.sibling;var Xt=de($,lt,le[wt],we);if(Xt===null){lt===null&&(lt=Ht);break}n&&lt&&Xt.alternate===null&&i($,lt),Y=m(Xt,Y,wt),kt===null?dt=Xt:kt.sibling=Xt,kt=Xt,lt=Ht}if(wt===le.length)return r($,lt),Vt&&Na($,wt),dt;if(lt===null){for(;wt<le.length;wt++)lt=De($,le[wt],we),lt!==null&&(Y=m(lt,Y,wt),kt===null?dt=lt:kt.sibling=lt,kt=lt);return Vt&&Na($,wt),dt}for(lt=c(lt);wt<le.length;wt++)Ht=Se(lt,$,wt,le[wt],we),Ht!==null&&(n&&Ht.alternate!==null&&lt.delete(Ht.key===null?wt:Ht.key),Y=m(Ht,Y,wt),kt===null?dt=Ht:kt.sibling=Ht,kt=Ht);return n&&lt.forEach(function(Rs){return i($,Rs)}),Vt&&Na($,wt),dt}function gt($,Y,le,we){if(le==null)throw Error(a(151));for(var dt=null,kt=null,lt=Y,wt=Y=0,Ht=null,Xt=le.next();lt!==null&&!Xt.done;wt++,Xt=le.next()){lt.index>wt?(Ht=lt,lt=null):Ht=lt.sibling;var Rs=de($,lt,Xt.value,we);if(Rs===null){lt===null&&(lt=Ht);break}n&&lt&&Rs.alternate===null&&i($,lt),Y=m(Rs,Y,wt),kt===null?dt=Rs:kt.sibling=Rs,kt=Rs,lt=Ht}if(Xt.done)return r($,lt),Vt&&Na($,wt),dt;if(lt===null){for(;!Xt.done;wt++,Xt=le.next())Xt=De($,Xt.value,we),Xt!==null&&(Y=m(Xt,Y,wt),kt===null?dt=Xt:kt.sibling=Xt,kt=Xt);return Vt&&Na($,wt),dt}for(lt=c(lt);!Xt.done;wt++,Xt=le.next())Xt=Se(lt,$,wt,Xt.value,we),Xt!==null&&(n&&Xt.alternate!==null&&lt.delete(Xt.key===null?wt:Xt.key),Y=m(Xt,Y,wt),kt===null?dt=Xt:kt.sibling=Xt,kt=Xt);return n&&lt.forEach(function(Lb){return i($,Lb)}),Vt&&Na($,wt),dt}function on($,Y,le,we){if(typeof le=="object"&&le!==null&&le.type===E&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case x:e:{for(var dt=le.key;Y!==null;){if(Y.key===dt){if(dt=le.type,dt===E){if(Y.tag===7){r($,Y.sibling),we=p(Y,le.props.children),we.return=$,$=we;break e}}else if(Y.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===W&&Js(dt)===Y.type){r($,Y.sibling),we=p(Y,le.props),nl(we,le),we.return=$,$=we;break e}r($,Y);break}else i($,Y);Y=Y.sibling}le.type===E?(we=js(le.props.children,$.mode,we,le.key),we.return=$,$=we):(we=wc(le.type,le.key,le.props,null,$.mode,we),nl(we,le),we.return=$,$=we)}return b($);case M:e:{for(dt=le.key;Y!==null;){if(Y.key===dt)if(Y.tag===4&&Y.stateNode.containerInfo===le.containerInfo&&Y.stateNode.implementation===le.implementation){r($,Y.sibling),we=p(Y,le.children||[]),we.return=$,$=we;break e}else{r($,Y);break}else i($,Y);Y=Y.sibling}we=Jf(le,$.mode,we),we.return=$,$=we}return b($);case W:return le=Js(le),on($,Y,le,we)}if(fe(le))return it($,Y,le,we);if(K(le)){if(dt=K(le),typeof dt!="function")throw Error(a(150));return le=dt.call(le),gt($,Y,le,we)}if(typeof le.then=="function")return on($,Y,Pc(le),we);if(le.$$typeof===R)return on($,Y,Dc($,le),we);Oc($,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,Y!==null&&Y.tag===6?(r($,Y.sibling),we=p(Y,le),we.return=$,$=we):(r($,Y),we=Kf(le,$.mode,we),we.return=$,$=we),b($)):r($,Y)}return function($,Y,le,we){try{tl=0;var dt=on($,Y,le,we);return Br=null,dt}catch(lt){if(lt===Fr||lt===Lc)throw lt;var kt=Mi(29,lt,null,$.mode);return kt.lanes=we,kt.return=$,kt}finally{}}}var $s=sg(!0),rg=sg(!1),fs=!1;function ch(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function hs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ds(n,i,r){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Zt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=Ac(n),k0(n,null,r),i}return Ec(n,c,i,r),Ac(n)}function il(n,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,r|=c,i.lanes=r,Ze(n,r)}}function fh(n,i){var r=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var p=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?p=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?p=m=i:m=m.next=i}else p=m=i;r={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=i:n.next=i,r.lastBaseUpdate=i}var hh=!1;function al(){if(hh){var n=zr;if(n!==null)throw n}}function sl(n,i,r,c){hh=!1;var p=n.updateQueue;fs=!1;var m=p.firstBaseUpdate,b=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var k=C,ce=k.next;k.next=null,b===null?m=ce:b.next=ce,b=k;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,C=Te.lastBaseUpdate,C!==b&&(C===null?Te.firstBaseUpdate=ce:C.next=ce,Te.lastBaseUpdate=k))}if(m!==null){var De=p.baseState;b=0,Te=ce=k=null,C=m;do{var de=C.lane&-536870913,Se=de!==C.lane;if(Se?(Bt&de)===de:(c&de)===de){de!==0&&de===Ir&&(hh=!0),Te!==null&&(Te=Te.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var it=n,gt=C;de=i;var on=r;switch(gt.tag){case 1:if(it=gt.payload,typeof it=="function"){De=it.call(on,De,de);break e}De=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=gt.payload,de=typeof it=="function"?it.call(on,De,de):it,de==null)break e;De=v({},De,de);break e;case 2:fs=!0}}de=C.callback,de!==null&&(n.flags|=64,Se&&(n.flags|=8192),Se=p.callbacks,Se===null?p.callbacks=[de]:Se.push(de))}else Se={lane:de,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Te===null?(ce=Te=Se,k=De):Te=Te.next=Se,b|=de;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;Se=C,C=Se.next,Se.next=null,p.lastBaseUpdate=Se,p.shared.pending=null}}while(!0);Te===null&&(k=De),p.baseState=k,p.firstBaseUpdate=ce,p.lastBaseUpdate=Te,m===null&&(p.shared.lanes=0),_s|=b,n.lanes=b,n.memoizedState=De}}function og(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function lg(n,i){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)og(r[n],i)}var Hr=I(null),Ic=I(0);function cg(n,i){n=Va,Me(Ic,n),Me(Hr,i),Va=n|i.baseLanes}function dh(){Me(Ic,Va),Me(Hr,Hr.current)}function ph(){Va=Ic.current,se(Hr),se(Ic)}var bi=I(null),Hi=null;function ps(n){var i=n.alternate;Me(Tn,Tn.current&1),Me(bi,n),Hi===null&&(i===null||Hr.current!==null||i.memoizedState!==null)&&(Hi=n)}function mh(n){Me(Tn,Tn.current),Me(bi,n),Hi===null&&(Hi=n)}function ug(n){n.tag===22?(Me(Tn,Tn.current),Me(bi,n),Hi===null&&(Hi=n)):ms()}function ms(){Me(Tn,Tn.current),Me(bi,bi.current)}function Ti(n){se(bi),Hi===n&&(Hi=null),se(Tn)}var Tn=I(0);function zc(n){for(var i=n;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Sd(r)||Md(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pa=0,Tt=null,sn=null,wn=null,Fc=!1,Gr=!1,er=!1,Bc=0,rl=0,Vr=null,MM=0;function Mn(){throw Error(a(321))}function gh(n,i){if(i===null)return!1;for(var r=0;r<i.length&&r<n.length;r++)if(!Si(n[r],i[r]))return!1;return!0}function vh(n,i,r,c,p,m){return Pa=m,Tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=n===null||n.memoizedState===null?qg:Lh,er=!1,m=r(c,p),er=!1,Gr&&(m=hg(i,r,c,p)),fg(n),m}function fg(n){B.H=cl;var i=sn!==null&&sn.next!==null;if(Pa=0,wn=sn=Tt=null,Fc=!1,rl=0,Vr=null,i)throw Error(a(300));n===null||Rn||(n=n.dependencies,n!==null&&Cc(n)&&(Rn=!0))}function hg(n,i,r,c){Tt=n;var p=0;do{if(Gr&&(Vr=null),rl=0,Gr=!1,25<=p)throw Error(a(301));if(p+=1,wn=sn=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=Yg,m=i(r,c)}while(Gr);return m}function bM(){var n=B.H,i=n.useState()[0];return i=typeof i.then=="function"?ol(i):i,n=n.useState()[0],(sn!==null?sn.memoizedState:null)!==n&&(Tt.flags|=1024),i}function _h(){var n=Bc!==0;return Bc=0,n}function xh(n,i,r){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~r}function yh(n){if(Fc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Fc=!1}Pa=0,wn=sn=Tt=null,Gr=!1,rl=Bc=0,Vr=null}function ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Tt.memoizedState=wn=n:wn=wn.next=n,wn}function En(){if(sn===null){var n=Tt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var i=wn===null?Tt.memoizedState:wn.next;if(i!==null)wn=i,sn=n;else{if(n===null)throw Tt.alternate===null?Error(a(467)):Error(a(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},wn===null?Tt.memoizedState=wn=n:wn=wn.next=n}return wn}function Hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(n){var i=rl;return rl+=1,Vr===null&&(Vr=[]),n=ng(Vr,n,i),i=Tt,(wn===null?i.memoizedState:wn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?qg:Lh),n}function Gc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ol(n);if(n.$$typeof===R)return Kn(n)}throw Error(a(438,String(n)))}function Sh(n){var i=null,r=Tt.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var c=Tt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Hc(),Tt.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(n),c=0;c<n;c++)r[c]=N;return i.index++,r}function Oa(n,i){return typeof i=="function"?i(n):i}function Vc(n){var i=En();return Mh(i,sn,n)}function Mh(n,i,r){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=r;var p=n.baseQueue,m=c.pending;if(m!==null){if(p!==null){var b=p.next;p.next=m.next,m.next=b}i.baseQueue=p=m,c.pending=null}if(m=n.baseState,p===null)n.memoizedState=m;else{i=p.next;var C=b=null,k=null,ce=i,Te=!1;do{var De=ce.lane&-536870913;if(De!==ce.lane?(Bt&De)===De:(Pa&De)===De){var de=ce.revertLane;if(de===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),De===Ir&&(Te=!0);else if((Pa&de)===de){ce=ce.next,de===Ir&&(Te=!0);continue}else De={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},k===null?(C=k=De,b=m):k=k.next=De,Tt.lanes|=de,_s|=de;De=ce.action,er&&r(m,De),m=ce.hasEagerState?ce.eagerState:r(m,De)}else de={lane:De,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},k===null?(C=k=de,b=m):k=k.next=de,Tt.lanes|=De,_s|=De;ce=ce.next}while(ce!==null&&ce!==i);if(k===null?b=m:k.next=C,!Si(m,n.memoizedState)&&(Rn=!0,Te&&(r=zr,r!==null)))throw r;n.memoizedState=m,n.baseState=b,n.baseQueue=k,c.lastRenderedState=m}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function bh(n){var i=En(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var c=r.dispatch,p=r.pending,m=i.memoizedState;if(p!==null){r.pending=null;var b=p=p.next;do m=n(m,b.action),b=b.next;while(b!==p);Si(m,i.memoizedState)||(Rn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,c]}function dg(n,i,r){var c=Tt,p=En(),m=Vt;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!Si((sn||p).memoizedState,r);if(b&&(p.memoizedState=r,Rn=!0),p=p.queue,Ah(gg.bind(null,c,p,n),[n]),p.getSnapshot!==i||b||wn!==null&&wn.memoizedState.tag&1){if(c.flags|=2048,kr(9,{destroy:void 0},mg.bind(null,c,p,r,i),null),un===null)throw Error(a(349));m||(Pa&127)!==0||pg(c,i,r)}return r}function pg(n,i,r){n.flags|=16384,n={getSnapshot:i,value:r},i=Tt.updateQueue,i===null?(i=Hc(),Tt.updateQueue=i,i.stores=[n]):(r=i.stores,r===null?i.stores=[n]:r.push(n))}function mg(n,i,r,c){i.value=r,i.getSnapshot=c,vg(i)&&_g(n)}function gg(n,i,r){return r(function(){vg(i)&&_g(n)})}function vg(n){var i=n.getSnapshot;n=n.value;try{var r=i();return!Si(n,r)}catch{return!0}}function _g(n){var i=Ws(n,2);i!==null&&gi(i,n,2)}function Th(n){var i=ri();if(typeof n=="function"){var r=n;if(n=r(),er){Le(!0);try{r()}finally{Le(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:n},i}function xg(n,i,r,c){return n.baseState=r,Mh(n,sn,typeof c=="function"?c:Oa)}function TM(n,i,r,c,p){if(Wc(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};B.T!==null?r(!0):m.isTransition=!1,c(m),r=i.pending,r===null?(m.next=i.pending=m,yg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function yg(n,i){var r=i.action,c=i.payload,p=n.state;if(i.isTransition){var m=B.T,b={};B.T=b;try{var C=r(p,c),k=B.S;k!==null&&k(b,C),Sg(n,i,C)}catch(ce){Eh(n,i,ce)}finally{m!==null&&b.types!==null&&(m.types=b.types),B.T=m}}else try{m=r(p,c),Sg(n,i,m)}catch(ce){Eh(n,i,ce)}}function Sg(n,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){Mg(n,i,c)},function(c){return Eh(n,i,c)}):Mg(n,i,r)}function Mg(n,i,r){i.status="fulfilled",i.value=r,bg(i),n.state=r,i=n.pending,i!==null&&(r=i.next,r===i?n.pending=null:(r=r.next,i.next=r,yg(n,r)))}function Eh(n,i,r){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=r,bg(i),i=i.next;while(i!==c)}n.action=null}function bg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Tg(n,i){return i}function Eg(n,i){if(Vt){var r=un.formState;if(r!==null){e:{var c=Tt;if(Vt){if(hn){t:{for(var p=hn,m=Bi;p.nodeType!==8;){if(!m){p=null;break t}if(p=Gi(p.nextSibling),p===null){p=null;break t}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){hn=Gi(p.nextSibling),c=p.data==="F!";break e}}cs(c)}c=!1}c&&(i=r[0])}}return r=ri(),r.memoizedState=r.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tg,lastRenderedState:i},r.queue=c,r=Xg.bind(null,Tt,c),c.dispatch=r,c=Th(!1),m=Nh.bind(null,Tt,!1,c.queue),c=ri(),p={state:i,dispatch:null,action:n,pending:null},c.queue=p,r=TM.bind(null,Tt,p,m,r),p.dispatch=r,c.memoizedState=n,[i,r,!1]}function Ag(n){var i=En();return wg(i,sn,n)}function wg(n,i,r){if(i=Mh(n,i,Tg)[0],n=Vc(Oa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=ol(i)}catch(b){throw b===Fr?Lc:b}else c=i;i=En();var p=i.queue,m=p.dispatch;return r!==i.memoizedState&&(Tt.flags|=2048,kr(9,{destroy:void 0},EM.bind(null,p,r),null)),[c,m,n]}function EM(n,i){n.action=i}function Rg(n){var i=En(),r=sn;if(r!==null)return wg(i,r,n);En(),i=i.memoizedState,r=En();var c=r.queue.dispatch;return r.memoizedState=n,[i,c,!1]}function kr(n,i,r,c){return n={tag:n,create:r,deps:c,inst:i,next:null},i=Tt.updateQueue,i===null&&(i=Hc(),Tt.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=n.next=n:(c=r.next,r.next=n,n.next=c,i.lastEffect=n),n}function Cg(){return En().memoizedState}function kc(n,i,r,c){var p=ri();Tt.flags|=n,p.memoizedState=kr(1|i,{destroy:void 0},r,c===void 0?null:c)}function Xc(n,i,r,c){var p=En();c=c===void 0?null:c;var m=p.memoizedState.inst;sn!==null&&c!==null&&gh(c,sn.memoizedState.deps)?p.memoizedState=kr(i,m,r,c):(Tt.flags|=n,p.memoizedState=kr(1|i,m,r,c))}function Dg(n,i){kc(8390656,8,n,i)}function Ah(n,i){Xc(2048,8,n,i)}function AM(n){Tt.flags|=4;var i=Tt.updateQueue;if(i===null)i=Hc(),Tt.updateQueue=i,i.events=[n];else{var r=i.events;r===null?i.events=[n]:r.push(n)}}function Ng(n){var i=En().memoizedState;return AM({ref:i,nextImpl:n}),function(){if((Zt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Lg(n,i){return Xc(4,2,n,i)}function Ug(n,i){return Xc(4,4,n,i)}function Pg(n,i){if(typeof i=="function"){n=n();var r=i(n);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Og(n,i,r){r=r!=null?r.concat([n]):null,Xc(4,4,Pg.bind(null,i,n),r)}function wh(){}function Ig(n,i){var r=En();i=i===void 0?null:i;var c=r.memoizedState;return i!==null&&gh(i,c[1])?c[0]:(r.memoizedState=[n,i],n)}function zg(n,i){var r=En();i=i===void 0?null:i;var c=r.memoizedState;if(i!==null&&gh(i,c[1]))return c[0];if(c=n(),er){Le(!0);try{n()}finally{Le(!1)}}return r.memoizedState=[c,i],c}function Rh(n,i,r){return r===void 0||(Pa&1073741824)!==0&&(Bt&261930)===0?n.memoizedState=i:(n.memoizedState=r,n=Fv(),Tt.lanes|=n,_s|=n,r)}function Fg(n,i,r,c){return Si(r,i)?r:Hr.current!==null?(n=Rh(n,r,c),Si(n,i)||(Rn=!0),n):(Pa&42)===0||(Pa&1073741824)!==0&&(Bt&261930)===0?(Rn=!0,n.memoizedState=r):(n=Fv(),Tt.lanes|=n,_s|=n,i)}function Bg(n,i,r,c,p){var m=V.p;V.p=m!==0&&8>m?m:8;var b=B.T,C={};B.T=C,Nh(n,!1,i,r);try{var k=p(),ce=B.S;if(ce!==null&&ce(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var Te=SM(k,c);ll(n,i,Te,wi(n))}else ll(n,i,c,wi(n))}catch(De){ll(n,i,{then:function(){},status:"rejected",reason:De},wi())}finally{V.p=m,b!==null&&C.types!==null&&(b.types=C.types),B.T=b}}function wM(){}function Ch(n,i,r,c){if(n.tag!==5)throw Error(a(476));var p=Hg(n).queue;Bg(n,p,i,oe,r===null?wM:function(){return Gg(n),r(c)})}function Hg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:oe},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:r},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Gg(n){var i=Hg(n);i.next===null&&(i=n.alternate.memoizedState),ll(n,i.next.queue,{},wi())}function Dh(){return Kn(El)}function Vg(){return En().memoizedState}function kg(){return En().memoizedState}function RM(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var r=wi();n=hs(r);var c=ds(i,n,r);c!==null&&(gi(c,i,r),il(c,i,r)),i={cache:sh()},n.payload=i;return}i=i.return}}function CM(n,i,r){var c=wi();r={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Wc(n)?Wg(i,r):(r=Yf(n,i,r,c),r!==null&&(gi(r,n,c),jg(r,i,c)))}function Xg(n,i,r){var c=wi();ll(n,i,r,c)}function ll(n,i,r,c){var p={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wc(n))Wg(i,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,C=m(b,r);if(p.hasEagerState=!0,p.eagerState=C,Si(C,b))return Ec(n,i,p,0),un===null&&Tc(),!1}catch{}finally{}if(r=Yf(n,i,p,c),r!==null)return gi(r,n,c),jg(r,i,c),!0}return!1}function Nh(n,i,r,c){if(c={lane:2,revertLane:cd(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Wc(n)){if(i)throw Error(a(479))}else i=Yf(n,r,c,2),i!==null&&gi(i,n,2)}function Wc(n){var i=n.alternate;return n===Tt||i!==null&&i===Tt}function Wg(n,i){Gr=Fc=!0;var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}function jg(n,i,r){if((r&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,r|=c,i.lanes=r,Ze(n,r)}}var cl={readContext:Kn,use:Gc,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useLayoutEffect:Mn,useInsertionEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useSyncExternalStore:Mn,useId:Mn,useHostTransitionStatus:Mn,useFormState:Mn,useActionState:Mn,useOptimistic:Mn,useMemoCache:Mn,useCacheRefresh:Mn};cl.useEffectEvent=Mn;var qg={readContext:Kn,use:Gc,useCallback:function(n,i){return ri().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:Dg,useImperativeHandle:function(n,i,r){r=r!=null?r.concat([n]):null,kc(4194308,4,Pg.bind(null,i,n),r)},useLayoutEffect:function(n,i){return kc(4194308,4,n,i)},useInsertionEffect:function(n,i){kc(4,2,n,i)},useMemo:function(n,i){var r=ri();i=i===void 0?null:i;var c=n();if(er){Le(!0);try{n()}finally{Le(!1)}}return r.memoizedState=[c,i],c},useReducer:function(n,i,r){var c=ri();if(r!==void 0){var p=r(i);if(er){Le(!0);try{r(i)}finally{Le(!1)}}}else p=i;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=CM.bind(null,Tt,n),[c.memoizedState,n]},useRef:function(n){var i=ri();return n={current:n},i.memoizedState=n},useState:function(n){n=Th(n);var i=n.queue,r=Xg.bind(null,Tt,i);return i.dispatch=r,[n.memoizedState,r]},useDebugValue:wh,useDeferredValue:function(n,i){var r=ri();return Rh(r,n,i)},useTransition:function(){var n=Th(!1);return n=Bg.bind(null,Tt,n.queue,!0,!1),ri().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,r){var c=Tt,p=ri();if(Vt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),un===null)throw Error(a(349));(Bt&127)!==0||pg(c,i,r)}p.memoizedState=r;var m={value:r,getSnapshot:i};return p.queue=m,Dg(gg.bind(null,c,m,n),[n]),c.flags|=2048,kr(9,{destroy:void 0},mg.bind(null,c,m,r,i),null),r},useId:function(){var n=ri(),i=un.identifierPrefix;if(Vt){var r=fa,c=ua;r=(c&~(1<<32-He(c)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Bc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=MM++,i="_"+i+"r_"+r.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Dh,useFormState:Eg,useActionState:Eg,useOptimistic:function(n){var i=ri();i.memoizedState=i.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Nh.bind(null,Tt,!0,r),r.dispatch=i,[n,i]},useMemoCache:Sh,useCacheRefresh:function(){return ri().memoizedState=RM.bind(null,Tt)},useEffectEvent:function(n){var i=ri(),r={impl:n};return i.memoizedState=r,function(){if((Zt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Lh={readContext:Kn,use:Gc,useCallback:Ig,useContext:Kn,useEffect:Ah,useImperativeHandle:Og,useInsertionEffect:Lg,useLayoutEffect:Ug,useMemo:zg,useReducer:Vc,useRef:Cg,useState:function(){return Vc(Oa)},useDebugValue:wh,useDeferredValue:function(n,i){var r=En();return Fg(r,sn.memoizedState,n,i)},useTransition:function(){var n=Vc(Oa)[0],i=En().memoizedState;return[typeof n=="boolean"?n:ol(n),i]},useSyncExternalStore:dg,useId:Vg,useHostTransitionStatus:Dh,useFormState:Ag,useActionState:Ag,useOptimistic:function(n,i){var r=En();return xg(r,sn,n,i)},useMemoCache:Sh,useCacheRefresh:kg};Lh.useEffectEvent=Ng;var Yg={readContext:Kn,use:Gc,useCallback:Ig,useContext:Kn,useEffect:Ah,useImperativeHandle:Og,useInsertionEffect:Lg,useLayoutEffect:Ug,useMemo:zg,useReducer:bh,useRef:Cg,useState:function(){return bh(Oa)},useDebugValue:wh,useDeferredValue:function(n,i){var r=En();return sn===null?Rh(r,n,i):Fg(r,sn.memoizedState,n,i)},useTransition:function(){var n=bh(Oa)[0],i=En().memoizedState;return[typeof n=="boolean"?n:ol(n),i]},useSyncExternalStore:dg,useId:Vg,useHostTransitionStatus:Dh,useFormState:Rg,useActionState:Rg,useOptimistic:function(n,i){var r=En();return sn!==null?xg(r,sn,n,i):(r.baseState=n,[n,r.queue.dispatch])},useMemoCache:Sh,useCacheRefresh:kg};Yg.useEffectEvent=Ng;function Uh(n,i,r,c){i=n.memoizedState,r=r(c,i),r=r==null?i:v({},i,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var Ph={enqueueSetState:function(n,i,r){n=n._reactInternals;var c=wi(),p=hs(c);p.payload=i,r!=null&&(p.callback=r),i=ds(n,p,c),i!==null&&(gi(i,n,c),il(i,n,c))},enqueueReplaceState:function(n,i,r){n=n._reactInternals;var c=wi(),p=hs(c);p.tag=1,p.payload=i,r!=null&&(p.callback=r),i=ds(n,p,c),i!==null&&(gi(i,n,c),il(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var r=wi(),c=hs(r);c.tag=2,i!=null&&(c.callback=i),i=ds(n,c,r),i!==null&&(gi(i,n,r),il(i,n,r))}};function Zg(n,i,r,c,p,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Zo(r,c)||!Zo(p,m):!0}function Kg(n,i,r,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,c),i.state!==n&&Ph.enqueueReplaceState(i,i.state,null)}function tr(n,i){var r=i;if("ref"in i){r={};for(var c in i)c!=="ref"&&(r[c]=i[c])}if(n=n.defaultProps){r===i&&(r=v({},r));for(var p in n)r[p]===void 0&&(r[p]=n[p])}return r}function Jg(n){bc(n)}function Qg(n){console.error(n)}function $g(n){bc(n)}function jc(n,i){try{var r=n.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function ev(n,i,r){try{var c=n.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Oh(n,i,r){return r=hs(r),r.tag=3,r.payload={element:null},r.callback=function(){jc(n,i)},r}function tv(n){return n=hs(n),n.tag=3,n}function nv(n,i,r,c){var p=r.type.getDerivedStateFromError;if(typeof p=="function"){var m=c.value;n.payload=function(){return p(m)},n.callback=function(){ev(i,r,c)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){ev(i,r,c),typeof p!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var C=c.stack;this.componentDidCatch(c.value,{componentStack:C!==null?C:""})})}function DM(n,i,r,c,p){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=r.alternate,i!==null&&Or(i,r,p,!0),r=bi.current,r!==null){switch(r.tag){case 31:case 13:return Hi===null?au():r.alternate===null&&bn===0&&(bn=3),r.flags&=-257,r.flags|=65536,r.lanes=p,c===Uc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([c]):i.add(c),rd(n,c,p)),!1;case 22:return r.flags|=65536,c===Uc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([c]):r.add(c)),rd(n,c,p)),!1}throw Error(a(435,r.tag))}return rd(n,c,p),au(),!1}if(Vt)return i=bi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==eh&&(n=Error(a(422),{cause:c}),Qo(Ii(n,r)))):(c!==eh&&(i=Error(a(423),{cause:c}),Qo(Ii(i,r))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=Ii(c,r),p=Oh(n.stateNode,c,p),fh(n,p),bn!==4&&(bn=2)),!1;var m=Error(a(520),{cause:c});if(m=Ii(m,r),vl===null?vl=[m]:vl.push(m),bn!==4&&(bn=2),i===null)return!0;c=Ii(c,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,n=p&-p,r.lanes|=n,n=Oh(r.stateNode,c,n),fh(r,n),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xs===null||!xs.has(m))))return r.flags|=65536,p&=-p,r.lanes|=p,p=tv(p),nv(p,n,r,c),fh(r,p),!1}r=r.return}while(r!==null);return!1}var Ih=Error(a(461)),Rn=!1;function Jn(n,i,r,c){i.child=n===null?rg(i,null,r,c):$s(i,n.child,r,c)}function iv(n,i,r,c,p){r=r.render;var m=i.ref;if("ref"in c){var b={};for(var C in c)C!=="ref"&&(b[C]=c[C])}else b=c;return Zs(i),c=vh(n,i,r,b,m,p),C=_h(),n!==null&&!Rn?(xh(n,i,p),Ia(n,i,p)):(Vt&&C&&Qf(i),i.flags|=1,Jn(n,i,c,p),i.child)}function av(n,i,r,c,p){if(n===null){var m=r.type;return typeof m=="function"&&!Zf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,sv(n,i,m,c,p)):(n=wc(r.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!Xh(n,p)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:Zo,r(b,c)&&n.ref===i.ref)return Ia(n,i,p)}return i.flags|=1,n=Da(m,c),n.ref=i.ref,n.return=i,i.child=n}function sv(n,i,r,c,p){if(n!==null){var m=n.memoizedProps;if(Zo(m,c)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=c=m,Xh(n,p))(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,Ia(n,i,p)}return zh(n,i,r,c,p)}function rv(n,i,r,c){var p=c.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,n!==null){for(c=i.child=n.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~m}else c=0,i.child=null;return ov(n,i,m,r,c)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Nc(i,m!==null?m.cachePool:null),m!==null?cg(i,m):dh(),ug(i);else return c=i.lanes=536870912,ov(n,i,m!==null?m.baseLanes|r:r,r,c)}else m!==null?(Nc(i,m.cachePool),cg(i,m),ms(),i.memoizedState=null):(n!==null&&Nc(i,null),dh(),ms());return Jn(n,i,p,r),i.child}function ul(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function ov(n,i,r,c,p){var m=oh();return m=m===null?null:{parent:An._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},n!==null&&Nc(i,null),dh(),ug(i),n!==null&&Or(n,i,c,!0),i.childLanes=p,null}function qc(n,i){return i=Zc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function lv(n,i,r){return $s(i,n.child,null,r),n=qc(i,i.pendingProps),n.flags|=2,Ti(i),i.memoizedState=null,n}function NM(n,i,r){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Vt){if(c.mode==="hidden")return n=qc(i,c),i.lanes=536870912,ul(null,n);if(mh(i),(n=hn)?(n=y_(n,Bi),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:os!==null?{id:ua,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},r=W0(n),r.return=i,i.child=r,Zn=i,hn=null)):n=null,n===null)throw cs(i);return i.lanes=536870912,null}return qc(i,c)}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(mh(i),p)if(i.flags&256)i.flags&=-257,i=lv(n,i,r);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(Rn||Or(n,i,r,!1),p=(r&n.childLanes)!==0,Rn||p){if(c=un,c!==null&&(b=st(c,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,Ws(n,b),gi(c,n,b),Ih;au(),i=lv(n,i,r)}else n=m.treeContext,hn=Gi(b.nextSibling),Zn=i,Vt=!0,ls=null,Bi=!1,n!==null&&Y0(i,n),i=qc(i,c),i.flags|=4096;return i}return n=Da(n.child,{mode:c.mode,children:c.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Yc(n,i){var r=i.ref;if(r===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(n===null||n.ref!==r)&&(i.flags|=4194816)}}function zh(n,i,r,c,p){return Zs(i),r=vh(n,i,r,c,void 0,p),c=_h(),n!==null&&!Rn?(xh(n,i,p),Ia(n,i,p)):(Vt&&c&&Qf(i),i.flags|=1,Jn(n,i,r,p),i.child)}function cv(n,i,r,c,p,m){return Zs(i),i.updateQueue=null,r=hg(i,c,r,p),fg(n),c=_h(),n!==null&&!Rn?(xh(n,i,m),Ia(n,i,m)):(Vt&&c&&Qf(i),i.flags|=1,Jn(n,i,r,m),i.child)}function uv(n,i,r,c,p){if(Zs(i),i.stateNode===null){var m=Nr,b=r.contextType;typeof b=="object"&&b!==null&&(m=Kn(b)),m=new r(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ph,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},ch(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?Kn(b):Nr,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Uh(i,r,b,c),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Ph.enqueueReplaceState(m,m.state,null),sl(i,c,m,p),al(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var C=i.memoizedProps,k=tr(r,C);m.props=k;var ce=m.context,Te=r.contextType;b=Nr,typeof Te=="object"&&Te!==null&&(b=Kn(Te));var De=r.getDerivedStateFromProps;Te=typeof De=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,Te||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||ce!==b)&&Kg(i,m,c,b),fs=!1;var de=i.memoizedState;m.state=de,sl(i,c,m,p),al(),ce=i.memoizedState,C||de!==ce||fs?(typeof De=="function"&&(Uh(i,r,De,c),ce=i.memoizedState),(k=fs||Zg(i,r,k,c,de,ce,b))?(Te||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=ce),m.props=c,m.state=ce,m.context=b,c=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,uh(n,i),b=i.memoizedProps,Te=tr(r,b),m.props=Te,De=i.pendingProps,de=m.context,ce=r.contextType,k=Nr,typeof ce=="object"&&ce!==null&&(k=Kn(ce)),C=r.getDerivedStateFromProps,(ce=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==De||de!==k)&&Kg(i,m,c,k),fs=!1,de=i.memoizedState,m.state=de,sl(i,c,m,p),al();var Se=i.memoizedState;b!==De||de!==Se||fs||n!==null&&n.dependencies!==null&&Cc(n.dependencies)?(typeof C=="function"&&(Uh(i,r,C,c),Se=i.memoizedState),(Te=fs||Zg(i,r,Te,c,de,Se,k)||n!==null&&n.dependencies!==null&&Cc(n.dependencies))?(ce||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,Se,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,Se,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&de===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&de===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Se),m.props=c,m.state=Se,m.context=k,c=Te):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&de===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&de===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,Yc(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=$s(i,n.child,null,p),i.child=$s(i,null,r,p)):Jn(n,i,r,p),i.memoizedState=m.state,n=i.child):n=Ia(n,i,p),n}function fv(n,i,r,c){return qs(),i.flags|=256,Jn(n,i,r,c),i.child}var Fh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bh(n){return{baseLanes:n,cachePool:eg()}}function Hh(n,i,r){return n=n!==null?n.childLanes&~r:0,i&&(n|=Ai),n}function hv(n,i,r){var c=i.pendingProps,p=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(Tn.current&2)!==0),b&&(p=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,n===null){if(Vt){if(p?ps(i):ms(),(n=hn)?(n=y_(n,Bi),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:os!==null?{id:ua,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},r=W0(n),r.return=i,i.child=r,Zn=i,hn=null)):n=null,n===null)throw cs(i);return Md(n)?i.lanes=32:i.lanes=536870912,null}var C=c.children;return c=c.fallback,p?(ms(),p=i.mode,C=Zc({mode:"hidden",children:C},p),c=js(c,p,r,null),C.return=i,c.return=i,C.sibling=c,i.child=C,c=i.child,c.memoizedState=Bh(r),c.childLanes=Hh(n,b,r),i.memoizedState=Fh,ul(null,c)):(ps(i),Gh(i,C))}var k=n.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(m)i.flags&256?(ps(i),i.flags&=-257,i=Vh(n,i,r)):i.memoizedState!==null?(ms(),i.child=n.child,i.flags|=128,i=null):(ms(),C=c.fallback,p=i.mode,c=Zc({mode:"visible",children:c.children},p),C=js(C,p,r,null),C.flags|=2,c.return=i,C.return=i,c.sibling=C,i.child=c,$s(i,n.child,null,r),c=i.child,c.memoizedState=Bh(r),c.childLanes=Hh(n,b,r),i.memoizedState=Fh,i=ul(null,c));else if(ps(i),Md(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var ce=b.dgst;b=ce,c=Error(a(419)),c.stack="",c.digest=b,Qo({value:c,source:null,stack:null}),i=Vh(n,i,r)}else if(Rn||Or(n,i,r,!1),b=(r&n.childLanes)!==0,Rn||b){if(b=un,b!==null&&(c=st(b,r),c!==0&&c!==k.retryLane))throw k.retryLane=c,Ws(n,c),gi(b,n,c),Ih;Sd(C)||au(),i=Vh(n,i,r)}else Sd(C)?(i.flags|=192,i.child=n.child,i=null):(n=k.treeContext,hn=Gi(C.nextSibling),Zn=i,Vt=!0,ls=null,Bi=!1,n!==null&&Y0(i,n),i=Gh(i,c.children),i.flags|=4096);return i}return p?(ms(),C=c.fallback,p=i.mode,k=n.child,ce=k.sibling,c=Da(k,{mode:"hidden",children:c.children}),c.subtreeFlags=k.subtreeFlags&65011712,ce!==null?C=Da(ce,C):(C=js(C,p,r,null),C.flags|=2),C.return=i,c.return=i,c.sibling=C,i.child=c,ul(null,c),c=i.child,C=n.child.memoizedState,C===null?C=Bh(r):(p=C.cachePool,p!==null?(k=An._currentValue,p=p.parent!==k?{parent:k,pool:k}:p):p=eg(),C={baseLanes:C.baseLanes|r,cachePool:p}),c.memoizedState=C,c.childLanes=Hh(n,b,r),i.memoizedState=Fh,ul(n.child,c)):(ps(i),r=n.child,n=r.sibling,r=Da(r,{mode:"visible",children:c.children}),r.return=i,r.sibling=null,n!==null&&(b=i.deletions,b===null?(i.deletions=[n],i.flags|=16):b.push(n)),i.child=r,i.memoizedState=null,r)}function Gh(n,i){return i=Zc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Zc(n,i){return n=Mi(22,n,null,i),n.lanes=0,n}function Vh(n,i,r){return $s(i,n.child,null,r),n=Gh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function dv(n,i,r){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ih(n.return,i,r)}function kh(n,i,r,c,p,m){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:p,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=r,b.tailMode=p,b.treeForkCount=m)}function pv(n,i,r){var c=i.pendingProps,p=c.revealOrder,m=c.tail;c=c.children;var b=Tn.current,C=(b&2)!==0;if(C?(b=b&1|2,i.flags|=128):b&=1,Me(Tn,b),Jn(n,i,c,r),c=Vt?Jo:0,!C&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dv(n,r,i);else if(n.tag===19)dv(n,r,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(r=i.child,p=null;r!==null;)n=r.alternate,n!==null&&zc(n)===null&&(p=r),r=r.sibling;r=p,r===null?(p=i.child,i.child=null):(p=r.sibling,r.sibling=null),kh(i,!1,p,r,m,c);break;case"backwards":case"unstable_legacy-backwards":for(r=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&zc(n)===null){i.child=p;break}n=p.sibling,p.sibling=r,r=p,p=n}kh(i,!0,r,null,m,c);break;case"together":kh(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function Ia(n,i,r){if(n!==null&&(i.dependencies=n.dependencies),_s|=i.lanes,(r&i.childLanes)===0)if(n!==null){if(Or(n,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,r=Da(n,n.pendingProps),i.child=r,r.return=i;n.sibling!==null;)n=n.sibling,r=r.sibling=Da(n,n.pendingProps),r.return=i;r.sibling=null}return i.child}function Xh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Cc(n)))}function LM(n,i,r){switch(i.tag){case 3:ke(i,i.stateNode.containerInfo),us(i,An,n.memoizedState.cache),qs();break;case 27:case 5:We(i);break;case 4:ke(i,i.stateNode.containerInfo);break;case 10:us(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,mh(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(ps(i),i.flags|=128,null):(r&i.child.childLanes)!==0?hv(n,i,r):(ps(i),n=Ia(n,i,r),n!==null?n.sibling:null);ps(i);break;case 19:var p=(n.flags&128)!==0;if(c=(r&i.childLanes)!==0,c||(Or(n,i,r,!1),c=(r&i.childLanes)!==0),p){if(c)return pv(n,i,r);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Me(Tn,Tn.current),c)break;return null;case 22:return i.lanes=0,rv(n,i,r,i.pendingProps);case 24:us(i,An,n.memoizedState.cache)}return Ia(n,i,r)}function mv(n,i,r){if(n!==null)if(n.memoizedProps!==i.pendingProps)Rn=!0;else{if(!Xh(n,r)&&(i.flags&128)===0)return Rn=!1,LM(n,i,r);Rn=(n.flags&131072)!==0}else Rn=!1,Vt&&(i.flags&1048576)!==0&&q0(i,Jo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(n=Js(i.elementType),i.type=n,typeof n=="function")Zf(n)?(c=tr(n,c),i.tag=1,i=uv(null,i,n,c,r)):(i.tag=0,i=zh(null,i,n,c,r));else{if(n!=null){var p=n.$$typeof;if(p===w){i.tag=11,i=iv(null,i,n,c,r);break e}else if(p===O){i.tag=14,i=av(null,i,n,c,r);break e}}throw i=ue(n)||n,Error(a(306,i,""))}}return i;case 0:return zh(n,i,i.type,i.pendingProps,r);case 1:return c=i.type,p=tr(c,i.pendingProps),uv(n,i,c,p,r);case 3:e:{if(ke(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;p=m.element,uh(n,i),sl(i,c,null,r);var b=i.memoizedState;if(c=b.cache,us(i,An,c),c!==m.cache&&ah(i,[An],r,!0),al(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=fv(n,i,c,r);break e}else if(c!==p){p=Ii(Error(a(424)),i),Qo(p),i=fv(n,i,c,r);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(hn=Gi(n.firstChild),Zn=i,Vt=!0,ls=null,Bi=!0,r=rg(i,null,c,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(qs(),c===p){i=Ia(n,i,r);break e}Jn(n,i,c,r)}i=i.child}return i;case 26:return Yc(n,i),n===null?(r=A_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Vt||(r=i.type,n=i.pendingProps,c=fu(re.current).createElement(r),c[Pt]=i,c[vn]=n,Qn(c,r,n),D(c),i.stateNode=c):i.memoizedState=A_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return We(i),n===null&&Vt&&(c=i.stateNode=b_(i.type,i.pendingProps,re.current),Zn=i,Bi=!0,p=hn,bs(i.type)?(bd=p,hn=Gi(c.firstChild)):hn=p),Jn(n,i,i.pendingProps.children,r),Yc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Vt&&((p=c=hn)&&(c=lb(c,i.type,i.pendingProps,Bi),c!==null?(i.stateNode=c,Zn=i,hn=Gi(c.firstChild),Bi=!1,p=!0):p=!1),p||cs(i)),We(i),p=i.type,m=i.pendingProps,b=n!==null?n.memoizedProps:null,c=m.children,_d(p,m)?c=null:b!==null&&_d(p,b)&&(i.flags|=32),i.memoizedState!==null&&(p=vh(n,i,bM,null,null,r),El._currentValue=p),Yc(n,i),Jn(n,i,c,r),i.child;case 6:return n===null&&Vt&&((n=r=hn)&&(r=cb(r,i.pendingProps,Bi),r!==null?(i.stateNode=r,Zn=i,hn=null,n=!0):n=!1),n||cs(i)),null;case 13:return hv(n,i,r);case 4:return ke(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=$s(i,null,c,r):Jn(n,i,c,r),i.child;case 11:return iv(n,i,i.type,i.pendingProps,r);case 7:return Jn(n,i,i.pendingProps,r),i.child;case 8:return Jn(n,i,i.pendingProps.children,r),i.child;case 12:return Jn(n,i,i.pendingProps.children,r),i.child;case 10:return c=i.pendingProps,us(i,i.type,c.value),Jn(n,i,c.children,r),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,Zs(i),p=Kn(p),c=c(p),i.flags|=1,Jn(n,i,c,r),i.child;case 14:return av(n,i,i.type,i.pendingProps,r);case 15:return sv(n,i,i.type,i.pendingProps,r);case 19:return pv(n,i,r);case 31:return NM(n,i,r);case 22:return rv(n,i,r,i.pendingProps);case 24:return Zs(i),c=Kn(An),n===null?(p=oh(),p===null&&(p=un,m=sh(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=r),p=m),i.memoizedState={parent:c,cache:p},ch(i),us(i,An,p)):((n.lanes&r)!==0&&(uh(n,i),sl(i,null,null,r),al()),p=n.memoizedState,m=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),us(i,An,c)):(c=m.cache,us(i,An,c),c!==p.cache&&ah(i,[An],r,!0))),Jn(n,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function za(n){n.flags|=4}function Wh(n,i,r,c,p){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(Vv())n.flags|=8192;else throw Qs=Uc,lh}else n.flags&=-16777217}function gv(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!N_(i))if(Vv())n.flags|=8192;else throw Qs=Uc,lh}function Kc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?At():536870912,n.lanes|=i,qr|=i)}function fl(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,r=0,c=0;if(i)for(var p=n.child;p!==null;)r|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)r|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=r,i}function UM(n,i,r){var c=i.pendingProps;switch($f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return dn(i),null;case 3:return r=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Ua(An),Xe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Pr(i)?za(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,th())),dn(i),null;case 26:var p=i.type,m=i.memoizedState;return n===null?(za(i),m!==null?(dn(i),gv(i,m)):(dn(i),Wh(i,p,null,c,r))):m?m!==n.memoizedState?(za(i),dn(i),gv(i,m)):(dn(i),i.flags&=-16777217):(n=n.memoizedProps,n!==c&&za(i),dn(i),Wh(i,p,n,c,r)),null;case 27:if(vt(i),r=re.current,p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&za(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return dn(i),null}n=Ie.current,Pr(i)?Z0(i):(n=b_(p,c,r),i.stateNode=n,za(i))}return dn(i),null;case 5:if(vt(i),p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&za(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return dn(i),null}if(m=Ie.current,Pr(i))Z0(i);else{var b=fu(re.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?b.createElement("select",{is:c.is}):b.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?b.createElement(p,{is:c.is}):b.createElement(p)}}m[Pt]=i,m[vn]=c;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;e:switch(Qn(m,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&za(i)}}return dn(i),Wh(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,r),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&za(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=re.current,Pr(i)){if(n=i.stateNode,r=i.memoizedProps,c=null,p=Zn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[Pt]=i,n=!!(n.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||h_(n.nodeValue,r)),n||cs(i,!0)}else n=fu(n).createTextNode(c),n[Pt]=i,i.stateNode=n}return dn(i),null;case 31:if(r=i.memoizedState,n===null||n.memoizedState!==null){if(c=Pr(i),r!==null){if(n===null){if(!c)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[Pt]=i}else qs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),n=!1}else r=th(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),n=!0;if(!n)return i.flags&256?(Ti(i),i):(Ti(i),null);if((i.flags&128)!==0)throw Error(a(558))}return dn(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=Pr(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[Pt]=i}else qs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else p=th(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(Ti(i),i):(Ti(i),null)}return Ti(i),(i.flags&128)!==0?(i.lanes=r,i):(r=c!==null,n=n!==null&&n.memoizedState!==null,r&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==p&&(c.flags|=2048)),r!==n&&r&&(i.child.flags|=8192),Kc(i,i.updateQueue),dn(i),null);case 4:return Xe(),n===null&&dd(i.stateNode.containerInfo),dn(i),null;case 10:return Ua(i.type),dn(i),null;case 19:if(se(Tn),c=i.memoizedState,c===null)return dn(i),null;if(p=(i.flags&128)!==0,m=c.rendering,m===null)if(p)fl(c,!1);else{if(bn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=zc(n),m!==null){for(i.flags|=128,fl(c,!1),n=m.updateQueue,i.updateQueue=n,Kc(i,n),i.subtreeFlags=0,n=r,r=i.child;r!==null;)X0(r,n),r=r.sibling;return Me(Tn,Tn.current&1|2),Vt&&Na(i,c.treeForkCount),i.child}n=n.sibling}c.tail!==null&&T()>tu&&(i.flags|=128,p=!0,fl(c,!1),i.lanes=4194304)}else{if(!p)if(n=zc(m),n!==null){if(i.flags|=128,p=!0,n=n.updateQueue,i.updateQueue=n,Kc(i,n),fl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Vt)return dn(i),null}else 2*T()-c.renderingStartTime>tu&&r!==536870912&&(i.flags|=128,p=!0,fl(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(n=c.last,n!==null?n.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=T(),n.sibling=null,r=Tn.current,Me(Tn,p?r&1|2:r&1),Vt&&Na(i,c.treeForkCount),n):(dn(i),null);case 22:case 23:return Ti(i),ph(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(r&536870912)!==0&&(i.flags&128)===0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),r=i.updateQueue,r!==null&&Kc(i,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048),n!==null&&se(Ks),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ua(An),dn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function PM(n,i){switch($f(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ua(An),Xe(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return vt(i),null;case 31:if(i.memoizedState!==null){if(Ti(i),i.alternate===null)throw Error(a(340));qs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Ti(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));qs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return se(Tn),null;case 4:return Xe(),null;case 10:return Ua(i.type),null;case 22:case 23:return Ti(i),ph(),n!==null&&se(Ks),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Ua(An),null;case 25:return null;default:return null}}function vv(n,i){switch($f(i),i.tag){case 3:Ua(An),Xe();break;case 26:case 27:case 5:vt(i);break;case 4:Xe();break;case 31:i.memoizedState!==null&&Ti(i);break;case 13:Ti(i);break;case 19:se(Tn);break;case 10:Ua(i.type);break;case 22:case 23:Ti(i),ph(),n!==null&&se(Ks);break;case 24:Ua(An)}}function hl(n,i){try{var r=i.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var p=c.next;r=p;do{if((r.tag&n)===n){c=void 0;var m=r.create,b=r.inst;c=m(),b.destroy=c}r=r.next}while(r!==p)}}catch(C){tn(i,i.return,C)}}function gs(n,i,r){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var m=p.next;c=m;do{if((c.tag&n)===n){var b=c.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,p=i;var k=r,ce=C;try{ce()}catch(Te){tn(p,k,Te)}}}c=c.next}while(c!==m)}}catch(Te){tn(i,i.return,Te)}}function _v(n){var i=n.updateQueue;if(i!==null){var r=n.stateNode;try{lg(i,r)}catch(c){tn(n,n.return,c)}}}function xv(n,i,r){r.props=tr(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(c){tn(n,i,c)}}function dl(n,i){try{var r=n.ref;if(r!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof r=="function"?n.refCleanup=r(c):r.current=c}}catch(p){tn(n,i,p)}}function ha(n,i){var r=n.ref,c=n.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(p){tn(n,i,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(p){tn(n,i,p)}else r.current=null}function yv(n){var i=n.type,r=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break e;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(p){tn(n,n.return,p)}}function jh(n,i,r){try{var c=n.stateNode;nb(c,n.type,r,i),c[vn]=i}catch(p){tn(n,n.return,p)}}function Sv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&bs(n.type)||n.tag===4}function qh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&bs(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yh(n,i,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(n,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(n),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Ra));else if(c!==4&&(c===27&&bs(n.type)&&(r=n.stateNode,i=null),n=n.child,n!==null))for(Yh(n,i,r),n=n.sibling;n!==null;)Yh(n,i,r),n=n.sibling}function Jc(n,i,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?r.insertBefore(n,i):r.appendChild(n);else if(c!==4&&(c===27&&bs(n.type)&&(r=n.stateNode),n=n.child,n!==null))for(Jc(n,i,r),n=n.sibling;n!==null;)Jc(n,i,r),n=n.sibling}function Mv(n){var i=n.stateNode,r=n.memoizedProps;try{for(var c=n.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);Qn(i,c,r),i[Pt]=n,i[vn]=r}catch(m){tn(n,n.return,m)}}var Fa=!1,Cn=!1,Zh=!1,bv=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function OM(n,i){if(n=n.containerInfo,gd=_u,n=O0(n),Vf(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else e:{r=(r=n.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var p=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var b=0,C=-1,k=-1,ce=0,Te=0,De=n,de=null;t:for(;;){for(var Se;De!==r||p!==0&&De.nodeType!==3||(C=b+p),De!==m||c!==0&&De.nodeType!==3||(k=b+c),De.nodeType===3&&(b+=De.nodeValue.length),(Se=De.firstChild)!==null;)de=De,De=Se;for(;;){if(De===n)break t;if(de===r&&++ce===p&&(C=b),de===m&&++Te===c&&(k=b),(Se=De.nextSibling)!==null)break;De=de,de=De.parentNode}De=Se}r=C===-1||k===-1?null:{start:C,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(vd={focusedElem:n,selectionRange:r},_u=!1,Bn=i;Bn!==null;)if(i=Bn,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Bn=n;else for(;Bn!==null;){switch(i=Bn,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(r=0;r<n.length;r++)p=n[r],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,r=i,p=m.memoizedProps,m=m.memoizedState,c=r.stateNode;try{var it=tr(r.type,p);n=c.getSnapshotBeforeUpdate(it,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(gt){tn(r,r.return,gt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,r=n.nodeType,r===9)yd(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":yd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Bn=n;break}Bn=i.return}}function Tv(n,i,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:Ha(n,r),c&4&&hl(5,r);break;case 1:if(Ha(n,r),c&4)if(n=r.stateNode,i===null)try{n.componentDidMount()}catch(b){tn(r,r.return,b)}else{var p=tr(r.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(p,i,n.__reactInternalSnapshotBeforeUpdate)}catch(b){tn(r,r.return,b)}}c&64&&_v(r),c&512&&dl(r,r.return);break;case 3:if(Ha(n,r),c&64&&(n=r.updateQueue,n!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{lg(n,i)}catch(b){tn(r,r.return,b)}}break;case 27:i===null&&c&4&&Mv(r);case 26:case 5:Ha(n,r),i===null&&c&4&&yv(r),c&512&&dl(r,r.return);break;case 12:Ha(n,r);break;case 31:Ha(n,r),c&4&&wv(n,r);break;case 13:Ha(n,r),c&4&&Rv(n,r),c&64&&(n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(r=XM.bind(null,r),ub(n,r))));break;case 22:if(c=r.memoizedState!==null||Fa,!c){i=i!==null&&i.memoizedState!==null||Cn,p=Fa;var m=Cn;Fa=c,(Cn=i)&&!m?Ga(n,r,(r.subtreeFlags&8772)!==0):Ha(n,r),Fa=p,Cn=m}break;case 30:break;default:Ha(n,r)}}function Ev(n){var i=n.alternate;i!==null&&(n.alternate=null,Ev(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Hs(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var xn=null,hi=!1;function Ba(n,i,r){for(r=r.child;r!==null;)Av(n,i,r),r=r.sibling}function Av(n,i,r){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(ge,r)}catch{}switch(r.tag){case 26:Cn||ha(r,i),Ba(n,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Cn||ha(r,i);var c=xn,p=hi;bs(r.type)&&(xn=r.stateNode,hi=!1),Ba(n,i,r),Ml(r.stateNode),xn=c,hi=p;break;case 5:Cn||ha(r,i);case 6:if(c=xn,p=hi,xn=null,Ba(n,i,r),xn=c,hi=p,xn!==null)if(hi)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(r.stateNode)}catch(m){tn(r,i,m)}else try{xn.removeChild(r.stateNode)}catch(m){tn(r,i,m)}break;case 18:xn!==null&&(hi?(n=xn,__(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,r.stateNode),to(n)):__(xn,r.stateNode));break;case 4:c=xn,p=hi,xn=r.stateNode.containerInfo,hi=!0,Ba(n,i,r),xn=c,hi=p;break;case 0:case 11:case 14:case 15:gs(2,r,i),Cn||gs(4,r,i),Ba(n,i,r);break;case 1:Cn||(ha(r,i),c=r.stateNode,typeof c.componentWillUnmount=="function"&&xv(r,i,c)),Ba(n,i,r);break;case 21:Ba(n,i,r);break;case 22:Cn=(c=Cn)||r.memoizedState!==null,Ba(n,i,r),Cn=c;break;default:Ba(n,i,r)}}function wv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{to(n)}catch(r){tn(i,i.return,r)}}}function Rv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{to(n)}catch(r){tn(i,i.return,r)}}function IM(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new bv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new bv),i;default:throw Error(a(435,n.tag))}}function Qc(n,i){var r=IM(n);i.forEach(function(c){if(!r.has(c)){r.add(c);var p=WM.bind(null,n,c);c.then(p,p)}})}function di(n,i){var r=i.deletions;if(r!==null)for(var c=0;c<r.length;c++){var p=r[c],m=n,b=i,C=b;e:for(;C!==null;){switch(C.tag){case 27:if(bs(C.type)){xn=C.stateNode,hi=!1;break e}break;case 5:xn=C.stateNode,hi=!1;break e;case 3:case 4:xn=C.stateNode.containerInfo,hi=!0;break e}C=C.return}if(xn===null)throw Error(a(160));Av(m,b,p),xn=null,hi=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Cv(i,n),i=i.sibling}var Qi=null;function Cv(n,i){var r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:di(i,n),pi(n),c&4&&(gs(3,n,n.return),hl(3,n),gs(5,n,n.return));break;case 1:di(i,n),pi(n),c&512&&(Cn||r===null||ha(r,r.return)),c&64&&Fa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var p=Qi;if(di(i,n),pi(n),c&512&&(Cn||r===null||ha(r,r.return)),c&4){var m=r!==null?r.memoizedState:null;if(c=n.memoizedState,r===null)if(c===null)if(n.stateNode===null){e:{c=n.type,r=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":m=p.getElementsByTagName("title")[0],(!m||m[Aa]||m[Pt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(c),p.head.insertBefore(m,p.querySelector("head > title"))),Qn(m,c,r),m[Pt]=n,D(m),c=m;break e;case"link":var b=C_("link","href",p).get(c+(r.href||""));if(b){for(var C=0;C<b.length;C++)if(m=b[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(C,1);break t}}m=p.createElement(c),Qn(m,c,r),p.head.appendChild(m);break;case"meta":if(b=C_("meta","content",p).get(c+(r.content||""))){for(C=0;C<b.length;C++)if(m=b[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(C,1);break t}}m=p.createElement(c),Qn(m,c,r),p.head.appendChild(m);break;default:throw Error(a(468,c))}m[Pt]=n,D(m),c=m}n.stateNode=c}else D_(p,n.type,n.stateNode);else n.stateNode=R_(p,c,n.memoizedProps);else m!==c?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,c===null?D_(p,n.type,n.stateNode):R_(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&jh(n,n.memoizedProps,r.memoizedProps)}break;case 27:di(i,n),pi(n),c&512&&(Cn||r===null||ha(r,r.return)),r!==null&&c&4&&jh(n,n.memoizedProps,r.memoizedProps);break;case 5:if(di(i,n),pi(n),c&512&&(Cn||r===null||ha(r,r.return)),n.flags&32){p=n.stateNode;try{Nn(p,"")}catch(it){tn(n,n.return,it)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,jh(n,p,r!==null?r.memoizedProps:p)),c&1024&&(Zh=!0);break;case 6:if(di(i,n),pi(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,r=n.stateNode;try{r.nodeValue=c}catch(it){tn(n,n.return,it)}}break;case 3:if(pu=null,p=Qi,Qi=hu(i.containerInfo),di(i,n),Qi=p,pi(n),c&4&&r!==null&&r.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(it){tn(n,n.return,it)}Zh&&(Zh=!1,Dv(n));break;case 4:c=Qi,Qi=hu(n.stateNode.containerInfo),di(i,n),pi(n),Qi=c;break;case 12:di(i,n),pi(n);break;case 31:di(i,n),pi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Qc(n,c)));break;case 13:di(i,n),pi(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(eu=T()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Qc(n,c)));break;case 22:p=n.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,ce=Fa,Te=Cn;if(Fa=ce||p,Cn=Te||k,di(i,n),Cn=Te,Fa=ce,pi(n),c&8192)e:for(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(r===null||k||Fa||Cn||nr(n)),r=null,i=n;;){if(i.tag===5||i.tag===26){if(r===null){k=r=i;try{if(m=k.stateNode,p)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=k.stateNode;var De=k.memoizedProps.style,de=De!=null&&De.hasOwnProperty("display")?De.display:null;C.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(it){tn(k,k.return,it)}}}else if(i.tag===6){if(r===null){k=i;try{k.stateNode.nodeValue=p?"":k.memoizedProps}catch(it){tn(k,k.return,it)}}}else if(i.tag===18){if(r===null){k=i;try{var Se=k.stateNode;p?x_(Se,!0):x_(k.stateNode,!1)}catch(it){tn(k,k.return,it)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,Qc(n,r))));break;case 19:di(i,n),pi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Qc(n,c)));break;case 30:break;case 21:break;default:di(i,n),pi(n)}}function pi(n){var i=n.flags;if(i&2){try{for(var r,c=n.return;c!==null;){if(Sv(c)){r=c;break}c=c.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var p=r.stateNode,m=qh(n);Jc(n,m,p);break;case 5:var b=r.stateNode;r.flags&32&&(Nn(b,""),r.flags&=-33);var C=qh(n);Jc(n,C,b);break;case 3:case 4:var k=r.stateNode.containerInfo,ce=qh(n);Yh(n,ce,k);break;default:throw Error(a(161))}}catch(Te){tn(n,n.return,Te)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Dv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Dv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Ha(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Tv(n,i.alternate,i),i=i.sibling}function nr(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:gs(4,i,i.return),nr(i);break;case 1:ha(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&xv(i,i.return,r),nr(i);break;case 27:Ml(i.stateNode);case 26:case 5:ha(i,i.return),nr(i);break;case 22:i.memoizedState===null&&nr(i);break;case 30:nr(i);break;default:nr(i)}n=n.sibling}}function Ga(n,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=n,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ga(p,m,r),hl(4,m);break;case 1:if(Ga(p,m,r),c=m,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(ce){tn(c,c.return,ce)}if(c=m,p=c.updateQueue,p!==null){var C=c.stateNode;try{var k=p.shared.hiddenCallbacks;if(k!==null)for(p.shared.hiddenCallbacks=null,p=0;p<k.length;p++)og(k[p],C)}catch(ce){tn(c,c.return,ce)}}r&&b&64&&_v(m),dl(m,m.return);break;case 27:Mv(m);case 26:case 5:Ga(p,m,r),r&&c===null&&b&4&&yv(m),dl(m,m.return);break;case 12:Ga(p,m,r);break;case 31:Ga(p,m,r),r&&b&4&&wv(p,m);break;case 13:Ga(p,m,r),r&&b&4&&Rv(p,m);break;case 22:m.memoizedState===null&&Ga(p,m,r),dl(m,m.return);break;case 30:break;default:Ga(p,m,r)}i=i.sibling}}function Kh(n,i){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&$o(r))}function Jh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&$o(n))}function $i(n,i,r,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Nv(n,i,r,c),i=i.sibling}function Nv(n,i,r,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:$i(n,i,r,c),p&2048&&hl(9,i);break;case 1:$i(n,i,r,c);break;case 3:$i(n,i,r,c),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&$o(n)));break;case 12:if(p&2048){$i(n,i,r,c),n=i.stateNode;try{var m=i.memoizedProps,b=m.id,C=m.onPostCommit;typeof C=="function"&&C(b,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(k){tn(i,i.return,k)}}else $i(n,i,r,c);break;case 31:$i(n,i,r,c);break;case 13:$i(n,i,r,c);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?$i(n,i,r,c):pl(n,i):m._visibility&2?$i(n,i,r,c):(m._visibility|=2,Xr(n,i,r,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&Kh(b,i);break;case 24:$i(n,i,r,c),p&2048&&Jh(i.alternate,i);break;default:$i(n,i,r,c)}}function Xr(n,i,r,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,b=i,C=r,k=c,ce=b.flags;switch(b.tag){case 0:case 11:case 15:Xr(m,b,C,k,p),hl(8,b);break;case 23:break;case 22:var Te=b.stateNode;b.memoizedState!==null?Te._visibility&2?Xr(m,b,C,k,p):pl(m,b):(Te._visibility|=2,Xr(m,b,C,k,p)),p&&ce&2048&&Kh(b.alternate,b);break;case 24:Xr(m,b,C,k,p),p&&ce&2048&&Jh(b.alternate,b);break;default:Xr(m,b,C,k,p)}i=i.sibling}}function pl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=n,c=i,p=c.flags;switch(c.tag){case 22:pl(r,c),p&2048&&Kh(c.alternate,c);break;case 24:pl(r,c),p&2048&&Jh(c.alternate,c);break;default:pl(r,c)}i=i.sibling}}var ml=8192;function Wr(n,i,r){if(n.subtreeFlags&ml)for(n=n.child;n!==null;)Lv(n,i,r),n=n.sibling}function Lv(n,i,r){switch(n.tag){case 26:Wr(n,i,r),n.flags&ml&&n.memoizedState!==null&&Mb(r,Qi,n.memoizedState,n.memoizedProps);break;case 5:Wr(n,i,r);break;case 3:case 4:var c=Qi;Qi=hu(n.stateNode.containerInfo),Wr(n,i,r),Qi=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=ml,ml=16777216,Wr(n,i,r),ml=c):Wr(n,i,r));break;default:Wr(n,i,r)}}function Uv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function gl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Bn=c,Ov(c,n)}Uv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pv(n),n=n.sibling}function Pv(n){switch(n.tag){case 0:case 11:case 15:gl(n),n.flags&2048&&gs(9,n,n.return);break;case 3:gl(n);break;case 12:gl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,$c(n)):gl(n);break;default:gl(n)}}function $c(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Bn=c,Ov(c,n)}Uv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:gs(8,i,i.return),$c(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,$c(i));break;default:$c(i)}n=n.sibling}}function Ov(n,i){for(;Bn!==null;){var r=Bn;switch(r.tag){case 0:case 11:case 15:gs(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:$o(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,Bn=c;else e:for(r=n;Bn!==null;){c=Bn;var p=c.sibling,m=c.return;if(Ev(c),c===r){Bn=null;break e}if(p!==null){p.return=m,Bn=p;break e}Bn=m}}}var zM={getCacheForType:function(n){var i=Kn(An),r=i.data.get(n);return r===void 0&&(r=n(),i.data.set(n,r)),r},cacheSignal:function(){return Kn(An).controller.signal}},FM=typeof WeakMap=="function"?WeakMap:Map,Zt=0,un=null,Ot=null,Bt=0,en=0,Ei=null,vs=!1,jr=!1,Qh=!1,Va=0,bn=0,_s=0,ir=0,$h=0,Ai=0,qr=0,vl=null,mi=null,ed=!1,eu=0,Iv=0,tu=1/0,nu=null,xs=null,Ln=0,ys=null,Yr=null,ka=0,td=0,nd=null,zv=null,_l=0,id=null;function wi(){return(Zt&2)!==0&&Bt!==0?Bt&-Bt:B.T!==null?cd():Dt()}function Fv(){if(Ai===0)if((Bt&536870912)===0||Vt){var n=Ne;Ne<<=1,(Ne&3932160)===0&&(Ne=262144),Ai=n}else Ai=536870912;return n=bi.current,n!==null&&(n.flags|=32),Ai}function gi(n,i,r){(n===un&&(en===2||en===9)||n.cancelPendingCommit!==null)&&(Zr(n,0),Ss(n,Bt,Ai,!1)),Qt(n,r),((Zt&2)===0||n!==un)&&(n===un&&((Zt&2)===0&&(ir|=r),bn===4&&Ss(n,Bt,Ai,!1)),da(n))}function Bv(n,i,r){if((Zt&6)!==0)throw Error(a(327));var c=!r&&(i&127)===0&&(i&n.expiredLanes)===0||Be(n,i),p=c?GM(n,i):sd(n,i,!0),m=c;do{if(p===0){jr&&!c&&Ss(n,i,0,!1);break}else{if(r=n.current.alternate,m&&!BM(r)){p=sd(n,i,!1),m=!1;continue}if(p===2){if(m=i,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var C=n;p=vl;var k=C.current.memoizedState.isDehydrated;if(k&&(Zr(C,b).flags|=256),b=sd(C,b,!1),b!==2){if(Qh&&!k){C.errorRecoveryDisabledLanes|=m,ir|=m,p=4;break e}m=mi,mi=p,m!==null&&(mi===null?mi=m:mi.push.apply(mi,m))}p=b}if(m=!1,p!==2)continue}}if(p===1){Zr(n,0),Ss(n,i,0,!0);break}e:{switch(c=n,m=p,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ss(c,i,Ai,!vs);break e;case 2:mi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=eu+300-T(),10<p)){if(Ss(c,i,Ai,!vs),Ae(c,0,!0)!==0)break e;ka=i,c.timeoutHandle=g_(Hv.bind(null,c,r,mi,nu,ed,i,Ai,ir,qr,vs,m,"Throttled",-0,0),p);break e}Hv(c,r,mi,nu,ed,i,Ai,ir,qr,vs,m,null,-0,0)}}break}while(!0);da(n)}function Hv(n,i,r,c,p,m,b,C,k,ce,Te,De,de,Se){if(n.timeoutHandle=-1,De=i.subtreeFlags,De&8192||(De&16785408)===16785408){De={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ra},Lv(i,m,De);var it=(m&62914560)===m?eu-T():(m&4194048)===m?Iv-T():0;if(it=bb(De,it),it!==null){ka=m,n.cancelPendingCommit=it(Yv.bind(null,n,i,m,r,c,p,b,C,k,Te,De,null,de,Se)),Ss(n,m,b,!ce);return}}Yv(n,i,m,r,c,p,b,C,k)}function BM(n){for(var i=n;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var p=r[c],m=p.getSnapshot;p=p.value;try{if(!Si(m(),p))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ss(n,i,r,c){i&=~$h,i&=~ir,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var p=i;0<p;){var m=31-He(p),b=1<<m;c[m]=-1,p&=~b}r!==0&&ai(n,r,i)}function iu(){return(Zt&6)===0?(xl(0),!1):!0}function ad(){if(Ot!==null){if(en===0)var n=Ot.return;else n=Ot,La=Ys=null,yh(n),Br=null,tl=0,n=Ot;for(;n!==null;)vv(n.alternate,n),n=n.return;Ot=null}}function Zr(n,i){var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,sb(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),ka=0,ad(),un=n,Ot=r=Da(n.current,null),Bt=i,en=0,Ei=null,vs=!1,jr=Be(n,i),Qh=!1,qr=Ai=$h=ir=_s=bn=0,mi=vl=null,ed=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var p=31-He(c),m=1<<p;i|=n[p],c&=~m}return Va=i,Tc(),r}function Gv(n,i){Tt=null,B.H=cl,i===Fr||i===Lc?(i=ig(),en=3):i===lh?(i=ig(),en=4):en=i===Ih?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ei=i,Ot===null&&(bn=1,jc(n,Ii(i,n.current)))}function Vv(){var n=bi.current;return n===null?!0:(Bt&4194048)===Bt?Hi===null:(Bt&62914560)===Bt||(Bt&536870912)!==0?n===Hi:!1}function kv(){var n=B.H;return B.H=cl,n===null?cl:n}function Xv(){var n=B.A;return B.A=zM,n}function au(){bn=4,vs||(Bt&4194048)!==Bt&&bi.current!==null||(jr=!0),(_s&134217727)===0&&(ir&134217727)===0||un===null||Ss(un,Bt,Ai,!1)}function sd(n,i,r){var c=Zt;Zt|=2;var p=kv(),m=Xv();(un!==n||Bt!==i)&&(nu=null,Zr(n,i)),i=!1;var b=bn;e:do try{if(en!==0&&Ot!==null){var C=Ot,k=Ei;switch(en){case 8:ad(),b=6;break e;case 3:case 2:case 9:case 6:bi.current===null&&(i=!0);var ce=en;if(en=0,Ei=null,Kr(n,C,k,ce),r&&jr){b=0;break e}break;default:ce=en,en=0,Ei=null,Kr(n,C,k,ce)}}HM(),b=bn;break}catch(Te){Gv(n,Te)}while(!0);return i&&n.shellSuspendCounter++,La=Ys=null,Zt=c,B.H=p,B.A=m,Ot===null&&(un=null,Bt=0,Tc()),b}function HM(){for(;Ot!==null;)Wv(Ot)}function GM(n,i){var r=Zt;Zt|=2;var c=kv(),p=Xv();un!==n||Bt!==i?(nu=null,tu=T()+500,Zr(n,i)):jr=Be(n,i);e:do try{if(en!==0&&Ot!==null){i=Ot;var m=Ei;t:switch(en){case 1:en=0,Ei=null,Kr(n,i,m,1);break;case 2:case 9:if(tg(m)){en=0,Ei=null,jv(i);break}i=function(){en!==2&&en!==9||un!==n||(en=7),da(n)},m.then(i,i);break e;case 3:en=7;break e;case 4:en=5;break e;case 7:tg(m)?(en=0,Ei=null,jv(i)):(en=0,Ei=null,Kr(n,i,m,7));break;case 5:var b=null;switch(Ot.tag){case 26:b=Ot.memoizedState;case 5:case 27:var C=Ot;if(b?N_(b):C.stateNode.complete){en=0,Ei=null;var k=C.sibling;if(k!==null)Ot=k;else{var ce=C.return;ce!==null?(Ot=ce,su(ce)):Ot=null}break t}}en=0,Ei=null,Kr(n,i,m,5);break;case 6:en=0,Ei=null,Kr(n,i,m,6);break;case 8:ad(),bn=6;break e;default:throw Error(a(462))}}VM();break}catch(Te){Gv(n,Te)}while(!0);return La=Ys=null,B.H=c,B.A=p,Zt=r,Ot!==null?0:(un=null,Bt=0,Tc(),bn)}function VM(){for(;Ot!==null&&!Oe();)Wv(Ot)}function Wv(n){var i=mv(n.alternate,n,Va);n.memoizedProps=n.pendingProps,i===null?su(n):Ot=i}function jv(n){var i=n,r=i.alternate;switch(i.tag){case 15:case 0:i=cv(r,i,i.pendingProps,i.type,void 0,Bt);break;case 11:i=cv(r,i,i.pendingProps,i.type.render,i.ref,Bt);break;case 5:yh(i);default:vv(r,i),i=Ot=X0(i,Va),i=mv(r,i,Va)}n.memoizedProps=n.pendingProps,i===null?su(n):Ot=i}function Kr(n,i,r,c){La=Ys=null,yh(i),Br=null,tl=0;var p=i.return;try{if(DM(n,p,i,r,Bt)){bn=1,jc(n,Ii(r,n.current)),Ot=null;return}}catch(m){if(p!==null)throw Ot=p,m;bn=1,jc(n,Ii(r,n.current)),Ot=null;return}i.flags&32768?(Vt||c===1?n=!0:jr||(Bt&536870912)!==0?n=!1:(vs=n=!0,(c===2||c===9||c===3||c===6)&&(c=bi.current,c!==null&&c.tag===13&&(c.flags|=16384))),qv(i,n)):su(i)}function su(n){var i=n;do{if((i.flags&32768)!==0){qv(i,vs);return}n=i.return;var r=UM(i.alternate,i,Va);if(r!==null){Ot=r;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=n}while(i!==null);bn===0&&(bn=5)}function qv(n,i){do{var r=PM(n.alternate,n);if(r!==null){r.flags&=32767,Ot=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(n=n.sibling,n!==null)){Ot=n;return}Ot=n=r}while(n!==null);bn=6,Ot=null}function Yv(n,i,r,c,p,m,b,C,k){n.cancelPendingCommit=null;do ru();while(Ln!==0);if((Zt&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=qf,jt(n,r,m,b,C,k),n===un&&(Ot=un=null,Bt=0),Yr=i,ys=n,ka=r,td=m,nd=p,zv=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,jM(Z,function(){return $v(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,p=V.p,V.p=2,b=Zt,Zt|=4;try{OM(n,i,r)}finally{Zt=b,V.p=p,B.T=c}}Ln=1,Zv(),Kv(),Jv()}}function Zv(){if(Ln===1){Ln=0;var n=ys,i=Yr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var c=V.p;V.p=2;var p=Zt;Zt|=4;try{Cv(i,n);var m=vd,b=O0(n.containerInfo),C=m.focusedElem,k=m.selectionRange;if(b!==C&&C&&C.ownerDocument&&P0(C.ownerDocument.documentElement,C)){if(k!==null&&Vf(C)){var ce=k.start,Te=k.end;if(Te===void 0&&(Te=ce),"selectionStart"in C)C.selectionStart=ce,C.selectionEnd=Math.min(Te,C.value.length);else{var De=C.ownerDocument||document,de=De&&De.defaultView||window;if(de.getSelection){var Se=de.getSelection(),it=C.textContent.length,gt=Math.min(k.start,it),on=k.end===void 0?gt:Math.min(k.end,it);!Se.extend&&gt>on&&(b=on,on=gt,gt=b);var $=U0(C,gt),Y=U0(C,on);if($&&Y&&(Se.rangeCount!==1||Se.anchorNode!==$.node||Se.anchorOffset!==$.offset||Se.focusNode!==Y.node||Se.focusOffset!==Y.offset)){var le=De.createRange();le.setStart($.node,$.offset),Se.removeAllRanges(),gt>on?(Se.addRange(le),Se.extend(Y.node,Y.offset)):(le.setEnd(Y.node,Y.offset),Se.addRange(le))}}}}for(De=[],Se=C;Se=Se.parentNode;)Se.nodeType===1&&De.push({element:Se,left:Se.scrollLeft,top:Se.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<De.length;C++){var we=De[C];we.element.scrollLeft=we.left,we.element.scrollTop=we.top}}_u=!!gd,vd=gd=null}finally{Zt=p,V.p=c,B.T=r}}n.current=i,Ln=2}}function Kv(){if(Ln===2){Ln=0;var n=ys,i=Yr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var c=V.p;V.p=2;var p=Zt;Zt|=4;try{Tv(n,i.alternate,i)}finally{Zt=p,V.p=c,B.T=r}}Ln=3}}function Jv(){if(Ln===4||Ln===3){Ln=0,P();var n=ys,i=Yr,r=ka,c=zv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,Yr=ys=null,Qv(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(xs=null),Ut(r),i=i.stateNode,J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(ge,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=B.T,p=V.p,V.p=2,B.T=null;try{for(var m=n.onRecoverableError,b=0;b<c.length;b++){var C=c[b];m(C.value,{componentStack:C.stack})}}finally{B.T=i,V.p=p}}(ka&3)!==0&&ru(),da(n),p=n.pendingLanes,(r&261930)!==0&&(p&42)!==0?n===id?_l++:(_l=0,id=n):_l=0,xl(0)}}function Qv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,$o(i)))}function ru(){return Zv(),Kv(),Jv(),$v()}function $v(){if(Ln!==5)return!1;var n=ys,i=td;td=0;var r=Ut(ka),c=B.T,p=V.p;try{V.p=32>r?32:r,B.T=null,r=nd,nd=null;var m=ys,b=ka;if(Ln=0,Yr=ys=null,ka=0,(Zt&6)!==0)throw Error(a(331));var C=Zt;if(Zt|=4,Pv(m.current),Nv(m,m.current,b,r),Zt=C,xl(0,!1),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(ge,m)}catch{}return!0}finally{V.p=p,B.T=c,Qv(n,i)}}function e_(n,i,r){i=Ii(r,i),i=Oh(n.stateNode,i,2),n=ds(n,i,2),n!==null&&(Qt(n,2),da(n))}function tn(n,i,r){if(n.tag===3)e_(n,n,r);else for(;i!==null;){if(i.tag===3){e_(i,n,r);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xs===null||!xs.has(c))){n=Ii(r,n),r=tv(2),c=ds(i,r,2),c!==null&&(nv(r,c,i,n),Qt(c,2),da(c));break}}i=i.return}}function rd(n,i,r){var c=n.pingCache;if(c===null){c=n.pingCache=new FM;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(r)||(Qh=!0,p.add(r),n=kM.bind(null,n,i,r),i.then(n,n))}function kM(n,i,r){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,un===n&&(Bt&r)===r&&(bn===4||bn===3&&(Bt&62914560)===Bt&&300>T()-eu?(Zt&2)===0&&Zr(n,0):$h|=r,qr===Bt&&(qr=0)),da(n)}function t_(n,i){i===0&&(i=At()),n=Ws(n,i),n!==null&&(Qt(n,i),da(n))}function XM(n){var i=n.memoizedState,r=0;i!==null&&(r=i.retryLane),t_(n,r)}function WM(n,i){var r=0;switch(n.tag){case 31:case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(r=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),t_(n,r)}function jM(n,i){return qe(n,i)}var ou=null,Jr=null,od=!1,lu=!1,ld=!1,Ms=0;function da(n){n!==Jr&&n.next===null&&(Jr===null?ou=Jr=n:Jr=Jr.next=n),lu=!0,od||(od=!0,YM())}function xl(n,i){if(!ld&&lu){ld=!0;do for(var r=!1,c=ou;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var m=0;else{var b=c.suspendedLanes,C=c.pingedLanes;m=(1<<31-He(42|n)+1)-1,m&=p&~(b&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,s_(c,m))}else m=Bt,m=Ae(c,c===un?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Be(c,m)||(r=!0,s_(c,m));c=c.next}while(r);ld=!1}}function qM(){n_()}function n_(){lu=od=!1;var n=0;Ms!==0&&ab()&&(n=Ms);for(var i=T(),r=null,c=ou;c!==null;){var p=c.next,m=i_(c,i);m===0?(c.next=null,r===null?ou=p:r.next=p,p===null&&(Jr=r)):(r=c,(n!==0||(m&3)!==0)&&(lu=!0)),c=p}Ln!==0&&Ln!==5||xl(n),Ms!==0&&(Ms=0)}function i_(n,i){for(var r=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-He(m),C=1<<b,k=p[b];k===-1?((C&r)===0||(C&c)!==0)&&(p[b]=ht(C,i)):k<=i&&(n.expiredLanes|=C),m&=~C}if(i=un,r=Bt,r=Ae(n,n===i?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,r===0||n===i&&(en===2||en===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&at(c),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||Be(n,r)){if(i=r&-r,i===n.callbackPriority)return i;switch(c!==null&&at(c),Ut(r)){case 2:case 8:r=me;break;case 32:r=Z;break;case 268435456:r=ae;break;default:r=Z}return c=a_.bind(null,n),r=qe(r,c),n.callbackPriority=i,n.callbackNode=r,i}return c!==null&&c!==null&&at(c),n.callbackPriority=2,n.callbackNode=null,2}function a_(n,i){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var r=n.callbackNode;if(ru()&&n.callbackNode!==r)return null;var c=Bt;return c=Ae(n,n===un?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(Bv(n,c,i),i_(n,T()),n.callbackNode!=null&&n.callbackNode===r?a_.bind(null,n):null)}function s_(n,i){if(ru())return null;Bv(n,i,!0)}function YM(){rb(function(){(Zt&6)!==0?qe(ye,qM):n_()})}function cd(){if(Ms===0){var n=Ir;n===0&&(n=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Ms=n}return Ms}function r_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:gc(""+n)}function o_(n,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,n.id&&r.setAttribute("form",n.id),i.parentNode.insertBefore(r,i),n=new FormData(n),r.parentNode.removeChild(r),n}function ZM(n,i,r,c,p){if(i==="submit"&&r&&r.stateNode===p){var m=r_((p[vn]||null).action),b=c.submitter;b&&(i=(i=b[vn]||null)?r_(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var C=new yc("action","action",null,c,p);n.push({event:C,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ms!==0){var k=b?o_(p,b):new FormData(p);Ch(r,{pending:!0,data:k,method:p.method,action:m},null,k)}}else typeof m=="function"&&(C.preventDefault(),k=b?o_(p,b):new FormData(p),Ch(r,{pending:!0,data:k,method:p.method,action:m},m,k))},currentTarget:p}]})}}for(var ud=0;ud<jf.length;ud++){var fd=jf[ud],KM=fd.toLowerCase(),JM=fd[0].toUpperCase()+fd.slice(1);Ji(KM,"on"+JM)}Ji(F0,"onAnimationEnd"),Ji(B0,"onAnimationIteration"),Ji(H0,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(dM,"onTransitionRun"),Ji(pM,"onTransitionStart"),Ji(mM,"onTransitionCancel"),Ji(G0,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),he("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),he("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),he("onBeforeInput",["compositionend","keypress","textInput","paste"]),he("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function l_(n,i){i=(i&4)!==0;for(var r=0;r<n.length;r++){var c=n[r],p=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var C=c[b],k=C.instance,ce=C.currentTarget;if(C=C.listener,k!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=ce;try{m(p)}catch(Te){bc(Te)}p.currentTarget=null,m=k}else for(b=0;b<c.length;b++){if(C=c[b],k=C.instance,ce=C.currentTarget,C=C.listener,k!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=ce;try{m(p)}catch(Te){bc(Te)}p.currentTarget=null,m=k}}}}function It(n,i){var r=i[ca];r===void 0&&(r=i[ca]=new Set);var c=n+"__bubble";r.has(c)||(c_(i,n,2,!1),r.add(c))}function hd(n,i,r){var c=0;i&&(c|=4),c_(r,n,c,i)}var cu="_reactListening"+Math.random().toString(36).slice(2);function dd(n){if(!n[cu]){n[cu]=!0,Q.forEach(function(r){r!=="selectionchange"&&(QM.has(r)||hd(r,!1,n),hd(r,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[cu]||(i[cu]=!0,hd("selectionchange",!1,i))}}function c_(n,i,r,c){switch(F_(i)){case 2:var p=Ab;break;case 8:p=wb;break;default:p=Rd}r=p.bind(null,i,r,n),p=void 0,!Uf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,r,{capture:!0,passive:p}):n.addEventListener(i,r,!0):p!==void 0?n.addEventListener(i,r,{passive:p}):n.addEventListener(i,r,!1)}function pd(n,i,r,c,p){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var C=c.stateNode.containerInfo;if(C===p)break;if(b===4)for(b=c.return;b!==null;){var k=b.tag;if((k===3||k===4)&&b.stateNode.containerInfo===p)return;b=b.return}for(;C!==null;){if(b=is(C),b===null)return;if(k=b.tag,k===5||k===6||k===26||k===27){c=m=b;continue e}C=C.parentNode}}c=c.return}p0(function(){var ce=m,Te=Nf(r),De=[];e:{var de=V0.get(n);if(de!==void 0){var Se=yc,it=n;switch(n){case"keypress":if(_c(r)===0)break e;case"keydown":case"keyup":Se=WS;break;case"focusin":it="focus",Se=zf;break;case"focusout":it="blur",Se=zf;break;case"beforeblur":case"afterblur":Se=zf;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Se=v0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Se=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Se=YS;break;case F0:case B0:case H0:Se=IS;break;case G0:Se=KS;break;case"scroll":case"scrollend":Se=NS;break;case"wheel":Se=QS;break;case"copy":case"cut":case"paste":Se=FS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Se=x0;break;case"toggle":case"beforetoggle":Se=eM}var gt=(i&4)!==0,on=!gt&&(n==="scroll"||n==="scrollend"),$=gt?de!==null?de+"Capture":null:de;gt=[];for(var Y=ce,le;Y!==null;){var we=Y;if(le=we.stateNode,we=we.tag,we!==5&&we!==26&&we!==27||le===null||$===null||(we=Vo(Y,$),we!=null&&gt.push(Sl(Y,we,le))),on)break;Y=Y.return}0<gt.length&&(de=new Se(de,it,null,r,Te),De.push({event:de,listeners:gt}))}}if((i&7)===0){e:{if(de=n==="mouseover"||n==="pointerover",Se=n==="mouseout"||n==="pointerout",de&&r!==Df&&(it=r.relatedTarget||r.fromElement)&&(is(it)||it[kn]))break e;if((Se||de)&&(de=Te.window===Te?Te:(de=Te.ownerDocument)?de.defaultView||de.parentWindow:window,Se?(it=r.relatedTarget||r.toElement,Se=ce,it=it?is(it):null,it!==null&&(on=l(it),gt=it.tag,it!==on||gt!==5&&gt!==27&&gt!==6)&&(it=null)):(Se=null,it=ce),Se!==it)){if(gt=v0,we="onMouseLeave",$="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(gt=x0,we="onPointerLeave",$="onPointerEnter",Y="pointer"),on=Se==null?de:Gs(Se),le=it==null?de:Gs(it),de=new gt(we,Y+"leave",Se,r,Te),de.target=on,de.relatedTarget=le,we=null,is(Te)===ce&&(gt=new gt($,Y+"enter",it,r,Te),gt.target=le,gt.relatedTarget=on,we=gt),on=we,Se&&it)t:{for(gt=$M,$=Se,Y=it,le=0,we=$;we;we=gt(we))le++;we=0;for(var dt=Y;dt;dt=gt(dt))we++;for(;0<le-we;)$=gt($),le--;for(;0<we-le;)Y=gt(Y),we--;for(;le--;){if($===Y||Y!==null&&$===Y.alternate){gt=$;break t}$=gt($),Y=gt(Y)}gt=null}else gt=null;Se!==null&&u_(De,de,Se,gt,!1),it!==null&&on!==null&&u_(De,on,it,gt,!0)}}e:{if(de=ce?Gs(ce):window,Se=de.nodeName&&de.nodeName.toLowerCase(),Se==="select"||Se==="input"&&de.type==="file")var kt=w0;else if(E0(de))if(R0)kt=uM;else{kt=lM;var lt=oM}else Se=de.nodeName,!Se||Se.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?ce&&Ki(ce.elementType)&&(kt=w0):kt=cM;if(kt&&(kt=kt(n,ce))){A0(De,kt,r,Te);break e}lt&&lt(n,de,ce),n==="focusout"&&ce&&de.type==="number"&&ce.memoizedProps.value!=null&&Wn(de,"number",de.value)}switch(lt=ce?Gs(ce):window,n){case"focusin":(E0(lt)||lt.contentEditable==="true")&&(Rr=lt,kf=ce,Ko=null);break;case"focusout":Ko=kf=Rr=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,I0(De,r,Te);break;case"selectionchange":if(hM)break;case"keydown":case"keyup":I0(De,r,Te)}var wt;if(Bf)e:{switch(n){case"compositionstart":var Ht="onCompositionStart";break e;case"compositionend":Ht="onCompositionEnd";break e;case"compositionupdate":Ht="onCompositionUpdate";break e}Ht=void 0}else wr?b0(n,r)&&(Ht="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(Ht="onCompositionStart");Ht&&(y0&&r.locale!=="ko"&&(wr||Ht!=="onCompositionStart"?Ht==="onCompositionEnd"&&wr&&(wt=m0()):(rs=Te,Pf="value"in rs?rs.value:rs.textContent,wr=!0)),lt=uu(ce,Ht),0<lt.length&&(Ht=new _0(Ht,n,null,r,Te),De.push({event:Ht,listeners:lt}),wt?Ht.data=wt:(wt=T0(r),wt!==null&&(Ht.data=wt)))),(wt=nM?iM(n,r):aM(n,r))&&(Ht=uu(ce,"onBeforeInput"),0<Ht.length&&(lt=new _0("onBeforeInput","beforeinput",null,r,Te),De.push({event:lt,listeners:Ht}),lt.data=wt)),ZM(De,n,ce,r,Te)}l_(De,i)})}function Sl(n,i,r){return{instance:n,listener:i,currentTarget:r}}function uu(n,i){for(var r=i+"Capture",c=[];n!==null;){var p=n,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=Vo(n,r),p!=null&&c.unshift(Sl(n,p,m)),p=Vo(n,i),p!=null&&c.push(Sl(n,p,m))),n.tag===3)return c;n=n.return}return[]}function $M(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function u_(n,i,r,c,p){for(var m=i._reactName,b=[];r!==null&&r!==c;){var C=r,k=C.alternate,ce=C.stateNode;if(C=C.tag,k!==null&&k===c)break;C!==5&&C!==26&&C!==27||ce===null||(k=ce,p?(ce=Vo(r,m),ce!=null&&b.unshift(Sl(r,ce,k))):p||(ce=Vo(r,m),ce!=null&&b.push(Sl(r,ce,k)))),r=r.return}b.length!==0&&n.push({event:i,listeners:b})}var eb=/\r\n?/g,tb=/\u0000|\uFFFD/g;function f_(n){return(typeof n=="string"?n:""+n).replace(eb,`
`).replace(tb,"")}function h_(n,i){return i=f_(i),f_(n)===i}function rn(n,i,r,c,p,m){switch(r){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Nn(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Nn(n,""+c);break;case"className":pt(n,"class",c);break;case"tabIndex":pt(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":pt(n,r,c);break;case"style":Tr(n,c,m);break;case"data":if(i!=="object"){pt(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||r!=="href")){n.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=gc(""+c),n.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&rn(n,i,"name",p.name,p,null),rn(n,i,"formEncType",p.formEncType,p,null),rn(n,i,"formMethod",p.formMethod,p,null),rn(n,i,"formTarget",p.formTarget,p,null)):(rn(n,i,"encType",p.encType,p,null),rn(n,i,"method",p.method,p,null),rn(n,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=gc(""+c),n.setAttribute(r,c);break;case"onClick":c!=null&&(n.onclick=Ra);break;case"onScroll":c!=null&&It("scroll",n);break;case"onScrollEnd":c!=null&&It("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=r}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}r=gc(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""+c):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":c===!0?n.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,c):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(r,c):n.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(r):n.setAttribute(r,c);break;case"popover":It("beforetoggle",n),It("toggle",n),rt(n,"popover",c);break;case"xlinkActuate":ot(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":ot(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":ot(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":ot(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":ot(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":ot(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":ot(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":ot(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":ot(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":rt(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=CS.get(r)||r,rt(n,r,c))}}function md(n,i,r,c,p,m){switch(r){case"style":Tr(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=r}}break;case"children":typeof c=="string"?Nn(n,c):(typeof c=="number"||typeof c=="bigint")&&Nn(n,""+c);break;case"onScroll":c!=null&&It("scroll",n);break;case"onScrollEnd":c!=null&&It("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_e.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(p=r.endsWith("Capture"),i=r.slice(2,p?r.length-7:void 0),m=n[vn]||null,m=m!=null?m[r]:null,typeof m=="function"&&n.removeEventListener(i,m,p),typeof c=="function")){typeof m!="function"&&m!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(i,c,p);break e}r in n?n[r]=c:c===!0?n.setAttribute(r,""):rt(n,r,c)}}}function Qn(n,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":It("error",n),It("load",n);var c=!1,p=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:rn(n,i,m,b,r,null)}}p&&rn(n,i,"srcSet",r.srcSet,r,null),c&&rn(n,i,"src",r.src,r,null);return;case"input":It("invalid",n);var C=m=b=p=null,k=null,ce=null;for(c in r)if(r.hasOwnProperty(c)){var Te=r[c];if(Te!=null)switch(c){case"name":p=Te;break;case"type":b=Te;break;case"checked":k=Te;break;case"defaultChecked":ce=Te;break;case"value":m=Te;break;case"defaultValue":C=Te;break;case"children":case"dangerouslySetInnerHTML":if(Te!=null)throw Error(a(137,i));break;default:rn(n,i,c,Te,r,null)}}wa(n,m,C,k,ce,b,p,!1);return;case"select":It("invalid",n),c=b=m=null;for(p in r)if(r.hasOwnProperty(p)&&(C=r[p],C!=null))switch(p){case"value":m=C;break;case"defaultValue":b=C;break;case"multiple":c=C;default:rn(n,i,p,C,r,null)}i=m,r=b,n.multiple=!!c,i!=null?Pi(n,!!c,i,!1):r!=null&&Pi(n,!!c,r,!0);return;case"textarea":It("invalid",n),m=p=c=null;for(b in r)if(r.hasOwnProperty(b)&&(C=r[b],C!=null))switch(b){case"value":c=C;break;case"defaultValue":p=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:rn(n,i,b,C,r,null)}jn(n,c,p,m);return;case"option":for(k in r)if(r.hasOwnProperty(k)&&(c=r[k],c!=null))switch(k){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:rn(n,i,k,c,r,null)}return;case"dialog":It("beforetoggle",n),It("toggle",n),It("cancel",n),It("close",n);break;case"iframe":case"object":It("load",n);break;case"video":case"audio":for(c=0;c<yl.length;c++)It(yl[c],n);break;case"image":It("error",n),It("load",n);break;case"details":It("toggle",n);break;case"embed":case"source":case"link":It("error",n),It("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in r)if(r.hasOwnProperty(ce)&&(c=r[ce],c!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:rn(n,i,ce,c,r,null)}return;default:if(Ki(i)){for(Te in r)r.hasOwnProperty(Te)&&(c=r[Te],c!==void 0&&md(n,i,Te,c,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(c=r[C],c!=null&&rn(n,i,C,c,r,null))}function nb(n,i,r,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,b=null,C=null,k=null,ce=null,Te=null;for(Se in r){var De=r[Se];if(r.hasOwnProperty(Se)&&De!=null)switch(Se){case"checked":break;case"value":break;case"defaultValue":k=De;default:c.hasOwnProperty(Se)||rn(n,i,Se,null,c,De)}}for(var de in c){var Se=c[de];if(De=r[de],c.hasOwnProperty(de)&&(Se!=null||De!=null))switch(de){case"type":m=Se;break;case"name":p=Se;break;case"checked":ce=Se;break;case"defaultChecked":Te=Se;break;case"value":b=Se;break;case"defaultValue":C=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,i));break;default:Se!==De&&rn(n,i,de,Se,c,De)}}Xn(n,b,C,k,ce,Te,m,p);return;case"select":Se=b=C=de=null;for(m in r)if(k=r[m],r.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":Se=k;default:c.hasOwnProperty(m)||rn(n,i,m,null,c,k)}for(p in c)if(m=c[p],k=r[p],c.hasOwnProperty(p)&&(m!=null||k!=null))switch(p){case"value":de=m;break;case"defaultValue":C=m;break;case"multiple":b=m;default:m!==k&&rn(n,i,p,m,c,k)}i=C,r=b,c=Se,de!=null?Pi(n,!!r,de,!1):!!c!=!!r&&(i!=null?Pi(n,!!r,i,!0):Pi(n,!!r,r?[]:"",!1));return;case"textarea":Se=de=null;for(C in r)if(p=r[C],r.hasOwnProperty(C)&&p!=null&&!c.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:rn(n,i,C,null,c,p)}for(b in c)if(p=c[b],m=r[b],c.hasOwnProperty(b)&&(p!=null||m!=null))switch(b){case"value":de=p;break;case"defaultValue":Se=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==m&&rn(n,i,b,p,c,m)}$t(n,de,Se);return;case"option":for(var it in r)if(de=r[it],r.hasOwnProperty(it)&&de!=null&&!c.hasOwnProperty(it))switch(it){case"selected":n.selected=!1;break;default:rn(n,i,it,null,c,de)}for(k in c)if(de=c[k],Se=r[k],c.hasOwnProperty(k)&&de!==Se&&(de!=null||Se!=null))switch(k){case"selected":n.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:rn(n,i,k,de,c,Se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in r)de=r[gt],r.hasOwnProperty(gt)&&de!=null&&!c.hasOwnProperty(gt)&&rn(n,i,gt,null,c,de);for(ce in c)if(de=c[ce],Se=r[ce],c.hasOwnProperty(ce)&&de!==Se&&(de!=null||Se!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:rn(n,i,ce,de,c,Se)}return;default:if(Ki(i)){for(var on in r)de=r[on],r.hasOwnProperty(on)&&de!==void 0&&!c.hasOwnProperty(on)&&md(n,i,on,void 0,c,de);for(Te in c)de=c[Te],Se=r[Te],!c.hasOwnProperty(Te)||de===Se||de===void 0&&Se===void 0||md(n,i,Te,de,c,Se);return}}for(var $ in r)de=r[$],r.hasOwnProperty($)&&de!=null&&!c.hasOwnProperty($)&&rn(n,i,$,null,c,de);for(De in c)de=c[De],Se=r[De],!c.hasOwnProperty(De)||de===Se||de==null&&Se==null||rn(n,i,De,de,c,Se)}function d_(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ib(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,r=performance.getEntriesByType("resource"),c=0;c<r.length;c++){var p=r[c],m=p.transferSize,b=p.initiatorType,C=p.duration;if(m&&C&&d_(b)){for(b=0,C=p.responseEnd,c+=1;c<r.length;c++){var k=r[c],ce=k.startTime;if(ce>C)break;var Te=k.transferSize,De=k.initiatorType;Te&&d_(De)&&(k=k.responseEnd,b+=Te*(k<C?1:(C-ce)/(k-ce)))}if(--c,i+=8*(m+b)/(p.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var gd=null,vd=null;function fu(n){return n.nodeType===9?n:n.ownerDocument}function p_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function _d(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xd=null;function ab(){var n=window.event;return n&&n.type==="popstate"?n===xd?!1:(xd=n,!0):(xd=null,!1)}var g_=typeof setTimeout=="function"?setTimeout:void 0,sb=typeof clearTimeout=="function"?clearTimeout:void 0,v_=typeof Promise=="function"?Promise:void 0,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof v_<"u"?function(n){return v_.resolve(null).then(n).catch(ob)}:g_;function ob(n){setTimeout(function(){throw n})}function bs(n){return n==="head"}function __(n,i){var r=i,c=0;do{var p=r.nextSibling;if(n.removeChild(r),p&&p.nodeType===8)if(r=p.data,r==="/$"||r==="/&"){if(c===0){n.removeChild(p),to(i);return}c--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")c++;else if(r==="html")Ml(n.ownerDocument.documentElement);else if(r==="head"){r=n.ownerDocument.head,Ml(r);for(var m=r.firstChild;m;){var b=m.nextSibling,C=m.nodeName;m[Aa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&Ml(n.ownerDocument.body);r=p}while(r);to(i)}function x_(n,i){var r=n;n=0;do{var c=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(n===0)break;n--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||n++;r=c}while(r)}function yd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":yd(r),Hs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function lb(n,i,r,c){for(;n.nodeType===1;){var p=r;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Aa])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Gi(n.nextSibling),n===null)break}return null}function cb(n,i,r){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Gi(n.nextSibling),n===null))return null;return n}function y_(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=Gi(n.nextSibling),n===null))return null;return n}function Sd(n){return n.data==="$?"||n.data==="$~"}function Md(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function ub(n,i){var r=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||r.readyState!=="loading")i();else{var c=function(){i(),r.removeEventListener("DOMContentLoaded",c)};r.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Gi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var bd=null;function S_(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"||r==="/&"){if(i===0)return Gi(n.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}n=n.nextSibling}return null}function M_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return n;i--}else r!=="/$"&&r!=="/&"||i++}n=n.previousSibling}return null}function b_(n,i,r){switch(i=fu(r),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Ml(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Hs(n)}var Vi=new Map,T_=new Set;function hu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Xa=V.d;V.d={f:fb,r:hb,D:db,C:pb,L:mb,m:gb,X:_b,S:vb,M:xb};function fb(){var n=Xa.f(),i=iu();return n||i}function hb(n){var i=as(n);i!==null&&i.tag===5&&i.type==="form"?Gg(i):Xa.r(n)}var Qr=typeof document>"u"?null:document;function E_(n,i,r){var c=Qr;if(c&&typeof i=="string"&&i){var p=yt(i);p='link[rel="'+n+'"][href="'+p+'"]',typeof r=="string"&&(p+='[crossorigin="'+r+'"]'),T_.has(p)||(T_.add(p),n={rel:n,crossOrigin:r,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),Qn(i,"link",n),D(i),c.head.appendChild(i)))}}function db(n){Xa.D(n),E_("dns-prefetch",n,null)}function pb(n,i){Xa.C(n,i),E_("preconnect",n,i)}function mb(n,i,r){Xa.L(n,i,r);var c=Qr;if(c&&n&&i){var p='link[rel="preload"][as="'+yt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(p+='[imagesrcset="'+yt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(p+='[imagesizes="'+yt(r.imageSizes)+'"]')):p+='[href="'+yt(n)+'"]';var m=p;switch(i){case"style":m=$r(n);break;case"script":m=eo(n)}Vi.has(m)||(n=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:n,as:i},r),Vi.set(m,n),c.querySelector(p)!==null||i==="style"&&c.querySelector(bl(m))||i==="script"&&c.querySelector(Tl(m))||(i=c.createElement("link"),Qn(i,"link",n),D(i),c.head.appendChild(i)))}}function gb(n,i){Xa.m(n,i);var r=Qr;if(r&&n){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+yt(c)+'"][href="'+yt(n)+'"]',m=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=eo(n)}if(!Vi.has(m)&&(n=v({rel:"modulepreload",href:n},i),Vi.set(m,n),r.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Tl(m)))return}c=r.createElement("link"),Qn(c,"link",n),D(c),r.head.appendChild(c)}}}function vb(n,i,r){Xa.S(n,i,r);var c=Qr;if(c&&n){var p=ss(c).hoistableStyles,m=$r(n);i=i||"default";var b=p.get(m);if(!b){var C={loading:0,preload:null};if(b=c.querySelector(bl(m)))C.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},r),(r=Vi.get(m))&&Td(n,r);var k=b=c.createElement("link");D(k),Qn(k,"link",n),k._p=new Promise(function(ce,Te){k.onload=ce,k.onerror=Te}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,du(b,i,c)}b={type:"stylesheet",instance:b,count:1,state:C},p.set(m,b)}}}function _b(n,i){Xa.X(n,i);var r=Qr;if(r&&n){var c=ss(r).hoistableScripts,p=eo(n),m=c.get(p);m||(m=r.querySelector(Tl(p)),m||(n=v({src:n,async:!0},i),(i=Vi.get(p))&&Ed(n,i),m=r.createElement("script"),D(m),Qn(m,"link",n),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function xb(n,i){Xa.M(n,i);var r=Qr;if(r&&n){var c=ss(r).hoistableScripts,p=eo(n),m=c.get(p);m||(m=r.querySelector(Tl(p)),m||(n=v({src:n,async:!0,type:"module"},i),(i=Vi.get(p))&&Ed(n,i),m=r.createElement("script"),D(m),Qn(m,"link",n),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function A_(n,i,r,c){var p=(p=re.current)?hu(p):null;if(!p)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=$r(r.href),r=ss(p).hoistableStyles,c=r.get(i),c||(c={type:"style",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=$r(r.href);var m=ss(p).hoistableStyles,b=m.get(n);if(b||(p=p.ownerDocument||p,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=p.querySelector(bl(n)))&&!m._p&&(b.instance=m,b.state.loading=5),Vi.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Vi.set(n,r),m||yb(p,n,r,b.state))),i&&c===null)throw Error(a(528,""));return b}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=eo(r),r=ss(p).hoistableScripts,c=r.get(i),c||(c={type:"script",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function $r(n){return'href="'+yt(n)+'"'}function bl(n){return'link[rel="stylesheet"]['+n+"]"}function w_(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function yb(n,i,r,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Qn(i,"link",r),D(i),n.head.appendChild(i))}function eo(n){return'[src="'+yt(n)+'"]'}function Tl(n){return"script[async]"+n}function R_(n,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+yt(r.href)+'"]');if(c)return i.instance=c,D(c),c;var p=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),D(c),Qn(c,"style",p),du(c,r.precedence,n),i.instance=c;case"stylesheet":p=$r(r.href);var m=n.querySelector(bl(p));if(m)return i.state.loading|=4,i.instance=m,D(m),m;c=w_(r),(p=Vi.get(p))&&Td(c,p),m=(n.ownerDocument||n).createElement("link"),D(m);var b=m;return b._p=new Promise(function(C,k){b.onload=C,b.onerror=k}),Qn(m,"link",c),i.state.loading|=4,du(m,r.precedence,n),i.instance=m;case"script":return m=eo(r.src),(p=n.querySelector(Tl(m)))?(i.instance=p,D(p),p):(c=r,(p=Vi.get(m))&&(c=v({},r),Ed(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),D(p),Qn(p,"link",c),n.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,du(c,r.precedence,n));return i.instance}function du(n,i,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,m=p,b=0;b<c.length;b++){var C=c[b];if(C.dataset.precedence===i)m=C;else if(m!==p)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(n,i.firstChild))}function Td(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Ed(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var pu=null;function C_(n,i,r){if(pu===null){var c=new Map,p=pu=new Map;p.set(r,c)}else p=pu,c=p.get(r),c||(c=new Map,p.set(r,c));if(c.has(n))return c;for(c.set(n,null),r=r.getElementsByTagName(n),p=0;p<r.length;p++){var m=r[p];if(!(m[Aa]||m[Pt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=n+b;var C=c.get(b);C?C.push(m):c.set(b,[m])}}return c}function D_(n,i,r){n=n.ownerDocument||n,n.head.insertBefore(r,i==="title"?n.querySelector("head > title"):null)}function Sb(n,i,r){if(r===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function N_(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Mb(n,i,r,c){if(r.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=$r(c.href),m=i.querySelector(bl(p));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=mu.bind(n),i.then(n,n)),r.state.loading|=4,r.instance=m,D(m);return}m=i.ownerDocument||i,c=w_(c),(p=Vi.get(p))&&Td(c,p),m=m.createElement("link"),D(m);var b=m;b._p=new Promise(function(C,k){b.onload=C,b.onerror=k}),Qn(m,"link",c),r.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(n.count++,r=mu.bind(n),i.addEventListener("load",r),i.addEventListener("error",r))}}var Ad=0;function bb(n,i){return n.stylesheets&&n.count===0&&vu(n,n.stylesheets),0<n.count||0<n.imgCount?function(r){var c=setTimeout(function(){if(n.stylesheets&&vu(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&Ad===0&&(Ad=62500*ib());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&vu(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Ad?50:800)+i);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vu(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var gu=null;function vu(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,gu=new Map,i.forEach(Tb,n),gu=null,mu.call(n))}function Tb(n,i){if(!(i.state.loading&4)){var r=gu.get(n);if(r)var c=r.get(null);else{r=new Map,gu.set(n,r);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var b=p[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),c=b)}c&&r.set(null,c)}p=i.instance,b=p.getAttribute("data-precedence"),m=r.get(b)||c,m===c&&r.set(null,p),r.set(b,p),this.count++,c=mu.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),m?m.parentNode.insertBefore(p,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),i.state.loading|=4}}var El={$$typeof:R,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Eb(n,i,r,c,p,m,b,C,k){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function L_(n,i,r,c,p,m,b,C,k,ce,Te,De){return n=new Eb(n,i,r,b,k,ce,Te,De,C),i=1,m===!0&&(i|=24),m=Mi(3,null,null,i),n.current=m,m.stateNode=n,i=sh(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:r,cache:i},ch(m),n}function U_(n){return n?(n=Nr,n):Nr}function P_(n,i,r,c,p,m){p=U_(p),c.context===null?c.context=p:c.pendingContext=p,c=hs(i),c.payload={element:r},m=m===void 0?null:m,m!==null&&(c.callback=m),r=ds(n,c,i),r!==null&&(gi(r,n,i),il(r,n,i))}function O_(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<i?r:i}}function wd(n,i){O_(n,i),(n=n.alternate)&&O_(n,i)}function I_(n){if(n.tag===13||n.tag===31){var i=Ws(n,67108864);i!==null&&gi(i,n,67108864),wd(n,67108864)}}function z_(n){if(n.tag===13||n.tag===31){var i=wi();i=bt(i);var r=Ws(n,i);r!==null&&gi(r,n,i),wd(n,i)}}var _u=!0;function Ab(n,i,r,c){var p=B.T;B.T=null;var m=V.p;try{V.p=2,Rd(n,i,r,c)}finally{V.p=m,B.T=p}}function wb(n,i,r,c){var p=B.T;B.T=null;var m=V.p;try{V.p=8,Rd(n,i,r,c)}finally{V.p=m,B.T=p}}function Rd(n,i,r,c){if(_u){var p=Cd(c);if(p===null)pd(n,i,c,xu,r),B_(n,c);else if(Cb(p,n,i,r,c))c.stopPropagation();else if(B_(n,c),i&4&&-1<Rb.indexOf(n)){for(;p!==null;){var m=as(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Ue(m.pendingLanes);if(b!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var k=1<<31-He(b);C.entanglements[1]|=k,b&=~k}da(m),(Zt&6)===0&&(tu=T()+500,xl(0))}}break;case 31:case 13:C=Ws(m,2),C!==null&&gi(C,m,2),iu(),wd(m,2)}if(m=Cd(c),m===null&&pd(n,i,c,xu,r),m===p)break;p=m}p!==null&&c.stopPropagation()}else pd(n,i,c,null,r)}}function Cd(n){return n=Nf(n),Dd(n)}var xu=null;function Dd(n){if(xu=null,n=is(n),n!==null){var i=l(n);if(i===null)n=null;else{var r=i.tag;if(r===13){if(n=u(i),n!==null)return n;n=null}else if(r===31){if(n=f(i),n!==null)return n;n=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return xu=n,null}function F_(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case ye:return 2;case me:return 8;case Z:case q:return 32;case ae:return 268435456;default:return 32}default:return 32}}var Nd=!1,Ts=null,Es=null,As=null,Al=new Map,wl=new Map,ws=[],Rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B_(n,i){switch(n){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(i.pointerId)}}function Rl(n,i,r,c,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:r,eventSystemFlags:c,nativeEvent:m,targetContainers:[p]},i!==null&&(i=as(i),i!==null&&I_(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Cb(n,i,r,c,p){switch(i){case"focusin":return Ts=Rl(Ts,n,i,r,c,p),!0;case"dragenter":return Es=Rl(Es,n,i,r,c,p),!0;case"mouseover":return As=Rl(As,n,i,r,c,p),!0;case"pointerover":var m=p.pointerId;return Al.set(m,Rl(Al.get(m)||null,n,i,r,c,p)),!0;case"gotpointercapture":return m=p.pointerId,wl.set(m,Rl(wl.get(m)||null,n,i,r,c,p)),!0}return!1}function H_(n){var i=is(n.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){n.blockedOn=i,cn(n.priority,function(){z_(r)});return}}else if(i===31){if(i=f(r),i!==null){n.blockedOn=i,cn(n.priority,function(){z_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yu(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var r=Cd(n.nativeEvent);if(r===null){r=n.nativeEvent;var c=new r.constructor(r.type,r);Df=c,r.target.dispatchEvent(c),Df=null}else return i=as(r),i!==null&&I_(i),n.blockedOn=r,!1;i.shift()}return!0}function G_(n,i,r){yu(n)&&r.delete(i)}function Db(){Nd=!1,Ts!==null&&yu(Ts)&&(Ts=null),Es!==null&&yu(Es)&&(Es=null),As!==null&&yu(As)&&(As=null),Al.forEach(G_),wl.forEach(G_)}function Su(n,i){n.blockedOn===i&&(n.blockedOn=null,Nd||(Nd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Db)))}var Mu=null;function V_(n){Mu!==n&&(Mu=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Mu===n&&(Mu=null);for(var i=0;i<n.length;i+=3){var r=n[i],c=n[i+1],p=n[i+2];if(typeof c!="function"){if(Dd(c||r)===null)continue;break}var m=as(r);m!==null&&(n.splice(i,3),i-=3,Ch(m,{pending:!0,data:p,method:r.method,action:c},c,p))}}))}function to(n){function i(k){return Su(k,n)}Ts!==null&&Su(Ts,n),Es!==null&&Su(Es,n),As!==null&&Su(As,n),Al.forEach(i),wl.forEach(i);for(var r=0;r<ws.length;r++){var c=ws[r];c.blockedOn===n&&(c.blockedOn=null)}for(;0<ws.length&&(r=ws[0],r.blockedOn===null);)H_(r),r.blockedOn===null&&ws.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var p=r[c],m=r[c+1],b=p[vn]||null;if(typeof m=="function")b||V_(r);else if(b){var C=null;if(m&&m.hasAttribute("formAction")){if(p=m,b=m[vn]||null)C=b.formAction;else if(Dd(p)!==null)continue}else C=b.action;typeof C=="function"?r[c+1]=C:(r.splice(c,3),c-=3),V_(r)}}}function k_(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return p=b})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(r,20)}function r(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function Ld(n){this._internalRoot=n}bu.prototype.render=Ld.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,c=wi();P_(r,c,n,i,null,null)},bu.prototype.unmount=Ld.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;P_(n.current,2,null,n,null,null),iu(),i[kn]=null}};function bu(n){this._internalRoot=n}bu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Dt();n={blockedOn:null,target:n,priority:i};for(var r=0;r<ws.length&&i!==0&&i<ws[r].priority;r++);ws.splice(r,0,n),r===0&&H_(n)}};var X_=e.version;if(X_!=="19.2.3")throw Error(a(527,X_,"19.2.3"));V.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=d(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var Nb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{ge=Tu.inject(Nb),J=Tu}catch{}}return Dl.createRoot=function(n,i){if(!s(n))throw Error(a(299));var r=!1,c="",p=Jg,m=Qg,b=$g;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=L_(n,1,!1,null,null,r,c,null,p,m,b,k_),n[kn]=i.current,dd(n),new Ld(i)},Dl.hydrateRoot=function(n,i,r){if(!s(n))throw Error(a(299));var c=!1,p="",m=Jg,b=Qg,C=$g,k=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(k=r.formState)),i=L_(n,1,!0,i,r??null,c,p,k,m,b,C,k_),i.context=U_(null),r=i.current,c=wi(),c=bt(c),p=hs(c),p.callback=null,ds(r,p,c),r=c,i.current.lanes=r,Qt(i,r),da(i),n[kn]=i.current,dd(n),new bu(i)},Dl.version="19.2.3",Dl}var ex;function Gb(){if(ex)return Od.exports;ex=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Od.exports=Hb(),Od.exports}var Vb=Gb();const Lm="182",kb=0,tx=1,Xb=2,of=1,Cy=2,Wl=3,ts=0,$n=1,aa=2,ya=0,$a=1,_i=2,nx=3,ix=4,Wb=5,dr=100,jb=101,qb=102,Yb=103,Zb=104,Kb=200,Jb=201,Qb=202,$b=203,wp=204,Rp=205,eT=206,tT=207,nT=208,iT=209,aT=210,sT=211,rT=212,oT=213,lT=214,Cp=0,Dp=1,Np=2,wo=3,Lp=4,Up=5,Pp=6,Op=7,Dy=0,cT=1,uT=2,Sa=0,Um=1,Pm=2,Om=3,fc=4,Im=5,zm=6,Fm=7,ax="attached",fT="detached",Ny=300,vr=301,Ro=302,Ip=303,zp=304,Mf=306,Fs=1e3,_a=1001,mf=1002,Pn=1003,Ly=1004,jl=1005,On=1006,lf=1007,Ja=1008,Di=1009,Uy=1010,Py=1011,ec=1012,Bm=1013,Ma=1014,ji=1015,Ni=1016,Hm=1017,Gm=1018,tc=1020,Oy=35902,Iy=35899,zy=1021,Fy=1022,qi=1023,ns=1026,gr=1027,Vm=1028,km=1029,Co=1030,Xm=1031,Wm=1033,cf=33776,uf=33777,ff=33778,hf=33779,Fp=35840,Bp=35841,Hp=35842,Gp=35843,Vp=36196,kp=37492,Xp=37496,Wp=37488,jp=37489,qp=37490,Yp=37491,Zp=37808,Kp=37809,Jp=37810,Qp=37811,$p=37812,em=37813,tm=37814,nm=37815,im=37816,am=37817,sm=37818,rm=37819,om=37820,lm=37821,cm=36492,um=36494,fm=36495,hm=36283,dm=36284,pm=36285,mm=36286,nc=2300,ic=2301,Bd=2302,sx=2400,rx=2401,ox=2402,hT=2500,dT=0,By=1,gm=2,pT=3200,jm=0,mT=1,Is="",Un="srgb",ui="srgb-linear",gf="linear",Jt="srgb",no=7680,lx=519,gT=512,vT=513,_T=514,qm=515,xT=516,yT=517,Ym=518,ST=519,vm=35044,cx="300 es",xa=2e3,vf=2001;function Hy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function MT(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function ac(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bT(){const o=ac("canvas");return o.style.display="block",o}const ux={};function _f(...o){const e="THREE."+o.shift();console.log(e,...o)}function ft(...o){const e="THREE."+o.shift();console.warn(e,...o)}function _t(...o){const e="THREE."+o.shift();console.error(e,...o)}function sc(...o){const e=o.join(" ");e in ux||(ux[e]=!0,ft(...o))}function TT(o,e,t){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}class zo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fx=1234567;const Zl=Math.PI/180,Do=180/Math.PI;function Yi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ti[o&255]+ti[o>>8&255]+ti[o>>16&255]+ti[o>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]).toLowerCase()}function Nt(o,e,t){return Math.max(e,Math.min(t,o))}function Zm(o,e){return(o%e+e)%e}function ET(o,e,t,a,s){return a+(o-e)*(s-a)/(t-e)}function AT(o,e,t){return o!==e?(t-o)/(e-o):0}function Kl(o,e,t){return(1-t)*o+t*e}function wT(o,e,t,a){return Kl(o,e,1-Math.exp(-t*a))}function RT(o,e=1){return e-Math.abs(Zm(o,e*2)-e)}function CT(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function DT(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function NT(o,e){return o+Math.floor(Math.random()*(e-o+1))}function LT(o,e){return o+Math.random()*(e-o)}function UT(o){return o*(.5-Math.random())}function PT(o){o!==void 0&&(fx=o);let e=fx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OT(o){return o*Zl}function IT(o){return o*Do}function zT(o){return(o&o-1)===0&&o!==0}function FT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function BT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function HT(o,e,t,a,s){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),d=l((e+a)/2),g=u((e+a)/2),v=l((e-a)/2),_=u((e-a)/2),x=l((a-e)/2),M=u((a-e)/2);switch(s){case"XYX":o.set(f*g,h*v,h*_,f*d);break;case"YZY":o.set(h*_,f*g,h*v,f*d);break;case"ZXZ":o.set(h*v,h*_,f*g,f*d);break;case"XZX":o.set(f*g,h*M,h*x,f*d);break;case"YXY":o.set(h*x,f*g,h*M,f*d);break;case"ZYZ":o.set(h*M,h*x,f*g,f*d);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sa(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function nn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const vi={DEG2RAD:Zl,RAD2DEG:Do,generateUUID:Yi,clamp:Nt,euclideanModulo:Zm,mapLinear:ET,inverseLerp:AT,lerp:Kl,damp:wT,pingpong:RT,smoothstep:CT,smootherstep:DT,randInt:NT,randFloat:LT,randFloatSpread:UT,seededRandom:PT,degToRad:OT,radToDeg:IT,isPowerOfTwo:zT,ceilPowerOfTwo:FT,floorPowerOfTwo:BT,setQuaternionFromProperEuler:HT,normalize:nn,denormalize:sa};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Nt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*s+e.x,this.y=l*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,u,f){let h=a[s+0],d=a[s+1],g=a[s+2],v=a[s+3],_=l[u+0],x=l[u+1],M=l[u+2],E=l[u+3];if(f<=0){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f>=1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(v!==E||h!==_||d!==x||g!==M){let S=h*_+d*x+g*M+v*E;S<0&&(_=-_,x=-x,M=-M,E=-E,S=-S);let y=1-f;if(S<.9995){const L=Math.acos(S),R=Math.sin(L);y=Math.sin(y*L)/R,f=Math.sin(f*L)/R,h=h*y+_*f,d=d*y+x*f,g=g*y+M*f,v=v*y+E*f}else{h=h*y+_*f,d=d*y+x*f,g=g*y+M*f,v=v*y+E*f;const L=1/Math.sqrt(h*h+d*d+g*g+v*v);h*=L,d*=L,g*=L,v*=L}}e[t]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,a,s,l,u){const f=a[s],h=a[s+1],d=a[s+2],g=a[s+3],v=l[u],_=l[u+1],x=l[u+2],M=l[u+3];return e[t]=f*M+g*v+h*x-d*_,e[t+1]=h*M+g*_+d*v-f*x,e[t+2]=d*M+g*x+f*_-h*v,e[t+3]=g*M-f*v-h*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,d=f(a/2),g=f(s/2),v=f(l/2),_=h(a/2),x=h(s/2),M=h(l/2);switch(u){case"XYZ":this._x=_*g*v+d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v-_*x*M;break;case"YXZ":this._x=_*g*v+d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v+_*x*M;break;case"ZXY":this._x=_*g*v-d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v-_*x*M;break;case"ZYX":this._x=_*g*v-d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v+_*x*M;break;case"YZX":this._x=_*g*v+d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v-_*x*M;break;case"XZY":this._x=_*g*v-d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v+_*x*M;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],u=t[1],f=t[5],h=t[9],d=t[2],g=t[6],v=t[10],_=a+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-h)*x,this._y=(l-d)*x,this._z=(u-s)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(g-h)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-d)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(u-s)/x,this._x=(l+d)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,u=e._w,f=t._x,h=t._y,d=t._z,g=t._w;return this._x=a*g+u*f+s*d-l*h,this._y=s*g+u*h+l*f-a*d,this._z=l*g+u*d+a*h-s*f,this._w=u*g-a*f-s*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let a=e._x,s=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(a=-a,s=-s,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);h=Math.sin(h*d)/g,t=Math.sin(t*d)/g,this._x=this._x*h+a*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+a*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,a=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,u=e.y,f=e.z,h=e.w,d=2*(u*s-f*a),g=2*(f*t-l*s),v=2*(l*a-u*t);return this.x=t+h*d+u*v-f*g,this.y=a+h*g+f*d-l*v,this.z=s+h*v+l*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=s*h-l*f,this.y=l*u-a*h,this.z=a*f-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Nt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new H,hx=new Bs;class Rt{constructor(e,t,a,s,l,u,f,h,d){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,f,h,d)}set(e,t,a,s,l,u,f,h,d){const g=this.elements;return g[0]=e,g[1]=s,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],f=a[3],h=a[6],d=a[1],g=a[4],v=a[7],_=a[2],x=a[5],M=a[8],E=s[0],S=s[3],y=s[6],L=s[1],R=s[4],w=s[7],U=s[2],F=s[5],O=s[8];return l[0]=u*E+f*L+h*U,l[3]=u*S+f*R+h*F,l[6]=u*y+f*w+h*O,l[1]=d*E+g*L+v*U,l[4]=d*S+g*R+v*F,l[7]=d*y+g*w+v*O,l[2]=_*E+x*L+M*U,l[5]=_*S+x*R+M*F,l[8]=_*y+x*w+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8];return t*u*g-t*f*d-a*l*g+a*f*h+s*l*d-s*u*h}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8],v=g*u-f*d,_=f*h-g*l,x=d*l-u*h,M=t*v+a*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=v*E,e[1]=(s*d-g*a)*E,e[2]=(f*a-s*u)*E,e[3]=_*E,e[4]=(g*t-s*h)*E,e[5]=(s*l-f*t)*E,e[6]=x*E,e[7]=(a*h-d*t)*E,e[8]=(u*t-a*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,u,f){const h=Math.cos(l),d=Math.sin(l);return this.set(a*h,a*d,-a*(h*u+d*f)+u+e,-s*d,s*h,-s*(-d*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Gd.makeScale(e,t)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new Rt,dx=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),px=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GT(){const o={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Jt&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Jt&&(s.r=Eo(s.r),s.g=Eo(s.g),s.b=Eo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Is?gf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return sc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return sc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[ui]:{primaries:e,whitePoint:a,transfer:gf,toXYZ:dx,fromXYZ:px,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:a,transfer:Jt,toXYZ:dx,fromXYZ:px,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),o}const Gt=GT();function es(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let io;class VT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{io===void 0&&(io=ac("canvas")),io.width=e.width,io.height=e.height;const s=io.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=io}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ac("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=es(l[u]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(es(t[a]/255)*255):t[a]=es(t[a]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kT=0;class Km{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(Vd(s[u].image)):l.push(Vd(s[u]))}else l=Vd(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function Vd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?VT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let XT=0;const kd=new H;class In extends zo{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,a=_a,s=_a,l=On,u=Ja,f=qi,h=Di,d=In.DEFAULT_ANISOTROPY,g=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=Yi(),this.name="",this.source=new Km(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ny)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Ny;In.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,t=0,a=0,s=1){pn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const h=e.elements,d=h[0],g=h[4],v=h[8],_=h[1],x=h[5],M=h[9],E=h[2],S=h[6],y=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,w=(x+1)/2,U=(y+1)/2,F=(g+_)/4,O=(v+E)/4,W=(M+S)/4;return R>w&&R>U?R<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(R),s=F/a,l=O/a):w>U?w<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(w),a=F/s,l=W/s):U<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(U),a=O/l,s=W/l),this.set(a,s,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(v-E)*(v-E)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(v-E)/L,this.z=(_-g)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WT extends zo{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t);const s={width:e,height:t,depth:a.depth},l=new In(s);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Km(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends WT{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class Gy extends In{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jT extends In{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(ea.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(ea.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=ea.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ea):ea.fromBufferAttribute(l,u),ea.applyMatrix4(e.matrixWorld),this.expandByPoint(ea);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Eu.copy(a.boundingBox)),Eu.applyMatrix4(e.matrixWorld),this.union(Eu)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ea),ea.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),Au.subVectors(this.max,Nl),ao.subVectors(e.a,Nl),so.subVectors(e.b,Nl),ro.subVectors(e.c,Nl),Cs.subVectors(so,ao),Ds.subVectors(ro,so),ar.subVectors(ao,ro);let t=[0,-Cs.z,Cs.y,0,-Ds.z,Ds.y,0,-ar.z,ar.y,Cs.z,0,-Cs.x,Ds.z,0,-Ds.x,ar.z,0,-ar.x,-Cs.y,Cs.x,0,-Ds.y,Ds.x,0,-ar.y,ar.x,0];return!Xd(t,ao,so,ro,Au)||(t=[1,0,0,0,1,0,0,0,1],!Xd(t,ao,so,ro,Au))?!1:(wu.crossVectors(Cs,Ds),t=[wu.x,wu.y,wu.z],Xd(t,ao,so,ro,Au))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ea).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ea).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wa=[new H,new H,new H,new H,new H,new H,new H,new H],ea=new H,Eu=new ra,ao=new H,so=new H,ro=new H,Cs=new H,Ds=new H,ar=new H,Nl=new H,Au=new H,wu=new H,sr=new H;function Xd(o,e,t,a,s){for(let l=0,u=o.length-3;l<=u;l+=3){sr.fromArray(o,l);const f=s.x*Math.abs(sr.x)+s.y*Math.abs(sr.y)+s.z*Math.abs(sr.z),h=e.dot(sr),d=t.dot(sr),g=a.dot(sr);if(Math.max(-Math.max(h,d,g),Math.min(h,d,g))>f)return!1}return!0}const qT=new ra,Ll=new H,Wd=new H;class ba{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):qT.setFromPoints(e).getCenter(a);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ll.subVectors(e,this.center);const t=Ll.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(Ll,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ll.copy(e.center).add(Wd)),this.expandByPoint(Ll.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ja=new H,jd=new H,Ru=new H,Ns=new H,qd=new H,Cu=new H,Yd=new H;class bf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ja)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ja.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ja.copy(this.origin).addScaledVector(this.direction,t),ja.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){jd.copy(e).add(t).multiplyScalar(.5),Ru.copy(t).sub(e).normalize(),Ns.copy(this.origin).sub(jd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ru),f=Ns.dot(this.direction),h=-Ns.dot(Ru),d=Ns.lengthSq(),g=Math.abs(1-u*u);let v,_,x,M;if(g>0)if(v=u*h-f,_=u*f-h,M=l*g,v>=0)if(_>=-M)if(_<=M){const E=1/g;v*=E,_*=E,x=v*(v+u*_+2*f)+_*(u*v+_+2*h)+d}else _=l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;else _=-l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+d):_<=M?(v=0,_=Math.min(Math.max(-l,-h),l),x=_*(_+2*h)+d):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+d);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(jd).addScaledVector(Ru,_),x}intersectSphere(e,t){ja.subVectors(e.center,this.origin);const a=ja.dot(this.direction),s=ja.dot(ja)-a*a,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=a-u,h=a+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,u,f,h;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(a=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(a=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),v>=0?(f=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),a>h||f>s)||((f>a||a!==a)&&(a=f),(h<s||s!==s)&&(s=h),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,ja)!==null}intersectTriangle(e,t,a,s,l){qd.subVectors(t,e),Cu.subVectors(a,e),Yd.crossVectors(qd,Cu);let u=this.direction.dot(Yd),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ns.subVectors(this.origin,e);const h=f*this.direction.dot(Cu.crossVectors(Ns,Cu));if(h<0)return null;const d=f*this.direction.dot(qd.cross(Ns));if(d<0||h+d>u)return null;const g=-f*Ns.dot(Yd);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,a,s,l,u,f,h,d,g,v,_,x,M,E,S){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,f,h,d,g,v,_,x,M,E,S)}set(e,t,a,s,l,u,f,h,d,g,v,_,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=a,y[12]=s,y[1]=l,y[5]=u,y[9]=f,y[13]=h,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,a=e.elements,s=1/oo.setFromMatrixColumn(e,0).length(),l=1/oo.setFromMatrixColumn(e,1).length(),u=1/oo.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,u=Math.cos(a),f=Math.sin(a),h=Math.cos(s),d=Math.sin(s),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,x=u*v,M=f*g,E=f*v;t[0]=h*g,t[4]=-h*v,t[8]=d,t[1]=x+M*d,t[5]=_-E*d,t[9]=-f*h,t[2]=E-_*d,t[6]=M+x*d,t[10]=u*h}else if(e.order==="YXZ"){const _=h*g,x=h*v,M=d*g,E=d*v;t[0]=_+E*f,t[4]=M*f-x,t[8]=u*d,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=x*f-M,t[6]=E+_*f,t[10]=u*h}else if(e.order==="ZXY"){const _=h*g,x=h*v,M=d*g,E=d*v;t[0]=_-E*f,t[4]=-u*v,t[8]=M+x*f,t[1]=x+M*f,t[5]=u*g,t[9]=E-_*f,t[2]=-u*d,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const _=u*g,x=u*v,M=f*g,E=f*v;t[0]=h*g,t[4]=M*d-x,t[8]=_*d+E,t[1]=h*v,t[5]=E*d+_,t[9]=x*d-M,t[2]=-d,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,x=u*d,M=f*h,E=f*d;t[0]=h*g,t[4]=E-_*v,t[8]=M*v+x,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-d*g,t[6]=x*v+M,t[10]=_-E*v}else if(e.order==="XZY"){const _=u*h,x=u*d,M=f*h,E=f*d;t[0]=h*g,t[4]=-v,t[8]=d*g,t[1]=_*v+E,t[5]=u*g,t[9]=x*v-M,t[2]=M*v-x,t[6]=f*g,t[10]=E*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YT,e,ZT)}lookAt(e,t,a){const s=this.elements;return Ri.subVectors(e,t),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Ls.crossVectors(a,Ri),Ls.lengthSq()===0&&(Math.abs(a.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Ls.crossVectors(a,Ri)),Ls.normalize(),Du.crossVectors(Ri,Ls),s[0]=Ls.x,s[4]=Du.x,s[8]=Ri.x,s[1]=Ls.y,s[5]=Du.y,s[9]=Ri.y,s[2]=Ls.z,s[6]=Du.z,s[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],f=a[4],h=a[8],d=a[12],g=a[1],v=a[5],_=a[9],x=a[13],M=a[2],E=a[6],S=a[10],y=a[14],L=a[3],R=a[7],w=a[11],U=a[15],F=s[0],O=s[4],W=s[8],A=s[12],N=s[1],G=s[5],K=s[9],te=s[13],ue=s[2],fe=s[6],B=s[10],V=s[14],oe=s[3],Re=s[7],Ce=s[11],I=s[15];return l[0]=u*F+f*N+h*ue+d*oe,l[4]=u*O+f*G+h*fe+d*Re,l[8]=u*W+f*K+h*B+d*Ce,l[12]=u*A+f*te+h*V+d*I,l[1]=g*F+v*N+_*ue+x*oe,l[5]=g*O+v*G+_*fe+x*Re,l[9]=g*W+v*K+_*B+x*Ce,l[13]=g*A+v*te+_*V+x*I,l[2]=M*F+E*N+S*ue+y*oe,l[6]=M*O+E*G+S*fe+y*Re,l[10]=M*W+E*K+S*B+y*Ce,l[14]=M*A+E*te+S*V+y*I,l[3]=L*F+R*N+w*ue+U*oe,l[7]=L*O+R*G+w*fe+U*Re,l[11]=L*W+R*K+w*B+U*Ce,l[15]=L*A+R*te+w*V+U*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],u=e[1],f=e[5],h=e[9],d=e[13],g=e[2],v=e[6],_=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15],L=h*x-d*_,R=f*x-d*v,w=f*_-h*v,U=u*x-d*g,F=u*_-h*g,O=u*v-f*g;return t*(E*L-S*R+y*w)-a*(M*L-S*U+y*F)+s*(M*R-E*U+y*O)-l*(M*w-E*F+S*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8],v=e[9],_=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],L=v*S*d-E*_*d+E*h*x-f*S*x-v*h*y+f*_*y,R=M*_*d-g*S*d-M*h*x+u*S*x+g*h*y-u*_*y,w=g*E*d-M*v*d+M*f*x-u*E*x-g*f*y+u*v*y,U=M*v*h-g*E*h-M*f*_+u*E*_+g*f*S-u*v*S,F=t*L+a*R+s*w+l*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=L*O,e[1]=(E*_*l-v*S*l-E*s*x+a*S*x+v*s*y-a*_*y)*O,e[2]=(f*S*l-E*h*l+E*s*d-a*S*d-f*s*y+a*h*y)*O,e[3]=(v*h*l-f*_*l-v*s*d+a*_*d+f*s*x-a*h*x)*O,e[4]=R*O,e[5]=(g*S*l-M*_*l+M*s*x-t*S*x-g*s*y+t*_*y)*O,e[6]=(M*h*l-u*S*l-M*s*d+t*S*d+u*s*y-t*h*y)*O,e[7]=(u*_*l-g*h*l+g*s*d-t*_*d-u*s*x+t*h*x)*O,e[8]=w*O,e[9]=(M*v*l-g*E*l-M*a*x+t*E*x+g*a*y-t*v*y)*O,e[10]=(u*E*l-M*f*l+M*a*d-t*E*d-u*a*y+t*f*y)*O,e[11]=(g*f*l-u*v*l-g*a*d+t*v*d+u*a*x-t*f*x)*O,e[12]=U*O,e[13]=(g*E*s-M*v*s+M*a*_-t*E*_-g*a*S+t*v*S)*O,e[14]=(M*f*s-u*E*s-M*a*h+t*E*h+u*a*S-t*f*S)*O,e[15]=(u*v*s-g*f*s+g*a*h-t*v*h-u*a*_+t*f*_)*O,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,u=e.x,f=e.y,h=e.z,d=l*u,g=l*f;return this.set(d*u+a,d*f-s*h,d*h+s*f,0,d*f+s*h,g*f+a,g*h-s*u,0,d*h-s*f,g*h+s*u,l*h*h+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,u){return this.set(1,a,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,d=l+l,g=u+u,v=f+f,_=l*d,x=l*g,M=l*v,E=u*g,S=u*v,y=f*v,L=h*d,R=h*g,w=h*v,U=a.x,F=a.y,O=a.z;return s[0]=(1-(E+y))*U,s[1]=(x+w)*U,s[2]=(M-R)*U,s[3]=0,s[4]=(x-w)*F,s[5]=(1-(_+y))*F,s[6]=(S+L)*F,s[7]=0,s[8]=(M+R)*O,s[9]=(S-L)*O,s[10]=(1-(_+E))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return a.set(1,1,1),t.identity(),this;let l=oo.set(s[0],s[1],s[2]).length();const u=oo.set(s[4],s[5],s[6]).length(),f=oo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),ta.copy(this);const d=1/l,g=1/u,v=1/f;return ta.elements[0]*=d,ta.elements[1]*=d,ta.elements[2]*=d,ta.elements[4]*=g,ta.elements[5]*=g,ta.elements[6]*=g,ta.elements[8]*=v,ta.elements[9]*=v,ta.elements[10]*=v,t.setFromRotationMatrix(ta),a.x=l,a.y=u,a.z=f,this}makePerspective(e,t,a,s,l,u,f=xa,h=!1){const d=this.elements,g=2*l/(t-e),v=2*l/(a-s),_=(t+e)/(t-e),x=(a+s)/(a-s);let M,E;if(h)M=l/(u-l),E=u*l/(u-l);else if(f===xa)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===vf)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,a,s,l,u,f=xa,h=!1){const d=this.elements,g=2/(t-e),v=2/(a-s),_=-(t+e)/(t-e),x=-(a+s)/(a-s);let M,E;if(h)M=1/(u-l),E=u/(u-l);else if(f===xa)M=-2/(u-l),E=-(u+l)/(u-l);else if(f===vf)M=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const oo=new H,ta=new Et,YT=new H(0,0,0),ZT=new H(1,1,1),Ls=new H,Du=new H,Ri=new H,mx=new Et,gx=new Bs;class Li{constructor(e=0,t=0,a=0,s=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],u=s[4],f=s[8],h=s[1],d=s[5],g=s[9],v=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mx,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gx.setFromEuler(this),this.setFromQuaternion(gx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Vy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KT=0;const vx=new H,lo=new Bs,qa=new Et,Nu=new H,Ul=new H,JT=new H,QT=new Bs,_x=new H(1,0,0),xx=new H(0,1,0),yx=new H(0,0,1),Sx={type:"added"},$T={type:"removed"},co={type:"childadded",child:null},Zd={type:"childremoved",child:null};class mn extends zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new H,t=new Li,a=new Bs,s=new H(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Rt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(_x,e)}rotateY(e){return this.rotateOnAxis(xx,e)}rotateZ(e){return this.rotateOnAxis(yx,e)}translateOnAxis(e,t){return vx.copy(e).applyQuaternion(this.quaternion),this.position.add(vx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_x,e)}translateY(e){return this.translateOnAxis(xx,e)}translateZ(e){return this.translateOnAxis(yx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Nu.copy(e):Nu.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(Ul,Nu,this.up):qa.lookAt(Nu,Ul,this.up),this.quaternion.setFromRotationMatrix(qa),s&&(qa.extractRotation(s.matrixWorld),lo.setFromRotationMatrix(qa),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sx),co.child=e,this.dispatchEvent(co),co.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($T),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qa.multiply(e.parent.matrixWorld)),e.applyMatrix4(qa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sx),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,JT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,QT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,g=h.length;d<g;d++){const v=h[d];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];s.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),d=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(a.geometries=f),h.length>0&&(a.materials=h),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=s,a;function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}}mn.DEFAULT_UP=new H(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const na=new H,Ya=new H,Kd=new H,Za=new H,uo=new H,fo=new H,Mx=new H,Jd=new H,Qd=new H,$d=new H,ep=new pn,tp=new pn,np=new pn;class Wi{constructor(e=new H,t=new H,a=new H){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),na.subVectors(e,t),s.cross(na);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){na.subVectors(s,t),Ya.subVectors(a,t),Kd.subVectors(e,t);const u=na.dot(na),f=na.dot(Ya),h=na.dot(Kd),d=Ya.dot(Ya),g=Ya.dot(Kd),v=u*d-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(d*h-f*g)*_,M=(u*g-f*h)*_;return l.set(1-x-M,M,x)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(e,t,a,s,l,u,f,h){return this.getBarycoord(e,t,a,s,Za)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Za.x),h.addScaledVector(u,Za.y),h.addScaledVector(f,Za.z),h)}static getInterpolatedAttribute(e,t,a,s,l,u){return ep.setScalar(0),tp.setScalar(0),np.setScalar(0),ep.fromBufferAttribute(e,t),tp.fromBufferAttribute(e,a),np.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(ep,l.x),u.addScaledVector(tp,l.y),u.addScaledVector(np,l.z),u}static isFrontFacing(e,t,a,s){return na.subVectors(a,t),Ya.subVectors(e,t),na.cross(Ya).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return na.subVectors(this.c,this.b),Ya.subVectors(this.a,this.b),na.cross(Ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return Wi.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let u,f;uo.subVectors(s,a),fo.subVectors(l,a),Jd.subVectors(e,a);const h=uo.dot(Jd),d=fo.dot(Jd);if(h<=0&&d<=0)return t.copy(a);Qd.subVectors(e,s);const g=uo.dot(Qd),v=fo.dot(Qd);if(g>=0&&v<=g)return t.copy(s);const _=h*v-g*d;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(a).addScaledVector(uo,u);$d.subVectors(e,l);const x=uo.dot($d),M=fo.dot($d);if(M>=0&&x<=M)return t.copy(l);const E=x*d-h*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),t.copy(a).addScaledVector(fo,f);const S=g*M-x*v;if(S<=0&&v-g>=0&&x-M>=0)return Mx.subVectors(l,s),f=(v-g)/(v-g+(x-M)),t.copy(s).addScaledVector(Mx,f);const y=1/(S+E+_);return u=E*y,f=_*y,t.copy(a).addScaledVector(uo,u).addScaledVector(fo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function ip(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ct{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=a,Gt.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=Gt.workingColorSpace){if(e=Zm(e,1),t=Nt(t,0,1),a=Nt(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=ip(u,l,e+1/3),this.g=ip(u,l,e),this.b=ip(u,l,e-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Un){function a(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const a=ky[e.toLowerCase()];return a!==void 0?this.setHex(a,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Gt.workingToColorSpace(ni.copy(this),e),Math.round(Nt(ni.r*255,0,255))*65536+Math.round(Nt(ni.g*255,0,255))*256+Math.round(Nt(ni.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(ni.copy(this),t);const a=ni.r,s=ni.g,l=ni.b,u=Math.max(a,s,l),f=Math.min(a,s,l);let h,d;const g=(f+u)/2;if(f===u)h=0,d=0;else{const v=u-f;switch(d=g<=.5?v/(u+f):v/(2-u-f),u){case a:h=(s-l)/v+(s<l?6:0);break;case s:h=(l-a)/v+2;break;case l:h=(a-s)/v+4;break}h/=6}return e.h=h,e.s=d,e.l=g,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Un){Gt.workingToColorSpace(ni.copy(this),e);const t=ni.r,a=ni.g,s=ni.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+t,Us.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Us),e.getHSL(Lu);const a=Kl(Us.h,Lu.h,t),s=Kl(Us.s,Lu.s,t),l=Kl(Us.l,Lu.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new ct;ct.NAMES=ky;let e1=0;class Zi extends zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=$a,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Rp,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==$a&&(a.blending=this.blending),this.side!==ts&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==wp&&(a.blendSrc=this.blendSrc),this.blendDst!==Rp&&(a.blendDst=this.blendDst),this.blendEquation!==dr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(a.stencilFail=this.stencilFail),this.stencilZFail!==no&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ci extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Dy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=new H,Uu=new Fe;let t1=0;class Vn{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=vm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Uu.fromBufferAttribute(this,t),Uu.applyMatrix3(e),this.setXY(t,Uu.x,Uu.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=sa(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=nn(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sa(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sa(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sa(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),a=nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),a=nn(a,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),a=nn(a,this.array),s=nn(s,this.array),l=nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vm&&(e.usage=this.usage),e}}class Xy extends Vn{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class Wy extends Vn{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Wt extends Vn{constructor(e,t,a){super(new Float32Array(e),t,a)}}let n1=0;const ki=new Et,ap=new mn,ho=new H,Ci=new ra,Pl=new ra,Hn=new H;class yn extends zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hy(e)?Wy:Xy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new Rt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,a){return ki.makeTranslation(e,t,a),this.applyMatrix4(ki),this}scale(e,t,a){return ki.makeScale(e,t,a),this.applyMatrix4(ki),this}lookAt(e){return ap.lookAt(e),ap.updateMatrix(),this.applyMatrix4(ap.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wt(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];Ci.setFromBufferAttribute(l),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const a=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Pl.setFromBufferAttribute(f),this.morphTargetsRelative?(Hn.addVectors(Ci.min,Pl.min),Ci.expandByPoint(Hn),Hn.addVectors(Ci.max,Pl.max),Ci.expandByPoint(Hn)):(Ci.expandByPoint(Pl.min),Ci.expandByPoint(Pl.max))}Ci.getCenter(a);let s=0;for(let l=0,u=e.count;l<u;l++)Hn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(Hn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Hn.fromBufferAttribute(f,d),h&&(ho.fromBufferAttribute(e,d),Hn.add(ho)),s=Math.max(s,a.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let W=0;W<a.count;W++)f[W]=new H,h[W]=new H;const d=new H,g=new H,v=new H,_=new Fe,x=new Fe,M=new Fe,E=new H,S=new H;function y(W,A,N){d.fromBufferAttribute(a,W),g.fromBufferAttribute(a,A),v.fromBufferAttribute(a,N),_.fromBufferAttribute(l,W),x.fromBufferAttribute(l,A),M.fromBufferAttribute(l,N),g.sub(d),v.sub(d),x.sub(_),M.sub(_);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(G),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(G),f[W].add(E),f[A].add(E),f[N].add(E),h[W].add(S),h[A].add(S),h[N].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,A=L.length;W<A;++W){const N=L[W],G=N.start,K=N.count;for(let te=G,ue=G+K;te<ue;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const R=new H,w=new H,U=new H,F=new H;function O(W){U.fromBufferAttribute(s,W),F.copy(U);const A=f[W];R.copy(A),R.sub(U.multiplyScalar(U.dot(A))).normalize(),w.crossVectors(F,A);const G=w.dot(h[W])<0?-1:1;u.setXYZW(W,R.x,R.y,R.z,G)}for(let W=0,A=L.length;W<A;++W){const N=L[W],G=N.start,K=N.count;for(let te=G,ue=G+K;te<ue;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const s=new H,l=new H,u=new H,f=new H,h=new H,d=new H,g=new H,v=new H;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),g.subVectors(u,l),v.subVectors(s,l),g.cross(v),f.fromBufferAttribute(a,M),h.fromBufferAttribute(a,E),d.fromBufferAttribute(a,S),f.add(g),h.add(g),d.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(s,l),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Hn.fromBufferAttribute(e,t),Hn.normalize(),e.setXYZ(t,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(f,h){const d=f.array,g=f.itemSize,v=f.normalized,_=new d.constructor(h.length*g);let x=0,M=0;for(let E=0,S=h.length;E<S;E++){f.isInterleavedBufferAttribute?x=h[E]*f.data.stride+f.offset:x=h[E]*g;for(let y=0;y<g;y++)_[M++]=d[x++]}return new Vn(_,g,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,a=this.index.array,s=this.attributes;for(const f in s){const h=s[f],d=e(h,a);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=e(_,a);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const d=u[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const h in a){const d=a[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(e.data))}g.length>0&&(s[h]=g,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const d in s){const g=s[d];this.setAttribute(d,g.clone(t))}const l=e.morphAttributes;for(const d in l){const g=[],v=l[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bx=new Et,rr=new bf,Pu=new ba,Tx=new H,Ou=new H,Iu=new H,zu=new H,sp=new H,Fu=new H,Ex=new H,Bu=new H;class zt extends mn{constructor(e=new yn,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){Fu.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const g=f[h],v=l[h];g!==0&&(sp.fromBufferAttribute(v,e),u?Fu.addScaledVector(sp,g):Fu.addScaledVector(sp.sub(t),g))}t.add(Fu)}return t}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pu.copy(a.boundingSphere),Pu.applyMatrix4(l),rr.copy(e.ray).recast(e.near),!(Pu.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Pu,Tx)===null||rr.origin.distanceToSquared(Tx)>(e.far-e.near)**2))&&(bx.copy(l).invert(),rr.copy(e.ray).applyMatrix4(bx),!(a.boundingBox!==null&&rr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,a){let s;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),R=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,U=R;w<U;w+=3){const F=f.getX(w),O=f.getX(w+1),W=f.getX(w+2);s=Hu(this,y,e,a,d,g,v,F,O,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=f.getX(S),R=f.getX(S+1),w=f.getX(S+2);s=Hu(this,u,e,a,d,g,v,L,R,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),R=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,U=R;w<U;w+=3){const F=w,O=w+1,W=w+2;s=Hu(this,y,e,a,d,g,v,F,O,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=S,R=S+1,w=S+2;s=Hu(this,u,e,a,d,g,v,L,R,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function i1(o,e,t,a,s,l,u,f){let h;if(e.side===$n?h=a.intersectTriangle(u,l,s,!0,f):h=a.intersectTriangle(s,l,u,e.side===ts,f),h===null)return null;Bu.copy(f),Bu.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Bu);return d<t.near||d>t.far?null:{distance:d,point:Bu.clone(),object:o}}function Hu(o,e,t,a,s,l,u,f,h,d){o.getVertexPosition(f,Ou),o.getVertexPosition(h,Iu),o.getVertexPosition(d,zu);const g=i1(o,e,t,a,Ou,Iu,zu,Ex);if(g){const v=new H;Wi.getBarycoord(Ex,Ou,Iu,zu,v),s&&(g.uv=Wi.getInterpolatedAttribute(s,f,h,d,v,new Fe)),l&&(g.uv1=Wi.getInterpolatedAttribute(l,f,h,d,v,new Fe)),u&&(g.normal=Wi.getInterpolatedAttribute(u,f,h,d,v,new H),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:d,normal:new H,materialIndex:0};Wi.getNormal(Ou,Iu,zu,_.normal),g.face=_,g.barycoord=v}return g}class Mr extends yn{constructor(e=1,t=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const h=[],d=[],g=[],v=[];let _=0,x=0;M("z","y","x",-1,-1,a,t,e,u,l,0),M("z","y","x",1,-1,a,t,-e,u,l,1),M("x","z","y",1,1,e,a,t,s,u,2),M("x","z","y",1,-1,e,a,-t,s,u,3),M("x","y","z",1,-1,e,t,a,s,l,4),M("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(h),this.setAttribute("position",new Wt(d,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(v,2));function M(E,S,y,L,R,w,U,F,O,W,A){const N=w/O,G=U/W,K=w/2,te=U/2,ue=F/2,fe=O+1,B=W+1;let V=0,oe=0;const Re=new H;for(let Ce=0;Ce<B;Ce++){const I=Ce*G-te;for(let se=0;se<fe;se++){const Me=se*N-K;Re[E]=Me*L,Re[S]=I*R,Re[y]=ue,d.push(Re.x,Re.y,Re.z),Re[E]=0,Re[S]=0,Re[y]=F>0?1:-1,g.push(Re.x,Re.y,Re.z),v.push(se/O),v.push(1-Ce/W),V+=1}}for(let Ce=0;Ce<W;Ce++)for(let I=0;I<O;I++){const se=_+I+fe*Ce,Me=_+I+fe*(Ce+1),Ie=_+(I+1)+fe*(Ce+1),Ye=_+(I+1)+fe*Ce;h.push(se,Me,Ye),h.push(Me,Ie,Ye),oe+=6}f.addGroup(x,oe,A),x+=oe,_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function No(o){const e={};for(const t in o){e[t]={};for(const a in o[t]){const s=o[t][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone():Array.isArray(s)?e[t][a]=s.slice():e[t][a]=s}}return e}function li(o){const e={};for(let t=0;t<o.length;t++){const a=No(o[t]);for(const s in a)e[s]=a[s]}return e}function a1(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function jy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const Lo={clone:No,merge:li};var s1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s1,this.fragmentShader=r1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=a1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class qy extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new H,Ax=new Fe,wx=new Fe;class ii extends qy{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,t){return this.getViewBounds(e,Ax,wx),t.subVectors(wx,Ax)}setViewOffset(e,t,a,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zl*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;l+=u.offsetX*s/h,t-=u.offsetY*a/d,s*=u.width/h,a*=u.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const po=-90,mo=1;class o1 extends mn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ii(po,mo,e,t);s.layers=this.layers,this.add(s);const l=new ii(po,mo,e,t);l.layers=this.layers,this.add(l);const u=new ii(po,mo,e,t);u.layers=this.layers,this.add(u);const f=new ii(po,mo,e,t);f.layers=this.layers,this.add(f);const h=new ii(po,mo,e,t);h.layers=this.layers,this.add(h);const d=new ii(po,mo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,u,f,h]=t;for(const d of t)this.remove(d);if(e===xa)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===vf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,d,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,s),e.render(t,l),e.setRenderTarget(a,1,s),e.render(t,u),e.setRenderTarget(a,2,s),e.render(t,f),e.setRenderTarget(a,3,s),e.render(t,h),e.setRenderTarget(a,4,s),e.render(t,d),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,s),e.render(t,g),e.setRenderTarget(v,_,x),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Yy extends In{constructor(e=[],t=vr,a,s,l,u,f,h,d,g){super(e,t,a,s,l,u,f,h,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zy extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new Yy(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mr(5,5,5),l=new Gn({name:"CubemapFromEquirect",uniforms:No(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:$n,blending:ya});l.uniforms.tEquirect.value=t;const u=new zt(s,l),f=t.minFilter;return t.minFilter===Ja&&(t.minFilter=On),new o1(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,s);e.setRenderTarget(l)}}class xi extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l1={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,u=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,a),y=this._getHandJoint(d,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,M=.005;d.inputState.pinching&&_>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return f!==null&&(f.visible=s!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new xi;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class Tf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=t}clone(){return new Tf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ky extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vm,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[a+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const oi=new H;class rc{constructor(e,t,a,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix4(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)oi.fromBufferAttribute(this,t),oi.applyNormalMatrix(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)oi.fromBufferAttribute(this,t),oi.transformDirection(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=sa(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=nn(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sa(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sa(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sa(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sa(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),a=nn(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),a=nn(a,this.array),s=nn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),a=nn(a,this.array),s=nn(s,this.array),l=nn(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){_f("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new Vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_f("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qy extends Zi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let go;const Ol=new H,vo=new H,_o=new H,xo=new Fe,Il=new Fe,$y=new Et,Gu=new H,zl=new H,Vu=new H,Rx=new Fe,op=new Fe,Cx=new Fe;class c1 extends mn{constructor(e=new Qy){if(super(),this.isSprite=!0,this.type="Sprite",go===void 0){go=new yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new Jy(t,5);go.setIndex([0,1,2,0,2,3]),go.setAttribute("position",new rc(a,3,0,!1)),go.setAttribute("uv",new rc(a,2,3,!1))}this.geometry=go,this.material=e,this.center=new Fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&_t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vo.setFromMatrixScale(this.matrixWorld),$y.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_o.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vo.multiplyScalar(-_o.z);const a=this.material.rotation;let s,l;a!==0&&(l=Math.cos(a),s=Math.sin(a));const u=this.center;ku(Gu.set(-.5,-.5,0),_o,u,vo,s,l),ku(zl.set(.5,-.5,0),_o,u,vo,s,l),ku(Vu.set(.5,.5,0),_o,u,vo,s,l),Rx.set(0,0),op.set(1,0),Cx.set(1,1);let f=e.ray.intersectTriangle(Gu,zl,Vu,!1,Ol);if(f===null&&(ku(zl.set(-.5,.5,0),_o,u,vo,s,l),op.set(0,1),f=e.ray.intersectTriangle(Gu,Vu,zl,!1,Ol),f===null))return;const h=e.ray.origin.distanceTo(Ol);h<e.near||h>e.far||t.push({distance:h,point:Ol.clone(),uv:Wi.getInterpolation(Ol,Gu,zl,Vu,Rx,op,Cx,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ku(o,e,t,a,s,l){xo.subVectors(o,t).addScalar(.5).multiply(a),s!==void 0?(Il.x=l*xo.x-s*xo.y,Il.y=s*xo.x+l*xo.y):Il.copy(xo),o.copy(e),o.x+=Il.x,o.y+=Il.y,o.applyMatrix4($y)}const Dx=new H,Nx=new pn,Lx=new pn,u1=new H,Ux=new Et,Xu=new H,lp=new ba,Px=new Et,cp=new bf;class f1 extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ax,this.bindMatrix=new Et,this.bindMatrixInverse=new Et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ra),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,Xu),this.boundingBox.expandByPoint(Xu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ba),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,Xu),this.boundingSphere.expandByPoint(Xu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const a=this.material,s=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lp.copy(this.boundingSphere),lp.applyMatrix4(s),e.ray.intersectsSphere(lp)!==!1&&(Px.copy(s).invert(),cp.copy(e.ray).applyMatrix4(Px),!(this.boundingBox!==null&&cp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pn,t=this.geometry.attributes.skinWeight;for(let a=0,s=t.count;a<s;a++){e.fromBufferAttribute(t,a);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ax?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fT?this.bindMatrixInverse.copy(this.bindMatrix).invert():ft("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const a=this.skeleton,s=this.geometry;Nx.fromBufferAttribute(s.attributes.skinIndex,e),Lx.fromBufferAttribute(s.attributes.skinWeight,e),Dx.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const u=Lx.getComponent(l);if(u!==0){const f=Nx.getComponent(l);Ux.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),t.addScaledVector(u1.copy(Dx).applyMatrix4(Ux),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class eS extends mn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jm extends In{constructor(e=null,t=1,a=1,s,l,u,f,h,d=Pn,g=Pn,v,_){super(null,u,f,h,d,g,s,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ox=new Et,h1=new Et;class Qm{constructor(e=[],t=[]){this.uuid=Yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ft("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,s=this.bones.length;a<s;a++)this.boneInverses.push(new Et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const a=new Et;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,t=this.boneInverses,a=this.boneMatrices,s=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const f=e[l]?e[l].matrixWorld:h1;Ox.multiplyMatrices(f,t[l]),Ox.toArray(a,l*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const a=new Jm(t,e,e,qi,ji);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,s=e.bones.length;a<s;a++){const l=e.bones[a];let u=t[l];u===void 0&&(ft("Skeleton: No bone found with UUID:",l),u=new eS),this.bones.push(u),this.boneInverses.push(new Et().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,a=this.boneInverses;for(let s=0,l=t.length;s<l;s++){const u=t[s];e.bones.push(u.uuid);const f=a[s];e.boneInverses.push(f.toArray())}return e}}class _m extends Vn{constructor(e,t,a,s=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yo=new Et,Ix=new Et,Wu=[],zx=new ra,d1=new Et,Fl=new zt,Bl=new ba;class p1 extends zt{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _m(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<a;s++)this.setMatrixAt(s,d1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ra),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,yo),zx.copy(e.boundingBox).applyMatrix4(yo),this.boundingBox.union(zx)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ba),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,yo),Bl.copy(e.boundingSphere).applyMatrix4(yo),this.boundingSphere.union(Bl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,s=this.morphTexture.source.data.data,l=a.length+1,u=e*l+1;for(let f=0;f<a.length;f++)a[f]=s[u+f]}raycast(e,t){const a=this.matrixWorld,s=this.count;if(Fl.geometry=this.geometry,Fl.material=this.material,Fl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bl.copy(this.boundingSphere),Bl.applyMatrix4(a),e.ray.intersectsSphere(Bl)!==!1))for(let l=0;l<s;l++){this.getMatrixAt(l,yo),Ix.multiplyMatrices(a,yo),Fl.matrixWorld=Ix,Fl.raycast(e,Wu);for(let u=0,f=Wu.length;u<f;u++){const h=Wu[u];h.instanceId=l,h.object=this,t.push(h)}Wu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _m(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,s=a.length+1;this.morphTexture===null&&(this.morphTexture=new Jm(new Float32Array(s*this.count),s,this.count,Vm,ji));const l=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const f=this.geometry.morphTargetsRelative?1:1-u,h=s*e;l[h]=f,l.set(a,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const up=new H,m1=new H,g1=new Rt;class hr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=up.subVectors(a,t).cross(m1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(up),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||g1.getNormalMatrix(e),s=this.coplanarPoint(up).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new ba,v1=new Fe(.5,.5),ju=new H;class $m{constructor(e=new hr,t=new hr,a=new hr,s=new hr,l=new hr,u=new hr){this.planes=[e,t,a,s,l,u]}set(e,t,a,s,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=xa,a=!1){const s=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],d=l[3],g=l[4],v=l[5],_=l[6],x=l[7],M=l[8],E=l[9],S=l[10],y=l[11],L=l[12],R=l[13],w=l[14],U=l[15];if(s[0].setComponents(d-u,x-g,y-M,U-L).normalize(),s[1].setComponents(d+u,x+g,y+M,U+L).normalize(),s[2].setComponents(d+f,x+v,y+E,U+R).normalize(),s[3].setComponents(d-f,x-v,y-E,U-R).normalize(),a)s[4].setComponents(h,_,S,w).normalize(),s[5].setComponents(d-h,x-_,y-S,U-w).normalize();else if(s[4].setComponents(d-h,x-_,y-S,U-w).normalize(),t===xa)s[5].setComponents(d+h,x+_,y+S,U+w).normalize();else if(t===vf)s[5].setComponents(h,_,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const t=v1.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(ju.x=s.normal.x>0?e.max.x:e.min.x,ju.y=s.normal.y>0?e.max.y:e.min.y,ju.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ju)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hc extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xf=new H,yf=new H,Fx=new Et,Hl=new bf,qu=new ba,fp=new H,Bx=new H;class Ef extends mn{constructor(e=new yn,t=new hc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let s=1,l=t.count;s<l;s++)xf.fromBufferAttribute(t,s-1),yf.fromBufferAttribute(t,s),a[s]=a[s-1],a[s]+=xf.distanceTo(yf);e.setAttribute("lineDistance",new Wt(a,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qu.copy(a.boundingSphere),qu.applyMatrix4(s),qu.radius+=l,e.ray.intersectsSphere(qu)===!1)return;Fx.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(Fx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=d){const y=g.getX(E),L=g.getX(E+1),R=Yu(this,e,Hl,h,y,L,E);R&&t.push(R)}if(this.isLineLoop){const E=g.getX(M-1),S=g.getX(x),y=Yu(this,e,Hl,h,E,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=d){const y=Yu(this,e,Hl,h,E,E+1,E);y&&t.push(y)}if(this.isLineLoop){const E=Yu(this,e,Hl,h,M-1,x,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Yu(o,e,t,a,s,l,u){const f=o.geometry.attributes.position;if(xf.fromBufferAttribute(f,s),yf.fromBufferAttribute(f,l),t.distanceSqToSegment(xf,yf,fp,Bx)>a)return;fp.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(fp);if(!(d<e.near||d>e.far))return{distance:d,point:Bx.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Hx=new H,Gx=new H;class e0 extends Ef{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let s=0,l=t.count;s<l;s+=2)Hx.fromBufferAttribute(t,s),Gx.fromBufferAttribute(t,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+Hx.distanceTo(Gx);e.setAttribute("lineDistance",new Wt(a,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _1 extends Ef{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class t0 extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vx=new Et,xm=new bf,Zu=new ba,Ku=new H;class tS extends mn{constructor(e=new yn,t=new t0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const a=this.geometry,s=this.matrixWorld,l=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Zu.copy(a.boundingSphere),Zu.applyMatrix4(s),Zu.radius+=l,e.ray.intersectsSphere(Zu)===!1)return;Vx.copy(s).invert(),xm.copy(e.ray).applyMatrix4(Vx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=a.index,v=a.attributes.position;if(d!==null){const _=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let M=_,E=x;M<E;M++){const S=d.getX(M);Ku.fromBufferAttribute(v,S),kx(Ku,S,h,s,e,t,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=_,E=x;M<E;M++)Ku.fromBufferAttribute(v,M),kx(Ku,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function kx(o,e,t,a,s,l,u){const f=xm.distanceSqToPoint(o);if(f<t){const h=new H;xm.closestPointToPoint(o,h),h.applyMatrix4(a);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class ym extends In{constructor(e,t,a,s,l,u,f,h,d){super(e,t,a,s,l,u,f,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oc extends In{constructor(e,t,a=Ma,s,l,u,f=Pn,h=Pn,d,g=ns,v=1){if(g!==ns&&g!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,s,l,u,f,h,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Km(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class x1 extends oc{constructor(e,t=Ma,a=vr,s,l,u=Pn,f=Pn,h,d=ns){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,a,s,l,u,f,h,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nS extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class n0 extends yn{constructor(e=1,t=1,a=4,s=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:a,radialSegments:s,heightSegments:l},t=Math.max(0,t),a=Math.max(1,Math.floor(a)),s=Math.max(3,Math.floor(s)),l=Math.max(1,Math.floor(l));const u=[],f=[],h=[],d=[],g=t/2,v=Math.PI/2*e,_=t,x=2*v+_,M=a*2+l,E=s+1,S=new H,y=new H;for(let L=0;L<=M;L++){let R=0,w=0,U=0,F=0;if(L<=a){const A=L/a,N=A*Math.PI/2;w=-g-e*Math.cos(N),U=e*Math.sin(N),F=-e*Math.cos(N),R=A*v}else if(L<=a+l){const A=(L-a)/l;w=-g+A*t,U=e,F=0,R=v+A*_}else{const A=(L-a-l)/a,N=A*Math.PI/2;w=g+e*Math.sin(N),U=e*Math.cos(N),F=e*Math.sin(N),R=v+_+A*v}const O=Math.max(0,Math.min(1,R/x));let W=0;L===0?W=.5/s:L===M&&(W=-.5/s);for(let A=0;A<=s;A++){const N=A/s,G=N*Math.PI*2,K=Math.sin(G),te=Math.cos(G);y.x=-U*te,y.y=w,y.z=U*K,f.push(y.x,y.y,y.z),S.set(-U*te,F,U*K),S.normalize(),h.push(S.x,S.y,S.z),d.push(N+W,O)}if(L>0){const A=(L-1)*E;for(let N=0;N<s;N++){const G=A+N,K=A+N+1,te=L*E+N,ue=L*E+N+1;u.push(G,K,te),u.push(K,ue,te)}}}this.setIndex(u),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n0(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class _r extends yn{constructor(e=1,t=1,a=1,s=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:a,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const d=this;s=Math.floor(s),l=Math.floor(l);const g=[],v=[],_=[],x=[];let M=0;const E=[],S=a/2;let y=0;L(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(g),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(x,2));function L(){const w=new H,U=new H;let F=0;const O=(t-e)/a;for(let W=0;W<=l;W++){const A=[],N=W/l,G=N*(t-e)+e;for(let K=0;K<=s;K++){const te=K/s,ue=te*h+f,fe=Math.sin(ue),B=Math.cos(ue);U.x=G*fe,U.y=-N*a+S,U.z=G*B,v.push(U.x,U.y,U.z),w.set(fe,O,B).normalize(),_.push(w.x,w.y,w.z),x.push(te,1-N),A.push(M++)}E.push(A)}for(let W=0;W<s;W++)for(let A=0;A<l;A++){const N=E[A][W],G=E[A+1][W],K=E[A+1][W+1],te=E[A][W+1];(e>0||A!==0)&&(g.push(N,G,te),F+=3),(t>0||A!==l-1)&&(g.push(G,K,te),F+=3)}d.addGroup(y,F,0),y+=F}function R(w){const U=M,F=new Fe,O=new H;let W=0;const A=w===!0?e:t,N=w===!0?1:-1;for(let K=1;K<=s;K++)v.push(0,S*N,0),_.push(0,N,0),x.push(.5,.5),M++;const G=M;for(let K=0;K<=s;K++){const ue=K/s*h+f,fe=Math.cos(ue),B=Math.sin(ue);O.x=A*B,O.y=S*N,O.z=A*fe,v.push(O.x,O.y,O.z),_.push(0,N,0),F.x=fe*.5+.5,F.y=B*.5*N+.5,x.push(F.x,F.y),M++}for(let K=0;K<s;K++){const te=U+K,ue=G+K;w===!0?g.push(ue,ue+1,te):g.push(ue+1,ue,te),W+=3}d.addGroup(y,W,w===!0?1:2),y+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class i0 extends _r{constructor(e=1,t=1,a=32,s=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,a,s,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:a,heightSegments:s,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new i0(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,t){const a=this.getUtoTmapping(e);return this.getPoint(a,t)}getPoints(e=5){const t=[];for(let a=0;a<=e;a++)t.push(this.getPoint(a/e));return t}getSpacedPoints(e=5){const t=[];for(let a=0;a<=e;a++)t.push(this.getPointAt(a/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let a,s=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)a=this.getPoint(u/e),l+=a.distanceTo(s),t.push(l),s=a;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const a=this.getLengths();let s=0;const l=a.length;let u;t?u=t:u=e*a[l-1];let f=0,h=l-1,d;for(;f<=h;)if(s=Math.floor(f+(h-f)/2),d=a[s]-u,d<0)f=s+1;else if(d>0)h=s-1;else{h=s;break}if(s=h,a[s]===u)return s/(l-1);const g=a[s],_=a[s+1]-g,x=(u-g)/_;return(s+x)/(l-1)}getTangent(e,t){let s=e-1e-4,l=e+1e-4;s<0&&(s=0),l>1&&(l=1);const u=this.getPoint(s),f=this.getPoint(l),h=t||(u.isVector2?new Fe:new H);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const a=this.getUtoTmapping(e);return this.getTangent(a,t)}computeFrenetFrames(e,t=!1){const a=new H,s=[],l=[],u=[],f=new H,h=new Et;for(let x=0;x<=e;x++){const M=x/e;s[x]=this.getTangentAt(M,new H)}l[0]=new H,u[0]=new H;let d=Number.MAX_VALUE;const g=Math.abs(s[0].x),v=Math.abs(s[0].y),_=Math.abs(s[0].z);g<=d&&(d=g,a.set(1,0,0)),v<=d&&(d=v,a.set(0,1,0)),_<=d&&a.set(0,0,1),f.crossVectors(s[0],a).normalize(),l[0].crossVectors(s[0],f),u[0].crossVectors(s[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(s[x-1],s[x]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Nt(s[x-1].dot(s[x]),-1,1));l[x].applyMatrix4(h.makeRotationAxis(f,M))}u[x].crossVectors(s[x],l[x])}if(t===!0){let x=Math.acos(Nt(l[0].dot(l[e]),-1,1));x/=e,s[0].dot(f.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(s[M],x*M)),u[M].crossVectors(s[M],l[M])}return{tangents:s,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class a0 extends Ta{constructor(e=0,t=0,a=1,s=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=a,this.yRadius=s,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Fe){const a=t,s=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=s;for(;l>s;)l-=s;l<Number.EPSILON&&(u?l=0:l=s),this.aClockwise===!0&&!u&&(l===s?l=-s:l=l-s);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),d=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=h-this.aX,x=d-this.aY;h=_*g-x*v+this.aX,d=_*v+x*g+this.aY}return a.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class y1 extends a0{constructor(e,t,a,s,l,u){super(e,t,a,a,s,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function s0(){let o=0,e=0,t=0,a=0;function s(l,u,f,h){o=l,e=f,t=-3*l+3*u-2*f-h,a=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,d){s(u,f,d*(f-l),d*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,d,g,v){let _=(u-l)/d-(f-l)/(d+g)+(f-u)/g,x=(f-u)/g-(h-u)/(g+v)+(h-f)/v;_*=g,x*=g,s(u,f,_,x)},calc:function(l){const u=l*l,f=u*l;return o+e*l+t*u+a*f}}}const Ju=new H,hp=new s0,dp=new s0,pp=new s0;class Sm extends Ta{constructor(e=[],t=!1,a="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=a,this.tension=s}getPoint(e,t=new H){const a=t,s=this.points,l=s.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let d,g;this.closed||f>0?d=s[(f-1)%l]:(Ju.subVectors(s[0],s[1]).add(s[0]),d=Ju);const v=s[f%l],_=s[(f+1)%l];if(this.closed||f+2<l?g=s[(f+2)%l]:(Ju.subVectors(s[l-1],s[l-2]).add(s[l-1]),g=Ju),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(v),x),E=Math.pow(v.distanceToSquared(_),x),S=Math.pow(_.distanceToSquared(g),x);E<1e-4&&(E=1),M<1e-4&&(M=E),S<1e-4&&(S=E),hp.initNonuniformCatmullRom(d.x,v.x,_.x,g.x,M,E,S),dp.initNonuniformCatmullRom(d.y,v.y,_.y,g.y,M,E,S),pp.initNonuniformCatmullRom(d.z,v.z,_.z,g.z,M,E,S)}else this.curveType==="catmullrom"&&(hp.initCatmullRom(d.x,v.x,_.x,g.x,this.tension),dp.initCatmullRom(d.y,v.y,_.y,g.y,this.tension),pp.initCatmullRom(d.z,v.z,_.z,g.z,this.tension));return a.set(hp.calc(h),dp.calc(h),pp.calc(h)),a}copy(e){super.copy(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,a=this.points.length;t<a;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xx(o,e,t,a,s){const l=(a-e)*.5,u=(s-t)*.5,f=o*o,h=o*f;return(2*t-2*a+l+u)*h+(-3*t+3*a-2*l-u)*f+l*o+t}function S1(o,e){const t=1-o;return t*t*e}function M1(o,e){return 2*(1-o)*o*e}function b1(o,e){return o*o*e}function Jl(o,e,t,a){return S1(o,e)+M1(o,t)+b1(o,a)}function T1(o,e){const t=1-o;return t*t*t*e}function E1(o,e){const t=1-o;return 3*t*t*o*e}function A1(o,e){return 3*(1-o)*o*o*e}function w1(o,e){return o*o*o*e}function Ql(o,e,t,a,s){return T1(o,e)+E1(o,t)+A1(o,a)+w1(o,s)}class iS extends Ta{constructor(e=new Fe,t=new Fe,a=new Fe,s=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=a,this.v3=s}getPoint(e,t=new Fe){const a=t,s=this.v0,l=this.v1,u=this.v2,f=this.v3;return a.set(Ql(e,s.x,l.x,u.x,f.x),Ql(e,s.y,l.y,u.y,f.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R1 extends Ta{constructor(e=new H,t=new H,a=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=a,this.v3=s}getPoint(e,t=new H){const a=t,s=this.v0,l=this.v1,u=this.v2,f=this.v3;return a.set(Ql(e,s.x,l.x,u.x,f.x),Ql(e,s.y,l.y,u.y,f.y),Ql(e,s.z,l.z,u.z,f.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aS extends Ta{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){const a=t;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C1 extends Ta{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const a=t;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sS extends Ta{constructor(e=new Fe,t=new Fe,a=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=a}getPoint(e,t=new Fe){const a=t,s=this.v0,l=this.v1,u=this.v2;return a.set(Jl(e,s.x,l.x,u.x),Jl(e,s.y,l.y,u.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D1 extends Ta{constructor(e=new H,t=new H,a=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=a}getPoint(e,t=new H){const a=t,s=this.v0,l=this.v1,u=this.v2;return a.set(Jl(e,s.x,l.x,u.x),Jl(e,s.y,l.y,u.y),Jl(e,s.z,l.z,u.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rS extends Ta{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){const a=t,s=this.points,l=(s.length-1)*e,u=Math.floor(l),f=l-u,h=s[u===0?u:u-1],d=s[u],g=s[u>s.length-2?s.length-1:u+1],v=s[u>s.length-3?s.length-1:u+2];return a.set(Xx(f,h.x,d.x,g.x,v.x),Xx(f,h.y,d.y,g.y,v.y)),a}copy(e){super.copy(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,a=this.points.length;t<a;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(new Fe().fromArray(s))}return this}}var Mm=Object.freeze({__proto__:null,ArcCurve:y1,CatmullRomCurve3:Sm,CubicBezierCurve:iS,CubicBezierCurve3:R1,EllipseCurve:a0,LineCurve:aS,LineCurve3:C1,QuadraticBezierCurve:sS,QuadraticBezierCurve3:D1,SplineCurve:rS});class N1 extends Ta{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const a=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mm[a](t,e))}return this}getPoint(e,t){const a=e*this.getLength(),s=this.getCurveLengths();let l=0;for(;l<s.length;){if(s[l]>=a){const u=s[l]-a,f=this.curves[l],h=f.getLength(),d=h===0?0:1-u/h;return f.getPointAt(d,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let a=0,s=this.curves.length;a<s;a++)t+=this.curves[a].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let a=0;a<=e;a++)t.push(this.getPoint(a/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let a;for(let s=0,l=this.curves;s<l.length;s++){const u=l[s],f=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,h=u.getPoints(f);for(let d=0;d<h.length;d++){const g=h[d];a&&a.equals(g)||(t.push(g),a=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,a=e.curves.length;t<a;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,a=this.curves.length;t<a;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,a=e.curves.length;t<a;t++){const s=e.curves[t];this.curves.push(new Mm[s.type]().fromJSON(s))}return this}}class Wx extends N1{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,a=e.length;t<a;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const a=new aS(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(a),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,a,s){const l=new sS(this.currentPoint.clone(),new Fe(e,t),new Fe(a,s));return this.curves.push(l),this.currentPoint.set(a,s),this}bezierCurveTo(e,t,a,s,l,u){const f=new iS(this.currentPoint.clone(),new Fe(e,t),new Fe(a,s),new Fe(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),a=new rS(t);return this.curves.push(a),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,a,s,l,u){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,a,s,l,u),this}absarc(e,t,a,s,l,u){return this.absellipse(e,t,a,a,s,l,u),this}ellipse(e,t,a,s,l,u,f,h){const d=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+d,t+g,a,s,l,u,f,h),this}absellipse(e,t,a,s,l,u,f,h){const d=new a0(e,t,a,s,l,u,f,h);if(this.curves.length>0){const v=d.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(d);const g=d.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class oS extends Wx{constructor(e){super(e),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let a=0,s=this.holes.length;a<s;a++)t[a]=this.holes[a].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,a=e.holes.length;t<a;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,a=this.holes.length;t<a;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,a=e.holes.length;t<a;t++){const s=e.holes[t];this.holes.push(new Wx().fromJSON(s))}return this}}function L1(o,e,t=2){const a=e&&e.length,s=a?e[0]*t:o.length;let l=lS(o,0,s,t,!0);const u=[];if(!l||l.next===l.prev)return u;let f,h,d;if(a&&(l=z1(o,e,l,t)),o.length>80*t){f=o[0],h=o[1];let g=f,v=h;for(let _=t;_<s;_+=t){const x=o[_],M=o[_+1];x<f&&(f=x),M<h&&(h=M),x>g&&(g=x),M>v&&(v=M)}d=Math.max(g-f,v-h),d=d!==0?32767/d:0}return lc(l,u,t,f,h,d,0),u}function lS(o,e,t,a,s){let l;if(s===Y1(o,e,t,a)>0)for(let u=e;u<t;u+=a)l=jx(u/a|0,o[u],o[u+1],l);else for(let u=t-a;u>=e;u-=a)l=jx(u/a|0,o[u],o[u+1],l);return l&&Uo(l,l.next)&&(uc(l),l=l.next),l}function xr(o,e){if(!o)return o;e||(e=o);let t=o,a;do if(a=!1,!t.steiner&&(Uo(t,t.next)||Sn(t.prev,t,t.next)===0)){if(uc(t),t=e=t.prev,t===t.next)break;a=!0}else t=t.next;while(a||t!==e);return e}function lc(o,e,t,a,s,l,u){if(!o)return;!u&&l&&V1(o,a,s,l);let f=o;for(;o.prev!==o.next;){const h=o.prev,d=o.next;if(l?P1(o,a,s,l):U1(o)){e.push(h.i,o.i,d.i),uc(o),o=d.next,f=d.next;continue}if(o=d,o===f){u?u===1?(o=O1(xr(o),e),lc(o,e,t,a,s,l,2)):u===2&&I1(o,e,t,a,s,l):lc(xr(o),e,t,a,s,l,1);break}}}function U1(o){const e=o.prev,t=o,a=o.next;if(Sn(e,t,a)>=0)return!1;const s=e.x,l=t.x,u=a.x,f=e.y,h=t.y,d=a.y,g=Math.min(s,l,u),v=Math.min(f,h,d),_=Math.max(s,l,u),x=Math.max(f,h,d);let M=a.next;for(;M!==e;){if(M.x>=g&&M.x<=_&&M.y>=v&&M.y<=x&&ql(s,f,l,h,u,d,M.x,M.y)&&Sn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function P1(o,e,t,a){const s=o.prev,l=o,u=o.next;if(Sn(s,l,u)>=0)return!1;const f=s.x,h=l.x,d=u.x,g=s.y,v=l.y,_=u.y,x=Math.min(f,h,d),M=Math.min(g,v,_),E=Math.max(f,h,d),S=Math.max(g,v,_),y=bm(x,M,e,t,a),L=bm(E,S,e,t,a);let R=o.prevZ,w=o.nextZ;for(;R&&R.z>=y&&w&&w.z<=L;){if(R.x>=x&&R.x<=E&&R.y>=M&&R.y<=S&&R!==s&&R!==u&&ql(f,g,h,v,d,_,R.x,R.y)&&Sn(R.prev,R,R.next)>=0||(R=R.prevZ,w.x>=x&&w.x<=E&&w.y>=M&&w.y<=S&&w!==s&&w!==u&&ql(f,g,h,v,d,_,w.x,w.y)&&Sn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;R&&R.z>=y;){if(R.x>=x&&R.x<=E&&R.y>=M&&R.y<=S&&R!==s&&R!==u&&ql(f,g,h,v,d,_,R.x,R.y)&&Sn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;w&&w.z<=L;){if(w.x>=x&&w.x<=E&&w.y>=M&&w.y<=S&&w!==s&&w!==u&&ql(f,g,h,v,d,_,w.x,w.y)&&Sn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function O1(o,e){let t=o;do{const a=t.prev,s=t.next.next;!Uo(a,s)&&uS(a,t,t.next,s)&&cc(a,s)&&cc(s,a)&&(e.push(a.i,t.i,s.i),uc(t),uc(t.next),t=o=s),t=t.next}while(t!==o);return xr(t)}function I1(o,e,t,a,s,l){let u=o;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&W1(u,f)){let h=fS(u,f);u=xr(u,u.next),h=xr(h,h.next),lc(u,e,t,a,s,l,0),lc(h,e,t,a,s,l,0);return}f=f.next}u=u.next}while(u!==o)}function z1(o,e,t,a){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l]*a,h=l<u-1?e[l+1]*a:o.length,d=lS(o,f,h,a,!1);d===d.next&&(d.steiner=!0),s.push(X1(d))}s.sort(F1);for(let l=0;l<s.length;l++)t=B1(s[l],t);return t}function F1(o,e){let t=o.x-e.x;if(t===0&&(t=o.y-e.y,t===0)){const a=(o.next.y-o.y)/(o.next.x-o.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=a-s}return t}function B1(o,e){const t=H1(o,e);if(!t)return e;const a=fS(t,o);return xr(a,a.next),xr(t,t.next)}function H1(o,e){let t=e;const a=o.x,s=o.y;let l=-1/0,u;if(Uo(o,t))return t;do{if(Uo(o,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const v=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>l&&(l=v,u=t.x<t.next.x?t:t.next,v===a))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,h=u.x,d=u.y;let g=1/0;t=u;do{if(a>=t.x&&t.x>=h&&a!==t.x&&cS(s<d?a:l,s,h,d,s<d?l:a,s,t.x,t.y)){const v=Math.abs(s-t.y)/(a-t.x);cc(t,o)&&(v<g||v===g&&(t.x>u.x||t.x===u.x&&G1(u,t)))&&(u=t,g=v)}t=t.next}while(t!==f);return u}function G1(o,e){return Sn(o.prev,o,e.prev)<0&&Sn(e.next,o,o.next)<0}function V1(o,e,t,a){let s=o;do s.z===0&&(s.z=bm(s.x,s.y,e,t,a)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,k1(s)}function k1(o){let e,t=1;do{let a=o,s;o=null;let l=null;for(e=0;a;){e++;let u=a,f=0;for(let d=0;d<t&&(f++,u=u.nextZ,!!u);d++);let h=t;for(;f>0||h>0&&u;)f!==0&&(h===0||!u||a.z<=u.z)?(s=a,a=a.nextZ,f--):(s=u,u=u.nextZ,h--),l?l.nextZ=s:o=s,s.prevZ=l,l=s;a=u}l.nextZ=null,t*=2}while(e>1);return o}function bm(o,e,t,a,s){return o=(o-t)*s|0,e=(e-a)*s|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function X1(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function cS(o,e,t,a,s,l,u,f){return(s-u)*(e-f)>=(o-u)*(l-f)&&(o-u)*(a-f)>=(t-u)*(e-f)&&(t-u)*(l-f)>=(s-u)*(a-f)}function ql(o,e,t,a,s,l,u,f){return!(o===u&&e===f)&&cS(o,e,t,a,s,l,u,f)}function W1(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!j1(o,e)&&(cc(o,e)&&cc(e,o)&&q1(o,e)&&(Sn(o.prev,o,e.prev)||Sn(o,e.prev,e))||Uo(o,e)&&Sn(o.prev,o,o.next)>0&&Sn(e.prev,e,e.next)>0)}function Sn(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Uo(o,e){return o.x===e.x&&o.y===e.y}function uS(o,e,t,a){const s=$u(Sn(o,e,t)),l=$u(Sn(o,e,a)),u=$u(Sn(t,a,o)),f=$u(Sn(t,a,e));return!!(s!==l&&u!==f||s===0&&Qu(o,t,e)||l===0&&Qu(o,a,e)||u===0&&Qu(t,o,a)||f===0&&Qu(t,e,a))}function Qu(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function $u(o){return o>0?1:o<0?-1:0}function j1(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&uS(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function cc(o,e){return Sn(o.prev,o,o.next)<0?Sn(o,e,o.next)>=0&&Sn(o,o.prev,e)>=0:Sn(o,e,o.prev)<0||Sn(o,o.next,e)<0}function q1(o,e){let t=o,a=!1;const s=(o.x+e.x)/2,l=(o.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&s<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(a=!a),t=t.next;while(t!==o);return a}function fS(o,e){const t=Tm(o.i,o.x,o.y),a=Tm(e.i,e.x,e.y),s=o.next,l=e.prev;return o.next=e,e.prev=o,t.next=s,s.prev=t,a.next=t,t.prev=a,l.next=a,a.prev=l,a}function jx(o,e,t,a){const s=Tm(o,e,t);return a?(s.next=a.next,s.prev=a,a.next.prev=s,a.next=s):(s.prev=s,s.next=s),s}function uc(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Tm(o,e,t){return{i:o,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Y1(o,e,t,a){let s=0;for(let l=e,u=t-a;l<t;l+=a)s+=(o[u]-o[l])*(o[l+1]+o[u+1]),u=l;return s}class Z1{static triangulate(e,t,a=2){return L1(e,t,a)}}class bo{static area(e){const t=e.length;let a=0;for(let s=t-1,l=0;l<t;s=l++)a+=e[s].x*e[l].y-e[l].x*e[s].y;return a*.5}static isClockWise(e){return bo.area(e)<0}static triangulateShape(e,t){const a=[],s=[],l=[];qx(e),Yx(a,e);let u=e.length;t.forEach(qx);for(let h=0;h<t.length;h++)s.push(u),u+=t[h].length,Yx(a,t[h]);const f=Z1.triangulate(a,s);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function qx(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function Yx(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class r0 extends yn{constructor(e=new oS([new Fe(.5,.5),new Fe(-.5,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const a=this,s=[],l=[];for(let f=0,h=e.length;f<h;f++){const d=e[f];u(d)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(l,2)),this.computeVertexNormals();function u(f){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:x-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,L=t.UVGenerator!==void 0?t.UVGenerator:K1;let R,w=!1,U,F,O,W;if(y){R=y.getSpacedPoints(g),w=!0,_=!1;const ie=y.isCatmullRomCurve3?y.closed:!1;U=y.computeFrenetFrames(g,ie),F=new H,O=new H,W=new H}_||(S=0,x=0,M=0,E=0);const A=f.extractPoints(d);let N=A.shape;const G=A.holes;if(!bo.isClockWise(N)){N=N.reverse();for(let ie=0,xe=G.length;ie<xe;ie++){const Ee=G[ie];bo.isClockWise(Ee)&&(G[ie]=Ee.reverse())}}function te(ie){const Ee=10000000000000001e-36;let Pe=ie[0];for(let z=1;z<=ie.length;z++){const tt=z%ie.length,qe=ie[tt],at=qe.x-Pe.x,Oe=qe.y-Pe.y,P=at*at+Oe*Oe,T=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(Pe.x),Math.abs(Pe.y)),j=Ee*T*T;if(P<=j){ie.splice(tt,1),z--;continue}Pe=qe}}te(N),G.forEach(te);const ue=G.length,fe=N;for(let ie=0;ie<ue;ie++){const xe=G[ie];N=N.concat(xe)}function B(ie,xe,Ee){return xe||_t("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(xe,Ee)}const V=N.length;function oe(ie,xe,Ee){let Pe,z,tt;const qe=ie.x-xe.x,at=ie.y-xe.y,Oe=Ee.x-ie.x,P=Ee.y-ie.y,T=qe*qe+at*at,j=qe*P-at*Oe;if(Math.abs(j)>Number.EPSILON){const ye=Math.sqrt(T),me=Math.sqrt(Oe*Oe+P*P),Z=xe.x-at/ye,q=xe.y+qe/ye,ae=Ee.x-P/me,be=Ee.y+Oe/me,Ke=((ae-Z)*P-(be-q)*Oe)/(qe*P-at*Oe);Pe=Z+qe*Ke-ie.x,z=q+at*Ke-ie.y;const ge=Pe*Pe+z*z;if(ge<=2)return new Fe(Pe,z);tt=Math.sqrt(ge/2)}else{let ye=!1;qe>Number.EPSILON?Oe>Number.EPSILON&&(ye=!0):qe<-Number.EPSILON?Oe<-Number.EPSILON&&(ye=!0):Math.sign(at)===Math.sign(P)&&(ye=!0),ye?(Pe=-at,z=qe,tt=Math.sqrt(T)):(Pe=qe,z=at,tt=Math.sqrt(T/2))}return new Fe(Pe/tt,z/tt)}const Re=[];for(let ie=0,xe=fe.length,Ee=xe-1,Pe=ie+1;ie<xe;ie++,Ee++,Pe++)Ee===xe&&(Ee=0),Pe===xe&&(Pe=0),Re[ie]=oe(fe[ie],fe[Ee],fe[Pe]);const Ce=[];let I,se=Re.concat();for(let ie=0,xe=ue;ie<xe;ie++){const Ee=G[ie];I=[];for(let Pe=0,z=Ee.length,tt=z-1,qe=Pe+1;Pe<z;Pe++,tt++,qe++)tt===z&&(tt=0),qe===z&&(qe=0),I[Pe]=oe(Ee[Pe],Ee[tt],Ee[qe]);Ce.push(I),se=se.concat(I)}let Me;if(S===0)Me=bo.triangulateShape(fe,G);else{const ie=[],xe=[];for(let Ee=0;Ee<S;Ee++){const Pe=Ee/S,z=x*Math.cos(Pe*Math.PI/2),tt=M*Math.sin(Pe*Math.PI/2)+E;for(let qe=0,at=fe.length;qe<at;qe++){const Oe=B(fe[qe],Re[qe],tt);Xe(Oe.x,Oe.y,-z),Pe===0&&ie.push(Oe)}for(let qe=0,at=ue;qe<at;qe++){const Oe=G[qe];I=Ce[qe];const P=[];for(let T=0,j=Oe.length;T<j;T++){const ye=B(Oe[T],I[T],tt);Xe(ye.x,ye.y,-z),Pe===0&&P.push(ye)}Pe===0&&xe.push(P)}}Me=bo.triangulateShape(ie,xe)}const Ie=Me.length,Ye=M+E;for(let ie=0;ie<V;ie++){const xe=_?B(N[ie],se[ie],Ye):N[ie];w?(O.copy(U.normals[0]).multiplyScalar(xe.x),F.copy(U.binormals[0]).multiplyScalar(xe.y),W.copy(R[0]).add(O).add(F),Xe(W.x,W.y,W.z)):Xe(xe.x,xe.y,0)}for(let ie=1;ie<=g;ie++)for(let xe=0;xe<V;xe++){const Ee=_?B(N[xe],se[xe],Ye):N[xe];w?(O.copy(U.normals[ie]).multiplyScalar(Ee.x),F.copy(U.binormals[ie]).multiplyScalar(Ee.y),W.copy(R[ie]).add(O).add(F),Xe(W.x,W.y,W.z)):Xe(Ee.x,Ee.y,v/g*ie)}for(let ie=S-1;ie>=0;ie--){const xe=ie/S,Ee=x*Math.cos(xe*Math.PI/2),Pe=M*Math.sin(xe*Math.PI/2)+E;for(let z=0,tt=fe.length;z<tt;z++){const qe=B(fe[z],Re[z],Pe);Xe(qe.x,qe.y,v+Ee)}for(let z=0,tt=G.length;z<tt;z++){const qe=G[z];I=Ce[z];for(let at=0,Oe=qe.length;at<Oe;at++){const P=B(qe[at],I[at],Pe);w?Xe(P.x,P.y+R[g-1].y,R[g-1].x+Ee):Xe(P.x,P.y,v+Ee)}}}re(),ve();function re(){const ie=s.length/3;if(_){let xe=0,Ee=V*xe;for(let Pe=0;Pe<Ie;Pe++){const z=Me[Pe];We(z[2]+Ee,z[1]+Ee,z[0]+Ee)}xe=g+S*2,Ee=V*xe;for(let Pe=0;Pe<Ie;Pe++){const z=Me[Pe];We(z[0]+Ee,z[1]+Ee,z[2]+Ee)}}else{for(let xe=0;xe<Ie;xe++){const Ee=Me[xe];We(Ee[2],Ee[1],Ee[0])}for(let xe=0;xe<Ie;xe++){const Ee=Me[xe];We(Ee[0]+V*g,Ee[1]+V*g,Ee[2]+V*g)}}a.addGroup(ie,s.length/3-ie,0)}function ve(){const ie=s.length/3;let xe=0;ke(fe,xe),xe+=fe.length;for(let Ee=0,Pe=G.length;Ee<Pe;Ee++){const z=G[Ee];ke(z,xe),xe+=z.length}a.addGroup(ie,s.length/3-ie,1)}function ke(ie,xe){let Ee=ie.length;for(;--Ee>=0;){const Pe=Ee;let z=Ee-1;z<0&&(z=ie.length-1);for(let tt=0,qe=g+S*2;tt<qe;tt++){const at=V*tt,Oe=V*(tt+1),P=xe+Pe+at,T=xe+z+at,j=xe+z+Oe,ye=xe+Pe+Oe;vt(P,T,j,ye)}}}function Xe(ie,xe,Ee){h.push(ie),h.push(xe),h.push(Ee)}function We(ie,xe,Ee){St(ie),St(xe),St(Ee);const Pe=s.length/3,z=L.generateTopUV(a,s,Pe-3,Pe-2,Pe-1);pe(z[0]),pe(z[1]),pe(z[2])}function vt(ie,xe,Ee,Pe){St(ie),St(xe),St(Pe),St(xe),St(Ee),St(Pe);const z=s.length/3,tt=L.generateSideWallUV(a,s,z-6,z-3,z-2,z-1);pe(tt[0]),pe(tt[1]),pe(tt[3]),pe(tt[1]),pe(tt[2]),pe(tt[3])}function St(ie){s.push(h[ie*3+0]),s.push(h[ie*3+1]),s.push(h[ie*3+2])}function pe(ie){l.push(ie.x),l.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,a=this.parameters.options;return J1(t,a,e)}static fromJSON(e,t){const a=[];for(let l=0,u=e.shapes.length;l<u;l++){const f=t[e.shapes[l]];a.push(f)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mm[s.type]().fromJSON(s)),new r0(a,e.options)}}const K1={generateTopUV:function(o,e,t,a,s){const l=e[t*3],u=e[t*3+1],f=e[a*3],h=e[a*3+1],d=e[s*3],g=e[s*3+1];return[new Fe(l,u),new Fe(f,h),new Fe(d,g)]},generateSideWallUV:function(o,e,t,a,s,l){const u=e[t*3],f=e[t*3+1],h=e[t*3+2],d=e[a*3],g=e[a*3+1],v=e[a*3+2],_=e[s*3],x=e[s*3+1],M=e[s*3+2],E=e[l*3],S=e[l*3+1],y=e[l*3+2];return Math.abs(f-g)<Math.abs(u-d)?[new Fe(u,1-h),new Fe(d,1-v),new Fe(_,1-M),new Fe(E,1-y)]:[new Fe(f,1-h),new Fe(g,1-v),new Fe(x,1-M),new Fe(S,1-y)]}};function J1(o,e,t){if(t.shapes=[],Array.isArray(o))for(let a=0,s=o.length;a<s;a++){const l=o[a];t.shapes.push(l.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dc extends yn{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,u=t/2,f=Math.floor(a),h=Math.floor(s),d=f+1,g=h+1,v=e/f,_=t/h,x=[],M=[],E=[],S=[];for(let y=0;y<g;y++){const L=y*_-u;for(let R=0;R<d;R++){const w=R*v-l;M.push(w,-L,0),E.push(0,0,1),S.push(R/f),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let L=0;L<f;L++){const R=L+d*y,w=L+d*(y+1),U=L+1+d*(y+1),F=L+1+d*y;x.push(R,w,F),x.push(w,U,F)}this.setIndex(x),this.setAttribute("position",new Wt(M,3)),this.setAttribute("normal",new Wt(E,3)),this.setAttribute("uv",new Wt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class o0 extends yn{constructor(e=.5,t=1,a=32,s=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:a,phiSegments:s,thetaStart:l,thetaLength:u},a=Math.max(3,a),s=Math.max(1,s);const f=[],h=[],d=[],g=[];let v=e;const _=(t-e)/s,x=new H,M=new Fe;for(let E=0;E<=s;E++){for(let S=0;S<=a;S++){const y=l+S/a*u;x.x=v*Math.cos(y),x.y=v*Math.sin(y),h.push(x.x,x.y,x.z),d.push(0,0,1),M.x=(x.x/t+1)/2,M.y=(x.y/t+1)/2,g.push(M.x,M.y)}v+=_}for(let E=0;E<s;E++){const S=E*(a+1);for(let y=0;y<a;y++){const L=y+S,R=L,w=L+a+1,U=L+a+2,F=L+1;f.push(R,w,F),f.push(w,U,F)}}this.setIndex(f),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new o0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ia extends yn{constructor(e=1,t=32,a=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const h=Math.min(u+f,Math.PI);let d=0;const g=[],v=new H,_=new H,x=[],M=[],E=[],S=[];for(let y=0;y<=a;y++){const L=[],R=y/a;let w=0;y===0&&u===0?w=.5/t:y===a&&h===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){const F=U/t;v.x=-e*Math.cos(s+F*l)*Math.sin(u+R*f),v.y=e*Math.cos(u+R*f),v.z=e*Math.sin(s+F*l)*Math.sin(u+R*f),M.push(v.x,v.y,v.z),_.copy(v).normalize(),E.push(_.x,_.y,_.z),S.push(F+w,1-R),L.push(d++)}g.push(L)}for(let y=0;y<a;y++)for(let L=0;L<t;L++){const R=g[y][L+1],w=g[y][L],U=g[y+1][L],F=g[y+1][L+1];(y!==0||u>0)&&x.push(R,w,F),(y!==a-1||h<Math.PI)&&x.push(w,U,F)}this.setIndex(x),this.setAttribute("position",new Wt(M,3)),this.setAttribute("normal",new Wt(E,3)),this.setAttribute("uv",new Wt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class To extends yn{constructor(e=1,t=.4,a=12,s=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:s,arc:l},a=Math.floor(a),s=Math.floor(s);const u=[],f=[],h=[],d=[],g=new H,v=new H,_=new H;for(let x=0;x<=a;x++)for(let M=0;M<=s;M++){const E=M/s*l,S=x/a*Math.PI*2;v.x=(e+t*Math.cos(S))*Math.cos(E),v.y=(e+t*Math.cos(S))*Math.sin(E),v.z=t*Math.sin(S),f.push(v.x,v.y,v.z),g.x=e*Math.cos(E),g.y=e*Math.sin(E),_.subVectors(v,g).normalize(),h.push(_.x,_.y,_.z),d.push(M/s),d.push(x/a)}for(let x=1;x<=a;x++)for(let M=1;M<=s;M++){const E=(s+1)*x+M-1,S=(s+1)*(x-1)+M-1,y=(s+1)*(x-1)+M,L=(s+1)*x+M;u.push(E,S,L),u.push(S,y,L)}this.setIndex(u),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hS extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yr extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jm,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oa extends yr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Em extends Zi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jm,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Q1 extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $1 extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ef(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function eE(o){function e(s,l){return o[s]-o[l]}const t=o.length,a=new Array(t);for(let s=0;s!==t;++s)a[s]=s;return a.sort(e),a}function Zx(o,e,t){const a=o.length,s=new o.constructor(a);for(let l=0,u=0;u!==a;++l){const f=t[l]*e;for(let h=0;h!==e;++h)s[u++]=o[f+h]}return s}function dS(o,e,t,a){let s=1,l=o[0];for(;l!==void 0&&l[a]===void 0;)l=o[s++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(e.push(l.time),t.push(...u)),l=o[s++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(e.push(l.time),u.toArray(t,t.length)),l=o[s++];while(l!==void 0);else do u=l[a],u!==void 0&&(e.push(l.time),t.push(u)),l=o[s++];while(l!==void 0)}class pc{constructor(e,t,a,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let a=this._cachedIndex,s=t[a],l=t[a-1];e:{t:{let u;n:{i:if(!(e<s)){for(let f=a+2;;){if(s===void 0){if(e<l)break i;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(l=s,s=t[++a],e<s)break t}u=t.length;break n}if(!(e>=l)){const f=t[1];e<f&&(a=2,l=f);for(let h=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===h)break;if(s=l,l=t[--a-1],e>=l)break t}u=a,a=0;break n}break e}for(;a<u;){const f=a+u>>>1;e<t[f]?u=f:a=f+1}if(s=t[a],l=t[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,s)}return this.interpolate_(a,l,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s;for(let u=0;u!==s;++u)t[u]=a[l+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tE extends pc{constructor(e,t,a,s){super(e,t,a,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sx,endingEnd:sx}}intervalChanged_(e,t,a){const s=this.parameterPositions;let l=e-2,u=e+1,f=s[l],h=s[u];if(f===void 0)switch(this.getSettings_().endingStart){case rx:l=e,f=2*t-a;break;case ox:l=s.length-2,f=t+s[l]-s[l+1];break;default:l=e,f=a}if(h===void 0)switch(this.getSettings_().endingEnd){case rx:u=e,h=2*a-t;break;case ox:u=1,h=a+s[1]-s[0];break;default:u=e-1,h=t}const d=(a-t)*.5,g=this.valueSize;this._weightPrev=d/(t-f),this._weightNext=d/(h-a),this._offsetPrev=l*g,this._offsetNext=u*g}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(a-t)/(s-t),E=M*M,S=E*M,y=-_*S+2*_*E-_*M,L=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,R=(-1-x)*S+(1.5+x)*E+.5*M,w=x*S-x*E;for(let U=0;U!==f;++U)l[U]=y*u[g+U]+L*u[d+U]+R*u[h+U]+w*u[v+U];return l}}class nE extends pc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=(a-t)/(s-t),v=1-g;for(let _=0;_!==f;++_)l[_]=u[d+_]*v+u[h+_]*g;return l}}class iE extends pc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class la{constructor(e,t,a,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ef(t,this.TimeBufferType),this.values=ef(a,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:ef(e.times,Array),values:ef(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(a.interpolation=s)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new iE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nc:t=this.InterpolantFactoryMethodDiscrete;break;case ic:t=this.InterpolantFactoryMethodLinear;break;case Bd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return ft("KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nc;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return Bd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let a=0,s=t.length;a!==s;++a)t[a]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let a=0,s=t.length;a!==s;++a)t[a]*=e}return this}trim(e,t){const a=this.times,s=a.length;let l=0,u=s-1;for(;l!==s&&a[l]<e;)++l;for(;u!==-1&&a[u]>t;)--u;if(++u,l!==0||u!==s){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(_t("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,s=this.values,l=a.length;l===0&&(_t("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==l;f++){const h=a[f];if(typeof h=="number"&&isNaN(h)){_t("KeyframeTrack: Time is not a valid number.",this,f,h),e=!1;break}if(u!==null&&u>h){_t("KeyframeTrack: Out of order keys.",this,f,h,u),e=!1;break}u=h}if(s!==void 0&&MT(s))for(let f=0,h=s.length;f!==h;++f){const d=s[f];if(isNaN(d)){_t("KeyframeTrack: Value is not a valid number.",this,f,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),s=this.getInterpolation()===Bd,l=e.length-1;let u=1;for(let f=1;f<l;++f){let h=!1;const d=e[f],g=e[f+1];if(d!==g&&(f!==1||d!==e[0]))if(s)h=!0;else{const v=f*a,_=v-a,x=v+a;for(let M=0;M!==a;++M){const E=t[v+M];if(E!==t[_+M]||E!==t[x+M]){h=!0;break}}}if(h){if(f!==u){e[u]=e[f];const v=f*a,_=u*a;for(let x=0;x!==a;++x)t[_+x]=t[v+x]}++u}}if(l>0){e[u]=e[l];for(let f=l*a,h=u*a,d=0;d!==a;++d)t[h+d]=t[f+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*a)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),a=this.constructor,s=new a(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}la.prototype.ValueTypeName="";la.prototype.TimeBufferType=Float32Array;la.prototype.ValueBufferType=Float32Array;la.prototype.DefaultInterpolation=ic;class Fo extends la{constructor(e,t,a){super(e,t,a)}}Fo.prototype.ValueTypeName="bool";Fo.prototype.ValueBufferType=Array;Fo.prototype.DefaultInterpolation=nc;Fo.prototype.InterpolantFactoryMethodLinear=void 0;Fo.prototype.InterpolantFactoryMethodSmooth=void 0;class pS extends la{constructor(e,t,a,s){super(e,t,a,s)}}pS.prototype.ValueTypeName="color";class Po extends la{constructor(e,t,a,s){super(e,t,a,s)}}Po.prototype.ValueTypeName="number";class aE extends pc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=(a-t)/(s-t);let d=e*f;for(let g=d+f;d!==g;d+=4)Bs.slerpFlat(l,0,u,d-f,u,d,h);return l}}class Oo extends la{constructor(e,t,a,s){super(e,t,a,s)}InterpolantFactoryMethodLinear(e){return new aE(this.times,this.values,this.getValueSize(),e)}}Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class Bo extends la{constructor(e,t,a){super(e,t,a)}}Bo.prototype.ValueTypeName="string";Bo.prototype.ValueBufferType=Array;Bo.prototype.DefaultInterpolation=nc;Bo.prototype.InterpolantFactoryMethodLinear=void 0;Bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends la{constructor(e,t,a,s){super(e,t,a,s)}}Io.prototype.ValueTypeName="vector";class sE{constructor(e="",t=-1,a=[],s=hT){this.name=e,this.tracks=a,this.duration=t,this.blendMode=s,this.uuid=Yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],a=e.tracks,s=1/(e.fps||1);for(let u=0,f=a.length;u!==f;++u)t.push(oE(a[u]).scale(s));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l.userData=JSON.parse(e.userData||"{}"),l}static toJSON(e){const t=[],a=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let l=0,u=a.length;l!==u;++l)t.push(la.toJSON(a[l]));return s}static CreateFromMorphTargetSequence(e,t,a,s){const l=t.length,u=[];for(let f=0;f<l;f++){let h=[],d=[];h.push((f+l-1)%l,f,(f+1)%l),d.push(0,1,0);const g=eE(h);h=Zx(h,1,g),d=Zx(d,1,g),!s&&h[0]===0&&(h.push(l),d.push(d[0])),u.push(new Po(".morphTargetInfluences["+t[f].name+"]",h,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,t){let a=e;if(!Array.isArray(e)){const s=e;a=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<a.length;s++)if(a[s].name===t)return a[s];return null}static CreateClipsFromMorphTargetSequences(e,t,a){const s={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,h=e.length;f<h;f++){const d=e[f],g=d.name.match(l);if(g&&g.length>1){const v=g[1];let _=s[v];_||(s[v]=_=[]),_.push(d)}}const u=[];for(const f in s)u.push(this.CreateFromMorphTargetSequence(f,s[f],t,a));return u}static parseAnimation(e,t){if(ft("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return _t("AnimationClip: No animation in JSONLoader data."),null;const a=function(v,_,x,M,E){if(x.length!==0){const S=[],y=[];dS(x,S,y,M),S.length!==0&&E.push(new v(_,S,y))}},s=[],l=e.name||"default",u=e.fps||30,f=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let v=0;v<d.length;v++){const _=d[v].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)x[_[M].morphTargets[E]]=-1;for(const E in x){const S=[],y=[];for(let L=0;L!==_[M].morphTargets.length;++L){const R=_[M];S.push(R.time),y.push(R.morphTarget===E?1:0)}s.push(new Po(".morphTargetInfluence["+E+"]",S,y))}h=x.length*u}else{const x=".bones["+t[v].name+"]";a(Io,x+".position",_,"pos",s),a(Oo,x+".quaternion",_,"rot",s),a(Io,x+".scale",_,"scl",s)}}return s.length===0?null:new this(l,h,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let a=0,s=e.length;a!==s;++a){const l=this.tracks[a];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function rE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Po;case"vector":case"vector2":case"vector3":case"vector4":return Io;case"color":return pS;case"quaternion":return Oo;case"bool":case"boolean":return Fo;case"string":return Bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function oE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rE(o.type);if(o.times===void 0){const t=[],a=[];dS(o.keys,t,a,"value"),o.times=t,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Qa={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class lE{constructor(e,t,a){const s=this;let l=!1,u=0,f=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(g){f++,l===!1&&s.onStart!==void 0&&s.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,s.onProgress!==void 0&&s.onProgress(g,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){const v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){const x=d[v],M=d[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cE=new lE;class Ho{constructor(e){this.manager=e!==void 0?e:cE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const a=this;return new Promise(function(s,l){a.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ka={};class uE extends Error{constructor(e,t){super(e),this.response=t}}class mS extends Ho{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Qa.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Ka[e]!==void 0){Ka[e].push({onLoad:t,onProgress:a,onError:s});return}Ka[e]=[],Ka[e].push({onLoad:t,onProgress:a,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,h=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Ka[e],v=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let E=0;const S=new ReadableStream({start(y){L();function L(){v.read().then(({done:R,value:w})=>{if(R)y.close();else{E+=w.byteLength;const U=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let F=0,O=g.length;F<O;F++){const W=g[F];W.onProgress&&W.onProgress(U)}y.enqueue(w),L()}},R=>{y.error(R)})}}});return new Response(S)}else throw new uE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return d.json();default:if(f==="")return d.text();{const v=/charset="?([^;"\s]*)"?/i.exec(f),_=v&&v[1]?v[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{Qa.add(`file:${e}`,d);const g=Ka[e];delete Ka[e];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=Ka[e];if(g===void 0)throw this.manager.itemError(e),d;delete Ka[e];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const So=new WeakMap;class fE extends Ho{constructor(e){super(e)}load(e,t,a,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Qa.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let v=So.get(u);v===void 0&&(v=[],So.set(u,v)),v.push({onLoad:t,onError:s})}return u}const f=ac("img");function h(){g(),t&&t(this);const v=So.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}So.delete(this),l.manager.itemEnd(e)}function d(v){g(),s&&s(v),Qa.remove(`image:${e}`);const _=So.get(this)||[];for(let x=0;x<_.length;x++){const M=_[x];M.onError&&M.onError(v)}So.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Qa.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class hE extends Ho{constructor(e){super(e)}load(e,t,a,s){const l=new In,u=new fE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},a,s),l}}class Af extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class gS extends Af{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mp=new Et,Kx=new H,Jx=new H;class l0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $m,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,a=this.matrix;Kx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kx),Jx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jx),t.updateMatrixWorld(),mp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp,t.coordinateSystem,t.reversedDepth),t.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(mp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dE extends l0{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,a=Do*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(a!==t.fov||s!==t.aspect||l!==t.far)&&(t.fov=a,t.aspect=s,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vS extends Af{constructor(e,t,a=0,s=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=a,this.angle=s,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new dE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class pE extends l0{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class c0 extends Af{constructor(e,t,a=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=s,this.shadow=new pE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class mc extends qy{constructor(e=-1,t=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,u=a+e,f=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mE extends l0{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sf extends Af{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new mE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class $l{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const gp=new WeakMap;class gE extends Ho{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ft("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ft("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Qa.get(`image-bitmap:${e}`);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(d=>{if(gp.has(u)===!0)s&&s(gp.get(u)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(d),l.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,f).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(d){return Qa.add(`image-bitmap:${e}`,d),t&&t(d),l.manager.itemEnd(e),d}).catch(function(d){s&&s(d),gp.set(h,d),Qa.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});Qa.add(`image-bitmap:${e}`,h),l.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class u0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const f0="\\[\\]\\.:\\/",_E=new RegExp("["+f0+"]","g"),h0="[^"+f0+"]",xE="[^"+f0.replace("\\.","")+"]",yE=/((?:WC+[\/:])*)/.source.replace("WC",h0),SE=/(WCOD+)?/.source.replace("WCOD",xE),ME=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",h0),bE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",h0),TE=new RegExp("^"+yE+SE+ME+bE+"$"),EE=["material","materials","bones","map"];class AE{constructor(e,t,a){const s=a||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const a=this._targetGroup.nCachedObjects_,s=this._bindings[a];s!==void 0&&s.getValue(e,t)}setValue(e,t){const a=this._bindings;for(let s=this._targetGroup.nCachedObjects_,l=a.length;s!==l;++s)a[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}}class an{constructor(e,t,a){this.path=t,this.parsedPath=a||an.parseTrackName(t),this.node=an.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new an.Composite(e,t,a):new an(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_E,"")}static parseTrackName(e){const t=TE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=a.nodeName&&a.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const l=a.nodeName.substring(s+1);EE.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,s),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){const a=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===t||f.uuid===t)return f;const h=a(f.children);if(h)return h}return null},s=a(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)e[t++]=a[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,a=t.objectName,s=t.propertyName;let l=t.propertyIndex;if(e||(e=an.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=t.objectIndex;switch(a){case"materials":if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){_t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){_t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){_t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){_t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){_t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[s];if(u===void 0){const d=t.nodeName;_t("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(l!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}h=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(h=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}an.Composite=AE;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wE extends e0{constructor(e=10,t=10,a=4473924,s=8947848){a=new ct(a),s=new ct(s);const l=t/2,u=e/t,f=e/2,h=[],d=[];for(let _=0,x=0,M=-f;_<=t;_++,M+=u){h.push(-f,0,M,f,0,M),h.push(M,0,-f,M,0,f);const E=_===l?a:s;E.toArray(d,x),x+=3,E.toArray(d,x),x+=3,E.toArray(d,x),x+=3,E.toArray(d,x),x+=3}const g=new yn;g.setAttribute("position",new Wt(h,3)),g.setAttribute("color",new Wt(d,3));const v=new hc({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qx(o,e,t,a){const s=RE(a);switch(t){case zy:return o*e;case Vm:return o*e/s.components*s.byteLength;case km:return o*e/s.components*s.byteLength;case Co:return o*e*2/s.components*s.byteLength;case Xm:return o*e*2/s.components*s.byteLength;case Fy:return o*e*3/s.components*s.byteLength;case qi:return o*e*4/s.components*s.byteLength;case Wm:return o*e*4/s.components*s.byteLength;case cf:case uf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ff:case hf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bp:case Gp:return Math.max(o,16)*Math.max(e,8)/4;case Fp:case Hp:return Math.max(o,8)*Math.max(e,8)/2;case Vp:case kp:case Wp:case jp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xp:case qp:case Yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Jp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case $p:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case em:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case tm:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case nm:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case im:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case am:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case sm:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case rm:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case om:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case lm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case cm:case um:case fm:return Math.ceil(o/4)*Math.ceil(e/4)*16;case hm:case dm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case pm:case mm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function RE(o){switch(o){case Di:case Uy:return{byteLength:1,components:1};case ec:case Py:case Ni:return{byteLength:2,components:1};case Hm:case Gm:return{byteLength:2,components:4};case Ma:case Bm:case ji:return{byteLength:4,components:1};case Oy:case Iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lm}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lm);function _S(){let o=null,e=!1,t=null,a=null;function s(l,u){t(l,u),a=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(a=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){o=l}}}function CE(o){const e=new WeakMap;function t(f,h){const d=f.array,g=f.usage,v=d.byteLength,_=o.createBuffer();o.bindBuffer(h,_),o.bufferData(h,d,g),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,h,d){const g=h.array,v=h.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,g);else{v.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<v.length;x++){const M=v[_],E=v[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,v[_]=E)}v.length=_+1;for(let x=0,M=v.length;x<M;x++){const E=v[x];o.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(o.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,h),d.version=f.version}}return{get:s,remove:l,update:u}}var DE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NE=`#ifdef USE_ALPHAHASH
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
#endif`,LE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IE=`#ifdef USE_AOMAP
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
#endif`,zE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FE=`#ifdef USE_BATCHING
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
#endif`,HE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kE=`#ifdef USE_IRIDESCENCE
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
#endif`,XE=`#ifdef USE_BUMPMAP
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
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$E=`#define PI 3.141592653589793
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
} // validated`,eA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tA=`vec3 transformedNormal = objectNormal;
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
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rA="gl_FragColor = linearToOutputTexel( gl_FragColor );",oA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lA=`#ifdef USE_ENVMAP
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
#endif`,cA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
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
#endif`,fA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hA=`#ifdef USE_ENVMAP
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
#endif`,dA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vA=`#ifdef USE_GRADIENTMAP
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
}`,_A=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SA=`uniform bool receiveShadow;
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
#endif`,MA=`#ifdef USE_ENVMAP
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
#endif`,bA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wA=`PhysicalMaterial material;
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
#endif`,RA=`uniform sampler2D dfgLUT;
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
}`,CA=`
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
#endif`,DA=`#if defined( RE_IndirectDiffuse )
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
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`#ifdef USE_MORPHTARGETS
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
#endif`,jA=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,YA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QA=`#ifdef USE_NORMALMAP
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
#endif`,$A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ow=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pw=`float getShadowMask() {
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
}`,mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gw=`#ifdef USE_SKINNING
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
#endif`,vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_w=`#ifdef USE_SKINNING
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
#endif`,xw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bw=`#ifdef USE_TRANSMISSION
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
#endif`,Tw=`#ifdef USE_TRANSMISSION
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dw=`uniform sampler2D t2D;
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
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`#include <common>
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
}`,Iw=`#if DEPTH_PACKING == 3200
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
}`,zw=`#define DISTANCE
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
}`,Fw=`#define DISTANCE
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
}`,Hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`uniform float scale;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,kw=`#include <common>
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
}`,Xw=`uniform vec3 diffuse;
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
}`,Ww=`#define LAMBERT
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
}`,jw=`#define LAMBERT
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
}`,Yw=`#define MATCAP
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
}`,Zw=`#define NORMAL
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
}`,Kw=`#define NORMAL
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
}`,Jw=`#define PHONG
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
}`,Qw=`#define PHONG
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
}`,$w=`#define STANDARD
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
}`,e2=`#define STANDARD
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
}`,t2=`#define TOON
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
}`,n2=`#define TOON
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
}`,i2=`uniform float size;
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
}`,a2=`uniform vec3 diffuse;
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
}`,s2=`#include <common>
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
}`,r2=`uniform vec3 color;
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
}`,o2=`uniform float rotation;
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
}`,l2=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:DE,alphahash_pars_fragment:NE,alphamap_fragment:LE,alphamap_pars_fragment:UE,alphatest_fragment:PE,alphatest_pars_fragment:OE,aomap_fragment:IE,aomap_pars_fragment:zE,batching_pars_vertex:FE,batching_vertex:BE,begin_vertex:HE,beginnormal_vertex:GE,bsdfs:VE,iridescence_fragment:kE,bumpmap_pars_fragment:XE,clipping_planes_fragment:WE,clipping_planes_pars_fragment:jE,clipping_planes_pars_vertex:qE,clipping_planes_vertex:YE,color_fragment:ZE,color_pars_fragment:KE,color_pars_vertex:JE,color_vertex:QE,common:$E,cube_uv_reflection_fragment:eA,defaultnormal_vertex:tA,displacementmap_pars_vertex:nA,displacementmap_vertex:iA,emissivemap_fragment:aA,emissivemap_pars_fragment:sA,colorspace_fragment:rA,colorspace_pars_fragment:oA,envmap_fragment:lA,envmap_common_pars_fragment:cA,envmap_pars_fragment:uA,envmap_pars_vertex:fA,envmap_physical_pars_fragment:MA,envmap_vertex:hA,fog_vertex:dA,fog_pars_vertex:pA,fog_fragment:mA,fog_pars_fragment:gA,gradientmap_pars_fragment:vA,lightmap_pars_fragment:_A,lights_lambert_fragment:xA,lights_lambert_pars_fragment:yA,lights_pars_begin:SA,lights_toon_fragment:bA,lights_toon_pars_fragment:TA,lights_phong_fragment:EA,lights_phong_pars_fragment:AA,lights_physical_fragment:wA,lights_physical_pars_fragment:RA,lights_fragment_begin:CA,lights_fragment_maps:DA,lights_fragment_end:NA,logdepthbuf_fragment:LA,logdepthbuf_pars_fragment:UA,logdepthbuf_pars_vertex:PA,logdepthbuf_vertex:OA,map_fragment:IA,map_pars_fragment:zA,map_particle_fragment:FA,map_particle_pars_fragment:BA,metalnessmap_fragment:HA,metalnessmap_pars_fragment:GA,morphinstance_vertex:VA,morphcolor_vertex:kA,morphnormal_vertex:XA,morphtarget_pars_vertex:WA,morphtarget_vertex:jA,normal_fragment_begin:qA,normal_fragment_maps:YA,normal_pars_fragment:ZA,normal_pars_vertex:KA,normal_vertex:JA,normalmap_pars_fragment:QA,clearcoat_normal_fragment_begin:$A,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:tw,iridescence_pars_fragment:nw,opaque_fragment:iw,packing:aw,premultiplied_alpha_fragment:sw,project_vertex:rw,dithering_fragment:ow,dithering_pars_fragment:lw,roughnessmap_fragment:cw,roughnessmap_pars_fragment:uw,shadowmap_pars_fragment:fw,shadowmap_pars_vertex:hw,shadowmap_vertex:dw,shadowmask_pars_fragment:pw,skinbase_vertex:mw,skinning_pars_vertex:gw,skinning_vertex:vw,skinnormal_vertex:_w,specularmap_fragment:xw,specularmap_pars_fragment:yw,tonemapping_fragment:Sw,tonemapping_pars_fragment:Mw,transmission_fragment:bw,transmission_pars_fragment:Tw,uv_pars_fragment:Ew,uv_pars_vertex:Aw,uv_vertex:ww,worldpos_vertex:Rw,background_vert:Cw,background_frag:Dw,backgroundCube_vert:Nw,backgroundCube_frag:Lw,cube_vert:Uw,cube_frag:Pw,depth_vert:Ow,depth_frag:Iw,distance_vert:zw,distance_frag:Fw,equirect_vert:Bw,equirect_frag:Hw,linedashed_vert:Gw,linedashed_frag:Vw,meshbasic_vert:kw,meshbasic_frag:Xw,meshlambert_vert:Ww,meshlambert_frag:jw,meshmatcap_vert:qw,meshmatcap_frag:Yw,meshnormal_vert:Zw,meshnormal_frag:Kw,meshphong_vert:Jw,meshphong_frag:Qw,meshphysical_vert:$w,meshphysical_frag:e2,meshtoon_vert:t2,meshtoon_frag:n2,points_vert:i2,points_frag:a2,shadow_vert:s2,shadow_frag:r2,sprite_vert:o2,sprite_frag:l2},$e={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},va={basic:{uniforms:li([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:li([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:li([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:li([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:li([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:li([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:li([$e.points,$e.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:li([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:li([$e.common,$e.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:li([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:li([$e.sprite,$e.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:li([$e.common,$e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:li([$e.lights,$e.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};va.physical={uniforms:li([va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const tf={r:0,b:0,g:0},lr=new Li,c2=new Et;function u2(o,e,t,a,s,l,u){const f=new ct(0);let h=l===!0?0:1,d,g,v=null,_=0,x=null;function M(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?t:e).get(w)),w}function E(R){let w=!1;const U=M(R);U===null?y(f,h):U&&U.isColor&&(y(U,1),w=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(R,w){const U=M(w);U&&(U.isCubeTexture||U.mapping===Mf)?(g===void 0&&(g=new zt(new Mr(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:No(va.backgroundCube.uniforms),vertexShader:va.backgroundCube.vertexShader,fragmentShader:va.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),lr.copy(w.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(c2.makeRotationFromEuler(lr)),g.material.toneMapped=Gt.getTransfer(U.colorSpace)!==Jt,(v!==U||_!==U.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,v=U,_=U.version,x=o.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new zt(new dc(2,2),new Gn({name:"BackgroundMaterial",uniforms:No(va.background.uniforms),vertexShader:va.background.vertexShader,fragmentShader:va.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Gt.getTransfer(U.colorSpace)!==Jt,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||_!==U.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,v=U,_=U.version,x=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,w){R.getRGB(tf,jy(o)),a.buffers.color.setClear(tf.r,tf.g,tf.b,w,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,w=1){f.set(R),h=w,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(f,h)},render:E,addToRenderList:S,dispose:L}}function f2(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,u=!1;function f(N,G,K,te,ue){let fe=!1;const B=v(te,K,G);l!==B&&(l=B,d(l.object)),fe=x(N,te,K,ue),fe&&M(N,te,K,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,w(N,G,K,te),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return o.createVertexArray()}function d(N){return o.bindVertexArray(N)}function g(N){return o.deleteVertexArray(N)}function v(N,G,K){const te=K.wireframe===!0;let ue=a[N.id];ue===void 0&&(ue={},a[N.id]=ue);let fe=ue[G.id];fe===void 0&&(fe={},ue[G.id]=fe);let B=fe[te];return B===void 0&&(B=_(h()),fe[te]=B),B}function _(N){const G=[],K=[],te=[];for(let ue=0;ue<t;ue++)G[ue]=0,K[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:te,object:N,attributes:{},index:null}}function x(N,G,K,te){const ue=l.attributes,fe=G.attributes;let B=0;const V=K.getAttributes();for(const oe in V)if(V[oe].location>=0){const Ce=ue[oe];let I=fe[oe];if(I===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(I=N.instanceColor)),Ce===void 0||Ce.attribute!==I||I&&Ce.data!==I.data)return!0;B++}return l.attributesNum!==B||l.index!==te}function M(N,G,K,te){const ue={},fe=G.attributes;let B=0;const V=K.getAttributes();for(const oe in V)if(V[oe].location>=0){let Ce=fe[oe];Ce===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(Ce=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(Ce=N.instanceColor));const I={};I.attribute=Ce,Ce&&Ce.data&&(I.data=Ce.data),ue[oe]=I,B++}l.attributes=ue,l.attributesNum=B,l.index=te}function E(){const N=l.newAttributes;for(let G=0,K=N.length;G<K;G++)N[G]=0}function S(N){y(N,0)}function y(N,G){const K=l.newAttributes,te=l.enabledAttributes,ue=l.attributeDivisors;K[N]=1,te[N]===0&&(o.enableVertexAttribArray(N),te[N]=1),ue[N]!==G&&(o.vertexAttribDivisor(N,G),ue[N]=G)}function L(){const N=l.newAttributes,G=l.enabledAttributes;for(let K=0,te=G.length;K<te;K++)G[K]!==N[K]&&(o.disableVertexAttribArray(K),G[K]=0)}function R(N,G,K,te,ue,fe,B){B===!0?o.vertexAttribIPointer(N,G,K,ue,fe):o.vertexAttribPointer(N,G,K,te,ue,fe)}function w(N,G,K,te){E();const ue=te.attributes,fe=K.getAttributes(),B=G.defaultAttributeValues;for(const V in fe){const oe=fe[V];if(oe.location>=0){let Re=ue[V];if(Re===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(Re=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(Re=N.instanceColor)),Re!==void 0){const Ce=Re.normalized,I=Re.itemSize,se=e.get(Re);if(se===void 0)continue;const Me=se.buffer,Ie=se.type,Ye=se.bytesPerElement,re=Ie===o.INT||Ie===o.UNSIGNED_INT||Re.gpuType===Bm;if(Re.isInterleavedBufferAttribute){const ve=Re.data,ke=ve.stride,Xe=Re.offset;if(ve.isInstancedInterleavedBuffer){for(let We=0;We<oe.locationSize;We++)y(oe.location+We,ve.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let We=0;We<oe.locationSize;We++)S(oe.location+We);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let We=0;We<oe.locationSize;We++)R(oe.location+We,I/oe.locationSize,Ie,Ce,ke*Ye,(Xe+I/oe.locationSize*We)*Ye,re)}else{if(Re.isInstancedBufferAttribute){for(let ve=0;ve<oe.locationSize;ve++)y(oe.location+ve,Re.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let ve=0;ve<oe.locationSize;ve++)S(oe.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let ve=0;ve<oe.locationSize;ve++)R(oe.location+ve,I/oe.locationSize,Ie,Ce,I*Ye,I/oe.locationSize*ve*Ye,re)}}else if(B!==void 0){const Ce=B[V];if(Ce!==void 0)switch(Ce.length){case 2:o.vertexAttrib2fv(oe.location,Ce);break;case 3:o.vertexAttrib3fv(oe.location,Ce);break;case 4:o.vertexAttrib4fv(oe.location,Ce);break;default:o.vertexAttrib1fv(oe.location,Ce)}}}}L()}function U(){W();for(const N in a){const G=a[N];for(const K in G){const te=G[K];for(const ue in te)g(te[ue].object),delete te[ue];delete G[K]}delete a[N]}}function F(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const K in G){const te=G[K];for(const ue in te)g(te[ue].object),delete te[ue];delete G[K]}delete a[N.id]}function O(N){for(const G in a){const K=a[G];if(K[N.id]===void 0)continue;const te=K[N.id];for(const ue in te)g(te[ue].object),delete te[ue];delete K[N.id]}}function W(){A(),u=!0,l!==s&&(l=s,d(l.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:W,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function h2(o,e,t){let a;function s(d){a=d}function l(d,g){o.drawArrays(a,d,g),t.update(g,a,1)}function u(d,g,v){v!==0&&(o.drawArraysInstanced(a,d,g,v),t.update(g,a,v))}function f(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,v);let x=0;for(let M=0;M<v;M++)x+=g[M];t.update(x,a,1)}function h(d,g,v,_){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)u(d[M],g[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E]*_[E];t.update(M,a,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function d2(o,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(O){return!(O!==qi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const W=O===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Di&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ji&&!W)}function h(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=h(d);g!==d&&(ft("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:w,maxSamples:U,samples:F}}function p2(o){const e=this;let t=null,a=0,s=!1,l=!1;const u=new hr,f=new Rt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||s;return s=_,a=v.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,x){const M=v.clippingPlanes,E=v.clipIntersection,S=v.clipShadows,y=o.get(v);if(!s||M===null||M.length===0||l&&!S)l?g(null):d();else{const L=l?0:a,R=L*4;let w=y.clippingState||null;h.value=w,w=g(M,_,R,x);for(let U=0;U!==R;++U)w[U]=t[U];y.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,_,x,M){const E=v!==null?v.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const y=x+E*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let R=0,w=x;R!==E;++R,w+=4)u.copy(v[R]).applyMatrix4(L,f),u.normal.toArray(S,w),S[w+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function m2(o){let e=new WeakMap;function t(u,f){return f===Ip?u.mapping=vr:f===zp&&(u.mapping=Ro),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ip||f===zp)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new Zy(h.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const f=u.target;f.removeEventListener("dispose",s);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const zs=4,$x=[.125,.215,.35,.446,.526,.582],pr=20,g2=256,Gl=new mc,ey=new ct;let vp=null,_p=0,xp=0,yp=!1;const v2=new H;class ty{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,s=100,l={}){const{size:u=256,position:f=v2}=l;vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,a,s,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ay(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vp,_p,xp),this._renderer.xr.enabled=yp,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ni,format:qi,colorSpace:ui,depthBuffer:!1},s=ny(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ny(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_2(l)),this._blurMaterial=y2(l,e,t),this._ggxMaterial=x2(l,e,t)}return s}_compileMaterial(e){const t=new zt(new yn,e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,a,s,l){const h=new ii(90,1,t,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(ey),v.toneMapping=Sa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new Mr,new ci({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let y=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,y=!0):(S.color.copy(ey),y=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(h.up.set(0,d[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[R],l.y,l.z)):w===1?(h.up.set(0,0,d[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[R],l.z)):(h.up.set(0,d[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[R]));const U=this._cubeSize;Mo(s,w*U,R>2?U:0,U,U),v.setRenderTarget(s),y&&v.render(E,h),v.render(e,h)}v.toneMapping=x,v.autoClear=_,e.background=L}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===vr||e.mapping===Ro;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ay()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iy());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Mo(t,0,0,3*h,2*h),a.setRenderTarget(t),a.render(u,Gl)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const h=u.uniforms,d=a/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,x=v*_,{_lodMax:M}=this,E=this._sizeLods[a],S=3*E*(a>M-zs?a-M+zs:0),y=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,Mo(l,S,y,3*E,2*E),s.setRenderTarget(l),s.render(f,Gl),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-a,Mo(e,S,y,3*E,2*E),s.setRenderTarget(e),s.render(f,Gl)}_blur(e,t,a,s,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,a,s,"latitudinal",l),this._halfBlur(u,e,a,a,s,"longitudinal",l)}_halfBlur(e,t,a,s,l,u,f){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[s];v.material=d;const _=d.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*pr-1),E=l/M,S=isFinite(l)?1+Math.floor(g*E):pr;S>pr&&ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${pr}`);const y=[];let L=0;for(let O=0;O<pr;++O){const W=O/E,A=Math.exp(-W*W/2);y.push(A),O===0?L+=A:O<S&&(L+=2*A)}for(let O=0;O<y.length;O++)y[O]=y[O]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:R}=this;_.dTheta.value=M,_.mipInt.value=R-a;const w=this._sizeLods[s],U=3*w*(s>R-zs?s-R+zs:0),F=4*(this._cubeSize-w);Mo(t,U,F,3*w,2*w),h.setRenderTarget(t),h.render(v,Gl)}}function _2(o){const e=[],t=[],a=[];let s=o;const l=o-zs+1+$x.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);e.push(f);let h=1/f;u>o-zs?h=$x[u-o+zs-1]:u===0&&(h=0),t.push(h);const d=1/(f-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,M=6,E=3,S=2,y=1,L=new Float32Array(E*M*x),R=new Float32Array(S*M*x),w=new Float32Array(y*M*x);for(let F=0;F<x;F++){const O=F%3*2/3-1,W=F>2?0:-1,A=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];L.set(A,E*M*F),R.set(_,S*M*F);const N=[F,F,F,F,F,F];w.set(N,y*M*F)}const U=new yn;U.setAttribute("position",new Vn(L,E)),U.setAttribute("uv",new Vn(R,S)),U.setAttribute("faceIndex",new Vn(w,y)),a.push(new zt(U,null)),s>zs&&s--}return{lodMeshes:a,sizeLods:e,sigmas:t}}function ny(o,e,t){const a=new yi(o,e,t);return a.texture.mapping=Mf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Mo(o,e,t,a,s){o.viewport.set(e,t,a,s),o.scissor.set(e,t,a,s)}function x2(o,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wf(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function y2(o,e,t){const a=new Float32Array(pr),s=new H(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wf(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function iy(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function ay(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function S2(o){let e=new WeakMap,t=null;function a(f){if(f&&f.isTexture){const h=f.mapping,d=h===Ip||h===zp,g=h===vr||h===Ro;if(d||g){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new ty(o)),v=d?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const x=f.image;return d&&x&&x.height>0||g&&x&&s(x)?(t===null&&(t=new ty(o)),v=d?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function s(f){let h=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&h++;return h===d}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:u}}function M2(o){const e={};function t(a){if(e[a]!==void 0)return e[a];const s=o.getExtension(a);return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&sc("WebGLRenderer: "+a+" extension not supported."),s}}}function b2(o,e,t,a){const s={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const x=l.get(_);x&&(e.remove(x),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const x in _)e.update(_[x],o.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,M=v.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let R=0,w=L.length;R<w;R+=3){const U=L[R+0],F=L[R+1],O=L[R+2];_.push(U,F,F,O,O,U)}}else if(M!==void 0){const L=M.array;E=M.version;for(let R=0,w=L.length/3-1;R<w;R+=3){const U=R+0,F=R+1,O=R+2;_.push(U,F,F,O,O,U)}}else return;const S=new(Hy(_)?Wy:Xy)(_,1);S.version=E;const y=l.get(v);y&&e.remove(y),l.set(v,S)}function g(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function T2(o,e,t){let a;function s(_){a=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,x){o.drawElements(a,x,l,_*u),t.update(x,a,1)}function d(_,x,M){M!==0&&(o.drawElementsInstanced(a,x,l,_*u,M),t.update(x,a,M))}function g(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,a,1)}function v(_,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/u,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,_,0,E,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*E[L];t.update(y,a,1)}}this.setMode=s,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function E2(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=f*(l/3);break;case o.LINES:t.lines+=f*(l/2);break;case o.LINE_STRIP:t.lines+=f*(l-1);break;case o.LINE_LOOP:t.lines+=f*l;break;case o.POINTS:t.points+=f*l;break;default:_t("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function A2(o,e,t){const a=new WeakMap,s=new pn;function l(u,f,h){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let N=function(){W.dispose(),a.delete(f),f.removeEventListener("dispose",N)};var x=N;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let w=0;M===!0&&(w=1),E===!0&&(w=2),S===!0&&(w=3);let U=f.attributes.position.count*w,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*F*4*v),W=new Gy(O,U,F,v);W.type=ji,W.needsUpdate=!0;const A=w*4;for(let G=0;G<v;G++){const K=y[G],te=L[G],ue=R[G],fe=U*F*4*G;for(let B=0;B<K.count;B++){const V=B*A;M===!0&&(s.fromBufferAttribute(K,B),O[fe+V+0]=s.x,O[fe+V+1]=s.y,O[fe+V+2]=s.z,O[fe+V+3]=0),E===!0&&(s.fromBufferAttribute(te,B),O[fe+V+4]=s.x,O[fe+V+5]=s.y,O[fe+V+6]=s.z,O[fe+V+7]=0),S===!0&&(s.fromBufferAttribute(ue,B),O[fe+V+8]=s.x,O[fe+V+9]=s.y,O[fe+V+10]=s.z,O[fe+V+11]=ue.itemSize===4?s.w:1)}}_={count:v,texture:W,size:new Fe(U,F)},a.set(f,_),f.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",E),h.getUniforms().setValue(o,"morphTargetInfluences",d)}h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:l}}function w2(o,e,t,a){let s=new WeakMap;function l(h){const d=a.render.frame,g=h.geometry,v=e.get(h,g);if(s.get(v)!==d&&(e.update(v),s.set(v,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),s.get(h)!==d&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return v}function u(){s=new WeakMap}function f(h){const d=h.target;d.removeEventListener("dispose",f),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}const R2={[Um]:"LINEAR_TONE_MAPPING",[Pm]:"REINHARD_TONE_MAPPING",[Om]:"CINEON_TONE_MAPPING",[fc]:"ACES_FILMIC_TONE_MAPPING",[zm]:"AGX_TONE_MAPPING",[Fm]:"NEUTRAL_TONE_MAPPING",[Im]:"CUSTOM_TONE_MAPPING"};function C2(o,e,t,a,s){const l=new yi(e,t,{type:o,depthBuffer:a,stencilBuffer:s}),u=new yi(e,t,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),f=new yn;f.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const h=new hS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new zt(f,h),g=new mc(-1,1,1,-1,0,1);let v=null,_=null,x=!1,M,E=null,S=[],y=!1;this.setSize=function(L,R){l.setSize(L,R),u.setSize(L,R);for(let w=0;w<S.length;w++){const U=S[w];U.setSize&&U.setSize(L,R)}},this.setEffects=function(L){S=L,y=S.length>0&&S[0].isRenderPass===!0;const R=l.width,w=l.height;for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(R,w)}},this.begin=function(L,R){if(x||L.toneMapping===Sa&&S.length===0)return!1;if(E=R,R!==null){const w=R.width,U=R.height;(l.width!==w||l.height!==U)&&this.setSize(w,U)}return y===!1&&L.setRenderTarget(l),M=L.toneMapping,L.toneMapping=Sa,!0},this.hasRenderPass=function(){return y},this.end=function(L,R){L.toneMapping=M,x=!0;let w=l,U=u;for(let F=0;F<S.length;F++){const O=S[F];if(O.enabled!==!1&&(O.render(L,U,w,R),O.needsSwap!==!1)){const W=w;w=U,U=W}}if(v!==L.outputColorSpace||_!==L.toneMapping){v=L.outputColorSpace,_=L.toneMapping,h.defines={},Gt.getTransfer(v)===Jt&&(h.defines.SRGB_TRANSFER="");const F=R2[_];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,L.setRenderTarget(E),L.render(d,g),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const xS=new In,Am=new oc(1,1),yS=new Gy,SS=new jT,MS=new Yy,sy=[],ry=[],oy=new Float32Array(16),ly=new Float32Array(9),cy=new Float32Array(4);function Go(o,e,t){const a=o[0];if(a<=0||a>0)return o;const s=e*t;let l=sy[s];if(l===void 0&&(l=new Float32Array(s),sy[s]=l),e!==0){a.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,o[u].toArray(l,f)}return l}function zn(o,e){if(o.length!==e.length)return!1;for(let t=0,a=o.length;t<a;t++)if(o[t]!==e[t])return!1;return!0}function Fn(o,e){for(let t=0,a=e.length;t<a;t++)o[t]=e[t]}function Rf(o,e){let t=ry[e];t===void 0&&(t=new Int32Array(e),ry[e]=t);for(let a=0;a!==e;++a)t[a]=o.allocateTextureUnit();return t}function D2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function N2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;o.uniform2fv(this.addr,e),Fn(t,e)}}function L2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zn(t,e))return;o.uniform3fv(this.addr,e),Fn(t,e)}}function U2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;o.uniform4fv(this.addr,e),Fn(t,e)}}function P2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(zn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(zn(t,a))return;cy.set(a),o.uniformMatrix2fv(this.addr,!1,cy),Fn(t,a)}}function O2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(zn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(zn(t,a))return;ly.set(a),o.uniformMatrix3fv(this.addr,!1,ly),Fn(t,a)}}function I2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(zn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(zn(t,a))return;oy.set(a),o.uniformMatrix4fv(this.addr,!1,oy),Fn(t,a)}}function z2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function F2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;o.uniform2iv(this.addr,e),Fn(t,e)}}function B2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;o.uniform3iv(this.addr,e),Fn(t,e)}}function H2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;o.uniform4iv(this.addr,e),Fn(t,e)}}function G2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function V2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;o.uniform2uiv(this.addr,e),Fn(t,e)}}function k2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;o.uniform3uiv(this.addr,e),Fn(t,e)}}function X2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;o.uniform4uiv(this.addr,e),Fn(t,e)}}function W2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Am.compareFunction=t.isReversedDepthBuffer()?Ym:qm,l=Am):l=xS,t.setTexture2D(e||l,s)}function j2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||SS,s)}function q2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||MS,s)}function Y2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||yS,s)}function Z2(o){switch(o){case 5126:return D2;case 35664:return N2;case 35665:return L2;case 35666:return U2;case 35674:return P2;case 35675:return O2;case 35676:return I2;case 5124:case 35670:return z2;case 35667:case 35671:return F2;case 35668:case 35672:return B2;case 35669:case 35673:return H2;case 5125:return G2;case 36294:return V2;case 36295:return k2;case 36296:return X2;case 35678:case 36198:case 36298:case 36306:case 35682:return W2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return Y2}}function K2(o,e){o.uniform1fv(this.addr,e)}function J2(o,e){const t=Go(e,this.size,2);o.uniform2fv(this.addr,t)}function Q2(o,e){const t=Go(e,this.size,3);o.uniform3fv(this.addr,t)}function $2(o,e){const t=Go(e,this.size,4);o.uniform4fv(this.addr,t)}function eR(o,e){const t=Go(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function tR(o,e){const t=Go(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function nR(o,e){const t=Go(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function iR(o,e){o.uniform1iv(this.addr,e)}function aR(o,e){o.uniform2iv(this.addr,e)}function sR(o,e){o.uniform3iv(this.addr,e)}function rR(o,e){o.uniform4iv(this.addr,e)}function oR(o,e){o.uniform1uiv(this.addr,e)}function lR(o,e){o.uniform2uiv(this.addr,e)}function cR(o,e){o.uniform3uiv(this.addr,e)}function uR(o,e){o.uniform4uiv(this.addr,e)}function fR(o,e,t){const a=this.cache,s=e.length,l=Rf(t,s);zn(a,l)||(o.uniform1iv(this.addr,l),Fn(a,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=Am:u=xS;for(let f=0;f!==s;++f)t.setTexture2D(e[f]||u,l[f])}function hR(o,e,t){const a=this.cache,s=e.length,l=Rf(t,s);zn(a,l)||(o.uniform1iv(this.addr,l),Fn(a,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||SS,l[u])}function dR(o,e,t){const a=this.cache,s=e.length,l=Rf(t,s);zn(a,l)||(o.uniform1iv(this.addr,l),Fn(a,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||MS,l[u])}function pR(o,e,t){const a=this.cache,s=e.length,l=Rf(t,s);zn(a,l)||(o.uniform1iv(this.addr,l),Fn(a,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||yS,l[u])}function mR(o){switch(o){case 5126:return K2;case 35664:return J2;case 35665:return Q2;case 35666:return $2;case 35674:return eR;case 35675:return tR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return sR;case 35669:case 35673:return rR;case 5125:return oR;case 36294:return lR;case 36295:return cR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return pR}}class gR{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=Z2(t.type)}}class vR{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mR(t.type)}}class _R{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(e,t[f.id],a)}}}const Sp=/(\w+)(\])?(\[|\.)?/g;function uy(o,e){o.seq.push(e),o.map[e.id]=e}function xR(o,e,t){const a=o.name,s=a.length;for(Sp.lastIndex=0;;){const l=Sp.exec(a),u=Sp.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&u+2===s){uy(t,d===void 0?new gR(f,o,e):new vR(f,o,e));break}else{let v=t.map[f];v===void 0&&(v=new _R(f),uy(t,v)),t=v}}}class df{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);xR(f,h,this)}const s=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=a[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&a.push(u)}return a}}function fy(o,e,t){const a=o.createShader(e);return o.shaderSource(a,t),o.compileShader(a),a}const yR=37297;let SR=0;function MR(o,e){const t=o.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return a.join(`
`)}const hy=new Rt;function bR(o){Gt._getMatrix(hy,Gt.workingColorSpace,o);const e=`mat3( ${hy.elements.map(t=>t.toFixed(4))} )`;switch(Gt.getTransfer(o)){case gf:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function dy(o,e,t){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+MR(o.getShaderSource(e),f)}else return l}function TR(o,e){const t=bR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ER={[Um]:"Linear",[Pm]:"Reinhard",[Om]:"Cineon",[fc]:"ACESFilmic",[zm]:"AgX",[Fm]:"Neutral",[Im]:"Custom"};function AR(o,e){const t=ER[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nf=new H;function wR(){Gt.getLuminanceCoefficients(nf);const o=nf.x.toFixed(4),e=nf.y.toFixed(4),t=nf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yl).join(`
`)}function CR(o){const e=[];for(const t in o){const a=o[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function DR(o,e){const t={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(e,s),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:f}}return t}function Yl(o){return o!==""}function py(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function my(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wm(o){return o.replace(NR,UR)}const LR=new Map;function UR(o,e){let t=Ct[e];if(t===void 0){const a=LR.get(e);if(a!==void 0)t=Ct[a],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return wm(t)}const PR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gy(o){return o.replace(PR,OR)}function OR(o,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function vy(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const IR={[of]:"SHADOWMAP_TYPE_PCF",[Wl]:"SHADOWMAP_TYPE_VSM"};function zR(o){return IR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FR={[vr]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[Mf]:"ENVMAP_TYPE_CUBE_UV"};function BR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":FR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const HR={[Ro]:"ENVMAP_MODE_REFRACTION"};function GR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":HR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VR={[Dy]:"ENVMAP_BLENDING_MULTIPLY",[cT]:"ENVMAP_BLENDING_MIX",[uT]:"ENVMAP_BLENDING_ADD"};function kR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":VR[o.combine]||"ENVMAP_BLENDING_NONE"}function XR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function WR(o,e,t,a){const s=o.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=zR(t),d=BR(t),g=GR(t),v=kR(t),_=XR(t),x=RR(t),M=CR(l),E=s.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yl).join(`
`),y.length>0&&(y+=`
`)):(S=[vy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yl).join(`
`),y=[vy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sa?"#define TONE_MAPPING":"",t.toneMapping!==Sa?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Sa?AR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,TR("linearToOutputTexel",t.outputColorSpace),wR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yl).join(`
`)),u=wm(u),u=py(u,t),u=my(u,t),f=wm(f),f=py(f,t),f=my(f,t),u=gy(u),f=gy(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=L+S+u,w=L+y+f,U=fy(s,s.VERTEX_SHADER,R),F=fy(s,s.FRAGMENT_SHADER,w);s.attachShader(E,U),s.attachShader(E,F),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function O(G){if(o.debug.checkShaderErrors){const K=s.getProgramInfoLog(E)||"",te=s.getShaderInfoLog(U)||"",ue=s.getShaderInfoLog(F)||"",fe=K.trim(),B=te.trim(),V=ue.trim();let oe=!0,Re=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(oe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,U,F);else{const Ce=dy(s,U,"vertex"),I=dy(s,F,"fragment");_t("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+fe+`
`+Ce+`
`+I)}else fe!==""?ft("WebGLProgram: Program Info Log:",fe):(B===""||V==="")&&(Re=!1);Re&&(G.diagnostics={runnable:oe,programLog:fe,vertexShader:{log:B,prefix:S},fragmentShader:{log:V,prefix:y}})}s.deleteShader(U),s.deleteShader(F),W=new df(s,E),A=DR(s,E)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(E,yR)),N},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SR++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=F,this}let jR=0;class qR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new YR(e),t.set(e,a)),a}}class YR{constructor(e){this.id=jR++,this.code=e,this.usedTimes=0}}function ZR(o,e,t,a,s,l,u){const f=new Vy,h=new qR,d=new Set,g=[],v=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return d.add(A),A===0?"uv":`uv${A}`}function S(A,N,G,K,te){const ue=K.fog,fe=te.geometry,B=A.isMeshStandardMaterial?K.environment:null,V=(A.isMeshStandardMaterial?t:e).get(A.envMap||B),oe=V&&V.mapping===Mf?V.image.height:null,Re=M[A.type];A.precision!==null&&(x=s.getMaxPrecision(A.precision),x!==A.precision&&ft("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const Ce=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,I=Ce!==void 0?Ce.length:0;let se=0;fe.morphAttributes.position!==void 0&&(se=1),fe.morphAttributes.normal!==void 0&&(se=2),fe.morphAttributes.color!==void 0&&(se=3);let Me,Ie,Ye,re;if(Re){const Lt=va[Re];Me=Lt.vertexShader,Ie=Lt.fragmentShader}else Me=A.vertexShader,Ie=A.fragmentShader,h.update(A),Ye=h.getVertexShaderID(A),re=h.getFragmentShaderID(A);const ve=o.getRenderTarget(),ke=o.state.buffers.depth.getReversed(),Xe=te.isInstancedMesh===!0,We=te.isBatchedMesh===!0,vt=!!A.map,St=!!A.matcap,pe=!!V,ie=!!A.aoMap,xe=!!A.lightMap,Ee=!!A.bumpMap,Pe=!!A.normalMap,z=!!A.displacementMap,tt=!!A.emissiveMap,qe=!!A.metalnessMap,at=!!A.roughnessMap,Oe=A.anisotropy>0,P=A.clearcoat>0,T=A.dispersion>0,j=A.iridescence>0,ye=A.sheen>0,me=A.transmission>0,Z=Oe&&!!A.anisotropyMap,q=P&&!!A.clearcoatMap,ae=P&&!!A.clearcoatNormalMap,be=P&&!!A.clearcoatRoughnessMap,Ke=j&&!!A.iridescenceMap,ge=j&&!!A.iridescenceThicknessMap,J=ye&&!!A.sheenColorMap,Le=ye&&!!A.sheenRoughnessMap,He=!!A.specularMap,Ge=!!A.specularColorMap,je=!!A.specularIntensityMap,X=me&&!!A.transmissionMap,ze=me&&!!A.thicknessMap,Ne=!!A.gradientMap,Ve=!!A.alphaMap,Ue=A.alphaTest>0,Ae=!!A.alphaHash,Be=!!A.extensions;let ht=Sa;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ht=o.toneMapping);const At={shaderID:Re,shaderType:A.type,shaderName:A.name,vertexShader:Me,fragmentShader:Ie,defines:A.defines,customVertexShaderID:Ye,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:We,batchingColor:We&&te._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&te.instanceColor!==null,instancingMorph:Xe&&te.morphTexture!==null,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ui,alphaToCoverage:!!A.alphaToCoverage,map:vt,matcap:St,envMap:pe,envMapMode:pe&&V.mapping,envMapCubeUVHeight:oe,aoMap:ie,lightMap:xe,bumpMap:Ee,normalMap:Pe,displacementMap:z,emissiveMap:tt,normalMapObjectSpace:Pe&&A.normalMapType===mT,normalMapTangentSpace:Pe&&A.normalMapType===jm,metalnessMap:qe,roughnessMap:at,anisotropy:Oe,anisotropyMap:Z,clearcoat:P,clearcoatMap:q,clearcoatNormalMap:ae,clearcoatRoughnessMap:be,dispersion:T,iridescence:j,iridescenceMap:Ke,iridescenceThicknessMap:ge,sheen:ye,sheenColorMap:J,sheenRoughnessMap:Le,specularMap:He,specularColorMap:Ge,specularIntensityMap:je,transmission:me,transmissionMap:X,thicknessMap:ze,gradientMap:Ne,opaque:A.transparent===!1&&A.blending===$a&&A.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Ue,alphaHash:Ae,combine:A.combine,mapUv:vt&&E(A.map.channel),aoMapUv:ie&&E(A.aoMap.channel),lightMapUv:xe&&E(A.lightMap.channel),bumpMapUv:Ee&&E(A.bumpMap.channel),normalMapUv:Pe&&E(A.normalMap.channel),displacementMapUv:z&&E(A.displacementMap.channel),emissiveMapUv:tt&&E(A.emissiveMap.channel),metalnessMapUv:qe&&E(A.metalnessMap.channel),roughnessMapUv:at&&E(A.roughnessMap.channel),anisotropyMapUv:Z&&E(A.anisotropyMap.channel),clearcoatMapUv:q&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:ae&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:J&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Le&&E(A.sheenRoughnessMap.channel),specularMapUv:He&&E(A.specularMap.channel),specularColorMapUv:Ge&&E(A.specularColorMap.channel),specularIntensityMapUv:je&&E(A.specularIntensityMap.channel),transmissionMapUv:X&&E(A.transmissionMap.channel),thicknessMapUv:ze&&E(A.thicknessMap.channel),alphaMapUv:Ve&&E(A.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Pe||Oe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!fe.attributes.uv&&(vt||Ve),fog:!!ue,useFog:A.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ke,skinning:te.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:se,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ht,decodeVideoTexture:vt&&A.map.isVideoTexture===!0&&Gt.getTransfer(A.map.colorSpace)===Jt,decodeVideoTextureEmissive:tt&&A.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(A.emissiveMap.colorSpace)===Jt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===aa,flipSided:A.side===$n,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Be&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&A.extensions.multiDraw===!0||We)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return At.vertexUv1s=d.has(1),At.vertexUv2s=d.has(2),At.vertexUv3s=d.has(3),d.clear(),At}function y(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)N.push(G),N.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(L(N,A),R(N,A),N.push(o.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function L(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function R(A,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),A.push(f.mask)}function w(A){const N=M[A.type];let G;if(N){const K=va[N];G=Lo.clone(K.uniforms)}else G=A.uniforms;return G}function U(A,N){let G=v.get(N);return G!==void 0?++G.usedTimes:(G=new WR(o,N,A,l),g.push(G),v.set(N,G)),G}function F(A){if(--A.usedTimes===0){const N=g.indexOf(A);g[N]=g[g.length-1],g.pop(),v.delete(A.cacheKey),A.destroy()}}function O(A){h.remove(A)}function W(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:U,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:W}}function KR(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function s(u,f,h){o.get(u)[f]=h}function l(){o=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function JR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function _y(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function xy(){const o=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function u(v,_,x,M,E,S){let y=o[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:M,renderOrder:v.renderOrder,z:E,group:S},o[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=v.renderOrder,y.z=E,y.group=S),e++,y}function f(v,_,x,M,E,S){const y=u(v,_,x,M,E,S);x.transmission>0?a.push(y):x.transparent===!0?s.push(y):t.push(y)}function h(v,_,x,M,E,S){const y=u(v,_,x,M,E,S);x.transmission>0?a.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function d(v,_){t.length>1&&t.sort(v||JR),a.length>1&&a.sort(_||_y),s.length>1&&s.sort(_||_y)}function g(){for(let v=e,_=o.length;v<_;v++){const x=o[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:f,unshift:h,finish:g,sort:d}}function QR(){let o=new WeakMap;function e(a,s){const l=o.get(a);let u;return l===void 0?(u=new xy,o.set(a,[u])):s>=l.length?(u=new xy,l.push(u)):u=l[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function $R(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ct};break;case"SpotLight":t={position:new H,direction:new H,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new H,halfWidth:new H,halfHeight:new H};break}return o[e.id]=t,t}}}function eC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let tC=0;function nC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iC(o){const e=new $R,t=eC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new H);const s=new H,l=new Et,u=new Et;function f(d){let g=0,v=0,_=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,L=0,R=0,w=0,U=0,F=0,O=0;d.sort(nC);for(let A=0,N=d.length;A<N;A++){const G=d[A],K=G.color,te=G.intensity,ue=G.distance;let fe=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Co?fe=G.shadow.map.texture:fe=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=K.r*te,v+=K.g*te,_+=K.b*te;else if(G.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(G.sh.coefficients[B],te);O++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,oe=t.get(G);oe.shadowIntensity=V.intensity,oe.shadowBias=V.bias,oe.shadowNormalBias=V.normalBias,oe.shadowRadius=V.radius,oe.shadowMapSize=V.mapSize,a.directionalShadow[x]=oe,a.directionalShadowMap[x]=fe,a.directionalShadowMatrix[x]=G.shadow.matrix,L++}a.directional[x]=B,x++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(K).multiplyScalar(te),B.distance=ue,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,a.spot[E]=B;const V=G.shadow;if(G.map&&(a.spotLightMap[U]=G.map,U++,V.updateMatrices(G),G.castShadow&&F++),a.spotLightMatrix[E]=V.matrix,G.castShadow){const oe=t.get(G);oe.shadowIntensity=V.intensity,oe.shadowBias=V.bias,oe.shadowNormalBias=V.normalBias,oe.shadowRadius=V.radius,oe.shadowMapSize=V.mapSize,a.spotShadow[E]=oe,a.spotShadowMap[E]=fe,w++}E++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(K).multiplyScalar(te),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=B,S++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const V=G.shadow,oe=t.get(G);oe.shadowIntensity=V.intensity,oe.shadowBias=V.bias,oe.shadowNormalBias=V.normalBias,oe.shadowRadius=V.radius,oe.shadowMapSize=V.mapSize,oe.shadowCameraNear=V.camera.near,oe.shadowCameraFar=V.camera.far,a.pointShadow[M]=oe,a.pointShadowMap[M]=fe,a.pointShadowMatrix[M]=G.shadow.matrix,R++}a.point[M]=B,M++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(te),B.groundColor.copy(G.groundColor).multiplyScalar(te),a.hemi[y]=B,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=$e.LTC_FLOAT_1,a.rectAreaLTC2=$e.LTC_FLOAT_2):(a.rectAreaLTC1=$e.LTC_HALF_1,a.rectAreaLTC2=$e.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const W=a.hash;(W.directionalLength!==x||W.pointLength!==M||W.spotLength!==E||W.rectAreaLength!==S||W.hemiLength!==y||W.numDirectionalShadows!==L||W.numPointShadows!==R||W.numSpotShadows!==w||W.numSpotMaps!==U||W.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=E,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=R,a.pointShadowMap.length=R,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=R,a.spotLightMatrix.length=w+U-F,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=O,W.directionalLength=x,W.pointLength=M,W.spotLength=E,W.rectAreaLength=S,W.hemiLength=y,W.numDirectionalShadows=L,W.numPointShadows=R,W.numSpotShadows=w,W.numSpotMaps=U,W.numLightProbes=O,a.version=tC++)}function h(d,g){let v=0,_=0,x=0,M=0,E=0;const S=g.matrixWorldInverse;for(let y=0,L=d.length;y<L;y++){const R=d[y];if(R.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),v++}else if(R.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),x++}else if(R.isRectAreaLight){const w=a.rectArea[M];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),_++}else if(R.isHemisphereLight){const w=a.hemi[E];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(S),E++}}}return{setup:f,setupView:h,state:a}}function yy(o){const e=new iC(o),t=[],a=[];function s(g){d.camera=g,t.length=0,a.length=0}function l(g){t.push(g)}function u(g){a.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function aC(o){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let f;return u===void 0?(f=new yy(o),e.set(s,[f])):l>=u.length?(f=new yy(o),u.push(f)):f=u[l],f}function a(){e=new WeakMap}return{get:t,dispose:a}}const sC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rC=`uniform sampler2D shadow_pass;
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
}`,oC=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],lC=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Sy=new Et,Vl=new H,Mp=new H;function cC(o,e,t){let a=new $m;const s=new Fe,l=new Fe,u=new pn,f=new Q1,h=new $1,d={},g=t.maxTextureSize,v={[ts]:$n,[$n]:ts,[aa]:aa},_=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:sC,fragmentShader:rC}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new yn;M.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new zt(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let y=this.type;this.render=function(F,O,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===Cy&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=of);const A=o.getRenderTarget(),N=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),K=o.state;K.setBlending(ya),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const te=y!==this.type;te&&O.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(fe=>fe.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,fe=F.length;ue<fe;ue++){const B=F[ue],V=B.shadow;if(V===void 0){ft("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const oe=V.getFrameExtents();if(s.multiply(oe),l.copy(V.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(l.x=Math.floor(g/oe.x),s.x=l.x*oe.x,V.mapSize.x=l.x),s.y>g&&(l.y=Math.floor(g/oe.y),s.y=l.y*oe.y,V.mapSize.y=l.y)),V.map===null||te===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Wl){if(B.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new yi(s.x,s.y,{format:Co,type:Ni,minFilter:On,magFilter:On,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new oc(s.x,s.y,ji),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=ns,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn}else{B.isPointLight?(V.map=new Zy(s.x),V.map.depthTexture=new x1(s.x,Ma)):(V.map=new yi(s.x,s.y),V.map.depthTexture=new oc(s.x,s.y,Ma)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=ns;const Ce=o.state.buffers.depth.getReversed();this.type===of?(V.map.depthTexture.compareFunction=Ce?Ym:qm,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn)}V.camera.updateProjectionMatrix()}const Re=V.map.isWebGLCubeRenderTarget?6:1;for(let Ce=0;Ce<Re;Ce++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,Ce),o.clear();else{Ce===0&&(o.setRenderTarget(V.map),o.clear());const I=V.getViewport(Ce);u.set(l.x*I.x,l.y*I.y,l.x*I.z,l.y*I.w),K.viewport(u)}if(B.isPointLight){const I=V.camera,se=V.matrix,Me=B.distance||I.far;Me!==I.far&&(I.far=Me,I.updateProjectionMatrix()),Vl.setFromMatrixPosition(B.matrixWorld),I.position.copy(Vl),Mp.copy(I.position),Mp.add(oC[Ce]),I.up.copy(lC[Ce]),I.lookAt(Mp),I.updateMatrixWorld(),se.makeTranslation(-Vl.x,-Vl.y,-Vl.z),Sy.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Sy,I.coordinateSystem,I.reversedDepth)}else V.updateMatrices(B);a=V.getFrustum(),w(O,W,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===Wl&&L(V,W),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(A,N,G)};function L(F,O){const W=e.update(E);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new yi(s.x,s.y,{format:Co,type:Ni})),_.uniforms.shadow_pass.value=F.map.depthTexture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(O,null,W,_,E,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(O,null,W,x,E,null)}function R(F,O,W,A){let N=null;const G=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)N=G;else if(N=W.isPointLight===!0?h:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=N.uuid,te=O.uuid;let ue=d[K];ue===void 0&&(ue={},d[K]=ue);let fe=ue[te];fe===void 0&&(fe=N.clone(),ue[te]=fe,O.addEventListener("dispose",U)),N=fe}if(N.visible=O.visible,N.wireframe=O.wireframe,A===Wl?N.side=O.shadowSide!==null?O.shadowSide:O.side:N.side=O.shadowSide!==null?O.shadowSide:v[O.side],N.alphaMap=O.alphaMap,N.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,N.map=O.map,N.clipShadows=O.clipShadows,N.clippingPlanes=O.clippingPlanes,N.clipIntersection=O.clipIntersection,N.displacementMap=O.displacementMap,N.displacementScale=O.displacementScale,N.displacementBias=O.displacementBias,N.wireframeLinewidth=O.wireframeLinewidth,N.linewidth=O.linewidth,W.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const K=o.properties.get(N);K.light=W}return N}function w(F,O,W,A,N){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&N===Wl)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const te=e.update(F),ue=F.material;if(Array.isArray(ue)){const fe=te.groups;for(let B=0,V=fe.length;B<V;B++){const oe=fe[B],Re=ue[oe.materialIndex];if(Re&&Re.visible){const Ce=R(F,Re,A,N);F.onBeforeShadow(o,F,O,W,te,Ce,oe),o.renderBufferDirect(W,null,te,Ce,F,oe),F.onAfterShadow(o,F,O,W,te,Ce,oe)}}}else if(ue.visible){const fe=R(F,ue,A,N);F.onBeforeShadow(o,F,O,W,te,fe,null),o.renderBufferDirect(W,null,te,fe,F,null),F.onAfterShadow(o,F,O,W,te,fe,null)}}const K=F.children;for(let te=0,ue=K.length;te<ue;te++)w(K[te],O,W,A,N)}function U(F){F.target.removeEventListener("dispose",U);for(const W in d){const A=d[W],N=F.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}const uC={[Cp]:Dp,[Np]:Pp,[Lp]:Op,[wo]:Up,[Dp]:Cp,[Pp]:Np,[Op]:Lp,[Up]:wo};function fC(o,e){function t(){let X=!1;const ze=new pn;let Ne=null;const Ve=new pn(0,0,0,0);return{setMask:function(Ue){Ne!==Ue&&!X&&(o.colorMask(Ue,Ue,Ue,Ue),Ne=Ue)},setLocked:function(Ue){X=Ue},setClear:function(Ue,Ae,Be,ht,At){At===!0&&(Ue*=ht,Ae*=ht,Be*=ht),ze.set(Ue,Ae,Be,ht),Ve.equals(ze)===!1&&(o.clearColor(Ue,Ae,Be,ht),Ve.copy(ze))},reset:function(){X=!1,Ne=null,Ve.set(-1,0,0,0)}}}function a(){let X=!1,ze=!1,Ne=null,Ve=null,Ue=null;return{setReversed:function(Ae){if(ze!==Ae){const Be=e.get("EXT_clip_control");Ae?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ze=Ae;const ht=Ue;Ue=null,this.setClear(ht)}},getReversed:function(){return ze},setTest:function(Ae){Ae?ve(o.DEPTH_TEST):ke(o.DEPTH_TEST)},setMask:function(Ae){Ne!==Ae&&!X&&(o.depthMask(Ae),Ne=Ae)},setFunc:function(Ae){if(ze&&(Ae=uC[Ae]),Ve!==Ae){switch(Ae){case Cp:o.depthFunc(o.NEVER);break;case Dp:o.depthFunc(o.ALWAYS);break;case Np:o.depthFunc(o.LESS);break;case wo:o.depthFunc(o.LEQUAL);break;case Lp:o.depthFunc(o.EQUAL);break;case Up:o.depthFunc(o.GEQUAL);break;case Pp:o.depthFunc(o.GREATER);break;case Op:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ve=Ae}},setLocked:function(Ae){X=Ae},setClear:function(Ae){Ue!==Ae&&(ze&&(Ae=1-Ae),o.clearDepth(Ae),Ue=Ae)},reset:function(){X=!1,Ne=null,Ve=null,Ue=null,ze=!1}}}function s(){let X=!1,ze=null,Ne=null,Ve=null,Ue=null,Ae=null,Be=null,ht=null,At=null;return{setTest:function(Lt){X||(Lt?ve(o.STENCIL_TEST):ke(o.STENCIL_TEST))},setMask:function(Lt){ze!==Lt&&!X&&(o.stencilMask(Lt),ze=Lt)},setFunc:function(Lt,Qt,jt){(Ne!==Lt||Ve!==Qt||Ue!==jt)&&(o.stencilFunc(Lt,Qt,jt),Ne=Lt,Ve=Qt,Ue=jt)},setOp:function(Lt,Qt,jt){(Ae!==Lt||Be!==Qt||ht!==jt)&&(o.stencilOp(Lt,Qt,jt),Ae=Lt,Be=Qt,ht=jt)},setLocked:function(Lt){X=Lt},setClear:function(Lt){At!==Lt&&(o.clearStencil(Lt),At=Lt)},reset:function(){X=!1,ze=null,Ne=null,Ve=null,Ue=null,Ae=null,Be=null,ht=null,At=null}}}const l=new t,u=new a,f=new s,h=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,R=null,w=null,U=null,F=null,O=new ct(0,0,0),W=0,A=!1,N=null,G=null,K=null,te=null,ue=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const oe=o.getParameter(o.VERSION);oe.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(oe)[1]),B=V>=1):oe.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),B=V>=2);let Re=null,Ce={};const I=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),Me=new pn().fromArray(I),Ie=new pn().fromArray(se);function Ye(X,ze,Ne,Ve){const Ue=new Uint8Array(4),Ae=o.createTexture();o.bindTexture(X,Ae),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Be=0;Be<Ne;Be++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(ze,0,o.RGBA,1,1,Ve,0,o.RGBA,o.UNSIGNED_BYTE,Ue):o.texImage2D(ze+Be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ue);return Ae}const re={};re[o.TEXTURE_2D]=Ye(o.TEXTURE_2D,o.TEXTURE_2D,1),re[o.TEXTURE_CUBE_MAP]=Ye(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[o.TEXTURE_2D_ARRAY]=Ye(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),re[o.TEXTURE_3D]=Ye(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(o.DEPTH_TEST),u.setFunc(wo),Ee(!1),Pe(tx),ve(o.CULL_FACE),ie(ya);function ve(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function ke(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function Xe(X,ze){return v[X]!==ze?(o.bindFramebuffer(X,ze),v[X]=ze,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=ze),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=ze),!0):!1}function We(X,ze){let Ne=x,Ve=!1;if(X){Ne=_.get(ze),Ne===void 0&&(Ne=[],_.set(ze,Ne));const Ue=X.textures;if(Ne.length!==Ue.length||Ne[0]!==o.COLOR_ATTACHMENT0){for(let Ae=0,Be=Ue.length;Ae<Be;Ae++)Ne[Ae]=o.COLOR_ATTACHMENT0+Ae;Ne.length=Ue.length,Ve=!0}}else Ne[0]!==o.BACK&&(Ne[0]=o.BACK,Ve=!0);Ve&&o.drawBuffers(Ne)}function vt(X){return M!==X?(o.useProgram(X),M=X,!0):!1}const St={[dr]:o.FUNC_ADD,[jb]:o.FUNC_SUBTRACT,[qb]:o.FUNC_REVERSE_SUBTRACT};St[Yb]=o.MIN,St[Zb]=o.MAX;const pe={[Kb]:o.ZERO,[Jb]:o.ONE,[Qb]:o.SRC_COLOR,[wp]:o.SRC_ALPHA,[aT]:o.SRC_ALPHA_SATURATE,[nT]:o.DST_COLOR,[eT]:o.DST_ALPHA,[$b]:o.ONE_MINUS_SRC_COLOR,[Rp]:o.ONE_MINUS_SRC_ALPHA,[iT]:o.ONE_MINUS_DST_COLOR,[tT]:o.ONE_MINUS_DST_ALPHA,[sT]:o.CONSTANT_COLOR,[rT]:o.ONE_MINUS_CONSTANT_COLOR,[oT]:o.CONSTANT_ALPHA,[lT]:o.ONE_MINUS_CONSTANT_ALPHA};function ie(X,ze,Ne,Ve,Ue,Ae,Be,ht,At,Lt){if(X===ya){E===!0&&(ke(o.BLEND),E=!1);return}if(E===!1&&(ve(o.BLEND),E=!0),X!==Wb){if(X!==S||Lt!==A){if((y!==dr||w!==dr)&&(o.blendEquation(o.FUNC_ADD),y=dr,w=dr),Lt)switch(X){case $a:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _i:o.blendFunc(o.ONE,o.ONE);break;case nx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ix:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:_t("WebGLState: Invalid blending: ",X);break}else switch(X){case $a:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _i:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case nx:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ix:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",X);break}L=null,R=null,U=null,F=null,O.set(0,0,0),W=0,S=X,A=Lt}return}Ue=Ue||ze,Ae=Ae||Ne,Be=Be||Ve,(ze!==y||Ue!==w)&&(o.blendEquationSeparate(St[ze],St[Ue]),y=ze,w=Ue),(Ne!==L||Ve!==R||Ae!==U||Be!==F)&&(o.blendFuncSeparate(pe[Ne],pe[Ve],pe[Ae],pe[Be]),L=Ne,R=Ve,U=Ae,F=Be),(ht.equals(O)===!1||At!==W)&&(o.blendColor(ht.r,ht.g,ht.b,At),O.copy(ht),W=At),S=X,A=!1}function xe(X,ze){X.side===aa?ke(o.CULL_FACE):ve(o.CULL_FACE);let Ne=X.side===$n;ze&&(Ne=!Ne),Ee(Ne),X.blending===$a&&X.transparent===!1?ie(ya):ie(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Ve=X.stencilWrite;f.setTest(Ve),Ve&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),tt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):ke(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(X){N!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),N=X)}function Pe(X){X!==kb?(ve(o.CULL_FACE),X!==G&&(X===tx?o.cullFace(o.BACK):X===Xb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ke(o.CULL_FACE),G=X}function z(X){X!==K&&(B&&o.lineWidth(X),K=X)}function tt(X,ze,Ne){X?(ve(o.POLYGON_OFFSET_FILL),(te!==ze||ue!==Ne)&&(o.polygonOffset(ze,Ne),te=ze,ue=Ne)):ke(o.POLYGON_OFFSET_FILL)}function qe(X){X?ve(o.SCISSOR_TEST):ke(o.SCISSOR_TEST)}function at(X){X===void 0&&(X=o.TEXTURE0+fe-1),Re!==X&&(o.activeTexture(X),Re=X)}function Oe(X,ze,Ne){Ne===void 0&&(Re===null?Ne=o.TEXTURE0+fe-1:Ne=Re);let Ve=Ce[Ne];Ve===void 0&&(Ve={type:void 0,texture:void 0},Ce[Ne]=Ve),(Ve.type!==X||Ve.texture!==ze)&&(Re!==Ne&&(o.activeTexture(Ne),Re=Ne),o.bindTexture(X,ze||re[X]),Ve.type=X,Ve.texture=ze)}function P(){const X=Ce[Re];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function j(){try{o.compressedTexImage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function ye(){try{o.texSubImage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function me(){try{o.texSubImage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function Z(){try{o.compressedTexSubImage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function q(){try{o.compressedTexSubImage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function ae(){try{o.texStorage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function be(){try{o.texStorage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function Ke(){try{o.texImage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function ge(){try{o.texImage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function J(X){Me.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Me.copy(X))}function Le(X){Ie.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ie.copy(X))}function He(X,ze){let Ne=d.get(ze);Ne===void 0&&(Ne=new WeakMap,d.set(ze,Ne));let Ve=Ne.get(X);Ve===void 0&&(Ve=o.getUniformBlockIndex(ze,X.name),Ne.set(X,Ve))}function Ge(X,ze){const Ve=d.get(ze).get(X);h.get(ze)!==Ve&&(o.uniformBlockBinding(ze,Ve,X.__bindingPointIndex),h.set(ze,Ve))}function je(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Re=null,Ce={},v={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,R=null,w=null,U=null,F=null,O=new ct(0,0,0),W=0,A=!1,N=null,G=null,K=null,te=null,ue=null,Me.set(0,0,o.canvas.width,o.canvas.height),Ie.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:ke,bindFramebuffer:Xe,drawBuffers:We,useProgram:vt,setBlending:ie,setMaterial:xe,setFlipSided:Ee,setCullFace:Pe,setLineWidth:z,setPolygonOffset:tt,setScissorTest:qe,activeTexture:at,bindTexture:Oe,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:Ke,texImage3D:ge,updateUBOMapping:He,uniformBlockBinding:Ge,texStorage2D:ae,texStorage3D:be,texSubImage2D:ye,texSubImage3D:me,compressedTexSubImage2D:Z,compressedTexSubImage3D:q,scissor:J,viewport:Le,reset:je}}function hC(o,e,t,a,s,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Fe,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,T){return x?new OffscreenCanvas(P,T):ac("canvas")}function E(P,T,j){let ye=1;const me=Oe(P);if((me.width>j||me.height>j)&&(ye=j/Math.max(me.width,me.height)),ye<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(ye*me.width),q=Math.floor(ye*me.height);v===void 0&&(v=M(Z,q));const ae=T?M(Z,q):v;return ae.width=Z,ae.height=q,ae.getContext("2d").drawImage(P,0,0,Z,q),ft("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Z+"x"+q+")."),ae}else return"data"in P&&ft("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){o.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(P,T,j,ye,me=!1){if(P!==null){if(o[P]!==void 0)return o[P];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=T;if(T===o.RED&&(j===o.FLOAT&&(Z=o.R32F),j===o.HALF_FLOAT&&(Z=o.R16F),j===o.UNSIGNED_BYTE&&(Z=o.R8)),T===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(Z=o.R8UI),j===o.UNSIGNED_SHORT&&(Z=o.R16UI),j===o.UNSIGNED_INT&&(Z=o.R32UI),j===o.BYTE&&(Z=o.R8I),j===o.SHORT&&(Z=o.R16I),j===o.INT&&(Z=o.R32I)),T===o.RG&&(j===o.FLOAT&&(Z=o.RG32F),j===o.HALF_FLOAT&&(Z=o.RG16F),j===o.UNSIGNED_BYTE&&(Z=o.RG8)),T===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(Z=o.RG8UI),j===o.UNSIGNED_SHORT&&(Z=o.RG16UI),j===o.UNSIGNED_INT&&(Z=o.RG32UI),j===o.BYTE&&(Z=o.RG8I),j===o.SHORT&&(Z=o.RG16I),j===o.INT&&(Z=o.RG32I)),T===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(Z=o.RGB8UI),j===o.UNSIGNED_SHORT&&(Z=o.RGB16UI),j===o.UNSIGNED_INT&&(Z=o.RGB32UI),j===o.BYTE&&(Z=o.RGB8I),j===o.SHORT&&(Z=o.RGB16I),j===o.INT&&(Z=o.RGB32I)),T===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(Z=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(Z=o.RGBA16UI),j===o.UNSIGNED_INT&&(Z=o.RGBA32UI),j===o.BYTE&&(Z=o.RGBA8I),j===o.SHORT&&(Z=o.RGBA16I),j===o.INT&&(Z=o.RGBA32I)),T===o.RGB&&(j===o.UNSIGNED_INT_5_9_9_9_REV&&(Z=o.RGB9_E5),j===o.UNSIGNED_INT_10F_11F_11F_REV&&(Z=o.R11F_G11F_B10F)),T===o.RGBA){const q=me?gf:Gt.getTransfer(ye);j===o.FLOAT&&(Z=o.RGBA32F),j===o.HALF_FLOAT&&(Z=o.RGBA16F),j===o.UNSIGNED_BYTE&&(Z=q===Jt?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(Z=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(Z=o.RGB5_A1)}return(Z===o.R16F||Z===o.R32F||Z===o.RG16F||Z===o.RG32F||Z===o.RGBA16F||Z===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(P,T){let j;return P?T===null||T===Ma||T===tc?j=o.DEPTH24_STENCIL8:T===ji?j=o.DEPTH32F_STENCIL8:T===ec&&(j=o.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ma||T===tc?j=o.DEPTH_COMPONENT24:T===ji?j=o.DEPTH_COMPONENT32F:T===ec&&(j=o.DEPTH_COMPONENT16),j}function U(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function F(P){const T=P.target;T.removeEventListener("dispose",F),W(T),T.isVideoTexture&&g.delete(T)}function O(P){const T=P.target;T.removeEventListener("dispose",O),N(T)}function W(P){const T=a.get(P);if(T.__webglInit===void 0)return;const j=P.source,ye=_.get(j);if(ye){const me=ye[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&A(P),Object.keys(ye).length===0&&_.delete(j)}a.remove(P)}function A(P){const T=a.get(P);o.deleteTexture(T.__webglTexture);const j=P.source,ye=_.get(j);delete ye[T.__cacheKey],u.memory.textures--}function N(P){const T=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(T.__webglFramebuffer[ye]))for(let me=0;me<T.__webglFramebuffer[ye].length;me++)o.deleteFramebuffer(T.__webglFramebuffer[ye][me]);else o.deleteFramebuffer(T.__webglFramebuffer[ye]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ye])}else{if(Array.isArray(T.__webglFramebuffer))for(let ye=0;ye<T.__webglFramebuffer.length;ye++)o.deleteFramebuffer(T.__webglFramebuffer[ye]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ye=0;ye<T.__webglColorRenderbuffer.length;ye++)T.__webglColorRenderbuffer[ye]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ye]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=P.textures;for(let ye=0,me=j.length;ye<me;ye++){const Z=a.get(j[ye]);Z.__webglTexture&&(o.deleteTexture(Z.__webglTexture),u.memory.textures--),a.remove(j[ye])}a.remove(P)}let G=0;function K(){G=0}function te(){const P=G;return P>=s.maxTextures&&ft("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),G+=1,P}function ue(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function fe(P,T){const j=a.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&j.__version!==P.version){const ye=P.image;if(ye===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{re(j,P,T);return}}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+T)}function B(P,T){const j=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){re(j,P,T);return}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+T)}function V(P,T){const j=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){re(j,P,T);return}t.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+T)}function oe(P,T){const j=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&j.__version!==P.version){ve(j,P,T);return}t.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+T)}const Re={[Fs]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[mf]:o.MIRRORED_REPEAT},Ce={[Pn]:o.NEAREST,[Ly]:o.NEAREST_MIPMAP_NEAREST,[jl]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[lf]:o.LINEAR_MIPMAP_NEAREST,[Ja]:o.LINEAR_MIPMAP_LINEAR},I={[gT]:o.NEVER,[ST]:o.ALWAYS,[vT]:o.LESS,[qm]:o.LEQUAL,[_T]:o.EQUAL,[Ym]:o.GEQUAL,[xT]:o.GREATER,[yT]:o.NOTEQUAL};function se(P,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===lf||T.magFilter===jl||T.magFilter===Ja||T.minFilter===On||T.minFilter===lf||T.minFilter===jl||T.minFilter===Ja)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Re[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Re[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Re[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Ce[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Ce[T.minFilter]),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==jl&&T.minFilter!==Ja||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Me(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",F));const ye=T.source;let me=_.get(ye);me===void 0&&(me={},_.set(ye,me));const Z=ue(T);if(Z!==P.__cacheKey){me[Z]===void 0&&(me[Z]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,j=!0),me[Z].usedTimes++;const q=me[P.__cacheKey];q!==void 0&&(me[P.__cacheKey].usedTimes--,q.usedTimes===0&&A(T)),P.__cacheKey=Z,P.__webglTexture=me[Z].texture}return j}function Ie(P,T,j){return Math.floor(Math.floor(P/j)/T)}function Ye(P,T,j,ye){const Z=P.updateRanges;if(Z.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,j,ye,T.data);else{Z.sort((ge,J)=>ge.start-J.start);let q=0;for(let ge=1;ge<Z.length;ge++){const J=Z[q],Le=Z[ge],He=J.start+J.count,Ge=Ie(Le.start,T.width,4),je=Ie(J.start,T.width,4);Le.start<=He+1&&Ge===je&&Ie(Le.start+Le.count-1,T.width,4)===Ge?J.count=Math.max(J.count,Le.start+Le.count-J.start):(++q,Z[q]=Le)}Z.length=q+1;const ae=o.getParameter(o.UNPACK_ROW_LENGTH),be=o.getParameter(o.UNPACK_SKIP_PIXELS),Ke=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ge=0,J=Z.length;ge<J;ge++){const Le=Z[ge],He=Math.floor(Le.start/4),Ge=Math.ceil(Le.count/4),je=He%T.width,X=Math.floor(He/T.width),ze=Ge,Ne=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,je),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),t.texSubImage2D(o.TEXTURE_2D,0,je,X,ze,Ne,j,ye,T.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ae),o.pixelStorei(o.UNPACK_SKIP_PIXELS,be),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ke)}}function re(P,T,j){let ye=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ye=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ye=o.TEXTURE_3D);const me=Me(P,T),Z=T.source;t.bindTexture(ye,P.__webglTexture,o.TEXTURE0+j);const q=a.get(Z);if(Z.version!==q.__version||me===!0){t.activeTexture(o.TEXTURE0+j);const ae=Gt.getPrimaries(Gt.workingColorSpace),be=T.colorSpace===Is?null:Gt.getPrimaries(T.colorSpace),Ke=T.colorSpace===Is||ae===be?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ge=E(T.image,!1,s.maxTextureSize);ge=at(T,ge);const J=l.convert(T.format,T.colorSpace),Le=l.convert(T.type);let He=R(T.internalFormat,J,Le,T.colorSpace,T.isVideoTexture);se(ye,T);let Ge;const je=T.mipmaps,X=T.isVideoTexture!==!0,ze=q.__version===void 0||me===!0,Ne=Z.dataReady,Ve=U(T,ge);if(T.isDepthTexture)He=w(T.format===gr,T.type),ze&&(X?t.texStorage2D(o.TEXTURE_2D,1,He,ge.width,ge.height):t.texImage2D(o.TEXTURE_2D,0,He,ge.width,ge.height,0,J,Le,null));else if(T.isDataTexture)if(je.length>0){X&&ze&&t.texStorage2D(o.TEXTURE_2D,Ve,He,je[0].width,je[0].height);for(let Ue=0,Ae=je.length;Ue<Ae;Ue++)Ge=je[Ue],X?Ne&&t.texSubImage2D(o.TEXTURE_2D,Ue,0,0,Ge.width,Ge.height,J,Le,Ge.data):t.texImage2D(o.TEXTURE_2D,Ue,He,Ge.width,Ge.height,0,J,Le,Ge.data);T.generateMipmaps=!1}else X?(ze&&t.texStorage2D(o.TEXTURE_2D,Ve,He,ge.width,ge.height),Ne&&Ye(T,ge,J,Le)):t.texImage2D(o.TEXTURE_2D,0,He,ge.width,ge.height,0,J,Le,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&ze&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ve,He,je[0].width,je[0].height,ge.depth);for(let Ue=0,Ae=je.length;Ue<Ae;Ue++)if(Ge=je[Ue],T.format!==qi)if(J!==null)if(X){if(Ne)if(T.layerUpdates.size>0){const Be=Qx(Ge.width,Ge.height,T.format,T.type);for(const ht of T.layerUpdates){const At=Ge.data.subarray(ht*Be/Ge.data.BYTES_PER_ELEMENT,(ht+1)*Be/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,ht,Ge.width,Ge.height,1,J,At)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,0,Ge.width,Ge.height,ge.depth,J,Ge.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ue,He,Ge.width,Ge.height,ge.depth,0,Ge.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ne&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,0,Ge.width,Ge.height,ge.depth,J,Le,Ge.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Ue,He,Ge.width,Ge.height,ge.depth,0,J,Le,Ge.data)}else{X&&ze&&t.texStorage2D(o.TEXTURE_2D,Ve,He,je[0].width,je[0].height);for(let Ue=0,Ae=je.length;Ue<Ae;Ue++)Ge=je[Ue],T.format!==qi?J!==null?X?Ne&&t.compressedTexSubImage2D(o.TEXTURE_2D,Ue,0,0,Ge.width,Ge.height,J,Ge.data):t.compressedTexImage2D(o.TEXTURE_2D,Ue,He,Ge.width,Ge.height,0,Ge.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ne&&t.texSubImage2D(o.TEXTURE_2D,Ue,0,0,Ge.width,Ge.height,J,Le,Ge.data):t.texImage2D(o.TEXTURE_2D,Ue,He,Ge.width,Ge.height,0,J,Le,Ge.data)}else if(T.isDataArrayTexture)if(X){if(ze&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ve,He,ge.width,ge.height,ge.depth),Ne)if(T.layerUpdates.size>0){const Ue=Qx(ge.width,ge.height,T.format,T.type);for(const Ae of T.layerUpdates){const Be=ge.data.subarray(Ae*Ue/ge.data.BYTES_PER_ELEMENT,(Ae+1)*Ue/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ae,ge.width,ge.height,1,J,Le,Be)}T.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,J,Le,ge.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,He,ge.width,ge.height,ge.depth,0,J,Le,ge.data);else if(T.isData3DTexture)X?(ze&&t.texStorage3D(o.TEXTURE_3D,Ve,He,ge.width,ge.height,ge.depth),Ne&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,J,Le,ge.data)):t.texImage3D(o.TEXTURE_3D,0,He,ge.width,ge.height,ge.depth,0,J,Le,ge.data);else if(T.isFramebufferTexture){if(ze)if(X)t.texStorage2D(o.TEXTURE_2D,Ve,He,ge.width,ge.height);else{let Ue=ge.width,Ae=ge.height;for(let Be=0;Be<Ve;Be++)t.texImage2D(o.TEXTURE_2D,Be,He,Ue,Ae,0,J,Le,null),Ue>>=1,Ae>>=1}}else if(je.length>0){if(X&&ze){const Ue=Oe(je[0]);t.texStorage2D(o.TEXTURE_2D,Ve,He,Ue.width,Ue.height)}for(let Ue=0,Ae=je.length;Ue<Ae;Ue++)Ge=je[Ue],X?Ne&&t.texSubImage2D(o.TEXTURE_2D,Ue,0,0,J,Le,Ge):t.texImage2D(o.TEXTURE_2D,Ue,He,J,Le,Ge);T.generateMipmaps=!1}else if(X){if(ze){const Ue=Oe(ge);t.texStorage2D(o.TEXTURE_2D,Ve,He,Ue.width,Ue.height)}Ne&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,J,Le,ge)}else t.texImage2D(o.TEXTURE_2D,0,He,J,Le,ge);S(T)&&y(ye),q.__version=Z.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ve(P,T,j){if(T.image.length!==6)return;const ye=Me(P,T),me=T.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+j);const Z=a.get(me);if(me.version!==Z.__version||ye===!0){t.activeTexture(o.TEXTURE0+j);const q=Gt.getPrimaries(Gt.workingColorSpace),ae=T.colorSpace===Is?null:Gt.getPrimaries(T.colorSpace),be=T.colorSpace===Is||q===ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,J=[];for(let Ae=0;Ae<6;Ae++)!Ke&&!ge?J[Ae]=E(T.image[Ae],!0,s.maxCubemapSize):J[Ae]=ge?T.image[Ae].image:T.image[Ae],J[Ae]=at(T,J[Ae]);const Le=J[0],He=l.convert(T.format,T.colorSpace),Ge=l.convert(T.type),je=R(T.internalFormat,He,Ge,T.colorSpace),X=T.isVideoTexture!==!0,ze=Z.__version===void 0||ye===!0,Ne=me.dataReady;let Ve=U(T,Le);se(o.TEXTURE_CUBE_MAP,T);let Ue;if(Ke){X&&ze&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,je,Le.width,Le.height);for(let Ae=0;Ae<6;Ae++){Ue=J[Ae].mipmaps;for(let Be=0;Be<Ue.length;Be++){const ht=Ue[Be];T.format!==qi?He!==null?X?Ne&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be,0,0,ht.width,ht.height,He,ht.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be,je,ht.width,ht.height,0,ht.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ne&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be,0,0,ht.width,ht.height,He,Ge,ht.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be,je,ht.width,ht.height,0,He,Ge,ht.data)}}}else{if(Ue=T.mipmaps,X&&ze){Ue.length>0&&Ve++;const Ae=Oe(J[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,je,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ge){X?Ne&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,J[Ae].width,J[Ae].height,He,Ge,J[Ae].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,je,J[Ae].width,J[Ae].height,0,He,Ge,J[Ae].data);for(let Be=0;Be<Ue.length;Be++){const At=Ue[Be].image[Ae].image;X?Ne&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be+1,0,0,At.width,At.height,He,Ge,At.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be+1,je,At.width,At.height,0,He,Ge,At.data)}}else{X?Ne&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,He,Ge,J[Ae]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,je,He,Ge,J[Ae]);for(let Be=0;Be<Ue.length;Be++){const ht=Ue[Be];X?Ne&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be+1,0,0,He,Ge,ht.image[Ae]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Be+1,je,He,Ge,ht.image[Ae])}}}S(T)&&y(o.TEXTURE_CUBE_MAP),Z.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ke(P,T,j,ye,me,Z){const q=l.convert(j.format,j.colorSpace),ae=l.convert(j.type),be=R(j.internalFormat,q,ae,j.colorSpace),Ke=a.get(T),ge=a.get(j);if(ge.__renderTarget=T,!Ke.__hasExternalTextures){const J=Math.max(1,T.width>>Z),Le=Math.max(1,T.height>>Z);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?t.texImage3D(me,Z,be,J,Le,T.depth,0,q,ae,null):t.texImage2D(me,Z,be,J,Le,0,q,ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),tt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,me,ge.__webglTexture,0,z(T)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ye,me,ge.__webglTexture,Z),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Xe(P,T,j){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer){const ye=T.depthTexture,me=ye&&ye.isDepthTexture?ye.type:null,Z=w(T.stencilBuffer,me),q=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;tt(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,z(T),Z,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,z(T),Z,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Z,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,q,o.RENDERBUFFER,P)}else{const ye=T.textures;for(let me=0;me<ye.length;me++){const Z=ye[me],q=l.convert(Z.format,Z.colorSpace),ae=l.convert(Z.type),be=R(Z.internalFormat,q,ae,Z.colorSpace);tt(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,z(T),be,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,z(T),be,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,be,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function We(P,T,j){const ye=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=a.get(T.depthTexture);if(me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ye){if(me.__webglInit===void 0&&(me.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),se(o.TEXTURE_CUBE_MAP,T.depthTexture);const Ke=l.convert(T.depthTexture.format),ge=l.convert(T.depthTexture.type);let J;T.depthTexture.format===ns?J=o.DEPTH_COMPONENT24:T.depthTexture.format===gr&&(J=o.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,J,T.width,T.height,0,Ke,ge,null)}}else fe(T.depthTexture,0);const Z=me.__webglTexture,q=z(T),ae=ye?o.TEXTURE_CUBE_MAP_POSITIVE_X+j:o.TEXTURE_2D,be=T.depthTexture.format===gr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===ns)tt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,be,ae,Z,0,q):o.framebufferTexture2D(o.FRAMEBUFFER,be,ae,Z,0);else if(T.depthTexture.format===gr)tt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,be,ae,Z,0,q):o.framebufferTexture2D(o.FRAMEBUFFER,be,ae,Z,0);else throw new Error("Unknown depthTexture format")}function vt(P){const T=a.get(P),j=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ye=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ye){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ye.removeEventListener("dispose",me)};ye.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=ye}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let ye=0;ye<6;ye++)We(T.__webglFramebuffer[ye],P,ye);else{const ye=P.texture.mipmaps;ye&&ye.length>0?We(T.__webglFramebuffer[0],P,0):We(T.__webglFramebuffer,P,0)}else if(j){T.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ye]),T.__webglDepthbuffer[ye]===void 0)T.__webglDepthbuffer[ye]=o.createRenderbuffer(),Xe(T.__webglDepthbuffer[ye],P,!1);else{const me=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[ye];o.bindRenderbuffer(o.RENDERBUFFER,Z),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,Z)}}else{const ye=P.texture.mipmaps;if(ye&&ye.length>0?t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Xe(T.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Z),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,Z)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function St(P,T,j){const ye=a.get(P);T!==void 0&&ke(ye.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&vt(P)}function pe(P){const T=P.texture,j=a.get(P),ye=a.get(T);P.addEventListener("dispose",O);const me=P.textures,Z=P.isWebGLCubeRenderTarget===!0,q=me.length>1;if(q||(ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture()),ye.__version=T.version,u.memory.textures++),Z){j.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[ae]=[];for(let be=0;be<T.mipmaps.length;be++)j.__webglFramebuffer[ae][be]=o.createFramebuffer()}else j.__webglFramebuffer[ae]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let ae=0;ae<T.mipmaps.length;ae++)j.__webglFramebuffer[ae]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(q)for(let ae=0,be=me.length;ae<be;ae++){const Ke=a.get(me[ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=o.createTexture(),u.memory.textures++)}if(P.samples>0&&tt(P)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ae=0;ae<me.length;ae++){const be=me[ae];j.__webglColorRenderbuffer[ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[ae]);const Ke=l.convert(be.format,be.colorSpace),ge=l.convert(be.type),J=R(be.internalFormat,Ke,ge,be.colorSpace,P.isXRRenderTarget===!0),Le=z(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,J,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.RENDERBUFFER,j.__webglColorRenderbuffer[ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Xe(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Z){t.bindTexture(o.TEXTURE_CUBE_MAP,ye.__webglTexture),se(o.TEXTURE_CUBE_MAP,T);for(let ae=0;ae<6;ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)ke(j.__webglFramebuffer[ae][be],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be);else ke(j.__webglFramebuffer[ae],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);S(T)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){for(let ae=0,be=me.length;ae<be;ae++){const Ke=me[ae],ge=a.get(Ke);let J=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(J,ge.__webglTexture),se(J,Ke),ke(j.__webglFramebuffer,P,Ke,o.COLOR_ATTACHMENT0+ae,J,0),S(Ke)&&y(J)}t.unbindTexture()}else{let ae=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(ae,ye.__webglTexture),se(ae,T),T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)ke(j.__webglFramebuffer[be],P,T,o.COLOR_ATTACHMENT0,ae,be);else ke(j.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,ae,0);S(T)&&y(ae),t.unbindTexture()}P.depthBuffer&&vt(P)}function ie(P){const T=P.textures;for(let j=0,ye=T.length;j<ye;j++){const me=T[j];if(S(me)){const Z=L(P),q=a.get(me).__webglTexture;t.bindTexture(Z,q),y(Z),t.unbindTexture()}}}const xe=[],Ee=[];function Pe(P){if(P.samples>0){if(tt(P)===!1){const T=P.textures,j=P.width,ye=P.height;let me=o.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,q=a.get(P),ae=T.length>1;if(ae)for(let Ke=0;Ke<T.length;Ke++)t.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,q.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);const be=P.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let Ke=0;Ke<T.length;Ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ke]);const ge=a.get(T[Ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ge,0)}o.blitFramebuffer(0,0,j,ye,0,0,j,ye,me,o.NEAREST),h===!0&&(xe.length=0,Ee.length=0,xe.push(o.COLOR_ATTACHMENT0+Ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(Z),Ee.push(Z),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ae)for(let Ke=0;Ke<T.length;Ke++){t.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ke]);const ge=a.get(T[Ke]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,q.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,ge,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const T=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function z(P){return Math.min(s.maxSamples,P.samples)}function tt(P){const T=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(P){const T=u.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function at(P,T){const j=P.colorSpace,ye=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==ui&&j!==Is&&(Gt.getTransfer(j)===Jt?(ye!==qi||me!==Di)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",j)),T}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=K,this.setTexture2D=fe,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=oe,this.rebindTextures=St,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dC(o,e){function t(a,s=Is){let l;const u=Gt.getTransfer(s);if(a===Di)return o.UNSIGNED_BYTE;if(a===Hm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Gm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Oy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Iy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Uy)return o.BYTE;if(a===Py)return o.SHORT;if(a===ec)return o.UNSIGNED_SHORT;if(a===Bm)return o.INT;if(a===Ma)return o.UNSIGNED_INT;if(a===ji)return o.FLOAT;if(a===Ni)return o.HALF_FLOAT;if(a===zy)return o.ALPHA;if(a===Fy)return o.RGB;if(a===qi)return o.RGBA;if(a===ns)return o.DEPTH_COMPONENT;if(a===gr)return o.DEPTH_STENCIL;if(a===Vm)return o.RED;if(a===km)return o.RED_INTEGER;if(a===Co)return o.RG;if(a===Xm)return o.RG_INTEGER;if(a===Wm)return o.RGBA_INTEGER;if(a===cf||a===uf||a===ff||a===hf)if(u===Jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===cf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===cf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===uf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fp||a===Bp||a===Hp||a===Gp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Fp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Gp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Vp||a===kp||a===Xp||a===Wp||a===jp||a===qp||a===Yp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Vp||a===kp)return u===Jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Xp)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Wp)return l.COMPRESSED_R11_EAC;if(a===jp)return l.COMPRESSED_SIGNED_R11_EAC;if(a===qp)return l.COMPRESSED_RG11_EAC;if(a===Yp)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Zp||a===Kp||a===Jp||a===Qp||a===$p||a===em||a===tm||a===nm||a===im||a===am||a===sm||a===rm||a===om||a===lm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Zp)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Kp)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Jp)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Qp)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===$p)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===em)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===tm)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===nm)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===im)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===am)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===sm)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===rm)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===om)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===lm)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===cm||a===um||a===fm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===cm)return u===Jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===um)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===fm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===hm||a===dm||a===pm||a===mm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===hm)return l.COMPRESSED_RED_RGTC1_EXT;if(a===dm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===pm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===mm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===tc?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:t}}const pC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mC=`
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

}`;class gC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new nS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new Gn({vertexShader:pC,fragmentShader:mC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new dc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vC extends zo{constructor(e,t){super();const a=this;let s=null,l=1,u=null,f="local-floor",h=1,d=null,g=null,v=null,_=null,x=null,M=null;const E=typeof XRWebGLBinding<"u",S=new gC,y={},L=t.getContextAttributes();let R=null,w=null;const U=[],F=[],O=new Fe;let W=null;const A=new ii;A.viewport=new pn;const N=new ii;N.viewport=new pn;const G=[A,N],K=new vE;let te=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ve=U[re];return ve===void 0&&(ve=new rp,U[re]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(re){let ve=U[re];return ve===void 0&&(ve=new rp,U[re]=ve),ve.getGripSpace()},this.getHand=function(re){let ve=U[re];return ve===void 0&&(ve=new rp,U[re]=ve),ve.getHandSpace()};function fe(re){const ve=F.indexOf(re.inputSource);if(ve===-1)return;const ke=U[ve];ke!==void 0&&(ke.update(re.inputSource,re.frame,d||u),ke.dispatchEvent({type:re.type,data:re.inputSource}))}function B(){s.removeEventListener("select",fe),s.removeEventListener("selectstart",fe),s.removeEventListener("selectend",fe),s.removeEventListener("squeeze",fe),s.removeEventListener("squeezestart",fe),s.removeEventListener("squeezeend",fe),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",V);for(let re=0;re<U.length;re++){const ve=F[re];ve!==null&&(F[re]=null,U[re].disconnect(ve))}te=null,ue=null,S.reset();for(const re in y)delete y[re];e.setRenderTarget(R),x=null,_=null,v=null,s=null,w=null,Ye.stop(),a.isPresenting=!1,e.setPixelRatio(W),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,a.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,a.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(re){d=re},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",fe),s.addEventListener("selectstart",fe),s.addEventListener("selectend",fe),s.addEventListener("squeeze",fe),s.addEventListener("squeezestart",fe),s.addEventListener("squeezeend",fe),s.addEventListener("end",B),s.addEventListener("inputsourceschange",V),L.xrCompatible!==!0&&await t.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,Xe=null,We=null;L.depth&&(We=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=L.stencil?gr:ns,Xe=L.stencil?tc:Ma);const vt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(vt),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new yi(_.textureWidth,_.textureHeight,{format:qi,type:Di,depthTexture:new oc(_.textureWidth,_.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ke={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,t,ke),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new yi(x.framebufferWidth,x.framebufferHeight,{format:qi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await s.requestReferenceSpace(f),Ye.setContext(s),Ye.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(re){for(let ve=0;ve<re.removed.length;ve++){const ke=re.removed[ve],Xe=F.indexOf(ke);Xe>=0&&(F[Xe]=null,U[Xe].disconnect(ke))}for(let ve=0;ve<re.added.length;ve++){const ke=re.added[ve];let Xe=F.indexOf(ke);if(Xe===-1){for(let vt=0;vt<U.length;vt++)if(vt>=F.length){F.push(ke),Xe=vt;break}else if(F[vt]===null){F[vt]=ke,Xe=vt;break}if(Xe===-1)break}const We=U[Xe];We&&We.connect(ke)}}const oe=new H,Re=new H;function Ce(re,ve,ke){oe.setFromMatrixPosition(ve.matrixWorld),Re.setFromMatrixPosition(ke.matrixWorld);const Xe=oe.distanceTo(Re),We=ve.projectionMatrix.elements,vt=ke.projectionMatrix.elements,St=We[14]/(We[10]-1),pe=We[14]/(We[10]+1),ie=(We[9]+1)/We[5],xe=(We[9]-1)/We[5],Ee=(We[8]-1)/We[0],Pe=(vt[8]+1)/vt[0],z=St*Ee,tt=St*Pe,qe=Xe/(-Ee+Pe),at=qe*-Ee;if(ve.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(at),re.translateZ(qe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),We[10]===-1)re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Oe=St+qe,P=pe+qe,T=z-at,j=tt+(Xe-at),ye=ie*pe/P*Oe,me=xe*pe/P*Oe;re.projectionMatrix.makePerspective(T,j,ye,me,Oe,P),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function I(re,ve){ve===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ve.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let ve=re.near,ke=re.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(ke=S.depthFar)),K.near=N.near=A.near=ve,K.far=N.far=A.far=ke,(te!==K.near||ue!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),te=K.near,ue=K.far),K.layers.mask=re.layers.mask|6,A.layers.mask=K.layers.mask&3,N.layers.mask=K.layers.mask&5;const Xe=re.parent,We=K.cameras;I(K,Xe);for(let vt=0;vt<We.length;vt++)I(We[vt],Xe);We.length===2?Ce(K,A,N):K.projectionMatrix.copy(A.projectionMatrix),se(re,K,Xe)};function se(re,ve,ke){ke===null?re.matrix.copy(ve.matrixWorld):(re.matrix.copy(ke.matrixWorld),re.matrix.invert(),re.matrix.multiply(ve.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Do*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(re){h=re,_!==null&&(_.fixedFoveation=re),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(re){return y[re]};let Me=null;function Ie(re,ve){if(g=ve.getViewerPose(d||u),M=ve,g!==null){const ke=g.views;x!==null&&(e.setRenderTargetFramebuffer(w,x.framebuffer),e.setRenderTarget(w));let Xe=!1;ke.length!==K.cameras.length&&(K.cameras.length=0,Xe=!0);for(let pe=0;pe<ke.length;pe++){const ie=ke[pe];let xe=null;if(x!==null)xe=x.getViewport(ie);else{const Pe=v.getViewSubImage(_,ie);xe=Pe.viewport,pe===0&&(e.setRenderTargetTextures(w,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(w))}let Ee=G[pe];Ee===void 0&&(Ee=new ii,Ee.layers.enable(pe),Ee.viewport=new pn,G[pe]=Ee),Ee.matrix.fromArray(ie.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ie.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(xe.x,xe.y,xe.width,xe.height),pe===0&&(K.matrix.copy(Ee.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Xe===!0&&K.cameras.push(Ee)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){v=a.getBinding();const pe=v.getDepthInformation(ke[0]);pe&&pe.isValid&&pe.texture&&S.init(pe,s.renderState)}if(We&&We.includes("camera-access")&&E){e.state.unbindTexture(),v=a.getBinding();for(let pe=0;pe<ke.length;pe++){const ie=ke[pe].camera;if(ie){let xe=y[ie];xe||(xe=new nS,y[ie]=xe);const Ee=v.getCameraImage(ie);xe.sourceTexture=Ee}}}}for(let ke=0;ke<U.length;ke++){const Xe=F[ke],We=U[ke];Xe!==null&&We!==void 0&&We.update(Xe,ve,d||u)}Me&&Me(re,ve),ve.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Ye=new _S;Ye.setAnimationLoop(Ie),this.setAnimationLoop=function(re){Me=re},this.dispose=function(){}}}const cr=new Li,_C=new Et;function xC(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,jy(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,L,R,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?h(S,y,L,R):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===$n&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===$n&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),R=L.envMap,w=L.envMapRotation;R&&(S.envMap.value=R,cr.copy(w),cr.x*=-1,cr.y*=-1,cr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),S.envMapRotation.value.setFromMatrix4(_C.makeRotationFromEuler(cr)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,L,R){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=R*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===$n&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function yC(o,e,t,a){let s={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const w=R.program;a.uniformBlockBinding(L,w)}function d(L,R){let w=s[L.id];w===void 0&&(M(L),w=g(L),s[L.id]=w,L.addEventListener("dispose",S));const U=R.program;a.updateUBOMapping(L,U);const F=e.render.frame;l[L.id]!==F&&(_(L),l[L.id]=F)}function g(L){const R=v();L.__bindingPointIndex=R;const w=o.createBuffer(),U=L.__size,F=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,U,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,w),w}function v(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const R=s[L.id],w=L.uniforms,U=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let F=0,O=w.length;F<O;F++){const W=Array.isArray(w[F])?w[F]:[w[F]];for(let A=0,N=W.length;A<N;A++){const G=W[A];if(x(G,F,A,U)===!0){const K=G.__offset,te=Array.isArray(G.value)?G.value:[G.value];let ue=0;for(let fe=0;fe<te.length;fe++){const B=te[fe],V=E(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,K+ue,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ue),ue+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(L,R,w,U){const F=L.value,O=R+"_"+w;if(U[O]===void 0)return typeof F=="number"||typeof F=="boolean"?U[O]=F:U[O]=F.clone(),!0;{const W=U[O];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return U[O]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function M(L){const R=L.uniforms;let w=0;const U=16;for(let O=0,W=R.length;O<W;O++){const A=Array.isArray(R[O])?R[O]:[R[O]];for(let N=0,G=A.length;N<G;N++){const K=A[N],te=Array.isArray(K.value)?K.value:[K.value];for(let ue=0,fe=te.length;ue<fe;ue++){const B=te[ue],V=E(B),oe=w%U,Re=oe%V.boundary,Ce=oe+Re;w+=Re,Ce!==0&&U-Ce<V.storage&&(w+=U-Ce),K.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=V.storage}}}const F=w%U;return F>0&&(w+=U-F),L.__size=w,L.__cache={},this}function E(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",L),R}function S(L){const R=L.target;R.removeEventListener("dispose",S);const w=u.indexOf(R.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(s[R.id]),delete s[R.id],delete l[R.id]}function y(){for(const L in s)o.deleteBuffer(s[L]);u=[],s={},l={}}return{bind:h,update:d,dispose:y}}const SC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pa=null;function MC(){return pa===null&&(pa=new Jm(SC,16,16,Co,Ni),pa.name="DFG_LUT",pa.minFilter=On,pa.magFilter=On,pa.wrapS=_a,pa.wrapT=_a,pa.generateMipmaps=!1,pa.needsUpdate=!0),pa}class bS{constructor(e={}){const{canvas:t=bT(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Di}=e;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const E=x,S=new Set([Wm,Xm,km]),y=new Set([Di,Ma,ec,tc,Hm,Gm]),L=new Uint32Array(4),R=new Int32Array(4);let w=null,U=null;const F=[],O=[];let W=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=Un;let G=0,K=0,te=null,ue=-1,fe=null;const B=new pn,V=new pn;let oe=null;const Re=new ct(0);let Ce=0,I=t.width,se=t.height,Me=1,Ie=null,Ye=null;const re=new pn(0,0,I,se),ve=new pn(0,0,I,se);let ke=!1;const Xe=new $m;let We=!1,vt=!1;const St=new Et,pe=new H,ie=new pn,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Pe(){return te===null?Me:1}let z=a;function tt(D,Q){return t.getContext(D,Q)}try{const D={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lm}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),z===null){const Q="webgl2";if(z=tt(Q,D),z===null)throw tt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw _t("WebGLRenderer: "+D.message),D}let qe,at,Oe,P,T,j,ye,me,Z,q,ae,be,Ke,ge,J,Le,He,Ge,je,X,ze,Ne,Ve,Ue;function Ae(){qe=new M2(z),qe.init(),Ne=new dC(z,qe),at=new d2(z,qe,e,Ne),Oe=new fC(z,qe),at.reversedDepthBuffer&&_&&Oe.buffers.depth.setReversed(!0),P=new E2(z),T=new KR,j=new hC(z,qe,Oe,T,at,Ne,P),ye=new m2(A),me=new S2(A),Z=new CE(z),Ve=new f2(z,Z),q=new b2(z,Z,P,Ve),ae=new w2(z,q,Z,P),je=new A2(z,at,j),Le=new p2(T),be=new ZR(A,ye,me,qe,at,Ve,Le),Ke=new xC(A,T),ge=new QR,J=new aC(qe),Ge=new u2(A,ye,me,Oe,ae,M,h),He=new cC(A,ae,at),Ue=new yC(z,P,at,Oe),X=new h2(z,qe,P),ze=new T2(z,qe,P),P.programs=be.programs,A.capabilities=at,A.extensions=qe,A.properties=T,A.renderLists=ge,A.shadowMap=He,A.state=Oe,A.info=P}Ae(),E!==Di&&(W=new C2(E,t.width,t.height,s,l));const Be=new vC(A,z);this.xr=Be,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const D=qe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=qe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(D){D!==void 0&&(Me=D,this.setSize(I,se,!1))},this.getSize=function(D){return D.set(I,se)},this.setSize=function(D,Q,_e=!0){if(Be.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}I=D,se=Q,t.width=Math.floor(D*Me),t.height=Math.floor(Q*Me),_e===!0&&(t.style.width=D+"px",t.style.height=Q+"px"),W!==null&&W.setSize(t.width,t.height),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(I*Me,se*Me).floor()},this.setDrawingBufferSize=function(D,Q,_e){I=D,se=Q,Me=_e,t.width=Math.floor(D*_e),t.height=Math.floor(Q*_e),this.setViewport(0,0,D,Q)},this.setEffects=function(D){if(E===Di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Q=0;Q<D.length;Q++)if(D[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(B)},this.getViewport=function(D){return D.copy(re)},this.setViewport=function(D,Q,_e,he){D.isVector4?re.set(D.x,D.y,D.z,D.w):re.set(D,Q,_e,he),Oe.viewport(B.copy(re).multiplyScalar(Me).round())},this.getScissor=function(D){return D.copy(ve)},this.setScissor=function(D,Q,_e,he){D.isVector4?ve.set(D.x,D.y,D.z,D.w):ve.set(D,Q,_e,he),Oe.scissor(V.copy(ve).multiplyScalar(Me).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(D){Oe.setScissorTest(ke=D)},this.setOpaqueSort=function(D){Ie=D},this.setTransparentSort=function(D){Ye=D},this.getClearColor=function(D){return D.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,_e=!0){let he=0;if(D){let ne=!1;if(te!==null){const Je=te.texture.format;ne=S.has(Je)}if(ne){const Je=te.texture.type,et=y.has(Je),Qe=Ge.getClearColor(),nt=Ge.getClearAlpha(),rt=Qe.r,pt=Qe.g,ot=Qe.b;et?(L[0]=rt,L[1]=pt,L[2]=ot,L[3]=nt,z.clearBufferuiv(z.COLOR,0,L)):(R[0]=rt,R[1]=pt,R[2]=ot,R[3]=nt,z.clearBufferiv(z.COLOR,0,R))}else he|=z.COLOR_BUFFER_BIT}Q&&(he|=z.DEPTH_BUFFER_BIT),_e&&(he|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Ge.dispose(),ge.dispose(),J.dispose(),T.dispose(),ye.dispose(),me.dispose(),ae.dispose(),Ve.dispose(),Ue.dispose(),be.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Ut),Be.removeEventListener("sessionend",Dt),cn.stop()};function ht(D){D.preventDefault(),_f("WebGLRenderer: Context Lost."),N=!0}function At(){_f("WebGLRenderer: Context Restored."),N=!1;const D=P.autoReset,Q=He.enabled,_e=He.autoUpdate,he=He.needsUpdate,ne=He.type;Ae(),P.autoReset=D,He.enabled=Q,He.autoUpdate=_e,He.needsUpdate=he,He.type=ne}function Lt(D){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Qt(D){const Q=D.target;Q.removeEventListener("dispose",Qt),jt(Q)}function jt(D){ai(D),T.remove(D)}function ai(D){const Q=T.get(D).programs;Q!==void 0&&(Q.forEach(function(_e){be.releaseProgram(_e)}),D.isShaderMaterial&&be.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,_e,he,ne,Je){Q===null&&(Q=xe);const et=ne.isMesh&&ne.matrixWorld.determinant()<0,Qe=Aa(D,Q,_e,he,ne);Oe.setMaterial(he,et);let nt=_e.index,rt=1;if(he.wireframe===!0){if(nt=q.getWireframeAttribute(_e),nt===void 0)return;rt=2}const pt=_e.drawRange,ot=_e.attributes.position;let mt=pt.start*rt,qt=(pt.start+pt.count)*rt;Je!==null&&(mt=Math.max(mt,Je.start*rt),qt=Math.min(qt,(Je.start+Je.count)*rt)),nt!==null?(mt=Math.max(mt,0),qt=Math.min(qt,nt.count)):ot!=null&&(mt=Math.max(mt,0),qt=Math.min(qt,ot.count));const _n=qt-mt;if(_n<0||_n===1/0)return;Ve.setup(ne,he,Qe,_e,nt);let fn,Kt=X;if(nt!==null&&(fn=Z.get(nt),Kt=ze,Kt.setIndex(fn)),ne.isMesh)he.wireframe===!0?(Oe.setLineWidth(he.wireframeLinewidth*Pe()),Kt.setMode(z.LINES)):Kt.setMode(z.TRIANGLES);else if(ne.isLine){let ut=he.linewidth;ut===void 0&&(ut=1),Oe.setLineWidth(ut*Pe()),ne.isLineSegments?Kt.setMode(z.LINES):ne.isLineLoop?Kt.setMode(z.LINE_LOOP):Kt.setMode(z.LINE_STRIP)}else ne.isPoints?Kt.setMode(z.POINTS):ne.isSprite&&Kt.setMode(z.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)sc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Kt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const ut=ne._multiDrawStarts,Yt=ne._multiDrawCounts,yt=ne._multiDrawCount,Xn=nt?Z.get(nt).bytesPerElement:1,wa=T.get(he).currentProgram.getUniforms();for(let Wn=0;Wn<yt;Wn++)wa.setValue(z,"_gl_DrawID",Wn),Kt.render(ut[Wn]/Xn,Yt[Wn])}else if(ne.isInstancedMesh)Kt.renderInstances(mt,_n,ne.count);else if(_e.isInstancedBufferGeometry){const ut=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,Yt=Math.min(_e.instanceCount,ut);Kt.renderInstances(mt,_n,Yt)}else Kt.render(mt,_n)};function Ze(D,Q,_e){D.transparent===!0&&D.side===aa&&D.forceSinglePass===!1?(D.side=$n,D.needsUpdate=!0,Ui(D,Q,_e),D.side=ts,D.needsUpdate=!0,Ui(D,Q,_e),D.side=aa):Ui(D,Q,_e)}this.compile=function(D,Q,_e=null){_e===null&&(_e=D),U=J.get(_e),U.init(Q),O.push(U),_e.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Q.layers)&&(U.pushLight(ne),ne.castShadow&&U.pushShadow(ne))}),D!==_e&&D.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Q.layers)&&(U.pushLight(ne),ne.castShadow&&U.pushShadow(ne))}),U.setupLights();const he=new Set;return D.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Je=ne.material;if(Je)if(Array.isArray(Je))for(let et=0;et<Je.length;et++){const Qe=Je[et];Ze(Qe,_e,ne),he.add(Qe)}else Ze(Je,_e,ne),he.add(Je)}),U=O.pop(),he},this.compileAsync=function(D,Q,_e=null){const he=this.compile(D,Q,_e);return new Promise(ne=>{function Je(){if(he.forEach(function(et){T.get(et).currentProgram.isReady()&&he.delete(et)}),he.size===0){ne(D);return}setTimeout(Je,10)}qe.get("KHR_parallel_shader_compile")!==null?Je():setTimeout(Je,10)})};let st=null;function bt(D){st&&st(D)}function Ut(){cn.stop()}function Dt(){cn.start()}const cn=new _S;cn.setAnimationLoop(bt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(D){st=D,Be.setAnimationLoop(D),D===null?cn.stop():cn.start()},Be.addEventListener("sessionstart",Ut),Be.addEventListener("sessionend",Dt),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const _e=Be.enabled===!0&&Be.isPresenting===!0,he=W!==null&&(te===null||_e)&&W.begin(A,te);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(Q),Q=Be.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Q,te),U=J.get(D,O.length),U.init(Q),O.push(U),St.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Xe.setFromProjectionMatrix(St,xa,Q.reversedDepth),vt=this.localClippingEnabled,We=Le.init(this.clippingPlanes,vt),w=ge.get(D,F.length),w.init(),F.push(w),Be.enabled===!0&&Be.isPresenting===!0){const et=A.xr.getDepthSensingMesh();et!==null&&gn(et,Q,-1/0,A.sortObjects)}gn(D,Q,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(Ie,Ye),Ee=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,Ee&&Ge.addToRenderList(w,D),this.info.render.frame++,We===!0&&Le.beginShadows();const ne=U.state.shadowsArray;if(He.render(ne,D,Q),We===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(he&&W.hasRenderPass())===!1){const et=w.opaque,Qe=w.transmissive;if(U.setupLights(),Q.isArrayCamera){const nt=Q.cameras;if(Qe.length>0)for(let rt=0,pt=nt.length;rt<pt;rt++){const ot=nt[rt];vn(et,Qe,D,ot)}Ee&&Ge.render(D);for(let rt=0,pt=nt.length;rt<pt;rt++){const ot=nt[rt];Pt(w,D,ot,ot.viewport)}}else Qe.length>0&&vn(et,Qe,D,Q),Ee&&Ge.render(D),Pt(w,D,Q)}te!==null&&K===0&&(j.updateMultisampleRenderTarget(te),j.updateRenderTargetMipmap(te)),he&&W.end(A),D.isScene===!0&&D.onAfterRender(A,D,Q),Ve.resetDefaultState(),ue=-1,fe=null,O.pop(),O.length>0?(U=O[O.length-1],We===!0&&Le.setGlobalState(A.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?w=F[F.length-1]:w=null};function gn(D,Q,_e,he){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)_e=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)U.pushLight(D),D.castShadow&&U.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Xe.intersectsSprite(D)){he&&ie.setFromMatrixPosition(D.matrixWorld).applyMatrix4(St);const et=ae.update(D),Qe=D.material;Qe.visible&&w.push(D,et,Qe,_e,ie.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Xe.intersectsObject(D))){const et=ae.update(D),Qe=D.material;if(he&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ie.copy(D.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),ie.copy(et.boundingSphere.center)),ie.applyMatrix4(D.matrixWorld).applyMatrix4(St)),Array.isArray(Qe)){const nt=et.groups;for(let rt=0,pt=nt.length;rt<pt;rt++){const ot=nt[rt],mt=Qe[ot.materialIndex];mt&&mt.visible&&w.push(D,et,mt,_e,ie.z,ot)}}else Qe.visible&&w.push(D,et,Qe,_e,ie.z,null)}}const Je=D.children;for(let et=0,Qe=Je.length;et<Qe;et++)gn(Je[et],Q,_e,he)}function Pt(D,Q,_e,he){const{opaque:ne,transmissive:Je,transparent:et}=D;U.setupLightsView(_e),We===!0&&Le.setGlobalState(A.clippingPlanes,_e),he&&Oe.viewport(B.copy(he)),ne.length>0&&kn(ne,Q,_e),Je.length>0&&kn(Je,Q,_e),et.length>0&&kn(et,Q,_e),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function vn(D,Q,_e,he){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[he.id]===void 0){const mt=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[he.id]=new yi(1,1,{generateMipmaps:!0,type:mt?Ni:Di,minFilter:Ja,samples:at.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const Je=U.state.transmissionRenderTarget[he.id],et=he.viewport||B;Je.setSize(et.z*A.transmissionResolutionScale,et.w*A.transmissionResolutionScale);const Qe=A.getRenderTarget(),nt=A.getActiveCubeFace(),rt=A.getActiveMipmapLevel();A.setRenderTarget(Je),A.getClearColor(Re),Ce=A.getClearAlpha(),Ce<1&&A.setClearColor(16777215,.5),A.clear(),Ee&&Ge.render(_e);const pt=A.toneMapping;A.toneMapping=Sa;const ot=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),U.setupLightsView(he),We===!0&&Le.setGlobalState(A.clippingPlanes,he),kn(D,_e,he),j.updateMultisampleRenderTarget(Je),j.updateRenderTargetMipmap(Je),qe.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let qt=0,_n=Q.length;qt<_n;qt++){const fn=Q[qt],{object:Kt,geometry:ut,material:Yt,group:yt}=fn;if(Yt.side===aa&&Kt.layers.test(he.layers)){const Xn=Yt.side;Yt.side=$n,Yt.needsUpdate=!0,ca(Kt,_e,he,ut,Yt,yt),Yt.side=Xn,Yt.needsUpdate=!0,mt=!0}}mt===!0&&(j.updateMultisampleRenderTarget(Je),j.updateRenderTargetMipmap(Je))}A.setRenderTarget(Qe,nt,rt),A.setClearColor(Re,Ce),ot!==void 0&&(he.viewport=ot),A.toneMapping=pt}function kn(D,Q,_e){const he=Q.isScene===!0?Q.overrideMaterial:null;for(let ne=0,Je=D.length;ne<Je;ne++){const et=D[ne],{object:Qe,geometry:nt,group:rt}=et;let pt=et.material;pt.allowOverride===!0&&he!==null&&(pt=he),Qe.layers.test(_e.layers)&&ca(Qe,Q,_e,nt,pt,rt)}}function ca(D,Q,_e,he,ne,Je){D.onBeforeRender(A,Q,_e,he,ne,Je),D.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ne.onBeforeRender(A,Q,_e,he,D,Je),ne.transparent===!0&&ne.side===aa&&ne.forceSinglePass===!1?(ne.side=$n,ne.needsUpdate=!0,A.renderBufferDirect(_e,Q,he,ne,D,Je),ne.side=ts,ne.needsUpdate=!0,A.renderBufferDirect(_e,Q,he,ne,D,Je),ne.side=aa):A.renderBufferDirect(_e,Q,he,ne,D,Je),D.onAfterRender(A,Q,_e,he,ne,Je)}function Ui(D,Q,_e){Q.isScene!==!0&&(Q=xe);const he=T.get(D),ne=U.state.lights,Je=U.state.shadowsArray,et=ne.state.version,Qe=be.getParameters(D,ne.state,Je,Q,_e),nt=be.getProgramCacheKey(Qe);let rt=he.programs;he.environment=D.isMeshStandardMaterial?Q.environment:null,he.fog=Q.fog,he.envMap=(D.isMeshStandardMaterial?me:ye).get(D.envMap||he.environment),he.envMapRotation=he.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,rt===void 0&&(D.addEventListener("dispose",Qt),rt=new Map,he.programs=rt);let pt=rt.get(nt);if(pt!==void 0){if(he.currentProgram===pt&&he.lightsStateVersion===et)return Ea(D,Qe),pt}else Qe.uniforms=be.getUniforms(D),D.onBeforeCompile(Qe,A),pt=be.acquireProgram(Qe,nt),rt.set(nt,pt),he.uniforms=Qe.uniforms;const ot=he.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ot.clippingPlanes=Le.uniform),Ea(D,Qe),he.needsLights=is(D),he.lightsStateVersion=et,he.needsLights&&(ot.ambientLightColor.value=ne.state.ambient,ot.lightProbe.value=ne.state.probe,ot.directionalLights.value=ne.state.directional,ot.directionalLightShadows.value=ne.state.directionalShadow,ot.spotLights.value=ne.state.spot,ot.spotLightShadows.value=ne.state.spotShadow,ot.rectAreaLights.value=ne.state.rectArea,ot.ltc_1.value=ne.state.rectAreaLTC1,ot.ltc_2.value=ne.state.rectAreaLTC2,ot.pointLights.value=ne.state.point,ot.pointLightShadows.value=ne.state.pointShadow,ot.hemisphereLights.value=ne.state.hemi,ot.directionalShadowMap.value=ne.state.directionalShadowMap,ot.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ot.spotShadowMap.value=ne.state.spotShadowMap,ot.spotLightMatrix.value=ne.state.spotLightMatrix,ot.spotLightMap.value=ne.state.spotLightMap,ot.pointShadowMap.value=ne.state.pointShadowMap,ot.pointShadowMatrix.value=ne.state.pointShadowMatrix),he.currentProgram=pt,he.uniformsList=null,pt}function si(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=df.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function Ea(D,Q){const _e=T.get(D);_e.outputColorSpace=Q.outputColorSpace,_e.batching=Q.batching,_e.batchingColor=Q.batchingColor,_e.instancing=Q.instancing,_e.instancingColor=Q.instancingColor,_e.instancingMorph=Q.instancingMorph,_e.skinning=Q.skinning,_e.morphTargets=Q.morphTargets,_e.morphNormals=Q.morphNormals,_e.morphColors=Q.morphColors,_e.morphTargetsCount=Q.morphTargetsCount,_e.numClippingPlanes=Q.numClippingPlanes,_e.numIntersection=Q.numClipIntersection,_e.vertexAlphas=Q.vertexAlphas,_e.vertexTangents=Q.vertexTangents,_e.toneMapping=Q.toneMapping}function Aa(D,Q,_e,he,ne){Q.isScene!==!0&&(Q=xe),j.resetTextureUnits();const Je=Q.fog,et=he.isMeshStandardMaterial?Q.environment:null,Qe=te===null?A.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ui,nt=(he.isMeshStandardMaterial?me:ye).get(he.envMap||et),rt=he.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pt=!!_e.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),ot=!!_e.morphAttributes.position,mt=!!_e.morphAttributes.normal,qt=!!_e.morphAttributes.color;let _n=Sa;he.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(_n=A.toneMapping);const fn=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,Kt=fn!==void 0?fn.length:0,ut=T.get(he),Yt=U.state.lights;if(We===!0&&(vt===!0||D!==fe)){const qn=D===fe&&he.id===ue;Le.setState(he,D,qn)}let yt=!1;he.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Yt.state.version||ut.outputColorSpace!==Qe||ne.isBatchedMesh&&ut.batching===!1||!ne.isBatchedMesh&&ut.batching===!0||ne.isBatchedMesh&&ut.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&ut.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&ut.instancing===!1||!ne.isInstancedMesh&&ut.instancing===!0||ne.isSkinnedMesh&&ut.skinning===!1||!ne.isSkinnedMesh&&ut.skinning===!0||ne.isInstancedMesh&&ut.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ut.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ut.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ut.instancingMorph===!1&&ne.morphTexture!==null||ut.envMap!==nt||he.fog===!0&&ut.fog!==Je||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==Le.numPlanes||ut.numIntersection!==Le.numIntersection)||ut.vertexAlphas!==rt||ut.vertexTangents!==pt||ut.morphTargets!==ot||ut.morphNormals!==mt||ut.morphColors!==qt||ut.toneMapping!==_n||ut.morphTargetsCount!==Kt)&&(yt=!0):(yt=!0,ut.__version=he.version);let Xn=ut.currentProgram;yt===!0&&(Xn=Ui(he,Q,ne));let wa=!1,Wn=!1,Pi=!1;const $t=Xn.getUniforms(),jn=ut.uniforms;if(Oe.useProgram(Xn.program)&&(wa=!0,Wn=!0,Pi=!0),he.id!==ue&&(ue=he.id,Wn=!0),wa||fe!==D){Oe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),$t.setValue(z,"projectionMatrix",D.projectionMatrix),$t.setValue(z,"viewMatrix",D.matrixWorldInverse);const Yn=$t.map.cameraPosition;Yn!==void 0&&Yn.setValue(z,pe.setFromMatrixPosition(D.matrixWorld)),at.logarithmicDepthBuffer&&$t.setValue(z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&$t.setValue(z,"isOrthographic",D.isOrthographicCamera===!0),fe!==D&&(fe=D,Wn=!0,Pi=!0)}if(ut.needsLights&&(Yt.state.directionalShadowMap.length>0&&$t.setValue(z,"directionalShadowMap",Yt.state.directionalShadowMap,j),Yt.state.spotShadowMap.length>0&&$t.setValue(z,"spotShadowMap",Yt.state.spotShadowMap,j),Yt.state.pointShadowMap.length>0&&$t.setValue(z,"pointShadowMap",Yt.state.pointShadowMap,j)),ne.isSkinnedMesh){$t.setOptional(z,ne,"bindMatrix"),$t.setOptional(z,ne,"bindMatrixInverse");const qn=ne.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),$t.setValue(z,"boneTexture",qn.boneTexture,j))}ne.isBatchedMesh&&($t.setOptional(z,ne,"batchingTexture"),$t.setValue(z,"batchingTexture",ne._matricesTexture,j),$t.setOptional(z,ne,"batchingIdTexture"),$t.setValue(z,"batchingIdTexture",ne._indirectTexture,j),$t.setOptional(z,ne,"batchingColorTexture"),ne._colorsTexture!==null&&$t.setValue(z,"batchingColorTexture",ne._colorsTexture,j));const Nn=_e.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&je.update(ne,_e,Xn),(Wn||ut.receiveShadow!==ne.receiveShadow)&&(ut.receiveShadow=ne.receiveShadow,$t.setValue(z,"receiveShadow",ne.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(jn.envMap.value=nt,jn.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&Q.environment!==null&&(jn.envMapIntensity.value=Q.environmentIntensity),jn.dfgLUT!==void 0&&(jn.dfgLUT.value=MC()),Wn&&($t.setValue(z,"toneMappingExposure",A.toneMappingExposure),ut.needsLights&&Hs(jn,Pi),Je&&he.fog===!0&&Ke.refreshFogUniforms(jn,Je),Ke.refreshMaterialUniforms(jn,he,Me,se,U.state.transmissionRenderTarget[D.id]),df.upload(z,si(ut),jn,j)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(df.upload(z,si(ut),jn,j),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&$t.setValue(z,"center",ne.center),$t.setValue(z,"modelViewMatrix",ne.modelViewMatrix),$t.setValue(z,"normalMatrix",ne.normalMatrix),$t.setValue(z,"modelMatrix",ne.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const qn=he.uniformsGroups;for(let Yn=0,Tr=qn.length;Yn<Tr;Yn++){const Ki=qn[Yn];Ue.update(Ki,Xn),Ue.bind(Ki,Xn)}}return Xn}function Hs(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function is(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(D,Q,_e){const he=T.get(D);he.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),T.get(D.texture).__webglTexture=Q,T.get(D.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:_e,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Q){const _e=T.get(D);_e.__webglFramebuffer=Q,_e.__useDefaultFramebuffer=Q===void 0};const as=z.createFramebuffer();this.setRenderTarget=function(D,Q=0,_e=0){te=D,G=Q,K=_e;let he=null,ne=!1,Je=!1;if(D){const Qe=T.get(D);if(Qe.__useDefaultFramebuffer!==void 0){Oe.bindFramebuffer(z.FRAMEBUFFER,Qe.__webglFramebuffer),B.copy(D.viewport),V.copy(D.scissor),oe=D.scissorTest,Oe.viewport(B),Oe.scissor(V),Oe.setScissorTest(oe),ue=-1;return}else if(Qe.__webglFramebuffer===void 0)j.setupRenderTarget(D);else if(Qe.__hasExternalTextures)j.rebindTextures(D,T.get(D.texture).__webglTexture,T.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const pt=D.depthTexture;if(Qe.__boundDepthTexture!==pt){if(pt!==null&&T.has(pt)&&(D.width!==pt.image.width||D.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(D)}}const nt=D.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Je=!0);const rt=T.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(rt[Q])?he=rt[Q][_e]:he=rt[Q],ne=!0):D.samples>0&&j.useMultisampledRTT(D)===!1?he=T.get(D).__webglMultisampledFramebuffer:Array.isArray(rt)?he=rt[_e]:he=rt,B.copy(D.viewport),V.copy(D.scissor),oe=D.scissorTest}else B.copy(re).multiplyScalar(Me).floor(),V.copy(ve).multiplyScalar(Me).floor(),oe=ke;if(_e!==0&&(he=as),Oe.bindFramebuffer(z.FRAMEBUFFER,he)&&Oe.drawBuffers(D,he),Oe.viewport(B),Oe.scissor(V),Oe.setScissorTest(oe),ne){const Qe=T.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Qe.__webglTexture,_e)}else if(Je){const Qe=Q;for(let nt=0;nt<D.textures.length;nt++){const rt=T.get(D.textures[nt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+nt,rt.__webglTexture,_e,Qe)}}else if(D!==null&&_e!==0){const Qe=T.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qe.__webglTexture,_e)}ue=-1},this.readRenderTargetPixels=function(D,Q,_e,he,ne,Je,et,Qe=0){if(!(D&&D.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&et!==void 0&&(nt=nt[et]),nt){Oe.bindFramebuffer(z.FRAMEBUFFER,nt);try{const rt=D.textures[Qe],pt=rt.format,ot=rt.type;if(!at.textureFormatReadable(pt)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(ot)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-he&&_e>=0&&_e<=D.height-ne&&(D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Qe),z.readPixels(Q,_e,he,ne,Ne.convert(pt),Ne.convert(ot),Je))}finally{const rt=te!==null?T.get(te).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(D,Q,_e,he,ne,Je,et,Qe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&et!==void 0&&(nt=nt[et]),nt)if(Q>=0&&Q<=D.width-he&&_e>=0&&_e<=D.height-ne){Oe.bindFramebuffer(z.FRAMEBUFFER,nt);const rt=D.textures[Qe],pt=rt.format,ot=rt.type;if(!at.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,mt),z.bufferData(z.PIXEL_PACK_BUFFER,Je.byteLength,z.STREAM_READ),D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Qe),z.readPixels(Q,_e,he,ne,Ne.convert(pt),Ne.convert(ot),0);const qt=te!==null?T.get(te).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,qt);const _n=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await TT(z,_n,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,mt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Je),z.deleteBuffer(mt),z.deleteSync(_n),Je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Q=null,_e=0){const he=Math.pow(2,-_e),ne=Math.floor(D.image.width*he),Je=Math.floor(D.image.height*he),et=Q!==null?Q.x:0,Qe=Q!==null?Q.y:0;j.setTexture2D(D,0),z.copyTexSubImage2D(z.TEXTURE_2D,_e,0,0,et,Qe,ne,Je),Oe.unbindTexture()};const Gs=z.createFramebuffer(),ss=z.createFramebuffer();this.copyTextureToTexture=function(D,Q,_e=null,he=null,ne=0,Je=null){Je===null&&(ne!==0?(sc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Je=ne,ne=0):Je=0);let et,Qe,nt,rt,pt,ot,mt,qt,_n;const fn=D.isCompressedTexture?D.mipmaps[Je]:D.image;if(_e!==null)et=_e.max.x-_e.min.x,Qe=_e.max.y-_e.min.y,nt=_e.isBox3?_e.max.z-_e.min.z:1,rt=_e.min.x,pt=_e.min.y,ot=_e.isBox3?_e.min.z:0;else{const Nn=Math.pow(2,-ne);et=Math.floor(fn.width*Nn),Qe=Math.floor(fn.height*Nn),D.isDataArrayTexture?nt=fn.depth:D.isData3DTexture?nt=Math.floor(fn.depth*Nn):nt=1,rt=0,pt=0,ot=0}he!==null?(mt=he.x,qt=he.y,_n=he.z):(mt=0,qt=0,_n=0);const Kt=Ne.convert(Q.format),ut=Ne.convert(Q.type);let Yt;Q.isData3DTexture?(j.setTexture3D(Q,0),Yt=z.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(j.setTexture2DArray(Q,0),Yt=z.TEXTURE_2D_ARRAY):(j.setTexture2D(Q,0),Yt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Q.unpackAlignment);const yt=z.getParameter(z.UNPACK_ROW_LENGTH),Xn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),wa=z.getParameter(z.UNPACK_SKIP_PIXELS),Wn=z.getParameter(z.UNPACK_SKIP_ROWS),Pi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,fn.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,fn.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,rt),z.pixelStorei(z.UNPACK_SKIP_ROWS,pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ot);const $t=D.isDataArrayTexture||D.isData3DTexture,jn=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const Nn=T.get(D),qn=T.get(Q),Yn=T.get(Nn.__renderTarget),Tr=T.get(qn.__renderTarget);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,Yn.__webglFramebuffer),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Ki=0;Ki<nt;Ki++)$t&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,T.get(D).__webglTexture,ne,ot+Ki),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,T.get(Q).__webglTexture,Je,_n+Ki)),z.blitFramebuffer(rt,pt,et,Qe,mt,qt,et,Qe,z.DEPTH_BUFFER_BIT,z.NEAREST);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ne!==0||D.isRenderTargetTexture||T.has(D)){const Nn=T.get(D),qn=T.get(Q);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,Gs),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,ss);for(let Yn=0;Yn<nt;Yn++)$t?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nn.__webglTexture,ne,ot+Yn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nn.__webglTexture,ne),jn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qn.__webglTexture,Je,_n+Yn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,qn.__webglTexture,Je),ne!==0?z.blitFramebuffer(rt,pt,et,Qe,mt,qt,et,Qe,z.COLOR_BUFFER_BIT,z.NEAREST):jn?z.copyTexSubImage3D(Yt,Je,mt,qt,_n+Yn,rt,pt,et,Qe):z.copyTexSubImage2D(Yt,Je,mt,qt,rt,pt,et,Qe);Oe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else jn?D.isDataTexture||D.isData3DTexture?z.texSubImage3D(Yt,Je,mt,qt,_n,et,Qe,nt,Kt,ut,fn.data):Q.isCompressedArrayTexture?z.compressedTexSubImage3D(Yt,Je,mt,qt,_n,et,Qe,nt,Kt,fn.data):z.texSubImage3D(Yt,Je,mt,qt,_n,et,Qe,nt,Kt,ut,fn):D.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Je,mt,qt,et,Qe,Kt,ut,fn.data):D.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Je,mt,qt,fn.width,fn.height,Kt,fn.data):z.texSubImage2D(z.TEXTURE_2D,Je,mt,qt,et,Qe,Kt,ut,fn);z.pixelStorei(z.UNPACK_ROW_LENGTH,yt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Xn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wa),z.pixelStorei(z.UNPACK_SKIP_ROWS,Wn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pi),Je===0&&Q.generateMipmaps&&z.generateMipmap(Yt),Oe.unbindTexture()},this.initRenderTarget=function(D){T.get(D).__webglFramebuffer===void 0&&j.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?j.setTextureCube(D,0):D.isData3DTexture?j.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?j.setTexture2DArray(D,0):j.setTexture2D(D,0),Oe.unbindTexture()},this.resetState=function(){G=0,K=0,te=null,Oe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}}const pf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class br{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const bC=new mc(-1,1,1,-1,0,1);class TC extends yn{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const EC=new TC;class Cf{constructor(e){this._mesh=new zt(EC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rm extends br{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lo.clone(e.uniforms),this.material=new Gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cf(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class My extends br{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const s=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),l.buffers.stencil.setFunc(s.ALWAYS,u,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(s.EQUAL,1,4294967295),l.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),l.buffers.stencil.setLocked(!0)}}class AC extends br{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class TS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new Fe);this._width=a.width,this._height=a.height,t=new yi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ni}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rm(pf),this.copyPass.material.blending=ya,this.clock=new u0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let s=0,l=this.passes.length;s<l;s++){const u=this.passes[s];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),u.needsSwap){if(a){const f=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}My!==void 0&&(u instanceof My?a=!0:u instanceof AC&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(a,s),this.renderTarget2.setSize(a,s);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(a,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ES extends br{constructor(e,t,a=null,s=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=s,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ct}render(e,t,a){const s=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=s}}const wC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Sr extends br{constructor(e,t=1,a,s){super(),this.strength=t,this.radius=a,this.threshold=s,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new yi(l,u,{type:Ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new yi(l,u,{type:Ni});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new yi(l,u,{type:Ni});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),l=Math.round(l/2),u=Math.round(u/2)}const f=wC;this.highPassUniforms=Lo.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Fe(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Lo.clone(pf.uniforms),this.blendMaterial=new Gn({uniforms:this.copyUniforms,vertexShader:pf.vertexShader,fragmentShader:pf.fragmentShader,premultipliedAlpha:!0,blending:_i,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ct,this._oldClearAlpha=1,this._basic=new ci,this._fsQuad=new Cf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let a=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(a,s);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(a,s),this.renderTargetsVertical[l].setSize(a,s),this.separableBlurMaterials[l].uniforms.invSize.value=new Fe(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2)}render(e,t,a,s,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let f=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[h].uniforms.direction.value=Sr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Sr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),f=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],a=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(a*a))/a);return new Gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}Sr.BlurDirectionX=new Fe(1,0);Sr.BlurDirectionY=new Fe(0,1);function by(o,e){if(e===dT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===gm||e===By){let t=o.getIndex();if(t===null){const u=[],f=o.getAttribute("position");if(f!==void 0){for(let h=0;h<f.count;h++)u.push(h);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=t.count-2,s=[];if(e===gm)for(let u=1;u<=a;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=o.clone();return l.setIndex(s),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class AS extends Ho{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new LC(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new VC(t)}),this.register(function(t){return new kC(t)}),this.register(function(t){return new XC(t)}),this.register(function(t){return new OC(t)}),this.register(function(t){return new IC(t)}),this.register(function(t){return new zC(t)}),this.register(function(t){return new FC(t)}),this.register(function(t){return new NC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new PC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new HC(t)}),this.register(function(t){return new CC(t)}),this.register(function(t){return new WC(t)}),this.register(function(t){return new jC(t)})}load(e,t,a,s){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=$l.extractUrlBase(e);u=$l.resolveURL(d,this.path)}else u=$l.extractUrlBase(e);this.manager.itemStart(e);const f=function(d){s?s(d):console.error(d),l.manager.itemError(e),l.manager.itemEnd(e)},h=new mS(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{l.parse(d,u,function(g){t(g),l.manager.itemEnd(e)},f)}catch(g){f(g)}},a,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,s){let l;const u={},f={},h=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===wS){try{u[Ft.KHR_BINARY_GLTF]=new qC(e)}catch(v){s&&s(v);return}l=JSON.parse(u[Ft.KHR_BINARY_GLTF].content)}else l=JSON.parse(h.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new r3(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const v=this.pluginCallbacks[g](d);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[v.name]=v,u[v.name]=!0}if(l.extensionsUsed)for(let g=0;g<l.extensionsUsed.length;++g){const v=l.extensionsUsed[g],_=l.extensionsRequired||[];switch(v){case Ft.KHR_MATERIALS_UNLIT:u[v]=new DC;break;case Ft.KHR_DRACO_MESH_COMPRESSION:u[v]=new YC(l,this.dracoLoader);break;case Ft.KHR_TEXTURE_TRANSFORM:u[v]=new ZC;break;case Ft.KHR_MESH_QUANTIZATION:u[v]=new KC;break;default:_.indexOf(v)>=0&&f[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}d.setExtensions(u),d.setPlugins(f),d.parse(a,s)}parseAsync(e,t){const a=this;return new Promise(function(s,l){a.parse(e,t,s,l)})}}function RC(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CC{constructor(e){this.parser=e,this.name=Ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let a=0,s=t.length;a<s;a++){const l=t[a];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,a="light:"+e;let s=t.cache.get(a);if(s)return s;const l=t.json,h=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let d;const g=new ct(16777215);h.color!==void 0&&g.setRGB(h.color[0],h.color[1],h.color[2],ui);const v=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new Sf(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new c0(g),d.distance=v;break;case"spot":d=new vS(g),d.distance=v,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),ga(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),s=Promise.resolve(d),t.cache.add(a,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,a=this.parser,l=a.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(h){return a._getNodeRef(t.cache,f,h)})}}class DC{constructor(){this.name=Ft.KHR_MATERIALS_UNLIT}getMaterialType(){return ci}extendParams(e,t,a){const s=[];e.color=new ct(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],ui),e.opacity=u[3]}l.baseColorTexture!==void 0&&s.push(a.assignTexture(e,"map",l.baseColorTexture,Un))}return Promise.all(s)}}class NC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class LC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(a.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(f,f)}return Promise.all(l)}}class UC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class PC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class OC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;t.sheenColor.setRGB(f[0],f[1],f[2],ui)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(a.assignTexture(t,"sheenColorMap",u.sheenColorTexture,Un)),u.sheenRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class IC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(a.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class zC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(a.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(f[0],f[1],f[2],ui),Promise.all(l)}}class FC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class BC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(a.assignTexture(t,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(f[0],f[1],f[2],ui),u.specularColorTexture!==void 0&&l.push(a.assignTexture(t,"specularColorMap",u.specularColorTexture,Un)),Promise.all(l)}}class HC{constructor(e){this.parser=e,this.name=Ft.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(a.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(l)}}class GC{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:oa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(a.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class VC{constructor(e){this.parser=e,this.name=Ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,a=t.json,s=a.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const l=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,u)}}class kC{constructor(e){this.parser=e,this.name=Ft.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,a=this.parser,s=a.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let h=a.textureLoader;if(f.uri){const d=a.options.manager.getHandler(f.uri);d!==null&&(h=d)}return a.loadTextureImage(e,u.source,h)}}class XC{constructor(e){this.parser=e,this.name=Ft.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,a=this.parser,s=a.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let h=a.textureLoader;if(f.uri){const d=a.options.manager.getHandler(f.uri);d!==null&&(h=d)}return a.loadTextureImage(e,u.source,h)}}class WC{constructor(e){this.name=Ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const s=a.extensions[this.name],l=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const h=s.byteOffset||0,d=s.byteLength||0,g=s.count,v=s.byteStride,_=new Uint8Array(f,h,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,v,_,s.mode,s.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*v);return u.decodeGltfBuffer(new Uint8Array(x),g,v,_,s.mode,s.filter),x})})}else return null}}class jC{constructor(e){this.name=Ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const s=t.meshes[a.mesh];for(const d of s.primitives)if(d.mode!==Xi.TRIANGLES&&d.mode!==Xi.TRIANGLE_STRIP&&d.mode!==Xi.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,f=[],h={};for(const d in u)f.push(this.parser.getDependency("accessor",u[d]).then(g=>(h[d]=g,h[d])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(d=>{const g=d.pop(),v=g.isGroup?g.children:[g],_=d[0].count,x=[];for(const M of v){const E=new Et,S=new H,y=new Bs,L=new H(1,1,1),R=new p1(M.geometry,M.material,_);for(let w=0;w<_;w++)h.TRANSLATION&&S.fromBufferAttribute(h.TRANSLATION,w),h.ROTATION&&y.fromBufferAttribute(h.ROTATION,w),h.SCALE&&L.fromBufferAttribute(h.SCALE,w),R.setMatrixAt(w,E.compose(S,y,L));for(const w in h)if(w==="_COLOR_0"){const U=h[w];R.instanceColor=new _m(U.array,U.itemSize,U.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,h[w]);mn.prototype.copy.call(R,M),this.parser.assignFinalMaterial(R),x.push(R)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const wS="glTF",kl=12,Ty={JSON:1313821514,BIN:5130562};class qC{constructor(e){this.name=Ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-kl,l=new DataView(e,kl);let u=0;for(;u<s;){const f=l.getUint32(u,!0);u+=4;const h=l.getUint32(u,!0);if(u+=4,h===Ty.JSON){const d=new Uint8Array(e,kl+u,f);this.content=a.decode(d)}else if(h===Ty.BIN){const d=kl+u;this.body=e.slice(d,d+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const a=this.json,s=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},h={},d={};for(const g in u){const v=Cm[g]||g.toLowerCase();f[v]=u[g]}for(const g in e.attributes){const v=Cm[g]||g.toLowerCase();if(u[g]!==void 0){const _=a.accessors[e.attributes[g]],x=Ao[_.componentType];d[v]=x.name,h[v]=_.normalized===!0}}return t.getDependency("bufferView",l).then(function(g){return new Promise(function(v,_){s.decodeDracoFile(g,function(x){for(const M in x.attributes){const E=x.attributes[M],S=h[M];S!==void 0&&(E.normalized=S)}v(x)},f,d,ui,_)})})}}class ZC{constructor(){this.name=Ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KC{constructor(){this.name=Ft.KHR_MESH_QUANTIZATION}}class RS extends pc{constructor(e,t,a,s){super(e,t,a,s)}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s*3+s;for(let u=0;u!==s;u++)t[u]=a[l+u];return t}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=f*2,d=f*3,g=s-t,v=(a-t)/g,_=v*v,x=_*v,M=e*d,E=M-d,S=-2*x+3*_,y=x-_,L=1-S,R=y-_+v;for(let w=0;w!==f;w++){const U=u[E+w+f],F=u[E+w+h]*g,O=u[M+w+f],W=u[M+w]*g;l[w]=L*U+R*F+S*O+y*W}return l}}const JC=new Bs;class QC extends RS{interpolate_(e,t,a,s){const l=super.interpolate_(e,t,a,s);return JC.fromArray(l).normalize().toArray(l),l}}const Xi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ao={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ey={9728:Pn,9729:On,9984:Ly,9985:lf,9986:jl,9987:Ja},Ay={33071:_a,33648:mf,10497:Fs},bp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$C={CUBICSPLINE:void 0,LINEAR:ic,STEP:nc},Tp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function e3(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new yr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ts})),o.DefaultMaterial}function ur(o,e,t){for(const a in t.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function ga(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function t3(o,e,t){let a=!1,s=!1,l=!1;for(let d=0,g=e.length;d<g;d++){const v=e[d];if(v.POSITION!==void 0&&(a=!0),v.NORMAL!==void 0&&(s=!0),v.COLOR_0!==void 0&&(l=!0),a&&s&&l)break}if(!a&&!s&&!l)return Promise.resolve(o);const u=[],f=[],h=[];for(let d=0,g=e.length;d<g;d++){const v=e[d];if(a){const _=v.POSITION!==void 0?t.getDependency("accessor",v.POSITION):o.attributes.position;u.push(_)}if(s){const _=v.NORMAL!==void 0?t.getDependency("accessor",v.NORMAL):o.attributes.normal;f.push(_)}if(l){const _=v.COLOR_0!==void 0?t.getDependency("accessor",v.COLOR_0):o.attributes.color;h.push(_)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(h)]).then(function(d){const g=d[0],v=d[1],_=d[2];return a&&(o.morphAttributes.position=g),s&&(o.morphAttributes.normal=v),l&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function n3(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let a=0,s=t.length;a<s;a++)o.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function i3(o){let e;const t=o.extensions&&o.extensions[Ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ep(t.attributes):e=o.indices+":"+Ep(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,s=o.targets.length;a<s;a++)e+=":"+Ep(o.targets[a]);return e}function Ep(o){let e="";const t=Object.keys(o).sort();for(let a=0,s=t.length;a<s;a++)e+=t[a]+":"+o[t[a]]+";";return e}function Dm(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function a3(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const s3=new Et;class r3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,s=-1,l=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(f)===!0;const h=f.match(/Version\/(\d+)/);s=a&&h?parseInt(h[1],10):-1,l=f.indexOf("Firefox")>-1,u=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&s<17||l&&u<98?this.textureLoader=new hE(this.options.manager):this.textureLoader=new gE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mS(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const a=this,s=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const f={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:a,userData:{}};return ur(l,f,s),ga(f,s),Promise.all(a._invokeAll(function(h){return h.afterRoot&&h.afterRoot(f)})).then(function(){for(const h of f.scenes)h.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let s=0,l=t.length;s<l;s++){const u=t[s].joints;for(let f=0,h=u.length;f<h;f++)e[u[f]].isBone=!0}for(let s=0,l=e.length;s<l;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;const s=a.clone(),l=(u,f)=>{const h=this.associations.get(u);h!=null&&this.associations.set(f,h);for(const[d,g]of u.children.entries())l(g,f.children[d])};return l(a,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){const s=e(t[a]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const a=[];for(let s=0;s<t.length;s++){const l=e(t[s]);l&&a.push(l)}return a}getDependency(e,t){const a=e+":"+t;let s=this.cache.get(a);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":s=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(a,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const a=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(l,u){return a.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ft.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(l,u){a.load($l.resolveURL(t.uri,s.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){const s=t.byteLength||0,l=t.byteOffset||0;return a.slice(l,l+s)})}loadAccessor(e){const t=this,a=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=bp[s.type],f=Ao[s.componentType],h=s.normalized===!0,d=new f(s.count*u);return Promise.resolve(new Vn(d,u,h))}const l=[];return s.bufferView!==void 0?l.push(this.getDependency("bufferView",s.bufferView)):l.push(null),s.sparse!==void 0&&(l.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(l).then(function(u){const f=u[0],h=bp[s.type],d=Ao[s.componentType],g=d.BYTES_PER_ELEMENT,v=g*h,_=s.byteOffset||0,x=s.bufferView!==void 0?a.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(x&&x!==v){const y=Math.floor(_/x),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let R=t.cache.get(L);R||(E=new d(f,y*x,s.count*x/g),R=new Jy(E,x/g),t.cache.add(L,R)),S=new rc(R,h,_%x/g,M)}else f===null?E=new d(s.count*h):E=new d(f,_,s.count*h),S=new Vn(E,h,M);if(s.sparse!==void 0){const y=bp.SCALAR,L=Ao[s.sparse.indices.componentType],R=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,U=new L(u[1],R,s.sparse.count*y),F=new d(u[2],w,s.sparse.count*h);f!==null&&(S=new Vn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let O=0,W=U.length;O<W;O++){const A=U[O];if(S.setX(A,F[O*h]),h>=2&&S.setY(A,F[O*h+1]),h>=3&&S.setZ(A,F[O*h+2]),h>=4&&S.setW(A,F[O*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,a=this.options,l=t.textures[e].source,u=t.images[l];let f=this.textureLoader;if(u.uri){const h=a.manager.getHandler(u.uri);h!==null&&(f=h)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,t,a){const s=this,l=this.json,u=l.textures[e],f=l.images[t],h=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(t,a).then(function(g){g.flipY=!1,g.name=u.name||f.name||"",g.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(g.name=f.uri);const _=(l.samplers||{})[u.sampler]||{};return g.magFilter=Ey[_.magFilter]||On,g.minFilter=Ey[_.minFilter]||Ja,g.wrapS=Ay[_.wrapS]||Fs,g.wrapT=Ay[_.wrapT]||Fs,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Pn&&g.minFilter!==On,s.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){const a=this,s=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(v=>v.clone());const u=s.images[e],f=self.URL||self.webkitURL;let h=u.uri||"",d=!1;if(u.bufferView!==void 0)h=a.getDependency("bufferView",u.bufferView).then(function(v){d=!0;const _=new Blob([v],{type:u.mimeType});return h=f.createObjectURL(_),h});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(h).then(function(v){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new In(E);S.needsUpdate=!0,_(S)}),t.load($l.resolveURL(v,l.path),M,void 0,x)})}).then(function(v){return d===!0&&f.revokeObjectURL(h),ga(v,u),v.userData.mimeType=u.mimeType||a3(u.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),v});return this.sourceCache[e]=g,g}assignTexture(e,t,a,s){const l=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),l.extensions[Ft.KHR_TEXTURE_TRANSFORM]){const f=a.extensions!==void 0?a.extensions[Ft.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const h=l.associations.get(u);u=l.extensions[Ft.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),l.associations.set(u,h)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let a=e.material;const s=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+a.uuid;let h=this.cache.get(f);h||(h=new t0,Zi.prototype.copy.call(h,a),h.color.copy(a.color),h.map=a.map,h.sizeAttenuation=!1,this.cache.add(f,h)),a=h}else if(e.isLine){const f="LineBasicMaterial:"+a.uuid;let h=this.cache.get(f);h||(h=new hc,Zi.prototype.copy.call(h,a),h.color.copy(a.color),h.map=a.map,this.cache.add(f,h)),a=h}if(s||l||u){let f="ClonedMaterial:"+a.uuid+":";s&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let h=this.cache.get(f);h||(h=a.clone(),l&&(h.vertexColors=!0),u&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(f,h),this.associations.set(h,this.associations.get(a))),a=h}e.material=a}getMaterialType(){return yr}loadMaterial(e){const t=this,a=this.json,s=this.extensions,l=a.materials[e];let u;const f={},h=l.extensions||{},d=[];if(h[Ft.KHR_MATERIALS_UNLIT]){const v=s[Ft.KHR_MATERIALS_UNLIT];u=v.getMaterialType(),d.push(v.extendParams(f,l,t))}else{const v=l.pbrMetallicRoughness||{};if(f.color=new ct(1,1,1),f.opacity=1,Array.isArray(v.baseColorFactor)){const _=v.baseColorFactor;f.color.setRGB(_[0],_[1],_[2],ui),f.opacity=_[3]}v.baseColorTexture!==void 0&&d.push(t.assignTexture(f,"map",v.baseColorTexture,Un)),f.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,f.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(f,"metalnessMap",v.metallicRoughnessTexture)),d.push(t.assignTexture(f,"roughnessMap",v.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=aa);const g=l.alphaMode||Tp.OPAQUE;if(g===Tp.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,g===Tp.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==ci&&(d.push(t.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new Fe(1,1),l.normalTexture.scale!==void 0)){const v=l.normalTexture.scale;f.normalScale.set(v,v)}if(l.occlusionTexture!==void 0&&u!==ci&&(d.push(t.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==ci){const v=l.emissiveFactor;f.emissive=new ct().setRGB(v[0],v[1],v[2],ui)}return l.emissiveTexture!==void 0&&u!==ci&&d.push(t.assignTexture(f,"emissiveMap",l.emissiveTexture,Un)),Promise.all(d).then(function(){const v=new u(f);return l.name&&(v.name=l.name),ga(v,l),t.associations.set(v,{materials:e}),l.extensions&&ur(s,v,l),v})}createUniqueName(e){const t=an.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,a=this.extensions,s=this.primitiveCache;function l(f){return a[Ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(h){return wy(h,f,t)})}const u=[];for(let f=0,h=e.length;f<h;f++){const d=e[f],g=i3(d),v=s[g];if(v)u.push(v.promise);else{let _;d.extensions&&d.extensions[Ft.KHR_DRACO_MESH_COMPRESSION]?_=l(d):_=wy(new yn,d,t),s[g]={primitive:d,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,a=this.json,s=this.extensions,l=a.meshes[e],u=l.primitives,f=[];for(let h=0,d=u.length;h<d;h++){const g=u[h].material===void 0?e3(this.cache):this.getDependency("material",u[h].material);f.push(g)}return f.push(t.loadGeometries(u)),Promise.all(f).then(function(h){const d=h.slice(0,h.length-1),g=h[h.length-1],v=[];for(let x=0,M=g.length;x<M;x++){const E=g[x],S=u[x];let y;const L=d[x];if(S.mode===Xi.TRIANGLES||S.mode===Xi.TRIANGLE_STRIP||S.mode===Xi.TRIANGLE_FAN||S.mode===void 0)y=l.isSkinnedMesh===!0?new f1(E,L):new zt(E,L),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===Xi.TRIANGLE_STRIP?y.geometry=by(y.geometry,By):S.mode===Xi.TRIANGLE_FAN&&(y.geometry=by(y.geometry,gm));else if(S.mode===Xi.LINES)y=new e0(E,L);else if(S.mode===Xi.LINE_STRIP)y=new Ef(E,L);else if(S.mode===Xi.LINE_LOOP)y=new _1(E,L);else if(S.mode===Xi.POINTS)y=new tS(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&n3(y,l),y.name=t.createUniqueName(l.name||"mesh_"+e),ga(y,l),S.extensions&&ur(s,y,S),t.assignFinalMaterial(y),v.push(y)}for(let x=0,M=v.length;x<M;x++)t.associations.set(v[x],{meshes:e,primitives:x});if(v.length===1)return l.extensions&&ur(s,v[0],l),v[0];const _=new xi;l.extensions&&ur(s,_,l),t.associations.set(_,{meshes:e});for(let x=0,M=v.length;x<M;x++)_.add(v[x]);return _})}loadCamera(e){let t;const a=this.json.cameras[e],s=a[a.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new ii(vi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):a.type==="orthographic"&&(t=new mc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),ga(t,a),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],a=[];for(let s=0,l=t.joints.length;s<l;s++)a.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(s){const l=s.pop(),u=s,f=[],h=[];for(let d=0,g=u.length;d<g;d++){const v=u[d];if(v){f.push(v);const _=new Et;l!==null&&_.fromArray(l.array,d*16),h.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Qm(f,h)})}loadAnimation(e){const t=this.json,a=this,s=t.animations[e],l=s.name?s.name:"animation_"+e,u=[],f=[],h=[],d=[],g=[];for(let v=0,_=s.channels.length;v<_;v++){const x=s.channels[v],M=s.samplers[x.sampler],E=x.target,S=E.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,L=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(u.push(this.getDependency("node",S)),f.push(this.getDependency("accessor",y)),h.push(this.getDependency("accessor",L)),d.push(M),g.push(E))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(d),Promise.all(g)]).then(function(v){const _=v[0],x=v[1],M=v[2],E=v[3],S=v[4],y=[];for(let R=0,w=_.length;R<w;R++){const U=_[R],F=x[R],O=M[R],W=E[R],A=S[R];if(U===void 0)continue;U.updateMatrix&&U.updateMatrix();const N=a._createAnimationTracks(U,F,O,W,A);if(N)for(let G=0;G<N.length;G++)y.push(N[G])}const L=new sE(l,void 0,y);return ga(L,s),L})}createNodeMesh(e){const t=this.json,a=this,s=t.nodes[e];return s.mesh===void 0?null:a.getDependency("mesh",s.mesh).then(function(l){const u=a._getNodeRef(a.meshCache,s.mesh,l);return s.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let h=0,d=s.weights.length;h<d;h++)f.morphTargetInfluences[h]=s.weights[h]}),u})}loadNode(e){const t=this.json,a=this,s=t.nodes[e],l=a._loadNodeShallow(e),u=[],f=s.children||[];for(let d=0,g=f.length;d<g;d++)u.push(a.getDependency("node",f[d]));const h=s.skin===void 0?Promise.resolve(null):a.getDependency("skin",s.skin);return Promise.all([l,Promise.all(u),h]).then(function(d){const g=d[0],v=d[1],_=d[2];_!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(_,s3)});for(let x=0,M=v.length;x<M;x++)g.add(v[x]);return g})}_loadNodeShallow(e){const t=this.json,a=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],u=l.name?s.createUniqueName(l.name):"",f=[],h=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&f.push(h),l.camera!==void 0&&f.push(s.getDependency("camera",l.camera).then(function(d){return s._getNodeRef(s.cameraCache,l.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){f.push(d)}),this.nodeCache[e]=Promise.all(f).then(function(d){let g;if(l.isBone===!0?g=new eS:d.length>1?g=new xi:d.length===1?g=d[0]:g=new mn,g!==d[0])for(let v=0,_=d.length;v<_;v++)g.add(d[v]);if(l.name&&(g.userData.name=l.name,g.name=u),ga(g,l),l.extensions&&ur(a,g,l),l.matrix!==void 0){const v=new Et;v.fromArray(l.matrix),g.applyMatrix4(v)}else l.translation!==void 0&&g.position.fromArray(l.translation),l.rotation!==void 0&&g.quaternion.fromArray(l.rotation),l.scale!==void 0&&g.scale.fromArray(l.scale);if(!s.associations.has(g))s.associations.set(g,{});else if(l.mesh!==void 0&&s.meshCache.refs[l.mesh]>1){const v=s.associations.get(g);s.associations.set(g,{...v})}return s.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,a=this.json.scenes[e],s=this,l=new xi;a.name&&(l.name=s.createUniqueName(a.name)),ga(l,a),a.extensions&&ur(t,l,a);const u=a.nodes||[],f=[];for(let h=0,d=u.length;h<d;h++)f.push(s.getDependency("node",u[h]));return Promise.all(f).then(function(h){for(let g=0,v=h.length;g<v;g++)l.add(h[g]);const d=g=>{const v=new Map;for(const[_,x]of s.associations)(_ instanceof Zi||_ instanceof In)&&v.set(_,x);return g.traverse(_=>{const x=s.associations.get(_);x!=null&&v.set(_,x)}),v};return s.associations=d(l),l})}_createAnimationTracks(e,t,a,s,l){const u=[],f=e.name?e.name:e.uuid,h=[];Os[l.path]===Os.weights?e.traverse(function(_){_.morphTargetInfluences&&h.push(_.name?_.name:_.uuid)}):h.push(f);let d;switch(Os[l.path]){case Os.weights:d=Po;break;case Os.rotation:d=Oo;break;case Os.translation:case Os.scale:d=Io;break;default:switch(a.itemSize){case 1:d=Po;break;case 2:case 3:default:d=Io;break}break}const g=s.interpolation!==void 0?$C[s.interpolation]:ic,v=this._getArrayFromAccessor(a);for(let _=0,x=h.length;_<x;_++){const M=new d(h[_]+"."+Os[l.path],t.array,v,g);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const a=Dm(t.constructor),s=new Float32Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=t[l]*a;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const s=this instanceof Oo?QC:RS;return new s(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function o3(o,e,t){const a=e.attributes,s=new ra;if(a.POSITION!==void 0){const f=t.json.accessors[a.POSITION],h=f.min,d=f.max;if(h!==void 0&&d!==void 0){if(s.set(new H(h[0],h[1],h[2]),new H(d[0],d[1],d[2])),f.normalized){const g=Dm(Ao[f.componentType]);s.min.multiplyScalar(g),s.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new H,h=new H;for(let d=0,g=l.length;d<g;d++){const v=l[d];if(v.POSITION!==void 0){const _=t.json.accessors[v.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const E=Dm(Ao[_.componentType]);h.multiplyScalar(E)}f.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}o.boundingBox=s;const u=new ba;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=u}function wy(o,e,t){const a=e.attributes,s=[];function l(u,f){return t.getDependency("accessor",u).then(function(h){o.setAttribute(f,h)})}for(const u in a){const f=Cm[u]||u.toLowerCase();f in o.attributes||s.push(l(a[u],f))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});s.push(u)}return Gt.workingColorSpace!==ui&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Gt.workingColorSpace}" not supported.`),ga(o,e),o3(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?t3(o,e.targets,t):o})}const mr=[{id:0,name:"Sistema Solar",cost:0,rarityMultiplier:1,style:{planetColor1:"#1e3c72",planetColor2:"#2a5298",atmosphereColor:4491519,ringColor:8965375,hasRings:!0}},{id:1,name:"Mercurio",cost:1e4,rarityMultiplier:1.1,style:{planetColor1:"#A9A9A9",planetColor2:"#696969",atmosphereColor:8947848,ringColor:13421772,hasRings:!1}},{id:2,name:"Venus",cost:2e4,rarityMultiplier:1.2,style:{planetColor1:"#E6DBAC",planetColor2:"#D3A569",atmosphereColor:16766720,ringColor:16768426,hasRings:!1}},{id:3,name:"Tierra",cost:4e4,rarityMultiplier:1.3,style:{planetColor1:"#2244aa",planetColor2:"#228833",atmosphereColor:4491519,ringColor:13421772,hasRings:!1}},{id:4,name:"Marte",cost:1e5,rarityMultiplier:1.5,style:{planetColor1:"#C1440E",planetColor2:"#8B0000",atmosphereColor:16729344,ringColor:16755336,hasRings:!1}},{id:5,name:"Júpiter",cost:2e5,rarityMultiplier:1.8,style:{planetColor1:"#C99039",planetColor2:"#8B4513",atmosphereColor:13808780,ringColor:14527078,hasRings:!1}},{id:6,name:"Saturno",cost:5e5,rarityMultiplier:2.2,style:{planetColor1:"#F4D03F",planetColor2:"#B7950B",atmosphereColor:16243823,ringColor:12623968,hasRings:!0}},{id:7,name:"Urano",cost:1e6,rarityMultiplier:2.6,style:{planetColor1:"#73C6B6",planetColor2:"#1ABC9C",atmosphereColor:52945,ringColor:11529966,hasRings:!0}},{id:8,name:"Neptuno",cost:2e6,rarityMultiplier:3,style:{planetColor1:"#2E86C1",planetColor2:"#1B4F72",atmosphereColor:4286945,ringColor:5601279,hasRings:!1}},{id:9,name:"Nebulosa Roja",cost:5e6,rarityMultiplier:4,style:{planetColor1:"#7a1f1f",planetColor2:"#a83232",atmosphereColor:16729156,ringColor:16737894,hasRings:!1}},{id:10,name:"Cúmulo Estelar",cost:1e7,rarityMultiplier:5,style:{planetColor1:"#4a1e7a",planetColor2:"#6b2d9f",atmosphereColor:11158783,ringColor:13395711,hasRings:!0}},{id:11,name:"Galaxia Remota",cost:2e7,rarityMultiplier:6,style:{planetColor1:"#1e4a3c",planetColor2:"#2d6b5a",atmosphereColor:4521864,ringColor:6750122,hasRings:!0}},{id:12,name:"Agujero Negro",cost:5e7,rarityMultiplier:8,style:{planetColor1:"#0a0a0a",planetColor2:"#1a1a1a",atmosphereColor:4456703,ringColor:6684927,hasRings:!0}}],af=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,l3=o=>o*o*(3-2*o),ln=(o,e,t,a)=>vi.lerp(o,e,1-Math.exp(-t*a)),c3=({missionState:o,level:e,totalDuration:t,timeLeft:a,planet:s,spaceshipModel:l,nozzleFire:u})=>{const f=xt.useRef(null),h=xt.useRef(null),d=xt.useRef(null),g=xt.useRef(null),v=xt.useRef(null),_=xt.useRef([]),x=xt.useRef(null),M=xt.useRef(null),E=xt.useRef(null),S=xt.useRef({shipPos:new H(0,0,0),shipRot:new Li(0,Math.PI/2,0),shipVelocity:new H(0,0,0),cameraPos:new H(0,3,12),cameraTarget:new H(0,0,0),engineIntensity:0,prevProgress:0,missionStartTime:0,isMissionActive:!1,smoothProgress:0}),y=xt.useRef([]),L=(R,w)=>{const F=document.createElement("canvas");F.width=512,F.height=512;const O=F.getContext("2d");O.fillStyle=R,O.fillRect(0,0,512,512);for(let W=0;W<300;W++){const A=Math.random()*512,N=Math.random()*512,G=Math.random()*40+5;O.beginPath(),O.arc(A,N,G,0,Math.PI*2),O.fillStyle=w,O.globalAlpha=.2,O.fill()}return new ym(F)};return xt.useEffect(()=>{const R=new Ky;R.fog=new Tf(657952,.005);const w=new ii(50,window.innerWidth/window.innerHeight,.1,1e3);M.current=w;const U=new bS({alpha:!1,antialias:!0,powerPreference:"high-performance"});U.setSize(window.innerWidth,window.innerHeight),U.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),U.toneMapping=fc,U.toneMappingExposure=1.2,f.current&&(f.current.innerHTML="",f.current.appendChild(U.domElement));const F=new ES(R,w),O=new Sr(new Fe(window.innerWidth,window.innerHeight),1.5,.4,.85);O.threshold=.2,O.strength=1.2,O.radius=.5;const W=new TS(U);W.addPass(F),W.addPass(O);const A=new gS(4210784,0,3);R.add(A);const N=new Sf(16777215,2);N.position.set(10,10,10),R.add(N);const G=new vS(10309341,10);G.position.set(-5,5,-5),R.add(G);const K=new xi;R.add(K),h.current=K;const te=()=>{const q=new xi,ae=new Em({color:9055202}),be=new Em({color:1118481}),Ke=new oa({color:8965375,roughness:.2,metalness:.9,transmission:.9,transparent:!0}),ge=new yr({color:12632256,metalness:.8,roughness:.3}),J=new ia(1,32,32),Le=new zt(J,ae);Le.scale.set(1.8,1,1),q.add(Le);const He=new zt(new To(.98,.06,16,64),be);He.rotation.y=Math.PI/2,q.add(He);const Ge=new zt(new To(.8,.06,16,64),be);Ge.rotation.y=Math.PI/2,Ge.position.x=.8,q.add(Ge);const je=new zt(new To(.8,.06,16,64),be);je.rotation.y=Math.PI/2,je.position.x=-.8,q.add(je);const X=new zt(new To(1,.06,16,64),be);X.rotation.x=Math.PI/2,X.scale.set(1.8,1,1),q.add(X);const ze=new zt(new n0(.15,.4,4,8),Ke);ze.rotation.z=Math.PI/2,ze.rotation.x=Math.PI/6,ze.position.set(1,.4,.25),q.add(ze);const Ne=ze.clone();Ne.position.set(1,.4,-.25),q.add(Ne);const Ve=new oS;Ve.moveTo(0,0),Ve.quadraticCurveTo(.5,.5,.5,1),Ve.lineTo(-.8,.8),Ve.quadraticCurveTo(-.5,.4,-.8,0);const Ue=new zt(new r0(Ve,{depth:.1,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05}),ae);Ue.position.set(-.5,.85,-.05),q.add(Ue);const Ae=new Mr(1,.1,.8),Be=new zt(Ae,ae);Be.position.set(-.5,-.5,.8),Be.rotation.set(.5,0,.2),q.add(Be);const ht=new zt(Ae,ae);ht.position.set(-.5,-.5,-.8),ht.rotation.set(-.5,0,.2),q.add(ht);const At=new zt(new _r(.5,.7,.6,32),ge);return At.rotation.z=Math.PI/2,At.position.set(-1.8,0,0),q.add(At),q},ue=new AS,fe=`/orbital-scavengers/${l||"nave.glb"}`;console.log(`Intentando cargar modelo desde: ${fe}`),ue.load(fe,q=>{console.log(`${l||"nave.glb"} cargado con éxito!`,q);const ae=q.scene,Ke=new ra().setFromObject(ae).getSize(new H);console.log(`Tamaño de ${l||"nave.glb"}:`,Ke),ae.rotation.y=0;const ge=Math.max(Ke.x,Ke.y,Ke.z),J=3.45;if(ge>0){const Le=J/ge;ae.scale.set(Le,Le,Le),console.log(`Escalando ${l||"nave.glb"} por factor:`,Le)}else ae.scale.set(.5,.5,.5);K.clear(),K.add(ae)},q=>{console.log(q.loaded/q.total*100+"% cargado")},q=>{console.error(`Error al cargar ${l||"nave.glb"}:`,q),console.log("Usando nave por defecto (fallback).");const ae=te();K.clear(),K.add(ae)}),K.rotation.y=Math.PI/2;const B=new c0(16755200,0,10);B.position.set(-2.5,0,0),R.add(B),x.current=B;const V=new xi,oe=s?.id??0,Re=mr[oe]||mr[0],Ce=L(Re.style.planetColor1,Re.style.planetColor2),I=new yr({map:Ce,roughness:.8}),se=new zt(new ia(60,64,64),I);V.add(se);const Me=new ci({color:Re.style.atmosphereColor,transparent:!0,opacity:.2,blending:_i,side:$n}),Ie=new zt(new ia(64,64,64),Me);if(V.add(Ie),Re.style.hasRings){const q=new o0(80,110,64),ae=new ci({color:Re.style.ringColor,side:aa,transparent:!0,opacity:.4}),be=new zt(q,ae);be.rotation.x=Math.PI/2.5,V.add(be)}V.position.set(0,10,-300),R.add(V),d.current=V;const Ye=new xi,re=(q,ae,be,Ke=16777215)=>{const ge=new yn,J=new Float32Array(q*3);for(let Ge=0;Ge<q*3;Ge++)J[Ge]=(Math.random()-.5)*1500;ge.setAttribute("position",new Vn(J,3));const Le=new t0({color:Ke,size:ae,transparent:!0,opacity:.8,sizeAttenuation:!0}),He=new tS(ge,Le);return He.userData={speedFactor:be},He},ve=re(2e3,.6,.2),ke=re(1500,1,.5),Xe=re(500,2,1);Ye.add(ve,ke,Xe),R.add(Ye),g.current=Ye;const We=new xi,vt=200,St=new yn,pe=new Float32Array(vt*6);for(let q=0;q<vt;q++){let ae=(Math.random()-.5)*500,be=(Math.random()-.5)*500;Math.abs(ae)<50&&Math.abs(be)<50&&(ae+=ae>0?50:-50,be+=be>0?50:-50);const Ke=(Math.random()-.5)*1e3,ge=100+Math.random()*200;pe[q*6]=ae,pe[q*6+1]=be,pe[q*6+2]=Ke,pe[q*6+3]=ae,pe[q*6+4]=be,pe[q*6+5]=Ke+ge}St.setAttribute("position",new Vn(pe,3));const ie=new hc({color:8965375,transparent:!0,opacity:0,blending:_i}),xe=new e0(St,ie);We.add(xe);const Ee=new _r(40,40,1e3,16,1,!0),Pe=new ci({color:4456703,transparent:!0,opacity:0,side:$n,blending:_i,wireframe:!0}),z=new zt(Ee,Pe);z.rotation.x=Math.PI/2,We.add(z),R.add(We),v.current={group:We,lines:xe,tunnel:z,speed:0};const tt=[],qe=new i0(.2,80,8);qe.rotateX(Math.PI/2);const at=new ci({color:16777215,transparent:!0,opacity:1});for(let q=0;q<5;q++){const ae=new zt(qe,at.clone());ae.visible=!1,R.add(ae),tt.push({mesh:ae,active:!1,life:0,velocity:new H})}_.current=tt;const Oe=new ia(.15,6,6),P=new ia(.25,4,4),T=new ia(.08,4,4),j=(q,ae=.9)=>new ci({color:q,transparent:!0,opacity:ae,blending:_i,depthWrite:!1});y.current=[];for(let q=0;q<150;q++){const ae=q<50?"core":q<100?"outer":"spark",be=ae==="core"?Oe:ae==="outer"?P:T,Ke=ae==="core"?16777215:ae==="outer"?16755200:16733440,ge=new zt(be,j(Ke,ae==="core"?1:.8));ge.visible=!1,R.add(ge),y.current.push({mesh:ge,life:0,maxLife:1,velocity:new H,type:ae,baseScale:ae==="core"?.8:ae==="outer"?1.2:.5})}w.position.set(0,3,12),w.lookAt(0,0,0),E.current=new u0,S.current.shipPos.set(0,0,0),S.current.cameraPos.copy(w.position);let ye;const me=()=>{ye=requestAnimationFrame(me);const q=Math.min(E.current.getDelta(),.1),ae=q*60,be=window.missionActive,Ke=window.totalTime||1,ge=Date.now()*.001,J=S.current;let Le=0;if(be){J.isMissionActive||(J.isMissionActive=!0,J.missionStartTime=performance.now(),J.smoothProgress=0);const st=(performance.now()-J.missionStartTime)/1e3,bt=Math.min(st/Ke,.999);J.smoothProgress=ln(J.smoothProgress,bt,6,q),Le=J.smoothProgress}else J.isMissionActive&&(J.isMissionActive=!1,J.smoothProgress=ln(J.smoothProgress,0,3,q)),Le=J.smoothProgress;if(h.current){let Ze=0,st=0,bt=0,Ut=0,Dt=0,cn=0;const gn=4,Pt=3;if(be){if(h.current.visible=!0,Le<.35){const si=af(Le/.35);Ze=-200*si;const Ea=Math.sin(si*Math.PI)*12;st=15*si+Ea,Ut=Math.PI/2,cn=Math.cos(si*Math.PI)*.12,Dt=Math.sin(ge*1.2)*.06}else if(Le<.7)h.current.visible=!1,Ze=-200,st=15;else{h.current.visible=!0;const si=af((Le-.7)/.3),Ea=-200,Aa=15;Ze=Ea*(1-si);const Hs=Math.sin(si*Math.PI)*8;st=Aa*(1-si)+Hs,Ut=-Math.PI/2,cn=Math.cos(si*Math.PI)*.08,Dt=Math.sin(ge*1)*.04*(1-si)}J.shipPos.x=ln(J.shipPos.x,bt,gn,q),J.shipPos.y=ln(J.shipPos.y,st,gn,q),J.shipPos.z=ln(J.shipPos.z,Ze,gn,q),h.current.position.copy(J.shipPos);let ca=J.shipRot.y,Ui=Ut-ca;for(;Ui>Math.PI;)Ui-=Math.PI*2;for(;Ui<-Math.PI;)Ui+=Math.PI*2;J.shipRot.y=ln(ca,ca+Ui,Pt,q),J.shipRot.z=ln(J.shipRot.z,Dt,Pt,q),J.shipRot.x=ln(J.shipRot.x,cn,Pt,q),h.current.rotation.y=J.shipRot.y,h.current.rotation.z=J.shipRot.z,h.current.rotation.x=J.shipRot.x}else{J.shipRot.y+=.008*ae;const vn=Math.sin(ge*1.5)*.4+Math.sin(ge*2.3)*.15,kn=Math.sin(ge*1.1)*.1;J.shipPos.y=ln(J.shipPos.y,vn,3,q),J.shipPos.z=ln(J.shipPos.z,0,2,q),J.shipPos.x=ln(J.shipPos.x,kn,3,q),J.shipRot.z=ln(J.shipRot.z,Math.sin(ge*.8)*.05,2,q),J.shipRot.x=ln(J.shipRot.x,Math.sin(ge*1.2)*.03,2,q),h.current.position.copy(J.shipPos),h.current.rotation.y=J.shipRot.y,h.current.rotation.z=J.shipRot.z,h.current.rotation.x=J.shipRot.x}}if(M.current)if(be){let st,bt;if(Le<.35){const Ut=J.shipPos.z,Dt=35;st=new H(20+Math.sin(ge*.3)*2,12+Math.sin(ge*.5)*1.5,Ut+Dt),bt=new H(0,J.shipPos.y,Ut-20)}else if(Le<.55)st=new H(30+Math.sin(ge*.4)*2,20+Math.sin(ge*.6)*1.5,-170),bt=new H(0,8,-220);else if(Le<.7){const Ut=(Le-.55)/.15;st=new H(35-Ut*10,25+Ut*5,-150+Ut*50),bt=new H(0,J.shipPos.y,J.shipPos.z)}else{const Ut=J.shipPos.z,Dt=(Le-.7)/.3;st=new H(-20-Math.sin(ge*.3)*2,12+Math.sin(ge*.5)*1.5-Dt*5,Ut-35),bt=new H(0,J.shipPos.y,Ut+20)}J.cameraPos.x=ln(J.cameraPos.x,st.x,2.5,q),J.cameraPos.y=ln(J.cameraPos.y,st.y,2.5,q),J.cameraPos.z=ln(J.cameraPos.z,st.z,2.5,q),M.current.position.copy(J.cameraPos),J.cameraTarget.x=ln(J.cameraTarget.x,bt.x,2.5*1.5,q),J.cameraTarget.y=ln(J.cameraTarget.y,bt.y,2.5*1.5,q),J.cameraTarget.z=ln(J.cameraTarget.z,bt.z,2.5*1.5,q),M.current.lookAt(J.cameraTarget)}else{const st=new H(Math.sin(ge*.2)*2,3+Math.sin(ge*.3)*.5,12+Math.sin(ge*.25)*1);if(J.cameraPos.x=ln(J.cameraPos.x,st.x,2.5,q),J.cameraPos.y=ln(J.cameraPos.y,st.y,2.5,q),J.cameraPos.z=ln(J.cameraPos.z,st.z,2.5,q),M.current.position.copy(J.cameraPos),h.current){const bt=new H(J.shipPos.x,J.shipPos.y*.5,J.shipPos.z-5);J.cameraTarget.x=ln(J.cameraTarget.x,bt.x,3,q),J.cameraTarget.y=ln(J.cameraTarget.y,bt.y,3,q),J.cameraTarget.z=ln(J.cameraTarget.z,bt.z,3,q),M.current.lookAt(J.cameraTarget)}}d.current&&(d.current.rotation.y+=8e-4*ae,d.current.rotation.x=Math.sin(ge*.1)*.02);let He=.5;const Ge=Le>.42&&Le<.58,je=Le>.55&&Le<.72;if(be)if(Ge)He=.1;else if(je)He=.5;else if(Le<.35)He=8*af(Le/.35);else if(Le>.7){const Ze=(Le-.7)/.3;He=8*(1-af(Ze)*.5)}else He=2;g.current.userData.speed||(g.current.userData.speed=.1);const X=vi.lerp(g.current.userData.speed,He,.03);if(g.current.userData.speed=X,g.current&&g.current.children.forEach(Ze=>{const st=Ze.userData.speedFactor*X,bt=Ze.geometry.attributes.position.array,Ut=bt.length/3;for(let Dt=0;Dt<Ut;Dt++)bt[Dt*3+2]+=st*ae*10,bt[Dt*3+2]>200&&(bt[Dt*3+2]-=1500);Ze.geometry.attributes.position.needsUpdate=!0}),v.current){const{lines:Ze,tunnel:st}=v.current,bt=X>3&&Le<.5,Ut=bt?Math.min((X-3)*.2,.8):0;if(Ze.material.opacity=ln(Ze.material.opacity,Ut,5,q),Ze.material.opacity>.01){const Dt=Ze.geometry.attributes.position.array,cn=Dt.length/6,gn=X*20;for(let Pt=0;Pt<cn;Pt++)if(Dt[Pt*6+2]+=gn*ae,Dt[Pt*6+5]+=gn*ae,Dt[Pt*6+2]>200){const vn=Dt[Pt*6+5]-Dt[Pt*6+2],kn=-800-Math.random()*200;Dt[Pt*6+2]=kn,Dt[Pt*6+5]=kn+vn}Ze.geometry.attributes.position.needsUpdate=!0}st.material.opacity=ln(st.material.opacity,bt?.3:0,2,q),st.rotation.z+=X*.005*ae}const ze=_.current;if(Math.random()<.02*(be?2:1)){const Ze=ze.find(st=>!st.active);if(Ze){Ze.active=!0,Ze.life=1;const st=(Math.random()-.5)*400,bt=(Math.random()-.5)*200+50;Ze.mesh.position.set(st,bt,-400),Ze.velocity=new H((Math.random()-.5)*20,(Math.random()-.5)*10,200+Math.random()*100),Ze.mesh.visible=!0,Ze.mesh.material.opacity=1,Ze.mesh.lookAt(Ze.mesh.position.x+Ze.velocity.x,Ze.mesh.position.y+Ze.velocity.y,Ze.mesh.position.z+Ze.velocity.z)}}ze.forEach(Ze=>{Ze.active&&(Ze.mesh.position.add(Ze.velocity.clone().multiplyScalar(q*2)),Ze.life-=q*1.5,Ze.mesh.material.opacity=Ze.life,(Ze.life<=0||Ze.mesh.position.z>100)&&(Ze.active=!1,Ze.mesh.visible=!1))});const Ne=y.current,Ve=Le>.43&&Le<.57,Ae=Ve?.3:be?.95:.6,Be=be?2.5:1,ht=window.nozzleFireColors||["#ff6600","#ffaa00","#ffffff"],At=Ze=>parseInt(Ze.replace("#",""),16),Lt=At(ht[2]),Qt=At(ht[1]),jt=At(ht[0]),ai=Math.random()<Ae?be?3:2:0;for(let Ze=0;Ze<ai;Ze++){const st=Ne.find(bt=>bt.life<=0);if(st&&h.current){st.maxLife=.8+Math.random()*.4,st.life=st.maxLife,st.mesh.visible=!0;const bt=-1.8-Math.random()*.3,Ut=st.type==="core"?.1:st.type==="outer"?.25:.15,Dt=new H(bt,(Math.random()-.5)*Ut,(Math.random()-.5)*Ut);Dt.applyEuler(h.current.rotation),st.mesh.position.copy(h.current.position).add(Dt);const cn=(be?.6:.15)*(st.type==="core"?1.2:1),gn=st.type==="spark"?.15:.08,Pt=new H(-cn-Math.random()*.15,(Math.random()-.5)*gn,(Math.random()-.5)*gn);Pt.applyEuler(h.current.rotation),st.velocity.copy(Pt);const vn=st.type==="core"?Lt:st.type==="outer"?Qt:jt;st.mesh.material.color.setHex(vn),st.mesh.material.opacity=1}}if(Ne.forEach(Ze=>{if(Ze.life>0){const st=Ze.life/Ze.maxLife,bt=.025*ae*(Ze.type==="spark"?1.5:1);Ze.life-=bt,Ze.velocity.multiplyScalar(.98),Ze.velocity.y-=.002*ae,Ze.velocity.x+=(Math.random()-.5)*.01,Ze.velocity.y+=(Math.random()-.5)*.008,Ze.velocity.z+=(Math.random()-.5)*.008,Ze.mesh.position.add(Ze.velocity.clone().multiplyScalar(ae));const Ut=l3(st)*Be*Ze.baseScale;Ze.mesh.scale.setScalar(Ut);const Dt=st*st;Ze.mesh.material.opacity=Dt,Ze.life<=0&&(Ze.mesh.visible=!1)}}),x.current&&h.current){const Ze=Math.sin(ge*8)*.3+Math.sin(ge*13)*.15;let st=Ve?1.5:be?10+Ze*3:3+Ze;J.engineIntensity=ln(J.engineIntensity,st,4,q),x.current.intensity=J.engineIntensity;const bt=Qt,Ut=new ct(x.current.color),Dt=new ct(bt);Ut.lerp(Dt,.05),x.current.color.copy(Ut);const cn=new H(-2.5,0,0);cn.applyEuler(h.current.rotation),x.current.position.copy(h.current.position).add(cn)}W.render()};me();const Z=()=>{!M.current||!f.current||(M.current.aspect=window.innerWidth/window.innerHeight,M.current.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight),W.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",Z),()=>{window.removeEventListener("resize",Z),cancelAnimationFrame(ye),f.current&&(f.current.innerHTML=""),U.dispose()}},[e,s,l]),xt.useEffect(()=>{window.missionActive=o==="mining",window.totalTime=t,window.currentTime=a},[o,t,a]),xt.useEffect(()=>{window.nozzleFireColors=u?.colors||["#ff6600","#ffaa00","#ffffff"]},[u]),ee.jsx("div",{ref:f,id:"canvas-container",className:"absolute top-0 left-0 w-full h-full z-0 bg-black"})},u3={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

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

		}`};class f3 extends br{constructor(e=.5,t=!1){super();const a=u3;this.uniforms=Lo.clone(a.uniforms),this.material=new Gn({name:a.name,uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this._fsQuad=new Cf(this.material)}render(e,t,a,s){this.uniforms.tDiffuse.value=a.texture,this.uniforms.time.value+=s,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const sf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class h3 extends br{constructor(){super(),this.isOutputPass=!0,this.uniforms=Lo.clone(sf.uniforms),this.material=new hS({name:sf.name,uniforms:this.uniforms,vertexShader:sf.vertexShader,fragmentShader:sf.fragmentShader}),this._fsQuad=new Cf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Gt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Um?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pm?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Om?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zm?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fm?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Im&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const d3={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Fe(1/1024,1/512)}},vertexShader:`

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

		}`},p3={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`},m3=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,g3=o=>1-Math.pow(1-o,4),rf=o=>o*o*(3-2*o),fr=(o,e,t,a)=>vi.lerp(o,e,1-Math.exp(-t*a)),v3=({missionState:o,timeLeft:e,totalDuration:t,planet:a})=>{const s=xt.useRef(null),l=xt.useRef(null),u=xt.useRef(null),f=xt.useRef(null),h=xt.useRef([]),d=xt.useRef(null),g=xt.useRef(null);xt.useRef(null);const v=xt.useRef(null),_=xt.useRef(null),x=xt.useRef({shipPos:new H(0,50,0),shipRot:new Li(0,0,0),cameraPos:new H(0,5,20),cameraTarget:new H(0,5,0),cameraFov:60,engineIntensity:0,shakeIntensity:0,missionStartTime:0,isMissionActive:!1,smoothProgress:0,opacity:0,shockwaveTime:-1}),M=(S,y)=>{const R=document.createElement("canvas");R.width=512,R.height=512;const w=R.getContext("2d");w.fillStyle=S,w.fillRect(0,0,512,512);for(let U=0;U<400;U++){const F=Math.random()*512,O=Math.random()*512,W=Math.random()*20+2;w.beginPath(),w.arc(F,O,W,0,Math.PI*2),w.fillStyle=y,w.globalAlpha=.3,w.fill()}return new ym(R)},E=S=>{const L=document.createElement("canvas");L.width=256,L.height=256;const R=L.getContext("2d"),w=R.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2),U=new ct(S),F=W=>`rgba(${Math.floor(U.r*255)}, ${Math.floor(U.g*255)}, ${Math.floor(U.b*255)}, ${W})`;w.addColorStop(0,F(1)),w.addColorStop(.2,F(.8)),w.addColorStop(.5,F(.25)),w.addColorStop(1,F(0)),R.fillStyle=w,R.fillRect(0,0,256,256);const O=new ym(L);return O.colorSpace=Un,O};return xt.useEffect(()=>{const S=new Ky,y=new ct(a?.style?.atmosphereColor||4491519),L=a?.style?.planetColor1||"#1e3c72",R=a?.style?.planetColor2||"#2a5298";S.fog=new Tf(y,.018),S.background=y;const w=new ii(60,window.innerWidth/window.innerHeight,.1,1e3);u.current=w;const U=new bS({alpha:!0,antialias:!0,powerPreference:"high-performance"});U.setSize(window.innerWidth,window.innerHeight),U.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),U.toneMapping=fc,U.toneMappingExposure=1.1,U.outputColorSpace=Un,U.useLegacyLights=!1,U.shadowMap.enabled=!0,U.shadowMap.type=Cy,s.current&&(s.current.innerHTML="",s.current.appendChild(U.domElement));const F=new ES(S,w),O=new Sr(new Fe(window.innerWidth,window.innerHeight),.9,.45,.85);O.threshold=.55,O.strength=.7,O.radius=.55;const W=new f3(.28,.18,648,!1),A=new Rm(p3);A.uniforms.offset.value=.88,A.uniforms.darkness.value=1.15;const N=new Rm(d3);N.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight);const G=new h3,K=new TS(U);K.addPass(F),K.addPass(O),K.addPass(W),K.addPass(A),K.addPass(N),K.addPass(G);const te=new gS(y,657936,.9);S.add(te);const ue=new Sf(16777215,2.2);ue.position.set(70,120,35),ue.castShadow=!0,ue.shadow.mapSize.set(1024,1024),ue.shadow.camera.near=10,ue.shadow.camera.far=300,ue.shadow.camera.left=-80,ue.shadow.camera.right=80,ue.shadow.camera.top=80,ue.shadow.camera.bottom=-80,S.add(ue);const fe=new Sf(y.clone().lerp(new ct(16777215),.25),1.35);fe.position.set(-60,45,-80),S.add(fe);const B=new ia(800,48,48),V=new Gn({uniforms:{topColor:{value:y.clone().multiplyScalar(1.1)},bottomColor:{value:new ct(329226)},sunDir:{value:ue.position.clone().normalize()},time:{value:0}},vertexShader:`
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
      `,side:$n,depthWrite:!1}),oe=new zt(B,V);oe.renderOrder=-10,S.add(oe),g.current=oe;const Re=new dc(200,200,64,64),Ce=Re.attributes.position;for(let me=0;me<Ce.count;me++){const Z=Ce.getX(me),q=Ce.getY(me),ae=Math.sin(Z*.08)*Math.cos(q*.08),be=Math.sin(Z*.22+1.2)*Math.cos(q*.18-.7)*.45,Ke=Math.sin(Z*.5+2)*Math.cos(q*.45-1.1)*.12,ge=ae*2.2+be*1.6+Ke*1.1+(Math.random()-.5)*.25;Ce.setZ(me,ge)}Re.computeVertexNormals();const I=M(L,R);I.wrapS=Fs,I.wrapT=Fs,I.repeat.set(10,10),I.anisotropy=U.capabilities.getMaxAnisotropy?.()??1;const se=new yr({map:I,roughness:.95,metalness:.05,color:16777215}),Me=new zt(Re,se);Me.rotation.x=-Math.PI/2,Me.receiveShadow=!0,S.add(Me);const Ie=new wE(200,50,16777215,16777215);Ie.position.y=.1,Ie.material.transparent=!0,Ie.material.opacity=.05,S.add(Ie);const Ye=new xi;S.add(Ye),l.current=Ye;const re=()=>{const me=new xi,Z=new Em({color:9055202}),q=new yr({color:12632256,metalness:.8,roughness:.3}),ae=new zt(new ia(1,32,32),Z);ae.scale.set(1.8,1,1),me.add(ae);const be=new zt(new _r(.5,.7,.6,32),q);be.rotation.z=Math.PI/2,be.position.set(-1.8,0,0),me.add(be);const Ke=new Mr(1,.1,1.5),ge=new zt(Ke,Z);return ge.position.set(-.5,0,0),me.add(ge),me};new AS().load("/orbital-scavengers/nave.glb",me=>{const Z=me.scene;Z.rotation.y=0;const ae=new ra().setFromObject(Z).getSize(new H),be=Math.max(ae.x,ae.y,ae.z),Ke=3.45;if(be>0){const ge=Ke/be;Z.scale.set(ge,ge,ge)}Ye.add(Z)},void 0,()=>{Ye.add(re())});const Xe=new c0(16755200,0,15);S.add(Xe);const We=E(16738816),vt=new Qy({map:We,color:16777215,transparent:!0,opacity:0,blending:_i,depthWrite:!1}),St=new c1(vt);St.scale.set(10,10,1),St.position.set(2.2,.1,0),St.visible=!0,Ye.add(St),_.current=St;const pe=80,ie=new Float32Array(pe*3),xe=new yn;xe.setAttribute("position",new Vn(ie,3));const Ee=new hc({color:16742912,transparent:!0,opacity:0,blending:_i,depthWrite:!1}),Pe=new Ef(xe,Ee);Pe.frustumCulled=!1,Pe.visible=!0,S.add(Pe),v.current={line:Pe,max:pe,positions:ie};const z=new _r(.1,.1,1,8);z.translate(0,.5,0);const tt=new ci({color:65280,transparent:!0,opacity:.8,blending:_i}),qe=new zt(z,tt);qe.rotation.x=Math.PI,qe.visible=!1,Ye.add(qe),d.current=qe,h.current=[];const at=new ia(.12,6,6),Oe=new ci({color:16777215,transparent:!0,opacity:.8,blending:_i,depthWrite:!1});for(let me=0;me<260;me++){const Z=new zt(at,Oe.clone());Z.visible=!1,S.add(Z),h.current.push({mesh:Z,life:0,maxLife:1,velocity:new H,type:"thrust",baseScale:1})}f.current=new u0,x.current.shipPos.set(0,100,0);let P;const T=()=>{P=requestAnimationFrame(T);const me=Math.min(f.current.getDelta(),.1),Z=x.current,q=window.totalTime||15,ae=performance.now()*.001;if(o==="mining"){Z.isMissionActive||(Z.isMissionActive=!0,Z.missionStartTime=performance.now(),Z.smoothProgress=0,Z.shockwaveTime=-1);const X=(performance.now()-Z.missionStartTime)/1e3,ze=Math.min(X/q,1);Z.smoothProgress=fr(Z.smoothProgress,ze,6,me)}else Z.isMissionActive=!1,Z.smoothProgress=0,Z.shockwaveTime=-1;const be=Z.smoothProgress,Ke=.22,ge=.86,J=Ke+.05,Le=ge-.07;let He=0;if(o==="mining"&&(be<Ke||be>ge?He=0:be<J?He=rf((be-Ke)/(J-Ke)):be>Le?He=1-rf((be-Le)/(ge-Le)):He=1),Z.opacity=fr(Z.opacity,He,4.5,me),U.domElement.style.opacity=Z.opacity,g.current&&(g.current.material.uniforms.time.value=ae,g.current.position.copy(u.current.position)),l.current){let je=new H(0,0,0),X=new Li(0,0,0),ze=new H(0,6,24),Ne=0,Ve=60;const Ue=.22,Ae=.42,Be=.62,ht=.84,At=Math.PI/2;if(be<Ae){const Qt=vi.clamp((be-Ue)/(Ae-Ue),0,1),jt=m3(Qt),ai=new Sm([new H(2,130,-15),new H(1,80,-8),new H(.3,30,-2),new H(0,3,0)]),Ze=ai.getPoint(jt),st=ai.getTangent(jt).normalize();je.copy(Ze);const bt=Math.atan2(st.x,st.z),Ut=Math.sin(ae*1.2)*.03;X.set(0,bt,At+Ut),Ve=vi.lerp(70,58,jt);const Dt=new H(18,8,22);ze.copy(Dt),ze.lerp(new H(12,5,16),jt),Ne=(1-jt)*.06;const cn=rf(1-Math.abs(jt-.35)/.35);if(_.current&&(_.current.material.opacity=vi.lerp(_.current.material.opacity,cn*.85,.12),_.current.scale.setScalar(2+cn*24),_.current.position.set(2.2,.1,0)),jt>.75){const gn=(jt-.75)/.25;Math.random()<.3*gn&&j(new H(0,0,0),"dust")}Math.random()<.65&&j(l.current.position,"heat"),Math.random()<.3&&j(l.current.position,"thrust"),d.current&&(d.current.visible=!1)}else if(be<Be){je.set(Math.sin(ae*2.3)*.06,1.85+Math.sin(ae*1.7)*.03,Math.cos(ae*1.9)*.06),X.set(Math.sin(ae*2.1)*.015,Math.sin(ae*.7)*.05,At+Math.sin(ae*1.3)*.02);const Qt=(be-Ae)/(Be-Ae),jt=Qt*Math.PI*1.1+ae*.25,ai=11.5+Math.sin(Qt*Math.PI)*2;if(ze.set(Math.sin(jt)*ai,4.5,Math.cos(jt)*ai),Ne=.018,Ve=56,d.current&&(d.current.visible=!0,d.current.scale.set(1,4.5,1),d.current.material.opacity=.6),Math.random()<.15){const Ze=new H((Math.random()-.5)*.3,.02,(Math.random()-.5)*.3);j(Ze,"spark")}Math.random()<.06&&j(new H(0,0,0),"debris"),Math.random()<.08&&j(new H(0,0,0),"microdust"),Xe&&(Xe.intensity=1+Math.random()*.5,Xe.color.setHex(3538820)),_.current&&(_.current.material.opacity=vi.lerp(_.current.material.opacity,0,.1),_.current.scale.setScalar(1))}else{d.current&&(d.current.visible=!1);const Qt=vi.clamp((be-Be)/(ht-Be),0,1),jt=g3(Qt),ai=new Sm([new H(0,1.9,0),new H(.5,18,2),new H(1.5,55,6),new H(3,140,12)]),Ze=ai.getPoint(jt),st=ai.getTangent(jt).normalize();je.copy(Ze);const bt=Math.atan2(st.x,st.z),Ut=Math.sin(ae*1)*.02;X.set(0,bt,At+Ut),Ve=vi.lerp(56,62,rf(Qt)),ze.set(12,2+jt*6,14),Ne=.04*jt;const Dt=Math.floor(2+jt*5);for(let cn=0;cn<Dt;cn++)j(l.current.position,"thrust");Qt<.16&&Math.random()<.85&&j(new H(0,0,0),"dust"),Xe&&(Xe.intensity=6+Math.random()*8,Xe.color.setHex(16755200)),_.current&&(_.current.material.opacity=vi.lerp(_.current.material.opacity,.05,.08))}Z.shipPos.lerp(je,.12),l.current.position.copy(Z.shipPos),Z.shipRot.x=fr(Z.shipRot.x,X.x,5,me),Z.shipRot.y=fr(Z.shipRot.y,X.y,5,me),Z.shipRot.z=fr(Z.shipRot.z,X.z,5,me),l.current.rotation.copy(Z.shipRot),Z.shakeIntensity=fr(Z.shakeIntensity,Ne,5,me);const Lt=new H((Math.random()-.5)*Z.shakeIntensity,(Math.random()-.5)*Z.shakeIntensity,(Math.random()-.5)*Z.shakeIntensity);Z.cameraPos.lerp(ze,.05),u.current.position.copy(Z.cameraPos).add(Lt),u.current.lookAt(Z.shipPos),Z.cameraFov=fr(Z.cameraFov,Ve,3,me),u.current.fov=Z.cameraFov,u.current.updateProjectionMatrix(),Xe&&(Xe.position.copy(Z.shipPos),Xe.position.y-=1,o==="mining"&&be>.22&&be<.84||(Xe.intensity=0))}if(v.current?.line&&l.current){const{positions:je,max:X}=v.current;je.copyWithin(3,0,(X-1)*3);const ze=new H(-2.15,0,0);ze.applyEuler(l.current.rotation);const Ne=l.current.position.clone().add(ze);je[0]=Ne.x,je[1]=Ne.y,je[2]=Ne.z,v.current.line.geometry.attributes.position.needsUpdate=!0;const Ve=o==="mining"&&(be<.45||be>.62)?1:0;v.current.line.material.opacity=vi.lerp(v.current.line.material.opacity,Ve?.25+Math.sin(ae*8)*.05:0,.08)}h.current.forEach(je=>{if(je.life>0){je.life-=me;const X=vi.clamp(je.life/je.maxLife,0,1),ze=je.type==="dust"?.9:je.type==="debris"?.94:.92;je.velocity.multiplyScalar(ze),je.type==="debris"&&(je.velocity.y-=.18*me),je.type==="dust"&&(je.velocity.y-=.08*me),je.mesh.position.addScaledVector(je.velocity,me*7.5);let Ne=1;je.type==="spark"?Ne=je.baseScale*(.35+X*.9):je.type==="heat"?Ne=je.baseScale*(.55+(1-X)*1.2):je.type==="dust"?Ne=je.baseScale*(.85+(1-X)*1.4):je.type==="debris"?Ne=je.baseScale*(.65+X*.4):Ne=je.baseScale*(.5+(1-X)*1.1),je.mesh.scale.setScalar(Ne);const Ve=je.type==="dust"?X*.55:X*X;je.mesh.material.opacity=Ve,je.life<=0&&(je.mesh.visible=!1)}});const Ge=o==="mining"&&be<.45?1.15:o==="mining"&&be<.62?.65:.9;O.strength=vi.lerp(O.strength,Ge,.06),K.render()};T();function j(me,Z="thrust"){const q=h.current.find(ae=>ae.life<=0);if(q)if(q.mesh.visible=!0,q.type=Z,Z==="thrust")q.maxLife=.75+Math.random()*.35,q.life=q.maxLife,q.baseScale=1,q.mesh.position.copy(me).add(new H(-.4,-.7,0)),q.mesh.material.blending=_i,q.mesh.material.color.setHex(16755285),q.velocity.set((Math.random()-.5)*.8,-2.2-Math.random()*.8,(Math.random()-.5)*.8);else if(Z==="heat")q.maxLife=.55+Math.random()*.35,q.life=q.maxLife,q.baseScale=.9+Math.random()*.9,q.mesh.position.copy(me).add(new H((Math.random()-.5)*.6,(Math.random()-.5)*.4,(Math.random()-.5)*.6)),q.mesh.material.blending=_i,q.mesh.material.color.setHex(16726784),q.velocity.set((Math.random()-.5)*.5,.6+Math.random()*1.4,(Math.random()-.5)*.5);else if(Z==="spark")q.maxLife=.5+Math.random()*.3,q.life=q.maxLife,q.baseScale=.18,q.mesh.position.copy(me),q.mesh.material.blending=_i,q.mesh.material.color.setHex(5111697),q.velocity.set((Math.random()-.5)*1.2,Math.random()*2.5+.8,(Math.random()-.5)*1.2);else if(Z==="debris")q.maxLife=1.8+Math.random()*.6,q.life=q.maxLife,q.baseScale=.25+Math.random()*.25,q.mesh.position.copy(me).add(new H((Math.random()-.5)*.3,.05,(Math.random()-.5)*.3)),q.mesh.material.blending=$a,q.mesh.material.color.setHex(5921370),q.velocity.set((Math.random()-.5)*.8,Math.random()*1.5+.5,(Math.random()-.5)*.8);else if(Z==="microdust"){const ae=Math.random()*Math.PI*2,be=.15+Math.random()*.2;q.mesh.position.set(Math.cos(ae)*be,.05,Math.sin(ae)*be),q.maxLife=1.2+Math.random()*.5,q.life=q.maxLife,q.baseScale=.08+Math.random()*.06,q.mesh.material.blending=$a,q.mesh.material.color.setHex(9079434),q.mesh.material.opacity=.35,q.velocity.set(Math.cos(ae)*.2,.3+Math.random()*.25,Math.sin(ae)*.2)}else{const ae=Math.random()*Math.PI*2,be=.3+Math.random()*.3;q.mesh.position.set(Math.cos(ae)*be,.08,Math.sin(ae)*be),q.maxLife=1+Math.random()*.5,q.life=q.maxLife,q.baseScale=.15+Math.random()*.15,q.mesh.material.blending=$a,q.mesh.material.color.setHex(10132122),q.mesh.material.opacity=.3,q.velocity.set(Math.cos(ae)*.6,.2+Math.random()*.15,Math.sin(ae)*.6)}}const ye=()=>{!u.current||!s.current||(u.current.aspect=window.innerWidth/window.innerHeight,u.current.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight),K.setSize(window.innerWidth,window.innerHeight),N.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight))};return window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),cancelAnimationFrame(P),s.current&&(s.current.innerHTML="");try{h.current.forEach(me=>{me?.mesh?.material?.dispose&&me.mesh.material.dispose()})}catch{}at.dispose(),Oe.dispose(),Re.dispose(),se.dispose(),I.dispose(),z.dispose(),tt.dispose(),We.dispose(),vt.dispose(),xe.dispose(),Ee.dispose(),B.dispose(),V.dispose(),U.dispose()}},[a,o]),xt.useEffect(()=>{window.missionActive=o==="mining",window.totalTime=t,window.currentTime=e},[o,t,e]),ee.jsx("div",{ref:s,className:"absolute top-0 left-0 w-full h-full z-1",style:{pointerEvents:"none",transition:"opacity 0.5s"}})},_3=({item:o,onClose:e})=>ee.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-[pop_0.4s_ease-out] p-4",onClick:e,children:ee.jsxs("div",{className:`relative bg-gray-900/90 border-2 ${o.border} rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]`,onClick:t=>t.stopPropagation(),children:[ee.jsx("div",{className:`absolute inset-0 rounded-3xl opacity-20 bg-gradient-to-tr from-transparent via-${o.style.split("-")[1]}-500 to-transparent animate-pulse pointer-events-none`}),ee.jsx("h2",{className:"text-2xl font-bold text-white mb-8 font-orbitron tracking-[0.2em] border-b border-white/10 pb-4",children:"RECOMPENSA"}),ee.jsx("div",{className:"text-9xl mb-6 animate-bounce drop-shadow-2xl",children:o.icon}),ee.jsxs("div",{className:"space-y-2 mb-8",children:[ee.jsx("h3",{className:`text-3xl font-bold font-orbitron ${o.style} drop-shadow-md`,children:o.name}),ee.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border ${o.border} ${o.style}`,children:o.rarity})]}),ee.jsxs("div",{className:"bg-black/50 rounded-2xl p-4 mb-8 border border-white/5",children:[ee.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-widest mb-1",children:"Valor Estimado"}),ee.jsxs("p",{className:"text-4xl font-mono font-bold text-yellow-400 drop-shadow-lg",children:["+",o.val.toLocaleString()," ₡"]})]}),ee.jsx("button",{onClick:e,className:"w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold text-lg tracking-widest font-orbitron shadow-xl active:scale-95 transition-all",children:"ACEPTAR"})]})}),ma={Bolt:({size:o=24,className:e})=>ee.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:ee.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),Home:({size:o=24,className:e})=>ee.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ee.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),ee.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Bag:({size:o=24,className:e})=>ee.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ee.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),ee.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),ee.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Trash:({size:o=16,className:e})=>ee.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ee.jsx("polyline",{points:"3 6 5 6 21 6"}),ee.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Coins:({size:o=16,className:e})=>ee.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ee.jsx("circle",{cx:"8",cy:"8",r:"6"}),ee.jsx("path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"})]}),Lock:({size:o=16,className:e})=>ee.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ee.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),ee.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),ArrowLeft:({size:o=24,className:e})=>ee.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:ee.jsx("polyline",{points:"15 18 9 12 15 6"})}),ArrowRight:({size:o=24,className:e})=>ee.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:ee.jsx("polyline",{points:"9 18 15 12 9 6"})})},Ry=[{name:"Tuerca Oxidada",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔩",chance:.2},{name:"Cable Pelado",val:8,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔌",chance:.18},{name:"Lata Espacial",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥫",chance:.18},{name:"Fragmento Metálico",val:4,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"⚙️",chance:.16},{name:"Residuo Plástico",val:2,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🧩",chance:.15},{name:"Cristal Roto",val:6,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"💎",chance:.14},{name:"Tornillo Suelto",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔧",chance:.13},{name:"Chapa Abollada",val:7,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"📦",chance:.12},{name:"Restos de Comida",val:1,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🦴",chance:.15},{name:"Papel Aluminio",val:2,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🗞️",chance:.14},{name:"Vidrio Opaco",val:4,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥃",chance:.13},{name:"Muelle Viejo",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"➰",chance:.12},{name:"Tubo de Cobre",val:7,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🎺",chance:.11},{name:"Placa de Acero",val:25,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🛡️",chance:.12},{name:"Batería de Iones",val:40,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔋",chance:.1},{name:"Sensor Óptico",val:35,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"👁️",chance:.09},{name:"Conductor de Energía",val:50,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚡",chance:.08},{name:"Aleación Refinada",val:60,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔬",chance:.07},{name:"Núcleo de Plasma",val:80,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚛️",chance:.06},{name:"Circuito Impreso",val:30,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"📟",chance:.08},{name:"Lente de Cámara",val:45,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"📷",chance:.07},{name:"Bobina Tesla",val:55,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🌀",chance:.07},{name:"Engranaje Titanio",val:65,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚙️",chance:.06},{name:"Fibra Óptica",val:70,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🧵",chance:.06},{name:"Chip Cuántico",val:150,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💾",chance:.07},{name:"Motor de Iones",val:200,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🛸",chance:.06},{name:"Cristal de Energía",val:300,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💠",chance:.05},{name:"Dispositivo Holográfico",val:400,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"📡",chance:.04},{name:"Procesador Cuántico",val:180,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💻",chance:.05},{name:"Celda de Combustible",val:250,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"⛽",chance:.05},{name:"Mapa Estelar",val:320,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🗺️",chance:.04},{name:"Dron Espía",val:350,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🚁",chance:.04},{name:"Armadura Nanotech",val:380,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🥋",chance:.04},{name:"Motor WARP",val:750,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🚀",chance:.04},{name:"Núcleo Estelar",val:1200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"⭐",chance:.03},{name:"Artefacto Antiguo",val:2e3,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🏺",chance:.025},{name:"Generador de Campo",val:3500,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🌀",chance:.02},{name:"Generador de Escudos",val:900,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🛡️",chance:.03},{name:"Motor de Curvatura",val:1500,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🌌",chance:.025},{name:"Inteligencia Artificial",val:2200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🧠",chance:.02},{name:"Cañón de Plasma",val:2800,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🔫",chance:.02},{name:"Cristal Kyber",val:3200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🔮",chance:.02},{name:"Antimateria",val:5e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚛️",chance:.015},{name:"Huevo Dragón",val:8e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🥚",chance:.01},{name:"Fragmento de Agujero Negro",val:15e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🕳️",chance:.008},{name:"Esencia Cósmica",val:25e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"✨",chance:.005},{name:"Corona Galáctica",val:6e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"👑",chance:.01},{name:"Llave Maestra Alienígena",val:9e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🗝️",chance:.009},{name:"Semilla de Vida",val:12e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🌱",chance:.008},{name:"Esfera de Dyson (Plano)",val:18e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"☀️",chance:.007},{name:"Materia Oscura Concentrada",val:22e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚫",chance:.006},{name:"Partícula Dios",val:5e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌌",chance:.002},{name:"Corazón de Estrella",val:1e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"❤️",chance:.001},{name:"Fragmento del Big Bang",val:25e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"💥",chance:5e-4},{name:"Huevo de Fénix Cósmico",val:6e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🔥",chance:.0015},{name:"Tridente de Poseidón Espacial",val:8e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🔱",chance:.0012},{name:"Gema del Infinito",val:15e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"💎",chance:8e-4},{name:"Orbe de la Creación",val:2e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌐",chance:6e-4},{name:"Reloj del Tiempo Absoluto",val:3e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"⏳",chance:4e-4}],Xl=[{id:0,name:"Nave Estándar",model:"nave.glb",cost:0,rarity:"Común"},{id:1,name:"Nave Básica",model:"n_basica.glb",cost:1e3,rarity:"Poco Común"},{id:2,name:"Nave Graffiti",model:"n_graffiti.glb",cost:2e3,rarity:"Rara"}],Ap=[{id:0,name:"Fuego Estándar",cost:0,colors:["#ff6600","#ffaa00","#ffffff"],description:"Fuego naranja clásico"},{id:1,name:"Plasma Azul",cost:1e3,colors:["#0066ff","#00ccff","#ffffff"],description:"Plasma frío y brillante"},{id:2,name:"Infierno Púrpura",cost:2e3,colors:["#9900ff","#ff00ff","#ffffff"],description:"Llamas de energía oscura"}];function x3(){const[o,e]=xt.useState("home"),[t,a]=xt.useState(()=>parseInt(localStorage.getItem("os_ultra_credits"))||500),[s,l]=xt.useState(()=>parseInt(localStorage.getItem("os_ultra_level"))||1),[u,f]=xt.useState(()=>JSON.parse(localStorage.getItem("os_ultra_inv"))||[]),[h,d]=xt.useState("idle"),[g,v]=xt.useState(0),[_,x]=xt.useState(0),[M,E]=xt.useState(null),[S,y]=xt.useState("planet"),[L,R]=xt.useState(()=>{const pe=localStorage.getItem("os_ultra_planet");return pe?parseInt(pe):0}),[w,U]=xt.useState(()=>{const pe=localStorage.getItem("os_ultra_unlocked_planets");return pe?JSON.parse(pe):[0]}),[F,O]=xt.useState(()=>{const pe=localStorage.getItem("os_ultra_spaceship");return pe?parseInt(pe):0}),[W,A]=xt.useState(()=>{const pe=localStorage.getItem("os_ultra_unlocked_spaceships");return pe?JSON.parse(pe):[0]}),[N,G]=xt.useState(()=>{const pe=localStorage.getItem("os_ultra_nozzle");return pe?parseInt(pe):0}),[K,te]=xt.useState(()=>{const pe=localStorage.getItem("os_ultra_unlocked_nozzles");return pe?JSON.parse(pe):[0]}),[ue,fe]=xt.useState(!1);xt.useEffect(()=>{localStorage.setItem("os_ultra_credits",t),localStorage.setItem("os_ultra_level",s),localStorage.setItem("os_ultra_inv",JSON.stringify(u)),localStorage.setItem("os_ultra_planet",L),localStorage.setItem("os_ultra_unlocked_planets",JSON.stringify(w)),localStorage.setItem("os_ultra_spaceship",F),localStorage.setItem("os_ultra_unlocked_spaceships",JSON.stringify(W)),localStorage.setItem("os_ultra_nozzle",N),localStorage.setItem("os_ultra_unlocked_nozzles",JSON.stringify(K))},[t,s,u,L,w,F,W,N,K]),xt.useEffect(()=>{let pe;return h==="mining"&&g>0?pe=setInterval(()=>v(ie=>ie-1),1e3):h==="mining"&&g===0&&(d("ready"),navigator.vibrate&&navigator.vibrate(200)),()=>clearInterval(pe)},[h,g]);const B=()=>{const pe=Math.max(10,15-Math.floor(s/10));x(pe),v(pe),d("mining")},V=()=>{const pe=Math.random();let ie=Ry[0];const xe=s*.1,Pe=mr[L]?.rarityMultiplier||1,z=Ry.map(Oe=>{let P=Oe.chance;return Oe.rarity==="Común"&&(P/=1+xe,P/=Pe),Oe.rarity==="Poco Común"&&(P*=1+xe*.3,P*=Pe*.5),(Oe.rarity==="Raro"||Oe.rarity==="Épico")&&(P*=1+xe*.5,P*=Pe),Oe.rarity==="Legendario"&&(P*=1+xe,P*=Pe*1.5),Oe.rarity==="Mítico"&&(P*=1+xe*1.5,P*=Pe*2),{...Oe,weight:P}});let tt=z.reduce((Oe,P)=>Oe+P.weight,0),qe=pe*tt;for(let Oe of z)if(qe-=Oe.weight,qe<=0){ie=Oe;break}const at={...ie,id:Date.now()};f(Oe=>[...Oe,at]),E(at),d("idle")},oe=pe=>{const ie=mr[pe];!ie||w.includes(pe)||t>=ie.cost&&(a(xe=>xe-ie.cost),U(xe=>[...xe,pe]),R(pe))},Re=pe=>{const ie=Xl[pe];!ie||W.includes(pe)||t>=ie.cost&&(a(xe=>xe-ie.cost),A(xe=>[...xe,pe]),O(pe))},Ce=pe=>{const ie=Ap[pe];!ie||K.includes(pe)||t>=ie.cost&&(a(xe=>xe-ie.cost),te(xe=>[...xe,pe]),G(pe))},I=pe=>{K.includes(pe)&&G(pe)},se=pe=>{h!=="mining"&&(S==="planet"?R(ie=>{const xe=ie+pe;return xe<0?mr.length-1:xe>=mr.length?0:xe}):O(ie=>{const xe=ie+pe;return xe<0?Xl.length-1:xe>=Xl.length?0:xe}))},Me=()=>{if(u.length===0)return;const pe=u.reduce((ie,xe)=>ie+xe.val,0);a(ie=>ie+pe),f([])},Ie=(pe,ie=!1)=>{if(ie){const xe=u.filter(z=>z.name===pe.name),Ee=u.filter(z=>z.name!==pe.name),Pe=xe.reduce((z,tt)=>z+tt.val,0);a(z=>z+Pe),f(Ee)}else{const xe=u.findIndex(Ee=>Ee.name===pe.name);if(xe>-1){const Ee=[...u];Ee.splice(xe,1),a(Pe=>Pe+pe.val),f(Ee)}}},Ye=()=>{const pe=s*250;t>=pe&&(a(ie=>ie-pe),l(ie=>ie+1))},re=xt.useMemo(()=>{const pe={};return u.forEach(ie=>{pe[ie.name]||(pe[ie.name]={...ie,count:0,total:0}),pe[ie.name].count++,pe[ie.name].total+=ie.val}),Object.values(pe).sort((ie,xe)=>xe.val-ie.val)},[u]),ve=mr[L],ke=w.includes(ve.id),Xe=t>=ve.cost,We=Xl[F],vt=W.includes(We.id)||We.cost===0,St=t>=We.cost;return ee.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black text-white font-rajdhani select-none",children:[ee.jsx(c3,{missionState:h,level:s,totalDuration:_,timeLeft:g,planet:ve,spaceshipModel:Xl[F].model,nozzleFire:Ap[N]}),ee.jsx(v3,{missionState:h,level:s,totalDuration:_,timeLeft:g,planet:ve}),ee.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between z-10 pointer-events-none",children:[o==="home"&&ee.jsxs("div",{className:"h-full flex flex-col justify-between p-4 pb-28 pointer-events-none",children:[ee.jsxs("div",{className:"flex gap-3 justify-end pointer-events-auto",children:[ee.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl border-l-4 border-blue-500/80 bg-black/70 backdrop-blur-xl shadow-lg animate-[slideUp_0.5s_ease-out]",children:[ee.jsx("span",{className:"text-gray-400 text-[10px] uppercase block tracking-wider font-bold mb-0.5",children:"CRÉDITOS"}),ee.jsxs("span",{className:"text-xl font-bold font-mono text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]",children:[t.toLocaleString()," ₡"]})]}),ee.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-300 border border-white/10 bg-black/70 backdrop-blur-xl shadow-lg font-orbitron flex items-center animate-[slideUp_0.5s_ease-out]",children:["MK-",s]})]}),ee.jsxs("div",{className:"w-full max-w-md mx-auto glass-panel p-5 rounded-3xl border border-blue-500/30 pointer-events-auto shadow-2xl bg-black/80 backdrop-blur-xl animate-[slideUp_0.6s_ease-out]",children:[ee.jsx("div",{className:"flex justify-center mb-4",children:ee.jsxs("div",{className:"bg-gray-900/80 p-1 rounded-full border border-white/10 flex relative",children:[ee.jsx("button",{onClick:()=>y("planet"),className:`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${S==="planet"?"bg-blue-600 text-white shadow-lg":"text-gray-500 hover:text-gray-300"}`,children:"Planetas"}),ee.jsx("button",{onClick:()=>y("spaceship"),className:`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${S==="spaceship"?"bg-purple-600 text-white shadow-lg":"text-gray-500 hover:text-gray-300"}`,children:"Naves"})]})}),ee.jsx("div",{className:"mb-4 text-center min-h-[60px] flex flex-col justify-center items-center",children:S==="planet"?ke?ee.jsxs(ee.Fragment,{children:[ee.jsx("p",{className:`text-xs font-mono tracking-[0.3em] uppercase font-bold mb-1 ${h==="mining"?"text-yellow-400 animate-pulse":"text-cyan-400"}`,children:h==="idle"?"• SISTEMAS ONLINE •":h==="mining"?">>> VELOCIDAD LUZ <<<":"• DESTINO ALCANZADO •"}),ee.jsx("h3",{className:"text-2xl font-orbitron font-bold text-white tracking-widest drop-shadow-md",children:ve.name}),ee.jsxs("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider",children:["Multiplicador: ",ve.rarityMultiplier.toFixed(1),"x"]})]}):ee.jsxs("button",{onClick:()=>oe(ve.id),disabled:!Xe,className:`w-full py-3 rounded-xl border font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${Xe?"bg-yellow-600 hover:bg-yellow-500 border-yellow-400 text-white animate-pulse":"bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"}`,children:[ee.jsx(ma.Lock,{size:14}),ee.jsxs("div",{className:"flex flex-col items-start leading-none",children:[ee.jsxs("span",{className:"text-[10px]",children:["COMPRAR ",ve.name]}),ee.jsxs("span",{className:"text-sm font-mono",children:[ve.cost.toLocaleString()," ₡"]})]})]}):vt?ee.jsxs(ee.Fragment,{children:[ee.jsx("p",{className:"text-xs font-mono tracking-[0.3em] uppercase font-bold mb-1 text-purple-400",children:"• NAVE SELECCIONADA •"}),ee.jsx("h3",{className:"text-2xl font-orbitron font-bold text-white tracking-widest drop-shadow-md",children:We.name}),ee.jsxs("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider",children:["Rareza: ",We.rarity]})]}):ee.jsxs("button",{onClick:()=>Re(We.id),disabled:!St,className:`w-full py-3 rounded-xl border font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${St?"bg-purple-600 hover:bg-purple-500 border-purple-400 text-white animate-pulse":"bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"}`,children:[ee.jsx(ma.Lock,{size:14}),ee.jsxs("div",{className:"flex flex-col items-start leading-none",children:[ee.jsxs("span",{className:"text-[10px]",children:["COMPRAR ",We.name]}),ee.jsxs("span",{className:"text-sm font-mono",children:[We.cost.toLocaleString()," ₡"]})]})]})}),ee.jsxs("div",{className:"flex items-center gap-3",children:[ee.jsx("button",{onClick:()=>se(-1),disabled:h==="mining",className:`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${h==="mining"?"opacity-30 border-gray-800 cursor-not-allowed":"border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95"}`,children:ee.jsx(ma.ArrowLeft,{size:20})}),ee.jsxs("div",{className:"flex-1",children:[h==="idle"&&ee.jsx("button",{onClick:B,disabled:!ke||!vt,className:`w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base transition-all ${ke&&vt?"bg-gradient-to-br from-blue-600 to-blue-700 hover:to-blue-600 text-white border-blue-800 active:border-b-0 active:translate-y-1 hover:shadow-blue-500/50":"bg-gray-800 text-gray-500 border-gray-900 cursor-not-allowed"}`,children:ke&&vt?"INICIAR MISIÓN":"BLOQUEADO"}),h==="mining"&&ee.jsxs("div",{className:"w-full bg-gray-900/80 h-14 rounded-2xl overflow-hidden relative border border-gray-700/50 shadow-inner backdrop-blur-sm",children:[ee.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 animate-pulse transition-all duration-1000",style:{width:`${(1-g/_)*100}%`}}),ee.jsxs("span",{className:"absolute inset-0 flex items-center justify-center font-bold text-gray-900 font-mono tracking-wider text-lg drop-shadow-lg",children:["T-",g,"s"]})]}),h==="ready"&&ee.jsx("button",{onClick:V,className:"w-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:to-green-300 py-4 rounded-2xl font-bold text-gray-900 tracking-widest shadow-[0_0_25px_rgba(74,222,128,0.6)] animate-pulse active:scale-95 transition-all border-b-4 border-green-700 font-orbitron text-base",children:"RECUPERAR CARGA"})]}),ee.jsx("button",{onClick:()=>se(1),disabled:h==="mining",className:`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${h==="mining"?"opacity-30 border-gray-800 cursor-not-allowed":"border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95"}`,children:ee.jsx(ma.ArrowRight,{size:20})})]})]})]}),o==="inventory"&&ee.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-4 pt-12 pb-32 overflow-y-auto pointer-events-auto animate-[slideUp_0.4s_ease-out]",children:[ee.jsxs("div",{className:"flex justify-between items-end mb-8 border-b border-white/10 pb-4",children:[ee.jsxs("div",{children:[ee.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron tracking-wider",children:"BODEGA"}),ee.jsxs("p",{className:"text-xs text-gray-500 mt-1 uppercase tracking-widest",children:["Capacidad: ",u.length," items"]})]}),u.length>0&&ee.jsxs("button",{onClick:Me,className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-lg border border-red-500/30 active:scale-95 transition-all flex items-center gap-2",children:[ee.jsx(ma.Trash,{size:14,className:"inline"})," VENDER TODO"]})]}),re.length===0?ee.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-gray-600",children:[ee.jsx("div",{className:"text-6xl mb-4 opacity-20",children:"📦"}),ee.jsx("p",{className:"font-bold uppercase tracking-widest",children:"Bodega Vacía"})]}):ee.jsx("div",{className:"grid gap-3",children:re.map(pe=>ee.jsxs("div",{className:`bg-gray-900/40 border-l-4 ${pe.border} p-4 rounded-r-xl flex flex-col gap-3 relative overflow-hidden group`,children:[ee.jsxs("div",{className:"flex justify-between items-start relative z-10",children:[ee.jsxs("div",{className:"flex gap-4 items-center",children:[ee.jsx("div",{className:"text-4xl bg-black/50 w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 shadow-inner",children:pe.icon}),ee.jsxs("div",{children:[ee.jsx("h3",{className:`font-bold text-lg leading-tight ${pe.style}`,children:pe.name}),ee.jsx("span",{className:"text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-0.5 rounded mt-1 inline-block text-gray-400",children:pe.rarity})]})]}),ee.jsxs("div",{className:"text-right",children:[ee.jsxs("div",{className:"text-xl font-mono text-white font-bold tracking-tight",children:["+",pe.val.toLocaleString(),"₡"]}),ee.jsxs("div",{className:"text-xs text-gray-500 mt-1 font-mono",children:["x",pe.count]})]})]}),ee.jsxs("div",{className:"flex gap-2 mt-2",children:[ee.jsxs("button",{onClick:()=>Ie(pe),className:"flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors",children:[ee.jsx(ma.Coins,{size:14,className:"text-yellow-500"})," Vender 1"]}),ee.jsxs("button",{onClick:()=>Ie(pe,!0),className:"flex-1 bg-blue-500/10 hover:bg-blue-500/20 py-2 rounded-lg text-xs font-bold text-blue-300 flex items-center justify-center gap-2 border border-blue-500/20 transition-colors",children:[ee.jsx(ma.Trash,{size:14})," Vender Todo"]})]})]},pe.name))})]}),o==="shop"&&ee.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-6 pt-12 pb-32 pointer-events-auto animate-[slideUp_0.4s_ease-out] flex flex-col overflow-y-auto",children:[ee.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron mb-2 text-center tracking-widest",children:"INGENIERÍA"}),ee.jsx("p",{className:"text-center text-gray-500 text-xs uppercase tracking-widest mb-8",children:"Mejoras de Dron & Sistemas"}),ee.jsxs("div",{className:"flex-1 flex flex-col items-center justify-start gap-4",children:[ee.jsxs("div",{className:"w-full max-w-sm bg-gray-900/80 rounded-2xl p-6 border border-white/10",children:[ee.jsxs("div",{className:"flex justify-between items-end mb-4",children:[ee.jsxs("div",{children:[ee.jsxs("h3",{className:"text-lg font-bold text-white font-orbitron",children:["Interceptor MK-",s+1]}),ee.jsx("p",{className:"text-xs text-blue-400 uppercase tracking-widest",children:"Próxima Generación"})]}),ee.jsxs("div",{className:"text-right",children:[ee.jsx("span",{className:"block text-[10px] text-gray-500 uppercase",children:"Costo"}),ee.jsxs("span",{className:`font-mono font-bold text-lg ${t>=s*250?"text-green-400":"text-red-400"}`,children:[(s*250).toLocaleString()," ₡"]})]})]}),ee.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[ee.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[ee.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Velocidad"}),ee.jsx("span",{className:"text-green-400 font-bold text-xl",children:"+5%"})]}),ee.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[ee.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Suerte"}),ee.jsx("span",{className:"text-yellow-400 font-bold text-xl",children:"+2%"})]})]}),ee.jsx("button",{onClick:Ye,disabled:t<s*250,className:`w-full py-4 rounded-xl font-bold font-orbitron text-lg shadow-lg active:scale-95 transition-all ${t>=s*250?"bg-gradient-to-r from-blue-600 to-blue-500 text-white":"bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700"}`,children:t>=s*250?"INSTALAR MEJORA":"CRÉDITOS INSUFICIENTES"})]}),ee.jsxs("div",{className:"w-full max-w-sm bg-gray-900/80 rounded-2xl border border-white/10 overflow-hidden",children:[ee.jsxs("button",{onClick:()=>fe(!ue),className:"w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors",children:[ee.jsxs("div",{className:"flex items-center gap-3",children:[ee.jsx("span",{className:"text-2xl",children:"🔥"}),ee.jsxs("div",{className:"text-left",children:[ee.jsx("h3",{className:"text-lg font-bold text-white font-orbitron",children:"NOZZLE FIRE"}),ee.jsx("p",{className:"text-xs text-orange-400 uppercase tracking-widest",children:"Animación de Escape"})]})]}),ee.jsx("span",{className:`text-xl text-gray-400 transition-transform duration-300 ${ue?"rotate-90":""}`,children:"▶"})]}),ee.jsx("div",{className:`transition-all duration-300 ease-in-out overflow-hidden ${ue?"max-h-[600px] opacity-100":"max-h-0 opacity-0"}`,children:ee.jsx("div",{className:"p-4 pt-0 space-y-3",children:Ap.map(pe=>{const ie=K.includes(pe.id),xe=N===pe.id,Ee=t>=pe.cost;return ee.jsxs("div",{className:`rounded-xl border p-4 transition-all ${xe?"border-orange-500 bg-orange-500/10":ie?"border-white/20 bg-black/40 hover:border-white/40 cursor-pointer":"border-white/10 bg-black/20"}`,onClick:()=>ie&&I(pe.id),children:[ee.jsxs("div",{className:"relative h-16 bg-gradient-to-r from-black/80 via-black/60 to-black/40 rounded-lg mb-3 overflow-hidden border border-white/5",children:[ee.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-3 h-6 bg-gray-700 rounded-r-sm border-r border-gray-500"}),ee.jsxs("div",{className:"absolute inset-0 nozzle-fire-container",children:[[0,1,2,3,4].map(Pe=>ee.jsx("div",{className:"nozzle-particle nozzle-particle-core",style:{"--particle-color":pe.colors[2],"--particle-glow":pe.colors[1],"--delay":`${Pe*.15}s`,"--y-offset":`${(Pe%3-1)*4}px`}},`core-${Pe}`)),[0,1,2,3,4,5,6].map(Pe=>ee.jsx("div",{className:"nozzle-particle nozzle-particle-mid",style:{"--particle-color":pe.colors[1],"--particle-glow":pe.colors[0],"--delay":`${Pe*.12}s`,"--y-offset":`${(Pe%5-2)*5}px`}},`mid-${Pe}`)),[0,1,2,3,4,5,6,7].map(Pe=>ee.jsx("div",{className:"nozzle-particle nozzle-particle-outer",style:{"--particle-color":pe.colors[0],"--particle-glow":pe.colors[0],"--delay":`${Pe*.1}s`,"--y-offset":`${(Pe%7-3)*6}px`}},`outer-${Pe}`)),ee.jsx("div",{className:"nozzle-glow",style:{"--glow-color-1":pe.colors[2],"--glow-color-2":pe.colors[1],"--glow-color-3":pe.colors[0]}})]})]}),ee.jsxs("div",{className:"flex items-center justify-between",children:[ee.jsxs("div",{children:[ee.jsx("h4",{className:"font-bold text-white",children:pe.name}),ee.jsx("p",{className:"text-xs text-gray-500",children:pe.description})]}),ee.jsx("div",{children:xe?ee.jsx("span",{className:"text-xs font-bold text-orange-400 uppercase px-3 py-1 bg-orange-500/20 rounded-full",children:"Activo"}):ie?ee.jsx("span",{className:"text-xs font-bold text-green-400 uppercase px-3 py-1 bg-green-500/20 rounded-full",children:"Seleccionar"}):pe.cost===0?ee.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase",children:"Gratis"}):ee.jsxs("button",{onClick:Pe=>{Pe.stopPropagation(),Ce(pe.id)},disabled:!Ee,className:`px-3 py-1 rounded-full text-xs font-bold transition-all ${Ee?"bg-orange-600 hover:bg-orange-500 text-white":"bg-gray-700 text-gray-500 cursor-not-allowed"}`,children:[pe.cost.toLocaleString()," ₡"]})})]})]},pe.id)})})})]})]})]})]}),ee.jsx("div",{className:"absolute bottom-6 w-full px-6 z-50 pointer-events-auto",children:ee.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-2xl rounded-full p-2 flex justify-between items-center h-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 relative",children:[ee.jsxs("button",{onClick:()=>e("shop"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${o==="shop"?"text-blue-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[ee.jsx(ma.Bolt,{className:"w-6 h-6"}),ee.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"NAVE"})]}),ee.jsx("div",{className:"relative -top-8",children:ee.jsx("button",{onClick:()=>e("home"),className:`w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-black shadow-2xl transition-all duration-300 ${o==="home"?"bg-blue-600 scale-110 shadow-blue-500/50":"bg-gray-800 hover:bg-gray-700"}`,children:ee.jsx(ma.Home,{className:"w-8 h-8 text-white"})})}),ee.jsxs("button",{onClick:()=>e("inventory"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${o==="inventory"?"text-yellow-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[ee.jsxs("div",{className:"relative",children:[ee.jsx(ma.Bag,{className:"w-6 h-6"}),u.length>0&&ee.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping border border-black"})]}),ee.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"CARGA"})]})]})}),M&&ee.jsx(_3,{item:M,onClose:()=>E(null)})]})}Vb.createRoot(document.getElementById("root")).render(ee.jsx(xt.StrictMode,{children:ee.jsx(x3,{})}));
