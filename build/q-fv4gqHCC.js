import{_ as d,u as G,S as K,l as st,b as it,k as lt,Q as ct,o as ut,e as U,c as dt,Z as j,C as f,R as _t,M as mt,y as N,L as pt,p as vt}from"./q-OyUNoDim.js";import{t as ft,j as $,k as Q,r as tt,l as et,m as ot,n as W,o as yt,p as ht,q as St,s as P,v as q,w as Et,x as Ct,y as bt,z as wt,c as Rt,C as qt,d as Lt,D as gt,R as Pt,e as At,f as Dt,h as It,i as kt}from"./q-8ieYO703.js";const Tt=":root{view-transition-name:none}";const A=()=>d(()=>import("./q-6YoLuame.js"),__vite__mapDeps([])),J=[["/",[A,()=>d(()=>import("./q-stLJGZx6.js"),__vite__mapDeps([]))]],["view/multi/",[A,()=>d(()=>import("./q-6dIaQasA.js"),__vite__mapDeps([]))]],["library/",[A,()=>d(()=>import("./q-53dM3SI4.js"),__vite__mapDeps([]))]],["parser/",[A,()=>d(()=>import("./q-sjRPI15J.js"),__vite__mapDeps([]))]],["view/",[A,()=>d(()=>import("./q-IXyWTTIe.js"),__vite__mapDeps([]))]]],B=[];const X=!0;const Ot=async(y,n)=>{const[h,E,a,C]=G(),{type:i="link",forceReload:_=y===void 0,replaceState:m=!1,scroll:b=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=y===void 0?l:ft(y,C.url);if(!$(o,l)){location.href=o.href;return}if(!_&&Q(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(i,o,new URL(location.href),et()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:_,replaceState:m,scroll:b},ot(o,K()),W(J,B,X,o.pathname),h.value=void 0,C.isNavigating=!0,new Promise(w=>{E.r=w})},Vt=({track:y})=>{const[n,h,E,a,C,i,_,m,b,l,o]=G();async function w(){var Z;const[u,L]=y(()=>[l.value,n.value]),nt=st(""),D=o.url,p=L?"form":u.type,rt=u.replaceState;let r,g,x=null,I;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let k=W(J,B,X,r.pathname);I=K();const T=g=await ot(r,I,!0,L);if(!T){l.untrackedValue={type:p,dest:r};return}const H=T.href,O=new URL(H,r);yt(O,r)||(r=O,k=W(J,B,X,r.pathname)),x=await k}if(x){const[k,T,H,O]=x,V=H,at=V[V.length-1];o.prevUrl=D,o.url=r,o.params={...T},l.untrackedValue={type:p,dest:r};const R=ht(g,o,V,nt);h.headings=at.headings,h.menu=O,E.value=it(V),a.links=R.links,a.meta=R.meta,a.styles=R.styles,a.scripts=R.scripts,a.title=R.title,a.frontmatter=R.frontmatter;{b.viewTransition!==!1&&(document.__q_view_transition__=!0);let F;p==="popstate"&&(F=et()),u.scroll&&(!u.forceReload||!Q(r,D))&&(p==="link"||p==="popstate")&&(document.__q_scroll_restore__=()=>tt(p,r,D,F));const Y=g==null?void 0:g.loaders,t=window;if(Y&&Object.assign(_,Y),St.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,v=history.replaceState,S=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||q(document.documentElement),e);history.pushState=(e,c,M)=>(e=S(e),s.call(history,e,c,M)),history.replaceState=(e,c,M)=>(e=S(e),v.call(history,e,c,M))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const v=s.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const S=v.getAttribute("href"),e=new URL(location.href),c=new URL(S,e);if($(c,e)&&Q(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),P({...q(document.documentElement),x:0,y:0}),location.reload();return}i(v.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=q(document.documentElement);P(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=q(document.documentElement);P(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(Z=t._qCityBootstrap)==null||Z.remove(),t._qCityBootstrap=void 0,Et.resolve()}if(p!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=q(document.documentElement);P(s)}Ct(window,p,D,r,rt),lt(I).then(()=>{var S;bt(I).setAttribute("q:route",k);const v=q(document.documentElement);P(v),t._qCityScrollEnabled=!0,o.isNavigating=!1,(S=m.r)==null||S.call(m)})}}}w()},Ut=y=>{ct(N(()=>d(()=>Promise.resolve().then(()=>z),void 0),"s_RPDJAz33WLA"));const n=wt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const h=ut("url");if(!h)throw new Error("Missing Qwik URL Env Data");const E=new URL(h),a=U({url:E,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=dt(U(n.response.loaders,{deep:!1})),_=j({type:"initial",dest:E,forceReload:!1,replaceState:!1,scroll:!0}),m=U(Rt),b=U({headings:void 0,menu:void 0}),l=j(),o=n.response.action,w=o?n.response.loaders[o]:void 0,u=j(w?{id:o,data:n.response.formData,output:{result:w,status:n.response.status}}:void 0),L=N(()=>d(()=>Promise.resolve().then(()=>z),void 0),"s_fX0bDjeJa0E",[u,C,_,a]);return f(qt,b),f(Lt,l),f(gt,m),f(Pt,a),f(At,L),f(Dt,i),f(It,u),f(kt,_),_t(N(()=>d(()=>Promise.resolve().then(()=>z),void 0),"s_02wMImzEAbk",[u,b,l,m,n,L,i,C,y,_,a])),mt(pt,null,3,"qY_0")},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:vt,s_02wMImzEAbk:Vt,s_RPDJAz33WLA:Tt,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:Ot},Symbol.toStringTag,{value:"Module"}));export{vt as _hW,Vt as s_02wMImzEAbk,Tt as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,Ot as s_fX0bDjeJa0E};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}