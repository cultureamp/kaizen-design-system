import React, { ReactNode } from "react"
import { VisuallyHidden } from "react-aria"
import {
  TooltipTrigger as RACTooltipTrigger,
  Tooltip,
  TooltipTriggerComponentProps,
} from "react-aria-components"


// Instant component
export const NonInteractiveTooltip = ({children}: { children: ReactNode }): JSX.Element => {



  return (
    <TooltipTrigger>
      <></>
      <VisuallyHidden>{children}</VisuallyHidden>
      <Tooltip>{children}</Tooltip>
    </TooltipTrigger>
  )
}
