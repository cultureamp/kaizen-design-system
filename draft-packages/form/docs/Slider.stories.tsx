import * as React from "react"

import { Slider } from "@kaizen/draft-form"
import { useState } from "@storybook/addons"
import { Paragraph } from "@kaizen/component-library"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { InputRange, Label } from "../KaizenDraft/Form"

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

export const SliderPrimitive = () => (
  <>
    <Label htmlFor="make-me-unique-5">Label</Label>
    <Paragraph variant="small" id="description-text">
      Helpful description text
    </Paragraph>
    <InputRange
      defaultValue={10}
      id="make-me-unique-5"
      labelLow="Awful"
      labelHigh="Fantastic"
      aria-describedby="description-text"
    />
  </>
)

SliderPrimitive.storyName = "Slider primitive"

export const SliderDisabled = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={10}
    id="make-me-unique-4"
    labelLow="Awful"
    labelHigh="Fantastic"
    disabled={true}
    disabledLabel="Waiting for Doug"
  />
)

SliderDisabled.storyName = "Slider disabled"
