import{_ as u}from"./q-Biq04Hab.js";import{c as f,q as o,C as T,l as i,j as t,k as a,d as l,F as C}from"./q-PXVB0oKg.js";const g=f(o(()=>u(()=>import("./q-CjadPsEz.js"),[]),"s_3UzNI81hmEw")),B=f(o(()=>u(()=>import("./q-DW3dHJaP.js").then(e=>e.s),[]),"s_lhvZLmN5R44")),D=f(o(()=>u(()=>import("./q-CyHgzxkO.js"),[]),"s_HLnpFzyWYaE")),L=e=>{var c,m,b;if(T(),e.filter===void 0)return i(C,null,3,"BT_0");const s=e.filter.rat.replace("_"," ");let r,d;return e.filter.type=="UeCapabilityFilterLte"?(d=["Requested LTE bands","Reduced Format",`Reduce intra-band
non-contiguous combos`,"Skip fallback combos","Diff fallback combos","Max CCs DL","Max CCs UL","Include NR-DC","Include NE-DC","Omit EN-DC","Include UL Tx switching","Segmentation Allowed"],r=[(c=e.filter.lteBands)==null?void 0:c.map(n=>n.band).join(", "),e.filter.reducedFormat?"True":void 0,e.filter.reducedIntNonContComb?"True":void 0,e.filter.skipFallbackCombRequested?"True":void 0,e.filter.diffFallbackCombList?i(g,{noPagination:!0,noSpoiler:!0,noSearch:!0,get combos(){return e.filter.diffFallbackCombList},[t]:{noPagination:t,noSpoiler:t,noSearch:t,combos:a(n=>n.filter.diffFallbackCombList,[e])}},3,"BT_1"):void 0,(m=e.filter.maxCCsDl)==null?void 0:m.toString(),(b=e.filter.maxCCsUl)==null?void 0:b.toString(),e.filter.includeNrDc?"True":void 0,e.filter.includeNeDc?"True":void 0,e.filter.omitEnDc?"True":void 0,e.filter.uplinkTxSwitchRequest?"True":void 0,e.filter.segAllowed?"True":void 0]):(d=["Requested LTE bands","Requested NR bands","Eutra NR only","Include NR-DC","Include NE-DC","Omit EN-DC","Include UL Tx switching","Segmentation Allowed"],r=[e.filter.lteBands?i(B,{get lteBands(){return e.filter.lteBands},[t]:{lteBands:a(n=>n.filter.lteBands,[e])}},3,"BT_2"):void 0,e.filter.nrBands?i(D,{get nrBands(){return e.filter.nrBands},[t]:{nrBands:a(n=>n.filter.nrBands,[e])}},3,"BT_3"):void 0,e.filter.eutraNrOnly?"True":void 0,e.filter.includeNrDc?"True":void 0,e.filter.includeNeDc?"True":void 0,e.filter.omitEnDc?"True":void 0,e.filter.uplinkTxSwitchRequest?"True":void 0,e.filter.segAllowed?"True":void 0]),r.every(n=>n==null)?l("details",null,{open:!0,class:"ml-3"},[l("summary",null,{class:"mt-5 text-[1.2rem]/7 font-bold"},["Rat: ",s],1,null),l("span",null,null,"No known filter present.",3,null)],1,"BT_4"):l("details",null,{open:!0,class:"ml-3"},[l("summary",null,{class:"mt-5 text-[1.2rem]/7 font-bold"},["Rat: ",s],1,null),l("table",null,{class:"w-full table-auto border-collapse border border-gray-500 text-left"},l("tbody",null,{class:"whitespace-pre align-text-top"},r.map((n,_)=>n!=null&&l("tr",null,null,[l("th",null,{class:"border-collapse border border-gray-500 p-1.5"},d[_],1,null),l("td",null,{class:"border-collapse border border-gray-500 p-1.5"},n,1,null)],1,_)),1,null),1,null)],1,"BT_5")},R=Object.freeze(Object.defineProperty({__proto__:null,s_PPo1FD9B3nw:L},Symbol.toStringTag,{value:"Module"}));export{g as L,R as s,L as s_PPo1FD9B3nw};
