import{R as e}from"./index-CTjT7uj6.js";import{G as l,A as i}from"./GenericTile-BEadPOs8.js";const c="_actions_gyzme_2",d="_secondaryAction_gyzme_6",a={actions:c,secondaryAction:d},u=(t,n)=>e.createElement("div",{className:a.actions},n&&e.createElement("div",{className:a.secondaryAction},e.createElement(i,{action:n,secondary:!0})),e.createElement(i,{action:t})),s=({children:t,primaryAction:n,secondaryAction:r,...o})=>e.createElement(l,{footer:u(n,r),...o},t);s.displayName="MultiActionTile";s.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile#MultiActionTile.1 Guidance} |
{@link https://cultureamp.design/?path=/docs/components-tiles-multiactiontile--docs Storybook}`,methods:[],displayName:"MultiActionTile",props:{primaryAction:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}]},description:""},secondaryAction:{required:!1,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}]},description:""}}};export{s as M};
