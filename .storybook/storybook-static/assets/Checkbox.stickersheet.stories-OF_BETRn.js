import{R as e}from"./index-CTjT7uj6.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{C as c}from"./Checkbox-CI1euWka.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./MinusIcon-3DH7qpb8.js";const y={title:"Components/MultiSelect/Checkbox",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},n=[{title:"Unchecked",status:"unchecked"},{title:"Checked",status:"checked"},{title:"Indeterminate",status:"indeterminate"}],m={render:()=>e.createElement(t,null,e.createElement(t.Header,{headings:["Default","Hover","Focus"],hasVerticalHeadings:!0}),e.createElement(t.Body,null,n.map(({title:o,status:a})=>e.createElement(t.Row,{key:o,rowTitle:o},e.createElement(c,{"aria-label":"Read only label",checkedStatus:a,readOnly:!0}),e.createElement(c,{"aria-label":"Hover label",classNameOverride:"story__checkbox--hover",checkedStatus:a,readOnly:!0}),e.createElement(c,{"aria-label":"Focus label",classNameOverride:"story__checkbox--focus",checkedStatus:a,readOnly:!0}))))),parameters:{pseudo:{hover:".story__checkbox--hover",focusWithin:".story__checkbox--focus"}}},r={...m,name:"Sticker Sheet (Default)"};var s,l,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const x=["StickerSheetDefault"];export{r as StickerSheetDefault,x as __namedExportsOrder,y as default};
