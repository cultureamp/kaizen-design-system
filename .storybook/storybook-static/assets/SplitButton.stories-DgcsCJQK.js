import{S as B,e as s,a as P,b as r,c as v}from"./examples-CzxOwXVR.js";const y={title:"Components/Buttons/SplitButton",component:B,argTypes:{actionButtonProps:{options:["Button","Anchor"],control:{type:"select",labels:{Button:'{ label: "Edit Survey", onClick: action("clicked") }',Anchor:'{ label: "Edit Survey", href: "//example.com" }'}},mapping:{Button:s,Anchor:P}},dropdownContent:{options:["MenuList - MenuItems enabled","MenuList - one MenuItem disabled"],control:{type:"select"},mapping:{"MenuList - MenuItems enabled":r,"MenuList - one MenuItem disabled":v}}},args:{actionButtonProps:s,dropdownContent:r}},e={parameters:{docs:{canvas:{sourceState:"shown"}}}},t={parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},n={args:{disabled:!0}},o={args:{dropdownContent:"MenuList - one MenuItem disabled"}};var a,d,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "Purple 700"
    }
  },
  args: {
    isReversed: true
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,m,b;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,S,M;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    dropdownContent: "MenuList - one MenuItem disabled"
  }
}`,...(M=(S=o.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const w=["Playground","Reversed","Disabled","DisabledMenuItem"],D=Object.freeze(Object.defineProperty({__proto__:null,Disabled:n,DisabledMenuItem:o,Playground:e,Reversed:t,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{n as D,e as P,t as R,D as S,o as a};
