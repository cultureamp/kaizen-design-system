import{R as e}from"./index-CTjT7uj6.js";import{S as a}from"./StickerSheet-DpoO9nWV.js";const n={title:"Guides/Tailwind/Utility Class References/Modifiers/Pseudo Selectors",parameters:{a11y:{disable:!0},docsLayout:"fullPage",docs:{description:{component:"Add a modifier before a standard tailwind utility class to have it apply in certain states. For example, hover:text-blue-500 will set the font color to blue-500 on hover."}}}},t=({isReversed:l})=>e.createElement(a,{isReversed:l},e.createElement(a.Header,{headings:["Utility Class","Compiled CSS","Example"]}),e.createElement(a.Row,{rowTitle:"hover"},e.createElement("p",{className:"font-family-paragraph"},"hover:bg-blue-200"),e.createElement("p",{className:"font-family-paragraph"},"background-color: #bde2f5"),e.createElement("button",{type:"button",className:"border-solid bg-white border-[black] font-family-paragraph w-[150px] rounded hover:bg-blue-200 py-16 px-12 text-center"},"Hover me")),e.createElement(a.Row,{rowTitle:"focus"},e.createElement("p",{className:"font-family-paragraph"},"focus:bg-blue-200"),e.createElement("p",{className:"font-family-paragraph"},"background-color: #bde2f5"),e.createElement("button",{type:"button",tabIndex:0,className:"border-solid bg-white border-[black] font-family-paragraph w-[150px] rounded focus:bg-blue-200 py-16 px-12 text-center"},"Focus me")));t.__docgenInfo={description:"",methods:[],displayName:"PseudoSelectors"};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  isReversed
}) => <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header headings={["Utility Class", "Compiled CSS", "Example"]} />
    <StickerSheet.Row rowTitle="hover">
      <p className="font-family-paragraph">hover:bg-blue-200</p>
      <p className="font-family-paragraph">background-color: #bde2f5</p>
      <button type="button" className="border-solid bg-white border-[black] font-family-paragraph w-[150px] rounded hover:bg-blue-200 py-16 px-12 text-center">
        Hover me
      </button>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="focus">
      <p className="font-family-paragraph">focus:bg-blue-200</p>
      <p className="font-family-paragraph">background-color: #bde2f5</p>
      <button type="button" tabIndex={0} className="border-solid bg-white border-[black] font-family-paragraph w-[150px] rounded focus:bg-blue-200 py-16 px-12 text-center">
        Focus me
      </button>
    </StickerSheet.Row>
  </StickerSheet>`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const c=["PseudoSelectors"],d=Object.freeze(Object.defineProperty({__proto__:null,PseudoSelectors:t,__namedExportsOrder:c,default:n},Symbol.toStringTag,{value:"Module"}));export{d as E,t as P};
