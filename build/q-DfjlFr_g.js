import{d as r,b as s,O as a,k as i,c as o,E as c,K as d,_ as u,$ as b}from"./q-B2JE0ZoP.js";import{f as _}from"./q-CCHYTjwz.js";const g=l=>{const n=`text-input-${r()}`;return s("div",null,{class:a(e=>"relative flex flex-col"+(e.hidden?" hidden":"")+(e.class?` ${e.class}`:""),[l]),"aria-hidden":a(e=>e.hidden,[l])},[s("label",{for:n},{"aria-label":a(e=>e.label,[l]),"aria-hidden":a(e=>e.hidden,[l]),class:a(e=>"my-2"+(e.labelClass?` ${e.labelClass}`:""),[l])},a(e=>e.label,[l]),3,null),s("select",{id:n,class:"appearance-none border-2 border-solid border-gray-500 bg-white p-2 px-2.5 pr-[40px] focus:outline-none focus:ring focus:ring-gray-400 disabled:border-gray-500 disabled:bg-gray-300"+(l.selectClass?` ${l.selectClass}`:"")},{name:a(e=>e.name,[l]),disabled:a(e=>e.disabled,[l]),onInput$:i(()=>u(()=>Promise.resolve().then(()=>f),void 0),"s_UYNGarXvu4c",[l])},l.options.map(e=>s("option",{value:o(e,"value"),selected:l.selectedValue==e.value?!0:void 0},null,e.label,1,e.value)),1,null),c(_,{size:28,strokeWidth:1.3,get color(){return l.disabled?"rgb(106, 112, 129)":void 0},class:"pointer-events-none absolute bottom-[0.4em] right-[0.5em]",[d]:{size:d,strokeWidth:d,color:a(e=>e.disabled?"rgb(106, 112, 129)":void 0,[l]),class:d}},3,"5o_0")],1,"5o_1")},v=(l,t)=>{const[n]=b();n.onInput$&&n.onInput$(t.value)},f=Object.freeze(Object.defineProperty({__proto__:null,s_UYNGarXvu4c:v,s_a08hikrrgz0:g},Symbol.toStringTag,{value:"Module"}));export{v as s_UYNGarXvu4c,g as s_a08hikrrgz0};