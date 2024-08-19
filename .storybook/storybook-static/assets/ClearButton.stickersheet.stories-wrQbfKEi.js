import{R as e}from"./index-CTjT7uj6.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{C as o}from"./ClearButton-K9bfbh4U.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./ClearIcon-BcQoGkgT.js";import"./SVG-7WFwBCn9.js";const v={title:"Components/ClearButton",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},c={render:({isReversed:t})=>e.createElement(r,{isReversed:t},e.createElement(r.Header,{headings:["Default","Hover","Focus"]}),e.createElement(r.Body,null,e.createElement(r.Row,null,e.createElement(o,{isReversed:t}),e.createElement(o,{isReversed:t,"data-sb-pseudo-styles":"hover"}),e.createElement(o,{isReversed:t,"data-sb-pseudo-styles":"focus"})))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},a={...c,name:"Sticker Sheet (Default)"},s={...c,name:"Sticker Sheet (Reversed)",parameters:{...c.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var n,m,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,p,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const y=["StickerSheetDefault","StickerSheetReversed"];export{a as StickerSheetDefault,s as StickerSheetReversed,y as __namedExportsOrder,v as default};
