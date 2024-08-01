import{u as Ft}from"./q-Dt-s0v6u.js";const kt=["top","right","bottom","left"],j=Math.min,$=Math.max,nt=Math.round,et=Math.floor,B=t=>({x:t,y:t}),Bt={left:"right",right:"left",bottom:"top",top:"bottom"},Mt={start:"end",end:"start"};function ft(t,e,n){return $(t,j(e,n))}function q(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function Rt(t){return t==="x"?"y":"x"}function ut(t){return t==="y"?"height":"width"}function X(t){return["top","bottom"].includes(H(t))?"y":"x"}function dt(t){return Rt(X(t))}function Nt(t,e,n){n===void 0&&(n=!1);const o=Z(t),i=dt(t),s=ut(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ot(r)),[r,ot(r)]}function Vt(t){const e=ot(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>Mt[e])}function Wt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function $t(t,e,n,o){const i=Z(t);let s=Wt(H(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(at)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Bt[e])}function Ht(t){return{top:0,right:0,bottom:0,left:0,...t}}function At(t){return typeof t!="number"?Ht(t):{top:t,right:t,bottom:t,left:t}}function it(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function pt(t,e,n){let{reference:o,floating:i}=t;const s=X(e),r=dt(e),c=ut(r),l=H(e),f=s==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let a;switch(l){case"top":a={x:d,y:o.y-i.height};break;case"bottom":a={x:d,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(Z(e)){case"start":a[r]-=g*(n&&f?-1:1);break;case"end":a[r]+=g*(n&&f?-1:1);break}return a}const zt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=pt(f,o,l),g=o,a={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y,data:b,reset:v}=await p({x:d,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:a,rects:f,platform:r,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(f=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=pt(f,g,l)),h=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:a}};async function rt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:a=0}=q(e,t),m=At(a),w=c[g?u==="floating"?"reference":"floating":u],p=it(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:l})),x=u==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},v=it(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:l}):x);return{top:(p.top-v.top+m.top)/b.y,bottom:(v.bottom-p.bottom+m.bottom)/b.y,left:(p.left-v.left+m.left)/b.x,right:(v.right-p.right+m.right)/b.x}}const _t=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:f,padding:d=0}=q(t,e)||{};if(f==null)return{};const u=At(d),g={x:n,y:o},a=dt(i),m=ut(a),h=await r.getDimensions(f),w=a==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=s.reference[m]+s.reference[a]-g[a]-s.floating[m],v=g[a]-s.reference[a],E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f));let N=E?E[y]:0;(!N||!await(r.isElement==null?void 0:r.isElement(E)))&&(N=c.floating[y]||s.floating[m]);const K=b/2-v/2,V=N/2-h[m]/2-1,D=j(u[p],V),G=j(u[x],V),W=D,J=N-h[m]-G,R=N/2-h[m]/2+K,_=ft(W,R,J),L=!l.arrow&&Z(i)!=null&&R!==_&&s.reference[m]/2-(R<W?D:G)-h[m]/2<0,S=L?R<W?R-W:R-J:0;return{[a]:g[a]+S,data:{[a]:_,centerOffset:R-_-S,...L&&{alignmentOffset:S}},reset:L}}}),It=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=q(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=H(i),x=X(c),y=H(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(f.floating)),v=g||(y||!h?[ot(c)]:Vt(c)),E=m!=="none";!g&&E&&v.push(...$t(c,h,m,b));const N=[c,...v],K=await rt(e,w),V=[];let D=((o=s.flip)==null?void 0:o.overflows)||[];if(d&&V.push(K[p]),u){const R=Nt(i,r,b);V.push(K[R[0]],K[R[1]])}if(D=[...D,{placement:i,overflows:V}],!V.every(R=>R<=0)){var G,W;const R=(((G=s.flip)==null?void 0:G.index)||0)+1,_=N[R];if(_)return{data:{index:R,overflows:D},reset:{placement:_}};let L=(W=D.filter(S=>S.overflows[0]<=0).sort((S,F)=>S.overflows[1]-F.overflows[1])[0])==null?void 0:W.placement;if(!L)switch(a){case"bestFit":{var J;const S=(J=D.filter(F=>{if(E){const k=X(F.placement);return k===x||k==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(k=>k>0).reduce((k,Dt)=>k+Dt,0)]).sort((F,k)=>F[1]-k[1])[0])==null?void 0:J[0];S&&(L=S);break}case"initialPlacement":L=c;break}if(i!==L)return{reset:{placement:L}}}return{}}}};function wt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function xt(t){return kt.some(e=>t[e]>=0)}const jt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=q(t,e);switch(o){case"referenceHidden":{const s=await rt(e,{...i,elementContext:"reference"}),r=wt(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:xt(r)}}}case"escaped":{const s=await rt(e,{...i,altBoundary:!0}),r=wt(s,n.floating);return{data:{escapedOffsets:r,escaped:xt(r)}}}default:return{}}}}};async function Xt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=H(n),c=Z(n),l=X(n)==="y",f=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,u=q(e,t);let{mainAxis:g,crossAxis:a,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(a=c==="end"?m*-1:m),l?{x:a*d,y:g*f}:{x:g*f,y:a*d}}const Yt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await Xt(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},qt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...l}=q(t,e),f={x:n,y:o},d=await rt(e,l),u=X(H(i)),g=Rt(u);let a=f[g],m=f[u];if(s){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",x=a+d[w],y=a-d[p];a=ft(x,a,y)}if(r){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=m+d[w],y=m-d[p];m=ft(x,m,y)}const h=c.fn({...e,[g]:a,[u]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function U(t){return Ot(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function P(t){var e;return(e=(Ot(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ot(t){return t instanceof Node||t instanceof A(t).Node}function O(t){return t instanceof Element||t instanceof A(t).Element}function T(t){return t instanceof HTMLElement||t instanceof A(t).HTMLElement}function yt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Ut(t){return["table","td","th"].includes(U(t))}function st(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function mt(t){const e=gt(),n=O(t)?C(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Kt(t){let e=M(t);for(;T(e)&&!Y(e);){if(mt(e))return e;if(st(e))return null;e=M(e)}return null}function gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Y(t){return["html","body","#document"].includes(U(t))}function C(t){return A(t).getComputedStyle(t)}function ct(t){return O(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function M(t){if(U(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yt(t)&&t.host||P(t);return yt(e)?e.host:e}function Ct(t){const e=M(t);return Y(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&tt(e)?e:Ct(e)}function Q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ct(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=A(i);return s?e.concat(r,r.visualViewport||[],tt(i)?i:[],r.frameElement&&n?Q(r.frameElement):[]):e.concat(i,Q(i,[],n))}function Et(t){const e=C(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=T(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=nt(n)!==s||nt(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function ht(t){return O(t)?t:t.contextElement}function I(t){const e=ht(t);if(!T(e))return B(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Et(e);let r=(s?nt(n.width):n.width)/o,c=(s?nt(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const Gt=B(0);function St(t){const e=A(t);return!gt()||!e.visualViewport?Gt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Jt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==A(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ht(t);let r=B(1);e&&(o?O(o)&&(r=I(o)):r=I(t));const c=Jt(s,n,o)?St(s):B(0);let l=(i.left+c.x)/r.x,f=(i.top+c.y)/r.y,d=i.width/r.x,u=i.height/r.y;if(s){const g=A(s),a=o&&O(o)?A(o):o;let m=g,h=m.frameElement;for(;h&&o&&a!==m;){const w=I(h),p=h.getBoundingClientRect(),x=C(h),y=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,f*=w.y,d*=w.x,u*=w.y,l+=y,f+=b,m=A(h),h=m.frameElement}}return it({width:d,height:u,x:l,y:f})}function Qt(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=P(o),c=e?st(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},f=B(1);const d=B(0),u=T(o);if((u||!u&&!s)&&((U(o)!=="body"||tt(r))&&(l=ct(o)),T(o))){const g=z(o);f=I(o),d.x=g.x+o.clientLeft,d.y=g.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-l.scrollLeft*f.x+d.x,y:n.y*f.y-l.scrollTop*f.y+d.y}}function Zt(t){return Array.from(t.getClientRects())}function Tt(t){return z(P(t)).left+ct(t).scrollLeft}function te(t){const e=P(t),n=ct(t),o=t.ownerDocument.body,i=$(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=$(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Tt(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(r+=$(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function ee(t,e){const n=A(t),o=P(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const f=gt();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function ne(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=T(t)?I(t):B(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,f=o*s.y;return{width:r,height:c,x:l,y:f}}function vt(t,e,n){let o;if(e==="viewport")o=ee(t,n);else if(e==="document")o=te(P(t));else if(O(e))o=ne(e,n);else{const i=St(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return it(o)}function Lt(t,e){const n=M(t);return n===e||!O(n)||Y(n)?!1:C(n).position==="fixed"||Lt(n,e)}function oe(t,e){const n=e.get(t);if(n)return n;let o=Q(t,[],!1).filter(c=>O(c)&&U(c)!=="body"),i=null;const s=C(t).position==="fixed";let r=s?M(t):t;for(;O(r)&&!Y(r);){const c=C(r),l=mt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(r)&&!l&&Lt(t,r))?o=o.filter(d=>d!==r):i=c,r=M(r)}return e.set(t,o),o}function ie(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?st(e)?[]:oe(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((f,d)=>{const u=vt(e,d,i);return f.top=$(u.top,f.top),f.right=j(u.right,f.right),f.bottom=j(u.bottom,f.bottom),f.left=$(u.left,f.left),f},vt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function re(t){const{width:e,height:n}=Et(t);return{width:e,height:n}}function se(t,e,n){const o=T(e),i=P(e),s=n==="fixed",r=z(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=B(0);if(o||!o&&!s)if((U(e)!=="body"||tt(i))&&(c=ct(e)),o){const u=z(e,!0,s,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=Tt(i));const f=r.left+c.scrollLeft-l.x,d=r.top+c.scrollTop-l.y;return{x:f,y:d,width:r.width,height:r.height}}function lt(t){return C(t).position==="static"}function bt(t,e){return!T(t)||C(t).position==="fixed"?null:e?e(t):t.offsetParent}function Pt(t,e){const n=A(t);if(st(t))return n;if(!T(t)){let i=M(t);for(;i&&!Y(i);){if(O(i)&&!lt(i))return i;i=M(i)}return n}let o=bt(t,e);for(;o&&Ut(o)&&lt(o);)o=bt(o,e);return o&&Y(o)&&lt(o)&&!mt(o)?n:o||Kt(t)||n}const ce=async function(t){const e=this.getOffsetParent||Pt,n=this.getDimensions,o=await n(t.floating);return{reference:se(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function le(t){return C(t).direction==="rtl"}const fe={convertOffsetParentRelativeRectToViewportRelativeRect:Qt,getDocumentElement:P,getClippingRect:ie,getOffsetParent:Pt,getElementRects:ce,getClientRects:Zt,getDimensions:re,getScale:I,isElement:O,isRTL:le};function ae(t,e){let n=null,o;const i=P(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:f,top:d,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const a=et(d),m=et(i.clientWidth-(f+u)),h=et(i.clientHeight-(d+g)),w=et(f),x={rootMargin:-a+"px "+-m+"px "+-h+"px "+-w+"px",threshold:$(0,j(1,l))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==l){if(!y)return r();E?r(!1,E):o=setTimeout(()=>{r(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return r(!0),s}function ue(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=ht(t),d=i||s?[...f?Q(f):[],...Q(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const u=f&&c?ae(f,n):null;let g=-1,a=null;r&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),n()}),f&&!l&&a.observe(f),a.observe(e));let m,h=l?z(t):null;l&&w();function w(){const p=z(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,m=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(x=>{i&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,l&&cancelAnimationFrame(m)}}const de=Yt,me=qt,ge=It,he=jt,pe=_t,we=(t,e,n)=>{const o=new Map,i={platform:fe,...n},s={...i.platform,_c:o};return zt(t,e,{...i,platform:s})},ye=async({track:t,cleanup:e})=>{var c,l,f;const[n]=Ft();t(()=>n.isOpenSig.value);const o=(c=n.anchorRef)!=null&&c.value?n.anchorRef.value:(l=n.triggerRef)==null?void 0:l.value,i=(f=n.panelRef)==null?void 0:f.value;if(!i||!o)return;const r=ue(o,i,async()=>{var g;const d=[de(n.gutter),he({strategy:n.hide}),n.flip&&ge(),n.shift&&me(),n.arrow&&pe({padding:0,element:(g=n.arrowRef)==null?void 0:g.value})];let u;typeof n.floating=="boolean"?u="bottom":u=n.floating,i&&(i.hidden=!1),await we(o,i,{placement:u,middleware:d}).then(async a=>{var w;const{x:m,y:h}=a;if(Object.assign(i.style,{left:`${m}px`,top:`${h}px`,transform:n.transform}),a.middlewareData.arrow&&((w=n.arrowRef)!=null&&w.value)){const{x:p,y:x}=a.middlewareData.arrow;Object.assign(n.arrowRef.value.style,{left:p!=null?`${p}px`:"",top:x!=null?`${x}px`:""})}})},{ancestorScroll:n.ancestorScroll,ancestorResize:n.ancestorResize,elementResize:n.elementResize,animationFrame:n.animationFrame});e(r)};export{ye as s_4cg00CVX0xM};
