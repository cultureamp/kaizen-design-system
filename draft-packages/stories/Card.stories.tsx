import { Box, Paragraph } from "@kaizen/component-library"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Tabs } from "@kaizen/draft-tabs"
import * as React from "react"
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
      <Box p={1.5}>
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
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

export const CardAsArticle = () => (
  <Box m={4}>
    <Card tag="article" data-test="test">
      <Box p={1.5}>
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
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

export const CardAsTabContainer = () => {
  const tabs = [
    { label: "One" },
    { label: "Two", active: true },
    { label: "Three" },
    { label: "Four" },
  ]
  return (
    <Box m={4} pt={1}>
      <Card tag="section" data-test="test">
        <Tabs tabs={tabs} />
      </Card>
    </Box>
  )
}

CardAsTabContainer.story = {
  name: "As a tab container",
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}
