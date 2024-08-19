import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{I as n}from"./InputRange-9Y0qOBCE.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Text-D2gQH1xL.js";import"./VisuallyHidden-CDYjeGzr.js";const g={title:"Components/Inputs/InputRange",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"label",enabled:!1},{id:"label-title-only",enabled:!1}]}}}},p={render:()=>e.createElement(t,null,e.createElement(t.Header,{headings:["Default","Disabled"]}),e.createElement(t.Body,null,e.createElement(t.Row,null,e.createElement(n,{id:"inputRange",minLabel:"Minimum",maxLabel:"Maximum",value:2}),e.createElement(n,{id:"inputRangeDisable",minLabel:e.createElement("span",{"data-sb-a11y-color-contrast-disable":!0},"Min"),maxLabel:e.createElement("span",{"data-sb-a11y-color-contrast-disable":!0},"Max"),value:2,disabled:!0,"data-sb-a11y-color-contrast-disable":!0}))))},a={...p,name:"Sticker Sheet (Default)"},r={...p,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var s,l,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var o,c,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["StickerSheetDefault","StickerSheetRTL"];export{a as StickerSheetDefault,r as StickerSheetRTL,D as __namedExportsOrder,g as default};
