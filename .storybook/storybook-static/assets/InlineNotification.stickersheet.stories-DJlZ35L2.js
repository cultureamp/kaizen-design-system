import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{I as s}from"./InlineNotification-CD7nmnbO.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-DqRrnmyu.js";import"./CautionIcon-D4m_GXrx.js";import"./SVG-7WFwBCn9.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./SecurityTipIcon-CgXON2WE.js";import"./SuccessIcon-BInyqVzG.js";import"./Heading-Y5F8SWRW.js";import"./CloseIcon-BAUhi63R.js";const x={title:"Components/Notifications/InlineNotification",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{timeout:1e3}}},l={children:e.createElement("span",null,"New user data, imported by mackenzie@hooli.com has successfully uploaded."," ",e.createElement("a",{href:"/"},"Manage users is now available"))},v=[{title:"Informative",props:{variant:"informative",headingProps:{variant:"heading-6",tag:"span",children:"Informative title"}}},{title:"Success",props:{variant:"success",headingProps:{variant:"heading-6",tag:"span",children:"Success title"}}},{title:"Cautionary",props:{variant:"cautionary",headingProps:{variant:"heading-6",tag:"span",children:"Cautionary title"}}},{title:"Warning",props:{variant:"warning",headingProps:{variant:"heading-6",tag:"span",children:"Warning title"}}},{title:"Persistent",props:{variant:"informative",persistent:!0,headingProps:{variant:"heading-6",tag:"span",children:"Persistent title"}}},{title:"Subtle",props:{variant:"informative",isSubtle:!0,persistent:!0,headingProps:{variant:"heading-6",tag:"span",children:"Subtle title"},children:"All notification types can have a subtle variant"}},{title:"Multiline",props:{children:"Content longer that the width of the container will break onto a new line. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aperiam voluptatem molestias saepe quia vitae quod ex illum, unde nihil impedit possimus officia labore atque quidem necessitatibus sint, maiores velit.",variant:"success",headingProps:{variant:"heading-6",tag:"span",children:"Content enforced multiline"}}},{title:"Forced multiline",props:{children:"forceMultiline will break children onto a new line regardless of width",variant:"cautionary",headingProps:{variant:"heading-6",tag:"span",children:"Prop enforced multiline"},forceMultiline:!0}}],S=[{title:"Informative",props:{type:"informative",headingProps:{variant:"heading-6",tag:"span",children:"Informative title"}}},{title:"Positive",props:{type:"positive",headingProps:{variant:"heading-6",tag:"span",children:"Positive title"}}},{title:"Cautionary",props:{type:"cautionary",headingProps:{variant:"heading-6",tag:"span",children:"Cautionary title"}}},{title:"Negative",props:{type:"negative",headingProps:{variant:"heading-6",tag:"span",children:"Negative title"}}}],g={render:({isReversed:o})=>e.createElement(e.Fragment,null,e.createElement(t,{heading:"InlineNotification",isReversed:o},e.createElement(t.Body,null,v.map(({title:i,props:n})=>e.createElement(t.Row,{key:i,rowTitle:i},e.createElement(s,{...l,...n}))))),e.createElement(t,{heading:"Type (deprecated)",isReversed:o},e.createElement(t.Body,null,S.map(({title:i,props:n})=>e.createElement(t.Row,{key:i,rowTitle:i},e.createElement(s,{...l,...n}))))))},a={...g,name:"Sticker Sheet (Default)"},r={...g,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,h,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const q=["StickerSheetDefault","StickerSheetRTL"];export{a as StickerSheetDefault,r as StickerSheetRTL,q as __namedExportsOrder,x as default};
