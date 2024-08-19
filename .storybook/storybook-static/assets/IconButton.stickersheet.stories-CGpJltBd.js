import{R as e}from"./index-CTjT7uj6.js";import{F as g}from"./FilterIcon-BQ7bv_VN.js";import{M as m}from"./MeatballsIcon-w9tBPyZh.js";import{T as y}from"./TrashIcon-4srkHYK2.js";import{S as o}from"./StickerSheet-DpoO9nWV.js";import{I as a}from"./IconButton-DH93ECWt.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";const C={title:"Actions/IconButton/v1",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},R={label:"Label",working:!0,workingLabel:"Submitting",workingLabelHidden:!0},p=[{title:"Default",props:{label:"Default label",icon:e.createElement(m,{role:"presentation"})}},{title:"Primary",props:{label:"Primary label",icon:e.createElement(m,{role:"presentation"}),primary:!0}},{title:"Destructive",props:{label:"Label",icon:e.createElement(y,{role:"presentation"}),destructive:!0}},{title:"Secondary",props:{label:"Label",icon:e.createElement(g,{role:"presentation"}),secondary:!0}}],s={render:({isReversed:t})=>{const T=t?p:[...p,{title:"Secondary Destructive",props:{label:"Label",icon:e.createElement(y,{role:"presentation"}),secondary:!0,destructive:!0}}];return e.createElement(o,{isReversed:t},e.createElement(o.Header,{headings:["Base","Hover","Active","Focus","Disabled","Working"],hasVerticalHeadings:!0}),e.createElement(o.Body,null,T.map(({title:l,props:r})=>e.createElement(o.Row,{key:l,rowTitle:l},e.createElement(a,{reversed:t,...r}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"hover",...r}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"active",...r}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"focus",...r}),e.createElement(a,{reversed:t,...r,disabled:!0}),e.createElement(a,{reversed:t,...r,...R})))))},parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},c={...s,name:"Sticker Sheet (Default)"},n={...s,name:"Sticker Sheet (Reversed)",parameters:{...s.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},i={...s,name:"Sticker Sheet (RTL)",parameters:{...s.parameters,textDirection:"rtl"}};var u,d,S;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(S=(d=c.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var b,h,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var f,E,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(v=(E=i.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const J=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{c as StickerSheetDefault,i as StickerSheetRTL,n as StickerSheetReversed,J as __namedExportsOrder,C as default};
