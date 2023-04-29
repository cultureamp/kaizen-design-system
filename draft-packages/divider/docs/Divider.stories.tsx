import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Box } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import { Divider } from "@kaizen/draft-divider"
import { Heading, Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  tags: ["autodocs"],
  title: "Components/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'import { Divider } from "@kaizen/draft-divider"',
      },
    },
  },
} satisfies Meta<typeof Divider>

export const DefaultStory: StoryFn<typeof Divider> = args => (
  <Box m={1}>
    <Divider {...args} />
  </Box>
)
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  variant: "canvas",
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.Row rowTitle="Content">
      <Divider variant="content" isReversed={isReversed} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Canvas">
      <Divider variant="canvas" isReversed={isReversed} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Menu Separator">
      <Divider variant="menuSeparator" isReversed={isReversed} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Example">
      <Card variant={isReversed ? "highlight" : "default"}>
        <Box p={0.75}>
          <Heading variant="heading-4" color="dark">
            Understands people&apos;s agenda and perspectives
          </Heading>
          <Box pt={0.25}>
            <Paragraph variant="small" color="dark-reduced-opacity">
              Interpersonal
            </Paragraph>
          </Box>
        </Box>
        <Divider variant="content" isReversed={isReversed} />
        <Box p={0.75}>
          <Heading variant="heading-4" color="dark">
            Anticipates customers needs
          </Heading>
          <Box pt={0.25}>
            <Paragraph variant="small" color="dark-reduced-opacity">
              Self management
            </Paragraph>
          </Box>
        </Box>
        <Divider variant="content" isReversed={isReversed} />
        <Box p={0.75}>
          <Heading variant="heading-4" color="dark">
            Initiates and develops relationships
          </Heading>
          <Box pt={0.25}>
            <Paragraph variant="small" color="dark-reduced-opacity">
              Interpersonal
            </Paragraph>
          </Box>
        </Box>
      </Card>
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
