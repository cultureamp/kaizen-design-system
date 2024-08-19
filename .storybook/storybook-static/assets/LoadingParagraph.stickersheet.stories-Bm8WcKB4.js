import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{L as a}from"./LoadingParagraph-CXl7iitU.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const w={title:"Components/Loading states/LoadingParagraph",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},o={render:({isReversed:r})=>e.createElement(t,{isReversed:r},e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Default"},e.createElement(t.Cell,{className:"w-320"},e.createElement(a,{isReversed:r}))),e.createElement(t.Row,{rowTitle:"isLink"},e.createElement(a,{isLink:!0,isReversed:r})),e.createElement(t.Row,{rowTitle:"isInline + isInline"},e.createElement(t.Cell,null,e.createElement(a,{isInline:!0,width:40,isReversed:r}),e.createElement(a,{isInline:!0,width:40,isReversed:r})))))},n={...o,name:"Sticker Sheet (Default)"},s={...o,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},c={...o,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var i,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var S,p,u;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,h,k;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const D=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{n as StickerSheetDefault,c as StickerSheetRTL,s as StickerSheetReversed,D as __namedExportsOrder,w as default};
