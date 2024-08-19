import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as o,ag as i}from"./index-UYGUCD_e.js";import{E as a,T as l,a as c,b as t,c as h,d as p}from"./working-with-tailwind.stories-DqoUtZ-n.js";import"./index-CTjT7uj6.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./tslib.es6-CY32MZYl.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./TailwindStoryTemplate-U37Yq8dh.js";import"./InlineNotification-DPK6p_Of.js";import"./GenericNotification-BhHHhCD8.js";import"./StickerSheet-DpoO9nWV.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";function d(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(s.h1,{id:"working-with-tailwind",children:"Working with Tailwind"}),`
`,e.jsx(s.p,{children:"This page describes and demonstrates the main intended use cases for this package, as well as our recommended escape hatch."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#spacing-and-layouts",children:"Spacing and layouts"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#altering-kaizen-components-with-classnameoverride",children:"Altering Kaizen components with classnameOverride"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#creating-bespoke-components",children:"Creating bespoke components"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#recommended-escape-hatch",children:"Recommended escape hatch"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"spacing-and-layouts",children:"Spacing and layouts"}),`
`,e.jsxs(s.p,{children:["For information about Cultureamp's spacing and layout system in general, see ",e.jsx(s.a,{href:"/story/systems-layout-and-spacing--page",children:"here"})]}),`
`,e.jsxs(s.p,{children:["When building a page, ideally ",e.jsx(s.a,{href:"https://github.com/cultureamp/kaizen-design-system",rel:"nofollow",children:"Kaizen"})," components should be used as much as possible, with the front-end engineer responsible for the spacing between them. In these cases, our Tailwind preset makes it easy by adding our spacing tokens to Tailwind's core spacing modules."]}),`
`,e.jsx(s.p,{children:"Here, Tailwind has been used to center a Kaizen button within a div."}),`
`,e.jsx(i,{of:l}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"flex"}),": Adds ",e.jsx(s.code,{children:"display: flex"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"justify-center"}),": Adds ",e.jsx(s.code,{children:"justify-content: center"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"border-solid"}),": Adds ",e.jsx(s.code,{children:"border-style: solid"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"p-16"}),": Adds ",e.jsx(s.code,{children:"padding: 1rem"})," (",e.jsx(s.code,{children:"16px"})," = ",e.jsx(s.code,{children:"1rem"})," - see the ",e.jsx(s.a,{href:"/story/systems-layout-and-spacing--page",children:"layout and spacing docs"})," for more on this)"]}),`
`]}),`
`,e.jsxs(s.p,{children:["Here's a more complex example, where some ",e.jsx(s.code,{children:"<Card>"})," components and text have been spaced and laid out with Tailwind:"]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"altering-kaizen-components-with-classnameoverride",children:"Altering Kaizen components with classNameOverride"}),`
`,e.jsxs(s.p,{children:[`If a Kaizen component supports classNameOverride, Tailwind classes can also be used.
This is particularly useful for adding margins to Kaizen components. In this example, our preset is being used to add `,e.jsx(s.code,{children:"margin-right: 1.5rem"})," to Kaizen's ",e.jsx(s.code,{children:"<Card/>"})," component, without the need to wrap it in a div."]}),`
`,e.jsx(i,{of:t}),`
`,e.jsxs(s.p,{children:["In this example, a Tailwind css rule is being applied to a Kaizen ",e.jsx(s.code,{children:"<Heading />"})," component to ensure that the first letter is capitalized."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"first-letter:capitalize: Adds text-transform: capitalize on the first-letter pseudo selector"}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"creating-bespoke-components",children:"Creating bespoke components"}),`
`,e.jsx(s.p,{children:"Occasionally snowflakes need to be created. This package provides common utilities based on our design tokens, such as color, border-radius, and font-family. Ideally, as much styling of bespoke components should be handled with Tailwind, but keep in mind that scss can still be used when necessary."}),`
`,e.jsx(s.p,{children:"Here is an example of our TW package being used to create a bespoke, non-Kaizen component:"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"the-container-div",children:"The container div"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"w-[250px]"}),": Adds ",e.jsx(s.code,{children:"width: 250px"}),". This is an example of an arbitrary value being used to inject a custom suffix"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"rounded"}),": Adds ",e.jsx(s.code,{children:"border-radius: 7px"}),". This is one of our custom preset values"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"border-dashed"}),": Adds ",e.jsx(s.code,{children:"border-style: dashed"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"border-red-500"}),": Adds ",e.jsx(s.code,{children:"border-color: #c93b55"})," (our red-500 design token)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"bg-blue-100"}),": Adds ",e.jsx(s.code,{children:"background: #e6f6ff"})," (our blue-100 design token)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"text-center"}),": Adds ",e.jsx(s.code,{children:"text-align: center"})]}),`
`]}),`
`,e.jsx(s.h3,{id:"the-p-tag",children:"The p tag"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"m-0"}),": Adds ",e.jsx(s.code,{children:"margin: 0"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"p-12"}),": Adds ",e.jsx(s.code,{children:"padding: .75rem"})," (12px = 0.75rem)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pl-16"}),": Adds ",e.jsx(s.code,{children:"padding-left: 1rem"})," (16px = 1rem)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"font-family-paragraph"}),": Adds ",e.jsx(s.code,{children:'font-family: "Inter", "Noto Sans", ...'})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"text-blue-500"}),": Adds ",e.jsx(s.code,{children:"color: #0168b3"})," (our blue-500 design token)"]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"recommended-escape-hatch",children:"Recommended Escape Hatch"}),`
`,e.jsxs(s.p,{children:["If you find yourself needing to add styles in a way that is unsupported or otherwise difficult in Tailwind, the recommended alternative is CSS. CSS classes can be added alongside Tailwind utility classes without trouble, and the Tailwind docs recommend some useful post-css plugins ",e.jsx(s.a,{href:"https://tailwindcss.com/docs/using-with-preprocessors#using-sass-less-or-stylus",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(s.h3,{id:"why-not-scss",children:"Why not SCSS?"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"SCSS is currently a contained option, so writing new SCSS in our codebases is discouraged."}),`
`,e.jsxs(s.li,{children:["The Tailwind docs explicitly recommend ",e.jsx("em",{children:"not"})," using Tailwind with preprocessors, as it leads to all sorts of quirks and work-arounds. Read more ",e.jsx(s.a,{href:"https://tailwindcss.com/docs/using-with-preprocessors#using-sass-less-or-stylus",rel:"nofollow",children:"here"}),"."]}),`
`]})]})}function D(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{D as default};
