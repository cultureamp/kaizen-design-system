import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as i,ag as n,aj as c}from"./index-UYGUCD_e.js";import{R as h,K as l}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{R as d,P as r,C as m,a as p}from"./RemovableTag.stories-vUFzn1wC.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./RemovableTag-BNVKm4bs.js";import"./SVG-7WFwBCn9.js";import"./Tag-D-4sFjnu.js";function a(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(o.h1,{id:"removabletag",children:"RemovableTag"}),`
`,e.jsx(h,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/__future__/Tag/RemovableTag.tsx"}),`
`,e.jsx(l,{exportNames:"RemovableTag"}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[`Similar to the Tag component, but with a remove icon, that recieves a callback from props.
The consumer should manage the state regarding whether or not the icon should be rendered,
and pass a callback to remove the RemovableTag component via the `,e.jsx(o.code,{children:"removeButtonProps"})," prop."]}),`
`,e.jsx(o.h2,{id:"api",children:"API"}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(o.h3,{id:"children",children:e.jsx(o.code,{children:"children"})}),`
`,e.jsxs(o.p,{children:["Takes a ",e.jsx(o.code,{children:"ReactNode"}),". This should be the text that is displayed inside the Tag."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(o.h3,{id:"classnameoverride",children:e.jsx(o.code,{children:"classNameOverride"})}),`
`,e.jsx(o.p,{children:"Allows classnames to be attached to the outermost element of Tag."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h3,{id:"controlling-the-remove-button",children:"Controlling the remove button"}),`
`,e.jsxs(o.p,{children:["RemovableTag tags have a ",e.jsx(o.code,{children:"removeButtonProps"})," prop that can be used to control the behaviour of the remove button."]}),`
`,e.jsx(o.h4,{id:"aria-label",children:e.jsx(o.code,{children:"aria-label"})}),`
`,e.jsx(o.p,{children:`An aria label that is attached to the remove button. This is necessary for assistive technology, such as screen-readers.
The string passed here will be read out by screen-readers when the remove button is focused.`}),`
`,e.jsx(o.h4,{id:"onclick",children:e.jsx(o.code,{children:"onClick"})}),`
`,e.jsx(o.p,{children:`A callback that gets invoked when clicking the remove button.
For example, if the removal of a tag is controlled by a function, that function can
be passed as a callback via this prop, and executed when clicking the remove button.`})]})}function B(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{B as default};
