import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{ae as r,ag as s}from"./index-UYGUCD_e.js";import{S as a,V as c,a as d,D as l,d as h,I as x,e as u,b as p}from"./Tag.stories-BwHvAaFO.js";import{T as j,S as m,L as f,V as g,a as v,b,D as w,A as y,c as T,I as A,d as S}from"./Tag-migration-guide.stories-Bw3KFGl5.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./types-BkC57k2Z.js";import"./Tag-B8l7-tRz.js";import"./index-CCQ3W5xA.js";import"./CautionIcon-D4m_GXrx.js";import"./SVG-7WFwBCn9.js";import"./ClearIcon-BcQoGkgT.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./LiveIcon-CIjqi5i9.js";import"./SuccessIcon-BInyqVzG.js";import"./Tag.module-fH2-Bd0x.js";import"./Avatar-BrPd9Rrx.js";import"./index-BRV0Se7Z.js";import"./UserIcon-CFY4To9K.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./Tag-D-4sFjnu.js";import"./RemovableTag-BNVKm4bs.js";function t(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:j}),`
`,e.jsx(i.h1,{id:"future-tag-migration-guide",children:"Future Tag migration guide"}),`
`,e.jsxs(i.p,{children:["A brief guide on how and why to migrate from Kaizen's current ",e.jsx(i.code,{children:"Tag"})," to the ",e.jsx(i.code,{children:"future"})," release."]}),`
`,e.jsx(i.h2,{id:"why-the-change",children:"Why the change?"}),`
`,e.jsxs(i.p,{children:["Tag was rebuilt to allow for greater composability as the number of cases for a distinct Tags could not be solved through the use of ",e.jsx(i.code,{children:"variant"})," without impacting the developer experience for existing users. The flexibility of ",e.jsx(i.code,{children:"Tag"})," content as ",e.jsx(i.code,{children:"children"})," also addresses several accessibility issues that the original could not solve intuitively."]}),`
`,e.jsx(i.h2,{id:"component-and-api-changes-at-a-glance",children:"Component and API changes at a glance"}),`
`,e.jsxs(i.p,{children:["There were a number key changes between current and future ",e.jsx(i.code,{children:"Tag"})," to achieve the flexibility we were aiming to provide, we've listed these below but also go into further detail in the ",e.jsx(i.a,{href:"/docs/components-tag-future-migration-guide--migrationguide#migration-examples",children:"migration examples"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"variant"})," prop has been removed",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["This has been superseded by a combination of the ",e.jsx(i.code,{children:"color"})," and ",e.jsx(i.code,{children:"icon"})," prop"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"inline"})," prop and the default ",e.jsx(i.code,{children:"margin"})," on all Tags has been removed.",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["This can be directly controlled through ",e.jsx(i.code,{children:"classNameOverride"})," or a ",e.jsx(i.code,{children:"flex-gap"})," on the container."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"size"})," has been removed and all tags are the same size."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"truncationWidth"})," has been removed as child content."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"dismissible"})," prop has been removed.",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["A ",e.jsx(i.code,{children:"DismissibleTag"})," component is now available in its place."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Avatar"})," and all child content must now be composed by the consumer.",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"This offers a greater degree of flexibility to ensure that the right accessible context can be provided to the end user."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(i.p,{children:"The following are example of migrating from previously available props to the composable solution."}),`
`,e.jsx(i.h3,{id:"status",children:"Status"}),`
`,e.jsxs(i.p,{children:["With the ",e.jsx(i.code,{children:"variant"})," prop there are four values associated with statuses:  ",e.jsx(i.code,{children:"statusLive"}),", ",e.jsx(i.code,{children:"statusDraft"}),", ",e.jsx(i.code,{children:"statusClosed"}),", ",e.jsx(i.code,{children:"statusAction"}),"."]}),`
`,e.jsxs(i.p,{children:["For the most part these can all be replaced with the use of the ",e.jsx(i.code,{children:"color"})," prop, with exception to the ",e.jsx(i.code,{children:"live"})," status."]}),`
`,e.jsx(i.h4,{id:"before",children:"Before"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(i.h4,{id:"after",children:"After"}),`
`,e.jsx(s,{of:m,sourceState:"shown"}),`
`,e.jsxs(i.p,{children:["While the ",e.jsx(i.code,{children:"LiveIcon"})," is exported from ",e.jsx(i.code,{children:"@kaizen/components"})," the current ",e.jsx(i.code,{children:"Tag"})," uses an animated implementation, which is not exported directly from Kaizen. As an interim solution, you can use the following Story's code snippet to create a ",e.jsx(i.code,{children:"LiveIconComponent"}),". This can then be passed into the future ",e.jsx(i.code,{children:"Tag"})," as ",e.jsx(i.code,{children:"Children"}),"."]}),`
`,e.jsx(s,{of:f,sourceState:"hidden"}),`
`,e.jsx(i.h3,{id:"validation",children:"Validation"}),`
`,e.jsxs(i.p,{children:["Following the same pattern as status, ",e.jsx(i.code,{children:"validationPositive"}),", ",e.jsx(i.code,{children:"validationInformative"}),", ",e.jsx(i.code,{children:"validationNegative"}),", ",e.jsx(i.code,{children:"validationCautionary"})," can all be replace with the ",e.jsx(i.code,{children:"color"})," and ",e.jsx(i.code,{children:"icon"})," prop."]}),`
`,e.jsxs(i.p,{children:["Note: because the icons convey meaning, they should have an accessible label that provides context to the ",e.jsx(i.code,{children:"Tag"}),". A contextual ",e.jsx(i.code,{children:"aria-label"})," and role of ",e.jsx(i.code,{children:"img"})," addresses one of the ",e.jsx(i.a,{href:"https://github.com/cultureamp/kaizen-discourse/issues/102",rel:"nofollow",children:"accessibility issues"})," with the current ",e.jsx(i.code,{children:"Tag"}),"."]}),`
`,e.jsx(i.h4,{id:"before-1",children:"Before"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i.h4,{id:"after-1",children:"After"}),`
`,e.jsx(s,{of:g,sourceState:"shown"}),`
`,e.jsxs(i.p,{children:["Note: When using the ",e.jsx(i.code,{children:"icon"})," prop, the icon's color will be determined by the ",e.jsx(i.code,{children:"color"})," value that has been set. This is to ensure that an accessible contrast ratio is achieved."]}),`
`,e.jsxs(i.p,{children:["Any Icons added as a child of future ",e.jsx(i.code,{children:"Tag"})," will need to set their own colors and ensure the right contrast ratio is achieved."]}),`
`,e.jsx(i.h3,{id:"sentiment",children:"Sentiment"}),`
`,e.jsxs(i.p,{children:["While migration of any ",e.jsx(i.code,{children:"Tag"})," using, ",e.jsx(i.code,{children:"sentimentPositive"}),", ",e.jsx(i.code,{children:"sentimentNeutral"})," or ",e.jsx(i.code,{children:"sentimentNegative"})," is relatively straight forward using the ",e.jsx(i.code,{children:"color"})," prop, ",e.jsx(i.code,{children:"sentimentNone"})," does not align to any Kaizen's ",e.jsx(i.a,{href:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3064857902/Color",rel:"nofollow",children:"semantic colors"}),"."]}),`
`,e.jsx(i.h4,{id:"before-2",children:"Before"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i.h4,{id:"after-2",children:"After"}),`
`,e.jsx(s,{of:v,sourceState:"shown"}),`
`,e.jsxs(i.p,{children:["If required, you could use ",e.jsx(i.code,{children:"classNameOverride"})," to implement the same UI. It is important that any override of the default styles still meets minimum contrast ratios to ensure the component is accessible."]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(i.p,{children:"This is also a good time to stop and check if this change is necessary. If there is an opportunity remove older styles that are no longer available, this can help to reduce inconsistencies across the platform. As always, check in with your designer to see if any new option can be used in its place."}),`
`,e.jsx(i.h3,{id:"dismissible",children:"Dismissible"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"dismissible"})," prop is no longer available in the future ",e.jsx(i.code,{children:"Tag"})," component. We have split the dismissible functionality into the ",e.jsx(i.a,{href:"/docs/components-tag-future-removabletag--docs",children:"RemovableTag"}),"."]}),`
`,e.jsxs(i.p,{children:["This increases the hit box for the dismiss button and makes the ",e.jsx(i.code,{children:"ariaLabel"})," in the ",e.jsx(i.code,{children:"removeButtonProps"})," a required prop. This offers a more accessible experience for user and address one of the standing ",e.jsx(i.a,{href:"https://github.com/cultureamp/kaizen-discourse/issues/101",rel:"nofollow",children:"accessibility issues"})," with the legacy ",e.jsx(i.code,{children:"Tag"}),"."]}),`
`,e.jsx(i.h4,{id:"before-3",children:"Before"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(i.h4,{id:"after-3",children:"After"}),`
`,e.jsx(s,{of:w,sourceState:"shown"}),`
`,e.jsx(i.p,{children:"Remember that when handling dismiss (or any destructive action), a user's focus should not be lost on the page."}),`
`,e.jsx(i.h3,{id:"avatars",children:"Avatars"}),`
`,e.jsxs(i.p,{children:["Avatars are no longer provided directly to the ",e.jsx(i.code,{children:"Tag"})," as a prop. Instead they will be passed in as children."]}),`
`,e.jsx(i.h4,{id:"before-4",children:"Before"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h4,{id:"after-4",children:"After"}),`
`,e.jsx(s,{of:y,sourceState:"shown"}),`
`,e.jsxs(i.p,{children:["Note: The use of ",e.jsx(i.code,{children:"ps-4"})," (or ",e.jsx(i.code,{children:"padding-inline-start"}),") in the ",e.jsx(i.code,{children:"classNameOverride"})," is to override the default spacing at start of the ",e.jsx(i.code,{children:"Tag"}),". This will ensure the Avatar can contour the border radius of the ",e.jsx(i.code,{children:"Tag"}),"."]}),`
`,e.jsx(i.h4,{id:"dismissible-avatars",children:"Dismissible Avatars"}),`
`,e.jsxs(i.p,{children:["Following a similar pattern to the above, you can use the ",e.jsx(i.code,{children:"RemovableTag"})," with an ",e.jsx(i.code,{children:"Avatar"})," and plain text as its ",e.jsx(i.code,{children:"children"})," to achieve a dismissible version."]}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(i.h3,{id:"inline",children:"Inline"}),`
`,e.jsxs(i.p,{children:["Originally the ",e.jsx(i.code,{children:"Tag"})," was built with the assumption that it would always required spacing at the end. This necessitated the need for the ",e.jsx(i.code,{children:"inline"})," prop to remove the margin from end when it was not required."]}),`
`,e.jsxs(i.p,{children:["In future ",e.jsx(i.code,{children:"Tag"})," this has been removed so consumers can now control spacing with CSS properties like ",e.jsx(i.code,{children:"gap"})," or ",e.jsx(i.code,{children:"margin-inline"}),"."]}),`
`,e.jsx(i.h4,{id:"before-5",children:"Before"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h4,{id:"after-5",children:"After"}),`
`,e.jsx(s,{of:A,sourceState:"shown"}),`
`,e.jsxs(i.p,{children:["To simplify this example we have avoided DOM elements such as ",e.jsx(i.code,{children:"ul"})," and ",e.jsx(i.code,{children:"li"}),". In production, lists should be used if you are rendering a group of ",e.jsx(i.code,{children:"Tag"}),"s."]}),`
`,e.jsx(i.h3,{id:"truncationwidth",children:"truncationWidth"}),`
`,e.jsxs(i.p,{children:["While the current Tag controls truncation via the ",e.jsx(i.code,{children:"truncationWidth"})," prop, which set a ",e.jsx(i.code,{children:"max-width"})," of inner text via inline styles, we have chosen not to adopt this in the future ",e.jsx(i.code,{children:"Tag"})," as it presents a risk of violating accessibility standards. While truncation can still be achieved in future ",e.jsx(i.code,{children:"Tag"})," via Tailwind or DOM manipulation, it is important to call out out this as a accessibility concern."]}),`
`,e.jsx(i.h4,{id:"before-6",children:"Before"}),`
`,e.jsx(s,{of:u}),`
`,e.jsxs(i.p,{children:["Where truncation often fails WCAG's success criteria is in ",e.jsx(i.a,{href:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F69",rel:"nofollow",children:"1.4.4"})," or ",e.jsx(i.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",rel:"nofollow",children:"1.3.1"}),". The crux of the issue is that removing content with an ellipsis may lead to a loss of context for visual users. While ",e.jsx(i.code,{children:"aria"})," labels can support those that use assistive technologies, they are not enough to resolve this issue for sighted users."]}),`
`,e.jsxs(i.p,{children:["The recommendation from WCAG is that any truncated content comes with the functionality to visually revealing its full content. This can be accessible either via focus or some form of activation - like an ",e.jsx(i.code,{children:"onClick"})," to reveal. Based on this, our recommendation is to avoid truncation unless necessary."]}),`
`,e.jsx(i.h3,{id:"size",children:"Size"}),`
`,e.jsxs(i.p,{children:["The two sizes for tag have been remove in favour of a default size in between ",e.jsx(i.code,{children:"medium"})," and ",e.jsx(i.code,{children:"small"}),". The ",e.jsx(i.code,{children:"small"})," specifically was removed due to the reduced hit radius for the dismissible button and poor compatibility with avatars and icon."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"classNameOverride"})," can be leveraged to add padding and modify properties but should be done with caution to reduce inconsistencies in the platform and reduce the risk of accessibility violations."]}),`
`,e.jsx(i.h4,{id:"before-7",children:"Before"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h4,{id:"after-6",children:"After"}),`
`,e.jsx(s,{of:S,sourceState:"shown"})]})}function se(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{se as default};
