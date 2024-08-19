import{R as e}from"./index-CTjT7uj6.js";import{M as s}from"./MultiActionTile-g0BSN2oi.js";const A={title:"Components/Tiles/MultiActionTile",component:s,args:{title:"Title",metadata:"Side A",primaryAction:{label:"Take Action!"}},argTypes:{mood:{control:!1}}},a={parameters:{docs:{canvas:{sourceState:"shown"}}}},r={render:o=>e.createElement(e.Fragment,null,e.createElement(s,{...o,variant:"default",title:"default"}),e.createElement(s,{...o,variant:"expert-advice",title:"expert-advice"})),decorators:[o=>e.createElement("div",{className:"flex gap-16 flex-wrap"},e.createElement(o,null))]},t={args:{information:"Side B"}},n={args:{secondaryAction:{label:"Nevermind"}}};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <>
      <MultiActionTile {...args} variant="default" title="default" />
      <MultiActionTile {...args} variant="expert-advice" title="expert-advice" />
    </>,
  decorators: [Story => <div className="flex gap-16 flex-wrap">
        <Story />
      </div>]
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    information: "Side B"
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,v,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    secondaryAction: {
      label: "Nevermind"
    }
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const x=["Playground","Variants","Information","SecondaryAction"],b=Object.freeze(Object.defineProperty({__proto__:null,Information:t,Playground:a,SecondaryAction:n,Variants:r,__namedExportsOrder:x,default:A},Symbol.toStringTag,{value:"Module"}));export{t as I,b as M,a as P,n as S,r as V};
