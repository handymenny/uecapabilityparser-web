import{_ as d,R as Y,b as K,c as st,m as it,U as lt,d as ct,V as ut,G as V,w as dt,W as M,Z as f,e as _t,j as mt,h as W,E as pt,H as vt}from"./q-0a566167.js";import{t as ft,j as $,k as z,r as tt,l as et,m as ot,n as J,o as yt,p as ht,q as Et,s as P,v as q,w as St,x as Ct,y as wt,z as bt,c as Rt,C as qt,d as Lt,D as gt,R as Pt,e as At,f as Dt,h as It,i as Tt}from"./q-3b296986.js";const kt=":root{view-transition-name:none}";const A=()=>d(()=>import("./q-eacad360.js"),["build/q-eacad360.js","build/q-0a566167.js"]),Q=[["/",[A,()=>d(()=>import("./q-430e529b.js"),["build/q-430e529b.js","build/q-0a566167.js"])]],["view/multi/",[A,()=>d(()=>import("./q-98ac08c3.js"),["build/q-98ac08c3.js","build/q-0a566167.js"])]],["library/",[A,()=>d(()=>import("./q-229c494f.js"),["build/q-229c494f.js","build/q-0a566167.js"])]],["parser/",[A,()=>d(()=>import("./q-ac27e843.js"),["build/q-ac27e843.js","build/q-0a566167.js"])]],["view/",[A,()=>d(()=>import("./q-8aeb28ab.js"),["build/q-8aeb28ab.js","build/q-0a566167.js"])]]],Z=[];const B=!0;const Ot=async(y,n)=>{const[h,S,a,C]=Y(),{type:i="link",forceReload:_=y===void 0,replaceState:m=!1,scroll:w=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=y===void 0?l:ft(y,C.url);if(!$(o,l)){location.href=o.href;return}if(!_&&z(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(i,o,new URL(location.href),et()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:_,replaceState:m,scroll:w},ot(o,K()),J(Q,Z,B,o.pathname),h.value=void 0,C.isNavigating=!0,new Promise(b=>{S.r=b})},Ut=({track:y})=>{const[n,h,S,a,C,i,_,m,w,l,o]=Y();async function b(){var G;const[u,L]=y(()=>[l.value,n.value]),nt=st(""),D=o.url,p=L?"form":u.type,rt=u.replaceState;let r,g,H=null,I;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let T=J(Q,Z,B,r.pathname);I=K();const k=g=await ot(r,I,!0,L);if(!k){l.untrackedValue={type:p,dest:r};return}const x=k.href,O=new URL(x,r);yt(O,r)||(r=O,T=J(Q,Z,B,r.pathname)),H=await T}if(H){const[T,k,x,O]=H,U=x,at=U[U.length-1];o.prevUrl=D,o.url=r,o.params={...k},l.untrackedValue={type:p,dest:r};const R=ht(g,o,U,nt);h.headings=at.headings,h.menu=O,S.value=it(U),a.links=R.links,a.meta=R.meta,a.styles=R.styles,a.scripts=R.scripts,a.title=R.title,a.frontmatter=R.frontmatter;{w.viewTransition!==!1&&(document.__q_view_transition__=!0);let X;p==="popstate"&&(X=et()),u.scroll&&(!u.forceReload||!z(r,D))&&(p==="link"||p==="popstate")&&(document.__q_scroll_restore__=()=>tt(p,r,D,X));const F=g==null?void 0:g.loaders,t=window;if(F&&Object.assign(_,F),Et.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,v=history.replaceState,E=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||q(document.documentElement),e);history.pushState=(e,c,j)=>(e=E(e),s.call(history,e,c,j)),history.replaceState=(e,c,j)=>(e=E(e),v.call(history,e,c,j))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const v=s.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const E=v.getAttribute("href"),e=new URL(location.href),c=new URL(E,e);if($(c,e)&&z(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),P({...q(document.documentElement),x:0,y:0}),location.reload();return}i(v.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=q(document.documentElement);P(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=q(document.documentElement);P(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(G=t._qCityBootstrap)==null||G.remove(),t._qCityBootstrap=void 0,St.resolve()}if(p!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=q(document.documentElement);P(s)}Ct(window,p,D,r,rt),lt(I).then(()=>{var E;wt(I).setAttribute("q:route",T);const v=q(document.documentElement);P(v),t._qCityScrollEnabled=!0,o.isNavigating=!1,(E=m.r)==null||E.call(m)})}}}b()},Vt=y=>{ct(W(()=>d(()=>Promise.resolve().then(()=>N),void 0),"s_RPDJAz33WLA"));const n=bt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const h=ut("url");if(!h)throw new Error("Missing Qwik URL Env Data");const S=new URL(h),a=V({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=dt(V(n.response.loaders,{deep:!1})),_=M({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),m=V(Rt),w=V({headings:void 0,menu:void 0}),l=M(),o=n.response.action,b=o?n.response.loaders[o]:void 0,u=M(b?{id:o,data:n.response.formData,output:{result:b,status:n.response.status}}:void 0),L=W(()=>d(()=>Promise.resolve().then(()=>N),void 0),"s_fX0bDjeJa0E",[u,C,_,a]);return f(qt,w),f(Lt,l),f(gt,m),f(Pt,a),f(At,L),f(Dt,i),f(It,u),f(Tt,_),_t(W(()=>d(()=>Promise.resolve().then(()=>N),void 0),"s_02wMImzEAbk",[u,w,l,m,n,L,i,C,y,_,a])),mt(pt,null,3,"qY_0")},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:vt,s_02wMImzEAbk:Ut,s_RPDJAz33WLA:kt,s_TxCFOy819ag:Vt,s_fX0bDjeJa0E:Ot},Symbol.toStringTag,{value:"Module"}));export{vt as _hW,Ut as s_02wMImzEAbk,kt as s_RPDJAz33WLA,Vt as s_TxCFOy819ag,Ot as s_fX0bDjeJa0E};