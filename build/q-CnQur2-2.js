import{l as v,r as l,O as f,N as y,k as o,i as e,d as p,R as T,B as b,F as m,j as w,q as i,_hW as g}from"./q-BBXjioMF.js";import{a as P,_ as u}from"./q-DjN_VROE.js";import{A as h}from"./q-BZczDd4L.js";import{T as j,M as x,m as O,C as S,E,a as L,A as R}from"./q-Jqvfkqrp.js";import"./q-LAiQEc50.js";const M=({track:t})=>{const[s,a]=v(),r=t(()=>a.value);if(r!=null)return s(r)},A=Object.freeze(Object.defineProperty({__proto__:null,s_vx8QB3U0mW8:M},Symbol.toStringTag,{value:"Module"})),C=()=>{const[t,s]=v();t.value=s.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_HjDTTLTuCps:C},Symbol.toStringTag,{value:"Module"})),H=()=>{const t=P(),s=l(void 0),r=f(i(()=>u(()=>Promise.resolve().then(()=>A),void 0),"s_vx8QB3U0mW8",[i(()=>u(()=>Promise.resolve().then(()=>V),void 0),"s_NdiPeYMKWOw"),s]));y(i(()=>u(()=>Promise.resolve().then(()=>D),void 0),"s_HjDTTLTuCps",[s,t]),{strategy:"document-ready"});const c=o(S,{centered:!0,[e]:{centered:e}},3,"0y_0"),_=l(!1),d=l("");return o(m,{children:[o(j,{text:"View",[e]:{text:e}},3,"0y_1"),p("div",null,{class:"flex flex-1 flex-col"},[o(T,{value:r,onPending:()=>c,onResolved:n=>(b(),n==null?c:o(x,{capabilitiesList:[n]},3,"0y_2")),onRejected:n=>(_.value=!0,d.value=O(n.message),o(m,null,3,"0y_3")),[e]:{value:e,onPending:e,onResolved:e,onRejected:e}},3,"0y_4"),o(h,{title:"Error",show:_,children:p("p",null,{dangerouslySetInnerHTML:w(n=>n.value,[d])},null,3,null),[e]:{title:e,show:e}},3,"0y_5")],1,null)]},1,"0y_6")},I=async t=>{const a=E.STORE+"getOutput";try{return(await L.get(a,{params:{id:t}})).data}catch(r){throw new R(r)}},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_NdiPeYMKWOw:I},Symbol.toStringTag,{value:"Module"}));export{H as a,I as b,C as s,M as s_vx8QB3U0mW8};
