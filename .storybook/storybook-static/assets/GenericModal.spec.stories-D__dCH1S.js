import{R as t}from"./index-CTjT7uj6.js";import{a as g}from"./chunk-454WOBUV-CM0pFb8Z.js";import{w as r,u as i,a as p,e as d}from"./index-BySiBzEG.js";import{G as A}from"./GenericModal-PBdxQDAn.js";import{M as B,a as h,b as k}from"./ModalAccessibleLabel-DkJ4xCwy.js";import"./v4-CQkTLCs1.js";import"./index-DZLKizrv.js";import"./index-9r8iugjR.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./defineProperty-C21ZqnLH.js";import"./Trap-DVnrG7EK.js";import"./inheritsLoose-p_S3dtD8.js";import"./tslib.es6-CY32MZYl.js";import"./CloseIcon-BAUhi63R.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./IconButton-DH93ECWt.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";const ee={title:"Components/Modals/Generic Modal/Tests",component:A},s={render:({isOpen:n,...e})=>{const[o,a]=t.useState(n),m=()=>a(!1);return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",className:"border border-gray-500",onClick:()=>a(!0)},"Open Modal"),t.createElement(A,{...e,isOpen:o,onOutsideModalClick:m,onEscapeKeyup:m,id:"GenericModalTestId"},t.createElement(B,null,t.createElement(h,null,"Test Modal")),t.createElement(k,null,t.createElement("form",null,t.createElement("label",{htmlFor:"modal-input-play-test"},"Add link"),t.createElement("input",{type:"text",id:"modal-input-play-test"})))))},play:async({canvasElement:n,step:e})=>{const{getByRole:o}=r(n),a=o("button",{name:"Open Modal"});await e("Open modal",async()=>{await i.click(a)}),await e("Default focus is shifted to the Accessible title",async()=>{await p(()=>{d(document.activeElement).toHaveTextContent("Test Modal")})})}},l={...s,name:"ModalAccessibleLabel retains focus if onAfterEnter is called",args:{onAfterEnter:()=>g("openCallBack")},play:async({canvasElement:n,step:e})=>{const{getByRole:o}=r(n),a=o("button",{name:"Open Modal"});await e("Open modal",async()=>{await i.click(a)}),await e("Accessible title still has focus",async()=>{await p(()=>{d(document.activeElement).toHaveTextContent("Test Modal")})})}},c={...s,args:{onAfterEnter:()=>{var n;return(n=document.getElementById("modal-input-play-test"))==null?void 0:n.focus()}},name:"onAfterEnter can shift focus to internal elements of the modal",play:async({canvasElement:n,step:e})=>{const a=r(n).getByRole("button",{name:"Open Modal"});await e("Open modal",async()=>{await i.click(a)}),await e("Expect activeElement to be the Input",async()=>{await p(()=>{d(document.activeElement).toHaveAccessibleName("Add link")})}),await e("Expect to be able to type without shifting focus",async()=>{await i.keyboard("All lorem and no ipsum make dolar a dull boy...")})}};var u,y,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <GenericModal {...args} isOpen={isOpen} onOutsideModalClick={handleDismiss} onEscapeKeyup={handleDismiss} id="GenericModalTestId">
          <ModalHeader>
            <ModalAccessibleLabel>Test Modal</ModalAccessibleLabel>
          </ModalHeader>
          <ModalBody>
            <form>
              <label htmlFor="modal-input-play-test">Add link</label>
              <input type="text" id="modal-input-play-test" />
            </form>
          </ModalBody>
        </GenericModal>
      </>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      getByRole
    } = within(canvasElement);
    const openModalButton = getByRole("button", {
      name: "Open Modal"
    });
    await step("Open modal", async () => {
      await userEvent.click(openModalButton);
    });
    await step("Default focus is shifted to the Accessible title", async () => {
      await waitFor(() => {
        // document has to be use as Modal will append to document body
        expect(document.activeElement).toHaveTextContent("Test Modal");
      });
    });
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var E,M,f;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...TestBase,
  name: "ModalAccessibleLabel retains focus if onAfterEnter is called",
  args: {
    onAfterEnter: () => action("openCallBack")
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      getByRole
    } = within(canvasElement);
    const openModalButton = getByRole("button", {
      name: "Open Modal"
    });
    await step("Open modal", async () => {
      await userEvent.click(openModalButton);
    });
    await step("Accessible title still has focus", async () => {
      await waitFor(() => {
        expect(document.activeElement).toHaveTextContent("Test Modal");
      });
    });
  }
}`,...(f=(M=l.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var w,O,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...TestBase,
  args: {
    onAfterEnter: () => document.getElementById("modal-input-play-test")?.focus()
  },
  name: "onAfterEnter can shift focus to internal elements of the modal",
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const openModalButton = canvas.getByRole("button", {
      name: "Open Modal"
    });
    await step("Open modal", async () => {
      await userEvent.click(openModalButton);
    });
    await step("Expect activeElement to be the Input", async () => {
      await waitFor(() => {
        expect(document.activeElement).toHaveAccessibleName("Add link");
      });
    });
    await step("Expect to be able to type without shifting focus", async () => {
      await userEvent.keyboard("All lorem and no ipsum make dolar a dull boy...");
    });
  }
}`,...(v=(O=c.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const te=["TestBase","ModalAccessibleLabelRetainsFocus","TriggerOnAfterEnterFocus"];export{l as ModalAccessibleLabelRetainsFocus,s as TestBase,c as TriggerOnAfterEnterFocus,te as __namedExportsOrder,ee as default};
