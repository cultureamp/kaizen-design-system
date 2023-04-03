import React from "react"
import { StoryFn } from "@storybook/react"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { ProgressBar } from "../index"

export default {
  title: "Components/Progress Bar",
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: 'import { ProgressBar } from "@kaizen/progress-bar"',
      },
    },
  },
}

export const DefaultStory: StoryFn<typeof ProgressBar> = args => (
  <ProgressBar {...args} />
)
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  value: 25,
  max: 100,
  mood: "positive",
  isAnimating: true,
  label: "25%",
  isReversed: false,
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.Row rowTitle={"Positive"}>
      <ProgressBar
        value={25}
        max={100}
        mood="positive"
        isAnimating
        label="25%"
        subtext="Subtext"
        isReversed={isReversed}
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle={"Informative"}>
      <ProgressBar
        value={25}
        max={100}
        mood="informative"
        isAnimating
        label="25%"
        subtext="Subtext"
        isReversed={isReversed}
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle={"Negative"}>
      <ProgressBar
        value={25}
        max={100}
        mood="negative"
        isAnimating
        label="25%"
        subtext="Subtext"
        isReversed={isReversed}
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle={"Cautionary"}>
      <ProgressBar
        value={25}
        max={100}
        mood="cautionary"
        isAnimating
        label="25%"
        subtext="Subtext"
        isReversed={isReversed}
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
