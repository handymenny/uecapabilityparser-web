import{g as x,c as N,q as E,C as Z,r as j,M as Q,O as ee,K as re,d as V,l as R,j as M,k as te,L as ae,y as A}from"./q-PXVB0oKg.js";import{_ as L}from"./q-Biq04Hab.js";import{p as ne}from"./q-B6C_nNye.js";const se=e=>{const[u,s,_]=x(),h=e.scrollingElement;if(h==null)return!1;const i={scrollHeigth:h.scrollHeight,clientHeigth:h.clientHeight,clientWidth:h.clientWidth};return i==_.value?!1:(h.clientHeight+h.scrollTop)/h.scrollHeight>.85&&u.value<s.data.length?(_.value=i,u.value=Math.min(s.data.length,u.value+60),!0):!1},le=Object.freeze(Object.defineProperty({__proto__:null,_hW:A,s_BBjAj0b80xY:se},Symbol.toStringTag,{value:"Module"}));function ue(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H={},C={};(function(e){e.__esModule=!0,e.default=h;var u=/[\u0300-\u036f]/g,s=/ł/g,_=/ñ/g;function h(i){return i.toLowerCase().normalize("NFD").replace(u,"").replace(s,"l").replace(_,"n").trim()}})(C);var z={},k;function B(){if(k)return z;k=1,z.__esModule=!0,z.aggressiveFuzzyMatch=I,z.createFuzzySearchImpl=G,z.experimentalSmartFuzzyMatch=D,z.fuzzyMatchImpl=J;var e=u(C);function u(t){return t&&t.__esModule?t:{default:t}}var s=Number.MAX_SAFE_INTEGER,_=function(r,o){return r.score-o.score},h=function(r,o){return r[0]-o[0]},i=new Set(`  []()-–—'"“”`.split(""));function y(t){return i.has(t)}function d(t,r,o,g,a,f,l){if(t===g)return[0,[[0,t.length-1]]];var n=g.length,c=r.length,v=a.length;if(r===a)return[.1,[[0,c-1]]];if(r.startsWith(a))return[.5,[[0,v-1]]];var m=t.indexOf(g);if(m>-1&&y(t[m-1]))return[.9,[[m,m+n-1]]];var p=r.indexOf(a);if(p>-1&&y(r[p-1]))return[1,[[p,p+n-1]]];var S=f.length;if(S>1&&f.every(function(T){return o.has(T)})){var b=1.5+S*.2;return[b,f.map(function(T){var O=r.indexOf(T);return[O,O+T.length-1]}).sort(h)]}return p>-1?[2,[[p,p+n-1]]]:l==="aggressive"?I(r,a):l==="smart"?D(r,a):null}function I(t,r){for(var o=t.length,g=r.length,a=0,f=r[a],l=[],n=-1,c=-2,v=0;v<o;v+=1)if(t[v]===f){if(v!==c+1&&(n>=0&&l.push([n,c]),n=v),c=v,a+=1,a===g)return l.push([n,c]),W(l,t);f=r[a]}return null}function D(t,r){for(var o=t.length,g=[],a=0,f=r[a],l=-1,n=-2;;){var c=t.indexOf(f,n+1);if(c===-1)break;if(c===0||y(t[c-1]))l=c;else{var v=r.length-a,m=t.length-c,p=Math.min(3,v,m),S=r.slice(a,a+p);if(t.slice(c,c+p)===S)l=c;else{n+=1;continue}}for(n=l;n<o&&t[n]===f;n+=1)a+=1,f=r[a];if(n-=1,g.push([l,n]),a===r.length)return W(g,t)}return null}function W(t,r){var o=2;return t.forEach(function(g){var a=g[0],f=g[1],l=f-a+1,n=a===0||r[a]===" "||r[a-1]===" ",c=f===r.length-1||r[f]===" "||r[f+1]===" ",v=n&&c;v?o+=.2:n?o+=.4:l>=3?o+=.8:o+=1.6}),[o,t]}function J(t,r){var o=(0,e.default)(r),g=o.split(" "),a=(0,e.default)(t),f=new Set(a.split(" ")),l=d(t,a,f,r,o,g,"smart");return l?{item:t,score:l[0],matches:[l[1]]}:null}function G(t,r){var o=r.strategy,g=o===void 0?"aggressive":o,a=r.getText,f=t.map(function(l){var n;if(a)n=a(l);else{var c=r.key?l[r.key]:l;n=[c]}var v=n.map(function(m){var p=m||"",S=(0,e.default)(p),b=new Set(S.split(" "));return[p,S,b]});return[l,v]});return function(l){var n=[],c=(0,e.default)(l),v=c.split(" ");return c.length?(f.forEach(function(m){for(var p=m[0],S=m[1],b=s,T=[],O=0,Y=S.length;O<Y;O+=1){var P=S[O],K=P[0],X=P[1],$=P[2],F=d(K,X,$,l,c,v,g);F?(b=Math.min(b,F[0]),T.push(F[1])):T.push(null)}b<s&&n.push({item:p,score:b,matches:T})}),n.sort(_),n):[]}}return z}(function(e){e.__esModule=!0,e.default=_,e.fuzzyMatch=h;var u=s(C);e.normalizeText=u.default;function s(i){return i&&i.__esModule?i:{default:i}}function _(i,y){return y===void 0&&(y={}),B().createFuzzySearchImpl(i,y)}function h(i,y){return B().fuzzyMatchImpl(i,y)}})(H);const ce=ue(H),w={},oe=(e,u)=>u.map(s=>s!="timestamp"?e[s]:new Date(e.timestamp).toLocaleString().replace(", "," ")),Te=(e,u,s)=>{w[e]=ce(s,{getText:_=>oe(_,u)})},ie=(e,u)=>{var s;return((s=w[e])==null?void 0:s.call(w,u).map(_=>_.item))??[]},fe=async e=>{const[u,s]=x();e.trim().length==0?u.value=s.data:u.value=ie(s.searchId,e)??s.data},ve=Object.freeze(Object.defineProperty({__proto__:null,s_f50p3D5nMCI:fe},Symbol.toStringTag,{value:"Module"})),q=N(E(()=>L(()=>import("./q-qznU45aP.js").then(e=>e.c),[]),"s_0sxvg6KsuAM")),_e=N(E(()=>L(()=>import("./q-kQ_nsVTj.js").then(e=>e.a),[]),"s_2AXMoH1V6Yw")),ze=e=>{var y;Z();const u=d=>`${d.indexLineIds!=null?"/view/multi/":"/view/"}?id=${d.id}`,s=j(e.data),_=j(Math.min(e.data.length,60)),h=j(),i=E(()=>L(()=>Promise.resolve().then(()=>le),void 0),"s_BBjAj0b80xY",[_,e,h]);return Q("scroll",E(()=>L(()=>Promise.resolve().then(()=>de),void 0),"s_G0EsNJzVsFA",[i])),ee(E(()=>L(()=>Promise.resolve().then(()=>me),void 0),"s_001hMYRL094",[i])),re("resize",E(()=>L(()=>Promise.resolve().then(()=>pe),void 0),"s_JMryJ4EnQrU",[i])),V("div",null,{class:"mx-auto w-full max-w-7xl"},[R(_e,{placeholder:"Search logs",hidden:!1,disabled:!1,get fuzzy(){return{id:e.searchId,keys:["description","timestamp"],data:e.data}},onKeyUp$:E(()=>L(()=>Promise.resolve().then(()=>ve),void 0),"s_f50p3D5nMCI",[s,e]),[M]:{placeholder:M,hidden:M,disabled:M,fuzzy:te(d=>({id:d.searchId,keys:["description","timestamp"],data:d.data}),[e]),onKeyUp$:M}},3,"TI_0"),V("div",null,{class:"grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},[e.hideAddNew==!0||R(q,{label:"Add New",url:"/parser",Icon:ne,inverted:!0,[M]:{label:M,url:M,Icon:M,inverted:M}},3,"TI_1"),(y=s.value.slice(0,_.value))==null?void 0:y.map(d=>R(q,{get multilineLabel(){return d.description},label:new Date(d.timestamp).toLocaleString().replace(", "," "),url:u(d),[M]:{multilineLabel:ae(d,"description")}},3,d.id))],1,null)],1,"TI_2")},he=e=>{const[u]=x(),s=e.target;u(s)},de=Object.freeze(Object.defineProperty({__proto__:null,_hW:A,s_G0EsNJzVsFA:he},Symbol.toStringTag,{value:"Module"})),U=e=>new Promise(u=>{setTimeout(u,e)}),ge=async()=>{const[e]=x();for(;await e(document);)await U(200)},pe=Object.freeze(Object.defineProperty({__proto__:null,_hW:A,s_JMryJ4EnQrU:ge},Symbol.toStringTag,{value:"Module"})),ye=async()=>{const[e]=x();for(;await e(document);)await U(200)},me=Object.freeze(Object.defineProperty({__proto__:null,_hW:A,s_001hMYRL094:ye},Symbol.toStringTag,{value:"Module"}));export{A as _hW,ze as a,he as b,ge as c,ye as d,Te as i,fe as s,se as s_BBjAj0b80xY};
