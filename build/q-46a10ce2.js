import{C as F}from"./q-656e2b08.js";import{f as L,U as M,o as h,O as R,d as D}from"./q-96b3d98b.js";import{c,a as n,b as U,d as i,e as m,f as d,g as p,h as f,i as T,j as O,k as b}from"./q-be23cf9e.js";const C=e=>{if(L(),e.combos===void 0||e.combos.length==0)return M(D,null,3,"l2_0");const a=["FR1 DL","FR1 MIMO DL","FR1 MOD DL (QAM)","FR1 SCS DL (kHz)","FR1 BW DL (MHz)","FR2 DL","FR2 MIMO DL","FR2 MOD DL (QAM)","FR2 SCS DL (kHz)","FR2 BW DL (MHz)","FR1 UL","FR1 MIMO UL","FR1 MOD UL (QAM)","FR1 SCS UL (kHz)","FR1 BW UL (MHz)","FR2 UL","FR2 MIMO UL","FR2 MOD UL (QAM)","FR2 SCS UL (kHz)","FR2 BW UL (MHz)","BCS"],t=[];for(let r=0;r<a.length;r++)t.push([]);return e.combos.forEach(({componentsFr1:r,componentsFr2:l,bcs:S})=>{let s=0;const u=[r,l];u.forEach(o=>{t[s++].push(c(o,!0)),t[s++].push(n(o,!0)),t[s++].push(U(o,!0)),t[s++].push(i(o)),t[s++].push(m(o))}),u.forEach(o=>{t[s++].push(d(o,!0)),t[s++].push(p(o,!0)),t[s++].push(f(o,!0)),t[s++].push(T(o)),t[s++].push(O(o))}),t[s++].push(b(S))}),M(F,{get title(){return e.title},hideEmpty:!0,headers:a,data:t,[h]:{title:R(r=>r.title,[e]),hideEmpty:h}},3,"l2_1")};export{C as s_Zdgphc4Ye00};
