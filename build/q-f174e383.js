import{o,h as m,_ as b,i as _,j as d,Y as i,S as u,f as n,z as C}from"./q-769832a6.js";import{L as B}from"./q-312d1378.js";const D=o(m(()=>b(()=>import("./q-b221beaf.js"),["build/q-b221beaf.js","build/q-f4da849e.js","build/q-769832a6.js"]),"s_lhvZLmN5R44")),L=o(m(()=>b(()=>import("./q-2f5f02e0.js"),["build/q-2f5f02e0.js","build/q-f4da849e.js","build/q-769832a6.js"]),"s_HLnpFzyWYaE")),g=e=>{var f,c,s;if(_(),e.filter===void 0)return d(C,null,3,"BT_0");const a=e.filter.rat.replace("_"," ");let t,r;return e.filter.type=="UeCapabilityFilterLte"?(r=["Requested LTE bands","Reduced Format",`Reduce intra-band
non-contiguous combos`,"Skip fallback combos","Diff fallback combos","Max CCs DL","Max CCs UL","Include NR-DC","Include NE-DC","Omit EN-DC","Include UL Tx switching","Segmentation Allowed"],t=[(f=e.filter.lteBands)==null?void 0:f.map(l=>l.band).join(", "),e.filter.reducedFormat?"True":void 0,e.filter.reducedIntNonContComb?"True":void 0,e.filter.skipFallbackCombRequested?"True":void 0,e.filter.diffFallbackCombList?d(B,{noSpoiler:!0,get combos(){return e.filter.diffFallbackCombList},[i]:{combos:u(l=>l.filter.diffFallbackCombList,[e]),noSpoiler:i}},3,"BT_1"):void 0,(c=e.filter.maxCCsDl)==null?void 0:c.toString(),(s=e.filter.maxCCsUl)==null?void 0:s.toString(),e.filter.includeNrDc?"True":void 0,e.filter.includeNeDc?"True":void 0,e.filter.omitEnDc?"True":void 0,e.filter.uplinkTxSwitchRequest?"True":void 0,e.filter.segAllowed?"True":void 0]):(r=["Requested LTE bands","Requested NR bands","Eutra NR only","Include NR-DC","Include NE-DC","Omit EN-DC","Include UL Tx switching","Segmentation Allowed"],t=[e.filter.lteBands?d(D,{get lteBands(){return e.filter.lteBands},[i]:{lteBands:u(l=>l.filter.lteBands,[e])}},3,"BT_2"):void 0,e.filter.nrBands?d(L,{get nrBands(){return e.filter.nrBands},[i]:{nrBands:u(l=>l.filter.nrBands,[e])}},3,"BT_3"):void 0,e.filter.eutraNrOnly?"True":void 0,e.filter.includeNrDc?"True":void 0,e.filter.includeNeDc?"True":void 0,e.filter.omitEnDc?"True":void 0,e.filter.uplinkTxSwitchRequest?"True":void 0,e.filter.segAllowed?"True":void 0]),t.every(l=>l==null)?n("details",null,{class:"ml-3",open:!0},[n("summary",null,{class:"mt-5 text-[1.2rem]/7 font-bold"},["Rat: ",a],1,null),n("span",null,null,"No known filter present.",3,null)],1,"BT_4"):n("details",null,{class:"ml-3",open:!0},[n("summary",null,{class:"mt-5 text-[1.2rem]/7 font-bold"},["Rat: ",a],1,null),n("table",null,{class:"w-full table-auto border-collapse border border-gray-500 text-left"},n("tbody",null,{class:"whitespace-pre align-text-top"},t.map((l,T)=>l!=null&&n("tr",null,null,[n("th",null,{class:"border-collapse border border-gray-500 p-1.5"},r[T],1,null),n("td",null,{class:"border-collapse border border-gray-500 p-1.5"},l,1,null)],1,"index")),1,null),1,null)],1,"BT_5")};export{g as s_PPo1FD9B3nw};
