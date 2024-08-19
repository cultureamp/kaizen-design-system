import{r as F,R as c}from"./index-CTjT7uj6.js";import{I as P}from"./InputSearch-DY9HBN0G.js";const L={title:"Components/Inputs/InputSearch",component:P,args:{id:"search"},parameters:{a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},e={render:o=>{const[x,C]=F.useState("");return c.createElement(P,{...o,value:x,onChange:D=>{C(D.target.value)}})},parameters:{docs:{canvas:{sourceState:"shown"}}}},r={args:{value:"Search me"}},a={args:{secondary:!0}},s={args:{loading:!0}},t={args:{disabled:!0}},n={args:{reversed:!0},decorators:[o=>c.createElement("div",{className:"bg-purple-700 p-16"},c.createElement(o,null))]};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    return <InputSearch {...args} value={searchTerm} onChange={event => {
      setSearchTerm(event.target.value);
    }} />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,l,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: "Search me"
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var i,S,v;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    secondary: true
  }
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var h,b,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,I,T;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(T=(I=t.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var _,E,R;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    reversed: true
  },
  decorators: [Story => <div className="bg-purple-700 p-16">
        <Story />
      </div>]
}`,...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const O=["Playground","Filled","Secondary","Loading","Disabled","Reversed"],N=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Filled:r,Loading:s,Playground:e,Reversed:n,Secondary:a,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{t as D,r as F,N as I,s as L,e as P,n as R,a as S};
