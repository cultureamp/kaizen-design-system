import{R as i}from"./index-CTjT7uj6.js";import{W as B}from"./Workflow-Qfyau5Sn.js";import{W as c}from"./controls-CznYIIA9.js";import{B as p}from"./Button-DDkdQqLR.js";const L={title:"Pages/Workflow/Components/Footer",component:B.Footer,argTypes:{...c.nextAction,...c.previousAction},args:{stepName:"Preview",steps:["Settings","Questions","Preview","Employees","Schedule"],isComplete:!1,previousAction:i.createElement(p,{reversed:!0,label:"Back"}),nextAction:i.createElement(p,{reversed:!0,label:"Next"})}},s={},e={args:{stepName:"Settings"}},r={args:{nextAction:i.createElement(p,{disabled:!0,reversed:!0,label:"Next"})}},t={args:{stepName:"Schedule",nextAction:i.createElement(p,{reversed:!0,primary:!0,disabled:!0,form:"worflow-form-id-for-submit",label:"Finish"})}},o={args:{stepName:"Schedule",isComplete:!0}},a={args:{stepName:"Questions",steps:["Settings","Questions","Preview"]}},n={args:{stepName:"Questions",steps:["Settings","Questions","Preview","Employees","Schedule","Plan","Provision","Another thing"]}};var m,l,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,g,S,b,f;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    stepName: "Settings"
  }
}`,...(S=(g=e.parameters)==null?void 0:g.docs)==null?void 0:S.source},description:{story:"<p>Next and previous button are passed in by the consumer to allow for page routing method to be determined by the user</p>",...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var h,v,N;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    nextAction: <Button disabled reversed label="Next" />
  }
}`,...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var w,P,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    stepName: "Schedule",
    nextAction: <Button reversed primary disabled form="worflow-form-id-for-submit" label="Finish" />
  }
}`,...(x=(P=t.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var y,A,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    stepName: "Schedule",
    isComplete: true
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,Q,C;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    stepName: "Questions",
    steps: ["Settings", "Questions", "Preview"]
  }
}`,...(C=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:C.source}}};var W,_,k;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    stepName: "Questions",
    steps: ["Settings", "Questions", "Preview", "Employees", "Schedule", "Plan", "Provision", "Another thing"]
  }
}`,...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const O=["Playground","FirstStep","NextStepDisabled","LastStep","AllStepsComplete","FewerSteps","EightSteps"],z=Object.freeze(Object.defineProperty({__proto__:null,AllStepsComplete:o,EightSteps:n,FewerSteps:a,FirstStep:e,LastStep:t,NextStepDisabled:r,Playground:s,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{o as A,n as E,e as F,t as L,r as N,s as P,z as W,a};
