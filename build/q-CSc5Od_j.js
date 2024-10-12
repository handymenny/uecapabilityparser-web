import{_ as r}from"./q-BK4-f5po.js";import{p as m,E as y}from"./q-DAUiZntC.js";import{B as S,u as b,t as h,r as p,x as w,h as L,j as O,k as g,q as u,S as E,l as f,_hW as _}from"./q-BBXjioMF.js";import{u as T}from"./q-D38lCaf8.js";const P=e=>{S();const t=b(m),n=`${t.compId}-panel`,o={context:t,givenContextRef:t.panelRef},a=T(e.ref,o);h(u(()=>r(()=>Promise.resolve().then(()=>A),void 0),"s_fftHK5OdflE"));const s=p(!1),i=p(2),l=p(!1),c=p(!1);return i.value===1&&setTimeout(()=>{l.value=!0},0),w(u(()=>r(()=>Promise.resolve().then(()=>z),void 0),"s_ixY45GOQkbs",[t,c,s,l])),L("div",{...e,id:n,ref:a,get popover(){return t.manual||e.popover==="manual"?"manual":"auto"},children:[i.value===1&&g(y,null,3,"HL_0"),g(E,null,3,"HL_1")],onBeforeToggle$:[u(()=>r(()=>Promise.resolve().then(()=>B),void 0),"s_fu5Jc2k0zdM",[t,s]),e.onBeforeToggle$],onToggle$:[u(()=>r(()=>Promise.resolve().then(()=>C),void 0),"s_NjOXWISUeJo",[t,c]),e.onToggle$],"document:onPopPolyLoad$":u(()=>r(()=>Promise.resolve().then(()=>V),void 0),"s_woYPw4aFL00",[i])},{popover:O((v,d)=>v.manual||d.popover==="manual"?"manual":"auto",[t,e])},0,"HL_2")},G=Object.freeze(Object.defineProperty({__proto__:null,s_FQQOZY05vEI:P},Symbol.toStringTag,{value:"Module"})),j=`/* This only applies when popover isn't supported */
@supports not selector(:popover-open) {
  /* The polyfill adds this class when popped out */
  [popover]:not(.\\:popover-open) {
    display: none;
  }
}

.popover-closing {
  display: block !important;
}

/* Strips the user agent styles from the popover when in floating mode */
@layer qwik-ui {
  [data-floating] {
    margin: unset;
    padding: unset;
    border: unset;
    overflow: unset;
    position: absolute;
  }
}

/** override the polyfill's layer, which gets dynamically imported later on. */
@layer popover-polyfill {
  [data-floating] {
    margin: unset;
    padding: unset;
    border: unset;
    overflow: unset;
    position: absolute;
  }
}
`,R=j,A=Object.freeze(Object.defineProperty({__proto__:null,s_fftHK5OdflE:R},Symbol.toStringTag,{value:"Module"})),x=e=>{var o,a,s;const[t,n]=f();t.isOpenSig.value=e.newState==="open",(o=t.panelRef)!=null&&o.value&&(a=t.panelRef)!=null&&a.value.classList.contains(":popover-open")&&(s=t.panelRef)!=null&&s.value.parentElement&&!n.value&&t.panelRef.value.parentElement.appendChild(t.panelRef.value)},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_NjOXWISUeJo:x},Symbol.toStringTag,{value:"Module"})),k=e=>{var t,n;for(;e!=null&&e.parentElement;){if(((t=e.parentElement)==null?void 0:t.tagName)==="DIALOG"||(n=e.parentElement)!=null&&n.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},I=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_8owBTFjL9qg:k},Symbol.toStringTag,{value:"Module"})),q=async({track:e,cleanup:t})=>{var c;const[n,o,a,s]=f();e(()=>s.value),a.value=!0;const i=u(()=>r(()=>Promise.resolve().then(()=>I),void 0),"s_8owBTFjL9qg");let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),(c=n.panelRef)!=null&&c.value&&(await i(n.panelRef.value)===null?l.appendChild(n.panelRef.value):o.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),t(()=>{var d;return(d=n.panelRef)==null?void 0:d.value}))},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_ixY45GOQkbs:q},Symbol.toStringTag,{value:"Module"}));async function D(e,t){const{transitionDuration:n}=getComputedStyle(e);async function o(s){return new Promise(i=>setTimeout(i,s))}n!=="0s"&&await o(t?10:5),e.classList.add("popover-showing"),e.classList.remove("popover-closing"),e.dataset.open="",e.removeAttribute("data-closing"),e.removeAttribute("data-closed")}function M(e){e.classList.remove("popover-showing"),e.classList.add("popover-closing"),e.dataset.closing="";const{animationDuration:t,transitionDuration:n}=getComputedStyle(e),o=()=>{e.classList.remove("popover-closing"),e.removeAttribute("data-closing"),e.dataset.closed=""},a=()=>{e.classList.remove("popover-closing"),e.removeAttribute("data-closing"),e.dataset.closed=""};t!=="0s"?e.addEventListener("animationend",o,{once:!0}):n!=="0s"?e.addEventListener("transitionend",a,{once:!0}):(e.classList.remove("popover-closing"),e.removeAttribute("data-closing"),e.dataset.closed="")}const $=async e=>{var o;const[t,n]=f();(o=t.panelRef)!=null&&o.value&&(e.newState==="open"&&t.panelRef.value&&await D(t.panelRef.value,n.value),e.newState==="closed"&&M(t.panelRef.value))},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_fu5Jc2k0zdM:$},Symbol.toStringTag,{value:"Module"})),Q=()=>{const[e]=f();if(e.value===0){e.value=1;return}},V=Object.freeze(Object.defineProperty({__proto__:null,s_woYPw4aFL00:Q},Symbol.toStringTag,{value:"Module"}));export{x as a,k as b,q as c,$ as d,Q as e,G as f,R as s,P as s_FQQOZY05vEI};
