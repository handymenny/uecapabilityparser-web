import{A as _,o as A,v as l,_ as r,Q as E,u as P,j as p,C as I,p as c,S as y,R as T,H as C}from"./q-S9UpRIKE.js";import{a as W}from"./q-QLjAsgXu.js";import{S as z}from"./q-d_pFcQSE.js";import{l as D}from"./q-bLh_hPAl.js";const O=async e=>{const[s]=_();try{const i="/store/getItem",a=(await W.get(i,{params:{id:e}})).data;s.value[e]=a}catch{}return s.value[e]},R=async()=>{var o;const[e,s,i]=_(),n=(o=e.value)==null?void 0:o.id;if(n==null)return;const a=i.value[n]??await s(n);return a==null?void 0:a.inputs},U=()=>{var i;const[e,s]=_();return(i=s.capabilitiesList)==null?void 0:i[e.value]},j=e=>{const[s]=_(),i=Number.parseInt(e);s.value=i},V=A(l(()=>r(()=>import("./q-Xhc2IQu0.js"),__vite__mapDeps([0,1,2,3,4])),"s_CQ3Pn250fG0")),N=e=>{var v,g,b,f,h;const s=E(0),i=P(l(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_M2E6PEhzjpg",[s,e])),n=E({}),o=P(l(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_rWqyWnUJe4k",[i,l(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_9KFdxWCvbg4",[n]),n])),d=[],L=((v=e.capabilitiesList)==null?void 0:v.map(t=>t.metadata.description??"").filter(t=>t.length>0))??[],x=new Set(L).size==((g=e.capabilitiesList)==null?void 0:g.length),m=((b=e.capabilitiesList)==null?void 0:b.map(t=>t.logType))??[],w=new Set(m).size==m.length;return(f=e.capabilitiesList)==null||f.map((t,S)=>{d.push({label:x?t.metadata.description:w?D(t.logType):t.id,value:S})}),(h=e.capabilitiesList)==null||h.forEach(t=>t.metadata.groupDescription=e.groupDescription??""),p(T,{children:[I("div",{class:"mb-4 flex flex-col "+(d.length<2?" hidden":"")},null,I("div",null,{class:"mx-auto w-full max-w-7xl"},p(z,{label:"Select log",onInput$:l(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_4gaGE7z61PU",[s]),options:d,[c]:{label:c,onInput$:c}},3,"NL_0"),1,null),1,null),p(V,{get capabilities(){return i.value},get inputs(){return o.value},[c]:{capabilities:y(t=>t.value,[i]),inputs:y(t=>t.value,[o])}},3,"NL_1")]},1,"NL_2")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_4gaGE7z61PU:j,s_9KFdxWCvbg4:O,s_AU75U67QNPw:N,s_M2E6PEhzjpg:U,s_rWqyWnUJe4k:R},Symbol.toStringTag,{value:"Module"}));export{C as _hW,j as s_4gaGE7z61PU,O as s_9KFdxWCvbg4,N as s_AU75U67QNPw,U as s_M2E6PEhzjpg,R as s_rWqyWnUJe4k};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["build/q-Xhc2IQu0.js","build/q-S9UpRIKE.js","build/q-knF94eTT.js","build/q-PuxAhfG-.js","build/q-QLjAsgXu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}