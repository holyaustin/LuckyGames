var m={},n={};Object.defineProperty(n,"__esModule",{value:!0});var _=n.getLocalStorage=R=n.getLocalStorageOrThrow=x=n.getCrypto=I=n.getCryptoOrThrow=E=n.getLocation=M=n.getLocationOrThrow=k=n.getNavigator=A=n.getNavigatorOrThrow=$=n.getDocument=B=n.getDocumentOrThrow=N=n.getFromWindowOrThrow=C=n.getFromWindow=void 0;function l(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}var C=n.getFromWindow=l;function w(e){const t=l(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}var N=n.getFromWindowOrThrow=w;function J(){return w("document")}var B=n.getDocumentOrThrow=J;function K(){return l("document")}var $=n.getDocument=K;function U(){return w("navigator")}var A=n.getNavigatorOrThrow=U;function X(){return l("navigator")}var k=n.getNavigator=X;function G(){return w("location")}var M=n.getLocationOrThrow=G;function H(){return l("location")}var E=n.getLocation=H;function Q(){return w("crypto")}var I=n.getCryptoOrThrow=Q;function z(){return l("crypto")}var x=n.getCrypto=z;function Y(){return w("localStorage")}var R=n.getLocalStorageOrThrow=Y;function q(){return l("localStorage")}_=n.getLocalStorage=q;Object.defineProperty(m,"__esModule",{value:!0});var D=m.getWindowMetadata=void 0;const b=n;function Z(){let e,t;try{e=b.getDocumentOrThrow(),t=b.getLocationOrThrow()}catch{return null}function o(){const u=e.getElementsByTagName("link"),f=[];for(let d=0;d<u.length;d++){const h=u[d],p=h.getAttribute("rel");if(p&&p.toLowerCase().indexOf("icon")>-1){const s=h.getAttribute("href");if(s)if(s.toLowerCase().indexOf("https:")===-1&&s.toLowerCase().indexOf("http:")===-1&&s.indexOf("//")!==0){let v=t.protocol+"//"+t.host;if(s.indexOf("/")===0)v+=s;else{const T=t.pathname.split("/");T.pop();const V=T.join("/");v+=V+"/"+s}f.push(v)}else if(s.indexOf("//")===0){const v=t.protocol+s;f.push(v)}else f.push(s)}}return f}function r(...u){const f=e.getElementsByTagName("meta");for(let d=0;d<f.length;d++){const h=f[d],p=["itemprop","property","name"].map(s=>h.getAttribute(s)).filter(s=>s?u.includes(s):!1);if(p.length&&p){const s=h.getAttribute("content");if(s)return s}}return""}function i(){let u=r("name","og:site_name","og:title","twitter:title");return u||(u=e.title),u}function a(){return r("description","og:description","twitter:description","keywords")}const c=i(),g=a(),F=t.origin,j=o();return{description:g,url:F,icons:j,name:c}}D=m.getWindowMetadata=Z;var ee=globalThis&&globalThis.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<o;t++)for(var a=arguments[t],c=0,g=a.length;c<g;c++,i++)r[i]=a[c];return r},te=function(){function e(t,o,r){this.name=t,this.version=o,this.os=r,this.type="browser"}return e}(),oe=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=process.platform}return e}(),ne=function(){function e(t,o,r,i){this.name=t,this.version=o,this.os=r,this.bot=i,this.type="bot-device"}return e}(),re=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),ie=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),se=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,ae=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,W=3,ce=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",se]],y=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function ue(e){return e?L(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new ie:typeof navigator<"u"?L(navigator.userAgent):de()}function ge(e){return e!==""&&ce.reduce(function(t,o){var r=o[0],i=o[1];if(t)return t;var a=i.exec(e);return!!a&&[r,a]},!1)}function L(e){var t=ge(e);if(!t)return null;var o=t[0],r=t[1];if(o==="searchbot")return new re;var i=r[1]&&r[1].split(/[._]/).slice(0,3);i?i.length<W&&(i=ee(i,le(W-i.length))):i=[];var a=i.join("."),c=fe(e),g=ae.exec(e);return g&&g[1]?new ne(o,a,c,g[1]):new te(o,a,c)}function fe(e){for(var t=0,o=y.length;t<o;t++){var r=y[t],i=r[0],a=r[1],c=a.exec(e);if(c)return i}return null}function de(){var e=typeof process<"u"&&process.version;return e?new oe(process.version.slice(1)):null}function le(e){for(var t=[],o=0;o<e;o++)t.push("0");return t}function P(e){return ue(e)}function O(){const e=P();return e&&e.os?e.os:void 0}function we(){const e=O();return e?e.toLowerCase().includes("android"):!1}function he(){const e=O();return e?e.toLowerCase().includes("ios")||e.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function _e(){return O()?we()||he():!1}function pe(){const e=P();return e&&e.name?e.name.toLowerCase()==="node":!1}function Ce(){return!pe()&&!!ve()}const Ne=C,Be=N,$e=B,Ae=$,ke=A,ve=k,Me=M,Ee=E,Ie=I,xe=x,Re=R,S=_;function De(){return D()}function me(e){if(typeof e!="string")throw new Error(`Cannot safe json parse value of type ${typeof e}`);try{return JSON.parse(e)}catch{return e}}function Oe(e){return typeof e=="string"?e:JSON.stringify(e)}const Se=me,Te=Oe;function be(e,t){const o=Te(t),r=S();r&&r.setItem(e,o)}function Pe(e){let t=null,o=null;const r=S();return r&&(o=r.getItem(e)),t=o&&Se(o),t}function Fe(e){const t=S();t&&t.removeItem(e)}const We="WALLETCONNECT_DEEPLINK_CHOICE";function je(e,t){const o=encodeURIComponent(e);return t.universalLink?`${t.universalLink}/wc?uri=${o}`:t.deepLink?`${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${o}`:""}function Ve(e){const t=e.href.split("?")[0];be(We,Object.assign(Object.assign({},e),{href:t}))}function ye(e,t){return e.filter(o=>o.name.toLowerCase().includes(t.toLowerCase()))[0]}function Je(e,t){let o=e;return t&&(o=t.map(r=>ye(e,r)).filter(Boolean)),o}export{pe as A,Se as B,Te as C,Ve as D,Pe as a,De as b,_e as c,P as d,O as e,je as f,Ee as g,xe as h,Ce as i,Ie as j,Ae as k,$e as l,We as m,Ne as n,Be as o,S as p,Re as q,Fe as r,be as s,Me as t,Je as u,ye as v,ve as w,ke as x,we as y,he as z};
