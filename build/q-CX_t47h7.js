import{u,_ as g,v as b,L as h,h as S,a as m,b as o,c as l,d as I,q as s,S as f}from"./q-DiiDRB9g.js";import{_ as a}from"./q-C7i0xNVT.js";import{C as P}from"./q-B1Mi9-L7.js";const p=()=>{const[e,t]=u();return!t.resolved.disabled&&e.highlightedIndexSig.value===t.index},E=()=>{var d;const[e,t]=u();!e.inputRef.value||t.resolved.disabled||(e.inputRef.value.value=(d=e.filteredOptionsSig.value[t.index])==null?void 0:d.label,e.isListboxOpenSig.value=!1,e.selectedIndexSig.value=t.index)},O=()=>{const[e,t]=u();return e.highlightedIndexSig.value=t.index},C=e=>{const t=g(e,["index","resolved"]),d=b(P),_=`${d.localId}-${e.resolved.key}`,c=h(s(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_1yOd39xEPG4",[d,e])),v=s(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_ZrLFkaXnSJc",[d,e]),x=S();return m("li",{...t,id:_,ref:x,tabIndex:-1,role:"option",get"data-highlighted"(){return c.value},get"aria-selected"(){return e.index===d.selectedIndexSig.value},get"data-selected"(){return e.index===d.selectedIndexSig.value},get"aria-disabled"(){return e.resolved.disabled},get"data-disabled"(){return e.resolved.disabled},"preventdefault:mousedown":!0,children:I(f,null,3,"1r_0"),onClick$:[v,t.onClick$],onMouseEnter$:[s(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_7i4hR0UYzm4",[d,e]),t.onMouseEnter$]},{tabIndex:o,role:o,"data-highlighted":l(i=>i.value,[c],"p0.value"),"aria-selected":l((i,n)=>n.index===i.selectedIndexSig.value,[d,e],"p1.index===p0.selectedIndexSig.value"),"data-selected":l((i,n)=>n.index===i.selectedIndexSig.value,[d,e],"p1.index===p0.selectedIndexSig.value"),"aria-disabled":l(i=>i.resolved.disabled,[e],"p0.resolved.disabled"),"data-disabled":l(i=>i.resolved.disabled,[e],"p0.resolved.disabled"),"preventdefault:mousedown":o},0,"1r_1")},r=Object.freeze(Object.defineProperty({__proto__:null,s_1yOd39xEPG4:p,s_7i4hR0UYzm4:O,s_ZrLFkaXnSJc:E,s_cHjP0kjUQTQ:C},Symbol.toStringTag,{value:"Module"}));export{p as s_1yOd39xEPG4,O as s_7i4hR0UYzm4,E as s_ZrLFkaXnSJc,C as s_cHjP0kjUQTQ};
