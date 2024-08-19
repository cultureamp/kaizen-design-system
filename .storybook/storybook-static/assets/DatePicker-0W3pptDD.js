import{R as a,r as i}from"./index-CTjT7uj6.js";import{g as ve}from"./getLocale-DZ-phe2v.js";import{p as he,a as we,D as Ie,c as ke,b as P,f as _,v as j,i as Ee}from"./validateDate-Bbd7IJoY.js";import{c as Fe}from"./calculateDisabledDays-DlHy-kbk.js";import{F as Te}from"./Combination-DFaMps7A.js";import{c as J}from"./index-CCQ3W5xA.js";import{D as Se}from"./DateStartIcon-DLPQFSri.js";import{i as Ce}from"./isRefObject-39zMTbtm.js";import{F as G}from"./FieldMessage-D8OmrYjz.js";import{e as Me}from"./en-AU-C5dfMWdV.js";import{a as Q,s as N}from"./isInvalidDate-CQ4jNt7-.js";import{u as qe}from"./useIntl-Ci3jBQGG.js";import{C as Ve}from"./CalendarPopover-Do4ZmdN_.js";import{V as Re}from"./VisuallyHidden-CDYjeGzr.js";import{C as Ae}from"./CalendarSingle-DmO3h1TK.js";import{i as Pe}from"./isDisabledDate-DCznrglD.js";const z=(s,n)=>{const r=he(s,n);return r.toString()!=="Invalid Date"?r:we(s,n)},_e=s=>s instanceof HTMLElement,Ne=(s,n)=>{const u=s.getElementsByClassName(n&&!Q(n)?N.daySelected:N.dayToday)[0]??s.getElementsByClassName(N.day)[0];_e(u)&&u.focus()},xe="_iconButton_a2uix_40",Le="_calendarActive_a2uix_76",Oe="_disabled_a2uix_81",x={iconButton:xe,calendarActive:Le,disabled:Oe},L=a.forwardRef(({onButtonClick:s,disabled:n,value:r,...u},f)=>{const o=Ce(f)?f.current:null,c=o==null?void 0:o.inputRef,D=o==null?void 0:o.buttonRef,b=a.createElement("button",{ref:D,type:"button",onClick:s,"aria-label":r?`Change date, ${r}`:"Choose date","aria-disabled":n,disabled:n,className:J(x.iconButton,u["aria-expanded"]&&x.calendarActive,n&&x.disabled)},a.createElement(Se,{role:"presentation"}));return a.createElement(Ie,{ref:c,disabled:n,value:r,endIconAdornment:b,...u})});L.displayName="DateInputWithIconButton";L.__docgenInfo={description:"",methods:[],displayName:"DateInputWithIconButton"};const Be="_disabled_1s38r_1",$e={disabled:Be},O=a.forwardRef(({description:s,status:n,validationMessage:r,locale:u=Me,id:f,disabled:o,isReversed:c=!1,classNameOverride:D,...b},T)=>{const S=i.useId(),d=f??S,v=`${d}-field-message`,I=!o&&r;return a.createElement("div",{className:D},a.createElement(L,{ref:T,id:d,"aria-describedby":v,status:n,disabled:o,isReversed:c,...b}),I&&a.createElement(G,{message:r,status:n,reversed:c}),a.createElement("div",{className:J(o&&$e.disabled)},a.createElement(G,{id:v,message:a.createElement(ke,{description:s,locale:u}),reversed:c})))});O.displayName="DateInputField";O.__docgenInfo={description:"",methods:[],displayName:"DateInputField",props:{locale:{defaultValue:{value:"enAU",computed:!0},required:!1},isReversed:{defaultValue:{value:"false",computed:!1},required:!1}}};const X=({id:s,buttonRef:n=i.useRef(null),locale:r="en-AU",disabledDates:u,disabledDaysOfWeek:f,disabledRange:o,disabledBeforeAfter:c,disabledBefore:D,disabledAfter:b,weekStartsOn:T,defaultMonth:S,selectedDay:d,status:v,validationMessage:I,onInputClick:C,onInputFocus:M,onInputChange:q,onInputBlur:y,onButtonClick:V,onDayChange:Y,onValidate:B,...Z})=>{const{formatMessage:ee}=qe(),ae=ee({id:"datePicker.calendarLabelDescription",defaultMessage:"Select date from calendar for:",description:"Label for the search input"}),te=i.useId(),h=s??te,$=i.useRef(null),U=i.useRef(null),H=i.useRef((n==null?void 0:n.current)||null),ne=i.useRef({inputRef:U,buttonRef:H}),[g,w]=i.useState(""),[k,m]=i.useState(!1),[E,R]=i.useState(),[se,ie]=i.useState(),[re,oe]=i.useState(),A=B===void 0,l=ve(r),p=Fe({disabledDates:u,disabledDaysOfWeek:f,disabledRange:o,disabledBeforeAfter:c,disabledBefore:D,disabledAfter:b}),K=e=>{A?(ie(e.status),oe(e.validationMessage)):B(e)},F=(e,t)=>{const{validationResponse:De,newDate:be}=j({date:e,inputValue:t,disabledDays:p});K(De),Y(be)},de=e=>{if(!Pe(e,p)){const t=E==="calendarButton"?P(e,p,l):_(e,l);w(t),F(e),m(!1)}},le=e=>{m(!0),C==null||C(e)},ue=e=>{if(R("inputFocus"),d){const t=_(d,l);w(t)}M==null||M(e)},ce=e=>{w(e.target.value),q==null||q(e)},me=e=>{if(!Ee(e.relatedTarget)){if(g!==""){const t=z(g,l);Q(t)||w(P(t,p,l)),F(t,g),y==null||y(e);return}F(void 0,g),y==null||y(e)}},pe=e=>{if(e.key==="Enter"){m(!1);const t=z(g,l);F(t,e.currentTarget.value)}(e.key==="ArrowDown"||e.key==="ArrowDown"&&e.altKey===!0)&&(e.preventDefault(),m(!0),R("inputKeydown"))},fe=e=>{m(!k),R("calendarButton"),V==null||V(e)},ye=e=>{E!=="inputFocus"&&Ne(e,d)},ge=()=>{var e,t;if(E==="inputKeydown"||E==="inputFocus")return(e=U.current)==null?void 0:e.focus();(t=H.current)==null||t.focus()};i.useEffect(()=>{if(d){w(P(d,p,l));const e=_(d,l),{validationResponse:t}=j({date:d,inputValue:e,disabledDays:p});!t.isValidDate&&!t.isEmpty&&K(t)}},[d]);const W=`${h}-calendar-dialog`;return a.createElement(Te,{scrollLock:!1,returnFocus:!1,onDeactivation:ge,onClickOutside:()=>m(!1),onEscapeKey:()=>m(!1),enabled:k},a.createElement("div",{ref:$},a.createElement(O,{ref:ne,id:h,role:"combobox","aria-haspopup":"dialog","aria-expanded":k,"aria-controls":W,value:g,locale:l,onButtonClick:fe,onClick:le,onFocus:ue,onChange:ce,onBlur:me,onKeyDown:pe,status:v!==void 0||!A?v:se,validationMessage:I!==void 0||!A?I:re,...Z})),k&&a.createElement(Ve,{referenceElement:$.current,"aria-labelledby":`${h}-calendar-label ${h}-input-label`},a.createElement(a.Fragment,null,a.createElement(Re,{id:`${h}-calendar-label`},ae),a.createElement(Ae,{id:W,selected:d,defaultMonth:S,weekStartsOn:T,disabled:p,locale:l,onDayClick:de,onMount:ye}))))};X.displayName="DatePicker";X.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082061174/Date+Picker Guidance} |
{@link https://cultureamp.design/?path=/docs/components-date-controls-datepicker--docs Storybook}`,methods:[],displayName:"DatePicker",props:{id:{required:!1,tsType:{name:"string"},description:""},buttonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLButtonElement"}],raw:"RefObject<HTMLButtonElement>"},description:"",defaultValue:{value:"useRef<HTMLButtonElement>(null)",computed:!0}},onInputClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'DateInputFieldProps["onClick"]'},description:""},onInputFocus:{required:!1,tsType:{name:'intersection["onFocus"]',raw:'DateInputFieldProps["onFocus"]'},description:""},onInputChange:{required:!1,tsType:{name:'intersection["onChange"]',raw:'DateInputFieldProps["onChange"]'},description:""},onInputBlur:{required:!1,tsType:{name:'intersection["onBlur"]',raw:'DateInputFieldProps["onBlur"]'},description:""},onButtonClick:{required:!1,tsType:{name:'intersection["onButtonClick"]',raw:'DateInputFieldProps["onButtonClick"]'},description:""},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"en-AU"',computed:!1}},weekStartsOn:{required:!1,tsType:{name:'CalendarSingleProps["weekStartsOn"]',raw:'CalendarSingleProps["weekStartsOn"]'},description:`Accepts a DayOfWeek value to start the week on that day.
By default it adapts to the provided locale.`},defaultMonth:{required:!1,tsType:{name:'CalendarSingleProps["defaultMonth"]',raw:'CalendarSingleProps["defaultMonth"]'},description:"Accepts a date to display that month on first render."},selectedDay:{required:!0,tsType:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},description:"The date passed in from the consumer that renders in the input and calendar."},onDayChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},name:"date"}],return:{name:"void"}}},description:`Callback when date is updated either by the calendar picker or by typing and bluring.
Date will return as undefined if invalid or disabled.`},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"(validationResponse: ValidationResponse) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  date: Date | undefined
  inputValue: string | undefined // Input value upon validation
  status: FieldMessageStatus | undefined
  validationMessage: string | ReactElement | undefined
  isDisabled: boolean
  isInvalid: boolean
  isEmpty: boolean
  isValidDate: boolean // A date is !isDisabled && !isInvalid && !isEmpty
}`,signature:{properties:[{key:"date",value:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}],required:!0}},{key:"inputValue",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"status",value:{name:"union",raw:"FieldMessageStatus | undefined",elements:[{name:"FieldMessageStatus"},{name:"undefined"}],required:!0}},{key:"validationMessage",value:{name:"union",raw:"string | ReactElement | undefined",elements:[{name:"string"},{name:"ReactElement"},{name:"undefined"}],required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}},{key:"isInvalid",value:{name:"boolean",required:!0}},{key:"isEmpty",value:{name:"boolean",required:!0}},{key:"isValidDate",value:{name:"boolean",required:!0}}]}},name:"validationResponse"}],return:{name:"void"}}},description:"Callback when a date is selected. Utilises internal validation if not set."},status:{required:!1,tsType:{name:"union",raw:'DateInputFieldProps["status"] | undefined',elements:[{name:'intersection["status"]',raw:'DateInputFieldProps["status"]'},{name:"undefined"}]},description:"Updates the styling of the validation FieldMessage."},validationMessage:{required:!1,tsType:{name:"union",raw:'DateInputFieldProps["validationMessage"] | undefined',elements:[{name:'intersection["validationMessage"]',raw:'DateInputFieldProps["validationMessage"]'},{name:"undefined"}]},description:"A descriptive message for the 'status' states."}}};export{X as D};
