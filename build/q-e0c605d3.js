import{k as b,Y as q,K as U,O as Q,Q as u,n as w,o as T,s as S,_ as I,f as j,M as F}from"./q-56243b0d.js";const H='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',st=u("qc-s"),ot=u("qc-c"),rt=u("qc-ic"),N=u("qc-h"),M=u("qc-l"),Y=u("qc-n"),at=u("qc-a"),it=`(function(){
  const l=location,c=l.pathname+l.search,t="_qCityPopstateFallback",o="_qCityHistory";window[t]||(window[t]=()=>{window[o]||c===(l.pathname+l.search)||l.reload()},setTimeout(()=>{addEventListener("popstate",window[t])},0))
})();
`,ct=T(S(()=>I(()=>import("./q-bc076164.js"),["build/q-bc076164.js","build/q-56243b0d.js"]),"s_e0ssiDXoeAM")),D=new WeakMap,p=new Map,J="qaction",g=t=>t.pathname+t.search+t.hash,y=(t,e)=>new URL(t,e.href),A=(t,e)=>t.origin===e.origin,x=(t,e)=>t.pathname+t.search===e.pathname+e.search,K=(t,e)=>t.pathname===e.pathname,k=(t,e)=>A(t,e)&&!x(t,e),V=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+J+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},ft=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=y(s,e.url),o=y("",e.url);if(A(n,o))return g(n)}catch(n){console.error(n)}else if(t.reload)return g(y("",e.url));return null},lt=(t,e,s)=>{if(t.prefetch===!0&&e){const n=y(e,s.url);if(!K(n,y("",s.url)))return""}return null},ht=(t,e,s)=>{const n=t.location;k(n,e)&&(P(t,n,e),t.history.pushState("","",g(e))),t._qCityHistory||(t._qCityHistory=1,t.addEventListener("popstate",()=>{const o=t.location,r=y(s.value,o);k(o,r)&&(P(t,r,o),s.value=g(new URL(o.href)))}),t.removeEventListener("popstate",t._qCityPopstateFallback))},P=async(t,e,s)=>{const n=t.document,o=s.hash;if(x(e,s))e.hash!==o&&(await v(),o?E(n,o):t.scrollTo(0,0));else if(o)for(let r=0;r<24&&(await v(),!E(n,o));r++);else await v(),t.scrollTo(0,0)},v=()=>new Promise(t=>setTimeout(t,12)),E=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},B=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},dt=(t,e,s,n)=>{const o=z(),i={head:o,withLocale:a=>w(n,a),resolveValue:a=>{const c=a.__id;if(a.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const f=t.loaders[c];if(f instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return f},...e};for(let a=s.length-1;a>=0;a--){const c=s[a]&&s[a].head;c&&(typeof c=="function"?L(o,w(n,()=>c(i))):typeof c=="object"&&L(o,c))}return i.head},L=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),C(t.meta,e.meta),C(t.links,e.links),C(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},C=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},z=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),ut=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const r=o[0].exec(n);if(r){const i=o[1],a=Z(o[2],r),c=o[4],f=new Array(i.length),l=[],m=X(e,n);let h;return i.forEach((d,O)=>{R(d,l,W=>f[O]=W,s)}),R(m,l,d=>h=d==null?void 0:d.default,s),l.length>0&&await Promise.all(l),[a,f,h,c]}}return null},R=(t,e,s,n)=>{if(typeof t=="function"){const o=D.get(t);if(o)s(o);else{const r=t();typeof r.then=="function"?e.push(r.then(i=>{n!==!1&&D.set(t,i),s(i)})):r&&s(r)}}},X=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},Z=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++){const o=(e==null?void 0:e[n+1])??"",r=o.endsWith("/")?o.slice(0,-1):o;s[t[n]]=decodeURIComponent(r)}return s},G=async(t,e,s,n)=>{const o=t.pathname,r=t.search,i=V(o,r,n);let a;if(n||(a=p.get(i)),B({links:[o]}),!a){const c=$(n);n&&(n.data=void 0),a=fetch(i,c).then(f=>{const l=new URL(f.url);if(l.origin!==location.origin||!tt(l.pathname)){location.href=l.href;return}if((f.headers.get("content-type")||"").includes("json"))return f.text().then(m=>{const h=b(m,e);if(!h){location.href=t.href;return}if(s&&p.delete(i),h.redirect)location.href=h.redirect;else if(n){const d=h.loaders[n.id];n.resolve({status:f.status,result:d})}return h});location.href=t.href}),n||p.set(i,a)}return a.then(c=>(c||p.delete(i),c))},$=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},tt=t=>t.endsWith(et),et="/q-data.json",yt=()=>q(N),pt=()=>q(M),gt=()=>q(Y),mt=()=>U(Q("qwikcity")),vt=T(S(()=>I(()=>import("./q-16f9e146.js"),["build/q-16f9e146.js","build/q-56243b0d.js"]),"s_TxCFOy819ag")),Ct=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(_||(_=innerWidth),(!e||e&&_<520)&&G(new URL(t.href),t))};let _=0;const _t=t=>j("script",{nonce:F(t,"nonce")},{dangerouslySetInnerHTML:H},null,3,"1Z_0"),qt=async function*(t,e,s){const n=t.getReader();try{let o="";const r=new TextDecoder;for(;!(s!=null&&s.aborted);){const i=await n.read();if(i.done)break;o+=r.decode(i.value,{stream:!0});const a=o.split(/\n/);o=a.pop();for(const c of a)yield await b(c,e)}}finally{n.releaseLock()}};export{ot as C,N as D,vt as Q,M as R,_t as S,pt as a,lt as b,z as c,rt as d,Y as e,st as f,ft as g,ut as h,p as i,ht as j,mt as k,G as l,at as m,yt as n,it as o,Ct as p,ct as q,dt as r,qt as s,g as t,gt as u};
