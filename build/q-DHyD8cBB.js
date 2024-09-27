import{g as _,r as d,q as l,B as b,z as M,u as x,h as E,K as I,d as D,i as O,j as R,k as w,l as z,S as j,y as S}from"./q-PXVB0oKg.js";import{_ as u}from"./q-Biq04Hab.js";import{c as L}from"./q-qzFHGjGQ.js";const k=()=>{const[t]=_();t.value=!1},q=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_PfB5cFDIoxE:k},Symbol.toStringTag,{value:"Module"})),A=async()=>{const[t,e,a,o,n,i]=_();if(!t.scrollerRef.value)return;const r=t.slideRefsArray.value,c=-i.transformSig.value[i.orientationProps[t.orientationSig.value].direction];let s=0,v=1/0;for(let g=0;g<r.length;g++){if(!r[g].value)continue;const h=await i.getSlidePosition(g),m=Math.abs(h-c);m<v&&(s=g,v=m)}const p=await i.getSlidePosition(s);await i.setTransition(!0),i.transformSig.value[i.orientationProps[t.orientationSig.value].direction]=-p,await i.setTransform(),t.currentIndexSig.value=s,i.isMouseDownSig.value=!1,a.value=!1,o.value=!1,n.value=!1,window.removeEventListener("mousemove",e)},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_0Jk8izh0wBk:A},Symbol.toStringTag,{value:"Module"})),$=(t,e)=>{const a=d();return l(()=>u(()=>import("./q-BQQ6YnL8.js"),[]),"s_9xa13kCAvys",[e,t,a])};function U(t){const e=d(),a=d({x:0,y:0,z:0}),o=d(null),n=d(!1),i=d(!1),r=d(!0),c=d();b(l(()=>u(()=>import("./q-CEYrdnz4.js"),[]),"s_pYxtqSdjTvM",[t]));const s={vertical:{size:"height",scroll:"scrollHeight",client:"clientHeight",direction:"y",pagePosition:"pageY",clientPosition:"clientY"},horizontal:{size:"width",scroll:"scrollWidth",client:"clientWidth",direction:"x",pagePosition:"pageX",clientPosition:"clientX"}},{direction:v,scroll:p,client:g,size:P}=s[t.orientationSig.value],h=l(()=>u(()=>import("./q-BbFys18r.js"),[]),"s_z6awyvsPsfk",[t,v,a]),m=l(()=>u(()=>import("./q-DRn6VIjR.js").then(T=>T.e),[]),"s_63EGqAyH1zg",[o,g,t,p]),y=l(()=>u(()=>import("./q-CuCKzXeN.js"),[]),"s_hxDb3GSo4W4",[t,c,r]);return{startPosSig:e,transformSig:a,boundariesSig:o,isMouseDownSig:n,isTouchDeviceSig:i,isInitialTransitionSig:r,setTransform:h,setBoundaries:m,setTransition:y,setInitialSlidePos:l(()=>u(()=>import("./q-QyVIQjQ4.js"),[]),"s_Ueb7JyAG0Eg",[t,h,y,a]),orientationProps:s,getSlidePosition:l(()=>u(()=>import("./q-0u8YV-fl.js"),[]),"s_1208l4o9iVQ",[g,t,p,P])}}const le=t=>{M(l(()=>u(()=>Promise.resolve().then(()=>ne),void 0),"s_leMpxeCWc9Q"));const e=x(L),a=E(t,["onMouseDown$","onTouchStart$","onTouchMove$","onTouchEnd$"]),o=d(!1),n=d(!0),i=d(!1),r=d(!0),c=d(!1),s=U(e),v=l(()=>u(()=>Promise.resolve().then(()=>X),void 0),"s_Ia0e0Sh0HMY",[e,o,s]),p=l(()=>u(()=>Promise.resolve().then(()=>V),void 0),"s_0Jk8izh0wBk",[e,v,o,n,i,s]),g=l(()=>u(()=>Promise.resolve().then(()=>ee),void 0),"s_oc7hOhRWDco",[e,p,v,o,s]);b(l(()=>u(()=>Promise.resolve().then(()=>C),void 0),"s_nygMP70b9yU",[e,v,o,n,s]));const P=l(()=>u(()=>Promise.resolve().then(()=>F),void 0),"s_8U1zMg0jyKo",[e,s]),h=l(()=>u(()=>Promise.resolve().then(()=>J),void 0),"s_neyImhhRK5c",[e,n,i,s]),m=$(s.setTransform,1),y=l(()=>u(()=>Promise.resolve().then(()=>Q),void 0),"s_L9gAZUyNlIg",[e,m,n,s]);return I("resize",P),b(l(()=>u(()=>Promise.resolve().then(()=>N),void 0),"s_MJFkA3gkapo",[e,r,c])),b(l(()=>u(()=>Promise.resolve().then(()=>q),void 0),"s_PfB5cFDIoxE",[r])),D("div",{onMouseDown$:[g,t.onMouseDown$],onTouchStart$:[h,t.onTouchStart$],onTouchMove$:[y,t.onTouchMove$],onTouchEnd$:[p,t.onTouchEnd$],onQVisible$:c.value?s.setInitialSlidePos:void 0},{"data-qui-carousel-viewport":!0,"preventdefault:touchstart":!0,"preventdefault:touchmove":!0},O("div",{ref:e.scrollerRef,"data-qui-carousel-scroller":!0,get"data-draggable"(){return e.isDraggableSig.value?"":void 0},get"data-align"(){return e.alignSig.value},get"data-initial-touch"(){return i.value?"":void 0},get"data-initial"(){return c.value?"":void 0},...a,children:z(j,null,3,"zx_0")},{"data-qui-carousel-scroller":R,"data-draggable":w(f=>f.isDraggableSig.value?"":void 0,[e]),"data-align":w(f=>f.alignSig.value,[e]),"data-initial-touch":w(f=>f.value?"":void 0,[i]),"data-initial":w(f=>f.value?"":void 0,[c])},0,null),0,"zx_1")},B=async function({track:e}){var v;const[a,o,n,i,r]=_();if(e(()=>a.currentIndexSig.value),n.value){n.value=!1;return}if(r.isTouchDeviceSig.value&&i.value||!a.scrollerRef.value||((v=a.scrollStartRef.value)==null||v.style.setProperty("--scroll-snap-align","none"),r.isMouseDownSig.value))return;const c=a.currentIndexSig.value,s=await r.getSlidePosition(c);await r.setTransition(!0),r.transformSig.value[r.orientationProps[a.orientationSig.value].direction]=-s,await r.setTransform(),window.removeEventListener("mousemove",o)},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_nygMP70b9yU:B},Symbol.toStringTag,{value:"Module"})),W=async t=>{const[e,a,o,n]=_();if(n.isMouseDownSig.value||n.startPosSig.value===void 0||!e.scrollerRef.value||!n.boundariesSig.value)return;const i=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],r=e.sensitivitySig.value.touch,c=(n.startPosSig.value-i)*r,s=n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]-c;s>=n.boundariesSig.value.min&&s<=n.boundariesSig.value.max&&(n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]=s,await a()),n.startPosSig.value=i,o.value=!0},Q=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_L9gAZUyNlIg:W},Symbol.toStringTag,{value:"Module"})),H=async t=>{const[e,a,o,n]=_();!e.isDraggableSig.value||!e.scrollerRef.value||(e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),n.startPosSig.value=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],o.value=!0,a.value=!1,await n.setBoundaries(),await n.setTransition(!1))},J=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_neyImhhRK5c:H},Symbol.toStringTag,{value:"Module"})),K=()=>{const[t,e,a]=_();e.value&&(a.value=t.startIndexSig.value!==0&&t.startIndexSig.value!==void 0&&t.currentIndexSig.value!==0)},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_MJFkA3gkapo:K},Symbol.toStringTag,{value:"Module"})),Y=async()=>{const[t,e]=_();if(window.matchMedia("(pointer: coarse)").matches||(await e.setTransition(!0),!t.scrollerRef.value))return;const o=await e.getSlidePosition(t.currentIndexSig.value);e.transformSig.value.x=-o,await e.setTransform(),t.scrollerRef.value.style.transition="none"},F=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_8U1zMg0jyKo:Y},Symbol.toStringTag,{value:"Module"})),G=async t=>{const[e,a,o]=_();if(!o.isMouseDownSig.value||o.startPosSig.value===void 0||!e.scrollerRef.value||!o.boundariesSig.value)return;const n=t[o.orientationProps[e.orientationSig.value].pagePosition],i=e.sensitivitySig.value.mouse,r=(o.startPosSig.value-n)*i,c=o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]-r;c>=o.boundariesSig.value.min&&c<=o.boundariesSig.value.max&&(o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]=c,await o.setTransition(!1),await o.setTransform()),o.startPosSig.value=n,a.value=!0},X=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_Ia0e0Sh0HMY:G},Symbol.toStringTag,{value:"Module"})),Z=async t=>{const[e,a,o,n,i]=_();e.isDraggableSig.value&&e.scrollerRef.value&&(await i.setTransition(!0),e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),await i.setBoundaries(),i.isMouseDownSig.value=!0,i.startPosSig.value=t.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a),n.value=!1)},ee=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_oc7hOhRWDco:Z},Symbol.toStringTag,{value:"Module"})),te=`@layer qwik-ui {
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
`,oe=te,ne=Object.freeze(Object.defineProperty({__proto__:null,s_leMpxeCWc9Q:oe},Symbol.toStringTag,{value:"Module"}));export{S as _hW,le as a,B as b,W as c,H as d,K as e,Y as f,G as g,Z as h,oe as i,A as s,k as s_PfB5cFDIoxE,$ as u};
