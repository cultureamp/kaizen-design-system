import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as o}from"./index-UYGUCD_e.js";import{I as r}from"./InlineNotification-DPK6p_Of.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./tslib.es6-CY32MZYl.js";import"./index-CCQ3W5xA.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/Tailwind/Configuration"}),`
`,e.jsx(n.h1,{id:"configuration",children:"Configuration"}),`
`,e.jsx(n.p,{children:"This page provides guidance on potential configuration options and how they work with the preset and Kaizen components."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#extending-the-kaizen-preset",children:"Extending the Kaizen preset"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#customising-the-important-selector",children:"Customising the important selector"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"extending-the-kaizen-preset",children:"Extending the Kaizen preset"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Extending your config is a good option when you intend to ",e.jsx(n.em,{children:"reuse"}),` the style.
If you need a value not available in our preset for a specific use case, consider using `,e.jsx(n.a,{href:"https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values",rel:"nofollow",children:"arbitrary values"})," instead."]}),`
`]}),`
`,e.jsxs(n.p,{children:["To extend upon the preset with values specific to your project, we recommend passing a theme object to ",e.jsx(n.code,{children:"theme.extend"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const { Preset } = require("@kaizen/tailwind")

module.exports = {
  presets: [Preset],
  theme: {
    extend: {
      colors: {
        myCoolNewColor: "#ffffff",
        "purple-100": "lime"
      }
    }
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Here, the Kaizen preset overwrites the default Tailwind preset, and the ",e.jsx(n.code,{children:"extend"}),` field adds in some new values.
Be careful though! While adding in a `,e.jsx(n.em,{children:"new"})," field to ",e.jsx(n.code,{children:"colors"})," won't overwrite any existing ones, passing in an existing field ",e.jsx(n.em,{children:"will"}),". In this example, ",e.jsx(n.code,{children:"purple-100"})," has unfortunately been overwritten."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'<p className="text-sky">...'})," ❌ Default TW config overwritten by ",e.jsx(n.code,{children:"Preset"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'<p className="text-myCoolNewColor">'})," ✅ New color added"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'<p className="text-purple-100">'})," ️❗️ Value from ",e.jsx(n.code,{children:"Preset"}),' overwritten to "Lime"']}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'<p className="text-purple-200">'})," ✅ Value from ",e.jsx(n.code,{children:"Preset"})," not overwritten"]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"customising-the-important-selector",children:"Customising the important selector"}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.code,{children:'"#root"'})," id selector is incompatible with your application wrapper or you are working with a mono-repo that needs to target a selector with lower specificity, you can change the ",e.jsx(n.code,{children:"important"})," ",e.jsx(n.a,{href:"https://tailwindcss.com/docs/configuration#important-modifier",rel:"nofollow",children:"configuration option"})," in your ",e.jsx(n.code,{children:"tailwind.config.js"}),"."]}),`
`,e.jsxs(n.p,{children:["If this is changed or you are not using the ",e.jsx(n.a,{href:"https://github.com/cultureamp/frontend-template",rel:"nofollow",children:"Frontend Template"}),", be sure that the ",e.jsx(n.code,{children:"important"})," selector matches to an ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"class"}),", or ",e.jsx(n.code,{children:"HTML Element"})," within your application, ie:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div id="#root">
 {/* Application code */}
</div>
`})}),`
`,e.jsxs(r,{persistent:!0,type:"cautionary",style:"inline",title:"Changing the selector",children:[e.jsxs(n.p,{children:["We advise using an ",e.jsx("code",{children:"id"})," with ",e.jsx("code",{children:'"#root"'})," as the default selector. Using different id's, classes or HTML elements like ",e.jsx("code",{children:"body"})," as the selector could result in:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n.p,{children:["Utility classes not superseding Kaizen defaults when using ",e.jsx("code",{children:"classNameOverride"})]})}),e.jsx("li",{children:e.jsxs(n.p,{children:["Duplication of utillity classes in your CSS bundle caused by consuming components with different ",e.jsx("code",{children:"important"})," selectors"]})})]})]})]})}function v(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{v as default};
