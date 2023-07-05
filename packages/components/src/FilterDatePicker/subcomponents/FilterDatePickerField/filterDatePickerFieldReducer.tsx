import { isInvalidDate } from "@kaizen/date-picker"
import {
  Actions,
  FilterDatePickerState,
} from "~components/FilterDatePicker/types"

const parseInputValue = (stateValue: string, inputValue?: string): string => {
  if (inputValue === undefined) return stateValue
  if (inputValue === "") return inputValue
  return inputValue
}

export const filterDatePickerFieldReducer = (
  state: FilterDatePickerState,
  action: Actions
): FilterDatePickerState => {
  switch (action.type) {
    case "update_selected_date":
      return {
        ...state,
        selectedDate: action.date,
        inputValue: parseInputValue(state.inputValue, action.inputValue),
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "navigate_months":
      return {
        ...state,
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "update_input_field":
      return {
        ...state,
        inputValue: action.inputValue,
      }
  }
}
