import"./q-C7i0xNVT.js";import"./q-DhVgi9SL.js";import{g as n}from"./q-BKjajERW.js";const s=(f,u,m,{indexToSelect:r,tabIdToSelect:p},t)=>{if(p&&(r=f.findIndex(b=>b.tabId===p)),typeof r!="number"||r&&r<0&&(!t||(r=u.value,typeof r!="number")))return;const a=n(f,r);a&&(a.index!==u.value||a.tabId!==m.value)&&(u.value=a.index,m.value=a.tabId)};export{s};