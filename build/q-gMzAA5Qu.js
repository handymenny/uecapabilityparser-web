import{g as h,h as f}from"./q-POVI9Nn8.js";import{l as v,o as t,c as m,d as S,k as b,a as y,b as O,y as k,_ as w}from"./q-kBRCEvCZ.js";const x=()=>{const[n,e]=v();if(!e.value)throw new Error("Qwik UI: There is no reference to the collapsible content element. Make sure to wrap the content in a <CollapsibleContent> component.");const o=h(e.value);o!==0&&(n.value=o),e.value.style.setProperty("--qwikui-collapsible-content-height",`${n.value}px`)},R=n=>{const{"bind:isOpen":e,id:o,defaultOpen:s,...r}=n,g=t(s??!1),p=e??g,u=t(),l=t(),d=t(!0),a=t(null),_=m(),c=o||_,i={isOpenSig:p,itemId:c,defaultOpen:s,triggerRef:u,contentRef:l,contentHeightSig:a,initialStateSig:d,getContentDimensions$:k(()=>w(()=>Promise.resolve().then(()=>C),void 0),"s_hlGwxyxA6Ro",[a,l])};return S(f,i),b("div",{"data-state":i.initialStateSig.value?"initial":i.isOpenSig.value?"open":"closed",id:c,...r,children:y(O,null,3,"0k_0")},null,0,"0k_1")},C=Object.freeze(Object.defineProperty({__proto__:null,s_hlGwxyxA6Ro:x,s_sfmJQTYRENw:R},Symbol.toStringTag,{value:"Module"}));export{x as s_hlGwxyxA6Ro,R as s_sfmJQTYRENw};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
