import{g as d,h as R,r as l,G as k,H as C,B as f,s as D,i as q,j as P,k as z,l as A,q as c,S as w,y as m}from"./q-PXVB0oKg.js";import{_}from"./q-Biq04Hab.js";import{S as N}from"./q-C6Vc36Y7.js";import{u as U}from"./q-BO0xVEZT.js";import{u as $}from"./q-BK7n08wz.js";const Y=function({track:i}){const[t,o]=d(),s=o["bind:open"];s&&(i(()=>s.value),t.value=s.value??t.value)},J=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_aOn3gtguTQs:Y},Symbol.toStringTag,{value:"Module"})),Q=({track:e})=>{const[i,t]=d();i.value=e(()=>t.invalid??!1)},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_I58hlSN96xI:Q},Symbol.toStringTag,{value:"Module"})),X=()=>{const[e]=d();e.value=!1},Z=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_UaRz5I3osyE:X},Symbol.toStringTag,{value:"Module"})),F=({track:e})=>{const[i,t]=d();i.value=e(()=>t.disabled??!1)},G=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_8120Nrl2mks:F},Symbol.toStringTag,{value:"Module"})),H=()=>{const[e]=d();return e._itemsMap},W=Object.freeze(Object.defineProperty({__proto__:null,s_6fIlwYt5ZE8:H},Symbol.toStringTag,{value:"Module"})),K=async function({track:i}){const[t,o,s]=d(),a=o["bind:value"],v=o["bind:displayValue"];i(()=>s.value);const n=[],g=[];for(const u of t.selectedIndexSetSig.value){const r=t.itemsMapSig.value.get(u);r&&(n.push(r.value),g.push(r.displayValue))}if(o.onChange$&&s.value.size>0&&await o.onChange$(t.multiple?n:n[0]),a&&a.value){const u=JSON.stringify(a.value),r=JSON.stringify(n);u!==r&&(t.multiple?a.value=n:a.value=n[0])}t.currDisplayValueSig.value=g,v&&t.currDisplayValueSig.value&&(v.value=t.multiple?t.currDisplayValueSig.value:t.currDisplayValueSig.value[0])},ee=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_ecgeCseaImk:K},Symbol.toStringTag,{value:"Module"})),te=function({track:i}){var a;const[t,o,s]=d();i(()=>o.value),t.value||(a=s.onOpenChange$)==null||a.call(s,o.value)},se=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_JCvA2qju7qo:te},Symbol.toStringTag,{value:"Module"})),ce=e=>{var h,x;const i=R(e,["_itemsMap","_valuePropIndex","onChange$","onOpenChange$","scrollOptions","loop","multiple","_label","name","required","disabled","invalid"]),t=U(e.ref),o=l(),s=l(),a=l(),v=l(),n=l(),g=e.loop??!1,u=k(),r=C(c(()=>_(()=>Promise.resolve().then(()=>W),void 0),"s_6fIlwYt5ZE8",[e])),y=l(new Set(e._valuePropIndex?[e._valuePropIndex]:[])),j=l(e._valuePropIndex??null),b=l(!1),T=e.scrollOptions??{behavior:"smooth",block:"center",inline:"nearest"},E=l(),O=l(!0),V=l(),p=l(e.disabled??!1),I=l(e.invalid??!1);f(c(()=>_(()=>Promise.resolve().then(()=>B),void 0),"s_I58hlSN96xI",[I,e]));const S={itemsMapSig:r,currDisplayValueSig:E,triggerRef:o,popoverRef:s,listboxRef:a,labelRef:v,groupRef:n,highlightedItemRef:V,localId:u,highlightedIndexSig:j,selectedIndexSetSig:y,isListboxOpenSig:b,scrollOptions:T,loop:g,multiple:e.multiple??!1,name:e.name,required:e.required,isDisabledSig:p,isInvalidSig:I};D(N,S);const L=$();return f(c(()=>_(()=>Promise.resolve().then(()=>oe),void 0),"s_0XkApN5dkdY",[S,O,r,e,L])),f(c(()=>_(()=>Promise.resolve().then(()=>J),void 0),"s_aOn3gtguTQs",[b,e])),f(c(()=>_(()=>Promise.resolve().then(()=>se),void 0),"s_JCvA2qju7qo",[O,b,e])),f(c(()=>_(()=>Promise.resolve().then(()=>ee),void 0),"s_ecgeCseaImk",[S,e,y])),f(c(()=>_(()=>Promise.resolve().then(()=>Z),void 0),"s_UaRz5I3osyE",[O])),f(c(()=>_(()=>Promise.resolve().then(()=>G),void 0),"s_8120Nrl2mks",[p,e])),q("div",{role:"group",ref:t,"data-open":S.isListboxOpenSig.value?"":void 0,"data-closed":S.isListboxOpenSig.value?void 0:"",get"data-disabled"(){return p.value?"":void 0},"data-invalid":(h=S.isInvalidSig)!=null&&h.value?"":void 0,"aria-invalid":(x=S.isInvalidSig)==null?void 0:x.value,"data-qui-select-root":!0,...i,children:A(w,null,3,"Yw_0")},{role:P,"data-disabled":z(M=>M.value?"":void 0,[p]),"data-qui-select-root":P},0,"Yw_1")},ie=async function({track:i}){var g;const[t,o,s,a,v]=d(),n=a["bind:value"];if(n){i(()=>n.value);for(const[u,r]of s.value)(g=n.value)!=null&&g.includes(r.value)?(await v.selectionManager$(u,"add"),o.value&&(t.highlightedIndexSig.value=u)):await v.selectionManager$(u,"remove")}},oe=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_0XkApN5dkdY:ie},Symbol.toStringTag,{value:"Module"}));export{m as _hW,X as a,F as b,H as c,K as d,te as e,ce as f,ie as g,Q as s,Y as s_aOn3gtguTQs};
