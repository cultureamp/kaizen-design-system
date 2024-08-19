import{R as r}from"./index-CTjT7uj6.js";import{c as d}from"./index-BwXQPsKl.js";import{m as S,R as g}from"./mergeClassNames-DEvgSslo.js";import{t as u}from"./Tooltip.spec.stories-LQ4b0Ym3.js";import"./entry-preview-C0j4deIV.js";import"./react-18-UcXnBAQ6.js";import"./client-C7R75yIL.js";import"./index-9r8iugjR.js";import"./index-CCQ3W5xA.js";import"./index-BySiBzEG.js";import"./index-DZLKizrv.js";import"./isChromatic-VqprqId_.js";import"./AddIcon-C6V_KfCs.js";import"./SVG-7WFwBCn9.js";import"./Text-D2gQH1xL.js";import"./TooltipTrigger-WFlHsgfK.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./OverlayArrow-5tjFEuMh.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useFocusWithin-C7oArVkD.js";import"./useControlledState-CEg4Rl-x.js";import"./context-AGV5_Mtb.js";import"./useHover-Bq751pFs.js";import"./usePress-nudZ2Xgz.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./Link-DkKiEG74.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./IconButton-DH93ECWt.js";import"./Focusable-DOEBf_Rm.js";import"./Tag-D-4sFjnu.js";import"./TabPanels-DLb-4Dql.js";const ee={title:"Overlays/Tooltip/v3/Tests",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},v=d(u),e={name:"Sticker Sheet (Default)",render:n=>r.createElement("div",{className:"grid gap-x-128 gap-y-128 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},Object.values(v).map((s,l)=>r.createElement("div",{key:l,className:S("flex items-center justify-center min-h-[10rem]",s.parameters.reverseColors?"bg-purple-700":"")},r.createElement(g,{isReversed:!!s.parameters.reverseColors},r.createElement(s,{...n,defaultOpen:!0})))))},t={...e,name:"Sticker Sheet (RTL)",parameters:{...e.parameters,textDirection:"rtl"}};var o,a,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Sticker Sheet (Default)",
  render: args => <div className="grid gap-x-128 gap-y-128 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Object.values(Stories).map((Story, index) => <div key={index} className={mergeClassNames("flex items-center justify-center min-h-[10rem]", Story.parameters.reverseColors ? "bg-purple-700" : "")}>
          <ReversedColors isReversed={!!Story.parameters.reverseColors}>
            <Story {...args} defaultOpen={true} />
          </ReversedColors>
        </div>)}
    </div>
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Standard,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...Standard.parameters,
    textDirection: "rtl"
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const re=["Standard","StickerSheetRTL"];export{e as Standard,t as StickerSheetRTL,re as __namedExportsOrder,ee as default};
