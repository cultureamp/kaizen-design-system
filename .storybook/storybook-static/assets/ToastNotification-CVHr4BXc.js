import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{ae as r,ag as e,aj as c}from"./index-UYGUCD_e.js";import{R as d,K as l}from"./DoesAndDonts-BKQOirz7.js";import{L as m}from"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{T as h,P as n,C as p,U as f,R as u,a as x}from"./ToastNotification.stories-CFDBgq-e.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./ToastNotification-B8mE1vof.js";import"./useToastNotification-CIcTykTU.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";function s(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:h}),`
`,t.jsx(i.h1,{id:"toastnotification",children:"ToastNotification"}),`
`,t.jsx(d,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Notification/ToastNotification",figma:"https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%F0%9F%92%9C-UI-Kit%3A-Heart?type=design&node-id=1929%3A21829&mode=design&t=QHnBiBn4stf5UxJ3-1",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075638310/Toast+Notification"}),`
`,t.jsx(l,{exportNames:"useToastNotification"}),`
`,t.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(i.p,{children:`Toast notifications are used to notifying a user of an outcome for an action they have taken.
They appended to the root of the document body and will render in the top corner of the window.`}),`
`,t.jsxs(i.p,{children:[t.jsx(i.strong,{children:"Note:"})," Toast notifications must be used within ",t.jsx(m,{pageId:"components-kaizen-provider-installation",children:"KaizenProvider"}),"."]}),`
`,t.jsx(e,{of:n}),`
`,t.jsx(c,{of:n}),`
`,t.jsx(i.h2,{id:"api",children:"API"}),`
`,t.jsxs(i.p,{children:["Use the following helper methods available through the ",t.jsx(i.code,{children:"useToastNotification"})," hook to create and manage Toast notifications."]}),`
`,t.jsx(i.h3,{id:"addtoastnotification",children:"addToastNotification"}),`
`,t.jsx(i.p,{children:"Adds and appends a new notification to the list."}),`
`,t.jsx(e,{of:p}),`
`,t.jsx(i.h3,{id:"updatetoastnotification",children:"updateToastNotification"}),`
`,t.jsxs(i.p,{children:["Updates a single notification that matches the ",t.jsx(i.code,{children:"id"})," passed to the function."]}),`
`,t.jsx(e,{of:f}),`
`,t.jsx(i.h3,{id:"removetoastnotification",children:"removeToastNotification"}),`
`,t.jsxs(i.p,{children:["Removes a single notification that matches the ",t.jsx(i.code,{children:"id"})," passed to the function."]}),`
`,t.jsx(e,{of:u}),`
`,t.jsx(i.h3,{id:"cleartoastnotifications",children:"clearToastNotifications"}),`
`,t.jsx(i.p,{children:"Clears all notifications currently held in state."}),`
`,t.jsx(i.p,{children:"Note that since each story has an individual context, this example will only clear the ones it adds."}),`
`,t.jsx(e,{of:x}),`
`,t.jsx(i.h2,{id:"accessibility-and-removal-of-notifications",children:"Accessibility and removal of notifications"}),`
`,t.jsxs(i.p,{children:[`Any notification that is temporarily rendered on screen should provide a user ample time to read its contents and
provide a way to stop its removal (`,t.jsx(i.a,{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html",rel:"nofollow",children:"WCAG guidline here"}),")."]}),`
`,t.jsx(i.p,{children:`By default, all Toast notifications will remain on screen until dismissed.
This ensures the accessibility is met and does not require additional intervention.`}),`
`,t.jsx(i.p,{children:`If you required to be automatically removed, you must provide a means of stopping and re-enabling its
removal and ensures that a user can reasonably access this before it is removed.`})]})}function Q(o={}){const{wrapper:i}={...a(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(s,{...o})}):s(o)}export{Q as default};
