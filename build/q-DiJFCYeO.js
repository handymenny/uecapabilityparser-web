import{l as y,c as L,q as d,B as P,p as I,O as Q,r as g,k as r,i as e,d as E,j as T,R as x,F as m,_hW as R}from"./q-BBXjioMF.js";import{E as b,S as j,a as w,A as h,T as M,m as O,C as V}from"./q-BgTwgXtn.js";import{_ as u}from"./q-CP35H2v1.js";import{A as q}from"./q-iHtqJgvh.js";import"./q-B_zQWQAU.js";const z=({track:a})=>{const[l,o]=y();if(a(()=>{o.criteriaList}),o.criteriaList.length!=0)return l(o)},F=Object.freeze(Object.defineProperty({__proto__:null,s_zvdVyg0QZIs:z},Symbol.toStringTag,{value:"Module"})),C=async a=>{var o;const l=b.STORE+"list/filtered";try{if(!await j.isAdvancedSearchSupported())throw"Advanced search is not available";const i=(await w.post(l,a)).data,s=i.items,A=i.multiItems??[],v=new Set;s.forEach(({id:t})=>v.add(t));const p=A.filter(t=>t.indexLineIds.some(c=>v.has(c))),S=new Set;p.forEach(({indexLineIds:t})=>{t.forEach(c=>S.add(c))});const f=[...s.filter(t=>!S.has(t.id)),...p];return f.sort((t,c)=>c.timestamp-t.timestamp),f}catch(n){if(w.isAxiosError(n))switch((o=n.response)==null?void 0:o.status){case 413:case 400:case 500:throw new h("Invalid search");default:throw new h(n.message)}throw new h(n)}},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_VbFoPEL9ENA:C},Symbol.toStringTag,{value:"Module"})),B=L(d(()=>u(()=>import("./q-X6ZywQmf.js"),[]),"s_iov0lSPLJrw")),H=L(d(()=>u(()=>import("./q-DR9WakX3.js"),[]),"s_QIGWB25C5SU")),J=()=>{P();const a=I({criteriaList:[]}),o=Q(d(()=>u(()=>Promise.resolve().then(()=>F),void 0),"s_zvdVyg0QZIs",[d(()=>u(()=>Promise.resolve().then(()=>D),void 0),"s_VbFoPEL9ENA"),a])),n=r(V,{centered:!0,[e]:{centered:e}},3,"PQ_0"),_=g(!1),i=g("");return r(m,{children:[r(M,{text:"Advanced Search",[e]:{text:e}},3,"PQ_1"),E("div",null,{class:"flex flex-1 flex-col"},[r(B,{query:a,[e]:{query:e}},3,"PQ_2"),r(q,{title:"Error",show:_,children:E("p",null,{dangerouslySetInnerHTML:T(s=>s.value,[i])},null,3,null),[e]:{title:e,show:e}},3,"PQ_3"),a.criteriaList.length==0||r(x,{value:o,onPending:()=>n,onResolved:s=>(P(),s==null?r(m,null,3,"PQ_4"):r(H,{data:s,advancedSearchMode:!0,searchId:"advancedSearch",[e]:{advancedSearchMode:e,searchId:e}},3,"PQ_5")),onRejected:s=>(_.value=!0,i.value=O(s.message),r(m,null,3,"PQ_6")),[e]:{value:e,onPending:e,onResolved:e,onRejected:e}},3,"PQ_7")],1,null)]},1,"PQ_8")};export{H as L,J as a,C as s,z as s_zvdVyg0QZIs};
