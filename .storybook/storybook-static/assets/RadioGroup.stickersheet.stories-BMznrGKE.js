import{R as e}from"./index-CTjT7uj6.js";import{T as m}from"./Text-D2gQH1xL.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{R as c}from"./RadioGroup-DNGPKkOt.js";import{R as t}from"./RadioField-CU_b8UGV.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Label-DlmzItqQ.js";import"./Radio-DztYLnpN.js";const B={title:"Components/Radio controls/RadioGroup",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},i={render:({isReversed:r})=>e.createElement(a,{isReversed:r},e.createElement(a.Header,{headings:["Base","Disabled"],hasVerticalHeadings:!0}),e.createElement(a.Body,null,e.createElement(a.Row,{rowTitle:"Default"},e.createElement(e.Fragment,null,e.createElement(c,{labelText:"Radio group label",reversed:r},e.createElement(t,{labelText:"Label",name:"radio",value:"radio-1",reversed:r}),e.createElement(t,{labelText:"Label",name:"radio",value:"radio-2",reversed:r}),e.createElement(t,{labelText:"Label",name:"radio",value:"radio-3",reversed:r})),e.createElement(m,{variant:"body",color:r?"white":"dark"},"Next line")),e.createElement(e.Fragment,null,e.createElement(c,{labelText:"Radio group label",reversed:r},e.createElement(t,{labelText:"Label",name:"radio",value:"radio-1",disabled:!0,reversed:r}),e.createElement(t,{labelText:"Label",name:"radio",value:"radio-2",disabled:!0,reversed:r}),e.createElement(t,{labelText:"Label",name:"radio",value:"radio-3",disabled:!0,reversed:r})),e.createElement(m,{variant:"body",color:r?"white":"dark"},"Next line"))),e.createElement(a.Row,{rowTitle:"No Bottom Margin"},e.createElement("div",null,e.createElement(c,{labelText:"Radio group label",reversed:r,noBottomMargin:!0},e.createElement(t,{labelText:"Label",name:"radio",value:"radio-1",reversed:r}),e.createElement(t,{labelText:"Label",name:"radio",value:"radio-2",reversed:r})),e.createElement(m,{variant:"body",color:r?"white":"dark"},"Next line")))))},l={...i,name:"Sticker Sheet (Default)"},o={...i,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},n={...i,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var d,s,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(u=(s=l.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var p,S,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,k,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const N=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{l as StickerSheetDefault,n as StickerSheetRTL,o as StickerSheetReversed,N as __namedExportsOrder,B as default};
