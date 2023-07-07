import { ValidationMessage } from "~components/FilterDatePicker"

export type DateRangeFieldValidationMessage = {
  dateStart?: ValidationMessage
  dateEnd?: ValidationMessage
}

export type Actions =
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

export type FilterDateRangePickerState = {
  selectedStartDate: Date | undefined
  selectedEndDate: Date | undefined
  inputStartValue: string
  inputEndValue: string
  startMonth: Date
}

export type SetupFilterDateRangePickerState = {
  selectedStartDate: Date | undefined
  selectedEndDate: Date | undefined
  defaultMonth?: Date
  inputStartValue: string
  inputEndValue: string
}
