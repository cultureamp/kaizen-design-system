import{R as e,r as n}from"./index-CTjT7uj6.js";import{f as P}from"./index-BySiBzEG.js";import{H as te}from"./index-BtE2hmwC.js";import{d as ne}from"./defaultMonthControls-DfKCABiO.js";import{r as ae}from"./renderTriggerControls-DBfT5i7c.js";import{T as F}from"./Text-D2gQH1xL.js";import{v as re,d as se}from"./validationControls-Cu3oWjDv.js";import{F as p,a as oe}from"./FilterDateRangePicker-IyXssijA.js";import{F as ee}from"./FilterButton-BGzpTfmP.js";import{F as le}from"./FilterButtonRemovable-CDjh8qGF.js";const ie={title:"Components/Filter Date Range Picker",component:p,argTypes:{classNameOverride:{control:!1,description:"Add extra classnames to the component. (This doesn't work - to be fixed)"},...ne,...re,...ae,disabledDays:se,locale:{options:["en-US","en-AU"],control:{type:"radio"}},inputStartDateProps:{table:{type:{summary:'Omit<DateInputProps, "id">'}}},inputEndDateProps:{table:{type:{summary:'Omit<DateInputProps, "id">'}}},isOpen:{control:!1},selectedRange:{options:["None","Partial Range","Complete Range"],control:{type:"select",labels:{None:"undefined","Partial Range":"{ from: new Date() }","Complete Range":'{ from: new Date("2022-05-01"), to: new Date("2022-05-12") }'}},mapping:{None:void 0,"Partial Range":{from:new Date},"Complete Range":{from:new Date("2022-05-01"),to:new Date("2022-05-12")}}},description:{control:"text"}},args:{label:"Dates",locale:"en-AU",isOpen:!1,selectedRange:void 0,renderTrigger:t=>e.createElement(ee,{...t}),setIsOpen:P(),onRangeChange:P()}},O={render:t=>{const[o,l]=n.useState(t.isOpen),[i,a]=n.useState();return n.useEffect(()=>{a(t.selectedRange)},[t.selectedRange]),e.createElement(p,{...t,isOpen:o,setIsOpen:l,selectedRange:i,onRangeChange:a})}},de=`
// This code is not connected to the controls of the attached component.
// @note: If you want a removable button, use the commented out code instead.

import {
  FilterButton,
  FilterButtonProps,
//  FilterButtonRemovable,
  FilterDateRangePicker,
} from "@kaizen/components"

const [isOpen, setIsOpen] = useState<boolean>(false)
const [range, setRange] = useState<DateRange | undefined>()

return (
  <FilterDateRangePicker
    id="filter-drp--default"
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
    selectedRange={range}
    onRangeChange={setRange}
  />
)
`,D={...O,args:{id:"filter-drp--default",renderTrigger:"Filter Button"},parameters:{docs:{canvas:{sourceState:"shown"},source:{code:de}}}},g={render:()=>{const[t,o]=n.useState(!1),[l,i]=n.useState(),[a,d]=n.useState(!1),[u,S]=n.useState();return e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(p,{id:"filterdrp--filter-button",label:"FilterButton",locale:"en-AU",renderTrigger:c=>e.createElement(ee,{...c}),isOpen:t,setIsOpen:o,selectedRange:l,onRangeChange:i}),e.createElement(p,{id:"filterdrp--filter-button-removable",label:"FilterButtonRemovable",locale:"en-AU",renderTrigger:c=>e.createElement(le,{triggerButtonProps:{...c},removeButtonProps:{onClick:()=>{}}}),isOpen:a,setIsOpen:d,selectedRange:u,onRangeChange:S}))}},m={render:t=>{const[o,l]=n.useState(!1),[i,a]=n.useState(!1),[d,u]=n.useState(!1),[S,c]=n.useState(),[v,r]=n.useState({from:new Date}),[s,h]=n.useState({from:new Date("2022-05-01"),to:new Date("2022-05-12")});return e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(p,{...t,id:"filterdrp--not-selected",label:"Not selected",isOpen:o,setIsOpen:l,selectedRange:S,onRangeChange:c}),e.createElement(p,{...t,id:"filterdrp--partial-range",label:"Partial range",isOpen:i,setIsOpen:a,selectedRange:v,onRangeChange:r}),e.createElement(p,{...t,id:"filterdrp--complete",label:"Complete range",isOpen:d,setIsOpen:u,selectedRange:s,onRangeChange:h}))}},R={...O,args:{id:"filterdrp--description",label:"Open to see description",description:"This is a custom description"}},f={...O,args:{id:"filterdrp--extend-input-props",label:"Check the DOM for the inputs",inputStartDateProps:{"data-testid":"filterdrp--input-start-testid"},inputEndDateProps:{"data-testid":"filterdrp--input-end-testid"}}},ce=({validationResponse:t})=>e.createElement("div",null,e.createElement(F,{variant:"body"},"NOTE: This story includes additional custom validation to provide some guidance when dealing with validation other than date isInvalid or isDisabled."),e.createElement("ul",null,e.createElement("li",null,"There will be a caution when the selectedDay ",e.createElement("strong",null,"is valid")," ","but ",e.createElement("strong",null,"is not within this year"),"."),e.createElement("li",null,"There will be an error when the"," ",e.createElement("strong",null,"submit button is clicked")," and there is a"," ",e.createElement("strong",null,"current error"),".")),e.createElement(F,{variant:"body"},"The ",e.createElement("code",null,"onValidate")," callback returns a"," ",e.createElement("code",null,"validationResponse")," object which provides data such as a default validation message, and can be utilised for custom validation."),e.createElement(te,{className:"json"},JSON.stringify(t,null,"	")),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"isInvalid"),': A date that cannot be parsed. e.g "potato".'),e.createElement("li",null,e.createElement("code",null,"isDisabled"),": A date that have been set as disabled through the ",e.createElement("code",null,"disabledDates")," prop."),e.createElement("li",null,e.createElement("code",null,"isEmpty"),": Input is empty."),e.createElement("li",null,e.createElement("code",null,"isValidDate"),": Date input that is not ",e.createElement("code",null,"invalid")," ","nor ",e.createElement("code",null,"disabled")," nor ",e.createElement("code",null,"empty"),"."))),b={render:()=>{const[t,o]=n.useState(),[l,i]=n.useState(),[a,d]=n.useState(),u=(r,s)=>{var h;if(i(r),r.isValidDate&&((h=r.date)==null?void 0:h.getFullYear())!==new Date().getFullYear()){d(E=>({...E,[s]:{status:"caution",message:`(${s}) Date is not this year`}}));return}d(E=>({...E,[s]:r.validationMessage}))},S=r=>u(r,"dateStart"),c=r=>u(r,"dateEnd"),v=r=>{r.preventDefault();let s;if(a!=null&&a.dateStart&&(s={dateStart:{status:"error",message:"Error for start date"}}),a!=null&&a.dateEnd&&(s={...s,dateEnd:{status:"error",message:"Error for end date"}}),s)return d(s),alert("Error");alert("Success")};return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:v},e.createElement(oe,{id:"datepicker-default",label:"Label",selectedRange:t,onRangeChange:o,onValidate:{dateStart:S,dateEnd:c},validationMessage:a,disabledDays:new Date,locale:"en-AU"}),e.createElement("div",{style:{marginTop:"2rem",marginBottom:"2rem"}},e.createElement("button",{type:"submit"},"Submit"))),e.createElement(ce,{validationResponse:l}))},parameters:{docs:{source:{type:"code"}},controls:{disable:!0}}};var y,B,C;D.parameters={...D.parameters,docs:{...(y=D.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...FilterDateRangePickerTemplate,
  args: {
    id: "filter-drp--default",
    /* @ts-expect-error: Storybook controls key; see argTypes in default export */
    renderTrigger: "Filter Button"
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
}`,...(C=(B=D.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var I,V,T,w,k;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
    const [rangeButton, setRangeButton] = useState<DateRange | undefined>();
    const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false);
    const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>();
    return <div style={{
      display: "flex",
      gap: "1rem"
    }}>
        <FilterDateRangePicker id="filterdrp--filter-button" label="FilterButton" locale="en-AU" renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => <FilterButton {...triggerButtonProps} />} isOpen={isOpenButton} setIsOpen={setIsOpenButton} selectedRange={rangeButton} onRangeChange={setRangeButton} />
        <FilterDateRangePicker id="filterdrp--filter-button-removable" label="FilterButtonRemovable" locale="en-AU" renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => <FilterButtonRemovable triggerButtonProps={{
        ...triggerButtonProps
      }} removeButtonProps={{
        onClick: (): void => undefined
      }} />} isOpen={isOpenRemovable} setIsOpen={setIsOpenRemovable} selectedRange={rangeRemovable} onRangeChange={setRangeRemovable} />
      </div>;
  }
}`,...(T=(V=g.parameters)==null?void 0:V.docs)==null?void 0:T.source},description:{story:"Render function for the trigger button.\n\nProvides `selectedValue`, `label`, `isOpen`, `onClick` (calls `setIsOpen`).",...(k=(w=g.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var x,N,M,A,U;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [isOpenNotSelected, setIsOpenNotSelected] = useState<boolean>(false);
    const [isOpenPartial, setIsOpenPartial] = useState<boolean>(false);
    const [isOpenComplete, setIsOpenComplete] = useState<boolean>(false);
    const [rangeNotSelected, setRangeNotSelected] = useState<DateRange | undefined>();
    const [rangePartial, setRangePartial] = useState<DateRange | undefined>({
      from: new Date()
    });
    const [rangeComplete, setRangeComplete] = useState<DateRange | undefined>({
      from: new Date("2022-05-01"),
      to: new Date("2022-05-12")
    });
    return <div style={{
      display: "flex",
      gap: "1rem"
    }}>
        <FilterDateRangePicker {...args} id="filterdrp--not-selected" label="Not selected" isOpen={isOpenNotSelected} setIsOpen={setIsOpenNotSelected} selectedRange={rangeNotSelected} onRangeChange={setRangeNotSelected} />
        <FilterDateRangePicker {...args} id="filterdrp--partial-range" label="Partial range" isOpen={isOpenPartial} setIsOpen={setIsOpenPartial} selectedRange={rangePartial} onRangeChange={setRangePartial} />
        <FilterDateRangePicker {...args} id="filterdrp--complete" label="Complete range" isOpen={isOpenComplete} setIsOpen={setIsOpenComplete} selectedRange={rangeComplete} onRangeChange={setRangeComplete} />
      </div>;
  }
}`,...(M=(N=m.parameters)==null?void 0:N.docs)==null?void 0:M.source},description:{story:"Selected value will only be passed into the Filter Button when date range has both a Start and End date.",...(U=(A=m.parameters)==null?void 0:A.docs)==null?void 0:U.description}}};var H,_,J,j,X;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...FilterDateRangePickerTemplate,
  args: {
    id: "filterdrp--description",
    label: "Open to see description",
    description: "This is a custom description"
  }
}`,...(J=(_=R.parameters)==null?void 0:_.docs)==null?void 0:J.source},description:{story:"Custom description to provide extra context (input format help text remains).",...(X=(j=R.parameters)==null?void 0:j.docs)==null?void 0:X.description}}};var Y,q,L,z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...FilterDateRangePickerTemplate,
  args: {
    id: "filterdrp--extend-input-props",
    label: "Check the DOM for the inputs",
    inputStartDateProps: {
      "data-testid": "filterdrp--input-start-testid"
    },
    inputEndDateProps: {
      "data-testid": "filterdrp--input-end-testid"
    }
  }
}`,...(L=(q=f.parameters)==null?void 0:q.docs)==null?void 0:L.source},description:{story:"Add extra props (eg. data-attributes) to the Start or End date inputs\nusing `inputStartDateProps` and/or `inputEndDateProps`.",...($=(z=f.parameters)==null?void 0:z.docs)==null?void 0:$.description}}};var G,K,Q,W,Z;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>();
    const [response, setResponse] = useState<DateValidationResponse | undefined>();
    const [validationMessage, setValidationMessage] = useState<DateRangeFieldValidationMessage | undefined>();
    const handleValidate = (validationResponse: DateValidationResponse, input: "dateStart" | "dateEnd"): void => {
      setResponse(validationResponse);
      // An example of additional validation
      if (validationResponse.isValidDate && validationResponse.date?.getFullYear() !== new Date().getFullYear()) {
        setValidationMessage(currentValue => ({
          ...currentValue,
          [input]: {
            status: "caution",
            message: \`(\${input}) Date is not this year\`
          }
        }));
        return;
      }
      setValidationMessage(currentValue => ({
        ...currentValue,
        [input]: validationResponse.validationMessage
      }));
    };
    const handleDateStartValidate = (validationResponse: DateValidationResponse): void => handleValidate(validationResponse, "dateStart");
    const handleDateEndValidate = (validationResponse: DateValidationResponse): void => handleValidate(validationResponse, "dateEnd");
    const submitRequest: React.FormEventHandler<HTMLFormElement> = e => {
      e.preventDefault();
      let errors: DateRangeFieldValidationMessage | undefined;
      if (validationMessage?.dateStart) {
        errors = {
          dateStart: {
            status: "error",
            message: "Error for start date"
          }
        };
      }
      if (validationMessage?.dateEnd) {
        errors = {
          ...errors,
          dateEnd: {
            status: "error",
            message: "Error for end date"
          }
        };
      }
      if (errors) {
        setValidationMessage(errors);
        return alert("Error");
      }
      alert("Success");
    };
    return <>
        <form onSubmit={submitRequest}>
          <FilterDateRangePickerField id="datepicker-default" label="Label" selectedRange={range} onRangeChange={setRange} onValidate={{
          dateStart: handleDateStartValidate,
          dateEnd: handleDateEndValidate
        }} validationMessage={validationMessage} disabledDays={new Date()} locale="en-AU" />
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Contents extracted from within the Filter to showcase the validation.",...(Z=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Z.description}}};const pe=["Playground","RenderTrigger","SelectedRange","Description","ExtendInputProps","Validation"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Description:R,ExtendInputProps:f,Playground:D,RenderTrigger:g,SelectedRange:m,Validation:b,__namedExportsOrder:pe,default:ie},Symbol.toStringTag,{value:"Module"}));export{R as D,f as E,Ee as F,D as P,g as R,m as S,b as V};
