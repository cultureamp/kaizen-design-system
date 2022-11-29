import React, { forwardRef } from "react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { FilterButtonBase, FilterButtonBaseProps } from "../FilterButtonBase"

export interface FilterTooltipButtonProps extends FilterButtonBaseProps {
  tooltipText: string
}

export const FilterTooltipButton = forwardRef<
  HTMLButtonElement,
  FilterTooltipButtonProps
>(({ tooltipText, ...restProps }, ref) => (
  <Tooltip text={tooltipText} position="below">
    <FilterButtonBase ref={ref} {...restProps} />
  </Tooltip>
))

FilterTooltipButton.displayName = "FilterTooltipButton"
