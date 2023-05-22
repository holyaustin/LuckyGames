import{bB as C,bC as g,bD as y,bE as p,bF as d,bG as x,bH as E,bI as k,bJ as z,bK as V,bL as L,bM as D,bN as P,bO as S,bP as B,bQ as H,bR as Q,bS as w,bT as G,bU as K,bV as Y,bW as J,bX as W,bY as X,bZ as Z,b_ as O,b$ as $}from"./index-c5357a29.js";import{ag as je,c8 as Ue,c1 as ze,c4 as De,c5 as Pe,c9 as Be,c2 as He,c3 as Qe,ck as Ge,ca as Ke,cb as Ye,cl as Je,cm as Xe,cj as Ze,cn as $e,co as _e,cp as et,ai as tt,cq as at,cc as nt,cr as rt,cs as it,c7 as st,cd as ut,ce as ot,ct,cu as lt,cv as ft,ah as mt,cw as dt,cx as ht,c0 as vt,cf as pt,c6 as bt,cy as gt,cg as At,cz as yt,ci as wt,cA as Ft,w as It,v as xt,cB as Et,cC as Tt,cD as qt,cE as St,cF as kt,cG as Wt,ch as Ot,cH as Mt,cI as Ct}from"./index-c5357a29.js";import{A as _,n as ee}from"./zipWith-8e201fec.js";import{b as Lt,C as Nt,c as Rt,N as jt,a as Ut,S as zt,T as Dt,d as Pt,e as Bt,f as Ht,g as Qt,h as Gt,j as Kt,k as Yt,l as Jt,m as Xt,p as Zt,q as $t,s as _t,u as ea,v as ta,w as aa,x as na,y as ra,B as ia,D as sa,E as ua,F as oa,G as ca,H as la,I as fa,J as ma,K as da,R as ha,L as va,i as pa,M as ba,O as ga,P as Aa,Q as ya,U as wa,V as Fa,W as Ia,X as xa,Y as Ea,o as Ta,Z as qa,_ as Sa,$ as ka,a0 as Wa,a1 as Oa,a2 as Ma,r as Ca,a3 as Va,a4 as La,a9 as Na,a5 as Ra,a6 as ja,a7 as Ua,a8 as za,aa as Da,ab as Pa,ac as Ba,ad as Ha,ae as Qa,af as Ga,ag as Ka,ah as Ya,ai as Ja,aj as Xa,ak as Za,al as $a,am as _a,t as en,an as tn,ao as an,ap as nn,aq as rn,ar as sn,as as un,at as on,au as cn,av as ln,z as fn,aw as mn,ax as dn}from"./zipWith-8e201fec.js";import{d as vn,s as pn}from"./skip-cf797fac.js";var N={now:function(){return(N.delegate||performance).now()},delegate:void 0},v={schedule:function(r){var a=requestAnimationFrame,e=cancelAnimationFrame,n=v.delegate;n&&(a=n.requestAnimationFrame,e=n.cancelAnimationFrame);var t=a(function(i){e=void 0,r(i)});return new C(function(){return e?.(t)})},requestAnimationFrame:function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var e=v.delegate;return(e?.requestAnimationFrame||requestAnimationFrame).apply(void 0,g([],y(r)))},cancelAnimationFrame:function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var e=v.delegate;return(e?.cancelAnimationFrame||cancelAnimationFrame).apply(void 0,g([],y(r)))},delegate:void 0};function Ae(r){return r?R(r):te}function R(r){return new p(function(a){var e=r||N,n=e.now(),t=0,i=function(){a.closed||(t=v.requestAnimationFrame(function(s){t=0;var u=e.now();a.next({timestamp:r?u:s,elapsed:u-n}),i()}))};return i(),function(){t&&v.cancelAnimationFrame(t)}})}var te=R(),ae=1,T,q={};function M(r){return r in q?(delete q[r],!0):!1}var j={setImmediate:function(r){var a=ae++;return q[a]=!0,T||(T=Promise.resolve()),T.then(function(){return M(a)&&r()}),a},clearImmediate:function(r){M(r)}},ne=j.setImmediate,re=j.clearImmediate,F={setImmediate:function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var e=F.delegate;return(e?.setImmediate||ne).apply(void 0,g([],y(r)))},clearImmediate:function(r){var a=F.delegate;return(a?.clearImmediate||re)(r)},delegate:void 0},ie=function(r){d(a,r);function a(e,n){var t=r.call(this,e,n)||this;return t.scheduler=e,t.work=n,t}return a.prototype.requestAsyncId=function(e,n,t){return t===void 0&&(t=0),t!==null&&t>0?r.prototype.requestAsyncId.call(this,e,n,t):(e.actions.push(this),e._scheduled||(e._scheduled=F.setImmediate(e.flush.bind(e,void 0))))},a.prototype.recycleAsyncId=function(e,n,t){var i;if(t===void 0&&(t=0),t!=null?t>0:this.delay>0)return r.prototype.recycleAsyncId.call(this,e,n,t);var s=e.actions;n!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==n&&(F.clearImmediate(n),e._scheduled===n&&(e._scheduled=void 0))},a}(x),se=function(r){d(a,r);function a(){return r!==null&&r.apply(this,arguments)||this}return a.prototype.flush=function(e){this._active=!0;var n=this._scheduled;this._scheduled=void 0;var t=this.actions,i;e=e||t.shift();do if(i=e.execute(e.state,e.delay))break;while((e=t[0])&&e.id===n&&t.shift());if(this._active=!1,i){for(;(e=t[0])&&e.id===n&&t.shift();)e.unsubscribe();throw i}},a}(E),ue=new se(ie),ye=ue,oe=function(r){d(a,r);function a(e,n){var t=r.call(this,e,n)||this;return t.scheduler=e,t.work=n,t}return a.prototype.schedule=function(e,n){return n===void 0&&(n=0),n>0?r.prototype.schedule.call(this,e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)},a.prototype.execute=function(e,n){return n>0||this.closed?r.prototype.execute.call(this,e,n):this._execute(e,n)},a.prototype.requestAsyncId=function(e,n,t){return t===void 0&&(t=0),t!=null&&t>0||t==null&&this.delay>0?r.prototype.requestAsyncId.call(this,e,n,t):(e.flush(this),0)},a}(x),ce=function(r){d(a,r);function a(){return r!==null&&r.apply(this,arguments)||this}return a}(E),le=new ce(oe),we=le,fe=function(r){d(a,r);function a(e,n){var t=r.call(this,e,n)||this;return t.scheduler=e,t.work=n,t}return a.prototype.requestAsyncId=function(e,n,t){return t===void 0&&(t=0),t!==null&&t>0?r.prototype.requestAsyncId.call(this,e,n,t):(e.actions.push(this),e._scheduled||(e._scheduled=v.requestAnimationFrame(function(){return e.flush(void 0)})))},a.prototype.recycleAsyncId=function(e,n,t){var i;if(t===void 0&&(t=0),t!=null?t>0:this.delay>0)return r.prototype.recycleAsyncId.call(this,e,n,t);var s=e.actions;n!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==n&&(v.cancelAnimationFrame(n),e._scheduled=void 0)},a}(x),me=function(r){d(a,r);function a(){return r!==null&&r.apply(this,arguments)||this}return a.prototype.flush=function(e){this._active=!0;var n=this._scheduled;this._scheduled=void 0;var t=this.actions,i;e=e||t.shift();do if(i=e.execute(e.state,e.delay))break;while((e=t[0])&&e.id===n&&t.shift());if(this._active=!1,i){for(;(e=t[0])&&e.id===n&&t.shift();)e.unsubscribe();throw i}},a}(E),de=new me(fe),Fe=de,Ie=function(r){d(a,r);function a(e,n){e===void 0&&(e=he),n===void 0&&(n=1/0);var t=r.call(this,e,function(){return t.frame})||this;return t.maxFrames=n,t.frame=0,t.index=-1,t}return a.prototype.flush=function(){for(var e=this,n=e.actions,t=e.maxFrames,i,s;(s=n[0])&&s.delay<=t&&(n.shift(),this.frame=s.delay,!(i=s.execute(s.state,s.delay))););if(i){for(;s=n.shift();)s.unsubscribe();throw i}},a.frameTimeFactor=10,a}(E),he=function(r){d(a,r);function a(e,n,t){t===void 0&&(t=e.index+=1);var i=r.call(this,e,n)||this;return i.scheduler=e,i.work=n,i.index=t,i.active=!0,i.index=e.index=t,i}return a.prototype.schedule=function(e,n){if(n===void 0&&(n=0),Number.isFinite(n)){if(!this.id)return r.prototype.schedule.call(this,e,n);this.active=!1;var t=new a(this.scheduler,this.work);return this.add(t),t.schedule(e,n)}else return C.EMPTY},a.prototype.requestAsyncId=function(e,n,t){t===void 0&&(t=0),this.delay=e.frame+t;var i=e.actions;return i.push(this),i.sort(a.sortActions),1},a.prototype.recycleAsyncId=function(e,n,t){},a.prototype._execute=function(e,n){if(this.active===!0)return r.prototype._execute.call(this,e,n)},a.sortActions=function(e,n){return e.delay===n.delay?e.index===n.index?0:e.index>n.index?1:-1:e.delay>n.delay?1:-1},a}(x);function xe(r){return!!r&&(r instanceof p||k(r.lift)&&k(r.subscribe))}function Ee(r,a){var e=typeof a=="object";return new Promise(function(n,t){var i=!1,s;r.subscribe({next:function(u){s=u,i=!0},error:t,complete:function(){i?n(s):e?n(a.defaultValue):t(new z)}})})}function I(r,a,e,n){if(e)if(V(e))n=e;else return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return I(r,a,n).apply(this,t).pipe(L(e))};return n?function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return I(r,a).apply(this,t).pipe(D(n),P(n))}:function(){for(var t=this,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var u=new _,o=!0;return new p(function(m){var c=u.subscribe(m);if(o){o=!1;var l=!1,A=!1;a.apply(t,g(g([],y(i)),[function(){for(var f=[],h=0;h<arguments.length;h++)f[h]=arguments[h];if(r){var b=f.shift();if(b!=null){u.error(b);return}}u.next(1<f.length?f:f[0]),A=!0,l&&u.complete()}])),A&&u.complete(),l=!0}return c})}}function Te(r,a,e){return I(!1,r,a,e)}function qe(r,a,e){return I(!0,r,a,e)}var ve={connector:function(){return new B},resetOnDisconnect:!0};function Se(r,a){a===void 0&&(a=ve);var e=null,n=a.connector,t=a.resetOnDisconnect,i=t===void 0?!0:t,s=n(),u=new p(function(o){return s.subscribe(o)});return u.connect=function(){return(!e||e.closed)&&(e=S(function(){return r}).subscribe(s),i&&e.add(function(){return s=n()})),e},u}function ke(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var e=H(r),n=Q(r),t=n.args,i=n.keys,s=new p(function(u){var o=t.length;if(!o){u.complete();return}for(var m=new Array(o),c=o,l=o,A=function(h){var b=!1;w(t[h]).subscribe(G(u,function(U){b||(b=!0,l--),m[h]=U},function(){return c--},void 0,function(){(!c||!b)&&(l||u.next(i?K(i,m):m),u.complete())}))},f=0;f<o;f++)A(f)});return e?s.pipe(L(e)):s}function We(r,a,e,n,t){var i,s,u,o;arguments.length===1?(i=r,o=i.initialState,a=i.condition,e=i.iterate,s=i.resultSelector,u=s===void 0?W:s,t=i.scheduler):(o=r,!n||V(n)?(u=W,t=n):u=n);function m(){var c;return J(this,function(l){switch(l.label){case 0:c=o,l.label=1;case 1:return!a||a(c)?[4,u(c)]:[3,4];case 2:l.sent(),l.label=3;case 3:return c=e(c),[3,1];case 4:return[2]}})}return S(t?function(){return Y(m(),t)}:m)}function Oe(r,a,e){return S(function(){return r()?a:e})}var pe=new p(X);function Me(){return pe}function Ce(r,a){return Z(Object.entries(r),a)}function Ve(r,a,e){return[O(a,e)(w(r)),O(ee(a,e))(w(r))]}function Le(r,a){return new p(function(e){var n=r(),t=a(n),i=t?w(t):$;return i.subscribe(e),function(){n&&n.unsubscribe()}})}export{Lt as ArgumentOutOfRangeError,_ as AsyncSubject,je as BehaviorSubject,Nt as ConnectableObservable,$ as EMPTY,z as EmptyError,pe as NEVER,Rt as NotFoundError,jt as Notification,Ut as NotificationKind,Ue as ObjectUnsubscribedError,p as Observable,ze as ReplaySubject,De as Scheduler,zt as SequenceError,B as Subject,Pe as Subscriber,C as Subscription,Dt as TimeoutError,Be as UnsubscriptionError,he as VirtualAction,Ie as VirtualTimeScheduler,Fe as animationFrame,de as animationFrameScheduler,Ae as animationFrames,ye as asap,ue as asapScheduler,He as async,Qe as asyncScheduler,Pt as audit,Bt as auditTime,Te as bindCallback,qe as bindNodeCallback,Ht as buffer,Qt as bufferCount,Ge as bufferTime,Gt as bufferToggle,Kt as bufferWhen,Yt as catchError,Jt as combineAll,Ke as combineLatest,Xt as combineLatestAll,Zt as combineLatestWith,Ye as concat,Je as concatAll,Xe as concatMap,$t as concatMapTo,_t as concatWith,Ze as config,ea as connect,Se as connectable,ta as count,aa as debounce,vn as debounceTime,$e as defaultIfEmpty,S as defer,_e as delay,et as delayWhen,na as dematerialize,ra as distinct,tt as distinctUntilChanged,at as distinctUntilKeyChanged,ia as elementAt,nt as empty,rt as endWith,sa as every,ua as exhaust,oa as exhaustAll,ca as exhaustMap,la as expand,O as filter,fa as finalize,ma as find,da as findIndex,it as first,st as firstValueFrom,ha as flatMap,ke as forkJoin,Z as from,ut as fromEvent,ot as fromEventPattern,We as generate,va as groupBy,W as identity,ct as ignoreElements,Oe as iif,pa as interval,ba as isEmpty,xe as isObservable,ga as last,Ee as lastValueFrom,lt as map,ft as mapTo,Aa as materialize,ya as max,mt as merge,dt as mergeAll,ht as mergeMap,wa as mergeMapTo,Fa as mergeScan,Ia as mergeWith,xa as min,Ea as multicast,Me as never,X as noop,vt as observable,P as observeOn,pt as of,Ta as onErrorResumeNext,qa as onErrorResumeNextWith,Ce as pairs,Sa as pairwise,Ve as partition,bt as pipe,gt as pluck,ka as publish,Wa as publishBehavior,Oa as publishLast,Ma as publishReplay,we as queue,le as queueScheduler,Ca as race,Va as raceWith,At as range,La as reduce,Na as refCount,Ra as repeat,ja as repeatWhen,Ua as retry,za as retryWhen,Da as sample,Pa as sampleTime,yt as scan,wt as scheduled,Ba as sequenceEqual,Ft as share,It as shareReplay,Ha as single,pn as skip,Qa as skipLast,Ga as skipUntil,Ka as skipWhile,xt as startWith,D as subscribeOn,Ya as switchAll,Et as switchMap,Ja as switchMapTo,Xa as switchScan,Tt as take,Za as takeLast,qt as takeUntil,$a as takeWhile,_a as tap,St as throttle,kt as throttleTime,en as throwError,Wt as throwIfEmpty,tn as timeInterval,an as timeout,nn as timeoutWith,Ot as timer,Mt as timestamp,rn as toArray,Le as using,sn as window,un as windowCount,on as windowTime,cn as windowToggle,ln as windowWhen,Ct as withLatestFrom,fn as zip,mn as zipAll,dn as zipWith};
