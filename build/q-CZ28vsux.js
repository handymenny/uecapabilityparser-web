const T=(E,q)=>{const t=window,l="_qCitySPA",u="_qCityInitPopstate",d="_qCityInitAnchors",y="_qCityInitVisibility",f="_qCityInitScroll";if(!t[l]&&!t[u]&&!t[d]&&!t[y]&&!t[f]){const _=location.pathname+location.search,m="_qCityHistoryPatch",C="_qCityBootstrap",s="_qCityScrollEnabled",a="_qCityScrollDebounce",S="_qCityScroll",g=o=>{o&&t.scrollTo(o.x,o.y)},p=()=>{const o=document.documentElement;return{x:o.scrollLeft,y:o.scrollTop,w:Math.max(o.scrollWidth,o.clientWidth),h:Math.max(o.scrollHeight,o.clientHeight)}},h=o=>{const n=history.state||{};n[S]=o||p(),history.replaceState(n,"")};if(h(),t[u]=()=>{var o,n;if(!t[l]){if(t[s]=!1,clearTimeout(t[a]),_!==location.pathname+location.search){const r=i=>i.closest("[q\\:container]"),e=(o=r(q))==null?void 0:o.querySelector("a[q\\:link]");if(e){const i=r(e),c=e.cloneNode();c.setAttribute("q:nbs",""),c.style.display="none",i.appendChild(c),t[C]=c,c.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const r=(n=history.state)==null?void 0:n[S];g(r),t[s]=!0}}},!t[m]){t[m]=!0;const o=history.pushState,n=history.replaceState,r=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||p(),e);history.pushState=(e,i,c)=>(e=r(e),o.call(history,e,i,c)),history.replaceState=(e,i,c)=>(e=r(e),n.call(history,e,i,c))}t[d]=o=>{if(t[l]||o.defaultPrevented)return;const n=o.target.closest("a[href]");if(n&&!n.hasAttribute("preventdefault:click")){const r=n.getAttribute("href"),e=new URL(location.href),i=new URL(r,e),c=i.origin===e.origin,v=i.pathname+i.search===e.pathname+e.search;if(c&&v)if(o.preventDefault(),i.href!==e.href&&history.pushState(null,"",i),!i.hash)i.href.endsWith("#")?window.scrollTo(0,0):(t[s]=!1,clearTimeout(t[a]),h({...p(),x:0,y:0}),location.reload());else{const w=i.hash.slice(1),b=document.getElementById(w);b&&b.scrollIntoView()}}},t[y]=()=>{!t[l]&&t[s]&&document.visibilityState==="hidden"&&h()},t[f]=()=>{t[l]||!t[s]||(clearTimeout(t[a]),t[a]=setTimeout(()=>{h(),t[a]=void 0},200))},t[s]=!0,setTimeout(()=>{addEventListener("popstate",t[u]),addEventListener("scroll",t[f],{passive:!0}),document.body.addEventListener("click",t[d]),t.navigation||document.addEventListener("visibilitychange",t[y],{passive:!0})},0)}};export{T as s_gNwUJOjjmEc};