import{g as h,h as S,u as k,r as u,B as g,o as b,d as y,k as a,q as _,l as v,S as w,j as c,y as f}from"./q-PXVB0oKg.js";import{_ as m}from"./q-Biq04Hab.js";import{a as A}from"./q-_36nflbG.js";import{u as $,b as C}from"./q-B_gu2mKW.js";const O=()=>{const[t,r]=h();t.valueSig.value=r.value},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_c0w0hA9zm1A:O},Symbol.toStringTag,{value:"Module"})),L=t=>{const r=S(t,["disabled","value","closeOnSelect","onChange$"]),o=k(C),n=u(t.value===o.valueSig.value),l=u();g(_(()=>m(()=>Promise.resolve().then(()=>I),void 0),"s_HJ8KMTuuJvA",[n,o,t]));const i=b(e=>{["ArrowUp","ArrowDown","ArrowLeft","Home","End","Enter"," "].includes(e.key)&&e.preventDefault()},'e=>{const keys=["ArrowUp","ArrowDown","ArrowLeft","Home","End","Enter"," "];if(keys.includes(e.key)){e.preventDefault();}}'),s=$({...t,onItemSelect:_(()=>m(()=>Promise.resolve().then(()=>x),void 0),"s_c0w0hA9zm1A",[o,t]),closeOnSelect:t.closeOnSelect??!1});return y("div",{ref:s.itemRef,onClick$:[s.handleClick$,t.onClick$],onKeyDown$:[i,s.handleKeyDown$,t.onKeyDown$],onPointerOver$:[s.handlePointerOver$,t.onPointerOver$]},{tabIndex:-1,id:a(e=>e.itemId,[s]),role:"menuitemradio","aria-checked":a(e=>e.value?"true":"false",[n]),"aria-disabled":a((e,d)=>(d.disabled??!1)||e.disabled,[o,t]),"data-disabled":a((e,d)=>(d.disabled??!1)||e.disabled,[o,t]),"data-highlighted":a(e=>e.isHighlightedSig.value,[s]),"data-checked":a(e=>e.value,[n]),"data-close-on-select":a(e=>e.closeOnSelect,[t]),"data-menu-item":!0},v(A,{"bind:checked":n,"preventdefault:click":!0,ref:l,style:{pointerEvents:"none"},...r,children:v(w,null,3,"Xo_0"),[c]:{"bind:checked":c,"preventdefault:click":c,ref:c,style:c}},0,"Xo_1"),0,"Xo_2")},D=function({track:r}){var i;const[o,n,l]=h();r(()=>n.valueSig.value),o.value=l.value===n.valueSig.value,(i=l.onChange$)==null||i.call(l,o.value)},I=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_HJ8KMTuuJvA:D},Symbol.toStringTag,{value:"Module"}));export{f as _hW,D as a,L as s,O as s_c0w0hA9zm1A};