import{_ as r}from"./q-C7i0xNVT.js";import{u as m,q as u,t as _,v as g,m as y,h as d,r as h,a as S,c as E,d as f,S as L,s as A}from"./q-DiiDRB9g.js";import{E as w}from"./q-uzMTG44y.js";import{p as P}from"./q-CVeAmpIm.js";const R=`/* This only applies when popover isn't supported */
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
`,T=R,I=e=>{var n,t;for(;e!=null&&e.parentElement;){if(((n=e.parentElement)==null?void 0:n.tagName)==="DIALOG"||(t=e.parentElement)!=null&&t.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},b=async({track:e,cleanup:n})=>{var c;const[t,o,a,s]=m();e(()=>s.value),a.value=!0;const i=u(()=>r(()=>Promise.resolve().then(()=>p),void 0),"s_KSA0sf8wVLo");let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),(c=t.panelRef)!=null&&c.value&&(await i(t.panelRef.value)===null?l.appendChild(t.panelRef.value):o.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),n(()=>{var v;return(v=t.panelRef)==null?void 0:v.value}))};async function x(e,n){const{transitionDuration:t}=getComputedStyle(e);async function o(s){return new Promise(i=>setTimeout(i,s))}t!=="0s"&&await o(n?10:5),e.classList.add("popover-showing"),e.classList.remove("popover-closing"),e.dataset.open="",e.removeAttribute("data-closing"),e.removeAttribute("data-closed")}function C(e){e.classList.remove("popover-showing"),e.classList.add("popover-closing"),e.dataset.closing="";const{animationDuration:n,transitionDuration:t}=getComputedStyle(e),o=()=>{e.classList.remove("popover-closing"),e.removeAttribute("data-closing"),e.dataset.closed=""},a=()=>{e.classList.remove("popover-closing"),e.removeAttribute("data-closing"),e.dataset.closed=""};n!=="0s"?e.addEventListener("animationend",o,{once:!0}):t!=="0s"?e.addEventListener("transitionend",a,{once:!0}):(e.classList.remove("popover-closing"),e.removeAttribute("data-closing"),e.dataset.closed="")}const O=async e=>{var o;const[n,t]=m();(o=n.panelRef)!=null&&o.value&&(e.newState==="open"&&n.panelRef.value&&await x(n.panelRef.value,t.value),e.newState==="closed"&&C(n.panelRef.value))},D=e=>{var o,a,s;const[n,t]=m();n.isOpenSig.value=e.newState==="open",(o=n.panelRef)!=null&&o.value&&(a=n.panelRef)!=null&&a.value.classList.contains(":popover-open")&&(s=n.panelRef)!=null&&s.value.parentElement&&!t.value&&n.panelRef.value.parentElement.appendChild(n.panelRef.value)},j=()=>{const[e]=m();if(e.value===0){e.value=1;return}},q=e=>{_();const n=g(P),t=`${n.compId}-panel`;y(u(()=>r(()=>Promise.resolve().then(()=>p),void 0),"s_XydisE1slPA"));const o=d(!1),a=d(2),s=d(!1),i=d(!1);return a.value===1&&setTimeout(()=>{s.value=!0},0),h(u(()=>r(()=>Promise.resolve().then(()=>p),void 0),"s_jy5BmlR0oco",[n,i,o,s])),S("div",{...e,id:t,ref:e.ref,get popover(){return n.manual||e.popover==="manual"?"manual":"auto"},children:[a.value===1&&f(w,null,3,"oi_0"),f(L,null,3,"oi_1")],onBeforeToggle$:[u(()=>r(()=>Promise.resolve().then(()=>p),void 0),"s_ZUZoIzUS90I",[n,o]),e.onBeforeToggle$],onToggle$:[u(()=>r(()=>Promise.resolve().then(()=>p),void 0),"s_0p00H2IILu4",[n,i]),e.onToggle$],"document:onPopPolyLoad$":u(()=>r(()=>Promise.resolve().then(()=>p),void 0),"s_JrexqtZw5tc",[a])},{popover:E((l,c)=>l.manual||c.popover==="manual"?"manual":"auto",[n,e],'p0.manual&&"manual"||p1.popover==="manual"?"manual":"auto"||"auto"')},0,"oi_2")},p=Object.freeze(Object.defineProperty({__proto__:null,_hW:A,s_0p00H2IILu4:D,s_JrexqtZw5tc:j,s_KSA0sf8wVLo:I,s_XydisE1slPA:T,s_ZUZoIzUS90I:O,s_jy5BmlR0oco:b,s_uc6c3j258Ak:q},Symbol.toStringTag,{value:"Module"}));export{A as _hW,D as s_0p00H2IILu4,j as s_JrexqtZw5tc,I as s_KSA0sf8wVLo,T as s_XydisE1slPA,O as s_ZUZoIzUS90I,b as s_jy5BmlR0oco,q as s_uc6c3j258Ak};
