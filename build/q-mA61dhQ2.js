import{f as x,V as d,g as a,_ as n,P as o,h as i,K as s,C as u,L as E,v as C}from"./q-OIKTu0zg.js";import{B as b}from"./q-n29VRYS0.js";import{L as O}from"./q-tcdBUplm.js";import{A as P}from"./q-hejy-FsA.js";import{E as g,a as h}from"./q-ZppFbWGL.js";const A=async()=>{const[t,m]=x();await t(m)},D=(t,m)=>new Promise((v,_)=>{const c=new FileReader;c.onloadend=()=>{const r=c.result,l=document.createElementNS("http://www.w3.org/1999/xhtml","a");l.download=m,l.href=r,l.dispatchEvent(new MouseEvent("click")),v(!0)},c.onerror=r=>{_(r)},c.readAsDataURL(t)}),I=d(a(()=>n(()=>import("./q-Ja1XdO2b.js"),__vite__mapDeps([])),"s_sD3aCbP01XU")),y=d(a(()=>n(()=>import("./q-5Mpe6bHi.js"),__vite__mapDeps([])),"s_8UCveneOcvc")),R=d(a(()=>n(()=>import("./q-m6ltsrhL.js"),__vite__mapDeps([])),"s_XHwTFp0s9lo")),T=d(a(()=>n(()=>import("./q-pbzXK3IK.js"),__vite__mapDeps([])),"s_h7pB8sysxA0")),V=d(a(()=>n(()=>import("./q-riEMYql_.js"),__vite__mapDeps([])),"s_dBlYdkjOYyM")),L=d(a(()=>n(()=>import("./q-NB-KWXZ5.js"),__vite__mapDeps([])),"s_ET5UV9wpTS8")),B=d(a(()=>n(()=>import("./q-isfNdWJF.js"),__vite__mapDeps([])),"s_Zdgphc4Ye00")),j=d(a(()=>n(()=>import("./q-jt-Q60UE.js"),__vite__mapDeps([])),"s_y4bcb2aaHyU")),N=t=>{var r;const m=[{label:"Download LTE CA CSV",type:"lteca"},{label:"Download EN DC CSV",type:"endc"},{label:"Download NR CA CSV",type:"nrca"},{label:"Download NR DC CSV",type:"nrdc"}],_=a(()=>n(()=>Promise.resolve().then(()=>w),void 0),"s_K60auzrBjoo",[t,a(()=>n(()=>Promise.resolve().then(()=>w),void 0),"s_gajOxvIkrU8")]),c=a(()=>n(()=>Promise.resolve().then(()=>w),void 0),"s_j4g0R0xj0OU");return o(E,{children:i("div",null,{class:"flex flex-1 flex-col"},[i("div",null,{class:"mx-auto grid w-full max-w-7xl grid-cols-3 gap-x-5 gap-y-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"},[m.map(({label:l,type:e})=>{var f;return o(b,{hidden:((f=t.capabilities)==null?void 0:f[e])==null,label:l,onClick$:a(()=>n(()=>Promise.resolve().then(()=>w),void 0),"s_OGIZVgS7ipg",[_,e]),type:"button",[s]:{type:s}},3,e)}),(r=t.inputs)==null?void 0:r.map(l=>o(b,{label:"Download Input "+(parseInt(l.split("-").slice(-1)[0])+1),onClick$:a(()=>n(()=>Promise.resolve().then(()=>w),void 0),"s_bjX5H0NmHyI",[c,l]),type:"button",[s]:{type:s}},3,l))],1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(T,{get cap(){return t.capabilities??void 0},title:"Metadata",[s]:{cap:u(l=>l.capabilities??void 0,[t]),title:s}},3,"g7_0"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(j,{get cap(){return t.capabilities??void 0},title:"Generic Capabilities",[s]:{cap:u(l=>l.capabilities??void 0,[t]),title:s}},3,"g7_1"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(y,{get filters(){var l;return((l=t.capabilities)==null?void 0:l.ueCapFilters)??void 0},title:"Filters",[s]:{filters:u(l=>{var e;return((e=l.capabilities)==null?void 0:e.ueCapFilters)??void 0},[t]),title:s}},3,"g7_2"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(R,{get bands(){var l;return(l=t.capabilities)==null?void 0:l.lteBands},title:"LTE Bands",[s]:{bands:u(l=>{var e;return(e=l.capabilities)==null?void 0:e.lteBands},[t]),title:s}},3,"g7_3"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(V,{get bands(){var l;return(l=t.capabilities)==null?void 0:l.nrBands},title:"NR Bands",[s]:{bands:u(l=>{var e;return(e=l.capabilities)==null?void 0:e.nrBands},[t]),title:s}},3,"g7_4"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(O,{get combos(){var l;return(l=t.capabilities)==null?void 0:l.lteca},title:"LTE CA Combos",[s]:{combos:u(l=>{var e;return(e=l.capabilities)==null?void 0:e.lteca},[t]),title:s}},3,"g7_5"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(I,{get combos(){var l;return(l=t.capabilities)==null?void 0:l.endc},title:"EN-DC Combos",[s]:{combos:u(l=>{var e;return(e=l.capabilities)==null?void 0:e.endc},[t]),title:s}},3,"g7_6"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(L,{get combos(){var l;return(l=t.capabilities)==null?void 0:l.nrca},title:"NR CA Combos",[s]:{combos:u(l=>{var e;return(e=l.capabilities)==null?void 0:e.nrca},[t]),title:s}},3,"g7_7"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},o(B,{get combos(){var l;return(l=t.capabilities)==null?void 0:l.nrdc},title:"NR DC Combos",[s]:{combos:u(l=>{var e;return(e=l.capabilities)==null?void 0:e.nrdc},[t]),title:s}},3,"g7_8"),1,null),1,null)],1,null)},1,"g7_9")},S=async t=>{var r,l;const[m,v]=x(),_={type:t,input:(r=m.capabilities)==null?void 0:r[t]},c=g.CSV;try{const e=await h.post(c,_,{responseType:"blob"}),p=(l=e.headers["content-disposition"])==null?void 0:l.split("filename=")[1];await v(e.data,p??"unknown")}catch(e){throw new P(e)}},U=async()=>{const[t,m]=x();await t(m)},k=t=>{const m=g.STORE+"getInput";location.href=`${m}/?id=${t}`},w=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_CQ3Pn250fG0:N,s_K60auzrBjoo:S,s_OGIZVgS7ipg:U,s_bjX5H0NmHyI:A,s_gajOxvIkrU8:D,s_j4g0R0xj0OU:k},Symbol.toStringTag,{value:"Module"}));export{C as _hW,N as s_CQ3Pn250fG0,S as s_K60auzrBjoo,U as s_OGIZVgS7ipg,A as s_bjX5H0NmHyI,D as s_gajOxvIkrU8,k as s_j4g0R0xj0OU};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}