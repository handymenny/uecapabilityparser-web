import{c as O,q as s,r as d,B as f,M as h,g as p,u as L,h as R,l as b,S as x,j as g,k as l,y as v}from"./q-PXVB0oKg.js";import{_ as n}from"./q-Biq04Hab.js";import{u as T,c as I}from"./q-BO0xVEZT.js";const y=O(s(()=>n(()=>import("./q-BitjE5zl.js"),[]),"s_T0EHcA015wY")),M=O(s(()=>n(()=>import("./q--os9u8pD.js"),[]),"s_RhxGDZ0nmY4"));function w(o){const e=d(!1),i=d(!1),r=d(!1),a=d(null),u=d(!1),c=s(()=>n(()=>import("./q-CM0IL7D4.js"),[]),"s_2W86Ci72JIk");f(s(()=>n(()=>import("./q-BoFpdcwH.js"),[]),"s_3Moz8sMpGmg",[u]));const _=s(()=>n(()=>import("./q-CaVOLQvb.js"),[]),"s_kYPTuYqPc0E",[o,r,e,i,c,a]);return h("showpopoverpoly",s(()=>n(()=>import("./q-DjtJd2sA.js"),[]),"s_fIoy3EkB2vM",[r,e])),{showPopover:s(()=>n(()=>import("./q-nxd0FM-K.js"),[]),"s_spMZ1ArTrSk",[e,_,i,a]),togglePopover:s(()=>n(()=>import("./q-FMYtpnqM.js"),[]),"s_r7aUOBLxbqo",[e,_,i,a]),hidePopover:s(()=>n(()=>import("./q-2yW_tcok.js").then(t=>t.f),[]),"s_gxxeU4c4JwI",[e,_,i,a]),initPopover$:_,hasPolyfillLoadedSig:e,isSupportedSig:i}}const A=async o=>{const[e,i,r]=p();if(!e.isListboxOpenSig.value||!r.value||!e.controlRef.value)return;const a=r.value.getBoundingClientRect(),u=e.controlRef.value.getBoundingClientRect(),{clientX:c,clientY:_}=o,m=await i(a,c,_),P=await i(u,c,_);m&&P&&(e.isListboxOpenSig.value=!1)},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_mQ9kRphW3gs:A},Symbol.toStringTag,{value:"Module"})),j=async({track:o})=>{const[e,i,r]=p();o(()=>e.isListboxOpenSig.value),i.value||(e.isListboxOpenSig.value?r.showPopover():r.hidePopover())},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_eRMsH5JtTRU:j},Symbol.toStringTag,{value:"Module"})),Y=o=>{const e=L(I),i=w(e.localId),r={context:e,givenContextRef:e.panelRef},a=T(o.ref,r),u=d(!0),c=R(o,["floating","flip","hover","gutter"]);f(s(()=>n(()=>Promise.resolve().then(()=>V),void 0),"s_eRMsH5JtTRU",[e,u,i]));const _=`${e.localId}-panel`;return f(s(()=>n(()=>Promise.resolve().then(()=>$),void 0),"s_0a9XihCdEUM",[e,s(()=>n(()=>Promise.resolve().then(()=>D),void 0),"s_mQ9kRphW3gs",[e,s(()=>n(()=>Promise.resolve().then(()=>H),void 0),"s_2nJ6LT7p0No"),a])])),f(s(()=>n(()=>Promise.resolve().then(()=>q),void 0),"s_8S3calLuwXA",[u])),b(y,{get floating(){return o.floating},get flip(){return o.flip},get hover(){return o.hover},get gutter(){return o.gutter},get"bind:anchor"(){return o["bind:anchor"]??e.controlRef},"bind:panel":a,manual:!0,get id(){return e.localId},children:b(M,{id:_,get"data-open"(){return e.isListboxOpenSig.value?"":void 0},get"data-closed"(){return e.isListboxOpenSig.value?void 0:""},get"data-invalid"(){return e.isInvalidSig.value?"":void 0},role:"listbox",get"aria-expanded"(){return e.isListboxOpenSig.value?"true":"false"},get"aria-multiselectable"(){return e.multiple?"true":void 0},onMouseEnter$:[s(()=>n(()=>Promise.resolve().then(()=>z),void 0),"s_P2yqsyoWm4Q",[e]),o.onMouseEnter$],...c,children:b(x,null,3,"Pp_0"),[g]:{"data-open":l(t=>t.isListboxOpenSig.value?"":void 0,[e]),"data-closed":l(t=>t.isListboxOpenSig.value?void 0:"",[e]),"data-invalid":l(t=>t.isInvalidSig.value?"":void 0,[e]),role:g,"aria-expanded":l(t=>t.isListboxOpenSig.value?"true":"false",[e]),"aria-multiselectable":l(t=>t.multiple?"true":void 0,[e])}},0,"Pp_1"),[g]:{floating:l(t=>t.floating,[o]),flip:l(t=>t.flip,[o]),hover:l(t=>t.hover,[o]),gutter:l(t=>t.gutter,[o]),"bind:anchor":l((t,E)=>E["bind:anchor"]??t.controlRef,[e,o]),"bind:panel":g,manual:g,id:l(t=>t.localId,[e])}},1,"Pp_2")},C=({track:o,cleanup:e})=>{const[i,r]=p();o(()=>i.isListboxOpenSig.value),i.isListboxOpenSig.value&&window.addEventListener("pointerdown",r),e(()=>{window.removeEventListener("pointerdown",r)})},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_0a9XihCdEUM:C},Symbol.toStringTag,{value:"Module"})),k=()=>{const[o]=p();o.value=!1},q=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_8S3calLuwXA:k},Symbol.toStringTag,{value:"Module"})),B=()=>{const[o]=p();o.isKeyboardFocusSig.value=!1,o.isMouseOverPopupSig.value=!0},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_P2yqsyoWm4Q:B},Symbol.toStringTag,{value:"Module"})),U=(o,e,i)=>e<o.left||e>o.right||i<o.top||i>o.bottom,H=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_2nJ6LT7p0No:U},Symbol.toStringTag,{value:"Module"}));export{M as H,v as _hW,y as a,Y as b,C as c,k as d,B as e,U as f,j as s,A as s_mQ9kRphW3gs,w as u};