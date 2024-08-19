import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as a}from"./index-UYGUCD_e.js";import{L as o}from"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Kaizen Provider/Internationalization in Kaizen"}),`
`,e.jsx(n.h1,{id:"internationalization-in-kaizen",children:"Internationalization in Kaizen"}),`
`,e.jsx(n.p,{children:"The goal of Internationalization in Kaizen is to handle the translation of hard-coded strings in Kaizen components."}),`
`,e.jsxs(n.p,{children:["If you need guidance on translating your app check, the ",e.jsx(n.code,{children:"@cultureamp/i18n-react-intl"})," ",e.jsx(n.a,{href:"https://github.com/cultureamp/unified-home/blob/master/packages/i18n-react-intl/README.md",rel:"nofollow",children:"package docs"}),"."]}),`
`,e.jsx(n.h2,{id:"what-kaizen-internationalization-covers",children:"What Kaizen internationalization covers"}),`
`,e.jsx(n.p,{children:`While most Kaizen components receive display text and accessibility information through props, some have text built in. For some of these cases, Kaizen provides translation support.
Translation support in a Kaizen component will cover:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Internal display text (that isn't provided by the user through props)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Internal accessibility text, such as an ",e.jsx(n.code,{children:"aria-label"})," (that isn't provided by the user through props)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Disclaimer: Internationalization is a new feature in Kaizen, and not all Kaizen components are translated yet.
Please check with us on a case-by-case basis regarding which components are translated. Also keep in mind that translations take time to be fully processed, meaning that components with translation support may have messages for certain locales but not others at any given time.
For a full list of our supported languages and their tiers, see `,e.jsx(n.a,{href:"https://github.com/cultureamp/translation-bot/blob/master/config/kaizen-design-system.yaml",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Setting up internationalization for Kaizen components involves:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Adding unified-home's ",e.jsx(n.code,{children:"react-intl"})," ",e.jsx(n.a,{href:"https://github.com/cultureamp/unified-home/tree/master/packages/i18n-react-intl#integrating-with-webpack",rel:"nofollow",children:"webpack-plugin"})," to your webpack config"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Wrapping your app in the ",e.jsx(o,{pageId:"components-kaizen-provider-installation",children:"KaizenProvider"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["There is a slight difference in the implementation of the ",e.jsx(n.code,{children:"KaizenProvider"}),", depending on whether or not your app already handles its translations with ",e.jsx(n.code,{children:"react-intl"}),"."]}),`
`,e.jsxs(n.h3,{id:"when-a-react-intl-provider-is-set-up-with-cultureampi18n-react-intl",children:["When a ",e.jsx(n.code,{children:"react-intl"})," provider is set up with ",e.jsx(n.code,{children:"@cultureamp/i18n-react-intl"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"KaizenProvider"})," will use the existing ",e.jsx(n.code,{children:"react-intl"}),` provider to track the locale and access its own translation files. There is no need to pass in a locale prop.
For more information on `,e.jsx(n.code,{children:"@cultureamp/i18n-react-intl"}),", see their docs here."]}),`
`,e.jsx(n.p,{children:"Note: This will work with StaticIntlProvider or DynamicIntlProvider."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DynamicIntlProvider } from "@cultureamp/i18n-react-intl"
import { KaizenProvider } from "@kaizen/components"

<DynamicIntlProvider>
  <KaizenProvider>
     <YourApp/>
  </KaizenProvider>
</DynamicIntlProvider>
`})}),`
`,e.jsxs(n.h3,{id:"when-your-app-isnt-set-up-with-a-provider-from-cultureampi18n-react-intl",children:["When your app isn't set up with a provider from ",e.jsx(n.code,{children:"@cultureamp/i18n-react-intl"})]}),`
`,e.jsxs(n.p,{children:["In these cases, you'll need to pass the current locale as a prop to the ",e.jsx(n.code,{children:"KaizenProvider"}),", so it knows which language is currently active."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { KaizenProvider } from "@kaizen/components"

<KaizenProvider locale={locale}>
  <YourApp/>
</KaizenProvider>
`})})]})}function z(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{z as default};
