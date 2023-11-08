import{R as x,o as _,h as o,_ as m,j as n,f as i,S as a,Y as s,z as g,H as E}from"./q-72893bb5.js";import{B as b}from"./q-43e990e6.js";import{C as p}from"./q-e638a241.js";import{L as h}from"./q-8b80b5b7.js";import{a as C}from"./q-47b9d439.js";const y=async()=>{const[t,r]=x();await t(r)},D=(t,r)=>new Promise((w,c)=>{const d=new FileReader;d.onloadend=()=>{const u=d.result,l=document.createElementNS("http://www.w3.org/1999/xhtml","a");l.download=r,l.href=u,l.dispatchEvent(new MouseEvent("click")),w(!0)},d.onerror=u=>{c(u)},d.readAsDataURL(t)}),I=_(o(()=>m(()=>import("./q-a7bb9cc1.js"),["build/q-a7bb9cc1.js","build/q-b7424e28.js","build/q-72893bb5.js","build/q-3205f865.js"]),"s_sD3aCbP01XU")),O=_(o(()=>m(()=>import("./q-b78b2537.js"),["build/q-b78b2537.js","build/q-72893bb5.js"]),"s_8UCveneOcvc")),R=_(o(()=>m(()=>import("./q-7d7eb2c4.js"),["build/q-7d7eb2c4.js","build/q-b7424e28.js","build/q-72893bb5.js","build/q-57058c06.js"]),"s_XHwTFp0s9lo")),P=_(o(()=>m(()=>import("./q-23d52f49.js"),["build/q-23d52f49.js","build/q-72893bb5.js","build/q-01266c65.js"]),"s_h7pB8sysxA0")),T=_(o(()=>m(()=>import("./q-0a63173e.js"),["build/q-0a63173e.js","build/q-b7424e28.js","build/q-72893bb5.js","build/q-57058c06.js"]),"s_dBlYdkjOYyM")),A=_(o(()=>m(()=>import("./q-b969b2c6.js"),["build/q-b969b2c6.js","build/q-b7424e28.js","build/q-72893bb5.js","build/q-3205f865.js"]),"s_ET5UV9wpTS8")),V=_(o(()=>m(()=>import("./q-3d8e1a3e.js"),["build/q-3d8e1a3e.js","build/q-b7424e28.js","build/q-72893bb5.js","build/q-3205f865.js"]),"s_Zdgphc4Ye00")),L=_(o(()=>m(()=>import("./q-9a276ed9.js"),["build/q-9a276ed9.js","build/q-72893bb5.js"]),"s_y4bcb2aaHyU")),j=t=>{var u;const r=[{label:"Download LTE CA CSV",type:"lteca"},{label:"Download EN DC CSV",type:"endc"},{label:"Download NR CA CSV",type:"nrca"},{label:"Download NR DC CSV",type:"nrdc"}],c=o(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_K60auzrBjoo",[o(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_gajOxvIkrU8")]),d=o(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_j4g0R0xj0OU");return n(g,{children:[i("h1",null,{class:a(l=>"mb-4 text-center text-4xl font-semibold"+(l.hidden||l.hideTitle?" hidden":""),[t])},"View",3,null),i("div",null,{class:a(l=>"flex flex-1 flex-col"+(l.hidden?" hidden":""),[t])},[i("div",null,{class:a(l=>"m-auto"+(l.capabilities!==void 0?" hidden":""),[t])},n(p,null,3,"g7_0"),1,null),i("div",null,{class:a(l=>"mx-auto grid w-full max-w-7xl grid-cols-3 gap-x-5 gap-y-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"+(l.capabilities===void 0?" hidden":""),[t])},[r.map(({label:l,type:e})=>{var v;return n(b,{hidden:((v=t.capabilities)==null?void 0:v[e])==null,label:l,onClick$:o(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_OGIZVgS7ipg",[c,t,e]),type:"button",[s]:{type:s}},3,e)}),(u=t.inputs)==null?void 0:u.map(l=>n(b,{label:"Download Input "+(parseInt(l.split("-").slice(-1)[0])+1),onClick$:o(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_bjX5H0NmHyI",[d,l]),type:"button",[s]:{type:s}},3,l))],1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(P,{get cap(){return t.capabilities??void 0},title:"Metadata",[s]:{cap:a(l=>l.capabilities??void 0,[t]),title:s}},3,"g7_1"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(L,{get cap(){return t.capabilities??void 0},title:"Generic Capabilities",[s]:{cap:a(l=>l.capabilities??void 0,[t]),title:s}},3,"g7_2"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(O,{get filters(){var l;return((l=t.capabilities)==null?void 0:l.ueCapFilters)??void 0},title:"Filters",[s]:{filters:a(l=>{var e;return((e=l.capabilities)==null?void 0:e.ueCapFilters)??void 0},[t]),title:s}},3,"g7_3"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(R,{get bands(){var l;return(l=t.capabilities)==null?void 0:l.lteBands},title:"LTE Bands",[s]:{bands:a(l=>{var e;return(e=l.capabilities)==null?void 0:e.lteBands},[t]),title:s}},3,"g7_4"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(T,{get bands(){var l;return(l=t.capabilities)==null?void 0:l.nrBands},title:"NR Bands",[s]:{bands:a(l=>{var e;return(e=l.capabilities)==null?void 0:e.nrBands},[t]),title:s}},3,"g7_5"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(h,{get combos(){var l;return(l=t.capabilities)==null?void 0:l.lteca},title:"LTE CA Combos",[s]:{combos:a(l=>{var e;return(e=l.capabilities)==null?void 0:e.lteca},[t]),title:s}},3,"g7_6"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(I,{get combos(){var l;return(l=t.capabilities)==null?void 0:l.endc},title:"EN-DC Combos",[s]:{combos:a(l=>{var e;return(e=l.capabilities)==null?void 0:e.endc},[t]),title:s}},3,"g7_7"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(A,{get combos(){var l;return(l=t.capabilities)==null?void 0:l.nrca},title:"NR CA Combos",[s]:{combos:a(l=>{var e;return(e=l.capabilities)==null?void 0:e.nrca},[t]),title:s}},3,"g7_8"),1,null),1,null),i("div",null,{class:"mx-auto w-full max-w-7xl overflow-x-auto"},i("div",null,{class:"w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]"},n(V,{get combos(){var l;return(l=t.capabilities)==null?void 0:l.nrdc},title:"NR DC Combos",[s]:{combos:a(l=>{var e;return(e=l.capabilities)==null?void 0:e.nrdc},[t]),title:s}},3,"g7_9"),1,null),1,null)],1,null)]},1,"g7_10")},B=async(t,r)=>{var u;const[w]=x(),c={type:t,input:r},d="/csv/";try{const l=await C.post(d,c,{responseType:"blob"}),v=(u=l.headers["content-disposition"])==null?void 0:u.split("filename=")[1];await w(l.data,v??"unknown")}catch(l){console.error(l),alert(l)}},N=async()=>{var c;const[t,r,w]=x();await t(w,(c=r.capabilities)==null?void 0:c[w])},S=t=>{const r="/store/getInput";location.href=`${r}/?id=${t}`},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:E,s_CQ3Pn250fG0:j,s_K60auzrBjoo:B,s_OGIZVgS7ipg:N,s_bjX5H0NmHyI:y,s_gajOxvIkrU8:D,s_j4g0R0xj0OU:S},Symbol.toStringTag,{value:"Module"}));export{E as _hW,j as s_CQ3Pn250fG0,B as s_K60auzrBjoo,N as s_OGIZVgS7ipg,y as s_bjX5H0NmHyI,D as s_gajOxvIkrU8,S as s_j4g0R0xj0OU};
