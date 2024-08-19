import{R as e}from"./index-CTjT7uj6.js";import{F as t}from"./FilterButtonBase-D953FwLo.js";import{T as o}from"./index-CdP7-hSn.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{B as a}from"./ButtonGroup-Cm1_R1hn.js";import"./index-CCQ3W5xA.js";import"./index-9r8iugjR.js";import"./usePopper-D4ykrdaR.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const v={title:"Components/Button Group",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},n={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{heading:"Button Group"},e.createElement(r.Header,{headings:["Group of 2","Group of 3","With tooltip"]}),e.createElement(r.Body,null,e.createElement(r.Row,null,e.createElement(a,null,e.createElement(t,null,"First"),e.createElement(t,null,"Last")),e.createElement(a,null,e.createElement(t,null,"First"),e.createElement(t,null,"Middle"),e.createElement(t,null,"Last")),e.createElement(a,null,e.createElement(o,{text:"Hello!"},e.createElement(t,null,"Tooltips here")),e.createElement(o,{text:"Pancakes!"},e.createElement(t,null,"Styles should still work")))))),e.createElement(r,{heading:"Pseudo states"},e.createElement(r.Header,{headings:["Hover","Active","Focus"],hasVerticalHeadings:!0}),e.createElement(r.Body,null,e.createElement(r.Row,{rowTitle:"First"},e.createElement(a,null,e.createElement(t,{"data-sb-pseudo-styles":"hover","data-sb-a11y-color-contrast-disable":!0},"First"),e.createElement(t,null,"Last")),e.createElement(a,null,e.createElement(t,{"data-sb-pseudo-styles":"active","data-sb-a11y-color-contrast-disable":!0},"First"),e.createElement(t,null,"Last")),e.createElement(a,null,e.createElement(t,{"data-sb-pseudo-styles":"focus","data-sb-a11y-color-contrast-disable":!0},"First"),e.createElement(t,null,"Last"))),e.createElement(r.Row,{rowTitle:"Last"},e.createElement(a,null,e.createElement(t,null,"First"),e.createElement(t,{"data-sb-pseudo-styles":"hover","data-sb-a11y-color-contrast-disable":!0},"Last")),e.createElement(a,null,e.createElement(t,null,"First"),e.createElement(t,{"data-sb-pseudo-styles":"active","data-sb-a11y-color-contrast-disable":!0},"Last")),e.createElement(a,null,e.createElement(t,null,"First"),e.createElement(t,{"data-sb-pseudo-styles":"focus","data-sb-a11y-color-contrast-disable":!0},"Last"))),e.createElement(r.Row,{rowTitle:"Middle"},e.createElement(a,null,e.createElement(t,null,"First"),e.createElement(t,{"data-sb-pseudo-styles":"hover","data-sb-a11y-color-contrast-disable":!0},"Middle"),e.createElement(t,null,"Last")),e.createElement(a,null,e.createElement(t,null,"First"),e.createElement(t,{"data-sb-pseudo-styles":"active","data-sb-a11y-color-contrast-disable":!0},"Middle"),e.createElement(t,null,"Last")),e.createElement(a,null,e.createElement(t,null,"First"),e.createElement(t,{"data-sb-pseudo-styles":"focus","data-sb-a11y-color-contrast-disable":!0},"Middle"),e.createElement(t,null,"Last")))))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},l={...n,name:"Sticker Sheet (Default)"},s={...n,name:"Sticker Sheet (RTL)",parameters:{...n.parameters,textDirection:"rtl"}};var c,m,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,d,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const R=["StickerSheetDefault","StickerSheetRTL"];export{l as StickerSheetDefault,s as StickerSheetRTL,R as __namedExportsOrder,v as default};
