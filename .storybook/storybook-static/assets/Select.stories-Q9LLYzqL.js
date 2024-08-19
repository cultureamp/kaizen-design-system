import{R as e}from"./index-CTjT7uj6.js";import{S as r,s as b,g as z,m as q}from"./mockData-Bb8tkY6o.js";const H={title:"Components/Select/Future",component:r,argTypes:{items:{options:["Single","Grouped"],control:{type:"radio"},mapping:{Single:b,Grouped:z}},description:{type:"string"},validationMessage:{type:"string"}},args:{label:"Label",items:b},parameters:{actions:{argTypesRegex:"^on.*"}}},n={parameters:{docs:{canvas:{sourceState:"shown"}}}},o={args:{items:b}},i={args:{items:z}},l={args:{items:q}},c={args:{items:[{label:"Customise...",value:"custom"},...b],children:({items:t})=>t.map(a=>a.type==="item"&&a.key==="custom"?e.createElement(e.Fragment,{key:a.key},e.createElement(r.Option,{item:a}),e.createElement(r.SectionDivider,null)):e.createElement(r.ItemDefaultRender,{key:a.key,item:a}))},parameters:{docs:{source:{type:"code"}}}},m={render:t=>e.createElement(r,{...t,label:"Custom",items:[{label:"Bubblegum",value:"bubblegum",isFruit:!1},{label:"Strawberry",value:"strawberry",isFruit:!0},{label:"Chocolate",value:"chocolate",isFruit:!1},{label:"Apple",value:"apple",isFruit:!0},{label:"Lemon",value:"lemon",isFruit:!0}]},({items:a})=>a.map(s=>{var y;return s.type==="item"?e.createElement(r.Option,{key:s.key,item:{...s,rendered:(y=s.value)!=null&&y.isFruit?`${s.rendered} (Fruit)`:s.rendered}}):e.createElement(r.ItemDefaultRender,{key:s.key,item:s})})),parameters:{docs:{source:{type:"code"}}}},Q=`
<Select
  trigger={props => <Select.TriggerButton {...props} id="select--custom-trigger" />}
/>
`,d={args:{trigger:t=>e.createElement(r.TriggerButton,{...t,id:"select--custom-trigger"})},parameters:{docs:{source:{code:Q}}}},u={render:t=>e.createElement("div",{className:"flex gap-16"},e.createElement(r,{...t,status:"error",validationMessage:"This is an error message"}),e.createElement(r,{...t,status:"caution",validationMessage:"This is a cautionary message"}))},p={args:{isFullWidth:!0}},g={render:t=>{const a="id--portal-container";return e.createElement(e.Fragment,null,e.createElement("div",{id:a,className:"flex gap-24 bg-gray-200 p-12 overflow-hidden h-[200px] relative"},e.createElement(r,{...t,label:"Default",selectedKey:"batch-brew",id:"id--select-default"}),e.createElement(r,{...t,label:"Inner portal",selectedKey:"batch-brew",id:"id--select-inner",portalContainerId:a})))},parameters:{docs:{source:{type:"code"}}}};var S,v,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var k,F,h;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: singleMockItems
  }
}`,...(h=(F=o.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var I,C,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: groupedMockItems
  }
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var D,T,M;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: mixedMockItemsDisabled
  }
}`,...(M=(T=l.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var w,x,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Customise...",
      value: "custom"
    }, ...singleMockItems],
    children: ({
      items
    }): JSX.Element[] => items.map(item => {
      if (item.type === "item" && item.key === "custom") {
        return <React.Fragment key={item.key}>
              <Select.Option item={item} />
              <Select.SectionDivider />
            </React.Fragment>;
      }
      return <Select.ItemDefaultRender key={item.key} item={item} />;
    })
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  }
}`,...(R=(x=c.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var O,P,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Select<SelectOption & {
    isFruit: boolean;
  }> {...args} label="Custom" items={[{
    label: "Bubblegum",
    value: "bubblegum",
    isFruit: false
  }, {
    label: "Strawberry",
    value: "strawberry",
    isFruit: true
  }, {
    label: "Chocolate",
    value: "chocolate",
    isFruit: false
  }, {
    label: "Apple",
    value: "apple",
    isFruit: true
  }, {
    label: "Lemon",
    value: "lemon",
    isFruit: true
  }]}>
      {({
      items
    }): JSX.Element[] => items.map(item => item.type === "item" ? <Select.Option key={item.key} item={{
      ...item,
      rendered: item.value?.isFruit ? \`\${item.rendered} (Fruit)\` : item.rendered
    }} /> : <Select.ItemDefaultRender key={item.key} item={item} />)}
    </Select>,
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  }
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var A,B,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    trigger: props => <Select.TriggerButton {...props} id="select--custom-trigger" />
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomiseTrigger
      }
    }
  }
}`,...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var K,N,W;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <div className="flex gap-16">
      <Select {...args} status="error" validationMessage="This is an error message" />
      <Select {...args} status="caution" validationMessage="This is a cautionary message" />
    </div>
}`,...(W=(N=u.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var L,V,j;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isFullWidth: true
  }
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var J,X,$;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const portalContainerId = "id--portal-container";
    return <>
        <div id={portalContainerId} className="flex gap-24 bg-gray-200 p-12 overflow-hidden h-[200px] relative">
          <Select {...args} label="Default" selectedKey="batch-brew" id="id--select-default" />
          <Select {...args} label="Inner portal" selectedKey="batch-brew" id="id--select-inner" portalContainerId={portalContainerId} />
        </div>
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  }
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const U=["Playground","SingleItems","GroupedItems","DisabledItems","SectionDivider","AdditionalProperties","CustomiseTrigger","Validation","FullWidth","PortalContainer"],ee=Object.freeze(Object.defineProperty({__proto__:null,AdditionalProperties:m,CustomiseTrigger:d,DisabledItems:l,FullWidth:p,GroupedItems:i,Playground:n,PortalContainer:g,SectionDivider:c,SingleItems:o,Validation:u,__namedExportsOrder:U,default:H},Symbol.toStringTag,{value:"Module"}));export{m as A,d as C,l as D,p as F,i as G,n as P,ee as S,u as V,o as a,c as b,g as c};
