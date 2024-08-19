import{R as n}from"./index-CTjT7uj6.js";import{f as X,w as c,u as i,e as o,a as p}from"./index-BySiBzEG.js";import{A as Y}from"./AddIcon-C6V_KfCs.js";import{T as Z,a as ee}from"./ThumbsUpOnIcon-BEGI4L7b.js";import{T as te}from"./TrashIcon-4srkHYK2.js";import{a as ne}from"./useOverlayTriggerState-B1dSu2Ro.js";import{T as ae,a as se}from"./TooltipTrigger-WFlHsgfK.js";import{B as l}from"./Button-AbBbn7Lr.js";import"./index-DZLKizrv.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusWithin-C7oArVkD.js";import"./useControlledState-CEg4Rl-x.js";import"./utils-e-dMXvly.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./mergeClassNames-DEvgSslo.js";import"./OverlayArrow-5tjFEuMh.js";import"./context-AGV5_Mtb.js";import"./useHover-Bq751pFs.js";import"./usePress-nudZ2Xgz.js";import"./useButton-CDp2hby9.js";const Q=X(),xe={title:"Actions/Button/v3/Tests",component:l,args:{children:"Label",onPress:Q}},r={render:({children:t,...e})=>n.createElement(l,{...e},n.createElement(n.Fragment,null,t,n.createElement(Y,{role:"presentation"})))},u={...r,play:async({canvasElement:t,step:e})=>{const a=c(t.parentElement).getByRole("button");await e("Hover shows",async()=>{await i.hover(a),await o(a).toHaveAttribute("data-hovered","true")})}},d={...u,parameters:{reverseColors:!0}},m={...r,play:async({canvasElement:t,step:e})=>{const a=c(t.parentElement).getByRole("button");await e("Focus shows",async()=>{await i.tab(),await p(()=>o(document.activeElement).toBe(a)),await o(a).toHaveAttribute("data-focused","true")})}},b={...m,parameters:{reverseColors:!0}},v={...r,play:async({canvasElement:t,step:e})=>{const a=c(t.parentElement).getByRole("button");await e("onPress is called",async()=>{await i.click(a),await o(Q).toHaveBeenCalledTimes(1)})}},w={render:({children:t,...e})=>n.createElement(l,{...e},n.createElement(n.Fragment,null,n.createElement(te,{role:"img","aria-label":"Remove"}),n.createElement(ne,null," Highlight: 18, June, 2024"))),play:async({canvasElement:t,step:e})=>{const a=c(t.parentElement).getByRole("button");await e("has accessible labels",async()=>{await i.tab(),await o(a).toHaveAccessibleName("Remove Highlight: 18, June, 2024")})}},h={render:({children:t,...e})=>n.createElement(l,{...e},({isFocused:s})=>n.createElement(n.Fragment,null,"Label",s?n.createElement(Z,{role:"img","aria-label":" is focused"}):n.createElement(ee,{role:"img","aria-label":" is unfocused"}))),play:async({canvasElement:t,step:e})=>{const a=c(t.parentElement).getByRole("button");await e("button icon reflects unfocused state",async()=>{await p(()=>o(a).toHaveAccessibleName("Label is unfocused"))}),await e("focus on button and update icon",async()=>{await i.tab(),await p(()=>o(a).toHaveAccessibleName("Label is focused"))})}},g={render:({children:t,...e})=>n.createElement(l,{className:({isFocused:s})=>s?"!bg-blue-500 !text-white !border-transparent":"",...e},"Label"),play:async({canvasElement:t})=>{await c(t.parentElement).getByRole("button").focus()}},y={render:({children:t,...e})=>n.createElement(ae,null,n.createElement(l,{...e},"Label"),n.createElement(se,null,"Tooltip content")),play:async({canvasElement:t,step:e})=>{const s=c(t.parentElement),a=s.getByRole("button");await e("Focus shows",async()=>{await i.tab(),await p(()=>o(document.activeElement).toBe(a))}),await e("Tooltip content show",async()=>{await p(()=>o(s.getByRole("tooltip")).toBeVisible())})}};var E,B,f;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    children,
    ...otherArgs
  }) => <Button {...otherArgs}>
      <>
        {children}
        <AddIcon role="presentation" />
      </>
    </Button>
}`,...(f=(B=r.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var A,R,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...ButtonDefault,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const button = canvas.getByRole("button");
    await step("Hover shows", async () => {
      await userEvent.hover(button);
      await expect(button).toHaveAttribute("data-hovered", "true");
    });
  }
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var H,F,I;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...IsHovered,
  parameters: {
    reverseColors: true
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var x,C,L;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...ButtonDefault,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const button = canvas.getByRole("button");
    await step("Focus shows", async () => {
      await userEvent.tab();
      await waitFor(() => expect(document.activeElement).toBe(button));
      await expect(button).toHaveAttribute("data-focused", "true");
    });
  }
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var P,S,_;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...IsFocused,
  parameters: {
    reverseColors: true
  }
}`,...(_=(S=b.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var N,W,D;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...ButtonDefault,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const button = canvas.getByRole("button");
    await step("onPress is called", async () => {
      await userEvent.click(button);
      await expect(onPressEvent).toHaveBeenCalledTimes(1);
    });
  }
}`,...(D=(W=v.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var O,J,U;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: ({
    children: _,
    ...otherArgs
  }) => <Button {...otherArgs}>
      <>
        <TrashIcon role="img" aria-label="Remove" />
        <VisuallyHidden> Highlight: 18, June, 2024</VisuallyHidden>
      </>
    </Button>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const button = canvas.getByRole("button");
    await step("has accessible labels", async () => {
      await userEvent.tab();
      await expect(button).toHaveAccessibleName("Remove Highlight: 18, June, 2024");
    });
  }
}`,...(U=(J=w.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var V,$,k;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: ({
    children: _,
    ...otherArgs
  }) => <Button {...otherArgs}>
      {({
      isFocused
    }) => <>
          Label
          {isFocused ? <ThumbsUpOnIcon role="img" aria-label=" is focused" /> : <ThumbsUpOffIcon role="img" aria-label=" is unfocused" />}
        </>}
    </Button>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const button = canvas.getByRole("button");
    await step("button icon reflects unfocused state", async () => {
      await waitFor(() => expect(button).toHaveAccessibleName("Label is unfocused"));
    });
    await step("focus on button and update icon", async () => {
      await userEvent.tab();
      await waitFor(() => expect(button).toHaveAccessibleName("Label is focused"));
    });
  }
}`,...(k=($=h.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var j,q,z;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ({
    children: _,
    ...otherArgs
  }) => <Button className={({
    isFocused
  }) => isFocused ? "!bg-blue-500 !text-white !border-transparent" : ""} {...otherArgs}>
      Label
    </Button>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const button = canvas.getByRole("button");
    await button.focus();
  }
}`,...(z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,K,M;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: ({
    children: _,
    ...otherArgs
  }) => <TooltipTrigger>
      <Button {...otherArgs}>Label</Button>
      <Tooltip>Tooltip content</Tooltip>
    </TooltipTrigger>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement.parentElement!);
    const button = canvas.getByRole("button");
    await step("Focus shows", async () => {
      await userEvent.tab();
      await waitFor(() => expect(document.activeElement).toBe(button));
    });
    await step("Tooltip content show", async () => {
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible());
    });
  }
}`,...(M=(K=y.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const Ce=["ButtonDefault","IsHovered","IsHoveredReversed","IsFocused","IsFocusedReversed","IsPressed","IconButtonWithAccessibleLabel","ButtonWithRACRenderPropsAsChildren","ButtonWithRACRenderPropsAsClassname","ButtonWithTooltip"];export{r as ButtonDefault,h as ButtonWithRACRenderPropsAsChildren,g as ButtonWithRACRenderPropsAsClassname,y as ButtonWithTooltip,w as IconButtonWithAccessibleLabel,m as IsFocused,b as IsFocusedReversed,u as IsHovered,d as IsHoveredReversed,v as IsPressed,Ce as __namedExportsOrder,xe as default};
