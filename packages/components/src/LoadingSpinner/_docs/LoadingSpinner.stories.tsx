import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Box } from "@kaizen/component-library"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { LoadingSpinner } from "@kaizen/loading-spinner"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../../../storybook/constants"
import { figmaEmbed } from "../../../../../storybook/helpers"

export default {
  title: `${CATEGORIES.components}/Loading Spinner`,
  component: LoadingSpinner,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component: 'import { LoadingSpinner } from "@kaizen/loading-spinner"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A20943"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory: ComponentStory<typeof LoadingSpinner> = args => (
  <div
    style={{
      color: colorTokens.color.green["400"],
    }}
  >
    <Box mb={2}>
      <LoadingSpinner {...args} />
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
DefaultStory.args = {
  accessibilityLabel: "Loading comments",
  size: "sm",
}

export const StickerSheet: Story = () => (
  <>
    <div
      style={{
        color: colorTokens.color.purple["800"],
        marginBottom: "40px",
      }}
    >
      <LoadingSpinner accessibilityLabel="Loading comments" size="sm" />
    </div>
    <div
      style={{
        color: colorTokens.color.purple["800"],
      }}
    >
      <LoadingSpinner accessibilityLabel="Loading comments" size="md" />
    </div>
  </>
)
