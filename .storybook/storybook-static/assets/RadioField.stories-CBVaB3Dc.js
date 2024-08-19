import{R as s}from"./index-CTjT7uj6.js";import{R as l}from"./RadioField-CU_b8UGV.js";const m={title:"Components/Radio controls/RadioField",component:l,args:{labelText:"Radio label",name:"radio-group",value:"radio-value",selectedStatus:!1}},e={render:({onClick:t,selectedStatus:a,...u})=>{const[n,o]=s.useState(a),i=p=>{o(!n),t==null||t(p)};return s.useEffect(()=>{o(a)},[a]),s.createElement(l,{...u,selectedStatus:n,onClick:i})},parameters:{docs:{canvas:{sourceState:"shown"}}}};var r,c,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    onClick,
    selectedStatus,
    ...props
  }) => {
    const [status, setStatus] = React.useState<boolean | undefined>(selectedStatus);
    const handleClick: React.MouseEventHandler<HTMLInputElement> = e => {
      setStatus(!status);
      onClick?.(e);
    };
    React.useEffect(() => {
      setStatus(selectedStatus);
    }, [selectedStatus]);
    return <RadioField {...props} selectedStatus={status} onClick={handleClick} />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const S=["Playground"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:S,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,g as R};
