import * as React from "react"

import { FilterDrawer } from "@kaizen/draft-filter-drawer"

export default {
  title: "FilterDrawer (React)",
}

export const DefaultStory = () => (
  <FilterDrawer example="test">Render some children</FilterDrawer>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}
