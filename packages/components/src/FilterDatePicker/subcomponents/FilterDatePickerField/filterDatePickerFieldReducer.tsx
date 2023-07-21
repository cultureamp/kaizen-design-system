import { isInvalidDate } from "@kaizen/date-picker"

type DateFieldActions =
  | {
      type: "update_selected_date"
      date: Date | undefined
      inputValue?: string
    }
  | {
      type: "navigate_months"
      date: Date | undefined
    }
  | {
      type: "update_input_field"
      inputValue: string
    }

type FilterDatePickerState = {
  selectedDate: Date | undefined
  inputValue: string
  startMonth: Date
}

export const filterDatePickerFieldReducer = (
  state: FilterDatePickerState,
  action: DateFieldActions
): FilterDatePickerState => {
  switch (action.type) {
    case "update_selected_date":
      return {
        ...state,
        selectedDate: action.date,
        inputValue:
          action.inputValue === undefined
            ? state.inputValue
            : action.inputValue,
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
