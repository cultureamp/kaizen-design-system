import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as l,ag as i,aj as a}from"./index-UYGUCD_e.js";import{R as c,K as d}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{M as p,P as s,I as h,S as m,O as u,D as x,V as j,a as g}from"./MultiSelect.stories-B4BzawGg.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./MultiSelect-Cvui0KMq.js";import"./Heading-Y5F8SWRW.js";import"./floating-ui.react-dom-DficdbDq.js";import"./floating-ui.dom-BvchAiLZ.js";import"./MultiSelectToggle-CE5xIBh8.js";import"./ChevronDownIcon-prLLyjG_.js";import"./SVG-7WFwBCn9.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./RemovableTag-BNVKm4bs.js";import"./Tag-D-4sFjnu.js";import"./ClearButton-K9bfbh4U.js";import"./ClearIcon-BcQoGkgT.js";import"./MultiSelectOptions-BzeWFkkX.js";import"./Text-D2gQH1xL.js";import"./MultiSelectOptionField-BSTLJTHg.js";import"./Checkbox-CI1euWka.js";import"./CheckIcon-BwUvLWmE.js";import"./MinusIcon-3DH7qpb8.js";import"./VisuallyHidden-CDYjeGzr.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Popover-7U2x2z8g.js";import"./Combination-DFaMps7A.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p}),`
`,e.jsx(t.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(c,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/MultiSelect",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896474/Select"}),`
`,e.jsx(d,{exportNames:"MultiSelect"}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t.p,{children:"A field for selecting multiple options."}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(t.h3,{id:"items",children:"Items"}),`
`,e.jsxs(t.p,{children:["An array of ",e.jsx(t.code,{children:"MultiSelectOption"}),"s which will be rendered into the dropdown."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type MultiSelectOption = {
  label: string
  // Used for "value" attribute in option - must be unique
  value: string | number
}

`})}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h3,{id:"selected-values",children:"Selected values"}),`
`,e.jsxs(t.p,{children:["Selected values are in the shape of ",e.jsx(t.code,{children:'Set<MultiSelectOption["value"]>'}),`.
Each value should be a unique `,e.jsx(t.code,{children:"string | number"}),"."]}),`
`,e.jsxs(t.p,{children:["These values are controlled by the consumer through the props ",e.jsx(t.code,{children:"selectedValues"}),` and
the `,e.jsx(t.code,{children:"onSelectedValuesChange"})," callback (which will provide the new Set of selected values)."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h3,{id:"open-state",children:"Open state"}),`
`,e.jsxs(t.p,{children:["The open state is controlled by the consumer through the ",e.jsx(t.code,{children:"isOpen"})," and ",e.jsx(t.code,{children:"onOpenChange"})," props."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"description",children:"Description"}),`
`,e.jsx(t.p,{children:"You can add a description which will be linked to the trigger button with aria-describedby."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(t.h3,{id:"validation",children:"Validation"}),`
`,e.jsxs(t.p,{children:["Validation states are defined in the ",e.jsx(t.code,{children:"validationMessage"})," object, containing a ",e.jsx(t.code,{children:"status"})," and ",e.jsx(t.code,{children:"message"}),"."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsxs(t.p,{children:["A validation message will render below the MultiSelect and will be read to assistive technologies before the ",e.jsx(t.code,{children:"description"})," content."]}),`
`,e.jsx(i,{of:g})]})}function pe(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{pe as default};
