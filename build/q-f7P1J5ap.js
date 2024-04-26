import{$ as h,M as v,u as _,i as E,T as p,A as S,P as T,O as f,E as x,k as d,_ as l,H as k,w as C}from"./q-B2JE0ZoP.js";import{a as w,b as H}from"./q-Pv9QYSPl.js";const P=()=>{const[n,t]=h();t.isTriggerExpandedSig.value||(n.value=!0)},y=`
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
  `,q=function({track:t}){const[e,o,i]=h();e.animated&&(t(()=>i.isTriggerExpandedSig.value),i.isTriggerExpandedSig.value&&(o.value=!1))},I=function({track:t}){const[e,o,i,r]=h();if(e.animated===!1)return;t(()=>o.value),r.value===0&&a();function a(){if(!i.value)return;const s=Array.from(i.value.children);s.forEach((c,g)=>{r.value+=c.offsetHeight,g===s.length-1&&i.value.style.setProperty("--qwikui-accordion-content-height",`${r.value}px`)})}},A=({...n})=>{const t=v(w),e=v(H),o=_(),i=`${e.itemId}-content`,r=_(0),a=_(!e.defaultValue),s=d(()=>l(()=>Promise.resolve().then(()=>u),void 0),"s_dGXzdRcdkdY",[a,e]);return E(d(()=>l(()=>Promise.resolve().then(()=>u),void 0),"s_jkiDTw0Rxa4")),p(d(()=>l(()=>Promise.resolve().then(()=>u),void 0),"s_yqEZj1cracY",[t,a,e])),S(d(()=>l(()=>Promise.resolve().then(()=>u),void 0),"s_M0tH5WLqYIQ",[t,a,o,r])),T("div",{"data-content-id":i,id:i,ref:o,...n,children:x(k,null,3,"0S_0"),onAnimationEnd$:[s,n.onAnimationEnd$],onTransitionEnd$:[s,n.onTransitionEnd$]},{"data-state":f(c=>c.isTriggerExpandedSig.value?"open":"closed",[e],'p0.isTriggerExpandedSig.value?"open":"closed"'),hidden:f((c,g,m)=>c.animated?g.value:!m.isTriggerExpandedSig.value,[t,a,e],"p0.animated?p1.value:!p2.isTriggerExpandedSig.value"),role:"region",style:{"--qwikui-collapsible-content-height":"var(--qwikui-accordion-content-height)","--qwikui-collapsible-content-width":"var(--qwikui-accordion-content-width)"}},0,"0S_1")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_FpJ0F5de3jc:A,s_M0tH5WLqYIQ:I,s_dGXzdRcdkdY:P,s_jkiDTw0Rxa4:y,s_yqEZj1cracY:q},Symbol.toStringTag,{value:"Module"}));export{C as _hW,A as s_FpJ0F5de3jc,I as s_M0tH5WLqYIQ,P as s_dGXzdRcdkdY,y as s_jkiDTw0Rxa4,q as s_yqEZj1cracY};
