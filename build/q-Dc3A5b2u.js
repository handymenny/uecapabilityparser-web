import{u as v,A as m,p as x,E as h,b as o,O as i,K as r,k as a,_ as c,$ as f,w as I}from"./q-B2JE0ZoP.js";import{L as A}from"./q-BVh-Zhel.js";const w=e=>{const s=e.inverted?" border-2 border-solid border-black bg-white text-black":" bg-black text-white",n=v(),l=a(()=>c(()=>Promise.resolve().then(()=>_),void 0),"s_FDBHr0yOvsA",[n,e]);return m(a(()=>c(()=>Promise.resolve().then(()=>_),void 0),"s_T0JQFyCbfMI",[l])),x("resize",a(()=>c(()=>Promise.resolve().then(()=>_),void 0),"s_27BIuhV8z9w",[l])),h(A,{class:"multiellipsis my-2 flex h-[150px] w-full overflow-hidden p-2 text-center text-lg focus:outline-none focus:ring focus:ring-gray-400"+s,ref:n,get href(){return e.url},children:o("div",null,{class:"m-auto break-words"},[o("span",null,null,i(t=>t.multilineLabel,[e]),3,null),e.multilineLabel&&e.label&&o("br",null,null,null,3,"oA_0"),o("span",null,null,i(t=>t.label,[e]),3,null),e.Icon!==void 0&&h(e.Icon,{class:"m-auto",[r]:{class:r}},3,"oA_1")],1,null),[r]:{ref:r,href:i(t=>t.url,[e])}},1,"oA_2")},y=e=>{const[s,n]=f();if(s.value){const l=s.value,t=l.querySelector("span");if(t==null)return;e&&t.textContent!==n.multilineLabel&&(t.textContent=n.multilineLabel??null);const d=l.clientHeight;if(l.scrollHeight==d||t.textContent==null)return;for(;t.offsetHeight+50>d;){const g=t.textContent.length,u=t.textContent.replace(/[\W\s]*(\S)+$/,""),b=g-u.length;if(b==0)break;b>3?t.textContent=u+"…":t.textContent=u}}},C=()=>{const[e]=f();e(!1)},L=()=>{const[e]=f();e(!0)},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:I,s_0sxvg6KsuAM:w,s_27BIuhV8z9w:L,s_FDBHr0yOvsA:y,s_T0JQFyCbfMI:C},Symbol.toStringTag,{value:"Module"}));export{I as _hW,w as s_0sxvg6KsuAM,L as s_27BIuhV8z9w,y as s_FDBHr0yOvsA,C as s_T0JQFyCbfMI};