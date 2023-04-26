import React, { useEffect, useState } from "react"
import { Filter, FilterContents } from "~components/Filter"
import { useFilterBarContext } from "~components/FilterBar/context/FilterBarContext"
import { FilterButtonProps } from "~components/FilterButton"

export interface FilterPancakeProps {
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
  label: string
}

export const FilterPancake = ({
  renderTrigger,
  label,
}: FilterPancakeProps): JSX.Element => {
  const [contents, setContents] = useState<string>()
  const { updateSelectedValue, state, toggleOpenFilter } = useFilterBarContext()

  useEffect(() => {
    updateSelectedValue(label, contents)
  }, [contents])

  return (
    <Filter
      isOpen={state[label].isOpen ?? false}
      setIsOpen={(open): void => toggleOpenFilter(label, open)}
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
