import{l as m,B as f,G as p,r as d,k as o,d as u,q as c,i as e,j as r,F as v}from"./q-BmWDAmC3.js";import{_}from"./q-1dnJZ1Td.js";import{N as i}from"./q-C2sjaPfx.js";import{S as b,T as x}from"./q-BT-09Wvn.js";import"./q-B03XKs-v.js";import"./q-AfaYsOho.js";const D=async l=>{const[s]=m();s.value=l},h=Object.freeze(Object.defineProperty({__proto__:null,s_M0Ex3Tw2diI:D},Symbol.toStringTag,{value:"Module"})),g=()=>{const[l,s]=m();let t=l;return s.lte==!1&&(t=t.filter(a=>!a.value.startsWith("lte"))),s.nr==!1&&(t=t.filter(a=>!a.value.startsWith("nr"))),s.nrDc==!1&&(t=t.filter(a=>!a.value.startsWith("nrDc"))),t},I=Object.freeze(Object.defineProperty({__proto__:null,s_guku10G5RSY:g},Symbol.toStringTag,{value:"Module"})),E=l=>{f();const t=p(c(()=>_(()=>Promise.resolve().then(()=>I),void 0),"s_guku10G5RSY",[[{label:"LTE DL",value:"lteDl"},{label:"LTE UL",value:"lteUl"},{label:"NR DL",value:"nrDl"},{label:"NR UL",value:"nrUl"},{label:"NR DC DL",value:"nrDcDl"},{label:"NR DC UL",value:"nrDcUl"}],l])),a=d(l.lte?"lteDl":"nrDl");return o(v,{children:[u("div",null,{class:"flex-1"},o(b,{label:"Type",get name(){return`type-${l.suffix}`},get options(){return t.value},onInput$:c(()=>_(()=>Promise.resolve().then(()=>h),void 0),"s_M0Ex3Tw2diI",[a]),[e]:{label:e,name:r(n=>`type-${n.suffix}`,[l]),options:r(n=>n.value,[t]),onInput$:e}},3,"D8_0"),1,null),u("div",null,{class:"flex-1"},o(i,{min:0,label:"Band",get name(){return`band-${l.suffix}`},placeholder:"Insert value",[e]:{min:e,label:e,name:r(n=>`band-${n.suffix}`,[l]),placeholder:e}},3,"D8_1"),1,null),u("div",null,{class:"flex-1"},o(x,{label:"BW Class",get name(){return`class-${l.suffix}`},placeholder:"Insert value",[e]:{label:e,name:r(n=>`class-${n.suffix}`,[l]),placeholder:e}},3,"D8_2"),1,null),a.value!="lteUl"&&u("div",null,{class:"flex-1"},o(i,{min:0,label:"MIMO",get name(){return`mimo-${l.suffix}`},placeholder:"Insert value",[e]:{min:e,label:e,name:r(n=>`mimo-${n.suffix}`,[l]),placeholder:e}},3,"D8_3"),1,"D8_4"),a.value.startsWith("nr")&&u("div",null,{class:"flex-1"},o(i,{min:0,label:"BW per CC",get name(){return`bw-${l.suffix}`},placeholder:"Insert value",[e]:{min:e,label:e,name:r(n=>`bw-${n.suffix}`,[l]),placeholder:e}},3,"D8_5"),1,"D8_6")]},1,"D8_7")};export{E as a,g as s,D as s_M0Ex3Tw2diI};
