import{R as e,r as q}from"./index-CTjT7uj6.js";import{c}from"./index-CCQ3W5xA.js";import{H as h}from"./Heading-Y5F8SWRW.js";import{A as N}from"./ArrowBackwardIcon-D9T-C9o2.js";import{I as C}from"./InformationIcon-DxLaBSbb.js";import{T as _}from"./Text-D2gQH1xL.js";import{B as M}from"./Button-DDkdQqLR.js";import{I as T}from"./IconButton-DH93ECWt.js";const f=({action:r,secondary:d=!1,disabled:m=!1})=>{const{label:s,href:i,onClick:o,icon:u,automationId:l,newTabAndIUnderstandTheAccessibilityImplications:p}=r;return e.createElement(M,{label:s,href:i,onClick:o,secondary:d,icon:u,"data-automation-id":l,disabled:m,newTabAndIUnderstandTheAccessibilityImplications:p})};f.__docgenInfo={description:"",methods:[],displayName:"Action",props:{action:{required:!0,tsType:{name:"intersection",raw:`{
  label: string
  onClick?: GenericButtonProps["onClick"]
  href?: string
  icon?: JSX.Element
  /**
   * @deprecated use data-testid instead
   */
  automationId?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
} & HTMLAttributes<HTMLButtonElement>`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  onClick?: GenericButtonProps["onClick"]
  href?: string
  icon?: JSX.Element
  /**
   * @deprecated use data-testid instead
   */
  automationId?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}]},description:""},secondary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const H="_root_1y87b_41",R="_tile_1y87b_45",L="_titleMeta_1y87b_71",G="_face_1y87b_75",F="_faceFront_1y87b_92",x="_faceBack_1y87b_97",U="_positive_1y87b_105",S="_informative_1y87b_110",J="_cautionary_1y87b_115",X="_negative_1y87b_120",j="_assertive_1y87b_121",P="_prominent_1y87b_126",V="_isFlipped_1y87b_142",z="_title_1y87b_71",D="_actions_1y87b_152",K="_informationBtn_1y87b_156",O="_information_1y87b_156",Q="_footer_1y87b_178",t={root:H,tile:R,titleMeta:L,face:G,faceFront:F,faceBack:x,positive:U,informative:S,cautionary:J,negative:X,assertive:j,prominent:P,default:"_default_1y87b_132","expert-advice":"_expert-advice_1y87b_137",isFlipped:V,title:z,actions:D,informationBtn:K,information:O,footer:Q},g=({children:r,title:d,titleTag:m="h3",metadata:s,information:i,mood:o,variant:u="default",footer:l,classNameOverride:p,...k})=>{const[a,y]=q.useState(!1),A=()=>e.createElement("div",{className:t.title},e.createElement(h,{variant:"heading-3",tag:m},d),s&&e.createElement("div",{className:t.titleMeta},e.createElement(_,{variant:"small",color:"dark-reduced-opacity"},s))),E=(n,b,v)=>e.createElement("div",{className:t.actions},b&&e.createElement(f,{action:b,secondary:!0,disabled:v}),n&&e.createElement(f,{action:n,disabled:v})),I=()=>e.createElement("div",{className:c(t.face,t.faceFront,o?t[o]:t[u])},i&&e.createElement("div",{className:t.informationBtn},e.createElement(T,{label:"Information",icon:e.createElement(C,{role:"presentation"}),onClick:()=>y(!0),disabled:a,"aria-hidden":a})),A(),e.createElement("div",{className:t.children},r&&r),l&&e.createElement("div",{className:t.footer},l)),B=n=>n&&typeof n=="object"&&"text"in n?e.createElement(e.Fragment,null,e.createElement(_,{variant:"body"},n.text),(n.primaryAction||n.secondaryAction)&&e.createElement("div",{className:t.footer},E(n.primaryAction,n.secondaryAction,!a))):n,w=()=>{if(i)return e.createElement("div",{className:c(t.face,t.faceBack)},e.createElement("div",{className:t.informationBtn},e.createElement(T,{label:"Information",icon:e.createElement(N,{role:"presentation"}),onClick:()=>y(!1),disabled:!a,"aria-hidden":!a})),e.createElement("div",{className:t.information},B(i)))};return e.createElement("div",{className:c(t.root,p),...k},e.createElement("div",{className:c(t.tile,a&&t.isFlipped)},e.createElement(e.Fragment,null,I(),w())))};g.displayName="GenericTile";g.__docgenInfo={description:"",methods:[],displayName:"GenericTile",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},titleTag:{required:!1,tsType:{name:"AllowedHeadingTags"},description:"",defaultValue:{value:'"h3"',computed:!1}},metadata:{required:!1,tsType:{name:"string"},description:""},information:{required:!1,tsType:{name:"union",raw:"TileInformation | React.ReactNode",elements:[{name:"signature",type:"object",raw:`{
  text: string
  primaryAction?: TileAction
  secondaryAction?: TileAction
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"primaryAction",value:{name:"intersection",raw:`{
  label: string
  onClick?: GenericButtonProps["onClick"]
  href?: string
  icon?: JSX.Element
  /**
   * @deprecated use data-testid instead
   */
  automationId?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
} & HTMLAttributes<HTMLButtonElement>`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  onClick?: GenericButtonProps["onClick"]
  href?: string
  icon?: JSX.Element
  /**
   * @deprecated use data-testid instead
   */
  automationId?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],required:!1}},{key:"secondaryAction",value:{name:"intersection",raw:`{
  label: string
  onClick?: GenericButtonProps["onClick"]
  href?: string
  icon?: JSX.Element
  /**
   * @deprecated use data-testid instead
   */
  automationId?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
} & HTMLAttributes<HTMLButtonElement>`,elements:[{name:"signature",type:"object",raw:`{
  label: string
  onClick?: GenericButtonProps["onClick"]
  href?: string
  icon?: JSX.Element
  /**
   * @deprecated use data-testid instead
   */
  automationId?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],required:!1}}]}},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},mood:{required:!1,tsType:{name:"union",raw:`| "positive"
| "informative"
| "cautionary"
| "assertive"
| "negative"
| "prominent"`,elements:[{name:"literal",value:'"positive"'},{name:"literal",value:'"informative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"prominent"'}]},description:"@deprecated Use `variant` instead"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "expert-advice"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"expert-advice"'}]},description:"If you are transitioning from `mood`:\n- `prominent` should be `expert-advice`\n- all else should be `default`\n@default default",defaultValue:{value:'"default"',computed:!1}},footer:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{f as A,g as G};
