import{u as c,v as u,a as d,c as P,d as g,q as a,S as h}from"./q-DiiDRB9g.js";import{_ as p}from"./q-C7i0xNVT.js";import{p as f}from"./q-CVeAmpIm.js";import{u as m}from"./q-Cw6qNPED.js";const S=async()=>{var t,n,r,i;const[o,e]=c();if(!o.hover&&!e.isSupportedSig.value){for(await e.initPopover$();!e.hasPolyfillLoadedSig.value;)await new Promise(s=>setTimeout(s,10));e.isSupportedSig.value||(o.isOpenSig.value?(i=(r=o.panelRef)==null?void 0:r.value)==null||i.hidePopover():(n=(t=o.panelRef)==null?void 0:t.value)==null||n.showPopover())}},T=async()=>{const[o,e]=c();o.hover&&await e.showPopover()},w=async()=>{const[o,e]=c();o.hover&&await e.hidePopover()},x=o=>{const e=u(f),t=`${e.compId}-trigger`,n=`${e.compId}-panel`,r=m(e.compId),i=a(()=>p(()=>Promise.resolve().then(()=>v),void 0),"s_TVDQ0pxPY0Y",[e,r]),s=a(()=>p(()=>Promise.resolve().then(()=>v),void 0),"s_gjEupC8HAfk",[e,r]),_=a(()=>p(()=>Promise.resolve().then(()=>v),void 0),"s_pQFcHaT8RUY",[e,r]);return d("button",{...o,ref:e.triggerRef,id:t,popovertarget:n,get popoverTargetAction(){return e.hover?"show":void 0},children:g(h,null,3,"AE_0"),onClick$:[i,o.onClick$],onPointerOver$:[s,o.onPointerOver$],onPointerOut$:[_,o.onPointerOut$]},{popoverTargetAction:P(l=>l.hover?"show":void 0,[e],'p0.hover?"show":undefined')},0,"AE_1")},v=Object.freeze(Object.defineProperty({__proto__:null,s_Qk2X05rg9Ic:x,s_TVDQ0pxPY0Y:S,s_gjEupC8HAfk:T,s_pQFcHaT8RUY:w},Symbol.toStringTag,{value:"Module"}));export{x as s_Qk2X05rg9Ic,S as s_TVDQ0pxPY0Y,T as s_gjEupC8HAfk,w as s_pQFcHaT8RUY};
