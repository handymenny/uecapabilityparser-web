import{c as x,q as a,b as I,g as _,h as y,u as O,G as P,H as h,r as f,B as d,s as M,l as b,S as w,j as m,k as p,y as v}from"./q-PXVB0oKg.js";import{_ as u}from"./q-Biq04Hab.js";const z=x(a(()=>u(()=>import("./q-CP2rnVrF.js").then(t=>t.b),[]),"s_CTwV4MtyR4M")),j=I("qui-accordion"),V=I("qui-accordion-item"),T=()=>{const[t]=_();t.value=!1},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_eoIHWhc2fwA:T},Symbol.toStringTag,{value:"Module"})),B=t=>{const l=y(t,["id","_index","value","open"]),e=O(j),n=P(),s=t.id??n+"-item",i=h(a(()=>u(()=>Promise.resolve().then(()=>A),void 0),"s_zeJhzxwmJFc",[t])),o=f(e.initialIndex===i.value),r=f(!0),g=f(null);return d(a(()=>u(()=>Promise.resolve().then(()=>R),void 0),"s_Wz0WynMZb8A",[e,r,o,i,t])),d(a(()=>u(()=>Promise.resolve().then(()=>D),void 0),"s_8IVZpw4MOsQ",[e,o,i,t])),d(a(()=>u(()=>Promise.resolve().then(()=>q),void 0),"s_cWJyMavutew",[e,o,i,g])),d(a(()=>u(()=>Promise.resolve().then(()=>C),void 0),"s_eoIHWhc2fwA",[r])),M(V,{isOpenSig:o,localIndexSig:i,triggerRef:g}),b(z,{triggerRef:g,get"bind:open"(){return t.open?void 0:o},get open(){return e.isMultipleSig.value?t.open:void 0},id:s,disabled:e.disabled||l.disabled,get collapsible(){return e.collapsible},accordionItem:!0,...l,children:b(w,null,3,"4y_0"),[m]:{"bind:open":p((c,S)=>S.open?void 0:c,[o,t]),open:p((c,S)=>c.isMultipleSig.value?S.open:void 0,[e,t]),collapsible:p(c=>c.collapsible,[e]),accordionItem:m}},0,"4y_1")},E=()=>{const[t]=_();return t._index??-1},A=Object.freeze(Object.defineProperty({__proto__:null,s_zeJhzxwmJFc:E},Symbol.toStringTag,{value:"Module"})),L=function({track:l}){const[e,n,s,i,o]=_();if(l(()=>e.selectedIndexSig.value),!e.isMultipleSig.value)if(e.selectedIndexSig.value!==i.value)s.value=!1;else{if(!n.value&&o.value&&e.onChange$&&e.onChange$(o.value),!e.givenValueSig)return;e.givenValueSig.value=o.value??null}},R=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_Wz0WynMZb8A:L},Symbol.toStringTag,{value:"Module"})),W=function({track:l}){var o;const[e,n,s,i]=_();e.givenValueSig&&(l(()=>{var r;return(r=e.givenValueSig)==null?void 0:r.value}),((o=e.givenValueSig)==null?void 0:o.value)===i.value?(n.value=!0,e.selectedIndexSig.value=s.value):n.value=!1)},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_8IVZpw4MOsQ:W},Symbol.toStringTag,{value:"Module"})),J=({track:t})=>{const[l,e,n,s]=_();t(()=>n.value),l.triggerRefsArray.value[n.value]=s,t(()=>e.value),e.value&&(l.selectedIndexSig.value=n.value)},q=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_cWJyMavutew:J},Symbol.toStringTag,{value:"Module"}));export{v as _hW,j as a,V as b,E as c,L as d,W as e,J as f,B as s,T as s_eoIHWhc2fwA};