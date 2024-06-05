import React from "react"
import { TooltipTrigger as RACTooltipTrigger, TooltipTriggerComponentProps } from "react-aria-components"

export type TooltipTriggerProps = TooltipTriggerComponentProps

export const TooltipTrigger = (props: TooltipTriggerProps): JSX.Element => (
  <RACTooltipTrigger
  delay={300}
    {...props}
  />
)

TooltipTrigger.displayName = "TooltipTrigger"
