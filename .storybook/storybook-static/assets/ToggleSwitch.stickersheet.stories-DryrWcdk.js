import{R as e}from"./index-CTjT7uj6.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{T as r}from"./ToggleSwitch-OMJ5Ao0X.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";const D={title:"Components/Toggle Switch controls/ToggleSwitch",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},s={render:({isReversed:t})=>e.createElement(a,{isReversed:t},e.createElement(a.Header,{headings:["Default","Hover","Focus","Disabled"],hasVerticalHeadings:!0}),e.createElement(a.Body,null,e.createElement(a.Row,{rowTitle:"off"},e.createElement(r,{reversed:t}),e.createElement(r,{reversed:t,"data-sb-pseudo-styles":"hover"}),e.createElement(r,{reversed:t,"data-sb-pseudo-styles":"focus"}),e.createElement(r,{reversed:t,disabled:!0})),e.createElement(a.Row,{rowTitle:"on"},e.createElement(r,{reversed:t,toggledStatus:"on"}),e.createElement(r,{reversed:t,toggledStatus:"on","data-sb-pseudo-styles":"hover"}),e.createElement(r,{reversed:t,toggledStatus:"on","data-sb-pseudo-styles":"focus"}),e.createElement(r,{reversed:t,toggledStatus:"on",disabled:!0})))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"] + span',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},o={...s,name:"Sticker Sheet (Default)"},c={...s,name:"Sticker Sheet (Reversed)",parameters:{...s.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},n={...s,name:"Sticker Sheet (RTL)",parameters:{...s.parameters,textDirection:"rtl"}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,p,S;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(S=(p=c.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var u,h,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const R=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{o as StickerSheetDefault,n as StickerSheetRTL,c as StickerSheetReversed,R as __namedExportsOrder,D as default};
