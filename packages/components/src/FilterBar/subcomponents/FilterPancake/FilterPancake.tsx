import React, { useEffect } from "react"
import { Filter, FilterContents } from "~components/Filter"
import { useFilterBarContext } from "~components/FilterBar/context/FilterBarContext"
import { FilterButtonProps } from "~components/FilterButton"

export interface FilterPancakeProps {
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
  label: string
  isDefaultHidden?: boolean
  onChange?: (value: string | undefined) => void
}

export const FilterPancake = ({
  renderTrigger,
  label,
  isDefaultHidden,
  onChange,
}: FilterPancakeProps): JSX.Element | null => {
  const { addFilter, updateSelectedValue, state, toggleOpenFilter } =
    useFilterBarContext()

  useEffect(() => {
    addFilter(label, {
      isRemovable:
        renderTrigger({ label }).props?.removeButtonProps !== undefined,
      isHidden: isDefaultHidden,
    })
  }, [])

  if (!state[label] || state[label].isHidden) return null

  const contents = state[label].selectedValue

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
