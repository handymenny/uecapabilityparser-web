import{_ as r}from"./q-1dnJZ1Td.js";import{g as c,G as n,h as p,j as u,q as a,l as i}from"./q-BmWDAmC3.js";const d=["horizontal","vertical"],S=o=>{const e=c(o,["orientation","decorative"]),t=n(a(()=>r(()=>Promise.resolve().then(()=>m),void 0),"s_CHUpN9GBzYs",[o])),s=n(a(()=>r(()=>Promise.resolve().then(()=>P),void 0),"s_BS2PtnkZRfs",[t])),_=n(a(()=>r(()=>Promise.resolve().then(()=>h),void 0),"s_F04ILoH0ae4",[s,o]));return p("div",{get"data-orientation"(){return t.value},..._.value,...e},{"data-orientation":u(l=>l.value,[t])},0,"0A_0")},v=()=>{const[o]=i();return d.includes(o.orientation??"horizontal")?o.orientation??"horizontal":(console.warn(`Invalid prop 'orientation' of value '${o.orientation??"horizontal"}' supplied to 'separator',
        expected one of:
        - horizontal
        - vertical

        Defaulting to 'horizontal'.`),"horizontal")},m=Object.freeze(Object.defineProperty({__proto__:null,s_CHUpN9GBzYs:v},Symbol.toStringTag,{value:"Module"})),f=()=>{const[o,e]=i();return e.decorative?{role:"none"}:{role:"separator","aria-orientation":o.value}},h=Object.freeze(Object.defineProperty({__proto__:null,s_F04ILoH0ae4:f},Symbol.toStringTag,{value:"Module"})),z=()=>{const[o]=i();return o.value==="vertical"?o.value:void 0},P=Object.freeze(Object.defineProperty({__proto__:null,s_BS2PtnkZRfs:z},Symbol.toStringTag,{value:"Module"}));export{f as a,z as b,v as s,S as s_miNk6V2udYk};
