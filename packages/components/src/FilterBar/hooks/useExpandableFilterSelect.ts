/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useCallback } from "react"
import { FilterOption, IFilter } from "../types"
import { useBaseFilterSelect } from "./useBaseFilterSelect"
import { useExpandableFilterState } from "./useExpandableFilterState"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useExpandableFilterSelect = <T extends IFilter<any>>(
  filter: T,
  options: FilterOption[]
) => {
  const { dispatch, values } = useExpandableFilterState()

  const { onCheckboxChange, ...baseActions } = useBaseFilterSelect({
    filter,
    options,
    values,
    onChange: value =>
      dispatch({
        data: { id: filter.id, value },
        type: "setFilterValue",
      }),
  })

  const removeFilter = useCallback(() => {
    dispatch({ type: "removeFilter", data: filter })
  }, [dispatch, filter])

  const setOpen = useCallback(
    (isOpen: boolean) => {
      const visibility = isOpen ? "open" : "visible"
      dispatch({
        type: "setFilterVisibility",
        data: { id: filter.id, visibility },
      })
    },
    [dispatch, filter.id]
  )

  return {
    ...baseActions,
    onCheckboxChange,
    filter,
    removeFilter,
    setOpen,
  }
}
