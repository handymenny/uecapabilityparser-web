import{u as b,r as m,G as p,q as s,l as g,g as R,J as j,x as I,o as $,s as T,h as L,i as f,j as h,k as A,S as D,_hW as v}from"./q-BmWDAmC3.js";import{_ as l}from"./q-1dnJZ1Td.js";import{S as x,s as M}from"./q-Dg_aY5Bf.js";import{u as q}from"./q-B97P3fmz.js";function w(){const t=b(x);return{getNextEnabledItemIndex$:s(()=>l(()=>import("./q-CoXQTaLf.js").then(o=>o.u),[]),"s_l0pxmXH9RRY",[t]),getPrevEnabledItemIndex$:s(()=>l(()=>import("./q-aV80VTRF.js"),[]),"s_xqOmZJKxpjA",[t]),selectionManager$:s(()=>l(()=>import("./q-Dg75mPTI.js"),[]),"s_bJI3My071PU",[t])}}function ae(){const t=b(x),e=m(""),i=m(void 0),n=m(void 0),{selectionManager$:o}=w(),a=p(s(()=>l(()=>import("./q-Cdo1NuMD.js"),[]),"s_kyTdObXqNGU",[t]));return{typeahead$:s(()=>l(()=>import("./q-BG3IpCZo.js"),[]),"s_bh2JSbaO0HQ",[t,a,i,e,n,o])}}const z=async t=>{var o,a,u;const[e,i,n]=g();switch((o=n.value)==null||o.call(n,t.key),t.key){case"ArrowDown":e.isListboxOpenSig.value&&(e.highlightedIndexSig.value=await i.getNextEnabledItemIndex$(e.highlightedIndexSig.value),e.multiple&&t.shiftKey&&await i.selectionManager$(e.highlightedIndexSig.value,"toggle"));break;case"ArrowUp":e.isListboxOpenSig.value&&(e.highlightedIndexSig.value=await i.getPrevEnabledItemIndex$(e.highlightedIndexSig.value),e.multiple&&t.shiftKey&&await i.selectionManager$(e.highlightedIndexSig.value,"toggle"));break;case"Home":e.isListboxOpenSig.value&&(e.highlightedIndexSig.value=await i.getNextEnabledItemIndex$(-1));break;case"End":if(e.isListboxOpenSig.value){const r=await i.getPrevEnabledItemIndex$(e.itemsMapSig.value.size);e.highlightedIndexSig.value=r}break;case"Escape":(a=e.triggerRef.value)==null||a.focus(),e.isListboxOpenSig.value=!1;break;case"Tab":e.isListboxOpenSig.value=!1;break;case"Enter":case" ":if(e.isListboxOpenSig.value){const r=e.multiple?"toggle":"add";await i.selectionManager$(e.highlightedIndexSig.value,r),e.multiple||(u=e.triggerRef.value)==null||u.focus()}e.isListboxOpenSig.value=e.multiple?!0:!e.isListboxOpenSig.value;break;case"a":if(t.ctrlKey&&e.multiple)for(const[r,c]of e.itemsMapSig.value)c.disabled||await i.selectionManager$(r,"add");break}},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_eZg2T3MaKko:z},Symbol.toStringTag,{value:"Module"})),C=()=>{const[t,e,i]=g();i.disabled||e.value!==null&&(t.highlightedIndexSig.value=e.value)},U=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_ZJzRoD1INlU:C},Symbol.toStringTag,{value:"Module"})),F=()=>{const[t,e]=g(),i=e._index??null;return!e.disabled&&t.selectedIndexSetSig.value.has(i)},K=Object.freeze(Object.defineProperty({__proto__:null,s_VnWoFid0wls:F},Symbol.toStringTag,{value:"Module"})),H=async function({track:e,cleanup:i}){const[n,o,a,u,r]=g();if(e(()=>o.highlightedIndexSig.value),u.value===o.highlightedIndexSig.value&&(o.highlightedItemRef=a),!o.popoverRef.value||r._index!==o.highlightedIndexSig.value||!(o.popoverRef.value.scrollHeight>o.popoverRef.value.clientHeight))return;const d=new IntersectionObserver(n,{root:o.popoverRef.value,threshold:1});i(()=>d==null?void 0:d.disconnect()),a.value&&d.observe(a.value)},J=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_tspPoXd965w:H},Symbol.toStringTag,{value:"Module"})),re=t=>{const e=R(t,["_index","disabled"]),i=b(x),n=q(t.ref),o=m(null),a=`${i.localId}-${t._index}`,u=m(),r=w();j("typeaheadFn",s(()=>l(()=>Promise.resolve().then(()=>W),void 0),"s_Z3hAj4OaBc0",[u]));const c=p(s(()=>l(()=>Promise.resolve().then(()=>K),void 0),"s_VnWoFid0wls",[i,t])),d=p(s(()=>l(()=>Promise.resolve().then(()=>B),void 0),"s_hn86Ek9tWtc",[i,n,t]));I(s(()=>l(()=>Promise.resolve().then(()=>te),void 0),"s_gJeyuPsSFv8",[o,t])),I(s(()=>l(()=>Promise.resolve().then(()=>J),void 0),"s_tspPoXd965w",[s(()=>l(()=>Promise.resolve().then(()=>Y),void 0),"s_U6qR0FR2rfk",[i,d,n]),i,n,o,t]));const y=s(()=>l(()=>Promise.resolve().then(()=>X),void 0),"s_vle4qoFzR0w",[i,o,t,r]),O=s(()=>l(()=>Promise.resolve().then(()=>U),void 0),"s_ZJzRoD1INlU",[i,o,t]),k={isSelectedSig:c},P=$(_=>{["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Home","End","PageDown","PageUp","Enter"," "].includes(_.key)&&_.preventDefault()},'e=>{const keys=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Home","End","PageDown","PageUp","Enter"," "];if(keys.includes(e.key)){e.preventDefault();}}'),E=s(()=>l(()=>Promise.resolve().then(()=>V),void 0),"s_eZg2T3MaKko",[i,r,u]);return T(M,k),L("div",{...e,id:a,ref:n,tabIndex:-1,get"aria-selected"(){return c.value},get"aria-disabled"(){return t.disabled===!0?"true":"false"},get"data-selected"(){return c.value?"":void 0},get"data-highlighted"(){return d.value?"":void 0},get"data-disabled"(){return t.disabled?"":void 0},"data-item":!0,role:"option",children:A(D,null,3,"iF_0"),onClick$:[y,t.onClick$],onKeyDown$:[P,E,t.onKeyDown$],onPointerOver$:[O,t.onPointerOver$]},{tabIndex:f,"aria-selected":h(_=>_.value,[c]),"aria-disabled":h(_=>_.disabled===!0?"true":"false",[t]),"data-selected":h(_=>_.value?"":void 0,[c]),"data-highlighted":h(_=>_.value?"":void 0,[d]),"data-disabled":h(_=>_.disabled?"":void 0,[t]),"data-item":f,role:f},0,"iF_1")},N=t=>{const[e]=g();e.value=t.detail},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_Z3hAj4OaBc0:N},Symbol.toStringTag,{value:"Module"})),Z=()=>{var n;const[t,e,i]=g();if(!i.disabled)return t.highlightedIndexSig.value===i._index?((n=e.value)==null||n.focus(),!0):!1},B=Object.freeze(Object.defineProperty({__proto__:null,s_hn86Ek9tWtc:Z},Symbol.toStringTag,{value:"Module"})),Q=async()=>{var o;const[t,e,i,n]=g();i.disabled||e.value===null||(t.multiple?(await n.selectionManager$(e.value,"toggle"),(o=t.triggerRef.value)==null||o.focus()):(await n.selectionManager$(e.value,"add"),t.isListboxOpenSig.value=!1))},X=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_vle4qoFzR0w:Q},Symbol.toStringTag,{value:"Module"})),G=async t=>{var a,u,r;const[e,i,n]=g(),[o]=t;if(i.value&&!o.isIntersecting){const c=(a=e.popoverRef.value)==null?void 0:a.getBoundingClientRect(),d=(u=n.value)==null?void 0:u.getBoundingClientRect();if(!c||!d)return;const S=d.top-c.top-c.height/2+d.height/2;(r=e.popoverRef.value)==null||r.scrollBy({top:S,...e.scrollOptions})}},Y=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_U6qR0FR2rfk:G},Symbol.toStringTag,{value:"Module"})),ee=async function(){const[e,i]=g();if(i._index===void 0)throw Error("Qwik UI: Select component item cannot find its proper index.");e.value=i._index},te=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_gJeyuPsSFv8:ee},Symbol.toStringTag,{value:"Module"}));export{v as _hW,ae as a,F as b,H as c,re as d,N as e,Z as f,Q as g,G as h,ee as i,C as s,z as s_eZg2T3MaKko,w as u};
