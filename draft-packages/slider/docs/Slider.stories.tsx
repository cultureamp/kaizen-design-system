import * as React from "react"

import { Slider } from "@kaizen/draft-slider"

export default {
  title: "Components/Form/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'import { Slider } from "@kaizen/draft-slider"',
      },
    },
  },
}

export const DefaultKaizenSiteDemo = () => (
  <div style={{ width: "450px" }}>
    <Slider />
  </div>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Disabled = () => (
  <div style={{ width: "450px" }}>
    <Slider disabled />
  </div>
)

Disabled.storyName = "Disabled"

export const DisabledWithLabel = () => (
  <div style={{ width: "450px" }}>
    <Slider disabled disabledLabel="Waiting for Jane to respond" />
  </div>
)

DisabledWithLabel.storyName = "Disabled with label"

export const CustomLabels = () => (
  <div style={{ width: "450px" }}>
    <Slider labelLow="Never" labelHigh="Always" />
  </div>
)

CustomLabels.storyName = "Custom labels"
