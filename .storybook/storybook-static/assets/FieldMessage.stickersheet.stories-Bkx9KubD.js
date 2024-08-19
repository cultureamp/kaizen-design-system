import{R as e}from"./index-CTjT7uj6.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{F as s}from"./FieldMessage-D8OmrYjz.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./SVG-7WFwBCn9.js";import"./Text-D2gQH1xL.js";const F={title:"Components/FieldMessage",parameters:{chromatic:{disable:!1},controls:{disable:!0}},args:{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum."}},o={render:({isReversed:t,...r})=>e.createElement(a,{isReversed:t},e.createElement(a.Header,{headings:["Default","Success","Error","Caution"]}),e.createElement(a.Body,null,e.createElement(a.Row,null,e.createElement(s,{...r,reversed:t}),e.createElement(s,{...r,reversed:t,status:"success"}),e.createElement(s,{...r,reversed:t,status:"error"}),e.createElement(s,{...r,reversed:t,status:"caution"}))))},c={...o,name:"Sticker Sheet (Default)"},n={...o,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},m={...o,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var i,l,S;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(S=(l=c.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var u,d,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var k,h,g;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(g=(h=m.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const _=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{c as StickerSheetDefault,m as StickerSheetRTL,n as StickerSheetReversed,_ as __namedExportsOrder,F as default};
