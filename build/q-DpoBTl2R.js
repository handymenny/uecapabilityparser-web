import{u as l}from"./q-DhVgi9SL.js";const a=async()=>{const[o,n,e,t]=l();if(!t.value)throw new Error("Qwik UI: There is no reference to the collapsible content element. Make sure to wrap the content in a <CollapsibleContent> component.");e.value===null&&(e.value=await n.getHiddenHeight(t.value)),e.value!==0&&(t.value.style.setProperty("--qwikui-collapsible-content-height",`${e.value}px`),o&&t.value.style.setProperty("--qwikui-accordion-content-height",`${e.value}px`))};export{a as s_oj3D3AzCXps};
