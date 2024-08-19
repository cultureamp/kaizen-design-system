import{R as e}from"./index-CTjT7uj6.js";import{A as c}from"./AddIcon-C6V_KfCs.js";import{A as l}from"./ArrowForwardIcon-BVPHqAvL.js";import{T as s}from"./TrashIcon-4srkHYK2.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{B as t}from"./Button-AbBbn7Lr.js";import{L as a}from"./LoadingSpinner-DHfeGxpm.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./usePress-nudZ2Xgz.js";import"./useButton-CDp2hby9.js";import"./useFocusWithin-C7oArVkD.js";import"./useHover-Bq751pFs.js";import"./mergeClassNames-DEvgSslo.js";import"./VisuallyHidden-CDYjeGzr.js";const J={title:"Actions/Button/v3/Tests",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},o={render:({isReversed:R})=>e.createElement(e.Fragment,null,e.createElement(r,{heading:"Button",isReversed:R},e.createElement(r.Header,{headings:["Base","Disabled","working"],headingsWidth:"10rem",hasVerticalHeadings:!0,verticalHeadingsWidth:"12rem"}),e.createElement(r.Body,null,e.createElement(r.Row,{rowTitle:"Default"},e.createElement(t,null,"Label"),e.createElement(t,{isDisabled:!0},"Label"),e.createElement(t,{isDisabled:!0},e.createElement(a,{size:"sm",accessibilityLabel:"submitting label"}))),e.createElement(r.Row,{rowTitle:"Icon start"},e.createElement(t,null,e.createElement(c,{role:"presentation"}),"Label"),e.createElement(t,{isDisabled:!0},e.createElement(c,{role:"presentation"}),"Label"),e.createElement(t,{isDisabled:!0},e.createElement(a,{size:"sm",accessibilityLabel:"submitting label"}))),e.createElement(r.Row,{rowTitle:"Icon end"},e.createElement(t,null,"Label",e.createElement(l,{role:"presentation"})),e.createElement(t,{isDisabled:!0},"Label",e.createElement(l,{role:"presentation"})),e.createElement(t,{isDisabled:!0},e.createElement(a,{size:"sm",accessibilityLabel:"submitting label"}))),e.createElement(r.Row,{rowTitle:"Icon only"},e.createElement(t,{"aria-label":"Label"},e.createElement(s,{role:"presentation"})),e.createElement(t,{"aria-label":"Label",isDisabled:!0},e.createElement(s,{role:"presentation"})),e.createElement(t,{"aria-label":"Label",isDisabled:!0},e.createElement(a,{size:"sm",accessibilityLabel:"submitting label"}))),e.createElement(r.Row,{rowTitle:"Small"},e.createElement(t,{size:"small"},"Label",e.createElement(l,{role:"presentation"})),e.createElement(t,{size:"small",isDisabled:!0},"Label",e.createElement(l,{role:"presentation"})),e.createElement(t,{size:"small",isDisabled:!0},e.createElement(a,{size:"sm",accessibilityLabel:"submitting label"}))),e.createElement(r.Row,{rowTitle:"Icon only small"},e.createElement(t,{size:"small"},e.createElement(s,{role:"img","aria-label":"Remove label"})),e.createElement(t,{size:"small",isDisabled:!0},e.createElement(s,{role:"img","aria-label":"Remove label"})),e.createElement(t,{size:"small",isDisabled:!0},e.createElement(a,{size:"sm",accessibilityLabel:"Removing label"})))))),parameters:{pseudo:{hover:'[data-hovered="true"]',active:'[data-pressed="true"]',focus:'[data-focused="true"]',focusVisible:'[data-focus-visible="true"]'}}},i={...o,name:"Sticker Sheet (Default)"},n={...o,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}},m={...o,name:"Sticker Sheet (Reversed)",parameters:{reverseColors:!0},args:{isReversed:!0}};var b,p,d;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,E,S;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var h,L,g;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    reverseColors: true
  },
  args: {
    isReversed: true
  }
}`,...(g=(L=m.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};const K=["StickerSheetDefault","StickerSheetRTL","StickerSheetReversed"];export{i as StickerSheetDefault,n as StickerSheetRTL,m as StickerSheetReversed,K as __namedExportsOrder,J as default};
