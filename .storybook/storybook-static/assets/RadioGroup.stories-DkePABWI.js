import{r as i,R as r}from"./index-CTjT7uj6.js";import{R as c}from"./RadioGroup-DNGPKkOt.js";import{R as n}from"./RadioField-CU_b8UGV.js";const v={title:"Components/Radio controls/RadioGroup",component:c,args:{labelText:"Radio group"}},t={render:e=>{const[o,d]=i.useState("radio-1");return r.createElement(c,{...e},r.createElement(n,{labelText:"Label 1",name:"radio-group",value:"radio-value-1",reversed:e==null?void 0:e.reversed,onChange:a=>{d(a.target.value)},selectedStatus:o==="radio-1"}),r.createElement(n,{labelText:"Label 2",name:"radio-group",value:"radio-value-2",reversed:e==null?void 0:e.reversed,onChange:a=>{d(a.target.value)},selectedStatus:o==="radio-2"}),r.createElement(n,{labelText:"Label 3",name:"radio-group",value:"radio-value-3",reversed:e==null?void 0:e.reversed,onChange:a=>{d(a.target.value)},selectedStatus:o==="radio-3"}))},parameters:{docs:{canvas:{sourceState:"shown"}}}};var l,s,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("radio-1");
    return <RadioGroup {...args}>
        <RadioField labelText="Label 1" name="radio-group" value="radio-value-1" reversed={args?.reversed} onChange={event => {
        setSelected(event.target.value);
      }} selectedStatus={selected === "radio-1"} />
        <RadioField labelText="Label 2" name="radio-group" value="radio-value-2" reversed={args?.reversed} onChange={event => {
        setSelected(event.target.value);
      }} selectedStatus={selected === "radio-2"} />
        <RadioField labelText="Label 3" name="radio-group" value="radio-value-3" reversed={args?.reversed} onChange={event => {
        setSelected(event.target.value);
      }} selectedStatus={selected === "radio-3"} />
      </RadioGroup>;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const p=["Playground"],R=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:p,default:v},Symbol.toStringTag,{value:"Module"}));export{t as P,R};
