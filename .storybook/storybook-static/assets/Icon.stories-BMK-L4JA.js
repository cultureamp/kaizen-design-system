import{R as e,r as v}from"./index-CTjT7uj6.js";import{I as l}from"./index-Bw8_9xcx.js";import{T as x}from"./Text-D2gQH1xL.js";import{s as a}from"./icon.module-5bxA8pBa.js";import{A as b}from"./AddIcon-C6V_KfCs.js";import{T as I}from"./Tag-D-4sFjnu.js";const C={title:"Components/Icons",component:b,args:{role:"presentation"},argTypes:{role:{options:["presentation","img"],control:{type:"radio"}},"aria-label":{control:"text",if:{arg:"role",eq:"img"}}}},o={parameters:{docs:{canvas:{sourceState:"shown"}}}},n={render:r=>e.createElement("div",{className:"text-blue-500"},e.createElement(b,{...r}))},T=({icon:r,iconName:t})=>{const[E,c]=v.useState(!1),S=()=>{navigator.clipboard.writeText(`<${t} role="presentation" />`),c(!0),setTimeout(()=>c(!1),1e3)};return e.createElement("li",{key:t},e.createElement("button",{type:"button",className:a.button,onClick:S},E?e.createElement("span",{className:a.copiedTag},e.createElement(I,{color:"green",classNameOverride:a.tag},"Copied!")):e.createElement(e.Fragment,null,e.createElement("span",{className:a.icon},r),e.createElement(x,{variant:"small",tag:"span"},t))))},O=["ThumbsUpIcon","ThumbsDownIcon"],s={render:()=>e.createElement("div",{className:"flex flex-col gap-16"},e.createElement("ul",{className:a.grid},Object.keys(l).filter(r=>!O.includes(r)).map(r=>{const t=l[r]({role:"presentation"});return e.createElement(T,{key:r,icon:t,iconName:r})})))};var m,i,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="text-blue-500">
      <AddIcon {...args} />
    </div>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,N;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16">
      <ul className={styles.grid}>
        {Object.keys(ICONS).filter(iconName => !deprecatedList.includes(iconName)).map(iconName => {
        const icon = ICONS[(iconName as keyof typeof ICONS)]({
          role: "presentation"
        });
        return <ReferenceButton key={iconName} icon={icon} iconName={iconName} />;
      })}
      </ul>
    </div>
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const k=["Playground","ApplyColour","Reference"],P=Object.freeze(Object.defineProperty({__proto__:null,ApplyColour:n,Playground:o,Reference:s,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{n as A,P as I,o as P,s as R};
