import{a4 as u}from"./q-POVI9Nn8.js";import{l as i,F as c,A as e,k as p,C as d,y as r,_ as n}from"./q-kBRCEvCZ.js";const m=()=>{const[o]=i();return u.includes(o.orientation??"horizontal")?o.orientation??"horizontal":(console.warn(`Invalid prop 'orientation' of value '${o.orientation??"horizontal"}' supplied to 'separator',
        expected one of:
        - horizontal
        - vertical

        Defaulting to 'horizontal'.`),"horizontal")},P=()=>{const[o]=i();return o.value==="vertical"?o.value:void 0},f=()=>{const[o,t]=i();return t.decorative?{role:"none"}:{role:"separator","aria-orientation":o.value}},h=o=>{const t=c(o,["orientation","decorative"]),s=e(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_D24KQnvZKfo",[o])),l=e(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_HeX0Zr0PaZI",[s])),_=e(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_mE8oaukqj3U",[l,o]));return p("div",{..._.value,...t},{"data-orientation":d(v=>v.value,[s],"p0.value")},0,"FC_0")},a=Object.freeze(Object.defineProperty({__proto__:null,s_BmtaV0nCbAI:h,s_D24KQnvZKfo:m,s_HeX0Zr0PaZI:P,s_mE8oaukqj3U:f},Symbol.toStringTag,{value:"Module"}));export{h as s_BmtaV0nCbAI,m as s_D24KQnvZKfo,P as s_HeX0Zr0PaZI,f as s_mE8oaukqj3U};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
