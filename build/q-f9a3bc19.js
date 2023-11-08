import{R as g,o as K,h as _,_ as v,G as q,W as S,p as j,j as y,f as E,S as d,Y as i,z as G,H as Q}from"./q-72893bb5.js";import{a as I}from"./q-47b9d439.js";import{B as L}from"./q-43e990e6.js";import{M as J}from"./q-6390a1ed.js";const Y=typeof btoa=="function",U=typeof Buffer=="function";typeof TextDecoder=="function"&&new TextDecoder;const O=typeof TextEncoder=="function"?new TextEncoder:void 0,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w=Array.prototype.slice.call(X);(e=>{let t={};return e.forEach((a,s)=>t[a]=s),t})(w);const f=String.fromCharCode.bind(String);typeof Uint8Array.from=="function"&&Uint8Array.from.bind(Uint8Array);const H=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),Z=e=>{let t,a,s,u,r="";const o=e.length%3;for(let h=0;h<e.length;){if((a=e.charCodeAt(h++))>255||(s=e.charCodeAt(h++))>255||(u=e.charCodeAt(h++))>255)throw new TypeError("invalid character found");t=a<<16|s<<8|u,r+=w[t>>18&63]+w[t>>12&63]+w[t>>6&63]+w[t&63]}return o?r.slice(0,o-3)+"===".substring(o):r},z=Y?e=>btoa(e):U?e=>Buffer.from(e,"binary").toString("base64"):Z,N=U?e=>Buffer.from(e).toString("base64"):e=>{let a=[];for(let s=0,u=e.length;s<u;s+=4096)a.push(f.apply(null,e.subarray(s,s+4096)));return z(a.join(""))},M=(e,t=!1)=>t?H(N(e)):N(e),ee=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?f(192|t>>>6)+f(128|t&63):f(224|t>>>12&15)+f(128|t>>>6&63)+f(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return f(240|t>>>18&7)+f(128|t>>>12&63)+f(128|t>>>6&63)+f(128|t&63)}},te=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,ne=e=>e.replace(te,ee),V=U?e=>Buffer.from(e,"utf8").toString("base64"):O?e=>N(O.encode(e)):e=>z(ne(e)),C=(e,t=!1)=>t?H(V(e)):V(e),ae=async e=>{const t=await e.arrayBuffer();return M(new Uint8Array(t))},se=async()=>{const[e]=g(),t="/parse/multi";console.log(t);try{const a=await I.get(t,{validateStatus:()=>!0});e.value=a.status!==404&&a.status<500}catch{e.value=!1}},re=()=>{const[e]=g();e.value++},oe=async(e,t)=>{const[a]=g();return e=="E"?M(await a(t)):C(t)},le=e=>{var s;const a=(s=e.replace(/\s|0x|,|;/g,"").toUpperCase().match(/[0-9A-Fa-f]{1,2}/g))==null?void 0:s.map(u=>parseInt(u,16));return Uint8Array.from(a??[])},ie=()=>{const[e]=g();e.value>1&&e.value--},ue=()=>{const[e]=g();e()},ce=async(e,t)=>{const[a,s,u,r,o,h]=g();r.value=void 0,o.value=!0;try{const n=new FormData(t),p=a.value,A=[];for(let l=0;l<p;l++){const c=n.get(`${l}-type`),b=await h(c,n.get(`${l}-inputText`)),P=n.getAll(`${l}-inputFile`);let T="";if(P.length>1){const B=await Promise.all(P.map(async x=>await x.text()));T=C(B.reduce((x,F)=>x+`

`+F))}else P.length!=0&&(T=await s(P[0]));const W=T.length>0?T:b;let R="",D="";if(c=="H"){const B=C(n.get(`${l}-inputENDCText`)),x=await s(n.get(`${l}-inputENDCFile`));R=x.length>0?x:B;const F=C(n.get(`${l}-inputNRText`)),$=await s(n.get(`${l}-inputNRFile`));D=$.length>0?$:F}const k=n.get(`${l}-description`);u?A.push({type:c,inputs:[W,R,D],subTypes:["LTE","ENDC","NR"],description:k}):A.push({type:c,input:W,inputENDC:R,inputNR:D,multiple0xB826:!0,description:k})}if(u){const l="/parse/multi",c=await I.post(l,A);window.history.pushState([],"","/view/multi?id="+c.data.id),window.addEventListener("popstate",()=>{r.value=void 0},{once:!0});const b=c.data;o.value=!1,r.value=b.capabilitiesList}else{const l="/parse/",c=await I.post(l,A[0]);window.history.pushState([],"","/view/?id="+c.data.id),window.addEventListener("popstate",()=>{r.value=void 0},{once:!0});const b=c.data;o.value=!1,r.value=[b]}}catch(n){console.error(n),o.value=!1,alert(n)}},de=K(_(()=>v(()=>import("./q-a70bb6ce.js"),["build/q-a70bb6ce.js","build/q-72893bb5.js","build/q-3457d901.js"]),"s_RxJnt3K50Co")),fe=()=>{const e=q({value:void 0}),t=S(!1),s=_(()=>v(()=>Promise.resolve().then(()=>m),void 0),"s_GMaQow7nNzE",[_(()=>v(()=>Promise.resolve().then(()=>m),void 0),"s_Iqiy8FRI5Ek")]),u=_(()=>v(()=>Promise.resolve().then(()=>m),void 0),"s_FPWv3lWNHQg"),r=S(1),o=S(!1);return j(_(()=>v(()=>Promise.resolve().then(()=>m),void 0),"s_Rsa6BhqxF4U",[_(()=>v(()=>Promise.resolve().then(()=>m),void 0),"s_dhAdK6R80Rc",[o])])),y(G,{children:[E("h1",null,{class:d((n,p)=>"mb-4 text-center text-4xl font-semibold"+(p.value||n.value!==void 0?" hidden":""),[e,t])},"Parser",3,null),E("div",null,{class:"my-[-1rem] flex flex-1 flex-col"},[E("form",null,{autoComplete:"off",class:d((n,p)=>"m-auto w-full max-w-2xl"+(p.value||n.value!==void 0?" hidden":""),[e,t]),onSubmit$:_(()=>v(()=>Promise.resolve().then(()=>m),void 0),"s_k80g7sERzos",[r,u,o,e,t,s]),"preventdefault:submit":!0},[[...Array(r.value).keys()].map(n=>y(de,{prefix:`${n}-`,submitting:t,[i]:{submitting:i}},3,n)),E("div",null,{class:"flex flex-wrap gap-x-4"},[y(L,{label:"Remove",type:"button",get hidden(){return!o.value||r.value<2},get disabled(){return t.value},onClick$:_(()=>v(()=>Promise.resolve().then(()=>m),void 0),"s_09KN4pCPCHs",[r]),[i]:{disabled:d(n=>n.value,[t]),hidden:d((n,p)=>!p.value||n.value<2,[r,o]),label:i,onClick$:i,type:i}},3,"aW_0"),y(L,{label:"Add",type:"button",get hidden(){return!o.value},get disabled(){return t.value},onClick$:_(()=>v(()=>Promise.resolve().then(()=>m),void 0),"s_Lbdt9K4P9is",[r]),[i]:{disabled:d(n=>n.value,[t]),hidden:d(n=>!n.value,[o]),label:i,onClick$:i,type:i}},3,"aW_1"),E("div",null,{class:d(n=>n.value>1&&"min-w-full"||"flex-1",[r])},y(L,{label:"Submit",type:"submit",get disabled(){return t.value},[i]:{disabled:d(n=>n.value,[t]),label:i,type:i}},3,"aW_2"),1,null)],1,null)],1,null),y(J,{get capabilitiesList(){return e.value},get hidden(){return!t.value&&e.value===void 0},[i]:{capabilitiesList:d(n=>n.value,[e]),hidden:d((n,p)=>!p.value&&n.value===void 0,[e,t])}},3,"aW_3")],1,null)]},1,"aW_4")},m=Object.freeze(Object.defineProperty({__proto__:null,_hW:Q,s_09KN4pCPCHs:ie,s_FPWv3lWNHQg:ae,s_GMaQow7nNzE:oe,s_Iqiy8FRI5Ek:le,s_Lbdt9K4P9is:re,s_Rsa6BhqxF4U:ue,s_dhAdK6R80Rc:se,s_k80g7sERzos:ce,s_wW02utqxH8E:fe},Symbol.toStringTag,{value:"Module"}));export{Q as _hW,ie as s_09KN4pCPCHs,ae as s_FPWv3lWNHQg,oe as s_GMaQow7nNzE,le as s_Iqiy8FRI5Ek,re as s_Lbdt9K4P9is,ue as s_Rsa6BhqxF4U,se as s_dhAdK6R80Rc,ce as s_k80g7sERzos,fe as s_wW02utqxH8E};
