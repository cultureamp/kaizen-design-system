import * as React from "react"

import { LoadingSpinner } from "@kaizen/draft-loading-spinner"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "LoadingSpinner (React)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A20943"
    ),
  },
  decorators: [withDesign],
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
