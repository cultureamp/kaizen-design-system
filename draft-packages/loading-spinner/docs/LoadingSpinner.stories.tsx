import * as React from "react"

import { LoadingSpinner } from "@kaizen/draft-loading-spinner"
import { Paragraph } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
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
      flexDirection: "column",
      color: colorTokens.kz.color.seedling["400"],
    }}
  >
    <div style={{ marginBottom: "3rem" }}>
      <LoadingSpinner
        accessibilityLabel="Loading comments"
        size="md"
      ></LoadingSpinner>
    </div>
    <Paragraph variant="body">
      LoadingSpinner will inherit its color from the parent's <code>color</code>{" "}
      property.
      <br />
      That color will become the foreground, and the background will be the same
      color with 10% opacity.
      <br />
      When inside a button, it is intended to have the same color as the label
      text.
    </Paragraph>
  </div>
)

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const SizeStory = () => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      color: colorTokens.kz.color.wisteria["800"],
    }}
  >
    <LoadingSpinner
      accessibilityLabel="Loading comments"
      size="sm"
    ></LoadingSpinner>
  </div>
)

SizeStory.storyName = "Small"
