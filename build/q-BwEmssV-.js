import{l as g,r as d,q as l,x as b,t as M,u as x,g as E,J as I,d as D,h as O,i as j,j as y,k,S as R,_hW as S}from"./q-BmWDAmC3.js";import{_ as c}from"./q-Ds_uSXES.js";import{c as q}from"./q-CfjkeS7W.js";const z=()=>{const[o]=g();o.value=!1},L=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_PfB5cFDIoxE:z},Symbol.toStringTag,{value:"Module"})),A=async()=>{const[o,e,a,t,n,i]=g();if(!o.scrollerRef.value)return;const s=o.slideRefsArray.value,u=-i.transformSig.value[i.orientationProps[o.orientationSig.value].direction];let r=0,_=1/0;for(let v=0;v<s.length;v++){if(!s[v].value)continue;const h=await i.getSlidePosition(v),m=Math.abs(h-u);m<_&&(r=v,_=m)}const p=await i.getSlidePosition(r);await i.setTransition(!0),i.transformSig.value[i.orientationProps[o.orientationSig.value].direction]=-p,await i.setTransform(),o.currentIndexSig.value=r,i.isMouseDownSig.value=!1,a.value=!1,t.value=!1,n.value=!1,window.removeEventListener("mousemove",e)},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_0Jk8izh0wBk:A},Symbol.toStringTag,{value:"Module"})),$=(o,e)=>{const a=d();return l(()=>c(()=>import("./q-CZGFkyrx.js"),[]),"s_9xa13kCAvys",[e,o,a])};function U(o){const e=d(),a=d({x:0,y:0,z:0}),t=d(null),n=d(!1),i=d(!1),s=d(!0),u=d();b(l(()=>c(()=>import("./q-DfzsdWez.js"),[]),"s_pYxtqSdjTvM",[o]));const r={vertical:{size:"height",scroll:"scrollHeight",client:"clientHeight",direction:"y",pagePosition:"pageY",clientPosition:"clientY"},horizontal:{size:"width",scroll:"scrollWidth",client:"clientWidth",direction:"x",pagePosition:"pageX",clientPosition:"clientX"}},{direction:_,scroll:p,client:v,size:P}=r[o.orientationSig.value],h=l(()=>c(()=>import("./q-b84QtA__.js"),[]),"s_z6awyvsPsfk",[o,_,a]),m=l(()=>c(()=>import("./q-CRPkNxEb.js").then(T=>T.u),[]),"s_63EGqAyH1zg",[t,v,o,p]),w=l(()=>c(()=>import("./q-DHXJ4NSb.js"),[]),"s_hxDb3GSo4W4",[o,u,s]);return{startPosSig:e,transformSig:a,boundariesSig:t,isMouseDownSig:n,isTouchDeviceSig:i,isInitialTransitionSig:s,setTransform:h,setBoundaries:m,setTransition:w,setInitialSlidePos:l(()=>c(()=>import("./q-rW_7DAek.js"),[]),"s_Ueb7JyAG0Eg",[o,h,w,a]),orientationProps:r,getSlidePosition:l(()=>c(()=>import("./q-CmtKh_6V.js"),[]),"s_1208l4o9iVQ",[v,o,p,P])}}const le=o=>{M(l(()=>c(()=>Promise.resolve().then(()=>ne),void 0),"s_leMpxeCWc9Q"));const e=x(q),a=E(o,["onMouseDown$","onTouchStart$","onTouchMove$","onTouchEnd$"]),t=d(!1),n=d(!0),i=d(!1),s=d(!0),u=d(!1),r=U(e),_=l(()=>c(()=>Promise.resolve().then(()=>X),void 0),"s_Ia0e0Sh0HMY",[e,t,r]),p=l(()=>c(()=>Promise.resolve().then(()=>V),void 0),"s_0Jk8izh0wBk",[e,_,t,n,i,r]),v=l(()=>c(()=>Promise.resolve().then(()=>ee),void 0),"s_oc7hOhRWDco",[e,p,_,t,r]);b(l(()=>c(()=>Promise.resolve().then(()=>W),void 0),"s_nygMP70b9yU",[e,_,t,n,r]));const P=l(()=>c(()=>Promise.resolve().then(()=>G),void 0),"s_8U1zMg0jyKo",[e,r]),h=l(()=>c(()=>Promise.resolve().then(()=>J),void 0),"s_neyImhhRK5c",[e,n,i,r]),m=$(r.setTransform,1),w=l(()=>c(()=>Promise.resolve().then(()=>Q),void 0),"s_L9gAZUyNlIg",[e,m,n,r]);return I("resize",P),b(l(()=>c(()=>Promise.resolve().then(()=>Y),void 0),"s_MJFkA3gkapo",[e,s,u])),b(l(()=>c(()=>Promise.resolve().then(()=>L),void 0),"s_PfB5cFDIoxE",[s])),D("div",{onMouseDown$:[v,o.onMouseDown$],onTouchStart$:[h,o.onTouchStart$],onTouchMove$:[w,o.onTouchMove$],onTouchEnd$:[p,o.onTouchEnd$],onQVisible$:u.value?r.setInitialSlidePos:void 0},{"data-qui-carousel-viewport":!0,"preventdefault:touchstart":!0,"preventdefault:touchmove":!0},O("div",{ref:e.scrollerRef,"data-qui-carousel-scroller":!0,get"data-draggable"(){return e.isDraggableSig.value?"":void 0},get"data-align"(){return e.alignSig.value},get"data-initial-touch"(){return i.value?"":void 0},get"data-initial"(){return u.value?"":void 0},...a,children:k(R,null,3,"zx_0")},{"data-qui-carousel-scroller":j,"data-draggable":y(f=>f.isDraggableSig.value?"":void 0,[e]),"data-align":y(f=>f.alignSig.value,[e]),"data-initial-touch":y(f=>f.value?"":void 0,[i]),"data-initial":y(f=>f.value?"":void 0,[u])},0,null),0,"zx_1")},C=async function({track:e}){var _;const[a,t,n,i,s]=g();if(e(()=>a.currentIndexSig.value),n.value){n.value=!1;return}if(s.isTouchDeviceSig.value&&i.value||!a.scrollerRef.value||((_=a.scrollStartRef.value)==null||_.style.setProperty("--scroll-snap-align","none"),s.isMouseDownSig.value))return;const u=a.currentIndexSig.value,r=await s.getSlidePosition(u);await s.setTransition(!0),s.transformSig.value[s.orientationProps[a.orientationSig.value].direction]=-r,await s.setTransform(),window.removeEventListener("mousemove",t)},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_nygMP70b9yU:C},Symbol.toStringTag,{value:"Module"})),B=async o=>{const[e,a,t,n]=g();if(n.isMouseDownSig.value||n.startPosSig.value===void 0||!e.scrollerRef.value||!n.boundariesSig.value)return;const i=o.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],s=e.sensitivitySig.value.touch,u=(n.startPosSig.value-i)*s,r=n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]-u;r>=n.boundariesSig.value.min&&r<=n.boundariesSig.value.max&&(n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]=r,await a()),n.startPosSig.value=i,t.value=!0},Q=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_L9gAZUyNlIg:B},Symbol.toStringTag,{value:"Module"})),H=async o=>{const[e,a,t,n]=g();!e.isDraggableSig.value||!e.scrollerRef.value||(e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),n.startPosSig.value=o.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],t.value=!0,a.value=!1,await n.setBoundaries(),await n.setTransition(!1))},J=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_neyImhhRK5c:H},Symbol.toStringTag,{value:"Module"})),N=()=>{const[o,e,a]=g();e.value&&(a.value=o.startIndexSig.value!==0&&o.startIndexSig.value!==void 0&&o.currentIndexSig.value!==0)},Y=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_MJFkA3gkapo:N},Symbol.toStringTag,{value:"Module"})),F=async()=>{const[o,e]=g();if(window.matchMedia("(pointer: coarse)").matches||(await e.setTransition(!0),!o.scrollerRef.value))return;const t=await e.getSlidePosition(o.currentIndexSig.value);e.transformSig.value.x=-t,await e.setTransform(),o.scrollerRef.value.style.transition="none"},G=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_8U1zMg0jyKo:F},Symbol.toStringTag,{value:"Module"})),K=async o=>{const[e,a,t]=g();if(!t.isMouseDownSig.value||t.startPosSig.value===void 0||!e.scrollerRef.value||!t.boundariesSig.value)return;const n=o[t.orientationProps[e.orientationSig.value].pagePosition],i=e.sensitivitySig.value.mouse,s=(t.startPosSig.value-n)*i,u=t.transformSig.value[t.orientationProps[e.orientationSig.value].direction]-s;u>=t.boundariesSig.value.min&&u<=t.boundariesSig.value.max&&(t.transformSig.value[t.orientationProps[e.orientationSig.value].direction]=u,await t.setTransition(!1),await t.setTransform()),t.startPosSig.value=n,a.value=!0},X=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_Ia0e0Sh0HMY:K},Symbol.toStringTag,{value:"Module"})),Z=async o=>{const[e,a,t,n,i]=g();e.isDraggableSig.value&&e.scrollerRef.value&&(await i.setTransition(!0),e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),await i.setBoundaries(),i.isMouseDownSig.value=!0,i.startPosSig.value=o.pageX,window.addEventListener("mousemove",t),window.addEventListener("mouseup",a),n.value=!1)},ee=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_oc7hOhRWDco:Z},Symbol.toStringTag,{value:"Module"})),oe=`@layer qwik-ui {
  [data-qui-carousel-viewport] {
    overflow: hidden;
  }

  [data-qui-carousel-scroller] {
    transform: var(--transform);
    will-change: transform;
    transition: 0.3s transform ease-out;

    display: flex;
    gap: var(--gap);
    flex-direction: var(--orientation);

    /* for initial slide position */
    scroll-snap-type: both mandatory;
    max-height: calc(var(--max-slide-height));
  }

  [data-qui-carousel-slide] {
    /* default, feel free to override */
    --total-gap-width: calc(var(--gap) * (var(--slides-per-view) - 1));
    --available-slide-width: calc(100% - var(--total-gap-width));
    --slide-width: calc(var(--available-slide-width) / var(--slides-per-view));

    flex-basis: var(--slide-width);
    flex-shrink: 0;
    position: relative;
  }

  [data-qui-carousel-scroller][data-initial] {
    overflow: hidden;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-qui-carousel-player] {
      display: none;
    }
  }

  /* workaround until scroll-snap-start is added to CSS */
  [data-qui-scroll-start] {
    --remove-flex-gap: calc(-1 * var(--gap) - 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    white-space: nowrap;
    visibility: hidden;
    display: none;
  }

  /* should not affect padding on non-scroller carousels */
  [data-qui-carousel-scroller] [data-qui-scroll-start] {
    display: revert;
  }

  /* Offsetting the scroll-start - Horizontal orientation */
  [data-qui-scroll-start][data-orientation='horizontal'][data-start] {
    margin-right: var(--remove-flex-gap);
  }

  [data-qui-scroll-start][data-orientation='horizontal'][data-end] {
    margin-left: var(--remove-flex-gap);
  }

  /* Vertical orientation (remove start gap) */
  [data-qui-scroll-start][data-orientation='vertical'][data-start] {
    margin-top: var(--remove-flex-gap);
  }

  [data-qui-scroll-start]::before {
    content: '';
    height: 1px;
    width: 1px;
    display: block;
    /* changes to none on first interaction */
    scroll-snap-align: var(--scroll-snap-align, start);
  }

  /* position the marker to the start */
  [data-qui-scroll-start][data-start]::before {
    margin-top: calc(var(--remove-flex-gap) * -1);
  }

  /* position the marker to the end */
  [data-qui-scroll-start][data-end]::before {
    margin-top: calc(var(--remove-flex-gap) * 1);
  }

  /* center verically */
  [data-qui-scroll-start][data-center]::before {
    position: absolute;
    margin-top: -0.5px;
    inset: 50%;
  }

  /* remove the marker's snap-align on hover */
  [data-qui-carousel-scroller]:hover [data-qui-scroll-start]::before {
    scroll-snap-align: unset;
  }
}
`,te=oe,ne=Object.freeze(Object.defineProperty({__proto__:null,s_leMpxeCWc9Q:te},Symbol.toStringTag,{value:"Module"}));export{S as _hW,le as a,C as b,B as c,H as d,N as e,F as f,K as g,Z as h,te as i,A as s,z as s_PfB5cFDIoxE,$ as u};
