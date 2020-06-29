import * as React from "react"

import { Box, Paragraph } from "@kaizen/component-library"
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
        <Paragraph variant="body">
          Meaningful content—such as data, images, or paragraphs (but not
          headings) — sit on cards.
        </Paragraph>
      </Box>
    </Card>
  </Box>
)

CardWithSpace.story = {
  name: "Formatting with box",
}

export const CardAsArticle = () => (
  <Box m={4}>
    <Card tag="article" data-test="test">
      <Box p={1}>
        <Paragraph variant="body">
          Change the tag of the card to whatever makes the most semantic sense
          for your use case
        </Paragraph>
      </Box>
    </Card>
  </Box>
)

CardAsArticle.story = {
  name: "As an article",
}
