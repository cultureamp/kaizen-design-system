import{R as e}from"./index-CTjT7uj6.js";import{F as s}from"./FilterButton-BGzpTfmP.js";import"./index-CCQ3W5xA.js";import"./ChevronDownIcon-prLLyjG_.js";import"./SVG-7WFwBCn9.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./isRefObject-39zMTbtm.js";import"./FilterButtonBase-D953FwLo.js";const b={title:"Components/Filter Base/Filter Buttons/Filter Button",component:s,argTypes:{selectedValue:{type:"string"},isOpen:{type:"boolean"}},args:{label:"Label"}},n={parameters:{docs:{canvas:{sourceState:"shown"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(s,{...r,selectedValue:"Pancakes"}),e.createElement(s,{...r,selectedValue:e.createElement("span",null,e.createElement("span",null,"3 Apr 2023")," - ",e.createElement("span",null,"1 May 2023"))}))},a={render:r=>e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(s,{...r}),e.createElement(s,{...r,isOpen:!0}))};var o,l,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,i,m,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <FilterButton {...args} selectedValue="Pancakes" />
      <FilterButton {...args} selectedValue={<span>
            <span>3 Apr 2023</span> - <span>1 May 2023</span>
          </span>} />
    </div>
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:"A string or JSX.Element (most common for values with dom formatting).",...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};var g,y,E,v,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <FilterButton {...args} />
      <FilterButton {...args} isOpen />
    </div>
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source},description:{story:"Controls the open state (chevron changes direction).",...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};const w=["Playground","SelectedValue","IsOpen"];export{a as IsOpen,n as Playground,t as SelectedValue,w as __namedExportsOrder,b as default};
