import{R as e}from"./index-CTjT7uj6.js";import{A as u}from"./AddIcon-C6V_KfCs.js";import{M as g}from"./MeatballsIcon-w9tBPyZh.js";import{P,u as E}from"./Popover-BcT7iVVN.js";const f={title:"Components/Popover",component:P,args:{children:void 0,referenceElement:void 0},argTypes:{customIcon:{options:["None","MeatballsIcon","AddIcon"],control:{type:"radio"},mapping:{None:void 0,MeatballsIcon:e.createElement(g,{role:"presentation"}),AddIcon:e.createElement(u,{role:"presentation"})}}}},d={render:a=>{const[o,n]=E();return e.createElement("div",{className:"text-center relative"},e.createElement("button",{type:"button",className:"inline-block mt-112",ref:o},"Pop"),e.createElement(n,{...a},"Popover body that explains something useful."," ",e.createElement("a",{href:"/"},"Optional link")))}},t={...d,decorators:[a=>e.createElement("div",{className:"h-[300px]"},e.createElement(a,null))]},r={render:(a,o)=>{const n=v=>d.render({...a,...v},o);return e.createElement("div",{className:"flex pl-32"},e.createElement("div",{className:"w-[150px]"},e.createElement(n,{...a,heading:"Default"})),e.createElement("div",{className:"w-[150px]"},e.createElement(n,{...a,variant:"positive",heading:"Positive"})),e.createElement("div",{className:"w-[150px]"},e.createElement(n,{...a,variant:"informative",heading:"Informative"})),e.createElement("div",{className:"w-[150px]"},e.createElement(n,{...a,variant:"negative",heading:"Negative"})),e.createElement("div",{className:"w-[150px]"},e.createElement(n,{...a,variant:"cautionary",heading:"Cautionary"})))},parameters:{docs:{source:{type:"dynamic"}}}};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...PopoverTemplate,
  decorators: [Story => <div className="h-[300px]">
        <Story />
      </div>]
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args, context) => {
    const Popover = (props: PopoverProps): JSX.Element => PopoverTemplate.render!({
      ...args,
      ...props
    }, context);
    return <div className="flex pl-32">
        <div className="w-[150px]">
          <Popover {...args} heading="Default" />
        </div>
        <div className="w-[150px]">
          <Popover {...args} variant="positive" heading="Positive" />
        </div>
        <div className="w-[150px]">
          <Popover {...args} variant="informative" heading="Informative" />
        </div>
        <div className="w-[150px]">
          <Popover {...args} variant="negative" heading="Negative" />
        </div>
        <div className="w-[150px]">
          <Popover {...args} variant="cautionary" heading="Cautionary" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["Playground","Variants"],w=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,Variants:r,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{w as P,r as V,t as a};
