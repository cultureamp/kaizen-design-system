import{R as o}from"./index-CTjT7uj6.js";import{C as m}from"./CloseIcon-BAUhi63R.js";import{V as p}from"./VisibleIcon-DY6IPv8A.js";import{W as f,a as y}from"./controls-DXBEK-kw.js";import{B as a}from"./Button-DDkdQqLR.js";const k={title:"Pages/Workflow/Future/Components/Header",component:f.Header,argTypes:{...y.headerActions},args:{workflowName:"Create a self-reflection cycle",stepName:"Settings",status:{content:"Draft",variant:"statusDraft"},headerActions:[o.createElement(a,{key:"would-use-uui-2",label:"Save and close",icon:o.createElement(m,{role:"presentation"}),secondary:!0,iconPosition:"end",onClick:()=>alert("mock example of a save action")})]}},t={parameters:{docs:{canvas:{sourceState:"shown"}}}},e={args:{headerActions:[o.createElement(a,{key:"would-use-uui-1",label:"Preview",icon:o.createElement(p,{role:"presentation"}),secondary:!0,iconPosition:"start"}),o.createElement(a,{key:"would-use-uui-2",label:"Save and close",icon:o.createElement(m,{role:"presentation"}),secondary:!0,iconPosition:"end",onClick:()=>alert("mock example of a save action")})]}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,c,l,u,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    headerActions: [<Button key="would-use-uui-1" label="Preview" icon={<VisibleIcon role="presentation" />} secondary iconPosition="start" />, <Button key="would-use-uui-2" label="Save and close" icon={<CloseIcon role="presentation" />} secondary iconPosition="end" onClick={(): void => alert("mock example of a save action")} />]
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"<p>`headerActions` gives consumers the ability to add multiple `JSX Element`'s to top of the Workflow Header. We assume these will be Button or Button-like components</p>\n<p>There is no limit to the number of actions you can pass in, but please consider the limited realesate with labels.</p>",...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.description}}};const w=["Playground","MultipleActions"],S=Object.freeze(Object.defineProperty({__proto__:null,MultipleActions:e,Playground:t,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{e as M,t as P,S as W};
