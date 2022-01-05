import React from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../index"

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
