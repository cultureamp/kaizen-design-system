import{R as t}from"./index-CTjT7uj6.js";import{T as d}from"./TagIcon-u6d8uLTR.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{T as n}from"./Tag-D-4sFjnu.js";import{T as h}from"./types-i3FZ_Sm9.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const L={title:"Components/Tag/Future",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},S={render:()=>t.createElement(r,{heading:"Tag"},t.createElement(r.Header,{headings:["Label Only","Icon"]}),t.createElement(r.Body,null,h.map(e=>t.createElement(r.Row,{key:e},t.createElement(n,{color:e},e.charAt(0).toUpperCase()+e.slice(1)),t.createElement(n,{icon:t.createElement(d,{role:"presentation"}),color:e},e.charAt(0).toUpperCase()+e.slice(1))))))},a={...S,name:"Sticker Sheet (Default)",parameters:{controls:{disable:!0}}},s={...S,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var c,o,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const x=["StickerSheetDefault","StickerSheetRTL"];export{a as StickerSheetDefault,s as StickerSheetRTL,x as __namedExportsOrder,L as default};
