import{l as x,c as L,q as d,B as g,p as y,O as I,r as P,k as r,i as e,d as E,j as Q,R as T,F as m,_hW as R}from"./q-BmWDAmC3.js";import{E as b,S as j,a as w,A as h,T as M,m as O,C as V}from"./q-C4B1v-9_.js";import{_}from"./q-N76fqm0C.js";import{A as q}from"./q-CNqbcB-8.js";import"./q-BFjpPt7-.js";const z=({track:a})=>{const[l,o]=x();if(a(()=>{o.criteriaList}),o.criteriaList.length!=0)return l(o)},F=Object.freeze(Object.defineProperty({__proto__:null,s_zvdVyg0QZIs:z},Symbol.toStringTag,{value:"Module"})),C=async a=>{var o;const l=b.STORE+"list/filtered";try{if(!await j.isAdvancedSearchSupported())throw"Advanced search is not available";const i=(await w.post(l,a)).data,t=i.items,A=i.multiItems??[],v=new Set;t.forEach(({id:s})=>v.add(s));const p=A.filter(s=>s.indexLineIds.some(c=>v.has(c))),S=new Set;p.forEach(({indexLineIds:s})=>{s.forEach(c=>S.add(c))});const f=[...t.filter(s=>!S.has(s.id)),...p];return f.sort((s,c)=>c.timestamp-s.timestamp),f}catch(n){if(w.isAxiosError(n))switch((o=n.response)==null?void 0:o.status){case 413:case 400:case 500:throw new h("Invalid search");default:throw new h(n.message)}throw new h(n)}},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_VbFoPEL9ENA:C},Symbol.toStringTag,{value:"Module"})),B=L(d(()=>_(()=>import("./q-DmCpjWYE.js"),[]),"s_iov0lSPLJrw")),H=L(d(()=>_(()=>import("./q-Dj8NLf3F.js"),[]),"s_QIGWB25C5SU")),J=()=>{g();const a=y({criteriaList:[]}),o=I(d(()=>_(()=>Promise.resolve().then(()=>F),void 0),"s_zvdVyg0QZIs",[d(()=>_(()=>Promise.resolve().then(()=>D),void 0),"s_VbFoPEL9ENA"),a])),n=r(V,{centered:!0,[e]:{centered:e}},3,"PQ_0"),u=P(!1),i=P("");return r(m,{children:[r(M,{text:"Advanced Search",[e]:{text:e}},3,"PQ_1"),E("div",null,{class:"flex flex-1 flex-col"},[r(B,{query:a,[e]:{query:e}},3,"PQ_2"),r(q,{title:"Error",show:u,children:E("p",null,{dangerouslySetInnerHTML:Q(t=>t.value,[i])},null,3,null),[e]:{title:e,show:e}},3,"PQ_3"),a.criteriaList.length==0||r(T,{value:o,onPending:()=>n,onResolved:t=>(g(),t==null?r(m,null,3,"PQ_4"):r(H,{data:t,advancedSearchMode:!0,searchId:"advancedSearch",[e]:{advancedSearchMode:e,searchId:e}},3,"PQ_5")),onRejected:t=>(u.value=!0,i.value=O(t.message),r(m,null,3,"PQ_6")),[e]:{value:e,onPending:e,onResolved:e,onRejected:e}},3,"PQ_7")],1,null)]},1,"PQ_8")};export{H as L,J as a,C as s,z as s_zvdVyg0QZIs};