import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as l}from"./index-DSkyVWTJ.js";import{ae as a,ag as i,aj as c}from"./index-UYGUCD_e.js";import{S as t,R as d,K as p}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{ShouldFlip as h,UncontrolledState as m}from"./Tooltip.docs.stories-1EDOvKmy.js";import{OnButton as r,Placement as x,OnReversed as j,OnLink as u,OnIconButton as f,OnTabs as g,OnCustomFocusableElement as T}from"./Tooltip.stories-DqBP80sD.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./isChromatic-VqprqId_.js";import"./AddIcon-C6V_KfCs.js";import"./SVG-7WFwBCn9.js";import"./QuestionIcon-Bxxn-ARD.js";import"./Label-DlmzItqQ.js";import"./Text-D2gQH1xL.js";import"./Tooltip.spec.stories-LQ4b0Ym3.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./TooltipTrigger-WFlHsgfK.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./mergeClassNames-DEvgSslo.js";import"./OverlayArrow-5tjFEuMh.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useFocusWithin-C7oArVkD.js";import"./useControlledState-CEg4Rl-x.js";import"./context-AGV5_Mtb.js";import"./useHover-Bq751pFs.js";import"./usePress-nudZ2Xgz.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./Link-DkKiEG74.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./IconButton-DH93ECWt.js";import"./Focusable-DOEBf_Rm.js";import"./Tag-D-4sFjnu.js";import"./TabPanels-DLb-4Dql.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Overlays/Tooltip/v3/API Specification"}),`
`,e.jsxs(t,{children:[e.jsx(o.h1,{id:"tooltip-api-specification-v3",children:"Tooltip API Specification (v3)"}),e.jsx(o.p,{children:"Updated June 25, 2024"})]}),`
`,e.jsx(d,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Tooltip",figma:"https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%F0%9F%92%9C-UI-Kit%3A-Heart?type=design&node-id=1929%3A32006&mode=design&t=LwTCBZ5E1uRvOA1l-1",designGuidelines:"/?path=/docs/overlays-tooltip-v3-usage-guidelines--docs",ariaComponentPage:"https://react-spectrum.adobe.com/react-aria/Tooltip.html"}),`
`,e.jsxs(t,{className:"mb-24",children:[e.jsx(p,{exportNames:["Tooltip","TooltipTrigger"],family:"overlays",version:"3"}),e.jsx(o.h2,{id:"overview",children:"Overview"}),e.jsx(o.p,{children:"Tooltips are brief floating labels used to add additional contextual information when users hover, click or focus on an interactive element."})]}),`
`,e.jsx(i,{className:"mb-64",of:r,source:{code:`
<TooltipTrigger>
  <Button label="Button" />
  <Tooltip>Tooltip content</Tooltip>
</TooltipTrigger>
  `}}),`
`,e.jsxs(t,{className:"mb-64",children:[e.jsx(o.h3,{id:"react-aria",children:"React Aria"}),e.jsxs(o.p,{children:["This component is built using the ",e.jsx(o.code,{children:"react-aria-components"})," library and extends the ",e.jsx(o.a,{href:"https://react-spectrum.adobe.com/react-aria/Tooltip.html",rel:"nofollow",children:"Tooltip component"}),"."]}),e.jsxs(o.p,{children:["As this shares the same core ",e.jsx(o.a,{href:"https://react-spectrum.adobe.com/react-aria/Tooltip.html#anatomy",rel:"nofollow",children:"anatomy"}),", ",e.jsx(o.a,{href:"https://react-spectrum.adobe.com/react-aria/Tooltip.html#tooltip-1",rel:"nofollow",children:"props types"})," and ",e.jsx(o.a,{href:"https://react-spectrum.adobe.com/react-aria/Tooltip.html#features",rel:"nofollow",children:"functionality"}),", the guidance below is tailored to our implementation and should cover known use cases of the Tooltip."]}),e.jsxs(o.p,{children:["More on the React Aria API and a deep dive into other examples can be found via the ",e.jsx(o.a,{href:"https://react-spectrum.adobe.com/react-aria/Tooltip.html",rel:"nofollow",children:"React Aria docs page"})," if not present below."]})]}),`
`,e.jsx(t,{className:"mb-12",children:e.jsx(o.h2,{id:"api",children:"API"})}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs(t,{className:" mt-64",children:[e.jsx(o.h3,{id:"placement",children:"Placement"}),e.jsxs(o.p,{children:["Placement controls where the ",e.jsx(o.code,{children:"Tooltip"})," will float, relative to its reference element defined by the ",e.jsx(o.code,{children:"triggerRef"}),". By default, this will float to the ",e.jsx(o.code,{children:"bottom"}),"."]})]}),`
`,e.jsx(i,{className:"mb-24",of:x}),`
`,e.jsx(t,{children:e.jsxs(o.p,{children:["The option, ",e.jsx(o.code,{children:"shouldFlip"}),", will control whether the ",e.jsx(o.code,{children:"Tooltip"})," inverts its orientation when insufficient room is available in the viewport. You can see the below example with a constrained ",e.jsx(o.a,{href:"?path=/story/overlays-tooltip-v3--should-flip&globals=viewport:small",children:"viewport here"}),"."]})}),`
`,e.jsx(i,{className:"mb-64",of:h}),`
`,e.jsxs(t,{children:[e.jsx(o.h3,{id:"controlled-state",children:"Controlled state"}),e.jsxs(o.p,{children:["By default, the ",e.jsx(o.code,{children:"Tooltip"})," state is controlled, so all interactive states do not need to be defined. There may be instances where a users may want want to toggle a ",e.jsx(o.code,{children:"Tooltip"})," on or off. In this case we have exposed the ",e.jsx(o.code,{children:"isOpen"})," prop."]})]}),`
`,e.jsx(i,{className:"mb-24",of:m}),`
`,e.jsx(t,{className:"mb-64",children:e.jsxs(o.p,{children:[e.jsx(o.code,{children:"isOpen"})," prop will negate the default state and relinquish control of ",e.jsx(o.code,{children:"Tooltip"})," open and close to the user."]})}),`
`,e.jsxs(t,{children:[e.jsx(o.h3,{id:"tooltiptrigger",children:"TooltipTrigger"}),e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"TooltipTrigger"})," wraps both the ",e.jsx(o.code,{children:"Tooltip"})," and its trigger element, controlling the open and close interactions."]})]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-JSX",children:`
<TooltipTrigger>
 */ In this case the trigger element is the Button /*
  <Button label="Button" />
   */ The Tooltip and its content is a child of the trigger /*
  <Tooltip>
    Tooltip content
  </Tooltip>
</TooltipTrigger>
`})}),`
`,e.jsx(t,{className:"mb-64",children:e.jsxs(o.p,{children:["Any compatible interactive element within the ",e.jsx(o.code,{children:"TooltipTrigger"})," will enable the interaction state."]})}),`
`,e.jsxs(t,{children:[e.jsx(o.h3,{id:"reversed",children:"Reversed"}),e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Tooltip"})," uses the ",e.jsx(o.code,{children:"useReversedColors"})," hook and ",e.jsx(o.code,{children:"ReversedColors"})," provider to control the dark and light theme."]})]}),`
`,e.jsx(i,{className:"bg-purple-600 mb-24",of:j}),`
`,e.jsx(t,{children:e.jsxs(o.p,{children:["To enable the reversed theme, you will need to the component or application in the ",e.jsx(o.code,{children:"ReversedColors"})," provider."]})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-JSX",children:`<ReversedColors isReversed={true}>
  <Component />
</ReversedColors>
`})}),`
`,e.jsx(t,{className:"mb-64",children:e.jsxs(o.p,{children:["These utilities can be imported from ",e.jsx(o.code,{children:"@kaizen/components/v3/utilities"}),". This is an emerging pattern so more documentation will come."]})}),`
`,e.jsxs(t,{className:"mb-32",children:[e.jsx(o.h2,{id:"examples",children:"Examples"}),e.jsxs(o.p,{children:["Here are examples of how to use the ",e.jsx(o.code,{children:"Tooltip"})," with compatible Kaizen components."]})]}),`
`,e.jsx(t,{children:e.jsx(o.h3,{id:"on-button",children:"On Button"})}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(t,{children:e.jsx(o.h3,{id:"on-link",children:"On Link"})}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t,{children:e.jsx(o.h3,{id:"on-iconbutton",children:"On IconButton"})}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(t,{children:e.jsx(o.h3,{id:"on-tabs",children:"On Tabs"})}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(t,{children:e.jsx(o.h3,{id:"on-tag",children:"On Tag"})}),`
`,e.jsx(i,{of:T})]})}function ve(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{ve as default};
