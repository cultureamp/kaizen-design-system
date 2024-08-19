import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{L as s}from"./LikertScaleLegacy-rj4sPtnm.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./Text-D2gQH1xL.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";const V={title:"Components/LikertScaleLegacy",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},r=[{value:-1,label:"Not rated"},{value:1,label:"Strong Disagree"},{value:2,label:"Disagree"},{value:3,label:"Neither agree or disagree"},{value:4,label:"Agree"},{value:5,label:"Strongly agree"}],c={render:({isReversed:a,colorSchema:l})=>e.createElement(t,{isReversed:a},e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Not rated"},e.createElement(s,{scale:r,labelId:"",selectedItem:r[0],onSelect:()=>{},reversed:a,colorSchema:l})),e.createElement(t.Row,{rowTitle:"Strongly disagree"},e.createElement(s,{scale:r,labelId:"",selectedItem:r[1],onSelect:()=>{},reversed:a,colorSchema:l})),e.createElement(t.Row,{rowTitle:"Disagree"},e.createElement(s,{scale:r,labelId:"",selectedItem:r[2],onSelect:()=>{},reversed:a,colorSchema:l})),e.createElement(t.Row,{rowTitle:"Neither agree or disagree"},e.createElement(s,{scale:r,labelId:"",selectedItem:r[3],onSelect:()=>{},reversed:a,colorSchema:l})),e.createElement(t.Row,{rowTitle:"Agree"},e.createElement(s,{scale:r,labelId:"",selectedItem:r[4],onSelect:()=>{},reversed:a,colorSchema:l})),e.createElement(t.Row,{rowTitle:"Strongly agree"},e.createElement(s,{scale:r,labelId:"",selectedItem:r[5],onSelect:()=>{},reversed:a,colorSchema:l})),e.createElement(t.Row,{rowTitle:"Validation"},e.createElement(s,{scale:r,labelId:"",selectedItem:r[0],onSelect:()=>{},reversed:a,colorSchema:l,validationMessage:"Error message here",status:"error"}))))},o={...c,name:"Sticker Sheet (Default - Classical)"},n={...c,name:"Sticker Sheet (Blue)",args:{colorSchema:"blue"}},i={...c,name:"Sticker Sheet (Classical Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},m={...c,name:"Sticker Sheet (Blue Reversed)",parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0,colorSchema:"blue"}},S={...c,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default - Classical)"
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,k,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Blue)",
  args: {
    colorSchema: "blue"
  }
}`,...(h=(k=n.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var v,b,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Classical Reversed)",
  parameters: {
    backgrounds: {
      default: "Purple 700"
    }
  },
  args: {
    isReversed: true
  }
}`,...(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var R,T,f;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Blue Reversed)",
  parameters: {
    backgrounds: {
      default: "Purple 700"
    }
  },
  args: {
    isReversed: true,
    colorSchema: "blue"
  }
}`,...(f=(T=m.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var w,I,D;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(D=(I=S.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const j=["StickerSheetDefault","StickerBlueSheetDefault","StickerSheetClassicalReversed","StickerSheetBlueReversed","StickerSheetRTL"];export{n as StickerBlueSheetDefault,m as StickerSheetBlueReversed,i as StickerSheetClassicalReversed,o as StickerSheetDefault,S as StickerSheetRTL,j as __namedExportsOrder,V as default};
