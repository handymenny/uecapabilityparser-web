import{$ as c,P as A,b as s,E as b,K as t,H as g,k as r,_ as u}from"./q-B2JE0ZoP.js";import{z as D}from"./q-Pv9QYSPl.js";const I=()=>{const[n,e]=c();e>1&&n(e-1)},j=()=>{const[n,e]=c();e(n)},O=()=>{const[n,e,l]=c();e<l&&n(e+1)},S=n=>{const{selectedPage:e,totalPages:l,onPageChange$:o,siblingCount:P,hidePrevButton:f=!1,hideNextButton:p=!1,disabled:i=!1,customArrowTexts:{previous:v="PREV",next:C="NEXT"}={},defaultClass:h="",selectedClass:m="",dividerClass:B="",nextButtonClass:E="",prevButtonClass:$="",...x}=n,T=()=>!f&&e>1,k=()=>!p&&e!==l,d=D(l,e,P||1);return console.log(d),A("nav",{...x,children:[s("button",{class:E,disabled:i||!T(),onClick$:r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_DbuSTP4glBw",[o,e])},{"aria-label":"prevAriaLabel"},[b(g,{name:"prefix",[t]:{name:t}},3,"f1_0"),s("span",null,null,v,3,null)],0,null),d.map((a,L)=>{const R=e===a;return s("span",null,null,typeof a=="string"?s("button",{class:B},{disabled:!0},"...",3,"f1_1"):s("button",{"aria-current":e===a,"aria-label":`Page ${a} of ${l}`,class:[h,e===a&&m],disabled:i||R,onClick$:r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_hBI599j54ok",[a,o])},null,a,0,null),1,L)}),s("button",{class:$,disabled:i||!k(),onClick$:r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_flm2HZRc0gQ",[o,e,l])},{"aria-label":"nextAriaLabel"},[s("span",null,null,C,3,null),b(g,{name:"suffix",[t]:{name:t}},3,"f1_2")],0,null)]},{"aria-label":"pagination","data-testid":"pagination"},0,"f1_3")},_=Object.freeze(Object.defineProperty({__proto__:null,s_DbuSTP4glBw:I,s_W5aD6KjRTnY:S,s_flm2HZRc0gQ:O,s_hBI599j54ok:j},Symbol.toStringTag,{value:"Module"}));export{I as s_DbuSTP4glBw,S as s_W5aD6KjRTnY,O as s_flm2HZRc0gQ,j as s_hBI599j54ok};