import * as React from "react"

import { VisuallyHidden } from "@kaizen/draft-visually-hidden"

export default {
  title: "VisuallyHidden (React)",
  component: VisuallyHidden,
  parameters: {
    info: {
      text: `
        import { VisuallyHidden } from "@kaizen/draft-VisuallyHidden";
      `,
    },
  },
}

export const DefaultStory = () => <VisuallyHidden>world!</VisuallyHidden>

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}
