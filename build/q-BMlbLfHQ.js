import{_ as a}from"./q-1dnJZ1Td.js";import{q as c,r as s,E as P,x as k,s as x,h as C,k as E,S as H,i as u,l as g,_hW as v}from"./q-BmWDAmC3.js";import{c as R}from"./q-CNPJJwg3.js";function M(){return{getHiddenHeight:c(()=>a(()=>import("./q-DCyOEWYA.js"),[]),"s_FcZ4KfgFEDg")}}const q=o=>{const{disabled:n,onOpenChange$:e,onChange$:t,"bind:open":l,id:f,triggerRef:b,collapsible:m=!0,open:h,accordionItem:S,...j}=o,O=s(h??!1),r=l??O,T=s(),y=b??T,_=s(),p=s(null),w=M(),I=P(),d=f??I;k(c(()=>a(()=>Promise.resolve().then(()=>D),void 0),"s_YBT3e020gpo",[r,t,e]));const i={isOpenSig:r,itemId:d,triggerRef:y,contentRef:_,contentHeightSig:p,getContentDimensions$:c(()=>a(()=>Promise.resolve().then(()=>A),void 0),"s_jH16FFJrfrc",[S,w,p,_]),disabled:n,collapsible:m};return x(R,i),C("div",{id:d,"data-collapsible":!0,"data-disabled":i.disabled?"":void 0,"data-open":i.isOpenSig.value?"":void 0,"data-closed":i.isOpenSig.value?void 0:"","aria-live":"polite",...j,children:E(H,null,3,"Lj_0")},{"data-collapsible":u,"aria-live":u},0,"Lj_1")},J=Object.freeze(Object.defineProperty({__proto__:null,s_CTwV4MtyR4M:q},Symbol.toStringTag,{value:"Module"})),L=function({track:n}){const[e,t,l]=g();n(()=>e.value),l==null||l(e.value),t==null||t(e.value)},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_YBT3e020gpo:L},Symbol.toStringTag,{value:"Module"})),F=async()=>{const[o,n,e,t]=g();if(!t.value)throw new Error("Qwik UI: There is no reference to the collapsible content element. Make sure to wrap the content in a <CollapsibleContent> component.");e.value===null&&(e.value=await n.getHiddenHeight(t.value)),e.value!==0&&(t.value.style.setProperty("--qwikui-collapsible-content-height",`${e.value}px`),o&&t.value.style.setProperty("--qwikui-accordion-content-height",`${e.value}px`))},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_jH16FFJrfrc:F},Symbol.toStringTag,{value:"Module"}));export{F as a,J as c,L as s,q as s_CTwV4MtyR4M};
