import React, { useEffect, useState } from "react"
import { Filter, FilterContents, FilterProps } from "~components/Filter"
import { useFilterBarContext } from "~components/FilterBar/context/FilterBarContext"
import { FilterButtonProps } from "~components/FilterButton"

export interface FilterPancakeProps {
  isOpen: FilterProps["isOpen"]
  setIsOpen: FilterProps["setIsOpen"]
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
  label: string
}

export const FilterPancake = ({
  isOpen,
  setIsOpen,
  renderTrigger,
  label,
}: FilterPancakeProps): JSX.Element => {
  const [contents, setContents] = useState<string>()
  const { updateSelectedValue } = useFilterBarContext()

  useEffect(() => {
    updateSelectedValue(label, contents)
  }, [contents])

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
        <button
          onClick={(): void => {
            setContents(c => (c ? undefined : "meep"))
          }}
        >
          Toggle contents value
        </button>
      </FilterContents>
    </Filter>
  )
}
