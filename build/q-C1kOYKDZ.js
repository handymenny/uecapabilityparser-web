import{u as h,a as v,b as _,c as m,d as x,e as p,_ as E,f,g as T,q as d,h as l,S as k,i as C}from"./q-BllQxhLr.js";import{a as q,b as y}from"./q-DIywAcZT.js";const w=()=>{const[n,t]=h();t.isTriggerExpandedSig.value||(n.value=!0)},H=`
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
  `,I=function({track:t}){const[e,o,i]=h();e.animated&&(t(()=>i.isTriggerExpandedSig.value),i.isTriggerExpandedSig.value&&(o.value=!1))},P=function({track:t}){const[e,o,i,s]=h();if(e.animated===!1)return;t(()=>o.value),s.value===0&&a();function a(){if(!i.value)return;const r=Array.from(i.value.children);r.forEach((c,g)=>{s.value+=c.offsetHeight,g===r.length-1&&i.value.style.setProperty("--qwikui-accordion-content-height",`${s.value}px`)})}},b=({...n})=>{const t=v(q),e=v(y),o=_(),i=`${e.itemId}-content`,s=_(0),a=_(!e.defaultValue),r=d(()=>l(()=>Promise.resolve().then(()=>u),void 0),"s_dGXzdRcdkdY",[a,e]);return m(d(()=>l(()=>Promise.resolve().then(()=>u),void 0),"s_jkiDTw0Rxa4")),x(d(()=>l(()=>Promise.resolve().then(()=>u),void 0),"s_yqEZj1cracY",[t,a,e])),p(d(()=>l(()=>Promise.resolve().then(()=>u),void 0),"s_M0tH5WLqYIQ",[t,a,o,s])),E("div",{"data-content-id":i,id:i,ref:o,...n,children:T(k,null,3,"0S_0"),onAnimationEnd$:[r,n.onAnimationEnd$],onTransitionEnd$:[r,n.onTransitionEnd$]},{"data-state":f(c=>c.isTriggerExpandedSig.value?"open":"closed",[e],'p0.isTriggerExpandedSig.value?"open":"closed"'),hidden:f((c,g,S)=>c.animated?g.value:!S.isTriggerExpandedSig.value,[t,a,e],"p0.animated?p1.value:!p2.isTriggerExpandedSig.value"),role:"region",style:{"--qwikui-collapsible-content-height":"var(--qwikui-accordion-content-height)","--qwikui-collapsible-content-width":"var(--qwikui-accordion-content-width)"}},0,"0S_1")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_FpJ0F5de3jc:b,s_M0tH5WLqYIQ:P,s_dGXzdRcdkdY:w,s_jkiDTw0Rxa4:H,s_yqEZj1cracY:I},Symbol.toStringTag,{value:"Module"}));export{C as _hW,b as s_FpJ0F5de3jc,P as s_M0tH5WLqYIQ,w as s_dGXzdRcdkdY,H as s_jkiDTw0Rxa4,I as s_yqEZj1cracY};
