import React, { useEffect } from "react"
import { Filter, FilterContents } from "~components/Filter"
import {
  IsUsableWhen,
  useFilterBarContext,
} from "~components/FilterBarChildren/context/FilterBarContext"
import { FilterButtonProps } from "~components/FilterButton"

export interface FilterPancakeProps {
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
  label: string
  isDefaultHidden?: boolean
  onChange?: (value: string | undefined) => void
  isUsableWhen?: IsUsableWhen
}

export const FilterPancake = ({
  renderTrigger,
  label,
  isDefaultHidden,
  onChange,
  isUsableWhen,
}: FilterPancakeProps): JSX.Element | null => {
  const { addFilter, updateSelectedValue, getFilterState, toggleOpenFilter } =
    useFilterBarContext()

  useEffect(() => {
    addFilter(label, {
      isRemovable:
        renderTrigger({ label }).props?.removeButtonProps !== undefined,
      isHidden: isDefaultHidden,
      isUsableWhen,
    })
  }, [])

  const state = getFilterState(label)

  if (!state || !state.isUsable || state.isHidden) return null

  const contents = state.selectedValue

  return (
    <Filter
      isOpen={state.isOpen ?? false}
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
          type="button"
          onClick={(): void => {
            const newValue = contents ? undefined : "meep"
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
