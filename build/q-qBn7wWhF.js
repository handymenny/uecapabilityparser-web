import{$ as d,n as m,q as i,_ as s,c as f,d as r,M as t,E as o,K as n}from"./q-C5sJjcKo.js";import{B as c}from"./q-BUh2NMXR.js";import{N as b}from"./q-Dp2hs1GQ.js";const v=async()=>{const[e]=d();e.value>1&&e.value--},x=m(i(()=>s(()=>import("./q-BFMTENlc.js"),[]),"s_qDtOTkDyxBY")),y=e=>{const u=f(1);return r("div",null,{class:"flex flex-col"},[r("label",null,{"aria-label":t(l=>l.label,[e]),class:"my-2",for:t(l=>`multi-combo-${l.suffix}`,[e])},t(l=>l.label,[e]),3,null),r("div",null,{class:"border-2 border-solid border-gray-500 px-4",id:t(l=>`multi-combo-${l.suffix}`,[e])},[o(b,{get name(){return`value-${e.suffix}`},get value(){return u.value},hidden:!0,[n]:{hidden:n,name:t(l=>`value-${l.suffix}`,[e]),value:t(l=>l.value,[u])}},3,"3V_0"),[...Array(u.value).keys()].map(l=>r("div",null,null,o(x,{suffix:`${e.suffix}-${l}`,get lte(){return e.lte},get nr(){return e.nr},get nrDc(){return e.nrDc},label:"Components",[n]:{label:n,lte:t(a=>a.lte,[e]),nr:t(a=>a.nr,[e]),nrDc:t(a=>a.nrDc,[e])}},3,"3V_1"),1,`multi-combo-${e.suffix}-${l}`)),r("div",null,{class:"flex flex-wrap gap-x-4"},[o(c,{label:"Remove",type:"button",get hidden(){return u.value<2},onClick$:i(()=>s(()=>Promise.resolve().then(()=>_),void 0),"s_WMHjPx0hMCY",[u]),[n]:{hidden:t(l=>l.value<2,[u]),label:n,onClick$:n,type:n}},3,"3V_2"),o(c,{label:"Add",onClick$:i(()=>s(()=>Promise.resolve().then(()=>_),void 0),"s_L9Lk8iJjnJI",[u]),type:"button",[n]:{label:n,onClick$:n,type:n}},3,"3V_3")],1,null)],1,null)],1,"3V_4")},$=async()=>{const[e]=d();e.value++},_=Object.freeze(Object.defineProperty({__proto__:null,s_2pjEpZsdP20:y,s_L9Lk8iJjnJI:$,s_WMHjPx0hMCY:v},Symbol.toStringTag,{value:"Module"}));export{y as s_2pjEpZsdP20,$ as s_L9Lk8iJjnJI,v as s_WMHjPx0hMCY};
