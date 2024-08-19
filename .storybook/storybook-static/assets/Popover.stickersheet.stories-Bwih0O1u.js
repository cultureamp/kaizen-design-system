import{R as e,r as i}from"./index-CTjT7uj6.js";import{c as I}from"./index-CCQ3W5xA.js";import{H as o}from"./Heading-Y5F8SWRW.js";import{u as L}from"./floating-ui.react-dom-DficdbDq.js";import{P as R}from"./Popover-7U2x2z8g.js";import"./floating-ui.dom-BvchAiLZ.js";import"./index-9r8iugjR.js";import"./Combination-DFaMps7A.js";import"./tslib.es6-CY32MZYl.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";const G={title:"Components/MultiSelect/Popover",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},l=r=>{const[t,a]=i.useState(!0),{refs:n}=L();return e.createElement("div",null,e.createElement("button",{ref:n.setReference,type:"button",className:"border border-gray-500",onClick:()=>a(!t)},"Pancakes!"),t&&e.createElement(R,{refs:n,"aria-label":"Pancakes!",...r},e.createElement("div",{className:"p-16"},r.children||"Content here!")))},H={render:(r,{parameters:t})=>{const a=i.useRef(null),[n,g]=i.useState();return i.useEffect(()=>{a.current!==null&&g(a.current)},[]),e.createElement("div",{ref:a,className:"relative flex flex-col justify-between gap-160 h-[400px] px-16 overflow-hidden"},e.createElement("div",null,e.createElement(o,{variant:"heading-3",tag:"div",classNameOverride:"!mb-16"},t.textDirection==="rtl"?"Default alignment to bottom-right; align to left when no space on left":"Default alignment to bottom-left; align to right when no space on right"),e.createElement("div",{className:"flex justify-between w-[100%]"},e.createElement(l,null),e.createElement(l,null),e.createElement(l,null))),e.createElement("div",null,e.createElement(o,{variant:"heading-3",tag:"div",classNameOverride:"!mb-64"},"Flips to top when no space below"),e.createElement("div",null,"Content below popover"),e.createElement("div",{className:"flex justify-between w-[100%]"},e.createElement(l,{portalContainer:n}),e.createElement(l,{portalContainer:n}))))}},c={...H,name:"Sticker Sheet (Default)"},d={...H,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}},s=({portalClassName:r,...t})=>{const a=i.useRef(null),[n,g]=i.useState();return i.useEffect(()=>{a.current!==null&&g(a.current)},[]),e.createElement("div",{ref:a,className:I("relative border border-purple-500 overflow-hidden",r)},e.createElement(l,{portalContainer:n,focusOnProps:{enabled:!1},...t}))},m=({items:r})=>e.createElement("ul",null,r.map(t=>e.createElement("li",{key:t},t))),h={name:"Sticker Sheet (Width)",render:()=>e.createElement("div",{className:"flex flex-col gap-16"},e.createElement(o,{variant:"heading-3",tag:"div"},"Content short (min-width)"),e.createElement(s,{portalClassName:"h-[250px]"},e.createElement(m,{items:["A"]})),e.createElement(o,{variant:"heading-3",tag:"div"},"Content long (max-width)"),e.createElement(s,{portalClassName:"h-[250px]"},e.createElement(m,{items:["Super long string where the container is fixed width and the selected string goes multiline"]})),e.createElement(o,{variant:"heading-3",tag:"div"},"Window max-width 250px"),e.createElement(s,{portalClassName:"w-[250px] h-[250px]"},e.createElement(m,{items:["Super long string where the container is fixed width and the selected string goes multiline"]})))},u=["Super long string where the container is fixed width and the selected string goes multiline","Another super long string where the container is fixed width and the selected string goes multiline","Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8","Item 9","Item 10","Item 11","Item 12","Item 13","Item 14","Item 15"],p={name:"Sticker Sheet (Height)",render:()=>e.createElement("div",{className:"flex flex-col gap-16"},e.createElement(o,{variant:"heading-3",tag:"div"},"Content overflow (max-height)"),e.createElement(s,{portalClassName:"h-[500px]"},e.createElement(m,{items:u})),e.createElement(o,{variant:"heading-3",tag:"div"},"Window max-height 250px"),e.createElement(s,{portalClassName:"h-[250px]"},e.createElement(m,{items:u})))};var v,f,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,E,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(w=(E=d.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var P,k,C;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Sticker Sheet (Width)",
  render: () => <div className="flex flex-col gap-16">
      <Heading variant="heading-3" tag="div">
        Content short (min-width)
      </Heading>
      <PopoverWithPortal portalClassName="h-[250px]">
        <List items={["A"]} />
      </PopoverWithPortal>

      <Heading variant="heading-3" tag="div">
        Content long (max-width)
      </Heading>
      <PopoverWithPortal portalClassName="h-[250px]">
        <List items={["Super long string where the container is fixed width and the selected string goes multiline"]} />
      </PopoverWithPortal>

      <Heading variant="heading-3" tag="div">
        Window max-width 250px
      </Heading>
      <PopoverWithPortal portalClassName="w-[250px] h-[250px]">
        <List items={["Super long string where the container is fixed width and the selected string goes multiline"]} />
      </PopoverWithPortal>
    </div>
}`,...(C=(k=h.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var N,b,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Sticker Sheet (Height)",
  render: () => <div className="flex flex-col gap-16">
      <Heading variant="heading-3" tag="div">
        Content overflow (max-height)
      </Heading>
      <PopoverWithPortal portalClassName="h-[500px]">
        <List items={itemsLong} />
      </PopoverWithPortal>

      <Heading variant="heading-3" tag="div">
        Window max-height 250px
      </Heading>
      <PopoverWithPortal portalClassName="h-[250px]">
        <List items={itemsLong} />
      </PopoverWithPortal>
    </div>
}`,...(W=(b=p.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};const J=["StickerSheetDefault","StickerSheetRTL","StickerSheetWidth","StickerSheetHeight"];export{c as StickerSheetDefault,p as StickerSheetHeight,d as StickerSheetRTL,h as StickerSheetWidth,J as __namedExportsOrder,G as default};
