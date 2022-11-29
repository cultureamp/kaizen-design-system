import React, { forwardRef } from "react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { FilterBaseButton, FilterBaseButtonProps } from "../FilterBaseButton"

export interface FilterBaseTooltipButtonProps extends FilterBaseButtonProps {
  tooltipText: string
}

export const FilterBaseTooltipButton = forwardRef<
  HTMLButtonElement,
  FilterBaseTooltipButtonProps
>(({ tooltipText, ...restProps }, ref) => (
  <Tooltip text={tooltipText} position="below">
    <FilterBaseButton ref={ref} {...restProps} />
  </Tooltip>
))

FilterBaseTooltipButton.displayName = "FilterBaseTooltipButton"
