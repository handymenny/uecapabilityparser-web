import{C as h}from"./q-82c937d4.js";import{h as m,C as o,p as r,g as n,f as p}from"./q-8f3f0f08.js";import{m as i,a as u,b as d,c as C,p as D,d as M}from"./q-57058c06.js";const S=a=>{if(m(),a.bands===void 0||a.bands.length==0)return o(p,null,3,"22_0");const l=["Band","MIMO DL","MOD DL","BWs DL (MHz)","MIMO UL","MOD UL","BWs UL (MHz)","Power Class","Max Uplink Duty Cycle","DSS"],s=[];for(let t=0;t<l.length;t++)s.push([]);return a.bands.forEach(t=>{let e=0;s[e++].push(t.band.toString()),s[e++].push(i(t.mimoDl)),s[e++].push(u(t.modulationDl)),s[e++].push(d(t.bandwidths).join(`
`)),s[e++].push(i(t.mimoUl)),s[e++].push(u(t.modulationUl)),s[e++].push(C(t.bandwidths).join(`
`)),s[e++].push(D(t.powerClass)),s[e++].push(M(t.maxUplinkDutyCycle)),s[e++].push(t.rateMatchingLteCrs===!0?"True":"False")}),o(h,{get title(){return a.title},data:s,headers:l,hideEmpty:!0,[r]:{hideEmpty:r,title:n(t=>t.title,[a])}},3,"22_1")};export{S as s_dBlYdkjOYyM};