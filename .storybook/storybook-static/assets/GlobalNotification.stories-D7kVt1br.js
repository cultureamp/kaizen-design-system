import{G as d}from"./GlobalNotification-D98E7qGC.js";const m={title:"Components/Notifications/GlobalNotification",component:d,args:{variant:"success",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam natus doloremque"},argTypes:{type:{control:!1}}},a={parameters:{docs:{canvas:{sourceState:"shown"}},a11y:{timeout:1e3}}},e={args:{persistent:!0,variant:"warning",children:"Please fill in all required fields before submitting"}};var s,t,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    },
    a11y: {
      // Fade-in animation has colour contrast issues.
      timeout: 1000
    }
  }
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var n,o,i,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    persistent: true,
    variant: "warning",
    children: "Please fill in all required fields before submitting"
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source},description:{story:"`persistent` notification will remain on screen and cannot be removed by the user. This will also remove the fly in animation on page load",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const u=["Playground","Persistent"],f=Object.freeze(Object.defineProperty({__proto__:null,Persistent:e,Playground:a,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{f as G,a as P,e as a};
