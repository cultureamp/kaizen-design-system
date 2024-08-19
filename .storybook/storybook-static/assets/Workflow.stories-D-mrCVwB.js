import{R as e}from"./index-CTjT7uj6.js";import{C as N}from"./CloseIcon-BAUhi63R.js";import{V as R}from"./VisibleIcon-DY6IPv8A.js";import{T as Z}from"./TextField-C70Pg5K2.js";import{W as t,a as z}from"./controls-DXBEK-kw.js";import{B as i}from"./Button-DDkdQqLR.js";const O=()=>e.createElement("div",{className:"flex flex-col flex-1 m-24 items-center"},e.createElement("div",{className:"max-w-[1392px] w-full"},e.createElement("h2",null,"Name and schedule the self-reflection cycle"),e.createElement("form",{id:"workflow-form-id",className:"bg-white rounded shadow-sm my-32 p-64"},e.createElement("h3",null,"Name the cycle"),e.createElement(Z,{labelText:"Cycle name",type:"text",id:"input-workflow",description:"This is the name that will be displayed across the cycle for everyone"})))),j={title:"Pages/Workflow/Future",component:t,argTypes:z,args:{workflowName:"Create a self-reflection cycle",currentStepId:"settings-step",steps:[{label:"Settings",id:"settings-step"},{label:"Questions",id:"questions-step"},{label:"Preview",id:"preview-step"},{label:"Employees",id:"employees-step"},{label:"Schedule",id:"schedule-step"}],isComplete:!1,status:{content:"Draft",variant:"statusDraft"},previousAction:e.createElement(i,{reversed:!0,label:"Back"}),nextAction:e.createElement(i,{reversed:!0,label:"Next"}),headerActions:[e.createElement(i,{key:"would-use-uui-2",label:"Save and close",icon:e.createElement(N,{role:"presentation"}),secondary:!0,iconPosition:"end"})],children:e.createElement(O,null)}},o={parameters:{docs:{canvas:{sourceState:"shown"}},chromatic:{disable:!1}}},r={args:{headerActions:[e.createElement(i,{key:"would-use-uui-1",label:"Preview",icon:e.createElement(R,{role:"presentation"}),secondary:!0,iconPosition:"start"}),e.createElement(i,{key:"would-use-uui-2",label:"Save and close",icon:e.createElement(N,{role:"presentation"}),secondary:!0,iconPosition:"end",onClick:()=>alert("mock example of a save action")})]}},a={args:{currentStepId:"schedule-step"}},s={args:{isComplete:!0},parameters:{chromatic:{disable:!1}}},n={render:({steps:c,isComplete:q,workflowName:I,currentStepId:m,status:M,headerActions:F,previousAction:T,nextAction:_,...B})=>e.createElement(t.Wrapper,{...B},e.createElement(t.Header,{workflowName:I,stepName:c.find(V=>V.id===m).label,status:M,headerActions:F}),e.createElement(t.Main,null,e.createElement("h3",null,"Content"),e.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error labore dolorum debitis eaque laboriosam qui quidem itaque necessitatibus obcaecati aut earum consectetur excepturi accusamus nulla libero maxime, quibusdam vero?")),e.createElement(t.Footer,{currentStepId:m,steps:c,isComplete:q,nextAction:_,previousAction:T})),parameters:{chromatic:{disable:!1}}},l={parameters:{docs:{canvas:{sourceState:"hidden"}},viewport:{viewports:{vieportZoomed:{name:"Simulate 400% zoom",styles:{width:"500px",height:"800px"},type:"mobile"}},defaultViewport:"vieportZoomed"},chromatic:{disable:!1,viewports:[500,1200]}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var f,w,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    headerActions: [<Button key="would-use-uui-1" label="Preview" icon={<VisibleIcon role="presentation" />} secondary iconPosition="start" />, <Button key="would-use-uui-2" label="Save and close" icon={<CloseIcon role="presentation" />} secondary iconPosition="end" onClick={(): void => alert("mock example of a save action")} />]
  }
}`,...(b=(w=r.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var h,v,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    currentStepId: "schedule-step"
  }
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,S,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isComplete: true
  },
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(g=(S=s.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var x,E,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ({
    steps,
    isComplete,
    workflowName,
    currentStepId,
    status,
    headerActions,
    previousAction,
    nextAction,
    ...restProps
  }) => <Workflow.Wrapper {...restProps}>
      <Workflow.Header workflowName={workflowName} stepName={steps.find(step => step.id === currentStepId)!.label} status={status} headerActions={headerActions} />
      <Workflow.Main>
        <h3>Content</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
          labore dolorum debitis eaque laboriosam qui quidem itaque
          necessitatibus obcaecati aut earum consectetur excepturi accusamus
          nulla libero maxime, quibusdam vero?
        </p>
      </Workflow.Main>
      <Workflow.Footer currentStepId={currentStepId} steps={steps} isComplete={isComplete} nextAction={nextAction} previousAction={previousAction} />
    </Workflow.Wrapper>,
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(C=(E=n.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var W,A,P;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const D=["Playground","MultipleActions","FinalStep","CompletedWorkflow","ComposableWorkflow","ResponsiveWorkflow"],K=Object.freeze(Object.defineProperty({__proto__:null,CompletedWorkflow:s,ComposableWorkflow:n,FinalStep:a,MultipleActions:r,Playground:o,ResponsiveWorkflow:l,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{n as C,o as P,K as W};
