import{V as m,g as b,_ as T,l as C,P as d,K as t,C as u,h as n,L as _}from"./q-HklCxkIg.js";import{L as g}from"./q-pDFeHnH6.js";const B=m(b(()=>T(()=>import("./q-pTDc6xbS.js"),__vite__mapDeps([])),"s_lhvZLmN5R44")),L=m(b(()=>T(()=>import("./q-M2ZxNOgh.js"),__vite__mapDeps([])),"s_HLnpFzyWYaE")),R=e=>{var f,c,s;if(C(),e.filter===void 0)return d(_,null,3,"BT_0");const a=e.filter.rat.replace("_"," ");let i,r;return e.filter.type=="UeCapabilityFilterLte"?(r=["Requested LTE bands","Reduced Format",`Reduce intra-band
non-contiguous combos`,"Skip fallback combos","Diff fallback combos","Max CCs DL","Max CCs UL","Include NR-DC","Include NE-DC","Omit EN-DC","Include UL Tx switching","Segmentation Allowed"],i=[(f=e.filter.lteBands)==null?void 0:f.map(l=>l.band).join(", "),e.filter.reducedFormat?"True":void 0,e.filter.reducedIntNonContComb?"True":void 0,e.filter.skipFallbackCombRequested?"True":void 0,e.filter.diffFallbackCombList?d(g,{noPagination:!0,noSpoiler:!0,get combos(){return e.filter.diffFallbackCombList},[t]:{combos:u(l=>l.filter.diffFallbackCombList,[e]),noPagination:t,noSpoiler:t}},3,"BT_1"):void 0,(c=e.filter.maxCCsDl)==null?void 0:c.toString(),(s=e.filter.maxCCsUl)==null?void 0:s.toString(),e.filter.includeNrDc?"True":void 0,e.filter.includeNeDc?"True":void 0,e.filter.omitEnDc?"True":void 0,e.filter.uplinkTxSwitchRequest?"True":void 0,e.filter.segAllowed?"True":void 0]):(r=["Requested LTE bands","Requested NR bands","Eutra NR only","Include NR-DC","Include NE-DC","Omit EN-DC","Include UL Tx switching","Segmentation Allowed"],i=[e.filter.lteBands?d(B,{get lteBands(){return e.filter.lteBands},[t]:{lteBands:u(l=>l.filter.lteBands,[e])}},3,"BT_2"):void 0,e.filter.nrBands?d(L,{get nrBands(){return e.filter.nrBands},[t]:{nrBands:u(l=>l.filter.nrBands,[e])}},3,"BT_3"):void 0,e.filter.eutraNrOnly?"True":void 0,e.filter.includeNrDc?"True":void 0,e.filter.includeNeDc?"True":void 0,e.filter.omitEnDc?"True":void 0,e.filter.uplinkTxSwitchRequest?"True":void 0,e.filter.segAllowed?"True":void 0]),i.every(l=>l==null)?n("details",null,{class:"ml-3",open:!0},[n("summary",null,{class:"mt-5 text-[1.2rem]/7 font-bold"},["Rat: ",a],1,null),n("span",null,null,"No known filter present.",3,null)],1,"BT_4"):n("details",null,{class:"ml-3",open:!0},[n("summary",null,{class:"mt-5 text-[1.2rem]/7 font-bold"},["Rat: ",a],1,null),n("table",null,{class:"w-full table-auto border-collapse border border-gray-500 text-left"},n("tbody",null,{class:"whitespace-pre align-text-top"},i.map((l,o)=>l!=null&&n("tr",null,null,[n("th",null,{class:"border-collapse border border-gray-500 p-1.5"},r[o],1,null),n("td",null,{class:"border-collapse border border-gray-500 p-1.5"},l,1,null)],1,o)),1,null),1,null)],1,"BT_5")};export{R as s_PPo1FD9B3nw};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}