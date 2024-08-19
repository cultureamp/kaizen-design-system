import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as i,ag as s}from"./index-UYGUCD_e.js";import{R as p,K as a}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{T as c,P as m}from"./TitleBlockZen.stories-QYKlDeSS.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./AddIcon-C6V_KfCs.js";import"./SVG-7WFwBCn9.js";import"./StarOnIcon-BgZ_JTEb.js";import"./hostedAssets-CVq9d3MW.js";import"./StickerSheet-DpoO9nWV.js";import"./NavigationTabs-DzWSRfH9.js";import"./Heading-Y5F8SWRW.js";import"./ArrowRightIcon-CtsqbiFB.js";import"./useMediaQueries-C_upvC1L.js";import"./ChevronDownIcon-prLLyjG_.js";import"./MeatballsIcon-w9tBPyZh.js";import"./MenuItem-PF-eSNqW.js";import"./usePopper-D4ykrdaR.js";import"./Combination-DFaMps7A.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./IconButton-DH93ECWt.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./MenuHeading-SHzvnKfl.js";import"./Select-MdlLELGr.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./assertThisInitialized-B9jnkVVz.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./floating-ui.dom-BvchAiLZ.js";import"./ClearIcon-BcQoGkgT.js";import"./Label-DlmzItqQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Text-D2gQH1xL.js";import"./Tag-B8l7-tRz.js";import"./CautionIcon-D4m_GXrx.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./LiveIcon-CIjqi5i9.js";import"./SuccessIcon-BInyqVzG.js";import"./Tag.module-fH2-Bd0x.js";import"./Avatar-BrPd9Rrx.js";import"./index-BRV0Se7Z.js";import"./UserIcon-CFY4To9K.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(t.h1,{id:"titleblockzen",children:"TitleBlockZen"}),`
`,e.jsx(p,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/TitleBlockZen",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075605782/Title+Block"}),`
`,e.jsx(a,{exportNames:"TitleBlockZen"}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h2,{id:"primaryaction",children:"primaryAction"}),`
`,e.jsx(t.p,{children:`The primary action (the "main" button in the top right) can either be a Button,
or a Button that reveals a Menu (a menu button).`}),`
`,e.jsxs(t.p,{children:["If you want it to be a Button, you can't pass in a ",e.jsx(t.code,{children:"<Button />"}),`, because the Title Block needs to grab the Button's
props and use them to render the mobile actions drawer as well as the Button itself. Instead, you have to pass
in the Button's props as an object, and there must be a `,e.jsx(t.code,{children:"primary"})," property set to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`type PrimaryActionProps =
 | MenuGroup
 | (TitleBlockButtonProps & { primary: true });
`})}),`
`,e.jsxs(t.p,{children:["If you want it to be a Menu, pass in this object of type ",e.jsx(t.code,{children:"MenuGroup"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`{
  label: string
  menuItems: MenuItemProps[]
}
`})}),`
`,e.jsxs(t.p,{children:["Using the ",e.jsx(t.code,{children:"label"}),", the Title Block will render a Button with a chevron icon and your ",e.jsx(t.code,{children:"menuItems"}),` will appear
in the dropdown menu when you click it. (`,e.jsx(t.code,{children:"MenuItemProps"})," is a type imported from the ",e.jsx(t.code,{children:"Menu"})," component.)"]}),`
`,e.jsx(t.h2,{id:"secondaryactions--secondaryoverflowmenuitems",children:"secondaryActions & secondaryOverflowMenuItems"}),`
`,e.jsx(t.p,{children:"Secondary Actions sit below the Primary Actions, and consist of"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"actions/links (just a button),"}),`
`,e.jsx(t.li,{children:"menus (a menu button), and"}),`
`,e.jsx(t.li,{children:'the overflow menu (a menu button with a "meatballs" icon).'}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"IMPORTANT:"})," The visual order of these from left to right should always be:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-text",children:`buttons (far left) -> menu buttons -> overflow menu (far right)
`})}),`
`,e.jsxs(t.p,{children:["The overflow menu has a separate prop that accepts an array of ",e.jsx(t.code,{children:"MenuItemProps"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`secondaryOverflowMenuItems?: MenuItemProps[]
`})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"secondaryActions"})," prop accepts an ",e.jsx(t.strong,{children:"array"}),` of objects.
Each object can be a MenuGroup (see code snippet for `,e.jsx(t.code,{children:"primaryAction"})," above) or an object containing Button props:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`type SecondaryActionsProps = Array<MenuGroup | TitleBlockButtonProps>;
`})}),`
`,e.jsx(t.p,{children:`The order of elements in the array will determine the visual order on the page, so
please be aware of the intended order mentioned above.`})]})}function Ie(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{Ie as default};
