import{R as e}from"./index-CTjT7uj6.js";import{H as d}from"./Heading-Y5F8SWRW.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{T as s}from"./TextAreaField-CI9tQ2Xh.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Label-DlmzItqQ.js";import"./TextArea-Ci-_Nq71.js";import"./FieldGroup-Dj6p3DL3.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./SVG-7WFwBCn9.js";import"./Text-D2gQH1xL.js";const B={title:"Components/Text Input controls/Text Area Field",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},b=["default","error","caution"],o=({isReversed:t,...a})=>e.createElement(e.Fragment,null,b.map(n=>e.createElement(r.Row,{key:n,rowTitle:n,isReversed:t},e.createElement(s,{labelText:`Variant: ${a.variant}`,reversed:t,status:n,validationMessage:"A valid question",description:"A short description",...a}),e.createElement(s,{labelText:`Variant: ${a.variant}`,reversed:t,status:n,validationMessage:"A valid question",description:"A short description","data-sb-pseudo-styles":"hover",...a}),e.createElement(s,{labelText:`Variant: ${a.variant}`,reversed:t,status:n,validationMessage:"A valid question",description:"A short description","data-sb-pseudo-styles":"active",...a}),e.createElement(s,{labelText:`Variant: ${a.variant}`,reversed:t,status:n,validationMessage:"A valid question",description:"A short description","data-sb-pseudo-styles":"focus",...a})))),i={render:({isReversed:t})=>e.createElement(e.Fragment,null,e.createElement(d,{variant:"heading-2",color:t?"white":"dark"},"Enabled"),e.createElement(r,{isReversed:t},e.createElement(r.Header,{headings:["Default","Hover","Active","Focus"],hasVerticalHeadings:!0}),e.createElement(r.Body,null,e.createElement(o,{isReversed:t,variant:"default"}),e.createElement(o,{isReversed:t,variant:"prominent"}))),e.createElement(d,{variant:"heading-2",color:t?"white":"dark"},"Disabled"),e.createElement(r,{isReversed:t},e.createElement(r.Header,{headings:["Default","Hover","Active","Focus"],hasVerticalHeadings:!0}),e.createElement(r.Body,null,e.createElement(o,{isReversed:t,disabled:!0,variant:"default"}),e.createElement(o,{isReversed:t,disabled:!0,variant:"prominent"})))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},c={...i,name:"Sticker Sheet (Default)"},l={...i,name:"Sticker Sheet (Reversed)",parameters:{...i.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},m={...i,name:"Sticker Sheet (RTL)",parameters:{...i.parameters,textDirection:"rtl"}};var u,p,S;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(S=(p=c.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var h,v,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var f,T,E;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const P=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{c as StickerSheetDefault,m as StickerSheetRTL,l as StickerSheetReversed,P as __namedExportsOrder,B as default};
