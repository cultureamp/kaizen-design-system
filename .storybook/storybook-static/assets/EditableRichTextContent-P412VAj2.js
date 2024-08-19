import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as m}from"./index-DSkyVWTJ.js";import{ae as s,ag as i,aj as p}from"./index-UYGUCD_e.js";import{R as a,K as c}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{E as d,P as r,U as h}from"./EditableRichTextContent.stories-CzFWfaNt.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./defaultContent-Bqdu-y45.js";import"./Label-DlmzItqQ.js";import"./RichTextContent-CcpROJRz.js";import"./useRichTextEditor-BOueCohL.js";import"./validation-C7DrCRoJ.js";import"./VisuallyHidden-CDYjeGzr.js";import"./RichTextEditor-Cch1l_4N.js";import"./IncreaseIndentIcon-pGkYMmfx.js";import"./SVG-7WFwBCn9.js";import"./BoldIcon-BoDzys8O.js";import"./UnderlineIcon-C1wYI3bX.js";import"./ToolbarSection-DJiy3mWF.js";import"./ToggleIconButton-DNSnfJQm.js";import"./index-CdP7-hSn.js";import"./usePopper-D4ykrdaR.js";import"./client-C7R75yIL.js";import"./EditIcon-r0BJhC_f.js";import"./ExternalLinkIcon-D-unubvU.js";import"./RemoveLinkIcon-D9z3k6B4.js";import"./Text-D2gQH1xL.js";import"./Popover-BcT7iVVN.js";import"./Heading-Y5F8SWRW.js";import"./CloseIcon-BAUhi63R.js";import"./CautionIcon-D4m_GXrx.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./SuccessIcon-BInyqVzG.js";import"./LinkModal-DKIlHPDl.js";import"./TextField-C70Pg5K2.js";import"./FieldGroup-Dj6p3DL3.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./InputEditModal-CPT2Z1ib.js";import"./GenericModal-PBdxQDAn.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./defineProperty-C21ZqnLH.js";import"./Trap-DVnrG7EK.js";import"./inheritsLoose-p_S3dtD8.js";import"./ModalAccessibleLabel-DkJ4xCwy.js";import"./IconButton-DH93ECWt.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./ModalFooter-Bn8JBJw7.js";import"./useMediaQueries-C_upvC1L.js";import"./Button-DDkdQqLR.js";import"./InlineNotification-CD7nmnbO.js";import"./GenericNotification-DqRrnmyu.js";import"./SecurityTipIcon-CgXON2WE.js";function n(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
`,t.jsx(o.h1,{id:"editablerichtextcontent",children:"EditableRichTextContent"}),`
`,t.jsx(a,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/RichTextEditor/EditableRichTextContent"}),`
`,t.jsx(c,{exportNames:"EditableRichTextContent"}),`
`,t.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,t.jsxs(o.p,{children:["To render the contents of your ",t.jsx(o.a,{href:"/docs/components-richtexteditor-richtexteditor--docs",children:"RichTextEditor"})," using the same structure for both components."]}),`
`,t.jsx(i,{of:r}),`
`,t.jsx(p,{of:r}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"EditableRichTextContent"})," indicates interactivity similar to a ",t.jsx(o.code,{children:"text"})," or ",t.jsx(o.code,{children:"textarea"})," input and should be used in combination with the ",t.jsx(o.a,{href:"/docs/components-richtexteditor-richtexteditor--docs",children:"RichTextEditor"})," to toggle between inactive and editable states."]}),`
`,t.jsxs(o.p,{children:["This differs from the ",t.jsx(o.a,{href:"/docs/components-richtexteditor-richtextcontent--docs",children:"RichTextContent"})," component, which is used to render ",t.jsx(o.code,{children:"RichTextEditor"})," content as read-only text."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`const [editMode, setEditMode] = useState<boolean>(false);
const [rteData, setRTEData] = useState<EditorContentArray>([]);

const handleOnChange: RichTextEditorProps["onChange"] = editorState =>
  setRTEData(editorState.toJSON().doc.content)

if (editMode) {
  return (
    <>
      <RichTextEditor defaultValue={rteData} onChange={handleOnChange} />
      <Button label="Save" primary onClick={() => setEditMode(false)} />
    </>
  )
}

return (
  <EditableRichTextContent content={rteData} onClick={() => setEditMode(true)} />
)
`})}),`
`,t.jsx(i,{of:h})]})}function At(e={}){const{wrapper:o}={...m(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}export{At as default};
