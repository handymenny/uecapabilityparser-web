import{f as y,M as S,h as r,P as E,K as h,N as $,g as x,_ as B}from"./q-HklCxkIg.js";const A=()=>{const[n,t]=y();t>1&&n(t-1)},k=()=>{const[n,t]=y();t(n)},L=()=>{const[n,t,l]=y();t<l&&n(t+1)};function R(n,t,l=1){const d=Math.min(Math.max(1,t),n),m=(({page:s,totalPages:o,siblingCount:u=1})=>{const c=[],i=new Set([1,o]),g=3+u,p=o-2-u;if(g>p)for(let e=2;e<=o-1;e++)i.add(e);else if(s<g)for(let e=2;e<=Math.min(g,o);e++)i.add(e);else if(s>p)for(let e=o-1;e>=Math.max(p,2);e--)i.add(e);else for(let e=Math.max(s-u,2);e<=Math.min(s+u,o);e++)i.add(e);const P=e=>{c.push({type:"page",value:e,key:`page-${e}`})},v=()=>{c.push({type:"ellipsis",key:`ellipsis-${c.length}`})};let _=0;for(const e of Array.from(i).sort((b,a)=>b-a))e-_>1&&v(),P(e),_=e;return c})({page:d,totalPages:n,siblingCount:l}),f=[];for(const s of m)s.type==="page"?f.push(s.value):f.push("...");return f}const j=n=>{const{selectedPage:t,totalPages:l,onPageChange$:d,siblingCount:C,hidePrevButton:m=!1,hideNextButton:f=!1,disabled:s=!1,customArrowTexts:{previous:o="PREV",next:u="NEXT"}={},defaultClass:c="",selectedClass:i="",dividerClass:g="",nextButtonClass:p="",prevButtonClass:P="",...v}=n,_=()=>!m&&t>1,e=()=>!f&&t!==l,b=R(l,t,C||1);return console.log(b),S("nav",{...v,children:[r("button",{class:p,disabled:s||!_(),onClick$:x(()=>B(()=>Promise.resolve().then(()=>I),void 0),"s_DbuSTP4glBw",[d,t])},{"aria-label":"prevAriaLabel"},[E($,{name:"prefix",[h]:{name:h}},3,"f1_0"),r("span",null,null,o,3,null)],0,null),b.map((a,T)=>{const M=t===a;return r("span",null,null,typeof a=="string"?r("button",{class:g},{disabled:!0},"...",3,"f1_1"):r("button",{"aria-current":t===a,"aria-label":`Page ${a} of ${l}`,class:[c,t===a&&i],disabled:s||M,onClick$:x(()=>B(()=>Promise.resolve().then(()=>I),void 0),"s_hBI599j54ok",[a,d])},null,a,0,null),1,T)}),r("button",{class:P,disabled:s||!e(),onClick$:x(()=>B(()=>Promise.resolve().then(()=>I),void 0),"s_flm2HZRc0gQ",[d,t,l])},{"aria-label":"nextAriaLabel"},[r("span",null,null,u,3,null),E($,{name:"suffix",[h]:{name:h}},3,"f1_2")],0,null)]},{"aria-label":"pagination","data-testid":"pagination"},0,"f1_3")},I=Object.freeze(Object.defineProperty({__proto__:null,s_DbuSTP4glBw:A,s_W5aD6KjRTnY:j,s_flm2HZRc0gQ:L,s_hBI599j54ok:k},Symbol.toStringTag,{value:"Module"}));export{A as s_DbuSTP4glBw,j as s_W5aD6KjRTnY,L as s_flm2HZRc0gQ,k as s_hBI599j54ok};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}