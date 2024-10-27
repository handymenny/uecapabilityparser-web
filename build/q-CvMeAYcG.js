import{_ as r}from"./q-D-pp8oIu.js";import{p as y,E as m}from"./q-C_jO54c2.js";import{B as S,u as b,t as h,r as d,x as O,h as E,j as T,k as g,q as i,S as j,l as c,_hW as f}from"./q-BBXjioMF.js";import{u as w}from"./q-CIV1tlZq.js";const P=e=>{S();const o=b(y),t=`${o.compId}-panel`,n={context:o,givenContextRef:o.panelRef},a=w(e.ref,n);h(i(()=>r(()=>Promise.resolve().then(()=>x),void 0),"s_fftHK5OdflE"));const s=d(!1),p=d(2),l=d(!1),u=d(!1);return p.value===1&&setTimeout(()=>{l.value=!0},0),O(i(()=>r(()=>Promise.resolve().then(()=>z),void 0),"s_ixY45GOQkbs",[o,u,s,l])),E("div",{...e,id:t,ref:a,get popover(){return o.manual||e.popover==="manual"?"manual":"auto"},children:[p.value===1&&g(m,null,3,"HL_0"),g(j,null,3,"HL_1")],onBeforeToggle$:[i(()=>r(()=>Promise.resolve().then(()=>D),void 0),"s_fu5Jc2k0zdM",[o]),e.onBeforeToggle$],onToggle$:[i(()=>r(()=>Promise.resolve().then(()=>k),void 0),"s_NjOXWISUeJo",[o,u]),e.onToggle$],"document:onPopPolyLoad$":i(()=>r(()=>Promise.resolve().then(()=>B),void 0),"s_woYPw4aFL00",[p])},{popover:T((v,_)=>v.manual||_.popover==="manual"?"manual":"auto",[o,e])},0,"HL_2")},Y=Object.freeze(Object.defineProperty({__proto__:null,s_FQQOZY05vEI:P},Symbol.toStringTag,{value:"Module"})),R=`/* This only applies when popover isn't supported */
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
`,L=R,x=Object.freeze(Object.defineProperty({__proto__:null,s_fftHK5OdflE:L},Symbol.toStringTag,{value:"Module"})),A=e=>{var n,a,s;const[o,t]=c();o.isOpenSig.value=e.newState==="open",(n=o.panelRef)!=null&&n.value&&(a=o.panelRef)!=null&&a.value.classList.contains(":popover-open")&&(s=o.panelRef)!=null&&s.value.parentElement&&!t.value&&o.panelRef.value.parentElement.appendChild(o.panelRef.value)},k=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_NjOXWISUeJo:A},Symbol.toStringTag,{value:"Module"})),C=e=>{var o,t;for(;e!=null&&e.parentElement;){if(((o=e.parentElement)==null?void 0:o.tagName)==="DIALOG"||(t=e.parentElement)!=null&&t.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},I=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_8owBTFjL9qg:C},Symbol.toStringTag,{value:"Module"})),q=async({track:e,cleanup:o})=>{var u;const[t,n,a,s]=c();e(()=>s.value),a.value=!0;const p=i(()=>r(()=>Promise.resolve().then(()=>I),void 0),"s_8owBTFjL9qg");let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),(u=t.panelRef)!=null&&u.value&&(await p(t.panelRef.value)===null?l.appendChild(t.panelRef.value):n.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),o(()=>{var _;return(_=t.panelRef)==null?void 0:_.value}))},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_ixY45GOQkbs:q},Symbol.toStringTag,{value:"Module"})),M=async e=>{var n;const[o]=c();if(!((n=o.panelRef)!=null&&n.value))return;const t=o.panelRef.value;e.newState==="open"&&(delete t.dataset.closed,t.dataset.open=""),e.newState==="closed"&&(delete t.dataset.open,t.dataset.closed="")},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_fu5Jc2k0zdM:M},Symbol.toStringTag,{value:"Module"})),$=()=>{const[e]=c();if(e.value===0){e.value=1;return}},B=Object.freeze(Object.defineProperty({__proto__:null,s_woYPw4aFL00:$},Symbol.toStringTag,{value:"Module"}));export{A as a,C as b,q as c,M as d,$ as e,Y as f,L as s,P as s_FQQOZY05vEI};
