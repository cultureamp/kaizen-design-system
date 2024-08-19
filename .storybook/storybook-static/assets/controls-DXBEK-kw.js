import{R as e}from"./index-CTjT7uj6.js";import{c}from"./index-CCQ3W5xA.js";import{B as I}from"./Brand-AVBZ6FJc.js";import{H}from"./Heading-Y5F8SWRW.js";import{T as O}from"./Tag-B8l7-tRz.js";import{V as L}from"./VisuallyHidden-CDYjeGzr.js";import{I as x,a as j}from"./IndicatorInactiveIcon-BBEodmEn.js";import{S as J}from"./SuccessIcon-BInyqVzG.js";import{T as q}from"./Text-D2gQH1xL.js";import{C as P}from"./CloseIcon-BAUhi63R.js";import{V as X}from"./VisibleIcon-DY6IPv8A.js";import{B as p}from"./Button-DDkdQqLR.js";const R="_footerRoot_pghzd_3",F={footerRoot:R},N=({children:n,classNameOverride:r,...t})=>e.createElement("footer",{className:c(F.footerRoot,r),...t},n);N.displayName="Workflow.FooterRoot";N.__docgenInfo={description:"",methods:[],displayName:"Workflow.FooterRoot"};const $="_stepsContainer_113vf_5",B="_stepList_113vf_10",V="_step_113vf_5",z="_stepContent_113vf_35",G="_stepIndicator_113vf_41",K="_stepName_113vf_47",Q="_stepIcon_113vf_54",U="_stepDivider_113vf_64",Y="_stepperDescription_113vf_83",s={stepsContainer:$,stepList:B,step:V,stepContent:z,stepIndicator:G,stepName:K,stepIcon:Q,stepDivider:U,stepperDescription:Y},Z=(n,r,t,a)=>n?{icon:e.createElement(J,{key:a,inheritSize:!0,role:"presentation",classNameOverride:"success"}),accessibleName:`Completed: ${t.label}`}:r?{icon:e.createElement(x,{key:a,inheritSize:!0,role:"presentation",classNameOverride:"active"}),accessibleName:`Current: ${t.label}`}:{icon:e.createElement(j,{key:a,inheritSize:!0,classNameOverride:"incomplete",role:"presentation"}),accessibleName:`Not started: ${t.label}`},y=({currentStepId:n,steps:r,isComplete:t=!1,...a})=>{const i=r.findIndex(l=>l.id===n);return e.createElement("div",{className:s.stepsContainer},e.createElement("ol",{className:s.stepList,...a,"aria-labelledby":"stepper-description"},r.map((l,m)=>{const d=i===m,u=m<i||t,{accessibleName:g,icon:w}=Z(u,d,l,m);return e.createElement("li",{className:s.step,key:`${l.id}`,"aria-current":d},e.createElement("div",{className:s.stepContent},e.createElement(L,null,g),e.createElement(q,{classNameOverride:s.stepName,variant:"small",color:"white","aria-hidden":!0},l.label),e.createElement("div",{className:s.stepIndicator},e.createElement("span",{className:s.stepIcon},w)),m<r.length-1&&e.createElement("div",{className:c([s.stepDivider,u&&s.completedStep])})))})),e.createElement(q,{classNameOverride:s.stepperDescription,variant:"small",color:"white",id:"stepper-description"},"Step ",i+1," of ",r.length))};y.displayName="Workflow.ProgressStepper";y.__docgenInfo={description:"",methods:[],displayName:"Workflow.ProgressStepper",props:{currentStepId:{required:!0,tsType:{name:"string",raw:'Step["id"]'},description:"The id reference to within a Step object"},steps:{required:!0,tsType:{name:"tuple",raw:"[Step, ...Step[]]",elements:[{name:"signature",type:"object",raw:`{
  id: string
  label: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"unknown"}]},description:"A non-empty array of Steps"},isComplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ee="_footerAction_16r9d_1",te="_footerActionPrevious_16r9d_7",re="_footerActionNext_16r9d_12",M={footerAction:ee,footerActionPrevious:te,footerActionNext:re},v=({actionType:n="Previous",action:r,...t})=>e.createElement("div",{className:c([M.footerAction,M[`footerAction${n}`]]),...t},r);v.displayName="Workflow.FooterActions";v.__docgenInfo={description:"A simple wrapper for a Footer previous or next action",methods:[],displayName:"Workflow.FooterActions",props:{actionType:{required:!1,tsType:{name:"union",raw:'"Previous" | "Next"',elements:[{name:"literal",value:'"Previous"'},{name:"literal",value:'"Next"'}]},description:"",defaultValue:{value:'"Previous"',computed:!1}},action:{required:!1,tsType:{name:"JSX.Element"},description:""}}};const b=({steps:n,currentStepId:r,isComplete:t,previousAction:a,nextAction:i,...l})=>e.createElement(N,{...l},e.createElement(v,{action:a,actionType:"Previous"}),e.createElement(y,{steps:n,currentStepId:r,isComplete:t}),e.createElement(v,{action:i,actionType:"Next"}));b.displayName="Workflow.Footer";b.__docgenInfo={description:"",methods:[],displayName:"Workflow.Footer",props:{previousAction:{required:!1,tsType:{name:"JSX.Element"},description:"An action to return to a previous step"},nextAction:{required:!1,tsType:{name:"JSX.Element"},description:"An action to progress to the next step or submit the form"},currentStepId:{required:!0,tsType:{name:"string",raw:'Step["id"]'},description:"The id reference to within a Step object"},steps:{required:!0,tsType:{name:"tuple",raw:"[Step, ...Step[]]",elements:[{name:"signature",type:"object",raw:`{
  id: string
  label: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"unknown"}]},description:"A non-empty array of Steps"},isComplete:{required:!1,tsType:{name:"boolean"},description:""}}};const ne="_titles_1lj0u_2",ae="_pageTitle_1lj0u_11",se="_prefix_1lj0u_16",oe="_status_1lj0u_20",f={titles:ne,pageTitle:ae,prefix:se,status:oe},T=({workflowName:n,stepName:r,status:t,...a})=>e.createElement("div",{className:f.titles,...a},e.createElement(H,{variant:"heading-1",tag:"h1",color:"dark",classNameOverride:f.pageTitle},e.createElement(H,{classNameOverride:f.prefix,variant:"heading-6",tag:"span",color:"dark-reduced-opacity"},n,e.createElement(L,null,":")),e.createElement("span",null,r)),t&&e.createElement("div",{className:f.status},e.createElement(O,{inline:!0,variant:(t==null?void 0:t.variant)||"statusDraft"},t==null?void 0:t.content)));T.displayName="Workflow.Titles";T.__docgenInfo={description:"",methods:[],displayName:"Workflow.Titles",props:{workflowName:{required:!0,tsType:{name:"string"},description:""},stepName:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** @default: "statusDraft" */
  variant?: DefaultTagProps["variant"]
  content?: string
}`,signature:{properties:[{key:"variant",value:{name:'DefaultTagProps["variant"]',raw:'DefaultTagProps["variant"]',required:!1},description:'@default: "statusDraft"'},{key:"content",value:{name:"string",required:!1}}]}},description:""}}};const ie="_actions_22ji5_2",le={actions:ie},E=({headerActions:n,...r})=>e.createElement("div",{className:le.actions,...r},n==null?void 0:n.map((t,a)=>e.createElement(t.type,{key:`header-actions ${a}`,...t.props})));E.displayName="Workflow.Actions";E.__docgenInfo={description:"A wrapper for an exit trigger (and other) actions of the Header Workflow",methods:[],displayName:"Workflow.Actions",props:{headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:"Header actions will render in order of the array."}}};const pe="_branding_1y3wu_2",me="_logo_1y3wu_15",C={branding:pe,logo:me},k=({variant:n="logo-horizontal",alt:r})=>e.createElement("div",{className:C.branding},e.createElement(I,{classNameOverride:C.logo,variant:n,alt:r}));k.displayName="Workflow.Branding";k.__docgenInfo={description:"",methods:[],displayName:"Workflow.Branding",props:{variant:{required:!1,tsType:{name:'BrandProps["variant"]',raw:'BrandProps["variant"]'},description:"",defaultValue:{value:'"logo-horizontal"',computed:!1}},alt:{required:!0,tsType:{name:"string"},description:""}}};const ce="_root_arwmb_4",de={root:ce},_=({children:n,classNameOverride:r,...t})=>e.createElement("header",{className:c(de.root,r),...t},n);_.displayName="Workflow.HeaderRoot";_.__docgenInfo={description:"",methods:[],displayName:"Workflow.HeaderRoot"};const S=({workflowName:n,stepName:r,status:t,headerActions:a,...i})=>e.createElement(_,{...i},e.createElement(k,{alt:"Culture Amp"}),e.createElement(T,{workflowName:n,stepName:r,status:t}),e.createElement(E,{headerActions:a}));S.displayName="Workflow.Header";S.__docgenInfo={description:"",methods:[],displayName:"Workflow.Header",props:{workflowName:{required:!0,tsType:{name:"string"},description:""},stepName:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** @default: "statusDraft" */
  variant?: DefaultTagProps["variant"]
  content?: string
}`,signature:{properties:[{key:"variant",value:{name:'DefaultTagProps["variant"]',raw:'DefaultTagProps["variant"]',required:!1},description:'@default: "statusDraft"'},{key:"content",value:{name:"string",required:!1}}]}},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:"Header actions will render in order of the array."}}};const ue="_main_1g4ca_1",fe={main:ue},h=({children:n,classNameOverride:r,...t})=>e.createElement("main",{className:c([fe.main,r]),...t},n);h.displayName="Workflow.Main";h.__docgenInfo={description:"",methods:[],displayName:"Workflow.Main",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ve="_wrapper_1wicc_2",ye={wrapper:ve},A=({children:n,classNameOverride:r,...t})=>e.createElement("div",{className:c(ye.wrapper,r),...t},n);A.displayName="Workflow.Wrapper";A.__docgenInfo={description:"",methods:[],displayName:"Workflow.Wrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const o=({steps:n,currentStepId:r,isComplete:t,workflowName:a,status:i,headerActions:l,children:m,nextAction:d,previousAction:u,classNameOverride:g,...w})=>{const W=n.find(D=>D.id===r);return e.createElement(o.Wrapper,{classNameOverride:g,...w},e.createElement(o.Header,{workflowName:a,stepName:W.label,status:i,headerActions:l}),e.createElement(o.Main,null,m),e.createElement(o.Footer,{currentStepId:r,steps:n,isComplete:t,nextAction:d,previousAction:u}))};o.Header=S;o.Footer=b;o.Main=h;o.ProgressStepper=y;o.Wrapper=A;o.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{
  workflowName,
  stepName,
  status,
  headerActions,
  ...restProps
}: HeaderProps`,optional:!1,type:{name:"intersection",raw:"WorkflowTitlesProps & WorkflowActionsProps",elements:[{name:"intersection",raw:`{
  workflowName: string
  stepName: string
  status?: WorkflowStatus
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>`,elements:[{name:"signature",type:"object",raw:`{
  workflowName: string
  stepName: string
  status?: WorkflowStatus
}`,signature:{properties:[{key:"workflowName",value:{name:"string",required:!0}},{key:"stepName",value:{name:"string",required:!0}},{key:"status",value:{name:"signature",type:"object",raw:`{
  /** @default: "statusDraft" */
  variant?: DefaultTagProps["variant"]
  content?: string
}`,signature:{properties:[{key:"variant",value:{name:'DefaultTagProps["variant"]',raw:'DefaultTagProps["variant"]',required:!1},description:'@default: "statusDraft"'},{key:"content",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"OverrideClassName",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"}],raw:"OverrideClassName<HTMLAttributes<HTMLDivElement>>"}]},{name:"intersection",raw:`{
  /**
   * Header actions will render in order of the array.
   */
  headerActions?: JSX.Element[]
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Header actions will render in order of the array.
   */
  headerActions?: JSX.Element[]
}`,signature:{properties:[{key:"headerActions",value:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]",required:!1},description:"Header actions will render in order of the array."}]}},{name:"OverrideClassName",elements:[{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"literal",value:'"children"'}],raw:'Omit<HTMLAttributes<HTMLDivElement>, "children">'}],raw:'OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">>'}]}],alias:"HeaderProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:`{
  steps,
  currentStepId,
  isComplete,
  previousAction,
  nextAction,
  ...restProps
}: FooterProps`,optional:!1,type:{name:"intersection",raw:`{
  /** An action to return to a previous step */
  previousAction?: JSX.Element
  /** An action to progress to the next step or submit the form */
  nextAction?: JSX.Element
} & ProgressStepperProps &
  OverrideClassName<Omit<FooterRootProps, "children">>`,elements:[{name:"signature",type:"object",raw:`{
  /** An action to return to a previous step */
  previousAction?: JSX.Element
  /** An action to progress to the next step or submit the form */
  nextAction?: JSX.Element
}`,signature:{properties:[{key:"previousAction",value:{name:"JSX.Element",required:!1},description:"An action to return to a previous step"},{key:"nextAction",value:{name:"JSX.Element",required:!1},description:"An action to progress to the next step or submit the form"}]}},{name:"signature",type:"object",raw:`{
  /** The id reference to within a Step object */
  currentStepId: Step["id"]
  /** A non-empty array of Steps */
  steps: Steps
  isComplete?: boolean
}`,signature:{properties:[{key:"currentStepId",value:{name:"string",raw:'Step["id"]',required:!0},description:"The id reference to within a Step object"},{key:"steps",value:{name:"tuple",raw:"[Step, ...Step[]]",elements:[{name:"signature",type:"object",raw:`{
  id: string
  label: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"unknown"}],required:!0},description:"A non-empty array of Steps"},{key:"isComplete",value:{name:"boolean",required:!1}}]}},{name:"OverrideClassName",elements:[{name:"Omit",elements:[{name:"OverrideClassName",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLHeadingElement"}],raw:"HTMLAttributes<HTMLHeadingElement>"}],raw:`OverrideClassName<
  HTMLAttributes<HTMLHeadingElement>
>`},{name:"literal",value:'"children"'}],raw:'Omit<FooterRootProps, "children">'}],raw:'OverrideClassName<Omit<FooterRootProps, "children">>'}],alias:"FooterProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"Main",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  classNameOverride,
  ...restProps
}: WorkflowMainProps`,optional:!1,type:{name:"intersection",raw:`OverrideClassName<
  HTMLAttributes<HTMLDivElement>
> & {
  children: ReactNode
}`,elements:[{name:"OverrideClassName",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"}],raw:`OverrideClassName<
  HTMLAttributes<HTMLDivElement>
>`},{name:"signature",type:"object",raw:`{
  children: ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"WorkflowMainProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"ProgressStepper",docblock:null,modifiers:["static"],params:[{name:`{
  currentStepId,
  steps,
  isComplete = false,
  ...restprops
}: ProgressStepperProps`,optional:!1,type:{name:"signature",type:"object",raw:`{
  /** The id reference to within a Step object */
  currentStepId: Step["id"]
  /** A non-empty array of Steps */
  steps: Steps
  isComplete?: boolean
}`,signature:{properties:[{key:"currentStepId",value:{name:"string",raw:'Step["id"]',required:!0},description:"The id reference to within a Step object"},{key:"steps",value:{name:"tuple",raw:"[Step, ...Step[]]",elements:[{name:"signature",type:"object",raw:`{
  id: string
  label: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"unknown"}],required:!0},description:"A non-empty array of Steps"},{key:"isComplete",value:{name:"boolean",required:!1}}]},alias:"ProgressStepperProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"Wrapper",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  classNameOverride,
  ...restProps
}: WorkflowWrapperProps`,optional:!1,type:{name:"intersection",raw:`OverrideClassName<
  HTMLAttributes<HTMLDivElement>
> & {
  children: ReactNode
}`,elements:[{name:"OverrideClassName",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"}],raw:`OverrideClassName<
  HTMLAttributes<HTMLDivElement>
>`},{name:"signature",type:"object",raw:`{
  children: ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"WorkflowWrapperProps"}}],returns:{type:{name:"JSX.Element"}}}],displayName:"Workflow",props:{previousAction:{required:!1,tsType:{name:"JSX.Element"},description:"An action to return to a previous step"},nextAction:{required:!1,tsType:{name:"JSX.Element"},description:"An action to progress to the next step or submit the form"},currentStepId:{required:!0,tsType:{name:"string",raw:'Step["id"]'},description:"The id reference to within a Step object"},steps:{required:!0,tsType:{name:"tuple",raw:"[Step, ...Step[]]",elements:[{name:"signature",type:"object",raw:`{
  id: string
  label: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"unknown"}]},description:"A non-empty array of Steps"},isComplete:{required:!1,tsType:{name:"boolean"},description:""}}};const qe={headerActions:{control:{type:"radio"},options:["Single action","Multiple actions","No actions"],mapping:{"Single action":[e.createElement(p,{key:"would-use-uui-1",label:"Close",icon:e.createElement(P,{role:"presentation"}),secondary:!0,iconPosition:"end"})],"Multiple actions":[e.createElement(p,{key:"would-use-uui-1",label:"Close",icon:e.createElement(P,{role:"presentation"}),secondary:!0,iconPosition:"end"}),e.createElement(p,{key:"would-use-uui-2",label:"Preview",icon:e.createElement(X,{role:"presentation"}),secondary:!0,iconPosition:"start"})],"No actions":[]}},nextAction:{control:{type:"radio"},options:["Next active","Next disabled","Next submit","No next action"],mapping:{"Next active":e.createElement(p,{reversed:!0,label:"Next"}),"Next disabled":e.createElement(p,{reversed:!0,disabled:!0,label:"Next"}),"Next submit":e.createElement(p,{reversed:!0,formTarget:"workflow-form-id",primary:!0,label:"Finish"}),"No next action":void 0}},previousAction:{control:{type:"radio"},options:["Previous active","Previous disabled","Previous submit","No Previous action"],mapping:{"Previous active":e.createElement(p,{reversed:!0,label:"Back"}),"Previous disabled":e.createElement(p,{reversed:!0,disabled:!0,label:"Back"}),"Previous submit":e.createElement(p,{reversed:!0,formTarget:"workflow-form-id",primary:!0,label:"Back"}),"No Previous action":void 0}},currentStepId:{control:{type:"select"},options:["settings-step","questions-step","preview-step","employees-step","schedule-step"],mapping:{"settings-step":"settings-step","questions-step":"questions-step","preview-step":"preview-step","employees-step":"employees-step","schedule-step":"schedule-step"}}};export{o as W,qe as a};
