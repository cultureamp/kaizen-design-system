import{r as s,R as p}from"./index-CTjT7uj6.js";import{f as o}from"./index-BySiBzEG.js";import{M as n}from"./MultiSelect-Cvui0KMq.js";import"./index-DZLKizrv.js";import"./index-CCQ3W5xA.js";import"./Heading-Y5F8SWRW.js";import"./floating-ui.react-dom-DficdbDq.js";import"./floating-ui.dom-BvchAiLZ.js";import"./index-9r8iugjR.js";import"./MultiSelectToggle-CE5xIBh8.js";import"./ChevronDownIcon-prLLyjG_.js";import"./SVG-7WFwBCn9.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./RemovableTag-BNVKm4bs.js";import"./Tag-D-4sFjnu.js";import"./ClearButton-K9bfbh4U.js";import"./ClearIcon-BcQoGkgT.js";import"./MultiSelectOptions-BzeWFkkX.js";import"./Text-D2gQH1xL.js";import"./MultiSelectOptionField-BSTLJTHg.js";import"./Checkbox-CI1euWka.js";import"./CheckIcon-BwUvLWmE.js";import"./MinusIcon-3DH7qpb8.js";import"./VisuallyHidden-CDYjeGzr.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Popover-7U2x2z8g.js";import"./Combination-DFaMps7A.js";import"./tslib.es6-CY32MZYl.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";const J={title:"Components/MultiSelect",component:n,argTypes:{selectedValues:{options:["None","Single","Multiple"],control:{type:"select",labels:{None:"new Set()",Single:'new Set(["waffle"])',Multiple:'new Set(["waffle", "pancakes"])'}},mapping:{None:new Set,Single:new Set(["waffle"]),Multiple:new Set(["waffle","pancakes"])}}},args:{label:"Breakfast order",selectedValues:new Set,isOpen:!1,items:[{label:"Pancakes",value:"pancakes"},{label:"Waffle",value:"waffle"},{label:"Toastie",value:"toastie"}],onSelectedValuesChange:o(),onOpenChange:o()}},t={render:e=>{const[i,a]=s.useState(new Set(e.selectedValues)),[r,l]=s.useState(e.isOpen);return s.useEffect(()=>{l(e.isOpen)},[e.isOpen]),s.useEffect(()=>{a(e.selectedValues)},[e.selectedValues]),p.createElement(n,{...e,selectedValues:i,onSelectedValuesChange:a,isOpen:r,onOpenChange:l})}},K={...t,parameters:{docs:{canvas:{sourceState:"shown"}}}},c=`
<MultiSelect
  items={[
    { label: "Pancakes", value: "pancakes" },
    { label: "Waffles", value: "waffles" },
    { label: "Toastie", value: "toastie" },
  ]}
  {...props}
/>
`,L={...t,parameters:{docs:{source:{code:c}}}},u=`
const [selectedValues, setSelectedValues] = useState<MultiSelectProps["selectedValues"]>(new Set(["waffle"]))

return (
  <MultiSelect
    items={[
      { label: "Pancakes", value: "pancakes" },
      { label: "Waffles", value: "waffles" },
      { label: "Toastie", value: "toastie" },
    ]}
    selectedValues={selectedValues}
    onSelectedValuesChange={setSelectedValues}
    {...props}
  />
)
`,Q={...t,args:{selectedValues:new Set(["waffle"])},parameters:{docs:{source:{code:u}}}},m=`
const [isOpen, setIsOpen] = useState<boolean>(false)

return (
  <MultiSelect
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    {...props}
  />
)
`,U={...t,parameters:{docs:{source:{code:m}}}},X={...t,args:{description:"Breakfast will be delivered directly to your house"}},Y={...t,args:{validationMessage:{status:"error",message:"There are no more waffles"}}},Z={...t,args:{description:"Breakfast will be delivered to your house.",validationMessage:{status:"caution",message:"Only five more waffles remain."}}},$=["Playground","Items","SelectedValues","OpenState","Description","ValidationMessage","ValidationMessageWithDescription"];export{X as Description,L as Items,U as OpenState,K as Playground,Q as SelectedValues,Y as ValidationMessage,Z as ValidationMessageWithDescription,$ as __namedExportsOrder,J as default};
