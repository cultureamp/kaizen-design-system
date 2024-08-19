import{R as e}from"./index-CTjT7uj6.js";import{w as l}from"./index-BySiBzEG.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{C as R}from"./CalendarRange-BpKdqjCg.js";import"./index-DZLKizrv.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./isInvalidDate-CQ4jNt7-.js";import"./jsx-runtime-Cw0GR0a5.js";import"./startOfDay-MoyOWjoN.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./SVG-7WFwBCn9.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./en-AU-C5dfMWdV.js";const V={title:"Components/Date controls/Calendars/CalendarRange",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"color-contrast",selector:':not([data-sb-pseudo-styles="hover"], [data-sb-pseudo-styles="focus"])'}]}}}},a=r=>e.createElement("div",{"data-testid":r.id},e.createElement(R,{selected:{from:new Date("2022-02-19"),to:new Date("2022-03-04")},...r})),i={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{heading:"Calendar Range"},e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Default"},e.createElement(a,null)),e.createElement(t.Row,{rowTitle:"With divider"},e.createElement("div",{style:{padding:"1.5rem 0"}},e.createElement(a,{hasDivider:!0}))))),e.createElement(t,{heading:"Pseudo states"},e.createElement(t.Header,{headings:["Hover","Focus"],hasVerticalHeadings:!0}),e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Selected (Start)"},e.createElement(a,{id:"id__calendar-range__start--hover"}),e.createElement(a,{id:"id__calendar-range__start--focus"})),e.createElement(t.Row,{rowTitle:"Selected (Middle)"},e.createElement(a,{id:"id__calendar-range__middle--hover"}),e.createElement(a,{id:"id__calendar-range__middle--focus"})),e.createElement(t.Row,{rowTitle:"Selected (End)"},e.createElement(a,{id:"id__calendar-range__end--hover"}),e.createElement(a,{id:"id__calendar-range__end--focus"}))))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}},play:({canvasElement:r})=>{k(r)}},k=r=>{const E=l(r),m=(n,s,o)=>{const f=E.getByTestId(n),y=l(f).getByRole("grid",{name:s});return l(y).getByRole("gridcell",{name:o})};[{id:"id__calendar-range__start",monthName:"February 2022",dayName:"19"},{id:"id__calendar-range__middle",monthName:"February 2022",dayName:"26"},{id:"id__calendar-range__end",monthName:"March 2022",dayName:"4"}].forEach(({id:n,monthName:s,dayName:o})=>{m(`${n}--hover`,s,o).setAttribute("data-sb-pseudo-styles","hover"),m(`${n}--focus`,s,o).setAttribute("data-sb-pseudo-styles","focus")})},d={...i,name:"Sticker Sheet (Default)"},c={...i,name:"Sticker Sheet (RTL)",parameters:{...i.parameters,textDirection:"rtl"}};var p,u,_;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(_=(u=d.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var S,h,g;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl"
  }
}`,...(g=(h=c.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const $=["StickerSheetDefault","StickerSheetRTL"];export{d as StickerSheetDefault,c as StickerSheetRTL,$ as __namedExportsOrder,V as default};
