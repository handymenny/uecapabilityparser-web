import{g as i,q as l,y as c}from"./q-PXVB0oKg.js";import{_ as r}from"./q-Biq04Hab.js";const d=()=>{const[e]=i();e.currentIndexSig.value=(e.currentIndexSig.value+1)%e.numSlidesSig.value},v=Object.freeze(Object.defineProperty({__proto__:null,_hW:c,s_AONJumLCMA4:d},Symbol.toStringTag,{value:"Module"})),_=function({track:n}){const[t,a,o]=i();if(n(()=>t.isAutoplaySig.value),o.value)return;if(!t.isAutoplaySig.value){clearInterval(a.value);return}const s=l(()=>r(()=>Promise.resolve().then(()=>v),void 0),"s_AONJumLCMA4",[t]);a.value=setInterval(s,t.autoPlayIntervalMsSig.value)},m=function({track:n}){const[t,a,o,s]=i();n(()=>a.currentIndexSig.value);const u=window.matchMedia("(prefers-reduced-motion: reduce)");s.value=u.matches,o.value||(u.addEventListener("change",t),o.value=!0)},f=async e=>{const[n,t,a]=i();a.value=e.matches,e.matches&&(n.isAutoplaySig.value=!1,clearInterval(t.value))};export{c as _hW,m as a,f as b,_ as s,d as s_AONJumLCMA4};