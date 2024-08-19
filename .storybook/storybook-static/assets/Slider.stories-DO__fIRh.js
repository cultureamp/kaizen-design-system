import{R as e}from"./index-CTjT7uj6.js";import{S as o}from"./Slider-C9rULQ96.js";const P={title:"Components/Slider",component:o,args:{labelText:e.createElement(e.Fragment,null,"Slider"),minLabel:"Min",maxLabel:"Max"}},r={parameters:{docs:{canvas:{sourceState:"shown"}}}},t={render:a=>e.createElement("div",{className:"flex flex-col gap-16"},e.createElement(o,{...a,labelText:"Default",variant:"default"}),e.createElement(o,{...a,labelText:"Prominent",variant:"prominent"}))},l={},n={render:a=>e.createElement("div",{className:"flex flex-col gap-16"},e.createElement(o,{...a,labelText:"Inline Label Position",labelPosition:"inline"}),e.createElement(o,{...a,labelText:"Block Label Position",labelPosition:"block"}))};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-16">
      <Slider {...args} labelText="Default" variant="default" />
      <Slider {...args} labelText="Prominent" variant="prominent" />
    </div>
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,u,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var S,g,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-16">
      <Slider {...args} labelText="Inline Label Position" labelPosition="inline" />
      <Slider {...args} labelText="Block Label Position" labelPosition="block" />
    </div>
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const v=["Playground","Variants","MinMaxLabels","LabelPosition"],E=Object.freeze(Object.defineProperty({__proto__:null,LabelPosition:n,MinMaxLabels:l,Playground:r,Variants:t,__namedExportsOrder:v,default:P},Symbol.toStringTag,{value:"Module"}));export{n as L,l as M,r as P,E as S,t as V};
