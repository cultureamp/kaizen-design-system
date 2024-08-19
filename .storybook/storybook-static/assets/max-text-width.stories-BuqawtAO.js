import{R as s}from"./index-CTjT7uj6.js";import{T as m}from"./TailwindStoryTemplate-U37Yq8dh.js";import{u as d,k as c}from"./tailwind-presets-Cosq-5W0.js";const p="max-w-",l=Object.entries(c.extend.maxWidth||[]).map(([t,e])=>({utilityClassName:`${p}${t}`,cssProperty:e})),x={title:"Guides/Tailwind/Utility Class References/Typography/Max Text Width",parameters:{a11y:{disable:!0},chromatic:{disable:!1},docsLayout:"fullPage",docs:{description:{component:d(p,l[0].utilityClassName)}}}},u={"max-w-paragraph-lede":"text-paragraph-lede leading-paragraph-lede","max-w-paragraph":"text-paragraph leading-paragraph","max-w-paragraph-sm":"text-paragraph-sm leading-paragraph-sm","max-w-paragraph-xs":"text-paragraph-xs leading-paragraph-xs"},r=t=>u[t]||"",a=({isReversed:t})=>s.createElement(m,{compiledCssPropertyName:"max-width",classKeyValues:l,renderExampleComponent:e=>s.createElement(s.Fragment,null,s.createElement("p",{className:[e,r(e)].join(" ")},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio incidunt explicabo facilis ipsam, porro magni vero libero itaque rerum deserunt quo molestiae expedita dolor? Alias iusto ad maiores odit! (",[e,r(e)].join(" "),")"),s.createElement("code",{className:"text-paragraph-sm bg-gray-300 py-4 px-8"},[e,r(e)].join(" "))),isReversed:t});a.__docgenInfo={description:"",methods:[],displayName:"MaxTextWidth"};var i,o,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
  isReversed
}) => <TailwindStoryTemplate compiledCssPropertyName="max-width" classKeyValues={classEntries} renderExampleComponent={(utilityClass): React.ReactElement => <>
        <p className={[utilityClass, getFontClass(utilityClass)].join(" ")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio
          incidunt explicabo facilis ipsam, porro magni vero libero itaque rerum
          deserunt quo molestiae expedita dolor? Alias iusto ad maiores odit! (
          {[utilityClass, getFontClass(utilityClass)].join(" ")})
        </p>
        <code className="text-paragraph-sm bg-gray-300 py-4 px-8">
          {[utilityClass, getFontClass(utilityClass)].join(" ")}
        </code>
      </>} isReversed={isReversed} />`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["MaxTextWidth"],f=Object.freeze(Object.defineProperty({__proto__:null,MaxTextWidth:a,__namedExportsOrder:g,default:x},Symbol.toStringTag,{value:"Module"}));export{f as E,a as M};
