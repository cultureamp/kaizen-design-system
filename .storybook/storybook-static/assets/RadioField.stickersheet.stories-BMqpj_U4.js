import{R as e}from"./index-CTjT7uj6.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{R as t}from"./RadioField-CU_b8UGV.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Label-DlmzItqQ.js";import"./Radio-DztYLnpN.js";const _={title:"Components/Radio controls/RadioField",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},i={render:({isReversed:r})=>e.createElement(a,{isReversed:r},e.createElement(a.Header,{headings:["Base","Disabled","Hover"],hasVerticalHeadings:!0}),e.createElement(a.Body,null,e.createElement(a.Row,{rowTitle:"On"},e.createElement(t,{name:"radio",labelText:"Label",selectedStatus:!0,value:"radio-1",reversed:r}),e.createElement(t,{name:"radio",labelText:"Label",selectedStatus:!0,disabled:!0,value:"radio-2",reversed:r}),e.createElement(t,{name:"radio",labelText:"Label",selectedStatus:!0,value:"radio-3",reversed:r,classNameOverride:"story__radio-field--hover"})),e.createElement(a.Row,{rowTitle:"Off"},e.createElement(t,{name:"radio",labelText:"Label",value:"radio-1",reversed:r}),e.createElement(t,{name:"radio",labelText:"Label",disabled:!0,value:"radio-2",reversed:r}),e.createElement(t,{name:"radio",labelText:"Label",value:"radio-3",reversed:r,classNameOverride:"story__radio-field--hover"})))),parameters:{pseudo:{hover:".story__radio-field--hover > label"}}},o={...i,name:"Sticker Sheet (Default)"},s={...i,name:"Sticker Sheet (Reversed)",parameters:{...i.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},l={...i,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var c,n,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,S,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: {
      default: "Purple 700"
    }
  },
  args: {
    isReversed: true
  }
}`,...(u=(S=s.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var p,h,k;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const g=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{o as StickerSheetDefault,l as StickerSheetRTL,s as StickerSheetReversed,g as __namedExportsOrder,_ as default};
