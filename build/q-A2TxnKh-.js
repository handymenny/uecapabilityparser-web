import{u as p,b as i,j as S,d as b,k as x,_ as C,g as k,q as d,S as w,h as I}from"./q-CqQeKCeh.js";import{g as P,e as R}from"./q-CNKChEG2.js";import{_ as u}from"./q-C7i0xNVT.js";const y=function({track:t}){const[n,o]=p();t(()=>n.value),o==null||o(n.value)},T=()=>{const[e,t]=p();if(!t.value)throw new Error("Qwik UI: There is no reference to the collapsible content element. Make sure to wrap the content in a <CollapsibleContent> component.");e.value===null&&(e.value=P(t.value)),e.value!==0&&t.value.style.setProperty("--qwikui-collapsible-content-height",`${e.value}px`)},E=e=>{const{disabled:t,onOpenChange$:n,"bind:open":o,id:g,open:v,...h}=e,f=i(v??!1),l=o??f,m=i(),a=i(),r=i(null),O=S(),c=g||O;b(d(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_0FsFOlZtOZ4",[l,n]));const s={isOpenSig:l,itemId:c,triggerRef:m,contentRef:a,contentHeightSig:r,getContentDimensions$:d(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_hlGwxyxA6Ro",[r,a]),disabled:t};return x(R,s),C("div",{"data-closed":s.isOpenSig.value?void 0:"","data-disabled":s.disabled?"":void 0,"data-open":s.isOpenSig.value?"":void 0,id:c,...h,children:k(w,null,3,"0k_0")},{"data-collapsible":!0},0,"0k_1")},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:I,s_0FsFOlZtOZ4:y,s_hlGwxyxA6Ro:T,s_sfmJQTYRENw:E},Symbol.toStringTag,{value:"Module"}));export{I as _hW,y as s_0FsFOlZtOZ4,T as s_hlGwxyxA6Ro,E as s_sfmJQTYRENw};