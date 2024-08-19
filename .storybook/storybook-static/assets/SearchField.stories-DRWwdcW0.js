import{r as E,R as e}from"./index-CTjT7uj6.js";import{S as n}from"./SearchField-Ij-Ut3l_.js";const F={title:"Components/SearchField",component:n,args:{labelText:"Search field"}},r={render:o=>{const[f,c]=E.useState("Some value");return e.createElement(n,{value:f,onChange:x=>c(x.target.value),onClear:()=>c(""),...o})},parameters:{docs:{canvas:{sourceState:"shown"}}}},a={args:{secondary:!0}},s={args:{disabled:!0}},t={render:()=>e.createElement("div",{className:"flex gap-16 items-end"},e.createElement(n,{labelText:"Search (default)",reversed:!0}),e.createElement(n,{labelText:"Search (secondary)",reversed:!0,secondary:!0})),decorators:[o=>e.createElement("div",{className:"bg-purple-700 p-16"},e.createElement(o,null))],parameters:{docs:{source:{type:"dynamic"}}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Some value");
    return <SearchField value={value} onChange={(e): void => setValue(e.target.value)} onClear={(): void => setValue("")} {...args} />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    secondary: true
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var S,v,g;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,h,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16 items-end">
      <SearchField labelText="Search (default)" reversed />
      <SearchField labelText="Search (secondary)" reversed secondary />
    </div>,
  decorators: [Story => <div className="bg-purple-700 p-16">
        <Story />
      </div>],
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const T=["Playground","Secondary","Disabled","Reversed"],R=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Playground:r,Reversed:t,Secondary:a,__namedExportsOrder:T,default:F},Symbol.toStringTag,{value:"Module"}));export{s as D,r as P,t as R,R as S,a};
