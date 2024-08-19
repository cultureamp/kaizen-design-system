import{R as e}from"./index-CTjT7uj6.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{T as r}from"./TextArea-Ci-_Nq71.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const v={title:"Components/Text Input controls/Text Area",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},c={render:({isReversed:t})=>e.createElement(a,{isReversed:t},e.createElement(a.Header,{headings:["Default","Hover","Active","Focus"],hasVerticalHeadings:!0}),e.createElement(a.Body,null,e.createElement(a.Row,{rowTitle:"Enabled"},e.createElement(r,{reversed:t}),e.createElement(r,{reversed:t,"data-sb-pseudo-styles":"hover"}),e.createElement(r,{reversed:t,"data-sb-pseudo-styles":"active"}),e.createElement(r,{reversed:t,"data-sb-pseudo-styles":"focus"})),e.createElement(a.Row,{rowTitle:"Disabled"},e.createElement(r,{reversed:t,disabled:!0}),e.createElement(r,{reversed:t,disabled:!0,"data-sb-pseudo-styles":"hover"}),e.createElement(r,{reversed:t,disabled:!0,"data-sb-pseudo-styles":"active"}),e.createElement(r,{reversed:t,disabled:!0,"data-sb-pseudo-styles":"focus"})))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},s={...c,name:"Sticker Sheet (Default)"},o={...c,name:"Sticker Sheet (Reversed)",parameters:{...c.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var l,d,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var m,u,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const E=["StickerSheetDefault","StickerSheetReversed"];export{s as StickerSheetDefault,o as StickerSheetReversed,E as __namedExportsOrder,v as default};
