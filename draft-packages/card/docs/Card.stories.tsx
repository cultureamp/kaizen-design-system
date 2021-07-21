import { Box, Paragraph } from "@kaizen/component-library"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Card } from ".."
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Card (React)",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'import { Card } from "@kaizen/component-library"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A14085"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = () => <Card>This is a default card</Card>

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const CardWithSpace = () => (
  <Box m={4}>
    <Card>
      <Box p={1.5}>
        <Paragraph variant="body">
          Meaningful content—such as data, images, or paragraphs (but not
          headings) — sit on cards.
        </Paragraph>
      </Box>
    </Card>
  </Box>
)

CardWithSpace.storyName = "Card, custom spacing with Box"

CardWithSpace.parameters = {
  backgrounds: { default: "Stone" },
}
