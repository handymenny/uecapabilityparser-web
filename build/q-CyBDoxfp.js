import{u as v,v as x,h as f,f as u,a as w,c as l,b as _,d as m,q as g,S as y}from"./q-DiiDRB9g.js";import{_ as c}from"./q-C7i0xNVT.js";import{S as I}from"./q-cnYlTvu_.js";import{u as L,a as D}from"./q-nhZPgOjc.js";const O=()=>{const[t]=v();t.isListboxOpenSig.value=!t.isListboxOpenSig.value},$=async t=>{var r;const[e,d,a,o]=v();if(e.itemsMapSig.value){switch(e.isListboxOpenSig.value||o.typeahead$(t.key),t.key){case"Tab":case"Escape":e.isListboxOpenSig.value=!1;break;case"ArrowDown":case"ArrowUp":e.isListboxOpenSig.value||(e.isListboxOpenSig.value=!0);break;case"ArrowRight":if(!e.multiple){const n=e.highlightedIndexSig.value??-1,s=await a.getNextEnabledItemIndex$(n);await a.selectionManager$(s,"add"),e.highlightedIndexSig.value=s}break;case"ArrowLeft":if(!e.multiple){const n=e.highlightedIndexSig.value??e.itemsMapSig.value.size,s=await a.getPrevEnabledItemIndex$(n);await a.selectionManager$(s,"add"),e.highlightedIndexSig.value=s}break;case"Enter":case" ":e.isListboxOpenSig.value=e.multiple?!0:!e.isListboxOpenSig.value;break}for(e.highlightedIndexSig.value===null&&(e.highlightedIndexSig.value=await a.getNextEnabledItemIndex$(-1));e.highlightedItemRef.value!==document.activeElement;)await new Promise(n=>setTimeout(n,5)),(r=e.highlightedItemRef.value)==null||r.focus();d.value&&document.dispatchEvent(new CustomEvent("typeaheadFn",{detail:o.typeahead$}))}},k=t=>{const e=x(I),d=L(),a=`${e.localId}-label`,o=`${e.localId}-description`,r=f(!0),n=D(),s=u(i=>{i.preventDefault()},"e=>{e.preventDefault();}"),b=g(()=>c(()=>Promise.resolve().then(()=>p),void 0),"s_5XtrGSdCm7o",[e]),S=u(i=>{["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Home","End","PageDown","PageUp","Enter"," "].includes(i.key)&&i.preventDefault()},'e=>{const keys=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Home","End","PageDown","PageUp","Enter"," "];if(keys.includes(e.key)){e.preventDefault();}}'),h=g(()=>c(()=>Promise.resolve().then(()=>p),void 0),"s_cUCiocFpFMc",[e,r,d,n]);return w("button",{...t,get id(){return`${e.localId}-trigger`},ref:e.triggerRef,get"data-open"(){return e.isListboxOpenSig.value?"":void 0},get"data-closed"(){return e.isListboxOpenSig.value?void 0:""},get"data-disabled"(){return e.isDisabledSig.value?"":void 0},get"aria-expanded"(){return e.isListboxOpenSig.value},"aria-labelledby":a,"aria-describedby":o,get disabled(){return e.isDisabledSig.value?!0:void 0},"preventdefault:blur":!0,children:m(y,null,3,"VR_0"),onClick$:[s,b,t.onClick$],onKeyDown$:[S,h,t.onKeyDown$]},{id:l(i=>`${i.localId}-trigger`,[e],"`${p0.localId}-trigger`"),"data-open":l(i=>i.isListboxOpenSig.value?"":void 0,[e],'p0.isListboxOpenSig.value?"":undefined'),"data-closed":l(i=>i.isListboxOpenSig.value?void 0:"",[e],'!p0.isListboxOpenSig.value?"":undefined'),"data-disabled":l(i=>i.isDisabledSig.value?"":void 0,[e],'p0.isDisabledSig.value?"":undefined'),"aria-expanded":l(i=>i.isListboxOpenSig.value,[e],"p0.isListboxOpenSig.value"),disabled:l(i=>i.isDisabledSig.value?!0:void 0,[e],"p0.isDisabledSig.value?true:undefined"),"preventdefault:blur":_},0,"VR_1")},p=Object.freeze(Object.defineProperty({__proto__:null,s_5XtrGSdCm7o:O,s_cUCiocFpFMc:$,s_iC4KybMoWpo:k},Symbol.toStringTag,{value:"Module"}));export{O as s_5XtrGSdCm7o,$ as s_cUCiocFpFMc,k as s_iC4KybMoWpo};
