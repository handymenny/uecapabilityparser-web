import{u as _,v as f,h as d,r as m,a as S,b,c as u,d as O,q as r,S as x,s as y}from"./q-DiiDRB9g.js";import{_ as c}from"./q-C7i0xNVT.js";import{c as A}from"./q-DB4dUSJQ.js";const C=()=>{const[n,e]=_();n.isOpenSig.value||(e.value=!0)},E=async function({track:e}){const[t,i,s]=_();if(e(()=>t.isOpenSig.value),!t.contentRef.value)return;await t.getContentDimensions$(),t.isOpenSig.value?(t.contentRef.value.removeAttribute("data-closed"),t.contentRef.value.dataset.open="",s.value=!1):(t.contentRef.value.dataset.closed="",t.contentRef.value.removeAttribute("data-open"));const{animationDuration:o,transitionDuration:a}=getComputedStyle(t.contentRef.value);o!=="0s"||a!=="0s"?i.value=!0:i.value=!1},I=n=>{const e=f(A),t=d(!e.isOpenSig.value),i=d(!1),s=`${e.itemId}-content`,o=`${e.itemId}-trigger`,a=r(()=>c(()=>Promise.resolve().then(()=>v),void 0),"s_VWxzpD9O5nQ",[e,t]);return m(r(()=>c(()=>Promise.resolve().then(()=>v),void 0),"s_1y0ssyGswl4",[e,i,t])),S("div",{...n,ref:e.contentRef,id:s,"data-collapsible-content":!0,get"data-disabled"(){return e.disabled?"":void 0},get hidden(){return i.value?t.value:!e.isOpenSig.value},"aria-labelledby":o,children:O(x,null,3,"5i_0"),onAnimationEnd$:[a,n.onAnimationEnd$],onTransitionEnd$:[a,n.onTransitionEnd$]},{"data-collapsible-content":b,"data-disabled":u(l=>l.disabled?"":void 0,[e],'p0.disabled?"":undefined'),hidden:u((l,g,p)=>g.value?p.value:!l.isOpenSig.value,[e,i,t],"p1.value?p2.value:!p0.isOpenSig.value")},0,"5i_1")},v=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_1y0ssyGswl4:E,s_VWxzpD9O5nQ:C,s_uiCqQ5UkIHM:I},Symbol.toStringTag,{value:"Module"}));export{y as _hW,E as s_1y0ssyGswl4,C as s_VWxzpD9O5nQ,I as s_uiCqQ5UkIHM};
