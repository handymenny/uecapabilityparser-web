import{A as T,m as g}from"./q-bmToohCY.js";import{E as R,a as A}from"./q-y2-pKzoJ.js";import{l as y,o as c,R as E,W as w,j as o,K as e,m as f,s as x,z as h,p as P,C as b,y as m,a as u,i as O}from"./q-rDVhsHeT.js";import{A as S}from"./q-gRzOO8zH.js";import{C as q}from"./q-80nGW0SA.js";import{L as W}from"./q-Rnn59w1D.js";import{T as Y}from"./q-NCTa9HBh.js";const j=async()=>{const t=R.STORE+"list";try{const n=(await A.get(t)).data,a=n.items,i=(n.multiItems??[]).filter(r=>r.indexLineIds.filter(I=>a.find(L=>L.id==I)).length>0),s=i.flatMap(r=>r.indexLineIds),p=[...a.filter(r=>!s.includes(r.id)),...i];return p.sort((r,v)=>v.timestamp-r.timestamp),p}catch(l){throw new T(l)}},C=()=>{const[t]=y();t.value=!0},D=({track:t})=>{const[l,n]=y();return t(()=>{l.value}),n()},K=()=>{const t=c(!1),n=E(m(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_K2AL36ToWNc",[t,m(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_8kHd0t4Kr4U")]));w(m(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_aI8LeIpOv9A",[t]),{strategy:"document-ready"});const a=o(q,{centered:!0,[e]:{centered:e}},3,"qY_0"),d=c(!1),i=c("");return o(h,{children:[o(Y,{text:"Library",[e]:{text:e}},3,"qY_1"),f("div",null,{class:"flex flex-1 flex-col"},[o(x,{onPending:()=>a,onRejected:s=>(d.value=!0,i.value=g(s.message),o(h,null,3,"qY_3")),onResolved:s=>(P(),s==null?a:o(W,{data:s,searchId:"library",[e]:{searchId:e}},3,"qY_2")),value:n,[e]:{onPending:e,onRejected:e,onResolved:e,value:e}},3,"qY_4"),o(S,{children:f("p",null,{dangerouslySetInnerHTML:b(s=>s.value,[i])},null,3,null),show:d,title:"Error",[e]:{show:e,title:e}},3,"qY_5")],1,null)]},1,"qY_6")},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:O,s_8kHd0t4Kr4U:j,s_K2AL36ToWNc:D,s_aI8LeIpOv9A:C,s_d0IvhoDvWfs:K},Symbol.toStringTag,{value:"Module"}));export{O as _hW,j as s_8kHd0t4Kr4U,D as s_K2AL36ToWNc,C as s_aI8LeIpOv9A,K as s_d0IvhoDvWfs};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
