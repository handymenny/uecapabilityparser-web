import{C as n}from"./q-CUyzv6ly.js";import{b as u,d as l,l as r,i as h,F as d}from"./q-DhVgi9SL.js";import{m as i,a as m,p}from"./q-gDnf6pd5.js";import"./q-C7i0xNVT.js";const g=a=>{if(u(),a.bands===void 0||a.bands.length==0)return l(d,null,3,"Sy_0");const e=["Band","MIMO DL","MOD DL","MIMO UL","MOD UL","Power Class"],s=[];for(let t=0;t<e.length;t++)s.push([]);return a.bands.forEach(t=>{let o=0;s[o++].push(t.band.toString()),s[o++].push(i(t.mimoDl)),s[o++].push(m(t.modulationDl)),s[o++].push(i(t.mimoUl)),s[o++].push(m(t.modulationUl)),s[o++].push(p(t.powerClass))}),l(n,{get title(){return a.title},hideEmpty:!0,headers:e,data:s,[r]:{title:h(t=>t.title,[a]),hideEmpty:r}},3,"Sy_1")};export{g as s_XHwTFp0s9lo};
