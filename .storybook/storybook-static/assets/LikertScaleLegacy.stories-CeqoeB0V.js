import{r as u,R as d}from"./index-CTjT7uj6.js";import{L as n}from"./LikertScaleLegacy-rj4sPtnm.js";const l=[{value:-1,label:"Not rated"},{value:1,label:"Strong Disagree"},{value:2,label:"Disagree"},{value:3,label:"Neither agree or disagree"},{value:4,label:"Agree"},{value:5,label:"Strongly agree"}],g={title:"Components/LikertScaleLegacy",component:n,args:{scale:l,labelId:"labelId",selectedItem:l[0],onSelect:()=>{}}},e={render:s=>{const[c,o]=u.useState(null);return d.createElement(n,{...s,selectedItem:c,onSelect:o})},parameters:{docs:{source:{language:"tsx",code:`
  const SatisfactionExample = () => {
    const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)
  
    return (
      <LikertScaleLegacy
        scale={[
          { value: -1, label: "Not rated" },
          { value: 1, label: "Strong Disagree" },
          { value: 2, label: "Disagree" },
          { value: 3, label: "Neither agree or disagree" },
          { value: 4, label: "Agree" },
          { value: 5, label: "Strongly agree" },
        ]},
        labelId: "labelId",
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
    )
  }
        `},canvas:{sourceState:"shown"}}}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null);
    return <LikertScaleLegacy {...args} selectedItem={selectedItem} onSelect={setSelectedItem} />;
  },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`
  const SatisfactionExample = () => {
    const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)
  
    return (
      <LikertScaleLegacy
        scale={[
          { value: -1, label: "Not rated" },
          { value: 1, label: "Strong Disagree" },
          { value: 2, label: "Disagree" },
          { value: 3, label: "Neither agree or disagree" },
          { value: 4, label: "Agree" },
          { value: 5, label: "Strongly agree" },
        ]},
        labelId: "labelId",
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
    )
  }
        \`
      },
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const m=["Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:m,default:g},Symbol.toStringTag,{value:"Module"}));export{b as L,e as P};
