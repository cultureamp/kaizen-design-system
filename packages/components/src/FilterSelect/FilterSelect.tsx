import React from "react"
import { Filter, FilterContents, FilterProps } from "../Filter"
import { FilterButtonProps } from "../FilterButton"

export type FilterSelectProps = {
  isOpen: FilterProps["isOpen"]
  setIsOpen: FilterProps["setIsOpen"]
  renderTrigger: (triggerButtonProps: FilterButtonProps) => JSX.Element
  label: string
}

export const FilterSelect = ({
  isOpen,
  setIsOpen,
  renderTrigger,
  label,
}: FilterSelectProps): JSX.Element => (
  <Filter
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    renderTrigger={(triggerProps): JSX.Element =>
      renderTrigger({
        label,
        ...triggerProps,
      })
    }
  >
    <FilterContents>Hello</FilterContents>
  </Filter>
)

FilterSelect.displayName = "FilterSelect"
