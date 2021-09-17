import * as React from "react"

import { Slider } from "@kaizen/draft-form"
import { useState } from "@storybook/addons"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Slider`,
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'import { Slider } from "@kaizen/draft-form"',
      },
    },
  },
}

export const DefaultKaizenSiteDemo = () => (
  <Slider id="make-me-unique-1" labelText="Work overall" />
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const DefaultUncontrolled = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={10}
    id="make-me-unique-2"
    labelLow="Awful"
    labelHigh="Fantastic"
  />
)

DefaultUncontrolled.storyName = "Default, Uncontrolled"

export const DefaultControlled = () => {
  const [value, setValue] = useState(5.5)

  return (
    <Slider
      id="make-me-unique-3"
      labelText="Work overall"
      value={value}
      onChange={e => setValue(Number(e.target.value))}
    />
  )
}

DefaultControlled.storyName = "Default, Controlled"

export const DefaultWithLabelLowAndLabelHigh = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={10}
    id="make-me-unique-4"
    labelLow="Awful"
    labelHigh="Fantastic"
  />
)

DefaultWithLabelLowAndLabelHigh.storyName = "Default, Label low and high"
