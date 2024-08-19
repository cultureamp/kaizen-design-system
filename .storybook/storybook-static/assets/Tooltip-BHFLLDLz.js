import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as l,ag as i,aj as c}from"./index-UYGUCD_e.js";import{R as a,I as d}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{T as h,P as n,B as p,a as m,b as x,c as u,d as j,C as b,e as f}from"./Tooltip.stories-DCzpqx_z.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./FilterButtonBase-D953FwLo.js";import"./InformationIcon-DxLaBSbb.js";import"./SVG-7WFwBCn9.js";import"./QuestionIcon-Bxxn-ARD.js";import"./RemoveLinkIcon-D9z3k6B4.js";import"./Text-D2gQH1xL.js";import"./index-CdP7-hSn.js";import"./usePopper-D4ykrdaR.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./Tag-D-4sFjnu.js";import"./IconButton-DH93ECWt.js";import"./ButtonGroup-Cm1_R1hn.js";import"./Table-CqZnScg6.js";import"./Heading-Y5F8SWRW.js";import"./ExclamationIcon-CBwbCtpu.js";import"./SortDescendingIcon-DgzcUhj2.js";import"./Checkbox-B9bmVoGZ.js";import"./CheckIcon-BwUvLWmE.js";import"./MinusIcon-3DH7qpb8.js";import"./CheckboxField-Dex_qNHg.js";import"./Label-DlmzItqQ.js";function s(t){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(o.h1,{id:"tooltip-v1",children:"Tooltip (v1)"}),`
`,e.jsx(a,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Tooltip",figma:"https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%F0%9F%92%9C-UI-Kit%3A-Heart?type=design&node-id=1929%3A32006&mode=design&t=LwTCBZ5E1uRvOA1l-1",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075604978/Tooltip"}),`
`,e.jsx(d,{installCommand:"pnpm add @kaizen/components",importStatement:'import { Tooltip } from "@kaizen/components/v1/overlays"'}),`
`,e.jsxs(o.p,{children:["It is recommended that you import from the ",e.jsx(o.code,{children:"v2"})," entry point."]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(o.p,{children:"Adds a popover that will show on hover or focus of the child element, with simple text content."}),`
`,e.jsx(i,{of:n}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:"This component wasn't built with accessibility in mind, as a result it's quite easy to implement a tooltip in a non-accessible way. A rethink and rewrite is likely for the future."}),`
`,e.jsx(o.p,{children:"There's two major accessibility concerns here:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Keyboard only users"}),`
`,e.jsx(o.li,{children:"Screen reader (or similar assistive tech) users"}),`
`]}),`
`,e.jsx(o.p,{children:"Failure to meet either of these requirements will result in a critical issue where some people are completely unable to access the information."}),`
`,e.jsx(o.h3,{id:"keyboard-accessibility",children:"Keyboard accessibility"}),`
`,e.jsx(o.p,{children:"For keyboard accessibility, you need to make sure the child you are passing is a focusable element. It's best to keep the contents of this component simple. E.g. just a button:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Tooltip text="Opens in a new tab">
  <Button href="/path" label="Go somewhere" />
</Tooltip>
`})}),`
`,e.jsx(o.h3,{id:"screen-reader-accessibility",children:"Screen reader accessibility"}),`
`,e.jsxs(o.p,{children:["Though it won't guarantee the best screen reader accessibility, a good start is to make sure your ",e.jsx(o.em,{children:"direct"})," children element is semantic (not a div or span)."]}),`
`,e.jsxs(o.p,{children:["When your direct child element is semantic, this component will add an ",e.jsx(o.code,{children:"aria-describedby"})," to that element. E.g. for the link example above, the resulting mark up will be:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<a href="path" aria-describedby="tooltip">Go somewhere</a>
<!-- (in a portal) -->
<div id="tooltip-id">Opens in a new tab</div>
`})}),`
`,e.jsxs(o.p,{children:[`Resulting in a screen reader announcement like:
`,e.jsx(o.code,{children:"Go somewhere, link, Opens in a new tab"})]}),`
`,e.jsx(o.p,{children:"Again, try to keep the contents of your children as simple as possible, ideally only a single natively focusable element like the example above."}),`
`,e.jsxs(o.p,{children:[`When your direct child is not semantic, you will get a console warning like this:
`,e.jsx(o.code,{children:"<Tooltip /> is not directly wrapping a semantic element, screen reader users will not be able to access the tooltip info."})]}),`
`,e.jsx(o.h3,{id:"tooltips-kaizen-components-and-avoiding-common-pitfalls",children:"Tooltips, Kaizen components and avoiding common pitfalls"}),`
`,e.jsxs(o.p,{children:["While technically any Kaizen component can be wrapped by a ",e.jsx(o.code,{children:"Tooltip"}),", as called out previously, only those with ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles",rel:"nofollow",children:"accessible roles"})," like ",e.jsx(o.code,{children:"button"}),", ",e.jsx(o.code,{children:"link"})," or ",e.jsx(o.code,{children:"heading"}),", will be readable to assistive technologies."]}),`
`,e.jsxs(o.p,{children:["We've created some guidance below with the most common cases for ",e.jsx(o.code,{children:"Tooltip"})," and how to ensure the additional context is read to the user."]}),`
`,e.jsx(o.h4,{id:"button-and-iconbutton",children:"Button and IconButton"}),`
`,e.jsx(i,{of:p}),`
`,e.jsxs(o.p,{children:["While Kaizen buttons are compatible with ",e.jsx(o.code,{children:"Tooltip"}),", caution is advised when using the custom ",e.jsx(o.code,{children:"component"})," render prop."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-JSX",children:`  <Tooltip text="Contact customer support.">
    <Button
      {...buttonProps}
      component={() => (
        // The most immediate child is a \`div\`, which has no \`role\`.
        <div>
          <button type="button">
            Help
          </button>
        </div>
      )}
    />
  </Tooltip>
`})}),`
`,e.jsxs(o.p,{children:["In the example above, the ",e.jsx(o.code,{children:"div"})," in now the direct descendant of ",e.jsx(o.code,{children:"Tooltip"}),", therefore will no longer be accessible to assistive technologies."]}),`
`,e.jsx(o.h4,{id:"buttongroup",children:"ButtonGroup"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Tooltip"})," component must wrap the children of ",e.jsx(o.code,{children:"ButtonGroup"})," to be accessible to screen readers."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(o.h4,{id:"table-headers-and-tooltips",children:"Table headers and tooltips"}),`
`,e.jsxs(o.p,{children:["While the composable ",e.jsx(o.code,{children:"Tooltip"})," is not exposed in the Kaizen ",e.jsx(o.code,{children:"Table"}),", it is important to call out that the ",e.jsx(o.code,{children:"tooltipInfo"})," prop in ",e.jsx(o.code,{children:"TableHeaderRowCell"})," must also have an ",e.jsx(o.code,{children:"onClick"})," or ",e.jsx(o.code,{children:"href"})," to be announced to assistive technologies."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsxs(o.p,{children:["Without either of these, the ",e.jsx(o.code,{children:"Tooltip"})," content will not be readable to keyboard users or assistive technologies."]}),`
`,e.jsx(o.h4,{id:"tags",children:"Tags"}),`
`,e.jsxs(o.p,{children:["Seen in the example below simple ",e.jsx(o.code,{children:"Tag"}),"s with plain text as ",e.jsx(o.code,{children:"children"})," will not accessible to keyboard users or assistive technologies as it's direct descendant is a ",e.jsx(o.code,{children:"div"})," with no semantic ",e.jsx(o.code,{children:"role"}),"."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsxs(o.p,{children:["While ",e.jsx(o.code,{children:"Tooltip"})," should be avoided if there are no interactive states within the ",e.jsx(o.code,{children:"Tag"}),", internal elements like buttons or links can be wrapped in a ",e.jsx(o.code,{children:"Tooltip"})," component to add necessary context."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.a,{href:"?path=/docs/components-tag-future--docs#overview",children:"future Tag"})," offers a composable solution for those needing to add more context to an interactive ",e.jsx(o.code,{children:"Tag"}),"."]}),`
`,e.jsx(o.h4,{id:"form-components-and-tooltips",children:"Form components and tooltips"}),`
`,e.jsxs(o.p,{children:["While a ",e.jsx(o.code,{children:"Tooltip"})," can seem like a natural pairing when space is a commodity, form elements still require a concise label that is ",e.jsx(o.em,{children:"ideally"})," visible (See MDN's guide on ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role#best_practices",rel:"nofollow",children:"Tooltip best practices"}),")."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsxs(o.p,{children:["In the example above, the ",e.jsx(o.code,{children:"Tooltip"})," content ",e.jsx(o.code,{children:'"Select all users"'})," is accessible to screen readers via keyboard navigation, however will not be announced when the input receives focus. This a limitation of ",e.jsx(o.code,{children:"CheckboxField"})," and form components where the immediate ",e.jsx(o.code,{children:"children"})," of ",e.jsx(o.code,{children:"Tooltip"})," is a wrapper."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsxs(o.p,{children:["In these instances, ",e.jsx(o.code,{children:"aria-describedby"})," can be leveraged to provide a description to the input."]})]})}function ue(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{ue as default};
