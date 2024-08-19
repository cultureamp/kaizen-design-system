import{R as e}from"./index-CTjT7uj6.js";import{T as a}from"./TextAreaField-CI9tQ2Xh.js";const F={title:"Components/Text Input controls/Text Area Field",component:a,args:{labelText:"Label"}},r={parameters:{docs:{canvas:{sourceState:"shown"}}}},t={render:()=>e.createElement("div",{className:"flex gap-16"},e.createElement(a,{labelText:"Default",variant:"default"}),e.createElement(a,{labelText:"Prominent",variant:"prominent"}))},o={args:{description:"A short description"}},s={render:()=>e.createElement("div",{className:"flex gap-16"},e.createElement(a,{labelText:"Label",value:"Default"}),e.createElement(a,{labelText:"Label",value:"Caution",status:"caution",validationMessage:"Just a little bit incorrect"}),e.createElement(a,{labelText:"Label",value:"Error",status:"error",validationMessage:"Absolutely wrong"})),parameters:{docs:{source:{type:"dynamic"}}}},n={args:{autogrow:!0,defaultValue:"Bacon ipsum dolor amet tenderloin buffalo kevin salami flank cupim. Leberkas rump ham tri-tip hamburger. Hamburger ball tip cupim meatball. Short loin tenderloin pork belly, short ribs prosciutto alcatra meatloaf chislic boudin buffalo pig jerky. Frankfurter meatloaf flank bacon, porchetta prosciutto swine. Jerky ham ball tip, venison hamburger meatball pancetta drumstick prosciutto shank boudin beef pork chop chicken t-bone."}},l={args:{reversed:!0},decorators:[w=>e.createElement("div",{className:"bg-purple-700 p-16"},e.createElement(w,null))]};var i,c,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16">
      <TextAreaField labelText="Default" variant="default" />
      <TextAreaField labelText="Prominent" variant="prominent" />
    </div>
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,g,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    description: "A short description"
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16">
      <TextAreaField labelText="Label" value="Default" />
      <TextAreaField labelText="Label" value="Caution" status="caution" validationMessage="Just a little bit incorrect" />
      <TextAreaField labelText="Label" value="Error" status="error" validationMessage="Absolutely wrong" />
    </div>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,T,y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    autogrow: true,
    defaultValue: "Bacon ipsum dolor amet tenderloin buffalo kevin salami flank cupim. Leberkas rump ham tri-tip hamburger. Hamburger ball tip cupim meatball. Short loin tenderloin pork belly, short ribs prosciutto alcatra meatloaf chislic boudin buffalo pig jerky. Frankfurter meatloaf flank bacon, porchetta prosciutto swine. Jerky ham ball tip, venison hamburger meatball pancetta drumstick prosciutto shank boudin beef pork chop chicken t-bone."
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var A,S,E;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    reversed: true
  },
  decorators: [Story => <div className="bg-purple-700 p-16">
        <Story />
      </div>]
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const L=["Playground","Variant","Description","Validation","Autogrow","Reversed"],N=Object.freeze(Object.defineProperty({__proto__:null,Autogrow:n,Description:o,Playground:r,Reversed:l,Validation:s,Variant:t,__namedExportsOrder:L,default:F},Symbol.toStringTag,{value:"Module"}));export{n as A,o as D,r as P,l as R,N as T,t as V,s as a};
