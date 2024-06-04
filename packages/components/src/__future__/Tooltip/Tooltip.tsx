import React, { forwardRef } from "react"
import {
  Tooltip as RACTooltip,
  TooltipProps as RACTooltipProps,
} from "react-aria-components"
import { mergeClassNames } from "~utils/mergeClassNames"
import styles from "./Tooltip.module.scss"

export type TooltipProps = RACTooltipProps

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  // eslint-disable-next-line arrow-body-style
  ({ children, className, ...props }, ref): JSX.Element => {
    return (
      <RACTooltip
        ref={ref}
        {...props}
        className={mergeClassNames(styles.tooltip, className)}
      >
        {children}
      </RACTooltip>
    )
  }
)

Tooltip.displayName = "Tooltip"
