import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as r,ag as i}from"./index-UYGUCD_e.js";import{R as l,K as d}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{T as c,P as h,D as o,a as p,S as x,C as m,I as j,H as b,b as f,R as u,L as g,E as w}from"./Table.stories-Bs9db0ps.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./EffectivenessIcon-DTBE5ph5.js";import"./SVG-7WFwBCn9.js";import"./Text-D2gQH1xL.js";import"./Table-CqZnScg6.js";import"./Heading-Y5F8SWRW.js";import"./ExclamationIcon-CBwbCtpu.js";import"./SortDescendingIcon-DgzcUhj2.js";import"./index-CdP7-hSn.js";import"./usePopper-D4ykrdaR.js";import"./Checkbox-B9bmVoGZ.js";import"./CheckIcon-BwUvLWmE.js";import"./MinusIcon-3DH7qpb8.js";import"./Divider-B-j384PU.js";function t(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx(l,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Table",figma:"https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%EF%B8%8F%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9%3A37841&t=P1w10jr2cpPuaayw-1",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081929256/Table"}),`
`,e.jsx(d,{exportNames:["TableCard","TableContainer","TableHeader","TableHeaderRow","TableHeaderRowCell","TableRow","TableRowCell"]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"A table displays rows of data, including all data in a set, making it efficient to look up values."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"tablecontainer-api",children:"TableContainer API"}),`
`,e.jsx(n.h3,{id:"variant",children:"Variant"}),`
`,e.jsxs(n.p,{children:["Controls the spacing in each cell within the table. Options available are ",e.jsx(n.code,{children:"compact"}),", ",e.jsx(n.code,{children:"default"})," and ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsx(n.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h4,{id:"default",children:"Default"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h4,{id:"data",children:"Data"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h2,{id:"tableheaderrowcell-api",children:"TableHeaderRowCell API"}),`
`,e.jsx(n.h3,{id:"sorting",children:"Sorting"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.p,{children:["To ensure there appropriate context for users of assistive technologies, when using a ",e.jsx(n.code,{children:"checkable"})," ",e.jsx(n.code,{children:"TableHeaderRowCell"}),", we advise in the ",e.jsx(n.code,{children:"checkboxLabel"}),". This will be passed to the a checkbox aria-label and be announce to screen reader users when focused."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["When using providing ",e.jsx(n.code,{children:"icon"})," to ",e.jsx(n.code,{children:"TableHeaderRowCell"})," the ",e.jsx(n.code,{children:"labelText"})," will be passed to the ",e.jsx(n.code,{children:"aria-label"})," of the SVG."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"align-and-wrapping",children:"Align and wrapping"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h3,{id:"tooltips",children:"Tooltips"}),`
`,e.jsxs(n.p,{children:["While Tooltip content can be passed to any table header via the ",e.jsx(n.code,{children:"tooltipInfo"})," prop, it is strong advised to avoid this if the header is not an interactive element as the tooltip content will be unreadable to keyboard users or those that use assistive technologies."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsxs(n.p,{children:["You can read more about the Tooltip component and accessibility limitation ",e.jsx(n.a,{href:"https://cultureamp.design/?path=/docs/components-tooltip--docs#screen-reader-accessibility",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(n.h3,{id:"reversed",children:"Reversed"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"tablecard-api",children:"TableCard API"}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h3,{id:"expandable",children:"Expandable"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"expandable"})," prop introduces known accessibility issues with nesting interactive elements as children of a ",e.jsx(n.code,{children:"button"})," or ",e.jsx(n.code,{children:"anchor"})," tag. We recommend avoiding this pattern if possible, or creating a tier 3 component that adheres to correct WCAG hierarchy."]}),`
`,e.jsx(i,{of:w})]})}function ne(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{ne as default};
