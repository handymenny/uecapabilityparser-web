import{_ as r}from"./q-1dnJZ1Td.js";import{b as h,G as y,r as v,x as g,q as i,g as k,u as p,o as O,h as w,i as E,j as d,k as P,S as R,l as c,_hW as x}from"./q-BmWDAmC3.js";const A=h("qui-carousel-context");function j(e){return{validIndexesSig:y(i(()=>r(()=>import("./q-B7_ATgob.js"),[]),"s_0xqBkbKAOiM",[e]))}}function X(e){const n=v(),t=v(!1),o=v(!1);g(i(()=>r(()=>import("./q-BUKqDJZ9.js"),[]),"s_kPYJNz8pf6M",[i(()=>r(()=>import("./q-D5cwvBuK.js"),[]),"s_k7sHJ488Zqo",[e,n,t]),e,o,t])),g(i(()=>r(()=>import("./q-CI8HN99c.js"),[]),"s_ah9baOubd5g",[e,n,t]))}const Y=e=>{const n=k(e,["_index"]),t=p(A),o=v(),u=`${t.localId}-${e._index??-1}`,s=v(!0),a=j(t);g(i(()=>r(()=>Promise.resolve().then(()=>q),void 0),"s_XJcV5wTXplg",[o,t,e]));const S=i(()=>r(()=>Promise.resolve().then(()=>H),void 0),"s_0H0tloRxqbo",[t,e]),m=i(()=>r(()=>Promise.resolve().then(()=>C),void 0),"s_1OW8wK9B9oQ",[t,e]),_=O(l=>{(l.key==="Home"||l.key==="End")&&l.preventDefault()},'e=>{if(e.key==="Home"||e.key==="End"){e.preventDefault();}}'),b=i(()=>r(()=>Promise.resolve().then(()=>$),void 0),"s_SEY0uAOLxzs",[a,t,e]);g(i(()=>r(()=>Promise.resolve().then(()=>V),void 0),"s_0Ms9oKhoZ10",[a,s,e]));const f=y(i(()=>r(()=>Promise.resolve().then(()=>L),void 0),"s_r0EbK7GfRlw",[a,t,e]));return w("button",{ref:o,role:"tab",get hidden(){return!s.value},get tabIndex(){return e._index===t.currentIndexSig.value?0:-1},get"aria-label"(){return`${e._index!==void 0&&`Slide ${e._index+1}`}`},"aria-controls":u,get"data-active"(){return f.value?"":void 0},get"aria-selected"(){return f.value},...n,children:P(R,null,3,"HJ_0"),onClick$:[S,n.onClick$],onFocus$:[m,n.onFocus$],onKeyDown$:[_,b,n.onKeyDown$]},{role:E,hidden:d(l=>!l.value,[s]),tabIndex:d((l,I)=>I._index===l.currentIndexSig.value?0:-1,[t,e]),"aria-label":d(l=>`${l._index!==void 0&&`Slide ${l._index+1}`}`,[e]),"data-active":d(l=>l.value?"":void 0,[f]),"aria-selected":d(l=>l.value,[f])},0,"HJ_1")},T=async e=>{const[n,t,o]=c(),u=["ArrowRight","ArrowLeft","Home","End"];if(typeof o._index!="number"||!u.includes(e.key))return;const s=n.validIndexesSig.value,a=s[s.length-1];if(e.key==="Home"){t.currentIndexSig.value=s[0],t.bulletRefsArray.value[s[0]].value.focus();return}if(e.key==="End"){t.currentIndexSig.value=a,t.bulletRefsArray.value[a].value.focus();return}const S=e.key==="ArrowRight"?1:-1;let _=s.indexOf(o._index)+S;t.isRewindSig.value?_=(_+s.length)%s.length:_=Math.max(0,Math.min(_,s.length-1));const b=s[_];t.currentIndexSig.value=b,t.bulletRefsArray.value[b].value.focus()},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_SEY0uAOLxzs:T},Symbol.toStringTag,{value:"Module"})),M=function(){const[n,t,o]=c();if(o._index!==void 0)t.bulletRefsArray.value[o._index]=n;else throw new Error("Qwik UI: Carousel Bullet cannot find its proper index.")},q=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_XJcV5wTXplg:M},Symbol.toStringTag,{value:"Module"})),D=()=>{const[e,n,t]=c();if(typeof t._index!="number"||!e.validIndexesSig.value.includes(t._index))return!1;const o=n.currentIndexSig.value,u=e.validIndexesSig.value[e.validIndexesSig.value.indexOf(t._index)+1];return o>=t._index&&(u===void 0||o<u)},L=Object.freeze(Object.defineProperty({__proto__:null,s_r0EbK7GfRlw:D},Symbol.toStringTag,{value:"Module"})),K=async function(){const[n,t,o]=c();if(typeof o._index!="number")return;const u=n.validIndexesSig.value;t.value=u.includes(o._index)},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_0Ms9oKhoZ10:K},Symbol.toStringTag,{value:"Module"})),z=()=>{const[e,n]=c();typeof n._index=="number"&&(e.currentIndexSig.value=n._index)},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_1OW8wK9B9oQ:z},Symbol.toStringTag,{value:"Module"})),B=()=>{const[e,n]=c();typeof n._index=="number"&&(e.currentIndexSig.value=n._index)},H=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_0H0tloRxqbo:B},Symbol.toStringTag,{value:"Module"}));export{X as a,M as b,A as c,D as d,K as e,z as f,B as g,T as s,Y as s_jQBQ4Ti4YA0,j as u};
