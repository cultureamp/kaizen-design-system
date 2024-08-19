import{R as e}from"./index-CTjT7uj6.js";import{w as o}from"./index-BySiBzEG.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{C as _}from"./CalendarRange-BpKdqjCg.js";import"./index-DZLKizrv.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./isInvalidDate-CQ4jNt7-.js";import"./jsx-runtime-Cw0GR0a5.js";import"./startOfDay-MoyOWjoN.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./SVG-7WFwBCn9.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./en-AU-C5dfMWdV.js";const N={title:"Components/Date controls/Calendars/CalendarRange",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"color-contrast",selector:':not([data-sb-pseudo-styles="hover"], [data-sb-pseudo-styles="focus"])'}]}}}},a=r=>e.createElement("div",{"data-testid":r.id},e.createElement(_,{selected:{from:new Date("2022-02-19"),to:new Date("2022-03-04")},...r})),l={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{heading:"Calendar Range"},e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Default"},e.createElement(a,null)),e.createElement(t.Row,{rowTitle:"With divider"},e.createElement("div",{style:{padding:"1.5rem 0"}},e.createElement(a,{hasDivider:!0}))))),e.createElement(t,{heading:"Pseudo states"},e.createElement(t.Header,{headings:["Hover","Focus"],hasVerticalHeadings:!0}),e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Selected (Start)"},e.createElement(a,{id:"id__calendar-range__start--hover"}),e.createElement(a,{id:"id__calendar-range__start--focus"})),e.createElement(t.Row,{rowTitle:"Selected (Middle)"},e.createElement(a,{id:"id__calendar-range__middle--hover"}),e.createElement(a,{id:"id__calendar-range__middle--focus"})),e.createElement(t.Row,{rowTitle:"Selected (End)"},e.createElement(a,{id:"id__calendar-range__end--hover"}),e.createElement(a,{id:"id__calendar-range__end--focus"}))))),parameters:{pseudo:{hover:'[data-sb-pseudo-styles="hover"]',focus:'[data-sb-pseudo-styles="focus"]',focusVisible:'[data-sb-pseudo-styles="focus"]'}},play:({canvasElement:r})=>{p(r)}},p=r=>{const i=o(r),c=(n,s,d)=>{const m=i.getByTestId(n),u=o(m).getByRole("grid",{name:s});return o(u).getByRole("gridcell",{name:d})};[{id:"id__calendar-range__start",monthName:"February 2022",dayName:"19"},{id:"id__calendar-range__middle",monthName:"February 2022",dayName:"26"},{id:"id__calendar-range__end",monthName:"March 2022",dayName:"4"}].forEach(({id:n,monthName:s,dayName:d})=>{c(`${n}--hover`,s,d).setAttribute("data-sb-pseudo-styles","hover"),c(`${n}--focus`,s,d).setAttribute("data-sb-pseudo-styles","focus")})},x={...l,name:"Sticker Sheet (Default)"},H={...l,name:"Sticker Sheet (RTL)",parameters:{...l.parameters,textDirection:"rtl"}},L=["StickerSheetDefault","StickerSheetRTL"];export{x as StickerSheetDefault,H as StickerSheetRTL,L as __namedExportsOrder,N as default};
