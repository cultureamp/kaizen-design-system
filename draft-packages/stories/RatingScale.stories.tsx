import * as React from "react"

import { RatingScale } from "@kaizen/draft-rating-scale"

export default {
  title: "RatingScale (React)",
  component: RatingScale,
  parameters: {
    info: {
      text: `
        import { RatingScale } from "@kaizen/draft-RatingScale";
      `,
    },
  },
}

export const DefaultStory = () => <RatingScale>world!</RatingScale>

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}
