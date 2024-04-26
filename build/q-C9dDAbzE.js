import{$ as h,P as v,c as _,o as E,T as p,L as S,O as T,M as f,E as x,q as d,_ as l,H as k,w as C}from"./q-C5sJjcKo.js";import{a as q,b as w}from"./q-CreaSmnA.js";const H=()=>{const[n,t]=h();t.isTriggerExpandedSig.value||(n.value=!0)},P=`
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
  `,y=function({track:t}){const[e,o,i]=h();e.animated&&(t(()=>i.isTriggerExpandedSig.value),i.isTriggerExpandedSig.value&&(o.value=!1))},I=function({track:t}){const[e,o,i,r]=h();if(e.animated===!1)return;t(()=>o.value),r.value===0&&a();function a(){if(!i.value)return;const s=Array.from(i.value.children);s.forEach((c,u)=>{r.value+=c.offsetHeight,u===s.length-1&&i.value.style.setProperty("--qwikui-accordion-content-height",`${r.value}px`)})}},R=({...n})=>{const t=v(q),e=v(w),o=_(),i=`${e.itemId}-content`,r=_(0),a=_(!e.defaultValue),s=d(()=>l(()=>Promise.resolve().then(()=>g),void 0),"s_dGXzdRcdkdY",[a,e]);return E(d(()=>l(()=>Promise.resolve().then(()=>g),void 0),"s_jkiDTw0Rxa4")),p(d(()=>l(()=>Promise.resolve().then(()=>g),void 0),"s_yqEZj1cracY",[t,a,e])),S(d(()=>l(()=>Promise.resolve().then(()=>g),void 0),"s_M0tH5WLqYIQ",[t,a,o,r])),T("div",{"data-content-id":i,id:i,ref:o,...n,children:x(k,null,3,"0S_0"),onAnimationEnd$:[s,n.onAnimationEnd$],onTransitionEnd$:[s,n.onTransitionEnd$]},{"data-state":f(c=>c.isTriggerExpandedSig.value?"open":"closed",[e],'p0.isTriggerExpandedSig.value?"open":"closed"'),hidden:f((c,u,m)=>c.animated?u.value:!m.isTriggerExpandedSig.value,[t,a,e],"p0.animated?p1.value:!p2.isTriggerExpandedSig.value"),role:"region",style:{"--qwikui-collapsible-content-height":"var(--qwikui-accordion-content-height)","--qwikui-collapsible-content-width":"var(--qwikui-accordion-content-width)"}},0,"0S_1")},g=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_FpJ0F5de3jc:R,s_M0tH5WLqYIQ:I,s_dGXzdRcdkdY:H,s_jkiDTw0Rxa4:P,s_yqEZj1cracY:y},Symbol.toStringTag,{value:"Module"}));export{C as _hW,R as s_FpJ0F5de3jc,I as s_M0tH5WLqYIQ,H as s_dGXzdRcdkdY,P as s_jkiDTw0Rxa4,y as s_yqEZj1cracY};
