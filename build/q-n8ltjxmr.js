import{l as _,u as T,r as m,o as S,x as b,h as g,j as f,k as x,q as l,S as E,_hW as a}from"./q-BBXjioMF.js";import{_ as r}from"./q-9FN2Buzd.js";import{T as P}from"./q-DwrwAAyL.js";import{u as O}from"./q-DY9BcANW.js";import"./q-QyEdK_fZ.js";const h=()=>{const[o,e,s,t,n]=_();o(e),t.showPopover(),n(!0,"opening",s)},I=Object.freeze(Object.defineProperty({__proto__:null,_hW:a,s_p8cZfNlxnCw:h},Symbol.toStringTag,{value:"Module"})),q=o=>{const e=T(P),s=m(),t=m(),n=O(e.localId),u=l(()=>r(()=>Promise.resolve().then(()=>V),void 0),"s_93WF4Uc7BpU"),d=l(()=>r(()=>Promise.resolve().then(()=>A),void 0),"s_0txZHNuNMZA",[e]),p=l(()=>r(()=>Promise.resolve().then(()=>I),void 0),"s_p8cZfNlxnCw",[u,t,s,n,d]),i=l(()=>r(()=>Promise.resolve().then(()=>M),void 0),"s_LS8S3xPaEY4",[u,t,s,n,d]),y=S(c=>{c.preventDefault()},"e=>{e.preventDefault();}"),v=l(()=>r(()=>Promise.resolve().then(()=>L),void 0),"s_KG3IXE7XeIg",[e,i]);return b(l(()=>r(()=>Promise.resolve().then(()=>D),void 0),"s_zVy0QGcAhmo",[e,v])),g("button",{ref:e.triggerRef,get"aria-describedby"(){return e.localId},get"data-state"(){return e.state.value},...o,children:x(E,null,3,"yl_0"),onMouseOver$:[y,p],onMouseLeave$:i,onFocus$:p,onBlur$:i,onKeyDown$:v},{"aria-describedby":f(c=>c.localId,[e]),"data-state":f(c=>c.state.value,[e])},0,"yl_1")},w=({track:o,cleanup:e})=>{const[s,t]=_();o(()=>s.state.value),s.state.value==="open"?(document.addEventListener("keydown",t),e(()=>{document.removeEventListener("keydown",t)})):s.state.value==="closed"&&document.removeEventListener("keydown",t),e(()=>{document.removeEventListener("keydown",t)})},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:a,s_zVy0QGcAhmo:w},Symbol.toStringTag,{value:"Module"})),j=async o=>{const[e,s]=_();e.state.value==="open"&&o.key==="Escape"&&(o.preventDefault(),s())},L=Object.freeze(Object.defineProperty({__proto__:null,_hW:a,s_KG3IXE7XeIg:j},Symbol.toStringTag,{value:"Module"})),z=()=>{const[o,e,s,t,n]=_();o(s),t.hidePopover(),n(!1,"closing",e)},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:a,s_LS8S3xPaEY4:z},Symbol.toStringTag,{value:"Module"})),$=(o,e,s)=>{const[t]=_();t.state.value=e,t.delayDuration>0?s.value=window.setTimeout(()=>{t.state.value=o?"open":"closed"},t.delayDuration):t.state.value=o?"open":"closed"},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:a,s_0txZHNuNMZA:$},Symbol.toStringTag,{value:"Module"})),k=o=>{o.value&&(window.clearTimeout(o.value),o.value=void 0)},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:a,s_93WF4Uc7BpU:k},Symbol.toStringTag,{value:"Module"}));export{a as _hW,w as a,j as b,z as c,$ as d,k as e,q as s,h as s_p8cZfNlxnCw};
