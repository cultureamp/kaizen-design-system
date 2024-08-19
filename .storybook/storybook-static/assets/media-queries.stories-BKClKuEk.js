import{R as e}from"./index-CTjT7uj6.js";import{H as p}from"./Heading-hQmlkvcj.js";import{T as a}from"./Text-DAOK2_W2.js";const g={title:"Guides/Tailwind/Utility Class References/Modifiers/Media Queries",parameters:{docsLayout:"fullPage",docs:{a11y:{disable:!0},description:{component:"Require @kaizen/tailwind and add it into your tailwind config"}}}},i=({selector:n,selectorValue:u,children:b})=>e.createElement("div",{className:"my-12"},e.createElement(a,{variant:"intro-lede"},"Pseudo selector: ",n),e.createElement(a,{variant:"body"},"Breakpoint: ",u),e.createElement(a,{variant:"body"},"In this example: ",n,":bg-blue-400"),b),t=()=>e.createElement("div",{className:"py-32"},e.createElement(p,{tag:"p",variant:"heading-4",classNameOverride:"text-center"},"These breakpoints activate ",e.createElement("em",null,"over")," a certain screen width. Meaning that bg-blue-400 will be applied when the screen gets ",e.createElement("em",null,"wider"),"."),e.createElement(i,{selector:"md",selectorValue:"768px"},e.createElement("div",{className:"border-solid md:bg-blue-400 h-[50px] w-full rounded"})),e.createElement(i,{selector:"lg",selectorValue:"1080px"},e.createElement("div",{className:"border-solid lg:bg-blue-400 h-[50px] w-full rounded"}))),r=()=>e.createElement("div",{className:"py-32"},e.createElement(p,{tag:"p",variant:"heading-4",classNameOverride:"text-center"},"Bespoke, one-off media queries can be created with arbitrary values. See the"," ",e.createElement("a",{href:"https://tailwindcss.com/docs/responsive-design#arbitrary-values"},"Tailwind docs")," ","for more info."),e.createElement("div",{className:"py-32"},e.createElement(a,{variant:"body"},e.createElement("strong",null,"Min-width breakpoint")," (applied when the screen gets"," ",e.createElement("em",null,"wider"),")"),e.createElement(a,{variant:"body"},"In this example: min-[500px]:bg-blue-400"),e.createElement("div",{className:"border-solid min-[500px]:bg-blue-400 h-[50px] w-full rounded-default"})),e.createElement(a,{variant:"body"},e.createElement("strong",null,"Max-width breakpoint")," (applied when the screen gets"," ",e.createElement("em",null,"slimmer"),")"),e.createElement(a,{variant:"body"},"In this example: max-[500px]:bg-blue-400"),e.createElement("div",{className:"border-solid max-[500px]:bg-blue-400 h-[50px] w-full rounded-default"}));t.__docgenInfo={description:"",methods:[],displayName:"MediaQueries"};r.__docgenInfo={description:"",methods:[],displayName:"ArbitraryMediaQueries"};var s,l,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center">
      These breakpoints activate <em>over</em> a certain screen width. Meaning
      that bg-blue-400 will be applied when the screen gets <em>wider</em>.
    </Heading>
    <QueryInfo selector="md" selectorValue="768px">
      <div className="border-solid md:bg-blue-400 h-[50px] w-full rounded" />
    </QueryInfo>
    <QueryInfo selector="lg" selectorValue="1080px">
      <div className="border-solid lg:bg-blue-400 h-[50px] w-full rounded" />
    </QueryInfo>
  </div>`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var o,c,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center">
      Bespoke, one-off media queries can be created with arbitrary values. See
      the{" "}
      <a href="https://tailwindcss.com/docs/responsive-design#arbitrary-values">
        Tailwind docs
      </a>{" "}
      for more info.
    </Heading>

    <div className="py-32">
      <Text variant="body">
        <strong>Min-width breakpoint</strong> (applied when the screen gets{" "}
        <em>wider</em>)
      </Text>
      <Text variant="body">In this example: min-[500px]:bg-blue-400</Text>
      <div className="border-solid min-[500px]:bg-blue-400 h-[50px] w-full rounded-default" />
    </div>

    <Text variant="body">
      <strong>Max-width breakpoint</strong> (applied when the screen gets{" "}
      <em>slimmer</em>)
    </Text>
    <Text variant="body">In this example: max-[500px]:bg-blue-400</Text>
    <div className="border-solid max-[500px]:bg-blue-400 h-[50px] w-full rounded-default" />
  </div>`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const h=["MediaQueries","ArbitraryMediaQueries"],y=Object.freeze(Object.defineProperty({__proto__:null,ArbitraryMediaQueries:r,MediaQueries:t,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{r as A,y as E,t as M};
