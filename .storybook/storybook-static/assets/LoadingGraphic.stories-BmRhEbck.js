import{R as e}from"./index-CTjT7uj6.js";import{C as R}from"./ConfigureIcon-rQ2zey9J.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{L as a}from"./LoadingGraphic-Bs3yJZdF.js";import{A as o}from"./Avatar-BrPd9Rrx.js";import{$ as E}from"./Spot-DEMudAsV.js";import{B as x}from"./Scene-BFMjFkKq.js";const k={title:"Components/Loading states/LoadingGraphic",component:a,args:{size:"xlarge"}},t={parameters:{docs:{canvas:{sourceState:"shown"}}}},n={args:{isAnimated:!0}},s={args:{isReversed:!0},parameters:{backgrounds:{default:"Purple 700"}}},i={render:()=>e.createElement(r,null,e.createElement(r.Header,{headings:["Loading Skeleton","Example"],hasVerticalHeadings:!0}),e.createElement(r.Body,null,e.createElement(r.Row,{rowTitle:"Icon (small)"},e.createElement(a,{size:"small"}),e.createElement(R,{"aria-label":"Aliens approaching!",role:"img"})),e.createElement(r.Row,{rowTitle:"Avatar (medium)"},e.createElement(a,{size:"medium"}),e.createElement(o,{fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!0,size:"medium"})),e.createElement(r.Row,{rowTitle:"Avatar (large)"},e.createElement(a,{size:"large"}),e.createElement(o,{fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!0,size:"large"})),e.createElement(r.Row,{rowTitle:"Avatar (x-large)"},e.createElement(a,{size:"xlarge"}),e.createElement(o,{fullName:"Jane Doe",disableInitials:!1,isCurrentUser:!0,size:"xlarge"})),e.createElement(r.Row,{rowTitle:"Spot (xx-large)"},e.createElement(a,{size:"xxlarge"}),e.createElement(E,{alt:"informative-spot-image",classNameOverride:"!w-[150px]"})),e.createElement(r.Row,{rowTitle:"Scene (scene)"},e.createElement(a,{size:"scene"}),e.createElement(x,{alt:"positive-outro",classNameOverride:"!w-[400px]"}))))};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isAnimated: true
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,S,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isReversed: true
  },
  parameters: {
    backgrounds: {
      default: "Purple 700"
    }
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var h,f,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <StickerSheet>
      <StickerSheet.Header headings={["Loading Skeleton", "Example"]} hasVerticalHeadings />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Icon (small)">
          <LoadingGraphic size="small" />
          <ConfigureIcon aria-label="Aliens approaching!" role="img" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Avatar (medium)">
          <LoadingGraphic size="medium" />
          <Avatar fullName="Jane Doe" disableInitials={false} isCurrentUser size="medium" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Avatar (large)">
          <LoadingGraphic size="large" />
          <Avatar fullName="Jane Doe" disableInitials={false} isCurrentUser size="large" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Avatar (x-large)">
          <LoadingGraphic size="xlarge" />
          <Avatar fullName="Jane Doe" disableInitials={false} isCurrentUser size="xlarge" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Spot (xx-large)">
          <LoadingGraphic size="xxlarge" />
          <Informative alt="informative-spot-image" classNameOverride="!w-[150px]" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Scene (scene)">
          <LoadingGraphic size="scene" />
          <BrandMomentPositiveOutro alt="positive-outro" classNameOverride="!w-[400px]" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const z=["Playground","Animated","Reversed","Size"],G=Object.freeze(Object.defineProperty({__proto__:null,Animated:n,Playground:t,Reversed:s,Size:i,__namedExportsOrder:z,default:k},Symbol.toStringTag,{value:"Module"}));export{n as A,G as L,t as P,s as R,i as S};
