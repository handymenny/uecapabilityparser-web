import{p as b,m as P,l as S,b as k,n as D,o as g,q as m}from"./q-DL2WVVzq.js";import{u as q,J as f,r as A,o as K,d as O,q as _,s as $}from"./q-DhVgi9SL.js";import{_ as p}from"./q-C7i0xNVT.js";const x=(o,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const r=new URL(e.href);b(r.pathname),e.hasAttribute("data-prefetch")&&P(r,e,{prefetchSymbols:!1,isPrefetch:!0})}},C=async(o,e)=>{const[t,r,n,l]=q();o.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:r,replaceState:n,scroll:l}),e.removeAttribute("aria-pressed")))},L=o=>{const e=S(),t=k(),{onClick$:r,prefetch:n,reload:l,replaceState:d,scroll:v,...s}=o,a=f(()=>D({...s,reload:l},t));s.href=a||o.href;const h=f(()=>!!a&&n!==!1&&n!=="js"&&g(a,t)||void 0),i=f(()=>h||!!a&&n!==!1&&m(a,t))?_(()=>p(()=>Promise.resolve().then(()=>u),void 0),"s_Osdg8FnYTw4"):void 0,y=a?A((c,T)=>{c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.preventDefault()},"(event,target)=>{if(!(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)){event.preventDefault();}}"):void 0;return K("a",{"q:link":!!a,...s,"data-prefetch":h,children:O($,null,3,"AD_0"),onClick$:[y,r,a?_(()=>p(()=>Promise.resolve().then(()=>u),void 0),"s_pIf0khHUxfY",[e,l,d,v]):void 0],onMouseOver$:[s.onMouseOver$,i],onFocus$:[s.onFocus$,i],onQVisible$:[s.onQVisible$,i]},null,0,"AD_1")},u=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:L,s_Osdg8FnYTw4:x,s_pIf0khHUxfY:C},Symbol.toStringTag,{value:"Module"}));export{L as s_8gdLBszqbaM,x as s_Osdg8FnYTw4,C as s_pIf0khHUxfY};