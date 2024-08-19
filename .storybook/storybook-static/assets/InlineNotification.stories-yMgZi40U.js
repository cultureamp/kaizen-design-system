import{I as P}from"./InlineNotification-CD7nmnbO.js";const M={title:"Components/Notifications/InlineNotification",component:P,args:{headingProps:{children:"Informative",tag:"span",variant:"heading-6"},variant:"informative",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam natus doloremque"},argTypes:{type:{control:{disable:!0}}},parameters:{a11y:{timeout:1e3}}},t={parameters:{docs:{canvas:{sourceState:"shown"}}}},e={args:{persistent:!0,variant:"warning",children:"Please fill in all required fields before submitting",headingProps:{children:"Form error",variant:"heading-6",tag:"span"}}},i={args:{forceMultiline:!0,children:"Even with a small amount of text"}},s={args:{forceMultiline:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis esse, iste, obcaecati laborum dolorum eius, similique fugit itaque illum ipsam sapiente facilis cum? Accusamus eos possimus quae voluptates laboriosam necessitatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis esse, iste, obcaecati laborum dolorum eius, similique fugit itaque illum ipsam sapiente facilis cum? Accusamus eos possimus quae voluptates laboriosam necessitatibus."}};var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,c,l,u,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    persistent: true,
    variant: "warning",
    children: "Please fill in all required fields before submitting",
    headingProps: {
      children: "Form error",
      variant: "heading-6",
      tag: "span"
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"`persistent` notification will remain on screen and cannot be removed by the user. This will also remove the fly in animation on page load",...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var p,d,g,h,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    forceMultiline: true,
    children: "Even with a small amount of text"
  }
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source},description:{story:"`forceMultiline` will break child content onto a new line, regardless of content width. Without this prop, child content will be next to the heading until it stretches past its maximum content width.",...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var b,v,q,w,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    forceMultiline: true,
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis esse, iste, obcaecati laborum dolorum eius, similique fugit itaque illum ipsam sapiente facilis cum? Accusamus eos possimus quae voluptates laboriosam necessitatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis esse, iste, obcaecati laborum dolorum eius, similique fugit itaque illum ipsam sapiente facilis cum? Accusamus eos possimus quae voluptates laboriosam necessitatibus."
  }
}`,...(q=(v=s.parameters)==null?void 0:v.docs)==null?void 0:q.source},description:{story:"Without the `forceMultiline` prop, child content must exceed the maximum width of the container before it breaks onto a new line.",...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};const x=["Playground","Persistent","ForceMultilineDemo","ContentMultilineDemo"],O=Object.freeze(Object.defineProperty({__proto__:null,ContentMultilineDemo:s,ForceMultilineDemo:i,Persistent:e,Playground:t,__namedExportsOrder:x,default:M},Symbol.toStringTag,{value:"Module"}));export{s as C,i as F,O as I,t as P,e as a};
