import{_ as d}from"./q-Biq04Hab.js";import{b as f,u as m,r,B as S,i as p,j as O,k as u,l as y,q as c,S as A,g as _,y as v}from"./q-PXVB0oKg.js";const x=f("Collapsible"),C=n=>{const e=m(x),t=r(!e.isOpenSig.value),a=r(!1),o=`${e.itemId}-content`,s=`${e.itemId}-trigger`,i=c(()=>d(()=>Promise.resolve().then(()=>R),void 0),"s_CiqlalAGyZ4",[e,t]);return S(c(()=>d(()=>Promise.resolve().then(()=>E),void 0),"s_2YVPOAbmcuY",[e,a,t])),p("div",{...n,ref:e.contentRef,id:o,"data-collapsible-content":!0,get"data-disabled"(){return e.disabled?"":void 0},get hidden(){return a.value?t.value:!e.isOpenSig.value},"aria-labelledby":s,children:y(A,null,3,"0K_0"),onAnimationEnd$:[i,n.onAnimationEnd$],onTransitionEnd$:[i,n.onTransitionEnd$]},{"data-collapsible-content":O,"data-disabled":u(l=>l.disabled?"":void 0,[e]),hidden:u((l,b,g)=>b.value?g.value:!l.isOpenSig.value,[e,a,t])},0,"0K_1")},$=Object.freeze(Object.defineProperty({__proto__:null,s_W0fsbBaRUSA:C},Symbol.toStringTag,{value:"Module"})),P=()=>{const[n,e]=_();n.isOpenSig.value||(e.value=!0)},R=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_CiqlalAGyZ4:P},Symbol.toStringTag,{value:"Module"})),j=async function({track:e}){const[t,a,o]=_();if(e(()=>t.isOpenSig.value),!t.contentRef.value)return;await t.getContentDimensions$(),t.isOpenSig.value?(t.contentRef.value.removeAttribute("data-closed"),t.contentRef.value.dataset.open="",o.value=!1):(t.contentRef.value.dataset.closed="",t.contentRef.value.removeAttribute("data-open"));const{animationDuration:s,transitionDuration:i}=getComputedStyle(t.contentRef.value);s!=="0s"||i!=="0s"?a.value=!0:a.value=!1},E=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_2YVPOAbmcuY:j},Symbol.toStringTag,{value:"Module"}));export{j as a,$ as b,x as c,P as s,C as s_W0fsbBaRUSA};