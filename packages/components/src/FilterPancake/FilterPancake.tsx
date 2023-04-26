import React from "react"
import { Filter, FilterContents, FilterProps } from "~components/Filter"
import { FilterButtonProps } from "~components/FilterButton"

export interface FilterPancakeProps {
  isOpen: FilterProps["isOpen"]
  setIsOpen: FilterProps["setIsOpen"]
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
  label: string
  contents?: string
}

export const FilterPancake = ({
  isOpen,
  setIsOpen,
  renderTrigger,
  label,
  contents,
}: FilterPancakeProps): JSX.Element => (
  <Filter
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    renderTrigger={(triggerProps): JSX.Element =>
      renderTrigger({
        selectedValue: contents,
        label,
        ...triggerProps,
      })
    }
  >
    <FilterContents>{contents ?? "Nothing!"}</FilterContents>
  </Filter>
)
