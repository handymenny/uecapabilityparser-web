import{l as _,u,h as g,j as h,k as d,q as p,S as f,_hW as l}from"./q-BmWDAmC3.js";import{_ as a}from"./q-1dnJZ1Td.js";import{p as m}from"./q-Jx8ir6j-.js";import{u as P}from"./q-rXFhK1m4.js";import"./q-B97P3fmz.js";const S=async()=>{var t,n,r,i;const[o,e]=_();if(o.hover&&!e.isSupportedSig.value){await e.showPopover();return}if(!e.isSupportedSig.value){for(await e.initPopover$();!e.hasPolyfillLoadedSig.value;)await new Promise(s=>setTimeout(s,10));e.isSupportedSig.value||(o.isOpenSig.value?(i=(r=o.panelRef)==null?void 0:r.value)==null||i.hidePopover():(n=(t=o.panelRef)==null?void 0:t.value)==null||n.showPopover())}},w=Object.freeze(Object.defineProperty({__proto__:null,_hW:l,s_zfn5cYHa0UM:S},Symbol.toStringTag,{value:"Module"})),O=async()=>{const[o,e]=_();o.hover&&await e.showPopover()},j=Object.freeze(Object.defineProperty({__proto__:null,_hW:l,s_nhZl0v2h068:O},Symbol.toStringTag,{value:"Module"})),b=async()=>{const[o,e]=_();o.hover&&await e.hidePopover()},T=Object.freeze(Object.defineProperty({__proto__:null,_hW:l,s_f5jzbGpFTeg:b},Symbol.toStringTag,{value:"Module"})),k=o=>{const e=u(m),t=`${e.compId}-trigger`,n=`${e.compId}-panel`,r=P(e.compId),i=p(()=>a(()=>Promise.resolve().then(()=>w),void 0),"s_zfn5cYHa0UM",[e,r]),s=p(()=>a(()=>Promise.resolve().then(()=>j),void 0),"s_nhZl0v2h068",[e,r]),v=p(()=>a(()=>Promise.resolve().then(()=>T),void 0),"s_f5jzbGpFTeg",[e,r]);return g("button",{...o,ref:e.triggerRef,id:t,popovertarget:n,get popoverTargetAction(){return e.hover?"show":void 0},children:d(f,null,3,"wH_0"),onClick$:[i,o.onClick$],onPointerOver$:[s,o.onPointerOver$],onPointerOut$:[v,o.onPointerOut$]},{popoverTargetAction:h(c=>c.hover?"show":void 0,[e])},0,"wH_1")};export{l as _hW,b as a,k as b,O as s,S as s_zfn5cYHa0UM};
