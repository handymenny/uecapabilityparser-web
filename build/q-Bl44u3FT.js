import{_ as s}from"./q-Ds_uSXES.js";import{p as g,E as y}from"./q-F9Tn7taO.js";import{B as h,u as S,t as b,r as c,x as j,h as w,j as P,k as m,q as r,S as O,l as d,_hW as v}from"./q-BmWDAmC3.js";import{u as E}from"./q-Df3zJkOy.js";const T=e=>{h();const o=S(g),n=`${o.compId}-panel`,t={context:o,givenContextRef:o.panelRef},a=E(e.ref,t);b(r(()=>s(()=>Promise.resolve().then(()=>k),void 0),"s_fftHK5OdflE"));const p=c(!1),i=c(2),l=c(!1),_=c(!1);return i.value===1&&setTimeout(()=>{l.value=!0},0),j(r(()=>s(()=>Promise.resolve().then(()=>z),void 0),"s_ixY45GOQkbs",[o,_,p,l])),w("div",{...e,id:n,ref:a,get popover(){return o.manual||e.popover==="manual"?"manual":"auto"},children:[i.value===1&&m(y,null,3,"HL_0"),m(O,null,3,"HL_1")],onBeforeToggle$:[r(()=>s(()=>Promise.resolve().then(()=>D),void 0),"s_fu5Jc2k0zdM",[o]),e.onBeforeToggle$],onToggle$:[r(()=>s(()=>Promise.resolve().then(()=>q),void 0),"s_NjOXWISUeJo",[o,_]),e.onToggle$],"document:onPopPolyLoad$":r(()=>s(()=>Promise.resolve().then(()=>B),void 0),"s_woYPw4aFL00",[i])},{popover:P((f,u)=>f.manual||u.popover==="manual"?"manual":"auto",[o,e])},0,"HL_2")},Y=Object.freeze(Object.defineProperty({__proto__:null,s_FQQOZY05vEI:T},Symbol.toStringTag,{value:"Module"})),R=`/* This only applies when popover isn't supported */
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
`,L=R,k=Object.freeze(Object.defineProperty({__proto__:null,s_fftHK5OdflE:L},Symbol.toStringTag,{value:"Module"})),I=e=>{var t,a,p;const[o,n]=d();o.isOpenSig.value=e.newState==="open",(t=o.panelRef)!=null&&t.value&&(a=o.panelRef)!=null&&a.value.classList.contains(":popover-open")&&(p=o.panelRef)!=null&&p.value.parentElement&&!n.value&&o.panelRef.value.parentElement.appendChild(o.panelRef.value)},q=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_NjOXWISUeJo:I},Symbol.toStringTag,{value:"Module"})),x=e=>{var o,n;for(;e!=null&&e.parentElement;){if(((o=e.parentElement)==null?void 0:o.tagName)==="DIALOG"||(n=e.parentElement)!=null&&n.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_8owBTFjL9qg:x},Symbol.toStringTag,{value:"Module"})),C=async({track:e,cleanup:o})=>{var _;const[n,t,a,p]=d();e(()=>p.value),a.value=!0;const i=r(()=>s(()=>Promise.resolve().then(()=>A),void 0),"s_8owBTFjL9qg");let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),(_=n.panelRef)!=null&&_.value&&(await i(n.panelRef.value)===null?l.appendChild(n.panelRef.value):t.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),o(()=>{var u;return(u=n.panelRef)==null?void 0:u.value}))},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_ixY45GOQkbs:C},Symbol.toStringTag,{value:"Module"})),M=async e=>{var t;const[o]=d();if(!((t=o.panelRef)!=null&&t.value))return;const n=o.panelRef.value;e.newState==="open"&&(delete n.dataset.closed,n.dataset.open=""),e.newState==="closed"&&(delete n.dataset.open,n.dataset.closed="")},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_fu5Jc2k0zdM:M},Symbol.toStringTag,{value:"Module"})),$=()=>{const[e]=d();if(e.value===0){e.value=1;return}},B=Object.freeze(Object.defineProperty({__proto__:null,s_woYPw4aFL00:$},Symbol.toStringTag,{value:"Module"}));export{I as a,x as b,C as c,M as d,$ as e,Y as p,L as s,T as s_FQQOZY05vEI};
