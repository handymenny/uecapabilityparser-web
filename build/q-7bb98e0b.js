import{r as W,G as v,a as U,U as V,B as d,c as D,_ as q,W as L,O as x,$ as M,M as Q}from"./q-2ac6577d.js";const F='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',lt=d("qc-s"),ft=d("qc-c"),ht=d("qc-ic"),H=d("qc-h"),K=d("qc-l"),G=d("qc-n"),ut=d("qc-a"),dt=d("qc-ir"),gt=D(()=>q(()=>import("./q-663033b0.js"),[]),"s_DyVc0YBIqQU"),yt=()=>{},pt=x(D(()=>q(()=>import("./q-7e91d812.js"),["build/q-7e91d812.js","build/q-2ac6577d.js"]),"s_e0ssiDXoeAM")),R=new WeakMap,m=new Map,Y="qaction",Ct=(t,e,s,n)=>{const r=z(),a={head:r,withLocale:o=>L(n,o),resolveValue:o=>{const i=o.__id;if(o.__brand==="server_loader"&&!(i in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=t.loaders[i];if(l instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return l},...e};for(let o=s.length-1;o>=0;o--){const i=s[o]&&s[o].head;i&&(typeof i=="function"?I(r,L(n,()=>i(a))):typeof i=="object"&&I(r,i))}return a.head},I=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),E(t.meta,e.meta),E(t.links,e.links),E(t.styles,e.styles),E(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},E=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(r=>r.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},z=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function $(t,e){const s={};let n=k(t);const r=O(t);let c=k(e);const a=O(e);for(;n<r;){const o=t.charCodeAt(n++),i=e.charCodeAt(c++);if(o===91){const l=B(t,n),h=n+(l?3:0),u=w(t,h,r,93),g=t.substring(h,u),f=w(t,u+1,r,47),y=t.substring(u+1,f);n=u+1;const C=c-1,S=w(e,C,a,l?0:47,y);if(S==-1)return null;const T=e.substring(C,S);if(!l&&!y&&!T)return null;c=S,s[g]=decodeURIComponent(T)}else if(o!==i&&!(isNaN(i)&&J(t,n)))return null}return P(t,n)&&P(e,c)?s:null}function J(t,e){return t.charCodeAt(e)===91&&B(t,e+1)}function O(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function P(t,e){const s=t.length;return e>=s||e==s-1&&t.charCodeAt(e)===47}function k(t){return t.charCodeAt(0)===47?1:0}function B(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function w(t,e,s,n,r=""){for(;e<s&&t.charCodeAt(e)!==n;)e++;const c=r.length;for(let a=0;a<c;a++)if(t.charCodeAt(e-c+a)!==r.charCodeAt(a))return-1;return e-c}let N;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(N||(N={}));const mt=async(t,e,s,n)=>{if(Array.isArray(t))for(const r of t){const c=r[0],a=$(c,n);if(a){const o=r[1],i=r[3],l=new Array(o.length),h=[],u=X(e,n);let g;return o.forEach((f,y)=>{b(f,h,C=>l[y]=C,s)}),b(u,h,f=>g=f==null?void 0:f.default,s),h.length>0&&await Promise.all(h),[c,a,l,g,i]}}return null},b=(t,e,s,n)=>{if(typeof t=="function"){const r=R.get(t);if(r)s(r);else{const c=t();typeof c.then=="function"?e.push(c.then(a=>{n!==!1&&R.set(t,a),s(a)})):c&&s(c)}}},X=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},_=t=>t.pathname+t.search+t.hash,p=(t,e)=>new URL(t,e.href),Z=(t,e)=>t.origin===e.origin,j=(t,e)=>t.pathname+t.search===e.pathname+e.search,tt=(t,e)=>t.pathname===e.pathname,et=(t,e)=>t.search===e.search,nt=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+Y+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},Et=(t,e)=>{const s=t.href;if(typeof s=="string"&&typeof t.target!="string"&&!t.reload)try{const n=p(s.trim(),e.url),r=p("",e.url);if(Z(n,r))return _(n)}catch(n){console.error(n)}else if(t.reload)return _(p("",e.url));return null},_t=(t,e,s)=>{if(t.prefetch===!0&&e){const n=p(e,s.url),r=p("",s.url);if(!tt(n,r)||!et(n,r))return""}return null},St=(t,e,s,n,r=!1)=>{if(e!=="popstate"){const c=j(s,n),a=s.hash===n.hash;if(!c||!a){const o={_qCityScroll:st()};r?t.history.replaceState(o,"",_(n)):t.history.pushState(o,"",_(n))}}},st=()=>({x:0,y:0,w:0,h:0}),rt=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},ot=async(t,e,s,n)=>{const r=t.pathname,c=t.search,a=nt(r,c,n);let o;if(n||(o=m.get(a)),rt({links:[r]}),!o){const i=at(n);n&&(n.data=void 0),o=fetch(a,i).then(l=>{const h=new URL(l.url),u=h.pathname.endsWith("/q-data.json");if(h.origin!==location.origin||!u){location.href=h.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(g=>{const f=W(g,e);if(!f){location.href=t.href;return}if(s&&m.delete(a),f.redirect)location.href=f.redirect;else if(n){const y=f.loaders[n.id];n.resolve({status:l.status,result:y})}return f});location.href=t.href}),n||m.set(a,o)}return o.then(i=>(i||m.delete(a),i))},at=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},wt=()=>v(H),At=()=>v(K),vt=()=>v(G),Dt=()=>U(V("qwikcity")),qt=(t,e,s,n)=>{t==="popstate"&&n?window.scrollTo(n.x,n.y):t==="link"&&(ct(e,s)||window.scrollTo(0,0))},ct=(t,e)=>{const s=t.hash.slice(1),n=s&&document.getElementById(s);return n?(n.scrollIntoView(),!0):!!(!n&&t.hash&&j(t,e))},Tt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),Lt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},Rt=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},It=x(D(()=>q(()=>import("./q-ece8d479.js"),["build/q-ece8d479.js","build/q-2ac6577d.js"]),"s_TxCFOy819ag"));function Ot(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const Pt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(A||(A=innerWidth),(!e||e&&A<520)&&ot(new URL(t.href),t))};let A=0;const kt=t=>M("script",{nonce:Q(t,"nonce")},{dangerouslySetInnerHTML:F},null,3,"1Z_0"),Nt=async function*(t,e,s){const n=t.getReader();try{let r="";const c=new TextDecoder;for(;!(s!=null&&s.aborted);){const a=await n.read();if(a.done)break;r+=c.decode(a.value,{stream:!0});const o=r.split(/\n/);r=o.pop();for(const i of o)yield await W(i,e)}}finally{n.releaseLock()}};export{wt as A,yt as B,ft as C,H as D,pt as E,Nt as F,Pt as G,It as Q,K as R,kt as S,At as a,_t as b,z as c,ht as d,G as e,lt as f,Et as g,ut as h,dt as i,Z as j,j as k,Lt as l,ot as m,mt as n,tt as o,Ct as p,m as q,qt as r,Rt as s,p as t,vt as u,Tt as v,gt as w,St as x,Ot as y,Dt as z};
