import * as React from "react"
import {
  FilterValues,
  SimpleFilterContainerProps,
  SimpleFilterEvents,
  UseSimpleFilterProps,
} from "../types"

export const useSimpleFilter = <Values extends FilterValues>(
  props: UseSimpleFilterProps<Values>
): SimpleFilterContainerProps<Values> => {
  const { filters, values = {} as Values, onValuesChange } = props

  const dispatch = React.useCallback(
    (event: SimpleFilterEvents<Values>) => {
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
      }
    },
    [values, onValuesChange]
  )

  return {
    filters,
    values,
    dispatch,
  }
}
