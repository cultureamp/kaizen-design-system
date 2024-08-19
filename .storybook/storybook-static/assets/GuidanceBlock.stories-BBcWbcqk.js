import{R as e}from"./index-CTjT7uj6.js";import{H as P}from"./Heading-Y5F8SWRW.js";import{T as D}from"./Text-D2gQH1xL.js";import{G as l}from"./GuidanceBlock-DFXKBm4K.js";import{$ as p}from"./Spot-DEMudAsV.js";import{B as H,z as j}from"./Scene-BFMjFkKq.js";const m=()=>e.createElement(e.Fragment,null,e.createElement(P,{tag:"h3",variant:"heading-3"},"This is the Guidance block title"),e.createElement(D,{variant:"body"},"Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis,")),d={description:"Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",title:"This is the Guidance block title"},A={title:"Containers/GuidanceBlock/v2",component:l,args:{layout:"default",illustration:e.createElement(p,{alt:""})},argTypes:{actions:{control:!1},illustrationType:{description:"Sets the how the width and aspect ratio will respond to the Illustration passed in."},illustration:{control:{type:"radio"},options:["spot","scene"],mapping:{spot:e.createElement(p,{alt:""}),scene:e.createElement(H,{alt:""})},description:"This takes a scene scene or spot element, ie: `<Informative />`. This radio button implementation is a storybook only representation to toggle between the two illustration styles."},content:{description:"If you need to render custom content inside of the `GuidanceBlock` that is more than just a title and description use this prop instead of the default `text` option."}}},a={args:{text:d},parameters:{docs:{canvas:{sourceState:"shown"}}}},n={args:{content:e.createElement(m,null),actions:{primary:{label:"Learn more",onClick:()=>alert("tada: 🎉")},secondary:{label:"Dismiss",href:"#"}}}},s={args:{content:e.createElement(m,null),actions:{primary:{label:"Hover me for a tooltip",onClick:()=>alert("tada: 🎉"),tooltip:{text:"Opens in a new tab",mood:"cautionary"}},secondary:{label:"Dismiss",href:"#"}}}},r={args:{content:e.createElement(m,null)}},o={render:t=>e.createElement("div",{style:{display:"flex",gap:"36px"}},e.createElement(l,{...t}),e.createElement(l,{...t})),args:{layout:"stacked",content:e.createElement(m,null)}},i={args:{illustration:e.createElement(j,{alt:""}),illustrationType:"scene",text:d}},c={render:t=>e.createElement("div",{className:"flex flex-col gap-16"},e.createElement(l,{...t}),e.createElement(l,{variant:"expert-advice",...t})),args:{text:d}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,v,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,k,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var C,E,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    content: <ContentComponent />
  }
}`,...(S=(E=r.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var T,G,B;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(G=o.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var w,I,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    illustration: <SkillsCoachEssentialFeedback alt="" />,
    illustrationType: "scene",
    text: defaultText
  }
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var _,z,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-16">
      <GuidanceBlock {...args} />
      <GuidanceBlock variant="expert-advice" {...args} />
    </div>,
  args: {
    text: defaultText
  }
}`,...(M=(z=c.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const F=["Playground","Actions","Tooltip","CustomContent","Stacked","SceneExample","Variants"],J=Object.freeze(Object.defineProperty({__proto__:null,Actions:n,CustomContent:r,Playground:a,SceneExample:i,Stacked:o,Tooltip:s,Variants:c,__namedExportsOrder:F,default:A},Symbol.toStringTag,{value:"Module"}));export{n as A,r as C,J as G,a as P,o as S,s as T,c as V,i as a};
