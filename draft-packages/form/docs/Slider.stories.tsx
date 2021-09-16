import * as React from "react"

import { Slider } from "@kaizen/draft-form"
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
  />
)

DefaultUncontrolled.storyName = "Default, Uncontrolled"

export const DefaultControlled = () => (
  <Slider id="make-me-unique-3" labelText="Work overall" value={4} />
)

DefaultControlled.storyName = "Default, Controlled"
