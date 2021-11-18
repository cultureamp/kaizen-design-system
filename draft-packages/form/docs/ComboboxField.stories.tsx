import React from "react"
import { ComboboxField } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Combobox Field`,
  component: ComboboxField,
  parameters: {
    docs: {
      description: {
        component: 'import { ComboboxField } from "@kaizen/draft-form"',
      },
    },
  },
  decorators: [withDesign],
}

export const Default = () => (
  <ComboboxField
    placeholder="Choose an item…"
    labelText="Label"
    items={[
      {
        value: "Apple",
      },
      {
        value: "Mandarin",
      },
      {
        value: "Mango",
      },
      {
        value: "Watermelon",
      },
      {
        value: "Orange",
      },
    ]}
  />
)
