import{l as f,o as l,R as y,W as h,j as o,K as e,m as p,s as g,z as v,p as w,C as P,y as i,a as u,i as T}from"./q-rDVhsHeT.js";import{A as C}from"./q-gRzOO8zH.js";import{C as E}from"./q-80nGW0SA.js";import{M as R}from"./q-t8g9w3WF.js";import{T as x}from"./q-NCTa9HBh.js";import{m as L,A}from"./q-bmToohCY.js";import{a as O}from"./q-AwFONOrQ.js";import{E as b,a as j}from"./q-y2-pKzoJ.js";const W=({track:t})=>{const[s,a]=f(),r=t(()=>a.value);if(r!=null)return s(r)},D=()=>{const[t,s]=f();t.value=s.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},M=()=>{const t=O(),s=l(void 0),r=y(i(()=>u(()=>Promise.resolve().then(()=>c),void 0),"s_vx8QB3U0mW8",[i(()=>u(()=>Promise.resolve().then(()=>c),void 0),"s_NdiPeYMKWOw"),s]));h(i(()=>u(()=>Promise.resolve().then(()=>c),void 0),"s_HjDTTLTuCps",[s,t]),{strategy:"document-ready"});const d=o(E,{centered:!0,[e]:{centered:e}},3,"0y_0"),_=l(!1),m=l("");return o(v,{children:[o(x,{text:"View",[e]:{text:e}},3,"0y_1"),p("div",null,{class:"flex flex-1 flex-col"},[o(g,{onPending:()=>d,onRejected:n=>(_.value=!0,m.value=L(n.message),o(v,null,3,"0y_3")),onResolved:n=>(w(),n==null?d:o(R,{capabilitiesList:[n]},3,"0y_2")),value:r,[e]:{onPending:e,onRejected:e,onResolved:e,value:e}},3,"0y_4"),o(C,{children:p("p",null,{dangerouslySetInnerHTML:P(n=>n.value,[m])},null,3,null),show:_,title:"Error",[e]:{show:e,title:e}},3,"0y_5")],1,null)]},1,"0y_6")},I=async t=>{const a=b.STORE+"getOutput";try{return(await j.get(a,{params:{id:t}})).data}catch(r){throw new A(r)}},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:T,s_1AFCdPDLG0I:M,s_HjDTTLTuCps:D,s_NdiPeYMKWOw:I,s_vx8QB3U0mW8:W},Symbol.toStringTag,{value:"Module"}));export{T as _hW,M as s_1AFCdPDLG0I,D as s_HjDTTLTuCps,I as s_NdiPeYMKWOw,W as s_vx8QB3U0mW8};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
