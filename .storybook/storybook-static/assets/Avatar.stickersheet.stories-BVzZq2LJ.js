import{R as e}from"./index-CTjT7uj6.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{A as r}from"./Avatar-BrPd9Rrx.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./index-BRV0Se7Z.js";import"./UserIcon-CFY4To9K.js";import"./SVG-7WFwBCn9.js";const k={title:"Components/Avatar",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},c={fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!0,avatarSrc:"https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"},m={fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!0},n={fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!1},u={fullName:"李存信",disableInitials:!1,isCurrentUser:!0},S={fullName:"Spicy Jalapeno Taco Bacon Ipsum Pretzel Dolor Amet Nacho Elit Chicken",disableInitials:!1,isCurrentUser:!0},d={fullName:"Hooli",avatarSrc:"https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg",isCompany:!0},o=[{title:"XX-Large",size:"xxlarge"},{title:"X-Large",size:"xlarge"},{title:"Large",size:"large"},{title:"Medium",size:"medium"},{title:"Small",size:"small"}],s={render:({isReversed:i})=>e.createElement(e.Fragment,null,e.createElement(a,{isReversed:i},e.createElement(a.Header,{headings:["Photo Personal","Initials Personal","Initials Generic","Default User"]}),e.createElement(a.Body,null,o.map(({title:l,size:t})=>e.createElement(a.Row,{key:l,rowTitle:l},e.createElement(r,{...c,size:t}),e.createElement(r,{...m,size:t}),e.createElement(r,{...n,size:t}),e.createElement(r,{...n,disableInitials:!0,size:t}))))),e.createElement(a,{isReversed:i},e.createElement(a.Header,{headings:["Initials Unicode","Initials Long","Company Avatar"]}),e.createElement(a.Body,null,o.map(({title:l,size:t})=>e.createElement(a.Row,{key:l,rowTitle:l},e.createElement(r,{...u,size:t}),e.createElement(r,{...S,size:t}),e.createElement(r,{...d,size:t}))))))},b={...s,name:"Sticker Sheet (Default)"},O={...s,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}},_={...s,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},L=["StickerSheetDefault","StickerSheetRTL","StickerSheetReversed"];export{b as StickerSheetDefault,O as StickerSheetRTL,_ as StickerSheetReversed,L as __namedExportsOrder,k as default};
