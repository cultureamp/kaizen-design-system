import{R as e}from"./index-CTjT7uj6.js";import{L as o}from"./LoadingSpinner-DHfeGxpm.js";const S={title:"Components/Loading states/LoadingSpinner",component:o,args:{accessibilityLabel:"Loading"}},r={parameters:{docs:{canvas:{sourceState:"shown"}}}},a={args:{classNameOverride:"text-green-400"}},s={render:n=>e.createElement(e.Fragment,null,e.createElement(o,{...n,size:"sm"}),e.createElement(o,{...n,size:"md"})),decorators:[n=>e.createElement("div",{className:"flex gap-24"},e.createElement(n,null))]};var t,c,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    classNameOverride: "text-green-400"
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,g,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <>
      <LoadingSpinner {...args} size="sm" />
      <LoadingSpinner {...args} size="md" />
    </>,
  decorators: [Story => <div className="flex gap-24">
        <Story />
      </div>]
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const v=["Playground","ClassNameOverride","Size"],y=Object.freeze(Object.defineProperty({__proto__:null,ClassNameOverride:a,Playground:r,Size:s,__namedExportsOrder:v,default:S},Symbol.toStringTag,{value:"Module"}));export{a as C,y as L,r as P,s as S};
