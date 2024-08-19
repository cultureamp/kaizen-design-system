import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as c}from"./index-DSkyVWTJ.js";import{ae as d,ag as m,aj as h}from"./index-UYGUCD_e.js";import{S as i,R as p,I as x,D as n,a as t}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{Playground as r,Primary as l,DoFieldTooltip as u,DontFieldTooltip as j,DoConcise as g,DontConcise as f,TriggerDo as b,TriggerDont as y,TriggerLinkDescription as v}from"./Tooltip.docs.stories-1EDOvKmy.js";import{A as T,W as w,D,P as k}from"./tooltip_variant-DXRCmL3j.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./isChromatic-VqprqId_.js";import"./AddIcon-C6V_KfCs.js";import"./SVG-7WFwBCn9.js";import"./QuestionIcon-Bxxn-ARD.js";import"./Label-DlmzItqQ.js";import"./Text-D2gQH1xL.js";import"./Tooltip.spec.stories-LQ4b0Ym3.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./TooltipTrigger-WFlHsgfK.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./mergeClassNames-DEvgSslo.js";import"./OverlayArrow-5tjFEuMh.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useFocusWithin-C7oArVkD.js";import"./useControlledState-CEg4Rl-x.js";import"./context-AGV5_Mtb.js";import"./useHover-Bq751pFs.js";import"./usePress-nudZ2Xgz.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./Link-DkKiEG74.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./IconButton-DH93ECWt.js";import"./Focusable-DOEBf_Rm.js";import"./Tag-D-4sFjnu.js";import"./TabPanels-DLb-4Dql.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";function a(s){const o={h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Overlays/Tooltip/v3/Usage Guidelines"}),`
`,e.jsxs(i,{children:[e.jsx(o.h1,{id:"tooltip-v3",children:"Tooltip (v3)"}),e.jsx(o.p,{children:"Updated June 25, 2024"})]}),`
`,e.jsx(p,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Tooltip",figma:"https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%F0%9F%92%9C-UI-Kit%3A-Heart?type=design&node-id=1929%3A32006&mode=design&t=LwTCBZ5E1uRvOA1l-1",designGuidelines:"/?path=/docs/overlays-tooltip-v3-usage-guidelines--docs",ariaComponentPage:"https://react-spectrum.adobe.com/react-aria/Tooltip.html",apiSpecification:"/?path=/docs/overlays-tooltip-v3-api-specifications--docs"}),`
`,e.jsxs(i,{children:[e.jsx(x,{installCommand:"pnpm add @kaizen/components",importStatement:'import { Tooltip, TooltipTrigger } from "@kaizen/components/v3/overlays"'}),e.jsx(o.h2,{id:"overview",children:"Overview"}),e.jsx(o.p,{children:"Tooltips are brief floating labels used to add additional contextual information when users hover, click or focus on an interactive element. These should offer concise explanations,  elaborating on the element they are associated with."})]}),`
`,e.jsx(m,{of:r,source:{code:`
<TooltipTrigger>
  <Button label="Button" />
  <Tooltip>Tooltip content</Tooltip>
</TooltipTrigger>
  `}}),`
`,e.jsx(h,{of:r,include:["placement","isOpen"],className:"mb-64"}),`
`,e.jsxs(i,{className:"mb-64",children:[e.jsx(o.h3,{id:"anatomy",children:"Anatomy"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The anatomy of a tooltip is made up of a container, description and arrow.",`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"They do not include a title or heading"}),". If you need to include a title, use a Popover"]}),`
`]}),`
`]}),`
`,e.jsx(o.li,{children:"A tooltip is connected to a trigger element, such as a button or icon, that shows the tooltip when the interactive trigger element is hovered or focused. (More details below.)"}),`
`]}),e.jsx("img",{src:T,alt:"Indicates the anatomy of the Tooltip component, the Container, Label, Arrow and Trigger",className:"mt-24"})]}),`
`,e.jsxs(i,{className:"mb-64",children:[e.jsx(o.h3,{id:"when-to-use",children:"When to use"}),e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Tooltips are used to provide additional information when space is tight."}),`
`,e.jsx(o.li,{children:"Tooltips must be concise with one or more lines of text."}),`
`,e.jsx(o.li,{children:"Tooltips must be accessible via hover and focus only."}),`
`,e.jsx(o.li,{children:"Trigger tooltips from Interactive elements (Buttons, Links, Icon buttons) or Non-interactive elements (Icons, Abbreviations Truncated text)—be mindful of keyboard accessibility"}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Never include any kind of error messages"})," in a tooltip"]}),`
`]}),e.jsx("img",{src:w,className:"mt-32",alt:"Illustration of when to use the Tooltip component"})]}),`
`,e.jsxs(i,{className:"mb-64",children:[e.jsx(o.h3,{id:"specs",children:"Specs"}),e.jsx("img",{src:D,alt:""})]}),`
`,e.jsxs("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:[e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(i,{children:[e.jsx(o.h4,{id:"do-use-tooltips-to-describe-icons",children:"Do use tooltips to describe icons"}),e.jsx(o.p,{children:"Icons are not always easy to identify on their own. When you use components that don't have labels — for example, icon-only action buttons and tabs — make sure to use tooltips to provide context for the icons."})]}),e.jsx(n,{children:e.jsx(t,{story:l})})]}),e.jsxs("div",{className:"flex flex-col gap-16",children:[e.jsxs(i,{children:[e.jsx(o.h4,{id:"dont-use-tooltips-to-communicate-crucial-information",children:"Don't use tooltips to communicate crucial information"}),e.jsx(o.p,{children:"Tooltips should never stop a user (or be a gate) from completing a task or performing an action. They disappear so they should never contain critical information that a user would absolutely need to proceed, or information without which a user may cause errors. If the information is crucial for a user to proceed, consider using a modal or inline notification instead."})]}),e.jsxs(n,{children:[e.jsx(t,{story:u}),e.jsx(t,{story:j,isDont:!0})]})]}),e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(i,{children:[e.jsx(o.h4,{id:"do-be-concise",children:"Do be concise"}),e.jsx(o.p,{children:"Good tooltips contain concise and helpful information, keep it short. If you need more space, consider using a Popover. Don’t use it to duplicate information that already exists on the page. Instead, closely consider its placement and whether the disclosed copy will inform the action the user is about to perform."})]}),e.jsxs(n,{children:[e.jsx(t,{story:g}),e.jsx(t,{story:f,isDont:!0})]})]})]}),`
`,e.jsxs(i,{className:"mb-64",children:[e.jsx(o.h3,{id:"placements",children:"Placements"}),e.jsx("img",{src:k,alt:"",className:"mb-24"}),e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Type: Dropdown to choose from Default (dark tooltip) and Reverse (light tooltip)"}),`
`,e.jsx(o.li,{children:"Direction: Dropdown to choose where the arrow points"}),`
`,e.jsx(o.li,{children:"Tooltip label: Input field allows you to type in the label from the properties panel"}),`
`,e.jsx(o.li,{children:"Use strong signifiers for trigger elements to ensure the tooltip is discoverable."}),`
`,e.jsx(o.li,{children:"The proximity of tooltips is always paired to the element with which they are associated."}),`
`]})]}),`
`,e.jsxs(i,{className:"mb-24",children:[e.jsx(o.h3,{id:"trigger",children:"Trigger"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["A tooltip trigger needs to be discoverable:",`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"E.g. something like an icon to suggest there’s a tooltip."}),`
`,e.jsx(o.li,{children:"Avoid triggering tooltips from text that excludes a visual indicator (e.g. underline)"}),`
`]}),`
`]}),`
`,e.jsx(o.li,{children:"A tooltip should be shown and accessible on hover, click or on focus events."}),`
`]})]}),`
`,e.jsx("div",{className:"mb-32",children:e.jsxs(n,{children:[e.jsx(t,{story:b}),e.jsx(t,{story:y,isDont:!0})]})}),`
`,e.jsx(i,{className:"mb-24",children:e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Only trigger tooltips from interactive elements, such as:",`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Buttons"}),`
`,e.jsx(o.li,{children:"Links"}),`
`,e.jsx(o.li,{children:"Icon buttons"}),`
`]}),`
`]}),`
`]})}),`
`,e.jsx("div",{className:"mb-32",children:e.jsxs(n,{children:[e.jsx(t,{story:l}),e.jsx(t,{story:v})]})}),`
`,e.jsx(i,{children:e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Non-interactive elements (be mindful of keyboard accessibility):",`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Icons"}),`
`,e.jsx(o.li,{children:"Abbreviations (e.g. dashed underlined text for HRIS that shows a tooltip that says Human Resource Information System)"}),`
`,e.jsx(o.li,{children:"Truncated text"}),`
`]}),`
`]}),`
`,e.jsx(o.li,{children:"For interactive elements that trigger tooltips, only have optional information in the tooltip because it could be missed when the user clicks"}),`
`]})})]})}function Ie(s={}){const{wrapper:o}={...c(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(a,{...s})}):a(s)}export{Ie as default};
