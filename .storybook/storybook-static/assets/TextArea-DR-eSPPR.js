import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{ae as i,ag as l,aj as c}from"./index-UYGUCD_e.js";import{R as m,K as x}from"./DoesAndDonts-BKQOirz7.js";import{L as o}from"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{T as p,P as r}from"./TextArea.stories-CAqpDaP5.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./TextArea-Ci-_Nq71.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:p}),`
`,e.jsx(n.h1,{id:"textarea",children:"TextArea"}),`
`,e.jsx(m,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/TextArea"}),`
`,e.jsx(x,{exportNames:"TextArea"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["Usually part of compositions such as ",e.jsx(o,{pageId:"components-text-area-field",children:"TextAreaField"}),"."]}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["In order to use this component by itself, you ",e.jsx(n.strong,{children:"must"})," manually link up a label."]}),`
`,e.jsxs(n.p,{children:["This component uses the native ",e.jsx(n.code,{children:"<textarea>"})," element under the hood, so normal methods of creating a label connection work."]}),`
`,e.jsx(n.h3,{id:"connecting-a-label",children:"Connecting a Label"}),`
`,e.jsxs(n.p,{children:["You can use our ",e.jsx(o,{pageId:"components-label",children:"Label"})," component"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<Label htmlFor="exampleTextArea">This is my Label</Label>
<TextArea id="exampleTextArea" />
`})}),`
`,e.jsx(n.h3,{id:"connecting-a-custom-element",children:"Connecting a custom element"}),`
`,e.jsxs(n.p,{children:["For linking text that isn't in a ",e.jsx(n.code,{children:"Label"})," you can use ",e.jsx(n.code,{children:"aria-labelledBy"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<Text id="exampleTextArea">My free form text label<Text>
<TextArea aria-labelledby="exampleTextArea" />
`})})]})}function X(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{X as default};
