import React from "react"
import { CATEGORIES } from "../../../storybook/constants"
import {
  DatePickerWrapper as DatePicker,
  // DateRangePicker,
} from "../src/DatePicker"

export default {
  title: `${CATEGORIES.components}/DatePicker`,
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DatePicker } from "@kaizen/DatePicker"',
      },
    },
  },
}

export const KaizenDefault = () => <DatePicker />

// export const DateRangerPicker = () => <DateRangePicker />
