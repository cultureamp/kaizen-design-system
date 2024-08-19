import{R as e}from"./index-CTjT7uj6.js";import{C as s}from"./Card-D3sy2uql.js";const E={title:"Components/Card",component:s,args:{children:"This is a default container"},argTypes:{variant:{control:!1}}},a={parameters:{docs:{canvas:{sourceState:"shown"}}}},f=["blue","green","gray","orange","purple","red","white","yellow"],r={render:()=>e.createElement("ul",{className:"flex list-none gap-16"},f.map(t=>e.createElement("li",{key:t},e.createElement(s,{color:t},"This is a default container"))))},n={render:()=>e.createElement("ul",{className:"flex list-none gap-16"},e.createElement("li",null,e.createElement(s,null,"Default")),e.createElement("li",null,e.createElement(s,{isElevated:!0},"isElevated")))};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ul className="flex list-none gap-16">
      {colors.map(color => <li key={color}>
          <Card color={color}>This is a default container</Card>
        </li>)}
    </ul>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ul className="flex list-none gap-16">
      <li>
        <Card>Default</Card>
      </li>
      <li>
        <Card isElevated>isElevated</Card>
      </li>
    </ul>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const C=["Playground","Colors","Elevation"],S=Object.freeze(Object.defineProperty({__proto__:null,Colors:r,Elevation:n,Playground:a,__namedExportsOrder:C,default:E},Symbol.toStringTag,{value:"Module"}));export{S as C,n as E,a as P,r as a};
