import{u as v}from"./q-DhVgi9SL.js";const S=async()=>{const[e,s,a,c]=v();if(!e.scrollerRef.value)return;c.value=!1,window.removeEventListener("mousemove",a);const n=e.scrollerRef.value,r=e.slideRefsArray.value,f=n.scrollLeft;let t=0,i=1/0;for(let o=0;o<r.length;o++){const d=await s(o),l=Math.abs(f-d);l<i&&(t=o,i=l)}const u=await s(t);n.scrollTo({left:u,behavior:"smooth"}),e.currentIndexSig.value=t};export{S as s_NNjOjRTqUIE};
