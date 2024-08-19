import{R as e}from"./index-CTjT7uj6.js";import{T as l}from"./Text-D2gQH1xL.js";import{S as o}from"./StickerSheet-DpoO9nWV.js";import{C as E}from"./CheckboxGroup-C4D1pU9Y.js";import{C as s}from"./CheckboxField-Dex_qNHg.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Label-DlmzItqQ.js";import"./Checkbox-B9bmVoGZ.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./MinusIcon-3DH7qpb8.js";const O={title:"Components/Checkbox controls/CheckboxGroup",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},i=({labelText:t,reversed:a,...f})=>e.createElement(E,{labelText:t,reversed:a,...f},e.createElement(s,{labelText:"Checkbox one",reversed:a}),e.createElement(s,{labelText:"Checkbox two",reversed:a,checkedStatus:"on"}),e.createElement(s,{labelText:"Checkbox three",reversed:a,checkedStatus:"mixed"})),r={render:({isReversed:t})=>e.createElement(o,{isReversed:t},e.createElement(o.Header,{headings:["Default","No Bottom Margin"]}),e.createElement(o.Body,null,e.createElement(o.Row,null,e.createElement(e.Fragment,null,e.createElement(i,{reversed:t,labelText:"CheckboxGroup"}),e.createElement(l,{variant:"body",color:t?"white":"dark"},"Next line")),e.createElement(e.Fragment,null,e.createElement(i,{reversed:t,labelText:"CheckboxGroup",noBottomMargin:!0}),e.createElement(l,{variant:"body",color:t?"white":"dark"},"Next line")))))},c={...r,name:"Sticker Sheet (Default)"},n={...r,name:"Sticker Sheet (Reversed)",parameters:{...r.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},m={...r,name:"Sticker Sheet (RTL)",parameters:{...r.parameters,textDirection:"rtl"}};var p,h,S;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var u,d,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    backgrounds: {
      default: "Purple 700"
    }
  },
  args: {
    isReversed: true
  }
}`,...(k=(d=n.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var b,x,T;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(T=(x=m.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const q=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{c as StickerSheetDefault,m as StickerSheetRTL,n as StickerSheetReversed,q as __namedExportsOrder,O as default};
