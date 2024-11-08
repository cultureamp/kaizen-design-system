import React from "react"
import {
  TooltipTrigger as RACTooltipTrigger,
  TooltipTriggerComponentProps,
} from "react-aria-components"

export type TooltipTriggerProps = Omit<TooltipTriggerComponentProps, "delay" | "closeDelay"> & {
  /**
   * The delay time for the tooltip to show up. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance).
   * @default 300
   */
  delay?: number
  /**
   * The delay time for the tooltip to close. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Warmup-and-cooldown).
   * @default 300
   */
  closeDelay?: number
}

/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */
export const TooltipTrigger = (props: TooltipTriggerProps): JSX.Element => (
  <RACTooltipTrigger delay={300} closeDelay={300} {...props} />
)
