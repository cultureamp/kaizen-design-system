import { FilterOption, IBaseFilter } from "../types"
import { useBaseFilterSelect } from "./useBaseFilterSelect"
import { useSimpleFilterState } from "./useSimpleFilterState"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSimpleFilterSelect = <T extends IBaseFilter<any>>(
  filter: T,
  options: Array<FilterOption<string | number>>
) => {
  const { values, dispatch } = useSimpleFilterState()

  const { onCheckboxChange, ...baseActions } = useBaseFilterSelect({
    filter,
    options,
    values,
    onChange: (value) =>
      dispatch({
        data: { id: filter.id, value },
        type: "setFilterValue",
      }),
  })

  return {
    ...baseActions,
    onCheckboxChange,
    filter,
  }
}
