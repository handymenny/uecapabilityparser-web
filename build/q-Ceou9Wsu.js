import{K as n}from"./q-CgMFKcQd.js";import{f as c,a as b}from"./q-BKjajERW.js";import{u as l}from"./q-DhVgi9SL.js";const x=(o,d)=>{const[t,u,a]=l(),f=u.value,i=t.tabInfoList.findIndex(s=>s.tabId===d);let r;!a&&o===n.ArrowRight||a&&o===n.ArrowDown?r=c(t.tabInfoList,i+1,{wrap:!0}):!a&&o===n.ArrowLeft||a&&o===n.ArrowUp?r=b(t.tabInfoList,i,{wrap:!0}):o===n.Home||o===n.PageUp?r=c(t.tabInfoList,0):(o===n.End||o===n.PageDown)&&(r=b(t.tabInfoList,t.tabInfoList.length)),r&&p(r.index);function p(s){const e=f==null?void 0:f.children[0];(e==null?void 0:e.children[s]).focus()}};export{x as s_ufjEVm17vpM};