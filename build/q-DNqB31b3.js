import{H as J,I as Z,l as s,E as U,r as n,G as r,s as W,x as F,h as Y,i as d,j as $,k as Q,q as o,S as X,_hW as N}from"./q-BmWDAmC3.js";import{_ as t}from"./q-N76fqm0C.js";import{a as ee,c as oe}from"./q-CuHn8TBl.js";const g=(e,_)=>J(()=>e||Z(_)),te=()=>{const[e]=s();return e.rewind??!1},se=Object.freeze(Object.defineProperty({__proto__:null,s_1Ik400pILhI:te},Symbol.toStringTag,{value:"Module"})),re=()=>{const[e]=s();return e.slidesPerView??1},_e=Object.freeze(Object.defineProperty({__proto__:null,s_tIz4XTaKCi0:re},Symbol.toStringTag,{value:"Module"})),ne=()=>{var _,i;const[e]=s();return{mouse:((_=e.sensitivity)==null?void 0:_.mouse)??1.5,touch:((i=e.sensitivity)==null?void 0:i.touch)??1.25}},ie=Object.freeze(Object.defineProperty({__proto__:null,s_E0iunlluRzc:ne},Symbol.toStringTag,{value:"Module"})),le=()=>{const[e]=s();return e.maxSlideHeight??void 0},ae=Object.freeze(Object.defineProperty({__proto__:null,s_BihYfLKmEVc:le},Symbol.toStringTag,{value:"Module"})),ue=({track:e})=>{const[_,i,l,a]=s();i&&(e(()=>_.value),e(()=>l.value),l.value>1?a.value=_.value/(l.value-1)*100:a.value=0)},ce=Object.freeze(Object.defineProperty({__proto__:null,_hW:N,s_1HJFKJ0ucmU:ue},Symbol.toStringTag,{value:"Module"})),de=()=>{const[e]=s();return e.maxSlideHeight===void 0?"horizontal":e.orientation??"horizontal"},ge=Object.freeze(Object.defineProperty({__proto__:null,s_06bhiC0pZHc:de},Symbol.toStringTag,{value:"Module"})),me=()=>{const[e]=s();return e.align??"start"},ve=Object.freeze(Object.defineProperty({__proto__:null,s_EOCSTWBjs4o:me},Symbol.toStringTag,{value:"Module"})),pe=()=>{const[e]=s();return e.move??1},Se=Object.freeze(Object.defineProperty({__proto__:null,s_0c2s5V0ahqk:pe},Symbol.toStringTag,{value:"Module"})),be=()=>{const[e]=s();return e._numSlides??0},fe=Object.freeze(Object.defineProperty({__proto__:null,s_dy0SgSDwvK8:be},Symbol.toStringTag,{value:"Module"})),ze=e=>{const{align:_,"bind:currSlideIndex":i,"bind:selectedIndex":l,"bind:autoplay":a,"bind:progress":m,_isTitle:v,startIndex:E,...I}=e,p=U(),T=n(),x=n(),w=n(),k=n(),z=n(!1),q=n([]),M=n([]),u=r(o(()=>t(()=>Promise.resolve().then(()=>Ee),void 0),"s_7Zxj0oBE0uM",[l,E])),S=g(l??i,u.value),R=n(!1),c=g(a,!1),L=()=>u.value?u.value/((e._numSlides??1)-1):0,b=r(o(()=>t(()=>Promise.resolve().then(()=>fe),void 0),"s_dy0SgSDwvK8",[e])),V=r(o(()=>t(()=>Promise.resolve().then(()=>Pe),void 0),"s_5mVqZpU3Ers",[e])),f=r(o(()=>t(()=>Promise.resolve().then(()=>_e),void 0),"s_tIz4XTaKCi0",[e])),j=r(o(()=>t(()=>Promise.resolve().then(()=>ye),void 0),"s_mMT8h04TG8Y",[e])),P=r(o(()=>t(()=>Promise.resolve().then(()=>ve),void 0),"s_EOCSTWBjs4o",[e])),A=r(o(()=>t(()=>Promise.resolve().then(()=>se),void 0),"s_1Ik400pILhI",[e])),D=r(o(()=>t(()=>Promise.resolve().then(()=>Te),void 0),"s_JFrf119uWOc",[e])),B=g(m,L()),C=r(o(()=>t(()=>Promise.resolve().then(()=>ie),void 0),"s_E0iunlluRzc",[e])),H=r(o(()=>t(()=>Promise.resolve().then(()=>Se),void 0),"s_0c2s5V0ahqk",[e])),h=r(o(()=>t(()=>Promise.resolve().then(()=>ae),void 0),"s_BihYfLKmEVc",[e])),y=r(o(()=>t(()=>Promise.resolve().then(()=>ge),void 0),"s_06bhiC0pZHc",[e])),K=`${p}-title`,O={localId:p,scrollerRef:T,nextButtonRef:x,prevButtonRef:w,scrollStartRef:k,isMouseDraggingSig:z,slideRefsArray:q,bulletRefsArray:M,currentIndexSig:S,isScrollerSig:R,isAutoplaySig:c,numSlidesSig:b,isDraggableSig:V,slidesPerViewSig:f,gapSig:j,alignSig:P,isRewindSig:A,autoPlayIntervalMsSig:D,startIndexSig:u,sensitivitySig:C,moveSig:H,orientationSig:y,maxSlideHeightSig:h};return ee(O),W(oe,O),F(o(()=>t(()=>Promise.resolve().then(()=>ce),void 0),"s_1HJFKJ0ucmU",[S,m,b,B])),Y("div",{role:"group","aria-labelledby":v?K:void 0,"aria-label":v?void 0:"content slideshow","aria-roledescription":"carousel",get"aria-live"(){return c.value?"off":"polite"},"data-qui-carousel":!0,...I,style:{"--slides-per-view":f.value,"--gap":`${j.value}px`,"--scroll-snap-align":P.value,"--orientation":y.value==="vertical"?"column":"row","--max-slide-height":`${h.value}px`},children:Q(X,null,3,"Gt_0")},{role:d,"aria-roledescription":d,"aria-live":$(G=>G.value?"off":"polite",[c]),"data-qui-carousel":d},0,"Gt_1")},je=()=>{const[e]=s();return e.draggable??!0},Pe=Object.freeze(Object.defineProperty({__proto__:null,s_5mVqZpU3Ers:je},Symbol.toStringTag,{value:"Module"})),he=()=>{const[e]=s();return e.gap??0},ye=Object.freeze(Object.defineProperty({__proto__:null,s_mMT8h04TG8Y:he},Symbol.toStringTag,{value:"Module"})),Oe=()=>{const[e,_]=s();return _??(e==null?void 0:e.value)??0},Ee=Object.freeze(Object.defineProperty({__proto__:null,s_7Zxj0oBE0uM:Oe},Symbol.toStringTag,{value:"Module"})),Ie=()=>{const[e]=s();return e.autoPlayIntervalMs??0},Te=Object.freeze(Object.defineProperty({__proto__:null,s_JFrf119uWOc:Ie},Symbol.toStringTag,{value:"Module"}));export{ne as a,le as b,ue as c,de as d,me as e,pe as f,be as g,ze as h,je as i,he as j,Oe as k,Ie as l,re as s,te as s_1Ik400pILhI,g as u};