import{p as b,l as P,u as S,a as g,g as D,s as k,b as A}from"./q-BIea4pey.js";import{u as m,B as f,A as K,_ as O,g as $,q as u,S as C}from"./q-CqQeKCeh.js";import{_ as p}from"./q-C7i0xNVT.js";const L=(o,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const r=new URL(e.href);b(r.pathname),e.hasAttribute("data-prefetch")&&P(r,e,{prefetchSymbols:!1,isPrefetch:!0})}},q=async(o,e)=>{const[t,r,n,l]=m();o.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:r,replaceState:n,scroll:l}),e.removeAttribute("aria-pressed")))},x=o=>{const e=S(),t=g(),{onClick$:r,prefetch:n,reload:l,replaceState:d,scroll:v,...s}=o,a=f(()=>D({...s,reload:l},t));s.href=a||o.href;const h=f(()=>!!a&&n!==!1&&n!=="js"&&k(a,t)||void 0),i=f(()=>h||!!a&&n!==!1&&A(a,t))?u(()=>p(()=>Promise.resolve().then(()=>_),void 0),"s_Osdg8FnYTw4"):void 0,y=a?K((c,T)=>{c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.preventDefault()},"(event,target)=>{if(!(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)){event.preventDefault();}}"):void 0;return O("a",{"q:link":!!a,...s,"data-prefetch":h,children:$(C,null,3,"AD_0"),onClick$:[y,r,a?u(()=>p(()=>Promise.resolve().then(()=>_),void 0),"s_pIf0khHUxfY",[e,l,d,v]):void 0],onMouseOver$:[s.onMouseOver$,i],onFocus$:[s.onFocus$,i],onQVisible$:[s.onQVisible$,i]},null,0,"AD_1")},_=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:x,s_Osdg8FnYTw4:L,s_pIf0khHUxfY:q},Symbol.toStringTag,{value:"Module"}));export{x as s_8gdLBszqbaM,L as s_Osdg8FnYTw4,q as s_pIf0khHUxfY};