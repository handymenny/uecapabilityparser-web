import{u as I,L as T,h as t,r as U,K as k,i as D,a as Q,d as A,q as S,S as H,s as B}from"./q-DiiDRB9g.js";import{_ as v}from"./q-C7i0xNVT.js";import{C as J}from"./q-B1Mi9-L7.js";const Y=()=>{const[p,l,r,u]=I(),d=l,c=r,g=p;return u.map((e,n)=>{let o,s,i,b;if(typeof e=="string")o=e,s=e,i=!1;else if(o=e[c],s=e[d],i=!!e[g],typeof s!="string")throw new Error('Qwik UI: Combobox optionLabelKey was not provided, and the option was not a string. Please provide a value for optionLabelKey, use the property name "label", or ensure that the option is a string.');return{option:e,key:n,value:o,label:s,disabled:i,lcLabel:b}})},Z=async function({track:l}){var o;const[r,u,d,c]=I(),g=l(()=>c.value),e=l(()=>d.value);let n=await((o=l(()=>r))==null?void 0:o.resolve());n||(n=(s,i)=>{if(!i)return[];if(!s)return i;const b=s.toLowerCase();return i.filter(f=>{let{lcLabel:a}=f;return a||(a=f.label.toLowerCase(),f.lcLabel=a),a.includes(b)})}),u.value=n(e,g)},$=p=>{const{"bind:isListboxOpen":l,"bind:isInputFocused":r,"bind:inputValue":u,"bind:highlightedIndex":d,"bind:selectedIndex":c,options:g,defaultLabel:e="",optionValueKey:n="value",optionLabelKey:o="label",optionDisabledKey:s="disabled",filter$:i,...b}=p,f=T(S(()=>v(()=>Promise.resolve().then(()=>x),void 0),"s_UJ0R94tikBc",[s,o,n,g])),a=t([]),h=t(e),_=u||h;U(S(()=>v(()=>Promise.resolve().then(()=>x),void 0),"s_fqI4hYs7UZc",[i,a,_,f]));const y=t(),L=t(),m=t(),K=t(),O=t(),R=t(-1),V=c||R,C=t(!1),w=l||C,P=t(!1),q=r||P,j=t(-1),E=d||j,F=k();return D(J,{filteredOptionsSig:a,inputValueSig:_,labelRef:y,inputRef:m,popoverRef:K,localId:F,triggerRef:O,listboxRef:L,isInputFocusedSig:q,isListboxOpenSig:w,highlightedIndexSig:E,selectedIndexSig:V,defaultLabel:e,optionValueKey:n,optionLabelKey:o,optionDisabledKey:s}),Q("div",{...b,children:A(H,null,3,"Rq_0")},null,0,"Rq_1")},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:B,s_UJ0R94tikBc:Y,s_fqI4hYs7UZc:Z,s_pllKQ0gKOcg:$},Symbol.toStringTag,{value:"Module"}));export{B as _hW,Y as s_UJ0R94tikBc,Z as s_fqI4hYs7UZc,$ as s_pllKQ0gKOcg};
