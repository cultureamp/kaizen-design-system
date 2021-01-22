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

export const DefaultKaizenSiteDemo = () => <Slider />

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Disabled = () => <Slider disabled />

Disabled.storyName = "Disabled"

export const DisabledWithLabel = () => (
  <Slider disabled disabledLabel="Waiting for Jane to respond" />
)

DisabledWithLabel.storyName = "Disabled with label"

export const CustomLabels = () => (
  <Slider labelLeft="Never" labelRight="Always" />
)

CustomLabels.storyName = "Custom labels"
