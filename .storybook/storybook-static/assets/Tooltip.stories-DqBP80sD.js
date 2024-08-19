import{R as e}from"./index-CTjT7uj6.js";import{i as q}from"./isChromatic-VqprqId_.js";import{O as j,a as w,b as z,c as D,R as G}from"./Tooltip.spec.stories-LQ4b0Ym3.js";import{a as l,T as d}from"./TooltipTrigger-WFlHsgfK.js";import{B as H}from"./Button-DDkdQqLR.js";import{F as J}from"./Focusable-DOEBf_Rm.js";import{T as K}from"./Tag-D-4sFjnu.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./AddIcon-C6V_KfCs.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./Text-D2gQH1xL.js";import"./IconButton-DH93ECWt.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./TabPanels-DLb-4Dql.js";import"./mergeClassNames-DEvgSslo.js";import"./OverlayArrow-5tjFEuMh.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useFocusWithin-C7oArVkD.js";import"./useControlledState-CEg4Rl-x.js";import"./context-AGV5_Mtb.js";import"./useHover-Bq751pFs.js";const Fe={title:"Overlays/Tooltip/v3",component:l,parameters:{layout:"centered"},args:{defaultOpen:q()},subcomponents:{TooltipTrigger:d},argTypes:{UNSTABLE_portalContainer:{control:!1,table:{disable:!0}},triggerRef:{control:!1}}},r={render:({defaultOpen:u,isOpen:m,...c})=>e.createElement(d,{defaultOpen:!0,isOpen:m},e.createElement(H,{label:"Button"}),e.createElement(l,{...c},"Tooltip content"))},t={...j,play:void 0},o={...w,play:void 0},n={...z,play:void 0},a={...j,play:void 0,args:{placement:"end"}},s={...D,play:void 0},p={render:({defaultOpen:u,isOpen:m,...c})=>e.createElement(d,{defaultOpen:u,isOpen:m},e.createElement(J,null,e.createElement(K,null,"Non-interactive element")),e.createElement(l,{...c},"Tooltip content")),play:void 0},i={...G,play:void 0};var O,g,T;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: ({
    defaultOpen: _,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={true} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var f,y,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...testStories.OnButton,
  play: undefined
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,B,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...testStories.OnLink,
  play: undefined
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var E,R,C;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...testStories.OnIconButton,
  play: undefined
}`,...(C=(R=n.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var F,L,_;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...testStories.OnButton,
  play: undefined,
  args: {
    placement: "end"
  }
}`,...(_=(L=a.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var k,I,P;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...testStories.OnTabs,
  play: undefined
}`,...(P=(I=s.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var $,N,x;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    isOpen,
    ...args
  }) => <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Focusable>
        <Tag>Non-interactive element</Tag>
      </Focusable>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>,
  play: undefined
}`,...(x=(N=p.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var h,A,U;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...testStories.ReversedColors,
  play: undefined
}`,...(U=(A=i.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const Le=["Playground","OnButton","OnLink","OnIconButton","Placement","OnTabs","OnCustomFocusableElement","OnReversed"];export{t as OnButton,p as OnCustomFocusableElement,n as OnIconButton,o as OnLink,i as OnReversed,s as OnTabs,a as Placement,r as Playground,Le as __namedExportsOrder,Fe as default};
