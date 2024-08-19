import{R as a}from"./index-CTjT7uj6.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{L as b}from"./Label-DlmzItqQ.js";import{I as f,B as y}from"./types-96fQv32Q.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const _={title:"Components/Label",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},l=({labelText:t,...e})=>a.createElement(b,{labelText:a.createElement("span",{"data-sb-a11y-color-contrast-disable":e["data-sb-a11y-color-contrast-disable"]},t),...e}),n=({labelText:t,...e})=>a.createElement(b,{...e,labelText:a.createElement("span",{"data-sb-a11y-color-contrast-disable":e["data-sb-a11y-color-contrast-disable"]},t," ",a.createElement("a",{href:"/","data-sb-a11y-color-contrast-disable":e["data-sb-a11y-color-contrast-disable"]},"a"))},a.createElement("span",{className:"inline-block w-16 h-16 bg-gray-500"})),c=({labelText:t,...e})=>a.createElement(a.Fragment,null,a.createElement(b,{...e,labelText:a.createElement("span",{"data-sb-a11y-color-contrast-disable":e["data-sb-a11y-color-contrast-disable"]},t," ",a.createElement("a",{href:"/","data-sb-a11y-color-contrast-disable":e["data-sb-a11y-color-contrast-disable"]},"anchor"))}),a.createElement("span",{className:"block w-200 h-16 bg-gray-500"})),d={render:({isReversed:t})=>a.createElement(r,{isReversed:t},a.createElement(r.Header,{headings:["Default","Default (disabled)","Prominent","Prominent (disabled)"],hasVerticalHeadings:!0}),a.createElement(r.Body,null,a.createElement(r.Row,{rowTitle:"Base"},a.createElement(l,{reversed:t,labelText:"Label"}),a.createElement(l,{reversed:t,labelText:"Label",disabled:!0,"data-sb-a11y-color-contrast-disable":!0}),a.createElement(l,{reversed:t,labelText:"Label",variant:"prominent"}),a.createElement(l,{reversed:t,labelText:"Label",variant:"prominent",disabled:!0,"data-sb-a11y-color-contrast-disable":!0}))),a.createElement(r.Body,null,f.map(e=>a.createElement(r.Row,{key:e,rowTitle:e},a.createElement(n,{reversed:t,labelText:e,labelType:e}),a.createElement(n,{reversed:t,labelText:e,labelType:e,disabled:!0,"data-sb-a11y-color-contrast-disable":!0}),a.createElement(n,{reversed:t,labelText:e,labelType:e,variant:"prominent"}),a.createElement(n,{reversed:t,labelText:e,labelType:e,variant:"prominent",disabled:!0,"data-sb-a11y-color-contrast-disable":!0})))),a.createElement(r.Body,null,y.map(e=>a.createElement(r.Row,{key:e,rowTitle:e},a.createElement(c,{reversed:t,labelText:e,labelType:e}),a.createElement(c,{reversed:t,labelText:e,labelType:e,disabled:!0,"data-sb-a11y-color-contrast-disable":!0}),a.createElement(c,{reversed:t,labelText:e,labelType:e,variant:"prominent"}),a.createElement(c,{reversed:t,labelText:e,labelType:e,variant:"prominent",disabled:!0,"data-sb-a11y-color-contrast-disable":!0})))))},s={...d,name:"Sticker Sheet (Default)"},o={...d,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},m={...d,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var i,u,S;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var T,E,p;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(p=(E=o.parameters)==null?void 0:E.docs)==null?void 0:p.source}}};var h,k,x;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(x=(k=m.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const C=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{s as StickerSheetDefault,m as StickerSheetRTL,o as StickerSheetReversed,C as __namedExportsOrder,_ as default};
