import * as React from "react"

import { LoadingSpinner } from "@kaizen/draft-loading-spinner"
import { Box, Paragraph } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Loading Spinner (deprecated)`,
  component: LoadingSpinner,
  parameters: {
    docs: {
      description: {
        component:
          'This component is now deprecated. Please use LoadingSpinner from "@kaizen/loading-spinner" instead.',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A20943"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = () => (
  <div
    style={{
      color: colorTokens.color.green["400"],
    }}
  >
    <Box mb={2}>
      <LoadingSpinner accessibilityLabel="Loading comments" size="md" />
    </Box>
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
      color: colorTokens.color.purple["800"],
    }}
  >
    <LoadingSpinner
      accessibilityLabel="Loading comments"
      size="sm"
    ></LoadingSpinner>
  </div>
)

SizeStory.storyName = "Small"
