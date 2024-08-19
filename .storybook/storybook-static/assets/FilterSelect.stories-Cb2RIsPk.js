import{R as s,r as y}from"./index-CTjT7uj6.js";import{f as O}from"./index-BySiBzEG.js";import{r as k}from"./renderTriggerControls-DBfT5i7c.js";import{F as o}from"./FilterSelect-Cc_UChFF.js";import{s as p,g as v}from"./mockData-5sa4Uda9.js";import{F as I}from"./FilterButton-BGzpTfmP.js";const T={title:"Components/Filter Select",component:o,argTypes:{...k,isOpen:{control:!1},setIsOpen:{control:!1},items:{options:["Single","Grouped"],control:{type:"radio"},mapping:{Single:p,Grouped:v}}},args:{label:"Label",isOpen:!1,items:p,renderTrigger:t=>s.createElement(I,{...t}),setIsOpen:O()},parameters:{actions:{argTypesRegex:"^on.*"}}},x={render:t=>{const[l,a]=y.useState(t.isOpen);return s.createElement(o,{...t,isOpen:l,setIsOpen:a})}},n={...x,args:{label:"Coffee",items:"Single",renderTrigger:"Filter Button"}},r={render:t=>{const[l,a]=y.useState(!1);return s.createElement(o,{...t,label:"Custom",isOpen:l,setIsOpen:a,items:[{label:"Bubblegum",value:"bubblegum",isFruit:!1},{label:"Strawberry",value:"strawberry",isFruit:!0},{label:"Chocolate",value:"chocolate",isFruit:!1},{label:"Apple",value:"apple",isFruit:!0},{label:"Lemon",value:"lemon",isFruit:!0}]},({items:S})=>S.map(e=>{var i;return e.type==="item"?s.createElement(o.Option,{key:e.key,item:{...e,rendered:(i=e.value)!=null&&i.isFruit?`${e.rendered} (Fruit)`:e.rendered}}):s.createElement(o.ItemDefaultRender,{key:e.key,item:e})}))},name:"Additional option properties"};var u,m,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...FilterSelectTemplate,
  args: {
    label: "Coffee",
    /* @ts-expect-error: Storybook controls key; see argTypes in default export */
    items: "Single",
    /* @ts-expect-error: Storybook controls key; see argTypes in default export */
    renderTrigger: "Filter Button"
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,b,g,F,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <FilterSelect<SelectOption & {
      isFruit: boolean;
    }> {...args} label="Custom" isOpen={isOpen} setIsOpen={setIsOpen} items={[{
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
      }): JSX.Element[] => items.map(item => item.type === "item" ? <FilterSelect.Option key={item.key} item={{
        ...item,
        rendered: item.value?.isFruit ? \`\${item.rendered} (Fruit)\` : item.rendered
      }} /> : <FilterSelect.ItemDefaultRender key={item.key} item={item} />)}
      </FilterSelect>;
  },
  name: "Additional option properties"
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:"Extend the option type to have additional properties to use for rendering.",...(f=(F=r.parameters)==null?void 0:F.docs)==null?void 0:f.description}}};const E=["Playground","AdditionalProperties"],R=Object.freeze(Object.defineProperty({__proto__:null,AdditionalProperties:r,Playground:n,__namedExportsOrder:E,default:T},Symbol.toStringTag,{value:"Module"}));export{r as A,R as F,n as P};
