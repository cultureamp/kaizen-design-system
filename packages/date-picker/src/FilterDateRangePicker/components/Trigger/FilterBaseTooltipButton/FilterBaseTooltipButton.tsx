import React, { forwardRef } from "react"
import { Tooltip, TooltipProps } from "@kaizen/draft-tooltip"
import { FilterBaseButton, FilterBaseButtonProps } from "../FilterBaseButton"

export interface FilterBaseTooltipButtonProps extends FilterBaseButtonProps {
  tooltipText: string
  isTooltipInitiallyVisible?: TooltipProps["isInitiallyVisible"]
}

export const FilterBaseTooltipButton = forwardRef<
  HTMLButtonElement,
  FilterBaseTooltipButtonProps
>(({ tooltipText, isTooltipInitiallyVisible = false, ...restProps }, ref) => (
  <Tooltip
    text={tooltipText}
    display="inline-block"
    position="below"
    isInitiallyVisible={isTooltipInitiallyVisible}
  >
    <FilterBaseButton ref={ref} {...restProps} />
  </Tooltip>
))

FilterBaseTooltipButton.displayName = "FilterBaseTooltipButton"
