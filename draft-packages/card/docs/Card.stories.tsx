import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { Card } from ".."

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'import { Card } from "@kaizen/draft-card"<br><br>The `Card` component is a flexible container used to wrap primary content. It has several variants (moods) to assist in displaying information to a user. In the UI toolkit you will find the `Card` component is referred to as `Container`.',
      },
    },
  },
} as Meta<typeof Card>

export const DefaultStory: StoryFn<typeof Card> = args => (
  <Card {...args}>This is a default container</Card>
)
DefaultStory.storyName = "Default (Kaizen Site Demo)"
DefaultStory.args = {
  tag: "div",
  variant: "default",
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader
      headings={[
        "Base",
        "Informative",
        "Positive",
        "Cautionary",
        "Destructive",
        "Assertive",
        "Highlight",
      ]}
    />
    <StoryWrapper.Row rowTitle="Default">
      <Card variant="default" tag="div" />
      <Card variant="informative" tag="div" />
      <Card variant="positive" tag="div" />
      <Card variant="cautionary" tag="div" />
      <Card variant="destructive" tag="div" />
      <Card variant="assertive" tag="div" />
      <Card variant="highlight" tag="div" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Description">
      <Card variant="default" tag="div" isElevated />
      <Card variant="informative" tag="div" isElevated />
      <Card variant="positive" tag="div" isElevated />
      <Card variant="cautionary" tag="div" isElevated />
      <Card variant="destructive" tag="div" isElevated />
      <Card variant="assertive" tag="div" isElevated />
      <Card variant="highlight" tag="div" isElevated />
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
