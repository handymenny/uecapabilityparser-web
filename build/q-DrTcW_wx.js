import{C as h}from"./q-Dr-1UgU2.js";import{f as i,E as u,K as r,O as l,e as m}from"./q-B2JE0ZoP.js";import{c as S,a as c,b as d,d as M,e as T,f as D,g as b,h as U,i as L,j as f,k as g}from"./q-DYnISpNU.js";const O=e=>{if(i(),e.combos===void 0||e.combos.length==0)return u(m,null,3,"YJ_0");const a=["NR DL","MIMO DL","MOD DL (QAM)","SCS DL (kHz)","BW DL (MHz)","NR UL","MIMO UL","MOD UL (QAM)","SCS UL (kHz)","BW UL (MHz)","BCS"],o=[];for(let t=0;t<a.length;t++)o.push([]);return e.combos.forEach(({components:t,bcs:n})=>{let s=0;o[s++].push(S(t,!0)),o[s++].push(c(t,!0)),o[s++].push(d(t,!0)),o[s++].push(M(t)),o[s++].push(T(t)),o[s++].push(D(t,!0)),o[s++].push(b(t,!0)),o[s++].push(U(t,!0)),o[s++].push(L(t)),o[s++].push(f(t)),o[s++].push(g(n))}),u(h,{get title(){return e.title},hideEmpty:!0,headers:a,data:o,get pagination(){return e.combos&&e.combos.length>25},coloredBands:!0,[r]:{title:l(t=>t.title,[e]),hideEmpty:r,pagination:l(t=>t.combos&&t.combos.length>25,[e]),coloredBands:r}},3,"YJ_1")};export{O as s_ET5UV9wpTS8};