import{R as e}from"./index-CTjT7uj6.js";import{W as A}from"./WritingIcon-36WWhCh-.js";import{T as a}from"./TextField-C70Pg5K2.js";const I={title:"Components/Text Input controls/Text Field",component:a,args:{labelText:"Label"}},t={parameters:{docs:{canvas:{sourceState:"shown"}}}},r={render:()=>e.createElement("div",{className:"flex gap-16"},e.createElement(a,{labelText:"Label",type:"text",value:"Text"}),e.createElement(a,{labelText:"Label",type:"email",value:"email@email.com"}),e.createElement(a,{labelText:"Label",type:"password",value:"password"})),parameters:{docs:{source:{type:"dynamic"}}}},s={args:{icon:e.createElement(A,{role:"presentation"})}},o={args:{description:"A short description"}},n={render:()=>e.createElement("div",{className:"flex gap-16"},e.createElement(a,{labelText:"Label",type:"text",value:"Success",status:"success",validationMessage:"A successful entry"}),e.createElement(a,{labelText:"Label",type:"text",value:"Caution",status:"caution",validationMessage:"Just a little bit incorrect"}),e.createElement(a,{labelText:"Label",type:"text",value:"Error",status:"error",validationMessage:"Absolutely wrong"})),parameters:{docs:{source:{type:"dynamic"}}}},l={args:{reversed:!0},decorators:[M=>e.createElement("div",{className:"bg-purple-700 p-16"},e.createElement(M,null))]};var c,i,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16">
      <TextField labelText="Label" type="text" value="Text" />
      <TextField labelText="Label" type="email" value="email@email.com" />
      <TextField labelText="Label" type="password" value="password" />
    </div>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,b,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: <WritingIcon role="presentation" />
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,y,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    description: "A short description"
  }
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,E,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16">
      <TextField labelText="Label" type="text" value="Success" status="success" validationMessage="A successful entry" />
      <TextField labelText="Label" type="text" value="Caution" status="caution" validationMessage="Just a little bit incorrect" />
      <TextField labelText="Label" type="text" value="Error" status="error" validationMessage="Absolutely wrong" />
    </div>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var f,F,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    reversed: true
  },
  decorators: [Story => <div className="bg-purple-700 p-16">
        <Story />
      </div>]
}`,...(w=(F=l.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const N=["Playground","Types","Icon","Description","Validation","Reversed"],P=Object.freeze(Object.defineProperty({__proto__:null,Description:o,Icon:s,Playground:t,Reversed:l,Types:r,Validation:n,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{o as D,s as I,t as P,l as R,P as T,n as V,r as a};
