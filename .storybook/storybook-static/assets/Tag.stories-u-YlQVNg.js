import{R as e}from"./index-CTjT7uj6.js";import{A as O,a as b}from"./ActionOffIcon-D9QcBt1w.js";import{A as C}from"./AddIcon-C6V_KfCs.js";import{T as S}from"./TagIcon-u6d8uLTR.js";import{T as x}from"./types-i3FZ_Sm9.js";import{T as c}from"./Tag-D-4sFjnu.js";const N={title:"Components/Tag/Future",component:c,args:{children:"My tag"}},r={parameters:{docs:{canvas:{sourceState:"shown"}}}},o={args:{children:"This text is the children"}},a={render:()=>e.createElement("div",{className:"flex gap-16"},x.map(t=>e.createElement(c,{color:t,icon:e.createElement(S,{role:"presentation"}),key:t},t))),parameters:{docs:{source:{type:"dynamic"}}}},n={render:()=>e.createElement("div",{className:"flex gap-16"},e.createElement(c,{icon:e.createElement(O,{role:"presentation"})},"AcademyIcon"),e.createElement(c,{color:"yellow",icon:e.createElement(b,{role:"presentation"})},"ActionOffIcon"),e.createElement(c,{color:"green",icon:e.createElement(C,{role:"presentation"})},"AddIcon")),parameters:{docs:{source:{type:"dynamic"}}}},s={args:{classNameOverride:"border-red-500 border-solid border"}};var d,m,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var i,p,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "This text is the children"
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,y,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16">
      {TagColorKeys.map(color => <Tag color={color} icon={<TagIcon role="presentation" />} key={color}>
          {color}
        </Tag>)}
    </div>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,I,A;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16">
      <Tag icon={<AcademyIcon role="presentation" />}>AcademyIcon</Tag>
      <Tag color="yellow" icon={<ActionOffIcon role="presentation" />}>
        ActionOffIcon
      </Tag>
      <Tag color="green" icon={<AddIcon role="presentation" />}>
        AddIcon
      </Tag>
    </div>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(A=(I=n.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var h,v,E;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    classNameOverride: "border-red-500 border-solid border"
  }
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const _=["Playground","Children","Color","Icon","ClassNameOverride"],R=Object.freeze(Object.defineProperty({__proto__:null,Children:o,ClassNameOverride:s,Color:a,Icon:n,Playground:r,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{o as C,n as I,r as P,R as T,a,s as b};
