import { Box, Paragraph } from "@kaizen/component-library"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { Card } from "../card/index"

export default {
  title: "Card (React)",
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
