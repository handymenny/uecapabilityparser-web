import{C as l}from"./q-0abpAcEl.js";import{t as C,d as i,F as p,b as e}from"./q-DiiDRB9g.js";import"./q-C7i0xNVT.js";const B=n=>{if(C(),!n.nrBands.some(a=>a.maxBwDl??a.maxBwUl??a.maxCCsDl??a.maxCCsUl!=null))return i(p,{children:n.nrBands.map(a=>a.band).join(", ")},1,"ZI_0");const r=["Band","BW DL (MHz)","BW UL (MHz)","CCs DL","CCs UL"],t=[];for(let a=0;a<r.length;a++)t.push([]);return n.nrBands.forEach(a=>{var o,m,d,h;let s=0;t[s++].push(a.band.toString()),t[s++].push(((o=a.maxBwDl)==null?void 0:o.toString())??""),t[s++].push(((m=a.maxBwUl)==null?void 0:m.toString())??""),t[s++].push(((d=a.maxCCsDl)==null?void 0:d.toString())??""),t[s++].push(((h=a.maxCCsUl)==null?void 0:h.toString())??"")}),i(l,{hideEmpty:!0,headers:r,data:t,noSpoiler:!0,noSearch:!0,[e]:{hideEmpty:e,noSpoiler:e,noSearch:e}},3,"ZI_1")};export{B as s_HLnpFzyWYaE};
