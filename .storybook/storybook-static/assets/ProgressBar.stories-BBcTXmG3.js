import{R as n}from"./index-CTjT7uj6.js";import{P as t}from"./ProgressBar-DWqNK3dq.js";const k={title:"Components/ProgressBar",component:t,args:{value:25,max:100,color:"green",isAnimating:!1,label:"25%",isReversed:!1},argTypes:{mood:{control:!1}},parameters:{a11y:{config:{rules:[{id:"aria-progressbar-name",enabled:!1}]}}}},e={parameters:{docs:{canvas:{sourceState:"shown"}}}},w=[{title:"Blue",props:{color:"blue"}},{title:"Green",props:{color:"green"}},{title:"Red",props:{color:"red"}},{title:"Yellow",props:{color:"yellow"}}],a={render:()=>n.createElement("div",{className:"flex flex-col gap-16"},w.map(({title:c,props:_})=>n.createElement(t,{key:c,..._,value:3,max:5,label:c,isAnimating:!1,isReversed:!1})))},r={args:{isAnimating:!0}},s={render:()=>n.createElement("div",{className:"flex flex-col gap-16"},n.createElement(t,{color:"green",value:3,max:5,label:"3/5",isAnimating:!1,isReversed:!1}),n.createElement(t,{color:"green",value:60,max:100,label:"60%",isAnimating:!1,isReversed:!1}))},o={parameters:{backgrounds:{default:"Purple 700"}},args:{isReversed:!0}},l={args:{"aria-label":"Development goals"}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16">
      {colors.map(({
      title,
      props
    }) => <ProgressBar key={title} {...props} value={3} max={5} label={title} isAnimating={false} isReversed={false} />)}
    </div>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,v,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isAnimating: true
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,A,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16">
      <ProgressBar color="green" value={3} max={5} label="3/5" isAnimating={false} isReversed={false} />
      <ProgressBar color="green" value={60} max={100} label="60%" isAnimating={false} isReversed={false} />
    </div>
}`,...(R=(A=s.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var P,S,y;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "Purple 700"
    }
  },
  args: {
    isReversed: true
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var B,E,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    "aria-label": "Development goals"
  }
}`,...(N=(E=l.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const C=["Playground","Colors","IsAnimating","ValueAndMax","Reversed","AccessibleName"],O=Object.freeze(Object.defineProperty({__proto__:null,AccessibleName:l,Colors:a,IsAnimating:r,Playground:e,Reversed:o,ValueAndMax:s,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{l as A,a as C,r as I,O as P,o as R,s as V,e as a};
