import{R as e}from"./index-CTjT7uj6.js";import{S as s}from"./StickerSheet-DpoO9nWV.js";import{C as a}from"./Checkbox-B9bmVoGZ.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./MinusIcon-3DH7qpb8.js";const D={title:"Components/Checkbox controls/Checkbox",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},n={render:({isReversed:l})=>{const t={onCheck:()=>{},reversed:l},f=[{title:"Off",checkedStatus:"off"},{title:"On",checkedStatus:"on"},{title:"Mixed",checkedStatus:"mixed"}];return e.createElement(s,{isReversed:l},e.createElement(s.Header,{headings:["Default","Hover","Focus","Disabled"],hasVerticalHeadings:!0}),e.createElement(s.Body,null,f.map(({title:i,checkedStatus:r})=>e.createElement(s.Row,{key:i,rowTitle:i},e.createElement(a,{...t,checkedStatus:r}),e.createElement(a,{...t,checkedStatus:r,"data-sb-pseudo-styles":"hover"}),e.createElement(a,{...t,checkedStatus:r,"data-sb-pseudo-styles":"focus"}),e.createElement(a,{...t,checkedStatus:r,disabled:!0})))))},parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},o={...n,name:"Sticker Sheet (Default)"},c={...n,name:"Sticker Sheet (Reversed)",parameters:{...n.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,S,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const T=["StickerSheetDefault","StickerSheetReversed"];export{o as StickerSheetDefault,c as StickerSheetReversed,T as __namedExportsOrder,D as default};
