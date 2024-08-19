import{R as e,r as c}from"./index-CTjT7uj6.js";import{f as h}from"./index-BySiBzEG.js";import{i as A}from"./isChromatic-VqprqId_.js";import{T as D}from"./Text-D2gQH1xL.js";import{T as L}from"./TextField-C70Pg5K2.js";import{c as d,M as F}from"./controls-11hPvmVr.js";import{I as p}from"./InputEditModal-CPT2Z1ib.js";const v=A(),_=()=>e.createElement(e.Fragment,null,e.createElement(F,null,e.createElement(D,{variant:"body"},"Instructive text to drive user selection goes here.")),e.createElement("form",null,e.createElement(L,{labelText:"Opinion"}))),U={title:"Components/Modals/Input Edit Modal",component:p,args:{isOpen:!1,title:"Your input is valuable",children:e.createElement(_,null),submitLabel:"Submit label",onSubmit:h(),onDismiss:h()},argTypes:{children:{control:{disable:!0}},mood:{control:{disable:!0}}}},m={render:i=>{const[u,n]=c.useState(v),s=()=>n(!0),l=()=>n(!1);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"border border-gray-500",onClick:s},"Open Modal"),e.createElement(p,{...i,isOpen:u,onSubmit:l,onDismiss:l}))}},t={...m,parameters:{docs:{canvas:{sourceState:"shown"}}}},o={...m,...d},r={...m,args:{unpadded:!0},...d},a={...d,args:{title:"Create new link",submitLabel:"Add link"},render:i=>{const[u,n]=c.useState(v),s=c.useRef(null),l=()=>n(!0),f=()=>n(!1);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"border border-gray-500",onClick:l},"Create a link"),e.createElement(p,{...i,isOpen:u,onSubmit:f,onDismiss:f,onAfterEnter:()=>{var b;return(b=s.current)==null?void 0:b.focus()}},e.createElement("form",null,e.createElement(L,{inputRef:s,labelText:"Link URL"}))))},parameters:{docs:{source:{code:`
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
        `}}}};var E,g,O;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...InputModalTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(O=(g=t.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var C,I,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...InputModalTemplate,
  ...chromaticModalSettings
}`,...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var S,T,R;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...InputModalTemplate,
  args: {
    unpadded: true
  },
  ...chromaticModalSettings
}`,...(R=(T=r.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var k,x,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...chromaticModalSettings,
  args: {
    title: "Create new link",
    submitLabel: "Add link"
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(IS_CHROMATIC);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleOpen = (): void => setIsOpen(true);
    const handleClose = (): void => setIsOpen(false);
    return <>
        <button type="button" className="border border-gray-500" onClick={handleOpen}>
          Create a link
        </button>
        <InputEditModal {...args} isOpen={isOpen} onSubmit={handleClose} onDismiss={handleClose} onAfterEnter={() => inputRef.current?.focus()}>
          <form>
            <TextField inputRef={inputRef} labelText="Link URL" />
          </form>
        </InputEditModal>
      </>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
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
        \`
      }
    }
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const w=["Playground","Default","Unpadded","OnAfterEnter"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:o,OnAfterEnter:a,Playground:t,Unpadded:r,__namedExportsOrder:w,default:U},Symbol.toStringTag,{value:"Module"}));export{B as I,a as O,t as P,r as U};
