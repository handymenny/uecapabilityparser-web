import{_}from"./q-N76fqm0C.js";import{P}from"./q-CZXexaxb.js";import{G as u,x as m,s as f,h as x,i as p,j as v,k as j,q as l,S as k,l as n,_hW as d}from"./q-BmWDAmC3.js";import{u as O}from"./q-DNqB31b3.js";import"./q-CuHn8TBl.js";const H=e=>{const{"bind:value":o,...r}=e,s=u(l(()=>_(()=>Promise.resolve().then(()=>B),void 0),"s_uvYAoGD06f0",[e])),t=u(l(()=>_(()=>Promise.resolve().then(()=>E),void 0),"s_LvLpBGG3Rxk",[e])),a=O(o,e.value??null);m(l(()=>_(()=>Promise.resolve().then(()=>w),void 0),"s_K9AhlrsZv6M",[e,a]));const S=u(l(()=>_(()=>Promise.resolve().then(()=>T),void 0),"s_dLLLpSq4RFA",[t,s,a])),g=u(l(()=>_(()=>Promise.resolve().then(()=>M),void 0),"s_514rkcxXHS0",[t,s,e,a]));m(l(()=>_(()=>Promise.resolve().then(()=>A),void 0),"s_VjGImKGVIAk",[S]));const b=u(l(()=>_(()=>Promise.resolve().then(()=>D),void 0),"s_U4rDWGWqAPM",[t,s,a])),c=u(l(()=>_(()=>Promise.resolve().then(()=>V),void 0),"s_IgqEsMrAIi0",[t,s,b,a]));return f(P,{dataAttributesSig:c,valueSig:a,maxSig:t,minSig:s}),x("div",{role:"progressbar","aria-label":"progress",get"aria-valuemax"(){return t.value},get"aria-valuemin"(){return s.value},get"aria-valuenow"(){return a.value??void 0},get"aria-valuetext"(){return g.value},...c.value,...r,children:j(k,null,3,"tI_0")},{role:p,"aria-label":p,"aria-valuemax":v(i=>i.value,[t]),"aria-valuemin":v(i=>i.value,[s]),"aria-valuenow":v(i=>i.value??void 0,[a]),"aria-valuetext":v(i=>i.value,[g])},0,"tI_1")},L=function({track:o}){const[r]=n();if(o(()=>r.value),!r.value)throw new Error("Qwik UI: Progress component must be a finite number, and within the max and min range.")},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:d,s_VjGImKGVIAk:L},Symbol.toStringTag,{value:"Module"})),h=()=>{const[e]=n();return e.max??100},E=Object.freeze(Object.defineProperty({__proto__:null,s_LvLpBGG3Rxk:h},Symbol.toStringTag,{value:"Module"})),I=()=>{const[e,o,r,s]=n(),t=s.value??o.value,a=e.value-o.value;return r.getValueLabel?r.getValueLabel(t,e.value):`${Math.round((t-o.value)/a*100)}%`},M=Object.freeze(Object.defineProperty({__proto__:null,s_514rkcxXHS0:I},Symbol.toStringTag,{value:"Module"})),R=()=>{const[e,o,r,s]=n();return{"data-progress":r.value,"data-value":s.value??void 0,"data-max":e.value,"data-min":o.value}},V=Object.freeze(Object.defineProperty({__proto__:null,s_IgqEsMrAIi0:R},Symbol.toStringTag,{value:"Module"})),q=()=>{const[e,o,r]=n(),s=Number.isFinite(e.value),t=e.value>o.value,a=r.value===null||r.value>=o.value;return s&&t&&a},T=Object.freeze(Object.defineProperty({__proto__:null,s_dLLLpSq4RFA:q},Symbol.toStringTag,{value:"Module"})),y=({track:e})=>{const[o,r]=n();o.value!==void 0&&(e(()=>o.value),r.value=o.value)},w=Object.freeze(Object.defineProperty({__proto__:null,_hW:d,s_K9AhlrsZv6M:y},Symbol.toStringTag,{value:"Module"})),G=()=>{const[e,o,r]=n();if(r.value==null)return"indeterminate";const s=e.value-o.value;return(r.value-o.value)/s>=1?"complete":"loading"},D=Object.freeze(Object.defineProperty({__proto__:null,s_U4rDWGWqAPM:G},Symbol.toStringTag,{value:"Module"})),z=()=>{const[e]=n();return e.min??0},B=Object.freeze(Object.defineProperty({__proto__:null,s_uvYAoGD06f0:z},Symbol.toStringTag,{value:"Module"}));export{h as a,I as b,R as c,q as d,y as e,G as f,z as g,L as s,H as s_SB2i2EU6SQg};