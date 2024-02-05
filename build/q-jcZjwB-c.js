import{l as m,o as f,j as O,e as C,C as S,y as k,_ as w,a as D,b as I}from"./q-kBRCEvCZ.js";import{S as L}from"./q-POVI9Nn8.js";const T=t=>{var g,x,p,y;const[d,r,s,i,l]=m();console.log(t.key),console.log("do i run on server???");const e=d.optionsStore.filter(o=>(o==null?void 0:o.getAttribute("aria-disabled"))!=="true"),v=t.target,c=e.indexOf(v);if((t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Home"||t.key==="End"||t.key===" ")&&t.preventDefault(),t.key==="ArrowDown"&&(c===e.length-1?(g=e[0])==null||g.focus():(x=e[c+1])==null||x.focus()),t.key==="ArrowUp"&&(c<=0?(p=e[e.length-1])==null||p.focus():(y=e[c-1])==null||y.focus()),clearTimeout(l.value),l.value=setTimeout(()=>{i.value=""},500),i.value.length<1||r.value){const o=e.map(u=>u.textContent.slice(0,1).toLowerCase()),a=t.key.toLowerCase();r.value||(i.value+=a);const n=o.indexOf(a);if(n!==-1)if(s.value===void 0)e[n].focus(),s.value=n+1;else if(o[s.value-1]===a){const h=o.slice(s.value).indexOf(a);if(h!==-1){const _=h+s.value;e[_].focus(),s.value=_+1}else e[n].focus(),s.value=n+1}else e[n].focus(),r.value=!1,s.value=n+1}else{const o=e.map(u=>u.textContent.toLowerCase()),a=i.value+t.key.toLowerCase(),n=o.findIndex(u=>{const b=a.length;return u.substring(0,b)===a});n!==-1?(e[n].focus(),i.value=a,s.value=n+1):(clearTimeout(l.value),r.value=!0)}},A=t=>{const d=f(void 0),r=f(void 0),s=f(""),i=f(!1),l=O(L);return C("ul",{ref:l.listboxRef},{class:S(e=>e.class,[t],"p0.class"),hidden:S(e=>!e.isListboxHiddenSig.value,[l],"!p0.isListboxHiddenSig.value"),onKeyDown$:k(()=>w(()=>Promise.resolve().then(()=>j),void 0),"s_hSSSMZQm0Oc",[l,i,d,s,r]),role:"listbox",style:S((e,v)=>`
        display: ${e.isOpenSig.value?"block":"none"};
        position: absolute;
        z-index: 1;
        ${v.style}
      `,[l,t],`\`
        display: \${p0.isOpenSig.value?"block":"none"};
        position: absolute;
        z-index: 1;
        \${p1.style}
      \``),tabIndex:0},D(I,null,3,"bD_0"),1,"bD_1")},j=Object.freeze(Object.defineProperty({__proto__:null,s_DIywLbk0fWc:A,s_hSSSMZQm0Oc:T},Symbol.toStringTag,{value:"Module"}));export{A as s_DIywLbk0fWc,T as s_hSSSMZQm0Oc};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
