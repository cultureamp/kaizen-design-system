import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as a,ag as t,am as l}from"./index-UYGUCD_e.js";import{R as c,K as p}from"./DoesAndDonts-BKQOirz7.js";import"./LinkTo-CCLy3Ahi.js";import"./index-CTjT7uj6.js";import{W as m,P as n,C as d}from"./Workflow.stories-OwwJv3iv.js";import{F as h,L as f,A as u}from"./WorkflowFooter.stories-BQjTR_A6.js";import{M as w,P as x}from"./WorkflowHeader.stories-B9onmsd0.js";import{I as j}from"./InlineNotification-CD7nmnbO.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./index-9r8iugjR.js";import"./index-D-8MO0q_.js";import"./_getPrototype-pu5AwQxR.js";import"./index-DrFu-skq.js";import"./index-CCQ3W5xA.js";import"./InlineNotification-DPK6p_Of.js";import"./tslib.es6-CY32MZYl.js";import"./GenericNotification-BhHHhCD8.js";import"./Heading-hQmlkvcj.js";import"./Text-DAOK2_W2.js";import"./CloseIcon-BAUhi63R.js";import"./SVG-7WFwBCn9.js";import"./VisibleIcon-DY6IPv8A.js";import"./TextField-C70Pg5K2.js";import"./SuccessIcon-BInyqVzG.js";import"./Label-DlmzItqQ.js";import"./FieldGroup-Dj6p3DL3.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Text-D2gQH1xL.js";import"./controls-CznYIIA9.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./Workflow-Qfyau5Sn.js";import"./Brand-AVBZ6FJc.js";import"./hostedAssets-CVq9d3MW.js";import"./Heading-Y5F8SWRW.js";import"./Tag-B8l7-tRz.js";import"./CautionIcon-D4m_GXrx.js";import"./ClearIcon-BcQoGkgT.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./LiveIcon-CIjqi5i9.js";import"./Tag.module-fH2-Bd0x.js";import"./Avatar-BrPd9Rrx.js";import"./index-BRV0Se7Z.js";import"./UserIcon-CFY4To9K.js";import"./IndicatorInactiveIcon-BBEodmEn.js";import"./GenericNotification-DqRrnmyu.js";import"./SecurityTipIcon-CgXON2WE.js";function i(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(o.h1,{id:"workflow",children:"Workflow"}),`
`,e.jsx(c,{sourceCode:"https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Workflow"}),`
`,e.jsx(j,{type:"negative",persistent:!0,children:`This version of the Workflow is deprecated and will be removed in the next major release.
  Import from "@kaizen/components/future" for the latest version.`}),`
`,e.jsx(p,{exportNames:"Workflow"}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(o.p,{children:"This is a page template component containing the header, footer, and main landmarks that compose a Workflow page. Its purpose is to guide a customer through a multi-step form to create a Workflow."}),`
`,e.jsxs(o.p,{children:["The Worflow is intended as a page wrapper and sets a minimum height of ",e.jsx(o.code,{children:"100vh"})," with a sticky ",e.jsx(o.code,{children:"Header"})," component. The ",e.jsx(o.code,{children:"Children"})," will be wrapped in an unstyled main landmark to provide flexibility for inner content layouts."]}),`
`,e.jsxs(o.p,{children:["To ensure at readability at 400% zoom (See WCAG's ",e.jsx(o.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html",rel:"nofollow",children:"Reflow criteria"}),") this component will collapse to a vertical layout on smaller screen sizes and remove ",e.jsx(o.code,{children:"sticky"})," positioning to maximise screen real estate. You can see an example in ",e.jsx(o.a,{href:"/story/pages-workflow-components-workflow--responsive-workflow",children:"the responsive workflow story"}),"."]}),`
`,e.jsx(t,{layout:"fullscreen",of:n}),`
`,e.jsx(o.h2,{id:"header-actions",children:"Header actions"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"headerActions"})," prop  takes array of JSX elements that will render in the top right of the ",e.jsx(o.code,{children:"Header"})," component."]}),`
`,e.jsxs(o.p,{children:["While the number of JSX elements is not limited, is important to consider the real estate in the ",e.jsx(o.code,{children:"Header"})," and how larger strings or components may be rendered on smaller screen sizes."]}),`
`,e.jsx(t,{layout:"fullscreen",of:w,source:{code:`<Workflow
    headerActions={[
      <Button
        key="would-use-uui-1"
        label="Preview"
        icon={VisibleIcon}
        secondary
        iconPosition="start"
      />,
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={CloseIcon}
        secondary
        iconPosition="end"
      />
    ]}
    {...otherProps}
  >
    <MockContent />
  </Workflow>`}}),`
`,e.jsx(o.h2,{id:"handling-a-workflow-exit",children:"Handling a Workflow exit"}),`
`,e.jsxs(o.p,{children:["A common pattern identified is a Workflow Exit button. An implementation of this component should be passed to the ",e.jsx(o.code,{children:"headerActions"})," an array to handle a user leaving a Workflow. We've provided an example below that combines a Kaizen ",e.jsx(o.code,{children:"Button"})," with the ",e.jsx(o.code,{children:"ConfirmationModal"})," component."]}),`
`,e.jsx(t,{layout:"fullscreen",of:x,source:{code:`
  const [showModal, setShowModal] = useState<boolean>(false)
  ...
  return (
    <>
      <Button
        label={exitLabel}
        icon={closeIcon}
        iconPosition="end"
        secondary
        onClick={() => setShowModal(true)}
      />
      <ConfirmationModal
        isOpen={showModal}
        mood={mood}
        isProminent={true}
        title={exitTitle}
        confirmLabel={confirmExitLabel}
        dismissLabel={dismissExitLabel}
        onConfirm={onConfirmExitCallback}
        onDismiss={() => {
          setShowModal(false)
        }}
      >
        <div>
          <Text variant="body">{exitDescription}</Text>
        </div>
      </ConfirmationModal>
    </>
  )`}}),`
`,e.jsx(o.h2,{id:"tracking-progress",children:"Tracking progress"}),`
`,e.jsxs(o.p,{children:["The Footer tracks the progress of the form by comparing the current step, indicated by ",e.jsx(o.code,{children:"stepName"}),", against its position in the ",e.jsx(o.code,{children:"steps"})," array."]}),`
`,e.jsx(t,{layout:"fullscreen",of:h,source:{code:`<Workflow
    stepName="Setting"
    steps={[
      'Settings',
      'Questions',
      'Preview',
      'Employees',
      'Schedule'
    ]}
    {...otherProps}
  >
    <MockContent />
  </Workflow>`}}),`
`,e.jsxs(o.p,{children:["The Footer is agnostic to the JSX elements that are used in the ",e.jsx(o.code,{children:"previousAction"})," and ",e.jsx(o.code,{children:"nextAction"}),". While we recommend using the Kaizen Button, a button-like component can be used in its place to satisfy project-specific requirements."]}),`
`,e.jsxs(o.p,{children:["To hide, disable or change the appearance of the Footer buttons you can leverage the props available for the ",e.jsx(o.code,{children:"@kaizen/button"})," or pass in undefined to not render the component."]}),`
`,e.jsx(t,{layout:"fullscreen",of:f,source:{code:`<Workflow
    nextAction={<Button disabled label="Finish" primary reversed/>}
    previousAction={<Button label="Back" reversed/>}
    {...otherProps}
  >
    <MockContent />
  </Workflow>`}}),`
`,e.jsxs(o.p,{children:["In Instances where users are returning to a completed workflow you can pass the ",e.jsx(o.code,{children:"isComplete"}),' prop to set the indicators to their "complete" status. This will also be reflected in their Aria title.']}),`
`,e.jsx(t,{layout:"fullscreen",of:u,source:{code:`<Workflow
    isComplete
    {...otherProps}
  >
    <MockContent />
  </Workflow>`}}),`
`,e.jsx(o.h2,{id:"composable-worflow",children:"Composable Worflow"}),`
`,e.jsx(o.p,{children:"While we do not advise this path, a composable Workflow may be created if required. Refer to the component's stories on how to consume each subcomponent."}),`
`,e.jsx(t,{layout:"fullscreen",of:d}),`
`,e.jsx(o.h2,{id:"worflow-api-at-a-glance",children:"Worflow API at a glance"}),`
`,e.jsx(l,{of:n})]})}function Me(r={}){const{wrapper:o}={...s(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{Me as default};
