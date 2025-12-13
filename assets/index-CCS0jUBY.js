(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var yh={exports:{}},Wo={};var sv;function my(){if(sv)return Wo;sv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=n,Wo.jsxs=n,Wo}var rv;function gy(){return rv||(rv=1,yh.exports=my()),yh.exports}var Mt=gy(),Mh={exports:{}},pe={};var ov;function vy(){if(ov)return pe;ov=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function x(z,$,mt){this.props=z,this.context=$,this.refs=M,this.updater=mt||E}x.prototype.isReactComponent={},x.prototype.setState=function(z,$){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,$,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function P(){}P.prototype=x.prototype;function U(z,$,mt){this.props=z,this.context=$,this.refs=M,this.updater=mt||E}var D=U.prototype=new P;D.constructor=U,A(D,x.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function T(z,$,mt){var Ct=mt.ref;return{$$typeof:r,type:z,key:$,ref:Ct!==void 0?Ct:null,props:mt}}function w(z,$){return T(z.type,$,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function J(z){var $={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(mt){return $[mt]})}var j=/\/+/g;function ot(z,$){return typeof z=="object"&&z!==null&&z.key!=null?J(""+z.key):$.toString(36)}function rt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(L,L):(z.status="pending",z.then(function($){z.status==="pending"&&(z.status="fulfilled",z.value=$)},function($){z.status==="pending"&&(z.status="rejected",z.reason=$)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,$,mt,Ct,It){var it=typeof z;(it==="undefined"||it==="boolean")&&(z=null);var ht=!1;if(z===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(z.$$typeof){case r:case t:ht=!0;break;case g:return ht=z._init,F(ht(z._payload),$,mt,Ct,It)}}if(ht)return It=It(z),ht=Ct===""?"."+ot(z,0):Ct,I(It)?(mt="",ht!=null&&(mt=ht.replace(j,"$&/")+"/"),F(It,$,mt,"",function(qt){return qt})):It!=null&&(H(It)&&(It=w(It,mt+(It.key==null||z&&z.key===It.key?"":(""+It.key).replace(j,"$&/")+"/")+ht)),$.push(It)),1;ht=0;var Pt=Ct===""?".":Ct+":";if(I(z))for(var Xt=0;Xt<z.length;Xt++)Ct=z[Xt],it=Pt+ot(Ct,Xt),ht+=F(Ct,$,mt,it,It);else if(Xt=y(z),typeof Xt=="function")for(z=Xt.call(z),Xt=0;!(Ct=z.next()).done;)Ct=Ct.value,it=Pt+ot(Ct,Xt++),ht+=F(Ct,$,mt,it,It);else if(it==="object"){if(typeof z.then=="function")return F(rt(z),$,mt,Ct,It);throw $=String(z),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ht}function G(z,$,mt){if(z==null)return z;var Ct=[],It=0;return F(z,Ct,"","",function(it){return $.call(mt,it,It++)}),Ct}function et(z){if(z._status===-1){var $=z._result;$=$(),$.then(function(mt){(z._status===0||z._status===-1)&&(z._status=1,z._result=mt)},function(mt){(z._status===0||z._status===-1)&&(z._status=2,z._result=mt)}),z._status===-1&&(z._status=0,z._result=$)}if(z._status===1)return z._result.default;throw z._result}var Tt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},bt={map:G,forEach:function(z,$,mt){G(z,function(){$.apply(this,arguments)},mt)},count:function(z){var $=0;return G(z,function(){$++}),$},toArray:function(z){return G(z,function($){return $})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return pe.Activity=v,pe.Children=bt,pe.Component=x,pe.Fragment=n,pe.Profiler=l,pe.PureComponent=U,pe.StrictMode=s,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,pe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},pe.cache=function(z){return function(){return z.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(z,$,mt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ct=A({},z.props),It=z.key;if($!=null)for(it in $.key!==void 0&&(It=""+$.key),$)!X.call($,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&$.ref===void 0||(Ct[it]=$[it]);var it=arguments.length-2;if(it===1)Ct.children=mt;else if(1<it){for(var ht=Array(it),Pt=0;Pt<it;Pt++)ht[Pt]=arguments[Pt+2];Ct.children=ht}return T(z.type,It,Ct)},pe.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},pe.createElement=function(z,$,mt){var Ct,It={},it=null;if($!=null)for(Ct in $.key!==void 0&&(it=""+$.key),$)X.call($,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(It[Ct]=$[Ct]);var ht=arguments.length-2;if(ht===1)It.children=mt;else if(1<ht){for(var Pt=Array(ht),Xt=0;Xt<ht;Xt++)Pt[Xt]=arguments[Xt+2];It.children=Pt}if(z&&z.defaultProps)for(Ct in ht=z.defaultProps,ht)It[Ct]===void 0&&(It[Ct]=ht[Ct]);return T(z,it,It)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(z){return{$$typeof:h,render:z}},pe.isValidElement=H,pe.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:et}},pe.memo=function(z,$){return{$$typeof:p,type:z,compare:$===void 0?null:$}},pe.startTransition=function(z){var $=O.T,mt={};O.T=mt;try{var Ct=z(),It=O.S;It!==null&&It(mt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(L,Tt)}catch(it){Tt(it)}finally{$!==null&&mt.types!==null&&($.types=mt.types),O.T=$}},pe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},pe.use=function(z){return O.H.use(z)},pe.useActionState=function(z,$,mt){return O.H.useActionState(z,$,mt)},pe.useCallback=function(z,$){return O.H.useCallback(z,$)},pe.useContext=function(z){return O.H.useContext(z)},pe.useDebugValue=function(){},pe.useDeferredValue=function(z,$){return O.H.useDeferredValue(z,$)},pe.useEffect=function(z,$){return O.H.useEffect(z,$)},pe.useEffectEvent=function(z){return O.H.useEffectEvent(z)},pe.useId=function(){return O.H.useId()},pe.useImperativeHandle=function(z,$,mt){return O.H.useImperativeHandle(z,$,mt)},pe.useInsertionEffect=function(z,$){return O.H.useInsertionEffect(z,$)},pe.useLayoutEffect=function(z,$){return O.H.useLayoutEffect(z,$)},pe.useMemo=function(z,$){return O.H.useMemo(z,$)},pe.useOptimistic=function(z,$){return O.H.useOptimistic(z,$)},pe.useReducer=function(z,$,mt){return O.H.useReducer(z,$,mt)},pe.useRef=function(z){return O.H.useRef(z)},pe.useState=function(z){return O.H.useState(z)},pe.useSyncExternalStore=function(z,$,mt){return O.H.useSyncExternalStore(z,$,mt)},pe.useTransition=function(){return O.H.useTransition()},pe.version="19.2.3",pe}var lv;function ap(){return lv||(lv=1,Mh.exports=vy()),Mh.exports}var ln=ap(),bh={exports:{}},qo={},Eh={exports:{}},Th={};var cv;function _y(){return cv||(cv=1,(function(r){function t(F,G){var et=F.length;F.push(G);t:for(;0<et;){var Tt=et-1>>>1,bt=F[Tt];if(0<l(bt,G))F[Tt]=G,F[et]=bt,et=Tt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],et=F.pop();if(et!==G){F[0]=et;t:for(var Tt=0,bt=F.length,z=bt>>>1;Tt<z;){var $=2*(Tt+1)-1,mt=F[$],Ct=$+1,It=F[Ct];if(0>l(mt,et))Ct<bt&&0>l(It,mt)?(F[Tt]=It,F[Ct]=et,Tt=Ct):(F[Tt]=mt,F[$]=et,Tt=$);else if(Ct<bt&&0>l(It,et))F[Tt]=It,F[Ct]=et,Tt=Ct;else break t}}return G}function l(F,G){var et=F.sortIndex-G.sortIndex;return et!==0?et:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,_=3,y=!1,E=!1,A=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var G=n(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=F)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=n(p)}}function I(F){if(A=!1,D(F),!E)if(n(m)!==null)E=!0,L||(L=!0,J());else{var G=n(p);G!==null&&rt(I,G.startTime-F)}}var L=!1,O=-1,X=5,T=-1;function w(){return M?!0:!(r.unstable_now()-T<X)}function H(){if(M=!1,L){var F=r.unstable_now();T=F;var G=!0;try{t:{E=!1,A&&(A=!1,P(O),O=-1),y=!0;var et=_;try{e:{for(D(F),v=n(m);v!==null&&!(v.expirationTime>F&&w());){var Tt=v.callback;if(typeof Tt=="function"){v.callback=null,_=v.priorityLevel;var bt=Tt(v.expirationTime<=F);if(F=r.unstable_now(),typeof bt=="function"){v.callback=bt,D(F),G=!0;break e}v===n(m)&&s(m),D(F)}else s(m);v=n(m)}if(v!==null)G=!0;else{var z=n(p);z!==null&&rt(I,z.startTime-F),G=!1}}break t}finally{v=null,_=et,y=!1}G=void 0}}finally{G?J():L=!1}}}var J;if(typeof U=="function")J=function(){U(H)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ot=j.port2;j.port1.onmessage=H,J=function(){ot.postMessage(null)}}else J=function(){x(H,0)};function rt(F,G){O=x(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(F){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var et=_;_=G;try{return F()}finally{_=et}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var et=_;_=F;try{return G()}finally{_=et}},r.unstable_scheduleCallback=function(F,G,et){var Tt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Tt+et:Tt):et=Tt,F){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=et+bt,F={id:g++,callback:G,priorityLevel:F,startTime:et,expirationTime:bt,sortIndex:-1},et>Tt?(F.sortIndex=et,t(p,F),n(m)===null&&F===n(p)&&(A?(P(O),O=-1):A=!0,rt(I,et-Tt))):(F.sortIndex=bt,t(m,F),E||y||(E=!0,L||(L=!0,J()))),F},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(F){var G=_;return function(){var et=_;_=G;try{return F.apply(this,arguments)}finally{_=et}}}})(Th)),Th}var uv;function xy(){return uv||(uv=1,Eh.exports=_y()),Eh.exports}var Ah={exports:{}},Pn={};var fv;function Sy(){if(fv)return Pn;fv=1;var r=ap();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Pn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.3",Pn}var hv;function yy(){if(hv)return Ah.exports;hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ah.exports=Sy(),Ah.exports}var dv;function My(){if(dv)return qo;dv=1;var r=xy(),t=ap(),n=yy();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=d;break}if(R===o){S=!0,o=u,a=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===a){S=!0,a=d,o=u;break}if(R===o){S=!0,o=d,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case L:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ot(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return ot(e(i))}catch{}}return null}var rt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},Tt=[],bt=-1;function z(e){return{current:e}}function $(e){0>bt||(e.current=Tt[bt],Tt[bt]=null,bt--)}function mt(e,i){bt++,Tt[bt]=e.current,e.current=i}var Ct=z(null),It=z(null),it=z(null),ht=z(null);function Pt(e,i){switch(mt(it,i),mt(It,e),mt(Ct,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Cg(i),e=wg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Ct),mt(Ct,e)}function Xt(){$(Ct),$(It),$(it)}function qt(e){e.memoizedState!==null&&mt(ht,e);var i=Ct.current,a=wg(i,e.type);i!==a&&(mt(It,e),mt(Ct,a))}function ve(e){It.current===e&&($(Ct),$(It)),ht.current===e&&($(ht),Go._currentValue=et)}var Ce,ue;function vt(e){if(Ce===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ce=i&&i[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ce+e+ue}var Rt=!1;function yt(e,i){if(!e||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ct){var st=ct}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ct){st=ct}e.call(xt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var V=S.split(`
`),nt=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===nt.length)for(o=V.length-1,u=nt.length-1;1<=o&&0<=u&&V[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==nt[u]){var pt=`
`+V[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?vt(a):""}function Bt(e,i){switch(e.tag){case 26:case 27:case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return e.child!==i&&i!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return yt(e.type,!1);case 11:return yt(e.type.render,!1);case 1:return yt(e.type,!0);case 31:return vt("Activity");default:return""}}function B(e){try{var i="",a=null;do i+=Bt(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ne=Object.prototype.hasOwnProperty,Vt=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,Dt=r.unstable_shouldYield,N=r.unstable_requestPaint,b=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,ft=r.unstable_ImmediatePriority,_t=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Qt=r.log,se=r.unstable_setDisableYieldValue,dt=null,Et=null;function zt(e){if(typeof Qt=="function"&&se(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(dt,e)}catch{}}var Ft=Math.clz32?Math.clz32:q,Ut=Math.log,_e=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Ut(e)/_e|0)|0}var Gt=256,wt=262144,Yt=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=At(o):(S&=R,S!==0?u=At(S):a||(a=R&~e,a!==0&&(u=At(a))))):(R=o&~d,R!==0?u=At(R):S!==0?u=At(S):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:u}function Ot(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=Yt;return Yt<<=1,(Yt&62914560)===0&&(Yt=4194304),e}function we(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function On(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,i,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,nt=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Ft(a),xt=1<<pt;R[pt]=0,V[pt]=-1;var st=nt[pt];if(st!==null)for(nt[pt]=null,pt=0;pt<st.length;pt++){var ct=st[pt];ct!==null&&(ct.lane&=-536870913)}a&=~xt}o!==0&&vl(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function vl(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ft(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function zs(e,i){var a=i&-i;return a=(a&42)!==0?1:$r(a),(a&(e.suspendedLanes|i))!==0?0:a}function $r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function to(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Kg(e.type))}function Oi(e,i){var a=G.p;try{return G.p=e,i()}finally{G.p=a}}var ui=Math.random().toString(36).slice(2),cn="__reactFiber$"+ui,bn="__reactProps$"+ui,bi="__reactContainer$"+ui,Bs="__reactEvents$"+ui,Fs="__reactListeners$"+ui,_l="__reactHandles$"+ui,eo="__reactResources$"+ui,is="__reactMarker$"+ui;function no(e){delete e[cn],delete e[bn],delete e[Bs],delete e[Fs],delete e[_l]}function Ma(e){var i=e[cn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[bi]||a[cn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=zg(e);e!==null;){if(a=e[cn])return a;e=zg(e)}return i}e=a,a=e.parentNode}return null}function ba(e){if(e=e[cn]||e[bi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function as(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ea(e){var i=e[eo];return i||(i=e[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function C(e){e[is]=!0}var Z=new Set,lt={};function at(e,i){K(e,i),K(e+"Capture",i)}function K(e,i){for(lt[e]=i,e=0;e<i.length;e++)Z.add(i[e])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},kt={};function Jt(e){return ne.call(kt,e)?!0:ne.call(jt,e)?!1:Ht.test(e)?kt[e]=!0:(jt[e]=!0,!1)}function $t(e,i,a){if(Jt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function oe(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function te(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function je(e){if(!e._valueTracker){var i=Oe(e)?"checked":"value";e._valueTracker=Je(e,i,""+e[i])}}function Ie(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function de(e){return e.replace(Pe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function En(e,i,a,o,u,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?Tn(e,S,le(i)):a!=null?Tn(e,S,le(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+le(R):e.removeAttribute("name")}function Zi(e,i,a,o,u,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){je(e);return}a=a!=null?""+le(a):"",i=i!=null?""+le(i):a,R||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),je(e)}function Tn(e,i,a){i==="number"&&ae(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fi(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Fe(e,i,a){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+le(a):""}function An(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=le(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),je(e)}function gn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Rn.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Hs(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&Cn(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Cn(e,d,i[d])}function Ei(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return hx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var vu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function Rp(e){var i=ba(e);if(i&&(e=i.stateNode)){var a=e[bn]||null;t:switch(e=i.stateNode,i.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Ie(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&fi(e,!!a.multiple,i,!1)}}}var xu=!1;function Cp(e,i,a){if(xu)return e(i,a);xu=!0;try{var o=e(i);return o}finally{if(xu=!1,(Gs!==null||Vs!==null)&&(rc(),Gs&&(i=Gs,e=Vs,Vs=Gs=null,Rp(i),e)))for(i=0;i<e.length;i++)Rp(e[i])}}function io(e,i){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Ji)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Su=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Su=!1}var Ta=null,yu=null,Sl=null;function wp(){if(Sl)return Sl;var e,i=yu,a=i.length,o,u="value"in Ta?Ta.value:Ta.textContent,d=u.length;for(e=0;e<a&&i[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&i[a-o]===u[d-o];o++);return Sl=u.slice(e,1<o?1-o:void 0)}function yl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function Dp(){return!1}function Wn(e){function i(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ml:Dp,this.isPropagationStopped=Dp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Wn(ss),so=v({},ss,{view:0,detail:0}),dx=Wn(so),Mu,bu,ro,El=v({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(Mu=e.screenX-ro.screenX,bu=e.screenY-ro.screenY):bu=Mu=0,ro=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Up=Wn(El),px=v({},El,{dataTransfer:0}),mx=Wn(px),gx=v({},so,{relatedTarget:0}),Eu=Wn(gx),vx=v({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=Wn(vx),xx=v({},ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sx=Wn(xx),yx=v({},ss,{data:0}),Np=Wn(yx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ex[e])?!!i[e]:!1}function Tu(){return Tx}var Ax=v({},so,{key:function(e){if(e.key){var i=Mx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rx=Wn(Ax),Cx=v({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Wn(Cx),wx=v({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Dx=Wn(wx),Ux=v({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nx=Wn(Ux),Lx=v({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=Wn(Lx),Px=v({},ss,{newState:0,oldState:0}),zx=Wn(Px),Ix=[9,13,27,32],Au=Ji&&"CompositionEvent"in window,oo=null;Ji&&"documentMode"in document&&(oo=document.documentMode);var Bx=Ji&&"TextEvent"in window&&!oo,Op=Ji&&(!Au||oo&&8<oo&&11>=oo),Pp=" ",zp=!1;function Ip(e,i){switch(e){case"keyup":return Ix.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function Fx(e,i){switch(e){case"compositionend":return Bp(i);case"keypress":return i.which!==32?null:(zp=!0,Pp);case"textInput":return e=i.data,e===Pp&&zp?null:e;default:return null}}function Hx(e,i){if(ks)return e==="compositionend"||!Au&&Ip(e,i)?(e=wp(),Sl=yu=Ta=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Op&&i.locale!=="ko"?null:i.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Gx[e.type]:i==="textarea"}function Hp(e,i,a,o){Gs?Vs?Vs.push(o):Vs=[o]:Gs=o,i=dc(i,"onChange"),0<i.length&&(a=new bl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var lo=null,co=null;function Vx(e){Mg(e,0)}function Tl(e){var i=as(e);if(Ie(i))return e}function Gp(e,i){if(e==="change")return i}var Vp=!1;if(Ji){var Ru;if(Ji){var Cu="oninput"in document;if(!Cu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Cu=typeof kp.oninput=="function"}Ru=Cu}else Ru=!1;Vp=Ru&&(!document.documentMode||9<document.documentMode)}function Xp(){lo&&(lo.detachEvent("onpropertychange",Wp),co=lo=null)}function Wp(e){if(e.propertyName==="value"&&Tl(co)){var i=[];Hp(i,co,e,_u(e)),Cp(Vx,i)}}function kx(e,i,a){e==="focusin"?(Xp(),lo=i,co=a,lo.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function Xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(co)}function Wx(e,i){if(e==="click")return Tl(i)}function qx(e,i){if(e==="input"||e==="change")return Tl(i)}function Yx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var $n=typeof Object.is=="function"?Object.is:Yx;function uo(e,i){if($n(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ne.call(i,u)||!$n(e[u],i[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,i){var a=qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qp(a)}}function jp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?jp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ae(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ae(e.document)}return i}function wu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var jx=Ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,Du=null,fo=null,Uu=!1;function Qp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||Xs==null||Xs!==ae(o)||(o=Xs,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=dc(Du,"onSelect"),0<o.length&&(i=new bl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=Xs)))}function rs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Ws={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},Nu={},Jp={};Ji&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function os(e){if(Nu[e])return Nu[e];if(!Ws[e])return e;var i=Ws[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Jp)return Nu[e]=i[a];return e}var Kp=os("animationend"),$p=os("animationiteration"),tm=os("animationstart"),Zx=os("transitionrun"),Qx=os("transitionstart"),Jx=os("transitioncancel"),em=os("transitionend"),nm=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ti(e,i){nm.set(e,i),at(i,[e])}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],qs=0,Ou=0;function Rl(){for(var e=qs,i=Ou=qs=0;i<e;){var a=hi[i];hi[i++]=null;var o=hi[i];hi[i++]=null;var u=hi[i];hi[i++]=null;var d=hi[i];if(hi[i++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&im(a,u,d)}}function Cl(e,i,a,o){hi[qs++]=e,hi[qs++]=i,hi[qs++]=a,hi[qs++]=o,Ou|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Pu(e,i,a,o){return Cl(e,i,a,o),wl(e)}function ls(e,i){return Cl(e,null,null,i),wl(e)}function im(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Ft(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),d):null}function wl(e){if(50<Oo)throw Oo=0,Wf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ys={};function Kx(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,i,a,o){return new Kx(e,i,a,o)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,i){var a=e.alternate;return a===null?(a=ti(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Dl(e,i,a,o,u,d){var S=0;if(o=e,typeof e=="function")zu(e)&&(S=1);else if(typeof e=="string")S=iy(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=ti(31,a,i,u),e.elementType=T,e.lanes=d,e;case A:return cs(a.children,u,d,i);case M:S=8,u|=24;break;case x:return e=ti(12,a,i,u|2),e.elementType=x,e.lanes=d,e;case I:return e=ti(13,a,i,u),e.elementType=I,e.lanes=d,e;case L:return e=ti(19,a,i,u),e.elementType=L,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case P:S=9;break t;case D:S=11;break t;case O:S=14;break t;case X:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=ti(S,a,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function cs(e,i,a,o){return e=ti(7,e,o,i),e.lanes=a,e}function Iu(e,i,a){return e=ti(6,e,null,i),e.lanes=a,e}function sm(e){var i=ti(18,null,null,0);return i.stateNode=e,i}function Bu(e,i,a){return i=ti(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var rm=new WeakMap;function di(e,i){if(typeof e=="object"&&e!==null){var a=rm.get(e);return a!==void 0?a:(i={value:e,source:i,stack:B(i)},rm.set(e,i),i)}return{value:e,source:i,stack:B(i)}}var js=[],Zs=0,Ul=null,ho=0,pi=[],mi=0,Aa=null,Pi=1,zi="";function $i(e,i){js[Zs++]=ho,js[Zs++]=Ul,Ul=e,ho=i}function om(e,i,a){pi[mi++]=Pi,pi[mi++]=zi,pi[mi++]=Aa,Aa=e;var o=Pi;e=zi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var d=32-Ft(i)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Pi=1<<32-Ft(i)+u|a<<u|o,zi=d+e}else Pi=1<<d|a<<u|o,zi=e}function Fu(e){e.return!==null&&($i(e,1),om(e,1,0))}function Hu(e){for(;e===Ul;)Ul=js[--Zs],js[Zs]=null,ho=js[--Zs],js[Zs]=null;for(;e===Aa;)Aa=pi[--mi],pi[mi]=null,zi=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function lm(e,i){pi[mi++]=Pi,pi[mi++]=zi,pi[mi++]=Aa,Pi=i.id,zi=i.overflow,Aa=e}var wn=null,Ze=null,Re=!1,Ra=null,gi=!1,Gu=Error(s(519));function Ca(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(di(i,e)),Gu}function cm(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[cn]=e,i[bn]=o,a){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(a=0;a<zo.length;a++)Ee(zo[a],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),Zi(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),An(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||Ag(i.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),o.onScroll!=null&&Ee("scroll",i),o.onScrollEnd!=null&&Ee("scrollend",i),o.onClick!=null&&(i.onclick=Qi),i=!0):i=!1,i||Ca(e,!0)}function um(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:wn=wn.return}}function Qs(e){if(e!==wn)return!1;if(!Re)return um(e),Re=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ca(e),um(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Pg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Pg(e)}else i===27?(i=Ze,Va(e.type)?(e=fh,fh=null,Ze=e):Ze=i):Ze=wn?_i(e.stateNode.nextSibling):null;return!0}function us(){Ze=wn=null,Re=!1}function Vu(){var e=Ra;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Ra=null),e}function po(e){Ra===null?Ra=[e]:Ra.push(e)}var ku=z(null),fs=null,ta=null;function wa(e,i,a){mt(ku,i._currentValue),i._currentValue=a}function ea(e){e._currentValue=ku.current,$(ku)}function Xu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Wu(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var V=0;V<i.length;V++)if(R.context===i[V]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Xu(d.return,a,e),o||(S=null);break t}d=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Xu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Js(e,i,a,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;$n(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===ht.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&Wu(i,e,a,o),i.flags|=262144}function Nl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hs(e){fs=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return fm(fs,e)}function Ll(e,i){return fs===null&&hs(e),fm(e,i)}function fm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(s(308));ta=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ta=ta.next=i;return a}var $x=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},tS=r.unstable_scheduleCallback,eS=r.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new $x,data:new Map,refCount:0}}function mo(e){e.refCount--,e.refCount===0&&tS(eS,function(){e.controller.abort()})}var go=null,Yu=0,Ks=0,$s=null;function nS(e,i){if(go===null){var a=go=[];Yu=0,Ks=Jf(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Yu++,i.then(hm,hm),i}function hm(){if(--Yu===0&&go!==null){$s!==null&&($s.status="fulfilled");var e=go;go=null,Ks=0,$s=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function iS(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=F.S;F.S=function(e,i){Q0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&nS(e,i),dm!==null&&dm(e,i)};var ds=z(null);function ju(){var e=ds.current;return e!==null?e:Ye.pooledCache}function Ol(e,i){i===null?mt(ds,ds.current):mt(ds,i.pool)}function pm(){var e=ju();return e===null?null:{parent:un._currentValue,pool:e}}var tr=Error(s(460)),Zu=Error(s(474)),Pl=Error(s(542)),zl={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Qi,Qi),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,_m(e),e;default:if(typeof i.status=="string")i.then(Qi,Qi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,_m(e),e}throw ms=i,tr}}function ps(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,tr):a}}var ms=null;function vm(){if(ms===null)throw Error(s(459));var e=ms;return ms=null,e}function _m(e){if(e===tr||e===Pl)throw Error(s(483))}var er=null,vo=0;function Il(e){var i=vo;return vo+=1,er===null&&(er=[]),gm(er,e,i)}function _o(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Bl(e,i){throw i.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function xm(e){function i(Q,k){if(e){var tt=Q.deletions;tt===null?(Q.deletions=[k],Q.flags|=16):tt.push(k)}}function a(Q,k){if(!e)return null;for(;k!==null;)i(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=Ki(Q,k),Q.index=0,Q.sibling=null,Q}function d(Q,k,tt){return Q.index=tt,e?(tt=Q.alternate,tt!==null?(tt=tt.index,tt<k?(Q.flags|=67108866,k):tt):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,k,tt,gt){return k===null||k.tag!==6?(k=Iu(tt,Q.mode,gt),k.return=Q,k):(k=u(k,tt),k.return=Q,k)}function V(Q,k,tt,gt){var re=tt.type;return re===A?pt(Q,k,tt.props.children,gt,tt.key):k!==null&&(k.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===X&&ps(re)===k.type)?(k=u(k,tt.props),_o(k,tt),k.return=Q,k):(k=Dl(tt.type,tt.key,tt.props,null,Q.mode,gt),_o(k,tt),k.return=Q,k)}function nt(Q,k,tt,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=Bu(tt,Q.mode,gt),k.return=Q,k):(k=u(k,tt.children||[]),k.return=Q,k)}function pt(Q,k,tt,gt,re){return k===null||k.tag!==7?(k=cs(tt,Q.mode,gt,re),k.return=Q,k):(k=u(k,tt),k.return=Q,k)}function xt(Q,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Iu(""+k,Q.mode,tt),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return tt=Dl(k.type,k.key,k.props,null,Q.mode,tt),_o(tt,k),tt.return=Q,tt;case E:return k=Bu(k,Q.mode,tt),k.return=Q,k;case X:return k=ps(k),xt(Q,k,tt)}if(rt(k)||J(k))return k=cs(k,Q.mode,tt,null),k.return=Q,k;if(typeof k.then=="function")return xt(Q,Il(k),tt);if(k.$$typeof===U)return xt(Q,Ll(Q,k),tt);Bl(Q,k)}return null}function st(Q,k,tt,gt){var re=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return re!==null?null:R(Q,k,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===re?V(Q,k,tt,gt):null;case E:return tt.key===re?nt(Q,k,tt,gt):null;case X:return tt=ps(tt),st(Q,k,tt,gt)}if(rt(tt)||J(tt))return re!==null?null:pt(Q,k,tt,gt,null);if(typeof tt.then=="function")return st(Q,k,Il(tt),gt);if(tt.$$typeof===U)return st(Q,k,Ll(Q,tt),gt);Bl(Q,tt)}return null}function ct(Q,k,tt,gt,re){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Q=Q.get(tt)||null,R(k,Q,""+gt,re);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return Q=Q.get(gt.key===null?tt:gt.key)||null,V(k,Q,gt,re);case E:return Q=Q.get(gt.key===null?tt:gt.key)||null,nt(k,Q,gt,re);case X:return gt=ps(gt),ct(Q,k,tt,gt,re)}if(rt(gt)||J(gt))return Q=Q.get(tt)||null,pt(k,Q,gt,re,null);if(typeof gt.then=="function")return ct(Q,k,tt,Il(gt),re);if(gt.$$typeof===U)return ct(Q,k,tt,Ll(k,gt),re);Bl(k,gt)}return null}function Kt(Q,k,tt,gt){for(var re=null,Ne=null,ee=k,xe=k=0,Ae=null;ee!==null&&xe<tt.length;xe++){ee.index>xe?(Ae=ee,ee=null):Ae=ee.sibling;var Le=st(Q,ee,tt[xe],gt);if(Le===null){ee===null&&(ee=Ae);break}e&&ee&&Le.alternate===null&&i(Q,ee),k=d(Le,k,xe),Ne===null?re=Le:Ne.sibling=Le,Ne=Le,ee=Ae}if(xe===tt.length)return a(Q,ee),Re&&$i(Q,xe),re;if(ee===null){for(;xe<tt.length;xe++)ee=xt(Q,tt[xe],gt),ee!==null&&(k=d(ee,k,xe),Ne===null?re=ee:Ne.sibling=ee,Ne=ee);return Re&&$i(Q,xe),re}for(ee=o(ee);xe<tt.length;xe++)Ae=ct(ee,Q,xe,tt[xe],gt),Ae!==null&&(e&&Ae.alternate!==null&&ee.delete(Ae.key===null?xe:Ae.key),k=d(Ae,k,xe),Ne===null?re=Ae:Ne.sibling=Ae,Ne=Ae);return e&&ee.forEach(function(Ya){return i(Q,Ya)}),Re&&$i(Q,xe),re}function ce(Q,k,tt,gt){if(tt==null)throw Error(s(151));for(var re=null,Ne=null,ee=k,xe=k=0,Ae=null,Le=tt.next();ee!==null&&!Le.done;xe++,Le=tt.next()){ee.index>xe?(Ae=ee,ee=null):Ae=ee.sibling;var Ya=st(Q,ee,Le.value,gt);if(Ya===null){ee===null&&(ee=Ae);break}e&&ee&&Ya.alternate===null&&i(Q,ee),k=d(Ya,k,xe),Ne===null?re=Ya:Ne.sibling=Ya,Ne=Ya,ee=Ae}if(Le.done)return a(Q,ee),Re&&$i(Q,xe),re;if(ee===null){for(;!Le.done;xe++,Le=tt.next())Le=xt(Q,Le.value,gt),Le!==null&&(k=d(Le,k,xe),Ne===null?re=Le:Ne.sibling=Le,Ne=Le);return Re&&$i(Q,xe),re}for(ee=o(ee);!Le.done;xe++,Le=tt.next())Le=ct(ee,Q,xe,Le.value,gt),Le!==null&&(e&&Le.alternate!==null&&ee.delete(Le.key===null?xe:Le.key),k=d(Le,k,xe),Ne===null?re=Le:Ne.sibling=Le,Ne=Le);return e&&ee.forEach(function(py){return i(Q,py)}),Re&&$i(Q,xe),re}function We(Q,k,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===A&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var re=tt.key;k!==null;){if(k.key===re){if(re=tt.type,re===A){if(k.tag===7){a(Q,k.sibling),gt=u(k,tt.props.children),gt.return=Q,Q=gt;break t}}else if(k.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===X&&ps(re)===k.type){a(Q,k.sibling),gt=u(k,tt.props),_o(gt,tt),gt.return=Q,Q=gt;break t}a(Q,k);break}else i(Q,k);k=k.sibling}tt.type===A?(gt=cs(tt.props.children,Q.mode,gt,tt.key),gt.return=Q,Q=gt):(gt=Dl(tt.type,tt.key,tt.props,null,Q.mode,gt),_o(gt,tt),gt.return=Q,Q=gt)}return S(Q);case E:t:{for(re=tt.key;k!==null;){if(k.key===re)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Q,k.sibling),gt=u(k,tt.children||[]),gt.return=Q,Q=gt;break t}else{a(Q,k);break}else i(Q,k);k=k.sibling}gt=Bu(tt,Q.mode,gt),gt.return=Q,Q=gt}return S(Q);case X:return tt=ps(tt),We(Q,k,tt,gt)}if(rt(tt))return Kt(Q,k,tt,gt);if(J(tt)){if(re=J(tt),typeof re!="function")throw Error(s(150));return tt=re.call(tt),ce(Q,k,tt,gt)}if(typeof tt.then=="function")return We(Q,k,Il(tt),gt);if(tt.$$typeof===U)return We(Q,k,Ll(Q,tt),gt);Bl(Q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Q,k.sibling),gt=u(k,tt),gt.return=Q,Q=gt):(a(Q,k),gt=Iu(tt,Q.mode,gt),gt.return=Q,Q=gt),S(Q)):a(Q,k)}return function(Q,k,tt,gt){try{vo=0;var re=We(Q,k,tt,gt);return er=null,re}catch(ee){if(ee===tr||ee===Pl)throw ee;var Ne=ti(29,ee,null,Q.mode);return Ne.lanes=gt,Ne.return=Q,Ne}finally{}}}var gs=xm(!0),Sm=xm(!1),Da=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=wl(e),im(e,null,a),i}return Cl(e,o,i,a),wl(e)}function xo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Kr(e,a)}}function Ku(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=i:d=d.next=i}else u=d=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var $u=!1;function So(){if($u){var e=$s;if(e!==null)throw e}}function yo(e,i,a,o){$u=!1;var u=e.updateQueue;Da=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,nt=V.next;V.next=null,S===null?d=nt:S.next=nt,S=V;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==S&&(R===null?pt.firstBaseUpdate=nt:R.next=nt,pt.lastBaseUpdate=V))}if(d!==null){var xt=u.baseState;S=0,pt=nt=V=null,R=d;do{var st=R.lane&-536870913,ct=st!==R.lane;if(ct?(Te&st)===st:(o&st)===st){st!==0&&st===Ks&&($u=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Kt=e,ce=R;st=i;var We=a;switch(ce.tag){case 1:if(Kt=ce.payload,typeof Kt=="function"){xt=Kt.call(We,xt,st);break t}xt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=ce.payload,st=typeof Kt=="function"?Kt.call(We,xt,st):Kt,st==null)break t;xt=v({},xt,st);break t;case 2:Da=!0}}st=R.callback,st!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(nt=pt=ct,V=xt):pt=pt.next=ct,S|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);pt===null&&(V=xt),u.baseState=V,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,d===null&&(u.shared.lanes=0),Ia|=S,e.lanes=S,e.memoizedState=xt}}function ym(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Mm(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ym(a[e],i)}var nr=z(null),Fl=z(0);function bm(e,i){e=ua,mt(Fl,e),mt(nr,i),ua=e|i.baseLanes}function tf(){mt(Fl,ua),mt(nr,nr.current)}function ef(){ua=Fl.current,$(nr),$(Fl)}var ei=z(null),vi=null;function La(e){var i=e.alternate;mt(rn,rn.current&1),mt(ei,e),vi===null&&(i===null||nr.current!==null||i.memoizedState!==null)&&(vi=e)}function nf(e){mt(rn,rn.current),mt(ei,e),vi===null&&(vi=e)}function Em(e){e.tag===22?(mt(rn,rn.current),mt(ei,e),vi===null&&(vi=e)):Oa()}function Oa(){mt(rn,rn.current),mt(ei,ei.current)}function ni(e){$(ei),vi===e&&(vi=null),$(rn)}var rn=z(0);function Hl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ch(a)||uh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var na=0,ge=null,ke=null,fn=null,Gl=!1,ir=!1,vs=!1,Vl=0,Mo=0,ar=null,aS=0;function nn(){throw Error(s(321))}function af(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!$n(e[a],i[a]))return!1;return!0}function sf(e,i,a,o,u,d){return na=d,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?o0:Sf,vs=!1,d=a(o,u),vs=!1,ir&&(d=Am(i,a,o,u)),Tm(e),d}function Tm(e){F.H=To;var i=ke!==null&&ke.next!==null;if(na=0,fn=ke=ge=null,Gl=!1,Mo=0,ar=null,i)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&Nl(e)&&(hn=!0))}function Am(e,i,a,o){ge=e;var u=0;do{if(ir&&(ar=null),Mo=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,fn=ke=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=l0,d=i(a,o)}while(ir);return d}function sS(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?bo(i):i,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(ge.flags|=1024),i}function rf(){var e=Vl!==0;return Vl=0,e}function of(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function lf(e){if(Gl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Gl=!1}na=0,fn=ke=ge=null,ir=!1,Mo=Vl=0,ar=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ge.memoizedState=fn=e:fn=fn.next=e,fn}function on(){if(ke===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var i=fn===null?ge.memoizedState:fn.next;if(i!==null)fn=i,ke=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},fn===null?ge.memoizedState=fn=e:fn=fn.next=e}return fn}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(e){var i=Mo;return Mo+=1,ar===null&&(ar=[]),e=gm(ar,e,i),i=ge,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?o0:Sf),e}function Xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bo(e);if(e.$$typeof===U)return Dn(e)}throw Error(s(438,String(e)))}function cf(e){var i=null,a=ge.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=kl(),ge.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=w;return i.index++,a}function ia(e,i){return typeof i=="function"?i(e):i}function Wl(e){var i=on();return uf(i,ke,e)}function uf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var R=S=null,V=null,nt=i,pt=!1;do{var xt=nt.lane&-536870913;if(xt!==nt.lane?(Te&xt)===xt:(na&xt)===xt){var st=nt.revertLane;if(st===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),xt===Ks&&(pt=!0);else if((na&st)===st){nt=nt.next,st===Ks&&(pt=!0);continue}else xt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(R=V=xt,S=d):V=V.next=xt,ge.lanes|=st,Ia|=st;xt=nt.action,vs&&a(d,xt),d=nt.hasEagerState?nt.eagerState:a(d,xt)}else st={lane:xt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(R=V=st,S=d):V=V.next=st,ge.lanes|=xt,Ia|=xt;nt=nt.next}while(nt!==null&&nt!==i);if(V===null?S=d:V.next=R,!$n(d,e.memoizedState)&&(hn=!0,pt&&(a=$s,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ff(e){var i=on(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=i.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);$n(d,i.memoizedState)||(hn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function Rm(e,i,a){var o=ge,u=on(),d=Re;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var S=!$n((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,hn=!0),u=u.queue,pf(Dm.bind(null,o,u,e),[e]),u.getSnapshot!==i||S||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,sr(9,{destroy:void 0},wm.bind(null,o,u,a,i),null),Ye===null)throw Error(s(349));d||(na&127)!==0||Cm(o,i,a)}return a}function Cm(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ge.updateQueue,i===null?(i=kl(),ge.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function wm(e,i,a,o){i.value=a,i.getSnapshot=o,Um(i)&&Nm(e)}function Dm(e,i,a){return a(function(){Um(i)&&Nm(e)})}function Um(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!$n(e,a)}catch{return!0}}function Nm(e){var i=ls(e,2);i!==null&&Qn(i,e,2)}function hf(e){var i=Gn();if(typeof e=="function"){var a=e;if(e=a(),vs){zt(!0);try{a()}finally{zt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},i}function Lm(e,i,a,o){return e.baseState=a,uf(e,ke,typeof o=="function"?o:ia)}function rS(e,i,a,o,u){if(jl(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,Om(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Om(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=F.T,S={};F.T=S;try{var R=a(u,o),V=F.S;V!==null&&V(S,R),Pm(e,i,R)}catch(nt){df(e,i,nt)}finally{d!==null&&S.types!==null&&(d.types=S.types),F.T=d}}else try{d=a(u,o),Pm(e,i,d)}catch(nt){df(e,i,nt)}}function Pm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(e,i,o)},function(o){return df(e,i,o)}):zm(e,i,a)}function zm(e,i,a){i.status="fulfilled",i.value=a,Im(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Om(e,a)))}function df(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Im(i),i=i.next;while(i!==o)}e.action=null}function Im(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Bm(e,i){return i}function Fm(e,i){if(Re){var a=Ye.formState;if(a!==null){t:{var o=ge;if(Re){if(Ze){e:{for(var u=Ze,d=gi;u.nodeType!==8;){if(!d){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}Ca(o)}o=!1}o&&(i=a[0])}}return a=Gn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:i},a.queue=o,a=a0.bind(null,ge,o),o.dispatch=a,o=hf(!1),d=xf.bind(null,ge,!1,o.queue),o=Gn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=rS.bind(null,ge,u,d,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function Hm(e){var i=on();return Gm(i,ke,e)}function Gm(e,i,a){if(i=uf(e,i,Bm)[0],e=Wl(ia)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=bo(i)}catch(S){throw S===tr?Pl:S}else o=i;i=on();var u=i.queue,d=u.dispatch;return a!==i.memoizedState&&(ge.flags|=2048,sr(9,{destroy:void 0},oS.bind(null,u,a),null)),[o,d,e]}function oS(e,i){e.action=i}function Vm(e){var i=on(),a=ke;if(a!==null)return Gm(i,a,e);on(),i=i.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function sr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=ge.updateQueue,i===null&&(i=kl(),ge.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function km(){return on().memoizedState}function ql(e,i,a,o){var u=Gn();ge.flags|=e,u.memoizedState=sr(1|i,{destroy:void 0},a,o===void 0?null:o)}function Yl(e,i,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;ke!==null&&o!==null&&af(o,ke.memoizedState.deps)?u.memoizedState=sr(i,d,a,o):(ge.flags|=e,u.memoizedState=sr(1|i,d,a,o))}function Xm(e,i){ql(8390656,8,e,i)}function pf(e,i){Yl(2048,8,e,i)}function lS(e){ge.flags|=4;var i=ge.updateQueue;if(i===null)i=kl(),ge.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Wm(e){var i=on().memoizedState;return lS({ref:i,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function qm(e,i){return Yl(4,2,e,i)}function Ym(e,i){return Yl(4,4,e,i)}function jm(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Zm(e,i,a){a=a!=null?a.concat([e]):null,Yl(4,4,jm.bind(null,i,e),a)}function mf(){}function Qm(e,i){var a=on();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&af(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function Jm(e,i){var a=on();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&af(i,o[1]))return o[0];if(o=e(),vs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,i],o}function gf(e,i,a){return a===void 0||(na&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=K0(),ge.lanes|=e,Ia|=e,a)}function Km(e,i,a,o){return $n(a,i)?a:nr.current!==null?(e=gf(e,a,o),$n(e,i)||(hn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Te&261930)===0?(hn=!0,e.memoizedState=a):(e=K0(),ge.lanes|=e,Ia|=e,i)}function $m(e,i,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var S=F.T,R={};F.T=R,xf(e,!1,i,a);try{var V=u(),nt=F.S;if(nt!==null&&nt(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pt=iS(V,o);Eo(e,i,pt,si(e))}else Eo(e,i,o,si(e))}catch(xt){Eo(e,i,{then:function(){},status:"rejected",reason:xt},si())}finally{G.p=d,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function cS(){}function vf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var u=t0(e).queue;$m(e,u,i,et,a===null?cS:function(){return e0(e),a(o)})}function t0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:et},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function e0(e){var i=t0(e);i.next===null&&(i=e.alternate.memoizedState),Eo(e,i.next.queue,{},si())}function _f(){return Dn(Go)}function n0(){return on().memoizedState}function i0(){return on().memoizedState}function uS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=si();e=Ua(a);var o=Na(i,e,a);o!==null&&(Qn(o,i,a),xo(o,i,a)),i={cache:qu()},e.payload=i;return}i=i.return}}function fS(e,i,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jl(e)?s0(i,a):(a=Pu(e,i,a,o),a!==null&&(Qn(a,e,o),r0(a,i,o)))}function a0(e,i,a){var o=si();Eo(e,i,a,o)}function Eo(e,i,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(e))s0(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,R=d(S,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,S))return Cl(e,i,u,0),Ye===null&&Rl(),!1}catch{}finally{}if(a=Pu(e,i,u,o),a!==null)return Qn(a,e,o),r0(a,i,o),!0}return!1}function xf(e,i,a,o){if(o={lane:2,revertLane:Jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(e)){if(i)throw Error(s(479))}else i=Pu(e,a,o,2),i!==null&&Qn(i,e,2)}function jl(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function s0(e,i){ir=Gl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function r0(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Kr(e,a)}}var To={readContext:Dn,use:Xl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};To.useEffectEvent=nn;var o0={readContext:Dn,use:Xl,useCallback:function(e,i){return Gn().memoizedState=[e,i===void 0?null:i],e},useContext:Dn,useEffect:Xm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,ql(4194308,4,jm.bind(null,i,e),a)},useLayoutEffect:function(e,i){return ql(4194308,4,e,i)},useInsertionEffect:function(e,i){ql(4,2,e,i)},useMemo:function(e,i){var a=Gn();i=i===void 0?null:i;var o=e();if(vs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Gn();if(a!==void 0){var u=a(i);if(vs){zt(!0);try{a(i)}finally{zt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=fS.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var i=Gn();return e={current:e},i.memoizedState=e},useState:function(e){e=hf(e);var i=e.queue,a=a0.bind(null,ge,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(e,i){var a=Gn();return gf(a,e,i)},useTransition:function(){var e=hf(!1);return e=$m.bind(null,ge,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=ge,u=Gn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ye===null)throw Error(s(349));(Te&127)!==0||Cm(o,i,a)}u.memoizedState=a;var d={value:a,getSnapshot:i};return u.queue=d,Xm(Dm.bind(null,o,d,e),[e]),o.flags|=2048,sr(9,{destroy:void 0},wm.bind(null,o,d,a,i),null),a},useId:function(){var e=Gn(),i=Ye.identifierPrefix;if(Re){var a=zi,o=Pi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Vl++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=aS++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:_f,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var i=Gn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=xf.bind(null,ge,!0,a),a.dispatch=i,[e,i]},useMemoCache:cf,useCacheRefresh:function(){return Gn().memoizedState=uS.bind(null,ge)},useEffectEvent:function(e){var i=Gn(),a={impl:e};return i.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Dn,use:Xl,useCallback:Qm,useContext:Dn,useEffect:pf,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Wl,useRef:km,useState:function(){return Wl(ia)},useDebugValue:mf,useDeferredValue:function(e,i){var a=on();return Km(a,ke.memoizedState,e,i)},useTransition:function(){var e=Wl(ia)[0],i=on().memoizedState;return[typeof e=="boolean"?e:bo(e),i]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:_f,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,i){var a=on();return Lm(a,ke,e,i)},useMemoCache:cf,useCacheRefresh:i0};Sf.useEffectEvent=Wm;var l0={readContext:Dn,use:Xl,useCallback:Qm,useContext:Dn,useEffect:pf,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:ff,useRef:km,useState:function(){return ff(ia)},useDebugValue:mf,useDeferredValue:function(e,i){var a=on();return ke===null?gf(a,e,i):Km(a,ke.memoizedState,e,i)},useTransition:function(){var e=ff(ia)[0],i=on().memoizedState;return[typeof e=="boolean"?e:bo(e),i]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:_f,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,i){var a=on();return ke!==null?Lm(a,ke,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:i0};l0.useEffectEvent=Wm;function yf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:v({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=si(),u=Ua(o);u.payload=i,a!=null&&(u.callback=a),i=Na(e,u,o),i!==null&&(Qn(i,e,o),xo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=si(),u=Ua(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=Na(e,u,o),i!==null&&(Qn(i,e,o),xo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=si(),o=Ua(a);o.tag=2,i!=null&&(o.callback=i),i=Na(e,o,a),i!==null&&(Qn(i,e,a),xo(i,e,a))}};function c0(e,i,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!uo(a,o)||!uo(u,d):!0}function u0(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&Mf.enqueueReplaceState(i,i.state,null)}function _s(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function f0(e){Al(e)}function h0(e){console.error(e)}function d0(e){Al(e)}function Zl(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function p0(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(e,i,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(e,i)},a}function m0(e){return e=Ua(e),e.tag=3,e}function g0(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){p0(i,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){p0(i,a,o),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function hS(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Js(i,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?oc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zl?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),jf(e,o,u)),!1;case 22:return a.flags|=65536,o===zl?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),jf(e,o,u)),!1}throw Error(s(435,a.tag))}return jf(e,o,u),oc(),!1}if(Re)return i=ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Gu&&(e=Error(s(422),{cause:o}),po(di(e,a)))):(o!==Gu&&(i=Error(s(423),{cause:o}),po(di(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=bf(e.stateNode,o,u),Ku(e,u),an!==4&&(an=2)),!1;var d=Error(s(520),{cause:o});if(d=di(d,a),Lo===null?Lo=[d]:Lo.push(d),an!==4&&(an=2),i===null)return!0;o=di(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bf(a.stateNode,o,e),Ku(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ba===null||!Ba.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=m0(u),g0(u,e,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),hn=!1;function Un(e,i,a,o){i.child=e===null?Sm(i,null,a,o):gs(i,e.child,a,o)}function v0(e,i,a,o,u){a=a.render;var d=i.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return hs(i),o=sf(e,i,a,S,d,u),R=rf(),e!==null&&!hn?(of(e,i,u),aa(e,i,u)):(Re&&R&&Fu(i),i.flags|=1,Un(e,i,o,u),i.child)}function _0(e,i,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!zu(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,x0(e,i,d,o,u)):(e=Dl(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Nf(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(S,o)&&e.ref===i.ref)return aa(e,i,u)}return i.flags|=1,e=Ki(d,o),e.ref=i.ref,e.return=i,i.child=e}function x0(e,i,a,o,u){if(e!==null){var d=e.memoizedProps;if(uo(d,o)&&e.ref===i.ref)if(hn=!1,i.pendingProps=o=d,Nf(e,u))(e.flags&131072)!==0&&(hn=!0);else return i.lanes=e.lanes,aa(e,i,u)}return Tf(e,i,a,o,u)}function S0(e,i,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return y0(e,i,d,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(i,d!==null?d.cachePool:null),d!==null?bm(i,d):tf(),Em(i);else return o=i.lanes=536870912,y0(e,i,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ol(i,d.cachePool),bm(i,d),Oa(),i.memoizedState=null):(e!==null&&Ol(i,null),tf(),Oa());return Un(e,i,u,a),i.child}function Ao(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function y0(e,i,a,o,u){var d=ju();return d=d===null?null:{parent:un._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Ol(i,null),tf(),Em(i),e!==null&&Js(e,i,o,!0),i.childLanes=u,null}function Ql(e,i){return i=Kl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function M0(e,i,a){return gs(i,e.child,null,a),e=Ql(i,i.pendingProps),e.flags|=2,ni(i),i.memoizedState=null,e}function dS(e,i,a){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Re){if(o.mode==="hidden")return e=Ql(i,o),i.lanes=536870912,Ao(null,e);if(nf(i),(e=Ze)?(e=Og(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=i,i.child=a,wn=i,Ze=null)):e=null,e===null)throw Ca(i);return i.lanes=536870912,null}return Ql(i,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(nf(i),u)if(i.flags&256)i.flags&=-257,i=M0(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(hn||Js(e,i,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=Ye,o!==null&&(S=zs(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,ls(e,S),Qn(o,e,S),Ef;oc(),i=M0(e,i,a)}else e=d.treeContext,Ze=_i(S.nextSibling),wn=i,Re=!0,Ra=null,gi=!1,e!==null&&lm(i,e),i=Ql(i,o),i.flags|=4096;return i}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Jl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Tf(e,i,a,o,u){return hs(i),a=sf(e,i,a,o,void 0,u),o=rf(),e!==null&&!hn?(of(e,i,u),aa(e,i,u)):(Re&&o&&Fu(i),i.flags|=1,Un(e,i,a,u),i.child)}function b0(e,i,a,o,u,d){return hs(i),i.updateQueue=null,a=Am(i,o,a,u),Tm(e),o=rf(),e!==null&&!hn?(of(e,i,d),aa(e,i,d)):(Re&&o&&Fu(i),i.flags|=1,Un(e,i,a,d),i.child)}function E0(e,i,a,o,u){if(hs(i),i.stateNode===null){var d=Ys,S=a.contextType;typeof S=="object"&&S!==null&&(d=Dn(S)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Qu(i),S=a.contextType,d.context=typeof S=="object"&&S!==null?Dn(S):Ys,d.state=i.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yf(i,a,S,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Mf.enqueueReplaceState(d,d.state,null),yo(i,o,d,u),So(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,V=_s(a,R);d.props=V;var nt=d.context,pt=a.contextType;S=Ys,typeof pt=="object"&&pt!==null&&(S=Dn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||nt!==S)&&u0(i,d,o,S),Da=!1;var st=i.memoizedState;d.state=st,yo(i,o,d,u),So(),nt=i.memoizedState,R||st!==nt||Da?(typeof xt=="function"&&(yf(i,a,xt,o),nt=i.memoizedState),(V=Da||c0(i,a,V,o,st,nt,S))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=nt),d.props=o,d.state=nt,d.context=S,o=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Ju(e,i),S=i.memoizedProps,pt=_s(a,S),d.props=pt,xt=i.pendingProps,st=d.context,nt=a.contextType,V=Ys,typeof nt=="object"&&nt!==null&&(V=Dn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==xt||st!==V)&&u0(i,d,o,V),Da=!1,st=i.memoizedState,d.state=st,yo(i,o,d,u),So();var ct=i.memoizedState;S!==xt||st!==ct||Da||e!==null&&e.dependencies!==null&&Nl(e.dependencies)?(typeof R=="function"&&(yf(i,a,R,o),ct=i.memoizedState),(pt=Da||c0(i,a,pt,o,st,ct,V)||e!==null&&e.dependencies!==null&&Nl(e.dependencies))?(nt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ct,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ct,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ct),d.props=o,d.state=ct,d.context=V,o=pt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Jl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=gs(i,e.child,null,u),i.child=gs(i,null,a,u)):Un(e,i,a,u),i.memoizedState=d.state,e=i.child):e=aa(e,i,u),e}function T0(e,i,a,o){return us(),i.flags|=256,Un(e,i,a,o),i.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(e){return{baseLanes:e,cachePool:pm()}}function Cf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=ai),e}function A0(e,i,a){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(u?La(i):Oa(),(e=Ze)?(e=Og(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=i,i.child=a,wn=i,Ze=null)):e=null,e===null)throw Ca(i);return uh(e)?i.lanes=32:i.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Oa(),u=i.mode,R=Kl({mode:"hidden",children:R},u),o=cs(o,u,a,null),R.return=i,o.return=i,R.sibling=o,i.child=R,o=i.child,o.memoizedState=Rf(a),o.childLanes=Cf(e,S,a),i.memoizedState=Af,Ao(null,o)):(La(i),wf(i,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(d)i.flags&256?(La(i),i.flags&=-257,i=Df(e,i,a)):i.memoizedState!==null?(Oa(),i.child=e.child,i.flags|=128,i=null):(Oa(),R=o.fallback,u=i.mode,o=Kl({mode:"visible",children:o.children},u),R=cs(R,u,a,null),R.flags|=2,o.return=i,R.return=i,o.sibling=R,i.child=o,gs(i,e.child,null,a),o=i.child,o.memoizedState=Rf(a),o.childLanes=Cf(e,S,a),i.memoizedState=Af,i=Ao(null,o));else if(La(i),uh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var nt=S.dgst;S=nt,o=Error(s(419)),o.stack="",o.digest=S,po({value:o,source:null,stack:null}),i=Df(e,i,a)}else if(hn||Js(e,i,a,!1),S=(a&e.childLanes)!==0,hn||S){if(S=Ye,S!==null&&(o=zs(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,ls(e,o),Qn(S,e,o),Ef;ch(R)||oc(),i=Df(e,i,a)}else ch(R)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Ze=_i(R.nextSibling),wn=i,Re=!0,Ra=null,gi=!1,e!==null&&lm(i,e),i=wf(i,o.children),i.flags|=4096);return i}return u?(Oa(),R=o.fallback,u=i.mode,V=e.child,nt=V.sibling,o=Ki(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,nt!==null?R=Ki(nt,R):(R=cs(R,u,a,null),R.flags|=2),R.return=i,o.return=i,o.sibling=R,i.child=o,Ao(null,o),o=i.child,R=e.child.memoizedState,R===null?R=Rf(a):(u=R.cachePool,u!==null?(V=un._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=pm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Cf(e,S,a),i.memoizedState=Af,Ao(e.child,o)):(La(i),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=a,i.memoizedState=null,a)}function wf(e,i){return i=Kl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Kl(e,i){return e=ti(22,e,null,i),e.lanes=0,e}function Df(e,i,a){return gs(i,e.child,null,a),e=wf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function R0(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Xu(e.return,i,a)}function Uf(e,i,a,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function C0(e,i,a){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=rn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,mt(rn,S),Un(e,i,o,a),o=Re?ho:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R0(e,a,i);else if(e.tag===19)R0(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Hl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Uf(i,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Hl(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Uf(i,!0,a,null,d,o);break;case"together":Uf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function aa(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ia|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Js(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ki(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Nf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Nl(e)))}function pS(e,i,a){switch(i.tag){case 3:Pt(i,i.stateNode.containerInfo),wa(i,un,e.memoizedState.cache),us();break;case 27:case 5:qt(i);break;case 4:Pt(i,i.stateNode.containerInfo);break;case 10:wa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,nf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(La(i),i.flags|=128,null):(a&i.child.childLanes)!==0?A0(e,i,a):(La(i),e=aa(e,i,a),e!==null?e.sibling:null);La(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Js(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return C0(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(rn,rn.current),o)break;return null;case 22:return i.lanes=0,S0(e,i,a,i.pendingProps);case 24:wa(i,un,e.memoizedState.cache)}return aa(e,i,a)}function w0(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)hn=!0;else{if(!Nf(e,a)&&(i.flags&128)===0)return hn=!1,pS(e,i,a);hn=(e.flags&131072)!==0}else hn=!1,Re&&(i.flags&1048576)!==0&&om(i,ho,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=ps(i.elementType),i.type=e,typeof e=="function")zu(e)?(o=_s(e,o),i.tag=1,i=E0(null,i,e,o,a)):(i.tag=0,i=Tf(null,i,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){i.tag=11,i=v0(null,i,e,o,a);break t}else if(u===O){i.tag=14,i=_0(null,i,e,o,a);break t}}throw i=ot(e)||e,Error(s(306,i,""))}}return i;case 0:return Tf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=_s(o,i.pendingProps),E0(e,i,o,u,a);case 3:t:{if(Pt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Ju(e,i),yo(i,o,null,a);var S=i.memoizedState;if(o=S.cache,wa(i,un,o),o!==d.cache&&Wu(i,[un],a,!0),So(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=T0(e,i,o,a);break t}else if(o!==u){u=di(Error(s(424)),i),po(u),i=T0(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),wn=i,Re=!0,Ra=null,gi=!0,a=Sm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(us(),o===u){i=aa(e,i,a);break t}Un(e,i,o,a)}i=i.child}return i;case 26:return Jl(e,i),e===null?(a=Hg(i.type,null,i.pendingProps,null))?i.memoizedState=a:Re||(a=i.type,e=i.pendingProps,o=pc(it.current).createElement(a),o[cn]=i,o[bn]=e,Nn(o,a,e),C(o),i.stateNode=o):i.memoizedState=Hg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return qt(i),e===null&&Re&&(o=i.stateNode=Ig(i.type,i.pendingProps,it.current),wn=i,gi=!0,u=Ze,Va(i.type)?(fh=u,Ze=_i(o.firstChild)):Ze=u),Un(e,i,i.pendingProps.children,a),Jl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Re&&((u=o=Ze)&&(o=XS(o,i.type,i.pendingProps,gi),o!==null?(i.stateNode=o,wn=i,Ze=_i(o.firstChild),gi=!1,u=!0):u=!1),u||Ca(i)),qt(i),u=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,rh(u,d)?o=null:S!==null&&rh(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=sf(e,i,sS,null,null,a),Go._currentValue=u),Jl(e,i),Un(e,i,o,a),i.child;case 6:return e===null&&Re&&((e=a=Ze)&&(a=WS(a,i.pendingProps,gi),a!==null?(i.stateNode=a,wn=i,Ze=null,e=!0):e=!1),e||Ca(i)),null;case 13:return A0(e,i,a);case 4:return Pt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=gs(i,null,o,a):Un(e,i,o,a),i.child;case 11:return v0(e,i,i.type,i.pendingProps,a);case 7:return Un(e,i,i.pendingProps,a),i.child;case 8:return Un(e,i,i.pendingProps.children,a),i.child;case 12:return Un(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,wa(i,i.type,o.value),Un(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,hs(i),u=Dn(u),o=o(u),i.flags|=1,Un(e,i,o,a),i.child;case 14:return _0(e,i,i.type,i.pendingProps,a);case 15:return x0(e,i,i.type,i.pendingProps,a);case 19:return C0(e,i,a);case 31:return dS(e,i,a);case 22:return S0(e,i,a,i.pendingProps);case 24:return hs(i),o=Dn(un),e===null?(u=ju(),u===null&&(u=Ye,d=qu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),i.memoizedState={parent:o,cache:u},Qu(i),wa(i,un,u)):((e.lanes&a)!==0&&(Ju(e,i),yo(i,null,null,a),So()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),wa(i,un,o)):(o=d.cache,wa(i,un,o),o!==u.cache&&Wu(i,[un],a,!0))),Un(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function sa(e){e.flags|=4}function Lf(e,i,a,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ng())e.flags|=8192;else throw ms=zl,Zu}else e.flags&=-16777217}function D0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wg(i))if(ng())e.flags|=8192;else throw ms=zl,Zu}function $l(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Be():536870912,e.lanes|=i,cr|=i)}function Ro(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function mS(e,i,a){var o=i.pendingProps;switch(Hu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ea(un),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qs(i)?sa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vu())),Qe(i),null;case 26:var u=i.type,d=i.memoizedState;return e===null?(sa(i),d!==null?(Qe(i),D0(i,d)):(Qe(i),Lf(i,u,null,o,a))):d?d!==e.memoizedState?(sa(i),Qe(i),D0(i,d)):(Qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&sa(i),Qe(i),Lf(i,u,e,o,a)),null;case 27:if(ve(i),a=it.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Qe(i),null}e=Ct.current,Qs(i)?cm(i):(e=Ig(u,o,a),i.stateNode=e,sa(i))}return Qe(i),null;case 5:if(ve(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Qe(i),null}if(d=Ct.current,Qs(i))cm(i);else{var S=pc(it.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[cn]=i,d[bn]=o;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Nn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&sa(i)}}return Qe(i),Lf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=it.current,Qs(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ag(e.nodeValue,a)),e||Ca(i,!0)}else e=pc(e).createTextNode(o),e[cn]=i,i.stateNode=e}return Qe(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=Qs(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),e=!1}else a=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(ni(i),i):(ni(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Qe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Qs(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),u=!1}else u=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ni(i),i):(ni(i),null)}return ni(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),$l(i,i.updateQueue),Qe(i),null);case 4:return Xt(),e===null&&eh(i.stateNode.containerInfo),Qe(i),null;case 10:return ea(i.type),Qe(i),null;case 19:if($(rn),o=i.memoizedState,o===null)return Qe(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)Ro(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Hl(e),d!==null){for(i.flags|=128,Ro(o,!1),e=d.updateQueue,i.updateQueue=e,$l(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)am(a,e),a=a.sibling;return mt(rn,rn.current&1|2),Re&&$i(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&b()>ac&&(i.flags|=128,u=!0,Ro(o,!1),i.lanes=4194304)}else{if(!u)if(e=Hl(d),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,$l(i,e),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Re)return Qe(i),null}else 2*b()-o.renderingStartTime>ac&&a!==536870912&&(i.flags|=128,u=!0,Ro(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=rn.current,mt(rn,u?a&1|2:a&1),Re&&$i(i,o.treeForkCount),e):(Qe(i),null);case 22:case 23:return ni(i),ef(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),a=i.updateQueue,a!==null&&$l(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&$(ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ea(un),Qe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function gS(e,i){switch(Hu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ea(un),Xt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ve(i),null;case 31:if(i.memoizedState!==null){if(ni(i),i.alternate===null)throw Error(s(340));us()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ni(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));us()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $(rn),null;case 4:return Xt(),null;case 10:return ea(i.type),null;case 22:case 23:return ni(i),ef(),e!==null&&$(ds),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ea(un),null;case 25:return null;default:return null}}function U0(e,i){switch(Hu(i),i.tag){case 3:ea(un),Xt();break;case 26:case 27:case 5:ve(i);break;case 4:Xt();break;case 31:i.memoizedState!==null&&ni(i);break;case 13:ni(i);break;case 19:$(rn);break;case 10:ea(i.type);break;case 22:case 23:ni(i),ef(),e!==null&&$(ds);break;case 24:ea(un)}}function Co(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Ge(i,i.return,R)}}function Pa(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=i;var V=a,nt=R;try{nt()}catch(pt){Ge(u,V,pt)}}}o=o.next}while(o!==d)}}catch(pt){Ge(i,i.return,pt)}}function N0(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Mm(i,a)}catch(o){Ge(e,e.return,o)}}}function L0(e,i,a){a.props=_s(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,i,o)}}function wo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,i,u)}}function Ii(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,i,u)}else a.current=null}function O0(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Of(e,i,a){try{var o=e.stateNode;BS(o,e.type,a,i),o[bn]=i}catch(u){Ge(e,e.return,u)}}function P0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||P0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Qi));else if(o!==4&&(o===27&&Va(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(zf(e,i,a),e=e.sibling;e!==null;)zf(e,i,a),e=e.sibling}function tc(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,i,a),e=e.sibling;e!==null;)tc(e,i,a),e=e.sibling}function z0(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Nn(i,o,a),i[cn]=e,i[bn]=a}catch(d){Ge(e,e.return,d)}}var ra=!1,dn=!1,If=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function vS(e,i){if(e=e.containerInfo,ah=yc,e=Zp(e),wu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,R=-1,V=-1,nt=0,pt=0,xt=e,st=null;e:for(;;){for(var ct;xt!==a||u!==0&&xt.nodeType!==3||(R=S+u),xt!==d||o!==0&&xt.nodeType!==3||(V=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(ct=xt.firstChild)!==null;)st=xt,xt=ct;for(;;){if(xt===e)break e;if(st===a&&++nt===u&&(R=S),st===d&&++pt===o&&(V=S),(ct=xt.nextSibling)!==null)break;xt=st,st=xt.parentNode}xt=ct}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:e,selectionRange:a},yc=!1,Sn=i;Sn!==null;)if(i=Sn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Sn=e;else for(;Sn!==null;){switch(i=Sn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Kt=_s(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ge(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)lh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Sn=e;break}Sn=i.return}}function B0(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),o&4&&Co(5,a);break;case 1:if(la(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=_s(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&N0(a),o&512&&wo(a,a.return);break;case 3:if(la(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Mm(e,i)}catch(S){Ge(a,a.return,S)}}break;case 27:i===null&&o&4&&z0(a);case 26:case 5:la(e,a),i===null&&o&4&&O0(a),o&512&&wo(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),o&4&&G0(e,a);break;case 13:la(e,a),o&4&&V0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=AS.bind(null,a),qS(e,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){i=i!==null&&i.memoizedState!==null||dn,u=ra;var d=dn;ra=o,(dn=i)&&!d?ca(e,a,(a.subtreeFlags&8772)!==0):la(e,a),ra=u,dn=d}break;case 30:break;default:la(e,a)}}function F0(e){var i=e.alternate;i!==null&&(e.alternate=null,F0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&no(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,qn=!1;function oa(e,i,a){for(a=a.child;a!==null;)H0(e,i,a),a=a.sibling}function H0(e,i,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:dn||Ii(a,i),oa(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ii(a,i);var o=Ke,u=qn;Va(a.type)&&(Ke=a.stateNode,qn=!1),oa(e,i,a),Bo(a.stateNode),Ke=o,qn=u;break;case 5:dn||Ii(a,i);case 6:if(o=Ke,u=qn,Ke=null,oa(e,i,a),Ke=o,qn=u,Ke!==null)if(qn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(d){Ge(a,i,d)}else try{Ke.removeChild(a.stateNode)}catch(d){Ge(a,i,d)}break;case 18:Ke!==null&&(qn?(e=Ke,Ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vr(e)):Ng(Ke,a.stateNode));break;case 4:o=Ke,u=qn,Ke=a.stateNode.containerInfo,qn=!0,oa(e,i,a),Ke=o,qn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,i),dn||Pa(4,a,i),oa(e,i,a);break;case 1:dn||(Ii(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&L0(a,i,o)),oa(e,i,a);break;case 21:oa(e,i,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,oa(e,i,a),dn=o;break;default:oa(e,i,a)}}function G0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vr(e)}catch(a){Ge(i,i.return,a)}}}function V0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vr(e)}catch(a){Ge(i,i.return,a)}}function _S(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new I0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new I0),i;default:throw Error(s(435,e.tag))}}function ec(e,i){var a=_S(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var u=RS.bind(null,e,o);o.then(u,u)}})}function Yn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=i,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(Va(R.type)){Ke=R.stateNode,qn=!1;break t}break;case 5:Ke=R.stateNode,qn=!1;break t;case 3:case 4:Ke=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(Ke===null)throw Error(s(160));H0(d,S,u),Ke=null,qn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)k0(i,e),i=i.sibling}var Ai=null;function k0(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(i,e),jn(e),o&4&&(Pa(3,e,e.return),Co(3,e),Pa(5,e,e.return));break;case 1:Yn(i,e),jn(e),o&512&&(dn||a===null||Ii(a,a.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Yn(i,e),jn(e),o&512&&(dn||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[is]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Nn(d,o,a),d[cn]=e,C(d),o=d;break t;case"link":var S=kg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=kg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=e,C(d),o=d}e.stateNode=o}else Xg(u,e.type,e.stateNode);else e.stateNode=Vg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Xg(u,e.type,e.stateNode):Vg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Of(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(i,e),jn(e),o&512&&(dn||a===null||Ii(a,a.return)),a!==null&&o&4&&Of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(i,e),jn(e),o&512&&(dn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{gn(u,"")}catch(Kt){Ge(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Of(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(Yn(i,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){Ge(e,e.return,Kt)}}break;case 3:if(vc=null,u=Ai,Ai=mc(i.containerInfo),Yn(i,e),Ai=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(i.containerInfo)}catch(Kt){Ge(e,e.return,Kt)}If&&(If=!1,X0(e));break;case 4:o=Ai,Ai=mc(e.stateNode.containerInfo),Yn(i,e),jn(e),Ai=o;break;case 12:Yn(i,e),jn(e);break;case 31:Yn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 13:Yn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,nt=ra,pt=dn;if(ra=nt||u,dn=pt||V,Yn(i,e),dn=pt,ra=nt,jn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||V||ra||dn||xs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){V=a=i;try{if(d=V.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=V.stateNode;var xt=V.memoizedProps.style,st=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Kt){Ge(V,V.return,Kt)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Kt){Ge(V,V.return,Kt)}}}else if(i.tag===18){if(a===null){V=i;try{var ct=V.stateNode;u?Lg(ct,!0):Lg(V.stateNode,!1)}catch(Kt){Ge(V,V.return,Kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(e,a))));break;case 19:Yn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 30:break;case 21:break;default:Yn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(P0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Pf(e);tc(e,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(gn(S,""),a.flags&=-33);var R=Pf(e);tc(e,R,S);break;case 3:case 4:var V=a.stateNode.containerInfo,nt=Pf(e);zf(e,nt,V);break;default:throw Error(s(161))}}catch(pt){Ge(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function X0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;X0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function la(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)B0(e,i.alternate,i),i=i.sibling}function xs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Pa(4,i,i.return),xs(i);break;case 1:Ii(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&L0(i,i.return,a),xs(i);break;case 27:Bo(i.stateNode);case 26:case 5:Ii(i,i.return),xs(i);break;case 22:i.memoizedState===null&&xs(i);break;case 30:xs(i);break;default:xs(i)}e=e.sibling}}function ca(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:ca(u,d,a),Co(4,d);break;case 1:if(ca(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Ge(o,o.return,nt)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)ym(V[u],R)}catch(nt){Ge(o,o.return,nt)}}a&&S&64&&N0(d),wo(d,d.return);break;case 27:z0(d);case 26:case 5:ca(u,d,a),a&&o===null&&S&4&&O0(d),wo(d,d.return);break;case 12:ca(u,d,a);break;case 31:ca(u,d,a),a&&S&4&&G0(u,d);break;case 13:ca(u,d,a),a&&S&4&&V0(u,d);break;case 22:d.memoizedState===null&&ca(u,d,a),wo(d,d.return);break;case 30:break;default:ca(u,d,a)}i=i.sibling}}function Bf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mo(a))}function Ff(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&mo(e))}function Ri(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)W0(e,i,a,o),i=i.sibling}function W0(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ri(e,i,a,o),u&2048&&Co(9,i);break;case 1:Ri(e,i,a,o);break;case 3:Ri(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&mo(e)));break;case 12:if(u&2048){Ri(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(i,i.return,V)}}else Ri(e,i,a,o);break;case 31:Ri(e,i,a,o);break;case 13:Ri(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ri(e,i,a,o):Do(e,i):d._visibility&2?Ri(e,i,a,o):(d._visibility|=2,rr(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Bf(S,i);break;case 24:Ri(e,i,a,o),u&2048&&Ff(i.alternate,i);break;default:Ri(e,i,a,o)}}function rr(e,i,a,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,R=a,V=o,nt=S.flags;switch(S.tag){case 0:case 11:case 15:rr(d,S,R,V,u),Co(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?rr(d,S,R,V,u):Do(d,S):(pt._visibility|=2,rr(d,S,R,V,u)),u&&nt&2048&&Bf(S.alternate,S);break;case 24:rr(d,S,R,V,u),u&&nt&2048&&Ff(S.alternate,S);break;default:rr(d,S,R,V,u)}i=i.sibling}}function Do(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Bf(o.alternate,o);break;case 24:Do(a,o),u&2048&&Ff(o.alternate,o);break;default:Do(a,o)}i=i.sibling}}var Uo=8192;function or(e,i,a){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)q0(e,i,a),e=e.sibling}function q0(e,i,a){switch(e.tag){case 26:or(e,i,a),e.flags&Uo&&e.memoizedState!==null&&ay(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:or(e,i,a);break;case 3:case 4:var o=Ai;Ai=mc(e.stateNode.containerInfo),or(e,i,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,or(e,i,a),Uo=o):or(e,i,a));break;default:or(e,i,a)}}function Y0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function No(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Sn=o,Z0(o,e)}Y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)j0(e),e=e.sibling}function j0(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,nc(e)):No(e);break;default:No(e)}}function nc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Sn=o,Z0(o,e)}Y0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Pa(8,i,i.return),nc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,nc(i));break;default:nc(i)}e=e.sibling}}function Z0(e,i){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(F0(o),o===a){Sn=null;break t}if(u!==null){u.return=d,Sn=u;break t}Sn=d}}}var xS={getCacheForType:function(e){var i=Dn(un),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return Dn(un).controller.signal}},SS=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,be=null,Te=0,He=0,ii=null,za=!1,lr=!1,Hf=!1,ua=0,an=0,Ia=0,Ss=0,Gf=0,ai=0,cr=0,Lo=null,Zn=null,Vf=!1,ic=0,Q0=0,ac=1/0,sc=null,Ba=null,vn=0,Fa=null,ur=null,fa=0,kf=0,Xf=null,J0=null,Oo=0,Wf=null;function si(){return(ze&2)!==0&&Te!==0?Te&-Te:F.T!==null?Jf():to()}function K0(){if(ai===0)if((Te&536870912)===0||Re){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Qn(e,i,a){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Ha(e,Te,ai,!1)),On(e,a),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(Ss|=a),an===4&&Ha(e,Te,ai,!1)),Bi(e))}function $0(e,i,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Ot(e,i),u=o?bS(e,i):Yf(e,i,!0),d=o;do{if(u===0){lr&&!o&&Ha(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!yS(a)){u=Yf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var R=e;u=Lo;var V=R.current.memoizedState.isDehydrated;if(V&&(fr(R,S).flags|=256),S=Yf(R,S,!1),S!==2){if(Hf&&!V){R.errorRecoveryDisabledLanes|=d,Ss|=d,u=4;break t}d=Zn,Zn=u,d!==null&&(Zn===null?Zn=d:Zn.push.apply(Zn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){fr(e,0),Ha(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ha(o,i,ai,!za);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=ic+300-b(),10<u)){if(Ha(o,i,ai,!za),St(o,0,!0)!==0)break t;fa=i,o.timeoutHandle=Dg(tg.bind(null,o,a,Zn,sc,Vf,i,ai,Ss,cr,za,d,"Throttled",-0,0),u);break t}tg(o,a,Zn,sc,Vf,i,ai,Ss,cr,za,d,null,-0,0)}}break}while(!0);Bi(e)}function tg(e,i,a,o,u,d,S,R,V,nt,pt,xt,st,ct){if(e.timeoutHandle=-1,xt=i.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},q0(i,d,xt);var Kt=(d&62914560)===d?ic-b():(d&4194048)===d?Q0-b():0;if(Kt=sy(xt,Kt),Kt!==null){fa=d,e.cancelPendingCommit=Kt(lg.bind(null,e,i,d,a,o,u,S,R,V,pt,xt,null,st,ct)),Ha(e,d,S,!nt);return}}lg(e,i,d,a,o,u,S,R,V)}function yS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ha(e,i,a,o){i&=~Gf,i&=~Ss,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Ft(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&vl(e,a,i)}function rc(){return(ze&6)===0?(Po(0),!1):!0}function qf(){if(be!==null){if(He===0)var e=be.return;else e=be,ta=fs=null,lf(e),er=null,vo=0,e=be;for(;e!==null;)U0(e.alternate,e),e=e.return;be=null}}function fr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,GS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,qf(),Ye=e,be=a=Ki(e.current,null),Te=i,He=0,ii=null,za=!1,lr=Ot(e,i),Hf=!1,cr=ai=Gf=Ss=Ia=an=0,Zn=Lo=null,Vf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Ft(o),d=1<<u;i|=e[u],o&=~d}return ua=i,Rl(),a}function eg(e,i){ge=null,F.H=To,i===tr||i===Pl?(i=vm(),He=3):i===Zu?(i=vm(),He=4):He=i===Ef?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,be===null&&(an=1,Zl(e,di(i,e.current)))}function ng(){var e=ei.current;return e===null?!0:(Te&4194048)===Te?vi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===vi:!1}function ig(){var e=F.H;return F.H=To,e===null?To:e}function ag(){var e=F.A;return F.A=xS,e}function oc(){an=4,za||(Te&4194048)!==Te&&ei.current!==null||(lr=!0),(Ia&134217727)===0&&(Ss&134217727)===0||Ye===null||Ha(Ye,Te,ai,!1)}function Yf(e,i,a){var o=ze;ze|=2;var u=ig(),d=ag();(Ye!==e||Te!==i)&&(sc=null,fr(e,i)),i=!1;var S=an;t:do try{if(He!==0&&be!==null){var R=be,V=ii;switch(He){case 8:qf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(i=!0);var nt=He;if(He=0,ii=null,hr(e,R,V,nt),a&&lr){S=0;break t}break;default:nt=He,He=0,ii=null,hr(e,R,V,nt)}}MS(),S=an;break}catch(pt){eg(e,pt)}while(!0);return i&&e.shellSuspendCounter++,ta=fs=null,ze=o,F.H=u,F.A=d,be===null&&(Ye=null,Te=0,Rl()),S}function MS(){for(;be!==null;)sg(be)}function bS(e,i){var a=ze;ze|=2;var o=ig(),u=ag();Ye!==e||Te!==i?(sc=null,ac=b()+500,fr(e,i)):lr=Ot(e,i);t:do try{if(He!==0&&be!==null){i=be;var d=ii;e:switch(He){case 1:He=0,ii=null,hr(e,i,d,1);break;case 2:case 9:if(mm(d)){He=0,ii=null,rg(i);break}i=function(){He!==2&&He!==9||Ye!==e||(He=7),Bi(e)},d.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:mm(d)?(He=0,ii=null,rg(i)):(He=0,ii=null,hr(e,i,d,7));break;case 5:var S=null;switch(be.tag){case 26:S=be.memoizedState;case 5:case 27:var R=be;if(S?Wg(S):R.stateNode.complete){He=0,ii=null;var V=R.sibling;if(V!==null)be=V;else{var nt=R.return;nt!==null?(be=nt,lc(nt)):be=null}break e}}He=0,ii=null,hr(e,i,d,5);break;case 6:He=0,ii=null,hr(e,i,d,6);break;case 8:qf(),an=6;break t;default:throw Error(s(462))}}ES();break}catch(pt){eg(e,pt)}while(!0);return ta=fs=null,F.H=o,F.A=u,ze=a,be!==null?0:(Ye=null,Te=0,Rl(),an)}function ES(){for(;be!==null&&!Dt();)sg(be)}function sg(e){var i=w0(e.alternate,e,ua);e.memoizedProps=e.pendingProps,i===null?lc(e):be=i}function rg(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=b0(a,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=b0(a,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:lf(i);default:U0(a,i),i=be=am(i,ua),i=w0(a,i,ua)}e.memoizedProps=e.pendingProps,i===null?lc(e):be=i}function hr(e,i,a,o){ta=fs=null,lf(i),er=null,vo=0;var u=i.return;try{if(hS(e,u,i,a,Te)){an=1,Zl(e,di(a,e.current)),be=null;return}}catch(d){if(u!==null)throw be=u,d;an=1,Zl(e,di(a,e.current)),be=null;return}i.flags&32768?(Re||o===1?e=!0:lr||(Te&536870912)!==0?e=!1:(za=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(i,e)):lc(i)}function lc(e){var i=e;do{if((i.flags&32768)!==0){og(i,za);return}e=i.return;var a=mS(i.alternate,i,ua);if(a!==null){be=a;return}if(i=i.sibling,i!==null){be=i;return}be=i=e}while(i!==null);an===0&&(an=5)}function og(e,i){do{var a=gS(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);an=6,be=null}function lg(e,i,a,o,u,d,S,R,V){e.cancelPendingCommit=null;do cc();while(vn!==0);if((ze&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Ou,Mi(e,a,d,S,R,V),e===Ye&&(be=Ye=null,Te=0),ur=i,Fa=e,fa=a,kf=d,Xf=u,J0=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,CS(ut,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,S=ze,ze|=4;try{vS(e,i,a)}finally{ze=S,G.p=u,F.T=o}}vn=1,cg(),ug(),fg()}}function cg(){if(vn===1){vn=0;var e=Fa,i=ur,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=ze;ze|=4;try{k0(i,e);var d=sh,S=Zp(e.containerInfo),R=d.focusedElem,V=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&jp(R.ownerDocument.documentElement,R)){if(V!==null&&wu(R)){var nt=V.start,pt=V.end;if(pt===void 0&&(pt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(pt,R.value.length);else{var xt=R.ownerDocument||document,st=xt&&xt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),Kt=R.textContent.length,ce=Math.min(V.start,Kt),We=V.end===void 0?ce:Math.min(V.end,Kt);!ct.extend&&ce>We&&(S=We,We=ce,ce=S);var Q=Yp(R,ce),k=Yp(R,We);if(Q&&k&&(ct.rangeCount!==1||ct.anchorNode!==Q.node||ct.anchorOffset!==Q.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=xt.createRange();tt.setStart(Q.node,Q.offset),ct.removeAllRanges(),ce>We?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(xt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&xt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var gt=xt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}yc=!!ah,sh=ah=null}finally{ze=u,G.p=o,F.T=a}}e.current=i,vn=2}}function ug(){if(vn===2){vn=0;var e=Fa,i=ur,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=ze;ze|=4;try{B0(e,i.alternate,i)}finally{ze=u,G.p=o,F.T=a}}vn=3}}function fg(){if(vn===4||vn===3){vn=0,N();var e=Fa,i=ur,a=fa,o=J0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?vn=5:(vn=0,ur=Fa=null,hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ba=null),Is(a),i=i.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=F.T,u=G.p,G.p=2,F.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];d(R.value,{componentStack:R.stack})}}finally{F.T=i,G.p=u}}(fa&3)!==0&&cc(),Bi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Wf?Oo++:(Oo=0,Wf=e):Oo=0,Po(0)}}function hg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,mo(i)))}function cc(){return cg(),ug(),fg(),dg()}function dg(){if(vn!==5)return!1;var e=Fa,i=kf;kf=0;var a=Is(fa),o=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=Xf,Xf=null;var d=Fa,S=fa;if(vn=0,ur=Fa=null,fa=0,(ze&6)!==0)throw Error(s(331));var R=ze;if(ze|=4,j0(d.current),W0(d,d.current,S,a),ze=R,Po(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{G.p=u,F.T=o,hg(e,i)}}function pg(e,i,a){i=di(a,i),i=bf(e.stateNode,i,2),e=Na(e,i,2),e!==null&&(On(e,2),Bi(e))}function Ge(e,i,a){if(e.tag===3)pg(e,e,a);else for(;i!==null;){if(i.tag===3){pg(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){e=di(a,e),a=m0(2),o=Na(i,a,2),o!==null&&(g0(a,o,i,e),On(o,2),Bi(o));break}}i=i.return}}function jf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new SS;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(Hf=!0,u.add(a),e=TS.bind(null,e,i,a),i.then(e,e))}function TS(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Te&a)===a&&(an===4||an===3&&(Te&62914560)===Te&&300>b()-ic?(ze&2)===0&&fr(e,0):Gf|=a,cr===Te&&(cr=0)),Bi(e)}function mg(e,i){i===0&&(i=Be()),e=ls(e,i),e!==null&&(On(e,i),Bi(e))}function AS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),mg(e,a)}function RS(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),mg(e,a)}function CS(e,i){return Vt(e,i)}var uc=null,dr=null,Zf=!1,fc=!1,Qf=!1,Ga=0;function Bi(e){e!==dr&&e.next===null&&(dr===null?uc=dr=e:dr=dr.next=e),fc=!0,Zf||(Zf=!0,DS())}function Po(e,i){if(!Qf&&fc){Qf=!0;do for(var a=!1,o=uc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ft(42|e)+1)-1,d&=u&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,xg(o,d))}else d=Te,d=St(o,o===Ye?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ot(o,d)||(a=!0,xg(o,d));o=o.next}while(a);Qf=!1}}function wS(){gg()}function gg(){fc=Zf=!1;var e=0;Ga!==0&&HS()&&(e=Ga);for(var i=b(),a=null,o=uc;o!==null;){var u=o.next,d=vg(o,i);d===0?(o.next=null,a===null?uc=u:a.next=u,u===null&&(dr=a)):(a=o,(e!==0||(d&3)!==0)&&(fc=!0)),o=u}vn!==0&&vn!==5||Po(e),Ga!==0&&(Ga=0)}function vg(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Ft(d),R=1<<S,V=u[S];V===-1?((R&a)===0||(R&o)!==0)&&(u[S]=fe(R,i)):V<=i&&(e.expiredLanes|=R),d&=~R}if(i=Ye,a=Te,a=St(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ot(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&ie(o),Is(a)){case 2:case 8:a=_t;break;case 32:a=ut;break;case 268435456:a=Lt;break;default:a=ut}return o=_g.bind(null,e),a=Vt(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,i){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(cc()&&e.callbackNode!==a)return null;var o=Te;return o=St(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($0(e,o,i),vg(e,b()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function xg(e,i){if(cc())return null;$0(e,i,!0)}function DS(){VS(function(){(ze&6)!==0?Vt(ft,wS):gg()})}function Jf(){if(Ga===0){var e=Ks;e===0&&(e=Gt,Gt<<=1,(Gt&261888)===0&&(Gt=256)),Ga=e}return Ga}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(""+e)}function yg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function US(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var d=Sg((u[bn]||null).action),S=o.submitter;S&&(i=(i=S[bn]||null)?Sg(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var R=new bl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ga!==0){var V=S?yg(u,S):new FormData(u);vf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(R.preventDefault(),V=S?yg(u,S):new FormData(u),vf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Kf=0;Kf<Lu.length;Kf++){var $f=Lu[Kf],NS=$f.toLowerCase(),LS=$f[0].toUpperCase()+$f.slice(1);Ti(NS,"on"+LS)}Ti(Kp,"onAnimationEnd"),Ti($p,"onAnimationIteration"),Ti(tm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Zx,"onTransitionRun"),Ti(Qx,"onTransitionStart"),Ti(Jx,"onTransitionCancel"),Ti(em,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Mg(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var R=o[S],V=R.instance,nt=R.currentTarget;if(R=R.listener,V!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=nt;try{d(u)}catch(pt){Al(pt)}u.currentTarget=null,d=V}else for(S=0;S<o.length;S++){if(R=o[S],V=R.instance,nt=R.currentTarget,R=R.listener,V!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=nt;try{d(u)}catch(pt){Al(pt)}u.currentTarget=null,d=V}}}}function Ee(e,i){var a=i[Bs];a===void 0&&(a=i[Bs]=new Set);var o=e+"__bubble";a.has(o)||(bg(i,e,2,!1),a.add(o))}function th(e,i,a){var o=0;i&&(o|=4),bg(a,e,o,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function eh(e){if(!e[hc]){e[hc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(OS.has(a)||th(a,!1,e),th(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[hc]||(i[hc]=!0,th("selectionchange",!1,i))}}function bg(e,i,a,o){switch(Kg(i)){case 2:var u=ly;break;case 8:u=cy;break;default:u=gh}a=u.bind(null,i,a,e),u=void 0,!Su||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function nh(e,i,a,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Ma(R),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=d=S;continue t}R=R.parentNode}}o=o.return}Cp(function(){var nt=d,pt=_u(a),xt=[];t:{var st=nm.get(e);if(st!==void 0){var ct=bl,Kt=e;switch(e){case"keypress":if(yl(a)===0)break t;case"keydown":case"keyup":ct=Rx;break;case"focusin":Kt="focus",ct=Eu;break;case"focusout":Kt="blur",ct=Eu;break;case"beforeblur":case"afterblur":ct=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Dx;break;case Kp:case $p:case tm:ct=_x;break;case em:ct=Nx;break;case"scroll":case"scrollend":ct=dx;break;case"wheel":ct=Ox;break;case"copy":case"cut":case"paste":ct=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Lp;break;case"toggle":case"beforetoggle":ct=zx}var ce=(i&4)!==0,We=!ce&&(e==="scroll"||e==="scrollend"),Q=ce?st!==null?st+"Capture":null:st;ce=[];for(var k=nt,tt;k!==null;){var gt=k;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||Q===null||(gt=io(k,Q),gt!=null&&ce.push(Io(k,gt,tt))),We)break;k=k.return}0<ce.length&&(st=new ct(st,Kt,null,a,pt),xt.push({event:st,listeners:ce}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",st&&a!==vu&&(Kt=a.relatedTarget||a.fromElement)&&(Ma(Kt)||Kt[bi]))break t;if((ct||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(Kt=a.relatedTarget||a.toElement,ct=nt,Kt=Kt?Ma(Kt):null,Kt!==null&&(We=c(Kt),ce=Kt.tag,Kt!==We||ce!==5&&ce!==27&&ce!==6)&&(Kt=null)):(ct=null,Kt=nt),ct!==Kt)){if(ce=Up,gt="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Lp,gt="onPointerLeave",Q="onPointerEnter",k="pointer"),We=ct==null?st:as(ct),tt=Kt==null?st:as(Kt),st=new ce(gt,k+"leave",ct,a,pt),st.target=We,st.relatedTarget=tt,gt=null,Ma(pt)===nt&&(ce=new ce(Q,k+"enter",Kt,a,pt),ce.target=tt,ce.relatedTarget=We,gt=ce),We=gt,ct&&Kt)e:{for(ce=PS,Q=ct,k=Kt,tt=0,gt=Q;gt;gt=ce(gt))tt++;gt=0;for(var re=k;re;re=ce(re))gt++;for(;0<tt-gt;)Q=ce(Q),tt--;for(;0<gt-tt;)k=ce(k),gt--;for(;tt--;){if(Q===k||k!==null&&Q===k.alternate){ce=Q;break e}Q=ce(Q),k=ce(k)}ce=null}else ce=null;ct!==null&&Eg(xt,st,ct,ce,!1),Kt!==null&&We!==null&&Eg(xt,We,Kt,ce,!0)}}t:{if(st=nt?as(nt):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var Ne=Gp;else if(Fp(st))if(Vp)Ne=qx;else{Ne=Xx;var ee=kx}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Ei(nt.elementType)&&(Ne=Gp):Ne=Wx;if(Ne&&(Ne=Ne(e,nt))){Hp(xt,Ne,a,pt);break t}ee&&ee(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&Tn(st,"number",st.value)}switch(ee=nt?as(nt):window,e){case"focusin":(Fp(ee)||ee.contentEditable==="true")&&(Xs=ee,Du=nt,fo=null);break;case"focusout":fo=Du=Xs=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Qp(xt,a,pt);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":Qp(xt,a,pt)}var xe;if(Au)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else ks?Ip(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Op&&a.locale!=="ko"&&(ks||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&ks&&(xe=wp()):(Ta=pt,yu="value"in Ta?Ta.value:Ta.textContent,ks=!0)),ee=dc(nt,Ae),0<ee.length&&(Ae=new Np(Ae,e,null,a,pt),xt.push({event:Ae,listeners:ee}),xe?Ae.data=xe:(xe=Bp(a),xe!==null&&(Ae.data=xe)))),(xe=Bx?Fx(e,a):Hx(e,a))&&(Ae=dc(nt,"onBeforeInput"),0<Ae.length&&(ee=new Np("onBeforeInput","beforeinput",null,a,pt),xt.push({event:ee,listeners:Ae}),ee.data=xe)),US(xt,e,nt,a,pt)}Mg(xt,i)})}function Io(e,i,a){return{instance:e,listener:i,currentTarget:a}}function dc(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=io(e,a),u!=null&&o.unshift(Io(e,u,d)),u=io(e,i),u!=null&&o.push(Io(e,u,d))),e.tag===3)return o;e=e.return}return[]}function PS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Eg(e,i,a,o,u){for(var d=i._reactName,S=[];a!==null&&a!==o;){var R=a,V=R.alternate,nt=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||nt===null||(V=nt,u?(nt=io(a,d),nt!=null&&S.unshift(Io(a,nt,V))):u||(nt=io(a,d),nt!=null&&S.push(Io(a,nt,V)))),a=a.return}S.length!==0&&e.push({event:i,listeners:S})}var zS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(zS,`
`).replace(IS,"")}function Ag(e,i){return i=Tg(i),Tg(e)===i}function Xe(e,i,a,o,u,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||gn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&gn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":Hs(e,o,d);break;case"data":if(i!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(e,i,"name",u.name,u,null),Xe(e,i,"formEncType",u.formEncType,u,null),Xe(e,i,"formMethod",u.formMethod,u,null),Xe(e,i,"formTarget",u.formTarget,u,null)):(Xe(e,i,"encType",u.encType,u,null),Xe(e,i,"method",u.method,u,null),Xe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=xl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),$t(e,"popover",o);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$t(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fx.get(a)||a,$t(e,a,o))}}function ih(e,i,a,o,u,d){switch(a){case"style":Hs(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?gn(e,o):(typeof o=="number"||typeof o=="bigint")&&gn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),d=e[bn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):$t(e,a,o)}}}function Nn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(e,i,d,S,a,null)}}u&&Xe(e,i,"srcSet",a.srcSet,a,null),o&&Xe(e,i,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=d=S=u=null,V=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":S=pt;break;case"checked":V=pt;break;case"defaultChecked":nt=pt;break;case"value":d=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,i));break;default:Xe(e,i,o,pt,a,null)}}Zi(e,d,R,V,nt,S,u,!1);return;case"select":Ee("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Xe(e,i,u,R,a,null)}i=d,a=S,e.multiple=!!o,i!=null?fi(e,!!o,i,!1):a!=null&&fi(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,i,S,R,a,null)}An(e,o,u,d);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,i,V,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)Ee(zo[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(e,i,nt,o,a,null)}return;default:if(Ei(i)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&ih(e,i,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xe(e,i,R,o,a,null))}function BS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,R=null,V=null,nt=null,pt=null;for(ct in a){var xt=a[ct];if(a.hasOwnProperty(ct)&&xt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":V=xt;default:o.hasOwnProperty(ct)||Xe(e,i,ct,null,o,xt)}}for(var st in o){var ct=o[st];if(xt=a[st],o.hasOwnProperty(st)&&(ct!=null||xt!=null))switch(st){case"type":d=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":pt=ct;break;case"value":S=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,i));break;default:ct!==xt&&Xe(e,i,st,ct,o,xt)}}En(e,S,R,V,nt,pt,d,u);return;case"select":ct=S=R=st=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ct=V;default:o.hasOwnProperty(d)||Xe(e,i,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":st=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==V&&Xe(e,i,u,d,o,V)}i=R,a=S,o=ct,st!=null?fi(e,!!a,st,!1):!!o!=!!a&&(i!=null?fi(e,!!a,i,!0):fi(e,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,i,R,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":st=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Xe(e,i,S,u,o,d)}Fe(e,st,ct);return;case"option":for(var Kt in a)if(st=a[Kt],a.hasOwnProperty(Kt)&&st!=null&&!o.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:Xe(e,i,Kt,null,o,st)}for(V in o)if(st=o[V],ct=a[V],o.hasOwnProperty(V)&&st!==ct&&(st!=null||ct!=null))switch(V){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Xe(e,i,V,st,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)st=a[ce],a.hasOwnProperty(ce)&&st!=null&&!o.hasOwnProperty(ce)&&Xe(e,i,ce,null,o,st);for(nt in o)if(st=o[nt],ct=a[nt],o.hasOwnProperty(nt)&&st!==ct&&(st!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,i));break;default:Xe(e,i,nt,st,o,ct)}return;default:if(Ei(i)){for(var We in a)st=a[We],a.hasOwnProperty(We)&&st!==void 0&&!o.hasOwnProperty(We)&&ih(e,i,We,void 0,o,st);for(pt in o)st=o[pt],ct=a[pt],!o.hasOwnProperty(pt)||st===ct||st===void 0&&ct===void 0||ih(e,i,pt,st,o,ct);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!o.hasOwnProperty(Q)&&Xe(e,i,Q,null,o,st);for(xt in o)st=o[xt],ct=a[xt],!o.hasOwnProperty(xt)||st===ct||st==null&&ct==null||Xe(e,i,xt,st,o,ct)}function Rg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function FS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,R=u.duration;if(d&&R&&Rg(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],nt=V.startTime;if(nt>R)break;var pt=V.transferSize,xt=V.initiatorType;pt&&Rg(xt)&&(V=V.responseEnd,S+=pt*(V<R?1:(R-nt)/(V-nt)))}if(--o,i+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ah=null,sh=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function rh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oh=null;function HS(){var e=window.event;return e&&e.type==="popstate"?e===oh?!1:(oh=e,!0):(oh=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,GS=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(kS)}:Dg;function kS(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Ng(e,i){var a=i,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),vr(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[is]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);vr(i)}function Lg(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function lh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lh(a),no(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function XS(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[is])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function WS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Og(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=_i(e.nextSibling),e===null))return null;return e}function ch(e){return e.data==="$?"||e.data==="$~"}function uh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qS(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var fh=null;function Pg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return _i(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function zg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function Ig(e,i,a){switch(i=pc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);no(e)}var xi=new Map,Bg=new Set;function mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=G.d;G.d={f:YS,r:jS,D:ZS,C:QS,L:JS,m:KS,X:ty,S:$S,M:ey};function YS(){var e=ha.f(),i=rc();return e||i}function jS(e){var i=ba(e);i!==null&&i.tag===5&&i.type==="form"?e0(i):ha.r(e)}var pr=typeof document>"u"?null:document;function Fg(e,i,a){var o=pr;if(o&&typeof i=="string"&&i){var u=de(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Bg.has(u)||(Bg.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Nn(i,"link",e),C(i),o.head.appendChild(i)))}}function ZS(e){ha.D(e),Fg("dns-prefetch",e,null)}function QS(e,i){ha.C(e,i),Fg("preconnect",e,i)}function JS(e,i,a){ha.L(e,i,a);var o=pr;if(o&&e&&i){var u='link[rel="preload"][as="'+de(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+de(a.imageSizes)+'"]')):u+='[href="'+de(e)+'"]';var d=u;switch(i){case"style":d=mr(e);break;case"script":d=gr(e)}xi.has(d)||(e=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),xi.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Fo(d))||i==="script"&&o.querySelector(Ho(d))||(i=o.createElement("link"),Nn(i,"link",e),C(i),o.head.appendChild(i)))}}function KS(e,i){ha.m(e,i);var a=pr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=gr(e)}if(!xi.has(d)&&(e=v({rel:"modulepreload",href:e},i),xi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(d)))return}o=a.createElement("link"),Nn(o,"link",e),C(o),a.head.appendChild(o)}}}function $S(e,i,a){ha.S(e,i,a);var o=pr;if(o&&e){var u=Ea(o).hoistableStyles,d=mr(e);i=i||"default";var S=u.get(d);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Fo(d)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},a),(a=xi.get(d))&&hh(e,a);var V=S=o.createElement("link");C(V),Nn(V,"link",e),V._p=new Promise(function(nt,pt){V.onload=nt,V.onerror=pt}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,gc(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(d,S)}}}function ty(e,i){ha.X(e,i);var a=pr;if(a&&e){var o=Ea(a).hoistableScripts,u=gr(e),d=o.get(u);d||(d=a.querySelector(Ho(u)),d||(e=v({src:e,async:!0},i),(i=xi.get(u))&&dh(e,i),d=a.createElement("script"),C(d),Nn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ey(e,i){ha.M(e,i);var a=pr;if(a&&e){var o=Ea(a).hoistableScripts,u=gr(e),d=o.get(u);d||(d=a.querySelector(Ho(u)),d||(e=v({src:e,async:!0,type:"module"},i),(i=xi.get(u))&&dh(e,i),d=a.createElement("script"),C(d),Nn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Hg(e,i,a,o){var u=(u=it.current)?mc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=mr(a.href),a=Ea(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var d=Ea(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(Fo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),d||ny(u,e,a,S.state))),i&&o===null)throw Error(s(528,""));return S}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=gr(a),a=Ea(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+de(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function ny(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Nn(i,"link",a),C(i),e.head.appendChild(i))}function gr(e){return'[src="'+de(e)+'"]'}function Ho(e){return"script[async]"+e}function Vg(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return i.instance=o,C(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Nn(o,"style",u),gc(o,a.precedence,e),i.instance=o;case"stylesheet":u=mr(a.href);var d=e.querySelector(Fo(u));if(d)return i.state.loading|=4,i.instance=d,C(d),d;o=Gg(a),(u=xi.get(u))&&hh(o,u),d=(e.ownerDocument||e).createElement("link"),C(d);var S=d;return S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Nn(d,"link",o),i.state.loading|=4,gc(d,a.precedence,e),i.instance=d;case"script":return d=gr(a.src),(u=e.querySelector(Ho(d)))?(i.instance=u,C(u),u):(o=a,(u=xi.get(d))&&(o=v({},a),dh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Nn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,gc(o,a.precedence,e));return i.instance}function gc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===i)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function hh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function dh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var vc=null;function kg(e,i,a){if(vc===null){var o=new Map,u=vc=new Map;u.set(a,o)}else u=vc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[is]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var R=o.get(S);R?R.push(d):o.set(S,[d])}}return o}function Xg(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function iy(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Wg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ay(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(o.href),d=i.querySelector(Fo(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=_c.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,C(d);return}d=i.ownerDocument||i,o=Gg(o),(u=xi.get(u))&&hh(o,u),d=d.createElement("link"),C(d);var S=d;S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Nn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_c.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var ph=0;function sy(e,i){return e.stylesheets&&e.count===0&&Sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&ph===0&&(ph=62500*FS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>ph?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function Sc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,i.forEach(ry,e),xc=null,_c.call(e))}function ry(e,i){if(!(i.state.loading&4)){var a=xc.get(e);if(a)var o=a.get(null);else{a=new Map,xc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=i.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=_c.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Go={$$typeof:U,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function oy(e,i,a,o,u,d,S,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function qg(e,i,a,o,u,d,S,R,V,nt,pt,xt){return e=new oy(e,i,a,S,V,nt,pt,xt,R),i=1,d===!0&&(i|=24),d=ti(3,null,null,i),e.current=d,d.stateNode=e,i=qu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Qu(d),e}function Yg(e){return e?(e=Ys,e):Ys}function jg(e,i,a,o,u,d){u=Yg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Na(e,o,i),a!==null&&(Qn(a,e,i),xo(a,e,i))}function Zg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function mh(e,i){Zg(e,i),(e=e.alternate)&&Zg(e,i)}function Qg(e){if(e.tag===13||e.tag===31){var i=ls(e,67108864);i!==null&&Qn(i,e,67108864),mh(e,67108864)}}function Jg(e){if(e.tag===13||e.tag===31){var i=si();i=$r(i);var a=ls(e,i);a!==null&&Qn(a,e,i),mh(e,i)}}var yc=!0;function ly(e,i,a,o){var u=F.T;F.T=null;var d=G.p;try{G.p=2,gh(e,i,a,o)}finally{G.p=d,F.T=u}}function cy(e,i,a,o){var u=F.T;F.T=null;var d=G.p;try{G.p=8,gh(e,i,a,o)}finally{G.p=d,F.T=u}}function gh(e,i,a,o){if(yc){var u=vh(o);if(u===null)nh(e,i,o,Mc,a),$g(e,o);else if(fy(u,e,i,a,o))o.stopPropagation();else if($g(e,o),i&4&&-1<uy.indexOf(e)){for(;u!==null;){var d=ba(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=At(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var V=1<<31-Ft(S);R.entanglements[1]|=V,S&=~V}Bi(d),(ze&6)===0&&(ac=b()+500,Po(0))}}break;case 31:case 13:R=ls(d,2),R!==null&&Qn(R,d,2),rc(),mh(d,2)}if(d=vh(o),d===null&&nh(e,i,o,Mc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else nh(e,i,o,null,a)}}function vh(e){return e=_u(e),_h(e)}var Mc=null;function _h(e){if(Mc=null,e=Ma(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=h(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Mc=e,null}function Kg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ft:return 2;case _t:return 8;case ut:case Zt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var xh=!1,ka=null,Xa=null,Wa=null,Vo=new Map,ko=new Map,qa=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,i){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(i.pointerId)}}function Xo(e,i,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=ba(i),i!==null&&Qg(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function fy(e,i,a,o,u){switch(i){case"focusin":return ka=Xo(ka,e,i,a,o,u),!0;case"dragenter":return Xa=Xo(Xa,e,i,a,o,u),!0;case"mouseover":return Wa=Xo(Wa,e,i,a,o,u),!0;case"pointerover":var d=u.pointerId;return Vo.set(d,Xo(Vo.get(d)||null,e,i,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,ko.set(d,Xo(ko.get(d)||null,e,i,a,o,u)),!0}return!1}function tv(e){var i=Ma(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Oi(e.priority,function(){Jg(a)});return}}else if(i===31){if(i=h(a),i!==null){e.blockedOn=i,Oi(e.priority,function(){Jg(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return i=ba(a),i!==null&&Qg(i),e.blockedOn=a,!1;i.shift()}return!0}function ev(e,i,a){bc(e)&&a.delete(i)}function hy(){xh=!1,ka!==null&&bc(ka)&&(ka=null),Xa!==null&&bc(Xa)&&(Xa=null),Wa!==null&&bc(Wa)&&(Wa=null),Vo.forEach(ev),ko.forEach(ev)}function Ec(e,i){e.blockedOn===i&&(e.blockedOn=null,xh||(xh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hy)))}var Tc=null;function nv(e){Tc!==e&&(Tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var d=ba(a);d!==null&&(e.splice(i,3),i-=3,vf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vr(e){function i(V){return Ec(V,e)}ka!==null&&Ec(ka,e),Xa!==null&&Ec(Xa,e),Wa!==null&&Ec(Wa,e),Vo.forEach(i),ko.forEach(i);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)tv(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[bn]||null;if(typeof d=="function")S||nv(a);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[bn]||null)R=S.formAction;else if(_h(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),nv(a)}}}function iv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Sh(e){this._internalRoot=e}Ac.prototype.render=Sh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=si();jg(a,o,e,i,null,null)},Ac.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;jg(e.current,2,null,e,null,null),rc(),i[bi]=null}};function Ac(e){this._internalRoot=e}Ac.prototype.unstable_scheduleHydration=function(e){if(e){var i=to();e={blockedOn:null,target:e,priority:i};for(var a=0;a<qa.length&&i!==0&&i<qa[a].priority;a++);qa.splice(a,0,e),a===0&&tv(e)}};var av=t.version;if(av!=="19.2.3")throw Error(s(527,av,"19.2.3"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var dy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{dt=Rc.inject(dy),Et=Rc}catch{}}return qo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",u=f0,d=h0,S=d0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=qg(e,1,!1,null,null,a,o,null,u,d,S,iv),e[bi]=i.current,eh(e),new Sh(i)},qo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=f0,S=h0,R=d0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),i=qg(e,1,!0,i,a??null,o,u,V,d,S,R,iv),i.context=Yg(null),a=i.current,o=si(),o=$r(o),u=Ua(o),u.callback=null,Na(a,u,o),a=o,i.current.lanes=a,On(i,a),Bi(i),e[bi]=i.current,eh(e),new Ac(i)},qo.version="19.2.3",qo}var pv;function by(){if(pv)return bh.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=My(),bh.exports}var Ey=by();const sp="182",Ty=0,mv=1,Ay=2,$c=1,Ry=2,$o=3,ns=0,Xn=1,Gi=2,Xi=0,Br=1,rl=2,gv=3,vv=4,Cy=5,Cs=100,wy=101,Dy=102,Uy=103,Ny=104,Ly=200,Oy=201,Py=202,zy=203,rd=204,od=205,Iy=206,By=207,Fy=208,Hy=209,Gy=210,Vy=211,ky=212,Xy=213,Wy=214,ld=0,cd=1,ud=2,Gr=3,fd=4,hd=5,dd=6,pd=7,M_=0,qy=1,Yy=2,Wi=0,b_=1,E_=2,T_=3,rp=4,A_=5,R_=6,C_=7,w_=300,Ns=301,Vr=302,md=303,gd=304,uu=306,vd=1e3,xa=1001,_d=1002,Ln=1003,jy=1004,Cc=1005,Bn=1006,Rh=1007,Ds=1008,li=1009,D_=1010,U_=1011,ol=1012,op=1013,qi=1014,Vi=1015,ci=1016,lp=1017,cp=1018,ll=1020,N_=35902,L_=35899,O_=1021,P_=1022,Ni=1023,ya=1026,Us=1027,z_=1028,up=1029,kr=1030,fp=1031,hp=1033,tu=33776,eu=33777,nu=33778,iu=33779,xd=35840,Sd=35841,yd=35842,Md=35843,bd=36196,Ed=37492,Td=37496,Ad=37488,Rd=37489,Cd=37490,wd=37491,Dd=37808,Ud=37809,Nd=37810,Ld=37811,Od=37812,Pd=37813,zd=37814,Id=37815,Bd=37816,Fd=37817,Hd=37818,Gd=37819,Vd=37820,kd=37821,Xd=36492,Wd=36494,qd=36495,Yd=36283,jd=36284,Zd=36285,Qd=36286,Zy=3200,dp=0,Qy=1,ts="",yi="srgb",Xr="srgb-linear",ru="linear",Ve="srgb",_r=7680,_v=519,Jy=512,Ky=513,$y=514,pp=515,tM=516,eM=517,mp=518,nM=519,xv=35044,Sv="300 es",ki=2e3,ou=2001;function I_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function iM(){const r=lu("canvas");return r.style.display="block",r}const yv={};function Mv(...r){const t="THREE."+r.shift();console.log(t,...r)}function he(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function cl(...r){const t=r.join(" ");t in yv||(yv[t]=!0,he(...r))}function aM(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class Zr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bv=1234567;const nl=Math.PI/180,Wr=180/Math.PI;function Os(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Me(r,t,n){return Math.max(t,Math.min(n,r))}function gp(r,t){return(r%t+t)%t}function sM(r,t,n,s,l){return s+(r-t)*(l-s)/(n-t)}function rM(r,t,n){return r!==t?(n-r)/(t-r):0}function il(r,t,n){return(1-n)*r+n*t}function oM(r,t,n,s){return il(r,t,1-Math.exp(-n*s))}function lM(r,t=1){return t-Math.abs(gp(r,t*2)-t)}function cM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function uM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function fM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function hM(r,t){return r+Math.random()*(t-r)}function dM(r){return r*(.5-Math.random())}function pM(r){r!==void 0&&(bv=r);let t=bv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mM(r){return r*nl}function gM(r){return r*Wr}function vM(r){return(r&r-1)===0&&r!==0}function _M(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function SM(r,t,n,s,l){const c=Math.cos,f=Math.sin,h=c(n/2),m=f(n/2),p=c((t+s)/2),g=f((t+s)/2),v=c((t-s)/2),_=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*g,m*v,m*_,h*p);break;case"YZY":r.set(m*_,h*g,m*v,h*p);break;case"ZXZ":r.set(m*v,m*_,h*g,h*p);break;case"XZX":r.set(h*g,m*E,m*y,h*p);break;case"YXY":r.set(m*y,h*g,m*E,h*p);break;case"ZYZ":r.set(m*E,m*y,h*g,h*p);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const da={DEG2RAD:nl,RAD2DEG:Wr,generateUUID:Os,clamp:Me,euclideanModulo:gp,mapLinear:sM,inverseLerp:rM,lerp:il,damp:oM,pingpong:lM,smoothstep:cM,smootherstep:uM,randInt:fM,randFloat:hM,randFloatSpread:dM,seededRandom:pM,degToRad:mM,radToDeg:gM,isPowerOfTwo:vM,ceilPowerOfTwo:_M,floorPowerOfTwo:xM,setQuaternionFromProperEuler:SM,normalize:Vn,denormalize:Lr};class Nt{constructor(t=0,n=0){Nt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3],_=c[f+0],y=c[f+1],E=c[f+2],A=c[f+3];if(h<=0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(h>=1){t[n+0]=_,t[n+1]=y,t[n+2]=E,t[n+3]=A;return}if(v!==A||m!==_||p!==y||g!==E){let M=m*_+p*y+g*E+v*A;M<0&&(_=-_,y=-y,E=-E,A=-A,M=-M);let x=1-h;if(M<.9995){const P=Math.acos(M),U=Math.sin(P);x=Math.sin(x*P)/U,h=Math.sin(h*P)/U,m=m*x+_*h,p=p*x+y*h,g=g*x+E*h,v=v*x+A*h}else{m=m*x+_*h,p=p*x+y*h,g=g*x+E*h,v=v*x+A*h;const P=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=P,p*=P,g*=P,v*=P}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[f],_=c[f+1],y=c[f+2],E=c[f+3];return t[n]=h*E+g*v+m*y-p*_,t[n+1]=m*E+g*_+p*v-h*y,t[n+2]=p*E+g*y+h*_-m*v,t[n+3]=g*E-h*v-m*_-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),v=h(c/2),_=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=_*g*v+p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v-_*y*E;break;case"YXZ":this._x=_*g*v+p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v+_*y*E;break;case"ZXY":this._x=_*g*v-p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v-_*y*E;break;case"ZYX":this._x=_*g*v-p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v+_*y*E;break;case"YZX":this._x=_*g*v+p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v-_*y*E;break;case"XZY":this._x=_*g*v-p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v+_*y*E;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],v=n[10],_=s+h+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>v){const y=2*Math.sqrt(1+s-h-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,n=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ev.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ev.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*n-c*l),v=2*(c*s-f*n);return this.x=n+m*p+f*v-h*g,this.y=s+m*g+h*p-c*v,this.z=l+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new Y,Ev=new pl;class Se{constructor(t,n,s,l,c,f,h,m,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,m,p)}set(t,n,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],v=s[7],_=s[2],y=s[5],E=s[8],A=l[0],M=l[3],x=l[6],P=l[1],U=l[4],D=l[7],I=l[2],L=l[5],O=l[8];return c[0]=f*A+h*P+m*I,c[3]=f*M+h*U+m*L,c[6]=f*x+h*D+m*O,c[1]=p*A+g*P+v*I,c[4]=p*M+g*U+v*L,c[7]=p*x+g*D+v*O,c[2]=_*A+y*P+E*I,c[5]=_*M+y*U+E*L,c[8]=_*x+y*D+E*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*f-h*p,_=h*m-g*c,y=p*c-f*m,E=n*v+s*_+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(l*p-g*s)*A,t[2]=(h*s-l*f)*A,t[3]=_*A,t[4]=(g*n-l*m)*A,t[5]=(l*c-h*n)*A,t[6]=y*A,t[7]=(s*m-p*n)*A,t[8]=(f*n-s*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(wh.makeScale(t,n)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,n){return this.premultiply(wh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new Se,Tv=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Av=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yM(){const r={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Xr]:{primaries:t,whitePoint:s,transfer:ru,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const Ue=yM();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class MM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=lu("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=lu("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Sa(n[s]/255)*255):n[s]=Sa(n[s]);return{data:n,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bM=0;class vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Dh(l[f].image)):c.push(Dh(l[f]))}else c=Dh(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function Dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?MM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let EM=0;const Uh=new Y;class Hn extends Zr{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,s=xa,l=xa,c=Bn,f=Ds,h=Ni,m=li,p=Hn.DEFAULT_ANISOTROPY,g=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Os(),this.name="",this.source=new vp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){he(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){he(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vd:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case _d:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vd:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case _d:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=w_;Hn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,n=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],_=m[1],y=m[5],E=m[9],A=m[2],M=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,D=(y+1)/2,I=(x+1)/2,L=(g+_)/4,O=(v+A)/4,X=(E+M)/4;return U>D&&U>I?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=L/s,c=O/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=L/l,c=X/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=O/c,l=X/c),this.set(s,l,c,n),this}let P=Math.sqrt((M-E)*(M-E)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(v-A)/P,this.z=(_-g)/P,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends Zr{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new sn(0,0,t,n),this.scissorTest=!1,this.viewport=new sn(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new Hn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new vp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends TM{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class B_ extends Hn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class AM extends Hn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(t=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ci):Ci.fromBufferAttribute(c,f),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Dc.subVectors(this.max,Yo),Sr.subVectors(t.a,Yo),yr.subVectors(t.b,Yo),Mr.subVectors(t.c,Yo),ja.subVectors(yr,Sr),Za.subVectors(Mr,yr),ys.subVectors(Sr,Mr);let n=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-ys.z,ys.y,ja.z,0,-ja.x,Za.z,0,-Za.x,ys.z,0,-ys.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-ys.y,ys.x,0];return!Nh(n,Sr,yr,Mr,Dc)||(n=[1,0,0,0,1,0,0,0,1],!Nh(n,Sr,yr,Mr,Dc))?!1:(Uc.crossVectors(ja,Za),n=[Uc.x,Uc.y,Uc.z],Nh(n,Sr,yr,Mr,Dc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ci=new Y,wc=new ml,Sr=new Y,yr=new Y,Mr=new Y,ja=new Y,Za=new Y,ys=new Y,Yo=new Y,Dc=new Y,Uc=new Y,Ms=new Y;function Nh(r,t,n,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ms.fromArray(r,c);const h=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=t.dot(Ms),p=n.dot(Ms),g=s.dot(Ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const RM=new ml,jo=new Y,Lh=new Y;class fu{constructor(t=new Y,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):RM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(Lh)),this.expandByPoint(jo.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new Y,Oh=new Y,Nc=new Y,Qa=new Y,Ph=new Y,Lc=new Y,zh=new Y;class F_{constructor(t=new Y,n=new Y(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ma.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,n),ma.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){Oh.copy(t).add(n).multiplyScalar(.5),Nc.copy(n).sub(t).normalize(),Qa.copy(this.origin).sub(Oh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Nc),h=Qa.dot(this.direction),m=-Qa.dot(Nc),p=Qa.lengthSq(),g=Math.abs(1-f*f);let v,_,y,E;if(g>0)if(v=f*m-h,_=f*h-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const A=1/g;v*=A,_*=A,y=v*(v+f*_+2*h)+_*(f*v+_+2*m)+p}else _=c,v=Math.max(0,-(f*_+h)),y=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(f*_+h)),y=-v*v+_*(_+2*m)+p;else _<=-E?(v=Math.max(0,-(-f*c+h)),_=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+_*(_+2*m)+p):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(v=Math.max(0,-(f*c+h)),_=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+_*(_+2*m)+p);else _=f>0?-c:c,v=Math.max(0,-(f*_+h)),y=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Oh).addScaledVector(Nc,_),y}intersectSphere(t,n){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,n,s,l,c){Ph.subVectors(n,t),Lc.subVectors(s,t),zh.crossVectors(Ph,Lc);let f=this.direction.dot(zh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Qa.subVectors(this.origin,t);const m=h*this.direction.dot(Lc.crossVectors(Qa,Lc));if(m<0)return null;const p=h*this.direction.dot(Ph.cross(Qa));if(p<0||m+p>f)return null;const g=-h*Qa.dot(zh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,n,s,l,c,f,h,m,p,g,v,_,y,E,A,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,m,p,g,v,_,y,E,A,M)}set(t,n,s,l,c,f,h,m,p,g,v,_,y,E,A,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=E,x[11]=A,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,l=1/br.setFromMatrixColumn(t,0).length(),c=1/br.setFromMatrixColumn(t,1).length(),f=1/br.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=f*g,y=f*v,E=h*g,A=h*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=y+E*p,n[5]=_-A*p,n[9]=-h*m,n[2]=A-_*p,n[6]=E+y*p,n[10]=f*m}else if(t.order==="YXZ"){const _=m*g,y=m*v,E=p*g,A=p*v;n[0]=_+A*h,n[4]=E*h-y,n[8]=f*p,n[1]=f*v,n[5]=f*g,n[9]=-h,n[2]=y*h-E,n[6]=A+_*h,n[10]=f*m}else if(t.order==="ZXY"){const _=m*g,y=m*v,E=p*g,A=p*v;n[0]=_-A*h,n[4]=-f*v,n[8]=E+y*h,n[1]=y+E*h,n[5]=f*g,n[9]=A-_*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const _=f*g,y=f*v,E=h*g,A=h*v;n[0]=m*g,n[4]=E*p-y,n[8]=_*p+A,n[1]=m*v,n[5]=A*p+_,n[9]=y*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const _=f*m,y=f*p,E=h*m,A=h*p;n[0]=m*g,n[4]=A-_*v,n[8]=E*v+y,n[1]=v,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*v+E,n[10]=_-A*v}else if(t.order==="XZY"){const _=f*m,y=f*p,E=h*m,A=h*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=_*v+A,n[5]=f*g,n[9]=y*v-E,n[2]=E*v-y,n[6]=h*g,n[10]=A*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CM,t,wM)}lookAt(t,n,s){const l=this.elements;return ri.subVectors(t,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ja.crossVectors(s,ri),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ja.crossVectors(s,ri)),Ja.normalize(),Oc.crossVectors(ri,Ja),l[0]=Ja.x,l[4]=Oc.x,l[8]=ri.x,l[1]=Ja.y,l[5]=Oc.y,l[9]=ri.y,l[2]=Ja.z,l[6]=Oc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],v=s[5],_=s[9],y=s[13],E=s[2],A=s[6],M=s[10],x=s[14],P=s[3],U=s[7],D=s[11],I=s[15],L=l[0],O=l[4],X=l[8],T=l[12],w=l[1],H=l[5],J=l[9],j=l[13],ot=l[2],rt=l[6],F=l[10],G=l[14],et=l[3],Tt=l[7],bt=l[11],z=l[15];return c[0]=f*L+h*w+m*ot+p*et,c[4]=f*O+h*H+m*rt+p*Tt,c[8]=f*X+h*J+m*F+p*bt,c[12]=f*T+h*j+m*G+p*z,c[1]=g*L+v*w+_*ot+y*et,c[5]=g*O+v*H+_*rt+y*Tt,c[9]=g*X+v*J+_*F+y*bt,c[13]=g*T+v*j+_*G+y*z,c[2]=E*L+A*w+M*ot+x*et,c[6]=E*O+A*H+M*rt+x*Tt,c[10]=E*X+A*J+M*F+x*bt,c[14]=E*T+A*j+M*G+x*z,c[3]=P*L+U*w+D*ot+I*et,c[7]=P*O+U*H+D*rt+I*Tt,c[11]=P*X+U*J+D*F+I*bt,c[15]=P*T+U*j+D*G+I*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],_=t[10],y=t[14],E=t[3],A=t[7],M=t[11],x=t[15],P=m*y-p*_,U=h*y-p*v,D=h*_-m*v,I=f*y-p*g,L=f*_-m*g,O=f*v-h*g;return n*(A*P-M*U+x*D)-s*(E*P-M*I+x*L)+l*(E*U-A*I+x*O)-c*(E*D-A*L+M*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],_=t[10],y=t[11],E=t[12],A=t[13],M=t[14],x=t[15],P=v*M*p-A*_*p+A*m*y-h*M*y-v*m*x+h*_*x,U=E*_*p-g*M*p-E*m*y+f*M*y+g*m*x-f*_*x,D=g*A*p-E*v*p+E*h*y-f*A*y-g*h*x+f*v*x,I=E*v*m-g*A*m-E*h*_+f*A*_+g*h*M-f*v*M,L=n*P+s*U+l*D+c*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return t[0]=P*O,t[1]=(A*_*c-v*M*c-A*l*y+s*M*y+v*l*x-s*_*x)*O,t[2]=(h*M*c-A*m*c+A*l*p-s*M*p-h*l*x+s*m*x)*O,t[3]=(v*m*c-h*_*c-v*l*p+s*_*p+h*l*y-s*m*y)*O,t[4]=U*O,t[5]=(g*M*c-E*_*c+E*l*y-n*M*y-g*l*x+n*_*x)*O,t[6]=(E*m*c-f*M*c-E*l*p+n*M*p+f*l*x-n*m*x)*O,t[7]=(f*_*c-g*m*c+g*l*p-n*_*p-f*l*y+n*m*y)*O,t[8]=D*O,t[9]=(E*v*c-g*A*c-E*s*y+n*A*y+g*s*x-n*v*x)*O,t[10]=(f*A*c-E*h*c+E*s*p-n*A*p-f*s*x+n*h*x)*O,t[11]=(g*h*c-f*v*c-g*s*p+n*v*p+f*s*y-n*h*y)*O,t[12]=I*O,t[13]=(g*A*l-E*v*l+E*s*_-n*A*_-g*s*M+n*v*M)*O,t[14]=(E*h*l-f*A*l-E*s*m+n*A*m+f*s*M-n*h*M)*O,t[15]=(f*v*l-g*h*l+g*s*m-n*v*m-f*s*_+n*h*_)*O,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,g=f+f,v=h+h,_=c*p,y=c*g,E=c*v,A=f*g,M=f*v,x=h*v,P=m*p,U=m*g,D=m*v,I=s.x,L=s.y,O=s.z;return l[0]=(1-(A+x))*I,l[1]=(y+D)*I,l[2]=(E-U)*I,l[3]=0,l[4]=(y-D)*L,l[5]=(1-(_+x))*L,l[6]=(M+P)*L,l[7]=0,l[8]=(E+U)*O,l[9]=(M-P)*O,l[10]=(1-(_+A))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=br.set(l[0],l[1],l[2]).length();const f=br.set(l[4],l[5],l[6]).length(),h=br.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,g=1/f,v=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,n.setFromRotationMatrix(wi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,n,s,l,c,f,h=ki,m=!1){const p=this.elements,g=2*c/(n-t),v=2*c/(s-l),_=(n+t)/(n-t),y=(s+l)/(s-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(h===ki)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===ou)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,l,c,f,h=ki,m=!1){const p=this.elements,g=2/(n-t),v=2/(s-l),_=-(n+t)/(n-t),y=-(s+l)/(s-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(h===ki)E=-2/(f-c),A=-(f+c)/(f-c);else if(h===ou)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const br=new Y,wi=new tn,CM=new Y(0,0,0),wM=new Y(1,1,1),Ja=new Y,Oc=new Y,ri=new Y,Rv=new tn,Cv=new pl;class Yi{constructor(t=0,n=0,s=0,l=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],_=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return Rv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rv,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Cv.setFromEuler(this),this.setFromQuaternion(Cv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DM=0;const wv=new Y,Er=new pl,ga=new tn,Pc=new Y,Zo=new Y,UM=new Y,NM=new pl,Dv=new Y(1,0,0),Uv=new Y(0,1,0),Nv=new Y(0,0,1),Lv={type:"added"},LM={type:"removed"},Tr={type:"childadded",child:null},Ih={type:"childremoved",child:null};class mn extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new Y,n=new Yi,s=new pl,l=new Y(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new Se}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Er.setFromAxisAngle(t,n),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,n){return Er.setFromAxisAngle(t,n),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(Dv,t)}rotateY(t){return this.rotateOnAxis(Uv,t)}rotateZ(t){return this.rotateOnAxis(Nv,t)}translateOnAxis(t,n){return wv.copy(t).applyQuaternion(this.quaternion),this.position.add(wv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Dv,t)}translateY(t){return this.translateOnAxis(Uv,t)}translateZ(t){return this.translateOnAxis(Nv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Pc.copy(t):Pc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Zo,Pc,this.up):ga.lookAt(Pc,Zo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Er.setFromRotationMatrix(ga),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lv),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(LM),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lv),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,UM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,NM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}mn.DEFAULT_UP=new Y(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Y,va=new Y,Bh=new Y,_a=new Y,Ar=new Y,Rr=new Y,Ov=new Y,Fh=new Y,Hh=new Y,Gh=new Y,Vh=new sn,kh=new sn,Xh=new sn;class Ui{constructor(t=new Y,n=new Y,s=new Y){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),Di.subVectors(t,n),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){Di.subVectors(l,n),va.subVectors(s,n),Bh.subVectors(t,n);const f=Di.dot(Di),h=Di.dot(va),m=Di.dot(Bh),p=va.dot(va),g=va.dot(Bh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(p*m-h*g)*_,E=(f*g-h*m)*_;return c.set(1-y-E,E,y)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,n,s,l,c,f,h,m){return this.getBarycoord(t,n,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(t,n,s,l,c,f){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(t,n),kh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Vh,c.x),f.addScaledVector(kh,c.y),f.addScaledVector(Xh,c.z),f}static isFrontFacing(t,n,s,l){return Di.subVectors(s,n),va.subVectors(t,n),Di.cross(va).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,h;Ar.subVectors(l,s),Rr.subVectors(c,s),Fh.subVectors(t,s);const m=Ar.dot(Fh),p=Rr.dot(Fh);if(m<=0&&p<=0)return n.copy(s);Hh.subVectors(t,l);const g=Ar.dot(Hh),v=Rr.dot(Hh);if(g>=0&&v<=g)return n.copy(l);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(s).addScaledVector(Ar,f);Gh.subVectors(t,c);const y=Ar.dot(Gh),E=Rr.dot(Gh);if(E>=0&&y<=E)return n.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(s).addScaledVector(Rr,h);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return Ov.subVectors(c,l),h=(v-g)/(v-g+(y-E)),n.copy(l).addScaledVector(Ov,h);const x=1/(M+A+_);return f=A*x,h=_*x,n.copy(s).addScaledVector(Ar,f).addScaledVector(Rr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},zc={h:0,s:0,l:0};function Wh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class me{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Ue.workingColorSpace){if(t=gp(t,1),n=Me(n,0,1),s=Me(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=Wh(f,c,t+1/3),this.g=Wh(f,c,t),this.b=Wh(f,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,n=yi){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yi){const s=G_[t.toLowerCase()];return s!==void 0?this.setHex(s,n):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Ue.workingToColorSpace(In.copy(this),t),Math.round(Me(In.r*255,0,255))*65536+Math.round(Me(In.g*255,0,255))*256+Math.round(Me(In.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.workingToColorSpace(In.copy(this),n);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Ue.workingColorSpace){return Ue.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=yi){Ue.workingToColorSpace(In.copy(this),t);const n=In.r,s=In.g,l=In.b;return t!==yi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+n,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(Ka),t.getHSL(zc);const s=il(Ka.h,zc.h,n),l=il(Ka.s,zc.s,n),c=il(Ka.l,zc.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new me;me.NAMES=G_;let OM=0;class Ps extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Br,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){he(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){he(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hr extends Ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new Y,Ic=new Nt;let PM=0;class Li{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=xv,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Ic.fromBufferAttribute(this,n),Ic.applyMatrix3(t),this.setXY(n,Ic.x,Ic.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Lr(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Lr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Lr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Lr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Lr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),s=Vn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xv&&(t.usage=this.usage),t}}class V_ extends Li{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class k_ extends Li{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class qe extends Li{constructor(t,n,s){super(new Float32Array(t),n,s)}}let zM=0;const Si=new tn,qh=new mn,Cr=new Y,oi=new ml,Qo=new ml,yn=new Y;class Mn extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I_(t)?k_:V_)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,n,s){return Si.makeTranslation(t,n,s),this.applyMatrix4(Si),this}scale(t,n,s){return Si.makeScale(t,n,s),this.applyMatrix4(Si),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new qe(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Qo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(oi.min,Qo.min),oi.expandByPoint(yn),yn.addVectors(oi.max,Qo.max),oi.expandByPoint(yn)):(oi.expandByPoint(Qo.min),oi.expandByPoint(Qo.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)yn.fromBufferAttribute(h,p),m&&(Cr.fromBufferAttribute(t,p),yn.add(Cr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<s.count;X++)h[X]=new Y,m[X]=new Y;const p=new Y,g=new Y,v=new Y,_=new Nt,y=new Nt,E=new Nt,A=new Y,M=new Y;function x(X,T,w){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,T),v.fromBufferAttribute(s,w),_.fromBufferAttribute(c,X),y.fromBufferAttribute(c,T),E.fromBufferAttribute(c,w),g.sub(p),v.sub(p),y.sub(_),E.sub(_);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),h[X].add(A),h[T].add(A),h[w].add(A),m[X].add(M),m[T].add(M),m[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,T=P.length;X<T;++X){const w=P[X],H=w.start,J=w.count;for(let j=H,ot=H+J;j<ot;j+=3)x(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const U=new Y,D=new Y,I=new Y,L=new Y;function O(X){I.fromBufferAttribute(l,X),L.copy(I);const T=h[X];U.copy(T),U.sub(I.multiplyScalar(I.dot(T))).normalize(),D.crossVectors(L,T);const H=D.dot(m[X])<0?-1:1;f.setXYZW(X,U.x,U.y,U.z,H)}for(let X=0,T=P.length;X<T;++X){const w=P[X],H=w.start,J=w.count;for(let j=H,ot=H+J;j<ot;j+=3)O(t.getX(j+0)),O(t.getX(j+1)),O(t.getX(j+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new Y,c=new Y,f=new Y,h=new Y,m=new Y,p=new Y,g=new Y,v=new Y;if(t)for(let _=0,y=t.count;_<y;_+=3){const E=t.getX(_+0),A=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,M),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,y=n.count;_<y;_+=3)l.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),f.fromBufferAttribute(n,_+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*g;for(let x=0;x<g;x++)_[E++]=p[y++]}return new Li(_,g,v)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],y=t(_,s);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pv=new tn,bs=new F_,Bc=new fu,zv=new Y,Fc=new Y,Hc=new Y,Gc=new Y,Yh=new Y,Vc=new Y,Iv=new Y,kc=new Y;class $e extends mn{constructor(t=new Mn,n=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(Yh.fromBufferAttribute(v,t),f?Vc.addScaledVector(Yh,g):Vc.addScaledVector(Yh.sub(n),g))}n.add(Vc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),bs.copy(t.ray).recast(t.near),!(Bc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Bc,zv)===null||bs.origin.distanceToSquared(zv)>(t.far-t.near)**2))&&(Pv.copy(c).invert(),bs.copy(t.ray).applyMatrix4(Pv),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,bs)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=_.length;E<A;E++){const M=_[E],x=f[M.materialIndex],P=Math.max(M.start,y.start),U=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,I=U;D<I;D+=3){const L=h.getX(D),O=h.getX(D+1),X=h.getX(D+2);l=Xc(this,x,t,s,p,g,v,L,O,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let M=E,x=A;M<x;M+=3){const P=h.getX(M),U=h.getX(M+1),D=h.getX(M+2);l=Xc(this,f,t,s,p,g,v,P,U,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=_.length;E<A;E++){const M=_[E],x=f[M.materialIndex],P=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,I=U;D<I;D+=3){const L=D,O=D+1,X=D+2;l=Xc(this,x,t,s,p,g,v,L,O,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=E,x=A;M<x;M+=3){const P=M,U=M+1,D=M+2;l=Xc(this,f,t,s,p,g,v,P,U,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function IM(r,t,n,s,l,c,f,h){let m;if(t.side===Xn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===ns,h),m===null)return null;kc.copy(h),kc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(kc);return p<n.near||p>n.far?null:{distance:p,point:kc.clone(),object:r}}function Xc(r,t,n,s,l,c,f,h,m,p){r.getVertexPosition(h,Fc),r.getVertexPosition(m,Hc),r.getVertexPosition(p,Gc);const g=IM(r,t,n,s,Fc,Hc,Gc,Iv);if(g){const v=new Y;Ui.getBarycoord(Iv,Fc,Hc,Gc,v),l&&(g.uv=Ui.getInterpolatedAttribute(l,h,m,p,v,new Nt)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,h,m,p,v,new Nt)),f&&(g.normal=Ui.getInterpolatedAttribute(f,h,m,p,v,new Y),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new Y,materialIndex:0};Ui.getNormal(Fc,Hc,Gc,_.normal),g.face=_,g.barycoord=v}return g}class Qr extends Mn{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let _=0,y=0;E("z","y","x",-1,-1,s,n,t,f,c,0),E("z","y","x",1,-1,s,n,-t,f,c,1),E("x","z","y",1,1,t,s,n,l,f,2),E("x","z","y",1,-1,t,s,-n,l,f,3),E("x","y","z",1,-1,t,n,s,l,c,4),E("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(v,2));function E(A,M,x,P,U,D,I,L,O,X,T){const w=D/O,H=I/X,J=D/2,j=I/2,ot=L/2,rt=O+1,F=X+1;let G=0,et=0;const Tt=new Y;for(let bt=0;bt<F;bt++){const z=bt*H-j;for(let $=0;$<rt;$++){const mt=$*w-J;Tt[A]=mt*P,Tt[M]=z*U,Tt[x]=ot,p.push(Tt.x,Tt.y,Tt.z),Tt[A]=0,Tt[M]=0,Tt[x]=L>0?1:-1,g.push(Tt.x,Tt.y,Tt.z),v.push($/O),v.push(1-bt/X),G+=1}}for(let bt=0;bt<X;bt++)for(let z=0;z<O;z++){const $=_+z+rt*bt,mt=_+z+rt*(bt+1),Ct=_+(z+1)+rt*(bt+1),It=_+(z+1)+rt*bt;m.push($,mt,It),m.push(mt,Ct,It),et+=6}h.addGroup(y,et,T),y+=et,_+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function kn(r){const t={};for(let n=0;n<r.length;n++){const s=qr(r[n]);for(const l in s)t[l]=s[l]}return t}function BM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function X_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const cu={clone:qr,merge:kn};var FM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=BM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class W_ extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new Y,Bv=new Nt,Fv=new Nt;class Jn extends W_{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Wr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($a.x,$a.y).multiplyScalar(-t/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-t/$a.z)}getViewSize(t,n){return this.getViewBounds(t,Bv,Fv),n.subVectors(Fv,Bv)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(nl*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wr=-90,Dr=1;class GM extends mn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(wr,Dr,t,n);l.layers=this.layers,this.add(l);const c=new Jn(wr,Dr,t,n);c.layers=this.layers,this.add(c);const f=new Jn(wr,Dr,t,n);f.layers=this.layers,this.add(f);const h=new Jn(wr,Dr,t,n);h.layers=this.layers,this.add(h);const m=new Jn(wr,Dr,t,n);m.layers=this.layers,this.add(m);const p=new Jn(wr,Dr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ou)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,f),t.setRenderTarget(s,2,l),t.render(n,h),t.setRenderTarget(s,3,l),t.render(n,m),t.setRenderTarget(s,4,l),t.render(n,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(n,g),t.setRenderTarget(v,_,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class q_ extends Hn{constructor(t=[],n=Ns,s,l,c,f,h,m,p,g){super(t,n,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Y_ extends Kn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new q_(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qr(5,5,5),c=new Fn({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Xi});c.uniforms.tEquirect.value=n;const f=new $e(l,c),h=n.minFilter;return n.minFilter===Ds&&(n.minFilter=Bn),new GM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}class Or extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,s),x=this._getHandJoint(p,A);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&_>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Or;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class _p{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(t),this.density=n}clone(){return new _p(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kM extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class XM extends Hn{constructor(t=null,n=1,s=1,l,c,f,h,m,p=Ln,g=Ln,v,_){super(null,f,h,m,p,g,l,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new Y,WM=new Y,qM=new Se;class Rs{constructor(t=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=Zh.subVectors(s,n).cross(WM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Zh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||qM.getNormalMatrix(t),l=this.coplanarPoint(Zh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new fu,YM=new Nt(.5,.5),Wc=new Y;class xp{constructor(t=new Rs,n=new Rs,s=new Rs,l=new Rs,c=new Rs,f=new Rs){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ki,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],_=c[6],y=c[7],E=c[8],A=c[9],M=c[10],x=c[11],P=c[12],U=c[13],D=c[14],I=c[15];if(l[0].setComponents(p-f,y-g,x-E,I-P).normalize(),l[1].setComponents(p+f,y+g,x+E,I+P).normalize(),l[2].setComponents(p+h,y+v,x+A,I+U).normalize(),l[3].setComponents(p-h,y-v,x-A,I-U).normalize(),s)l[4].setComponents(m,_,M,D).normalize(),l[5].setComponents(p-m,y-_,x-M,I-D).normalize();else if(l[4].setComponents(p-m,y-_,x-M,I-D).normalize(),n===ki)l[5].setComponents(p+m,y+_,x+M,I+D).normalize();else if(n===ou)l[5].setComponents(m,_,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);const n=YM.distanceTo(t.center);return Es.radius=.7071067811865476+n,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(Wc.x=l.normal.x>0?t.max.x:t.min.x,Wc.y=l.normal.y>0?t.max.y:t.min.y,Wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class j_ extends Ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hv=new tn,Jd=new F_,qc=new fu,Yc=new Y;class jM extends mn{constructor(t=new Mn,n=new j_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;Hv.copy(l).invert(),Jd.copy(t.ray).applyMatrix4(Hv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const _=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let E=_,A=y;E<A;E++){const M=p.getX(E);Yc.fromBufferAttribute(v,M),Gv(Yc,M,m,l,t,n,this)}}else{const _=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let E=_,A=y;E<A;E++)Yc.fromBufferAttribute(v,E),Gv(Yc,E,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Gv(r,t,n,s,l,c,f){const h=Jd.distanceSqToPoint(r);if(h<n){const m=new Y;Jd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class ZM extends Hn{constructor(t,n,s,l,c,f,h,m,p){super(t,n,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ul extends Hn{constructor(t,n,s=qi,l,c,f,h=Ln,m=Ln,p,g=ya,v=1){if(g!==ya&&g!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class QM extends ul{constructor(t,n=qi,s=Ns,l,c,f=Ln,h=Ln,m,p=ya){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Z_ extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sp extends Mn{constructor(t=1,n=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:s,radialSegments:l,heightSegments:c},n=Math.max(0,n),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const f=[],h=[],m=[],p=[],g=n/2,v=Math.PI/2*t,_=n,y=2*v+_,E=s*2+c,A=l+1,M=new Y,x=new Y;for(let P=0;P<=E;P++){let U=0,D=0,I=0,L=0;if(P<=s){const T=P/s,w=T*Math.PI/2;D=-g-t*Math.cos(w),I=t*Math.sin(w),L=-t*Math.cos(w),U=T*v}else if(P<=s+c){const T=(P-s)/c;D=-g+T*n,I=t,L=0,U=v+T*_}else{const T=(P-s-c)/s,w=T*Math.PI/2;D=g+t*Math.sin(w),I=t*Math.cos(w),L=t*Math.sin(w),U=v+_+T*v}const O=Math.max(0,Math.min(1,U/y));let X=0;P===0?X=.5/l:P===E&&(X=-.5/l);for(let T=0;T<=l;T++){const w=T/l,H=w*Math.PI*2,J=Math.sin(H),j=Math.cos(H);x.x=-I*j,x.y=D,x.z=I*J,h.push(x.x,x.y,x.z),M.set(-I*j,L,I*J),M.normalize(),m.push(M.x,M.y,M.z),p.push(w+X,O)}if(P>0){const T=(P-1)*A;for(let w=0;w<l;w++){const H=T+w,J=T+w+1,j=P*A+w,ot=P*A+w+1;f.push(H,J,j),f.push(J,ot,j)}}}this.setIndex(f),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sp(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class yp extends Mn{constructor(t=1,n=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],_=[],y=[];let E=0;const A=[],M=s/2;let x=0;P(),f===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(y,2));function P(){const D=new Y,I=new Y;let L=0;const O=(n-t)/s;for(let X=0;X<=c;X++){const T=[],w=X/c,H=w*(n-t)+t;for(let J=0;J<=l;J++){const j=J/l,ot=j*m+h,rt=Math.sin(ot),F=Math.cos(ot);I.x=H*rt,I.y=-w*s+M,I.z=H*F,v.push(I.x,I.y,I.z),D.set(rt,O,F).normalize(),_.push(D.x,D.y,D.z),y.push(j,1-w),T.push(E++)}A.push(T)}for(let X=0;X<l;X++)for(let T=0;T<c;T++){const w=A[T][X],H=A[T+1][X],J=A[T+1][X+1],j=A[T][X+1];(t>0||T!==0)&&(g.push(w,H,j),L+=3),(n>0||T!==c-1)&&(g.push(H,J,j),L+=3)}p.addGroup(x,L,0),x+=L}function U(D){const I=E,L=new Nt,O=new Y;let X=0;const T=D===!0?t:n,w=D===!0?1:-1;for(let J=1;J<=l;J++)v.push(0,M*w,0),_.push(0,w,0),y.push(.5,.5),E++;const H=E;for(let J=0;J<=l;J++){const ot=J/l*m+h,rt=Math.cos(ot),F=Math.sin(ot);O.x=T*F,O.y=M*w,O.z=T*rt,v.push(O.x,O.y,O.z),_.push(0,w,0),L.x=rt*.5+.5,L.y=F*.5*w+.5,y.push(L.x,L.y),E++}for(let J=0;J<l;J++){const j=I+J,ot=H+J;D===!0?g.push(ot,ot+1,j):g.push(ot+1,ot,j),X+=3}p.addGroup(x,X,D===!0?1:2),x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),n.push(c),l=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let l=0;const c=s.length;let f;n?f=n:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],_=s[l+1]-g,y=(f-g)/_;return(l+y)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=n||(f.isVector2?new Nt:new Y);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new Y,l=[],c=[],f=[],h=new Y,m=new tn;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new Y)}c[0]=new Y,f[0]=new Y;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),_=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),_<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Me(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,E))}f[y].crossVectors(l[y],c[y])}if(n===!0){let y=Math.acos(Me(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mp extends ji{constructor(t=0,n=0,s=1,l=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new Nt){const s=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=m-this.aX,y=p-this.aY;m=_*g-y*v+this.aX,p=_*v+y*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class JM extends Mp{constructor(t,n,s,l,c,f){super(t,n,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function bp(){let r=0,t=0,n=0,s=0;function l(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,v){let _=(f-c)/p-(h-c)/(p+g)+(h-f)/g,y=(h-f)/g-(m-f)/(g+v)+(m-h)/v;_*=g,y*=g,l(f,h,_,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+s*h}}}const jc=new Y,Qh=new bp,Jh=new bp,Kh=new bp;class KM extends ji{constructor(t=[],n=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=l}getPoint(t,n=new Y){const s=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=l[(h-1)%c]:(jc.subVectors(l[0],l[1]).add(l[0]),p=jc);const v=l[h%c],_=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(jc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=jc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),y),A=Math.pow(v.distanceToSquared(_),y),M=Math.pow(_.distanceToSquared(g),y);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),Qh.initNonuniformCatmullRom(p.x,v.x,_.x,g.x,E,A,M),Jh.initNonuniformCatmullRom(p.y,v.y,_.y,g.y,E,A,M),Kh.initNonuniformCatmullRom(p.z,v.z,_.z,g.z,E,A,M)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(p.x,v.x,_.x,g.x,this.tension),Jh.initCatmullRom(p.y,v.y,_.y,g.y,this.tension),Kh.initCatmullRom(p.z,v.z,_.z,g.z,this.tension));return s.set(Qh.calc(m),Jh.calc(m),Kh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Y().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vv(r,t,n,s,l){const c=(s-t)*.5,f=(l-n)*.5,h=r*r,m=r*h;return(2*n-2*s+c+f)*m+(-3*n+3*s-2*c-f)*h+c*r+n}function $M(r,t){const n=1-r;return n*n*t}function tb(r,t){return 2*(1-r)*r*t}function eb(r,t){return r*r*t}function al(r,t,n,s){return $M(r,t)+tb(r,n)+eb(r,s)}function nb(r,t){const n=1-r;return n*n*n*t}function ib(r,t){const n=1-r;return 3*n*n*r*t}function ab(r,t){return 3*(1-r)*r*r*t}function sb(r,t){return r*r*r*t}function sl(r,t,n,s,l){return nb(r,t)+ib(r,n)+ab(r,s)+sb(r,l)}class Q_ extends ji{constructor(t=new Nt,n=new Nt,s=new Nt,l=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Nt){const s=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(sl(t,l.x,c.x,f.x,h.x),sl(t,l.y,c.y,f.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rb extends ji{constructor(t=new Y,n=new Y,s=new Y,l=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Y){const s=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(sl(t,l.x,c.x,f.x,h.x),sl(t,l.y,c.y,f.y,h.y),sl(t,l.z,c.z,f.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class J_ extends ji{constructor(t=new Nt,n=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Nt){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Nt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ob extends ji{constructor(t=new Y,n=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Y){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Y){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends ji{constructor(t=new Nt,n=new Nt,s=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Nt){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(al(t,l.x,c.x,f.x),al(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lb extends ji{constructor(t=new Y,n=new Y,s=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Y){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(al(t,l.x,c.x,f.x),al(t,l.y,c.y,f.y),al(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $_ extends ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Nt){const s=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(Vv(h,m.x,p.x,g.x,v.x),Vv(h,m.y,p.y,g.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Nt().fromArray(l))}return this}}var Kd=Object.freeze({__proto__:null,ArcCurve:JM,CatmullRomCurve3:KM,CubicBezierCurve:Q_,CubicBezierCurve3:rb,EllipseCurve:Mp,LineCurve:J_,LineCurve3:ob,QuadraticBezierCurve:K_,QuadraticBezierCurve3:lb,SplineCurve:$_});class cb extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kd[s](n,t))}return this}getPoint(t,n){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let s=0,l=this.curves.length;s<l;s++)n+=this.curves[s].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];s&&s.equals(g)||(n.push(g),s=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,s=this.curves.length;n<s;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(new Kd[l.type]().fromJSON(l))}return this}}class kv extends cb{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,s=t.length;n<s;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const s=new J_(this.currentPoint.clone(),new Nt(t,n));return this.curves.push(s),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,s,l){const c=new K_(this.currentPoint.clone(),new Nt(t,n),new Nt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,n,s,l,c,f){const h=new Q_(this.currentPoint.clone(),new Nt(t,n),new Nt(s,l),new Nt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),s=new $_(n);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,s,l,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,s,l,c,f),this}absarc(t,n,s,l,c,f){return this.absellipse(t,n,s,s,l,c,f),this}ellipse(t,n,s,l,c,f,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,s,l,c,f,h,m),this}absellipse(t,n,s,l,c,f,h,m){const p=new Mp(t,n,s,l,c,f,h,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tx extends kv{constructor(t){super(t),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let s=0,l=this.holes.length;s<l;s++)n[s]=this.holes[s].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,s=this.holes.length;n<s;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(new kv().fromJSON(l))}return this}}function ub(r,t,n=2){const s=t&&t.length,l=s?t[0]*n:r.length;let c=ex(r,0,l,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,p;if(s&&(c=mb(r,t,c,n)),r.length>80*n){h=r[0],m=r[1];let g=h,v=m;for(let _=n;_<l;_+=n){const y=r[_],E=r[_+1];y<h&&(h=y),E<m&&(m=E),y>g&&(g=y),E>v&&(v=E)}p=Math.max(g-h,v-m),p=p!==0?32767/p:0}return fl(c,f,n,h,m,p,0),f}function ex(r,t,n,s,l){let c;if(l===Ab(r,t,n,s)>0)for(let f=t;f<n;f+=s)c=Xv(f/s|0,r[f],r[f+1],c);else for(let f=n-s;f>=t;f-=s)c=Xv(f/s|0,r[f],r[f+1],c);return c&&Yr(c,c.next)&&(dl(c),c=c.next),c}function Ls(r,t){if(!r)return r;t||(t=r);let n=r,s;do if(s=!1,!n.steiner&&(Yr(n,n.next)||en(n.prev,n,n.next)===0)){if(dl(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function fl(r,t,n,s,l,c,f){if(!r)return;!f&&c&&Sb(r,s,l,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?hb(r,s,l,c):fb(r)){t.push(m.i,r.i,p.i),dl(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=db(Ls(r),t),fl(r,t,n,s,l,c,2)):f===2&&pb(r,t,n,s,l,c):fl(Ls(r),t,n,s,l,c,1);break}}}function fb(r){const t=r.prev,n=r,s=r.next;if(en(t,n,s)>=0)return!1;const l=t.x,c=n.x,f=s.x,h=t.y,m=n.y,p=s.y,g=Math.min(l,c,f),v=Math.min(h,m,p),_=Math.max(l,c,f),y=Math.max(h,m,p);let E=s.next;for(;E!==t;){if(E.x>=g&&E.x<=_&&E.y>=v&&E.y<=y&&tl(l,h,c,m,f,p,E.x,E.y)&&en(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function hb(r,t,n,s){const l=r.prev,c=r,f=r.next;if(en(l,c,f)>=0)return!1;const h=l.x,m=c.x,p=f.x,g=l.y,v=c.y,_=f.y,y=Math.min(h,m,p),E=Math.min(g,v,_),A=Math.max(h,m,p),M=Math.max(g,v,_),x=$d(y,E,t,n,s),P=$d(A,M,t,n,s);let U=r.prevZ,D=r.nextZ;for(;U&&U.z>=x&&D&&D.z<=P;){if(U.x>=y&&U.x<=A&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&tl(h,g,m,v,p,_,U.x,U.y)&&en(U.prev,U,U.next)>=0||(U=U.prevZ,D.x>=y&&D.x<=A&&D.y>=E&&D.y<=M&&D!==l&&D!==f&&tl(h,g,m,v,p,_,D.x,D.y)&&en(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;U&&U.z>=x;){if(U.x>=y&&U.x<=A&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&tl(h,g,m,v,p,_,U.x,U.y)&&en(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;D&&D.z<=P;){if(D.x>=y&&D.x<=A&&D.y>=E&&D.y<=M&&D!==l&&D!==f&&tl(h,g,m,v,p,_,D.x,D.y)&&en(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function db(r,t){let n=r;do{const s=n.prev,l=n.next.next;!Yr(s,l)&&ix(s,n,n.next,l)&&hl(s,l)&&hl(l,s)&&(t.push(s.i,n.i,l.i),dl(n),dl(n.next),n=r=l),n=n.next}while(n!==r);return Ls(n)}function pb(r,t,n,s,l,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&bb(f,h)){let m=ax(f,h);f=Ls(f,f.next),m=Ls(m,m.next),fl(f,t,n,s,l,c,0),fl(m,t,n,s,l,c,0);return}h=h.next}f=f.next}while(f!==r)}function mb(r,t,n,s){const l=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=ex(r,h,m,s,!1);p===p.next&&(p.steiner=!0),l.push(Mb(p))}l.sort(gb);for(let c=0;c<l.length;c++)n=vb(l[c],n);return n}function gb(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=s-l}return n}function vb(r,t){const n=_b(r,t);if(!n)return t;const s=ax(n,r);return Ls(s,s.next),Ls(n,n.next)}function _b(r,t){let n=t;const s=r.x,l=r.y;let c=-1/0,f;if(Yr(r,n))return n;do{if(Yr(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const v=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=s&&v>c&&(c=v,f=n.x<n.next.x?n:n.next,v===s))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,m=f.x,p=f.y;let g=1/0;n=f;do{if(s>=n.x&&n.x>=m&&s!==n.x&&nx(l<p?s:c,l,m,p,l<p?c:s,l,n.x,n.y)){const v=Math.abs(l-n.y)/(s-n.x);hl(n,r)&&(v<g||v===g&&(n.x>f.x||n.x===f.x&&xb(f,n)))&&(f=n,g=v)}n=n.next}while(n!==h);return f}function xb(r,t){return en(r.prev,r,t.prev)<0&&en(t.next,r,r.next)<0}function Sb(r,t,n,s){let l=r;do l.z===0&&(l.z=$d(l.x,l.y,t,n,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,yb(l)}function yb(r){let t,n=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,h=0;for(let p=0;p<n&&(h++,f=f.nextZ,!!f);p++);let m=n;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,h--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,n*=2}while(t>1);return r}function $d(r,t,n,s,l){return r=(r-n)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Mb(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function nx(r,t,n,s,l,c,f,h){return(l-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(s-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(l-f)*(s-h)}function tl(r,t,n,s,l,c,f,h){return!(r===f&&t===h)&&nx(r,t,n,s,l,c,f,h)}function bb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Eb(r,t)&&(hl(r,t)&&hl(t,r)&&Tb(r,t)&&(en(r.prev,r,t.prev)||en(r,t.prev,t))||Yr(r,t)&&en(r.prev,r,r.next)>0&&en(t.prev,t,t.next)>0)}function en(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Yr(r,t){return r.x===t.x&&r.y===t.y}function ix(r,t,n,s){const l=Qc(en(r,t,n)),c=Qc(en(r,t,s)),f=Qc(en(n,s,r)),h=Qc(en(n,s,t));return!!(l!==c&&f!==h||l===0&&Zc(r,n,t)||c===0&&Zc(r,s,t)||f===0&&Zc(n,r,s)||h===0&&Zc(n,t,s))}function Zc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Qc(r){return r>0?1:r<0?-1:0}function Eb(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&ix(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function hl(r,t){return en(r.prev,r,r.next)<0?en(r,t,r.next)>=0&&en(r,r.prev,t)>=0:en(r,t,r.prev)<0||en(r,r.next,t)<0}function Tb(r,t){let n=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==r);return s}function ax(r,t){const n=tp(r.i,r.x,r.y),s=tp(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,s.next=n,n.prev=s,c.next=s,s.prev=c,s}function Xv(r,t,n,s){const l=tp(r,t,n);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function dl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function tp(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ab(r,t,n,s){let l=0;for(let c=t,f=n-s;c<n;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class Rb{static triangulate(t,n,s=2){return ub(t,n,s)}}class Pr{static area(t){const n=t.length;let s=0;for(let l=n-1,c=0;c<n;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Pr.area(t)<0}static triangulateShape(t,n){const s=[],l=[],c=[];Wv(t),qv(s,t);let f=t.length;n.forEach(Wv);for(let m=0;m<n.length;m++)l.push(f),f+=n[m].length,qv(s,n[m]);const h=Rb.triangulate(s,l);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function Wv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function qv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Ep extends Mn{constructor(t=new tx([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];f(p)}this.setAttribute("position",new qe(l,3)),this.setAttribute("uv",new qe(c,2)),this.computeVertexNormals();function f(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,v=n.depth!==void 0?n.depth:1;let _=n.bevelEnabled!==void 0?n.bevelEnabled:!0,y=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:y-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const x=n.extrudePath,P=n.UVGenerator!==void 0?n.UVGenerator:Cb;let U,D=!1,I,L,O,X;if(x){U=x.getSpacedPoints(g),D=!0,_=!1;const vt=x.isCatmullRomCurve3?x.closed:!1;I=x.computeFrenetFrames(g,vt),L=new Y,O=new Y,X=new Y}_||(M=0,y=0,E=0,A=0);const T=h.extractPoints(p);let w=T.shape;const H=T.holes;if(!Pr.isClockWise(w)){w=w.reverse();for(let vt=0,Rt=H.length;vt<Rt;vt++){const yt=H[vt];Pr.isClockWise(yt)&&(H[vt]=yt.reverse())}}function j(vt){const yt=10000000000000001e-36;let Bt=vt[0];for(let B=1;B<=vt.length;B++){const ne=B%vt.length,Vt=vt[ne],ie=Vt.x-Bt.x,Dt=Vt.y-Bt.y,N=ie*ie+Dt*Dt,b=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(Bt.x),Math.abs(Bt.y)),W=yt*b*b;if(N<=W){vt.splice(ne,1),B--;continue}Bt=Vt}}j(w),H.forEach(j);const ot=H.length,rt=w;for(let vt=0;vt<ot;vt++){const Rt=H[vt];w=w.concat(Rt)}function F(vt,Rt,yt){return Rt||De("ExtrudeGeometry: vec does not exist"),vt.clone().addScaledVector(Rt,yt)}const G=w.length;function et(vt,Rt,yt){let Bt,B,ne;const Vt=vt.x-Rt.x,ie=vt.y-Rt.y,Dt=yt.x-vt.x,N=yt.y-vt.y,b=Vt*Vt+ie*ie,W=Vt*N-ie*Dt;if(Math.abs(W)>Number.EPSILON){const ft=Math.sqrt(b),_t=Math.sqrt(Dt*Dt+N*N),ut=Rt.x-ie/ft,Zt=Rt.y+Vt/ft,Lt=yt.x-N/_t,Qt=yt.y+Dt/_t,se=((Lt-ut)*N-(Qt-Zt)*Dt)/(Vt*N-ie*Dt);Bt=ut+Vt*se-vt.x,B=Zt+ie*se-vt.y;const dt=Bt*Bt+B*B;if(dt<=2)return new Nt(Bt,B);ne=Math.sqrt(dt/2)}else{let ft=!1;Vt>Number.EPSILON?Dt>Number.EPSILON&&(ft=!0):Vt<-Number.EPSILON?Dt<-Number.EPSILON&&(ft=!0):Math.sign(ie)===Math.sign(N)&&(ft=!0),ft?(Bt=-ie,B=Vt,ne=Math.sqrt(b)):(Bt=Vt,B=ie,ne=Math.sqrt(b/2))}return new Nt(Bt/ne,B/ne)}const Tt=[];for(let vt=0,Rt=rt.length,yt=Rt-1,Bt=vt+1;vt<Rt;vt++,yt++,Bt++)yt===Rt&&(yt=0),Bt===Rt&&(Bt=0),Tt[vt]=et(rt[vt],rt[yt],rt[Bt]);const bt=[];let z,$=Tt.concat();for(let vt=0,Rt=ot;vt<Rt;vt++){const yt=H[vt];z=[];for(let Bt=0,B=yt.length,ne=B-1,Vt=Bt+1;Bt<B;Bt++,ne++,Vt++)ne===B&&(ne=0),Vt===B&&(Vt=0),z[Bt]=et(yt[Bt],yt[ne],yt[Vt]);bt.push(z),$=$.concat(z)}let mt;if(M===0)mt=Pr.triangulateShape(rt,H);else{const vt=[],Rt=[];for(let yt=0;yt<M;yt++){const Bt=yt/M,B=y*Math.cos(Bt*Math.PI/2),ne=E*Math.sin(Bt*Math.PI/2)+A;for(let Vt=0,ie=rt.length;Vt<ie;Vt++){const Dt=F(rt[Vt],Tt[Vt],ne);Xt(Dt.x,Dt.y,-B),Bt===0&&vt.push(Dt)}for(let Vt=0,ie=ot;Vt<ie;Vt++){const Dt=H[Vt];z=bt[Vt];const N=[];for(let b=0,W=Dt.length;b<W;b++){const ft=F(Dt[b],z[b],ne);Xt(ft.x,ft.y,-B),Bt===0&&N.push(ft)}Bt===0&&Rt.push(N)}}mt=Pr.triangulateShape(vt,Rt)}const Ct=mt.length,It=E+A;for(let vt=0;vt<G;vt++){const Rt=_?F(w[vt],$[vt],It):w[vt];D?(O.copy(I.normals[0]).multiplyScalar(Rt.x),L.copy(I.binormals[0]).multiplyScalar(Rt.y),X.copy(U[0]).add(O).add(L),Xt(X.x,X.y,X.z)):Xt(Rt.x,Rt.y,0)}for(let vt=1;vt<=g;vt++)for(let Rt=0;Rt<G;Rt++){const yt=_?F(w[Rt],$[Rt],It):w[Rt];D?(O.copy(I.normals[vt]).multiplyScalar(yt.x),L.copy(I.binormals[vt]).multiplyScalar(yt.y),X.copy(U[vt]).add(O).add(L),Xt(X.x,X.y,X.z)):Xt(yt.x,yt.y,v/g*vt)}for(let vt=M-1;vt>=0;vt--){const Rt=vt/M,yt=y*Math.cos(Rt*Math.PI/2),Bt=E*Math.sin(Rt*Math.PI/2)+A;for(let B=0,ne=rt.length;B<ne;B++){const Vt=F(rt[B],Tt[B],Bt);Xt(Vt.x,Vt.y,v+yt)}for(let B=0,ne=H.length;B<ne;B++){const Vt=H[B];z=bt[B];for(let ie=0,Dt=Vt.length;ie<Dt;ie++){const N=F(Vt[ie],z[ie],Bt);D?Xt(N.x,N.y+U[g-1].y,U[g-1].x+yt):Xt(N.x,N.y,v+yt)}}}it(),ht();function it(){const vt=l.length/3;if(_){let Rt=0,yt=G*Rt;for(let Bt=0;Bt<Ct;Bt++){const B=mt[Bt];qt(B[2]+yt,B[1]+yt,B[0]+yt)}Rt=g+M*2,yt=G*Rt;for(let Bt=0;Bt<Ct;Bt++){const B=mt[Bt];qt(B[0]+yt,B[1]+yt,B[2]+yt)}}else{for(let Rt=0;Rt<Ct;Rt++){const yt=mt[Rt];qt(yt[2],yt[1],yt[0])}for(let Rt=0;Rt<Ct;Rt++){const yt=mt[Rt];qt(yt[0]+G*g,yt[1]+G*g,yt[2]+G*g)}}s.addGroup(vt,l.length/3-vt,0)}function ht(){const vt=l.length/3;let Rt=0;Pt(rt,Rt),Rt+=rt.length;for(let yt=0,Bt=H.length;yt<Bt;yt++){const B=H[yt];Pt(B,Rt),Rt+=B.length}s.addGroup(vt,l.length/3-vt,1)}function Pt(vt,Rt){let yt=vt.length;for(;--yt>=0;){const Bt=yt;let B=yt-1;B<0&&(B=vt.length-1);for(let ne=0,Vt=g+M*2;ne<Vt;ne++){const ie=G*ne,Dt=G*(ne+1),N=Rt+Bt+ie,b=Rt+B+ie,W=Rt+B+Dt,ft=Rt+Bt+Dt;ve(N,b,W,ft)}}}function Xt(vt,Rt,yt){m.push(vt),m.push(Rt),m.push(yt)}function qt(vt,Rt,yt){Ce(vt),Ce(Rt),Ce(yt);const Bt=l.length/3,B=P.generateTopUV(s,l,Bt-3,Bt-2,Bt-1);ue(B[0]),ue(B[1]),ue(B[2])}function ve(vt,Rt,yt,Bt){Ce(vt),Ce(Rt),Ce(Bt),Ce(Rt),Ce(yt),Ce(Bt);const B=l.length/3,ne=P.generateSideWallUV(s,l,B-6,B-3,B-2,B-1);ue(ne[0]),ue(ne[1]),ue(ne[3]),ue(ne[1]),ue(ne[2]),ue(ne[3])}function Ce(vt){l.push(m[vt*3+0]),l.push(m[vt*3+1]),l.push(m[vt*3+2])}function ue(vt){c.push(vt.x),c.push(vt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,s=this.parameters.options;return wb(n,s,t)}static fromJSON(t,n){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];s.push(h)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Kd[l.type]().fromJSON(l)),new Ep(s,t.options)}}const Cb={generateTopUV:function(r,t,n,s,l){const c=t[n*3],f=t[n*3+1],h=t[s*3],m=t[s*3+1],p=t[l*3],g=t[l*3+1];return[new Nt(c,f),new Nt(h,m),new Nt(p,g)]},generateSideWallUV:function(r,t,n,s,l,c){const f=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[s*3],g=t[s*3+1],v=t[s*3+2],_=t[l*3],y=t[l*3+1],E=t[l*3+2],A=t[c*3],M=t[c*3+1],x=t[c*3+2];return Math.abs(h-g)<Math.abs(f-p)?[new Nt(f,1-m),new Nt(p,1-v),new Nt(_,1-E),new Nt(A,1-x)]:[new Nt(h,1-m),new Nt(g,1-v),new Nt(y,1-E),new Nt(M,1-x)]}};function wb(r,t,n){if(n.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class hu extends Mn{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,v=t/h,_=n/m,y=[],E=[],A=[],M=[];for(let x=0;x<g;x++){const P=x*_-f;for(let U=0;U<p;U++){const D=U*v-c;E.push(D,-P,0),A.push(0,0,1),M.push(U/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<h;P++){const U=P+p*x,D=P+p*(x+1),I=P+1+p*(x+1),L=P+1+p*x;y.push(U,D,L),y.push(D,I,L)}this.setIndex(y),this.setAttribute("position",new qe(E,3)),this.setAttribute("normal",new qe(A,3)),this.setAttribute("uv",new qe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tp extends Mn{constructor(t=.5,n=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let v=t;const _=(n-t)/l,y=new Y,E=new Nt;for(let A=0;A<=l;A++){for(let M=0;M<=s;M++){const x=c+M/s*f;y.x=v*Math.cos(x),y.y=v*Math.sin(x),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/n+1)/2,E.y=(y.y/n+1)/2,g.push(E.x,E.y)}v+=_}for(let A=0;A<l;A++){const M=A*(s+1);for(let x=0;x<s;x++){const P=x+M,U=P,D=P+s+1,I=P+s+2,L=P+1;h.push(U,D,L),h.push(D,I,L)}}this.setIndex(h),this.setAttribute("position",new qe(m,3)),this.setAttribute("normal",new qe(p,3)),this.setAttribute("uv",new qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zr extends Mn{constructor(t=1,n=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],v=new Y,_=new Y,y=[],E=[],A=[],M=[];for(let x=0;x<=s;x++){const P=[],U=x/s;let D=0;x===0&&f===0?D=.5/n:x===s&&m===Math.PI&&(D=-.5/n);for(let I=0;I<=n;I++){const L=I/n;v.x=-t*Math.cos(l+L*c)*Math.sin(f+U*h),v.y=t*Math.cos(f+U*h),v.z=t*Math.sin(l+L*c)*Math.sin(f+U*h),E.push(v.x,v.y,v.z),_.copy(v).normalize(),A.push(_.x,_.y,_.z),M.push(L+D,1-U),P.push(p++)}g.push(P)}for(let x=0;x<s;x++)for(let P=0;P<n;P++){const U=g[x][P+1],D=g[x][P],I=g[x+1][P],L=g[x+1][P+1];(x!==0||f>0)&&y.push(U,D,L),(x!==s-1||m<Math.PI)&&y.push(D,I,L)}this.setIndex(y),this.setAttribute("position",new qe(E,3)),this.setAttribute("normal",new qe(A,3)),this.setAttribute("uv",new qe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ir extends Mn{constructor(t=1,n=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],g=new Y,v=new Y,_=new Y;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const A=E/l*c,M=y/s*Math.PI*2;v.x=(t+n*Math.cos(M))*Math.cos(A),v.y=(t+n*Math.cos(M))*Math.sin(A),v.z=n*Math.sin(M),h.push(v.x,v.y,v.z),g.x=t*Math.cos(A),g.y=t*Math.sin(A),_.subVectors(v,g).normalize(),m.push(_.x,_.y,_.z),p.push(E/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const A=(l+1)*y+E-1,M=(l+1)*(y-1)+E-1,x=(l+1)*(y-1)+E,P=(l+1)*y+E;f.push(A,M,P),f.push(M,x,P)}this.setIndex(f),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Db extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ep extends Ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ub extends ep{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Yv extends Ps{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Nb extends Ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lb extends Ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class du extends mn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Ob extends du{constructor(t,n,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const $h=new tn,jv=new Y,Zv=new Y;class Ap{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xp,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;jv.setFromMatrixPosition(t.matrixWorld),n.position.copy(jv),Zv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Zv),n.updateMatrixWorld(),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Pb extends Ap{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,s=Wr*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(s!==n.fov||l!==n.aspect||c!==n.far)&&(n.fov=s,n.aspect=l,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class zb extends du{constructor(t,n,s=0,l=Math.PI/3,c=0,f=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new Pb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class Ib extends Ap{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class Bb extends du{constructor(t,n,s=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Ib}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class pu extends W_{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Fb extends Ap{constructor(){super(new pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hb extends du{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Fb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Gb extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Vb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Qv(r,t,n,s){const l=kb(s);switch(n){case O_:return r*t;case z_:return r*t/l.components*l.byteLength;case up:return r*t/l.components*l.byteLength;case kr:return r*t*2/l.components*l.byteLength;case fp:return r*t*2/l.components*l.byteLength;case P_:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case hp:return r*t*4/l.components*l.byteLength;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:case Md:return Math.max(r,16)*Math.max(t,8)/4;case xd:case yd:return Math.max(r,8)*Math.max(t,8)/2;case bd:case Ed:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Td:case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xd:case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Zd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kb(r){switch(r){case li:case D_:return{byteLength:1,components:1};case ol:case U_:case ci:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case qi:case op:case Vi:return{byteLength:4,components:1};case N_:case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);function sx(){let r=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function Xb(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<v.length;y++){const E=v[_],A=v[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,v[_]=A)}v.length=_+1;for(let y=0,E=v.length;y<E;y++){const A=v[y];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
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
#endif`,Yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jb=`#ifdef USE_AOMAP
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
#endif`,Kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
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
#endif`,tE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aE=`#ifdef USE_IRIDESCENCE
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
#endif`,sE=`#ifdef USE_BUMPMAP
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
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pE=`#define PI 3.141592653589793
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
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gE=`vec3 transformedNormal = objectNormal;
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
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NE=`#ifdef USE_GRADIENTMAP
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
}`,LE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
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
#endif`,IE=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
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
#endif`,kE=`uniform sampler2D dfgLUT;
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
}`,XE=`
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t1=`#if defined( USE_POINTS_UV )
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
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
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
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
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
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w1=`float getShadowMask() {
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
}`,D1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,N1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,O1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
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
#endif`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`#include <common>
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
}`,J1=`#if DEPTH_PACKING == 3200
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
}`,K1=`#define DISTANCE
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
}`,$1=`#define DISTANCE
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,sT=`uniform vec3 diffuse;
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
}`,rT=`#define LAMBERT
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
}`,oT=`#define LAMBERT
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
}`,lT=`#define MATCAP
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
}`,cT=`#define MATCAP
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
}`,uT=`#define NORMAL
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
}`,fT=`#define NORMAL
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
}`,hT=`#define PHONG
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
}`,dT=`#define PHONG
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
}`,pT=`#define STANDARD
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
}`,mT=`#define STANDARD
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
}`,gT=`#define TOON
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
}`,vT=`#define TOON
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
}`,_T=`uniform float size;
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
}`,xT=`uniform vec3 diffuse;
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
}`,yT=`uniform vec3 color;
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
}`,MT=`uniform float rotation;
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
}`,bT=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Wb,alphahash_pars_fragment:qb,alphamap_fragment:Yb,alphamap_pars_fragment:jb,alphatest_fragment:Zb,alphatest_pars_fragment:Qb,aomap_fragment:Jb,aomap_pars_fragment:Kb,batching_pars_vertex:$b,batching_vertex:tE,begin_vertex:eE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:aE,bumpmap_pars_fragment:sE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:fE,color_pars_vertex:hE,color_vertex:dE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:gE,displacementmap_pars_vertex:vE,displacementmap_vertex:_E,emissivemap_fragment:xE,emissivemap_pars_fragment:SE,colorspace_fragment:yE,colorspace_pars_fragment:ME,envmap_fragment:bE,envmap_common_pars_fragment:EE,envmap_pars_fragment:TE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:IE,envmap_vertex:RE,fog_vertex:CE,fog_pars_vertex:wE,fog_fragment:DE,fog_pars_fragment:UE,gradientmap_pars_fragment:NE,lightmap_pars_fragment:LE,lights_lambert_fragment:OE,lights_lambert_pars_fragment:PE,lights_pars_begin:zE,lights_toon_fragment:BE,lights_toon_pars_fragment:FE,lights_phong_fragment:HE,lights_phong_pars_fragment:GE,lights_physical_fragment:VE,lights_physical_pars_fragment:kE,lights_fragment_begin:XE,lights_fragment_maps:WE,lights_fragment_end:qE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:ZE,logdepthbuf_vertex:QE,map_fragment:JE,map_pars_fragment:KE,map_particle_fragment:$E,map_particle_pars_fragment:t1,metalnessmap_fragment:e1,metalnessmap_pars_fragment:n1,morphinstance_vertex:i1,morphcolor_vertex:a1,morphnormal_vertex:s1,morphtarget_pars_vertex:r1,morphtarget_vertex:o1,normal_fragment_begin:l1,normal_fragment_maps:c1,normal_pars_fragment:u1,normal_pars_vertex:f1,normal_vertex:h1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:m1,clearcoat_pars_fragment:g1,iridescence_pars_fragment:v1,opaque_fragment:_1,packing:x1,premultiplied_alpha_fragment:S1,project_vertex:y1,dithering_fragment:M1,dithering_pars_fragment:b1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:A1,shadowmap_pars_vertex:R1,shadowmap_vertex:C1,shadowmask_pars_fragment:w1,skinbase_vertex:D1,skinning_pars_vertex:U1,skinning_vertex:N1,skinnormal_vertex:L1,specularmap_fragment:O1,specularmap_pars_fragment:P1,tonemapping_fragment:z1,tonemapping_pars_fragment:I1,transmission_fragment:B1,transmission_pars_fragment:F1,uv_pars_fragment:H1,uv_pars_vertex:G1,uv_vertex:V1,worldpos_vertex:k1,background_vert:X1,background_frag:W1,backgroundCube_vert:q1,backgroundCube_frag:Y1,cube_vert:j1,cube_frag:Z1,depth_vert:Q1,depth_frag:J1,distance_vert:K1,distance_frag:$1,equirect_vert:tT,equirect_frag:eT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:aT,meshbasic_frag:sT,meshlambert_vert:rT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:cT,meshnormal_vert:uT,meshnormal_frag:fT,meshphong_vert:hT,meshphong_frag:dT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:vT,points_vert:_T,points_frag:xT,shadow_vert:ST,shadow_frag:yT,sprite_vert:MT,sprite_frag:bT},Wt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Hi={basic:{uniforms:kn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:kn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:kn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:kn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:kn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:kn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:kn([Wt.points,Wt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:kn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:kn([Wt.common,Wt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:kn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:kn([Wt.sprite,Wt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:kn([Wt.common,Wt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:kn([Wt.lights,Wt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Hi.physical={uniforms:kn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Jc={r:0,b:0,g:0},Ts=new Yi,ET=new tn;function TT(r,t,n,s,l,c,f){const h=new me(0);let m=c===!0?0:1,p,g,v=null,_=0,y=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:t).get(D)),D}function A(U){let D=!1;const I=E(U);I===null?x(h,m):I&&I.isColor&&(x(I,1),D=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,D){const I=E(D);I&&(I.isCubeTexture||I.mapping===uu)?(g===void 0&&(g=new $e(new Qr(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:qr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(L,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ts.copy(D.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(Ts)),g.material.toneMapped=Ue.getTransfer(I.colorSpace)!==Ve,(v!==I||_!==I.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,v=I,_=I.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new $e(new hu(2,2),new Fn({name:"BackgroundMaterial",uniforms:qr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(I.colorSpace)!==Ve,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||_!==I.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,v=I,_=I.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,D){U.getRGB(Jc,X_(r)),s.buffers.color.setClear(Jc.r,Jc.g,Jc.b,D,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),m=D,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(h,m)},render:A,addToRenderList:M,dispose:P}}function AT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function h(w,H,J,j,ot){let rt=!1;const F=v(j,J,H);c!==F&&(c=F,p(c.object)),rt=y(w,j,J,ot),rt&&E(w,j,J,ot),ot!==null&&t.update(ot,r.ELEMENT_ARRAY_BUFFER),(rt||f)&&(f=!1,D(w,H,J,j),ot!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function v(w,H,J){const j=J.wireframe===!0;let ot=s[w.id];ot===void 0&&(ot={},s[w.id]=ot);let rt=ot[H.id];rt===void 0&&(rt={},ot[H.id]=rt);let F=rt[j];return F===void 0&&(F=_(m()),rt[j]=F),F}function _(w){const H=[],J=[],j=[];for(let ot=0;ot<n;ot++)H[ot]=0,J[ot]=0,j[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:j,object:w,attributes:{},index:null}}function y(w,H,J,j){const ot=c.attributes,rt=H.attributes;let F=0;const G=J.getAttributes();for(const et in G)if(G[et].location>=0){const bt=ot[et];let z=rt[et];if(z===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),bt===void 0||bt.attribute!==z||z&&bt.data!==z.data)return!0;F++}return c.attributesNum!==F||c.index!==j}function E(w,H,J,j){const ot={},rt=H.attributes;let F=0;const G=J.getAttributes();for(const et in G)if(G[et].location>=0){let bt=rt[et];bt===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor));const z={};z.attribute=bt,bt&&bt.data&&(z.data=bt.data),ot[et]=z,F++}c.attributes=ot,c.attributesNum=F,c.index=j}function A(){const w=c.newAttributes;for(let H=0,J=w.length;H<J;H++)w[H]=0}function M(w){x(w,0)}function x(w,H){const J=c.newAttributes,j=c.enabledAttributes,ot=c.attributeDivisors;J[w]=1,j[w]===0&&(r.enableVertexAttribArray(w),j[w]=1),ot[w]!==H&&(r.vertexAttribDivisor(w,H),ot[w]=H)}function P(){const w=c.newAttributes,H=c.enabledAttributes;for(let J=0,j=H.length;J<j;J++)H[J]!==w[J]&&(r.disableVertexAttribArray(J),H[J]=0)}function U(w,H,J,j,ot,rt,F){F===!0?r.vertexAttribIPointer(w,H,J,ot,rt):r.vertexAttribPointer(w,H,J,j,ot,rt)}function D(w,H,J,j){A();const ot=j.attributes,rt=J.getAttributes(),F=H.defaultAttributeValues;for(const G in rt){const et=rt[G];if(et.location>=0){let Tt=ot[G];if(Tt===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor)),Tt!==void 0){const bt=Tt.normalized,z=Tt.itemSize,$=t.get(Tt);if($===void 0)continue;const mt=$.buffer,Ct=$.type,It=$.bytesPerElement,it=Ct===r.INT||Ct===r.UNSIGNED_INT||Tt.gpuType===op;if(Tt.isInterleavedBufferAttribute){const ht=Tt.data,Pt=ht.stride,Xt=Tt.offset;if(ht.isInstancedInterleavedBuffer){for(let qt=0;qt<et.locationSize;qt++)x(et.location+qt,ht.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let qt=0;qt<et.locationSize;qt++)M(et.location+qt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let qt=0;qt<et.locationSize;qt++)U(et.location+qt,z/et.locationSize,Ct,bt,Pt*It,(Xt+z/et.locationSize*qt)*It,it)}else{if(Tt.isInstancedBufferAttribute){for(let ht=0;ht<et.locationSize;ht++)x(et.location+ht,Tt.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let ht=0;ht<et.locationSize;ht++)M(et.location+ht);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ht=0;ht<et.locationSize;ht++)U(et.location+ht,z/et.locationSize,Ct,bt,z*It,z/et.locationSize*ht*It,it)}}else if(F!==void 0){const bt=F[G];if(bt!==void 0)switch(bt.length){case 2:r.vertexAttrib2fv(et.location,bt);break;case 3:r.vertexAttrib3fv(et.location,bt);break;case 4:r.vertexAttrib4fv(et.location,bt);break;default:r.vertexAttrib1fv(et.location,bt)}}}}P()}function I(){X();for(const w in s){const H=s[w];for(const J in H){const j=H[J];for(const ot in j)g(j[ot].object),delete j[ot];delete H[J]}delete s[w]}}function L(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const J in H){const j=H[J];for(const ot in j)g(j[ot].object),delete j[ot];delete H[J]}delete s[w.id]}function O(w){for(const H in s){const J=s[H];if(J[w.id]===void 0)continue;const j=J[w.id];for(const ot in j)g(j[ot].object),delete j[ot];delete J[w.id]}}function X(){T(),f=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:M,disableUnusedAttributes:P}}function RT(r,t,n){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),n.update(g,s,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),n.update(g,s,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];n.update(y,s,1)}function m(p,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*_[A];n.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function CT(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ni&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const X=O===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==li&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!X)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(he("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:D,maxSamples:I,samples:L}}function wT(r){const t=this;let n=null,s=0,l=!1,c=!1;const f=new Rs,h=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||s!==0||l;return l=_,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const E=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,x=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const P=c?0:s,U=P*4;let D=x.clippingState||null;m.value=D,D=g(E,_,U,y);for(let I=0;I!==U;++I)D[I]=n[I];x.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,y,E){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const x=y+A*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,D=y;U!==A;++U,D+=4)f.copy(v[U]).applyMatrix4(P,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function DT(r){let t=new WeakMap;function n(f,h){return h===md?f.mapping=Ns:h===gd&&(f.mapping=Vr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===md||h===gd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Y_(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const es=4,Jv=[.125,.215,.35,.446,.526,.582],ws=20,UT=256,Jo=new pu,Kv=new me;let td=null,ed=0,nd=0,id=!1;const NT=new Y;class $v{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:h=NT}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ns||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ci,format:Ni,colorSpace:Xr,depthBuffer:!1},l=t_(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LT(c)),this._blurMaterial=PT(c,t,n),this._ggxMaterial=OT(c,t,n)}return l}_compileMaterial(t){const n=new $e(new Mn,t);this._renderer.compile(n,Jo)}_sceneToCubeUV(t,n,s,l,c){const m=new Jn(90,1,n,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(Kv),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Qr,new Hr({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let x=!1;const P=t.background;P?P.isColor&&(M.color.copy(P),t.background=null,x=!0):(M.color.copy(Kv),x=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const I=this._cubeSize;Ur(l,D*I,U>2?I:0,I,I),v.setRenderTarget(l),x&&v.render(A,m),v.render(t,m)}v.toneMapping=y,v.autoClear=_,t.background=P}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Ns||t.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ur(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(f,Jo)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,y=v*_,{_lodMax:E}=this,A=this._sizeLods[s],M=3*A*(s>E-es?s-E+es:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-n,Ur(c,M,x,3*A,2*A),l.setRenderTarget(c),l.render(h,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ur(t,M,x,3*A,2*A),l.setRenderTarget(t),l.render(h,Jo)}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=p;const _=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ws-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):ws;M>ws&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ws}`);const x=[];let P=0;for(let O=0;O<ws;++O){const X=O/A,T=Math.exp(-X*X/2);x.push(T),O===0?P+=T:O<M&&(P+=2*T)}for(let O=0;O<x.length;O++)x[O]=x[O]/P;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-s;const D=this._sizeLods[l],I=3*D*(l>U-es?l-U+es:0),L=4*(this._cubeSize-D);Ur(n,I,L,3*D,2*D),m.setRenderTarget(n),m.render(v,Jo)}}function LT(r){const t=[],n=[],s=[];let l=r;const c=r-es+1+Jv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-es?m=Jv[f-r+es-1]:f===0&&(m=0),n.push(m);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,A=3,M=2,x=1,P=new Float32Array(A*E*y),U=new Float32Array(M*E*y),D=new Float32Array(x*E*y);for(let L=0;L<y;L++){const O=L%3*2/3-1,X=L>2?0:-1,T=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];P.set(T,A*E*L),U.set(_,M*E*L);const w=[L,L,L,L,L,L];D.set(w,x*E*L)}const I=new Mn;I.setAttribute("position",new Li(P,A)),I.setAttribute("uv",new Li(U,M)),I.setAttribute("faceIndex",new Li(D,x)),s.push(new $e(I,null)),l>es&&l--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function t_(r,t,n){const s=new Kn(r,t,n);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function OT(r,t,n){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function PT(r,t,n){const s=new Float32Array(ws),l=new Y(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function e_(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function n_(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function zT(r){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===md||m===gd,g=m===Ns||m===Vr;if(p||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new $v(r)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new $v(r)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function IT(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&cl("WebGLRenderer: "+s+" extension not supported."),l}}}function BT(r,t,n,s){const l={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,n.memory.geometries++),_}function m(v){const _=v.attributes;for(const y in _)t.update(_[y],r.ARRAY_BUFFER)}function p(v){const _=[],y=v.index,E=v.attributes.position;let A=0;if(y!==null){const P=y.array;A=y.version;for(let U=0,D=P.length;U<D;U+=3){const I=P[U+0],L=P[U+1],O=P[U+2];_.push(I,L,L,O,O,I)}}else if(E!==void 0){const P=E.array;A=E.version;for(let U=0,D=P.length/3-1;U<D;U+=3){const I=U+0,L=U+1,O=U+2;_.push(I,L,L,O,O,I)}}else return;const M=new(I_(_)?k_:V_)(_,1);M.version=A;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function FT(r,t,n){let s;function l(_){s=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,y){r.drawElements(s,y,c,_*f),n.update(y,s,1)}function p(_,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,_*f,E),n.update(y,s,E))}function g(_,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];n.update(M,s,1)}function v(_,y,E,A){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)p(_[x]/f,y[x],A[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,A,0,E);let x=0;for(let P=0;P<E;P++)x+=y[P]*A[P];n.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function HT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:De("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function GT(r,t,n){const s=new WeakMap,l=new sn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let w=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),M===!0&&(D=3);let I=h.attributes.position.count*D,L=1;I>t.maxTextureSize&&(L=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const O=new Float32Array(I*L*4*v),X=new B_(O,I,L,v);X.type=Vi,X.needsUpdate=!0;const T=D*4;for(let H=0;H<v;H++){const J=x[H],j=P[H],ot=U[H],rt=I*L*4*H;for(let F=0;F<J.count;F++){const G=F*T;E===!0&&(l.fromBufferAttribute(J,F),O[rt+G+0]=l.x,O[rt+G+1]=l.y,O[rt+G+2]=l.z,O[rt+G+3]=0),A===!0&&(l.fromBufferAttribute(j,F),O[rt+G+4]=l.x,O[rt+G+5]=l.y,O[rt+G+6]=l.z,O[rt+G+7]=0),M===!0&&(l.fromBufferAttribute(ot,F),O[rt+G+8]=l.x,O[rt+G+9]=l.y,O[rt+G+10]=l.z,O[rt+G+11]=ot.itemSize===4?l.w:1)}}_={count:v,texture:X,size:new Nt(I,L)},s.set(h,_),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function VT(r,t,n,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const kT={[b_]:"LINEAR_TONE_MAPPING",[E_]:"REINHARD_TONE_MAPPING",[T_]:"CINEON_TONE_MAPPING",[rp]:"ACES_FILMIC_TONE_MAPPING",[R_]:"AGX_TONE_MAPPING",[C_]:"NEUTRAL_TONE_MAPPING",[A_]:"CUSTOM_TONE_MAPPING"};function XT(r,t,n,s,l){const c=new Kn(t,n,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Kn(t,n,{type:ci,depthBuffer:!1,stencilBuffer:!1}),h=new Mn;h.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qe([0,2,0,0,2,0],2));const m=new Db({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new $e(h,m),g=new pu(-1,1,1,-1,0,1);let v=null,_=null,y=!1,E,A=null,M=[],x=!1;this.setSize=function(P,U){c.setSize(P,U),f.setSize(P,U);for(let D=0;D<M.length;D++){const I=M[D];I.setSize&&I.setSize(P,U)}},this.setEffects=function(P){M=P,x=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let I=0;I<M.length;I++){const L=M[I];L.setSize&&L.setSize(U,D)}},this.begin=function(P,U){if(y||P.toneMapping===Wi&&M.length===0)return!1;if(A=U,U!==null){const D=U.width,I=U.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return x===!1&&P.setRenderTarget(c),E=P.toneMapping,P.toneMapping=Wi,!0},this.hasRenderPass=function(){return x},this.end=function(P,U){P.toneMapping=E,y=!0;let D=c,I=f;for(let L=0;L<M.length;L++){const O=M[L];if(O.enabled!==!1&&(O.render(P,I,D,U),O.needsSwap!==!1)){const X=D;D=I,I=X}}if(v!==P.outputColorSpace||_!==P.toneMapping){v=P.outputColorSpace,_=P.toneMapping,m.defines={},Ue.getTransfer(v)===Ve&&(m.defines.SRGB_TRANSFER="");const L=kT[_];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(A),P.render(p,g),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const rx=new Hn,np=new ul(1,1),ox=new B_,lx=new AM,cx=new q_,i_=[],a_=[],s_=new Float32Array(16),r_=new Float32Array(9),o_=new Float32Array(4);function Jr(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=i_[l];if(c===void 0&&(c=new Float32Array(l),i_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function xn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function gu(r,t){let n=a_[t];n===void 0&&(n=new Int32Array(t),a_[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function WT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function qT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2fv(this.addr,t),xn(n,t)}}function YT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;r.uniform3fv(this.addr,t),xn(n,t)}}function jT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4fv(this.addr,t),xn(n,t)}}function ZT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;o_.set(s),r.uniformMatrix2fv(this.addr,!1,o_),xn(n,s)}}function QT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;r_.set(s),r.uniformMatrix3fv(this.addr,!1,r_),xn(n,s)}}function JT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;s_.set(s),r.uniformMatrix4fv(this.addr,!1,s_),xn(n,s)}}function KT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function $T(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2iv(this.addr,t),xn(n,t)}}function tA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;r.uniform3iv(this.addr,t),xn(n,t)}}function eA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4iv(this.addr,t),xn(n,t)}}function nA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function iA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2uiv(this.addr,t),xn(n,t)}}function aA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;r.uniform3uiv(this.addr,t),xn(n,t)}}function sA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4uiv(this.addr,t),xn(n,t)}}function rA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(np.compareFunction=n.isReversedDepthBuffer()?mp:pp,c=np):c=rx,n.setTexture2D(t||c,l)}function oA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||lx,l)}function lA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||cx,l)}function cA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||ox,l)}function uA(r){switch(r){case 5126:return WT;case 35664:return qT;case 35665:return YT;case 35666:return jT;case 35674:return ZT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return KT;case 35667:case 35671:return $T;case 35668:case 35672:return tA;case 35669:case 35673:return eA;case 5125:return nA;case 36294:return iA;case 36295:return aA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}function fA(r,t){r.uniform1fv(this.addr,t)}function hA(r,t){const n=Jr(t,this.size,2);r.uniform2fv(this.addr,n)}function dA(r,t){const n=Jr(t,this.size,3);r.uniform3fv(this.addr,n)}function pA(r,t){const n=Jr(t,this.size,4);r.uniform4fv(this.addr,n)}function mA(r,t){const n=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function gA(r,t){const n=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function vA(r,t){const n=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function _A(r,t){r.uniform1iv(this.addr,t)}function xA(r,t){r.uniform2iv(this.addr,t)}function SA(r,t){r.uniform3iv(this.addr,t)}function yA(r,t){r.uniform4iv(this.addr,t)}function MA(r,t){r.uniform1uiv(this.addr,t)}function bA(r,t){r.uniform2uiv(this.addr,t)}function EA(r,t){r.uniform3uiv(this.addr,t)}function TA(r,t){r.uniform4uiv(this.addr,t)}function AA(r,t,n){const s=this.cache,l=t.length,c=gu(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=np:f=rx;for(let h=0;h!==l;++h)n.setTexture2D(t[h]||f,c[h])}function RA(r,t,n){const s=this.cache,l=t.length,c=gu(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||lx,c[f])}function CA(r,t,n){const s=this.cache,l=t.length,c=gu(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||cx,c[f])}function wA(r,t,n){const s=this.cache,l=t.length,c=gu(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||ox,c[f])}function DA(r){switch(r){case 5126:return fA;case 35664:return hA;case 35665:return dA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return vA;case 5124:case 35670:return _A;case 35667:case 35671:return xA;case 35668:case 35672:return SA;case 35669:case 35673:return yA;case 5125:return MA;case 36294:return bA;case 36295:return EA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return wA}}class UA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=uA(n.type)}}class NA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DA(n.type)}}class LA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function l_(r,t){r.seq.push(t),r.map[t.id]=t}function OA(r,t,n){const s=r.name,l=s.length;for(ad.lastIndex=0;;){const c=ad.exec(s),f=ad.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){l_(n,p===void 0?new UA(h,r,t):new NA(h,r,t));break}else{let v=n.map[h];v===void 0&&(v=new LA(h),l_(n,v)),n=v}}}class au{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(n,f),m=t.getUniformLocation(n,h.name);OA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function c_(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const PA=37297;let zA=0;function IA(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const u_=new Se;function BA(r){Ue._getMatrix(u_,Ue.workingColorSpace,r);const t=`mat3( ${u_.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(r)){case ru:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function f_(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+IA(r.getShaderSource(t),h)}else return c}function FA(r,t){const n=BA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const HA={[b_]:"Linear",[E_]:"Reinhard",[T_]:"Cineon",[rp]:"ACESFilmic",[R_]:"AgX",[C_]:"Neutral",[A_]:"Custom"};function GA(r,t){const n=HA[t];return n===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Kc=new Y;function VA(){Ue.getLuminanceCoefficients(Kc);const r=Kc.x.toFixed(4),t=Kc.y.toFixed(4),n=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function XA(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function WA(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function el(r){return r!==""}function h_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function d_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(qA,jA)}const YA=new Map;function jA(r,t){let n=ye[t];if(n===void 0){const s=YA.get(t);if(s!==void 0)n=ye[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ip(n)}const ZA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(r){return r.replace(ZA,QA)}function QA(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function m_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const JA={[$c]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function KA(r){return JA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $A={[Ns]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function t2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":$A[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const e2={[Vr]:"ENVMAP_MODE_REFRACTION"};function n2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":e2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i2={[M_]:"ENVMAP_BLENDING_MULTIPLY",[qy]:"ENVMAP_BLENDING_MIX",[Yy]:"ENVMAP_BLENDING_ADD"};function a2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":i2[r.combine]||"ENVMAP_BLENDING_NONE"}function s2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function r2(r,t,n,s){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=KA(n),p=t2(n),g=n2(n),v=a2(n),_=s2(n),y=kA(n),E=XA(c),A=l.createProgram();let M,x,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(el).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(el).join(`
`),x.length>0&&(x+=`
`)):(M=[m_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),x=[m_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?ye.tonemapping_pars_fragment:"",n.toneMapping!==Wi?GA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,FA("linearToOutputTexel",n.outputColorSpace),VA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(el).join(`
`)),f=ip(f),f=h_(f,n),f=d_(f,n),h=ip(h),h=h_(h,n),h=d_(h,n),f=p_(f),h=p_(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===Sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=P+M+f,D=P+x+h,I=c_(l,l.VERTEX_SHADER,U),L=c_(l,l.FRAGMENT_SHADER,D);l.attachShader(A,I),l.attachShader(A,L),n.index0AttributeName!==void 0?l.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(H){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(A)||"",j=l.getShaderInfoLog(I)||"",ot=l.getShaderInfoLog(L)||"",rt=J.trim(),F=j.trim(),G=ot.trim();let et=!0,Tt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,I,L);else{const bt=f_(l,I,"vertex"),z=f_(l,L,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+rt+`
`+bt+`
`+z)}else rt!==""?he("WebGLProgram: Program Info Log:",rt):(F===""||G==="")&&(Tt=!1);Tt&&(H.diagnostics={runnable:et,programLog:rt,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(I),l.deleteShader(L),X=new au(l,A),T=WA(l,A)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,PA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=L,this}let o2=0;class l2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new c2(t),n.set(t,s)),s}}class c2{constructor(t){this.id=o2++,this.code=t,this.usedTimes=0}}function u2(r,t,n,s,l,c,f){const h=new H_,m=new l2,p=new Set,g=[],v=new Map,_=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,w,H,J,j){const ot=J.fog,rt=j.geometry,F=T.isMeshStandardMaterial?J.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||F),et=G&&G.mapping===uu?G.image.height:null,Tt=E[T.type];T.precision!==null&&(y=l.getMaxPrecision(T.precision),y!==T.precision&&he("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const bt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,z=bt!==void 0?bt.length:0;let $=0;rt.morphAttributes.position!==void 0&&($=1),rt.morphAttributes.normal!==void 0&&($=2),rt.morphAttributes.color!==void 0&&($=3);let mt,Ct,It,it;if(Tt){const we=Hi[Tt];mt=we.vertexShader,Ct=we.fragmentShader}else mt=T.vertexShader,Ct=T.fragmentShader,m.update(T),It=m.getVertexShaderID(T),it=m.getFragmentShaderID(T);const ht=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),Xt=j.isInstancedMesh===!0,qt=j.isBatchedMesh===!0,ve=!!T.map,Ce=!!T.matcap,ue=!!G,vt=!!T.aoMap,Rt=!!T.lightMap,yt=!!T.bumpMap,Bt=!!T.normalMap,B=!!T.displacementMap,ne=!!T.emissiveMap,Vt=!!T.metalnessMap,ie=!!T.roughnessMap,Dt=T.anisotropy>0,N=T.clearcoat>0,b=T.dispersion>0,W=T.iridescence>0,ft=T.sheen>0,_t=T.transmission>0,ut=Dt&&!!T.anisotropyMap,Zt=N&&!!T.clearcoatMap,Lt=N&&!!T.clearcoatNormalMap,Qt=N&&!!T.clearcoatRoughnessMap,se=W&&!!T.iridescenceMap,dt=W&&!!T.iridescenceThicknessMap,Et=ft&&!!T.sheenColorMap,zt=ft&&!!T.sheenRoughnessMap,Ft=!!T.specularMap,Ut=!!T.specularColorMap,_e=!!T.specularIntensityMap,q=_t&&!!T.transmissionMap,Gt=_t&&!!T.thicknessMap,wt=!!T.gradientMap,Yt=!!T.alphaMap,At=T.alphaTest>0,St=!!T.alphaHash,Ot=!!T.extensions;let fe=Wi;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Be={shaderID:Tt,shaderType:T.type,shaderName:T.name,vertexShader:mt,fragmentShader:Ct,defines:T.defines,customVertexShaderID:It,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:qt,batchingColor:qt&&j._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&j.instanceColor!==null,instancingMorph:Xt&&j.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Xr,alphaToCoverage:!!T.alphaToCoverage,map:ve,matcap:Ce,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:et,aoMap:vt,lightMap:Rt,bumpMap:yt,normalMap:Bt,displacementMap:B,emissiveMap:ne,normalMapObjectSpace:Bt&&T.normalMapType===Qy,normalMapTangentSpace:Bt&&T.normalMapType===dp,metalnessMap:Vt,roughnessMap:ie,anisotropy:Dt,anisotropyMap:ut,clearcoat:N,clearcoatMap:Zt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Qt,dispersion:b,iridescence:W,iridescenceMap:se,iridescenceThicknessMap:dt,sheen:ft,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ft,specularColorMap:Ut,specularIntensityMap:_e,transmission:_t,transmissionMap:q,thicknessMap:Gt,gradientMap:wt,opaque:T.transparent===!1&&T.blending===Br&&T.alphaToCoverage===!1,alphaMap:Yt,alphaTest:At,alphaHash:St,combine:T.combine,mapUv:ve&&A(T.map.channel),aoMapUv:vt&&A(T.aoMap.channel),lightMapUv:Rt&&A(T.lightMap.channel),bumpMapUv:yt&&A(T.bumpMap.channel),normalMapUv:Bt&&A(T.normalMap.channel),displacementMapUv:B&&A(T.displacementMap.channel),emissiveMapUv:ne&&A(T.emissiveMap.channel),metalnessMapUv:Vt&&A(T.metalnessMap.channel),roughnessMapUv:ie&&A(T.roughnessMap.channel),anisotropyMapUv:ut&&A(T.anisotropyMap.channel),clearcoatMapUv:Zt&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&A(T.sheenRoughnessMap.channel),specularMapUv:Ft&&A(T.specularMap.channel),specularColorMapUv:Ut&&A(T.specularColorMap.channel),specularIntensityMapUv:_e&&A(T.specularIntensityMap.channel),transmissionMapUv:q&&A(T.transmissionMap.channel),thicknessMapUv:Gt&&A(T.thicknessMap.channel),alphaMapUv:Yt&&A(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Bt||Dt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!rt.attributes.uv&&(ve||Yt),fog:!!ot,useFog:T.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pt,skinning:j.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:ve&&T.map.isVideoTexture===!0&&Ue.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gi,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function x(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)w.push(H),w.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(P(w,T),U(w,T),w.push(r.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function P(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function U(T,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),T.push(h.mask)}function D(T){const w=E[T.type];let H;if(w){const J=Hi[w];H=cu.clone(J.uniforms)}else H=T.uniforms;return H}function I(T,w){let H=v.get(w);return H!==void 0?++H.usedTimes:(H=new r2(r,w,T,c),g.push(H),v.set(w,H)),H}function L(T){if(--T.usedTimes===0){const w=g.indexOf(T);g[w]=g[g.length-1],g.pop(),v.delete(T.cacheKey),T.destroy()}}function O(T){m.remove(T)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:D,acquireProgram:I,releaseProgram:L,releaseShaderCache:O,programs:g,dispose:X}}function f2(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function h2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function g_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function v_(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(v,_,y,E,A,M){let x=r[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:E,renderOrder:v.renderOrder,z:A,group:M},r[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=A,x.group=M),t++,x}function h(v,_,y,E,A,M){const x=f(v,_,y,E,A,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):n.push(x)}function m(v,_,y,E,A,M){const x=f(v,_,y,E,A,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):n.unshift(x)}function p(v,_){n.length>1&&n.sort(v||h2),s.length>1&&s.sort(_||g_),l.length>1&&l.sort(_||g_)}function g(){for(let v=t,_=r.length;v<_;v++){const y=r[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function d2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new v_,r.set(s,[f])):l>=c.length?(f=new v_,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function p2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Y,color:new me};break;case"SpotLight":n={position:new Y,direction:new Y,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new me,groundColor:new me};break;case"RectAreaLight":n={color:new me,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=n,n}}}function m2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let g2=0;function v2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _2(r){const t=new p2,n=m2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new tn,f=new tn;function h(p){let g=0,v=0,_=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let y=0,E=0,A=0,M=0,x=0,P=0,U=0,D=0,I=0,L=0,O=0;p.sort(v2);for(let T=0,w=p.length;T<w;T++){const H=p[T],J=H.color,j=H.intensity,ot=H.distance;let rt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===kr?rt=H.shadow.map.texture:rt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=J.r*j,v+=J.g*j,_+=J.b*j;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],j);O++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,et=n.get(H);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,s.directionalShadow[y]=et,s.directionalShadowMap[y]=rt,s.directionalShadowMatrix[y]=H.shadow.matrix,P++}s.directional[y]=F,y++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(J).multiplyScalar(j),F.distance=ot,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[A]=F;const G=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,G.updateMatrices(H),H.castShadow&&L++),s.spotLightMatrix[A]=G.matrix,H.castShadow){const et=n.get(H);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,s.spotShadow[A]=et,s.spotShadowMap[A]=rt,D++}A++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(J).multiplyScalar(j),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=F,M++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const G=H.shadow,et=n.get(H);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,et.shadowCameraNear=G.camera.near,et.shadowCameraFar=G.camera.far,s.pointShadow[E]=et,s.pointShadowMap[E]=rt,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=F,E++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(j),F.groundColor.copy(H.groundColor).multiplyScalar(j),s.hemi[x]=F,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==M||X.hemiLength!==x||X.numDirectionalShadows!==P||X.numPointShadows!==U||X.numSpotShadows!==D||X.numSpotMaps!==I||X.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+I-L,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=O,X.directionalLength=y,X.pointLength=E,X.spotLength=A,X.rectAreaLength=M,X.hemiLength=x,X.numDirectionalShadows=P,X.numPointShadows=U,X.numSpotShadows=D,X.numSpotMaps=I,X.numLightProbes=O,s.version=g2++)}function m(p,g){let v=0,_=0,y=0,E=0,A=0;const M=g.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const U=p[x];if(U.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(U.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=s.point[_];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:s}}function __(r){const t=new _2(r),n=[],s=[];function l(g){p.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function x2(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new __(r),t.set(l,[h])):c>=f.length?(h=new __(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const S2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y2=`uniform sampler2D shadow_pass;
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
}`,M2=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],b2=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],x_=new tn,Ko=new Y,sd=new Y;function E2(r,t,n){let s=new xp;const l=new Nt,c=new Nt,f=new sn,h=new Nb,m=new Lb,p={},g=n.maxTextureSize,v={[ns]:Xn,[Xn]:ns,[Gi]:Gi},_=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:S2,fragmentShader:y2}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new Mn;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new $e(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let x=this.type;this.render=function(L,O,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;L.type===Ry&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=$c);const T=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Xi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const j=x!==this.type;j&&O.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(rt=>rt.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,rt=L.length;ot<rt;ot++){const F=L[ot],G=F.shadow;if(G===void 0){he("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const et=G.getFrameExtents();if(l.multiply(et),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/et.x),l.x=c.x*et.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/et.y),l.y=c.y*et.y,G.mapSize.y=c.y)),G.map===null||j===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===$o){if(F.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Kn(l.x,l.y,{format:kr,type:ci,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new ul(l.x,l.y,Vi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=ya,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln}else{F.isPointLight?(G.map=new Y_(l.x),G.map.depthTexture=new QM(l.x,qi)):(G.map=new Kn(l.x,l.y),G.map.depthTexture=new ul(l.x,l.y,qi)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=ya;const bt=r.state.buffers.depth.getReversed();this.type===$c?(G.map.depthTexture.compareFunction=bt?mp:pp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln)}G.camera.updateProjectionMatrix()}const Tt=G.map.isWebGLCubeRenderTarget?6:1;for(let bt=0;bt<Tt;bt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,bt),r.clear();else{bt===0&&(r.setRenderTarget(G.map),r.clear());const z=G.getViewport(bt);f.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),J.viewport(f)}if(F.isPointLight){const z=G.camera,$=G.matrix,mt=F.distance||z.far;mt!==z.far&&(z.far=mt,z.updateProjectionMatrix()),Ko.setFromMatrixPosition(F.matrixWorld),z.position.copy(Ko),sd.copy(z.position),sd.add(M2[bt]),z.up.copy(b2[bt]),z.lookAt(sd),z.updateMatrixWorld(),$.makeTranslation(-Ko.x,-Ko.y,-Ko.z),x_.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(x_,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),D(O,X,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===$o&&P(G,X),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(T,w,H)};function P(L,O){const X=t.update(A);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Kn(l.x,l.y,{format:kr,type:ci})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(O,null,X,_,A,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(O,null,X,y,A,null)}function U(L,O,X,T){let w=null;const H=X.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)w=H;else if(w=X.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=w.uuid,j=O.uuid;let ot=p[J];ot===void 0&&(ot={},p[J]=ot);let rt=ot[j];rt===void 0&&(rt=w.clone(),ot[j]=rt,O.addEventListener("dispose",I)),w=rt}if(w.visible=O.visible,w.wireframe=O.wireframe,T===$o?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:v[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=r.properties.get(w);J.light=X}return w}function D(L,O,X,T,w){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===$o)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,L.matrixWorld);const j=t.update(L),ot=L.material;if(Array.isArray(ot)){const rt=j.groups;for(let F=0,G=rt.length;F<G;F++){const et=rt[F],Tt=ot[et.materialIndex];if(Tt&&Tt.visible){const bt=U(L,Tt,T,w);L.onBeforeShadow(r,L,O,X,j,bt,et),r.renderBufferDirect(X,null,j,bt,L,et),L.onAfterShadow(r,L,O,X,j,bt,et)}}}else if(ot.visible){const rt=U(L,ot,T,w);L.onBeforeShadow(r,L,O,X,j,rt,null),r.renderBufferDirect(X,null,j,rt,L,null),L.onAfterShadow(r,L,O,X,j,rt,null)}}const J=L.children;for(let j=0,ot=J.length;j<ot;j++)D(J[j],O,X,T,w)}function I(L){L.target.removeEventListener("dispose",I);for(const X in p){const T=p[X],w=L.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const T2={[ld]:cd,[ud]:dd,[fd]:pd,[Gr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:Gr};function A2(r,t){function n(){let q=!1;const Gt=new sn;let wt=null;const Yt=new sn(0,0,0,0);return{setMask:function(At){wt!==At&&!q&&(r.colorMask(At,At,At,At),wt=At)},setLocked:function(At){q=At},setClear:function(At,St,Ot,fe,Be){Be===!0&&(At*=fe,St*=fe,Ot*=fe),Gt.set(At,St,Ot,fe),Yt.equals(Gt)===!1&&(r.clearColor(At,St,Ot,fe),Yt.copy(Gt))},reset:function(){q=!1,wt=null,Yt.set(-1,0,0,0)}}}function s(){let q=!1,Gt=!1,wt=null,Yt=null,At=null;return{setReversed:function(St){if(Gt!==St){const Ot=t.get("EXT_clip_control");St?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Gt=St;const fe=At;At=null,this.setClear(fe)}},getReversed:function(){return Gt},setTest:function(St){St?ht(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(St){wt!==St&&!q&&(r.depthMask(St),wt=St)},setFunc:function(St){if(Gt&&(St=T2[St]),Yt!==St){switch(St){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case Gr:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case hd:r.depthFunc(r.GEQUAL);break;case dd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Yt=St}},setLocked:function(St){q=St},setClear:function(St){At!==St&&(Gt&&(St=1-St),r.clearDepth(St),At=St)},reset:function(){q=!1,wt=null,Yt=null,At=null,Gt=!1}}}function l(){let q=!1,Gt=null,wt=null,Yt=null,At=null,St=null,Ot=null,fe=null,Be=null;return{setTest:function(we){q||(we?ht(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(we){Gt!==we&&!q&&(r.stencilMask(we),Gt=we)},setFunc:function(we,On,Mi){(wt!==we||Yt!==On||At!==Mi)&&(r.stencilFunc(we,On,Mi),wt=we,Yt=On,At=Mi)},setOp:function(we,On,Mi){(St!==we||Ot!==On||fe!==Mi)&&(r.stencilOp(we,On,Mi),St=we,Ot=On,fe=Mi)},setLocked:function(we){q=we},setClear:function(we){Be!==we&&(r.clearStencil(we),Be=we)},reset:function(){q=!1,Gt=null,wt=null,Yt=null,At=null,St=null,Ot=null,fe=null,Be=null}}}const c=new n,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,y=[],E=null,A=!1,M=null,x=null,P=null,U=null,D=null,I=null,L=null,O=new me(0,0,0),X=0,T=!1,w=null,H=null,J=null,j=null,ot=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const et=r.getParameter(r.VERSION);et.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(et)[1]),F=G>=1):et.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),F=G>=2);let Tt=null,bt={};const z=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),mt=new sn().fromArray(z),Ct=new sn().fromArray($);function It(q,Gt,wt,Yt){const At=new Uint8Array(4),St=r.createTexture();r.bindTexture(q,St),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<wt;Ot++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Gt,0,r.RGBA,1,1,Yt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Gt+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return St}const it={};it[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Gr),yt(!1),Bt(mv),ht(r.CULL_FACE),vt(Xi);function ht(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Pt(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Xt(q,Gt){return v[q]!==Gt?(r.bindFramebuffer(q,Gt),v[q]=Gt,q===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Gt),q===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Gt),!0):!1}function qt(q,Gt){let wt=y,Yt=!1;if(q){wt=_.get(Gt),wt===void 0&&(wt=[],_.set(Gt,wt));const At=q.textures;if(wt.length!==At.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Ot=At.length;St<Ot;St++)wt[St]=r.COLOR_ATTACHMENT0+St;wt.length=At.length,Yt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Yt=!0);Yt&&r.drawBuffers(wt)}function ve(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const Ce={[Cs]:r.FUNC_ADD,[wy]:r.FUNC_SUBTRACT,[Dy]:r.FUNC_REVERSE_SUBTRACT};Ce[Uy]=r.MIN,Ce[Ny]=r.MAX;const ue={[Ly]:r.ZERO,[Oy]:r.ONE,[Py]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[Gy]:r.SRC_ALPHA_SATURATE,[Fy]:r.DST_COLOR,[Iy]:r.DST_ALPHA,[zy]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[Hy]:r.ONE_MINUS_DST_COLOR,[By]:r.ONE_MINUS_DST_ALPHA,[Vy]:r.CONSTANT_COLOR,[ky]:r.ONE_MINUS_CONSTANT_COLOR,[Xy]:r.CONSTANT_ALPHA,[Wy]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(q,Gt,wt,Yt,At,St,Ot,fe,Be,we){if(q===Xi){A===!0&&(Pt(r.BLEND),A=!1);return}if(A===!1&&(ht(r.BLEND),A=!0),q!==Cy){if(q!==M||we!==T){if((x!==Cs||D!==Cs)&&(r.blendEquation(r.FUNC_ADD),x=Cs,D=Cs),we)switch(q){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rl:r.blendFunc(r.ONE,r.ONE);break;case gv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",q);break}else switch(q){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gv:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vv:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",q);break}P=null,U=null,I=null,L=null,O.set(0,0,0),X=0,M=q,T=we}return}At=At||Gt,St=St||wt,Ot=Ot||Yt,(Gt!==x||At!==D)&&(r.blendEquationSeparate(Ce[Gt],Ce[At]),x=Gt,D=At),(wt!==P||Yt!==U||St!==I||Ot!==L)&&(r.blendFuncSeparate(ue[wt],ue[Yt],ue[St],ue[Ot]),P=wt,U=Yt,I=St,L=Ot),(fe.equals(O)===!1||Be!==X)&&(r.blendColor(fe.r,fe.g,fe.b,Be),O.copy(fe),X=Be),M=q,T=!1}function Rt(q,Gt){q.side===Gi?Pt(r.CULL_FACE):ht(r.CULL_FACE);let wt=q.side===Xn;Gt&&(wt=!wt),yt(wt),q.blending===Br&&q.transparent===!1?vt(Xi):vt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Yt=q.stencilWrite;h.setTest(Yt),Yt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ne(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function yt(q){w!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),w=q)}function Bt(q){q!==Ty?(ht(r.CULL_FACE),q!==H&&(q===mv?r.cullFace(r.BACK):q===Ay?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),H=q}function B(q){q!==J&&(F&&r.lineWidth(q),J=q)}function ne(q,Gt,wt){q?(ht(r.POLYGON_OFFSET_FILL),(j!==Gt||ot!==wt)&&(r.polygonOffset(Gt,wt),j=Gt,ot=wt)):Pt(r.POLYGON_OFFSET_FILL)}function Vt(q){q?ht(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function ie(q){q===void 0&&(q=r.TEXTURE0+rt-1),Tt!==q&&(r.activeTexture(q),Tt=q)}function Dt(q,Gt,wt){wt===void 0&&(Tt===null?wt=r.TEXTURE0+rt-1:wt=Tt);let Yt=bt[wt];Yt===void 0&&(Yt={type:void 0,texture:void 0},bt[wt]=Yt),(Yt.type!==q||Yt.texture!==Gt)&&(Tt!==wt&&(r.activeTexture(wt),Tt=wt),r.bindTexture(q,Gt||it[q]),Yt.type=q,Yt.texture=Gt)}function N(){const q=bt[Tt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function ft(){try{r.texSubImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function _t(){try{r.texSubImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function Lt(){try{r.texStorage2D(...arguments)}catch(q){De("WebGLState:",q)}}function Qt(){try{r.texStorage3D(...arguments)}catch(q){De("WebGLState:",q)}}function se(){try{r.texImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function dt(){try{r.texImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function Et(q){mt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),mt.copy(q))}function zt(q){Ct.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Ct.copy(q))}function Ft(q,Gt){let wt=p.get(Gt);wt===void 0&&(wt=new WeakMap,p.set(Gt,wt));let Yt=wt.get(q);Yt===void 0&&(Yt=r.getUniformBlockIndex(Gt,q.name),wt.set(q,Yt))}function Ut(q,Gt){const Yt=p.get(Gt).get(q);m.get(Gt)!==Yt&&(r.uniformBlockBinding(Gt,Yt,q.__bindingPointIndex),m.set(Gt,Yt))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Tt=null,bt={},v={},_=new WeakMap,y=[],E=null,A=!1,M=null,x=null,P=null,U=null,D=null,I=null,L=null,O=new me(0,0,0),X=0,T=!1,w=null,H=null,J=null,j=null,ot=null,mt.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ht,disable:Pt,bindFramebuffer:Xt,drawBuffers:qt,useProgram:ve,setBlending:vt,setMaterial:Rt,setFlipSided:yt,setCullFace:Bt,setLineWidth:B,setPolygonOffset:ne,setScissorTest:Vt,activeTexture:ie,bindTexture:Dt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:se,texImage3D:dt,updateUBOMapping:Ft,uniformBlockBinding:Ut,texStorage2D:Lt,texStorage3D:Qt,texSubImage2D:ft,texSubImage3D:_t,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:Et,viewport:zt,reset:_e}}function R2(r,t,n,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):lu("canvas")}function A(N,b,W){let ft=1;const _t=Dt(N);if((_t.width>W||_t.height>W)&&(ft=W/Math.max(_t.width,_t.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ft*_t.width),Zt=Math.floor(ft*_t.height);v===void 0&&(v=E(ut,Zt));const Lt=b?E(ut,Zt):v;return Lt.width=ut,Lt.height=Zt,Lt.getContext("2d").drawImage(N,0,0,ut,Zt),he("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ut+"x"+Zt+")."),Lt}else return"data"in N&&he("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){r.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,b,W,ft,_t=!1){if(N!==null){if(r[N]!==void 0)return r[N];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=b;if(b===r.RED&&(W===r.FLOAT&&(ut=r.R32F),W===r.HALF_FLOAT&&(ut=r.R16F),W===r.UNSIGNED_BYTE&&(ut=r.R8)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.R8UI),W===r.UNSIGNED_SHORT&&(ut=r.R16UI),W===r.UNSIGNED_INT&&(ut=r.R32UI),W===r.BYTE&&(ut=r.R8I),W===r.SHORT&&(ut=r.R16I),W===r.INT&&(ut=r.R32I)),b===r.RG&&(W===r.FLOAT&&(ut=r.RG32F),W===r.HALF_FLOAT&&(ut=r.RG16F),W===r.UNSIGNED_BYTE&&(ut=r.RG8)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RG8UI),W===r.UNSIGNED_SHORT&&(ut=r.RG16UI),W===r.UNSIGNED_INT&&(ut=r.RG32UI),W===r.BYTE&&(ut=r.RG8I),W===r.SHORT&&(ut=r.RG16I),W===r.INT&&(ut=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),W===r.UNSIGNED_INT&&(ut=r.RGB32UI),W===r.BYTE&&(ut=r.RGB8I),W===r.SHORT&&(ut=r.RGB16I),W===r.INT&&(ut=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),W===r.UNSIGNED_INT&&(ut=r.RGBA32UI),W===r.BYTE&&(ut=r.RGBA8I),W===r.SHORT&&(ut=r.RGBA16I),W===r.INT&&(ut=r.RGBA32I)),b===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),b===r.RGBA){const Zt=_t?ru:Ue.getTransfer(ft);W===r.FLOAT&&(ut=r.RGBA32F),W===r.HALF_FLOAT&&(ut=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ut=Zt===Ve?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(N,b){let W;return N?b===null||b===qi||b===ll?W=r.DEPTH24_STENCIL8:b===Vi?W=r.DEPTH32F_STENCIL8:b===ol&&(W=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===ll?W=r.DEPTH_COMPONENT24:b===Vi?W=r.DEPTH_COMPONENT32F:b===ol&&(W=r.DEPTH_COMPONENT16),W}function I(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function L(N){const b=N.target;b.removeEventListener("dispose",L),X(b),b.isVideoTexture&&g.delete(b)}function O(N){const b=N.target;b.removeEventListener("dispose",O),w(b)}function X(N){const b=s.get(N);if(b.__webglInit===void 0)return;const W=N.source,ft=_.get(W);if(ft){const _t=ft[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&T(N),Object.keys(ft).length===0&&_.delete(W)}s.remove(N)}function T(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const W=N.source,ft=_.get(W);delete ft[b.__cacheKey],f.memory.textures--}function w(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let _t=0;_t<b.__webglFramebuffer[ft].length;_t++)r.deleteFramebuffer(b.__webglFramebuffer[ft][_t]);else r.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)r.deleteFramebuffer(b.__webglFramebuffer[ft]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=N.textures;for(let ft=0,_t=W.length;ft<_t;ft++){const ut=s.get(W[ft]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(W[ft])}s.remove(N)}let H=0;function J(){H=0}function j(){const N=H;return N>=l.maxTextures&&he("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function ot(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function rt(N,b){const W=s.get(N);if(N.isVideoTexture&&Vt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const ft=N.image;if(ft===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,N,b);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function F(N,b){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){it(W,N,b);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function G(N,b){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){it(W,N,b);return}n.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function et(N,b){const W=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ht(W,N,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}const Tt={[vd]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[_d]:r.MIRRORED_REPEAT},bt={[Ln]:r.NEAREST,[jy]:r.NEAREST_MIPMAP_NEAREST,[Cc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Rh]:r.LINEAR_MIPMAP_NEAREST,[Ds]:r.LINEAR_MIPMAP_LINEAR},z={[Jy]:r.NEVER,[nM]:r.ALWAYS,[Ky]:r.LESS,[pp]:r.LEQUAL,[$y]:r.EQUAL,[mp]:r.GEQUAL,[tM]:r.GREATER,[eM]:r.NOTEQUAL};function $(N,b){if(b.type===Vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Rh||b.magFilter===Cc||b.magFilter===Ds||b.minFilter===Bn||b.minFilter===Rh||b.minFilter===Cc||b.minFilter===Ds)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Tt[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Tt[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Tt[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,bt[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,bt[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==Cc&&b.minFilter!==Ds||b.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function mt(N,b){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",L));const ft=b.source;let _t=_.get(ft);_t===void 0&&(_t={},_.set(ft,_t));const ut=ot(b);if(ut!==N.__cacheKey){_t[ut]===void 0&&(_t[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),_t[ut].usedTimes++;const Zt=_t[N.__cacheKey];Zt!==void 0&&(_t[N.__cacheKey].usedTimes--,Zt.usedTimes===0&&T(b)),N.__cacheKey=ut,N.__webglTexture=_t[ut].texture}return W}function Ct(N,b,W){return Math.floor(Math.floor(N/W)/b)}function It(N,b,W,ft){const ut=N.updateRanges;if(ut.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,W,ft,b.data);else{ut.sort((dt,Et)=>dt.start-Et.start);let Zt=0;for(let dt=1;dt<ut.length;dt++){const Et=ut[Zt],zt=ut[dt],Ft=Et.start+Et.count,Ut=Ct(zt.start,b.width,4),_e=Ct(Et.start,b.width,4);zt.start<=Ft+1&&Ut===_e&&Ct(zt.start+zt.count-1,b.width,4)===Ut?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++Zt,ut[Zt]=zt)}ut.length=Zt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Qt=r.getParameter(r.UNPACK_SKIP_PIXELS),se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let dt=0,Et=ut.length;dt<Et;dt++){const zt=ut[dt],Ft=Math.floor(zt.start/4),Ut=Math.ceil(zt.count/4),_e=Ft%b.width,q=Math.floor(Ft/b.width),Gt=Ut,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),n.texSubImage2D(r.TEXTURE_2D,0,_e,q,Gt,wt,W,ft,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function it(N,b,W){let ft=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=r.TEXTURE_3D);const _t=mt(N,b),ut=b.source;n.bindTexture(ft,N.__webglTexture,r.TEXTURE0+W);const Zt=s.get(ut);if(ut.version!==Zt.__version||_t===!0){n.activeTexture(r.TEXTURE0+W);const Lt=Ue.getPrimaries(Ue.workingColorSpace),Qt=b.colorSpace===ts?null:Ue.getPrimaries(b.colorSpace),se=b.colorSpace===ts||Lt===Qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let dt=A(b.image,!1,l.maxTextureSize);dt=ie(b,dt);const Et=c.convert(b.format,b.colorSpace),zt=c.convert(b.type);let Ft=U(b.internalFormat,Et,zt,b.colorSpace,b.isVideoTexture);$(ft,b);let Ut;const _e=b.mipmaps,q=b.isVideoTexture!==!0,Gt=Zt.__version===void 0||_t===!0,wt=ut.dataReady,Yt=I(b,dt);if(b.isDepthTexture)Ft=D(b.format===Us,b.type),Gt&&(q?n.texStorage2D(r.TEXTURE_2D,1,Ft,dt.width,dt.height):n.texImage2D(r.TEXTURE_2D,0,Ft,dt.width,dt.height,0,Et,zt,null));else if(b.isDataTexture)if(_e.length>0){q&&Gt&&n.texStorage2D(r.TEXTURE_2D,Yt,Ft,_e[0].width,_e[0].height);for(let At=0,St=_e.length;At<St;At++)Ut=_e[At],q?wt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Et,zt,Ut.data):n.texImage2D(r.TEXTURE_2D,At,Ft,Ut.width,Ut.height,0,Et,zt,Ut.data);b.generateMipmaps=!1}else q?(Gt&&n.texStorage2D(r.TEXTURE_2D,Yt,Ft,dt.width,dt.height),wt&&It(b,dt,Et,zt)):n.texImage2D(r.TEXTURE_2D,0,Ft,dt.width,dt.height,0,Et,zt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Gt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Yt,Ft,_e[0].width,_e[0].height,dt.depth);for(let At=0,St=_e.length;At<St;At++)if(Ut=_e[At],b.format!==Ni)if(Et!==null)if(q){if(wt)if(b.layerUpdates.size>0){const Ot=Qv(Ut.width,Ut.height,b.format,b.type);for(const fe of b.layerUpdates){const Be=Ut.data.subarray(fe*Ot/Ut.data.BYTES_PER_ELEMENT,(fe+1)*Ot/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,fe,Ut.width,Ut.height,1,Et,Be)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,dt.depth,Et,Ut.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Ft,Ut.width,Ut.height,dt.depth,0,Ut.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?wt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,dt.depth,Et,zt,Ut.data):n.texImage3D(r.TEXTURE_2D_ARRAY,At,Ft,Ut.width,Ut.height,dt.depth,0,Et,zt,Ut.data)}else{q&&Gt&&n.texStorage2D(r.TEXTURE_2D,Yt,Ft,_e[0].width,_e[0].height);for(let At=0,St=_e.length;At<St;At++)Ut=_e[At],b.format!==Ni?Et!==null?q?wt&&n.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Et,Ut.data):n.compressedTexImage2D(r.TEXTURE_2D,At,Ft,Ut.width,Ut.height,0,Ut.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?wt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Et,zt,Ut.data):n.texImage2D(r.TEXTURE_2D,At,Ft,Ut.width,Ut.height,0,Et,zt,Ut.data)}else if(b.isDataArrayTexture)if(q){if(Gt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Yt,Ft,dt.width,dt.height,dt.depth),wt)if(b.layerUpdates.size>0){const At=Qv(dt.width,dt.height,b.format,b.type);for(const St of b.layerUpdates){const Ot=dt.data.subarray(St*At/dt.data.BYTES_PER_ELEMENT,(St+1)*At/dt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,St,dt.width,dt.height,1,Et,zt,Ot)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,zt,dt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,dt.width,dt.height,dt.depth,0,Et,zt,dt.data);else if(b.isData3DTexture)q?(Gt&&n.texStorage3D(r.TEXTURE_3D,Yt,Ft,dt.width,dt.height,dt.depth),wt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,zt,dt.data)):n.texImage3D(r.TEXTURE_3D,0,Ft,dt.width,dt.height,dt.depth,0,Et,zt,dt.data);else if(b.isFramebufferTexture){if(Gt)if(q)n.texStorage2D(r.TEXTURE_2D,Yt,Ft,dt.width,dt.height);else{let At=dt.width,St=dt.height;for(let Ot=0;Ot<Yt;Ot++)n.texImage2D(r.TEXTURE_2D,Ot,Ft,At,St,0,Et,zt,null),At>>=1,St>>=1}}else if(_e.length>0){if(q&&Gt){const At=Dt(_e[0]);n.texStorage2D(r.TEXTURE_2D,Yt,Ft,At.width,At.height)}for(let At=0,St=_e.length;At<St;At++)Ut=_e[At],q?wt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Et,zt,Ut):n.texImage2D(r.TEXTURE_2D,At,Ft,Et,zt,Ut);b.generateMipmaps=!1}else if(q){if(Gt){const At=Dt(dt);n.texStorage2D(r.TEXTURE_2D,Yt,Ft,At.width,At.height)}wt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,zt,dt)}else n.texImage2D(r.TEXTURE_2D,0,Ft,Et,zt,dt);M(b)&&x(ft),Zt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ht(N,b,W){if(b.image.length!==6)return;const ft=mt(N,b),_t=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const ut=s.get(_t);if(_t.version!==ut.__version||ft===!0){n.activeTexture(r.TEXTURE0+W);const Zt=Ue.getPrimaries(Ue.workingColorSpace),Lt=b.colorSpace===ts?null:Ue.getPrimaries(b.colorSpace),Qt=b.colorSpace===ts||Zt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const se=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let St=0;St<6;St++)!se&&!dt?Et[St]=A(b.image[St],!0,l.maxCubemapSize):Et[St]=dt?b.image[St].image:b.image[St],Et[St]=ie(b,Et[St]);const zt=Et[0],Ft=c.convert(b.format,b.colorSpace),Ut=c.convert(b.type),_e=U(b.internalFormat,Ft,Ut,b.colorSpace),q=b.isVideoTexture!==!0,Gt=ut.__version===void 0||ft===!0,wt=_t.dataReady;let Yt=I(b,zt);$(r.TEXTURE_CUBE_MAP,b);let At;if(se){q&&Gt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Yt,_e,zt.width,zt.height);for(let St=0;St<6;St++){At=Et[St].mipmaps;for(let Ot=0;Ot<At.length;Ot++){const fe=At[Ot];b.format!==Ni?Ft!==null?q?wt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ot,0,0,fe.width,fe.height,Ft,fe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ot,_e,fe.width,fe.height,0,fe.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ot,0,0,fe.width,fe.height,Ft,Ut,fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ot,_e,fe.width,fe.height,0,Ft,Ut,fe.data)}}}else{if(At=b.mipmaps,q&&Gt){At.length>0&&Yt++;const St=Dt(Et[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Yt,_e,St.width,St.height)}for(let St=0;St<6;St++)if(dt){q?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Et[St].width,Et[St].height,Ft,Ut,Et[St].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,Et[St].width,Et[St].height,0,Ft,Ut,Et[St].data);for(let Ot=0;Ot<At.length;Ot++){const Be=At[Ot].image[St].image;q?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ot+1,0,0,Be.width,Be.height,Ft,Ut,Be.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ot+1,_e,Be.width,Be.height,0,Ft,Ut,Be.data)}}else{q?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ft,Ut,Et[St]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,Ft,Ut,Et[St]);for(let Ot=0;Ot<At.length;Ot++){const fe=At[Ot];q?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ot+1,0,0,Ft,Ut,fe.image[St]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ot+1,_e,Ft,Ut,fe.image[St])}}}M(b)&&x(r.TEXTURE_CUBE_MAP),ut.__version=_t.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Pt(N,b,W,ft,_t,ut){const Zt=c.convert(W.format,W.colorSpace),Lt=c.convert(W.type),Qt=U(W.internalFormat,Zt,Lt,W.colorSpace),se=s.get(b),dt=s.get(W);if(dt.__renderTarget=b,!se.__hasExternalTextures){const Et=Math.max(1,b.width>>ut),zt=Math.max(1,b.height>>ut);_t===r.TEXTURE_3D||_t===r.TEXTURE_2D_ARRAY?n.texImage3D(_t,ut,Qt,Et,zt,b.depth,0,Zt,Lt,null):n.texImage2D(_t,ut,Qt,Et,zt,0,Zt,Lt,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,_t,dt.__webglTexture,0,B(b)):(_t===r.TEXTURE_2D||_t>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,_t,dt.__webglTexture,ut),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(N,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const ft=b.depthTexture,_t=ft&&ft.isDepthTexture?ft.type:null,ut=D(b.stencilBuffer,_t),Zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(b),ut,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(b),ut,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ut,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,N)}else{const ft=b.textures;for(let _t=0;_t<ft.length;_t++){const ut=ft[_t],Zt=c.convert(ut.format,ut.colorSpace),Lt=c.convert(ut.type),Qt=U(ut.internalFormat,Zt,Lt,ut.colorSpace);ne(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(b),Qt,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(b),Qt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Qt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qt(N,b,W){const ft=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=s.get(b.depthTexture);if(_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,b.depthTexture.addEventListener("dispose",L)),_t.__webglTexture===void 0){_t.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),$(r.TEXTURE_CUBE_MAP,b.depthTexture);const se=c.convert(b.depthTexture.format),dt=c.convert(b.depthTexture.type);let Et;b.depthTexture.format===ya?Et=r.DEPTH_COMPONENT24:b.depthTexture.format===Us&&(Et=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,b.width,b.height,0,se,dt,null)}}else rt(b.depthTexture,0);const ut=_t.__webglTexture,Zt=B(b),Lt=ft?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Qt=b.depthTexture.format===Us?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ya)ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Qt,Lt,ut,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Qt,Lt,ut,0);else if(b.depthTexture.format===Us)ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Qt,Lt,ut,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Qt,Lt,ut,0);else throw new Error("Unknown depthTexture format")}function ve(N){const b=s.get(N),W=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",_t)};ft.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=ft}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let ft=0;ft<6;ft++)qt(b.__webglFramebuffer[ft],N,ft);else{const ft=N.texture.mipmaps;ft&&ft.length>0?qt(b.__webglFramebuffer[0],N,0):qt(b.__webglFramebuffer,N,0)}else if(W){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=r.createRenderbuffer(),Xt(b.__webglDepthbuffer[ft],N,!1);else{const _t=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ut)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xt(b.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ut)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(N,b,W){const ft=s.get(N);b!==void 0&&Pt(ft.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&ve(N)}function ue(N){const b=N.texture,W=s.get(N),ft=s.get(b);N.addEventListener("dispose",O);const _t=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Zt=_t.length>1;if(Zt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=b.version,f.memory.textures++),ut){W.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Lt]=[];for(let Qt=0;Qt<b.mipmaps.length;Qt++)W.__webglFramebuffer[Lt][Qt]=r.createFramebuffer()}else W.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)W.__webglFramebuffer[Lt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Lt=0,Qt=_t.length;Lt<Qt;Lt++){const se=s.get(_t[Lt]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&ne(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Lt=0;Lt<_t.length;Lt++){const Qt=_t[Lt];W.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Lt]);const se=c.convert(Qt.format,Qt.colorSpace),dt=c.convert(Qt.type),Et=U(Qt.internalFormat,se,dt,Qt.colorSpace,N.isXRRenderTarget===!0),zt=B(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Et,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,W.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(W.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){n.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),$(r.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Pt(W.__webglFramebuffer[Lt][Qt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Qt);else Pt(W.__webglFramebuffer[Lt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(b)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Lt=0,Qt=_t.length;Lt<Qt;Lt++){const se=_t[Lt],dt=s.get(se);let Et=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Et=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Et,dt.__webglTexture),$(Et,se),Pt(W.__webglFramebuffer,N,se,r.COLOR_ATTACHMENT0+Lt,Et,0),M(se)&&x(Et)}n.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,ft.__webglTexture),$(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Pt(W.__webglFramebuffer[Qt],N,b,r.COLOR_ATTACHMENT0,Lt,Qt);else Pt(W.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Lt,0);M(b)&&x(Lt),n.unbindTexture()}N.depthBuffer&&ve(N)}function vt(N){const b=N.textures;for(let W=0,ft=b.length;W<ft;W++){const _t=b[W];if(M(_t)){const ut=P(N),Zt=s.get(_t).__webglTexture;n.bindTexture(ut,Zt),x(ut),n.unbindTexture()}}}const Rt=[],yt=[];function Bt(N){if(N.samples>0){if(ne(N)===!1){const b=N.textures,W=N.width,ft=N.height;let _t=r.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(N),Lt=b.length>1;if(Lt)for(let se=0;se<b.length;se++)n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Qt=N.texture.mipmaps;Qt&&Qt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let se=0;se<b.length;se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[se]);const dt=s.get(b[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,dt,0)}r.blitFramebuffer(0,0,W,ft,0,0,W,ft,_t,r.NEAREST),m===!0&&(Rt.length=0,yt.length=0,Rt.push(r.COLOR_ATTACHMENT0+se),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Rt.push(ut),yt.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,yt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let se=0;se<b.length;se++){n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[se]);const dt=s.get(b[se]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,dt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function B(N){return Math.min(l.maxSamples,N.samples)}function ne(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Vt(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function ie(N,b){const W=N.colorSpace,ft=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Xr&&W!==ts&&(Ue.getTransfer(W)===Ve?(ft!==Ni||_t!==li)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",W)),b}function Dt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=J,this.setTexture2D=rt,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=et,this.rebindTextures=Ce,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function C2(r,t){function n(s,l=ts){let c;const f=Ue.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===N_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===L_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===D_)return r.BYTE;if(s===U_)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===ci)return r.HALF_FLOAT;if(s===O_)return r.ALPHA;if(s===P_)return r.RGB;if(s===Ni)return r.RGBA;if(s===ya)return r.DEPTH_COMPONENT;if(s===Us)return r.DEPTH_STENCIL;if(s===z_)return r.RED;if(s===up)return r.RED_INTEGER;if(s===kr)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===tu||s===eu||s===nu||s===iu)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===tu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===tu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===Sd||s===yd||s===Md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===Cd||s===wd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===bd||s===Ed)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Td)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ad)return c.COMPRESSED_R11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Cd)return c.COMPRESSED_RG11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd||s===Id||s===Bd||s===Fd||s===Hd||s===Gd||s===Vd||s===kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ud)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ld)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Od)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Id)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xd||s===Wd||s===qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Xd)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yd||s===jd||s===Zd||s===Qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Yd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const w2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D2=`
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

}`;class U2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new Z_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Fn({vertexShader:w2,fragmentShader:D2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $e(new hu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N2 extends Zr{constructor(t,n){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,_=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",M=new U2,x={},P=n.getContextAttributes();let U=null,D=null;const I=[],L=[],O=new Nt;let X=null;const T=new Jn;T.viewport=new sn;const w=new Jn;w.viewport=new sn;const H=[T,w],J=new Gb;let j=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=I[it];return ht===void 0&&(ht=new jh,I[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=I[it];return ht===void 0&&(ht=new jh,I[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=I[it];return ht===void 0&&(ht=new jh,I[it]=ht),ht.getHandSpace()};function rt(it){const ht=L.indexOf(it.inputSource);if(ht===-1)return;const Pt=I[ht];Pt!==void 0&&(Pt.update(it.inputSource,it.frame,p||f),Pt.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let it=0;it<I.length;it++){const ht=L[it];ht!==null&&(L[it]=null,I[it].disconnect(ht))}j=null,ot=null,M.reset();for(const it in x)delete x[it];t.setRenderTarget(U),y=null,_=null,v=null,l=null,D=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await n.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Xt=null,qt=null;P.depth&&(qt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Pt=P.stencil?Us:ya,Xt=P.stencil?ll:qi);const ve={colorFormat:n.RGBA8,depthFormat:qt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(ve),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),D=new Kn(_.textureWidth,_.textureHeight,{format:Ni,type:li,depthTexture:new ul(_.textureWidth,_.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Pt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Pt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Kn(y.framebufferWidth,y.framebufferHeight,{format:Ni,type:li,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(it){for(let ht=0;ht<it.removed.length;ht++){const Pt=it.removed[ht],Xt=L.indexOf(Pt);Xt>=0&&(L[Xt]=null,I[Xt].disconnect(Pt))}for(let ht=0;ht<it.added.length;ht++){const Pt=it.added[ht];let Xt=L.indexOf(Pt);if(Xt===-1){for(let ve=0;ve<I.length;ve++)if(ve>=L.length){L.push(Pt),Xt=ve;break}else if(L[ve]===null){L[ve]=Pt,Xt=ve;break}if(Xt===-1)break}const qt=I[Xt];qt&&qt.connect(Pt)}}const et=new Y,Tt=new Y;function bt(it,ht,Pt){et.setFromMatrixPosition(ht.matrixWorld),Tt.setFromMatrixPosition(Pt.matrixWorld);const Xt=et.distanceTo(Tt),qt=ht.projectionMatrix.elements,ve=Pt.projectionMatrix.elements,Ce=qt[14]/(qt[10]-1),ue=qt[14]/(qt[10]+1),vt=(qt[9]+1)/qt[5],Rt=(qt[9]-1)/qt[5],yt=(qt[8]-1)/qt[0],Bt=(ve[8]+1)/ve[0],B=Ce*yt,ne=Ce*Bt,Vt=Xt/(-yt+Bt),ie=Vt*-yt;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ie),it.translateZ(Vt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),qt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Dt=Ce+Vt,N=ue+Vt,b=B-ie,W=ne+(Xt-ie),ft=vt*ue/N*Dt,_t=Rt*ue/N*Dt;it.projectionMatrix.makePerspective(b,W,ft,_t,Dt,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function z(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ht=it.near,Pt=it.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Pt=M.depthFar)),J.near=w.near=T.near=ht,J.far=w.far=T.far=Pt,(j!==J.near||ot!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),j=J.near,ot=J.far),J.layers.mask=it.layers.mask|6,T.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const Xt=it.parent,qt=J.cameras;z(J,Xt);for(let ve=0;ve<qt.length;ve++)z(qt[ve],Xt);qt.length===2?bt(J,T,w):J.projectionMatrix.copy(T.projectionMatrix),$(it,J,Xt)};function $(it,ht,Pt){Pt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(Pt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Wr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(it){m=it,_!==null&&(_.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(it){return x[it]};let mt=null;function Ct(it,ht){if(g=ht.getViewerPose(p||f),E=ht,g!==null){const Pt=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Xt=!1;Pt.length!==J.cameras.length&&(J.cameras.length=0,Xt=!0);for(let ue=0;ue<Pt.length;ue++){const vt=Pt[ue];let Rt=null;if(y!==null)Rt=y.getViewport(vt);else{const Bt=v.getViewSubImage(_,vt);Rt=Bt.viewport,ue===0&&(t.setRenderTargetTextures(D,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(D))}let yt=H[ue];yt===void 0&&(yt=new Jn,yt.layers.enable(ue),yt.viewport=new sn,H[ue]=yt),yt.matrix.fromArray(vt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(vt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ue===0&&(J.matrix.copy(yt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Xt===!0&&J.cameras.push(yt)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=s.getBinding();const ue=v.getDepthInformation(Pt[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,l.renderState)}if(qt&&qt.includes("camera-access")&&A){t.state.unbindTexture(),v=s.getBinding();for(let ue=0;ue<Pt.length;ue++){const vt=Pt[ue].camera;if(vt){let Rt=x[vt];Rt||(Rt=new Z_,x[vt]=Rt);const yt=v.getCameraImage(vt);Rt.sourceTexture=yt}}}}for(let Pt=0;Pt<I.length;Pt++){const Xt=L[Pt],qt=I[Pt];Xt!==null&&qt!==void 0&&qt.update(Xt,ht,p||f)}mt&&mt(it,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),E=null}const It=new sx;It.setAnimationLoop(Ct),this.setAnimationLoop=function(it){mt=it},this.dispose=function(){}}}const As=new Yi,L2=new tn;function O2(r,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,X_(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,P,U,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,D)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),A(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,P,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Xn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Xn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=t.get(x),U=P.envMap,D=P.envMapRotation;U&&(M.envMap.value=U,As.copy(D),As.x*=-1,As.y*=-1,As.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),M.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(As)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,P,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=U*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function A(M,x){const P=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function P2(r,t,n,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const D=U.program;s.uniformBlockBinding(P,D)}function p(P,U){let D=l[P.id];D===void 0&&(E(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",M));const I=U.program;s.updateUBOMapping(P,I);const L=t.render.frame;c[P.id]!==L&&(_(P),c[P.id]=L)}function g(P){const U=v();P.__bindingPointIndex=U;const D=r.createBuffer(),I=P.__size,L=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,I,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function v(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const U=l[P.id],D=P.uniforms,I=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let L=0,O=D.length;L<O;L++){const X=Array.isArray(D[L])?D[L]:[D[L]];for(let T=0,w=X.length;T<w;T++){const H=X[T];if(y(H,L,T,I)===!0){const J=H.__offset,j=Array.isArray(H.value)?H.value:[H.value];let ot=0;for(let rt=0;rt<j.length;rt++){const F=j[rt],G=A(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,J+ot,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ot),ot+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,U,D,I){const L=P.value,O=U+"_"+D;if(I[O]===void 0)return typeof L=="number"||typeof L=="boolean"?I[O]=L:I[O]=L.clone(),!0;{const X=I[O];if(typeof L=="number"||typeof L=="boolean"){if(X!==L)return I[O]=L,!0}else if(X.equals(L)===!1)return X.copy(L),!0}return!1}function E(P){const U=P.uniforms;let D=0;const I=16;for(let O=0,X=U.length;O<X;O++){const T=Array.isArray(U[O])?U[O]:[U[O]];for(let w=0,H=T.length;w<H;w++){const J=T[w],j=Array.isArray(J.value)?J.value:[J.value];for(let ot=0,rt=j.length;ot<rt;ot++){const F=j[ot],G=A(F),et=D%I,Tt=et%G.boundary,bt=et+Tt;D+=Tt,bt!==0&&I-bt<G.storage&&(D+=I-bt),J.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=G.storage}}}const L=D%I;return L>0&&(D+=I-L),P.__size=D,P.__cache={},this}function A(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",P),U}function M(P){const U=P.target;U.removeEventListener("dispose",M);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}const z2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function I2(){return Fi===null&&(Fi=new XM(z2,16,16,kr,ci),Fi.name="DFG_LUT",Fi.minFilter=Bn,Fi.magFilter=Bn,Fi.wrapS=xa,Fi.wrapT=xa,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class B2{constructor(t={}){const{canvas:n=iM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=li}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const A=y,M=new Set([hp,fp,up]),x=new Set([li,qi,ol,ll,lp,cp]),P=new Uint32Array(4),U=new Int32Array(4);let D=null,I=null;const L=[],O=[];let X=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=yi;let H=0,J=0,j=null,ot=-1,rt=null;const F=new sn,G=new sn;let et=null;const Tt=new me(0);let bt=0,z=n.width,$=n.height,mt=1,Ct=null,It=null;const it=new sn(0,0,z,$),ht=new sn(0,0,z,$);let Pt=!1;const Xt=new xp;let qt=!1,ve=!1;const Ce=new tn,ue=new Y,vt=new sn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Bt(){return j===null?mt:1}let B=s;function ne(C,Z){return n.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sp}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",we,!1),B===null){const Z="webgl2";if(B=ne(Z,C),B===null)throw ne(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw De("WebGLRenderer: "+C.message),C}let Vt,ie,Dt,N,b,W,ft,_t,ut,Zt,Lt,Qt,se,dt,Et,zt,Ft,Ut,_e,q,Gt,wt,Yt,At;function St(){Vt=new IT(B),Vt.init(),wt=new C2(B,Vt),ie=new CT(B,Vt,t,wt),Dt=new A2(B,Vt),ie.reversedDepthBuffer&&_&&Dt.buffers.depth.setReversed(!0),N=new HT(B),b=new f2,W=new R2(B,Vt,Dt,b,ie,wt,N),ft=new DT(T),_t=new zT(T),ut=new Xb(B),Yt=new AT(B,ut),Zt=new BT(B,ut,N,Yt),Lt=new VT(B,Zt,ut,N),_e=new GT(B,ie,W),zt=new wT(b),Qt=new u2(T,ft,_t,Vt,ie,Yt,zt),se=new O2(T,b),dt=new d2,Et=new x2(Vt),Ut=new TT(T,ft,_t,Dt,Lt,E,m),Ft=new E2(T,Lt,ie),At=new P2(B,N,ie,Dt),q=new RT(B,Vt,N),Gt=new FT(B,Vt,N),N.programs=Qt.programs,T.capabilities=ie,T.extensions=Vt,T.properties=b,T.renderLists=dt,T.shadowMap=Ft,T.state=Dt,T.info=N}St(),A!==li&&(X=new XT(A,n.width,n.height,l,c));const Ot=new N2(T,B);this.xr=Ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(C){C!==void 0&&(mt=C,this.setSize(z,$,!1))},this.getSize=function(C){return C.set(z,$)},this.setSize=function(C,Z,lt=!0){if(Ot.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,$=Z,n.width=Math.floor(C*mt),n.height=Math.floor(Z*mt),lt===!0&&(n.style.width=C+"px",n.style.height=Z+"px"),X!==null&&X.setSize(n.width,n.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(z*mt,$*mt).floor()},this.setDrawingBufferSize=function(C,Z,lt){z=C,$=Z,mt=lt,n.width=Math.floor(C*lt),n.height=Math.floor(Z*lt),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(A===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,Z,lt,at){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,Z,lt,at),Dt.viewport(F.copy(it).multiplyScalar(mt).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,Z,lt,at){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,Z,lt,at),Dt.scissor(G.copy(ht).multiplyScalar(mt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(C){Dt.setScissorTest(Pt=C)},this.setOpaqueSort=function(C){Ct=C},this.setTransparentSort=function(C){It=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,lt=!0){let at=0;if(C){let K=!1;if(j!==null){const Ht=j.texture.format;K=M.has(Ht)}if(K){const Ht=j.texture.type,jt=x.has(Ht),kt=Ut.getClearColor(),Jt=Ut.getClearAlpha(),$t=kt.r,oe=kt.g,te=kt.b;jt?(P[0]=$t,P[1]=oe,P[2]=te,P[3]=Jt,B.clearBufferuiv(B.COLOR,0,P)):(U[0]=$t,U[1]=oe,U[2]=te,U[3]=Jt,B.clearBufferiv(B.COLOR,0,U))}else at|=B.COLOR_BUFFER_BIT}Z&&(at|=B.DEPTH_BUFFER_BIT),lt&&(at|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Ut.dispose(),dt.dispose(),Et.dispose(),b.dispose(),ft.dispose(),_t.dispose(),Lt.dispose(),Yt.dispose(),At.dispose(),Qt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Is),Ot.removeEventListener("sessionend",to),Oi.stop()};function fe(C){C.preventDefault(),Mv("WebGLRenderer: Context Lost."),w=!0}function Be(){Mv("WebGLRenderer: Context Restored."),w=!1;const C=N.autoReset,Z=Ft.enabled,lt=Ft.autoUpdate,at=Ft.needsUpdate,K=Ft.type;St(),N.autoReset=C,Ft.enabled=Z,Ft.autoUpdate=lt,Ft.needsUpdate=at,Ft.type=K}function we(C){De("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function On(C){const Z=C.target;Z.removeEventListener("dispose",On),Mi(Z)}function Mi(C){vl(C),b.remove(C)}function vl(C){const Z=b.get(C).programs;Z!==void 0&&(Z.forEach(function(lt){Qt.releaseProgram(lt)}),C.isShaderMaterial&&Qt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,lt,at,K,Ht){Z===null&&(Z=Rt);const jt=K.isMesh&&K.matrixWorld.determinant()<0,kt=is(C,Z,lt,at,K);Dt.setMaterial(at,jt);let Jt=lt.index,$t=1;if(at.wireframe===!0){if(Jt=Zt.getWireframeAttribute(lt),Jt===void 0)return;$t=2}const oe=lt.drawRange,te=lt.attributes.position;let le=oe.start*$t,Oe=(oe.start+oe.count)*$t;Ht!==null&&(le=Math.max(le,Ht.start*$t),Oe=Math.min(Oe,(Ht.start+Ht.count)*$t)),Jt!==null?(le=Math.max(le,0),Oe=Math.min(Oe,Jt.count)):te!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,te.count));const Je=Oe-le;if(Je<0||Je===1/0)return;Yt.setup(K,at,kt,lt,Jt);let je,Ie=q;if(Jt!==null&&(je=ut.get(Jt),Ie=Gt,Ie.setIndex(je)),K.isMesh)at.wireframe===!0?(Dt.setLineWidth(at.wireframeLinewidth*Bt()),Ie.setMode(B.LINES)):Ie.setMode(B.TRIANGLES);else if(K.isLine){let ae=at.linewidth;ae===void 0&&(ae=1),Dt.setLineWidth(ae*Bt()),K.isLineSegments?Ie.setMode(B.LINES):K.isLineLoop?Ie.setMode(B.LINE_LOOP):Ie.setMode(B.LINE_STRIP)}else K.isPoints?Ie.setMode(B.POINTS):K.isSprite&&Ie.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ae=K._multiDrawStarts,Pe=K._multiDrawCounts,de=K._multiDrawCount,En=Jt?ut.get(Jt).bytesPerElement:1,Zi=b.get(at).currentProgram.getUniforms();for(let Tn=0;Tn<de;Tn++)Zi.setValue(B,"_gl_DrawID",Tn),Ie.render(ae[Tn]/En,Pe[Tn])}else if(K.isInstancedMesh)Ie.renderInstances(le,Je,K.count);else if(lt.isInstancedBufferGeometry){const ae=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Pe=Math.min(lt.instanceCount,ae);Ie.renderInstances(le,Je,Pe)}else Ie.render(le,Je)};function Kr(C,Z,lt){C.transparent===!0&&C.side===Gi&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Fs(C,Z,lt),C.side=ns,C.needsUpdate=!0,Fs(C,Z,lt),C.side=Gi):Fs(C,Z,lt)}this.compile=function(C,Z,lt=null){lt===null&&(lt=C),I=Et.get(lt),I.init(Z),O.push(I),lt.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),C!==lt&&C.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),I.setupLights();const at=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ht=K.material;if(Ht)if(Array.isArray(Ht))for(let jt=0;jt<Ht.length;jt++){const kt=Ht[jt];Kr(kt,lt,K),at.add(kt)}else Kr(Ht,lt,K),at.add(Ht)}),I=O.pop(),at},this.compileAsync=function(C,Z,lt=null){const at=this.compile(C,Z,lt);return new Promise(K=>{function Ht(){if(at.forEach(function(jt){b.get(jt).currentProgram.isReady()&&at.delete(jt)}),at.size===0){K(C);return}setTimeout(Ht,10)}Vt.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let zs=null;function $r(C){zs&&zs(C)}function Is(){Oi.stop()}function to(){Oi.start()}const Oi=new sx;Oi.setAnimationLoop($r),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){zs=C,Ot.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},Ot.addEventListener("sessionstart",Is),Ot.addEventListener("sessionend",to),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const lt=Ot.enabled===!0&&Ot.isPresenting===!0,at=X!==null&&(j===null||lt)&&X.begin(T,j);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(Z),Z=Ot.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Z,j),I=Et.get(C,O.length),I.init(Z),O.push(I),Ce.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Xt.setFromProjectionMatrix(Ce,ki,Z.reversedDepth),ve=this.localClippingEnabled,qt=zt.init(this.clippingPlanes,ve),D=dt.get(C,L.length),D.init(),L.push(D),Ot.enabled===!0&&Ot.isPresenting===!0){const jt=T.xr.getDepthSensingMesh();jt!==null&&ui(jt,Z,-1/0,T.sortObjects)}ui(C,Z,0,T.sortObjects),D.finish(),T.sortObjects===!0&&D.sort(Ct,It),yt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,yt&&Ut.addToRenderList(D,C),this.info.render.frame++,qt===!0&&zt.beginShadows();const K=I.state.shadowsArray;if(Ft.render(K,C,Z),qt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&X.hasRenderPass())===!1){const jt=D.opaque,kt=D.transmissive;if(I.setupLights(),Z.isArrayCamera){const Jt=Z.cameras;if(kt.length>0)for(let $t=0,oe=Jt.length;$t<oe;$t++){const te=Jt[$t];bn(jt,kt,C,te)}yt&&Ut.render(C);for(let $t=0,oe=Jt.length;$t<oe;$t++){const te=Jt[$t];cn(D,C,te,te.viewport)}}else kt.length>0&&bn(jt,kt,C,Z),yt&&Ut.render(C),cn(D,C,Z)}j!==null&&J===0&&(W.updateMultisampleRenderTarget(j),W.updateRenderTargetMipmap(j)),at&&X.end(T),C.isScene===!0&&C.onAfterRender(T,C,Z),Yt.resetDefaultState(),ot=-1,rt=null,O.pop(),O.length>0?(I=O[O.length-1],qt===!0&&zt.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,L.pop(),L.length>0?D=L[L.length-1]:D=null};function ui(C,Z,lt,at){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xt.intersectsSprite(C)){at&&vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const jt=Lt.update(C),kt=C.material;kt.visible&&D.push(C,jt,kt,lt,vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xt.intersectsObject(C))){const jt=Lt.update(C),kt=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),vt.copy(C.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),vt.copy(jt.boundingSphere.center)),vt.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray(kt)){const Jt=jt.groups;for(let $t=0,oe=Jt.length;$t<oe;$t++){const te=Jt[$t],le=kt[te.materialIndex];le&&le.visible&&D.push(C,jt,le,lt,vt.z,te)}}else kt.visible&&D.push(C,jt,kt,lt,vt.z,null)}}const Ht=C.children;for(let jt=0,kt=Ht.length;jt<kt;jt++)ui(Ht[jt],Z,lt,at)}function cn(C,Z,lt,at){const{opaque:K,transmissive:Ht,transparent:jt}=C;I.setupLightsView(lt),qt===!0&&zt.setGlobalState(T.clippingPlanes,lt),at&&Dt.viewport(F.copy(at)),K.length>0&&bi(K,Z,lt),Ht.length>0&&bi(Ht,Z,lt),jt.length>0&&bi(jt,Z,lt),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function bn(C,Z,lt,at){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[at.id]===void 0){const le=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[at.id]=new Kn(1,1,{generateMipmaps:!0,type:le?ci:li,minFilter:Ds,samples:ie.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Ht=I.state.transmissionRenderTarget[at.id],jt=at.viewport||F;Ht.setSize(jt.z*T.transmissionResolutionScale,jt.w*T.transmissionResolutionScale);const kt=T.getRenderTarget(),Jt=T.getActiveCubeFace(),$t=T.getActiveMipmapLevel();T.setRenderTarget(Ht),T.getClearColor(Tt),bt=T.getClearAlpha(),bt<1&&T.setClearColor(16777215,.5),T.clear(),yt&&Ut.render(lt);const oe=T.toneMapping;T.toneMapping=Wi;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),I.setupLightsView(at),qt===!0&&zt.setGlobalState(T.clippingPlanes,at),bi(C,lt,at),W.updateMultisampleRenderTarget(Ht),W.updateRenderTargetMipmap(Ht),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Oe=0,Je=Z.length;Oe<Je;Oe++){const je=Z[Oe],{object:Ie,geometry:ae,material:Pe,group:de}=je;if(Pe.side===Gi&&Ie.layers.test(at.layers)){const En=Pe.side;Pe.side=Xn,Pe.needsUpdate=!0,Bs(Ie,lt,at,ae,Pe,de),Pe.side=En,Pe.needsUpdate=!0,le=!0}}le===!0&&(W.updateMultisampleRenderTarget(Ht),W.updateRenderTargetMipmap(Ht))}T.setRenderTarget(kt,Jt,$t),T.setClearColor(Tt,bt),te!==void 0&&(at.viewport=te),T.toneMapping=oe}function bi(C,Z,lt){const at=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Ht=C.length;K<Ht;K++){const jt=C[K],{object:kt,geometry:Jt,group:$t}=jt;let oe=jt.material;oe.allowOverride===!0&&at!==null&&(oe=at),kt.layers.test(lt.layers)&&Bs(kt,Z,lt,Jt,oe,$t)}}function Bs(C,Z,lt,at,K,Ht){C.onBeforeRender(T,Z,lt,at,K,Ht),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(T,Z,lt,at,C,Ht),K.transparent===!0&&K.side===Gi&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,T.renderBufferDirect(lt,Z,at,K,C,Ht),K.side=ns,K.needsUpdate=!0,T.renderBufferDirect(lt,Z,at,K,C,Ht),K.side=Gi):T.renderBufferDirect(lt,Z,at,K,C,Ht),C.onAfterRender(T,Z,lt,at,K,Ht)}function Fs(C,Z,lt){Z.isScene!==!0&&(Z=Rt);const at=b.get(C),K=I.state.lights,Ht=I.state.shadowsArray,jt=K.state.version,kt=Qt.getParameters(C,K.state,Ht,Z,lt),Jt=Qt.getProgramCacheKey(kt);let $t=at.programs;at.environment=C.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(C.isMeshStandardMaterial?_t:ft).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",On),$t=new Map,at.programs=$t);let oe=$t.get(Jt);if(oe!==void 0){if(at.currentProgram===oe&&at.lightsStateVersion===jt)return eo(C,kt),oe}else kt.uniforms=Qt.getUniforms(C),C.onBeforeCompile(kt,T),oe=Qt.acquireProgram(kt,Jt),$t.set(Jt,oe),at.uniforms=kt.uniforms;const te=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=zt.uniform),eo(C,kt),at.needsLights=Ma(C),at.lightsStateVersion=jt,at.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=oe,at.uniformsList=null,oe}function _l(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=au.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function eo(C,Z){const lt=b.get(C);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function is(C,Z,lt,at,K){Z.isScene!==!0&&(Z=Rt),W.resetTextureUnits();const Ht=Z.fog,jt=at.isMeshStandardMaterial?Z.environment:null,kt=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Xr,Jt=(at.isMeshStandardMaterial?_t:ft).get(at.envMap||jt),$t=at.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),te=!!lt.morphAttributes.position,le=!!lt.morphAttributes.normal,Oe=!!lt.morphAttributes.color;let Je=Wi;at.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Je=T.toneMapping);const je=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ie=je!==void 0?je.length:0,ae=b.get(at),Pe=I.state.lights;if(qt===!0&&(ve===!0||C!==rt)){const Rn=C===rt&&at.id===ot;zt.setState(at,C,Rn)}let de=!1;at.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Pe.state.version||ae.outputColorSpace!==kt||K.isBatchedMesh&&ae.batching===!1||!K.isBatchedMesh&&ae.batching===!0||K.isBatchedMesh&&ae.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ae.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ae.instancing===!1||!K.isInstancedMesh&&ae.instancing===!0||K.isSkinnedMesh&&ae.skinning===!1||!K.isSkinnedMesh&&ae.skinning===!0||K.isInstancedMesh&&ae.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ae.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ae.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ae.instancingMorph===!1&&K.morphTexture!==null||ae.envMap!==Jt||at.fog===!0&&ae.fog!==Ht||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==zt.numPlanes||ae.numIntersection!==zt.numIntersection)||ae.vertexAlphas!==$t||ae.vertexTangents!==oe||ae.morphTargets!==te||ae.morphNormals!==le||ae.morphColors!==Oe||ae.toneMapping!==Je||ae.morphTargetsCount!==Ie)&&(de=!0):(de=!0,ae.__version=at.version);let En=ae.currentProgram;de===!0&&(En=Fs(at,Z,K));let Zi=!1,Tn=!1,fi=!1;const Fe=En.getUniforms(),An=ae.uniforms;if(Dt.useProgram(En.program)&&(Zi=!0,Tn=!0,fi=!0),at.id!==ot&&(ot=at.id,Tn=!0),Zi||rt!==C){Dt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Fe.setValue(B,"projectionMatrix",C.projectionMatrix),Fe.setValue(B,"viewMatrix",C.matrixWorldInverse);const Cn=Fe.map.cameraPosition;Cn!==void 0&&Cn.setValue(B,ue.setFromMatrixPosition(C.matrixWorld)),ie.logarithmicDepthBuffer&&Fe.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Fe.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),rt!==C&&(rt=C,Tn=!0,fi=!0)}if(ae.needsLights&&(Pe.state.directionalShadowMap.length>0&&Fe.setValue(B,"directionalShadowMap",Pe.state.directionalShadowMap,W),Pe.state.spotShadowMap.length>0&&Fe.setValue(B,"spotShadowMap",Pe.state.spotShadowMap,W),Pe.state.pointShadowMap.length>0&&Fe.setValue(B,"pointShadowMap",Pe.state.pointShadowMap,W)),K.isSkinnedMesh){Fe.setOptional(B,K,"bindMatrix"),Fe.setOptional(B,K,"bindMatrixInverse");const Rn=K.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Fe.setValue(B,"boneTexture",Rn.boneTexture,W))}K.isBatchedMesh&&(Fe.setOptional(B,K,"batchingTexture"),Fe.setValue(B,"batchingTexture",K._matricesTexture,W),Fe.setOptional(B,K,"batchingIdTexture"),Fe.setValue(B,"batchingIdTexture",K._indirectTexture,W),Fe.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&Fe.setValue(B,"batchingColorTexture",K._colorsTexture,W));const gn=lt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&_e.update(K,lt,En),(Tn||ae.receiveShadow!==K.receiveShadow)&&(ae.receiveShadow=K.receiveShadow,Fe.setValue(B,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(An.envMap.value=Jt,An.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Z.environment!==null&&(An.envMapIntensity.value=Z.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=I2()),Tn&&(Fe.setValue(B,"toneMappingExposure",T.toneMappingExposure),ae.needsLights&&no(An,fi),Ht&&at.fog===!0&&se.refreshFogUniforms(An,Ht),se.refreshMaterialUniforms(An,at,mt,$,I.state.transmissionRenderTarget[C.id]),au.upload(B,_l(ae),An,W)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(au.upload(B,_l(ae),An,W),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Fe.setValue(B,"center",K.center),Fe.setValue(B,"modelViewMatrix",K.modelViewMatrix),Fe.setValue(B,"normalMatrix",K.normalMatrix),Fe.setValue(B,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Rn=at.uniformsGroups;for(let Cn=0,Hs=Rn.length;Cn<Hs;Cn++){const Ei=Rn[Cn];At.update(Ei,En),At.bind(Ei,En)}}return En}function no(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Ma(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,Z,lt){const at=b.get(C);at.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Z,b.get(C.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:lt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const lt=b.get(C);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0};const ba=B.createFramebuffer();this.setRenderTarget=function(C,Z=0,lt=0){j=C,H=Z,J=lt;let at=null,K=!1,Ht=!1;if(C){const kt=b.get(C);if(kt.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(B.FRAMEBUFFER,kt.__webglFramebuffer),F.copy(C.viewport),G.copy(C.scissor),et=C.scissorTest,Dt.viewport(F),Dt.scissor(G),Dt.setScissorTest(et),ot=-1;return}else if(kt.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(kt.__hasExternalTextures)W.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const oe=C.depthTexture;if(kt.__boundDepthTexture!==oe){if(oe!==null&&b.has(oe)&&(C.width!==oe.image.width||C.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ht=!0);const $t=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[Z])?at=$t[Z][lt]:at=$t[Z],K=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?at=b.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?at=$t[lt]:at=$t,F.copy(C.viewport),G.copy(C.scissor),et=C.scissorTest}else F.copy(it).multiplyScalar(mt).floor(),G.copy(ht).multiplyScalar(mt).floor(),et=Pt;if(lt!==0&&(at=ba),Dt.bindFramebuffer(B.FRAMEBUFFER,at)&&Dt.drawBuffers(C,at),Dt.viewport(F),Dt.scissor(G),Dt.setScissorTest(et),K){const kt=b.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,kt.__webglTexture,lt)}else if(Ht){const kt=Z;for(let Jt=0;Jt<C.textures.length;Jt++){const $t=b.get(C.textures[Jt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Jt,$t.__webglTexture,lt,kt)}}else if(C!==null&&lt!==0){const kt=b.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,kt.__webglTexture,lt)}ot=-1},this.readRenderTargetPixels=function(C,Z,lt,at,K,Ht,jt,kt=0){if(!(C&&C.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt){Dt.bindFramebuffer(B.FRAMEBUFFER,Jt);try{const $t=C.textures[kt],oe=$t.format,te=$t.type;if(!ie.textureFormatReadable(oe)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(te)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-at&&lt>=0&&lt<=C.height-K&&(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),B.readPixels(Z,lt,at,K,wt.convert(oe),wt.convert(te),Ht))}finally{const $t=j!==null?b.get(j).__webglFramebuffer:null;Dt.bindFramebuffer(B.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,Z,lt,at,K,Ht,jt,kt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt)if(Z>=0&&Z<=C.width-at&&lt>=0&&lt<=C.height-K){Dt.bindFramebuffer(B.FRAMEBUFFER,Jt);const $t=C.textures[kt],oe=$t.format,te=$t.type;if(!ie.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.bufferData(B.PIXEL_PACK_BUFFER,Ht.byteLength,B.STREAM_READ),C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),B.readPixels(Z,lt,at,K,wt.convert(oe),wt.convert(te),0);const Oe=j!==null?b.get(j).__webglFramebuffer:null;Dt.bindFramebuffer(B.FRAMEBUFFER,Oe);const Je=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await aM(B,Je,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ht),B.deleteBuffer(le),B.deleteSync(Je),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,lt=0){const at=Math.pow(2,-lt),K=Math.floor(C.image.width*at),Ht=Math.floor(C.image.height*at),jt=Z!==null?Z.x:0,kt=Z!==null?Z.y:0;W.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,lt,0,0,jt,kt,K,Ht),Dt.unbindTexture()};const as=B.createFramebuffer(),Ea=B.createFramebuffer();this.copyTextureToTexture=function(C,Z,lt=null,at=null,K=0,Ht=null){Ht===null&&(K!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ht=K,K=0):Ht=0);let jt,kt,Jt,$t,oe,te,le,Oe,Je;const je=C.isCompressedTexture?C.mipmaps[Ht]:C.image;if(lt!==null)jt=lt.max.x-lt.min.x,kt=lt.max.y-lt.min.y,Jt=lt.isBox3?lt.max.z-lt.min.z:1,$t=lt.min.x,oe=lt.min.y,te=lt.isBox3?lt.min.z:0;else{const gn=Math.pow(2,-K);jt=Math.floor(je.width*gn),kt=Math.floor(je.height*gn),C.isDataArrayTexture?Jt=je.depth:C.isData3DTexture?Jt=Math.floor(je.depth*gn):Jt=1,$t=0,oe=0,te=0}at!==null?(le=at.x,Oe=at.y,Je=at.z):(le=0,Oe=0,Je=0);const Ie=wt.convert(Z.format),ae=wt.convert(Z.type);let Pe;Z.isData3DTexture?(W.setTexture3D(Z,0),Pe=B.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(W.setTexture2DArray(Z,0),Pe=B.TEXTURE_2D_ARRAY):(W.setTexture2D(Z,0),Pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment);const de=B.getParameter(B.UNPACK_ROW_LENGTH),En=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Zi=B.getParameter(B.UNPACK_SKIP_PIXELS),Tn=B.getParameter(B.UNPACK_SKIP_ROWS),fi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,je.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,je.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$t),B.pixelStorei(B.UNPACK_SKIP_ROWS,oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,te);const Fe=C.isDataArrayTexture||C.isData3DTexture,An=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const gn=b.get(C),Rn=b.get(Z),Cn=b.get(gn.__renderTarget),Hs=b.get(Rn.__renderTarget);Dt.bindFramebuffer(B.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Dt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let Ei=0;Ei<Jt;Ei++)Fe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(C).__webglTexture,K,te+Ei),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,Ht,Je+Ei)),B.blitFramebuffer($t,oe,jt,kt,le,Oe,jt,kt,B.DEPTH_BUFFER_BIT,B.NEAREST);Dt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||b.has(C)){const gn=b.get(C),Rn=b.get(Z);Dt.bindFramebuffer(B.READ_FRAMEBUFFER,as),Dt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ea);for(let Cn=0;Cn<Jt;Cn++)Fe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gn.__webglTexture,K,te+Cn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gn.__webglTexture,K),An?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rn.__webglTexture,Ht,Je+Cn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rn.__webglTexture,Ht),K!==0?B.blitFramebuffer($t,oe,jt,kt,le,Oe,jt,kt,B.COLOR_BUFFER_BIT,B.NEAREST):An?B.copyTexSubImage3D(Pe,Ht,le,Oe,Je+Cn,$t,oe,jt,kt):B.copyTexSubImage2D(Pe,Ht,le,Oe,$t,oe,jt,kt);Dt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else An?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Pe,Ht,le,Oe,Je,jt,kt,Jt,Ie,ae,je.data):Z.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,Ht,le,Oe,Je,jt,kt,Jt,Ie,je.data):B.texSubImage3D(Pe,Ht,le,Oe,Je,jt,kt,Jt,Ie,ae,je):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ht,le,Oe,jt,kt,Ie,ae,je.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ht,le,Oe,je.width,je.height,Ie,je.data):B.texSubImage2D(B.TEXTURE_2D,Ht,le,Oe,jt,kt,Ie,ae,je);B.pixelStorei(B.UNPACK_ROW_LENGTH,de),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,En),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Zi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Tn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,fi),Ht===0&&Z.generateMipmaps&&B.generateMipmap(Pe),Dt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),Dt.unbindTexture()},this.resetState=function(){H=0,J=0,j=null,Dt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}const su={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class gl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const F2=new pu(-1,1,1,-1,0,1);class H2 extends Mn{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}}const G2=new H2;class ux{constructor(t){this._mesh=new $e(G2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,F2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class V2 extends gl{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Fn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cu.clone(t.uniforms),this.material=new Fn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ux(this.material)}render(t,n,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class S_ extends gl{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class k2 extends gl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class X2{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const s=t.getSize(new Nt);this._width=s.width,this._height=s.height,n=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V2(su),this.copyPass.material.blending=Xi,this.clock=new Vb}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}S_!==void 0&&(f instanceof S_?s=!0:f instanceof k2&&(s=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class W2 extends gl{constructor(t,n,s=null,l=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new me}render(t,n,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const q2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class jr extends gl{constructor(t,n=1,s,l){super(),this.strength=n,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(c,f,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new Kn(c,f,{type:ci});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new Kn(c,f,{type:ci});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),f=Math.round(f/2)}const h=q2;this.highPassUniforms=cu.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Nt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cu.clone(su.uniforms),this.blendMaterial=new Fn({uniforms:this.copyUniforms,vertexShader:su.vertexShader,fragmentShader:su.fragmentShader,premultipliedAlpha:!0,blending:rl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new me,this._oldClearAlpha=1,this._basic=new Hr,this._fsQuad=new ux(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let s=Math.round(t/2),l=Math.round(n/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new Nt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,n,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=jr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=jr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const n=[],s=t/3;for(let l=0;l<t;l++)n.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Fn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}}jr.BlurDirectionX=new Nt(1,0);jr.BlurDirectionY=new Nt(0,1);const Nr={Bolt:({size:r=24,className:t})=>Mt.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:Mt.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),Home:({size:r=24,className:t})=>Mt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Mt.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),Mt.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Bag:({size:r=24,className:t})=>Mt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Mt.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Mt.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Mt.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Trash:({size:r=16,className:t})=>Mt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Mt.jsx("polyline",{points:"3 6 5 6 21 6"}),Mt.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Coins:({size:r=16,className:t})=>Mt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Mt.jsx("circle",{cx:"8",cy:"8",r:"6"}),Mt.jsx("path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"})]})},y_=[{name:"Tuerca Oxidada",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔩",chance:.2},{name:"Cable Pelado",val:8,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔌",chance:.18},{name:"Lata Espacial",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥫",chance:.18},{name:"Placa de Acero",val:25,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🛡️",chance:.12},{name:"Batería de Iones",val:40,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔋",chance:.1},{name:"Chip Cuántico",val:150,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💾",chance:.07},{name:"Motor WARP",val:750,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🚀",chance:.04},{name:"Antimateria",val:5e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚛️",chance:.015},{name:"Huevo Dragón",val:8e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🥚",chance:.01},{name:"Partícula Dios",val:5e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌌",chance:.002}],Y2=({missionState:r,level:t,totalDuration:n,timeLeft:s})=>{const l=ln.useRef(null),c=ln.useRef(null),f=ln.useRef(null),h=ln.useRef(null),m=ln.useRef(null),p=ln.useRef(null),g=ln.useRef([]),v=(_,y)=>{const A=document.createElement("canvas");A.width=512,A.height=512;const M=A.getContext("2d");M.fillStyle=_,M.fillRect(0,0,512,512);for(let x=0;x<300;x++){const P=Math.random()*512,U=Math.random()*512,D=Math.random()*40+5;M.beginPath(),M.arc(P,U,D,0,Math.PI*2),M.fillStyle=y,M.globalAlpha=.2,M.fill()}return new ZM(A)};return ln.useEffect(()=>{const _=new kM;_.fog=new _p(657952,.005);const y=new Jn(50,window.innerWidth/window.innerHeight,.1,1e3);p.current=y;const E=new B2({alpha:!1,antialias:!0,powerPreference:"high-performance"});E.setSize(window.innerWidth,window.innerHeight),E.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),E.toneMapping=rp,E.toneMappingExposure=1.2,l.current&&(l.current.innerHTML="",l.current.appendChild(E.domElement));const A=new W2(_,y),M=new jr(new Nt(window.innerWidth,window.innerHeight),1.5,.4,.85);M.threshold=.2,M.strength=1.2,M.radius=.5;const x=new X2(E);x.addPass(A),x.addPass(M);const P=new Ob(4210784,0,3);_.add(P);const U=new Hb(16777215,2);U.position.set(10,10,10),_.add(U);const D=new zb(10309341,10);D.position.set(-5,5,-5),_.add(D);const I=new Or,L=new Yv({color:9055202}),O=new Yv({color:1118481}),X=new Ub({color:8965375,roughness:.2,metalness:.9,transmission:.9,transparent:!0}),T=new ep({color:12632256,metalness:.8,roughness:.3}),w=new zr(1,32,32),H=new $e(w,L);H.scale.set(1.8,1,1),I.add(H);const J=new $e(new Ir(.98,.06,16,64),O);J.rotation.y=Math.PI/2,I.add(J);const j=new $e(new Ir(.8,.06,16,64),O);j.rotation.y=Math.PI/2,j.position.x=.8,I.add(j);const ot=new $e(new Ir(.8,.06,16,64),O);ot.rotation.y=Math.PI/2,ot.position.x=-.8,I.add(ot);const rt=new $e(new Ir(1,.06,16,64),O);rt.rotation.x=Math.PI/2,rt.scale.set(1.8,1,1),I.add(rt);const F=new $e(new Sp(.15,.4,4,8),X);F.rotation.z=Math.PI/2,F.rotation.x=Math.PI/6,F.position.set(1,.4,.25),I.add(F);const G=F.clone();G.position.set(1,.4,-.25),I.add(G);const et=new tx;et.moveTo(0,0),et.quadraticCurveTo(.5,.5,.5,1),et.lineTo(-.8,.8),et.quadraticCurveTo(-.5,.4,-.8,0);const Tt=new $e(new Ep(et,{depth:.1,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05}),L);Tt.position.set(-.5,.85,-.05),I.add(Tt);const bt=new Qr(1,.1,.8),z=new $e(bt,L);z.position.set(-.5,-.5,.8),z.rotation.set(.5,0,.2),I.add(z);const $=new $e(bt,L);$.position.set(-.5,-.5,-.8),$.rotation.set(-.5,0,.2),I.add($);const mt=new $e(new yp(.5,.7,.6,32),T);mt.rotation.z=Math.PI/2,mt.position.set(-1.8,0,0),I.add(mt);const Ct=new Bb(16755200,0,10);Ct.position.set(-2.5,0,0),_.add(Ct),m.current=Ct,I.rotation.y=Math.PI/2,_.add(I),c.current=I;const It=new Or,it=v("#1e3c72","#2a5298"),ht=new ep({map:it,roughness:.8}),Pt=new $e(new zr(60,64,64),ht);It.add(Pt);const Xt=new Hr({color:4491519,transparent:!0,opacity:.2,blending:rl,side:Xn}),qt=new $e(new zr(64,64,64),Xt);It.add(qt);const ve=new Tp(80,110,64),Ce=new Hr({color:8965375,side:Gi,transparent:!0,opacity:.4}),ue=new $e(ve,Ce);ue.rotation.x=Math.PI/2.5,It.add(ue),It.position.set(0,10,-300),_.add(It),f.current=It;const vt=new Mn,Rt=3e3,yt=new Float32Array(Rt*3);for(let b=0;b<Rt*3;b++)yt[b]=(Math.random()-.5)*1e3;vt.setAttribute("position",new Li(yt,3));const Bt=new j_({color:16777215,size:.8,transparent:!0,opacity:1}),B=new jM(vt,Bt);_.add(B),h.current=B;const ne=new zr(.2,4,4),Vt=new Hr({color:16755200,transparent:!0,opacity:.8,blending:rl,depthWrite:!1});g.current=[];for(let b=0;b<80;b++){const W=new $e(ne,Vt.clone());W.visible=!1,_.add(W),g.current.push({mesh:W,life:0,velocity:new Y})}y.position.set(0,3,12),y.lookAt(0,0,0);let ie;const Dt=()=>{ie=requestAnimationFrame(Dt);const b=window.missionActive,W=window.totalTime||1,_t=1-(window.currentTime||0)/W,ut=Date.now()*.001;if(c.current){let dt=0,Et=0,zt=0;if(b?(_t<.4?(dt=-200*(_t/.4),Et=Math.PI/2,zt=.2):_t<.7?(dt=-200,Et=Math.PI/2,c.current.position.y=Math.sin(ut*3)*1.5):(dt=-200*(1-(_t-.7)/.3),Et=Math.PI/2+Math.PI,zt=-.2),c.current.position.y+=(Math.random()-.5)*.05):(dt=0,c.current.rotation.y+=.005,c.current.position.y=Math.sin(ut*2)*.5,zt=0),c.current.position.z=da.lerp(c.current.position.z,dt,.05),b){let Ut=c.current.rotation.y;Math.abs(Et-Ut)>Math.PI&&(Et>Ut?Ut+=2*Math.PI:Ut-=2*Math.PI),c.current.rotation.y=da.lerp(Ut,Et,.04)}c.current.rotation.z=da.lerp(c.current.rotation.z,zt,.05);const Ft=b?-.1:0;c.current.rotation.x=da.lerp(c.current.rotation.x,Ft,.05)}if(p.current&&c.current){if(b){const dt=c.current.position.z+15,Et=4;p.current.position.z=da.lerp(p.current.position.z,dt,.05),p.current.position.y=da.lerp(p.current.position.y,Et,.05)}else p.current.position.z=da.lerp(p.current.position.z,12,.05),p.current.position.y=da.lerp(p.current.position.y,3,.05);p.current.lookAt(c.current.position.x,0,c.current.position.z-10)}if(f.current&&(f.current.rotation.y+=5e-4),h.current){const dt=b?3:.1,Et=h.current.geometry.attributes.position.array;for(let zt=0;zt<3e3;zt++)Et[zt*3]-=dt,Et[zt*3]<-500&&(Et[zt*3]=500);h.current.geometry.attributes.position.needsUpdate=!0}const Zt=g.current,Lt=b?.8:.3,Qt=b?2:.8,se=b?65535:16733440;if(Math.random()<Lt){const dt=Zt.find(Et=>Et.life<=0);if(dt&&c.current){dt.life=1,dt.mesh.visible=!0;const Et=new Y(-1.8,0,0);Et.applyEuler(c.current.rotation),dt.mesh.position.copy(c.current.position).add(Et);const zt=b?.8:.2,Ft=new Y(-zt-Math.random()*.2,(Math.random()-.5)*.1,(Math.random()-.5)*.1);Ft.applyEuler(c.current.rotation),dt.velocity.copy(Ft),dt.mesh.material.color.setHex(se),dt.mesh.material.opacity=1}}if(Zt.forEach(dt=>{dt.life>0&&(dt.life-=.03,dt.mesh.position.add(dt.velocity),dt.mesh.scale.setScalar(dt.life*Qt),dt.mesh.material.opacity=dt.life,dt.life<=0&&(dt.mesh.visible=!1))}),m.current){const dt=b?8:2+Math.sin(ut*5);m.current.intensity=da.lerp(m.current.intensity,dt,.1),m.current.color.setHex(se)}x.render()};Dt();const N=()=>{!p.current||!l.current||(p.current.aspect=window.innerWidth/window.innerHeight,p.current.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight),x.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N),cancelAnimationFrame(ie),l.current&&(l.current.innerHTML=""),E.dispose()}},[t]),ln.useEffect(()=>{window.missionActive=r==="mining",window.totalTime=n,window.currentTime=s},[r,n,s]),Mt.jsx("div",{ref:l,id:"canvas-container",className:"absolute top-0 left-0 w-full h-full z-0 bg-black"})},j2=({item:r,onClose:t})=>Mt.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-[pop_0.4s_ease-out] p-4",onClick:t,children:Mt.jsxs("div",{className:`relative bg-gray-900/90 border-2 ${r.border} rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]`,onClick:n=>n.stopPropagation(),children:[Mt.jsx("div",{className:`absolute inset-0 rounded-3xl opacity-20 bg-gradient-to-tr from-transparent via-${r.style.split("-")[1]}-500 to-transparent animate-pulse pointer-events-none`}),Mt.jsx("h2",{className:"text-2xl font-bold text-white mb-8 font-orbitron tracking-[0.2em] border-b border-white/10 pb-4",children:"RECOMPENSA"}),Mt.jsx("div",{className:"text-9xl mb-6 animate-bounce drop-shadow-2xl",children:r.icon}),Mt.jsxs("div",{className:"space-y-2 mb-8",children:[Mt.jsx("h3",{className:`text-3xl font-bold font-orbitron ${r.style} drop-shadow-md`,children:r.name}),Mt.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border ${r.border} ${r.style}`,children:r.rarity})]}),Mt.jsxs("div",{className:"bg-black/50 rounded-2xl p-4 mb-8 border border-white/5",children:[Mt.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-widest mb-1",children:"Valor Estimado"}),Mt.jsxs("p",{className:"text-4xl font-mono font-bold text-yellow-400 drop-shadow-lg",children:["+",r.val.toLocaleString()," ₡"]})]}),Mt.jsx("button",{onClick:t,className:"w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold text-lg tracking-widest font-orbitron shadow-xl active:scale-95 transition-all",children:"ACEPTAR"})]})});function Z2(){const[r,t]=ln.useState("home"),[n,s]=ln.useState(()=>parseInt(localStorage.getItem("os_ultra_credits"))||500),[l,c]=ln.useState(()=>parseInt(localStorage.getItem("os_ultra_level"))||1),[f,h]=ln.useState(()=>JSON.parse(localStorage.getItem("os_ultra_inv"))||[]),[m,p]=ln.useState("idle"),[g,v]=ln.useState(0),[_,y]=ln.useState(0),[E,A]=ln.useState(null);ln.useEffect(()=>{localStorage.setItem("os_ultra_credits",n),localStorage.setItem("os_ultra_level",l),localStorage.setItem("os_ultra_inv",JSON.stringify(f))},[n,l,f]),ln.useEffect(()=>{let L;return m==="mining"&&g>0?L=setInterval(()=>v(O=>O-1),1e3):m==="mining"&&g===0&&(p("ready"),navigator.vibrate&&navigator.vibrate(200)),()=>clearInterval(L)},[m,g]);const M=()=>{const L=Math.max(5,10-Math.floor(l/5));y(L),v(L),p("mining")},x=()=>{const L=Math.random();let O=y_[0];const X=l*.1,T=y_.map(j=>{let ot=j.chance;return j.rarity==="Común"&&(ot/=1+X),(j.rarity==="Raro"||j.rarity==="Épico")&&(ot*=1+X*.5),j.rarity==="Legendario"&&(ot*=1+X),{...j,weight:ot}});let w=T.reduce((j,ot)=>j+ot.weight,0),H=L*w;for(let j of T)if(H-=j.weight,H<=0){O=j;break}const J={...O,id:Date.now()};h(j=>[...j,J]),A(J),p("idle")},P=()=>{if(f.length===0)return;const L=f.reduce((O,X)=>O+X.val,0);s(O=>O+L),h([])},U=(L,O=!1)=>{if(O){const X=f.filter(H=>H.name===L.name),T=f.filter(H=>H.name!==L.name),w=X.reduce((H,J)=>H+J.val,0);s(H=>H+w),h(T)}else{const X=f.findIndex(T=>T.name===L.name);if(X>-1){const T=[...f];T.splice(X,1),s(w=>w+L.val),h(T)}}},D=()=>{const L=l*250;n>=L&&(s(O=>O-L),c(O=>O+1))},I=ln.useMemo(()=>{const L={};return f.forEach(O=>{L[O.name]||(L[O.name]={...O,count:0,total:0}),L[O.name].count++,L[O.name].total+=O.val}),Object.values(L).sort((O,X)=>X.val-O.val)},[f]);return Mt.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black text-white font-rajdhani select-none",children:[Mt.jsx(Y2,{missionState:m,level:l,totalDuration:_,timeLeft:g}),Mt.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between z-10 pointer-events-none",children:[r==="home"&&Mt.jsxs("div",{className:"h-full flex flex-col justify-end p-4 pb-28 pointer-events-none",children:[Mt.jsxs("div",{className:"flex gap-3 mb-4 pointer-events-auto",children:[Mt.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl border-l-4 border-blue-500/80 bg-black/70 backdrop-blur-xl shadow-lg animate-[slideUp_0.5s_ease-out]",children:[Mt.jsx("span",{className:"text-gray-400 text-[10px] uppercase block tracking-wider font-bold mb-0.5",children:"CRÉDITOS"}),Mt.jsxs("span",{className:"text-xl font-bold font-mono text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]",children:[n.toLocaleString()," ₡"]})]}),Mt.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-300 border border-white/10 bg-black/70 backdrop-blur-xl shadow-lg font-orbitron flex items-center animate-[slideUp_0.5s_ease-out]",children:["MK-",l]})]}),Mt.jsxs("div",{className:"w-full max-w-md mx-auto glass-panel p-5 rounded-3xl border border-blue-500/30 pointer-events-auto shadow-2xl bg-black/80 backdrop-blur-xl animate-[slideUp_0.6s_ease-out]",children:[Mt.jsx("div",{className:"mb-4 text-center",children:Mt.jsx("p",{className:`text-xs font-mono tracking-[0.3em] uppercase font-bold ${m==="mining"?"text-yellow-400 animate-pulse":"text-cyan-400"}`,children:m==="idle"?"• SISTEMAS ONLINE •":m==="mining"?">>> VELOCIDAD LUZ <<<":"• DESTINO ALCANZADO •"})}),m==="idle"&&Mt.jsx("button",{onClick:M,className:"w-full bg-gradient-to-br from-blue-600 to-blue-700 hover:to-blue-600 py-4 rounded-2xl font-bold tracking-widest shadow-lg text-white border-b-4 border-blue-800 active:border-b-0 active:translate-y-1 transition-all font-orbitron text-base hover:shadow-blue-500/50",children:"INICIAR MISIÓN"}),m==="mining"&&Mt.jsxs("div",{className:"w-full bg-gray-900/80 h-14 rounded-2xl overflow-hidden relative border border-gray-700/50 shadow-inner backdrop-blur-sm",children:[Mt.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 animate-pulse transition-all duration-1000",style:{width:`${(1-g/_)*100}%`}}),Mt.jsxs("span",{className:"absolute inset-0 flex items-center justify-center font-bold text-gray-900 font-mono tracking-wider text-lg drop-shadow-lg",children:["T-",g,"s"]})]}),m==="ready"&&Mt.jsx("button",{onClick:x,className:"w-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:to-green-300 py-4 rounded-2xl font-bold text-gray-900 tracking-widest shadow-[0_0_25px_rgba(74,222,128,0.6)] animate-pulse active:scale-95 transition-all border-b-4 border-green-700 font-orbitron text-base",children:"RECUPERAR CARGA"})]})]}),r==="inventory"&&Mt.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-4 pt-12 pb-32 overflow-y-auto pointer-events-auto animate-[slideUp_0.4s_ease-out]",children:[Mt.jsxs("div",{className:"flex justify-between items-end mb-8 border-b border-white/10 pb-4",children:[Mt.jsxs("div",{children:[Mt.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron tracking-wider",children:"BODEGA"}),Mt.jsxs("p",{className:"text-xs text-gray-500 mt-1 uppercase tracking-widest",children:["Capacidad: ",f.length," items"]})]}),f.length>0&&Mt.jsxs("button",{onClick:P,className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-lg border border-red-500/30 active:scale-95 transition-all flex items-center gap-2",children:[Mt.jsx(Nr.Trash,{size:14,className:"inline"})," VENDER TODO"]})]}),I.length===0?Mt.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-gray-600",children:[Mt.jsx("div",{className:"text-6xl mb-4 opacity-20",children:"📦"}),Mt.jsx("p",{className:"font-bold uppercase tracking-widest",children:"Bodega Vacía"})]}):Mt.jsx("div",{className:"grid gap-3",children:I.map(L=>Mt.jsxs("div",{className:`bg-gray-900/40 border-l-4 ${L.border} p-4 rounded-r-xl flex flex-col gap-3 relative overflow-hidden group`,children:[Mt.jsxs("div",{className:"flex justify-between items-start relative z-10",children:[Mt.jsxs("div",{className:"flex gap-4 items-center",children:[Mt.jsx("div",{className:"text-4xl bg-black/50 w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 shadow-inner",children:L.icon}),Mt.jsxs("div",{children:[Mt.jsx("h3",{className:`font-bold text-lg leading-tight ${L.style}`,children:L.name}),Mt.jsx("span",{className:"text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-0.5 rounded mt-1 inline-block text-gray-400",children:L.rarity})]})]}),Mt.jsxs("div",{className:"text-right",children:[Mt.jsxs("div",{className:"text-xl font-mono text-white font-bold tracking-tight",children:["+",L.val.toLocaleString(),"₡"]}),Mt.jsxs("div",{className:"text-xs text-gray-500 mt-1 font-mono",children:["x",L.count]})]})]}),Mt.jsxs("div",{className:"flex gap-2 mt-2",children:[Mt.jsxs("button",{onClick:()=>U(L),className:"flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors",children:[Mt.jsx(Nr.Coins,{size:14,className:"text-yellow-500"})," Vender 1"]}),Mt.jsxs("button",{onClick:()=>U(L,!0),className:"flex-1 bg-blue-500/10 hover:bg-blue-500/20 py-2 rounded-lg text-xs font-bold text-blue-300 flex items-center justify-center gap-2 border border-blue-500/20 transition-colors",children:[Mt.jsx(Nr.Trash,{size:14})," Vender Todo"]})]})]},L.name))})]}),r==="shop"&&Mt.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-6 pt-12 pb-32 pointer-events-auto animate-[slideUp_0.4s_ease-out] flex flex-col",children:[Mt.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron mb-2 text-center tracking-widest",children:"INGENIERÍA"}),Mt.jsx("p",{className:"text-center text-gray-500 text-xs uppercase tracking-widest mb-8",children:"Mejoras de Dron & Sistemas"}),Mt.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center",children:[Mt.jsxs("div",{className:"relative w-full max-w-xs aspect-square mb-8",children:[Mt.jsx("div",{className:"absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),Mt.jsx("div",{className:"w-full h-full bg-gray-900/50 rounded-full border border-blue-500/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.15)]",children:Mt.jsx("div",{className:"text-8xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]",children:"🛸"})})]}),Mt.jsxs("div",{className:"w-full max-w-sm bg-gray-900/80 rounded-2xl p-6 border border-white/10",children:[Mt.jsxs("div",{className:"flex justify-between items-end mb-4",children:[Mt.jsxs("div",{children:[Mt.jsxs("h3",{className:"text-lg font-bold text-white font-orbitron",children:["Interceptor MK-",l+1]}),Mt.jsx("p",{className:"text-xs text-blue-400 uppercase tracking-widest",children:"Próxima Generación"})]}),Mt.jsxs("div",{className:"text-right",children:[Mt.jsx("span",{className:"block text-[10px] text-gray-500 uppercase",children:"Costo"}),Mt.jsxs("span",{className:`font-mono font-bold text-lg ${n>=l*250?"text-green-400":"text-red-400"}`,children:[(l*250).toLocaleString()," ₡"]})]})]}),Mt.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[Mt.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[Mt.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Velocidad"}),Mt.jsx("span",{className:"text-green-400 font-bold text-xl",children:"+5%"})]}),Mt.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[Mt.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Suerte"}),Mt.jsx("span",{className:"text-yellow-400 font-bold text-xl",children:"+2%"})]})]}),Mt.jsx("button",{onClick:D,disabled:n<l*250,className:`w-full py-4 rounded-xl font-bold font-orbitron text-lg shadow-lg active:scale-95 transition-all ${n>=l*250?"bg-gradient-to-r from-blue-600 to-blue-500 text-white":"bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700"}`,children:n>=l*250?"INSTALAR MEJORA":"CRÉDITOS INSUFICIENTES"})]})]})]})]}),Mt.jsx("div",{className:"absolute bottom-6 w-full px-6 z-50 pointer-events-auto",children:Mt.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-2xl rounded-full p-2 flex justify-between items-center h-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 relative",children:[Mt.jsxs("button",{onClick:()=>t("shop"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${r==="shop"?"text-blue-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[Mt.jsx(Nr.Bolt,{className:"w-6 h-6"}),Mt.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"NAVE"})]}),Mt.jsx("div",{className:"relative -top-8",children:Mt.jsx("button",{onClick:()=>t("home"),className:`w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-black shadow-2xl transition-all duration-300 ${r==="home"?"bg-blue-600 scale-110 shadow-blue-500/50":"bg-gray-800 hover:bg-gray-700"}`,children:Mt.jsx(Nr.Home,{className:"w-8 h-8 text-white"})})}),Mt.jsxs("button",{onClick:()=>t("inventory"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${r==="inventory"?"text-yellow-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[Mt.jsxs("div",{className:"relative",children:[Mt.jsx(Nr.Bag,{className:"w-6 h-6"}),f.length>0&&Mt.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping border border-black"})]}),Mt.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"CARGA"})]})]})}),E&&Mt.jsx(j2,{item:E,onClose:()=>A(null)})]})}Ey.createRoot(document.getElementById("root")).render(Mt.jsx(ln.StrictMode,{children:Mt.jsx(Z2,{})}));
