import{R as e,r as a}from"./index-CTjT7uj6.js";import{f as h}from"./index-BySiBzEG.js";import{H as q}from"./index-BtE2hmwC.js";import{d as L}from"./defaultMonthControls-DfKCABiO.js";import{r as z}from"./renderTriggerControls-DBfT5i7c.js";import{T as E}from"./Text-D2gQH1xL.js";import{v as G,d as K}from"./validationControls-DU8UW-RO.js";import{F as f,a as Q}from"./FilterDatePicker-Bh5QQ4BN.js";import{F as Y}from"./FilterButton-BGzpTfmP.js";import{F as W}from"./FilterButtonRemovable-CDjh8qGF.js";const Z={title:"Components/Filter Date Picker",component:f,argTypes:{...L,...G,...K,...z,locale:{options:["en-US","en-AU"],control:{type:"radio"}},isOpen:{control:!1},selectedDate:{options:["None","Date"],control:{type:"select",labels:{None:"undefined"}},mapping:{None:void 0,Date:new Date}},description:{control:"text"}},args:{label:"Date",locale:"en-AU",renderTrigger:t=>e.createElement(Y,{...t}),isOpen:!1,selectedDate:void 0,setIsOpen:h(),onDateChange:h()}},b={render:t=>{const[d,c]=a.useState(!1),[u,r]=a.useState();return a.useEffect(()=>{r(t.selectedDate)},[t.selectedDate]),e.createElement(f,{...t,isOpen:d,setIsOpen:c,selectedDate:u,onDateChange:r})}},$=`
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
`,g={...b,args:{id:"filter-dp--default"},parameters:{docs:{canvas:{sourceState:"shown"},source:{code:$}}}},s={render:()=>{const[t,d]=a.useState(!1),[c,u]=a.useState(),[r,p]=a.useState(!1),[D,v]=a.useState();return e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(f,{id:"filterdp--filter-button",label:"FilterButton",locale:"en-AU",renderTrigger:n=>e.createElement(Y,{...n}),isOpen:t,setIsOpen:d,selectedDate:c,onDateChange:u}),e.createElement(f,{id:"filterdp--filter-button-removable",label:"FilterButtonRemovable",locale:"en-AU",renderTrigger:n=>e.createElement(W,{triggerButtonProps:{...n},removeButtonProps:{onClick:()=>{}}}),isOpen:r,setIsOpen:p,selectedDate:D,onDateChange:v}))}},o={...b,args:{...b.args,id:"filterdp--description",label:"Open to see description",description:"This is a custom description"}},i={...b,args:{...b.args,id:"filterdp--extend-input-props",label:"Check the DOM for the inputs","data-testid":"filterdp--input-testid"}},ee=({validationResponse:t})=>e.createElement("div",null,e.createElement(E,{variant:"body"},"NOTE: This story includes additional custom validation to provide some guidance when dealing with validation other than date isInvalid or isDisabled."),e.createElement("ul",null,e.createElement("li",null,"There will be a caution when the selectedDay ",e.createElement("strong",null,"is valid")," ","but ",e.createElement("strong",null,"is not within this year"),"."),e.createElement("li",null,"There will be an error when the"," ",e.createElement("strong",null,"submit button is clicked")," and there is a"," ",e.createElement("strong",null,"current error"),".")),e.createElement(E,{variant:"body"},"The ",e.createElement("code",null,"onValidate")," callback returns a"," ",e.createElement("code",null,"validationResponse")," object which provides data such as a default validation message, and can be utilised for custom validation."),e.createElement(q,{className:"json"},JSON.stringify(t,null,"	")),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"isInvalid"),': A date that cannot be parsed. e.g "potato".'),e.createElement("li",null,e.createElement("code",null,"isDisabled"),": A date that have been set as disabled through the ",e.createElement("code",null,"disabledDates")," prop."),e.createElement("li",null,e.createElement("code",null,"isEmpty"),": Input is empty."),e.createElement("li",null,e.createElement("code",null,"isValidDate"),": Date input that is not ",e.createElement("code",null,"invalid")," ","nor ",e.createElement("code",null,"disabled")," nor ",e.createElement("code",null,"empty"),"."))),l={render:()=>{const[t,d]=a.useState(),[c,u]=a.useState(),[r,p]=a.useState(),D=n=>{var m;if(u(n),n.isValidDate&&((m=n.date)==null?void 0:m.getFullYear())!==new Date().getFullYear()){p({status:"caution",message:"Date is not this year"});return}p(n.validationMessage)},v=n=>{n.preventDefault();const m=r==null?void 0:r.status;if(m==="error"||m==="caution")return p({status:"error",message:"There is an error"}),alert("Error");alert("Success")};return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:v},e.createElement(Q,{id:"datepicker-default",inputProps:{labelText:"Label"},selectedDate:t,onDateChange:d,onValidate:D,validationMessage:r,disabledDays:new Date,locale:"en-AU"}),e.createElement("div",{style:{marginTop:"2rem",marginBottom:"2rem"}},e.createElement("button",{type:"submit"},"Submit"))),e.createElement(ee,{validationResponse:c}))},parameters:{docs:{source:{type:"code"}},controls:{disable:!0}}};var F,B,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...FilterDatePickerTemplate,
  args: {
    id: "filter-dp--default"
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      },
      source: {
        code: sampleCode
      }
    }
  }
}`,...(P=(B=g.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var O,R,S,y,T;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
    const [dateButton, setDateButton] = useState<Date | undefined>();
    const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false);
    const [rangeRemovable, setRangeRemovable] = useState<Date | undefined>();
    return <div style={{
      display: "flex",
      gap: "1rem"
    }}>
        <FilterDatePicker id="filterdp--filter-button" label="FilterButton" locale="en-AU" renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => <FilterButton {...triggerButtonProps} />} isOpen={isOpenButton} setIsOpen={setIsOpenButton} selectedDate={dateButton} onDateChange={setDateButton} />
        <FilterDatePicker id="filterdp--filter-button-removable" label="FilterButtonRemovable" locale="en-AU" renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => <FilterButtonRemovable triggerButtonProps={{
        ...triggerButtonProps
      }} removeButtonProps={{
        onClick: (): void => undefined
      }} />} isOpen={isOpenRemovable} setIsOpen={setIsOpenRemovable} selectedDate={rangeRemovable} onDateChange={setRangeRemovable} />
      </div>;
  }
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source},description:{story:"Render function for the trigger button.\n\nProvides `selectedValue`, `label`, `isOpen`, `onClick` (calls `setIsOpen`).",...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};var V,k,C,x,I;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...FilterDatePickerTemplate,
  args: {
    ...FilterDatePickerTemplate.args,
    id: "filterdp--description",
    label: "Open to see description",
    description: "This is a custom description"
  }
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:"Custom description to provide extra context (input format help text remains).",...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.description}}};var w,M,A,U,H;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...FilterDatePickerTemplate,
  args: {
    ...FilterDatePickerTemplate.args,
    id: "filterdp--extend-input-props",
    label: "Check the DOM for the inputs",
    // @ts-expect-error: Data-attributes are exempt when directly injected into a JSX.Element
    "data-testid": "filterdp--input-testid"
  }
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source},description:{story:"Add extra props (eg. data-attributes)",...(H=(U=i.parameters)==null?void 0:U.docs)==null?void 0:H.description}}};var J,N,_,j,X;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    const [response, setResponse] = useState<DateValidationResponse | undefined>();
    const [validationMessage, setValidationMessage] = useState<ValidationMessage | undefined>();
    const handleValidate = (validationResponse: DateValidationResponse): void => {
      setResponse(validationResponse);
      // An example of additional validation
      if (validationResponse.isValidDate && validationResponse.date?.getFullYear() !== new Date().getFullYear()) {
        setValidationMessage({
          status: "caution",
          message: "Date is not this year"
        });
        return;
      }
      setValidationMessage(validationResponse.validationMessage);
    };
    const submitRequest: React.FormEventHandler<HTMLFormElement> = e => {
      e.preventDefault();
      const status = validationMessage?.status;
      if (status === "error" || status === "caution") {
        setValidationMessage({
          status: "error",
          message: "There is an error"
        });
        return alert("Error");
      }
      alert("Success");
    };
    return <>
        <form onSubmit={submitRequest}>
          <FilterDatePickerField id="datepicker-default" inputProps={{
          labelText: "Label"
        }} selectedDate={value} onDateChange={setValue} onValidate={handleValidate} validationMessage={validationMessage} disabledDays={new Date()} locale="en-AU" />
          <div style={{
          marginTop: "2rem",
          marginBottom: "2rem"
        }}>
            <button type="submit">Submit</button>
          </div>
        </form>

        <ValidationHelpText validationResponse={response} />
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source},description:{story:"Contents extracted from within the Filter to showcase the validation.",...(X=(j=l.parameters)==null?void 0:j.docs)==null?void 0:X.description}}};const te=["Playground","RenderTrigger","Description","ExtendInputProps","Validation"],pe=Object.freeze(Object.defineProperty({__proto__:null,Description:o,ExtendInputProps:i,Playground:g,RenderTrigger:s,Validation:l,__namedExportsOrder:te,default:Z},Symbol.toStringTag,{value:"Module"}));export{o as D,i as E,pe as F,g as P,s as R,l as V};
