import{F as l,k as i,C as r,j as u,y as m,_ as d,a as p,l as _}from"./q-rDVhsHeT.js";import{u as f}from"./q-AkGjnNMZ.js";const b=a=>{const e=l(a,["action","spaReset","reloadDocument","onSubmit$"]),s=f();return i("form",{...e,children:u(d,null,3,"BC_0"),onSubmit$:m(()=>p(()=>Promise.resolve().then(()=>y),void 0),"s_p9MSze0ojs4",[s])},{action:"get","data-spa-reset":r(t=>t.spaReset?"true":void 0,[a],'p0.spaReset?"true":undefined'),"preventdefault:submit":r(t=>!t.reloadDocument,[a],"!p0.reloadDocument")},0,"BC_1")},v=async(a,e)=>{const[s]=_(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),s("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},y=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:b,s_p9MSze0ojs4:v},Symbol.toStringTag,{value:"Module"}));export{b as s_Nk9PlpjQm9Y,v as s_p9MSze0ojs4};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
