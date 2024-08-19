import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{L as a}from"./LoadingGraphic-Bs3yJZdF.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const w={title:"Components/Loading states/LoadingGraphic",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},p={render:({isReversed:r})=>e.createElement(t,{isReversed:r},e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Small"},e.createElement(a,{isReversed:r,size:"small"})),e.createElement(t.Row,{rowTitle:"Medium"},e.createElement(a,{isReversed:r,size:"medium"})),e.createElement(t.Row,{rowTitle:"Large"},e.createElement(a,{isReversed:r,size:"large"})),e.createElement(t.Row,{rowTitle:"X-large"},e.createElement(a,{isReversed:r,size:"xlarge"})),e.createElement(t.Row,{rowTitle:"Xx-large"},e.createElement(a,{isReversed:r,size:"xxlarge"})),e.createElement(t.Row,{rowTitle:"Scene"},e.createElement(a,{isReversed:r,size:"scene"}))))},c={...p,name:"Sticker Sheet (Default)"},o={...p,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var n,l,s;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(s=(l=c.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var m,i,S;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(i=o.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};const f=["StickerSheetDefault","StickerSheetReversed"];export{c as StickerSheetDefault,o as StickerSheetReversed,f as __namedExportsOrder,w as default};
