import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as l}from"./index-DSkyVWTJ.js";import{ae as d,ag as t,aj as n}from"./index-UYGUCD_e.js";import{R as p,K as c}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{D as h,P as r,L as m,C as x,a as j,b as f,V as u,c as s,d as w,F as v,A as b}from"./DatePicker.stories-oW7pN7Fj.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./index-BtE2hmwC.js";import"./defaultMonthControls-DfKCABiO.js";import"./weekStartsOnControls-Bn16c4HG.js";import"./enums-Cb8LLpRk.js";import"./Text-D2gQH1xL.js";import"./disabledDayMatchersControls-dDSQeGtU.js";import"./constants-DA26eKbW.js";import"./DatePicker-0W3pptDD.js";import"./getLocale-DZ-phe2v.js";import"./isInvalidDate-CQ4jNt7-.js";import"./startOfDay-MoyOWjoN.js";import"./validateDate-Bbd7IJoY.js";import"./isDisabledDate-DCznrglD.js";import"./Label-DlmzItqQ.js";import"./isRefObject-39zMTbtm.js";import"./Input-BFyrvMXQ.js";import"./LabelledMessage-CyRdzdqY.js";import"./useIntl-Ci3jBQGG.js";import"./index-DBmEjBSQ.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./message-BF0EX5jj.js";import"./calculateDisabledDays-DlHy-kbk.js";import"./Combination-DFaMps7A.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./DateStartIcon-DLPQFSri.js";import"./SVG-7WFwBCn9.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./en-AU-C5dfMWdV.js";import"./CalendarPopover-Do4ZmdN_.js";import"./floating-ui.react-dom-DficdbDq.js";import"./floating-ui.dom-BvchAiLZ.js";import"./VisuallyHidden-CDYjeGzr.js";import"./CalendarSingle-DmO3h1TK.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./isValidWeekStartsOn-CZGl9tvK.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";function a(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(i.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(p,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/DatePicker",figma:"https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%F0%9F%92%9C-UI-Kit%3A-Heart?type=design&node-id=10458%3A45652&mode=design&t=4Mycc044XjC1WLin-1",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082061174/Date+Picker"}),`
`,e.jsx(c,{exportNames:"DatePicker"}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(i.p,{children:"Date picker form field."}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(i.h3,{id:"label-text",children:"Label text"}),`
`,e.jsx(i.p,{children:"Field label for the date picker."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(i.p,{children:[`DatePicker is a controlled component, where the consumer holds the selected value.
Pass the values to `,e.jsx(i.code,{children:"selectedDay"})," (can be passed a pre-loaded value) and ",e.jsx(i.code,{children:"onDayChange"}),"."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h3,{id:"locale",children:"Locale"}),`
`,e.jsx(i.p,{children:`Change the locale of the date-related elements within the DatePicker.
This changes the input format and the contents in the calendar.`}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h3,{id:"description",children:"Description"}),`
`,e.jsx(i.p,{children:"Add a custom description below the input."}),`
`,e.jsx(i.p,{children:"For accessibility, the date format will always be part of the description."}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(i.h3,{id:"validation",children:"Validation"}),`
`,e.jsx(i.p,{children:"Basic validation has been implemented to display when validation is not controlled."}),`
`,e.jsxs(i.p,{children:["To control validation, use ",e.jsx(i.code,{children:"onValidate"})," (",e.jsx(i.code,{children:"(validationResponse: ValidationResponse) => void"}),`)
in combination with `,e.jsx(i.code,{children:"status"})," and ",e.jsx(i.code,{children:"validationMessage"}),`.
This allows you to either extend or override the internal validation.`]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h3,{id:"disabled-days",children:"Disabled days"}),`
`,e.jsx(i.p,{children:"There are multiple props to disable days within the Calendar."}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(i.h3,{id:"responsive-behaviour",children:"Responsive behaviour"}),`
`,e.jsxs(i.p,{children:["To ensure calendar content is accessible across multiple viewports and satisfy the ",e.jsx(i.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html",rel:"nofollow",children:"content reflow"})," spec in WCAG guidelines, the ",e.jsx(i.code,{children:"DatePicker"}),"'s popover will scroll when there is not enough space available. The main case for this is to assist users on 400% zoom and ensure content is not visually lost below the fold."]}),`
`,e.jsx(t,{of:w}),`
`,e.jsxs(i.p,{children:["This is determined by the ",e.jsx(i.a,{href:"https://floating-ui.com/docs/size",rel:"nofollow",children:"size"})," middleware from the ",e.jsx(i.code,{children:"floatingUI"})," library, which calculates and sets the available height and width based on the viewport and available whitespace."]}),`
`,e.jsx(t,{of:v}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"DatePicker"}),"'s popover will also re-adjust its position to the top if there is not enough space available below."]}),`
`,e.jsx(t,{of:b})]})}function We(o={}){const{wrapper:i}={...l(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(a,{...o})}):a(o)}export{We as default};
