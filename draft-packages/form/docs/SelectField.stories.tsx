import React from "react"
import { SelectField } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Select Field`,
  component: SelectField,
  parameters: {
    docs: {
      description: {
        component: 'import { SelectField } from "@kaizen/draft-form"',
      },
    },
  },
  decorators: [withDesign],
}

export const Default = () => (
  <SelectField
    placeholder="Choose an item…"
    labelText="Label"
    items={[
      {
        value: "Apple",
      },
      {
        value: "Orange",
      },
    ]}
  />
)
