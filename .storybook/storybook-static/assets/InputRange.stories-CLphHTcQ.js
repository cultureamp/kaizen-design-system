import{R as r}from"./index-CTjT7uj6.js";import{I as s}from"./InputRange-9Y0qOBCE.js";const g={title:"Components/Inputs/InputRange",component:s,args:{id:"inputRange",minLabel:"Min",maxLabel:"Max"},parameters:{a11y:{config:{rules:[{id:"label",enabled:!1},{id:"label-title-only",enabled:!1}]}}}},e={parameters:{docs:{canvas:{sourceState:"shown"}}}},a={render:()=>r.createElement("div",{className:"flex flex-col gap-16"},r.createElement(s,{id:"inputRange",minLabel:"Minimum",maxLabel:"Maximum"}))},n={render:()=>r.createElement("div",{className:"flex flex-col gap-16"},r.createElement(s,{id:"inputRangeRange",minLabel:"Minimum",maxLabel:"Maximum",min:10,max:100}))};var t,m,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(o=(m=e.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16">
      <InputRange id="inputRange" minLabel="Minimum" maxLabel="Maximum" />
    </div>
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16">
      <InputRange id="inputRangeRange" minLabel="Minimum" maxLabel="Maximum" min={10} max={100} />
    </div>
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["Playground","Labels","Range"],f=Object.freeze(Object.defineProperty({__proto__:null,Labels:a,Playground:e,Range:n,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{f as I,a as L,e as P,n as R};
