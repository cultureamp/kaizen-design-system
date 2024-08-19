import{r as D,R as C}from"./index-CTjT7uj6.js";import{u as o,e as i,w as b}from"./index-BySiBzEG.js";import{R as q}from"./RichTextEditor-Cch1l_4N.js";import"./index-DZLKizrv.js";import"./index-CCQ3W5xA.js";import"./Label-DlmzItqQ.js";import"./useRichTextEditor-BOueCohL.js";import"./validation-C7DrCRoJ.js";import"./IncreaseIndentIcon-pGkYMmfx.js";import"./SVG-7WFwBCn9.js";import"./BoldIcon-BoDzys8O.js";import"./UnderlineIcon-C1wYI3bX.js";import"./ToolbarSection-DJiy3mWF.js";import"./ToggleIconButton-DNSnfJQm.js";import"./index-CdP7-hSn.js";import"./index-9r8iugjR.js";import"./usePopper-D4ykrdaR.js";import"./client-C7R75yIL.js";import"./EditIcon-r0BJhC_f.js";import"./ExternalLinkIcon-D-unubvU.js";import"./RemoveLinkIcon-D9z3k6B4.js";import"./Text-D2gQH1xL.js";import"./Popover-BcT7iVVN.js";import"./Heading-Y5F8SWRW.js";import"./CloseIcon-BAUhi63R.js";import"./CautionIcon-D4m_GXrx.js";import"./ExclamationIcon-CBwbCtpu.js";import"./InformationIcon-DxLaBSbb.js";import"./SuccessIcon-BInyqVzG.js";import"./LinkModal-DKIlHPDl.js";import"./TextField-C70Pg5K2.js";import"./FieldGroup-Dj6p3DL3.js";import"./Input-BFyrvMXQ.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./InputEditModal-CPT2Z1ib.js";import"./GenericModal-PBdxQDAn.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./defineProperty-C21ZqnLH.js";import"./Trap-DVnrG7EK.js";import"./inheritsLoose-p_S3dtD8.js";import"./tslib.es6-CY32MZYl.js";import"./ModalAccessibleLabel-DkJ4xCwy.js";import"./IconButton-DH93ECWt.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./ModalFooter-Bn8JBJw7.js";import"./useMediaQueries-C_upvC1L.js";import"./Button-DDkdQqLR.js";import"./InlineNotification-CD7nmnbO.js";import"./GenericNotification-DqRrnmyu.js";import"./SecurityTipIcon-CgXON2WE.js";const Je={title:"Components/RichTextEditor/Tests",component:q},s={render:()=>{const[a,t]=D.useState([]),e=n=>t(n.toJSON().doc.content);return C.createElement(q,{labelText:"Label",defaultValue:a,onChange:e,rows:3,controls:[{name:"bold",group:"inline"},{name:"italic",group:"inline"},{name:"underline",group:"inline"},{name:"orderedList",group:"list"},{name:"bulletList",group:"list"},{name:"link",group:"link"}]})},play:async({canvasElement:a,step:t})=>{const{getByRole:e}=b(a),n=e("textbox");await t("Focus on editor",async()=>{await o.click(n),i(n).toHaveFocus()})}},l={play:async a=>{var n;await((n=s.play)==null?void 0:n.call(s,a));const{canvasElement:t,step:e}=a;await e("Expect no list items",async()=>{i(t.querySelector("ul")).not.toBeInTheDocument()}),await e("Create unordered list from `-` and Space",async()=>{await o.keyboard("- "),i(t.querySelectorAll("ul li")).toHaveLength(1)})}},c={...s,name:"Create unordered list via keyboard shortcut",play:async a=>{var n;await((n=l.play)==null?void 0:n.call(l,a));const{canvasElement:t,step:e}=a;await e("Add new list item to list on Enter",async()=>{await o.keyboard("By the pricking of my thumbs{Enter}"),i(t.querySelectorAll("ul li")).toHaveLength(2)})}},d={...s,name:"Create ordered list via keyboard shortcut",play:async a=>{var n;await((n=s.play)==null?void 0:n.call(s,a));const{canvasElement:t,step:e}=a;await e("Expect no list items",async()=>{i(t.querySelector("ol")).not.toBeInTheDocument()}),await e("Create ordered list from `1.` and Space",async()=>{await o.keyboard("1. "),i(t.querySelectorAll("ol li")).toHaveLength(1)}),await e("Add new list item to list on Enter",async()=>{await o.keyboard("By the pricking of my thumbs{Enter}"),i(t.querySelectorAll("ol li")).toHaveLength(2)})}},y={...s,name:"Decrease indent of an existing list item",play:async a=>{var r;await((r=c.play)==null?void 0:r.call(c,a));const{canvasElement:t,step:e}=a,{getByRole:n}=b(t);await e("Decrease indent on list item",async()=>{await o.click(n("button",{name:"Decrease indent"})),i(t.querySelectorAll("ul li")).toHaveLength(1)})}},u={...s,name:"Increase indent of an existing list item",play:async a=>{var m;await((m=l.play)==null?void 0:m.call(l,a));const{canvasElement:t,step:e}=a,{getByRole:n}=b(t),r=n("button",{name:"Increase indent"});await e("Expect increase indent button to be disabled as we are on the first list item",async()=>{i(r).toHaveAttribute("aria-disabled","true")}),await e("Add second list item; expect increase indent button to be enabled",async()=>{await o.keyboard("By the pricking of my thumbs{Enter}"),i(t.querySelectorAll("ul li")).toHaveLength(2),i(r).toHaveAttribute("aria-disabled","false")}),await e("Increase indent of second list item",async()=>{await o.click(r),i(t.querySelectorAll("ul li ul li")).toHaveLength(1)})}},w={...s,name:"Create a link",play:async a=>{const{canvasElement:t,step:e}=a,{getByRole:n,getByText:r}=b(t),m=n("textbox");await e("Focus on editor",async()=>{await o.click(m),i(m).toHaveFocus()}),await e("Input text and select the first word",async()=>{await o.keyboard("Link me"),await o.pointer([{target:r("Link me"),offset:0,keys:"[MouseLeft>]"},{offset:4}])}),await e("click the link button",async()=>{await o.click(n("button",{name:"Link"}))}),await new Promise(p=>setTimeout(p,500)),await e("Enter text",async()=>{await o.keyboard("https://www.google.com")}),await new Promise(p=>setTimeout(p,500)),await e("Tab and save",async()=>{await o.keyboard("{Tab}{Enter}")}),await e("Link exists in the RTE",async()=>{const p=n("link",{name:"Link"});i(p).toBeInTheDocument()})}};var v,E,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...TestBase,
  name: "Create unordered list via keyboard shortcut",
  play: async context => {
    await CreateFirstUnorderedListItem.play?.(context);
    const {
      canvasElement,
      step
    } = context;
    await step("Add new list item to list on Enter", async () => {
      await userEvent.keyboard("By the pricking of my thumbs{Enter}");
      expect(canvasElement.querySelectorAll("ul li")).toHaveLength(2);
    });
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var h,g,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...TestBase,
  name: "Create ordered list via keyboard shortcut",
  play: async context => {
    await TestBase.play?.(context);
    const {
      canvasElement,
      step
    } = context;
    await step("Expect no list items", async () => {
      expect(canvasElement.querySelector("ol")).not.toBeInTheDocument();
    });
    await step("Create ordered list from \`1.\` and Space", async () => {
      await userEvent.keyboard("1. ");
      expect(canvasElement.querySelectorAll("ol li")).toHaveLength(1);
    });
    await step("Add new list item to list on Enter", async () => {
      await userEvent.keyboard("By the pricking of my thumbs{Enter}");
      expect(canvasElement.querySelectorAll("ol li")).toHaveLength(2);
    });
  }
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,B,L;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...TestBase,
  name: "Decrease indent of an existing list item",
  play: async context => {
    await KeyboardShortcutUnorderedList.play?.(context);
    const {
      canvasElement,
      step
    } = context;
    const {
      getByRole
    } = within(canvasElement);
    await step("Decrease indent on list item", async () => {
      await userEvent.click(getByRole("button", {
        name: "Decrease indent"
      }));
      expect(canvasElement.querySelectorAll("ul li")).toHaveLength(1);
    });
  }
}`,...(L=(B=y.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var S,T,A;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...TestBase,
  name: "Increase indent of an existing list item",
  play: async context => {
    await CreateFirstUnorderedListItem.play?.(context);
    const {
      canvasElement,
      step
    } = context;
    const {
      getByRole
    } = within(canvasElement);
    const increaseIndentButton = getByRole("button", {
      name: "Increase indent"
    });
    await step("Expect increase indent button to be disabled as we are on the first list item", async () => {
      expect(increaseIndentButton).toHaveAttribute("aria-disabled", "true");
    });
    await step("Add second list item; expect increase indent button to be enabled", async () => {
      await userEvent.keyboard("By the pricking of my thumbs{Enter}");
      expect(canvasElement.querySelectorAll("ul li")).toHaveLength(2);
      expect(increaseIndentButton).toHaveAttribute("aria-disabled", "false");
    });
    await step("Increase indent of second list item", async () => {
      await userEvent.click(increaseIndentButton);
      expect(canvasElement.querySelectorAll("ul li ul li")).toHaveLength(1);
    });
  }
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,R,H;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...TestBase,
  name: "Create a link",
  play: async context => {
    const {
      canvasElement,
      step
    } = context;
    const {
      getByRole,
      getByText
    } = within(canvasElement);
    const editor = getByRole("textbox");
    await step("Focus on editor", async () => {
      await userEvent.click(editor);
      expect(editor).toHaveFocus();
    });
    await step("Input text and select the first word", async () => {
      await userEvent.keyboard("Link me");
      await userEvent.pointer([{
        target: getByText("Link me"),
        offset: 0,
        keys: "[MouseLeft>]"
      }, {
        offset: 4
      }]);
    });
    await step("click the link button", async () => {
      await userEvent.click(getByRole("button", {
        name: "Link"
      }));
    });

    // wait for the transition to end and focus to shift
    await new Promise(resolve => setTimeout(resolve, 500));
    await step("Enter text", async () => {
      await userEvent.keyboard("https://www.google.com");
    });
    await new Promise(resolve => setTimeout(resolve, 500));
    await step("Tab and save", async () => {
      await userEvent.keyboard("{Tab}{Enter}");
    });
    await step("Link exists in the RTE", async () => {
      const link = getByRole("link", {
        name: "Link"
      });
      expect(link).toBeInTheDocument();
    });
  }
}`,...(H=(R=w.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const Ne=["KeyboardShortcutUnorderedList","KeyboardShortcutOrderedList","DecreaseIndent","IncreaseIndent","CreateALink"];export{w as CreateALink,y as DecreaseIndent,u as IncreaseIndent,d as KeyboardShortcutOrderedList,c as KeyboardShortcutUnorderedList,Ne as __namedExportsOrder,Je as default};
