import{u as i}from"./q-DhVgi9SL.js";const v=()=>{const[e]=i();if(!e.scrollerRef.value)return;const o=e.scrollerRef.value.scrollLeft,s=e.slideRefsArray.value;let t=0,n=1/0;s.forEach((r,l)=>{if(!r.value)return;const a=r.value.offsetLeft,c=Math.abs(o-a);c<n&&(n=c,t=l)}),e.currentIndexSig.value!==t&&(e.currentIndexSig.value=t)};export{v as s_1V8fSHWSLgg};