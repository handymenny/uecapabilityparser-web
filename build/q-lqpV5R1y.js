import{l as h,j as v,o as _,n as E,L as p,W as S,k as x,C as f,a as k,y as d,_ as l,b as T,h as C}from"./q-kBRCEvCZ.js";import{a as y,b as q}from"./q-POVI9Nn8.js";const w=()=>{const[n,t]=h();t.isTriggerExpandedSig.value||(n.value=!0)},H=`
    /* check global.css utilites layer for animation */
    @keyframes accordion-open {
      0% {
        height: 0;
      }
      100% {
        height: var(--qwikui-accordion-content-height);
      }
    }
  
    @keyframes accordion-close {
        0% {
          height: var(--qwikui-accordion-content-height);
        }
        100% {
          height: 0;
        }
      }
  `,I=function({track:t}){const[e,o,i]=h();e.animated&&(t(()=>i.isTriggerExpandedSig.value),i.isTriggerExpandedSig.value&&(o.value=!1))},P=function({track:t}){const[e,o,i,r]=h();if(e.animated===!1)return;t(()=>o.value),r.value===0&&a();function a(){if(!i.value)return;const s=Array.from(i.value.children);s.forEach((c,u)=>{r.value+=c.offsetHeight,u===s.length-1&&i.value.style.setProperty("--qwikui-accordion-content-height",`${r.value}px`)})}},j=({...n})=>{const t=v(y),e=v(q),o=_(),i=`${e.itemId}-content`,r=_(0),a=_(!e.defaultValue),s=d(()=>l(()=>Promise.resolve().then(()=>g),void 0),"s_dGXzdRcdkdY",[a,e]);return E(d(()=>l(()=>Promise.resolve().then(()=>g),void 0),"s_jkiDTw0Rxa4")),p(d(()=>l(()=>Promise.resolve().then(()=>g),void 0),"s_yqEZj1cracY",[t,a,e])),S(d(()=>l(()=>Promise.resolve().then(()=>g),void 0),"s_M0tH5WLqYIQ",[t,a,o,r])),x("div",{"data-content-id":i,id:i,ref:o,...n,children:k(T,null,3,"0S_0"),onAnimationEnd$:[s,n.onAnimationEnd$],onTransitionEnd$:[s,n.onTransitionEnd$]},{"data-state":f(c=>c.isTriggerExpandedSig.value?"open":"closed",[e],'p0.isTriggerExpandedSig.value?"open":"closed"'),hidden:f((c,u,m)=>c.animated?u.value:!m.isTriggerExpandedSig.value,[t,a,e],"p0.animated?p1.value:!p2.isTriggerExpandedSig.value"),role:"region",style:{"--qwikui-collapsible-content-height":"var(--qwikui-accordion-content-height)","--qwikui-collapsible-content-width":"var(--qwikui-accordion-content-width)"}},0,"0S_1")},g=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_FpJ0F5de3jc:j,s_M0tH5WLqYIQ:P,s_dGXzdRcdkdY:w,s_jkiDTw0Rxa4:H,s_yqEZj1cracY:I},Symbol.toStringTag,{value:"Module"}));export{C as _hW,j as s_FpJ0F5de3jc,P as s_M0tH5WLqYIQ,w as s_dGXzdRcdkdY,H as s_jkiDTw0Rxa4,I as s_yqEZj1cracY};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
