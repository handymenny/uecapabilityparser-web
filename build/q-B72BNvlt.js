import{g,r as l,P as y,O as f,l as n,j as e,d as p,R as T,C as P,F as m,k as b,q as i,y as v}from"./q-PXVB0oKg.js";import{a as w,_ as u}from"./q-Biq04Hab.js";import{A as h}from"./q-CMhPc5Nv.js";import{T as j,M as x,m as O,C as S,E,a as L,A as R}from"./q-BdjY5jE6.js";const M=({track:t})=>{const[s,a]=g(),r=t(()=>a.value);if(r!=null)return s(r)},A=Object.freeze(Object.defineProperty({__proto__:null,s_vx8QB3U0mW8:M},Symbol.toStringTag,{value:"Module"})),C=()=>{const[t,s]=g();t.value=s.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_HjDTTLTuCps:C},Symbol.toStringTag,{value:"Module"})),B=()=>{const t=w(),s=l(void 0),r=y(i(()=>u(()=>Promise.resolve().then(()=>A),void 0),"s_vx8QB3U0mW8",[i(()=>u(()=>Promise.resolve().then(()=>V),void 0),"s_NdiPeYMKWOw"),s]));f(i(()=>u(()=>Promise.resolve().then(()=>D),void 0),"s_HjDTTLTuCps",[s,t]),{strategy:"document-ready"});const c=n(S,{centered:!0,[e]:{centered:e}},3,"0y_0"),_=l(!1),d=l("");return n(m,{children:[n(j,{text:"View",[e]:{text:e}},3,"0y_1"),p("div",null,{class:"flex flex-1 flex-col"},[n(T,{value:r,onPending:()=>c,onResolved:o=>(P(),o==null?c:n(x,{capabilitiesList:[o]},3,"0y_2")),onRejected:o=>(_.value=!0,d.value=O(o.message),n(m,null,3,"0y_3")),[e]:{value:e,onPending:e,onResolved:e,onRejected:e}},3,"0y_4"),n(h,{title:"Error",show:_,children:p("p",null,{dangerouslySetInnerHTML:b(o=>o.value,[d])},null,3,null),[e]:{title:e,show:e}},3,"0y_5")],1,null)]},1,"0y_6")},I=async t=>{const a=E.STORE+"getOutput";try{return(await L.get(a,{params:{id:t}})).data}catch(r){throw new R(r)}},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_NdiPeYMKWOw:I},Symbol.toStringTag,{value:"Module"}));export{B as a,I as b,C as s,M as s_vx8QB3U0mW8};