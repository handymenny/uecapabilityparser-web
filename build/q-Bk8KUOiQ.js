import{l as n,_hW as a}from"./q-BmWDAmC3.js";const i=e=>{var l;const[t]=n();let o=1;const s=t.itemsMapSig.value.size;if(!t.loop&&e+1>=s)return e;for(;o<s;){const r=(e+o)%s;if(!((l=t.itemsMapSig.value.get(r))!=null&&l.disabled))return r;if(o++,!t.loop&&e+o>=s)break}return e},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:a,s_UlecDG3vLyo:i},Symbol.toStringTag,{value:"Module"})),p=e=>{var l;const[t]=n();let o=1;const s=t.itemsMapSig.value.size;if(!t.loop&&e-1<0)return e;for(;o<=s;){const r=(e-o+s)%s;if(!((l=t.itemsMapSig.value.get(r))!=null&&l.disabled))return r;if(o++,!t.loop&&e-o<0)break}return e};export{a as _hW,p as s,i as s_UlecDG3vLyo,c as u};