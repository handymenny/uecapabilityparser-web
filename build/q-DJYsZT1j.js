import{l as T,c as _,q as o,B as O,r as m,G as c,k as i,i as t,j as s,F as f}from"./q-BBXjioMF.js";import{A}from"./q-DBW3oCqs.js";import{i as N,a as p,b as L,c as d,d as I,e as R,f as B,g as E}from"./q-DrXMT18O.js";import{_ as n}from"./q-xgGvDfYG.js";import{S as b,T as M}from"./q-Whr8Rk-2.js";const x=async e=>{const[r,a]=T();if(N(e))a.value="numeric";else if(p(e))a.value="text";else if(L(e))a.value="date";else if(d(e))a.value="logType";else if(I(e))R(e)?a.value="listSimpleAltTbs":a.value="listSimpleBand";else if(B(e))a.value="listSimpleBand";else if(E(e))a.value=e,r.value=1;else throw a.value="notSupported",new A("Not supported by this demo")},D=Object.freeze(Object.defineProperty({__proto__:null,s_tmirUb0uMzY:x},Symbol.toStringTag,{value:"Module"})),g=_(o(()=>n(()=>import("./q-ZS9UCovU.js"),[]),"s_0Id53L2T8rY")),y=_(o(()=>n(()=>import("./q-DYRMlOri.js"),[]),"s_2pjEpZsdP20")),U=_(o(()=>n(()=>import("./q-CQNfjsqO.js"),[]),"s_C0gQ0bjzra8")),V=e=>{O();const r=[{label:"EQUALS",value:"EQUALS"},{label:"NOT EQUALS",value:"NOT_EQUALS"},{label:"GREATER",value:"GREATER"},{label:"LESS",value:"LESS"},{label:"CONTAINS",value:"CONTAINS"},{label:"NOT CONTAINS",value:"NOT_CONTAINS"},{label:"IS EMPTY",value:"IS_EMPTY"},{label:"IS NOT EMPTY",value:"IS_NOT_EMPTY"},{label:"HAS ANY",value:"HAS_ANY"},{label:"HAS ALL",value:"HAS_ALL"},{label:"HAS NONE",value:"HAS_NONE"}],a=[{label:"LTE CATEGORY DL",value:"LTE_CATEGORY_DL"},{label:"LTE CATEGORY UL",value:"LTE_CATEGORY_UL"},{label:"TIMESTAMP",value:"TIMESTAMP"},{label:"DESCRIPTION",value:"DESCRIPTION"},{label:"LOG TYPE",value:"LOG_TYPE"},{label:"LTE BANDS",value:"LTE_BANDS"},{label:"NR BANDS",value:"NR_BANDS"},{label:"NSA BANDS (from eutra capability)",value:"NSA_BANDS"},{label:"SA BANDS (from eutra capability)",value:"SA_BANDS"},{label:"LTE ALT TBS IND",value:"LTE_ALT_TBS_IND"},{label:"LTE COMBOS",value:"LTE_COMBOS"},{label:"NR COMBOS",value:"NR_COMBOS"},{label:"ENDC COMBOS",value:"ENDC_COMBOS"},{label:"NRDC COMBOS",value:"NRDC_COMBOS"}],S=[{label:"UE Capability Info hexdump",value:"H"},{label:"UE Capability Info from Wireshark",value:"W"},{label:"UE Capability Info from Qtrun NSG/Airscreen",value:"N"},{label:"UE Capability Info from Osix",value:"O"},{label:"UE Capability Info from Qualcomm Tools",value:"QC"},{label:"UE Capability Info from TEMS",value:"T"},{label:"UE Capability Info from Amarisoft",value:"A"},{label:"0xB0CD - LTE RRC Supported CA Combos hexdump",value:"QLTE"},{label:"0xB826 - NR5G RRC Supported CA Combos hexdump",value:"QNR"},{label:"0xB0CD - LTE RRC Supported CA Combos (text)",value:"Q"},{label:"Qct Modem Capabilities (LTE CA Combos)",value:"RF"},{label:"Qualcomm LTE Carrier policy",value:"C"},{label:"Qualcomm NR Cap Prune",value:"CNR"},{label:"28874 nvitem binary",value:"E"},{label:"Mediatek CA_COMB_INFO (text)",value:"M"},{label:"Shannon LTE UE cap config",value:"SHLTE"},{label:"Shannon NR UE cap config",value:"SHNR"}],u=m("numeric"),C=m(1),v=c(o(()=>n(()=>Promise.resolve().then(()=>Q),void 0),"s_6baHZcUfRfQ",[r,u]));return i(f,{children:[i(b,{label:"Field",get name(){return`field-${e.suffix}`},options:a,onInput$:o(()=>n(()=>Promise.resolve().then(()=>D),void 0),"s_tmirUb0uMzY",[C,u]),[t]:{label:t,name:s(l=>`field-${l.suffix}`,[e]),onInput$:t}},3,"2u_0"),i(b,{label:"Comparator",get name(){return`comparator-${e.suffix}`},get options(){return v.value},[t]:{label:t,name:s(l=>`comparator-${l.suffix}`,[e]),options:s(l=>l.value,[v])}},3,"2u_1"),["text","listSimpleBand","listSimpleAltTbs"].includes(u.value)&&i(M,{get label(){return u.value=="text"?"Value":"Values"},get name(){return`value-${e.suffix}`},placeholder:u.value=="listSimpleBand"?"Insert values separated by comma: 7, 8, 20 etc...":u.value=="listSimpleAltTbs"?"Insert values separated by comma: 26a, 33a, 33b":"Insert value",[t]:{label:s(l=>l.value=="text"?"Value":"Values",[u]),name:s(l=>`value-${l.suffix}`,[e])}},3,"2u_2"),u.value=="numeric"&&i(U,{min:0,label:"Value",get name(){return`value-${e.suffix}`},placeholder:"Insert value",[t]:{min:t,label:t,name:s(l=>`value-${l.suffix}`,[e]),placeholder:t}},3,"2u_3"),u.value=="date"&&i(g,{label:"Value",get name(){return`value-${e.suffix}`},placeholder:"Insert value",[t]:{label:t,name:s(l=>`value-${l.suffix}`,[e]),placeholder:t}},3,"2u_4"),u.value=="logType"&&i(b,{label:"Value",get name(){return`value-${e.suffix}`},options:S,[t]:{label:t,name:s(l=>`value-${l.suffix}`,[e])}},3,"2u_5"),E(u.value)&&i(y,{get suffix(){return`${e.suffix}`},get lte(){return["LTE_COMBOS","ENDC_COMBOS"].includes(u.value)},get nr(){return u.value!="LTE_COMBOS"},get nrDc(){return u.value=="NRDC_COMBOS"},label:"Values",[t]:{suffix:s(l=>`${l.suffix}`,[e]),lte:s(l=>["LTE_COMBOS","ENDC_COMBOS"].includes(l.value),[u]),nr:s(l=>l.value!="LTE_COMBOS",[u]),nrDc:s(l=>l.value=="NRDC_COMBOS",[u]),label:t}},3,"2u_6")]},1,"2u_7")},h=()=>{const[e,r]=T(),a=[];switch(r.value){case"numeric":a.push("EQUALS","GREATER","LESS","NOT_EQUALS");break;case"text":a.push("EQUALS","NOT_EQUALS","CONTAINS","NOT_CONTAINS");break;case"date":a.push("GREATER","LESS");break;case"logType":a.push("EQUALS","NOT_EQUALS");break;case"listSimpleBand":case"listSimpleAltTbs":case"LTE_COMBOS":case"NR_COMBOS":case"ENDC_COMBOS":case"NRDC_COMBOS":a.push("HAS_ANY","HAS_ALL","HAS_NONE");break}return e.filter(S=>a.includes(S.value))},Q=Object.freeze(Object.defineProperty({__proto__:null,s_6baHZcUfRfQ:h},Symbol.toStringTag,{value:"Module"}));export{U as N,h as a,V as s,x as s_tmirUb0uMzY};
