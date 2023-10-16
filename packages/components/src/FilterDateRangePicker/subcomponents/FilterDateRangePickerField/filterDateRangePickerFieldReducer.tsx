import { isInvalidDate } from "~utils/date-controls"

type DateRangeFieldActions =
  | {
      type: "update_selected_start_date"
      date: Date | undefined
      inputValue?: string
    }
  | {
      type: "update_selected_end_date"
      date: Date | undefined
      inputValue?: string
    }
  | {
      type: "navigate_months"
      date: Date | undefined
    }
  | {
      type: "update_input_start_field"
      inputValue: string
    }
  | {
      type: "update_input_end_field"
      inputValue: string
    }

type FilterDateRangePickerState = {
  selectedStartDate: Date | undefined
  selectedEndDate: Date | undefined
  inputStartValue: string
  inputEndValue: string
  startMonth: Date
}

export const filterDatePickerFieldReducer = (
  state: FilterDateRangePickerState,
  action: DateRangeFieldActions
): FilterDateRangePickerState => {
  switch (action.type) {
    case "update_selected_start_date":
      return {
        ...state,
        selectedStartDate: action.date,
        inputStartValue:
          action.inputValue === undefined
            ? state.inputStartValue
            : action.inputValue,
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "update_selected_end_date":
      return {
        ...state,
        selectedEndDate: action.date,
        inputEndValue:
          action.inputValue === undefined
            ? state.inputEndValue
            : action.inputValue,
      }
    case "navigate_months":
      return {
        ...state,
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "update_input_start_field":
      return {
        ...state,
        inputStartValue: action.inputValue,
      }
    case "update_input_end_field":
      return {
        ...state,
        inputEndValue: action.inputValue,
      }
  }
}
