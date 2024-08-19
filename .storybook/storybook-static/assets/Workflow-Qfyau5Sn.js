import{R as e}from"./index-CTjT7uj6.js";import{c as p}from"./index-CCQ3W5xA.js";import{B as P}from"./Brand-AVBZ6FJc.js";import{H as b}from"./Heading-Y5F8SWRW.js";import{V as S}from"./VisuallyHidden-CDYjeGzr.js";import{T as D}from"./Tag-B8l7-tRz.js";import{I as W,a as C}from"./IndicatorInactiveIcon-BBEodmEn.js";import{S as O}from"./SuccessIcon-BInyqVzG.js";import{T as q}from"./Text-D2gQH1xL.js";const I="_footerRoot_pghzd_3",J={footerRoot:I},w=({children:r,classNameOverride:n,...t})=>e.createElement("footer",{className:p(J.footerRoot,n),...t},r);w.displayName="Workflow.FooterRoot";w.__docgenInfo={description:"",methods:[],displayName:"Workflow.FooterRoot"};const X="_stepsContainer_113vf_5",x="_stepList_113vf_10",R="_step_113vf_5",j="_stepContent_113vf_35",F="_stepIndicator_113vf_41",$="_stepName_113vf_47",z="_stepIcon_113vf_54",B="_stepDivider_113vf_64",V="_stepperDescription_113vf_83",s={stepsContainer:X,stepList:x,step:R,stepContent:j,stepIndicator:F,stepName:$,stepIcon:z,stepDivider:B,stepperDescription:V},U=(r,n,t,a)=>r?{icon:e.createElement(O,{key:a,inheritSize:!0,role:"presentation",classNameOverride:"success"}),accessibleName:`Completed: ${t}`}:n?{icon:e.createElement(W,{key:a,inheritSize:!0,role:"presentation",classNameOverride:"active"}),accessibleName:`Current: ${t}`}:{icon:e.createElement(C,{key:a,inheritSize:!0,classNameOverride:"incomplete",role:"presentation"}),accessibleName:`Not started: ${t}`},v=({stepName:r,steps:n,isComplete:t=!1,...a})=>{const i=n.indexOf(r);return e.createElement("div",{className:s.stepsContainer},e.createElement("ol",{className:s.stepList,...a,"aria-labelledby":"stepper-description"},n.map((l,m)=>{const c=i===m,d=m<i||t,{accessibleName:g,icon:y}=U(d,c,l,m);return e.createElement("li",{className:s.step,key:`${m}-${l}`,"aria-current":c},e.createElement("div",{className:s.stepContent},e.createElement(S,null,g),e.createElement(q,{classNameOverride:s.stepName,variant:"small",color:"white","aria-hidden":!0},l),e.createElement("div",{className:s.stepIndicator},e.createElement("span",{className:s.stepIcon},y)),m<n.length-1&&e.createElement("div",{className:p([s.stepDivider,d&&s.completedStep])})))})),e.createElement(q,{classNameOverride:s.stepperDescription,variant:"small",color:"white",id:"stepper-description"},"Step ",i+1," of ",n.length))};v.displayName="Workflow.ProgressStepper";v.__docgenInfo={description:"",methods:[],displayName:"Workflow.ProgressStepper",props:{stepName:{required:!0,tsType:{name:"string"},description:""},steps:{required:!0,tsType:{name:"tuple",raw:"[string, ...string[]]",elements:[{name:"string"},{name:"unknown"}]},description:""},isComplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G="_footerAction_16r9d_1",K="_footerActionPrevious_16r9d_7",Q="_footerActionNext_16r9d_12",M={footerAction:G,footerActionPrevious:K,footerActionNext:Q},f=({actionType:r="Previous",action:n,...t})=>e.createElement("div",{className:p([M.footerAction,M[`footerAction${r}`]]),...t},n);f.displayName="Workflow.FooterActions";f.__docgenInfo={description:"A simple wrapper for a Footer previous or next action",methods:[],displayName:"Workflow.FooterActions",props:{actionType:{required:!1,tsType:{name:"union",raw:'"Previous" | "Next"',elements:[{name:"literal",value:'"Previous"'},{name:"literal",value:'"Next"'}]},description:"",defaultValue:{value:'"Previous"',computed:!1}},action:{required:!1,tsType:{name:"JSX.Element"},description:""}}};const N=({steps:r,stepName:n,isComplete:t,previousAction:a,nextAction:i,...l})=>e.createElement(w,{...l},e.createElement(f,{action:a,actionType:"Previous"}),e.createElement(v,{steps:r,stepName:n,isComplete:t}),e.createElement(f,{action:i,actionType:"Next"}));N.displayName="Workflow.Footer";N.__docgenInfo={description:"",methods:[],displayName:"Workflow.Footer",props:{previousAction:{required:!1,tsType:{name:"JSX.Element"},description:"An action to return to a previous step"},nextAction:{required:!1,tsType:{name:"JSX.Element"},description:"An action to progress to the next step or submit the form"},stepName:{required:!0,tsType:{name:"string"},description:""},steps:{required:!0,tsType:{name:"tuple",raw:"[string, ...string[]]",elements:[{name:"string"},{name:"unknown"}]},description:""},isComplete:{required:!1,tsType:{name:"boolean"},description:""}}};const Y="_titles_1lj0u_2",Z="_pageTitle_1lj0u_11",ee="_prefix_1lj0u_16",te="_status_1lj0u_20",u={titles:Y,pageTitle:Z,prefix:ee,status:te},T=({workflowName:r,stepName:n,status:t,...a})=>e.createElement("div",{className:u.titles,...a},e.createElement(b,{variant:"heading-1",tag:"h1",color:"dark",classNameOverride:u.pageTitle},e.createElement(b,{classNameOverride:u.prefix,variant:"heading-6",tag:"span",color:"dark-reduced-opacity"},r,e.createElement(S,null,":")),e.createElement("span",null,n)),t&&e.createElement("div",{className:u.status},e.createElement(D,{inline:!0,variant:(t==null?void 0:t.variant)||"statusDraft"},t==null?void 0:t.content)));T.displayName="Workflow.Titles";T.__docgenInfo={description:"",methods:[],displayName:"Workflow.Titles",props:{workflowName:{required:!0,tsType:{name:"string"},description:""},stepName:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** @default: "statusDraft" */
  variant?: DefaultTagProps["variant"]
  content?: string
}`,signature:{properties:[{key:"variant",value:{name:'DefaultTagProps["variant"]',raw:'DefaultTagProps["variant"]',required:!1},description:'@default: "statusDraft"'},{key:"content",value:{name:"string",required:!1}}]}},description:""}}};const re="_actions_22ji5_2",ne={actions:re},_=({headerActions:r,...n})=>e.createElement("div",{className:ne.actions,...n},r==null?void 0:r.map((t,a)=>e.createElement(t.type,{key:`header-actions ${a}`,...t.props})));_.displayName="Workflow.Actions";_.__docgenInfo={description:"A wrapper for an exit trigger (and other) actions of the Header Workflow",methods:[],displayName:"Workflow.Actions",props:{headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:"Header actions will render in order of the array."}}};const ae="_branding_1y3wu_2",se="_logo_1y3wu_15",L={branding:ae,logo:se},E=({variant:r="logo-horizontal",alt:n})=>e.createElement("div",{className:L.branding},e.createElement(P,{classNameOverride:L.logo,variant:r,alt:n}));E.displayName="Workflow.Branding";E.__docgenInfo={description:"",methods:[],displayName:"Workflow.Branding",props:{variant:{required:!1,tsType:{name:'BrandProps["variant"]',raw:'BrandProps["variant"]'},description:"",defaultValue:{value:'"logo-horizontal"',computed:!1}},alt:{required:!0,tsType:{name:"string"},description:""}}};const oe="_root_arwmb_4",ie={root:oe},k=({children:r,classNameOverride:n,...t})=>e.createElement("header",{className:p(ie.root,n),...t},r);k.displayName="Workflow.HeaderRoot";k.__docgenInfo={description:"",methods:[],displayName:"Workflow.HeaderRoot"};const A=({workflowName:r,stepName:n,status:t,headerActions:a,...i})=>e.createElement(k,{...i},e.createElement(E,{alt:"Culture Amp"}),e.createElement(T,{workflowName:r,stepName:n,status:t}),e.createElement(_,{headerActions:a}));A.displayName="Workflow.Header";A.__docgenInfo={description:"",methods:[],displayName:"Workflow.Header",props:{workflowName:{required:!0,tsType:{name:"string"},description:""},stepName:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** @default: "statusDraft" */
  variant?: DefaultTagProps["variant"]
  content?: string
}`,signature:{properties:[{key:"variant",value:{name:'DefaultTagProps["variant"]',raw:'DefaultTagProps["variant"]',required:!1},description:'@default: "statusDraft"'},{key:"content",value:{name:"string",required:!1}}]}},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:"Header actions will render in order of the array."}}};const le="_main_1g4ca_1",me={main:le},h=({children:r,classNameOverride:n,...t})=>e.createElement("main",{className:p([me.main,n]),...t},r);h.displayName="Workflow.Main";h.__docgenInfo={description:"",methods:[],displayName:"Workflow.Main",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const pe="_wrapper_1wicc_2",ce={wrapper:pe},H=({children:r,classNameOverride:n,...t})=>e.createElement("div",{className:p(ce.wrapper,n),...t},r);H.displayName="Workflow.Wrapper";H.__docgenInfo={description:"",methods:[],displayName:"Workflow.Wrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const o=({stepName:r,steps:n,isComplete:t,workflowName:a,status:i,headerActions:l,children:m,nextAction:c,previousAction:d,classNameOverride:g,...y})=>e.createElement(o.Wrapper,{classNameOverride:g,...y},e.createElement(o.Header,{workflowName:a,stepName:r,status:i,headerActions:l}),e.createElement(o.Main,null,m),e.createElement(o.Footer,{stepName:r,steps:n,isComplete:t,nextAction:c,previousAction:d}));o.Header=A;o.Footer=N;o.Main=h;o.ProgressStepper=v;o.Wrapper=H;o.__docgenInfo={description:"@deprecated Use { Workflow } from `@kaizen/components/future`",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{
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
  stepName,
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
  OverrideClassName<Omit<HTMLAttributes<HTMLElement>, "children">>`,elements:[{name:"signature",type:"object",raw:`{
  /** An action to return to a previous step */
  previousAction?: JSX.Element
  /** An action to progress to the next step or submit the form */
  nextAction?: JSX.Element
}`,signature:{properties:[{key:"previousAction",value:{name:"JSX.Element",required:!1},description:"An action to return to a previous step"},{key:"nextAction",value:{name:"JSX.Element",required:!1},description:"An action to progress to the next step or submit the form"}]}},{name:"signature",type:"object",raw:`{
  stepName: string
  steps: [string, ...string[]]
  isComplete?: boolean
}`,signature:{properties:[{key:"stepName",value:{name:"string",required:!0}},{key:"steps",value:{name:"tuple",raw:"[string, ...string[]]",elements:[{name:"string"},{name:"unknown"}],required:!0}},{key:"isComplete",value:{name:"boolean",required:!1}}]}},{name:"OverrideClassName",elements:[{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>"},{name:"literal",value:'"children"'}],raw:'Omit<HTMLAttributes<HTMLElement>, "children">'}],raw:'OverrideClassName<Omit<HTMLAttributes<HTMLElement>, "children">>'}],alias:"FooterProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"Main",docblock:null,modifiers:["static"],params:[{name:`{
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
  stepName,
  steps,
  isComplete = false,
  ...restprops
}: ProgressStepperProps`,optional:!1,type:{name:"signature",type:"object",raw:`{
  stepName: string
  steps: [string, ...string[]]
  isComplete?: boolean
}`,signature:{properties:[{key:"stepName",value:{name:"string",required:!0}},{key:"steps",value:{name:"tuple",raw:"[string, ...string[]]",elements:[{name:"string"},{name:"unknown"}],required:!0}},{key:"isComplete",value:{name:"boolean",required:!1}}]},alias:"ProgressStepperProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"Wrapper",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"WorkflowWrapperProps"}}],returns:{type:{name:"JSX.Element"}}}],displayName:"Workflow",props:{previousAction:{required:!1,tsType:{name:"JSX.Element"},description:"An action to return to a previous step"},nextAction:{required:!1,tsType:{name:"JSX.Element"},description:"An action to progress to the next step or submit the form"},stepName:{required:!0,tsType:{name:"string"},description:""},steps:{required:!0,tsType:{name:"tuple",raw:"[string, ...string[]]",elements:[{name:"string"},{name:"unknown"}]},description:""},isComplete:{required:!1,tsType:{name:"boolean"},description:""},workflowName:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** @default: "statusDraft" */
  variant?: DefaultTagProps["variant"]
  content?: string
}`,signature:{properties:[{key:"variant",value:{name:'DefaultTagProps["variant"]',raw:'DefaultTagProps["variant"]',required:!1},description:'@default: "statusDraft"'},{key:"content",value:{name:"string",required:!1}}]}},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:"Header actions will render in order of the array."}}};export{o as W};
