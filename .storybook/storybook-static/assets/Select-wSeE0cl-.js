import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as d,ag as t,aj as p}from"./index-UYGUCD_e.js";import{R as c,K as l}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{S as a,P as n,a as h,G as m,D as x,b as j,A as u,C as g,V as f,F as y,c as b}from"./Select.stories-Q9LLYzqL.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./mockData-Bb8tkY6o.js";import"./useButton-CDp2hby9.js";import"./useFocusable-CuIK6Qs-.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusWithin-C7oArVkD.js";import"./usePress-nudZ2Xgz.js";import"./transformSelectItemToCollectionElement-Nmt2Onfe.js";import"./SelectionManager-yuMfDyd5.js";import"./useCollator-DHdgfgeP.js";import"./context-AGV5_Mtb.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useControlledState-CEg4Rl-x.js";import"./useField-DwroQcrk.js";import"./useLabel-BoFVh7qz.js";import"./useListState-CBqvwiGH.js";import"./useHover-Bq751pFs.js";import"./Divider-B-j384PU.js";import"./Heading-Y5F8SWRW.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./floating-ui.react-dom-DficdbDq.js";import"./floating-ui.dom-BvchAiLZ.js";import"./ChevronDownIcon-prLLyjG_.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./Label-DlmzItqQ.js";import"./Popover-7U2x2z8g.js";import"./Combination-DFaMps7A.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Text-D2gQH1xL.js";function r(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(i.h1,{id:"select",children:"Select"}),`
`,e.jsx(c,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Select",figma:"https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9%3A37837&mode=dev",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896474/Select"}),`
`,e.jsx(l,{exportNames:"Select",isFuture:!0}),`
`,e.jsx(i.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t,{of:n}),`
`,e.jsx(p,{of:n}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(i.h3,{id:"options",children:"Options"}),`
`,e.jsxs(i.p,{children:["Provide options in ",e.jsx(i.code,{children:"items"})," in the ",e.jsx(i.code,{children:"SelectOption"})," format to populate the options."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`export type SelectOption = {
  label: string
  value: string | number
  disabled?: boolean
  options?: never
}

`})}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i.h3,{id:"grouped-options",children:"Grouped options"}),`
`,e.jsxs(i.p,{children:["Group options by providing your ",e.jsx(i.code,{children:"items"})," in the ",e.jsx(i.code,{children:"SelectOptionGroup"})," format."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`export type SelectOptionGroup<Option extends SelectOption> = {
  label: string
  options: Iterable<Option>
}

`})}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h3,{id:"disabled-options",children:"Disabled options"}),`
`,e.jsxs(i.p,{children:["Disable options by setting the ",e.jsx(i.code,{children:"disabled"})," attribute within an individual option your ",e.jsx(i.code,{children:"items"})," to ",e.jsx(i.code,{children:"true"}),"."]}),`
`,e.jsxs(i.p,{children:["Alternatively, define the ",e.jsx(i.code,{children:"disabledKeys"})," prop with the ",e.jsx(i.code,{children:"value"})," of your options.",e.jsx("br",{}),`
`,e.jsx(i.strong,{children:"Note:"})," This will override the definitions in ",e.jsx(i.code,{children:"items"}),"."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h3,{id:"custom-options-rendering",children:"Custom options rendering"}),`
`,e.jsxs(i.p,{children:["Customise the list of options using ",e.jsx(i.code,{children:"children"})," (render function with arg ",e.jsx(i.code,{children:"{ items: Array<SelectItemNode<Option>>}"}),")."]}),`
`,e.jsxs(i.p,{children:["Use the default render component ",e.jsx(i.code,{children:"<Select.ItemDefaultRender>"})," for any items you do not want to customise."]}),`
`,e.jsx(i.h4,{id:"section-divider",children:"Section divider"}),`
`,e.jsxs(i.p,{children:["To add a section divider between your options, use the ",e.jsx(i.code,{children:"children"}),` render function and find the item or group
you want to prepend/append to and add a `,e.jsx(i.code,{children:"<Select.SectionDivider>"}),"."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h4,{id:"additional-option-properties-generic",children:"Additional option properties (generic)"}),`
`,e.jsx(i.p,{children:"Extend the option type to have additional properties to use for rendering."}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h3,{id:"customise-trigger-button",children:"Customise trigger button"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"trigger"})," prop allows you to extend the existing ",e.jsx(i.code,{children:"<Select.TriggerButton>"})," with additional properties (eg. ",e.jsx(i.code,{children:"id"}),")."]}),`
`,e.jsxs(i.p,{children:["Note that the ",e.jsx(i.code,{children:"ref"})," exists as part of these spread props (there is a second arg containing the ",e.jsx(i.code,{children:"ref"})," which is deprecated)."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(i.h3,{id:"validation",children:"Validation"}),`
`,e.jsxs(i.p,{children:["Add validation messages using ",e.jsx(i.code,{children:"status"})," and ",e.jsx(i.code,{children:"validationMessage"}),"."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(i.h3,{id:"full-width",children:"Full width"}),`
`,e.jsxs(i.p,{children:["Set ",e.jsx(i.code,{children:"isFullWidth"})," to ",e.jsx(i.code,{children:"true"})," to have the Select span the full width of its container."]}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(i.h3,{id:"portals",children:"Portals"}),`
`,e.jsxs(i.p,{children:["By default, the Select's popover will attach itself to the ",e.jsx(i.code,{children:"body"})," of the document using React's ",e.jsx(i.code,{children:"createPortal"}),"."]}),`
`,e.jsxs(i.p,{children:["You can change the default behaviour by providing a ",e.jsx(i.code,{children:"portalContainerId"})," to attach this to different element in the DOM. This can help to resolve issues that may arise with ",e.jsx(i.code,{children:"z-index"})," or having a Select in a modal."]}),`
`,e.jsx(t,{of:b})]})}function be(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{be as default};
