import{R as e}from"./index-CTjT7uj6.js";import{L as a}from"./Label-DlmzItqQ.js";import{L as B}from"./types-96fQv32Q.js";const w={title:"Components/Label",component:a,args:{children:"I am Label"}},n={parameters:{docs:{canvas:{sourceState:"shown"}}}},m=()=>e.createElement("span",{className:"inline-block w-16 h-16 bg-gray-500"}),O=()=>e.createElement("span",{className:"block w-200 h-16 bg-gray-500"}),r={args:{labelText:"Inline controls",labelType:"checkbox",children:e.createElement(m,null)}},l={render:()=>e.createElement("span",{className:"flex flex-col gap-16"},e.createElement(a,{labelText:"Checkbox (default position: end)",labelType:"checkbox"},e.createElement(m,null)),e.createElement(a,{labelText:"Checkbox (position: start)",labelType:"checkbox",labelPosition:"start"},e.createElement(m,null))),parameters:{docs:{source:{type:"dynamic"}}}},t={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{labelText:"I am label",labelType:"text"}),e.createElement(O,null)),parameters:{docs:{source:{type:"dynamic"}}}},o={render:()=>e.createElement("ul",{className:"flex gap-16 list-none m-0 p-0"},B.map(p=>e.createElement("li",{key:p},e.createElement(a,{labelType:p},p)))),parameters:{docs:{source:{type:"dynamic"}}}},s={args:{labelText:"Label text",labelType:"checkbox",children:e.createElement(m,null)}},c={render:()=>e.createElement("div",{className:"flex flex-col gap-16"},e.createElement(a,{variant:"default"},"Label default"),e.createElement(a,{variant:"prominent"},"Label prominent")),parameters:{docs:{source:{type:"dynamic"}}}};var i,b,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(d=(b=n.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var u,y,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    labelText: "Inline controls",
    labelType: "checkbox",
    children: <InlineFormControl />
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,L,g;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <span className="flex flex-col gap-16">
      <Label labelText="Checkbox (default position: end)" labelType="checkbox">
        <InlineFormControl />
      </Label>
      <Label labelText="Checkbox (position: start)" labelType="checkbox" labelPosition="start">
        <InlineFormControl />
      </Label>
    </span>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(g=(L=l.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var f,h,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <>
      <Label labelText="I am label" labelType="text" />
      <BlockFormControl />
    </>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var E,C,I;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ul className="flex gap-16 list-none m-0 p-0">
      {LabelTypes.map(type => <li key={type}>
          <Label labelType={type}>{type}</Label>
        </li>)}
    </ul>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var S,v,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelText: "Label text",
    labelType: "checkbox",
    children: <InlineFormControl />
  }
}`,...(F=(v=s.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var N,P,_;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16">
      <Label variant="default">Label default</Label>
      <Label variant="prominent">Label prominent</Label>
    </div>,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const V=["Playground","InlineControls","Position","BlockControls","Types","LabelText","Variant"],M=Object.freeze(Object.defineProperty({__proto__:null,BlockControls:t,InlineControls:r,LabelText:s,Playground:n,Position:l,Types:o,Variant:c,__namedExportsOrder:V,default:w},Symbol.toStringTag,{value:"Module"}));export{t as B,r as I,M as L,n as P,o as T,c as V,l as a,s as b};
