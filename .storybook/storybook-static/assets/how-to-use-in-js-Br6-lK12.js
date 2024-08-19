import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{ae as r}from"./index-UYGUCD_e.js";import{L as t}from"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Guides/Tokens/Access tokens via JS",parameters:{docsOnly:!0}}),`
`,n.jsx(e.h1,{id:"access-tokens-via-jsx",children:"Access tokens via JSX"}),`
`,n.jsx(e.h2,{id:"1-set-up-a-kaizenprovider",children:"1. Set up a KaizenProvider"}),`
`,n.jsxs(e.p,{children:["Ensure you have followed the steps in ",n.jsx(t,{pageId:"components-kaizen-provider-installation",children:"KaizenProvider"})," to set up your application for using design tokens."]}),`
`,n.jsx(e.h2,{id:"2-use-tokens",children:"2. Use Tokens"}),`
`,n.jsx(e.h3,{id:"in-jsx-via-css-vars",children:"In JSX via CSS Vars"}),`
`,n.jsx(e.p,{children:"Because we use CSS vars, you can utilise them in your JSX as you would in CSS."}),`
`,n.jsx(e.p,{children:"For example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`
const Component = () => (
  <div style={{
    backgroundColor: vars(--color-purple-500) // #844587
  }}>
    Custom Kaizen theme component
  </div>
)
`})}),`
`,n.jsx(e.h3,{id:"in-js-functions",children:"In JS functions"}),`
`,n.jsx(e.p,{children:"You can access the tokens directly:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { tokens } from "@kaizen/design-tokens/js"

const myAmazingFunction = () => {
  const mainColor = data ? tokens.colors.purple[500]: tokens.colors.purple[300];

  return mainColor;
}
`})})]})}function f(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{f as default};
