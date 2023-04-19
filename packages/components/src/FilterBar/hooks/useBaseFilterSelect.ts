import React, { useCallback } from "react"
import uniqBy from "ramda/src/uniqBy"
import { Selection } from "@kaizen/select"
import { FilterOption, FilterValues, IBaseFilter } from "../types"

type BaseFilterSelectProps<
  Values extends FilterValues,
  Filter extends IBaseFilter<Values>
> = {
  filter: Filter
  options: FilterOption[]
  values: Values
  onChange: (selectedOptions: FilterOption[]) => void
}

export const useBaseFilterSelect = <
  Values extends FilterValues,
  Filter extends IBaseFilter<Values>
>({
  filter,
  options,
  values,
  onChange,
}: BaseFilterSelectProps<Values, Filter>) => {
  // needs to convert to set
  const selectedOptions: FilterOption[] = React.useMemo(() => {
    return values[filter.id] || []
  }, [filter.id, values])

  // convert back to label and value
  const onCheckboxChange = useCallback(
    (selected: Selection) => {
      // all actually doesn't seem to be getting thrown up but that's the interface provided
      if (selected === "all") {
        return options
      }

      /**
       * This feels like a bug with the interface/component/library again in that numbers are okay but when you use them,
       * the values thrown up are all strings. Thus the conversion first
       * */
      const convertedOptions = [...options, ...selectedOptions].map((o) => ({
        ...o,
        value: String(o.value),
      }))
      /**
       * We need to account for for keeping values that have been selected but aren't in the list of available options.
       * This will be apparent when we have asychronous fetching of queries. If we happen to use an
       * async select that will already account for this, we can have simpler logic here.
       */
      return onChange(
        uniqBy((o) => o.value, convertedOptions).filter((option) =>
          selected.has(String(option.value))
        )
      )
    },
    [options, selectedOptions, onChange]
  )

  return {
    selectedOptions,
    onCheckboxChange,
  }
}
