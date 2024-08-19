import{R as c}from"./index-CTjT7uj6.js";import{C as k}from"./Checkbox-CI1euWka.js";import"./index-CCQ3W5xA.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./MinusIcon-3DH7qpb8.js";const O={title:"Components/MultiSelect/Checkbox",component:k,args:{checkedStatus:"unchecked",readOnly:!1,"aria-label":"Checkbox label"}},e={render:({readOnly:o,onChange:s,checkedStatus:r,...d})=>{const[t,n]=c.useState(r),S=g=>{t==="unchecked"?n("indeterminate"):t==="indeterminate"?n("checked"):t==="checked"&&n("unchecked"),s==null||s(g)};c.useEffect(()=>{n(r)},[r]);const f=o?{...d,readOnly:o}:{...d,onChange:S};return c.createElement(k,{...f,checkedStatus:t})},parameters:{docs:{canvas:{sourceState:"shown"}}}},a={render:e.render,args:{readOnly:void 0},parameters:{controls:{disable:!0}}};var u,i,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    readOnly,
    onChange,
    checkedStatus,
    ...args
  }) => {
    const [status, setStatus] = React.useState<CheckedStatus>(checkedStatus);
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      if (status === "unchecked") {
        setStatus("indeterminate");
      } else if (status === "indeterminate") {
        setStatus("checked");
      } else if (status === "checked") {
        setStatus("unchecked");
      }
      onChange?.(e);
    };
    React.useEffect(() => {
      setStatus(checkedStatus);
    }, [checkedStatus]);
    const props = readOnly ? {
      ...args,
      readOnly
    } : {
      ...args,
      onChange: handleChange
    };
    return <Checkbox {...props} checkedStatus={status} />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Playground.render,
  args: {
    readOnly: undefined
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const R=["Playground","Interactive"];export{a as Interactive,e as Playground,R as __namedExportsOrder,O as default};
