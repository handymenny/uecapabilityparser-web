import{g as S,i as M,d as i,j as d,l as I,S as O,q as x}from"./q-PXVB0oKg.js";import{_ as y}from"./q-Biq04Hab.js";const $=()=>{const[a,s]=S();s(a)},A=Object.freeze(Object.defineProperty({__proto__:null,s_zl7XoIuPUQo:$},Symbol.toStringTag,{value:"Module"})),T=()=>{const[a,s]=S();s>1&&a(s-1)},z=Object.freeze(Object.defineProperty({__proto__:null,s_bncOru0zsEw:T},Symbol.toStringTag,{value:"Module"}));function B(a,s,o=1){const _=Math.min(Math.max(1,s),a),m=(({page:t,totalPages:l,siblingCount:u=1})=>{const c=[],r=new Set([1,l]),b=3+u,f=l-2-u;if(b>f)for(let e=2;e<=l-1;e++)r.add(e);else if(t<b)for(let e=2;e<=Math.min(b,l);e++)r.add(e);else if(t>f)for(let e=l-1;e>=Math.max(f,2);e--)r.add(e);else for(let e=Math.max(t-u,2);e<=Math.min(t+u,l);e++)r.add(e);const h=e=>{c.push({type:"page",value:e,key:`page-${e}`})},P=()=>{c.push({type:"ellipsis",key:`ellipsis-${c.length}`})};let g=0;for(const e of Array.from(r).sort((v,n)=>v-n))e-g>1&&P(),h(e),g=e;return c})({page:_,totalPages:a,siblingCount:o}),p=[];for(const t of m)t.type==="page"?p.push(t.value):p.push("...");return p}const N=a=>{const{selectedPage:s,totalPages:o,onPageChange$:_,siblingCount:E,hidePrevButton:m=!1,hideNextButton:p=!1,disabled:t=!1,customArrowTexts:{previous:l="PREV",next:u="NEXT"}={},defaultClass:c="",selectedClass:r="",dividerClass:b="",nextButtonClass:f="",prevButtonClass:h="",...P}=a,g=()=>!m&&s>1,e=()=>!p&&s!==o,v=B(o,s,E||1);return M("nav",{"aria-label":"pagination","data-testid":"pagination",...P,children:[i("button",{class:f,disabled:t||!g(),onClick$:x(()=>y(()=>Promise.resolve().then(()=>z),void 0),"s_bncOru0zsEw",[_,s])},{"aria-label":"prevAriaLabel"},[I(O,{name:"prefix",[d]:{name:d}},3,"vZ_0"),i("span",null,null,l,3,null)],0,null),v.map((n,j)=>{const C=s===n;return i("span",null,null,typeof n=="string"?i("button",{class:b},{disabled:!0},"...",3,"vZ_1"):i("button",{class:[c,s===n&&r],"aria-label":`Page ${n} of ${o}`,"aria-current":s===n,disabled:t||C,onClick$:x(()=>y(()=>Promise.resolve().then(()=>A),void 0),"s_zl7XoIuPUQo",[n,_])},null,n,0,null),1,j)}),i("button",{class:h,disabled:t||!e(),onClick$:x(()=>y(()=>Promise.resolve().then(()=>w),void 0),"s_mOn1sRHo9Yc",[_,s,o])},{"aria-label":"nextAriaLabel"},[i("span",null,null,u,3,null),I(O,{name:"suffix",[d]:{name:d}},3,"vZ_2")],0,null)]},{"aria-label":d,"data-testid":d},0,"vZ_3")},L=()=>{const[a,s,o]=S();s<o&&a(s+1)},w=Object.freeze(Object.defineProperty({__proto__:null,s_mOn1sRHo9Yc:L},Symbol.toStringTag,{value:"Module"}));export{N as a,L as b,T as s,$ as s_zl7XoIuPUQo};