import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{R as a}from"./Radio-DztYLnpN.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";const b={title:"Components/Radio controls/Radio",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},d={render:({isReversed:r})=>e.createElement(t,{isReversed:r},e.createElement(t.Header,{headings:["Default","Focus","Hover"],hasVerticalHeadings:!0}),e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Off"},e.createElement(a,{id:"radio1",name:"radio1",value:"radio1",reversed:r}),e.createElement(a,{id:"radio2",name:"radio2",value:"radio2",reversed:r,"data-sb-pseudo-styles":"focus"}),e.createElement(a,{id:"radio3",name:"radio3",value:"radio3",reversed:r,"data-sb-pseudo-styles":"hover"})),e.createElement(t.Row,{rowTitle:"On"},e.createElement(a,{id:"radio11",name:"radio11",value:"radio11",reversed:r,selectedStatus:!0}),e.createElement(a,{id:"radio22",name:"radio22",value:"radio22",reversed:r,selectedStatus:!0,"data-sb-pseudo-styles":"focus"}),e.createElement(a,{id:"radio33",name:"radio33",value:"radio33",reversed:r,selectedStatus:!0,"data-sb-pseudo-styles":"hover"})))),parameters:{pseudo:{focus:'[data-sb-pseudo-styles="focus"]',hover:'[data-sb-pseudo-styles="hover"] + span'}}},s={...d,name:"Sticker Sheet (Default)"},o={...d,name:"Sticker Sheet (Reversed)",parameters:{...d.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var n,m,u;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const E=["StickerSheetDefault","StickerSheetReversed"];export{s as StickerSheetDefault,o as StickerSheetReversed,E as __namedExportsOrder,b as default};
