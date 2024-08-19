import{r as g,R as e}from"./index-CTjT7uj6.js";import{C as a}from"./CheckboxField-Dex_qNHg.js";const b={title:"Components/Checkbox controls/CheckboxField",component:a,args:{labelText:"Checkbox",checkedStatus:"off"}},n={render:({onCheck:t,checkedStatus:c,...x})=>{const[s,r]=g.useState(c),p=h=>{s==="off"?r("mixed"):s==="mixed"?r("on"):s==="on"&&r("off"),t==null||t(h)};return e.useEffect(()=>{r(c)},[c]),e.createElement(a,{...x,checkedStatus:s,onCheck:p})},parameters:{docs:{canvas:{sourceState:"shown"}}}},o={render:t=>e.createElement("div",{className:"flex gap-16"},e.createElement("div",null,e.createElement(a,{...t,labelText:"Default"}),e.createElement(a,{...t,labelText:"Default"})),e.createElement("div",null,e.createElement(a,{...t,labelText:"NoBottomMargin",noBottomMargin:!0}),e.createElement(a,{...t,labelText:"NoBottomMargin",noBottomMargin:!0})))};var l,d,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    onCheck,
    checkedStatus,
    ...props
  }) => {
    const [status, setStatus] = useState<CheckboxFieldProps["checkedStatus"]>(checkedStatus);
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      if (status === "off") {
        setStatus("mixed");
      } else if (status === "mixed") {
        setStatus("on");
      } else if (status === "on") {
        setStatus("off");
      }
      onCheck?.(e);
    };
    React.useEffect(() => {
      setStatus(checkedStatus);
    }, [checkedStatus]);
    return <CheckboxField {...props} checkedStatus={status} onCheck={handleChange} />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,m,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="flex gap-16">
      <div>
        <CheckboxField {...args} labelText="Default" />
        <CheckboxField {...args} labelText="Default" />
      </div>
      <div>
        <CheckboxField {...args} labelText="NoBottomMargin" noBottomMargin />
        <CheckboxField {...args} labelText="NoBottomMargin" noBottomMargin />
      </div>
    </div>
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const S=["Playground","NoBottomMargin"],E=Object.freeze(Object.defineProperty({__proto__:null,NoBottomMargin:o,Playground:n,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{E as C,o as N,n as P};
