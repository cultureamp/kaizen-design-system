import{R as e}from"./index-CTjT7uj6.js";import{G as c}from"./GenericModal-PBdxQDAn.js";const i={title:"Components/Modals/Generic Modal",component:c,args:{children:"Example content",isOpen:!1}},n={render:({isOpen:l,...p})=>{const[d,s]=e.useState(l),t=()=>s(!1);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"border border-gray-500",onClick:()=>s(!0)},"Open Modal"),e.createElement(c,{...p,isOpen:d,onOutsideModalClick:t,onEscapeKeyup:t}))},parameters:{docs:{canvas:{sourceState:"shown"}}}};var o,a,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: ({
    isOpen: propsIsOpen,
    ...args
  }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(propsIsOpen);
    const handleDismiss = (): void => setIsOpen(false);
    return <>
        <button type="button" className="border border-gray-500" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        <GenericModal {...args} isOpen={isOpen} onOutsideModalClick={handleDismiss} onEscapeKeyup={handleDismiss} />
      </>;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const u=["Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{b as G,n as P};
