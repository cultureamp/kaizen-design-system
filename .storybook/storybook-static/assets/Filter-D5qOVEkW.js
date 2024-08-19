import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as l}from"./index-DSkyVWTJ.js";import{ae as p,aj as c}from"./index-UYGUCD_e.js";import{R as d,K as h,N as i}from"./DoesAndDonts-BKQOirz7.js";import{L as n}from"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{F as a,S as o,R as m}from"./Filter.stories-DQw40NmJ.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./FilterContents-MyXMWDj6.js";import"./Combination-DFaMps7A.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./usePopper-D4ykrdaR.js";import"./FilterButton-BGzpTfmP.js";import"./ChevronDownIcon-prLLyjG_.js";import"./SVG-7WFwBCn9.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./isRefObject-39zMTbtm.js";import"./FilterButtonBase-D953FwLo.js";import"./FilterButtonRemovable-CDjh8qGF.js";import"./ClearIcon-BcQoGkgT.js";import"./index-CdP7-hSn.js";import"./useIntl-Ci3jBQGG.js";import"./startOfDay-MoyOWjoN.js";import"./index-DBmEjBSQ.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./ButtonGroup-Cm1_R1hn.js";function s(t){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
`,e.jsx(r.h1,{id:"filter",children:"Filter"}),`
`,e.jsx(d,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Filter",figma:"https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?type=design&node-id=6-28579&t=bowQ0LWOQKOd0UYS-0",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093959/Filters"}),`
`,e.jsx(h,{exportNames:["Filter","FilterContents"]}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(r.p,{children:["These components are mainly used for constructing Filter components (eg. ",e.jsx(n,{pageId:"components-filter-select",children:"FilterSelect"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(n,{pageId:"components-filter-filter-buttons",children:"FilterButton"})," for the renderTrigger"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"FilterContents"})," to wrap the contents within a Filter"]}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(r.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(r.h3,{id:"children",children:e.jsx(r.code,{children:"children"})}),`
`,e.jsxs(r.p,{children:[`The contents within the popover.
Wrap the contents in `,e.jsx(r.code,{children:"<FilterContents>"})," - this provides base padding styles."]}),`
`,e.jsx(r.h3,{id:"isopen",children:e.jsx(r.code,{children:"isOpen"})}),`
`,e.jsx(r.p,{children:"The open state of the popover. This is passed through to the trigger button props."}),`
`,e.jsx(r.h3,{id:"setisopen",children:e.jsx(r.code,{children:"setIsOpen"})}),`
`,e.jsxs(r.p,{children:["A callback (",e.jsx(r.code,{children:"(isOpen: boolean) => value"}),`) to toggle the open state of the popover.
This is called by the `,e.jsx(r.code,{children:"onClick"})," prop passed through to the trigger button props."]}),`
`,e.jsx(r.h3,{id:"rendertrigger",children:e.jsx(r.code,{children:"renderTrigger"})}),`
`,e.jsxs(r.p,{children:["A callback that provides trigger button props to the provided ",e.jsx(n,{pageId:"components-filter-filter-buttons",children:"FilterButton"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`type TriggerButtonProps = {
  onClick: () => void // Calls \`setIsOpen(!isOpen)\`
  isOpen: boolean // The value from the \`isOpen\` prop
}

`})}),`
`,e.jsxs(r.p,{children:["If a ",e.jsx(r.code,{children:"ref"})," is provided to the FilterButton it will be used, otherwise a fallback ",e.jsx(r.code,{children:"ref"}),`
will be created (this is required to tie the trigger to the popover).`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`type FilterTriggerRef = {
  ref: { triggerRef?: React.RefObject<HTMLButtonElement> }
}

`})}),`
`,e.jsx(r.h4,{id:"simple-filter",children:"Simple Filter"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Filter {...props}
  renderTrigger={(triggerProps): JSX.Element => (
    <FilterButton label="Label" {...triggerProps} />
  )}
/>
`})}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(r.h4,{id:"removable-filter",children:"Removable Filter"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Filter {...props}
  renderTrigger={(triggerProps): JSX.Element => (
    <FilterButtonRemovable
      triggerButtonProps={{ label: "Label", ...triggerProps }}
      removeButtonProps={{ onClick: action("remove button clicked") }}
    />
  )}
/>
`})}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(r.h3,{id:"onmount",children:e.jsx(r.code,{children:"onMount"})}),`
`,e.jsxs(r.p,{children:["A callback which returns the trigger button ",e.jsx(r.code,{children:"ref"})," (provided or fallback) when mounted."]}),`
`,e.jsxs(r.p,{children:["This is an escape hatch for when you require it for a third party library (eg. ",e.jsx(r.code,{children:"react-aria select"}),")."]})]})}function ie(t={}){const{wrapper:r}={...l(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(s,{...t})}):s(t)}export{ie as default};
