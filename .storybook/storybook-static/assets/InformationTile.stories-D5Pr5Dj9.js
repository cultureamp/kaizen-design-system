import{R as e}from"./index-CTjT7uj6.js";import{I as n}from"./InformationTile-CMH8VUQP.js";const g={title:"Components/Tiles/InformationTile",component:n,args:{title:"Title",metadata:"Side A",footer:e.createElement(e.Fragment,null,"Example Footer")},argTypes:{mood:{control:!1}}},a={parameters:{docs:{canvas:{sourceState:"shown"}}}},r={render:o=>e.createElement(e.Fragment,null,e.createElement(n,{...o,variant:"default",title:"default"}),e.createElement(n,{...o,variant:"expert-advice",title:"expert-advice"})),decorators:[o=>e.createElement("div",{className:"flex gap-16 flex-wrap"},e.createElement(o,null))]},t={args:{information:"Side B"}};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <>
      <InformationTile {...args} variant="default" title="default" />
      <InformationTile {...args} variant="expert-advice" title="expert-advice" />
    </>,
  decorators: [Story => <div className="flex gap-16 flex-wrap">
        <Story />
      </div>]
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,f,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    information: "Side B"
  }
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const v=["Playground","Variants","Information"],I=Object.freeze(Object.defineProperty({__proto__:null,Information:t,Playground:a,Variants:r,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{I,a as P,r as V,t as a};
