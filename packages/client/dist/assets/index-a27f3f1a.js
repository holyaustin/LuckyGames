import{b as ge,cZ as me}from"./index-c5357a29.js";const we=Symbol(),se=Object.getPrototypeOf,Y=new WeakMap,be=e=>e&&(Y.has(e)?Y.get(e):se(e)===Object.prototype||se(e)===Array.prototype),Ie=e=>be(e)&&e[we]||null,ne=(e,t=!0)=>{Y.set(e,t)},Z=e=>typeof e=="object"&&e!==null,_=new WeakMap,z=new WeakSet,ve=(e=Object.is,t=(n,w)=>new Proxy(n,w),s=n=>Z(n)&&!z.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),a=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},o=new WeakMap,c=(n,w,v=a)=>{const E=o.get(n);if(E?.[0]===w)return E[1];const A=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return ne(A,!0),o.set(n,[w,A]),Reflect.ownKeys(n).forEach(k=>{if(Object.getOwnPropertyDescriptor(A,k))return;const S=Reflect.get(n,k),N={value:S,enumerable:!0,configurable:!0};if(z.has(S))ne(S,!1);else if(S instanceof Promise)delete N.value,N.get=()=>v(S);else if(_.has(S)){const[C,G]=_.get(S);N.value=c(C,G(),v)}Object.defineProperty(A,k,N)}),A},u=new WeakMap,f=[1,1],I=n=>{if(!Z(n))throw new Error("object required");const w=u.get(n);if(w)return w;let v=f[0];const E=new Set,A=(l,i=++f[0])=>{v!==i&&(v=i,E.forEach(r=>r(l,i)))};let k=f[1];const S=(l=++f[1])=>(k!==l&&!E.size&&(k=l,C.forEach(([i])=>{const r=i[1](l);r>v&&(v=r)})),v),N=l=>(i,r)=>{const y=[...i];y[1]=[l,...y[1]],A(y,r)},C=new Map,G=(l,i)=>{if(({VITE_CHAIN_ID:"31337",VITE_CHAIN_ID3:"4242",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&C.has(l))throw new Error("prop listener already exists");if(E.size){const r=i[3](N(l));C.set(l,[i,r])}else C.set(l,[i])},te=l=>{var i;const r=C.get(l);r&&(C.delete(l),(i=r[1])==null||i.call(r))},pe=l=>(E.add(l),E.size===1&&C.forEach(([r,y],T)=>{if(({VITE_CHAIN_ID:"31337",VITE_CHAIN_ID3:"4242",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&y)throw new Error("remove already exists");const $=r[3](N(T));C.set(T,[r,$])}),()=>{E.delete(l),E.size===0&&C.forEach(([r,y],T)=>{y&&(y(),C.set(T,[r]))})}),q=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),x=t(q,{deleteProperty(l,i){const r=Reflect.get(l,i);te(i);const y=Reflect.deleteProperty(l,i);return y&&A(["delete",[i],r]),y},set(l,i,r,y){const T=Reflect.has(l,i),$=Reflect.get(l,i,y);if(T&&(e($,r)||u.has(r)&&e($,u.get(r))))return!0;te(i),Z(r)&&(r=Ie(r)||r);let K=r;if(r instanceof Promise)r.then(D=>{r.status="fulfilled",r.value=D,A(["resolve",[i],D])}).catch(D=>{r.status="rejected",r.reason=D,A(["reject",[i],D])});else{!_.has(r)&&s(r)&&(K=I(r));const D=!z.has(K)&&_.get(K);D&&G(i,D)}return Reflect.set(l,i,K,y),A(["set",[i],r,$]),!0}});u.set(n,x);const he=[q,S,c,pe];return _.set(x,he),Reflect.ownKeys(n).forEach(l=>{const i=Object.getOwnPropertyDescriptor(n,l);"value"in i&&(x[l]=n[l],delete i.value,delete i.writable),Object.defineProperty(q,l,i)}),x})=>[I,_,z,e,t,s,a,o,c,u,f],[ye]=ve();function O(e={}){return ye(e)}function j(e,t,s){const a=_.get(e);({VITE_CHAIN_ID:"31337",VITE_CHAIN_ID3:"4242",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!a&&console.warn("Please use proxy object");let o;const c=[],u=a[3];let f=!1;const n=u(w=>{if(c.push(w),s){t(c.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,n()}}function Ee(e,t){const s=_.get(e);({VITE_CHAIN_ID:"31337",VITE_CHAIN_ID3:"4242",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!s&&console.warn("Please use proxy object");const[a,o,c]=s;return c(a,o(),t)}let Q;const W={ethereumClient:void 0,setEthereumClient(e){Q=e},client(){if(Q)return Q;throw new Error("ClientCtrl has no client set")}},p=O({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),R={state:p,subscribe(e){return j(p,()=>e(p))},push(e,t){e!==p.view&&(p.view=e,t&&(p.data=t),p.history.push(e))},reset(e){p.view=e,p.history=[e]},replace(e){p.history.length>1&&(p.history[p.history.length-1]=e,p.view=e)},goBack(){if(p.history.length>1){p.history.pop();const[e]=p.history.slice(-1);p.view=e}},setData(e){p.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}/wc?uri=${o}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(m.W3M_VERSION,"2.4.1")},getWalletRouterData(){var e;const t=(e=R.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=(e=R.state.data)==null?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag(){return typeof location<"u"?new URLSearchParams(location.search).has(m.W3M_PREFER_INJECTED_URL_FLAG):!1}},Ce=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),b=O({enabled:Ce,userSessionId:"",events:[],connectedWalletId:void 0}),Le={state:b,subscribe(e){return j(b.events,()=>e(Ee(b.events[b.events.length-1])))},initialize(){b.enabled&&typeof crypto<"u"&&(b.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){b.connectedWalletId=e},click(e){if(b.enabled){const t={type:"CLICK",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}},track(e){if(b.enabled){const t={type:"TRACK",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}},view(e){if(b.enabled){const t={type:"VIEW",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}}},g=O({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),h={state:g,subscribe(e){return j(g,()=>e(g))},setChains(e){g.chains=e},setStandaloneChains(e){g.standaloneChains=e},setStandaloneUri(e){g.standaloneUri=e},getSelectedChain(){const e=W.client().getNetwork().chain;return e&&(g.selectedChain=e),g.selectedChain},setSelectedChain(e){g.selectedChain=e},setIsStandalone(e){g.isStandalone=e},setIsCustomDesktop(e){g.isCustomDesktop=e},setIsCustomMobile(e){g.isCustomMobile=e},setIsDataLoaded(e){g.isDataLoaded=e},setIsUiLoaded(e){g.isUiLoaded=e},setWalletConnectVersion(e){g.walletConnectVersion=e},setIsPreferInjected(e){g.isPreferInjected=e},setIsAuth(e){g.isAuth=e}},F=O({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),M={state:F,subscribe(e){return j(F,()=>e(F))},setConfig(e){var t,s,a,o;Le.initialize(),h.setStandaloneChains(e.standaloneChains),h.setIsStandalone(!!((t=e.standaloneChains)!=null&&t.length)||!!e.enableStandaloneMode),h.setIsAuth(!!e.enableAuthMode),h.setIsCustomMobile(!!((s=e.mobileWallets)!=null&&s.length)),h.setIsCustomDesktop(!!((a=e.desktopWallets)!=null&&a.length)),h.setWalletConnectVersion((o=e.walletConnectVersion)!=null?o:1),h.state.isStandalone||(h.setChains(W.client().chains),h.setIsPreferInjected(W.client().isInjectedProviderInstalled()&&m.isPreferInjectedFlag())),e.defaultChain&&h.setSelectedChain(e.defaultChain),m.setWeb3ModalVersionInStorage(),Object.assign(F,e)}},d=O({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),Ae={state:d,subscribe(e){return j(d,()=>e(d))},getAccount(){const e=W.client().getAccount();d.address=e.address,d.isConnected=e.isConnected},async fetchProfile(e,t){var s;try{d.profileLoading=!0;const a=t??d.address,o=(s=h.state.chains)==null?void 0:s.find(c=>c.id===1);if(a&&o){const c=await W.client().fetchEnsName({address:a,chainId:1});if(c){const u=await W.client().fetchEnsAvatar({name:c,chainId:1});u&&await e(u),d.profileAvatar=u}d.profileName=c}}finally{d.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=W.client().getNetwork(),{tokenContracts:s}=M.state;let a;t&&s&&(a=s[t.id]),d.balanceLoading=!0;const o=e??d.address;if(o){const c=await W.client().fetchBalance({address:o,token:a});d.balance={amount:c.formatted,symbol:c.symbol}}}finally{d.balanceLoading=!1}},setAddress(e){d.address=e},setIsConnected(e){d.isConnected=e},resetBalance(){d.balance=void 0},resetAccount(){d.address=void 0,d.isConnected=!1,d.profileName=void 0,d.profileAvatar=void 0,d.balance=void 0}},ee="https://explorer-api.walletconnect.com";async function J(e,t){const s=new URL(e,ee);return s.searchParams.append("projectId",M.state.projectId),Object.entries(t).forEach(([a,o])=>{o&&s.searchParams.append(a,String(o))}),(await fetch(s)).json()}const P={async getDesktopListings(e){return J("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return J("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return J("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return J("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${ee}/w3m/v1/getWalletImage/${e}?projectId=${M.state.projectId}`},getAssetImageUrl(e){return`${ee}/w3m/v1/getAssetImage/${e}?projectId=${M.state.projectId}`}};var Oe=Object.defineProperty,ae=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,je=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&re(e,s,t[s]);if(ae)for(var s of ae(t))We.call(t,s)&&re(e,s,t[s]);return e};const oe=m.isMobile(),L=O({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),He={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=M.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(m.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await P.getAllListings(s),o=Object.values(a);o.sort((c,u)=>{const f=e.indexOf(c.id),I=e.indexOf(u.id);return f-I}),L.recomendedWallets=o}else{const{standaloneChains:s,walletConnectVersion:a,isAuth:o}=h.state,c=s?.join(","),u=m.isArray(t),f={page:1,sdks:o?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:c,version:a,excludedIds:u?t.join(","):void 0},{listings:I}=oe?await P.getMobileListings(f):await P.getDesktopListings(f);L.recomendedWallets=Object.values(I)}return L.recomendedWallets},async getWallets(e){const t=je({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=M.state,{recomendedWallets:o}=L;if(a==="ALL")return L.wallets;t.search||(o.length?t.excludedIds=o.map(v=>v.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(","))),m.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),h.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:u}=e,{listings:f,total:I}=oe?await P.getMobileListings(t):await P.getDesktopListings(t),n=Object.values(f),w=u?"search":"wallets";return L[w]={listings:[...L[w].listings,...n],total:I,page:c??1},{listings:n,total:I}},async getInjectedWallets(){const{listings:e}=await P.getInjectedListings({}),t=Object.values(e);return L.injectedWallets=t,L.injectedWallets},getWalletImageUrl(e){return P.getWalletImageUrl(e)},getAssetImageUrl(e){return P.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},B=O({pairingUri:"",pairingError:!1}),ie={state:B,subscribe(e){return j(B,()=>e(B))},setPairingUri(e){B.pairingUri=e},setPairingError(e){B.pairingError=e}},V=O({open:!1}),X={state:V,subscribe(e){return j(V,()=>e(V))},async open(e){return new Promise(t=>{const{isStandalone:s,isUiLoaded:a,isDataLoaded:o,isPreferInjected:c,selectedChain:u}=h.state,{pairingUri:f}=ie.state,{isConnected:I}=Ae.state,{enableNetworkView:n}=M.state;if(s)h.setStandaloneUri(e?.uri),h.setStandaloneChains(e?.standaloneChains),R.reset("ConnectWallet");else if(e!=null&&e.route)R.reset(e.route);else if(I)R.reset("Account");else if(n)R.reset("SelectNetwork");else if(c){W.client().connectConnector("injected",u?.id).catch(w=>console.error(w)),t();return}else R.reset("ConnectWallet");if(a&&o&&(s||f||I))V.open=!0,t();else{const w=setInterval(()=>{const v=h.state,E=ie.state;v.isUiLoaded&&v.isDataLoaded&&(v.isStandalone||E.pairingUri||I)&&(clearInterval(w),V.open=!0,t())},200)}})},close(){V.open=!1}};var De=Object.defineProperty,le=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,ce=(e,t,s)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Me=(e,t)=>{for(var s in t||(t={}))Pe.call(t,s)&&ce(e,s,t[s]);if(le)for(var s of le(t))_e.call(t,s)&&ce(e,s,t[s]);return e};function Ne(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const H=O({themeMode:Ne()?"dark":"light"}),de={state:H,subscribe(e){return j(H,()=>e(H))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(H.themeMode=t),s&&(H.themeVariables=Me({},s))}},U=O({open:!1,message:"",variant:"success"}),xe={state:U,subscribe(e){return j(U,()=>e(U))},openToast(e,t){U.open=!0,U.message=e,U.variant=t},closeToast(){U.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=ge.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));var Ue=Object.defineProperty,ue=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,fe=(e,t,s)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Te=(e,t)=>{for(var s in t||(t={}))Re.call(t,s)&&fe(e,s,t[s]);if(ue)for(var s of ue(t))ke.call(t,s)&&fe(e,s,t[s]);return e};class Ve{constructor(t){this.openModal=X.open,this.closeModal=X.close,this.subscribeModal=X.subscribe,this.setTheme=de.setThemeConfig,de.setThemeConfig(t),M.setConfig(Te({enableStandaloneMode:!0},t)),this.initUi()}async initUi(){if(typeof window<"u"){await me(()=>import("./index-049b6d26.js"),["assets/index-049b6d26.js","assets/dijkstra-59d11638.js","assets/index-c5357a29.js","assets/index-3f5fd65c.css"]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),h.setIsUiLoaded(!0)}}}const Ke=Object.freeze(Object.defineProperty({__proto__:null,Web3Modal:Ve},Symbol.toStringTag,{value:"Module"}));export{W as C,Le as H,Ae as K,ie as _,de as a,R as b,m as c,h as d,Ke as i,He as n,xe as o,X as s,M as y};
