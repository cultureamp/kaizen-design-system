import{R as e}from"./index-CTjT7uj6.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{T as r}from"./ToggleSwitchField-pnxjr5y5.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Label-DlmzItqQ.js";import"./ToggleSwitch-OMJ5Ao0X.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./FieldGroup-Dj6p3DL3.js";const F={title:"Components/Toggle Switch controls/ToggleSwitchField",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},s={render:({isReversed:t})=>e.createElement(a,{isReversed:t},e.createElement(a.Header,{headings:["Default","Hover","Focus","Disabled"],hasVerticalHeadings:!0}),e.createElement(a.Body,null,e.createElement(a.Row,{rowTitle:"off"},e.createElement(r,{labelText:"Toggle me",reversed:t}),e.createElement(r,{labelText:"Toggle me",reversed:t,"data-sb-pseudo-styles":"hover"}),e.createElement(r,{labelText:"Toggle me",reversed:t,"data-sb-pseudo-styles":"focus"}),e.createElement(r,{labelText:"Toggle me",reversed:t,disabled:!0})),e.createElement(a.Row,{rowTitle:"on"},e.createElement(r,{labelText:"Toggle me",toggledStatus:"on",reversed:t}),e.createElement(r,{labelText:"Toggle me",toggledStatus:"on",reversed:t,"data-sb-pseudo-styles":"hover"}),e.createElement(r,{labelText:"Toggle me",toggledStatus:"on",reversed:t,"data-sb-pseudo-styles":"focus"}),e.createElement(r,{labelText:"Toggle me",toggledStatus:"on",reversed:t,disabled:!0})))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"] + span',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},o={...s,name:"Sticker Sheet (Default)"},l={...s,name:"Sticker Sheet (Reversed)",parameters:{...s.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},c={...s,name:"Sticker Sheet (RTL)",parameters:{...s.parameters,textDirection:"rtl"}};var m,n,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,p,S;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(p=l.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var u,g,T;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(T=(g=c.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const L=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{o as StickerSheetDefault,c as StickerSheetRTL,l as StickerSheetReversed,L as __namedExportsOrder,F as default};
