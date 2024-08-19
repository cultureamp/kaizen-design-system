import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as c}from"./index-DSkyVWTJ.js";import{ae as m,ag as d,aj as h}from"./index-UYGUCD_e.js";import{S as s,R as u,I as x,D as t,a as i}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{ItemsDo as r,ItemsDont as p,SelectionDont as j,LabelChevronDo as f,LabelChevronDont as g,LabelDo as b,LabelDont as v,IconsDont as w,MenuItemLabelsDont as y,SentenceCaseDo as D,SentenceCaseDont as M,ElipsesDo as N,ElipsesDont as C}from"./Menu.docs.stories-DSXwpLpq.js";import{Playground as l}from"./Menu.stories-8x3zDJ2y.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./isChromatic-VqprqId_.js";import"./MenuTrigger-oL7_XjDj.js";import"./mergeClassNames-DEvgSslo.js";import"./Button-AbBbn7Lr.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./usePress-nudZ2Xgz.js";import"./useButton-CDp2hby9.js";import"./useFocusWithin-C7oArVkD.js";import"./useHover-Bq751pFs.js";import"./OverlayArrow-5tjFEuMh.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useControlledState-CEg4Rl-x.js";import"./context-AGV5_Mtb.js";import"./SelectionManager-yuMfDyd5.js";import"./useCollator-DHdgfgeP.js";import"./getScrollParent-DhLua4dp.js";import"./useMenuTriggerState-D_-PdoOj.js";import"./BookmarkOffIcon-BX3ccxEA.js";import"./SVG-7WFwBCn9.js";import"./CheckIcon-BwUvLWmE.js";import"./ChevronDownIcon-prLLyjG_.js";import"./EditIcon-r0BJhC_f.js";import"./MeatballsIcon-w9tBPyZh.js";import"./TrashIcon-4srkHYK2.js";import"./Menu.spec.stories-CFHmenuO.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./CautionIcon-D4m_GXrx.js";import"./ExternalLinkIcon-D-unubvU.js";function a(o){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Actions/Menu/v3/Usage Guidelines"}),`
`,e.jsxs(s,{children:[e.jsx(n.h1,{id:"menu-v3",children:"Menu (v3)"}),e.jsx(n.p,{children:"Updated July 6, 2024"})]}),`
`,e.jsx(u,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/__actions__/Menu",figma:"https://www.figma.com/design/eZKEE5kXbEMY3lx84oz8iN/%F0%9F%92%9C-Heart-UI-Kit?m=auto&node-id=6262-0&t=I4H23jCrCJz4O2nf-1",ariaComponentPage:"https://react-spectrum.adobe.com/react-aria/Menu.html",apiSpecification:"/?path=/docs/actions-menu-v3-api-specification--docs"}),`
`,e.jsxs(s,{children:[e.jsx(x,{installCommand:"pnpm add @kaizen/components",importStatement:'import { MenuTrigger, Menu, MenuItem } from "@kaizen/components/v3/actions"'}),e.jsx(n.h2,{id:"overview",children:"Overview"}),e.jsx(n.p,{children:"A menu displays a list of actions in a popover, toggled opened with a button."})]}),`
`,e.jsx(d,{of:l,source:{code:`
<TooltipTrigger>
  <Button>
    <MeatballsIcon role="img" aria-label="Additional actions" />
  </Button>
  <Popover>
    <Menu>
      <MenuItem>Save</MenuItem>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  </Popover>
</TooltipTrigger>
  `}}),`
`,e.jsx(h,{of:l,include:["placement","isOpen"],className:"mb-64"}),`
`,e.jsxs(s,{className:"mb-64",children:[e.jsx(n.h3,{id:"anatomy",children:"Anatomy"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A Menu is made up of:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A trigger button"}),`
`,e.jsx(n.li,{children:"A popover"}),`
`,e.jsx(n.li,{children:"A list of menu items"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Menu items may be organised into sections, with a heading for each section."}),`
`,e.jsx(n.li,{children:"The menu trigger button, which may be any variation of a button."}),`
`]})]}),`
`,e.jsxs(s,{className:"mb-64",children:[e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When you have a group of related actions for a page or item on the page."}),`
`,e.jsxs(n.li,{children:["The actions either:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Cause an action on the page (e.g. delete), or"}),`
`,e.jsx(n.li,{children:"Navigate somewhere"}),`
`]}),`
`]}),`
`]})]}),`
`,e.jsxs(s,{className:"mb-64",children:[e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When you want to persist a user selection.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use a Select/Multi-Select or Combobox/Multi-Combobox component instead."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["When you want additional elements beyond a list of menu items (e.g. a search input)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use a Modal, or construct your own pattern with a Popover."}),`
`,e.jsx(n.li,{children:"It's recommended that you avoid this because of the complexity it adds for accessibility."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Inside a navigation bar",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Different DOM elements and behaviour is required for a dropdown menu in a navigation bar."}),`
`]}),`
`]}),`
`]})]}),`
`,e.jsx("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(s,{children:[e.jsx(n.h4,{id:"do-use-a-menu-for-an-overflow-of-actions",children:"Do use a menu for an overflow of actions"}),e.jsx(n.p,{children:"Menus work well as an overflow for a list of actions on a page or section. Try to avoid using menus for a single action, favouring an inline button/link instead."})]}),e.jsxs(t,{children:[e.jsx(i,{story:r}),e.jsx(i,{story:p,isDont:!0})]})]})}),`
`,e.jsx("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(s,{children:[e.jsx(n.h4,{id:"dont-use-menus-to-persist-a-user-selection",children:"Don't use Menus to persist a user selection"}),e.jsx(n.p,{children:"Menus are not intended for a list of options where a user selection persists. Use a Select/Multi-Select or Combobox/Multi-Combobox component instead."})]}),e.jsx(t,{children:e.jsx(i,{story:j,isDont:!0})})]})}),`
`,e.jsx("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(s,{children:[e.jsx(n.h4,{id:"do-use-a-chevron-icon-when-using-a-text-label",children:"Do use a chevron icon when using a text label"}),e.jsx(n.p,{children:"Providing this icon is an important part of visually communicating that the button triggers a menu."})]}),e.jsxs(t,{children:[e.jsx(i,{story:f}),e.jsx(i,{story:g,isDont:!0})]})]})}),`
`,e.jsx("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(s,{children:[e.jsx(n.h4,{id:"do-give-the-trigger-button-a-concise-and-unique-label",children:"Do give the trigger button a concise and unique label"}),e.jsx(n.p,{children:"The label of the trigger button will be important for screen reader users to understand the purpose of the menu."}),e.jsx(n.p,{children:"Menu button labels are often too generic and need context added. E.g. a label of “Actions” is too generic if you have multiple menus on a single page."}),e.jsx(n.p,{children:"Avoid using the words “Open/close” or  “Menu” in the label, both of these things are communicated to screen reader users already with ARIA properties."}),e.jsx(n.p,{children:"The following examples show you the verbose labels. In practice you will either want to use visually hidden text (when using a text-based trigger button), or an aria-label (when using an icon-based trigger button) to create the label."})]}),e.jsxs(t,{children:[e.jsx(i,{story:b}),e.jsx(i,{story:v,isDont:!0})]})]})}),`
`,e.jsx("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(s,{children:[e.jsx(n.h4,{id:"do-use-icons-in-menu-items-for-common-actions",children:"Do use icons in menu items for common actions"}),e.jsx(n.p,{children:"Icons beside items make sense for common actions (pencil for edit, trash can for delete, etc)."}),e.jsx(n.p,{children:"Avoid using icons when:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The action is unique and doesn't have a commonly known icon associated."}),`
`,e.jsx(n.li,{children:"Not all menu items will have an icon"}),`
`,e.jsx(n.li,{children:"You will have duplicates of icons in the list"}),`
`]})]}),e.jsxs(t,{children:[e.jsx(i,{story:r}),e.jsx(i,{story:w,isDont:!0})]})]})}),`
`,e.jsx("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(s,{children:[e.jsx(n.h4,{id:"dont-repeat-the-same-word-in-the-menu-item-labels",children:"Don't repeat the same word in the menu item labels"}),e.jsx(n.p,{children:"Context may be useful in some cases, but avoid adding context if it will be repeated in every menu item label."})]}),e.jsx(t,{children:e.jsx(i,{story:y,isDont:!0})})]})}),`
`,e.jsx("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(s,{children:[e.jsx(n.h4,{id:"do-use-sentence-case-for-menu-items",children:"Do use sentence case for menu items"}),e.jsx(n.p,{children:"Write menu items in sentence case unless they contain words that are branded terms."})]}),e.jsxs(t,{children:[e.jsx(i,{story:D}),e.jsx(i,{story:M,isDont:!0})]})]})}),`
`,e.jsx("div",{className:"flex flex-col mt-16 gap-40 mb-64",children:e.jsxs("div",{className:"flex flex-col m-0 gap-16",children:[e.jsxs(s,{children:[e.jsx(n.h4,{id:"dont-use-elipses-in-menu-items",children:"Don't use elipses in menu items"}),e.jsx(n.p,{children:"Avoid using ellipses (…) in menu item names within products whenever possible. An ellipsis often implies that the action for a menu item will open in a new view, or that a user will be taken elsewhere."})]}),e.jsxs(t,{children:[e.jsx(i,{story:N}),e.jsx(i,{story:C,isDont:!0})]})]})})]})}function Ne(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{Ne as default};
