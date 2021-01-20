import * as React from "react"

import { SearchBox } from "@kaizen/draft-search-box"

export default {
  title: "SearchBox (React)",
  component: SearchBox,
  parameters: {
    info: {
      text: `
        import { SearchBox } from "@kaizen/draft-SearchBox";
      `,
    },
  },
}

export const DefaultStory = () => <SearchBox>world!</SearchBox>

DefaultStory.storyName = "Default (Kaizen Site Demo)"
