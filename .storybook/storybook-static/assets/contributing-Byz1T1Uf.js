import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{ae as s}from"./index-UYGUCD_e.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Tailwind/Contributing to this package"}),`
`,e.jsx(n.h1,{id:"contributing",children:"Contributing"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"local-development-within-kaizen",children:"Local Development within Kaizen"}),`
`,e.jsxs(n.p,{children:["Note: While Taiwlind utilities can be used within ",e.jsx(n.code,{children:".stories.tsx"})," and ",e.jsx(n.code,{children:".mdx"})," files for documentation and layout purposes, Kaizen components will not render or compile Tailwind styles in the final bundle, i.e: ",e.jsx(n.code,{children:"mr-8"})," will not apply ",e.jsx(n.code,{children:"margin-right: $spacing-8"})," if added to a classname in ",e.jsx(n.code,{children:"Button.tsx"}),"."]}),`
`,e.jsx(n.h3,{id:"gotchas",children:"Gotchas"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"New preset created but not available / rendering in DOM"})}),`
`,e.jsxs(n.p,{children:["Any time you update the Tailwind presets, make sure you run ",e.jsx(n.code,{children:"pnpm build"})," in the root ",e.jsx(n.code,{children:"@kaizen/tailwind"}),` folder.
You may also need to reload the window for these to be picked up with TW IntelliSense.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Intellisense not working within the class attributes"})}),`
`,e.jsxs(n.p,{children:["For configuring IntelliSense refer to the ",e.jsx(n.a,{href:"/story/systems-tailwind-preset-configuration--page",children:"CONFIGURATION.md"})]}),`
`,e.jsx(n.p,{children:"Check the output in your terminal output for TailwindCSS IntelliSense."}),`
`,e.jsx(n.p,{children:"If you see the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Tailwind CSS: Can't resolve "@kaizen/design-tokens" in... '/Users/.../kaizen-design-system'
// OR
Tailwind CSS: Can't resolve '@kaizen/tailwind' in '/Users/.../kaizen-design-system'
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solution"})}),`
`,e.jsx(n.p,{children:"Run build in both the design-tokens and tailwind package folders."}),`
`,e.jsxs(n.p,{children:["In consuming repos this will not be an issue but for local develop we are requiring on ",e.jsx(n.code,{children:"/dist"})," folders having compile ts for the plugin to consume."]})]})}function j(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{j as default};
