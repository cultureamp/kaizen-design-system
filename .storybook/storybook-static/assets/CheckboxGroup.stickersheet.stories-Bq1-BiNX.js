import{R as e}from"./index-CTjT7uj6.js";import{T as l}from"./Text-D2gQH1xL.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";import{C as i}from"./CheckboxGroup-C4D1pU9Y.js";import{C as c}from"./CheckboxField-Dex_qNHg.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./Label-DlmzItqQ.js";import"./Checkbox-B9bmVoGZ.js";import"./CheckIcon-BwUvLWmE.js";import"./SVG-7WFwBCn9.js";import"./MinusIcon-3DH7qpb8.js";const g={title:"Components/Checkbox controls/CheckboxGroup",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},m=({labelText:t,reversed:o,...n})=>e.createElement(i,{labelText:t,reversed:o,...n},e.createElement(c,{labelText:"Checkbox one",reversed:o}),e.createElement(c,{labelText:"Checkbox two",reversed:o,checkedStatus:"on"}),e.createElement(c,{labelText:"Checkbox three",reversed:o,checkedStatus:"mixed"})),r={render:({isReversed:t})=>e.createElement(a,{isReversed:t},e.createElement(a.Header,{headings:["Default","No Bottom Margin"]}),e.createElement(a.Body,null,e.createElement(a.Row,null,e.createElement(e.Fragment,null,e.createElement(m,{reversed:t,labelText:"CheckboxGroup"}),e.createElement(l,{variant:"body",color:t?"white":"dark"},"Next line")),e.createElement(e.Fragment,null,e.createElement(m,{reversed:t,labelText:"CheckboxGroup",noBottomMargin:!0}),e.createElement(l,{variant:"body",color:t?"white":"dark"},"Next line")))))},G={...r,name:"Sticker Sheet (Default)"},R={...r,name:"Sticker Sheet (Reversed)",parameters:{...r.parameters,backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},D={...r,name:"Sticker Sheet (RTL)",parameters:{...r.parameters,textDirection:"rtl"}},w=["StickerSheetDefault","StickerSheetReversed","StickerSheetRTL"];export{G as StickerSheetDefault,D as StickerSheetRTL,R as StickerSheetReversed,w as __namedExportsOrder,g as default};
