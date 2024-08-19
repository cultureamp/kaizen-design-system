import{R as e}from"./index-CTjT7uj6.js";import{M as k}from"./MeatballsIcon-w9tBPyZh.js";import{W as E}from"./WritingIcon-36WWhCh-.js";import{S as s}from"./StickerSheet-DpoO9nWV.js";import{I as v,a as g}from"./types-C46014ij.js";import{I as y}from"./Input-BFyrvMXQ.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const M={title:"Components/Inputs/Input",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},a=t=>e.createElement("ul",{className:"grid gap-16 list-none p-0 m-0"},g.map(r=>e.createElement("li",{key:r},e.createElement(y,{value:r,type:r,startIconAdornment:e.createElement(E,{role:"presentation","data-sb-a11y-color-contrast-disable":t.disabled?"true":"false"}),endIconAdornment:e.createElement(k,{role:"presentation","data-sb-a11y-color-contrast-disable":t.disabled?"true":"false"}),...t})))),l={render:({isReversed:t})=>e.createElement(s,{isReversed:t},e.createElement(s.Header,{headings:["Default","Hover","Active","Focus","Disabled"],hasVerticalHeadings:!0}),e.createElement(s.Body,null,v.map(r=>e.createElement(s.Row,{key:r,rowTitle:r},e.createElement(a,{reversed:t}),e.createElement(a,{status:r,reversed:t,"data-sb-pseudo-styles":"hover"}),e.createElement(a,{status:r,reversed:t,"data-sb-pseudo-styles":"active"}),e.createElement(a,{status:r,reversed:t,"data-sb-pseudo-styles":"focus"}),e.createElement(a,{status:r,reversed:t,disabled:!0,"data-sb-a11y-color-contrast-disable":!0}))))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},o={...l,name:"Sticker Sheet (Default)"},n={...l,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},c={...l,name:"Sticker Sheet (RTL)",parameters:{...l.parameters,textDirection:"rtl"}};var m,i,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,S;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(u=n.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var b,h,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const P=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{o as StickerSheetDefault,c as StickerSheetRTL,n as StickerSheetReversed,P as __namedExportsOrder,M as default};
