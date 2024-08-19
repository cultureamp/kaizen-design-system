import{R as e}from"./index-CTjT7uj6.js";import{L as m}from"./Label-DlmzItqQ.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{F as c}from"./FieldGroup-Dj6p3DL3.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const R={title:"Components/FieldGroup",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},o=({id:t,inline:l=!1})=>e.createElement("div",null,e.createElement(c,{inline:l,classNameOverride:"mr-6"},e.createElement(m,{htmlFor:`id--field-${t}`},"Email"),e.createElement("input",{className:"border border-gray-500",type:"text",id:"id--field-2"})),e.createElement(c,{inline:l},e.createElement(m,{htmlFor:`id--field-${t}`},"Username"),e.createElement("input",{className:"border border-gray-500",type:"text",id:"id--field-2"}))),h={render:({isReversed:t})=>e.createElement(r,{isReversed:t},e.createElement(r.Header,{headings:["Default","Inline"]}),e.createElement(r.Body,null,e.createElement(r.Row,null,e.createElement(o,{id:"1"}),e.createElement(o,{id:"2",inline:!0}))))},a={...h,name:"Sticker Sheet (Default)"},i={...h,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var s,n,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,S,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(u=(S=i.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const x=["StickerSheetDefault","StickerSheetRTL"];export{a as StickerSheetDefault,i as StickerSheetRTL,x as __namedExportsOrder,R as default};
