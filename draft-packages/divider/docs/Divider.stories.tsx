import React from "react"
import { Divider } from "@kaizen/draft-divider"
import { Card } from "@kaizen/draft-card"
import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const REVERSED_BG = {
  backgrounds: {
    default: "Purple 700",
  },
}

export default {
  title: `${CATEGORIES.components}/Divider`,
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'import { Divider } from "@kaizen/draft-divider"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14040"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => (
  <Box m={1}>
    <Divider variant="canvas" {...args} />
  </Box>
)
DefaultStory.storyName = "Default (Kaizen Demo)"

export const StickerSheetDefault = () => (
  <StoryWrapper>
    <StoryWrapper.Row rowTitle="Content">
      <Divider variant="content" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Canvas">
      <Divider variant="canvas" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Example">
      <Card>
        <Box p={0.75}>
          <Heading variant="heading-4" color="dark">
            Understands people's agenda and perspectives
          </Heading>
          <Box pt={0.25}>
            <Paragraph variant="small" color="dark-reduced-opacity">
              Interpersonal
            </Paragraph>
          </Box>
        </Box>
        <Divider variant="content" />
        <Box p={0.75}>
          <Heading variant="heading-4">Anticipates customers needs</Heading>
          <Box pt={0.25}>
            <Paragraph variant="small" color="dark-reduced-opacity">
              Self management
            </Paragraph>
          </Box>
        </Box>
        <Divider variant="content" />
        <Box p={0.75}>
          <Heading variant="heading-4">
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

StickerSheetDefault.storyName = "Sticker Sheet (Default)"

export const StickerSheetReversed = () => (
  <StoryWrapper isReversed>
    <StoryWrapper.Row rowTitle="Content">
      <Divider variant="content" isReversed />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Canvas">
      <Divider variant="canvas" isReversed />
    </StoryWrapper.Row>
  </StoryWrapper>
)

StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}
