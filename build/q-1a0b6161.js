import{_ as d,G as n,r as P,C as b,p as C,g as u,m as l,a as c,d as w}from"./q-8f3f0f08.js";import{C as D}from"./q-4efed8e2.js";import{a as T}from"./q-098159fa.js";import{a as _}from"./q-82afda87.js";const h=()=>{const[e,t]=d();e(t.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??"")},L=()=>{const e=T(),t=n({value:void 0}),a=n({value:[]});return P(l(()=>c(()=>Promise.resolve().then(()=>p),void 0),"s_HjDTTLTuCps",[l(()=>c(()=>Promise.resolve().then(()=>p),void 0),"s_NdiPeYMKWOw",[a,t]),e])),b(D,{get capabilities(){return t.value},get inputs(){return a.value},[C]:{capabilities:u(s=>s.value,[t]),inputs:u(s=>s.value,[a])}},3,"0y_0")},f=async e=>{const[t,a]=d(),i="/store/",s=i+"getItem",m=i+"getOutput";try{const r=(await _.get(s,{params:{id:e}})).data,g=r.id,v=await _.get(m,{params:{id:g}});t.value=r.inputs,a.value=v.data}catch(o){console.error(o),alert(o)}},p=Object.freeze(Object.defineProperty({__proto__:null,_hW:w,s_1AFCdPDLG0I:L,s_HjDTTLTuCps:h,s_NdiPeYMKWOw:f},Symbol.toStringTag,{value:"Module"}));export{w as _hW,L as s_1AFCdPDLG0I,h as s_HjDTTLTuCps,f as s_NdiPeYMKWOw};
