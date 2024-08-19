import{R as e,r as S}from"./index-CTjT7uj6.js";import{T as o}from"./Text-D2gQH1xL.js";import{T as c,a as f,b as s,c as h,d as l}from"./TabPanels-DLb-4Dql.js";import{B as I}from"./Button-DDkdQqLR.js";import{C as v}from"./Card-D3sy2uql.js";const y={title:"Components/Tabs",component:c,args:{children:e.createElement(e.Fragment,null,e.createElement(f,{"aria-label":"Tabs"},e.createElement(s,null,"Tab 1"),e.createElement(s,null,"Tab 2"),e.createElement(s,{badge:"3"},"Tab 3"),e.createElement(s,{disabled:!0},"Disabled Tab")),e.createElement(h,null,e.createElement(l,{classNameOverride:"p-24"},e.createElement(o,{variant:"body"},"Content 1")),e.createElement(l,{classNameOverride:"p-24"},e.createElement(o,{variant:"body"},"Content 2")),e.createElement(l,{classNameOverride:"p-24"},e.createElement(o,{variant:"body"},"Content 3"))))}},n={parameters:{chromatic:{disable:!1},docs:{canvas:{sourceState:"shown"}}},args:{defaultIndex:1,onChange:a=>console.log("Tab changed to ",a)}},t={render:a=>{const[x,d]=S.useState(0);return e.createElement(e.Fragment,null,e.createElement(c,{...a,selectedIndex:x,onChange:d}),e.createElement(I,{label:"Switch to tab 2",onClick:()=>d(1)}))}},r={parameters:{backgrounds:{default:"Gray 100"}},render:a=>e.createElement(v,null,e.createElement(c,{...a}))};var m,i,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    },
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {
    defaultIndex: 1,
    // eslint-disable-next-line no-console
    onChange: (index): void => console.log("Tab changed to ", index)
  }
}`,...(b=(i=n.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    return <>
        <Tabs {...args} selectedIndex={selectedIndex} onChange={setSelectedIndex} />
        <Button label="Switch to tab 2" onClick={(): void => setSelectedIndex(1)} />
      </>;
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var T,E,C;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "Gray 100"
    }
  },
  render: args => <Card>
      <Tabs {...args} />
    </Card>
}`,...(C=(E=r.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const O=["Playground","Controlled","UsageInCard"],N=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Playground:n,UsageInCard:r,__namedExportsOrder:O,default:y},Symbol.toStringTag,{value:"Module"}));export{n as P,N as T};
