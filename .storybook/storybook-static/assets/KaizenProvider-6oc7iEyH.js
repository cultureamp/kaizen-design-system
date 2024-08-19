import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as t}from"./index-DSkyVWTJ.js";import{ae as s}from"./index-UYGUCD_e.js";import{H as o}from"./index-BtE2hmwC.js";import{m as a,a as l,b as d,c}from"./migration-to-v1-BZNTy7Z9.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Kaizen Provider/Installation"}),`
`,e.jsx(n.h1,{id:"kaizen-provider",children:"Kaizen Provider"}),`
`,e.jsx(n.p,{children:"Provides the necessary global contexts for all Kaizen components, as well as any global level Kaizen component/wrappers."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Ideally, there should only be one ",e.jsx(n.code,{children:"KaizenProvider"})," that should wrap your entire application."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { KaizenProvider } from "@kaizen/components";
<KaizenProvider>
  <App />
</KaizenProvider>
`})}),`
`,e.jsx(n.h3,{id:"internationalization-support",children:"Internationalization support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/story/components-kaizen-provider-internationalization-in-kaizen--docs",children:"Internationalization in Kaizen"})}),`
`]}),`
`,e.jsx(n.h2,{id:"migrating-to-kaizenprovider-v10",children:"Migrating to KaizenProvider v1.0"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"KaizenProvider"})," our new root level wrapping component."]}),`
`,e.jsx(o,{className:"diff shadow-sm",children:a}),`
`,e.jsxs(n.p,{children:["If you're using the ",e.jsx(n.a,{href:"https://github.com/cultureamp/frontend-template",rel:"nofollow",children:"frontend-template"}),", you can replace it like this:"]}),`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:"defaultPreset"})," comes from the ",e.jsx(n.code,{children:"frontend-template"}),"."]}),`
`,e.jsx(o,{className:"diff shadow-sm",children:l}),`
`,e.jsx(n.h3,{id:"bonus",children:"Bonus"}),`
`,e.jsxs(n.p,{children:["If you're using the ",e.jsx(n.code,{children:"defaultTheme"}),", this is already setup within the provider, so depending on your team's setup you might be able to remove config that sets this up for you."]}),`
`,e.jsx(o,{className:"diff shadow-sm mb-16",children:d}),`
`,e.jsx(o,{className:"diff shadow-sm",children:c})]})}function K(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{K as default};
