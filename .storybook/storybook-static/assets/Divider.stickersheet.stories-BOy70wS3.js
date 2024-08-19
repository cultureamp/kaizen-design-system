import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{D as o}from"./Divider-B-j384PU.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const E={title:"Components/Divider",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},p={render:({isReversed:r})=>e.createElement(t,{isReversed:r},e.createElement(t.Header,{headings:["Variant","Example"]}),e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Content"},e.createElement(o,{variant:"content",isReversed:r})),e.createElement(t.Row,{rowTitle:"Canvas"},e.createElement(o,{variant:"canvas",isReversed:r})),e.createElement(t.Row,{rowTitle:"Menu Separator"},e.createElement(o,{variant:"menuSeparator",isReversed:r}))))},a={...p,name:"Sticker Sheet (Default)"},n={...p,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var s,c,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,l,S;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(l=n.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const D=["StickerSheetDefault","StickerSheetReversed"];export{a as StickerSheetDefault,n as StickerSheetReversed,D as __namedExportsOrder,E as default};
