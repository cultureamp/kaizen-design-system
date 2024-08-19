import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{ae as t}from"./index-UYGUCD_e.js";import{L as r}from"./LinkTo-CCLy3Ahi.js";import{C as n}from"./DocsComponents-BPtUz7O2.js";import{e as l}from"./example-B1W5QN69.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./tslib.es6-CY32MZYl.js";import"./index-BtE2hmwC.js";import"./tokens-R-QqTfm-.js";import"./index-Cz46hO83.js";import"./index-BQ5IbGbl.js";import"./Card-D3sy2uql.js";import"./TabPanels-DLb-4Dql.js";import"./useFocusable-CuIK6Qs-.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./Badge-D9GUNioS.js";function i(o){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/Tokens/How to use design tokens in SASS",parameters:{docsOnly:!0}}),`
`,e.jsx(s.h1,{id:"access-tokens-via-scss",children:"Access tokens via SCSS"}),`
`,e.jsx(s.h2,{id:"1-set-up-a-kaizenprovider",children:"1. Set up a KaizenProvider"}),`
`,e.jsxs(s.p,{children:["Ensure you have followed the steps in ",e.jsx(r,{pageId:"components-kaizen-provider-installation",children:"KaizenProvider"})," to set up your application for using themes."]}),`
`,e.jsx(s.h2,{id:"2-start-using-design-tokens",children:"2. Start using design tokens"}),`
`,e.jsx(s.p,{children:"There are 2 different ways you can utilise the tokens:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Via CSS vars directly (Recommended)"}),`
`,e.jsxs(s.li,{children:["Importing SCSS vars from ",e.jsx(s.code,{children:"@kaizen/design-tokens"})]}),`
`]}),`
`,e.jsx(s.h3,{id:"using-css-vars",children:"Using CSS Vars"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-scss",children:`.myCustomClassName {
  background-color: vars(--color-gray-100);
}
`})}),`
`,e.jsx(s.h3,{id:"importing-scss-vars",children:"Importing SCSS vars"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Import the CSS variable versions of the tokens"}),`
`,e.jsxs(s.li,{children:["Use these tokens in your CSS. They will be compiled to CSS variables (e.g. ",e.jsx(s.code,{children:"$color-purple-800"})," will become ",e.jsx(s.code,{children:"var(--color-purple-800)"}),")"]}),`
`]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(n,{language:"scss",code:l}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(r,{pageId:"systems-tokens-api",children:"API"})," for all available tokens."]}),`
`,e.jsx(s.h2,{id:"3-be-aware-of-the-limitations-of-css-variables-in-sass",children:"3. Be aware of the limitations of CSS variables in SASS"}),`
`,e.jsxs(s.h3,{id:"compile-time-functions-like-mix-or-darken-wont-work",children:["Compile-time functions like ",e.jsx(s.code,{children:"mix()"})," or ",e.jsx(s.code,{children:"darken()"})," won't work"]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"It won't be possible to do things like:"})}),`
`,e.jsx(n,{language:"scss",code:`.myClass {
  color: mix(white, $color-purple-800, 90%);
}`}),`
`,e.jsxs(s.p,{children:["Because the exposed SASS variables contain values such as ",e.jsx(s.code,{children:"var(--color-purple-800)"}),", the SASS compiler won't be able to calculate anything that relies on concrete values such as HEX strings."]}),`
`,e.jsxs(s.p,{children:["Usually when we've used functions like ",e.jsx(s.code,{children:"mix"})," or ",e.jsx(s.code,{children:"shade"})," it has been to lighten or darken a token by a certain amount. We recommend you find the nearest plain value. In the example above, you could simply use ",e.jsx(s.code,{children:"$color-purple-200"}),"."]}),`
`,e.jsxs(s.h2,{id:"4-when-you-need-to-add-opacity-to-a-colour-use-rgba-and-the--rgb-params-variables",children:["4. When you need to add opacity to a colour, use ",e.jsx(s.code,{children:"rgba()"})," and the ",e.jsx(s.code,{children:"-rgb-params"})," variables"]}),`
`,e.jsx(s.p,{children:e.jsxs(s.strong,{children:["Use ",e.jsx(s.code,{children:"rgba($color-purple-800-rgb, 0.5)"})," instead of ",e.jsx(s.code,{children:"rgba($color-purple-800, 0.5)"})," to add alpha to a color."]})}),`
`,e.jsxs(s.p,{children:["We have exposed extra sibling variables for every color, as seen in ",e.jsx(r,{pageId:"systems-tokens-api",section:"sass-variables",children:"SASS Variables"}),", which allow you to manipulate opacity of CSS variable colors:"]}),`
`,e.jsx(n,{language:"scss",code:`@import '~@kaizen/design-tokens/sass/color.scss';

.myClass {
  background-color: rgba($color-gray-200-rgb, 0.5);
}`}),`
`,e.jsxs(s.p,{children:["For similar reasons to the previous section, a statement like ",e.jsx(s.code,{children:"rgba($color-gray-200, 0.5)"}),", will not work because neither SASS or your browser can understand the expanded value: ",e.jsx(s.code,{children:"rgba(var(--color-gray-200), 0.5)"}),"."]}),`
`,e.jsxs(s.p,{children:["Every color variable such as ",e.jsx(s.code,{children:"$color-gray-200"})," will have a matching sibling variable with the ",e.jsx(s.code,{children:"-rgb"})," suffix. And ",e.jsx(s.code,{children:"$color-gray-200-rgb"})," points to a CSS variable that contains a list of numbers, ",e.jsx(s.code,{children:"246, 246, 246"}),", which browsers can then use in inside the ",e.jsx(s.code,{children:"rgba()"})," function."]}),`
`,e.jsxs(s.p,{children:["For example ",e.jsx(s.code,{children:"rgba($color-gray-200-rgb, 0.5)"}),", compiles to ",e.jsx(s.code,{children:"rgba(var(--color-gray-200-rgb), 0.5)"}),", which the browser then resolves to ",e.jsx(s.code,{children:"rgba(246, 246, 246, 0.5)"}),"."]}),`
`,e.jsx(s.h2,{id:"migrating-from-compile-time-sass-functions-like-add-tint-darken-or-mix",children:"Migrating from compile time SASS functions like add-tint, darken, or mix"}),`
`,e.jsx(s.p,{children:"A utility to help with this is coming soon. You will need to replace any function calls like these with design tokens, as these are both not computable using CSS variables, and have been deprecated for a while."})]})}function X(o={}){const{wrapper:s}={...a(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{X as default};
