import{R as i}from"./index-CTjT7uj6.js";import{c as r}from"./index-CCQ3W5xA.js";const l="_grid_11vr3_2",o={grid:l},e=({children:n,classNameOverride:t,...a})=>i.createElement("div",{className:r(o.grid,t),"data-tile-grid":!0,...a},n);e.displayName="TileGrid";e.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile#TileGrid Guidance} |
{@link https://cultureamp.design/storybook/?path=/docs/components-tiles-tilegrid--docs Storybook}`,methods:[],displayName:"TileGrid",props:{children:{required:!0,tsType:{name:"union",raw:"TileElement[] | TileElement",elements:[{name:"Array",elements:[{name:"ReactElement",elements:[{name:"union",raw:"InformationTileProps | MultiActionTileProps",elements:[{name:"intersection",raw:`{
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use \`variant\` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from \`mood\`:
   * - \`prominent\` should be \`expert-advice\`
   * - all else should be \`default\`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>`,elements:[{name:"signature",type:"object",raw:`{
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use \`variant\` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from \`mood\`:
   * - \`prominent\` should be \`expert-advice\`
   * - all else should be \`default\`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"titleTag",value:{name:"AllowedHeadingTags",required:!1}},{key:"metadata",value:{name:"string",required:!1}},{key:"information",value:{name:"union",raw:"TileInformation | React.ReactNode",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],required:!1}}]}},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1}},{key:"mood",value:{name:"union",raw:`| "positive"
| "informative"
| "cautionary"
| "assertive"
| "negative"
| "prominent"`,elements:[{name:"literal",value:'"positive"'},{name:"literal",value:'"informative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"prominent"'}],required:!1},description:"@deprecated Use `variant` instead"},{key:"variant",value:{name:"union",raw:'"default" | "expert-advice"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"expert-advice"'}],required:!1},description:"If you are transitioning from `mood`:\n- `prominent` should be `expert-advice`\n- all else should be `default`\n@default default"},{key:"footer",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"OverrideClassName",elements:[{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"literal",value:'"title"'}],raw:'Omit<HTMLAttributes<HTMLDivElement>, "title">'}],raw:'OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>'}]},{name:"intersection",raw:`{
  primaryAction: TileAction
  secondaryAction?: TileAction
} & Omit<GenericTileProps, "footer">`,elements:[{name:"signature",type:"object",raw:`{
  primaryAction: TileAction
  secondaryAction?: TileAction
}`,signature:{properties:[{key:"primaryAction",value:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],required:!1}}]}},{name:"Omit",elements:[{name:"intersection",raw:`{
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use \`variant\` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from \`mood\`:
   * - \`prominent\` should be \`expert-advice\`
   * - all else should be \`default\`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>`,elements:[{name:"signature",type:"object",raw:`{
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use \`variant\` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from \`mood\`:
   * - \`prominent\` should be \`expert-advice\`
   * - all else should be \`default\`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"titleTag",value:{name:"AllowedHeadingTags",required:!1}},{key:"metadata",value:{name:"string",required:!1}},{key:"information",value:{name:"union",raw:"TileInformation | React.ReactNode",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],required:!1}}]}},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1}},{key:"mood",value:{name:"union",raw:`| "positive"
| "informative"
| "cautionary"
| "assertive"
| "negative"
| "prominent"`,elements:[{name:"literal",value:'"positive"'},{name:"literal",value:'"informative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"prominent"'}],required:!1},description:"@deprecated Use `variant` instead"},{key:"variant",value:{name:"union",raw:'"default" | "expert-advice"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"expert-advice"'}],required:!1},description:"If you are transitioning from `mood`:\n- `prominent` should be `expert-advice`\n- all else should be `default`\n@default default"},{key:"footer",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"OverrideClassName",elements:[{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"literal",value:'"title"'}],raw:'Omit<HTMLAttributes<HTMLDivElement>, "title">'}],raw:'OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>'}]},{name:"literal",value:'"footer"'}],raw:'Omit<GenericTileProps, "footer">'}]}]}],raw:"ReactElement<TileProps>"}],raw:"TileElement[]"},{name:"ReactElement",elements:[{name:"union",raw:"InformationTileProps | MultiActionTileProps",elements:[{name:"intersection",raw:`{
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use \`variant\` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from \`mood\`:
   * - \`prominent\` should be \`expert-advice\`
   * - all else should be \`default\`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>`,elements:[{name:"signature",type:"object",raw:`{
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use \`variant\` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from \`mood\`:
   * - \`prominent\` should be \`expert-advice\`
   * - all else should be \`default\`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"titleTag",value:{name:"AllowedHeadingTags",required:!1}},{key:"metadata",value:{name:"string",required:!1}},{key:"information",value:{name:"union",raw:"TileInformation | React.ReactNode",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],required:!1}}]}},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1}},{key:"mood",value:{name:"union",raw:`| "positive"
| "informative"
| "cautionary"
| "assertive"
| "negative"
| "prominent"`,elements:[{name:"literal",value:'"positive"'},{name:"literal",value:'"informative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"prominent"'}],required:!1},description:"@deprecated Use `variant` instead"},{key:"variant",value:{name:"union",raw:'"default" | "expert-advice"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"expert-advice"'}],required:!1},description:"If you are transitioning from `mood`:\n- `prominent` should be `expert-advice`\n- all else should be `default`\n@default default"},{key:"footer",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"OverrideClassName",elements:[{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"literal",value:'"title"'}],raw:'Omit<HTMLAttributes<HTMLDivElement>, "title">'}],raw:'OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>'}]},{name:"intersection",raw:`{
  primaryAction: TileAction
  secondaryAction?: TileAction
} & Omit<GenericTileProps, "footer">`,elements:[{name:"signature",type:"object",raw:`{
  primaryAction: TileAction
  secondaryAction?: TileAction
}`,signature:{properties:[{key:"primaryAction",value:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],required:!1}}]}},{name:"Omit",elements:[{name:"intersection",raw:`{
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use \`variant\` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from \`mood\`:
   * - \`prominent\` should be \`expert-advice\`
   * - all else should be \`default\`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>`,elements:[{name:"signature",type:"object",raw:`{
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use \`variant\` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from \`mood\`:
   * - \`prominent\` should be \`expert-advice\`
   * - all else should be \`default\`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"titleTag",value:{name:"AllowedHeadingTags",required:!1}},{key:"metadata",value:{name:"string",required:!1}},{key:"information",value:{name:"union",raw:"TileInformation | React.ReactNode",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:'GenericButtonProps["onClick"]',raw:'GenericButtonProps["onClick"]',required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"automationId",value:{name:"string",required:!1},description:"@deprecated use data-testid instead"},{key:"newTabAndIUnderstandTheAccessibilityImplications",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],required:!1}}]}},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1}},{key:"mood",value:{name:"union",raw:`| "positive"
| "informative"
| "cautionary"
| "assertive"
| "negative"
| "prominent"`,elements:[{name:"literal",value:'"positive"'},{name:"literal",value:'"informative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"prominent"'}],required:!1},description:"@deprecated Use `variant` instead"},{key:"variant",value:{name:"union",raw:'"default" | "expert-advice"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"expert-advice"'}],required:!1},description:"If you are transitioning from `mood`:\n- `prominent` should be `expert-advice`\n- all else should be `default`\n@default default"},{key:"footer",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"OverrideClassName",elements:[{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"literal",value:'"title"'}],raw:'Omit<HTMLAttributes<HTMLDivElement>, "title">'}],raw:'OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>'}]},{name:"literal",value:'"footer"'}],raw:'Omit<GenericTileProps, "footer">'}]}]}],raw:"ReactElement<TileProps>"}]},description:""}},composes:["OverrideClassName"]};export{e as T};
