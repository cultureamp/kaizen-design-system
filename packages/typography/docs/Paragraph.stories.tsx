import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Avatar } from "@kaizen/draft-avatar"
import { Paragraph } from "../src/Paragraph/Paragraph"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.typography}/Paragraph`,
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: 'import { Paragraph } from "@kaizen/typography"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A1288"
    ),
  },
  decorators: [withDesign],
}

export const Body = args => <Paragraph {...args}>Paragraph</Paragraph>
Body.storyName = "Paragraph"
Body.args = { variant: "body" }
Body.parameters = {
  chromatic: { disable: true },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Default"]} />
      <StoryWrapper.Row rowTitle="Intro Lede">
        <Paragraph variant="intro-lede" color={isReversed ? "white" : "dark"}>
          Paragraph
        </Paragraph>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Body">
        <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
          Paragraph
        </Paragraph>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Body strong">
        <strong>
          <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
            Paragraph
          </Paragraph>
        </strong>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Small">
        <Paragraph variant="small" color={isReversed ? "white" : "dark"}>
          Paragraph
        </Paragraph>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Extra small">
        <Paragraph variant="extra-small" color={isReversed ? "white" : "dark"}>
          Paragraph
        </Paragraph>
      </StoryWrapper.Row>
      {!isReversed && (
        <>
          <StoryWrapper.Row rowTitle="Positive">
            <Paragraph variant="intro-lede" color="positive">
              Paragraph
            </Paragraph>
          </StoryWrapper.Row>
          <StoryWrapper.Row rowTitle="Negative">
            <Paragraph variant="intro-lede" color="negative">
              Paragraph
            </Paragraph>
          </StoryWrapper.Row>
        </>
      )}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
