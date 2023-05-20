import{g as ln}from"./index-9af01959.js";import{d as wr,e as yr,f as br,b as Er,h as xr,j as Cr,k as Ar,l as Br,n as Tr,o as kr,a as Sr,p as Nr,q as Rr,g as Ir,t as Lr,u as Ur,v as Fr,w as Mr,x as Pr,y as Dr,i as Or,z as $r,c as zr,A as Hr,m as Wr,r as qr,B as Yr,C as Vr,D as Kr,s as Jr}from"./mobile-dfedc009.js";import{b as Qr,i as Gr}from"./index-3aa13386.js";import{d as Xr}from"./dijkstra-59d11638.js";function jr(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(i,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const cn="https://registry.walletconnect.com";function Zr(){return cn+"/api/v2/wallets"}function eo(){return cn+"/api/v2/dapps"}function un(e,t="mobile"){var n;return{name:e.name||"",shortName:e.metadata.shortName||"",color:e.metadata.colors.primary||"",logo:(n=e.image_url.sm)!==null&&n!==void 0?n:"",universalLink:e[t].universal||"",deepLink:e[t].native||""}}function to(e,t="mobile"){return Object.values(e).filter(n=>!!n[t].universal||!!n[t].native).map(n=>un(n,t))}const no=Object.freeze(Object.defineProperty({__proto__:null,detectEnv:wr,detectOS:yr,formatIOSMobile:br,formatMobileRegistry:to,formatMobileRegistryEntry:un,getClientMeta:Er,getCrypto:xr,getCryptoOrThrow:Cr,getDappRegistryUrl:eo,getDocument:Ar,getDocumentOrThrow:Br,getFromWindow:Tr,getFromWindowOrThrow:kr,getLocal:Sr,getLocalStorage:Nr,getLocalStorageOrThrow:Rr,getLocation:Ir,getLocationOrThrow:Lr,getMobileLinkRegistry:Ur,getMobileRegistryEntry:Fr,getNavigator:Mr,getNavigatorOrThrow:Pr,getWalletRegistryUrl:Zr,isAndroid:Dr,isBrowser:Or,isIOS:$r,isMobile:zr,isNode:Hr,mobileLinkChoiceKey:Wr,removeLocal:qr,safeJsonParse:Yr,safeJsonStringify:Vr,saveMobileLinkInfo:Kr,setLocal:Jr},Symbol.toStringTag,{value:"Module"})),ro=ln(no);var xe={},oo=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},fn={},ie={},io={}.toString,ht=Array.isArray||function(e){return io.call(e)=="[object Array]"},ao=ht;function lo(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},e.foo()===42}catch{return!1}}R.TYPED_ARRAY_SUPPORT=lo();var Ut=R.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function R(e,t,n){return!R.TYPED_ARRAY_SUPPORT&&!(this instanceof R)?new R(e,t,n):typeof e=="number"?sn(this,e):_o(this,e,t,n)}R.TYPED_ARRAY_SUPPORT&&(R.prototype.__proto__=Uint8Array.prototype,R.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&R[Symbol.species]===R&&Object.defineProperty(R,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}));function dt(e){if(e>=Ut)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ut.toString(16)+" bytes");return e|0}function co(e){return e!==e}function fe(e,t){var n;return R.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(t),n.__proto__=R.prototype):(n=e,n===null&&(n=new R(t)),n.length=t),n}function sn(e,t){var n=fe(e,t<0?0:dt(t)|0);if(!R.TYPED_ARRAY_SUPPORT)for(var i=0;i<t;++i)n[i]=0;return n}function uo(e,t){var n=dn(t)|0,i=fe(e,n),a=i.write(t);return a!==n&&(i=i.slice(0,a)),i}function nt(e,t){for(var n=t.length<0?0:dt(t.length)|0,i=fe(e,n),a=0;a<n;a+=1)i[a]=t[a]&255;return i}function fo(e,t,n,i){if(n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(i||0))throw new RangeError("'length' is out of bounds");var a;return n===void 0&&i===void 0?a=new Uint8Array(t):i===void 0?a=new Uint8Array(t,n):a=new Uint8Array(t,n,i),R.TYPED_ARRAY_SUPPORT?a.__proto__=R.prototype:a=nt(e,a),a}function so(e,t){if(R.isBuffer(t)){var n=dt(t.length)|0,i=fe(e,n);return i.length===0||t.copy(i,0,0,n),i}if(t){if(typeof ArrayBuffer<"u"&&t.buffer instanceof ArrayBuffer||"length"in t)return typeof t.length!="number"||co(t.length)?fe(e,0):nt(e,t);if(t.type==="Buffer"&&Array.isArray(t.data))return nt(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function hn(e,t){t=t||1/0;for(var n,i=e.length,a=null,l=[],f=0;f<i;++f){if(n=e.charCodeAt(f),n>55295&&n<57344){if(!a){if(n>56319){(t-=3)>-1&&l.push(239,191,189);continue}else if(f+1===i){(t-=3)>-1&&l.push(239,191,189);continue}a=n;continue}if(n<56320){(t-=3)>-1&&l.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(t-=3)>-1&&l.push(239,191,189);if(a=null,n<128){if((t-=1)<0)break;l.push(n)}else if(n<2048){if((t-=2)<0)break;l.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;l.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;l.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return l}function dn(e){if(R.isBuffer(e))return e.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;typeof e!="string"&&(e=""+e);var t=e.length;return t===0?0:hn(e).length}function ho(e,t,n,i){for(var a=0;a<i&&!(a+n>=t.length||a>=e.length);++a)t[a+n]=e[a];return a}function po(e,t,n,i){return ho(hn(t,e.length-n),e,n,i)}function _o(e,t,n,i){if(typeof t=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer?fo(e,t,n,i):typeof t=="string"?uo(e,t):so(e,t)}R.prototype.write=function(t,n,i){n===void 0?(i=this.length,n=0):i===void 0&&typeof n=="string"?(i=this.length,n=0):isFinite(n)&&(n=n|0,isFinite(i)?i=i|0:i=void 0);var a=this.length-n;if((i===void 0||i>a)&&(i=a),t.length>0&&(i<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");return po(this,t,n,i)};R.prototype.slice=function(t,n){var i=this.length;t=~~t,n=n===void 0?i:~~n,t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),n<0?(n+=i,n<0&&(n=0)):n>i&&(n=i),n<t&&(n=t);var a;if(R.TYPED_ARRAY_SUPPORT)a=this.subarray(t,n),a.__proto__=R.prototype;else{var l=n-t;a=new R(l,void 0);for(var f=0;f<l;++f)a[f]=this[f+t]}return a};R.prototype.copy=function(t,n,i,a){if(i||(i=0),!a&&a!==0&&(a=this.length),n>=t.length&&(n=t.length),n||(n=0),a>0&&a<i&&(a=i),a===i||t.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("sourceStart out of bounds");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),t.length-n<a-i&&(a=t.length-n+i);var l=a-i,f;if(this===t&&i<n&&n<a)for(f=l-1;f>=0;--f)t[f+n]=this[f+i];else if(l<1e3||!R.TYPED_ARRAY_SUPPORT)for(f=0;f<l;++f)t[f+n]=this[f+i];else Uint8Array.prototype.set.call(t,this.subarray(i,i+l),n);return l};R.prototype.fill=function(t,n,i){if(typeof t=="string"){if(typeof n=="string"?(n=0,i=this.length):typeof i=="string"&&(i=this.length),t.length===1){var a=t.charCodeAt(0);a<256&&(t=a)}}else typeof t=="number"&&(t=t&255);if(n<0||this.length<n||this.length<i)throw new RangeError("Out of range index");if(i<=n)return this;n=n>>>0,i=i===void 0?this.length:i>>>0,t||(t=0);var l;if(typeof t=="number")for(l=n;l<i;++l)this[l]=t;else{var f=R.isBuffer(t)?t:new R(t),c=f.length;for(l=0;l<i-n;++l)this[l+n]=f[l%c]}return this};R.concat=function(t,n){if(!ao(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return fe(null,0);var i;if(n===void 0)for(n=0,i=0;i<t.length;++i)n+=t[i].length;var a=sn(null,n),l=0;for(i=0;i<t.length;++i){var f=t[i];if(!R.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(a,l),l+=f.length}return a};R.byteLength=dn;R.prototype._isBuffer=!0;R.isBuffer=function(t){return!!(t!=null&&t._isBuffer)};ie.alloc=function(e){var t=new R(e);return t.fill(0),t};ie.from=function(e){return new R(e)};var K={},pt,go=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];K.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};K.getSymbolTotalCodewords=function(t){return go[t]};K.getBCHDigit=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t};K.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');pt=t};K.isKanjiModeEnabled=function(){return typeof pt<"u"};K.toSJIS=function(t){return pt(t)};var De={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");var i=n.toLowerCase();switch(i){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},e.from=function(i,a){if(e.isValid(i))return i;try{return t(i)}catch{return a}}})(De);function pn(){this.buffer=[],this.length=0}pn.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var mo=pn,Ft=ie;function Ce(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=Ft.alloc(e*e),this.reservedBit=Ft.alloc(e*e)}Ce.prototype.set=function(e,t,n,i){var a=e*this.size+t;this.data[a]=n,i&&(this.reservedBit[a]=!0)};Ce.prototype.get=function(e,t){return this.data[e*this.size+t]};Ce.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};Ce.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var vo=Ce,_n={};(function(e){var t=K.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];for(var a=Math.floor(i/7)+2,l=t(i),f=l===145?26:Math.ceil((l-13)/(2*a-2))*2,c=[l-7],h=1;h<a-1;h++)c[h]=c[h-1]-f;return c.push(6),c.reverse()},e.getPositions=function(i){for(var a=[],l=e.getRowColCoords(i),f=l.length,c=0;c<f;c++)for(var h=0;h<f;h++)c===0&&h===0||c===0&&h===f-1||c===f-1&&h===0||a.push([l[c],l[h]]);return a}})(_n);var gn={},wo=K.getSymbolSize,Mt=7;gn.getPositions=function(t){var n=wo(t);return[[0,0],[n-Mt,0],[0,n-Mt]]};var mn={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(a){return a!=null&&a!==""&&!isNaN(a)&&a>=0&&a<=7},e.from=function(a){return e.isValid(a)?parseInt(a,10):void 0},e.getPenaltyN1=function(a){for(var l=a.size,f=0,c=0,h=0,_=null,d=null,v=0;v<l;v++){c=h=0,_=d=null;for(var A=0;A<l;A++){var k=a.get(v,A);k===_?c++:(c>=5&&(f+=t.N1+(c-5)),_=k,c=1),k=a.get(A,v),k===d?h++:(h>=5&&(f+=t.N1+(h-5)),d=k,h=1)}c>=5&&(f+=t.N1+(c-5)),h>=5&&(f+=t.N1+(h-5))}return f},e.getPenaltyN2=function(a){for(var l=a.size,f=0,c=0;c<l-1;c++)for(var h=0;h<l-1;h++){var _=a.get(c,h)+a.get(c,h+1)+a.get(c+1,h)+a.get(c+1,h+1);(_===4||_===0)&&f++}return f*t.N2},e.getPenaltyN3=function(a){for(var l=a.size,f=0,c=0,h=0,_=0;_<l;_++){c=h=0;for(var d=0;d<l;d++)c=c<<1&2047|a.get(_,d),d>=10&&(c===1488||c===93)&&f++,h=h<<1&2047|a.get(d,_),d>=10&&(h===1488||h===93)&&f++}return f*t.N3},e.getPenaltyN4=function(a){for(var l=0,f=a.data.length,c=0;c<f;c++)l+=a.data[c];var h=Math.abs(Math.ceil(l*100/f/5)-10);return h*t.N4};function n(i,a,l){switch(i){case e.Patterns.PATTERN000:return(a+l)%2===0;case e.Patterns.PATTERN001:return a%2===0;case e.Patterns.PATTERN010:return l%3===0;case e.Patterns.PATTERN011:return(a+l)%3===0;case e.Patterns.PATTERN100:return(Math.floor(a/2)+Math.floor(l/3))%2===0;case e.Patterns.PATTERN101:return a*l%2+a*l%3===0;case e.Patterns.PATTERN110:return(a*l%2+a*l%3)%2===0;case e.Patterns.PATTERN111:return(a*l%3+(a+l)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(a,l){for(var f=l.size,c=0;c<f;c++)for(var h=0;h<f;h++)l.isReserved(h,c)||l.xor(h,c,n(a,h,c))},e.getBestMask=function(a,l){for(var f=Object.keys(e.Patterns).length,c=0,h=1/0,_=0;_<f;_++){l(_),e.applyMask(_,a);var d=e.getPenaltyN1(a)+e.getPenaltyN2(a)+e.getPenaltyN3(a)+e.getPenaltyN4(a);e.applyMask(_,a),d<h&&(h=d,c=_)}return c}})(mn);var Oe={},re=De,Ne=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Re=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Oe.getBlocksCount=function(t,n){switch(n){case re.L:return Ne[(t-1)*4+0];case re.M:return Ne[(t-1)*4+1];case re.Q:return Ne[(t-1)*4+2];case re.H:return Ne[(t-1)*4+3];default:return}};Oe.getTotalCodewordsCount=function(t,n){switch(n){case re.L:return Re[(t-1)*4+0];case re.M:return Re[(t-1)*4+1];case re.Q:return Re[(t-1)*4+2];case re.H:return Re[(t-1)*4+3];default:return}};var vn={},$e={},wn=ie,me=wn.alloc(512),Le=wn.alloc(256);(function(){for(var t=1,n=0;n<255;n++)me[n]=t,Le[t]=n,t<<=1,t&256&&(t^=285);for(n=255;n<512;n++)me[n]=me[n-255]})();$e.log=function(t){if(t<1)throw new Error("log("+t+")");return Le[t]};$e.exp=function(t){return me[t]};$e.mul=function(t,n){return t===0||n===0?0:me[Le[t]+Le[n]]};(function(e){var t=ie,n=$e;e.mul=function(a,l){for(var f=t.alloc(a.length+l.length-1),c=0;c<a.length;c++)for(var h=0;h<l.length;h++)f[c+h]^=n.mul(a[c],l[h]);return f},e.mod=function(a,l){for(var f=t.from(a);f.length-l.length>=0;){for(var c=f[0],h=0;h<l.length;h++)f[h]^=n.mul(l[h],c);for(var _=0;_<f.length&&f[_]===0;)_++;f=f.slice(_)}return f},e.generateECPolynomial=function(a){for(var l=t.from([1]),f=0;f<a;f++)l=e.mul(l,[1,n.exp(f)]);return l}})(vn);var yn={};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){var t=Qr,n=Gr,i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=c,e.SlowBuffer=E,e.INSPECT_MAX_BYTES=50;var a=2147483647;e.kMaxLength=a,c.TYPED_ARRAY_SUPPORT=l(),!c.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function l(){try{var u=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(u,r),u.foo()===42}catch{return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function f(u){if(u>a)throw new RangeError('The value "'+u+'" is invalid for option "size"');var r=new Uint8Array(u);return Object.setPrototypeOf(r,c.prototype),r}function c(u,r,o){if(typeof u=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return v(u)}return h(u,r,o)}c.poolSize=8192;function h(u,r,o){if(typeof u=="string")return A(u,r);if(ArrayBuffer.isView(u))return x(u);if(u==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u);if(G(u,ArrayBuffer)||u&&G(u.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(G(u,SharedArrayBuffer)||u&&G(u.buffer,SharedArrayBuffer)))return B(u,r,o);if(typeof u=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=u.valueOf&&u.valueOf();if(s!=null&&s!==u)return c.from(s,r,o);var p=T(u);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof u[Symbol.toPrimitive]=="function")return c.from(u[Symbol.toPrimitive]("string"),r,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u)}c.from=function(u,r,o){return h(u,r,o)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function _(u){if(typeof u!="number")throw new TypeError('"size" argument must be of type number');if(u<0)throw new RangeError('The value "'+u+'" is invalid for option "size"')}function d(u,r,o){return _(u),u<=0?f(u):r!==void 0?typeof o=="string"?f(u).fill(r,o):f(u).fill(r):f(u)}c.alloc=function(u,r,o){return d(u,r,o)};function v(u){return _(u),f(u<0?0:C(u)|0)}c.allocUnsafe=function(u){return v(u)},c.allocUnsafeSlow=function(u){return v(u)};function A(u,r){if((typeof r!="string"||r==="")&&(r="utf8"),!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var o=b(u,r)|0,s=f(o),p=s.write(u,r);return p!==o&&(s=s.slice(0,p)),s}function k(u){for(var r=u.length<0?0:C(u.length)|0,o=f(r),s=0;s<r;s+=1)o[s]=u[s]&255;return o}function x(u){if(G(u,Uint8Array)){var r=new Uint8Array(u);return B(r.buffer,r.byteOffset,r.byteLength)}return k(u)}function B(u,r,o){if(r<0||u.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(u.byteLength<r+(o||0))throw new RangeError('"length" is outside of buffer bounds');var s;return r===void 0&&o===void 0?s=new Uint8Array(u):o===void 0?s=new Uint8Array(u,r):s=new Uint8Array(u,r,o),Object.setPrototypeOf(s,c.prototype),s}function T(u){if(c.isBuffer(u)){var r=C(u.length)|0,o=f(r);return o.length===0||u.copy(o,0,0,r),o}if(u.length!==void 0)return typeof u.length!="number"||Je(u.length)?f(0):k(u);if(u.type==="Buffer"&&Array.isArray(u.data))return k(u.data)}function C(u){if(u>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return u|0}function E(u){return+u!=u&&(u=0),c.alloc(+u)}c.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==c.prototype},c.compare=function(r,o){if(G(r,Uint8Array)&&(r=c.from(r,r.offset,r.byteLength)),G(o,Uint8Array)&&(o=c.from(o,o.offset,o.byteLength)),!c.isBuffer(r)||!c.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===o)return 0;for(var s=r.length,p=o.length,g=0,m=Math.min(s,p);g<m;++g)if(r[g]!==o[g]){s=r[g],p=o[g];break}return s<p?-1:p<s?1:0},c.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(r,o){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return c.alloc(0);var s;if(o===void 0)for(o=0,s=0;s<r.length;++s)o+=r[s].length;var p=c.allocUnsafe(o),g=0;for(s=0;s<r.length;++s){var m=r[s];if(G(m,Uint8Array))g+m.length>p.length?c.from(m).copy(p,g):Uint8Array.prototype.set.call(p,m,g);else if(c.isBuffer(m))m.copy(p,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=m.length}return p};function b(u,r){if(c.isBuffer(u))return u.length;if(ArrayBuffer.isView(u)||G(u,ArrayBuffer))return u.byteLength;if(typeof u!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof u);var o=u.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&o===0)return 0;for(var p=!1;;)switch(r){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Ke(u).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Rt(u).length;default:if(p)return s?-1:Ke(u).length;r=(""+r).toLowerCase(),p=!0}}c.byteLength=b;function w(u,r,o){var s=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,r>>>=0,o<=r))return"";for(u||(u="utf8");;)switch(u){case"hex":return ce(this,r,o);case"utf8":case"utf-8":return ne(this,r,o);case"ascii":return Ye(this,r,o);case"latin1":case"binary":return Ve(this,r,o);case"base64":return W(this,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Te(this,r,o);default:if(s)throw new TypeError("Unknown encoding: "+u);u=(u+"").toLowerCase(),s=!0}}c.prototype._isBuffer=!0;function N(u,r,o){var s=u[r];u[r]=u[o],u[o]=s}c.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<r;o+=2)N(this,o,o+1);return this},c.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<r;o+=4)N(this,o,o+3),N(this,o+1,o+2);return this},c.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<r;o+=8)N(this,o,o+7),N(this,o+1,o+6),N(this,o+2,o+5),N(this,o+3,o+4);return this},c.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?ne(this,0,r):w.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(r){if(!c.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:c.compare(this,r)===0},c.prototype.inspect=function(){var r="",o=e.INSPECT_MAX_BYTES;return r=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(r+=" ... "),"<Buffer "+r+">"},i&&(c.prototype[i]=c.prototype.inspect),c.prototype.compare=function(r,o,s,p,g){if(G(r,Uint8Array)&&(r=c.from(r,r.offset,r.byteLength)),!c.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(o===void 0&&(o=0),s===void 0&&(s=r?r.length:0),p===void 0&&(p=0),g===void 0&&(g=this.length),o<0||s>r.length||p<0||g>this.length)throw new RangeError("out of range index");if(p>=g&&o>=s)return 0;if(p>=g)return-1;if(o>=s)return 1;if(o>>>=0,s>>>=0,p>>>=0,g>>>=0,this===r)return 0;for(var m=g-p,I=s-o,U=Math.min(m,I),P=this.slice(p,g),H=r.slice(o,s),D=0;D<U;++D)if(P[D]!==H[D]){m=P[D],I=H[D];break}return m<I?-1:I<m?1:0};function F(u,r,o,s,p){if(u.length===0)return-1;if(typeof o=="string"?(s=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Je(o)&&(o=p?0:u.length-1),o<0&&(o=u.length+o),o>=u.length){if(p)return-1;o=u.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof r=="string"&&(r=c.from(r,s)),c.isBuffer(r))return r.length===0?-1:L(u,r,o,s,p);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(u,r,o):Uint8Array.prototype.lastIndexOf.call(u,r,o):L(u,[r],o,s,p);throw new TypeError("val must be string, number or Buffer")}function L(u,r,o,s,p){var g=1,m=u.length,I=r.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(u.length<2||r.length<2)return-1;g=2,m/=2,I/=2,o/=2}function U(It,Lt){return g===1?It[Lt]:It.readUInt16BE(Lt*g)}var P;if(p){var H=-1;for(P=o;P<m;P++)if(U(u,P)===U(r,H===-1?0:P-H)){if(H===-1&&(H=P),P-H+1===I)return H*g}else H!==-1&&(P-=P-H),H=-1}else for(o+I>m&&(o=m-I),P=o;P>=0;P--){for(var D=!0,Se=0;Se<I;Se++)if(U(u,P+Se)!==U(r,Se)){D=!1;break}if(D)return P}return-1}c.prototype.includes=function(r,o,s){return this.indexOf(r,o,s)!==-1},c.prototype.indexOf=function(r,o,s){return F(this,r,o,s,!0)},c.prototype.lastIndexOf=function(r,o,s){return F(this,r,o,s,!1)};function M(u,r,o,s){o=Number(o)||0;var p=u.length-o;s?(s=Number(s),s>p&&(s=p)):s=p;var g=r.length;s>g/2&&(s=g/2);for(var m=0;m<s;++m){var I=parseInt(r.substr(m*2,2),16);if(Je(I))return m;u[o+m]=I}return m}function z(u,r,o,s){return ke(Ke(r,u.length-o),u,o,s)}function O(u,r,o,s){return ke(gr(r),u,o,s)}function j(u,r,o,s){return ke(Rt(r),u,o,s)}function J(u,r,o,s){return ke(mr(r,u.length-o),u,o,s)}c.prototype.write=function(r,o,s,p){if(o===void 0)p="utf8",s=this.length,o=0;else if(s===void 0&&typeof o=="string")p=o,s=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(s)?(s=s>>>0,p===void 0&&(p="utf8")):(p=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var g=this.length-o;if((s===void 0||s>g)&&(s=g),r.length>0&&(s<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");for(var m=!1;;)switch(p){case"hex":return M(this,r,o,s);case"utf8":case"utf-8":return z(this,r,o,s);case"ascii":case"latin1":case"binary":return O(this,r,o,s);case"base64":return j(this,r,o,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return J(this,r,o,s);default:if(m)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),m=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function W(u,r,o){return r===0&&o===u.length?t.fromByteArray(u):t.fromByteArray(u.slice(r,o))}function ne(u,r,o){o=Math.min(u.length,o);for(var s=[],p=r;p<o;){var g=u[p],m=null,I=g>239?4:g>223?3:g>191?2:1;if(p+I<=o){var U,P,H,D;switch(I){case 1:g<128&&(m=g);break;case 2:U=u[p+1],(U&192)===128&&(D=(g&31)<<6|U&63,D>127&&(m=D));break;case 3:U=u[p+1],P=u[p+2],(U&192)===128&&(P&192)===128&&(D=(g&15)<<12|(U&63)<<6|P&63,D>2047&&(D<55296||D>57343)&&(m=D));break;case 4:U=u[p+1],P=u[p+2],H=u[p+3],(U&192)===128&&(P&192)===128&&(H&192)===128&&(D=(g&15)<<18|(U&63)<<12|(P&63)<<6|H&63,D>65535&&D<1114112&&(m=D))}}m===null?(m=65533,I=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),p+=I}return qe(s)}var Be=4096;function qe(u){var r=u.length;if(r<=Be)return String.fromCharCode.apply(String,u);for(var o="",s=0;s<r;)o+=String.fromCharCode.apply(String,u.slice(s,s+=Be));return o}function Ye(u,r,o){var s="";o=Math.min(u.length,o);for(var p=r;p<o;++p)s+=String.fromCharCode(u[p]&127);return s}function Ve(u,r,o){var s="";o=Math.min(u.length,o);for(var p=r;p<o;++p)s+=String.fromCharCode(u[p]);return s}function ce(u,r,o){var s=u.length;(!r||r<0)&&(r=0),(!o||o<0||o>s)&&(o=s);for(var p="",g=r;g<o;++g)p+=vr[u[g]];return p}function Te(u,r,o){for(var s=u.slice(r,o),p="",g=0;g<s.length-1;g+=2)p+=String.fromCharCode(s[g]+s[g+1]*256);return p}c.prototype.slice=function(r,o){var s=this.length;r=~~r,o=o===void 0?s:~~o,r<0?(r+=s,r<0&&(r=0)):r>s&&(r=s),o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),o<r&&(o=r);var p=this.subarray(r,o);return Object.setPrototypeOf(p,c.prototype),p};function $(u,r,o){if(u%1!==0||u<0)throw new RangeError("offset is not uint");if(u+r>o)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(r,o,s){r=r>>>0,o=o>>>0,s||$(r,o,this.length);for(var p=this[r],g=1,m=0;++m<o&&(g*=256);)p+=this[r+m]*g;return p},c.prototype.readUintBE=c.prototype.readUIntBE=function(r,o,s){r=r>>>0,o=o>>>0,s||$(r,o,this.length);for(var p=this[r+--o],g=1;o>0&&(g*=256);)p+=this[r+--o]*g;return p},c.prototype.readUint8=c.prototype.readUInt8=function(r,o){return r=r>>>0,o||$(r,1,this.length),this[r]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(r,o){return r=r>>>0,o||$(r,2,this.length),this[r]|this[r+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(r,o){return r=r>>>0,o||$(r,2,this.length),this[r]<<8|this[r+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(r,o){return r=r>>>0,o||$(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(r,o){return r=r>>>0,o||$(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},c.prototype.readIntLE=function(r,o,s){r=r>>>0,o=o>>>0,s||$(r,o,this.length);for(var p=this[r],g=1,m=0;++m<o&&(g*=256);)p+=this[r+m]*g;return g*=128,p>=g&&(p-=Math.pow(2,8*o)),p},c.prototype.readIntBE=function(r,o,s){r=r>>>0,o=o>>>0,s||$(r,o,this.length);for(var p=o,g=1,m=this[r+--p];p>0&&(g*=256);)m+=this[r+--p]*g;return g*=128,m>=g&&(m-=Math.pow(2,8*o)),m},c.prototype.readInt8=function(r,o){return r=r>>>0,o||$(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},c.prototype.readInt16LE=function(r,o){r=r>>>0,o||$(r,2,this.length);var s=this[r]|this[r+1]<<8;return s&32768?s|4294901760:s},c.prototype.readInt16BE=function(r,o){r=r>>>0,o||$(r,2,this.length);var s=this[r+1]|this[r]<<8;return s&32768?s|4294901760:s},c.prototype.readInt32LE=function(r,o){return r=r>>>0,o||$(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},c.prototype.readInt32BE=function(r,o){return r=r>>>0,o||$(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},c.prototype.readFloatLE=function(r,o){return r=r>>>0,o||$(r,4,this.length),n.read(this,r,!0,23,4)},c.prototype.readFloatBE=function(r,o){return r=r>>>0,o||$(r,4,this.length),n.read(this,r,!1,23,4)},c.prototype.readDoubleLE=function(r,o){return r=r>>>0,o||$(r,8,this.length),n.read(this,r,!0,52,8)},c.prototype.readDoubleBE=function(r,o){return r=r>>>0,o||$(r,8,this.length),n.read(this,r,!1,52,8)};function Y(u,r,o,s,p,g){if(!c.isBuffer(u))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>p||r<g)throw new RangeError('"value" argument is out of bounds');if(o+s>u.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(r,o,s,p){if(r=+r,o=o>>>0,s=s>>>0,!p){var g=Math.pow(2,8*s)-1;Y(this,r,o,s,g,0)}var m=1,I=0;for(this[o]=r&255;++I<s&&(m*=256);)this[o+I]=r/m&255;return o+s},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(r,o,s,p){if(r=+r,o=o>>>0,s=s>>>0,!p){var g=Math.pow(2,8*s)-1;Y(this,r,o,s,g,0)}var m=s-1,I=1;for(this[o+m]=r&255;--m>=0&&(I*=256);)this[o+m]=r/I&255;return o+s},c.prototype.writeUint8=c.prototype.writeUInt8=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,1,255,0),this[o]=r&255,o+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,2,65535,0),this[o]=r&255,this[o+1]=r>>>8,o+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,2,65535,0),this[o]=r>>>8,this[o+1]=r&255,o+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,4,4294967295,0),this[o+3]=r>>>24,this[o+2]=r>>>16,this[o+1]=r>>>8,this[o]=r&255,o+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,4,4294967295,0),this[o]=r>>>24,this[o+1]=r>>>16,this[o+2]=r>>>8,this[o+3]=r&255,o+4},c.prototype.writeIntLE=function(r,o,s,p){if(r=+r,o=o>>>0,!p){var g=Math.pow(2,8*s-1);Y(this,r,o,s,g-1,-g)}var m=0,I=1,U=0;for(this[o]=r&255;++m<s&&(I*=256);)r<0&&U===0&&this[o+m-1]!==0&&(U=1),this[o+m]=(r/I>>0)-U&255;return o+s},c.prototype.writeIntBE=function(r,o,s,p){if(r=+r,o=o>>>0,!p){var g=Math.pow(2,8*s-1);Y(this,r,o,s,g-1,-g)}var m=s-1,I=1,U=0;for(this[o+m]=r&255;--m>=0&&(I*=256);)r<0&&U===0&&this[o+m+1]!==0&&(U=1),this[o+m]=(r/I>>0)-U&255;return o+s},c.prototype.writeInt8=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,1,127,-128),r<0&&(r=255+r+1),this[o]=r&255,o+1},c.prototype.writeInt16LE=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,2,32767,-32768),this[o]=r&255,this[o+1]=r>>>8,o+2},c.prototype.writeInt16BE=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,2,32767,-32768),this[o]=r>>>8,this[o+1]=r&255,o+2},c.prototype.writeInt32LE=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,4,2147483647,-2147483648),this[o]=r&255,this[o+1]=r>>>8,this[o+2]=r>>>16,this[o+3]=r>>>24,o+4},c.prototype.writeInt32BE=function(r,o,s){return r=+r,o=o>>>0,s||Y(this,r,o,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[o]=r>>>24,this[o+1]=r>>>16,this[o+2]=r>>>8,this[o+3]=r&255,o+4};function kt(u,r,o,s,p,g){if(o+s>u.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function St(u,r,o,s,p){return r=+r,o=o>>>0,p||kt(u,r,o,4),n.write(u,r,o,s,23,4),o+4}c.prototype.writeFloatLE=function(r,o,s){return St(this,r,o,!0,s)},c.prototype.writeFloatBE=function(r,o,s){return St(this,r,o,!1,s)};function Nt(u,r,o,s,p){return r=+r,o=o>>>0,p||kt(u,r,o,8),n.write(u,r,o,s,52,8),o+8}c.prototype.writeDoubleLE=function(r,o,s){return Nt(this,r,o,!0,s)},c.prototype.writeDoubleBE=function(r,o,s){return Nt(this,r,o,!1,s)},c.prototype.copy=function(r,o,s,p){if(!c.isBuffer(r))throw new TypeError("argument should be a Buffer");if(s||(s=0),!p&&p!==0&&(p=this.length),o>=r.length&&(o=r.length),o||(o=0),p>0&&p<s&&(p=s),p===s||r.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),r.length-o<p-s&&(p=r.length-o+s);var g=p-s;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,s,p):Uint8Array.prototype.set.call(r,this.subarray(s,p),o),g},c.prototype.fill=function(r,o,s,p){if(typeof r=="string"){if(typeof o=="string"?(p=o,o=0,s=this.length):typeof s=="string"&&(p=s,s=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!c.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(r.length===1){var g=r.charCodeAt(0);(p==="utf8"&&g<128||p==="latin1")&&(r=g)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(o<0||this.length<o||this.length<s)throw new RangeError("Out of range index");if(s<=o)return this;o=o>>>0,s=s===void 0?this.length:s>>>0,r||(r=0);var m;if(typeof r=="number")for(m=o;m<s;++m)this[m]=r;else{var I=c.isBuffer(r)?r:c.from(r,p),U=I.length;if(U===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(m=0;m<s-o;++m)this[m+o]=I[m%U]}return this};var pr=/[^+/0-9A-Za-z-_]/g;function _r(u){if(u=u.split("=")[0],u=u.trim().replace(pr,""),u.length<2)return"";for(;u.length%4!==0;)u=u+"=";return u}function Ke(u,r){r=r||1/0;for(var o,s=u.length,p=null,g=[],m=0;m<s;++m){if(o=u.charCodeAt(m),o>55295&&o<57344){if(!p){if(o>56319){(r-=3)>-1&&g.push(239,191,189);continue}else if(m+1===s){(r-=3)>-1&&g.push(239,191,189);continue}p=o;continue}if(o<56320){(r-=3)>-1&&g.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(r-=3)>-1&&g.push(239,191,189);if(p=null,o<128){if((r-=1)<0)break;g.push(o)}else if(o<2048){if((r-=2)<0)break;g.push(o>>6|192,o&63|128)}else if(o<65536){if((r-=3)<0)break;g.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((r-=4)<0)break;g.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return g}function gr(u){for(var r=[],o=0;o<u.length;++o)r.push(u.charCodeAt(o)&255);return r}function mr(u,r){for(var o,s,p,g=[],m=0;m<u.length&&!((r-=2)<0);++m)o=u.charCodeAt(m),s=o>>8,p=o%256,g.push(p),g.push(s);return g}function Rt(u){return t.toByteArray(_r(u))}function ke(u,r,o,s){for(var p=0;p<s&&!(p+o>=r.length||p>=u.length);++p)r[p+o]=u[p];return p}function G(u,r){return u instanceof r||u!=null&&u.constructor!=null&&u.constructor.name!=null&&u.constructor.name===r.name}function Je(u){return u!==u}var vr=function(){for(var u="0123456789abcdef",r=new Array(256),o=0;o<16;++o)for(var s=o*16,p=0;p<16;++p)r[s+p]=u[o]+u[p];return r}()})(yn);var Pt=ie,bn=vn,yo=yn.Buffer;function _t(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}_t.prototype.initialize=function(t){this.degree=t,this.genPoly=bn.generateECPolynomial(this.degree)};_t.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var n=Pt.alloc(this.degree),i=yo.concat([t,n],t.length+this.degree),a=bn.mod(i,this.genPoly),l=this.degree-a.length;if(l>0){var f=Pt.alloc(this.degree);return a.copy(f,l),f}return a};var bo=_t,En={},ae={},gt={};gt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var X={},xn="[0-9]+",Eo="[A-Z $%*+\\-./:]+",ye="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ye=ye.replace(/u/g,"\\u");var xo="(?:(?![A-Z0-9 $%*+\\-./:]|"+ye+`)(?:.|[\r
]))+`;X.KANJI=new RegExp(ye,"g");X.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");X.BYTE=new RegExp(xo,"g");X.NUMERIC=new RegExp(xn,"g");X.ALPHANUMERIC=new RegExp(Eo,"g");var Co=new RegExp("^"+ye+"$"),Ao=new RegExp("^"+xn+"$"),Bo=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");X.testKanji=function(t){return Co.test(t)};X.testNumeric=function(t){return Ao.test(t)};X.testAlphanumeric=function(t){return Bo.test(t)};(function(e){var t=gt,n=X;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(l,f){if(!l.ccBits)throw new Error("Invalid mode: "+l);if(!t.isValid(f))throw new Error("Invalid version: "+f);return f>=1&&f<10?l.ccBits[0]:f<27?l.ccBits[1]:l.ccBits[2]},e.getBestModeForData=function(l){return n.testNumeric(l)?e.NUMERIC:n.testAlphanumeric(l)?e.ALPHANUMERIC:n.testKanji(l)?e.KANJI:e.BYTE},e.toString=function(l){if(l&&l.id)return l.id;throw new Error("Invalid mode")},e.isValid=function(l){return l&&l.bit&&l.ccBits};function i(a){if(typeof a!="string")throw new Error("Param is not a string");var l=a.toLowerCase();switch(l){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+a)}}e.from=function(l,f){if(e.isValid(l))return l;try{return i(l)}catch{return f}}})(ae);(function(e){var t=K,n=Oe,i=De,a=ae,l=gt,f=ht,c=7973,h=t.getBCHDigit(c);function _(k,x,B){for(var T=1;T<=40;T++)if(x<=e.getCapacity(T,B,k))return T}function d(k,x){return a.getCharCountIndicator(k,x)+4}function v(k,x){var B=0;return k.forEach(function(T){var C=d(T.mode,x);B+=C+T.getBitsLength()}),B}function A(k,x){for(var B=1;B<=40;B++){var T=v(k,B);if(T<=e.getCapacity(B,x,a.MIXED))return B}}e.from=function(x,B){return l.isValid(x)?parseInt(x,10):B},e.getCapacity=function(x,B,T){if(!l.isValid(x))throw new Error("Invalid QR Code version");typeof T>"u"&&(T=a.BYTE);var C=t.getSymbolTotalCodewords(x),E=n.getTotalCodewordsCount(x,B),b=(C-E)*8;if(T===a.MIXED)return b;var w=b-d(T,x);switch(T){case a.NUMERIC:return Math.floor(w/10*3);case a.ALPHANUMERIC:return Math.floor(w/11*2);case a.KANJI:return Math.floor(w/13);case a.BYTE:default:return Math.floor(w/8)}},e.getBestVersionForData=function(x,B){var T,C=i.from(B,i.M);if(f(x)){if(x.length>1)return A(x,C);if(x.length===0)return 1;T=x[0]}else T=x;return _(T.mode,T.getLength(),C)},e.getEncodedBits=function(x){if(!l.isValid(x)||x<7)throw new Error("Invalid QR Code version");for(var B=x<<12;t.getBCHDigit(B)-h>=0;)B^=c<<t.getBCHDigit(B)-h;return x<<12|B}})(En);var Cn={},rt=K,An=1335,To=21522,Dt=rt.getBCHDigit(An);Cn.getEncodedBits=function(t,n){for(var i=t.bit<<3|n,a=i<<10;rt.getBCHDigit(a)-Dt>=0;)a^=An<<rt.getBCHDigit(a)-Dt;return(i<<10|a)^To};var Bn={},ko=ae;function se(e){this.mode=ko.NUMERIC,this.data=e.toString()}se.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};se.prototype.getLength=function(){return this.data.length};se.prototype.getBitsLength=function(){return se.getBitsLength(this.data.length)};se.prototype.write=function(t){var n,i,a;for(n=0;n+3<=this.data.length;n+=3)i=this.data.substr(n,3),a=parseInt(i,10),t.put(a,10);var l=this.data.length-n;l>0&&(i=this.data.substr(n),a=parseInt(i,10),t.put(a,l*3+1))};var So=se,No=ae,Qe=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function he(e){this.mode=No.ALPHANUMERIC,this.data=e}he.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};he.prototype.getLength=function(){return this.data.length};he.prototype.getBitsLength=function(){return he.getBitsLength(this.data.length)};he.prototype.write=function(t){var n;for(n=0;n+2<=this.data.length;n+=2){var i=Qe.indexOf(this.data[n])*45;i+=Qe.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(Qe.indexOf(this.data[n]),6)};var Ro=he,Io=ie,Lo=ae;function de(e){this.mode=Lo.BYTE,this.data=Io.from(e)}de.getBitsLength=function(t){return t*8};de.prototype.getLength=function(){return this.data.length};de.prototype.getBitsLength=function(){return de.getBitsLength(this.data.length)};de.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var Uo=de,Fo=ae,Mo=K;function pe(e){this.mode=Fo.KANJI,this.data=e}pe.getBitsLength=function(t){return t*13};pe.prototype.getLength=function(){return this.data.length};pe.prototype.getBitsLength=function(){return pe.getBitsLength(this.data.length)};pe.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=Mo.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var Po=pe;(function(e){var t=ae,n=So,i=Ro,a=Uo,l=Po,f=X,c=K,h=Xr;function _(C){return unescape(encodeURIComponent(C)).length}function d(C,E,b){for(var w=[],N;(N=C.exec(b))!==null;)w.push({data:N[0],index:N.index,mode:E,length:N[0].length});return w}function v(C){var E=d(f.NUMERIC,t.NUMERIC,C),b=d(f.ALPHANUMERIC,t.ALPHANUMERIC,C),w,N;c.isKanjiModeEnabled()?(w=d(f.BYTE,t.BYTE,C),N=d(f.KANJI,t.KANJI,C)):(w=d(f.BYTE_KANJI,t.BYTE,C),N=[]);var F=E.concat(b,w,N);return F.sort(function(L,M){return L.index-M.index}).map(function(L){return{data:L.data,mode:L.mode,length:L.length}})}function A(C,E){switch(E){case t.NUMERIC:return n.getBitsLength(C);case t.ALPHANUMERIC:return i.getBitsLength(C);case t.KANJI:return l.getBitsLength(C);case t.BYTE:return a.getBitsLength(C)}}function k(C){return C.reduce(function(E,b){var w=E.length-1>=0?E[E.length-1]:null;return w&&w.mode===b.mode?(E[E.length-1].data+=b.data,E):(E.push(b),E)},[])}function x(C){for(var E=[],b=0;b<C.length;b++){var w=C[b];switch(w.mode){case t.NUMERIC:E.push([w,{data:w.data,mode:t.ALPHANUMERIC,length:w.length},{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.ALPHANUMERIC:E.push([w,{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.KANJI:E.push([w,{data:w.data,mode:t.BYTE,length:_(w.data)}]);break;case t.BYTE:E.push([{data:w.data,mode:t.BYTE,length:_(w.data)}])}}return E}function B(C,E){for(var b={},w={start:{}},N=["start"],F=0;F<C.length;F++){for(var L=C[F],M=[],z=0;z<L.length;z++){var O=L[z],j=""+F+z;M.push(j),b[j]={node:O,lastCount:0},w[j]={};for(var J=0;J<N.length;J++){var W=N[J];b[W]&&b[W].node.mode===O.mode?(w[W][j]=A(b[W].lastCount+O.length,O.mode)-A(b[W].lastCount,O.mode),b[W].lastCount+=O.length):(b[W]&&(b[W].lastCount=O.length),w[W][j]=A(O.length,O.mode)+4+t.getCharCountIndicator(O.mode,E))}}N=M}for(J=0;J<N.length;J++)w[N[J]].end=0;return{map:w,table:b}}function T(C,E){var b,w=t.getBestModeForData(C);if(b=t.from(E,w),b!==t.BYTE&&b.bit<w.bit)throw new Error('"'+C+'" cannot be encoded with mode '+t.toString(b)+`.
 Suggested mode is: `+t.toString(w));switch(b===t.KANJI&&!c.isKanjiModeEnabled()&&(b=t.BYTE),b){case t.NUMERIC:return new n(C);case t.ALPHANUMERIC:return new i(C);case t.KANJI:return new l(C);case t.BYTE:return new a(C)}}e.fromArray=function(E){return E.reduce(function(b,w){return typeof w=="string"?b.push(T(w,null)):w.data&&b.push(T(w.data,w.mode)),b},[])},e.fromString=function(E,b){for(var w=v(E,c.isKanjiModeEnabled()),N=x(w),F=B(N,b),L=h.find_path(F.map,"start","end"),M=[],z=1;z<L.length-1;z++)M.push(F.table[L[z]].node);return e.fromArray(k(M))},e.rawSplit=function(E){return e.fromArray(v(E,c.isKanjiModeEnabled()))}})(Bn);var Ot=ie,ze=K,Ge=De,Do=mo,Oo=vo,$o=_n,zo=gn,ot=mn,it=Oe,Ho=bo,Ue=En,Wo=Cn,qo=ae,Xe=Bn,Yo=ht;function Vo(e,t){for(var n=e.size,i=zo.getPositions(t),a=0;a<i.length;a++)for(var l=i[a][0],f=i[a][1],c=-1;c<=7;c++)if(!(l+c<=-1||n<=l+c))for(var h=-1;h<=7;h++)f+h<=-1||n<=f+h||(c>=0&&c<=6&&(h===0||h===6)||h>=0&&h<=6&&(c===0||c===6)||c>=2&&c<=4&&h>=2&&h<=4?e.set(l+c,f+h,!0,!0):e.set(l+c,f+h,!1,!0))}function Ko(e){for(var t=e.size,n=8;n<t-8;n++){var i=n%2===0;e.set(n,6,i,!0),e.set(6,n,i,!0)}}function Jo(e,t){for(var n=$o.getPositions(t),i=0;i<n.length;i++)for(var a=n[i][0],l=n[i][1],f=-2;f<=2;f++)for(var c=-2;c<=2;c++)f===-2||f===2||c===-2||c===2||f===0&&c===0?e.set(a+f,l+c,!0,!0):e.set(a+f,l+c,!1,!0)}function Qo(e,t){for(var n=e.size,i=Ue.getEncodedBits(t),a,l,f,c=0;c<18;c++)a=Math.floor(c/3),l=c%3+n-8-3,f=(i>>c&1)===1,e.set(a,l,f,!0),e.set(l,a,f,!0)}function je(e,t,n){var i=e.size,a=Wo.getEncodedBits(t,n),l,f;for(l=0;l<15;l++)f=(a>>l&1)===1,l<6?e.set(l,8,f,!0):l<8?e.set(l+1,8,f,!0):e.set(i-15+l,8,f,!0),l<8?e.set(8,i-l-1,f,!0):l<9?e.set(8,15-l-1+1,f,!0):e.set(8,15-l-1,f,!0);e.set(i-8,8,1,!0)}function Go(e,t){for(var n=e.size,i=-1,a=n-1,l=7,f=0,c=n-1;c>0;c-=2)for(c===6&&c--;;){for(var h=0;h<2;h++)if(!e.isReserved(a,c-h)){var _=!1;f<t.length&&(_=(t[f]>>>l&1)===1),e.set(a,c-h,_),l--,l===-1&&(f++,l=7)}if(a+=i,a<0||n<=a){a-=i,i=-i;break}}}function Xo(e,t,n){var i=new Do;n.forEach(function(_){i.put(_.mode.bit,4),i.put(_.getLength(),qo.getCharCountIndicator(_.mode,e)),_.write(i)});var a=ze.getSymbolTotalCodewords(e),l=it.getTotalCodewordsCount(e,t),f=(a-l)*8;for(i.getLengthInBits()+4<=f&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);for(var c=(f-i.getLengthInBits())/8,h=0;h<c;h++)i.put(h%2?17:236,8);return jo(i,e,t)}function jo(e,t,n){for(var i=ze.getSymbolTotalCodewords(t),a=it.getTotalCodewordsCount(t,n),l=i-a,f=it.getBlocksCount(t,n),c=i%f,h=f-c,_=Math.floor(i/f),d=Math.floor(l/f),v=d+1,A=_-d,k=new Ho(A),x=0,B=new Array(f),T=new Array(f),C=0,E=Ot.from(e.buffer),b=0;b<f;b++){var w=b<h?d:v;B[b]=E.slice(x,x+w),T[b]=k.encode(B[b]),x+=w,C=Math.max(C,w)}var N=Ot.alloc(i),F=0,L,M;for(L=0;L<C;L++)for(M=0;M<f;M++)L<B[M].length&&(N[F++]=B[M][L]);for(L=0;L<A;L++)for(M=0;M<f;M++)N[F++]=T[M][L];return N}function Zo(e,t,n,i){var a;if(Yo(e))a=Xe.fromArray(e);else if(typeof e=="string"){var l=t;if(!l){var f=Xe.rawSplit(e);l=Ue.getBestVersionForData(f,n)}a=Xe.fromString(e,l||40)}else throw new Error("Invalid data");var c=Ue.getBestVersionForData(a,n);if(!c)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=c;else if(t<c)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);var h=Xo(t,n,a),_=ze.getSymbolSize(t),d=new Oo(_);return Vo(d,t),Ko(d),Jo(d,t),je(d,n,0),t>=7&&Qo(d,t),Go(d,h),isNaN(i)&&(i=ot.getBestMask(d,je.bind(null,d,n))),ot.applyMask(i,d),je(d,n,i),{modules:d,version:t,errorCorrectionLevel:n,maskPattern:i,segments:a}}fn.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");var i=Ge.M,a,l;return typeof n<"u"&&(i=Ge.from(n.errorCorrectionLevel,Ge.M),a=Ue.from(n.version),l=ot.from(n.maskPattern),n.toSJISFunc&&ze.setToSJISFunction(n.toSJISFunc)),Zo(t,a,i,l)};var Tn={},mt={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");var i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(l){return[l,l]}))),i.length===6&&i.push("F","F");var a=parseInt(i.join(""),16);return{r:a>>24&255,g:a>>16&255,b:a>>8&255,a:a&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});var a=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,l=i.width&&i.width>=21?i.width:void 0,f=i.scale||4;return{width:l,scale:l?4:f,margin:a,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,a){return a.width&&a.width>=i+a.margin*2?a.width/(i+a.margin*2):a.scale},e.getImageWidth=function(i,a){var l=e.getScale(i,a);return Math.floor((i+a.margin*2)*l)},e.qrToImageData=function(i,a,l){for(var f=a.modules.size,c=a.modules.data,h=e.getScale(f,l),_=Math.floor((f+l.margin*2)*h),d=l.margin*h,v=[l.color.light,l.color.dark],A=0;A<_;A++)for(var k=0;k<_;k++){var x=(A*_+k)*4,B=l.color.light;if(A>=d&&k>=d&&A<_-d&&k<_-d){var T=Math.floor((A-d)/h),C=Math.floor((k-d)/h);B=v[c[T*f+C]?1:0]}i[x++]=B.r,i[x++]=B.g,i[x++]=B.b,i[x]=B.a}}})(mt);(function(e){var t=mt;function n(a,l,f){a.clearRect(0,0,l.width,l.height),l.style||(l.style={}),l.height=f,l.width=f,l.style.height=f+"px",l.style.width=f+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(l,f,c){var h=c,_=f;typeof h>"u"&&(!f||!f.getContext)&&(h=f,f=void 0),f||(_=i()),h=t.getOptions(h);var d=t.getImageWidth(l.modules.size,h),v=_.getContext("2d"),A=v.createImageData(d,d);return t.qrToImageData(A.data,l,h),n(v,_,d),v.putImageData(A,0,0),_},e.renderToDataURL=function(l,f,c){var h=c;typeof h>"u"&&(!f||!f.getContext)&&(h=f,f=void 0),h||(h={});var _=e.render(l,f,h),d=h.type||"image/png",v=h.rendererOpts||{};return _.toDataURL(d,v.quality)}})(Tn);var kn={},ei=mt;function $t(e,t){var n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function Ze(e,t,n){var i=e+t;return typeof n<"u"&&(i+=" "+n),i}function ti(e,t,n){for(var i="",a=0,l=!1,f=0,c=0;c<e.length;c++){var h=Math.floor(c%t),_=Math.floor(c/t);!h&&!l&&(l=!0),e[c]?(f++,c>0&&h>0&&e[c-1]||(i+=l?Ze("M",h+n,.5+_+n):Ze("m",a,0),a=0,l=!1),h+1<t&&e[c+1]||(i+=Ze("h",f),f=0)):a++}return i}kn.render=function(t,n,i){var a=ei.getOptions(n),l=t.modules.size,f=t.modules.data,c=l+a.margin*2,h=a.color.light.a?"<path "+$t(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",_="<path "+$t(a.color.dark,"stroke")+' d="'+ti(f,l,a.margin)+'"/>',d='viewBox="0 0 '+c+" "+c+'"',v=a.width?'width="'+a.width+'" height="'+a.width+'" ':"",A='<svg xmlns="http://www.w3.org/2000/svg" '+v+d+' shape-rendering="crispEdges">'+h+_+`</svg>
`;return typeof i=="function"&&i(null,A),A};var ni=oo,at=fn,Sn=Tn,ri=kn;function vt(e,t,n,i,a){var l=[].slice.call(arguments,1),f=l.length,c=typeof l[f-1]=="function";if(!c&&!ni())throw new Error("Callback required as last argument");if(c){if(f<2)throw new Error("Too few arguments provided");f===2?(a=n,n=t,t=i=void 0):f===3&&(t.getContext&&typeof a>"u"?(a=i,i=void 0):(a=i,i=n,n=t,t=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(n=t,t=i=void 0):f===2&&!t.getContext&&(i=n,n=t,t=void 0),new Promise(function(_,d){try{var v=at.create(n,i);_(e(v,t,i))}catch(A){d(A)}})}try{var h=at.create(n,i);a(null,e(h,t,i))}catch(_){a(_)}}xe.create=at.create;xe.toCanvas=vt.bind(null,Sn.render);xe.toDataURL=vt.bind(null,Sn.renderToDataURL);xe.toString=vt.bind(null,function(e,t,n){return ri.render(e,n)});var oi=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],i=0;i<e.rangeCount;i++)n.push(e.getRangeAt(i));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(a){e.addRange(a)}),t&&t.focus()}},ii=oi,zt={"text/plain":"Text","text/html":"Url",default:"Text"},ai="Copy to clipboard: #{key}, Enter";function li(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function ci(e,t){var n,i,a,l,f,c,h=!1;t||(t={}),n=t.debug||!1;try{a=ii(),l=document.createRange(),f=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(d){if(d.stopPropagation(),t.format)if(d.preventDefault(),typeof d.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var v=zt[t.format]||zt.default;window.clipboardData.setData(v,e)}else d.clipboardData.clearData(),d.clipboardData.setData(t.format,e);t.onCopy&&(d.preventDefault(),t.onCopy(d.clipboardData))}),document.body.appendChild(c),l.selectNodeContents(c),f.addRange(l);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");h=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),h=!0}catch(v){n&&console.error("unable to copy using clipboardData: ",v),n&&console.error("falling back to prompt"),i=li("message"in t?t.message:ai),window.prompt(i,e)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(l):f.removeAllRanges()),c&&document.body.removeChild(c),a()}return h}var ui=ci,S,ve,wt,Nn,Ht,yt,Rn,ee={},He=[],fi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function Z(e,t){for(var n in t)e[n]=t[n];return e}function In(e){var t=e.parentNode;t&&t.removeChild(e)}function te(e,t,n){var i,a=arguments,l={};for(i in t)i!=="key"&&i!=="ref"&&(l[i]=t[i]);if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(a[i]);if(n!=null&&(l.children=n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)l[i]===void 0&&(l[i]=e.defaultProps[i]);return Fe(e,l,t&&t.key,t&&t.ref,null)}function Fe(e,t,n,i,a){var l={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:a};return a==null&&(l.__v=l),S.vnode&&S.vnode(l),l}function Ln(){return{}}function Ae(e){return e.children}function Q(e,t){this.props=e,this.context=t}function be(e,t){if(t==null)return e.__?be(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?be(e):null}function Un(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Un(e)}}function Ie(e){(!e.__d&&(e.__d=!0)&&ve.push(e)&&!wt++||Ht!==S.debounceRendering)&&((Ht=S.debounceRendering)||Nn)(si)}function si(){for(var e;wt=ve.length;)e=ve.sort(function(t,n){return t.__v.__b-n.__v.__b}),ve=[],e.some(function(t){var n,i,a,l,f,c,h;t.__d&&(c=(f=(n=t).__v).__e,(h=n.__P)&&(i=[],(a=Z({},f)).__v=a,l=bt(h,f,a,n.__n,h.ownerSVGElement!==void 0,null,i,c??be(f)),Mn(i,f),l!=c&&Un(f)))})}function Fn(e,t,n,i,a,l,f,c,h){var _,d,v,A,k,x,B,T=n&&n.__k||He,C=T.length;if(c==ee&&(c=l!=null?l[0]:C?be(n,0):null),_=0,t.__k=oe(t.__k,function(E){if(E!=null){if(E.__=t,E.__b=t.__b+1,(v=T[_])===null||v&&E.key==v.key&&E.type===v.type)T[_]=void 0;else for(d=0;d<C;d++){if((v=T[d])&&E.key==v.key&&E.type===v.type){T[d]=void 0;break}v=null}if(A=bt(e,E,v=v||ee,i,a,l,f,c,h),(d=E.ref)&&v.ref!=d&&(B||(B=[]),v.ref&&B.push(v.ref,null,E),B.push(d,E.__c||A,E)),A!=null){var b;if(x==null&&(x=A),E.__d!==void 0)b=E.__d,E.__d=void 0;else if(l==v||A!=c||A.parentNode==null){e:if(c==null||c.parentNode!==e)e.appendChild(A),b=null;else{for(k=c,d=0;(k=k.nextSibling)&&d<C;d+=2)if(k==A)break e;e.insertBefore(A,c),b=c}t.type=="option"&&(e.value="")}c=b!==void 0?b:A.nextSibling,typeof t.type=="function"&&(t.__d=c)}else c&&v.__e==c&&c.parentNode!=e&&(c=be(v))}return _++,E}),t.__e=x,l!=null&&typeof t.type!="function")for(_=l.length;_--;)l[_]!=null&&In(l[_]);for(_=C;_--;)T[_]!=null&&we(T[_],T[_]);if(B)for(_=0;_<B.length;_++)Pn(B[_],B[++_],B[++_])}function oe(e,t,n){if(n==null&&(n=[]),e==null||typeof e=="boolean")t&&n.push(t(null));else if(Array.isArray(e))for(var i=0;i<e.length;i++)oe(e[i],t,n);else n.push(t?t(typeof e=="string"||typeof e=="number"?Fe(null,e,null,null,e):e.__e!=null||e.__c!=null?Fe(e.type,e.props,e.key,null,e.__v):e):e);return n}function hi(e,t,n,i,a){var l;for(l in n)l==="children"||l==="key"||l in t||Me(e,l,null,n[l],i);for(l in t)a&&typeof t[l]!="function"||l==="children"||l==="key"||l==="value"||l==="checked"||n[l]===t[l]||Me(e,l,t[l],n[l],i)}function Wt(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=typeof n=="number"&&fi.test(t)===!1?n+"px":n??""}function Me(e,t,n,i,a){var l,f,c,h,_;if(a?t==="className"&&(t="class"):t==="class"&&(t="className"),t==="style")if(l=e.style,typeof n=="string")l.cssText=n;else{if(typeof i=="string"&&(l.cssText="",i=null),i)for(h in i)n&&h in n||Wt(l,h,"");if(n)for(_ in n)i&&n[_]===i[_]||Wt(l,_,n[_])}else t[0]==="o"&&t[1]==="n"?(f=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(i||e.addEventListener(t,qt,f),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,qt,f)):t!=="list"&&t!=="tagName"&&t!=="form"&&t!=="type"&&t!=="size"&&!a&&t in e?e[t]=n??"":typeof n!="function"&&t!=="dangerouslySetInnerHTML"&&(t!==(t=t.replace(/^xlink:?/,""))?n==null||n===!1?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):n==null||n===!1&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function qt(e){this.l[e.type](S.event?S.event(e):e)}function bt(e,t,n,i,a,l,f,c,h){var _,d,v,A,k,x,B,T,C,E,b=t.type;if(t.constructor!==void 0)return null;(_=S.__b)&&_(t);try{e:if(typeof b=="function"){if(T=t.props,C=(_=b.contextType)&&i[_.__c],E=_?C?C.props.value:_.__:i,n.__c?B=(d=t.__c=n.__c).__=d.__E:("prototype"in b&&b.prototype.render?t.__c=d=new b(T,E):(t.__c=d=new Q(T,E),d.constructor=b,d.render=pi),C&&C.sub(d),d.props=T,d.state||(d.state={}),d.context=E,d.__n=i,v=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),b.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Z({},d.__s)),Z(d.__s,b.getDerivedStateFromProps(T,d.__s))),A=d.props,k=d.state,v)b.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(b.getDerivedStateFromProps==null&&T!==A&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(T,E),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(T,d.__s,E)===!1||t.__v===n.__v&&!d.__){for(d.props=T,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&f.push(d),_=0;_<t.__k.length;_++)t.__k[_]&&(t.__k[_].__=t);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(T,d.__s,E),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(A,k,x)})}d.context=E,d.props=T,d.state=d.__s,(_=S.__r)&&_(t),d.__d=!1,d.__v=t,d.__P=e,_=d.render(d.props,d.state,d.context),t.__k=_!=null&&_.type==Ae&&_.key==null?_.props.children:Array.isArray(_)?_:[_],d.getChildContext!=null&&(i=Z(Z({},i),d.getChildContext())),v||d.getSnapshotBeforeUpdate==null||(x=d.getSnapshotBeforeUpdate(A,k)),Fn(e,t,n,i,a,l,f,c,h),d.base=t.__e,d.__h.length&&f.push(d),B&&(d.__E=d.__=null),d.__e=!1}else l==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=di(n.__e,t,n,i,a,l,f,h);(_=S.diffed)&&_(t)}catch(w){t.__v=null,S.__e(w,t,n)}return t.__e}function Mn(e,t){S.__c&&S.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){S.__e(i,n.__v)}})}function di(e,t,n,i,a,l,f,c){var h,_,d,v,A,k=n.props,x=t.props;if(a=t.type==="svg"||a,l!=null){for(h=0;h<l.length;h++)if((_=l[h])!=null&&((t.type===null?_.nodeType===3:_.localName===t.type)||e==_)){e=_,l[h]=null;break}}if(e==null){if(t.type===null)return document.createTextNode(x);e=a?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,x.is&&{is:x.is}),l=null,c=!1}if(t.type===null)k!==x&&e.data!=x&&(e.data=x);else{if(l!=null&&(l=He.slice.call(e.childNodes)),d=(k=n.props||ee).dangerouslySetInnerHTML,v=x.dangerouslySetInnerHTML,!c){if(k===ee)for(k={},A=0;A<e.attributes.length;A++)k[e.attributes[A].name]=e.attributes[A].value;(v||d)&&(v&&d&&v.__html==d.__html||(e.innerHTML=v&&v.__html||""))}hi(e,x,k,a,c),v?t.__k=[]:(t.__k=t.props.children,Fn(e,t,n,i,t.type!=="foreignObject"&&a,l,f,ee,c)),c||("value"in x&&(h=x.value)!==void 0&&h!==e.value&&Me(e,"value",h,k.value,!1),"checked"in x&&(h=x.checked)!==void 0&&h!==e.checked&&Me(e,"checked",h,k.checked,!1))}return e}function Pn(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){S.__e(i,n)}}function we(e,t,n){var i,a,l;if(S.unmount&&S.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Pn(i,null,t)),n||typeof e.type=="function"||(n=(a=e.__e)!=null),e.__e=e.__d=void 0,(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(f){S.__e(f,t)}i.base=i.__P=null}if(i=e.__k)for(l=0;l<i.length;l++)i[l]&&we(i[l],t,n);a!=null&&In(a)}function pi(e,t,n){return this.constructor(e,n)}function Ee(e,t,n){var i,a,l;S.__&&S.__(e,t),a=(i=n===yt)?null:n&&n.__k||t.__k,e=te(Ae,null,[e]),l=[],bt(t,(i?t:n||t).__k=e,a||ee,ee,t.ownerSVGElement!==void 0,n&&!i?[n]:a?null:He.slice.call(t.childNodes),l,n||ee,i),Mn(l,e)}function Dn(e,t){Ee(e,t,yt)}function _i(e,t){var n,i;for(i in t=Z(Z({},e.props),t),arguments.length>2&&(t.children=He.slice.call(arguments,2)),n={},t)i!=="key"&&i!=="ref"&&(n[i]=t[i]);return Fe(e.type,n,t.key||e.key,t.ref||e.ref,null)}function On(e){var t={},n={__c:"__cC"+Rn++,__:e,Consumer:function(i,a){return i.children(a)},Provider:function(i){var a,l=this;return this.getChildContext||(a=[],this.getChildContext=function(){return t[n.__c]=l,t},this.shouldComponentUpdate=function(f){l.props.value!==f.value&&a.some(function(c){c.context=f.value,Ie(c)})},this.sub=function(f){a.push(f);var c=f.componentWillUnmount;f.componentWillUnmount=function(){a.splice(a.indexOf(f),1),c&&c.call(f)}}),i.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}S={__e:function(e,t){for(var n,i;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&n.constructor.getDerivedStateFromError!=null&&(i=!0,n.setState(n.constructor.getDerivedStateFromError(e))),n.componentDidCatch!=null&&(i=!0,n.componentDidCatch(e)),i)return Ie(n.__E=n)}catch(a){e=a}throw e}},Q.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=Z({},this.state),typeof e=="function"&&(e=e(n,this.props)),e&&Z(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Ie(this))},Q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ie(this))},Q.prototype.render=Ae,ve=[],wt=0,Nn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,yt=ee,Rn=0;var le,V,Yt,_e=0,lt=[],Vt=S.__r,Kt=S.diffed,Jt=S.__c,Qt=S.unmount;function ge(e,t){S.__h&&S.__h(V,e,_e||t),_e=0;var n=V.__H||(V.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Et(e){return _e=1,xt(Vn,e)}function xt(e,t,n){var i=ge(le++,2);return i.__c||(i.__c=V,i.__=[n?n(t):Vn(void 0,t),function(a){var l=e(i.__[0],a);i.__[0]!==l&&(i.__[0]=l,i.__c.setState({}))}]),i.__}function $n(e,t){var n=ge(le++,3);!S.__s&&At(n.__H,t)&&(n.__=e,n.__H=t,V.__H.__h.push(n))}function Ct(e,t){var n=ge(le++,4);!S.__s&&At(n.__H,t)&&(n.__=e,n.__H=t,V.__h.push(n))}function zn(e){return _e=5,We(function(){return{current:e}},[])}function Hn(e,t,n){_e=6,Ct(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function We(e,t){var n=ge(le++,7);return At(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function Wn(e,t){return _e=8,We(function(){return e},t)}function qn(e){var t=V.context[e.__c],n=ge(le++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(V)),t.props.value):e.__}function Yn(e,t){S.useDebugValue&&S.useDebugValue(t?t(e):e)}function gi(e){var t=ge(le++,10),n=Et();return t.__=e,V.componentDidCatch||(V.componentDidCatch=function(i){t.__&&t.__(i),n[1](i)}),[n[0],function(){n[1](void 0)}]}function mi(){lt.some(function(e){if(e.__P)try{e.__H.__h.forEach(ct),e.__H.__h.forEach(ut),e.__H.__h=[]}catch(t){return e.__H.__h=[],S.__e(t,e.__v),!0}}),lt=[]}function ct(e){e.t&&e.t()}function ut(e){var t=e.__();typeof t=="function"&&(e.t=t)}function At(e,t){return!e||t.some(function(n,i){return n!==e[i]})}function Vn(e,t){return typeof t=="function"?t(e):t}S.__r=function(e){Vt&&Vt(e),le=0,(V=e.__c).__H&&(V.__H.__h.forEach(ct),V.__H.__h.forEach(ut),V.__H.__h=[])},S.diffed=function(e){Kt&&Kt(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(lt.push(t)!==1&&Yt===S.requestAnimationFrame||((Yt=S.requestAnimationFrame)||function(i){var a,l=function(){clearTimeout(f),cancelAnimationFrame(a),setTimeout(i)},f=setTimeout(l,100);typeof window<"u"&&(a=requestAnimationFrame(l))})(mi))}},S.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ct),n.__h=n.__h.filter(function(i){return!i.__||ut(i)})}catch(i){t.some(function(a){a.__h&&(a.__h=[])}),t=[],S.__e(i,n.__v)}}),Jt&&Jt(e,t)},S.unmount=function(e){Qt&&Qt(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach(function(i){return i.t&&i.t()})}catch(i){S.__e(i,t.__v)}}};function Bt(e,t){for(var n in t)e[n]=t[n];return e}function ft(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}var Kn=function(e){var t,n;function i(a){var l;return(l=e.call(this,a)||this).isPureReactComponent=!0,l}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.shouldComponentUpdate=function(a,l){return ft(this.props,a)||ft(this.state,l)},i}(Q);function Jn(e,t){function n(a){var l=this.props.ref,f=l==a.ref;return!f&&l&&(l.call?l(null):l.current=null),t?!t(this.props,a)||!f:ft(this.props,a)}function i(a){return this.shouldComponentUpdate=n,te(e,Bt({},a))}return i.prototype.isReactComponent=!0,i.displayName="Memo("+(e.displayName||e.name)+")",i.t=!0,i}var Gt=S.__b;function Qn(e){function t(n){var i=Bt({},n);return delete i.ref,e(i,n.ref)}return t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}S.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Gt&&Gt(e)};var Xt=function(e,t){return e?oe(e).reduce(function(n,i,a){return n.concat(t(i,a))},[]):null},Gn={map:Xt,forEach:Xt,count:function(e){return e?oe(e).length:0},only:function(e){if((e=oe(e)).length!==1)throw new Error("Children.only() expects only one child.");return e[0]},toArray:oe},vi=S.__e;function Xn(e){return e&&((e=Bt({},e)).__c=null,e.__k=e.__k&&e.__k.map(Xn)),e}function Pe(){this.__u=0,this.o=null,this.__b=null}function jn(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function Zn(e){var t,n,i;function a(l){if(t||(t=e()).then(function(f){n=f.default||f},function(f){i=f}),i)throw i;if(!n)throw t;return te(n,l)}return a.displayName="Lazy",a.t=!0,a}function ue(){this.i=null,this.l=null}S.__e=function(e,t,n){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return i.__c(e,t.__c)}vi(e,t,n)},(Pe.prototype=new Q).__c=function(e,t){var n=this;n.o==null&&(n.o=[]),n.o.push(t);var i=jn(n.__v),a=!1,l=function(){a||(a=!0,i?i(f):f())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){l(),t.__c&&t.__c()};var f=function(){var c;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});c=n.o.pop();)c.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(l,l)},Pe.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=Xn(this.__b),this.__b=null),[te(Q,null,t.u?null:e.children),t.u&&e.fallback]};var jt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(ue.prototype=new Q).u=function(e){var t=this,n=jn(t.__v),i=t.l.get(e);return i[0]++,function(a){var l=function(){t.props.revealOrder?(i.push(a),jt(t,e,i)):a()};n?n(l):l()}},ue.prototype.render=function(e){this.i=null,this.l=new Map;var t=oe(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},ue.prototype.componentDidUpdate=ue.prototype.componentDidMount=function(){var e=this;e.l.forEach(function(t,n){jt(e,n,t)})};var wi=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},e}();function yi(e){var t=this,n=e.container,i=te(wi,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.v.parentNode&&t.s.removeChild(t.v),we(t.h),t.p=!1),e.vnode?t.p?(n.__k=t.__k,Ee(i,n),t.__k=n.__k):(t.v=document.createTextNode(""),Dn("",n),n.appendChild(t.v),t.p=!0,t.s=n,Ee(i,n,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),we(t.h)),t.h=i,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),we(t.h)},null}function er(e,t){return te(yi,{vnode:e,container:t})}var Zt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;Q.prototype.isReactComponent={};var tr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103;function st(e,t,n){if(t.__k==null)for(;t.firstChild;)t.removeChild(t.firstChild);return Ee(e,t),typeof n=="function"&&n(),e?e.__c:null}function bi(e,t,n){return Dn(e,t),typeof n=="function"&&n(),e?e.__c:null}var en=S.event;function et(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}S.event=function(e){en&&(e=en(e)),e.persist=function(){};var t=!1,n=!1,i=e.stopPropagation;e.stopPropagation=function(){i.call(e),t=!0};var a=e.preventDefault;return e.preventDefault=function(){a.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var tn={configurable:!0,get:function(){return this.class}},nn=S.vnode;S.vnode=function(e){e.$$typeof=tr;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(tn.enumerable="className"in n,n.className!=null&&(n.class=n.className),Object.defineProperty(n,"className",tn)),typeof t!="function"){var i,a,l;for(l in n.defaultValue&&n.value!==void 0&&(n.value||n.value===0||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&t==="select"&&(oe(n.children).forEach(function(f){n.value.indexOf(f.props.value)!=-1&&(f.props.selected=!0)}),delete n.value),n)if(i=Zt.test(l))break;if(i)for(l in a=e.props={},n)a[Zt.test(l)?l.replace(/[A-Z0-9]/,"-$&").toLowerCase():l]=n[l]}(function(f){var c=e.type,h=e.props;if(h&&typeof c=="string"){var _={};for(var d in h)/^on(Ani|Tra|Tou)/.test(d)&&(h[d.toLowerCase()]=h[d],delete h[d]),_[d.toLowerCase()]=d;if(_.ondoubleclick&&(h.ondblclick=h[_.ondoubleclick],delete h[_.ondoubleclick]),_.onbeforeinput&&(h.onbeforeinput=h[_.onbeforeinput],delete h[_.onbeforeinput]),_.onchange&&(c==="textarea"||c.toLowerCase()==="input"&&!/^fil|che|ra/i.test(h.type))){var v=_.oninput||"oninput";h[v]||(h[v]=h[_.onchange],delete h[_.onchange])}}})(),typeof t=="function"&&!t.m&&t.prototype&&(et(t.prototype,"componentWillMount"),et(t.prototype,"componentWillReceiveProps"),et(t.prototype,"componentWillUpdate"),t.m=!0)}nn&&nn(e)};var Ei="16.8.0";function nr(e){return te.bind(null,e)}function Tt(e){return!!e&&e.$$typeof===tr}function rr(e){return Tt(e)?_i.apply(null,arguments):e}function or(e){return!!e.__k&&(Ee(null,e),!0)}function ir(e){return e&&(e.base||e.nodeType===1&&e)||null}var ar=function(e,t){return e(t)};const xi={useState:Et,useReducer:xt,useEffect:$n,useLayoutEffect:Ct,useRef:zn,useImperativeHandle:Hn,useMemo:We,useCallback:Wn,useContext:qn,useDebugValue:Yn,version:"16.8.0",Children:Gn,render:st,hydrate:st,unmountComponentAtNode:or,createPortal:er,createElement:te,createContext:On,createFactory:nr,cloneElement:rr,createRef:Ln,Fragment:Ae,isValidElement:Tt,findDOMNode:ir,Component:Q,PureComponent:Kn,memo:Jn,forwardRef:Qn,unstable_batchedUpdates:ar,Suspense:Pe,SuspenseList:ue,lazy:Zn},Ci=Object.freeze(Object.defineProperty({__proto__:null,Children:Gn,Component:Q,Fragment:Ae,PureComponent:Kn,Suspense:Pe,SuspenseList:ue,cloneElement:rr,createContext:On,createElement:te,createFactory:nr,createPortal:er,createRef:Ln,default:xi,findDOMNode:ir,forwardRef:Qn,hydrate:bi,isValidElement:Tt,lazy:Zn,memo:Jn,render:st,unmountComponentAtNode:or,unstable_batchedUpdates:ar,useCallback:Wn,useContext:qn,useDebugValue:Yn,useEffect:$n,useErrorBoundary:gi,useImperativeHandle:Hn,useLayoutEffect:Ct,useMemo:We,useReducer:xt,useRef:zn,useState:Et,version:Ei},Symbol.toStringTag,{value:"Module"})),Ai=ln(Ci);function lr(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var q=ro,cr=lr(xe),Bi=lr(ui),y=Ai;function Ti(e){cr.toString(e,{type:"terminal"}).then(console.log)}var ki=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Si(e,t){try{var n=e()}catch(i){return t(i)}return n&&n.then?n.then(void 0,t):n}var Ni="data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",Ri="WalletConnect",Ii=300,Li="rgb(64, 153, 255)",ur="walletconnect-wrapper",rn="walletconnect-style-sheet",fr="walletconnect-qrcode-modal",Ui="walletconnect-qrcode-close",sr="walletconnect-qrcode-text",Fi="walletconnect-connect-button";function Mi(e){return y.createElement("div",{className:"walletconnect-modal__header"},y.createElement("img",{src:Ni,className:"walletconnect-modal__headerLogo"}),y.createElement("p",null,Ri),y.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:e.onClose},y.createElement("div",{id:Ui,className:"walletconnect-modal__close__icon"},y.createElement("div",{className:"walletconnect-modal__close__line1"}),y.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function Pi(e){return y.createElement("a",{className:"walletconnect-connect__button",href:e.href,id:Fi+"-"+e.name,onClick:e.onClick,rel:"noopener noreferrer",style:{backgroundColor:e.color},target:"_blank"},e.name)}var Di="data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";function Oi(e){var t=e.color,n=e.href,i=e.name,a=e.logo,l=e.onClick;return y.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:l,rel:"noopener noreferrer",target:"_blank"},y.createElement("h3",{className:"walletconnect-modal__base__row__h3"},i),y.createElement("div",{className:"walletconnect-modal__base__row__right"},y.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+a+"') "+t,backgroundSize:"100%"}}),y.createElement("img",{src:Di,className:"walletconnect-modal__base__row__right__caret"})))}function $i(e){var t=e.color,n=e.href,i=e.name,a=e.logo,l=e.onClick,f=window.innerWidth<768?(i.length>8?2.5:2.7)+"vw":"inherit";return y.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:l,rel:"noopener noreferrer",target:"_blank"},y.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+a+"') "+t,backgroundSize:"100%"}}),y.createElement("div",{style:{fontSize:f},className:"walletconnect-connect__button__text"},i))}var zi=5,tt=12;function Hi(e){var t=q.isAndroid(),n=y.useState(""),i=n[0],a=n[1],l=y.useState(""),f=l[0],c=l[1],h=y.useState(1),_=h[0],d=h[1],v=f?e.links.filter(function(w){return w.name.toLowerCase().includes(f.toLowerCase())}):e.links,A=e.errorMessage,k=f||v.length>zi,x=Math.ceil(v.length/tt),B=[(_-1)*tt+1,_*tt],T=v.length?v.filter(function(w,N){return N+1>=B[0]&&N+1<=B[1]}):[],C=!t&&x>1,E=void 0;function b(w){a(w.target.value),clearTimeout(E),w.target.value?E=setTimeout(function(){c(w.target.value),d(1)},1e3):(a(""),c(""),d(1))}return y.createElement("div",null,y.createElement("p",{id:sr,className:"walletconnect-qrcode__text"},t?e.text.connect_mobile_wallet:e.text.choose_preferred_wallet),!t&&y.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:i,onChange:b}),y.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(t?"__android":k&&v.length?"__wrap":"")},t?y.createElement(Pi,{name:e.text.connect,color:Li,href:e.uri,onClick:y.useCallback(function(){q.saveMobileLinkInfo({name:"Unknown",href:e.uri})},[])}):T.length?T.map(function(w){var N=w.color,F=w.name,L=w.shortName,M=w.logo,z=q.formatIOSMobile(e.uri,w),O=y.useCallback(function(){q.saveMobileLinkInfo({name:F,href:z})},[T]);return k?y.createElement($i,{color:N,href:z,name:L||F,logo:M,onClick:O}):y.createElement(Oi,{color:N,href:z,name:F,logo:M,onClick:O})}):y.createElement(y.Fragment,null,y.createElement("p",null,A.length?e.errorMessage:e.links.length&&!v.length?e.text.no_wallets_found:e.text.loading))),C&&y.createElement("div",{className:"walletconnect-modal__footer"},Array(x).fill(0).map(function(w,N){var F=N+1,L=_===F;return y.createElement("a",{style:{margin:"auto 10px",fontWeight:L?"bold":"normal"},onClick:function(){return d(F)}},F)})))}function Wi(e){var t=!!e.message.trim();return y.createElement("div",{className:"walletconnect-qrcode__notification"+(t?" notification__show":"")},e.message)}var qi=function(e){try{var t="";return Promise.resolve(cr.toString(e,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(t=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),t})}catch(n){return Promise.reject(n)}};function Yi(e){var t=y.useState(""),n=t[0],i=t[1],a=y.useState(""),l=a[0],f=a[1];y.useEffect(function(){try{return Promise.resolve(qi(e.uri)).then(function(h){f(h)})}catch(h){Promise.reject(h)}},[]);var c=function(){var h=Bi(e.uri);h?(i(e.text.copied_to_clipboard),setInterval(function(){return i("")},1200)):(i("Error"),setInterval(function(){return i("")},1200))};return y.createElement("div",null,y.createElement("p",{id:sr,className:"walletconnect-qrcode__text"},e.text.scan_qrcode_with_wallet),y.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),y.createElement("div",{className:"walletconnect-modal__footer"},y.createElement("a",{onClick:c},e.text.copy_to_clipboard)),y.createElement(Wi,{message:n}))}function Vi(e){var t=q.isAndroid(),n=q.isMobile(),i=n?e.qrcodeModalOptions&&e.qrcodeModalOptions.mobileLinks?e.qrcodeModalOptions.mobileLinks:void 0:e.qrcodeModalOptions&&e.qrcodeModalOptions.desktopLinks?e.qrcodeModalOptions.desktopLinks:void 0,a=y.useState(!1),l=a[0],f=a[1],c=y.useState(!1),h=c[0],_=c[1],d=y.useState(!n),v=d[0],A=d[1],k={mobile:n,text:e.text,uri:e.uri,qrcodeModalOptions:e.qrcodeModalOptions},x=y.useState(""),B=x[0],T=x[1],C=y.useState(!1),E=C[0],b=C[1],w=y.useState([]),N=w[0],F=w[1],L=y.useState(""),M=L[0],z=L[1],O=function(){h||l||i&&!i.length||N.length>0||y.useEffect(function(){var J=function(){try{if(t)return Promise.resolve();f(!0);var W=Si(function(){var ne=e.qrcodeModalOptions&&e.qrcodeModalOptions.registryUrl?e.qrcodeModalOptions.registryUrl:q.getWalletRegistryUrl();return Promise.resolve(fetch(ne)).then(function(Be){return Promise.resolve(Be.json()).then(function(qe){var Ye=qe.listings,Ve=n?"mobile":"desktop",ce=q.getMobileLinkRegistry(q.formatMobileRegistry(Ye,Ve),i);f(!1),_(!0),z(ce.length?"":e.text.no_supported_wallets),F(ce);var Te=ce.length===1;Te&&(T(q.formatIOSMobile(e.uri,ce[0])),A(!0)),b(Te)})})},function(ne){f(!1),_(!0),z(e.text.something_went_wrong),console.error(ne)});return Promise.resolve(W&&W.then?W.then(function(){}):void 0)}catch(ne){return Promise.reject(ne)}};J()})};O();var j=n?v:!v;return y.createElement("div",{id:fr,className:"walletconnect-qrcode__base animated fadeIn"},y.createElement("div",{className:"walletconnect-modal__base"},y.createElement(Mi,{onClose:e.onClose}),E&&v?y.createElement("div",{className:"walletconnect-modal__single_wallet"},y.createElement("a",{onClick:function(){return q.saveMobileLinkInfo({name:N[0].name,href:B})},href:B,rel:"noopener noreferrer",target:"_blank"},e.text.connect_with+" "+(E?N[0].name:"")+" ›")):t||l||!l&&N.length?y.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(j?" right__selected":"")},y.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?y.createElement(y.Fragment,null,y.createElement("a",{onClick:function(){return A(!1),O()}},e.text.mobile),y.createElement("a",{onClick:function(){return A(!0)}},e.text.qrcode)):y.createElement(y.Fragment,null,y.createElement("a",{onClick:function(){return A(!0)}},e.text.qrcode),y.createElement("a",{onClick:function(){return A(!1),O()}},e.text.desktop))):null,y.createElement("div",null,v||!t&&!l&&!N.length?y.createElement(Yi,Object.assign({},k)):y.createElement(Hi,Object.assign({},k,{links:N,errorMessage:M})))))}var Ki={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},Ji={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},Qi={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Gi={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Xi={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},ji={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},Zi={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},ea={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},on={de:Ki,en:Ji,es:Qi,fr:Gi,ko:Xi,pt:ji,zh:Zi,fa:ea};function ta(){var e=q.getDocumentOrThrow(),t=e.getElementById(rn);t&&e.head.removeChild(t);var n=e.createElement("style");n.setAttribute("id",rn),n.innerText=ki,e.head.appendChild(n)}function na(){var e=q.getDocumentOrThrow(),t=e.createElement("div");return t.setAttribute("id",ur),e.body.appendChild(t),t}function hr(){var e=q.getDocumentOrThrow(),t=e.getElementById(fr);t&&(t.className=t.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=e.getElementById(ur);n&&e.body.removeChild(n)},Ii))}function ra(e){return function(){hr(),e&&e()}}function oa(){var e=q.getNavigatorOrThrow().language.split("-")[0]||"en";return on[e]||on.en}function ia(e,t,n){ta();var i=na();y.render(y.createElement(Vi,{text:oa(),uri:e,onClose:ra(t),qrcodeModalOptions:n}),i)}function aa(){hr()}var dr=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function la(e,t,n){console.log(e),dr()?Ti(e):ia(e,t,n)}function ca(){dr()||aa()}var ua={open:la,close:ca},an=ua;const pa=jr({__proto__:null,default:an},[an]);export{pa as i};
