import{b as Et,c as Tt,q as ut,g as Ht,u as Nt,B as Wt,l as xt,S as $t,j as yt,y as It}from"./q-PXVB0oKg.js";import{_ as dt}from"./q-Biq04Hab.js";const zt=Et("qui-popover"),ke=Et("qui-popover-null-context"),Be=Tt(ut(()=>dt(()=>import("./q-fj6gHHyV.js"),[]),"s_ycfoLqmAljg")),jt=Tt(ut(()=>dt(()=>import("./q-Cq1VWJJn.js").then(t=>t.f),[]),"s_FQQOZY05vEI")),qt=["top","right","bottom","left"],j=Math.min,N=Math.max,nt=Math.round,et=Math.floor,k=t=>({x:t,y:t}),Xt={left:"right",right:"left",bottom:"top",top:"bottom"},Yt={start:"end",end:"start"};function at(t,e,n){return N(t,j(e,n))}function Y(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function Lt(t){return t==="x"?"y":"x"}function mt(t){return t==="y"?"height":"width"}function q(t){return["top","bottom"].includes(W(t))?"y":"x"}function gt(t){return Lt(q(t))}function Qt(t,e,n){n===void 0&&(n=!1);const o=J(t),i=gt(t),r=mt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ot(s)),[s,ot(s)]}function Ut(t){const e=ot(t);return[ft(t),e,ft(e)]}function ft(t){return t.replace(/start|end/g,e=>Yt[e])}function Zt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Kt(t,e,n,o){const i=J(t);let r=Zt(W(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(ft)))),r}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Xt[e])}function Gt(t){return{top:0,right:0,bottom:0,left:0,...t}}function St(t){return typeof t!="number"?Gt(t):{top:t,right:t,bottom:t,left:t}}function it(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function vt(t,e,n){let{reference:o,floating:i}=t;const r=q(e),s=gt(e),c=mt(s),l=W(e),a=r==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-i.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(J(e)){case"start":f[s]-=g*(n&&a?-1:1);break;case"end":f[s]+=g*(n&&a?-1:1);break}return f}const Jt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=vt(a,o,l),g=o,f={},m=0;for(let p=0;p<c.length;p++){const{name:w,fn:h}=c[p],{x,y,data:b,reset:v}=await h({x:d,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,f={...f,[w]:{...f[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(a=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=vt(a,g,l)),p=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:f}};async function st(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=Y(e,t),m=St(f),w=c[g?u==="floating"?"reference":"floating":u],h=it(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),x=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=it(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:l}):x);return{top:(h.top-v.top+m.top)/b.y,bottom:(v.bottom-h.bottom+m.bottom)/b.y,left:(h.left-v.left+m.left)/b.x,right:(v.right-h.right+m.right)/b.x}}const te=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=Y(t,e)||{};if(a==null)return{};const u=St(d),g={x:n,y:o},f=gt(i),m=mt(f),p=await s.getDimensions(a),w=f==="y",h=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[f]-g[f]-r.floating[m],v=g[f]-r.reference[f],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let M=E?E[y]:0;(!M||!await(s.isElement==null?void 0:s.isElement(E)))&&(M=c.floating[y]||r.floating[m]);const U=b/2-v/2,V=M/2-p[m]/2-1,_=j(u[h],V),Z=j(u[x],V),H=_,K=M-p[m]-Z,R=M/2-p[m]/2+U,I=at(H,R,K),S=!l.arrow&&J(i)!=null&&R!==I&&r.reference[m]/2-(R<H?_:Z)-p[m]/2<0,T=S?R<H?R-H:R-K:0;return{[f]:g[f]+T,data:{[f]:I,centerOffset:R-I-T,...S&&{alignmentOffset:T}},reset:S}}}),ee=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:p=!0,...w}=Y(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const h=W(i),x=q(c),y=W(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(a.floating)),v=g||(y||!p?[ot(c)]:Ut(c)),E=m!=="none";!g&&E&&v.push(...Kt(c,p,m,b));const M=[c,...v],U=await st(e,w),V=[];let _=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&V.push(U[h]),u){const R=Qt(i,s,b);V.push(U[R[0]],U[R[1]])}if(_=[..._,{placement:i,overflows:V}],!V.every(R=>R<=0)){var Z,H;const R=(((Z=r.flip)==null?void 0:Z.index)||0)+1,I=M[R];if(I)return{data:{index:R,overflows:_},reset:{placement:I}};let S=(H=_.filter(T=>T.overflows[0]<=0).sort((T,D)=>T.overflows[1]-D.overflows[1])[0])==null?void 0:H.placement;if(!S)switch(f){case"bestFit":{var K;const T=(K=_.filter(D=>{if(E){const F=q(D.placement);return F===x||F==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(F=>F>0).reduce((F,Vt)=>F+Vt,0)]).sort((D,F)=>D[1]-F[1])[0])==null?void 0:K[0];T&&(S=T);break}case"initialPlacement":S=c;break}if(i!==S)return{reset:{placement:S}}}return{}}}};function bt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Rt(t){return qt.some(e=>t[e]>=0)}const ne=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=Y(t,e);switch(o){case"referenceHidden":{const r=await st(e,{...i,elementContext:"reference"}),s=bt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Rt(s)}}}case"escaped":{const r=await st(e,{...i,altBoundary:!0}),s=bt(r,n.floating);return{data:{escapedOffsets:s,escaped:Rt(s)}}}default:return{}}}}};async function oe(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=W(n),c=J(n),l=q(n)==="y",a=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,u=Y(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(f=c==="end"?m*-1:m),l?{x:f*d,y:g*a}:{x:g*a,y:f*d}}const ie=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await oe(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},se=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:h,y:x}=w;return{x:h,y:x}}},...l}=Y(t,e),a={x:n,y:o},d=await st(e,l),u=q(W(i)),g=Lt(u);let f=a[g],m=a[u];if(r){const w=g==="y"?"top":"left",h=g==="y"?"bottom":"right",x=f+d[w],y=f-d[h];f=at(x,f,y)}if(s){const w=u==="y"?"top":"left",h=u==="y"?"bottom":"right",x=m+d[w],y=m-d[h];m=at(x,m,y)}const p=c.fn({...e,[g]:f,[u]:m});return{...p,data:{x:p.x-n,y:p.y-o}}}}};function Q(t){return Pt(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function P(t){var e;return(e=(Pt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pt(t){return t instanceof Node||t instanceof A(t).Node}function O(t){return t instanceof Element||t instanceof A(t).Element}function L(t){return t instanceof HTMLElement||t instanceof A(t).HTMLElement}function At(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function re(t){return["table","td","th"].includes(Q(t))}function rt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function pt(t){const e=ht(),n=O(t)?C(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ce(t){let e=B(t);for(;L(e)&&!X(e);){if(pt(e))return e;if(rt(e))return null;e=B(e)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function X(t){return["html","body","#document"].includes(Q(t))}function C(t){return A(t).getComputedStyle(t)}function ct(t){return O(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function B(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||At(t)&&t.host||P(t);return At(e)?e.host:e}function _t(t){const e=B(t);return X(e)?t.ownerDocument?t.ownerDocument.body:t.body:L(e)&&tt(e)?e:_t(e)}function G(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=_t(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=A(i);return r?e.concat(s,s.visualViewport||[],tt(i)?i:[],s.frameElement&&n?G(s.frameElement):[]):e.concat(i,G(i,[],n))}function Dt(t){const e=C(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=L(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=nt(n)!==r||nt(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function wt(t){return O(t)?t:t.contextElement}function z(t){const e=wt(t);if(!L(e))return k(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Dt(e);let s=(r?nt(n.width):n.width)/o,c=(r?nt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const le=k(0);function Ft(t){const e=A(t);return!ht()||!e.visualViewport?le:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ae(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==A(t)?!1:e}function $(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=wt(t);let s=k(1);e&&(o?O(o)&&(s=z(o)):s=z(t));const c=ae(r,n,o)?Ft(r):k(0);let l=(i.left+c.x)/s.x,a=(i.top+c.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const g=A(r),f=o&&O(o)?A(o):o;let m=g,p=m.frameElement;for(;p&&o&&f!==m;){const w=z(p),h=p.getBoundingClientRect(),x=C(p),y=h.left+(p.clientLeft+parseFloat(x.paddingLeft))*w.x,b=h.top+(p.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,a*=w.y,d*=w.x,u*=w.y,l+=y,a+=b,m=A(p),p=m.frameElement}}return it({width:d,height:u,x:l,y:a})}function fe(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=P(o),c=e?rt(e.floating):!1;if(o===s||c&&r)return n;let l={scrollLeft:0,scrollTop:0},a=k(1);const d=k(0),u=L(o);if((u||!u&&!r)&&((Q(o)!=="body"||tt(s))&&(l=ct(o)),L(o))){const g=$(o);a=z(o),d.x=g.x+o.clientLeft,d.y=g.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x,y:n.y*a.y-l.scrollTop*a.y+d.y}}function ue(t){return Array.from(t.getClientRects())}function kt(t){return $(P(t)).left+ct(t).scrollLeft}function de(t){const e=P(t),n=ct(t),o=t.ownerDocument.body,i=N(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=N(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+kt(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(s+=N(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function me(t,e){const n=A(t),o=P(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const a=ht();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function ge(t,e){const n=$(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=L(t)?z(t):k(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,a=o*r.y;return{width:s,height:c,x:l,y:a}}function Ot(t,e,n){let o;if(e==="viewport")o=me(t,n);else if(e==="document")o=de(P(t));else if(O(e))o=ge(e,n);else{const i=Ft(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return it(o)}function Bt(t,e){const n=B(t);return n===e||!O(n)||X(n)?!1:C(n).position==="fixed"||Bt(n,e)}function pe(t,e){const n=e.get(t);if(n)return n;let o=G(t,[],!1).filter(c=>O(c)&&Q(c)!=="body"),i=null;const r=C(t).position==="fixed";let s=r?B(t):t;for(;O(s)&&!X(s);){const c=C(s),l=pt(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(s)&&!l&&Bt(t,s))?o=o.filter(d=>d!==s):i=c,s=B(s)}return e.set(t,o),o}function he(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?rt(e)?[]:pe(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((a,d)=>{const u=Ot(e,d,i);return a.top=N(u.top,a.top),a.right=j(u.right,a.right),a.bottom=j(u.bottom,a.bottom),a.left=N(u.left,a.left),a},Ot(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function we(t){const{width:e,height:n}=Dt(t);return{width:e,height:n}}function xe(t,e,n){const o=L(e),i=P(e),r=n==="fixed",s=$(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=k(0);if(o||!o&&!r)if((Q(e)!=="body"||tt(i))&&(c=ct(e)),o){const u=$(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=kt(i));const a=s.left+c.scrollLeft-l.x,d=s.top+c.scrollTop-l.y;return{x:a,y:d,width:s.width,height:s.height}}function lt(t){return C(t).position==="static"}function Ct(t,e){return!L(t)||C(t).position==="fixed"?null:e?e(t):t.offsetParent}function Mt(t,e){const n=A(t);if(rt(t))return n;if(!L(t)){let i=B(t);for(;i&&!X(i);){if(O(i)&&!lt(i))return i;i=B(i)}return n}let o=Ct(t,e);for(;o&&re(o)&&lt(o);)o=Ct(o,e);return o&&X(o)&&lt(o)&&!pt(o)?n:o||ce(t)||n}const ye=async function(t){const e=this.getOffsetParent||Mt,n=this.getDimensions,o=await n(t.floating);return{reference:xe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ve(t){return C(t).direction==="rtl"}const be={convertOffsetParentRelativeRectToViewportRelativeRect:fe,getDocumentElement:P,getClippingRect:he,getOffsetParent:Mt,getElementRects:ye,getClientRects:ue,getDimensions:we,getScale:z,isElement:O,isRTL:ve};function Re(t,e){let n=null,o;const i=P(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:a,top:d,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const f=et(d),m=et(i.clientWidth-(a+u)),p=et(i.clientHeight-(d+g)),w=et(a),x={rootMargin:-f+"px "+-m+"px "+-p+"px "+-w+"px",threshold:N(0,j(1,l))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==l){if(!y)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return s(!0),r}function Ae(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=wt(t),d=i||r?[...a?G(a):[],...G(e)]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),r&&h.addEventListener("resize",n)});const u=a&&c?Re(a,n):null;let g=-1,f=null;s&&(f=new ResizeObserver(h=>{let[x]=h;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=f)==null||y.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let m,p=l?$(t):null;l&&w();function w(){const h=$(t);p&&(h.x!==p.x||h.y!==p.y||h.width!==p.width||h.height!==p.height)&&n(),p=h,m=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(x=>{i&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),u==null||u(),(h=f)==null||h.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const Oe=ie,Ce=se,Ee=ee,Te=ne,Le=te,Se=(t,e,n)=>{const o=new Map,i={platform:be,...n},r={...i.platform,_c:o};return Jt(t,e,{...i,platform:r})},Pe=async({track:t,cleanup:e})=>{var c,l,a;const[n]=Ht();t(()=>n.isOpenSig.value);const o=(c=n.anchorRef)!=null&&c.value?n.anchorRef.value:(l=n.triggerRef)==null?void 0:l.value,i=(a=n.panelRef)==null?void 0:a.value;if(!i||!o)return;const s=Ae(o,i,async()=>{var g;const d=[Oe(n.gutter),Te({strategy:n.hide}),n.flip&&Ee(),n.shift&&Ce(),n.arrow&&Le({padding:0,element:(g=n.arrowRef)==null?void 0:g.value})];let u;typeof n.floating=="boolean"?u="bottom":u=n.floating,i&&(i.hidden=!1),await Se(o,i,{placement:u,middleware:d}).then(async f=>{var w;const{x:m,y:p}=f;if(Object.assign(i.style,{left:`${m}px`,top:`${p}px`,transform:n.transform}),f.middlewareData.arrow&&((w=n.arrowRef)!=null&&w.value)){const{x:h,y:x}=f.middlewareData.arrow;Object.assign(n.arrowRef.value.style,{left:h!=null?`${h}px`:"",top:x!=null?`${x}px`:""})}})},{ancestorScroll:n.ancestorScroll,ancestorResize:n.ancestorResize,elementResize:n.elementResize,animationFrame:n.animationFrame});e(s)},_e=Object.freeze(Object.defineProperty({__proto__:null,_hW:It,s_9Cv3ZXlcgm8:Pe},Symbol.toStringTag,{value:"Module"})),Me=t=>{const e=Nt(zt);return Wt(ut(()=>dt(()=>Promise.resolve().then(()=>_e),void 0),"s_9Cv3ZXlcgm8",[e])),xt(jt,{hidden:!0,...t,children:xt($t,null,3,"Ta_0"),[yt]:{hidden:yt}},0,"Ta_1")};export{Be as E,jt as H,It as _hW,ke as e,zt as p,Me as s,Pe as s_9Cv3ZXlcgm8};
