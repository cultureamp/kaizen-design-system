import{R as e}from"./index-CTjT7uj6.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{C as s}from"./Card-D3sy2uql.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const w={title:"Components/Card",args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},parameters:{chromatic:{disable:!1},controls:{disable:!0}}},h=["blue","green","gray","orange","purple","red","white","yellow"],k=["default","informative","positive","cautionary","destructive","assertive","highlight"],u={render:({isReversed:c,...i})=>e.createElement(e.Fragment,null,e.createElement(r,{isReversed:c,heading:"Colors"},e.createElement(r.Body,null,h.map(t=>e.createElement(r.Row,{key:t,rowTitle:t},e.createElement(s,{...i,color:t}))))),e.createElement(r,{isReversed:c,heading:"Variants (deprecated)"},e.createElement(r.Body,null,k.map(t=>e.createElement(r.Row,{key:t,rowTitle:t},e.createElement(s,{...i,variant:t}))))))},a={...u,name:"Sticker Sheet (Default)"},o={...u,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var n,m,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,S,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(d=(S=o.parameters)==null?void 0:S.docs)==null?void 0:d.source}}};const C=["StickerSheetDefault","StickerSheetRTL"];export{a as StickerSheetDefault,o as StickerSheetRTL,C as __namedExportsOrder,w as default};
