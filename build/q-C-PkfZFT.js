import{g as u,z as S,u as b,r as P,h,B as f,l as p,q as i,S as y,j as l,k as r,y as _}from"./q-PXVB0oKg.js";import{_ as a}from"./q-Biq04Hab.js";import{u as M,H as j,a as x}from"./q-HI-baKIg.js";import{a as k}from"./q-B_gu2mKW.js";import{u as E}from"./q-DHyD8cBB.js";import"./q-BO0xVEZT.js";import"./q-_36nflbG.js";import"./q-qzFHGjGQ.js";const R=async t=>{const[e,n]=u();if(!e.isOpenSig.value||!e.panelRef.value||!e.triggerRef.value)return;const s=e.panelRef.value.getBoundingClientRect(),c=e.triggerRef.value.getBoundingClientRect(),{clientX:d,clientY:g}=t,m=await n(s,d,g),v=await n(c,d,g);m&&v&&(e.isOpenSig.value=!1)},T=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_LfjlpkRkqA8:R},Symbol.toStringTag,{value:"Module"})),w=(t,e,n)=>e<t.left||e>t.right||n<t.top||n>t.bottom,A=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_8xk7YPQfvhA:w},Symbol.toStringTag,{value:"Module"})),L=async({track:t})=>{const[e,n,s]=u();t(()=>e.isOpenSig.value),n.value||(e.isOpenSig.value?await s.showPopover():await s.hidePopover())},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_HdX55Zl0MBU:L},Symbol.toStringTag,{value:"Module"})),z=({track:t,cleanup:e})=>{const[n,s]=u();t(()=>n.isOpenSig.value),n.isOpenSig.value&&window.addEventListener("pointerdown",s),e(()=>{window.removeEventListener("pointerdown",s)})},I=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_AZxF8y6B9SU:z},Symbol.toStringTag,{value:"Module"})),V=()=>{const[t]=u();return t.isMouseOverPopupSig.value=!1},$=Object.freeze(Object.defineProperty({__proto__:null,s_0OXtHoOjGi4:V},Symbol.toStringTag,{value:"Module"})),H=()=>{const[t]=u();t.value=!1},U=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_h5tE4gkZLUw:H},Symbol.toStringTag,{value:"Module"})),Y=`/* Handle the visibility of the indicator for checkboxes and radios */
[role='menuitemcheckbox'] > [data-indicator],
[role='menuitemradio'] > [data-indicator] {
  display: none;
}

[role='menuitemcheckbox'][data-checked] > [data-indicator],
[role='menuitemradio'][data-checked] > [data-indicator] {
  display: block;
}
`,B=Y,q=Object.freeze(Object.defineProperty({__proto__:null,s_SP9k6sjwz1Y:B},Symbol.toStringTag,{value:"Module"})),Q=()=>{const[t]=u();return t.isMouseOverPopupSig.value=!0},Z=Object.freeze(Object.defineProperty({__proto__:null,s_5dxmOM09M2Y:Q},Symbol.toStringTag,{value:"Module"})),se=t=>{S(i(()=>a(()=>Promise.resolve().then(()=>q),void 0),"s_SP9k6sjwz1Y"));const e=b(k),n=M(e.localId),s=P(!0),c=h(t,["floating","flip","hover","gutter"]);f(i(()=>a(()=>Promise.resolve().then(()=>D),void 0),"s_HdX55Zl0MBU",[e,s,n]));const d=`${e.localId}-panel`;f(i(()=>a(()=>Promise.resolve().then(()=>I),void 0),"s_AZxF8y6B9SU",[e,i(()=>a(()=>Promise.resolve().then(()=>T),void 0),"s_LfjlpkRkqA8",[e,i(()=>a(()=>Promise.resolve().then(()=>A),void 0),"s_8xk7YPQfvhA")])])),f(i(()=>a(()=>Promise.resolve().then(()=>U),void 0),"s_h5tE4gkZLUw",[s]));const v=E(i(()=>a(()=>Promise.resolve().then(()=>X),void 0),"s_aQmMAf10AbU",[e]),650);return p(x,{get floating(){return t.floating},get flip(){return t.flip},get hover(){return t.hover},get gutter(){return t.gutter},get"bind:anchor"(){return t["bind:anchor"]??e.triggerRef},get"bind:panel"(){return e.panelRef},manual:!0,get id(){return e.localId},style:{display:"contents"},children:p(j,{id:d,get"data-open"(){return e.isOpenSig.value?"":void 0},get"data-closed"(){return e.isOpenSig.value?void 0:""},role:"menu",get"aria-expanded"(){return e.isOpenSig.value?"true":"false"},onMouseMove$:i(()=>a(()=>Promise.resolve().then(()=>F),void 0),"s_DDke2aoYmdg",[e,v]),onMouseOut$:i(()=>a(()=>Promise.resolve().then(()=>$),void 0),"s_0OXtHoOjGi4",[e]),onKeyDown$:i(()=>a(()=>Promise.resolve().then(()=>Z),void 0),"s_5dxmOM09M2Y",[e]),...c,children:p(y,null,3,"Js_0"),[l]:{"data-open":r(o=>o.isOpenSig.value?"":void 0,[e]),"data-closed":r(o=>o.isOpenSig.value?void 0:"",[e]),role:l,"aria-expanded":r(o=>o.isOpenSig.value?"true":"false",[e]),onMouseMove$:l,onMouseOut$:l,onKeyDown$:l}},0,"Js_1"),[l]:{floating:r(o=>o.floating,[t]),flip:r(o=>o.flip,[t]),hover:r(o=>o.hover,[t]),gutter:r(o=>o.gutter,[t]),"bind:anchor":r((o,O)=>O["bind:anchor"]??o.triggerRef,[e,t]),"bind:panel":r(o=>o.panelRef,[e]),manual:l,id:r(o=>o.localId,[e]),style:l}},1,"Js_2")},C=()=>{const[t]=u();t.isMouseOverPopupSig.value=!1},X=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_aQmMAf10AbU:C},Symbol.toStringTag,{value:"Module"})),J=async()=>{const[t,e]=u();t.isMouseOverPopupSig.value=!0,await e()},F=Object.freeze(Object.defineProperty({__proto__:null,s_DDke2aoYmdg:J},Symbol.toStringTag,{value:"Module"}));export{_ as _hW,L as a,z as b,V as c,H as d,B as e,Q as f,se as g,C as h,J as i,w as s,R as s_LfjlpkRkqA8};
