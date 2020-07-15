import * as React from "react"

import { LoadingSpinner } from "@kaizen/draft-loading-spinner"

export default {
  title: "LoadingSpinner (React)",
}

export const DefaultStory = () => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <LoadingSpinner
      accessibilityLabel="Loading comments"
      size="lg"
    ></LoadingSpinner>
  </div>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}
