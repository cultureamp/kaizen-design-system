import{r as o,R as s}from"./index-CTjT7uj6.js";import{L as l}from"./LikertScaleLegacy-rj4sPtnm.js";import"./index-CCQ3W5xA.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./Text-D2gQH1xL.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";const e=[{value:-1,label:"Not rated"},{value:1,label:"Strong Disagree"},{value:2,label:"Disagree"},{value:3,label:"Neither agree or disagree"},{value:4,label:"Agree"},{value:5,label:"Strongly agree"}],b={title:"Components/LikertScaleLegacy",component:l,args:{scale:e,labelId:"labelId",selectedItem:e[0],onSelect:()=>{}}},p={render:t=>{const[a,r]=o.useState(null);return s.createElement(l,{...t,selectedItem:a,onSelect:r})},parameters:{docs:{source:{language:"tsx",code:`
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
        `},canvas:{sourceState:"shown"}}}},v=["Playground"];export{p as Playground,v as __namedExportsOrder,b as default};
