import{R as e}from"./index-CTjT7uj6.js";import{H as D}from"./Heading-Y5F8SWRW.js";import{T as H}from"./Text-D2gQH1xL.js";import{G as l,v as j}from"./types-CYr32jaJ.js";import{$ as u}from"./Spot-DEMudAsV.js";import{B as A,z as F}from"./Scene-BFMjFkKq.js";const m=()=>e.createElement(e.Fragment,null,e.createElement(D,{tag:"h3",variant:"heading-3"},"This is the Guidance block title"),e.createElement(H,{variant:"body"},"Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis,")),d={description:"Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",title:"This is the Guidance block title"},V={title:"Containers/GuidanceBlock/v1",component:l,args:{layout:"default",illustration:e.createElement(u,{alt:""})},argTypes:{actions:{control:!1},illustrationType:{description:"Sets the how the width and aspect ratio will respond to the Illustration passed in."},illustration:{control:{type:"radio"},options:["spot","scene"],mapping:{spot:e.createElement(u,{alt:""}),scene:e.createElement(A,{alt:""})},description:"This takes a scene scene or spot element, ie: `<Informative />`. This radio button implementation is a storybook only representation to toggle between the two illustration styles."},content:{description:"If you need to render custom content inside of the `GuidanceBlock` that is more than just a title and description use this prop instead of the default `text` option."}}},t={args:{text:d},parameters:{docs:{canvas:{sourceState:"shown"}}}},a={args:{content:e.createElement(m,null),actions:{primary:{label:"Learn more",onClick:()=>alert("tada: 🎉")},secondary:{label:"Dismiss",href:"#"}}}},n={args:{content:e.createElement(m,null),actions:{primary:{label:"Hover me for a tooltip",onClick:()=>alert("tada: 🎉"),tooltip:{text:"Opens in a new tab",mood:"cautionary"}},secondary:{label:"Dismiss",href:"#"}}}},s={args:{content:e.createElement(m,null)}},r={render:c=>e.createElement("div",{style:{display:"flex",gap:"36px"}},e.createElement(l,{...c}),e.createElement(l,{...c})),args:{layout:"stacked",content:e.createElement(m,null)}},o={args:{illustration:e.createElement(F,{alt:""}),illustrationType:"scene",text:d}},i={render:c=>e.createElement("div",{className:"flex flex-col gap-16"},j.map(p=>e.createElement(l,{key:p,...c,variant:p}))),args:{text:d}};var g,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: defaultText
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,h,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    content: <ContentComponent />,
    actions: {
      primary: {
        label: "Learn more",
        onClick: () => alert("tada: 🎉")
      },
      secondary: {
        label: "Dismiss",
        href: "#"
      }
    }
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,b,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    content: <ContentComponent />,
    actions: {
      primary: {
        label: "Hover me for a tooltip",
        onClick: () => alert("tada: 🎉"),
        tooltip: {
          text: "Opens in a new tab",
          mood: "cautionary"
        }
      },
      secondary: {
        label: "Dismiss",
        href: "#"
      }
    }
  }
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,E,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    content: <ContentComponent />
  }
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var G,w,B;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "36px"
  }}>
      <GuidanceBlock {...args} />
      <GuidanceBlock {...args} />
    </div>,
  args: {
    layout: "stacked",
    content: <ContentComponent />
  }
}`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var M,I,O;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    illustration: <SkillsCoachEssentialFeedback alt="" />,
    illustrationType: "scene",
    text: defaultText
  }
}`,...(O=(I=o.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var _,z,P;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-16">
      {variantsMap.map(variant => <GuidanceBlock key={variant} {...args} variant={variant} />)}
    </div>,
  args: {
    text: defaultText
  }
}`,...(P=(z=i.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const L=["Playground","Actions","Tooltip","CustomContent","Stacked","SceneExample","Variants"],Q=Object.freeze(Object.defineProperty({__proto__:null,Actions:a,CustomContent:s,Playground:t,SceneExample:o,Stacked:r,Tooltip:n,Variants:i,__namedExportsOrder:L,default:V},Symbol.toStringTag,{value:"Module"}));export{a as A,s as C,Q as G,t as P,r as S,n as T,i as V,o as a};
