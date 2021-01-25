import * as React from "react"

import { Slider } from "@kaizen/draft-slider"

export default {
  title: "Slider (React)",
  component: Slider,
  parameters: {
    info: {
      text: `
        import { Slider } from "@kaizen/draft-Slider";
      `,
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
    <Slider labelLeft="Never" labelRight="Always" />
  </div>
)

CustomLabels.storyName = "Custom labels"
