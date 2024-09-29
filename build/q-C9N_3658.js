import{k as y,d as a,j as D,F as x}from"./q-BBXjioMF.js";function E(e){switch(e){case"H":return"UE Capability hexdump";case"W":return"Wireshark UE Capability";case"N":return"NSG UE Capability";case"C":return"Carrier policy";case"CNR":return"NR Cap Prune";case"E":return"28874 nvitem";case"Q":return"QCAT 0xB0CD";case"QLTE":return"QCAT 0xB0CD hexdump";case"QNR":return"QCAT 0xB826 hexdump";case"M":return"MEDIATEK CA_COMB_INFO";case"O":return"OSIX UE Capability";case"QC":return"QCAT UE Capability";case"T":return"Tems UE Capability";case"A":return"Amarisoft UE Capability";case"RF":return"QCT Modem Capabilities";case"SHNR":return"Shannon NR UE cap config";case"P":return"PCAP";case"DLF":case"QMDL":case"HDF":case"SDM":case"NSG":return"Baseband log"}return"Unknown"}function N(e){return e[0].toUpperCase()+e.substring(1).replace(/([A-Z])/g," $1")}const S=e=>{var d,g,C,b;if(e.cap===void 0||e.cap.parserVersion===void 0)return y(x,null,3,"N1_0");const n=["Group Description","Description","Log Type","Upload Date","Parser Version","Processing time"],m=E(e.cap.logType),h=new Date(e.cap.timestamp).toLocaleString().replace(", "," "),c=e.cap.metadata.description,f=e.cap.metadata.processingTime,l=e.cap.metadata.groupDescription,r=[c==l?void 0:l,c,m,h,e.cap.parserVersion,f],T=["description","processingTime","defaultNR","groupDescription"];Object.keys(e.cap.metadata).forEach(function(t){const s=e.cap.metadata[t];T.includes(t)||(n.push(N(t)),r.push(s))});const o=((d=e.cap.lteca)==null?void 0:d.length)??0,i=((g=e.cap.endc)==null?void 0:g.length)??0,u=((C=e.cap.nrca)==null?void 0:C.length)??0,p=((b=e.cap.nrdc)==null?void 0:b.length)??0;return o>0&&(n.push("Total LTE CA Combos"),r.push(o.toString())),i>0&&(n.push("Total ENDC Combos"),r.push(i.toString())),u>0&&(n.push("Total NR CA Combos"),r.push(u.toString())),p>0&&(n.push("Total NRDC Combos"),r.push(p.toString())),a("details",null,{open:!0},[a("summary",null,{class:"mt-10 text-xl font-bold"},D(t=>t.title,[e]),3,null),a("table",null,{class:"w-full table-auto border-collapse border border-gray-500 text-left"},a("tbody",null,{class:"whitespace-pre align-text-top"},r.map((t,s)=>t!=null&&t.length>0&&a("tr",null,null,[a("th",null,{class:"border-collapse border border-gray-500 p-1.5"},n[s],1,null),a("td",null,{class:"border-collapse border border-gray-500 p-1.5"},t,1,null)],1,s)),1,null),1,null)],1,"N1_1")},_=Object.freeze(Object.defineProperty({__proto__:null,s_h7pB8sysxA0:S},Symbol.toStringTag,{value:"Module"}));export{E as l,_ as s,S as s_h7pB8sysxA0};
