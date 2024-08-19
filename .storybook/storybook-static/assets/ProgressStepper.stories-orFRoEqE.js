import{R as a}from"./index-CTjT7uj6.js";import{W as _,a as T}from"./controls-DXBEK-kw.js";const A={title:"Pages/Workflow/Future/Components/Progress Stepper",component:_.ProgressStepper,argTypes:{currentStepId:T.currentStepId},args:{currentStepId:"preview-step",steps:[{label:"Settings",id:"settings-step"},{label:"Questions",id:"questions-step"},{label:"Preview",id:"preview-step"},{label:"Employees",id:"employees-step"},{label:"Schedule",id:"schedule-step"}],isComplete:!1},decorators:[F=>a.createElement("div",{className:"bg-blue-500 p-8"},a.createElement(F,null))]},e={parameters:{docs:{canvas:{sourceState:"shown"}}}},s={args:{currentStepId:"questions-step"}},t={args:{currentStepId:"schedule-step",isComplete:!0}},o={args:{currentStepId:"questions-step",steps:[{label:"Settings",id:"settings-step"},{label:"Questions",id:"questions-step"},{label:"Preview",id:"preview-step"}]}},r={args:{currentStepId:"questions-step",steps:[...A.args.steps,{label:"Plan",id:"plan-step"},{label:"Provision",id:"provision-step"},{label:"Procure",id:"procure-step"}]}};var n,p,i,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source},description:{story:"<p>This component is used in the `Footer` to track progress of the Workflows steps.</p>\n<p>It has no reverse variant and should only be used in the Worflow's `Footer` component.</p>",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var d,u,m,g,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    currentStepId: "questions-step"
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:`<p>To ensure WCAG AA compliance, there are 3 visually destinct states.</p>
<p>These are reflected in their accessible names for screen reader: "Completed", "Current" and "Not started"</p>`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var b,h,v,P,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    currentStepId: "schedule-step",
    isComplete: true
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"<p>You can use the `isComplete` follow a successful submission to render all steps as complete.</p>",...(w=(P=t.parameters)==null?void 0:P.docs)==null?void 0:w.description}}};var f,y,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentStepId: "questions-step",
    steps: [{
      label: "Settings",
      id: "settings-step"
    }, {
      label: "Questions",
      id: "questions-step"
    }, {
      label: "Preview",
      id: "preview-step"
    }]
  }
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var C,q,W,E,k;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    currentStepId: "questions-step",
    steps: [...meta.args.steps, {
      label: "Plan",
      id: "plan-step"
    }, {
      label: "Provision",
      id: "provision-step"
    }, {
      label: "Procure",
      id: "procure-step"
    }]
  }
}`,...(W=(q=r.parameters)==null?void 0:q.docs)==null?void 0:W.source},description:{story:`<p>We have baked in a container query to ensure the component can be responsive.</p>
<p>When a step reaches its minimum size (4.5rem), it will hide the display name to maximise realestate.</p>`,...(k=(E=r.parameters)==null?void 0:E.docs)==null?void 0:k.description}}};const x=["Playground","ProgressStates","AllStepsComplete","FewerSteps","EightSteps"],j=Object.freeze(Object.defineProperty({__proto__:null,AllStepsComplete:t,EightSteps:r,FewerSteps:o,Playground:e,ProgressStates:s,__namedExportsOrder:x,default:A},Symbol.toStringTag,{value:"Module"}));export{t as A,r as E,o as F,j as P,e as a,s as b};
