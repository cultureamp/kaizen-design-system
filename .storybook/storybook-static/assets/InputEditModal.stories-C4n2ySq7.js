import{R as e,r as a}from"./index-CTjT7uj6.js";import{f as u}from"./index-BySiBzEG.js";import{i as b}from"./isChromatic-VqprqId_.js";import{T as E}from"./Text-D2gQH1xL.js";import{T as d}from"./TextField-C70Pg5K2.js";import{c as l,M as h}from"./controls-11hPvmVr.js";import{I as s}from"./InputEditModal-CPT2Z1ib.js";import"./index-DZLKizrv.js";import"./index-CCQ3W5xA.js";import"./SuccessIcon-BInyqVzG.js";import"./SVG-7WFwBCn9.js";import"./Label-DlmzItqQ.js";import"./FieldGroup-Dj6p3DL3.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./GenericModal-PBdxQDAn.js";import"./index-9r8iugjR.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./defineProperty-C21ZqnLH.js";import"./Trap-DVnrG7EK.js";import"./inheritsLoose-p_S3dtD8.js";import"./tslib.es6-CY32MZYl.js";import"./Heading-Y5F8SWRW.js";import"./ModalAccessibleLabel-DkJ4xCwy.js";import"./CloseIcon-BAUhi63R.js";import"./IconButton-DH93ECWt.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./ModalFooter-Bn8JBJw7.js";import"./useMediaQueries-C_upvC1L.js";import"./Button-DDkdQqLR.js";const f=b(),O=()=>e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(E,{variant:"body"},"Instructive text to drive user selection goes here.")),e.createElement("form",null,e.createElement(d,{labelText:"Opinion"}))),ie={title:"Components/Modals/Input Edit Modal",component:s,args:{isOpen:!1,title:"Your input is valuable",children:e.createElement(O,null),submitLabel:"Submit label",onSubmit:u(),onDismiss:u()},argTypes:{children:{control:{disable:!0}},mood:{control:{disable:!0}}}},m={render:n=>{const[i,t]=a.useState(f),o=()=>t(!0),r=()=>t(!1);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"border border-gray-500",onClick:o},"Open Modal"),e.createElement(s,{...n,isOpen:i,onSubmit:r,onDismiss:r}))}},ae={...m,parameters:{docs:{canvas:{sourceState:"shown"}}}},le={...m,...l},se={...m,args:{unpadded:!0},...l},me={...l,args:{title:"Create new link",submitLabel:"Add link"},render:n=>{const[i,t]=a.useState(f),o=a.useRef(null),r=()=>t(!0),p=()=>t(!1);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"border border-gray-500",onClick:r},"Create a link"),e.createElement(s,{...n,isOpen:i,onSubmit:p,onDismiss:p,onAfterEnter:()=>{var c;return(c=o.current)==null?void 0:c.focus()}},e.createElement("form",null,e.createElement(d,{inputRef:o,labelText:"Link URL"}))))},parameters:{docs:{source:{code:`
        // The label of the button and the input it is focused to may provide enough context.
        <button
          onClick={handleOpen}
        >
          Create a link
        </button>
        <InputEditModal
          {...args}
          isOpen={isOpen}
          onSubmit={handleClose}
          onDismiss={handleClose}
          onAfterEnter={() => inputRef.current?.focus()}
        >
          <form>
            <TextField inputRef={inputRef} labelText="Link URL" />
          </form>
        </InputEditModal>
        `}}}},pe=["Playground","Default","Unpadded","OnAfterEnter"];export{le as Default,me as OnAfterEnter,ae as Playground,se as Unpadded,pe as __namedExportsOrder,ie as default};
