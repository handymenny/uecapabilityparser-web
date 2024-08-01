function E(e){switch(e==null?void 0:e.type){case"all":return"All";case"single":return e.value.toString();case"multi":return e.value.join(", ");default:return""}}function m(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function w(e,t,n,s){const r=[];if(t>=n){const l=s==="dl"?e.bwClassDl:e.bwClassUl,u=`<span class="font-semibold B${e.band}">${e.band}(${t}${l})</span>`;r.push(u)}else for(let l=0;l<t;l++){const u=s==="dl"?e.bwClassDl:e.bwClassUl,o=`<span class="font-semibold B${e.band}">${e.band}${u}</span>`;r.push(o)}return r}function i(e,t,n){const s=e.basicFeature.length===1,r=e.basicFeature.join("+"),l=[];let u;if(n<=t){const o=t*e.multiplier;s?u=`${r}(*${o})`:u=`${r}+`.repeat(o).slice(0,-1),l.push(u)}else{s&&n<=e.multiplier?u=`${r}(*${e.multiplier})`:u=`${r}+`.repeat(e.multiplier).slice(0,-1);for(let o=0;o<t;o++)l.push(u)}return l}function F(e){switch(e){case"A":return 1;case"B":case"C":return 2;case"D":return 3;case"E":return 4;case"F":return 5;default:throw"InvalidValue"}}function A(e){switch(e){case"A":return 1;case"B":case"C":return 2;case"D":case"G":case"M":return 3;case"E":case"H":case"N":return 4;case"I":case"O":return 5;case"J":return 6;case"K":return 7;case"L":return 8;default:throw"InvalidValue"}}function M(e){switch(e){case"A":return 1;case"B":case"D":case"G":case"O":case"R2":return 2;case"C":case"E":case"H":case"P":case"R3":return 3;case"V":case"F":case"I":case"Q":case"R4":return 4;case"W":case"R":case"J":case"R5":return 5;case"S":case"K":case"R6":return 6;case"T":case"L":case"R7":return 7;case"U":case"M":case"R8":return 8;case"R9":return 9;case"R10":return 10;case"R11":return 11;case"R12":return 12;default:throw"InvalidValue"}}function d(e){switch(e){case"qam16":return"16";case"qam64":return"64";case"qam256":return"256";case"qam1024":return"1024";default:return""}}function y(e,t,n,s=!1){if(t===void 0||n===void 0||t.type==="empty")return null;const r=f(e,n,s),l=t.value;let u;return Array.isArray(l)?u={basicFeature:l.map(o=>o.toString()),multiplier:1}:u={basicFeature:[l.toString()],multiplier:r},u}function f(e,t,n){let s;return n?e<=256?s=A(t):s=M(t):s=F(t),s}function S(e,t,n,s=!1){if(t===void 0||n===void 0||t.type==="empty")return null;const r=f(e,n,s),l=t.value;let u;return Array.isArray(l)?u={basicFeature:l.map(U=>d(U)),multiplier:1}:u={basicFeature:[d(l)],multiplier:r},u}function v(e,t,n){if(t===void 0||n===void 0)return null;const s=f(e,n,!0);return{basicFeature:[t.toString()],multiplier:s}}function p(e,t,n){if(t===void 0||n===void 0)return null;const s=f(e,n,!0);return{basicFeature:[t.toString()],multiplier:s}}function C(e,t,n){return t===void 0||n===void 0||t.type==="empty"?null:t.type=="single"?p(e,t.value,n):{basicFeature:t.value.map(u=>u.toString()),multiplier:1}}function x(e,t,n){return e.band===t.band&&e.bwClassDl===t.bwClassDl&&g(e.mimoDl,t.mimoDl)&&B(e.modulationDl,t.modulationDl)&&(!n||D(e,t,!0))}function T(e,t,n){return e.band===t.band&&e.bwClassUl===t.bwClassUl&&g(e.mimoUl,t.mimoUl)&&B(e.modulationUl,t.modulationUl)&&(!n||D(e,t,!1))}function g(e,t){if(e===void 0||t===void 0||e.type==="empty"||t.type==="empty")return(e==null?void 0:e.type)===(t==null?void 0:t.type);const n=e.value,s=t.value;if(Array.isArray(n)&&Array.isArray(s)){if(!m(n,s))return!1}else if(n!==s)return!1;return!0}function B(e,t){if(e===void 0||t===void 0||(e==null?void 0:e.type)==="empty"||(t==null?void 0:t.type)==="empty")return(e==null?void 0:e.type)===(t==null?void 0:t.type);const n=e.value,s=t.value;if(Array.isArray(n)&&Array.isArray(s)){if(!m(n,s))return!1}else if(n!==s)return!1;return!0}function h(e,t){if(e===void 0||t===void 0||(e==null?void 0:e.type)==="empty"||(t==null?void 0:t.type)==="empty")return(e==null?void 0:e.type)===(t==null?void 0:t.type);const n=e.value,s=t.value;if(Array.isArray(n)&&Array.isArray(s)){if(!m(n,s))return!1}else if(n!==s)return!1;return!0}function D(e,t,n){return t.maxScs===e.maxScs&&t.bw90mhzSupported===e.bw90mhzSupported&&t.maxBw===e.maxBw&&(!n||h(t.maxBwDl,e.maxBwDl))&&(n||h(t.maxBwUl,e.maxBwUl))}function a(e,t){const n=[];let s;for(const r of e)r.bwClassDl!==void 0&&(s!=null&&x(r,s,t)?n.at(-1).push(r):n.push([r]),s=r);return n}function c(e,t){const n=[];let s;for(const r of e)r.bwClassUl!==void 0&&(s!==void 0&&T(r,s,t)?n.at(-1).push(r):n.push([r]),s=r);return n}function q(e,t){return a(e,t).flatMap(s=>w(s[0],s.length,4,"dl")).join(" + ")}function j(e,t){return c(e,t).flatMap(s=>w(s[0],s.length,4,"ul")).join(" + ")}function $(e,t=!1){const n=[];return a(e,t).flatMap(s=>{const r=s[0],l=y(r.band,r.mimoDl,r.bwClassDl,t);l!==null&&n.push(...i(l,s.length,4))}),n.join(" + ")}function R(e,t=!1){const n=[];return c(e,t).forEach(s=>{const r=s[0],l=y(r.band,r.mimoUl,r.bwClassUl,t);l!==null&&n.push(...i(l,s.length,4))}),n.join(" + ")}function b(e,t=!1){const n=[];a(e,t).forEach(l=>{const u=l[0],o=S(u.band,u.modulationDl,u.bwClassDl,t);o!==null&&(o.basicFeature.length===1?n.push(o.basicFeature[0]):n.push(...i(o,l.length,1)))});const s=n[0];return n.every(l=>l===s)?s:n.join(" + ")}function I(e,t=!1){const n=[];c(e,t).forEach(l=>{const u=l[0],o=S(u.band,u.modulationUl,u.bwClassUl,t);o!==null&&(o.basicFeature.length===1?n.push(o.basicFeature[0]):n.push(...i(o,l.length,4)))});const s=n[0];return n.every(l=>l===s)?s:n.join(" + ")}function V(e){const t=[];return a(e,!0).forEach(n=>{const s=n[0],r=v(s.band,s.maxScs,s.bwClassDl);r!==null&&t.push(...i(r,n.length,4))}),t.join(" + ")}function O(e){const t=[];return c(e,!0).forEach(n=>{const s=n[0],r=v(s.band,s.maxScs,s.bwClassUl);r!==null&&t.push(...i(r,n.length,4))}),t.join(" + ")}function z(e){const t=[];return a(e,!0).forEach(n=>{const s=n[0];let r=null;s.maxBwDl!=null||s.maxBwUl!=null?r=C(s.band,s.maxBwDl,s.bwClassDl):r=p(s.band,s.maxBw,s.bwClassDl),r!==null&&t.push(...i(r,n.length,4))}),t.join(" + ")}function G(e){const t=[];return c(e,!0).forEach(n=>{const s=n[0];let r=null;s.maxBwDl!=null||s.maxBwUl!=null?r=C(s.band,s.maxBwUl,s.bwClassUl):r=p(s.band,s.maxBw,s.bwClassUl),r!==null&&t.push(...i(r,n.length,4))}),t.join(" + ")}export{$ as a,b,q as c,V as d,z as e,j as f,R as g,I as h,O as i,G as j,E as k};
