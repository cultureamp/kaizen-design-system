import{r as T,R as e}from"./index-CTjT7uj6.js";import{f as _}from"./index-BySiBzEG.js";import{i as I}from"./isChromatic-VqprqId_.js";import{c,M as P}from"./controls-11hPvmVr.js";import{T as t}from"./Text-D2gQH1xL.js";import{C as S}from"./ContextModal-CVMQgrxR.js";import{am as w}from"./Spot-DEMudAsV.js";const A=I(),D={title:"Components/Modals/Context Modal",component:S,args:{isOpen:!1,title:"Context modal title",children:void 0,onDismiss:_()},argTypes:{children:{control:{disable:!0}}}},s={render:l=>{const[v,i]=T.useState(A),O=()=>i(!0),d=()=>i(!1);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"border border-gray-500",onClick:O},"Open Modal"),e.createElement(S,{...l,isOpen:v,onConfirm:d,onDismiss:d,image:e.createElement(w,{classNameOverride:l.layout==="landscape"?"!w-auto h-200":void 0,alt:"placeholder"})},e.createElement(P,null,e.createElement(t,{variant:"body"},"Intro defining what the modal is trying to explain or depict. Intro defining what the modal is trying to explain or depict.")),e.createElement("ul",null,e.createElement("li",null,e.createElement(t,{variant:"body"},"Key point to the benefits of the feature")),e.createElement("li",null,e.createElement(t,{variant:"body"},"Key point to the benefits of the feature")),e.createElement("li",null,e.createElement(t,{variant:"body"},"Key point to the benefits of the feature"))),e.createElement(t,{variant:"body"},"More information to conclude can go here. More information to conclude can go here. More information to conclude can go here.")))}},a={...s,parameters:{docs:{canvas:{sourceState:"shown"}}}},o={...s,args:{layout:"portrait"},...c},r={...s,args:{layout:"landscape"},...c},n={...s,args:{unpadded:!0},...c};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...ContextModalTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...ContextModalTemplate,
  args: {
    layout: "portrait"
  },
  ...chromaticModalSettings
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,M,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...ContextModalTemplate,
  args: {
    layout: "landscape"
  },
  ...chromaticModalSettings
}`,...(C=(M=r.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var b,E,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...ContextModalTemplate,
  args: {
    unpadded: true
  },
  ...chromaticModalSettings
}`,...(x=(E=n.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const K=["Playground","Portrait","Landscape","Unpadded"],F=Object.freeze(Object.defineProperty({__proto__:null,Landscape:r,Playground:a,Portrait:o,Unpadded:n,__namedExportsOrder:K,default:D},Symbol.toStringTag,{value:"Module"}));export{F as C,r as L,a as P,n as U,o as a};
