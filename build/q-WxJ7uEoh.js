import{l,F as i,k as u,C as r,j as m,y as d,_ as p,a as _}from"./q-yEEMOV0P.js";import{u as f}from"./q-VhCKJH7L.js";const b=async(a,e)=>{const[s]=l(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),s("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},v=a=>{const e=i(a,["action","spaReset","reloadDocument","onSubmit$"]),s=f();return u("form",{...e,children:m(p,null,3,"BC_0"),onSubmit$:d(()=>_(()=>Promise.resolve().then(()=>y),void 0),"s_p9MSze0ojs4",[s])},{action:"get","data-spa-reset":r(t=>t.spaReset?"true":void 0,[a],'p0.spaReset?"true":undefined'),"preventdefault:submit":r(t=>!t.reloadDocument,[a],"!p0.reloadDocument")},0,"BC_1")},y=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:v,s_p9MSze0ojs4:b},Symbol.toStringTag,{value:"Module"}));export{v as s_Nk9PlpjQm9Y,b as s_p9MSze0ojs4};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
