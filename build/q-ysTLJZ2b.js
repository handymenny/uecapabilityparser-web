import{$ as f,c as i,C as w,L as y,E as n,K as e,d as p,N as P,f as v,e as g,M as h,q as l,_ as u,w as T}from"./q-Kd_xxsJC.js";import{A as E}from"./q-r3oRQXlD.js";import{C as L}from"./q--0j82N4m.js";import{M as x}from"./q-aebpWHlB.js";import{T as A}from"./q-Byi_tuze.js";import{m as C,A as M}from"./q-r9T-FASW.js";import{a as O}from"./q-GJUr6Laa.js";import{E as R,a as b}from"./q-L-MmQ_Xo.js";const D=({track:t})=>{const[s,a]=f(),r=t(()=>a.value);if(r!=null)return s(r)},j=()=>{const[t,s]=f();t.value=s.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},I=()=>{const t=O(),s=i(void 0),r=w(l(()=>u(()=>Promise.resolve().then(()=>c),void 0),"s_vx8QB3U0mW8",[l(()=>u(()=>Promise.resolve().then(()=>c),void 0),"s_NdiPeYMKWOw"),s]));y(l(()=>u(()=>Promise.resolve().then(()=>c),void 0),"s_HjDTTLTuCps",[s,t]),{strategy:"document-ready"});const d=n(L,{centered:!0,[e]:{centered:e}},3,"0y_0"),_=i(!1),m=i("");return n(v,{children:[n(A,{text:"View",[e]:{text:e}},3,"0y_1"),p("div",null,{class:"flex flex-1 flex-col"},[n(P,{onPending:()=>d,onRejected:o=>(_.value=!0,m.value=C(o.message),n(v,null,3,"0y_3")),onResolved:o=>(g(),o==null?d:n(x,{capabilitiesList:[o]},3,"0y_2")),value:r,[e]:{onPending:e,onRejected:e,onResolved:e,value:e}},3,"0y_4"),n(E,{children:p("p",null,{dangerouslySetInnerHTML:h(o=>o.value,[m])},null,3,null),show:_,title:"Error",[e]:{show:e,title:e}},3,"0y_5")],1,null)]},1,"0y_6")},S=async t=>{const a=R.STORE+"getOutput";try{return(await b.get(a,{params:{id:t}})).data}catch(r){throw new M(r)}},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:T,s_1AFCdPDLG0I:I,s_HjDTTLTuCps:j,s_NdiPeYMKWOw:S,s_vx8QB3U0mW8:D},Symbol.toStringTag,{value:"Module"}));export{T as _hW,I as s_1AFCdPDLG0I,j as s_HjDTTLTuCps,S as s_NdiPeYMKWOw,D as s_vx8QB3U0mW8};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
