import{R as e}from"./index-CTjT7uj6.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{B as r}from"./Badge-D9GUNioS.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const R={title:"Components/Badge",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},o={render:({isReversed:t})=>e.createElement(a,{isReversed:t},e.createElement(a.Header,{headings:["Size","Default","Active","Dot"]}),e.createElement(a.Body,null,e.createElement(a.Row,{rowTitle:"Small"},e.createElement(r,{size:"small",variant:"default",reversed:t},"3"),e.createElement(r,{size:"small",variant:"active",reversed:t},"3"),e.createElement(r,{size:"small",variant:"dot",reversed:t})),e.createElement(a.Row,{rowTitle:"Large"},e.createElement(r,{size:"large",variant:"default",reversed:t},"3"),e.createElement(r,{size:"large",variant:"active",reversed:t},"3"),e.createElement(r,{size:"large",variant:"dot",reversed:t}))))},s={...o,name:"Sticker Sheet (Default)"},c={...o,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}},n={...o,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var S,d,p;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(p=(d=c.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    backgrounds: {
      default: "Purple 700"
    }
  },
  args: {
    isReversed: true
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const z=["StickerSheetDefault","StickerSheetRTL","StickerSheetReversed"];export{s as StickerSheetDefault,c as StickerSheetRTL,n as StickerSheetReversed,z as __namedExportsOrder,R as default};
