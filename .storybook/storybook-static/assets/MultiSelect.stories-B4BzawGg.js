import{r as u,R as j}from"./index-CTjT7uj6.js";import{f as d}from"./index-BySiBzEG.js";import{M as W}from"./MultiSelect-Cvui0KMq.js";const R={title:"Components/MultiSelect",component:W,argTypes:{selectedValues:{options:["None","Single","Multiple"],control:{type:"select",labels:{None:"new Set()",Single:'new Set(["waffle"])',Multiple:'new Set(["waffle", "pancakes"])'}},mapping:{None:new Set,Single:new Set(["waffle"]),Multiple:new Set(["waffle","pancakes"])}}},args:{label:"Breakfast order",selectedValues:new Set,isOpen:!1,items:[{label:"Pancakes",value:"pancakes"},{label:"Waffle",value:"waffle"},{label:"Toastie",value:"toastie"}],onSelectedValuesChange:d(),onOpenChange:d()}},s={render:e=>{const[x,i]=u.useState(new Set(e.selectedValues)),[N,p]=u.useState(e.isOpen);return u.useEffect(()=>{p(e.isOpen)},[e.isOpen]),u.useEffect(()=>{i(e.selectedValues)},[e.selectedValues]),j.createElement(W,{...e,selectedValues:x,onSelectedValuesChange:i,isOpen:N,onOpenChange:p})}},a={...s,parameters:{docs:{canvas:{sourceState:"shown"}}}},z=`
<MultiSelect
  items={[
    { label: "Pancakes", value: "pancakes" },
    { label: "Waffles", value: "waffles" },
    { label: "Toastie", value: "toastie" },
  ]}
  {...props}
/>
`,t={...s,parameters:{docs:{source:{code:z}}}},q=`
const [selectedValues, setSelectedValues] = useState<MultiSelectProps["selectedValues"]>(new Set(["waffle"]))

return (
  <MultiSelect
    items={[
      { label: "Pancakes", value: "pancakes" },
      { label: "Waffles", value: "waffles" },
      { label: "Toastie", value: "toastie" },
    ]}
    selectedValues={selectedValues}
    onSelectedValuesChange={setSelectedValues}
    {...props}
  />
)
`,r={...s,args:{selectedValues:new Set(["waffle"])},parameters:{docs:{source:{code:q}}}},A=`
const [isOpen, setIsOpen] = useState<boolean>(false)

return (
  <MultiSelect
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    {...props}
  />
)
`,n={...s,parameters:{docs:{source:{code:A}}}},o={...s,args:{description:"Breakfast will be delivered directly to your house"}},l={...s,args:{validationMessage:{status:"error",message:"There are no more waffles"}}},c={...s,args:{description:"Breakfast will be delivered to your house.",validationMessage:{status:"caution",message:"Only five more waffles remain."}}};var m,S,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...MultiSelectTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var g,w,M;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...MultiSelectTemplate,
  parameters: {
    docs: {
      source: {
        code: sourceCodeItems
      }
    }
  }
}`,...(M=(w=t.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var V,O,v;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...MultiSelectTemplate,
  args: {
    selectedValues: new Set(["waffle"])
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSelectedValues
      }
    }
  }
}`,...(v=(O=r.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var b,h,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...MultiSelectTemplate,
  parameters: {
    docs: {
      source: {
        code: sourceCodeOpenState
      }
    }
  }
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var y,k,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...MultiSelectTemplate,
  args: {
    description: "Breakfast will be delivered directly to your house"
  }
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var I,P,_;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...MultiSelectTemplate,
  args: {
    validationMessage: {
      status: "error",
      message: "There are no more waffles"
    }
  }
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var B,D,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...MultiSelectTemplate,
  args: {
    description: "Breakfast will be delivered to your house.",
    validationMessage: {
      status: "caution",
      message: "Only five more waffles remain."
    }
  }
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const F=["Playground","Items","SelectedValues","OpenState","Description","ValidationMessage","ValidationMessageWithDescription"],K=Object.freeze(Object.defineProperty({__proto__:null,Description:o,Items:t,OpenState:n,Playground:a,SelectedValues:r,ValidationMessage:l,ValidationMessageWithDescription:c,__namedExportsOrder:F,default:R},Symbol.toStringTag,{value:"Module"}));export{o as D,t as I,K as M,n as O,a as P,r as S,l as V,c as a};
