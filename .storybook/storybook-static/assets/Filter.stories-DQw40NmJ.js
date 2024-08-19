import{R as o,r as d}from"./index-CTjT7uj6.js";import{a as F}from"./chunk-454WOBUV-CM0pFb8Z.js";import{f}from"./index-BySiBzEG.js";import{F as m,a as b}from"./FilterContents-MyXMWDj6.js";import{F as O}from"./FilterButton-BGzpTfmP.js";import{F as S}from"./FilterButtonRemovable-CDjh8qGF.js";const v={title:"Components/Filter Base",component:m,argTypes:{children:{control:!1},isOpen:{control:!1},setIsOpen:{control:!1},renderTrigger:{control:!1},onMount:{control:!1}},args:{children:o.createElement(b,null,"Filter Contents"),renderTrigger:e=>o.createElement(O,{label:"Label",...e}),isOpen:!1,setIsOpen:f()}},p={render:e=>{const[g,u]=d.useState(e.isOpen);return o.createElement(m,{...e,isOpen:g,setIsOpen:u})}},r={...p},t={...p,args:{renderTrigger:e=>o.createElement(S,{triggerButtonProps:{label:"Label",...e},removeButtonProps:{onClick:F("remove button clicked")}})}};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...FilterTemplate
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...FilterTemplate,
  args: {
    renderTrigger: (triggerProps): JSX.Element => <FilterButtonRemovable triggerButtonProps={{
      label: "Label",
      ...triggerProps
    }} removeButtonProps={{
      onClick: action("remove button clicked")
    }} />
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const T=["SimpleFilter","RemovableFilter"],k=Object.freeze(Object.defineProperty({__proto__:null,RemovableFilter:t,SimpleFilter:r,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{k as F,t as R,r as S};
