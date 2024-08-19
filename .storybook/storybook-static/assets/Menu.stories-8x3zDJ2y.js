import{R as e}from"./index-CTjT7uj6.js";import{i as y}from"./isChromatic-VqprqId_.js";import{M as B,a as h,b as t,$ as D}from"./MenuTrigger-oL7_XjDj.js";import{B as A,A as $,a as C}from"./BookmarkOffIcon-BX3ccxEA.js";import{E as O}from"./EditIcon-r0BJhC_f.js";import{M as T}from"./MeatballsIcon-w9tBPyZh.js";import{T as k}from"./TrashIcon-4srkHYK2.js";import{Basic as W,DisabledItems as P,WithSections as _,Controlled as x}from"./Menu.spec.stories-CFHmenuO.js";import{B as R}from"./Button-AbBbn7Lr.js";import"./mergeClassNames-DEvgSslo.js";import"./index-CCQ3W5xA.js";import"./index-9r8iugjR.js";import"./SSRProvider-C8o06Znb.js";import"./focusSafely-ByiDPXQJ.js";import"./utils-e-dMXvly.js";import"./useFocusable-CuIK6Qs-.js";import"./OverlayArrow-5tjFEuMh.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useFocusWithin-C7oArVkD.js";import"./useControlledState-CEg4Rl-x.js";import"./context-AGV5_Mtb.js";import"./usePress-nudZ2Xgz.js";import"./SelectionManager-yuMfDyd5.js";import"./useCollator-DHdgfgeP.js";import"./getScrollParent-DhLua4dp.js";import"./useHover-Bq751pFs.js";import"./useMenuTriggerState-D_-PdoOj.js";import"./useButton-CDp2hby9.js";import"./SVG-7WFwBCn9.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./CautionIcon-D4m_GXrx.js";import"./ExternalLinkIcon-D-unubvU.js";const ge={title:"Actions/Menu/v3",component:B,args:{defaultOpen:y(),children:e.createElement(e.Fragment,null)},subcomponents:{Menu:h,MenuItem:t}},o={render:({defaultOpen:U,...w})=>e.createElement(B,{...w},e.createElement(R,null,e.createElement(T,{role:"img","aria-label":"Additional actions"})),e.createElement(D,null,e.createElement(h,null,e.createElement(t,{icon:e.createElement(A,{role:"presentation"})},"Save"),e.createElement(t,{icon:e.createElement(O,{role:"presentation"})},"Edit"),e.createElement(t,{icon:e.createElement($,{role:"presentation"})},"Move up"),e.createElement(t,{icon:e.createElement(C,{role:"presentation"})},"Move down"),e.createElement(t,{icon:e.createElement(k,{role:"presentation"})},"Delete"))))},r={...W,play:void 0},n={...P,play:void 0},a={..._,play:void 0},i={...x,play:void 0};var s,m,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    defaultOpen: _,
    ...args
  }) => <MenuTrigger {...args}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu>
          <MenuItem icon={<BookmarkOffIcon role="presentation" />}>
            Save
          </MenuItem>
          <MenuItem icon={<EditIcon role="presentation" />}>Edit</MenuItem>
          <MenuItem icon={<ArrowUpIcon role="presentation" />}>
            Move up
          </MenuItem>
          <MenuItem icon={<ArrowDownIcon role="presentation" />}>
            Move down
          </MenuItem>
          <MenuItem icon={<TrashIcon role="presentation" />}>Delete</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...testStories.Basic,
  play: undefined
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,I,M;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...testStories.DisabledItems,
  play: undefined
}`,...(M=(I=n.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var f,E,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...testStories.WithSections,
  play: undefined
}`,...(g=(E=a.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var b,S,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...testStories.Controlled,
  play: undefined
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const be=["Playground","Basic","DisabledItems","WithSections","Controlled"];export{r as Basic,i as Controlled,n as DisabledItems,o as Playground,a as WithSections,be as __namedExportsOrder,ge as default};
