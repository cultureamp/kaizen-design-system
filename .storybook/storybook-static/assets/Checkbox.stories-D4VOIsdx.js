import{r as s,R as c}from"./index-CTjT7uj6.js";import{C as a}from"./Checkbox-B9bmVoGZ.js";import"./index-CCQ3W5xA.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./MinusIcon-3DH7qpb8.js";const b={title:"Components/Checkbox controls/Checkbox",component:a,args:{checkedStatus:"off"},parameters:{a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},g={render:({onCheck:o,checkedStatus:r,...n})=>{const[e,t]=s.useState(r),m=f=>{e==="off"?t("mixed"):e==="mixed"?t("on"):e==="on"&&t("off"),o==null||o(f)};return s.useEffect(()=>{t(r)},[r]),c.createElement(a,{...n,checkedStatus:e,onCheck:m})},parameters:{docs:{canvas:{sourceState:"shown"}}}},E=["Playground"];export{g as Playground,E as __namedExportsOrder,b as default};
