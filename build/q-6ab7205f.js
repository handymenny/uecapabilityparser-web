import{a as h}from"./q-82afda87.js";import{W as m,r as g,e as n,C as f,m as l,a as o,p as i,_ as p,d as y}from"./q-8f3f0f08.js";import{L as b}from"./q-485cf1e5.js";const x=async()=>{const r="/version";try{return(await h.get(r)).data.version}catch(t){console.error(t),alert(t)}},v=()=>{const r=l(()=>o(()=>Promise.resolve().then(()=>c),void 0),"s_2FkqKIwqRhE"),t=e=>{const a="https://github.com/HandyMenny/uecapabilityparser/";return e.startsWith("nightly-")?a+"releases/tag/"+e:e.startsWith("commit@")?a+"commit/"+e.split("@")[1]:e.match(/\d+.\d+.\d+/)?a+"releases/tag/v"+e:a},u=e=>e.startsWith("nightly-")?e.substring(8).replace(/-/g,""):e.startsWith("commit@")?e.substring(7):e,s=m(void 0);g(l(()=>o(()=>Promise.resolve().then(()=>c),void 0),"s_e0xoaZ7UNJs",[r,s]));const _={}.PUBLIC_CREDIT,d={}.PUBLIC_CREDIT_URL;return n("header",null,{class:"flex justify-between bg-black px-5 py-2"},[n("div",null,null,[f(b,{children:"UE Capability Parser",class:"text-xl text-white hover:underline active:underline",href:"/",title:"UE Capability Parser",[i]:{class:i,href:i,title:i}},3,"SN_0"),s.value!==void 0&&n("a",{href:t(s.value)},{class:"ml-0.5 align-[super] text-sm text-gray-300 hover:underline active:underline",target:"_blank"},u(s.value),1,"SN_1")],1,null),n("a",{href:d},{class:"text-xl text-white hover:underline active:underline",target:"_blank"},_,1,null)],1,"SN_2")},E=async()=>{const[r,t]=p();t.value=await r()},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_2FkqKIwqRhE:x,s_ceU05TscGYE:v,s_e0xoaZ7UNJs:E},Symbol.toStringTag,{value:"Module"}));export{y as _hW,x as s_2FkqKIwqRhE,v as s_ceU05TscGYE,E as s_e0xoaZ7UNJs};
