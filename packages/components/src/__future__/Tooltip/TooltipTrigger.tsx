import React from "react"
import {
  TooltipTrigger as RACTooltipTrigger,
  TooltipTriggerComponentProps,
} from "react-aria-components"

export type TooltipTriggerProps = Omit<
  TooltipTriggerComponentProps,
  "delay"
> & {
  /**
   * The delay time for the tooltip to show up. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance).
   * @default 300
   */
  delay?: number
}

export const TooltipTrigger = (props: TooltipTriggerProps): JSX.Element => (
  <RACTooltipTrigger delay={300} {...props} />
)

// todo: we shouldn't need to set displayName manually, tooling should do that for us automatically now
TooltipTrigger.displayName = "TooltipTrigger"
