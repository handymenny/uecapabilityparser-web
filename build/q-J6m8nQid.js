import{u as o}from"./q-DhVgi9SL.js";const u=async s=>{var n;const[e,i,l,t]=o();if(!((n=e.itemsMapSig)!=null&&n.value))throw new Error("Qwik UI: Accordion item does not have a map of the available item info.");let a=null;switch(s){case"next":l.value===t.localIndexSig.value&&(a=await i.getNextEnabledItemIndex$(t.localIndexSig.value,e.itemsMapSig.value));break;case"prev":l.value===t.localIndexSig.value&&(a=await i.getPrevEnabledItemIndex$(t.localIndexSig.value,e.itemsMapSig.value));break;case"first":a=await i.getNextEnabledItemIndex$(-1,e.itemsMapSig.value);break;case"last":a=await i.getPrevEnabledItemIndex$(e.itemsMapSig.value.size,e.itemsMapSig.value,!1);break}a!==null&&e.triggerRefsArray.value[a].value.focus()};export{u as s_7CQ2aBMV9Ug};