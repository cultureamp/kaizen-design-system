import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{B as a}from"./Brand-AVBZ6FJc.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./hostedAssets-CVq9d3MW.js";const f={title:"Components/Brand",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},u={render:({isReversed:r})=>e.createElement(t,{isReversed:r},e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Logo Horizontal"},e.createElement(a,{alt:"Culture Amp",variant:"logo-horizontal",reversed:r})),e.createElement(t.Row,{rowTitle:"Logo Vertical"},e.createElement(a,{alt:"Culture Amp",variant:"logo-vertical",reversed:r})),e.createElement(t.Row,{rowTitle:"Enso"},e.createElement(a,{alt:"Culture Amp",variant:"enso",reversed:r})),e.createElement(t.Row,{rowTitle:"Collective Intelligence"},e.createElement(a,{alt:"Collective Intelligence",variant:"collective-intelligence",reversed:r}))))},o={...u,name:"Sticker Sheet (Default)"},l={...u,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var n,c,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var i,m,p;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["StickerSheetDefault","StickerSheetReversed"];export{o as StickerSheetDefault,l as StickerSheetReversed,w as __namedExportsOrder,f as default};
