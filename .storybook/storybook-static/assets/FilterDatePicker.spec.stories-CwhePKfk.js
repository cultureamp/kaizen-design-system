import{r as m,R as n}from"./index-CTjT7uj6.js";import{w as E,u as r,e as w}from"./index-BySiBzEG.js";import{F as d}from"./FilterDatePicker-Bh5QQ4BN.js";import{F as c}from"./FilterButton-BGzpTfmP.js";import"./index-DZLKizrv.js";import"./getLocale-DZ-phe2v.js";import"./isInvalidDate-CQ4jNt7-.js";import"./jsx-runtime-Cw0GR0a5.js";import"./startOfDay-MoyOWjoN.js";import"./FilterContents-MyXMWDj6.js";import"./Combination-DFaMps7A.js";import"./tslib.es6-CY32MZYl.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./index-CCQ3W5xA.js";import"./usePopper-D4ykrdaR.js";import"./index-9r8iugjR.js";import"./useDateInputHandlers-CFHAAAKV.js";import"./LabelledMessage-CyRdzdqY.js";import"./validateDate-Bbd7IJoY.js";import"./enums-Cb8LLpRk.js";import"./isDisabledDate-DCznrglD.js";import"./Label-DlmzItqQ.js";import"./isRefObject-39zMTbtm.js";import"./Input-BFyrvMXQ.js";import"./useIntl-Ci3jBQGG.js";import"./index-DBmEjBSQ.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./message-BF0EX5jj.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./SVG-7WFwBCn9.js";import"./Text-D2gQH1xL.js";import"./CalendarSingle-DmO3h1TK.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./isValidWeekStartsOn-CZGl9tvK.js";import"./en-AU-C5dfMWdV.js";import"./ChevronDownIcon-prLLyjG_.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./FilterButtonBase-D953FwLo.js";const pe={title:"Components/Filter Date Picker/Tests",component:d,parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},D={render:()=>{const[e,t]=m.useState(!1),[o,i]=m.useState();return n.createElement(d,{renderTrigger:p=>n.createElement(c,{...p}),id:"filter-dp--test",label:"Date",locale:"en-AU",isOpen:e,setIsOpen:t,selectedDate:o,onDateChange:i})},args:{renderTrigger:e=>n.createElement(c,{...e})}},a={...D,play:async({canvasElement:e,step:t})=>{const{getByRole:o,getByLabelText:i,queryByRole:p}=E(e);await t("Open popover",async()=>{await r.click(o("button",{name:"Date"}))}),await t("Type value and press Enter key",async()=>{const s=i("Date",{selector:"input"});await r.click(s),await r.type(s,"03/05/2022"),await r.keyboard("{Enter}")}),await t("Ensure the popover didn't re-open",async()=>{w(p("dialog")).not.toBeInTheDocument()})}};var l,u,y;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...TestBase,
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      getByRole,
      getByLabelText,
      queryByRole
    } = within(canvasElement);
    await step("Open popover", async () => {
      await userEvent.click(getByRole("button", {
        name: "Date"
      }));
    });
    await step("Type value and press Enter key", async () => {
      const inputDate = getByLabelText("Date", {
        selector: "input"
      });
      await userEvent.click(inputDate);
      await userEvent.type(inputDate, "03/05/2022");
      await userEvent.keyboard("{Enter}");
    });
    await step("Ensure the popover didn't re-open", async () => {
      expect(queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ne=["SubmitInputViaEnterKey"];export{a as SubmitInputViaEnterKey,ne as __namedExportsOrder,pe as default};
