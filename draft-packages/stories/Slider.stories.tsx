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

export const DefaultStory = () => <Slider>world!</Slider>

DefaultStory.storyName = "Default (Kaizen Site Demo)"
