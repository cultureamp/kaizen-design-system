import React from "react"
import { DatePicker, DateRangePicker } from ".."
import { CATEGORIES } from "../../../storybook/constants"

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

export const DateRangePick = () => <DateRangePicker />
