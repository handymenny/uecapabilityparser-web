import{_ as l}from"./q-Biq04Hab.js";import{b as m,H as I,r as v,B as b,q as i,h as O,u as E,o as P,i as R,j as p,k as c,l as A,S as w,g as _,y as x}from"./q-PXVB0oKg.js";const k=m("qui-carousel-context");function T(e){return{validIndexesSig:I(i(()=>l(()=>import("./q-Ck2Ug7RW.js"),[]),"s_0xqBkbKAOiM",[e]))}}function X(e){const t=v(),n=v(!1),o=v(!1);b(i(()=>l(()=>import("./q-Cog4GI-I.js"),[]),"s_kPYJNz8pf6M",[i(()=>l(()=>import("./q-CxgoQENI.js"),[]),"s_k7sHJ488Zqo",[e,t,n]),e,o,n])),b(i(()=>l(()=>import("./q-BB9XWRiS.js"),[]),"s_ah9baOubd5g",[e,t,n]))}const Y=e=>{const t=O(e,["_index"]),n=E(k),o=v(),u=`${n.localId}-${e._index??-1}`,s=v(!0),d=T(n);b(i(()=>l(()=>Promise.resolve().then(()=>D),void 0),"s_XJcV5wTXplg",[o,n,e]));const S=i(()=>l(()=>Promise.resolve().then(()=>H),void 0),"s_0H0tloRxqbo",[n,e]),y=i(()=>l(()=>Promise.resolve().then(()=>q),void 0),"s_1OW8wK9B9oQ",[n,e]),a=P(r=>{(r.key==="Home"||r.key==="End")&&r.preventDefault()},'e=>{if(e.key==="Home"||e.key==="End"){e.preventDefault();}}'),f=i(()=>l(()=>Promise.resolve().then(()=>j),void 0),"s_SEY0uAOLxzs",[d,n,e]);b(i(()=>l(()=>Promise.resolve().then(()=>z),void 0),"s_0Ms9oKhoZ10",[d,s,e]));const g=I(i(()=>l(()=>Promise.resolve().then(()=>K),void 0),"s_r0EbK7GfRlw",[d,n,e]));return R("button",{ref:o,role:"tab",get hidden(){return!s.value},get tabIndex(){return e._index===n.currentIndexSig.value?0:-1},get"aria-label"(){return`${e._index!==void 0&&`Slide ${e._index+1}`}`},"aria-controls":u,get"data-active"(){return g.value?"":void 0},get"aria-selected"(){return g.value},...t,children:A(w,null,3,"HJ_0"),onClick$:[S,t.onClick$],onFocus$:[y,t.onFocus$],onKeyDown$:[a,f,t.onKeyDown$]},{role:p,hidden:c(r=>!r.value,[s]),tabIndex:c((r,h)=>h._index===r.currentIndexSig.value?0:-1,[n,e]),"aria-label":c(r=>`${r._index!==void 0&&`Slide ${r._index+1}`}`,[e]),"data-active":c(r=>r.value?"":void 0,[g]),"aria-selected":c(r=>r.value,[g])},0,"HJ_1")},$=async e=>{const[t,n,o]=_(),u=["ArrowRight","ArrowLeft","Home","End"];if(typeof o._index!="number"||!u.includes(e.key))return;const s=t.validIndexesSig.value,d=s[s.length-1];if(e.key==="Home"){n.currentIndexSig.value=s[0],n.bulletRefsArray.value[s[0]].value.focus();return}if(e.key==="End"){n.currentIndexSig.value=d,n.bulletRefsArray.value[d].value.focus();return}const S=e.key==="ArrowRight"?1:-1;let a=s.indexOf(o._index)+S;n.isRewindSig.value?a=(a+s.length)%s.length:a=Math.max(0,Math.min(a,s.length-1));const f=s[a];n.currentIndexSig.value=f,n.bulletRefsArray.value[f].value.focus()},j=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_SEY0uAOLxzs:$},Symbol.toStringTag,{value:"Module"})),M=function(){const[t,n,o]=_();if(o._index!==void 0)n.bulletRefsArray.value[o._index]=t;else throw new Error("Qwik UI: Carousel Bullet cannot find its proper index.")},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_XJcV5wTXplg:M},Symbol.toStringTag,{value:"Module"})),L=()=>{const[e,t,n]=_();if(typeof n._index!="number"||!e.validIndexesSig.value.includes(n._index))return!1;const o=t.currentIndexSig.value,u=e.validIndexesSig.value[e.validIndexesSig.value.indexOf(n._index)+1];return o>=n._index&&(u===void 0||o<u)},K=Object.freeze(Object.defineProperty({__proto__:null,s_r0EbK7GfRlw:L},Symbol.toStringTag,{value:"Module"})),V=async function(){const[t,n,o]=_();if(typeof o._index!="number")return;const u=t.validIndexesSig.value;n.value=u.includes(o._index)},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_0Ms9oKhoZ10:V},Symbol.toStringTag,{value:"Module"})),C=()=>{const[e,t]=_();typeof t._index=="number"&&(e.currentIndexSig.value=t._index)},q=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_1OW8wK9B9oQ:C},Symbol.toStringTag,{value:"Module"})),B=()=>{const[e,t]=_();typeof t._index=="number"&&(e.currentIndexSig.value=t._index)},H=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_0H0tloRxqbo:B},Symbol.toStringTag,{value:"Module"}));export{X as a,M as b,k as c,L as d,V as e,C as f,B as g,$ as s,Y as s_jQBQ4Ti4YA0,T as u};