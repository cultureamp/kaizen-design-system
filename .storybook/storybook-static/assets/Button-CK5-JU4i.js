import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{ae as d,ag as t,aj as c}from"./index-UYGUCD_e.js";import{R as h,K as l}from"./DoesAndDonts-BKQOirz7.js";import{L as i}from"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{B as p,P as s,V as m,R as x,D as u,I as j,a as f,b as g,F as b,W as w,c as v,L as B,N as k}from"./Button.stories-GC70tFMi.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./AddIcon-C6V_KfCs.js";import"./SVG-7WFwBCn9.js";import"./ArrowRightIcon-CtsqbiFB.js";import"./TextField-C70Pg5K2.js";import"./SuccessIcon-BInyqVzG.js";import"./Label-DlmzItqQ.js";import"./FieldGroup-Dj6p3DL3.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Text-D2gQH1xL.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./LoadingInput-X-emq8Sb.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:p}),`
`,n.jsx(e.h1,{id:"button-v1",children:"Button (v1)"}),`
`,n.jsx(h,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Button/Button",figma:"https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button"}),`
`,n.jsx(l,{exportNames:"Button",family:"actions",version:"1"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:`Buttons perform actions.
If it needs to navigate somewhere and can be opened in a new tab, use a link instead.`}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(c,{of:s}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.h3,{id:"variants",children:"Variants"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Default"}),", ",n.jsx(e.code,{children:"Primary"}),", ",n.jsx(e.code,{children:"Destructive"}),", ",n.jsx(e.code,{children:"Secondary"}),`
If no `,n.jsx(e.code,{children:"variant"})," is specified, a ",n.jsx(e.code,{children:"Default"})," button will be rendered."]}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h4,{id:"reversed",children:"Reversed"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h3,{id:"disabled",children:"Disabled"}),`
`,n.jsx(e.p,{children:"A disabled Button prevents user interaction. It doesn't appear in the tab order, can't receive focus, and may not read aloud by a screenreader."}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h3,{id:"icon",children:"Icon"}),`
`,n.jsxs(e.p,{children:["Use any ",n.jsx(i,{pageId:"components-icons",children:"Icon"})," component in the ",n.jsx(e.code,{children:"icon"})," prop."]}),`
`,n.jsx(t,{of:j}),`
`,n.jsx(e.h4,{id:"icon-position",children:"Icon position"}),`
`,n.jsxs(e.p,{children:["Change the icon placement with the ",n.jsx(e.code,{children:"iconPosition"}),` prop.
Default position is `,n.jsx(e.code,{children:"start"}),"."]}),`
`,n.jsx(t,{of:f}),`
`,n.jsx(e.h3,{id:"badge",children:"Badge"}),`
`,n.jsxs(e.p,{children:["You can display a ",n.jsx(e.code,{children:"Badge"})," component within the button using the ",n.jsx(e.code,{children:"badge"})," prop."]}),`
`,n.jsx(t,{of:g}),`
`,n.jsx(e.h3,{id:"full-width",children:"Full width"}),`
`,n.jsx(e.p,{children:"Buttons can be stretched to fill the full width of their container."}),`
`,n.jsx(t,{of:b}),`
`,n.jsx(e.h3,{id:"working",children:"Working"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"working"})," prop should be used in situations where a button action triggers a change in UI state but needs to wait for a server response, such as submitting a form."]}),`
`,n.jsxs(e.p,{children:["In conjuction use the ",n.jsx(e.code,{children:"workingLabel"})," prop to update the label of the button when the working state is triggered."]}),`
`,n.jsxs(e.p,{children:["Alternatively use the ",n.jsx(e.code,{children:"workingLabelHidden"})," prop to hide the button label all together."]}),`
`,n.jsx(t,{of:w}),`
`,n.jsx(e.h3,{id:"controlling-the-working-state",children:"Controlling the working state"}),`
`,n.jsx(e.p,{children:"Here is an example of controlling whether the button is 'working' or not, using state."}),`
`,n.jsx(t,{of:v}),`
`,n.jsx(e.h3,{id:"loading",children:"Loading"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(i,{pageId:"components-loading-states-loadinginput",children:"LoadingInput"})," component for button placeholders."]}),`
`,n.jsx(t,{of:B}),`
`,n.jsxs(e.h3,{id:"native-form-attribute",children:["Native ",n.jsx(e.code,{children:"form"})," attribute"]}),`
`,n.jsxs(e.p,{children:['Button extends native HTML "form" attributes for ',n.jsx(e.code,{children:"button"}),"."]}),`
`,n.jsxs(e.p,{children:["You can use this to submit a ",n.jsx(e.code,{children:"form"})," using ",n.jsx(e.code,{children:"Button"})," with a matching form id."]}),`
`,n.jsx(t,{of:k})]})}function mn(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{mn as default};
