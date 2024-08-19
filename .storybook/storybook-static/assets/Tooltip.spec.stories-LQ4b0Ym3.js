import{R as e}from"./index-CTjT7uj6.js";import{w as ae,u as l,a as y,e as c}from"./index-BySiBzEG.js";import{i as oe}from"./isChromatic-VqprqId_.js";import{A as te}from"./AddIcon-C6V_KfCs.js";import{T as re}from"./Text-D2gQH1xL.js";import{a as o,T as r}from"./TooltipTrigger-WFlHsgfK.js";import{B as p}from"./Button-DDkdQqLR.js";import{I as ne}from"./IconButton-DH93ECWt.js";import{F as se}from"./Focusable-DOEBf_Rm.js";import{T as le}from"./Tag-D-4sFjnu.js";import{T as ie,a as pe,b as ce,c as ue,d as me}from"./TabPanels-DLb-4Dql.js";const de={title:"Overlays/Tooltip/v3/Tests",component:o,parameters:{layout:"centered"},args:{defaultOpen:oe()},argTypes:{UNSTABLE_portalContainer:{control:!1,table:{disable:!0}},triggerRef:{control:!1}}},i={render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(p,{label:"Button"}),e.createElement(o,{...t},"Tooltip content")),play:async({canvasElement:a,step:n})=>{const t=ae(a.parentElement),s=t.queryByRole("button")||t.getByRole("link");await n("Hover shows",async()=>{await l.unhover(s),await l.hover(s),await y(()=>c(t.getByRole("tooltip")).toBeVisible()),c(s).toHaveAttribute("aria-describedby",t.getByRole("tooltip").id),await l.unhover(s)}),await n("Focus shows",async()=>{await l.tab(),await y(()=>c(t.getByRole("tooltip")).toBeVisible()),await l.tab(),await y(()=>c(t.queryByRole("tooltip")).toBeNull())}),await n("Escape closes",async()=>{await l.tab(),await l.keyboard("{Escape}"),await y(()=>c(t.queryByRole("tooltip")).toBeNull()),await l.tab()})}},u={...i,render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(p,{label:"Button",href:"#"}),e.createElement(o,{...t},"Tooltip content"))},m={render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(e.Fragment,null,e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(ne,{label:"(TESTING) Add label",icon:e.createElement(te,{role:"presentation"}),primary:!0,"aria-describedby":"blah"}),e.createElement(o,{...t},"Tooltip content")),e.createElement(re,{variant:"body",id:"blah",classNameOverride:"p-4"},"This is target of aria-describedby"))},d={render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(ne,{label:"Add something",icon:e.createElement(te,{role:"presentation"}),primary:!0,"aria-describedby":null}),e.createElement(o,{...t},"Add something"))},T={render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(p,{label:"Button",disabled:!0}),e.createElement(o,{...t},"Tooltip content"))},b={name:"On Button with custom <a>",render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(p,{label:"Button",component:s=>e.createElement("a",{...s,href:"#",style:{padding:"0 1rem"}},"Custom Link")}),e.createElement(o,{...t},"Tooltip content"))},g={...i,name:"On Button with custom <button>",render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(p,{label:"Button",component:s=>e.createElement("button",{type:"button",...s})}),e.createElement(o,{...t},"Tooltip content"))},O={render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(se,null,e.createElement(le,null,"Non-interactive element")),e.createElement(o,{...t},"Tooltip content"))},f={render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(ie,null,e.createElement(pe,{"aria-label":"Tabs"},e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(ce,null,"Tab 1"),e.createElement(o,{...t},"Tooltip content"))),e.createElement(ue,null,e.createElement(me,{classNameOverride:"p-24 font-family-paragraph"},"Tab content")))},E={render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(p,{label:"Button"}),e.createElement(o,{...t,placement:"top",shouldFlip:!1},"Placement top"),e.createElement(o,{...t,placement:"end",shouldFlip:!1},"Placement end"),e.createElement(o,{...t,placement:"bottom",shouldFlip:!1},"Placement bottom"),e.createElement(o,{...t,placement:"start",shouldFlip:!1},"Placement start"))},B={render:({defaultOpen:a,isOpen:n,...t})=>e.createElement(r,{defaultOpen:a,isOpen:n},e.createElement(p,{label:"Button"}),e.createElement(o,{...t},"Tooltip content")),parameters:{reverseColors:!0}};var h,v,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const button = canvas.queryByRole("button") || canvas.getByRole("link");
    await step("Hover shows", async () => {
      await userEvent.unhover(button);
      await userEvent.hover(button);
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible());
      expect(button).toHaveAttribute("aria-describedby", canvas.getByRole("tooltip").id);
      await userEvent.unhover(button);
    });
    await step("Focus shows", async () => {
      await userEvent.tab(); // focus
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible());
      await userEvent.tab(); // unfocus
      await waitFor(() => expect(canvas.queryByRole("tooltip")).toBeNull());
    });
    await step("Escape closes", async () => {
      await userEvent.tab(); // focus
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(canvas.queryByRole("tooltip")).toBeNull());
      await userEvent.tab(); // unfocus
    });
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var F,R,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...OnButton,
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" href="#" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
}`,...(P=(R=u.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var S,A,C;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <>
      <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
        <IconButton label="(TESTING) Add label" icon={<AddIcon role="presentation" />} primary aria-describedby="blah" />
        <Tooltip {...args}>Tooltip content</Tooltip>
      </TooltipTrigger>
      <Text variant="body" id="blah" classNameOverride="p-4">
        This is target of aria-describedby
      </Text>
    </>
}`,...(C=(A=m.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var N,x,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <IconButton label="Add something" icon={<AddIcon role="presentation" />} primary
    // Negate the aria description (added by RAC) as it should be the
    // same as the accessible name, therefore no need to duplicate it
    aria-describedby={null} />
      <Tooltip {...args}>Add something</Tooltip>
    </TooltipTrigger>
}`,...(I=(x=d.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var k,L,_;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" disabled />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
}`,...(_=(L=T.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var q,D,H;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "On Button with custom <a>",
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" component={props =>
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a {...props} href="#" style={{
      padding: "0 1rem"
    }}>
            Custom Link
          </a>} />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
}`,...(H=(D=b.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var V,j,G;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...OnButton,
  name: "On Button with custom <button>",
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" component={props => <button type="button" {...props} />} />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
}`,...(G=(j=g.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var W,z,M;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Focusable>
        <Tag>Non-interactive element</Tag>
      </Focusable>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
}`,...(M=(z=O.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var U,J,K;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <Tabs>
      <TabList aria-label="Tabs">
        <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
          <Tab>Tab 1</Tab>
          <Tooltip {...args}>Tooltip content</Tooltip>
        </TooltipTrigger>
      </TabList>
      <TabPanels>
        <TabPanel classNameOverride="p-24 font-family-paragraph">
          Tab content
        </TabPanel>
      </TabPanels>
    </Tabs>
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args} placement="top" shouldFlip={false}>
        Placement top
      </Tooltip>
      <Tooltip {...args} placement="end" shouldFlip={false}>
        Placement end
      </Tooltip>
      <Tooltip {...args} placement="bottom" shouldFlip={false}>
        Placement bottom
      </Tooltip>
      <Tooltip {...args} placement="start" shouldFlip={false}>
        Placement start
      </Tooltip>
    </TooltipTrigger>
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>,
  parameters: {
    reverseColors: true
  }
}`,...(ee=($=B.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Te=["OnButton","OnLink","OnButtonWithDesc","OnIconButton","OnDisabledButton","OnCustomButtonAnchor","OnCustomButton","OnCustomFocusableElement","OnTabs","Placement","ReversedColors"],Re=Object.freeze(Object.defineProperty({__proto__:null,OnButton:i,OnButtonWithDesc:m,OnCustomButton:g,OnCustomButtonAnchor:b,OnCustomFocusableElement:O,OnDisabledButton:T,OnIconButton:d,OnLink:u,OnTabs:f,Placement:E,ReversedColors:B,__namedExportsOrder:Te,default:de},Symbol.toStringTag,{value:"Module"}));export{i as O,E as P,B as R,u as a,d as b,f as c,Re as t};
