import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Card } from ".."

export default {
  title: `${CATEGORIES.stickersheets}/Card`,
  component: Card,
} as ComponentMeta<typeof Card>

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
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
