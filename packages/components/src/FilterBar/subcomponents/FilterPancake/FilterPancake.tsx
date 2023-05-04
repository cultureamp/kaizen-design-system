import React from "react"
import { Filter, FilterContents } from "~components/Filter"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import {
  // IsUsableWhen,
  useFilterBarContext,
} from "../../context/FilterBarContext"

export interface FilterPancakeProps {
  // renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
  id: string
  // label: string
  onChange?: (value: string | undefined) => void
  // isUsableWhen?: IsUsableWhen
}

export const FilterPancake = ({
  // renderTrigger,
  id,
  // label,
  onChange,
}: // isUsableWhen,
FilterPancakeProps): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext()

  const filterState = getFilterState(id)

  const contents = filterState.selectedValue

  return (
    <Filter
      isOpen={filterState.isOpen ?? false}
      setIsOpen={(open): void => toggleOpenFilter(id, open)}
      renderTrigger={(triggerProps): JSX.Element => {
        const props = {
          selectedValue: contents,
          label: filterState.label,
          ...triggerProps,
        }

        return filterState.isRemovable ? (
          <FilterButtonRemovable
            triggerButtonProps={props}
            removeButtonProps={{
              onClick: () => hideFilter(id),
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
          type="button"
          onClick={(): void => {
            const newValue = contents === "meep" ? undefined : "meep"
            updateSelectedValue(id, newValue)
            onChange?.(newValue)
          }}
        >
          Toggle contents value
        </button>
      </FilterContents>
    </Filter>
  )
}
