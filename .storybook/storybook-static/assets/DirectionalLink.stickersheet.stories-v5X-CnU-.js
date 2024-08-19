import{R as e}from"./index-CTjT7uj6.js";import{S as n}from"./StickerSheet-DpoO9nWV.js";import{D as a}from"./DirectionalLink-D0TsHNmg.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./SVG-7WFwBCn9.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./StartIcon-BT9U_KyH.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";const q={title:"Components/Pagination/DirectionalLink",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},v=[{title:"Prev",props:{direction:"prev",label:"Previous page"}},{title:"Next",props:{direction:"next",label:"Next page"}},{title:"Start",props:{direction:"start",label:"First page"}},{title:"End",props:{direction:"end",label:"Last page"}}],s={render:({isReversed:t})=>e.createElement(n,{isReversed:t},e.createElement(n.Body,null,v.map(({title:m,props:r})=>e.createElement(n.Row,{key:m,rowTitle:m},e.createElement(a,{...r,reversed:t}),e.createElement(a,{...r,reversed:t,"data-sb-pseudo-styles":"hover"}),e.createElement(a,{...r,reversed:t,"data-sb-pseudo-styles":"active"}),e.createElement(a,{...r,reversed:t,"data-sb-pseudo-styles":"focus"}),e.createElement(a,{...r,reversed:t,disabled:!0}))))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},o={...s,name:"Sticker Sheet (Default)"},i={...s,name:"Sticker Sheet (Reversed)",parameters:{...s.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},c={...s,name:"Sticker Sheet (RTL)",parameters:{...s.parameters,textDirection:"rtl"}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var S,u,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(u=i.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var h,b,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const z=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{o as StickerSheetDefault,c as StickerSheetRTL,i as StickerSheetReversed,z as __namedExportsOrder,q as default};
