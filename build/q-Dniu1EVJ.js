import{g as d,c as O,q as c,C as M,p as T,H as P,r as p,l as y,d as s,j as r,k as E,F as x}from"./q-PXVB0oKg.js";import{_ as u}from"./q-Biq04Hab.js";import{B as w}from"./q-BdjY5jE6.js";const z=async()=>{const[e]=d();e.value=!e.value},L=Object.freeze(Object.defineProperty({__proto__:null,s_FrelYMazmiQ:z},Symbol.toStringTag,{value:"Module"})),q=()=>{const[e,t,o]=d(),n=Math.max(1,Math.ceil(o.value/e.value));return t.value=1,n},A=Object.freeze(Object.defineProperty({__proto__:null,s_CzdO55SuKjs:q},Symbol.toStringTag,{value:"Module"})),I=async e=>{const[t,o]=d();t.value=e,o.value=1},R=Object.freeze(Object.defineProperty({__proto__:null,s_NRvS0AFdcEM:I},Symbol.toStringTag,{value:"Module"})),k=O(c(()=>u(()=>import("./q-ZQJ86wIp.js").then(e=>e.d),[]),"s_JSu2mwpeohQ")),X=e=>{M();const t=()=>e.data.map(a=>a.every(i=>i===""||i===void 0)),o=e.hideEmpty?t():[],n=[...e.data.keys()],g=T(n.map(()=>"")),l=P(c(()=>u(()=>Promise.resolve().then(()=>Q),void 0),"s_w50xqmemiZ0",[n,g,e])),b=P(c(()=>u(()=>Promise.resolve().then(()=>V),void 0),"s_YkG1EhSWimc",[l])),m=p(50),_=p(1),f=P(c(()=>u(()=>Promise.resolve().then(()=>A),void 0),"s_CzdO55SuKjs",[m,_,b])),h=P(c(()=>u(()=>Promise.resolve().then(()=>B),void 0),"s_EHxLW2P00ow",[m,e,_,b])),v=p(e.coloredBands==!1),S=v.value?" monochrome-bands":"",j=y(x,{children:[s("div",null,{class:"flex max-w-full flex-wrap justify-around gap-x-5 sm:justify-between"},[e.coloredBands&&s("div",{class:"min-w-full px-2 lg:min-w-52"+S},null,y(w,{type:"button",get label(){return v.value?"Colored bands":"Monochrome bands"},onClick$:c(()=>u(()=>Promise.resolve().then(()=>L),void 0),"s_FrelYMazmiQ",[v]),[r]:{type:r,label:E(a=>a.value?"Colored bands":"Monochrome bands",[v]),onClick$:r}},3,"pq_0"),1,"pq_1"),e.pagination&&y(k,{totalPages:f,selectedPage:_,combosPerPage:m,onPageChange$:c(()=>u(()=>Promise.resolve().then(()=>K),void 0),"s_CaeT4u6jsec",[_,f]),onCombosPerPageChange$:c(()=>u(()=>Promise.resolve().then(()=>R),void 0),"s_NRvS0AFdcEM",[m,_]),[r]:{totalPages:r,selectedPage:r,combosPerPage:r,onPageChange$:r,onCombosPerPageChange$:r}},3,"pq_2")],1,null),s("table",{class:"w-full table-auto border-collapse border border-gray-500 text-left"+S},null,[s("thead",null,null,s("tr",null,null,e.headers.map((a,i)=>!o[i]&&s("th",null,{class:"min-w-[5rem] border-collapse border border-gray-500 p-1.5 align-bottom"},[a,!e.noSearch&&s("input",{onKeyUp$:c(()=>u(()=>Promise.resolve().then(()=>H),void 0),"s_98XKrtPUr0s",[i,g])},{class:"float-bottom mt-1 w-full appearance-none border border-solid border-gray-500 bg-white font-normal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"},null,2,"pq_3")],1,i)),1,null),1,null),s("tbody",null,{class:"whitespace-pre align-text-top"},l.value.slice(h.value.start,h.value.end).map(a=>s("tr",null,null,e.data.map((i,C)=>!o[C]&&s("td",{dangerouslySetInnerHTML:i[a]},{class:"border-collapse border border-gray-500 p-1.5"},null,3,a+"-"+C)),1,a)),1,null)],1,null)]},1,"pq_4");return e.noSpoiler?j:s("details",null,{open:!1},[s("summary",null,{class:"mt-10 text-xl font-bold"},E(a=>a.title,[e]),3,null),j],1,"pq_5")},D=()=>{const[e]=d();return e.value.length},V=Object.freeze(Object.defineProperty({__proto__:null,s_YkG1EhSWimc:D},Symbol.toStringTag,{value:"Module"})),$=()=>{const[e,t,o,n]=d(),g=o.value,l=n.value,b=!t.pagination||e.value==-1?l:e.value;return{start:Math.max(0,Math.min(l,(g-1)*b)),end:Math.min(l,g*b)}},B=Object.freeze(Object.defineProperty({__proto__:null,s_EHxLW2P00ow:$},Symbol.toStringTag,{value:"Module"})),F=()=>{const[e,t,o]=d(),n=t;return[...o.data[0].keys()].map(l=>{if(e.every(m=>{const _=n[m];return _==""?!0:o.data[m][l].replace(/(?:<span .*?>)|(?:<\/span>)|\s/g,"").includes(_)}))return l}).filter(l=>l!==void 0)},Q=Object.freeze(Object.defineProperty({__proto__:null,s_w50xqmemiZ0:F},Symbol.toStringTag,{value:"Module"})),U=async e=>{const[t,o]=d();e>0&&e<=o.value?t.value=e:t.value=1},K=Object.freeze(Object.defineProperty({__proto__:null,s_CaeT4u6jsec:U},Symbol.toStringTag,{value:"Module"})),W=(e,t)=>{const[o,n]=d();n[o]=t.value.replace(/\s/g,"").toUpperCase().trim()},H=Object.freeze(Object.defineProperty({__proto__:null,s_98XKrtPUr0s:W},Symbol.toStringTag,{value:"Module"}));export{I as a,X as b,D as c,$ as d,F as e,U as f,W as g,q as s,z as s_FrelYMazmiQ};
