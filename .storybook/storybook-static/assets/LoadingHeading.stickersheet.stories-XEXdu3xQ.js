import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{L as i}from"./LoadingHeading-DpJcTLii.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const L={title:"Components/Loading states/LoadingHeading",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},h=["display-0","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6"],S={render:({isReversed:s})=>e.createElement(t,{isReversed:s},e.createElement(t.Body,null,h.map(n=>e.createElement(t.Row,{key:n,rowTitle:n},e.createElement(t.Cell,{className:"w-320"},e.createElement(i,{variant:n}))))),e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"isLink"},e.createElement(i,{width:100,variant:"heading-1",isLink:!0,isReversed:s}))))},r={...S,name:"Sticker Sheet (Default)"},a={...S,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const w=["StickerSheetDefault","StickerSheetReversed"];export{r as StickerSheetDefault,a as StickerSheetReversed,w as __namedExportsOrder,L as default};
