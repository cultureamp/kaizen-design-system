import React from "react"
import { Story, ComponentStory } from "@storybook/react"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers/figmaEmbed"
import { ProgressBar } from "../index"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/Progress Bar`,
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: 'import { ProgressBar } from "@kaizen/progress-bar"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A20890"
    ),
  },
}

export const DefaultStory: ComponentStory<typeof ProgressBar> = args => (
  <ProgressBar {...args} />
)
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  value: 25,
  max: 100,
  mood: "positive",
  isAnimating: true,
  label: "25%",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.Row rowTitle={"Positive"}>
      <ProgressBar
        value={25}
        max={100}
        mood="positive"
        isAnimating={true}
        label="25%"
        subtext="Subtext"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle={"Informative"}>
      <ProgressBar
        value={25}
        max={100}
        mood="informative"
        isAnimating={true}
        label="25%"
        subtext="Subtext"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle={"Negative"}>
      <ProgressBar
        value={25}
        max={100}
        mood="negative"
        isAnimating={true}
        label="25%"
        subtext="Subtext"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle={"Cautionary"}>
      <ProgressBar
        value={25}
        max={100}
        mood="cautionary"
        isAnimating={true}
        label="25%"
        subtext="Subtext"
      />
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
