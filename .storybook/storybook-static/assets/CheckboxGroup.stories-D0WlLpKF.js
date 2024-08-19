import{R as e,r as C}from"./index-CTjT7uj6.js";import{C as s}from"./CheckboxGroup-C4D1pU9Y.js";import{C as o}from"./CheckboxField-Dex_qNHg.js";const b={title:"Components/Checkbox controls/CheckboxGroup",component:s,args:{labelText:"Label",children:e.createElement(e.Fragment,null,e.createElement(o,{labelText:"Checkbox one"}),e.createElement(o,{labelText:"Checkbox two"}),e.createElement(o,{labelText:"Checkbox three"}))}},a={render:r=>{const[t,l]=C.useState({one:"off",two:"on",three:"mixed"}),d=n=>()=>{t[n]==="off"?l({...t,[n]:"mixed"}):t[n]==="mixed"?l({...t,[n]:"on"}):t[n]==="on"&&l({...t,[n]:"off"})};return e.createElement(s,{...r},e.createElement(o,{labelText:"Checkbox one",checkedStatus:t.one,onCheck:d("one")}),e.createElement(o,{labelText:"Checkbox two",checkedStatus:t.two,onCheck:d("two")}),e.createElement(o,{labelText:"Checkbox three",checkedStatus:t.three,onCheck:d("three")}))},parameters:{docs:{canvas:{sourceState:"shown"}}}},c={render:r=>e.createElement("div",{className:"flex gap-16"},e.createElement("div",null,e.createElement(s,{...r,labelText:"Default"}),"New line of text"),e.createElement("div",null,e.createElement(s,{...r,labelText:"NoBottomMargin",noBottomMargin:!0}),"New line of text"))};var h,k,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [checkedStatus, setCheckedStatus] = useState<Record<string, CheckboxFieldProps["checkedStatus"]>>({
      one: "off",
      two: "on",
      three: "mixed"
    });
    const onCheckHandler = (id: string): ChangeEventHandler<HTMLInputElement> => () => {
      if (checkedStatus[id] === "off") {
        setCheckedStatus({
          ...checkedStatus,
          [id]: "mixed"
        });
      } else if (checkedStatus[id] === "mixed") {
        setCheckedStatus({
          ...checkedStatus,
          [id]: "on"
        });
      } else if (checkedStatus[id] === "on") {
        setCheckedStatus({
          ...checkedStatus,
          [id]: "off"
        });
      }
    };
    return <CheckboxGroup {...args}>
        <CheckboxField labelText="Checkbox one" checkedStatus={checkedStatus["one"]} onCheck={onCheckHandler("one")} />
        <CheckboxField labelText="Checkbox two" checkedStatus={checkedStatus["two"]} onCheck={onCheckHandler("two")} />
        <CheckboxField labelText="Checkbox three" checkedStatus={checkedStatus["three"]} onCheck={onCheckHandler("three")} />
      </CheckboxGroup>;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(k=a.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var i,x,m;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div className="flex gap-16">
      <div>
        <CheckboxGroup {...args} labelText="Default" />
        New line of text
      </div>
      <div>
        <CheckboxGroup {...args} labelText="NoBottomMargin" noBottomMargin />
        New line of text
      </div>
    </div>
}`,...(m=(x=c.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const f=["Playground","NoBottomMargin"],E=Object.freeze(Object.defineProperty({__proto__:null,NoBottomMargin:c,Playground:a,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{E as C,c as N,a as P};
