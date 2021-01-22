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

export const DefaultStory = () => <Slider canRespond />

DefaultStory.storyName = "Can respond"

export const CannotRespond = () => <Slider canRespond={false} />

CannotRespond.storyName = "Can't respond"
