import{_ as c}from"./q-1dnJZ1Td.js";import{b as p,u as g,r as d,x as f,h as S,i as O,j as r,k as A,q as u,S as y,l as _,_hW as b}from"./q-BmWDAmC3.js";const C=p("Collapsible"),h=n=>{const e=g(C),t=d(!e.isOpenSig.value),o=d(!1),i=`${e.itemId}-content`,l=`${e.itemId}-trigger`,a=u(()=>c(()=>Promise.resolve().then(()=>x),void 0),"s_CiqlalAGyZ4",[e,t]);return f(u(()=>c(()=>Promise.resolve().then(()=>R),void 0),"s_2YVPOAbmcuY",[e,o,t])),S("div",{...n,ref:e.contentRef,id:i,"data-collapsible-content":!0,get"data-disabled"(){return e.disabled?"":void 0},get hidden(){return o.value?t.value:!e.isOpenSig.value},"aria-labelledby":l,children:A(y,null,3,"0K_0"),onAnimationEnd$:[a,n.onAnimationEnd$],onTransitionEnd$:[a,n.onTransitionEnd$]},{"data-collapsible-content":O,"data-disabled":r(s=>s.disabled?"":void 0,[e]),hidden:r((s,v,m)=>v.value?m.value:!s.isOpenSig.value,[e,o,t])},0,"0K_1")},T=Object.freeze(Object.defineProperty({__proto__:null,s_W0fsbBaRUSA:h},Symbol.toStringTag,{value:"Module"})),j=()=>{const[n,e]=_();n.isOpenSig.value||(e.value=!0)},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_CiqlalAGyZ4:j},Symbol.toStringTag,{value:"Module"})),P=async function({track:e}){const[t,o,i]=_();if(e(()=>t.isOpenSig.value),!t.contentRef.value)return;await t.getContentDimensions$(),t.isOpenSig.value?(t.contentRef.value.removeAttribute("data-closed"),t.contentRef.value.dataset.open="",i.value=!1):(t.contentRef.value.dataset.closed="",t.contentRef.value.removeAttribute("data-open"));const{animationDuration:l,transitionDuration:a}=getComputedStyle(t.contentRef.value);l!=="0s"||a!=="0s"?o.value=!0:o.value=!1},R=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_2YVPOAbmcuY:P},Symbol.toStringTag,{value:"Module"}));export{P as a,T as b,C as c,j as s,h as s_W0fsbBaRUSA};
