import React from "react"
import { Divider } from "@kaizen/draft-divider"
import { Story } from "@storybook/react"
import { Card } from "@kaizen/draft-card"
import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
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
            Understands people's agenda and perspectives
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
