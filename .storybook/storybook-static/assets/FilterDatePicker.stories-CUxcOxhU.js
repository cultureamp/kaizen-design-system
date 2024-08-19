import{R as e,r as n}from"./index-CTjT7uj6.js";import{f as g}from"./index-BySiBzEG.js";import{H as b}from"./index-BtE2hmwC.js";import{d as h}from"./defaultMonthControls-DfKCABiO.js";import{r as D}from"./renderTriggerControls-DBfT5i7c.js";import{T as f}from"./Text-D2gQH1xL.js";import{v,d as B}from"./validationControls-DU8UW-RO.js";import{F as d,a as F}from"./FilterDatePicker-Bh5QQ4BN.js";import{F as E}from"./FilterButton-BGzpTfmP.js";import{F as O}from"./FilterButtonRemovable-CDjh8qGF.js";import"./index-DZLKizrv.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./index-CCQ3W5xA.js";import"./getLocale-DZ-phe2v.js";import"./isInvalidDate-CQ4jNt7-.js";import"./jsx-runtime-Cw0GR0a5.js";import"./startOfDay-MoyOWjoN.js";import"./FilterContents-MyXMWDj6.js";import"./Combination-DFaMps7A.js";import"./tslib.es6-CY32MZYl.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./usePopper-D4ykrdaR.js";import"./index-9r8iugjR.js";import"./useDateInputHandlers-CFHAAAKV.js";import"./LabelledMessage-CyRdzdqY.js";import"./validateDate-Bbd7IJoY.js";import"./enums-Cb8LLpRk.js";import"./isDisabledDate-DCznrglD.js";import"./Label-DlmzItqQ.js";import"./isRefObject-39zMTbtm.js";import"./Input-BFyrvMXQ.js";import"./useIntl-Ci3jBQGG.js";import"./index-DBmEjBSQ.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./message-BF0EX5jj.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./SVG-7WFwBCn9.js";import"./CalendarSingle-DmO3h1TK.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./isValidWeekStartsOn-CZGl9tvK.js";import"./en-AU-C5dfMWdV.js";import"./ChevronDownIcon-prLLyjG_.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./FilterButtonBase-D953FwLo.js";import"./ClearIcon-BcQoGkgT.js";import"./index-CdP7-hSn.js";import"./ButtonGroup-Cm1_R1hn.js";const ye={title:"Components/Filter Date Picker",component:d,argTypes:{...h,...v,...B,...D,locale:{options:["en-US","en-AU"],control:{type:"radio"}},isOpen:{control:!1},selectedDate:{options:["None","Date"],control:{type:"select",labels:{None:"undefined"}},mapping:{None:void 0,Date:new Date}},description:{control:"text"}},args:{label:"Date",locale:"en-AU",renderTrigger:t=>e.createElement(E,{...t}),isOpen:!1,selectedDate:void 0,setIsOpen:g(),onDateChange:g()}},m={render:t=>{const[a,l]=n.useState(!1),[i,o]=n.useState();return n.useEffect(()=>{o(t.selectedDate)},[t.selectedDate]),e.createElement(d,{...t,isOpen:a,setIsOpen:l,selectedDate:i,onDateChange:o})}},y=`
// This code is not connected to the controls of the attached component.
// @note: If you want a removable button, use the commented out code instead.

import {
  FilterButton,
  FilterButtonProps,
//  FilterButtonRemovable,
  FilterDatePicker,
} from "@kaizen/components"

const [isOpen, setIsOpen] = useState<boolean>(false)
const [date, setDate] = useState<Date | undefined>()

return (
  <FilterDatePicker
    id="filter-dp--default"
    label="Dates"
    locale="en-AU"
    renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
      <FilterButton {...triggerButtonProps} />
    )}
    // renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
    //   <FilterButtonRemovable
    //     triggerButtonProps={{ ...triggerButtonProps }}
    //     removeButtonProps={{
    //       onClick: (): void => undefined,
    //     }}
    //   />
    // )}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    selectedDate={date}
    onDateChange={setDate}
  />
)
`,Te={...m,args:{id:"filter-dp--default"},parameters:{docs:{canvas:{sourceState:"shown"},source:{code:y}}}},Pe={render:()=>{const[t,a]=n.useState(!1),[l,i]=n.useState(),[o,s]=n.useState(!1),[p,u]=n.useState();return e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(d,{id:"filterdp--filter-button",label:"FilterButton",locale:"en-AU",renderTrigger:r=>e.createElement(E,{...r}),isOpen:t,setIsOpen:a,selectedDate:l,onDateChange:i}),e.createElement(d,{id:"filterdp--filter-button-removable",label:"FilterButtonRemovable",locale:"en-AU",renderTrigger:r=>e.createElement(O,{triggerButtonProps:{...r},removeButtonProps:{onClick:()=>{}}}),isOpen:o,setIsOpen:s,selectedDate:p,onDateChange:u}))}},Se={...m,args:{...m.args,id:"filterdp--description",label:"Open to see description",description:"This is a custom description"}},Ce={...m,args:{...m.args,id:"filterdp--extend-input-props",label:"Check the DOM for the inputs","data-testid":"filterdp--input-testid"}},T=({validationResponse:t})=>e.createElement("div",null,e.createElement(f,{variant:"body"},"NOTE: This story includes additional custom validation to provide some guidance when dealing with validation other than date isInvalid or isDisabled."),e.createElement("ul",null,e.createElement("li",null,"There will be a caution when the selectedDay ",e.createElement("strong",null,"is valid")," ","but ",e.createElement("strong",null,"is not within this year"),"."),e.createElement("li",null,"There will be an error when the"," ",e.createElement("strong",null,"submit button is clicked")," and there is a"," ",e.createElement("strong",null,"current error"),".")),e.createElement(f,{variant:"body"},"The ",e.createElement("code",null,"onValidate")," callback returns a"," ",e.createElement("code",null,"validationResponse")," object which provides data such as a default validation message, and can be utilised for custom validation."),e.createElement(b,{className:"json"},JSON.stringify(t,null,"	")),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"isInvalid"),': A date that cannot be parsed. e.g "potato".'),e.createElement("li",null,e.createElement("code",null,"isDisabled"),": A date that have been set as disabled through the ",e.createElement("code",null,"disabledDates")," prop."),e.createElement("li",null,e.createElement("code",null,"isEmpty"),": Input is empty."),e.createElement("li",null,e.createElement("code",null,"isValidDate"),": Date input that is not ",e.createElement("code",null,"invalid")," ","nor ",e.createElement("code",null,"disabled")," nor ",e.createElement("code",null,"empty"),"."))),Ie={render:()=>{const[t,a]=n.useState(),[l,i]=n.useState(),[o,s]=n.useState(),p=r=>{var c;if(i(r),r.isValidDate&&((c=r.date)==null?void 0:c.getFullYear())!==new Date().getFullYear()){s({status:"caution",message:"Date is not this year"});return}s(r.validationMessage)},u=r=>{r.preventDefault();const c=o==null?void 0:o.status;if(c==="error"||c==="caution")return s({status:"error",message:"There is an error"}),alert("Error");alert("Success")};return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:u},e.createElement(F,{id:"datepicker-default",inputProps:{labelText:"Label"},selectedDate:t,onDateChange:a,onValidate:p,validationMessage:o,disabledDays:new Date,locale:"en-AU"}),e.createElement("div",{style:{marginTop:"2rem",marginBottom:"2rem"}},e.createElement("button",{type:"submit"},"Submit"))),e.createElement(T,{validationResponse:l}))},parameters:{docs:{source:{type:"code"}},controls:{disable:!0}}},Re=["Playground","RenderTrigger","Description","ExtendInputProps","Validation"];export{Se as Description,Ce as ExtendInputProps,Te as Playground,Pe as RenderTrigger,Ie as Validation,Re as __namedExportsOrder,ye as default};
