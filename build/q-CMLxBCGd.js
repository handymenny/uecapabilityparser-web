import{g as S,y as n}from"./q-PXVB0oKg.js";const r=t=>{var o;const[l]=S();let e=1;const s=l.itemsMapSig.value.size;if(!l.loop&&t+1>=s)return t;for(;e<s;){const a=(t+e)%s;if(!((o=l.itemsMapSig.value.get(a))!=null&&o.disabled))return a;if(e++,!l.loop&&t+e>=s)break}return t},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:n,s_l0pxmXH9RRY:r},Symbol.toStringTag,{value:"Module"})),u=t=>{var o;const[l]=S();let e=1;const s=l.itemsMapSig.value.size;if(!l.loop&&t-1<0)return t;for(;e<=s;){const a=(t-e+s)%s;if(!((o=l.itemsMapSig.value.get(a))!=null&&o.disabled))return a;if(e++,!l.loop&&t-e<0)break}return t},f=async(t,l)=>{const[e]=S();t!==null&&(l==="add"&&(e.multiple?e.selectedIndexSetSig.value=new Set([...e.selectedIndexSetSig.value,t]):e.selectedIndexSetSig.value=new Set([t])),l==="toggle"&&(e.selectedIndexSetSig.value.has(t)?e.selectedIndexSetSig.value=new Set([...e.selectedIndexSetSig.value].filter(s=>s!==t)):e.selectedIndexSetSig.value=new Set([...e.selectedIndexSetSig.value,t])),l==="remove"&&(e.selectedIndexSetSig.value=new Set([...e.selectedIndexSetSig.value].filter(s=>s!==t))))};export{n as _hW,f as a,i as b,u as s,r as s_l0pxmXH9RRY};
