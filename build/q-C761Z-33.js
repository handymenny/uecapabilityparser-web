import{b as l,l as i,g as u,r,u as _,x as d,h as v,j as S,q as x,_hW as p}from"./q-BmWDAmC3.js";import{_ as f}from"./q-N76fqm0C.js";const m=l("Select"),C=l("Select-Group"),j=l("Select-Option"),b=async function({track:s}){var a;const[t,o,n]=i();if(s(()=>t.selectedIndexSetSig.value),!n.nativeSelectRef.value||!o.value)return;const c=new Event("input",{bubbles:!1});(a=n.nativeSelectRef.value)==null||a.dispatchEvent(c),o.value.selected=t.selectedIndexSetSig.value.has(n.index)},g=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_o8wbxlC2QMY:b},Symbol.toStringTag,{value:"Module"})),y=e=>{const s=u(e,["value","displayValue","nativeSelectRef","index"]),t=r(),o=_(m);return d(x(()=>f(()=>Promise.resolve().then(()=>g),void 0),"s_o8wbxlC2QMY",[o,t,e])),v("option",{ref:t,get value(){return e.value},...s,children:e.displayValue},{value:S(n=>n.value,[e])},0,"pz_0")};export{m as S,p as _hW,y as a,C as g,j as s,b as s_o8wbxlC2QMY};