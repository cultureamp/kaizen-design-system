import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"

import { FilterDrawer } from "@kaizen/draft-filter-drawer"

export default {
  title: "FilterDrawer (React)",
}

export const DefaultStory = () => <FilterDrawer example="test"></FilterDrawer>

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}
