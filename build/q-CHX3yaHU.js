import{l as c,q as d,_hW as h}from"./q-BBXjioMF.js";import{_ as f}from"./q-9FN2Buzd.js";const p=async()=>{var g;const[e,n,t,s,a,o]=c();clearTimeout(a.value),a.value=setTimeout(()=>{t.value=""},1e3);let i=-1;const r=t.value.length,u=t.value.toLowerCase();for(const[v,l]of e.itemsMapSig.value)if(((g=l.displayValue)==null?void 0:g.toLowerCase().substring(0,r))===u){i=v;break}if(i!==-1){e.highlightedIndexSig.value=i,e.isListboxOpenSig.value||await o(i,"add");return}t.value=s,n()},S=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_yRP5CAz0Vwg:p},Symbol.toStringTag,{value:"Module"})),C=()=>{const[e]=c();return Array.from(e.itemsMapSig.value.values()).map(n=>{var t;return(t=n.displayValue)==null?void 0:t.slice(0,1).toLowerCase()})},y=async e=>{const[n,t,s,a,o,i]=c();if(a.value+=e,e.length>1)return;const r=d(()=>f(()=>Promise.resolve().then(()=>x),void 0),"s_14FlA75basA",[n,t,s,e,i]),u=d(()=>f(()=>Promise.resolve().then(()=>S),void 0),"s_yRP5CAz0Vwg",[n,r,a,e,o,i]);if(a.value.length===1){r();return}u()},_=async()=>{const[e,n,t,s,a]=c(),o=s.toLowerCase(),i=n.value.indexOf(o);if(i===-1||i===void 0)return null;if(t.value===void 0){t.value=i+1,e.highlightedIndexSig.value=i,e.isListboxOpenSig.value||await a(i,"add");return}const r=t.value-1;if(n.value[r]===s){const v=n.value.slice(t.value).indexOf(s);if(v!==-1){const l=v+t.value;e.highlightedIndexSig.value=l,e.isListboxOpenSig.value||await a(l,"add"),t.value=l+1;return}t.value=void 0,e.highlightedIndexSig.value=i,e.isListboxOpenSig.value||await a(i,"add");return}t.value=i+1,e.highlightedIndexSig.value=i,e.isListboxOpenSig.value||await a(i,"add")},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_14FlA75basA:_},Symbol.toStringTag,{value:"Module"}));export{h as _hW,y as a,_ as b,C as s,p as s_yRP5CAz0Vwg};
