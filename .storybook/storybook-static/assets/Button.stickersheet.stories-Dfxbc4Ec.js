import{R as e}from"./index-CTjT7uj6.js";import{A as S}from"./AddIcon-C6V_KfCs.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{B as a}from"./Button-DDkdQqLR.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";const ne={title:"Actions/Button/v1",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},d={render:({isReversed:t})=>{const m=[{title:"Default",props:{label:"Label"}},{title:"Primary",props:{label:"Label",primary:!0}},{title:"Destructive",props:{label:"Label",destructive:!0}},{title:"Secondary",props:{label:"Label",secondary:!0}}],l=t?m:[...m,{title:"Secondary Destructive",props:{label:"Label",secondary:!0,destructive:!0}}],i={label:"Label",icon:e.createElement(S,{role:"presentation"})},c={label:"Label",icon:e.createElement(S,{role:"presentation"}),iconPosition:"end"},n={label:"Label",badge:{text:"4"}},F={...n,icon:e.createElement(S,{role:"presentation"})},x={...n,icon:e.createElement(S,{role:"presentation"}),iconPosition:"end"};return e.createElement(e.Fragment,null,e.createElement(r,{heading:"Button",isReversed:t},e.createElement(r.Header,{headings:["Base","Hover","Active","Focus","Disabled"],headingsWidth:"10rem",hasVerticalHeadings:!0,verticalHeadingsWidth:"12rem"}),e.createElement(r.Body,null,l.map(({title:o,props:s})=>e.createElement(r.Row,{key:o,rowTitle:o},e.createElement(a,{reversed:t,...s}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"hover",...s}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"active",...s}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"focus",...s}),e.createElement(a,{reversed:t,...s,disabled:!0}))))),e.createElement(r,{isReversed:t,heading:"Size small (formerly form)"},e.createElement(r.Header,{headings:["Base","Hover","Active","Focus","Disabled"],hasVerticalHeadings:!0}),e.createElement(r.Body,null,l.map(({title:o,props:s})=>e.createElement(r.Row,{key:o,rowTitle:o},e.createElement(a,{reversed:t,...s,size:"small"}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"hover",...s,size:"small"}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"active",...s,size:"small"}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"focus",...s,size:"small"}),e.createElement(a,{reversed:t,...s,disabled:!0,size:"small"}))))),e.createElement(r,{isReversed:t,heading:"With Icon / Badge"},e.createElement(r.Header,{headings:["Icon Left","Icon Right","Icon Left with Badge","Icon Right with Badge","Badge Only"],headingsWidth:"10rem",hasVerticalHeadings:!0,verticalHeadingsWidth:"12rem"}),e.createElement(r.Body,null,l.map(({title:o,props:s})=>e.createElement(r.Row,{key:o,rowTitle:o},e.createElement(a,{reversed:t,...s,...i}),e.createElement(a,{reversed:t,...s,...c}),e.createElement(a,{reversed:t,...s,...F}),e.createElement(a,{reversed:t,...s,...x}),e.createElement(a,{reversed:t,...s,...n}))))))},parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},u={render:({isReversed:t})=>{const m=[{title:"Default",props:{label:"Label"}},{title:"Primary",props:{label:"Label",primary:!0}},{title:"Destructive",props:{label:"Label",destructive:!0}},{title:"Secondary",props:{label:"Label",secondary:!0}}],l=t?m:[...m,{title:"Secondary Destructive",props:{label:"Label",secondary:!0,destructive:!0}}],i={label:"Label",working:!0,workingLabel:"Submitting",workingLabelHidden:!0};return e.createElement(e.Fragment,null,e.createElement(r,{heading:"Button",isReversed:t},e.createElement(r.Header,{headings:["Working","Working (Focus)"],headingsWidth:"10rem",hasVerticalHeadings:!0,verticalHeadingsWidth:"12rem"}),e.createElement(r.Body,null,l.map(({title:c,props:n})=>e.createElement(r.Row,{key:c,rowTitle:c},e.createElement(a,{reversed:t,...n,...i}),e.createElement(a,{reversed:t,"data-sb-pseudo-styles":"focus",...n,...i}))))),e.createElement(r,{isReversed:t,heading:"Size small (formerly form)"},e.createElement(r.Header,{headings:["Working","Working Focus"],hasVerticalHeadings:!0}),e.createElement(r.Body,null,l.map(({title:c,props:n})=>e.createElement(r.Row,{key:c,rowTitle:c},e.createElement(a,{reversed:t,...n,size:"small",...i}),e.createElement(a,{reversed:t,...n,size:"small","data-sb-pseudo-styles":"focus",...i}))))))},parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},p={...d,name:"Sticker Sheet (Default)"},h={...d,name:"Sticker Sheet (Reversed)",parameters:{...d.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},k={...d,name:"Sticker Sheet (RTL)",parameters:{chromatic:{delay:1200},...d.parameters,textDirection:"rtl"}},g={...u,name:"Sticker Sheet Working (Default)"},b={...u,name:"Sticker Sheet Working (Reversed)",parameters:{...u.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},E={...u,name:"Sticker Sheet Working (RTL)",parameters:{chromatic:{delay:1200},...u.parameters,textDirection:"rtl"}};var y,f,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,W,L;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(W=h.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var P,R,D;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    chromatic: {
      delay: 1200
    },
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(D=(R=k.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var _,B,H;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...WorkingStickerSheetTemplate,
  name: "Sticker Sheet Working (Default)"
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var A,w,I;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...WorkingStickerSheetTemplate,
  name: "Sticker Sheet Working (Reversed)",
  parameters: {
    ...WorkingStickerSheetTemplate.parameters,
    backgrounds: {
      default: "Purple 700"
    }
  },
  args: {
    isReversed: true
  }
}`,...(I=(w=b.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,V,z;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...WorkingStickerSheetTemplate,
  name: "Sticker Sheet Working (RTL)",
  parameters: {
    chromatic: {
      delay: 1200
    },
    ...WorkingStickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(z=(V=E.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const oe=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL","StickerSheetWorkingDefault","StickerSheetWorkingReversed","StickerSheetWorkingRTL"];export{p as StickerSheetDefault,k as StickerSheetRTL,h as StickerSheetReversed,g as StickerSheetWorkingDefault,E as StickerSheetWorkingRTL,b as StickerSheetWorkingReversed,oe as __namedExportsOrder,ne as default};
