import{u as g,_ as S,v as b,h as I,f as O,r as c,a as L,b as p,c as x,q as u,s as m}from"./q-DiiDRB9g.js";import{_ as r}from"./q-C7i0xNVT.js";import{C as E}from"./q-B1Mi9-L7.js";const y=i=>{const[e]=g();e.isListboxOpenSig.value=!0,e.highlightedIndexSig.value=-1;const t=i.target;e.inputValueSig.value=t.value},v=(i,e)=>{var s;let t=1,n=i;const l=e.value,o=l.length;for(;(s=l[(n+t)%o])!=null&&s.disabled;)if(t++,t+n>o-1&&(n=0,t=0),t>=o)return-1;return(n+t)%o},f=(i,e)=>{var s;let t=1,n=i;const l=e.value,o=l.length;for(;(s=l[(n-t+o)%o])!=null&&s.disabled;)t++,n-t<0&&(n=o-1,t=0);return(n-t+o)%o},k=(i,e,t)=>{const n=i.value,l=e.value[n];return n===-1||l!=null&&l.disabled?"":`${t}-${l==null?void 0:l.key}`},w=i=>{const[e]=g();if(i.key==="ArrowDown"){if(e.isListboxOpenSig.value){const t=v(e.highlightedIndexSig.value,e.filteredOptionsSig);e.highlightedIndexSig.value=t}else if(e.highlightedIndexSig.value===-1){const t=v(-1,e.filteredOptionsSig);e.highlightedIndexSig.value=t}e.isListboxOpenSig.value=!0}if(i.key==="ArrowUp"){const t=f(e.highlightedIndexSig.value,e.filteredOptionsSig);e.highlightedIndexSig.value=t}if(i.key==="Enter"){if(e.isListboxOpenSig.value=!1,e.selectedIndexSig.value=e.highlightedIndexSig.value,e.filteredOptionsSig.value[e.highlightedIndexSig.value].disabled)return;const t=i.target;t.value=e.filteredOptionsSig.value[e.highlightedIndexSig.value].label}if(i.key==="Home"){const t=v(-1,e.filteredOptionsSig);e.highlightedIndexSig.value=t}if(i.key==="End"){const t=f(e.filteredOptionsSig.value.length,e.filteredOptionsSig);e.highlightedIndexSig.value=t}i.key==="Escape"&&(e.isListboxOpenSig.value=!1)},D=function(){const[e,t]=g();!e.inputRef.value||!e.defaultLabel||e.inputRef.value.value===e.defaultLabel&&(t.value=!1)},P=function(){const[e]=g(),t=e.filteredOptionsSig.value.findIndex(({label:n})=>n===e.defaultLabel);t!==-1&&(e.highlightedIndexSig.value=t)},A=()=>{const[i,e]=g();(e.disableOnBlur??!1)||(i.isListboxOpenSig.value=!1)},$=i=>{const e=S(i,["disableOnBlur"]),t=b(E),n=e.id||`${t.localId}-input`,l=`${t.localId}-listbox`,o=I(!0),s=u(()=>r(()=>Promise.resolve().then(()=>d),void 0),"s_Y7O1TYzugzM",[t]),h=u(()=>r(()=>Promise.resolve().then(()=>d),void 0),"s_H7RNHhFLfvk",[t]),_=O(a=>{(a.key==="ArrowDown"||a.key==="ArrowUp")&&a.preventDefault()},'e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();}}');return c(u(()=>r(()=>Promise.resolve().then(()=>d),void 0),"s_G8g05aCxxo8",[t,o])),c(u(()=>r(()=>Promise.resolve().then(()=>d),void 0),"s_gWxCwpm72vM",[t])),L("input",{type:"text",...e,id:n||e.id,ref:t.inputRef,role:"combobox",get"aria-expanded"(){return t.isListboxOpenSig.value},"aria-haspopup":"listbox","aria-autocomplete":"list","aria-activedescendant":t.isListboxOpenSig.value?k(t.highlightedIndexSig,t.filteredOptionsSig,t.localId):"","aria-controls":l,get value(){return t.inputValueSig.value},onInput$:[s,e.onInput$],onBlur$:[u(()=>r(()=>Promise.resolve().then(()=>d),void 0),"s_xl68f950CpQ",[t,i]),e.onBlur$],onKeyDown$:[_,h,e.onKeyDown$]},{type:p,role:p,"aria-expanded":x(a=>a.isListboxOpenSig.value,[t],"p0.isListboxOpenSig.value"),"aria-haspopup":p,"aria-autocomplete":p,value:x(a=>a.inputValueSig.value,[t],"p0.inputValueSig.value")},0,"XG_0")},d=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_G8g05aCxxo8:D,s_GZt1WsfEkOQ:$,s_H7RNHhFLfvk:w,s_Y7O1TYzugzM:y,s_gWxCwpm72vM:P,s_xl68f950CpQ:A},Symbol.toStringTag,{value:"Module"}));export{m as _hW,D as s_G8g05aCxxo8,$ as s_GZt1WsfEkOQ,w as s_H7RNHhFLfvk,y as s_Y7O1TYzugzM,P as s_gWxCwpm72vM,A as s_xl68f950CpQ};
