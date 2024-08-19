import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as p,ag as n,aj as a}from"./index-UYGUCD_e.js";import{R as m,K as c}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{P as d,a as r,V as l}from"./Popover.stories-BRUmcLxt.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./AddIcon-C6V_KfCs.js";import"./SVG-7WFwBCn9.js";import"./MeatballsIcon-w9tBPyZh.js";import"./Popover-BcT7iVVN.js";import"./usePopper-D4ykrdaR.js";import"./Heading-Y5F8SWRW.js";import"./CloseIcon-BAUhi63R.js";import"./Text-D2gQH1xL.js";import"./CautionIcon-D4m_GXrx.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./SuccessIcon-BInyqVzG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
`,e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(m,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Popover",figma:"https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9:86401&mode=dev",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081929552/Popover"}),`
`,e.jsx(c,{exportNames:"Popover"}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(o.p,{children:`A popover displays rich content in a non-modal dialog to describe or add additional information when users hover over, focus on, or click an interactive element.
User can interact with popover content, including selecting text or clicking links.`}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Use sparingly."})}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(o.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const [referenceElementRef, Popover] = usePopover()

return (<>
  <button type="button" ref={referenceElementRef}>
    Hello world
  </button>
  <Popover>Hello world</Popover>
</>)
`})}),`
`,e.jsxs(o.p,{children:[`The purpose of this hook is to abstract away some of the awkwardness with the
requirement of passing in refs with popper. We need to use `,e.jsx(o.code,{children:"useState"}),` instead
of `,e.jsx(o.code,{children:"useRef"}),", which may not be immediately intuitive."]}),`
`,e.jsx(o.p,{children:`The popper documentation to help provide more context:
https://popper.js.org/react-popper/v2/hook/`}),`
`,e.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n,{of:l})]})}function O(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{O as default};
