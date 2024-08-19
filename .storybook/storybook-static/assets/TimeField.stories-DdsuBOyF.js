import{r as c,R as i}from"./index-CTjT7uj6.js";import{f as m}from"./index-BySiBzEG.js";import{T as n}from"./TimeField-bKiX3Vwg.js";const p={title:"Components/TimeField",component:n,argTypes:{locale:{options:["en-US","en-AU","en-GB","fr-CA","zh-Hant"],control:{type:"radio"}},status:{control:{type:"radio"},options:["default","error"]},validationMessage:{control:"text"}},args:{label:"Time",locale:"en-US",value:null,onChange:m()}},d={render:o=>{const[s,l]=c.useState(o.value);return i.createElement(n,{...o,value:s,onChange:l})}},e={...d,parameters:{docs:{canvas:{sourceState:"shown"}}}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...TimeFieldTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const u=["Playground"],S=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{e as P,S as T};
