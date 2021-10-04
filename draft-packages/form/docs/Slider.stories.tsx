import * as React from "react"

import { Slider } from "@kaizen/draft-form"
import { useState } from "@storybook/addons"
import { Paragraph, Heading, Box } from "@kaizen/component-library"
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
DefaultWithLabelLowAndLabelHigh.storyName = "Default, Custom low/high labels"

export const DefaultLabelAboveSlider = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    labelPosition="block"
    defaultValue={10}
    id="make-me-unique-4"
    labelLow="Awful"
    labelHigh="Fantastic"
  />
)
DefaultLabelAboveSlider.storyName = "Default, Label above Slider"

export const DefaultCustomMinMax = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={4}
    min={1}
    max={7}
    id="make-me-unique-5"
  />
)
DefaultCustomMinMax.storyName = "Default, Custom min/max"

export const SliderPrimitive = () => (
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
      id="make-me-unique-6"
      labelLow="Awful"
      labelHigh="Fantastic"
      aria-describedby="description-text"
    />
  </>
)
SliderPrimitive.storyName = "Slider primitive"

export const SliderPrimitiveHeadingLabel = () => (
  <>
    <Box mb={0.25}>
      <Heading tag="label" variant="heading-4" id="make-me-unique-6">
        Work overall
      </Heading>
    </Box>
    <Box mb={0.5}>
      <Paragraph variant="small" id="description-text">
        General feeling about work
      </Paragraph>
    </Box>
    <InputRange
      id="make-me-unique-7"
      defaultValue={10}
      labelLow="Awful"
      labelHigh="Fantastic"
      aria-labelledby="make-me-unique-6" // unfortunately Heading doesn't allow `htmlFor`, so we have to use aria-labelledby instead here
      aria-describedby="description-text"
    />
  </>
)
SliderPrimitiveHeadingLabel.storyName = "Slider primitive with Heading as label"

export const SliderDisabled = () => (
  <Slider
    labelText="Work overall"
    labelDescription="General feeling about work"
    defaultValue={10}
    id="make-me-unique-8"
    labelLow="Awful"
    labelHigh="Fantastic"
    disabled={true}
    disabledLabel="Waiting for Doug"
  />
)
SliderDisabled.storyName = "Slider disabled"
