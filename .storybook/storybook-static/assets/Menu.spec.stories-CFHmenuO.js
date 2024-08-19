import{R as e,r as G}from"./index-CTjT7uj6.js";import{w as v,u as o,a as c,e as l,f as V}from"./index-BySiBzEG.js";import{i as _}from"./isChromatic-VqprqId_.js";import{M as m,$ as u,a as p,c as s,d as y,b as n}from"./MenuTrigger-oL7_XjDj.js";import{B as j,A as q,a as K}from"./BookmarkOffIcon-BX3ccxEA.js";import{C as L}from"./CautionIcon-D4m_GXrx.js";import{E as N}from"./EditIcon-r0BJhC_f.js";import{E as W}from"./ExternalLinkIcon-D-unubvU.js";import{M as d}from"./MeatballsIcon-w9tBPyZh.js";import{T as B}from"./TrashIcon-4srkHYK2.js";import{B as I}from"./Button-AbBbn7Lr.js";import"./index-DZLKizrv.js";import"./mergeClassNames-DEvgSslo.js";import"./index-CCQ3W5xA.js";import"./index-9r8iugjR.js";import"./SSRProvider-C8o06Znb.js";import"./focusSafely-ByiDPXQJ.js";import"./utils-e-dMXvly.js";import"./useFocusable-CuIK6Qs-.js";import"./OverlayArrow-5tjFEuMh.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useFocusWithin-C7oArVkD.js";import"./useControlledState-CEg4Rl-x.js";import"./context-AGV5_Mtb.js";import"./usePress-nudZ2Xgz.js";import"./SelectionManager-yuMfDyd5.js";import"./useCollator-DHdgfgeP.js";import"./getScrollParent-DhLua4dp.js";import"./useHover-Bq751pFs.js";import"./useMenuTriggerState-D_-PdoOj.js";import"./useButton-CDp2hby9.js";import"./SVG-7WFwBCn9.js";const Oe={title:"Actions/Menu/v3/Tests",component:m,args:{defaultOpen:_(),children:e.createElement(e.Fragment,null)}},E={parameters:{chromatic:{disable:!1}},args:{defaultOpen:!0},decorators:[r=>e.createElement("div",{style:{height:"500px"}},e.createElement(r,null))],render:({defaultOpen:r,...t})=>e.createElement(m,{defaultOpen:r,...t},e.createElement(I,null,e.createElement(d,{role:"img","aria-label":"Additional actions"})),e.createElement(u,null,e.createElement(p,null,e.createElement(s,null,e.createElement(y,null,"Section One"),e.createElement(n,{icon:e.createElement(j,{role:"presentation"}),href:"https://cultureamp.com"},"Save"),e.createElement(n,{icon:e.createElement(N,{role:"presentation"})},"Edit")),e.createElement(s,null,e.createElement(n,{icon:e.createElement(q,{role:"presentation"})},"Move Up"),e.createElement(n,{icon:e.createElement(K,{role:"presentation"})},"Menu item with a longer label")),e.createElement(s,null,e.createElement(n,{icon:e.createElement(B,{role:"presentation"})},"Delete"),e.createElement(n,{icon:e.createElement(B,{role:"presentation"}),isDisabled:!0},"Delete but disabled"),e.createElement(n,null,"Other action"),e.createElement(n,null,"Other action"),e.createElement(n,null,"Other action")))))},w={render:({defaultOpen:r,...t})=>e.createElement(m,{defaultOpen:r,...t},e.createElement(I,null,e.createElement(d,{role:"img","aria-label":"Additional actions"})),e.createElement(u,null,e.createElement(p,null,e.createElement(n,{icon:e.createElement(L,{role:"presentation"}),onAction:()=>alert("Menu item pressed")},"Trigger an alert"),e.createElement(n,{icon:e.createElement(W,{role:"presentation"}),href:"https://cultureamp.com",target:"_blank"},"Go to cultureamp.com"),e.createElement(n,null,"Item 3"),e.createElement(n,null,"Item 4"),e.createElement(n,null,"Item 5")))),play:async({canvasElement:r,step:t})=>{const a=v(r.parentElement),i=a.getByRole("button");await t("Menu opens on click",async()=>{await o.click(i),await c(()=>l(a.getByRole("menu")).toBeVisible())}),await t("Arrow keys adjust focus",async()=>{await o.keyboard("[ArrowDown]"),await c(()=>l(a.getByRole("menuitem",{name:"Go to cultureamp.com"})).toHaveFocus())}),await t("Esc closes menu",async()=>{await o.keyboard("[Escape]"),await c(()=>l(a.queryByRole("menu")).not.toBeInTheDocument())}),await t("Menu opens on enter press",async()=>{await o.keyboard("[Enter]"),await c(()=>l(a.getByRole("menuitem",{name:"Trigger an alert"})).toHaveFocus()),await o.keyboard("[Escape]")}),await t("Menu opens on arrow up/down",async()=>{await o.keyboard("[ArrowDown]"),await c(()=>l(a.getByRole("menuitem",{name:"Trigger an alert"})).toHaveFocus()),await o.keyboard("[Escape]"),await o.keyboard("[ArrowUp]"),await c(()=>l(a.getByRole("menuitem",{name:"Item 5"})).toHaveFocus())})}},k=V(),M={render:()=>e.createElement(m,null,e.createElement(I,null,e.createElement(d,{role:"img","aria-label":"Additional actions"})),e.createElement(u,null,e.createElement(p,null,e.createElement(n,{isDisabled:!0,onAction:k},"Item 1"),e.createElement(n,null,"Item 2"),e.createElement(n,{isDisabled:!0},"Item 3"),e.createElement(n,null,"Item 4"),e.createElement(n,null,"Item 5")))),play:async({canvasElement:r,step:t})=>{const a=v(r.parentElement),i=a.getByRole("button");await t("Disabled items are unable to be focused",async()=>{await o.click(i),l(a.getByRole("menuitem",{name:"Item 2"})).toHaveFocus(),await o.keyboard("[ArrowDown]"),await o.keyboard("[ArrowDown]"),l(a.getByRole("menuitem",{name:"Item 5"})).toHaveFocus(),await o.keyboard("[Escape]")}),await t("Clicking a disabled item doesn't trigger onClick",async()=>{await o.click(i),await o.click(a.getByRole("menuitem",{name:"Item 1"})),await c(()=>l(k).not.toBeCalled())})}},g={render:()=>e.createElement(m,null,e.createElement(I,null,e.createElement(d,{role:"img","aria-label":"Additional actions"})),e.createElement(u,null,e.createElement(p,null,e.createElement(s,null,e.createElement(y,null,"Section One"),e.createElement(n,null,"Item 1"),e.createElement(n,null,"Item 2")),e.createElement(s,null,e.createElement(y,null,"Section Two"),e.createElement(n,null,"Item 3"),e.createElement(n,null,"Item 4"),e.createElement(n,null,"Item 5")))))},b={render:()=>{const[r,t]=G.useState(!1);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>t(!r),className:"mb-6"},"Toggle open"),e.createElement(m,{isOpen:r,onOpenChange:t},e.createElement(I,null,e.createElement(d,{role:"img","aria-label":"Additional actions"})),e.createElement(u,null,e.createElement(p,null,e.createElement(n,null,"Item 1"),e.createElement(n,{onAction:()=>t(!0)},"Item 2"),e.createElement(n,null,"Item 3"),e.createElement(n,null,"Item 4"),e.createElement(n,null,"Item 5")))))},play:async({canvasElement:r,step:t})=>{const a=v(r.parentElement),i=await a.findByRole("button",{name:"Toggle open"});await t("Menu opens on external button click",async()=>{await o.click(i),await c(()=>l(a.getByRole("menu")).toBeVisible())})}};var f,h,O;E.parameters={...E.parameters,docs:{...(f=E.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    }
  },
  args: {
    defaultOpen: true
  },
  decorators: [Story => <div style={{
    height: "500px"
  }}>
        <Story />
      </div>],
  render: ({
    defaultOpen,
    ...args
  }) => <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu>
          <Section>
            <Header>Section One</Header>
            <MenuItem icon={<BookmarkOffIcon role="presentation" />} href="https://cultureamp.com">
              Save
            </MenuItem>
            <MenuItem icon={<EditIcon role="presentation" />}>Edit</MenuItem>
          </Section>
          <Section>
            <MenuItem icon={<ArrowUpIcon role="presentation" />}>
              Move Up
            </MenuItem>
            <MenuItem icon={<ArrowDownIcon role="presentation" />}>
              Menu item with a longer label
            </MenuItem>
          </Section>
          <Section>
            <MenuItem icon={<TrashIcon role="presentation" />}>Delete</MenuItem>
            <MenuItem icon={<TrashIcon role="presentation" />} isDisabled>
              Delete but disabled
            </MenuItem>
            <MenuItem>Other action</MenuItem>
            <MenuItem>Other action</MenuItem>
            <MenuItem>Other action</MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
}`,...(O=(h=E.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var A,S,T;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    ...args
  }) => <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu>
          <MenuItem icon={<CautionIcon role="presentation" />} onAction={() => alert("Menu item pressed")}>
            Trigger an alert
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon role="presentation" />} href="https://cultureamp.com" target="_blank">
            Go to cultureamp.com
          </MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const menuButton = canvas.getByRole("button");
    await step("Menu opens on click", async () => {
      await userEvent.click(menuButton);
      await waitFor(() => expect(canvas.getByRole("menu")).toBeVisible());
    });
    await step("Arrow keys adjust focus", async () => {
      await userEvent.keyboard("[ArrowDown]");
      await waitFor(() => expect(canvas.getByRole("menuitem", {
        name: "Go to cultureamp.com"
      })).toHaveFocus());
    });
    await step("Esc closes menu", async () => {
      await userEvent.keyboard("[Escape]");
      await waitFor(() => expect(canvas.queryByRole("menu")).not.toBeInTheDocument());
    });
    await step("Menu opens on enter press", async () => {
      await userEvent.keyboard("[Enter]");
      await waitFor(() => expect(canvas.getByRole("menuitem", {
        name: "Trigger an alert"
      })).toHaveFocus());
      await userEvent.keyboard("[Escape]");
    });
    await step("Menu opens on arrow up/down", async () => {
      await userEvent.keyboard("[ArrowDown]");
      await waitFor(() => expect(canvas.getByRole("menuitem", {
        name: "Trigger an alert"
      })).toHaveFocus());
      await userEvent.keyboard("[Escape]");
      await userEvent.keyboard("[ArrowUp]");
      await waitFor(() => expect(canvas.getByRole("menuitem", {
        name: "Item 5"
      })).toHaveFocus());
    });
  }
}`,...(T=(S=w.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var R,x,D;M.parameters={...M.parameters,docs:{...(R=M.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <MenuTrigger>
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu>
          <MenuItem isDisabled onAction={mockOnClick}>
            Item 1
          </MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem isDisabled>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const menuButton = canvas.getByRole("button");
    await step("Disabled items are unable to be focused", async () => {
      await userEvent.click(menuButton);
      expect(canvas.getByRole("menuitem", {
        name: "Item 2"
      })).toHaveFocus();
      await userEvent.keyboard("[ArrowDown]");
      await userEvent.keyboard("[ArrowDown]");
      expect(canvas.getByRole("menuitem", {
        name: "Item 5"
      })).toHaveFocus();
      await userEvent.keyboard("[Escape]");
    });
    await step("Clicking a disabled item doesn't trigger onClick", async () => {
      await userEvent.click(menuButton);
      await userEvent.click(canvas.getByRole("menuitem", {
        name: "Item 1"
      }));
      await waitFor(() => expect(mockOnClick).not.toBeCalled());
    });
  }
}`,...(D=(x=M.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var F,C,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <MenuTrigger>
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu>
          <Section>
            <Header>Section One</Header>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </Section>

          <Section>
            <Header>Section Two</Header>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
            <MenuItem>Item 5</MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
}`,...(H=(C=g.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var P,$,U;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    return <>
        <button type="button" onClick={() => setOpen(!isOpen)} className="mb-6">
          Toggle open
        </button>
        <MenuTrigger isOpen={isOpen} onOpenChange={setOpen}>
          <Button>
            <MeatballsIcon role="img" aria-label="Additional actions" />
          </Button>
          <Popover>
            <Menu>
              <MenuItem>Item 1</MenuItem>
              <MenuItem onAction={() => setOpen(true)}>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
              <MenuItem>Item 4</MenuItem>
              <MenuItem>Item 5</MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
      </>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const externalButton = await canvas.findByRole("button", {
      name: "Toggle open"
    });
    await step("Menu opens on external button click", async () => {
      await userEvent.click(externalButton);
      await waitFor(() => expect(canvas.getByRole("menu")).toBeVisible());
    });
  }
}`,...(U=($=b.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const Ae=["KitchenSink","Basic","DisabledItems","WithSections","Controlled"];export{w as Basic,b as Controlled,M as DisabledItems,E as KitchenSink,g as WithSections,Ae as __namedExportsOrder,Oe as default};
