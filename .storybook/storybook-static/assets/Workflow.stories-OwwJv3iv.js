import{R as e}from"./index-CTjT7uj6.js";import{C as A}from"./CloseIcon-BAUhi63R.js";import{V as I}from"./VisibleIcon-DY6IPv8A.js";import{T as R}from"./TextField-C70Pg5K2.js";import{W as Z}from"./controls-CznYIIA9.js";import{W as o}from"./Workflow-Qfyau5Sn.js";import{B as l}from"./Button-DDkdQqLR.js";const z=()=>e.createElement("div",{className:"flex flex-col flex-1 m-24 items-center"},e.createElement("div",{className:"max-w-[1392px] w-full"},e.createElement("h2",null,"Name and schedule the self-reflection cycle"),e.createElement("form",{id:"workflow-form-id",className:"bg-white rounded shadow-sm my-32 p-64"},e.createElement("h3",null,"Name the cycle"),e.createElement(R,{labelText:"Cycle name",type:"text",id:"input-workflow",description:"This is the name that will be displayed across the cycle for everyone"})))),O={title:"Pages/Workflow",component:o,argTypes:{...Z},args:{workflowName:"Create a self-reflection cycle",stepName:"Settings",steps:["Settings","Questions","Preview","Employees","Schedule"],isComplete:!1,status:{content:"Draft",variant:"statusDraft"},previousAction:e.createElement(l,{reversed:!0,label:"Back"}),nextAction:e.createElement(l,{reversed:!0,label:"Next"}),headerActions:[e.createElement(l,{key:"would-use-uui-2",label:"Save and close",icon:e.createElement(A,{role:"presentation"}),secondary:!0,iconPosition:"end"})],children:e.createElement(z,null)}},t={parameters:{docs:{canvas:{sourceState:"shown"}},chromatic:{disable:!1}}},r={args:{headerActions:[e.createElement(l,{key:"would-use-uui-1",label:"Preview",icon:e.createElement(I,{role:"presentation"}),secondary:!0,iconPosition:"start"}),e.createElement(l,{key:"would-use-uui-2",label:"Save and close",icon:e.createElement(A,{role:"presentation"}),secondary:!0,iconPosition:"end",onClick:()=>alert("mock example of a save action")})]}},a={args:{stepName:"Schedule"}},s={args:{isComplete:!0},parameters:{chromatic:{disable:!1}}},n={render:({steps:P,isComplete:q,workflowName:M,stepName:c,status:T,headerActions:_,previousAction:B,nextAction:F,...V})=>e.createElement(o.Wrapper,{...V},e.createElement(o.Header,{workflowName:M,stepName:c,status:T,headerActions:_}),e.createElement(o.Main,null,e.createElement("h3",null,"Content"),e.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error labore dolorum debitis eaque laboriosam qui quidem itaque necessitatibus obcaecati aut earum consectetur excepturi accusamus nulla libero maxime, quibusdam vero?")),e.createElement(o.Footer,{stepName:c,steps:P,isComplete:q,nextAction:F,previousAction:B})),parameters:{chromatic:{disable:!1}}},i={parameters:{docs:{canvas:{sourceState:"hidden"}},viewport:{viewports:{vieportZoomed:{name:"Simulate 400% zoom",styles:{width:"500px",height:"800px"},type:"mobile"}},defaultViewport:"vieportZoomed"},chromatic:{disable:!1,viewports:[500,1200]}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    },
    chromatic: {
      disable: false
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,f,w;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    headerActions: [<Button key="would-use-uui-1" label="Preview" icon={<VisibleIcon role="presentation" />} secondary iconPosition="start" />, <Button key="would-use-uui-2" label="Save and close" icon={<CloseIcon role="presentation" />} secondary iconPosition="end" onClick={(): void => alert("mock example of a save action")} />]
  }
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,b,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    stepName: "Schedule"
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var k,y,g;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isComplete: true
  },
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var S,x,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ({
    steps,
    isComplete,
    workflowName,
    stepName,
    status,
    headerActions,
    previousAction,
    nextAction,
    ...restProps
  }) => <Workflow.Wrapper {...restProps}>
      <Workflow.Header workflowName={workflowName} stepName={stepName} status={status} headerActions={headerActions} />
      <Workflow.Main>
        <h3>Content</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
          labore dolorum debitis eaque laboriosam qui quidem itaque
          necessitatibus obcaecati aut earum consectetur excepturi accusamus
          nulla libero maxime, quibusdam vero?
        </p>
      </Workflow.Main>
      <Workflow.Footer stepName={stepName} steps={steps} isComplete={isComplete} nextAction={nextAction} previousAction={previousAction} />
    </Workflow.Wrapper>,
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var C,W,N;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "hidden"
      }
    },
    viewport: {
      viewports: {
        vieportZoomed: {
          name: "Simulate 400% zoom",
          styles: {
            width: "500px",
            height: "800px"
          },
          type: "mobile"
        }
      },
      defaultViewport: "vieportZoomed"
    },
    chromatic: {
      disable: false,
      viewports: [500, 1200]
    }
  }
}`,...(N=(W=i.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const j=["Playground","MultipleActions","FinalStep","CompletedWorkflow","ComposableWorkflow","ResponsiveWorkflow"],K=Object.freeze(Object.defineProperty({__proto__:null,CompletedWorkflow:s,ComposableWorkflow:n,FinalStep:a,MultipleActions:r,Playground:t,ResponsiveWorkflow:i,__namedExportsOrder:j,default:O},Symbol.toStringTag,{value:"Module"}));export{n as C,t as P,K as W};
