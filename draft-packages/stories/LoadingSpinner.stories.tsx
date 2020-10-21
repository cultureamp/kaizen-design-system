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
      size="md"
    ></LoadingSpinner>
  </div>
)

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const SizeStory = () => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <LoadingSpinner
      accessibilityLabel="Loading comments"
      size="sm"
    ></LoadingSpinner>
  </div>
)

SizeStory.storyName = "Small"
