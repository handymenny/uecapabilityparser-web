import{l as v,r as l,O as x,N as f,k as o,i as e,d as p,R as w,B as y,F as m,j as b,q as i,_hW as g}from"./q-BmWDAmC3.js";import{a as T,_ as u}from"./q-N76fqm0C.js";import{A as P}from"./q-CNqbcB-8.js";import{T as h,M as j,m as O,C as S,E,a as L,A as R}from"./q-C4B1v-9_.js";import"./q-BFjpPt7-.js";const M=({track:t})=>{const[s,a]=v(),n=t(()=>a.value);if(n!=null)return s(n)},A=Object.freeze(Object.defineProperty({__proto__:null,s_vx8QB3U0mW8:M},Symbol.toStringTag,{value:"Module"})),C=()=>{const[t,s]=v();t.value=s.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_HjDTTLTuCps:C},Symbol.toStringTag,{value:"Module"})),H=()=>{const t=T(),s=l(void 0),n=x(i(()=>u(()=>Promise.resolve().then(()=>A),void 0),"s_vx8QB3U0mW8",[i(()=>u(()=>Promise.resolve().then(()=>V),void 0),"s_NdiPeYMKWOw"),s]));f(i(()=>u(()=>Promise.resolve().then(()=>D),void 0),"s_HjDTTLTuCps",[s,t]),{strategy:"document-ready"});const _=o(S,{centered:!0,[e]:{centered:e}},3,"0y_0"),c=l(!1),d=l("");return o(m,{children:[o(h,{text:"View",[e]:{text:e}},3,"0y_1"),p("div",null,{class:"flex flex-1 flex-col"},[o(w,{value:n,onPending:()=>_,onResolved:r=>(y(),r==null?_:o(j,{capabilitiesList:[r]},3,"0y_2")),onRejected:r=>(c.value=!0,d.value=O(r.message),o(m,null,3,"0y_3")),[e]:{value:e,onPending:e,onResolved:e,onRejected:e}},3,"0y_4"),o(P,{title:"Error",show:c,children:p("p",null,{dangerouslySetInnerHTML:b(r=>r.value,[d])},null,3,null),[e]:{title:e,show:e}},3,"0y_5")],1,null)]},1,"0y_6")},I=async t=>{const a=E.STORE+"getOutput";try{return(await L.get(a,{params:{id:t}})).data}catch(n){throw new R(n)}},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_NdiPeYMKWOw:I},Symbol.toStringTag,{value:"Module"}));export{H as a,I as b,C as s,M as s_vx8QB3U0mW8};