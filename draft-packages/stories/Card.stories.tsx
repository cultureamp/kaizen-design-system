import * as React from "react"

import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { Card } from "../card/index"

export default {
  title: "Card (React)",
}

export const DefaultStory = () => <Card>This is a default card</Card>

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

export const CardWithSpace = () => (
  <Box m={4}>
    <Card>
      <Box p={1}>
        <Heading tag="h1" variant="heading-2">
          The children of card are not formatted.
        </Heading>
        <Box pt={1}>
          <Paragraph variant="body">
            You can put whatever you need in a card.
          </Paragraph>
        </Box>
      </Box>
    </Card>
  </Box>
)

CardWithSpace.story = {
  name: "Formatting with box",
}
