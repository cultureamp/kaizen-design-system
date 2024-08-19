import{r as o,R as p}from"./index-CTjT7uj6.js";import{C as d}from"./Checkbox-B9bmVoGZ.js";const h={title:"Components/Checkbox controls/Checkbox",component:d,args:{checkedStatus:"off"},parameters:{a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},e={render:({onCheck:n,checkedStatus:a,...f})=>{const[t,s]=o.useState(a),l=m=>{t==="off"?s("mixed"):t==="mixed"?s("on"):t==="on"&&s("off"),n==null||n(m)};return o.useEffect(()=>{s(a)},[a]),p.createElement(d,{...f,checkedStatus:t,onCheck:l})},parameters:{docs:{canvas:{sourceState:"shown"}}}};var r,c,u;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    useEffect(() => {
      setStatus(checkedStatus);
    }, [checkedStatus]);
    return <Checkbox {...props} checkedStatus={status} onCheck={handleChange} />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const i=["Playground"],C=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:i,default:h},Symbol.toStringTag,{value:"Module"}));export{C,e as P};
