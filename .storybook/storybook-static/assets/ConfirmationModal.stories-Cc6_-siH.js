import{R as e,r as P}from"./index-CTjT7uj6.js";import{f as m}from"./index-BySiBzEG.js";import{i as _}from"./isChromatic-VqprqId_.js";import{T as E}from"./Text-D2gQH1xL.js";import{c as x}from"./controls-11hPvmVr.js";import{C as T}from"./ConfirmationModal-BD88y0Yu.js";const I=_(),R={title:"Components/Modals/Confirmation Modal",component:T,args:{isOpen:!1,title:"Confirmation modal title",variant:"success",children:e.createElement(E,{variant:"body"},"Confirmation modals contain smaller pieces of content and can provide additional information to aide the user."),onConfirm:m(),onDismiss:m()},argTypes:{children:{control:{disable:!0}},mood:{control:{disable:!0}}}},t={render:h=>{const[O,s]=P.useState(I),v=()=>s(!0),i=()=>s(!1);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"border border-gray-500",onClick:v},"Open Modal"),e.createElement(T,{...h,isOpen:O,onConfirm:i,onDismiss:i}))},...x},a={...t,parameters:{docs:{canvas:{sourceState:"shown"}}}},o={...t,args:{isProminent:!0}},r={...t,args:{variant:"cautionary"}},n={...t,args:{unpadded:!0}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...ConfirmationModalTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...ConfirmationModalTemplate,
  args: {
    isProminent: true
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var C,g,M;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...ConfirmationModalTemplate,
  args: {
    variant: "cautionary"
  }
}`,...(M=(g=r.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var y,S,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...ConfirmationModalTemplate,
  args: {
    unpadded: true
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const j=["Playground","Prominent","Cautionary","Unpadded"],F=Object.freeze(Object.defineProperty({__proto__:null,Cautionary:r,Playground:a,Prominent:o,Unpadded:n,__namedExportsOrder:j,default:R},Symbol.toStringTag,{value:"Module"}));export{F as C,a as P,o as a,r as b};
