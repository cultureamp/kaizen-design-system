import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as r,af as a}from"./index-UYGUCD_e.js";import{L as n}from"./LinkTo-CCLy3Ahi.js";import{I as l}from"./InlineNotification-CD7nmnbO.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./GenericNotification-DqRrnmyu.js";import"./CautionIcon-D4m_GXrx.js";import"./SVG-7WFwBCn9.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./SecurityTipIcon-CgXON2WE.js";import"./SuccessIcon-BInyqVzG.js";import"./Heading-Y5F8SWRW.js";import"./CloseIcon-BAUhi63R.js";function o(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/App starter"}),`
`,e.jsx(t.h1,{id:"app-starter",children:"App starter"}),`
`,e.jsx(t.p,{children:"This guide is all about how to introduce the Kaizen Design System to your app."}),`
`,e.jsx(t.p,{children:"Whilst the Kaizen Design System mainly focuses on the more atomic components in your app, some of the components have a high level of complexity requiring various global components to be present in order for them to function."}),`
`,e.jsx(a,{children:e.jsxs(l,{persistent:!0,type:"informative",children:["You won't need to apply any of the below if you have the latest ",e.jsx("a",{href:"https://github.com/cultureamp/next-template",children:"next-template"}),"."]})}),`
`,e.jsx(t.h2,{id:"1-add-the-kaizenprovider",children:"1. Add the KaizenProvider"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(n,{pageId:"components-kaizen-provider-installation",children:"KaizenProvider"})," feeds your entire app with Kaizen defaults so it's important that it goes at the very root of your application."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { KaizenProvider } from "@kaizen/components";
<KaizenProvider>
  <App />
</KaizenProvider>
`})}),`
`,e.jsxs(t.p,{children:["Be sure to read the ",e.jsx(n,{pageId:"components-kaizen-provider-installation",children:"KaizenProvider"})," documentation for migration tips and in case your app requires any further config, but generally this should be it!"]}),`
`,e.jsx(t.h2,{id:"2-add-unified-homes-culturampi18n-react-intl-webpack-plugin-to-your-webpack-config",children:"2. Add unified-home's @culturamp/i18n-react-intl webpack plugin to your webpack config"}),`
`,e.jsx(t.p,{children:`This plugin is necessary for KaizenProvider to run properly, and for ensuring that Kaizen's internal translated message strings are
available to the Kaizen components that consume them.`}),`
`,e.jsxs(t.p,{children:["For installation instructions, see their docs ",e.jsx(t.a,{href:"https://github.com/cultureamp/unified-home/tree/master/packages/i18n-react-intl#integrating-with-webpack",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(t.h2,{id:"3-setup-tailwind-css",children:"3. Setup Tailwind CSS"}),`
`,e.jsx(t.p,{children:"It is recommended that you use Tailwind for any custom CSS you may need to write outside of using Kaizen components."}),`
`,e.jsxs(t.p,{children:["For full installation instructions, see the ",e.jsx(n,{pageId:"systems-tailwind-getting-started",children:"Tailwind Getting Started"})," page."]}),`
`,e.jsxs(t.p,{children:["Whether or not you are already familiar with Tailwind, you'll want to take a look at our ",e.jsx(n,{pageId:"systems-tailwind-utility-class-references-overview",children:"Utility Class References"}),", as we have made distinct modifications to vanilla Tailwind to suit our design system."]}),`
`,e.jsx(t.h2,{id:"4-add-kaizens-global-css-stylesheet",children:"4. Add Kaizen's global CSS stylesheet"}),`
`,e.jsx(t.p,{children:"For the convenience of your app, we've compiled all the necessary styles for our components into a single stylesheet to make it easy to set and forget."}),`
`,e.jsx(t.p,{children:"This includes:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"CSS variables (design tokens)"}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/necolas/normalize.css",rel:"nofollow",children:"Normalize.css"})}),`
`,e.jsx(t.li,{children:"Font assets"}),`
`,e.jsx(t.li,{children:"reset.css"}),`
`,e.jsx(t.li,{children:"Component styles"}),`
`]}),`
`,e.jsx(t.p,{children:"Add this stylesheet at the top of your global styles imports of your app."}),`
`,e.jsxs(t.p,{children:["Note: If you are using Storybook, you will also need to add it in your ",e.jsx(t.code,{children:"preview.ts"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import "@kaizen/components/dist/styles.css"
import "tailwind.css"
`})})]})}function P(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{P as default};
