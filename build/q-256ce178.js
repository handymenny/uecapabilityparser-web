import{C as F}from"./q-82c937d4.js";import{h as R,C as u,p as M,g as L,f as D}from"./q-8f3f0f08.js";import{c,a as i,b as m,d as n,e as U,f as p,g as d,h as f,i as T,j as C,k as b}from"./q-3205f865.js";const g=e=>{if(R(),e.combos===void 0||e.combos.length==0)return u(D,null,3,"l2_0");const a=["FR1 DL","FR1 MIMO DL","FR1 MOD DL (QAM)","FR1 SCS DL (kHz)","FR1 BW DL (MHz)","FR2 DL","FR2 MIMO DL","FR2 MOD DL (QAM)","FR2 SCS DL (kHz)","FR2 BW DL (MHz)","FR1 UL","FR1 MIMO UL","FR1 MOD UL (QAM)","FR1 SCS UL (kHz)","FR1 BW UL (MHz)","FR2 UL","FR2 MIMO UL","FR2 MOD UL (QAM)","FR2 SCS UL (kHz)","FR2 BW UL (MHz)","BCS"],t=[];for(let r=0;r<a.length;r++)t.push([]);return e.combos.forEach(({componentsFr1:r,componentsFr2:l,bcs:S})=>{let s=0;const h=[r,l];h.forEach(o=>{t[s++].push(c(o,!0)),t[s++].push(i(o,!0)),t[s++].push(m(o,!0)),t[s++].push(n(o)),t[s++].push(U(o))}),h.forEach(o=>{t[s++].push(p(o,!0)),t[s++].push(d(o,!0)),t[s++].push(f(o,!0)),t[s++].push(T(o)),t[s++].push(C(o))}),t[s++].push(b(S))}),u(F,{get title(){return e.title},data:t,headers:a,hideEmpty:!0,[M]:{hideEmpty:M,title:L(r=>r.title,[e])}},3,"l2_1")};export{g as s_Zdgphc4Ye00};