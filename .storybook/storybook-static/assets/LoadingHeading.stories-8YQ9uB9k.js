import{R as e}from"./index-CTjT7uj6.js";import{H as _}from"./Heading-Y5F8SWRW.js";import{S as d}from"./StickerSheet-DpoO9nWV.js";import{L as P}from"./LoadingHeading-DpJcTLii.js";const b={title:"Components/Loading states/LoadingHeading",component:P,args:{variant:"heading-1"}},a={parameters:{docs:{canvas:{sourceState:"shown"}}}},r={args:{isAnimated:!0}},n={args:{isReversed:!0},parameters:{backgrounds:{default:"Purple 700"}}},A=["display-0","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6"],s={render:()=>e.createElement(d,null,e.createElement(d.Header,{headings:["<LoadingHeading />","<Heading />"],hasVerticalHeadings:!0}),e.createElement(d.Body,null,A.map(i=>e.createElement(d.Row,{key:i,rowTitle:i},e.createElement(P,{variant:i}),e.createElement(_,{variant:i},"Heading")))))},t={args:{isLink:!0}},o={args:{width:50}};var c,g,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isAnimated: true
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var S,h,H;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReversed: true
  },
  parameters: {
    backgrounds: {
      default: "Purple 700"
    }
  }
}`,...(H=(h=n.parameters)==null?void 0:h.docs)==null?void 0:H.source}}};var k,L,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <StickerSheet>
      <StickerSheet.Header headings={["<LoadingHeading />", "<Heading />"]} hasVerticalHeadings />
      <StickerSheet.Body>
        {headingVariants.map(variant => <StickerSheet.Row key={variant} rowTitle={variant}>
            <LoadingHeading variant={variant} />
            <Heading variant={variant}>Heading</Heading>
          </StickerSheet.Row>)}
      </StickerSheet.Body>
    </StickerSheet>
}`,...(v=(L=s.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var y,R,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isLink: true
  }
}`,...(f=(R=t.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var w,E,V;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    width: 50
  }
}`,...(V=(E=o.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const B=["Playground","Animated","Reversed","Variant","Link","Width"],x=Object.freeze(Object.defineProperty({__proto__:null,Animated:r,Link:t,Playground:a,Reversed:n,Variant:s,Width:o,__namedExportsOrder:B,default:b},Symbol.toStringTag,{value:"Module"}));export{r as A,x as L,a as P,n as R,s as V,o as W,t as a};
