import{R as e}from"./index-CTjT7uj6.js";import{o as k,s as N,a as P}from"./floating-ui.react-dom-DficdbDq.js";import{T as r}from"./Text-D2gQH1xL.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{C as m}from"./CalendarSingle-DmO3h1TK.js";import{C as o}from"./CalendarRange-BpKdqjCg.js";import{C as y}from"./CalendarPopover-Do4ZmdN_.js";import"./floating-ui.dom-BvchAiLZ.js";import"./index-9r8iugjR.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./isInvalidDate-CQ4jNt7-.js";import"./jsx-runtime-Cw0GR0a5.js";import"./startOfDay-MoyOWjoN.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./SVG-7WFwBCn9.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./isValidWeekStartsOn-CZGl9tvK.js";import"./en-AU-C5dfMWdV.js";const X={title:"Components/Date controls/Calendars/CalendarPopover",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"aria-dialog-name",enabled:!1}]}},viewport:{viewports:{ViewportFull:{name:"Viewport full size",styles:{width:"1024px",height:"1500px"}}},defaultViewport:"ViewportFull"}}},a=({children:s,rowHeight:f=300,strategy:b="fixed"})=>{const[x,C]=e.useState(null);return e.createElement(e.Fragment,null,e.createElement("div",{className:"bg-orange-300 inline-block",ref:C,style:{marginBottom:`${f}px`}},"Reference element"),e.createElement(y,{referenceElement:x,floatingOptions:{strategy:b,middleware:[k(15),N({apply({availableHeight:D,availableWidth:R,elements:T}){Object.assign(T.floating.style,{maxHeight:`${Math.max(D-25,155)}px`,maxWidth:`${R}px`})}}),P({allowedPlacements:["bottom-start"]})]}},s))},d={render:({isReversed:s})=>e.createElement(e.Fragment,null,e.createElement(t,{isReversed:s},e.createElement(t.Row,{rowTitle:"Default"},e.createElement(a,{rowHeight:102},"CalendarPopover",e.createElement("br",null),"Content goes in here.")),e.createElement(t.Row,{rowTitle:"CalendarSingle"},e.createElement(a,{rowHeight:350},e.createElement(m,{selected:new Date("2022-02-19")}))),e.createElement(t.Row,{rowTitle:"CalendarRange"},e.createElement(a,{rowHeight:350},e.createElement(o,{selected:{from:new Date("2022-02-19"),to:new Date("2022-03-04")}}))),e.createElement(t.Row,{rowTitle:"CalendarRange with divider"},e.createElement(a,{rowHeight:350},e.createElement(o,{"data-testid":"sb-final-calendar",selected:{from:new Date("2022-02-19"),to:new Date("2022-03-04")},hasDivider:!0})))))},n={...d,name:"Sticker Sheet (Default)"},l={...d,name:"Sticker Sheet (RTL)",parameters:{...d.parameters,textDirection:"rtl"}},i={name:"Sticker Sheet (Responsive)",render:()=>e.createElement(e.Fragment,null,e.createElement(r,{variant:"intro-lede",classNameOverride:"mb-12 "},"CalendarSingle scaled to availableHeight"),e.createElement("div",{className:"h-[250px] p-12 bg-purple-100 overflow-hidden relative"},e.createElement(a,{strategy:"absolute"},e.createElement(m,{selected:new Date("2022-02-19")}))),e.createElement(r,{variant:"intro-lede",classNameOverride:"mb-12 "},"CalendarRange scaled to availableHeight"),e.createElement("div",{className:"h-[250px] p-12 bg-purple-100 overflow-hidden relative"},e.createElement(a,{strategy:"absolute"},e.createElement(o,{selected:{from:new Date("2022-02-19"),to:new Date("2022-03-04")},hasDivider:!0}))),e.createElement(r,{variant:"intro-lede",classNameOverride:"mb-12 mt-24"},"CalendarSingle scaled to availableWidth"),e.createElement("div",{className:"h-[250px] p-12 bg-purple-100 overflow-hidden relative w-[250px]"},e.createElement(a,{strategy:"absolute"},e.createElement(m,{selected:new Date("2022-03-19")}))),e.createElement(r,{variant:"intro-lede",classNameOverride:"mb-12 mt-24"},"CalendarRanger scaled to availableWidth"),e.createElement("div",{className:"h-[250px] p-12 bg-purple-100 overflow-hidden relative w-[250px]"},e.createElement(a,{strategy:"absolute"},e.createElement(o,{"data-testid":"sb-final-calendar",selected:{from:new Date("2022-02-19"),to:new Date("2022-03-04")},hasDivider:!0}))))};var c,p,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var h,g,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(w=(g=l.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var u,S,E;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Sticker Sheet (Responsive)",
  render: () => <>
      <Text variant="intro-lede" classNameOverride="mb-12 ">
        CalendarSingle scaled to availableHeight
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden relative">
        <CalendarPopoverExample strategy="absolute">
          <CalendarSingle selected={new Date("2022-02-19")} />
        </CalendarPopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 ">
        CalendarRange scaled to availableHeight
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden relative">
        <CalendarPopoverExample strategy="absolute">
          <CalendarRange selected={{
          from: new Date("2022-02-19"),
          to: new Date("2022-03-04")
        }} hasDivider />
        </CalendarPopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        CalendarSingle scaled to availableWidth
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden relative w-[250px]">
        <CalendarPopoverExample strategy="absolute">
          <CalendarSingle selected={new Date("2022-03-19")} />
        </CalendarPopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        CalendarRanger scaled to availableWidth
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden relative w-[250px]">
        <CalendarPopoverExample strategy="absolute">
          <CalendarRange data-testid="sb-final-calendar" selected={{
          from: new Date("2022-02-19"),
          to: new Date("2022-03-04")
        }} hasDivider />
        </CalendarPopoverExample>
      </div>
    </>
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const Y=["StickerSheetDefault","StickerSheetRTL","StickerSheetResponsive"];export{n as StickerSheetDefault,l as StickerSheetRTL,i as StickerSheetResponsive,Y as __namedExportsOrder,X as default};
