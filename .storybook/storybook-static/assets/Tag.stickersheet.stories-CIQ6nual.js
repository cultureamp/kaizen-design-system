import{R as e}from"./index-CTjT7uj6.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{T}from"./types-BkC57k2Z.js";import{T as a}from"./Tag-B8l7-tRz.js";import{A as l}from"./Avatar-BrPd9Rrx.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./CautionIcon-D4m_GXrx.js";import"./SVG-7WFwBCn9.js";import"./ClearIcon-BcQoGkgT.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./LiveIcon-CIjqi5i9.js";import"./SuccessIcon-BInyqVzG.js";import"./Tag.module-fH2-Bd0x.js";import"./index-BRV0Se7Z.js";import"./UserIcon-CFY4To9K.js";const V={title:"Components/Tag",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"image-redundant-alt",enabled:!1}]}}}},i={render:({isReversed:k})=>e.createElement(r,{isReversed:k},e.createElement(r.Header,{headings:["Default","Dismissable"],hasVerticalHeadings:!0}),e.createElement(r.Body,null,T.map(t=>e.createElement(r.Row,{key:t,rowTitle:t},e.createElement(e.Fragment,null,e.createElement(a,{variant:t},"Tag"),e.createElement(a,{variant:t,size:"small"},"Small")),e.createElement(e.Fragment,null,e.createElement(a,{variant:t,dismissible:t!=="statusLive"},"Tag"),e.createElement(a,{variant:t,size:"small",dismissible:t!=="statusLive"},"Small"))))),e.createElement(r.Body,null,e.createElement(r.Row,{rowTitle:"Avatar"},e.createElement(a,{variant:"profile",avatar:e.createElement(l,{size:"small",avatarSrc:"https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",fullName:"Jane Doe"})},"Jane Doe"),e.createElement(a,{variant:"profile",avatar:e.createElement(l,{size:"small",avatarSrc:"https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",fullName:"Jane Doe"}),dismissible:!0},"Jane Doe"))))},s={...i,name:"Sticker Sheet (Default)"},m={...i,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},c={...i,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var o,n,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(p=(n=s.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,d,S;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(S=(d=m.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var f,h,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(g=(h=c.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const C=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{s as StickerSheetDefault,c as StickerSheetRTL,m as StickerSheetReversed,C as __namedExportsOrder,V as default};
