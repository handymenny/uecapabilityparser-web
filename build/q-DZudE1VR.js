import{g as _,c as O,q as l,r as y,H as E,l as d,d as S,j as c,k as x,F as j,y as T}from"./q-PXVB0oKg.js";import{E as w,a as A}from"./q-BdjY5jE6.js";import{_ as r}from"./q-Biq04Hab.js";import{S as z}from"./q-CmAORqAF.js";import{l as D}from"./q-ZD5Rm-05.js";const q=async e=>{const[n]=_();try{const s=w.STORE+"getItem",o=(await A.get(s,{params:{id:e}})).data;n.value[e]=o}catch{}return n.value[e]},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:T,s_9KFdxWCvbg4:q},Symbol.toStringTag,{value:"Module"})),M=async()=>{var a;const[e,n,s]=_(),i=(a=e.value)==null?void 0:a.id;if(i==null)return;const o=s.value[i]??await n(i);return o==null?void 0:o.inputs},R=Object.freeze(Object.defineProperty({__proto__:null,s_rWqyWnUJe4k:M},Symbol.toStringTag,{value:"Module"})),U=()=>{var s;const[e,n]=_();return(s=n.capabilitiesList)==null?void 0:s[e.value]},W=Object.freeze(Object.defineProperty({__proto__:null,s_M2E6PEhzjpg:U},Symbol.toStringTag,{value:"Module"})),k=async e=>{const[n]=_(),s=Number.parseInt(e);n.value=s},V=Object.freeze(Object.defineProperty({__proto__:null,s_gDnqOURi7KA:k},Symbol.toStringTag,{value:"Module"})),N=O(l(()=>r(()=>import("./q-GUupUx5P.js"),[]),"s_CQ3Pn250fG0")),B=e=>{var m,g,b,f,v;const n=y(0),s=E(l(()=>r(()=>Promise.resolve().then(()=>W),void 0),"s_M2E6PEhzjpg",[n,e])),i=y({}),a=E(l(()=>r(()=>Promise.resolve().then(()=>R),void 0),"s_rWqyWnUJe4k",[s,l(()=>r(()=>Promise.resolve().then(()=>C),void 0),"s_9KFdxWCvbg4",[i]),i])),u=[],P=((m=e.capabilitiesList)==null?void 0:m.map(t=>t.metadata.description??"").filter(t=>t.length>0))??[],h=new Set(P).size==((g=e.capabilitiesList)==null?void 0:g.length),p=((b=e.capabilitiesList)==null?void 0:b.map(t=>t.logType))??[],I=new Set(p).size==p.length;return(f=e.capabilitiesList)==null||f.map((t,L)=>{u.push({label:h?t.metadata.description:I?D(t.logType):t.id,value:L})}),(v=e.capabilitiesList)==null||v.forEach(t=>t.metadata.groupDescription=e.groupDescription??""),d(j,{children:[S("div",{class:"mb-4 flex flex-col "+(u.length<2?"hidden":"")},null,S("div",null,{class:"mx-auto w-full max-w-7xl"},d(z,{label:"Select log",options:u,onInput$:l(()=>r(()=>Promise.resolve().then(()=>V),void 0),"s_gDnqOURi7KA",[n]),[c]:{label:c,onInput$:c}},3,"NL_0"),1,null),1,null),d(N,{get capabilities(){return s.value},get inputs(){return a.value},[c]:{capabilities:x(t=>t.value,[s]),inputs:x(t=>t.value,[a])}},3,"NL_1")]},1,"NL_2")};export{T as _hW,U as a,k as b,B as c,M as s,q as s_9KFdxWCvbg4};
