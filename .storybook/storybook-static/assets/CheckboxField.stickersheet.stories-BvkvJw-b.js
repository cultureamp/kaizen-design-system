import{R as e}from"./index-CTjT7uj6.js";import{S as s}from"./StickerSheet-DpoO9nWV.js";import{C as o}from"./CheckboxField-Dex_qNHg.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Label-DlmzItqQ.js";import"./Checkbox-B9bmVoGZ.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./MinusIcon-3DH7qpb8.js";const w={title:"Components/Checkbox controls/CheckboxField",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},t={render:({isReversed:l})=>{const r={onCheck:()=>{},reversed:l},T=[{title:"Off",checkedStatus:"off"},{title:"On",checkedStatus:"on"},{title:"Mixed",checkedStatus:"mixed"}];return e.createElement(s,{isReversed:l},e.createElement(s.Header,{headings:["Default","Hover","Focus","Disabled"],hasVerticalHeadings:!0}),e.createElement(s.Body,null,T.map(({title:m,checkedStatus:a})=>e.createElement(s.Row,{key:m,rowTitle:m},e.createElement(o,{...r,labelText:"Checkbox",checkedStatus:a}),e.createElement(o,{...r,labelText:"Hover",checkedStatus:a,"data-sb-pseudo-styles":"hover"}),e.createElement(o,{...r,labelText:"Focus",checkedStatus:a,"data-sb-pseudo-styles":"focus"}),e.createElement(o,{...r,labelText:"Disabled",checkedStatus:a,disabled:!0})))))},parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},c={...t,name:"Sticker Sheet (Default)"},i={...t,name:"Sticker Sheet (Reversed)",parameters:{...t.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},n={...t,name:"Sticker Sheet (RTL)",parameters:{...t.parameters,textDirection:"rtl"}};var p,d,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(u=(d=c.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var S,h,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,f,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const O=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{c as StickerSheetDefault,n as StickerSheetRTL,i as StickerSheetReversed,O as __namedExportsOrder,w as default};
