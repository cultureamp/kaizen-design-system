import React, { forwardRef } from "react"
import { Tooltip, TooltipProps } from "@kaizen/draft-tooltip"
import { FilterButton, FilterButtonProps } from "../FilterButton"

export interface FilterButtonWithTooltipProps extends FilterButtonProps {
  tooltipText: string
  isTooltipInitiallyVisible?: TooltipProps["isInitiallyVisible"]
}

export const FilterButtonWithTooltip = forwardRef<
  HTMLButtonElement,
  FilterButtonWithTooltipProps
>(({ tooltipText, isTooltipInitiallyVisible = false, ...restProps }, ref) => (
  <Tooltip
    text={tooltipText}
    display="inline-block"
    position="below"
    isInitiallyVisible={isTooltipInitiallyVisible}
  >
    <FilterButton ref={ref} {...restProps} />
  </Tooltip>
))

FilterButtonWithTooltip.displayName = "FilterButtonWithTooltip"
