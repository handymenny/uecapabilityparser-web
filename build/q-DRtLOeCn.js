import{u as m,z as d,q as i,h as f,t as o,c as n,d as r,b as t}from"./q-CS8-Vk9R.js";import{_ as s}from"./q-C7i0xNVT.js";import{B as _}from"./q-jcbEK2Wa.js";import{N as b}from"./q-DWhTYxAe.js";const v=async()=>{const[e]=m();e.value>1&&e.value--},x=d(i(()=>s(()=>import("./q-BXflGruL.js"),[]),"s_qDtOTkDyxBY")),y=e=>{const u=f(1);return o("div",null,{class:"flex flex-col"},[o("label",null,{for:n(l=>`multi-combo-${l.suffix}`,[e]),"aria-label":n(l=>l.label,[e]),class:"my-2"},n(l=>l.label,[e]),3,null),o("div",null,{class:"border-2 border-solid border-gray-500 px-4",id:n(l=>`multi-combo-${l.suffix}`,[e])},[r(b,{get name(){return`value-${e.suffix}`},get value(){return u.value},hidden:!0,[t]:{name:n(l=>`value-${l.suffix}`,[e]),value:n(l=>l.value,[u]),hidden:t}},3,"3V_0"),[...Array(u.value).keys()].map(l=>o("div",null,null,r(x,{suffix:`${e.suffix}-${l}`,get lte(){return e.lte},get nr(){return e.nr},get nrDc(){return e.nrDc},label:"Components",[t]:{lte:n(a=>a.lte,[e]),nr:n(a=>a.nr,[e]),nrDc:n(a=>a.nrDc,[e]),label:t}},3,"3V_1"),1,`multi-combo-${e.suffix}-${l}`)),o("div",null,{class:"flex flex-wrap gap-x-4"},[r(_,{type:"button",label:"Remove",get hidden(){return u.value<2},onClick$:i(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_WMHjPx0hMCY",[u]),[t]:{type:t,label:t,hidden:n(l=>l.value<2,[u]),onClick$:t}},3,"3V_2"),r(_,{type:"button",label:"Add",onClick$:i(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_L9Lk8iJjnJI",[u]),[t]:{type:t,label:t,onClick$:t}},3,"3V_3")],1,null)],1,null)],1,"3V_4")},g=async()=>{const[e]=m();e.value++},c=Object.freeze(Object.defineProperty({__proto__:null,s_2pjEpZsdP20:y,s_L9Lk8iJjnJI:g,s_WMHjPx0hMCY:v},Symbol.toStringTag,{value:"Module"}));export{y as s_2pjEpZsdP20,g as s_L9Lk8iJjnJI,v as s_WMHjPx0hMCY};