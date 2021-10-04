import * as React from "react"
import { Slider } from "@kaizen/draft-form"
import { useState } from "@storybook/addons"
import { Paragraph, Box } from "@kaizen/component-library"
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

export const Uncontrolled = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={1}
    id="make-me-unique-2"
  />
)
Uncontrolled.storyName = "Uncontrolled"

export const Controlled = () => {
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
Controlled.storyName = "Controlled"

export const LabelAboveSlider = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    labelPosition="block"
    defaultValue={10}
    id="make-me-unique-4"
  />
)
LabelAboveSlider.storyName = "Label above input"

export const CustomMinMaxLabels = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={10}
    id="make-me-unique-5"
    minLabel="Awful"
    maxLabel="Fantastic"
  />
)
CustomMinMaxLabels.storyName = "Custom min/max labels"

export const CustomMinMax = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={4}
    min={1}
    max={7}
    id="make-me-unique-6"
  />
)
CustomMinMax.storyName = "Custom min/max"

export const Prominent = () => (
  <Slider
    variant="prominent"
    labelText="Work overall"
    labelDescription="General feeling about work"
    id="make-me-unique-7"
  />
)
Prominent.storyName = "Prominent"

export const Disabled = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={10}
    id="make-me-unique-8"
    disabled={true}
    disabledLabel="Waiting for Doug"
  />
)
Disabled.storyName = "Disabled"

export const UsingPrimitive = () => (
  <>
    <Box mb={0.25}>
      <Label htmlFor="make-me-unique-5">Work overall</Label>
    </Box>
    <Box mb={0.5}>
      <Paragraph variant="small" id="description-text">
        General feeling about work
      </Paragraph>
    </Box>
    <InputRange
      defaultValue={10}
      id="make-me-unique-9"
      aria-describedby="description-text"
    />
  </>
)
UsingPrimitive.storyName = "Using InputRange primitive"
