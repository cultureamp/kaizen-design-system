import{R as a}from"./index-CTjT7uj6.js";import{W as k}from"./Workflow-Qfyau5Sn.js";const F={title:"Pages/Workflow/Components/Progress Stepper",component:k.ProgressStepper,args:{stepName:"Settings",steps:["Settings","Questions","Preview","Employees","Schedule"],isComplete:!1},decorators:[_=>a.createElement("div",{className:"bg-blue-500 p-8"},a.createElement(_,null))]},e={parameters:{docs:{canvas:{sourceState:"shown"}}}},s={args:{stepName:"Questions"}},t={args:{stepName:"Schedule",isComplete:!0}},o={args:{stepName:"Questions",steps:["Settings","Questions","Preview"]}},r={args:{stepName:"Questions",steps:["Settings","Questions","Preview","Employees","Schedule","Plan","Provision","Another thing"]}};var n,p,i,c,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source},description:{story:"<p>This component is used in the `Footer` to track progress of the Workflows steps.</p>\n<p>It has no reverse variant and should only be used in the Worflow's `Footer` component.</p>",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var l,d,u,g,S;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    stepName: "Questions"
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:`<p>To ensure WCAG AA compliance, there are 3 visually destinct states.</p>
<p>These are reflected in their accessible names for screen reader: "Completed", "Current" and "Not started"</p>`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var h,P,v,f,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    stepName: "Schedule",
    isComplete: true
  }
}`,...(v=(P=t.parameters)==null?void 0:P.docs)==null?void 0:v.source},description:{story:"<p>You can use the `isComplete` follow a successful submission to render all steps as complete.</p>",...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var y,b,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    stepName: "Questions",
    steps: ["Settings", "Questions", "Preview"]
  }
}`,...(N=(b=o.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var Q,C,E,A,W;r.parameters={...r.parameters,docs:{...(Q=r.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    stepName: "Questions",
    steps: ["Settings", "Questions", "Preview", "Employees", "Schedule", "Plan", "Provision", "Another thing"]
  }
}`,...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:`<p>We have baked in a container query to ensure the component can be responsive.</p>
<p>When a step reaches its minimum size (4.5rem), it will hide the display name to maximise realestate.</p>`,...(W=(A=r.parameters)==null?void 0:A.docs)==null?void 0:W.description}}};const T=["Playground","ProgressStates","AllStepsComplete","FewerSteps","EightSteps"],j=Object.freeze(Object.defineProperty({__proto__:null,AllStepsComplete:t,EightSteps:r,FewerSteps:o,Playground:e,ProgressStates:s,__namedExportsOrder:T,default:F},Symbol.toStringTag,{value:"Module"}));export{t as A,r as E,o as F,j as P,e as a,s as b};
