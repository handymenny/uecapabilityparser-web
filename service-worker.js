/* Qwik Service Worker */
const appBundles=[["q-121f934d.js",[11]],["q-22ce899d.js",[7,11],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-24170463.js",[11,14,18],["XHwTFp0s9lo"]],["q-31dd0e55.js",[7,11],["zrbrqoaqXSY"]],["q-3273260c.js",[11,24],["rj2Qx06UtnM"]],["q-3abfa776.js",[11]],["q-45aab3b6.js",[]],["q-53c00fdb.js",[11],["3sccYCDd1Z0"]],["q-67a1e08d.js",[]],["q-699a3f8b.js",[11],["VkLNXphUh5s"]],["q-7c438440.js",[11],["ceU05TscGYE"]],["q-7d3ddda8.js",[]],["q-84b25d89.js",[11],["aUF07Es3e94","xm15NHoTGpg"]],["q-86895467.js",[11],["Los8QK00QAE","zO0Hxu5SlN0"]],["q-8909faad.js",[]],["q-8dde491a.js",[11],["xYL1qOwPyDI"]],["q-8fe2dc03.js",[7,11],["AKetNByE5TM"]],["q-9b455c8b.js",[8,11,18],["Zdgphc4Ye00"]],["q-b6c9daca.js",[11]],["q-c6a49c22.js",[11],["y4bcb2aaHyU"]],["q-d56fd61c.js",[],["KnNE9eL0qfc"]],["q-d67b132d.js",[11,14,18],["dBlYdkjOYyM"]],["q-d721fc2f.js",[8,11,18],["3UzNI81hmEw"]],["q-db73d0f4.js",[11],["BTxJdNoqBg8","FPWv3lWNHQg","G3Dh5Lg0SZk","GMaQow7nNzE","Iqiy8FRI5Ek","IZYj7KUqIsg","lzy0FPL3aj4","wW02utqxH8E","yF3n2mNPdaY"]],["q-eac8aebd.js",[11],["a08hikrrgz0","UYNGarXvu4c"]],["q-ec50b07a.js",[11]],["q-f4701641.js",[8,11,18],["ET5UV9wpTS8"]],["q-f554ad6a.js",[11]],["q-f897c394.js",[11],["qPWSbvCeiUw"]],["q-f9371b64.js",[8,11,18],["sD3aCbP01XU"]],["q-fe67c9f9.js",[11],["zWcCKs1Mlpc"]]];
const libraryBundleIds=[1];
const linkBundles=[[/^\/$/,[0,9,27,15]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
