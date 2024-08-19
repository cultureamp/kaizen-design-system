import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as d,ag as o,aj as c,ak as i}from"./index-UYGUCD_e.js";import{R as h,K as l}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{U as m}from"./EditableRichTextContent.stories-CzFWfaNt.js";import{P as p}from"./RichTextContent.stories-JfbEsUIw.js";import{R as x,P as n,C as j,a as f,A as u,D as g,M as b,I as R,b as E,c as T,V as w}from"./RichTextEditor.stories-CQrxD1Ts.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./defaultContent-Bqdu-y45.js";import"./Label-DlmzItqQ.js";import"./RichTextContent-CcpROJRz.js";import"./useRichTextEditor-BOueCohL.js";import"./validation-C7DrCRoJ.js";import"./VisuallyHidden-CDYjeGzr.js";import"./RichTextEditor-Cch1l_4N.js";import"./IncreaseIndentIcon-pGkYMmfx.js";import"./SVG-7WFwBCn9.js";import"./BoldIcon-BoDzys8O.js";import"./UnderlineIcon-C1wYI3bX.js";import"./ToolbarSection-DJiy3mWF.js";import"./ToggleIconButton-DNSnfJQm.js";import"./index-CdP7-hSn.js";import"./usePopper-D4ykrdaR.js";import"./client-C7R75yIL.js";import"./EditIcon-r0BJhC_f.js";import"./ExternalLinkIcon-D-unubvU.js";import"./RemoveLinkIcon-D9z3k6B4.js";import"./Text-D2gQH1xL.js";import"./Popover-BcT7iVVN.js";import"./Heading-Y5F8SWRW.js";import"./CloseIcon-BAUhi63R.js";import"./CautionIcon-D4m_GXrx.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./SuccessIcon-BInyqVzG.js";import"./LinkModal-DKIlHPDl.js";import"./TextField-C70Pg5K2.js";import"./FieldGroup-Dj6p3DL3.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./InputEditModal-CPT2Z1ib.js";import"./GenericModal-PBdxQDAn.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./defineProperty-C21ZqnLH.js";import"./Trap-DVnrG7EK.js";import"./inheritsLoose-p_S3dtD8.js";import"./ModalAccessibleLabel-DkJ4xCwy.js";import"./IconButton-DH93ECWt.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./ModalFooter-Bn8JBJw7.js";import"./useMediaQueries-C_upvC1L.js";import"./Button-DDkdQqLR.js";import"./InlineNotification-CD7nmnbO.js";import"./GenericNotification-DqRrnmyu.js";import"./SecurityTipIcon-CgXON2WE.js";import"./dummyContent-Bkmcuhf2.js";function a(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:x}),`
`,t.jsx(e.h1,{id:"richtexteditor",children:"RichTextEditor"}),`
`,t.jsx(h,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/RichTextEditor/RichTextEditor",figma:"https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%EF%B8%8F%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9%3A86406&t=P1w10jr2cpPuaayw-1",designGuidelines:"https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896752/Rich+Text+Editor"}),`
`,t.jsx(l,{exportNames:"RichTextEditor"}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:"A text area with additional capabilities for users to format the input text."}),`
`,t.jsx(o,{of:n}),`
`,t.jsx(c,{of:n}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(e.h3,{id:"controls",children:"Controls"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"controls"})," accepts an array of ",t.jsx(e.code,{children:"ToolbarItems"})," that are used to create the ",t.jsx(e.code,{children:"RichTextEditor"})," schema and build out its core functionality. It also offers the ability to group the items in the toolbar."]}),`
`,t.jsx(o,{of:j}),`
`,t.jsxs(e.p,{children:["As the schema is defined by the ",t.jsx(e.code,{children:"controls"}),", removing an item will remove its functionality from the ",t.jsx(e.code,{children:"RichTextEditor"}),"."]}),`
`,t.jsx(o,{of:f}),`
`,t.jsxs(e.p,{children:["With all controls, the Kaizen ",t.jsx(e.code,{children:"RichTextEditor"})," can create and render formatted text, lists, and links."]}),`
`,t.jsx(o,{of:u}),`
`,t.jsx(e.h3,{id:"the-editorcontentarray-and-defaultvalue",children:"The EditorContentArray and defaultValue"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"defaultValue"})," is the initial content of the ",t.jsx(e.code,{children:"RichTextEditor"}),". It accepts an array of objects in the ",t.jsx(e.a,{href:"https://cultureamp.atlassian.net/wiki/spaces/TV/pages/3380543671/ProseMirror+rich+formatted+text+data+format",rel:"nofollow",children:"ProseMirror's rich text format"}),"."]}),`
`,t.jsx(o,{of:g}),`
`,t.jsxs(e.p,{children:["As mentioned in the previous section, the data (",t.jsx(e.code,{children:"EditorContentArray"}),") that is passed to the ",t.jsx(e.code,{children:"defaultValue"})," must be able to map to the ",t.jsx(e.code,{children:"controls"})," provided."]}),`
`,t.jsxs(e.p,{children:["For example: if your ",t.jsx(e.code,{children:"defaultValue"})," contains bolded text, you must pass bold into your ",t.jsx(e.code,{children:"controls"}),"."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{children:`<RichTextEditor
  labelText="Rich text"
  defaultValue={rteData}
  onChange={handleOnChange}
  controls: [
    { name: "bold", group: "inline" },
    {/* other controls */}
  ]
/>
`})}),`
`,t.jsx(e.h3,{id:"data-errors-and-ondataerror",children:"Data errors and onDataError"}),`
`,t.jsxs(e.p,{children:["When content is passed to the ",t.jsx(e.code,{children:"defaultValue"})," that does not match to the ",t.jsx(e.code,{children:"RichTextEditor"}),"'s ",t.jsx(e.a,{href:"https://github.com/cultureamp/kaizen-design-system/blob/main/packages/components/src/RichTextEditor/RichTextEditor/schema.ts",rel:"nofollow",children:"schema"}),", the component will throw and render a generic error."]}),`
`,t.jsx(o,{of:b}),`
`,t.jsxs(e.p,{children:["This will also throw if you have passed in an ",t.jsx(e.code,{children:"EditorContentArray"})," that contains data that cannot map to the ",t.jsx(e.code,{children:"controls"})," provided to the component."]}),`
`,t.jsx(o,{of:R}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"dataError"})," React Node and ",t.jsx(e.code,{children:"onDataError"})," callback also allows you to handle these edge cases without breaking the page."]}),`
`,t.jsx(e.h3,{id:"rows",children:"Rows"}),`
`,t.jsx(e.p,{children:"Sets the minimum height for the editable area of the RichTextEditor."}),`
`,t.jsx(o,{of:E}),`
`,t.jsx(i,{of:T}),`
`,t.jsx(i,{of:w}),`
`,t.jsx(e.h3,{id:"inactive-states-and-read-only-text",children:"Inactive states and read-only text"}),`
`,t.jsxs(e.p,{children:["In addition to the ",t.jsx(e.code,{children:"RichTextEditor"}),", there are two additional Kaizen components that support rendering data in the RTE format."]}),`
`,t.jsx(e.h4,{id:"editablerichtextcontent",children:"EditableRichTextContent"}),`
`,t.jsxs(e.p,{children:["For rendering editable content that can toggle between an active and inactive state we recommend the ",t.jsx(e.a,{href:"/docs/components-richtexteditor-editablerichtextcontent--docs",children:"EditableRichTextContent"}),"."]}),`
`,t.jsx(o,{of:m}),`
`,t.jsx(e.h4,{id:"richtextcontent",children:"RichTextContent"}),`
`,t.jsxs(e.p,{children:["For rendering content as read-only text we recommend using the ",t.jsx(e.a,{href:"/docs/components-richtexteditor-richtextcontent--docs",children:"RichTextContent"}),"."]}),`
`,t.jsx(o,{of:p})]})}function Ht(r={}){const{wrapper:e}={...s(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(a,{...r})}):a(r)}export{Ht as default};
