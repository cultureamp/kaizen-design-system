import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{T as r}from"./Text-D2gQH1xL.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const x={title:"Components/Text",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},i={render:({isReversed:l})=>{const o=l?"white":"dark";return e.createElement(e.Fragment,null,e.createElement(t,{isReversed:l},e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Intro Lede"},e.createElement(r,{variant:"intro-lede",color:o},"The quick brown fox jumps over the lazy dog.")),e.createElement(t.Row,{rowTitle:"Body"},e.createElement(r,{variant:"body",color:o},"The quick brown fox jumps over the lazy dog.")),e.createElement(t.Row,{rowTitle:"Body strong"},e.createElement(r,{variant:"body",color:o},e.createElement("strong",null,"The quick brown fox jumps over the lazy dog."))),e.createElement(t.Row,{rowTitle:"Small"},e.createElement(r,{variant:"small",color:o},"The quick brown fox jumps over the lazy dog.")),e.createElement(t.Row,{rowTitle:"Extra small"},e.createElement(r,{variant:"extra-small",color:o},"The quick brown fox jumps over the lazy dog.")),l?e.createElement(t.Row,{rowTitle:"White Reduced Opacity"},e.createElement(r,{variant:"intro-lede",color:"white-reduced-opacity"},"The quick brown fox jumps over the lazy dog.")):e.createElement(e.Fragment,null,e.createElement(t.Row,{rowTitle:"Dark Reduced Opacity"},e.createElement(r,{variant:"intro-lede",color:"dark-reduced-opacity"},"The quick brown fox jumps over the lazy dog.")),e.createElement(t.Row,{rowTitle:"Positive"},e.createElement(r,{variant:"intro-lede",color:"positive"},"The quick brown fox jumps over the lazy dog.")),e.createElement(t.Row,{rowTitle:"Negative"},e.createElement(r,{variant:"intro-lede",color:"negative"},"The quick brown fox jumps over the lazy dog."))))))}},a={...i,name:"Sticker Sheet (Default)"},n={...i,name:"Sticker Sheet (Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},c={...i,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var m,s,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,p,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var S,k,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const y=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{a as StickerSheetDefault,c as StickerSheetRTL,n as StickerSheetReversed,y as __namedExportsOrder,x as default};
