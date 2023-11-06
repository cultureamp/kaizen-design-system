import React from "react"
import { action } from "@storybook/addon-actions"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/Filter/FilterButton"

/*
 * This helper is for consumers of Filter, not for Filter itself
 * (the type is slightly different)!
 */
export const renderTriggerControls = {
  description: "Element is a variation of a FilterButton",
  options: ["Filter Button", "Filter Button Removable"],
  control: { type: "radio" },
  mapping: {
    "Filter Button": (triggerButtonProps: FilterButtonProps): JSX.Element => (
      <FilterButton {...triggerButtonProps} />
    ),
    "Filter Button Removable": (
      triggerButtonProps: FilterButtonProps
    ): JSX.Element => (
      <FilterButtonRemovable
        triggerButtonProps={{ ...triggerButtonProps }}
        removeButtonProps={{ onClick: action("remove button onClick") }}
      />
    ),
  },
}
