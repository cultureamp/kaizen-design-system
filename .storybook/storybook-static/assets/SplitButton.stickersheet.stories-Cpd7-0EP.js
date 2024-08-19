import{R as e}from"./index-CTjT7uj6.js";import{S as o,e as n,b as a,a as f}from"./examples-CzxOwXVR.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import"./index-CCQ3W5xA.js";import"./ChevronDownIcon-prLLyjG_.js";import"./SVG-7WFwBCn9.js";import"./useIntl-Ci3jBQGG.js";import"./startOfDay-MoyOWjoN.js";import"./index-DBmEjBSQ.js";import"./tslib.es6-CY32MZYl.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./MenuItem-PF-eSNqW.js";import"./index-9r8iugjR.js";import"./usePopper-D4ykrdaR.js";import"./Combination-DFaMps7A.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./DuplicateIcon-C-Oq_m9_.js";import"./EditIcon-r0BJhC_f.js";import"./index-BRmo6siI.js";import"./Heading-hQmlkvcj.js";const N={title:"Components/Buttons/SplitButton",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},P=[{rowTitle:"Default",actionButtonProps:n,dropdownContent:a},{rowTitle:"Anchor Link",actionButtonProps:f,dropdownContent:a}],s={render:({isReversed:t})=>e.createElement(e.Fragment,null,e.createElement(r,{isReversed:t,heading:"Split Button"},e.createElement(r.Header,{headings:["Base","Disabled"],hasVerticalHeadings:!0,verticalHeadingsWidth:"10rem"}),e.createElement(r.Body,null,P.map(({rowTitle:m,...d})=>e.createElement(r.Row,{key:m,rowTitle:m},e.createElement(o,{isReversed:t,...d}),e.createElement(o,{isReversed:t,disabled:!0,...d}))))),e.createElement(r,{isReversed:t,heading:"Pseudo states"},e.createElement(r.Header,{headings:["Hover","Active","Focus"],hasVerticalHeadings:!0,verticalHeadingsWidth:"10rem"}),e.createElement(r.Body,null,e.createElement(r.Row,{rowTitle:"Action button"},e.createElement(o,{isReversed:t,actionButtonProps:{...n,"data-sb-pseudo-styles":"hover"},dropdownContent:a}),e.createElement(o,{isReversed:t,actionButtonProps:{...n,"data-sb-pseudo-styles":"active"},dropdownContent:a}),e.createElement(o,{isReversed:t,actionButtonProps:{...n,"data-sb-pseudo-styles":"focus"},dropdownContent:a})),e.createElement(r.Row,{rowTitle:"Dropdown button"},e.createElement(o,{isReversed:t,actionButtonProps:n,dropdownContent:a,dropdownButtonProps:{"data-sb-pseudo-styles":"hover"}}),e.createElement(o,{isReversed:t,actionButtonProps:n,dropdownContent:a,dropdownButtonProps:{"data-sb-pseudo-styles":"active"}}),e.createElement(o,{isReversed:t,actionButtonProps:n,dropdownContent:a,dropdownButtonProps:{"data-sb-pseudo-styles":"focus"}}))))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',active:'[data-sb-pseudo-styles="active"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}}},c={...s,name:"Sticker Sheet (Default)"},p={...s,name:"Sticker Sheet (Reversed)",parameters:{...s.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},i={...s,name:"Sticker Sheet (RTL)",parameters:{...s.parameters,textDirection:"rtl"}};var l,u,S;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(S=(u=c.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var h,k,B;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var b,E,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const Q=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{c as StickerSheetDefault,i as StickerSheetRTL,p as StickerSheetReversed,Q as __namedExportsOrder,N as default};
