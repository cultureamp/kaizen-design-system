import{R as t}from"./index-CTjT7uj6.js";import{G as a}from"./GenericTile-BEadPOs8.js";const e=n=>t.createElement(a,{...n});e.displayName="InformationTile";e.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile#InformationTile%3A Guidance} |
{@link https://cultureamp.design/?path=/docs/components-tiles-informationtile--docs Storybook}`,methods:[],displayName:"InformationTile",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},titleTag:{required:!1,tsType:{name:"AllowedHeadingTags"},description:""},metadata:{required:!1,tsType:{name:"string"},description:""},information:{required:!1,tsType:{name:"union",raw:"TileInformation | React.ReactNode",elements:[{name:"signature",type:"object",raw:`{
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
| "prominent"`,elements:[{name:"literal",value:'"positive"'},{name:"literal",value:'"informative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"prominent"'}]},description:"@deprecated Use `variant` instead"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "expert-advice"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"expert-advice"'}]},description:"If you are transitioning from `mood`:\n- `prominent` should be `expert-advice`\n- all else should be `default`\n@default default"},footer:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{e as I};
