import{C as S}from"./q-O8q9wOWb.js";import{e as F,E as u,K as a,M,f as i}from"./q-Kd_xxsJC.js";import{c as m,a as L,b as R,d as D,e as d,f as U,g as f,h as T,i as b,j as g,k as B}from"./q-6uZx19wW.js";const O=r=>{if(F(),r.combos===void 0||r.combos.length==0)return u(i,null,3,"l2_0");const n=["FR1 DL","FR1 MIMO DL","FR1 MOD DL (QAM)","FR1 SCS DL (kHz)","FR1 BW DL (MHz)","FR2 DL","FR2 MIMO DL","FR2 MOD DL (QAM)","FR2 SCS DL (kHz)","FR2 BW DL (MHz)","FR1 UL","FR1 MIMO UL","FR1 MOD UL (QAM)","FR1 SCS UL (kHz)","FR1 BW UL (MHz)","FR2 UL","FR2 MIMO UL","FR2 MOD UL (QAM)","FR2 SCS UL (kHz)","FR2 BW UL (MHz)","BCS"],t=[];for(let e=0;e<n.length;e++)t.push([]);return r.combos.forEach(({componentsFr1:e,componentsFr2:h,bcs:c})=>{let o=0;const l=[e,h];l.forEach(s=>{t[o++].push(m(s,!0)),t[o++].push(L(s,!0)),t[o++].push(R(s,!0)),t[o++].push(D(s)),t[o++].push(d(s))}),l.forEach(s=>{t[o++].push(U(s,!0)),t[o++].push(f(s,!0)),t[o++].push(T(s,!0)),t[o++].push(b(s)),t[o++].push(g(s))}),t[o++].push(B(c))}),u(S,{get title(){return r.title},data:t,headers:n,hideEmpty:!0,get pagination(){return r.combos&&r.combos.length>25},coloredBands:!0,[a]:{coloredBands:a,hideEmpty:a,pagination:M(e=>e.combos&&e.combos.length>25,[r]),title:M(e=>e.title,[r])}},3,"l2_1")};export{O as s_Zdgphc4Ye00};
