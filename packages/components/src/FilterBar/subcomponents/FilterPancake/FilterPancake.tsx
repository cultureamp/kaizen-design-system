import React from "react"
import { Filter, FilterContents } from "~components/Filter"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import {
  // IsUsableWhen,
  useFilterBarContext,
} from "../../context/FilterBarContext"

export interface FilterPancakeProps {
  // renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
  label: string
  onChange?: (value: string | undefined) => void
  // isUsableWhen?: IsUsableWhen
}

export const FilterPancake = ({
  // renderTrigger,
  label,
  onChange,
}: // isUsableWhen,
FilterPancakeProps): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext()

  const filterState = getFilterState(label)

  const contents = filterState.selectedValue

  return (
    <Filter
      isOpen={filterState.isOpen ?? false}
      setIsOpen={(open): void => toggleOpenFilter(label, open)}
      renderTrigger={(triggerProps): JSX.Element => {
        const props = {
          selectedValue: contents,
          label,
          ...triggerProps,
        }

        return filterState.isRemovable ? (
          <FilterButtonRemovable
            triggerButtonProps={props}
            removeButtonProps={{
              onClick: () => hideFilter(label),
            }}
          />
        ) : (
          <FilterButton {...props} />
        )
      }}
    >
      <FilterContents>
        <p>{contents ?? "Nothing!"}</p>
        <button
          onClick={(): void => {
            const newValue = contents === "meep" ? undefined : "meep"
            updateSelectedValue(label, newValue)
            onChange?.(newValue)
          }}
        >
          Toggle contents value
        </button>
      </FilterContents>
    </Filter>
  )
}
