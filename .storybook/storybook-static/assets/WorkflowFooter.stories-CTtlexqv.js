import{R as p}from"./index-CTjT7uj6.js";import{W as B,a as l}from"./controls-DXBEK-kw.js";import{B as i}from"./Button-DDkdQqLR.js";const k={title:"Pages/Workflow/Future/Components/Footer",component:B.Footer,argTypes:{...l.nextAction,...l.previousAction,...l.currentStepId},args:{currentStepId:"preview-step",steps:[{label:"Settings",id:"settings-step"},{label:"Questions",id:"questions-step"},{label:"Preview",id:"preview-step"},{label:"Employees",id:"employees-step"},{label:"Schedule",id:"schedule-step"}],isComplete:!1,previousAction:p.createElement(i,{reversed:!0,label:"Back"}),nextAction:p.createElement(i,{reversed:!0,label:"Next"})}},s={parameters:{docs:{canvas:{sourceState:"shown"}}}},e={args:{currentStepId:"settings-step"}},t={args:{nextAction:p.createElement(i,{disabled:!0,reversed:!0,label:"Next"})}},r={args:{currentStepId:"schedule-step",nextAction:p.createElement(i,{reversed:!0,primary:!0,disabled:!0,form:"worflow-form-id-for-submit",label:"Finish"})}},o={args:{currentStepId:"schedule-step",isComplete:!0}},a={args:{currentStepId:"questions-step",steps:[{label:"Settings",id:"settings-step"},{label:"Questions",id:"questions-step"},{label:"Preview",id:"preview-step"}]}},n={args:{currentStepId:"questions-step",steps:[...k.args.steps,{label:"Plan",id:"plan-step"},{label:"Provision",id:"provision-step"},{label:"Procure",id:"procure-step"}]}};var c,d,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,g,S,b,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentStepId: "settings-step"
  }
}`,...(S=(g=e.parameters)==null?void 0:g.docs)==null?void 0:S.source},description:{story:"<p>Next and previous button are passed in by the consumer to allow for page routing method to be determined by the user</p>",...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var f,w,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    nextAction: <Button disabled reversed label="Next" />
  }
}`,...(h=(w=t.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var x,P,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    currentStepId: "schedule-step",
    nextAction: <Button reversed primary disabled form="worflow-form-id-for-submit" label="Finish" />
  }
}`,...(y=(P=r.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var I,A,F;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    currentStepId: "schedule-step",
    isComplete: true
  }
}`,...(F=(A=o.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var E,q,C;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(q=a.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var N,W,_;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(W=n.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const L=["Playground","FirstStep","NextStepDisabled","LastStep","AllStepsComplete","FewerSteps","EightSteps"],D=Object.freeze(Object.defineProperty({__proto__:null,AllStepsComplete:o,EightSteps:n,FewerSteps:a,FirstStep:e,LastStep:r,NextStepDisabled:t,Playground:s,__namedExportsOrder:L,default:k},Symbol.toStringTag,{value:"Module"}));export{o as A,n as E,e as F,r as L,t as N,s as P,D as W,a};
