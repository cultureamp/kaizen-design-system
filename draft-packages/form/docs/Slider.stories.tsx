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
  <Slider
    id="make-me-unique-1"
    labelText="Work overall"
    minLabel="Awful"
    maxLabel="Fantastic"
  />
)
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Uncontrolled = () => (
  <Slider
    id="make-me-unique-2"
    labelText="Work overall"
    description="General feeling about work"
    defaultValue={1}
    minLabel="Awful"
    maxLabel="Fantastic"
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
      minLabel="Awful"
      maxLabel="Fantastic"
    />
  )
}
Controlled.storyName = "Controlled"

export const LabelAboveSlider = () => (
  <Slider
    id="make-me-unique-4"
    labelText="Work overall"
    description="General feeling about work"
    labelPosition="block"
    defaultValue={10}
    minLabel="Awful"
    maxLabel="Fantastic"
  />
)
LabelAboveSlider.storyName = "Label above input"

export const CustomMinMaxLabels = () => (
  <Slider
    id="make-me-unique-5"
    labelText="Work overall"
    description="General feeling about work"
    defaultValue={10}
    minLabel="Awful"
    maxLabel="Fantastic"
  />
)
CustomMinMaxLabels.storyName = "Custom min/max labels"

export const CustomMinMax = () => (
  <Slider
    id="make-me-unique-6"
    labelText="Work overall"
    description="General feeling about work"
    defaultValue={4}
    min={1}
    max={7}
    minLabel="Awful"
    maxLabel="Fantastic"
  />
)
CustomMinMax.storyName = "Custom min/max"

export const Prominent = () => (
  <Slider
    id="make-me-unique-7"
    variant="prominent"
    labelText="Work overall"
    description="General feeling about work"
    minLabel="Awful"
    maxLabel="Fantastic"
  />
)
Prominent.storyName = "Prominent"

export const Disabled = () => (
  <Slider
    labelText="Work overall"
    description="General feeling about work"
    defaultValue={10}
    id="make-me-unique-8"
    disabled={true}
    disabledLabel="Waiting for Doug to respond"
    minLabel="Awful"
    maxLabel="Fantastic"
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
      id="make-me-unique-9"
      defaultValue={10}
      aria-describedby="description-text"
      minLabel="Awful"
      maxLabel="Fantastic"
    />
  </>
)
UsingPrimitive.storyName = "Using InputRange primitive"
