import{_ as u}from"./q-1dnJZ1Td.js";import{g as _,r as d,u as v,x as m,h as f,j as p,q as b,l as S,_hW as x}from"./q-BmWDAmC3.js";import{c as g}from"./q-B97P3fmz.js";const j=e=>{const s=_(e,["value","displayValue","nativeSelectRef","index"]),t=d(),n=v(g);return m(b(()=>u(()=>Promise.resolve().then(()=>h),void 0),"s_ES8MIJke00o",[n,t,e])),f("option",{ref:t,get value(){return e.value},...s,children:e.displayValue},{value:p(o=>o.value,[e])},0,"ci_0")},O=Object.freeze(Object.defineProperty({__proto__:null,s_4qjFP2Ywl1s:j},Symbol.toStringTag,{value:"Module"})),y=async function({track:s}){var i,c;const[t,n,o]=S();if(s(()=>t.selectedValuesSig.value),!o.nativeSelectRef.value||!n.value)return;const r=new Event("input",{bubbles:!1});(i=o.nativeSelectRef.value)==null||i.dispatchEvent(r);const l=(c=t.itemsMapSig.value.get(o.index))==null?void 0:c.value;if(!l)throw new Error("Qwik UI: value not found when trying to select or unselect an item.");const a=t.selectedValuesSig.value;n.value.selected=Array.isArray(a)?a.includes(l):a===l},h=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_ES8MIJke00o:y},Symbol.toStringTag,{value:"Module"}));export{O as c,y as s,j as s_4qjFP2Ywl1s};
