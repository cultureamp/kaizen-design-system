import React, { useEffect, useState } from "react"
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
}: FilterPancakeProps): JSX.Element => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(c => c + 1)
  }, [])

  return (
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
    <FilterContents>
      <p>{contents ?? "Nothing!"}</p>
      <p>Render count: {count}</p>
    </FilterContents>
  </Filter>
)
  }
