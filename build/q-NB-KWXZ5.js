import{C as h}from"./q-k-lyyoSW.js";import{l as S,P as a,K as u,C as i,L as m}from"./q-OIKTu0zg.js";import{c as n,a as M,b as T,d as c,e as p,f as D,g as L,h as d,i as U,j as f,k as b}from"./q-vC9qdW0I.js";const k=r=>{if(S(),r.combos===void 0||r.combos.length==0)return a(m,null,3,"YJ_0");const e=["NR DL","MIMO DL","MOD DL (QAM)","SCS DL (kHz)","BW DL (MHz)","NR UL","MIMO UL","MOD UL (QAM)","SCS UL (kHz)","BW UL (MHz)","BCS"],s=[];for(let t=0;t<e.length;t++)s.push([]);return r.combos.forEach(({components:t,bcs:l})=>{let o=0;s[o++].push(n(t,!0)),s[o++].push(M(t,!0)),s[o++].push(T(t,!0)),s[o++].push(c(t)),s[o++].push(p(t)),s[o++].push(D(t,!0)),s[o++].push(L(t,!0)),s[o++].push(d(t,!0)),s[o++].push(U(t)),s[o++].push(f(t)),s[o++].push(b(l))}),a(h,{get title(){return r.title},data:s,headers:e,hideEmpty:!0,[u]:{hideEmpty:u,title:i(t=>t.title,[r])}},3,"YJ_1")};export{k as s_ET5UV9wpTS8};