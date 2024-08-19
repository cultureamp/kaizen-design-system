import{R as e}from"./index-CTjT7uj6.js";import{U as b}from"./UserAddIcon-D3cG01qE.js";import{W as w}from"./WritingIcon-36WWhCh-.js";import{I as t}from"./Input-BFyrvMXQ.js";const A={title:"Components/Inputs/Input",component:t,parameters:{a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},n={parameters:{docs:{canvas:{sourceState:"shown"}}}},a={render:()=>e.createElement("ul",{className:"flex gap-16 list-none p-0 m-0"},e.createElement("li",null,e.createElement(t,{type:"text",value:"Text"})),e.createElement("li",null,e.createElement(t,{type:"email",value:"email@email.com"})),e.createElement("li",null,e.createElement(t,{type:"password",value:"password"}))),parameters:{docs:{source:{type:"dynamic"}}}},r={render:()=>e.createElement("ul",{className:"flex gap-16 list-none p-0 m-0"},e.createElement("li",null,e.createElement(t,{type:"text",value:"Default",status:"default"})),e.createElement("li",null,e.createElement(t,{type:"text",value:"Success",status:"success"})),e.createElement("li",null,e.createElement(t,{type:"text",value:"Caution",status:"caution"})),e.createElement("li",null,e.createElement(t,{type:"text",value:"Error",status:"error"}))),parameters:{docs:{source:{type:"dynamic"}}}},s={render:()=>e.createElement("ul",{className:"flex gap-16 list-none p-0 m-0"},e.createElement("li",null,e.createElement(t,{type:"text",value:"Start Icon",startIconAdornment:e.createElement(b,{role:"presentation"})})),e.createElement("li",null,e.createElement(t,{type:"text",value:"End Icon",endIconAdornment:e.createElement(w,{role:"presentation"})}))),parameters:{docs:{source:{type:"dynamic"}}}},l={args:{reversed:!0},decorators:[N=>e.createElement("div",{className:"bg-purple-700 p-16"},e.createElement(N,null))]};var o,c,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ul className="flex gap-16 list-none p-0 m-0">
      <li>
        <Input type="text" value="Text" />
      </li>
      <li>
        <Input type="email" value="email@email.com" />
      </li>
      <li>
        <Input type="password" value="password" />
      </li>
    </ul>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,y,E;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ul className="flex gap-16 list-none p-0 m-0">
      <li>
        <Input type="text" value="Default" status="default" />
      </li>
      <li>
        <Input type="text" value="Success" status="success" />
      </li>
      <li>
        <Input type="text" value="Caution" status="caution" />
      </li>
      <li>
        <Input type="text" value="Error" status="error" />
      </li>
    </ul>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(E=(y=r.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var I,v,x;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ul className="flex gap-16 list-none p-0 m-0">
      <li>
        <Input type="text" value="Start Icon" startIconAdornment={<UserAddIcon role="presentation" />} />
      </li>
      <li>
        <Input type="text" value="End Icon" endIconAdornment={<WritingIcon role="presentation" />} />
      </li>
    </ul>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,f,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    reversed: true
  },
  decorators: [Story => <div className="bg-purple-700 p-16">
        <Story />
      </div>]
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const T=["Playground","Types","Status","Icons","Reversed"],O=Object.freeze(Object.defineProperty({__proto__:null,Icons:s,Playground:n,Reversed:l,Status:r,Types:a,__namedExportsOrder:T,default:A},Symbol.toStringTag,{value:"Module"}));export{O as I,n as P,l as R,r as S,a as T,s as a};
