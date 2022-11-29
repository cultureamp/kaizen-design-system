import React, { forwardRef } from "react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { FilterBaseButton, FilterBaseButtonProps } from "../FilterBaseButton"

export interface FilterTooltipButtonProps extends FilterBaseButtonProps {
  tooltipText: string
}

export const FilterTooltipButton = forwardRef<
  HTMLButtonElement,
  FilterTooltipButtonProps
>(({ tooltipText, ...restProps }, ref) => (
  <Tooltip text={tooltipText} position="below">
    <FilterBaseButton ref={ref} {...restProps} />
  </Tooltip>
))

FilterTooltipButton.displayName = "FilterTooltipButton"
