import{u as v,q as g}from"./q-CqQeKCeh.js";import{_ as c}from"./q-C7i0xNVT.js";const x=()=>{const[e]=v();return e.optionsSig.value.map(n=>{var i;return(i=n.displayValue)==null?void 0:i.slice(0,1).toLowerCase()})},S=()=>{const[e,n,i,l]=v(),s=l.toLowerCase(),t=n.value.indexOf(s);if(t===-1||t===void 0)return null;if(i.value===void 0){i.value=t+1,e.highlightedIndexSig.value=t,e.isListboxOpenSig.value||(e.selectedIndexSig.value=t);return}const r=i.value-1;if(n.value[r]===l){const a=n.value.slice(i.value).indexOf(l);if(a!==-1){const d=a+i.value;e.highlightedIndexSig.value=d,e.isListboxOpenSig.value||(e.selectedIndexSig.value=d),i.value=d+1;return}i.value=void 0,e.highlightedIndexSig.value=t,e.isListboxOpenSig.value||(e.selectedIndexSig.value=t);return}i.value=t+1,e.highlightedIndexSig.value=t,e.isListboxOpenSig.value||(e.selectedIndexSig.value=t)},f=()=>{const[e,n,i,l,s]=v();clearTimeout(s.value),s.value=setTimeout(()=>{i.value=""},1e3);const t=e.optionsSig.value.findIndex(r=>{var a;const o=i.value.length,u=(a=r.displayValue)==null?void 0:a.toLowerCase();return(u==null?void 0:u.substring(0,o))===i.value});if(t!==-1){e.highlightedIndexSig.value=t,e.isListboxOpenSig.value||(e.selectedIndexSig.value=t);return}i.value=l,n()},p=e=>{const[n,i,l,s,t]=v();if(s.value+=e,e.length>1)return;const r=g(()=>c(()=>Promise.resolve().then(()=>h),void 0),"s_u3Yem2R3t0I",[n,i,l,e]),o=g(()=>c(()=>Promise.resolve().then(()=>h),void 0),"s_GXSrSUeUxTA",[n,r,s,e,t]);if(s.value.length===1){r();return}o()},h=Object.freeze(Object.defineProperty({__proto__:null,s_36QJMCDAVJM:x,s_GXSrSUeUxTA:f,s_hlhyFG4lrzE:p,s_u3Yem2R3t0I:S},Symbol.toStringTag,{value:"Module"}));export{x as s_36QJMCDAVJM,f as s_GXSrSUeUxTA,p as s_hlhyFG4lrzE,S as s_u3Yem2R3t0I};