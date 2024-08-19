import{f as o,u as a,a as p,e as s}from"./index-BySiBzEG.js";import{L as n}from"./LinkModal-DKIlHPDl.js";import"./index-DZLKizrv.js";import"./index-CTjT7uj6.js";import"./TextField-C70Pg5K2.js";import"./index-CCQ3W5xA.js";import"./SuccessIcon-BInyqVzG.js";import"./SVG-7WFwBCn9.js";import"./Label-DlmzItqQ.js";import"./FieldGroup-Dj6p3DL3.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Text-D2gQH1xL.js";import"./validation-C7DrCRoJ.js";import"./InputEditModal-CPT2Z1ib.js";import"./Heading-Y5F8SWRW.js";import"./GenericModal-PBdxQDAn.js";import"./index-9r8iugjR.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./defineProperty-C21ZqnLH.js";import"./Trap-DVnrG7EK.js";import"./inheritsLoose-p_S3dtD8.js";import"./tslib.es6-CY32MZYl.js";import"./ModalAccessibleLabel-DkJ4xCwy.js";import"./CloseIcon-BAUhi63R.js";import"./IconButton-DH93ECWt.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./ModalFooter-Bn8JBJw7.js";import"./useMediaQueries-C_upvC1L.js";import"./Button-DDkdQqLR.js";const X={title:"Components/RichTextEditor/Subcomponents/LinkModal/Tests",component:n,args:{onSubmit:o(),onDismiss:o(),onAfterLeave:o(),isOpen:!0}},t={parameters:{chromatic:{disable:!1}},args:{defaultHref:"google.com"},play:async()=>{await new Promise(m=>setTimeout(m,500)),await a.keyboard("{Tab}{Enter}"),await p(()=>{s(document.activeElement).toHaveAccessibleDescription(/Empty or invalid link\. Links must start with http or https/)})}};var r,i,e;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    }
  },
  args: {
    defaultHref: "google.com"
  },
  play: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    await userEvent.keyboard("{Tab}{Enter}");
    await waitFor(() => {
      expect(document.activeElement).toHaveAccessibleDescription(/Empty or invalid link\\. Links must start with http or https/);
    });
  }
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const Y=["InvalidLink"];export{t as InvalidLink,Y as __namedExportsOrder,X as default};
