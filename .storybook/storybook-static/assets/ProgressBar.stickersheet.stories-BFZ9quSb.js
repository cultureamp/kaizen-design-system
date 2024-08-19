import{R as e}from"./index-CTjT7uj6.js";import{i as T}from"./isChromatic-VqprqId_.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{P as m}from"./ProgressBar-DWqNK3dq.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Heading-Y5F8SWRW.js";const L={title:"Components/ProgressBar",parameters:{chromatic:{disable:!1,pauseAnimationAtEnd:!0},controls:{disable:!0},a11y:{config:{rules:[{id:"aria-progressbar-name",enabled:!1}]}}}},v=!T(),E=[{title:"Positive",props:{mood:"positive"}},{title:"Informative",props:{mood:"informative"}},{title:"Negative",props:{mood:"negative"}},{title:"Cautionary",props:{mood:"cautionary"}}],b=[{title:"Blue",props:{color:"blue"}},{title:"Green",props:{color:"green"}},{title:"Red",props:{color:"red"}},{title:"Yellow",props:{color:"yellow"}},{title:"Green (Animated)",props:{color:"green",isAnimating:v}}],c={render:({isReversed:i=!1})=>{const l={label:"25%",value:25,max:100,isAnimating:!1,isReversed:i,subtext:"Subtext"};return e.createElement(e.Fragment,null,e.createElement(r,{className:"w-full",heading:"ProgressBar",isReversed:i},e.createElement(r.Body,null,b.map(({title:t,props:n})=>e.createElement(r.Row,{key:t,rowTitle:t,rowTitleWidth:"100px"},e.createElement(m,{...l,...n}))))),e.createElement(r,{className:"w-full",heading:"ProgressBar Moods (deprecated)",isReversed:i},e.createElement(r.Body,null,E.map(({title:t,props:n})=>e.createElement(r.Row,{key:t,rowTitle:t,rowTitleWidth:"100px"},e.createElement(m,{...l,...n}))))))}},a={...c,name:"Sticker Sheet (Default)"},o={...c,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},s={...c,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var S,h,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,f,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(R=(f=s.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};const N=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{a as StickerSheetDefault,s as StickerSheetRTL,o as StickerSheetReversed,N as __namedExportsOrder,L as default};
