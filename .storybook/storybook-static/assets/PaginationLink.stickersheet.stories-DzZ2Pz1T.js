import{R as e}from"./index-CTjT7uj6.js";import{S as s}from"./StickerSheet-DpoO9nWV.js";import{P as o}from"./PaginationLink-BPLrVxDN.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";const V={title:"Components/Pagination/PaginationLink",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},f=[{title:"isActive={false}",props:{pageNumber:1,"aria-label":"Page 1"}},{title:"isActive={true}",props:{pageNumber:1,"aria-label":"Page 1",isActive:!0}}],r={render:({isReversed:t})=>e.createElement(s,{isReversed:t},e.createElement(s.Header,{headings:["Base","Hover","Active","Focus"],hasVerticalHeadings:!0,verticalHeadingsWidth:"10rem"}),e.createElement(s.Body,null,f.map(({title:m,props:a})=>e.createElement(s.Row,{key:m,rowTitle:m},e.createElement(o,{...a,reversed:t}),e.createElement(o,{...a,reversed:t,"data-sb-pseudo-styles":"hover"}),e.createElement(o,{...a,reversed:t,"data-sb-pseudo-styles":"active"}),e.createElement(o,{...a,reversed:t,"data-sb-pseudo-styles":"focus"}))))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},i={...r,name:"Sticker Sheet (Default)"},c={...r,name:"Sticker Sheet (Reversed)",parameters:{...r.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},n={...r,name:"Sticker Sheet (RTL)",parameters:{...r.parameters,textDirection:"rtl"}};var p,l,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,S,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var k,g,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const C=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{i as StickerSheetDefault,n as StickerSheetRTL,c as StickerSheetReversed,C as __namedExportsOrder,V as default};
