import{l as _,g as k,r as s,E as I,G as S,s as R,x as c,h as x,i as p,j as E,f as M,k as T,q as r,S as z,_hW as g}from"./q-BmWDAmC3.js";import{_ as l}from"./q-N76fqm0C.js";import{a as L}from"./q-BUZqLVdY.js";import"./q-DvnE0Iuw.js";const D=function({track:a}){const[o,t]=_(),n=t["bind:open"];n&&(a(()=>n.value),o.value=n.value??o.value)},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_8yA0zSYKwRs:D},Symbol.toStringTag,{value:"Module"})),H=e=>{const a=k(e,["_itemsMap","onOpenChange$","scrollOptions","loop"]),o=s(),t=s(),n=s(),d=e.loop??!1,v=I(),O=`${v}-dropdown`,h=S(r(()=>l(()=>Promise.resolve().then(()=>C),void 0),"s_awXQGzKUY4A",[e])),w=s(null),u=s(!1),b=e.scrollOptions??{behavior:"instant",block:"nearest"},j=s(),m=s(!0),P=s(),q=s(!1),i={itemsMapSig:h,currDisplayValueSig:j,highlightedIndexSig:w,isOpenSig:u,triggerRef:t,panelRef:n,highlightedItemRef:P,isMouseOverPopupSig:q,localId:v,scrollOptions:b,loop:d};R(L,i),c(r(()=>l(()=>Promise.resolve().then(()=>A),void 0),"s_8yA0zSYKwRs",[u,e])),c(r(()=>l(()=>Promise.resolve().then(()=>Y),void 0),"s_juN7Df4GfsQ",[m,u,e]));const f=S(r(()=>l(()=>Promise.resolve().then(()=>U),void 0),"s_cllYqIFBfKU",[i,u]));return c(r(()=>l(()=>Promise.resolve().then(()=>G),void 0),"s_D96MQq7L0ug",[m])),x("div",{role:"group","data-qui-dropdown":!0,ref:o,"data-open":i.isOpenSig.value?!0:void 0,"data-closed":i.isOpenSig.value?void 0:!0,"aria-controls":O,get"aria-expanded"(){return i.isOpenSig.value},"aria-expanded":M(i.isOpenSig,"value"),"aria-haspopup":"true",get"aria-activedescendant"(){return f.value},...a,children:T(z,null,3,"BE_0")},{role:p,"data-qui-dropdown":p,"aria-haspopup":p,"aria-activedescendant":E(y=>y.value,[f])},0,"BE_1")},Q=()=>{const[e]=_();return e._itemsMap},C=Object.freeze(Object.defineProperty({__proto__:null,s_awXQGzKUY4A:Q},Symbol.toStringTag,{value:"Module"})),K=()=>{const[e,a]=_();if(!a.value)return"";const o=e.highlightedIndexSig.value??-1,t=e.itemsMapSig.value.get(o);return o===null||o===-1||t!=null&&t.disabled?"":`${e.localId}-${o}`},U=Object.freeze(Object.defineProperty({__proto__:null,s_cllYqIFBfKU:K},Symbol.toStringTag,{value:"Module"})),V=function({track:a}){var d;const[o,t,n]=_();a(()=>t.value),o.value||(d=n.onOpenChange$)==null||d.call(n,t.value)},Y=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_juN7Df4GfsQ:V},Symbol.toStringTag,{value:"Module"})),B=()=>{const[e]=_();e.value=!1},G=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_D96MQq7L0ug:B},Symbol.toStringTag,{value:"Module"}));export{g as _hW,Q as a,K as b,V as c,B as d,H as s,D as s_8yA0zSYKwRs};