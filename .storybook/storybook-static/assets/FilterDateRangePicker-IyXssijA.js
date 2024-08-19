import{R as r,r as M}from"./index-CTjT7uj6.js";import{g as G}from"./getLocale-DZ-phe2v.js";import{b as B,D as j,c as ee,p as te}from"./validateDate-Bbd7IJoY.js";import{c as x}from"./index-CCQ3W5xA.js";import{g as ae,u as K,a as z}from"./useDateInputHandlers-CFHAAAKV.js";import{a as k}from"./isInvalidDate-CQ4jNt7-.js";import{M as ne}from"./message-BF0EX5jj.js";import{i as re}from"./isRefObject-39zMTbtm.js";import{F}from"./FieldMessage-D8OmrYjz.js";import{V as ie}from"./VisuallyHidden-CDYjeGzr.js";import{u as se}from"./useIntl-Ci3jBQGG.js";import{C as de}from"./CalendarRange-BpKdqjCg.js";import{F as le,a as oe}from"./FilterContents-MyXMWDj6.js";const ue="_dateRangeDisplayLabel_cyxlx_2",pe={dateRangeDisplayLabel:ue},$=({dateRange:t,locale:a})=>{const s=B(t.from,void 0,a),d=B(t.to,void 0,a);return r.createElement("span",{className:pe.dateRangeDisplayLabel},r.createElement("span",null,s),r.createElement("span",null,"-"),r.createElement("span",null,d))};$.displayName="DateRangeDisplayLabel";$.__docgenInfo={description:"",methods:[],displayName:"DateRangeDisplayLabel",props:{dateRange:{required:!0,tsType:{name:"signature",type:"object",raw:"{ from: Date; to: Date }",signature:{properties:[{key:"from",value:{name:"Date",required:!0}},{key:"to",value:{name:"Date",required:!0}}]}},description:""},locale:{required:!0,tsType:{name:"Locale"},description:""}}};const me="_fieldMessageList_199k1_2",ce={fieldMessageList:me},H=({validationMessage:t,dateStartId:a,dateEndId:s,isReversed:d})=>{if(!t)return null;const e=t.dateStart,l=t.dateEnd;return e&&l?e.status===l.status?r.createElement(F,{message:r.createElement("ul",{className:ce.fieldMessageList},r.createElement("li",{id:a},e.message),r.createElement("li",{id:s},l.message)),status:e.status||l.status,reversed:d}):r.createElement(r.Fragment,null,r.createElement(F,{id:a,message:e.message,status:e.status,reversed:d}),r.createElement(F,{id:s,message:l.message,status:l.status,reversed:d})):e?r.createElement(F,{id:a,message:e.message,status:e.status,reversed:d}):l?r.createElement(F,{id:s,message:l.message,status:l.status,reversed:d}):null};H.displayName="DateRangeValidationMessage";H.__docgenInfo={description:"",methods:[],displayName:"DateRangeValidationMessage",props:{validationMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  dateStart?: ValidationMessage
  dateEnd?: ValidationMessage
}`,signature:{properties:[{key:"dateStart",value:{name:"ValidationMessage",required:!1}},{key:"dateEnd",value:{name:"ValidationMessage",required:!1}}]}},description:""},dateStartId:{required:!1,tsType:{name:"string"},description:""},dateEndId:{required:!1,tsType:{name:"string"},description:""},isReversed:{required:!1,tsType:{name:"boolean"},description:""}}};const fe="_dateRangeInputContainer_indi5_2",De="_inputStartDate_indi5_9",Ee="_inputEndDate_indi5_20",ye="_disabled_indi5_34",L={dateRangeInputContainer:fe,inputStartDate:De,inputEndDate:Ee,disabled:ye},A=r.forwardRef(({id:t,legend:a,inputStartDateProps:s,inputEndDateProps:d,description:e,disabled:l,isReversed:o=!1,validationMessage:i,locale:p,classNameOverride:b,...m},c)=>{var T,I;const g=re(c)?c.current:null,R=g==null?void 0:g.inputStartDateRef,q=g==null?void 0:g.inputEndDateRef,D=`${t}--field-message`,S=i!=null&&i.dateStart?`${t}--date-start-error-message`:void 0,N=S?`${S} ${D}`:D,_=S!==void 0,y=i!=null&&i.dateEnd?`${t}--date-end-error-message`:void 0,h=y?`${y} ${D}`:D,w=y!==void 0;return r.createElement("div",{className:b,...m},r.createElement("fieldset",{className:L.dateRangeInputContainer},r.createElement("legend",null,r.createElement(ie,null,a)),r.createElement(j,{ref:R,id:`${t}--from`,"aria-describedby":N,"aria-errormessage":S,"aria-invalid":_,autoComplete:"off",disabled:l,status:(T=i==null?void 0:i.dateStart)==null?void 0:T.status,...s,classNameOverride:x(L.inputStartDate,s.classNameOverride)}),r.createElement(j,{ref:q,id:`${t}--to`,"aria-describedby":h,"aria-errormessage":y,"aria-invalid":w,autoComplete:"off",disabled:l,status:(I=i==null?void 0:i.dateEnd)==null?void 0:I.status,...d,classNameOverride:x(L.inputEndDate,d.classNameOverride)})),i&&r.createElement(H,{validationMessage:i,isReversed:o,dateStartId:S,dateEndId:y}),r.createElement(F,{id:D,message:r.createElement(ee,{description:e,locale:p}),reversed:o,classNameOverride:l?L.disabled:void 0}))});A.displayName="DateRangeInputField";A.__docgenInfo={description:"",methods:[],displayName:"DateRangeInputField",props:{isReversed:{defaultValue:{value:"false",computed:!1},required:!1}}};const ve=(t,a)=>{switch(a.type){case"update_selected_start_date":return{...t,selectedStartDate:a.date,inputStartValue:a.inputValue===void 0?t.inputStartValue:a.inputValue,startMonth:a.date&&!k(a.date)?a.date:new Date};case"update_selected_end_date":return{...t,selectedEndDate:a.date,inputEndValue:a.inputValue===void 0?t.inputEndValue:a.inputValue};case"navigate_months":return{...t,startMonth:a.date&&!k(a.date)?a.date:new Date};case"update_input_start_field":return{...t,inputStartValue:a.inputValue};case"update_input_end_field":return{...t,inputEndValue:a.inputValue}}},P=(t,a)=>t&&a?t<=a:!1,ge=({startDate:t,startDateFieldLabel:a,endDate:s,endDateInputValue:d})=>{const e={date:s,inputValue:d,validationMessage:void 0,isInvalid:!1,isDisabled:!1,isEmpty:!1,isValidDate:!0};return P(t,s)?{validationResponse:e,newDate:s}:{validationResponse:{...e,validationMessage:{status:"error",message:r.createElement(ne,{id:"date.validation.rangeEndBeforeRangeStart",defaultMessage:'Cannot be earlier than the selection in "{startDateFieldLabel}"',description:"Error message when the user tries to select an end date earlier than the start date",values:{startDateFieldLabel:ae(a)}})}},newDate:s}},_e=t=>{const{validationMessage:a,validateDate:s,updateValidation:d}=K(t),e=o=>{const{validationResponse:i,newDate:p}=ge(o);return d(i),p};return{validationMessage:a,validateDate:({endDate:o,endDateInputValue:i,startDate:p,startDateFieldLabel:b})=>{const{validationResponse:m,newDate:c}=s({date:o,inputValue:i});return m.isValidDate&&c&&p?e({startDate:p,startDateFieldLabel:b,endDate:c,endDateInputValue:i}):(d(m),c)},validateEndDateBeforeStartDate:e}},Ve=t=>{const{validationMessage:a,validateDate:s,updateValidation:d}=K(t);return{validationMessage:a,validateDate:({date:l,inputValue:o})=>{const{validationResponse:i,newDate:p}=s({date:l,inputValue:o});return d(i),p}}},be="_filterDateRangePickerField_1m19a_2",Se="_dateRangeInputField_1m19a_6",U={filterDateRangePickerField:be,dateRangeInputField:Se},J=({id:t,label:a,locale:s,defaultMonth:d,selectedRange:e,onRangeChange:l,disabledDays:o,inputStartDateProps:i,inputEndDateProps:p,description:b,validationMessage:m,onValidate:c,classNameOverride:g,...R})=>{const{formatMessage:q}=se(),D=G(s),S=q({id:"filterDateRangePicker.dateFrom",defaultMessage:"Date from",description:"Label for the 'Date from' field"}),N=q({id:"filterDateRangePicker.dateTo",defaultMessage:"Date to",description:"Label for the 'date to' field"}),_=(i==null?void 0:i.labelText)||S,y=(p==null?void 0:p.labelText)||N,h=n=>n?B(n,o,D):"",w=n=>{l(n)},T=Ve({inputLabel:_,disabledDays:o,validationMessage:m==null?void 0:m.dateStart,onValidate:c==null?void 0:c.dateStart}),I=_e({inputLabel:y,disabledDays:o,validationMessage:m==null?void 0:m.dateEnd,onValidate:c==null?void 0:c.dateEnd}),C=(n,u)=>T.validateDate({date:n,inputValue:u}),O=(n,u)=>I.validateDate({endDate:n,endDateInputValue:u,startDate:e==null?void 0:e.from,startDateFieldLabel:_}),[E,v]=M.useReducer(ve,{selectedStartDate:e==null?void 0:e.from,selectedEndDate:e==null?void 0:e.to,inputStartValue:h(e==null?void 0:e.from),inputEndValue:h(e==null?void 0:e.to),startMonth:e!=null&&e.from&&!k(e.from)?e.from:d||new Date}),W=z({locale:D,disabledDays:o,setInputValue:n=>{v({type:"update_input_start_field",inputValue:n})},onDateChange:n=>{const u=C(n,E.inputStartValue),f=te(E.inputEndValue,D),V=P(u,f);v({type:"update_selected_start_date",date:u}),v({type:"update_selected_end_date",date:V?f:void 0}),w({from:u,to:V?f:void 0}),u&&f&&!k(f)&&I.validateEndDateBeforeStartDate({startDate:u,startDateFieldLabel:_,endDate:f,endDateInputValue:E.inputEndValue})},...i}),Y=z({locale:D,disabledDays:o,setInputValue:n=>{v({type:"update_input_end_field",inputValue:n})},onDateChange:n=>{const u=E.selectedStartDate,f=O(n,E.inputEndValue),V=P(u,f);v({type:"update_selected_end_date",date:V?f:void 0}),w({from:u,to:V?f:void 0})},...p}),Z=n=>{const u=h(n==null?void 0:n.from),f=h(n==null?void 0:n.to),V=C(n==null?void 0:n.from,u),X=O(n==null?void 0:n.to,f);v({type:"update_selected_start_date",date:V,inputValue:u}),v({type:"update_selected_end_date",date:X,inputValue:f}),w({from:V,to:X})};return M.useEffect(()=>{if(_===" "||y===" ")return;const n=C(e==null?void 0:e.from,E.inputStartValue),u=O(e==null?void 0:e.to,E.inputEndValue);n&&!P(n,u)&&v({type:"update_selected_end_date",date:void 0}),w({from:n,to:u})},[_,y]),r.createElement("div",{className:x(U.filterDateRangePickerField,g),...R},r.createElement(A,{id:`${t}--input`,legend:a,inputStartDateProps:{labelText:_,value:E.inputStartValue,...i,...W},inputEndDateProps:{labelText:y,value:E.inputEndValue,...p,...Y},locale:D,description:b,validationMessage:{dateStart:T.validationMessage,dateEnd:I.validationMessage},classNameOverride:U.dateRangeInputField}),r.createElement(de,{disabled:o,locale:D,selected:{from:E.selectedStartDate,to:E.selectedEndDate},onSelect:Z,month:E.startMonth,onMonthChange:n=>v({type:"navigate_months",date:n})}))};J.displayName="FilterDateRangePickerField";J.__docgenInfo={description:"",methods:[],displayName:"FilterDateRangePickerField",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"DatePickerSupportedLocales"},description:""},defaultMonth:{required:!1,tsType:{name:'CalendarRangeProps["defaultMonth"]',raw:'CalendarRangeProps["defaultMonth"]'},description:"Sets first displayed month to month of provided date if there isn't a date set."},selectedRange:{required:!0,tsType:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},description:"The date range passed in from the consumer that renders in the inputs and calendar."},onRangeChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:"Callback when date is updated either by the calendar picker or by typing and blurring.\nDate will return as `undefined` if empty, invalid or disabled."},disabledDays:{required:!1,tsType:{name:"DisabledDays"},description:"See https://react-day-picker.js.org/api/types/Matcher"},inputStartDateProps:{required:!1,tsType:{name:"intersection",raw:`Omit<Partial<InputProps>, "value"> &
DataAttributes`,elements:[{name:"Omit",elements:[{name:"Partial",elements:[{name:'intersection["inputStartDateProps"]',raw:'DateRangeInputFieldProps["inputStartDateProps"]'}],raw:"Partial<InputProps>"},{name:"literal",value:'"value"'}],raw:'Omit<Partial<InputProps>, "value">'},{name:"DataAttributes"}]},description:""},inputEndDateProps:{required:!1,tsType:{name:"intersection",raw:`Omit<Partial<InputProps>, "value"> &
DataAttributes`,elements:[{name:"Omit",elements:[{name:"Partial",elements:[{name:'intersection["inputEndDateProps"]',raw:'DateRangeInputFieldProps["inputEndDateProps"]'}],raw:"Partial<InputProps>"},{name:"literal",value:'"value"'}],raw:'Omit<Partial<InputProps>, "value">'},{name:"DataAttributes"}]},description:""},description:{required:!1,tsType:{name:'intersection["description"]',raw:'DateRangeInputFieldProps["description"]'},description:"Custom description to provide extra context (input format help text remains)."},validationMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  dateStart?: ValidationMessage
  dateEnd?: ValidationMessage
}`,signature:{properties:[{key:"dateStart",value:{name:"ValidationMessage",required:!1}},{key:"dateEnd",value:{name:"ValidationMessage",required:!1}}]}},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  dateStart?: (validationResponse: DateValidationResponse) => void
  dateEnd?: (validationResponse: DateValidationResponse) => void
}`,signature:{properties:[{key:"dateStart",value:{name:"signature",type:"function",raw:"(validationResponse: DateValidationResponse) => void",signature:{arguments:[{type:{name:"DateValidationResponse"},name:"validationResponse"}],return:{name:"void"}},required:!1}},{key:"dateEnd",value:{name:"signature",type:"function",raw:"(validationResponse: DateValidationResponse) => void",signature:{arguments:[{type:{name:"DateValidationResponse"},name:"validationResponse"}],return:{name:"void"}},required:!1}}]}},description:"Callback when a date is selected. Utilises internal validation if not set."}}};const he=t=>(t==null?void 0:t.from)!==void 0&&(t==null?void 0:t.to)!==void 0,Q=({id:t,isOpen:a,setIsOpen:s,renderTrigger:d,selectedRange:e,label:l,locale:o,...i})=>{const p=M.useId(),b=t??p;return r.createElement(le,{isOpen:a,setIsOpen:s,renderTrigger:m=>d({selectedValue:he(e)&&P(e.from,e.to)?r.createElement($,{dateRange:e,locale:G(o)}):void 0,label:l,...m})},r.createElement(oe,null,r.createElement(J,{id:`${b}--input`,label:l,locale:o,selectedRange:e,...i})))};Q.displayName="FilterDateRangePicker";Q.__docgenInfo={description:"",methods:[],displayName:"FilterDateRangePicker",props:{id:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:'FilterProps["isOpen"]',raw:'FilterProps["isOpen"]'},description:""},setIsOpen:{required:!0,tsType:{name:'FilterProps["setIsOpen"]',raw:'FilterProps["setIsOpen"]'},description:""},renderTrigger:{required:!0,tsType:{name:"signature",type:"function",raw:"(triggerProps: FilterButtonProps) => JSX.Element",signature:{arguments:[{type:{name:"intersection",raw:`{
  label: string
  selectedValue?: string | JSX.Element
  isOpen?: boolean
} & Omit<FilterButtonBaseProps, "children">`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  selectedValue?: string | JSX.Element
  isOpen?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"selectedValue",value:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}],required:!1}},{key:"isOpen",value:{name:"boolean",required:!1}}]}},{name:"Omit",elements:[{name:"intersection",raw:`{
  children: React.ReactNode
} & OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>>`,elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"OverrideClassName",elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"}],raw:"OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>>"}]},{name:"literal",value:'"children"'}],raw:'Omit<FilterButtonBaseProps, "children">'}]},name:"triggerProps"}],return:{name:"JSX.Element"}}},description:""}}};export{Q as F,J as a};
