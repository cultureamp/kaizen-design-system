import React, { useEffect } from "react"
import {
  ExpandableReducer,
  expandableReducer,
  calculateFiltersState,
  helpers,
} from "../reducers/expandableReducer"
import {
  ExpandableFilterEvents,
  FilterValues,
  IFilter,
  UseExpandableFilterBarProps,
} from "../types"

export const useExpandableFilter = <Values extends FilterValues>(
  props: UseExpandableFilterBarProps<Values>,
  reducer?: ExpandableReducer<Values>
) => {
  const {
    filters,
    display = "expanded",
    values = {} as Values,
    onValuesChange,
  } = props

  const [state, setState] = React.useState({
    ...calculateFiltersState(filters),
    display,
  })

  useEffect(() => {
    setState((s) => ({ ...s, ...calculateFiltersState(filters) }))
  }, [filters])

  /**
   * This is memoized because the reducer function is curried.
   * Not doing so means needlessly recreating it
   * each render since we need to call it to get the 'react reducer'.
   *
   * Although not a huge issue in itself, the bigger issue it causes
   * is duplicate calls to internal functions as react will 're-intialise'
   * it each time because it's a different function.
   */
  const r: ExpandableReducer<Values> = React.useMemo(
    () => (reducer ? expandableReducer(reducer) : expandableReducer()),
    [reducer]
  )

  const dispatch = React.useCallback(
    (event: ExpandableFilterEvents<Values, IFilter<Values>>) => {
      switch (event.type) {
        case "setFilterValue": {
          const updatedValues = {
            ...values,
            [event.data.id]: event.data.value,
          }
          return onValuesChange(updatedValues)
        }
        case "setValues":
          return onValuesChange({ ...values, values: event.data })

        case "removeFilter": {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [event.data.id]: filterId = undefined, ...updatedValues } =
            values
          onValuesChange(updatedValues as Values)
          return setState((s) => r(s, event, helpers))
        }
        case "setFilterVisibility": {
          const { id, visibility } = event.data
          const updatedValues =
            visibility === "hidden" ? { ...values, [id]: undefined } : undefined

          if (updatedValues) {
            onValuesChange(updatedValues)
          }

          return setState((s) => r(s, event, helpers))
        }
        case "clearFilters": {
          onValuesChange({} as Values)
          return setState((s) => r(s, event, helpers))
        }
        default:
          return setState((s) => r(s, event, helpers))
      }
    },
    [r, values, filters, onValuesChange]
  )

  return {
    ...state,
    values,
    dispatch,
  }
}
