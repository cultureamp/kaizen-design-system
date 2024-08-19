import{R as e}from"./index-CTjT7uj6.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{A as a}from"./Avatar-BrPd9Rrx.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./index-BRV0Se7Z.js";import"./UserIcon-CFY4To9K.js";import"./SVG-7WFwBCn9.js";const y={title:"Components/Avatar",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},P={fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!0,avatarSrc:"https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"},g={fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!0},m={fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!1},N={fullName:"李存信",disableInitials:!1,isCurrentUser:!0},b={fullName:"Spicy Jalapeno Taco Bacon Ipsum Pretzel Dolor Amet Nacho Elit Chicken",disableInitials:!1,isCurrentUser:!0},T={fullName:"Hooli",avatarSrc:"https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg",isCompany:!0},u=[{title:"XX-Large",size:"xxlarge"},{title:"X-Large",size:"xlarge"},{title:"Large",size:"large"},{title:"Medium",size:"medium"},{title:"Small",size:"small"}],o={render:({isReversed:c})=>e.createElement(e.Fragment,null,e.createElement(r,{isReversed:c},e.createElement(r.Header,{headings:["Photo Personal","Initials Personal","Initials Generic","Default User"]}),e.createElement(r.Body,null,u.map(({title:s,size:t})=>e.createElement(r.Row,{key:s,rowTitle:s},e.createElement(a,{...P,size:t}),e.createElement(a,{...g,size:t}),e.createElement(a,{...m,size:t}),e.createElement(a,{...m,disableInitials:!0,size:t}))))),e.createElement(r,{isReversed:c},e.createElement(r.Header,{headings:["Initials Unicode","Initials Long","Company Avatar"]}),e.createElement(r.Body,null,u.map(({title:s,size:t})=>e.createElement(r.Row,{key:s,rowTitle:s},e.createElement(a,{...N,size:t}),e.createElement(a,{...b,size:t}),e.createElement(a,{...T,size:t}))))))},l={...o,name:"Sticker Sheet (Default)"},n={...o,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}},i={...o,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var S,p,d;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(p=l.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,h,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(I=(h=n.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var k,E,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const U=["StickerSheetDefault","StickerSheetRTL","StickerSheetReversed"];export{l as StickerSheetDefault,n as StickerSheetRTL,i as StickerSheetReversed,U as __namedExportsOrder,y as default};
