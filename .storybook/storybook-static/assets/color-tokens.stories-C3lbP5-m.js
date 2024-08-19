import{R as e}from"./index-CTjT7uj6.js";import{c as i}from"./index-Cz46hO83.js";import{H as n}from"./Heading-Y5F8SWRW.js";import{t as o}from"./tokens-R-QqTfm-.js";const E={title:"Guides/Tokens/Color Tokens",parameters:{chromatic:{disable:!1,diffThreshold:0},docsLayout:"fullPage"}},l=({children:a,gapSize:m,horizontal:c,style:p,...k})=>e.createElement("div",{style:{display:"flex",flexDirection:c?"row":"column",gap:m&&o.spacing[m],...p},...k},a),r=({color:a,name:m})=>{const c=i.get(a);return c?e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("h4",{style:{...o.typography.heading4,writingMode:"vertical-lr"}},m),e.createElement("div",{style:{width:"20rem",height:"10rem",backgroundColor:a,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.createElement(n,{variant:"heading-5",tag:"span"},e.createElement("span",{style:{color:a,filter:"invert(1) grayscale(1) contrast(100)"}},i.to.hex(c.value))),e.createElement(n,{variant:"heading-5",tag:"span"},e.createElement("span",{style:{color:a,filter:"invert(1) grayscale(1) contrast(100)"}},i.to.rgb(c.value))))):null},C=({children:a})=>e.createElement("div",{style:{maxWidth:"calc(100vw - 4rem)",contain:"content",display:"grid",gap:"2rem",gridTemplateColumns:"repeat(auto-fill, 400px)"}},a),t=()=>e.createElement("div",{style:{padding:o.spacing[24]}},e.createElement(l,{horizontal:!0,gapSize:48},e.createElement(C,null,e.createElement(l,{gapSize:24},e.createElement(n,{variant:"heading-3"},"Purple"),e.createElement(r,{name:"100",color:o.color.purple[100]}),e.createElement(r,{name:"200",color:o.color.purple[200]}),e.createElement(r,{name:"300",color:o.color.purple[300]}),e.createElement(r,{name:"400",color:o.color.purple[400]}),e.createElement(r,{name:"500",color:o.color.purple[500]}),e.createElement(r,{name:"600",color:o.color.purple[600]}),e.createElement(r,{name:"700",color:o.color.purple[700]}),e.createElement(r,{name:"800",color:o.color.purple[800]})),e.createElement(l,{gapSize:24},e.createElement(n,{variant:"heading-3"},"Blue"),e.createElement(r,{name:"100",color:o.color.blue[100]}),e.createElement(r,{name:"200",color:o.color.blue[200]}),e.createElement(r,{name:"300",color:o.color.blue[300]}),e.createElement(r,{name:"400",color:o.color.blue[400]}),e.createElement(r,{name:"500",color:o.color.blue[500]}),e.createElement(r,{name:"600",color:o.color.blue[600]}),e.createElement(r,{name:"700",color:o.color.blue[700]})),e.createElement(l,{gapSize:24},e.createElement(n,{variant:"heading-3"},"Red"),e.createElement(r,{name:"100",color:o.color.red[100]}),e.createElement(r,{name:"200",color:o.color.red[200]}),e.createElement(r,{name:"300",color:o.color.red[300]}),e.createElement(r,{name:"400",color:o.color.red[400]}),e.createElement(r,{name:"500",color:o.color.red[500]}),e.createElement(r,{name:"600",color:o.color.red[600]}),e.createElement(r,{name:"700",color:o.color.red[700]})),e.createElement(l,{gapSize:24},e.createElement(n,{variant:"heading-3"},"Orange"),e.createElement(r,{name:"100",color:o.color.orange[100]}),e.createElement(r,{name:"200",color:o.color.orange[200]}),e.createElement(r,{name:"300",color:o.color.orange[300]}),e.createElement(r,{name:"400",color:o.color.orange[400]}),e.createElement(r,{name:"500",color:o.color.orange[500]}),e.createElement(r,{name:"600",color:o.color.orange[600]}),e.createElement(r,{name:"700",color:o.color.orange[700]})),e.createElement(l,{gapSize:24},e.createElement(n,{variant:"heading-3"},"Green"),e.createElement(r,{name:"100",color:o.color.green[100]}),e.createElement(r,{name:"200",color:o.color.green[200]}),e.createElement(r,{name:"300",color:o.color.green[300]}),e.createElement(r,{name:"400",color:o.color.green[400]}),e.createElement(r,{name:"500",color:o.color.green[500]}),e.createElement(r,{name:"600",color:o.color.green[600]}),e.createElement(r,{name:"700",color:o.color.green[700]})),e.createElement(l,{gapSize:24},e.createElement(n,{variant:"heading-3"},"Yellow"),e.createElement(r,{name:"100",color:o.color.yellow[100]}),e.createElement(r,{name:"200",color:o.color.yellow[200]}),e.createElement(r,{name:"300",color:o.color.yellow[300]}),e.createElement(r,{name:"400",color:o.color.yellow[400]}),e.createElement(r,{name:"500",color:o.color.yellow[500]}),e.createElement(r,{name:"600",color:o.color.yellow[600]}),e.createElement(r,{name:"700",color:o.color.yellow[700]})),e.createElement(l,{gapSize:24},e.createElement(n,{variant:"heading-3"},"Gray"),e.createElement(r,{name:"100",color:o.color.gray[100]}),e.createElement(r,{name:"200",color:o.color.gray[200]}),e.createElement(r,{name:"300",color:o.color.gray[300]}),e.createElement(r,{name:"400",color:o.color.gray[400]}),e.createElement(r,{name:"500",color:o.color.gray[500]}),e.createElement(r,{name:"600",color:o.color.gray[600]})),e.createElement(l,{gapSize:24},e.createElement(n,{variant:"heading-3"},"White"),e.createElement(r,{name:"White",color:o.color.white})))));t.__docgenInfo={description:"",methods:[],displayName:"ColorTokens"};var s,g,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div style={{
  padding: tokens.spacing[24]
}}>
    <Stack horizontal gapSize={48}>
      <ComponentsSection>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Purple</Heading>
          <ColorDemo name="100" color={tokens.color.purple[100]} />
          <ColorDemo name="200" color={tokens.color.purple[200]} />
          <ColorDemo name="300" color={tokens.color.purple[300]} />
          <ColorDemo name="400" color={tokens.color.purple[400]} />
          <ColorDemo name="500" color={tokens.color.purple[500]} />
          <ColorDemo name="600" color={tokens.color.purple[600]} />
          <ColorDemo name="700" color={tokens.color.purple[700]} />
          <ColorDemo name="800" color={tokens.color.purple[800]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Blue</Heading>
          <ColorDemo name="100" color={tokens.color.blue[100]} />
          <ColorDemo name="200" color={tokens.color.blue[200]} />
          <ColorDemo name="300" color={tokens.color.blue[300]} />
          <ColorDemo name="400" color={tokens.color.blue[400]} />
          <ColorDemo name="500" color={tokens.color.blue[500]} />
          <ColorDemo name="600" color={tokens.color.blue[600]} />
          <ColorDemo name="700" color={tokens.color.blue[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Red</Heading>
          <ColorDemo name="100" color={tokens.color.red[100]} />
          <ColorDemo name="200" color={tokens.color.red[200]} />
          <ColorDemo name="300" color={tokens.color.red[300]} />
          <ColorDemo name="400" color={tokens.color.red[400]} />
          <ColorDemo name="500" color={tokens.color.red[500]} />
          <ColorDemo name="600" color={tokens.color.red[600]} />
          <ColorDemo name="700" color={tokens.color.red[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Orange</Heading>
          <ColorDemo name="100" color={tokens.color.orange[100]} />
          <ColorDemo name="200" color={tokens.color.orange[200]} />
          <ColorDemo name="300" color={tokens.color.orange[300]} />
          <ColorDemo name="400" color={tokens.color.orange[400]} />
          <ColorDemo name="500" color={tokens.color.orange[500]} />
          <ColorDemo name="600" color={tokens.color.orange[600]} />
          <ColorDemo name="700" color={tokens.color.orange[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Green</Heading>
          <ColorDemo name="100" color={tokens.color.green[100]} />
          <ColorDemo name="200" color={tokens.color.green[200]} />
          <ColorDemo name="300" color={tokens.color.green[300]} />
          <ColorDemo name="400" color={tokens.color.green[400]} />
          <ColorDemo name="500" color={tokens.color.green[500]} />
          <ColorDemo name="600" color={tokens.color.green[600]} />
          <ColorDemo name="700" color={tokens.color.green[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Yellow</Heading>
          <ColorDemo name="100" color={tokens.color.yellow[100]} />
          <ColorDemo name="200" color={tokens.color.yellow[200]} />
          <ColorDemo name="300" color={tokens.color.yellow[300]} />
          <ColorDemo name="400" color={tokens.color.yellow[400]} />
          <ColorDemo name="500" color={tokens.color.yellow[500]} />
          <ColorDemo name="600" color={tokens.color.yellow[600]} />
          <ColorDemo name="700" color={tokens.color.yellow[700]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">Gray</Heading>
          <ColorDemo name="100" color={tokens.color.gray[100]} />
          <ColorDemo name="200" color={tokens.color.gray[200]} />
          <ColorDemo name="300" color={tokens.color.gray[300]} />
          <ColorDemo name="400" color={tokens.color.gray[400]} />
          <ColorDemo name="500" color={tokens.color.gray[500]} />
          <ColorDemo name="600" color={tokens.color.gray[600]} />
        </Stack>
        <Stack gapSize={24}>
          <Heading variant="heading-3">White</Heading>
          <ColorDemo name="White" color={tokens.color.white} />
        </Stack>
      </ComponentsSection>
    </Stack>
  </div>`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const u=["ColorTokens"],v=Object.freeze(Object.defineProperty({__proto__:null,ColorTokens:t,__namedExportsOrder:u,default:E},Symbol.toStringTag,{value:"Module"}));export{v as C,t as a};
