import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{A as m,a as v,E as f,b as g}from"./example-data-1p8A_e8x.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Avatar-BrPd9Rrx.js";import"./index-BRV0Se7Z.js";import"./UserIcon-CFY4To9K.js";import"./SVG-7WFwBCn9.js";const V={title:"Components/Avatar/Avatar Group",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},A=[{title:"Large",size:"large"},{title:"Medium",size:"medium"},{title:"Small",size:"small"}],o={render:({isReversed:E})=>e.createElement(t,{isReversed:E},e.createElement(t.Header,{headings:["Size","With counter","Without counter"]}),e.createElement(t.Body,null,A.map(({title:i,size:c})=>e.createElement(t.Row,{key:i,rowTitle:i},e.createElement(m,{maxVisible:2,avatars:v,size:c}),e.createElement(m,{maxVisible:2,avatars:[f,g],size:c})))))},r={...o,name:"Sticker Sheet (Default)"},a={...o,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}},s={...o,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var n,S,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(l=(S=r.parameters)==null?void 0:S.docs)==null?void 0:l.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,k,R;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const W=["StickerSheetDefault","StickerSheetRTL","StickerSheetReversed"];export{r as StickerSheetDefault,a as StickerSheetRTL,s as StickerSheetReversed,W as __namedExportsOrder,V as default};
