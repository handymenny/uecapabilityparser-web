import{_ as l}from"./q-1dnJZ1Td.js";import{E as k,r as S,x as I,s as D,h as M,k as q,q as c,S as y,i as z,l as d,_hW as b}from"./q-BmWDAmC3.js";import{t as V}from"./q-BlLycFJ_.js";const j=(e,s)=>P(e,s)||w(e,s);function P(e,s,t){let n;for(let o=Math.max(0,s);o<e.length;o++)if(n=e[o],!T(n))return n;if(t!=null&&t.wrap){for(let o=0;o<s;o++)if(n=e[o],!T(n))return n}}function w(e,s,t){let n;for(let o=Math.min(e.length,s)-1;o>=0;o--)if(n=e[o],!T(n))return n;if(t!=null&&t.wrap){for(let o=e.length-1;o>s;o--)if(n=e[o],!T(n))return n}}const T=e=>e.tabProps.disabled,m=(e,s,t,{indexToSelect:n,tabIdToSelect:o},a)=>{if(o&&(n=e.findIndex(r=>r.tabId===o)),typeof n!="number"||n&&n<0&&(!a||(n=s.value,typeof n!="number")))return;const i=j(e,n);i&&(i.index!==s.value||i.tabId!==t.value)&&(s.value=i.index,t.value=i.tabId)},_e=e=>{const{tabInfoList:s,behavior:t="manual",selectedTabId:n,selectedIndex:o,vertical:a,selectedClassName:i,onSelectedIndexChange$:r,onSelectedTabIdChange$:v,"bind:selectedIndex":p,"bind:selectedTabId":g,...O}=e,L=k(),x=S(),A=S(),u=p||A,E=S(),f=g||E;I(c(()=>l(()=>Promise.resolve().then(()=>Q),void 0),"s_qiYTgh5TLT0",[e,u,f])),I(c(()=>l(()=>Promise.resolve().then(()=>G),void 0),"s_djw4MxnVC6U",[e,u,f])),I(c(()=>l(()=>Promise.resolve().then(()=>U),void 0),"s_Ig5PXLRDzh0",[r,e,u,f])),I(c(()=>l(()=>Promise.resolve().then(()=>$),void 0),"s_lWzI0SgxmDM",[e,u,f])),I(c(()=>l(()=>Promise.resolve().then(()=>K),void 0),"s_pnzP4nEI6OM",[v,e,u,f])),I(c(()=>l(()=>Promise.resolve().then(()=>B),void 0),"s_I9GDQI0799o",[r,u]));const h=c(()=>l(()=>Promise.resolve().then(()=>te),void 0),"s_AHk5FCO0bvM",[e,u,f]);return D(V,{selectTab$:h,tabsPrefix:L,onTabKeyDown$:c(()=>l(()=>Promise.resolve().then(()=>N),void 0),"s_0X4nk5iVb7M",[e,x,a]),selectIfAutomatic$:c(()=>l(()=>Promise.resolve().then(()=>C),void 0),"s_6OFVqJcUkmA",[t,h]),selectedTabIdSig:f,selectedClassName:i}),M("div",{"data-qui-tabs-root":!0,ref:x,...O,children:q(y,null,3,"QT_3")},{"data-qui-tabs-root":z},0,"QT_4")},R=function({track:s}){const[t,n,o,a]=d(),i=s(()=>o.value);m(n.tabInfoList,o,a,{indexToSelect:i}),typeof o.value<"u"&&(t==null||t(o.value))},U=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_Ig5PXLRDzh0:R},Symbol.toStringTag,{value:"Module"})),F=function({track:s}){const[t,n,o]=d(),a=s(()=>t.selectedTabId);m(t.tabInfoList,n,o,{tabIdToSelect:a})},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_lWzI0SgxmDM:F},Symbol.toStringTag,{value:"Module"})),H=function({track:s}){const[t,n,o]=d(),a=s(()=>t.tabInfoList),i=o.value;m(a,n,o,{tabIdToSelect:i},!0)},Q=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_qiYTgh5TLT0:H},Symbol.toStringTag,{value:"Module"})),X=e=>{const[s,t]=d();s==="automatic"&&t(e)},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_6OFVqJcUkmA:X},Symbol.toStringTag,{value:"Module"})),W=function({track:s}){const[t,n,o]=d(),a=s(()=>t.selectedIndex);m(t.tabInfoList,n,o,{indexToSelect:a})},G=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_djw4MxnVC6U:W},Symbol.toStringTag,{value:"Module"}));let _;(function(e){e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Enter="Enter"})(_||(_={}));const J=(e,s)=>{const[t,n,o]=d(),a=n.value,i=t.tabInfoList.findIndex(p=>p.tabId===s);let r;!o&&e===_.ArrowRight||o&&e===_.ArrowDown?r=P(t.tabInfoList,i+1,{wrap:!0}):!o&&e===_.ArrowLeft||o&&e===_.ArrowUp?r=w(t.tabInfoList,i,{wrap:!0}):e===_.Home||e===_.PageUp?r=P(t.tabInfoList,0):(e===_.End||e===_.PageDown)&&(r=w(t.tabInfoList,t.tabInfoList.length)),r&&v(r.index);function v(p){const g=a==null?void 0:a.children[0];(g==null?void 0:g.children[p]).focus()}},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_0X4nk5iVb7M:J},Symbol.toStringTag,{value:"Module"})),Y=function({track:s}){const[t,n]=d();if(!t)return;const o=s(()=>n.value);typeof o=="number"&&o>=0&&t(o)},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_I9GDQI0799o:Y},Symbol.toStringTag,{value:"Module"})),Z=function({track:s}){const[t,n,o,a]=d();let i=s(()=>a.value);if(typeof i!="string"){const r=j(n.tabInfoList,0);r&&(i=r.tabId)}m(n.tabInfoList,o,a,{tabIdToSelect:i}),typeof a.value<"u"&&(t==null||t(a.value))},K=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_pnzP4nEI6OM:Z},Symbol.toStringTag,{value:"Module"})),ee=e=>{const[s,t,n]=d();m(s.tabInfoList,t,n,{tabIdToSelect:e})},te=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_AHk5FCO0bvM:ee},Symbol.toStringTag,{value:"Module"}));export{F as a,H as b,X as c,W as d,J as e,Y as f,Z as g,ee as h,R as s,_e as s_7nODzAkIKgo};
