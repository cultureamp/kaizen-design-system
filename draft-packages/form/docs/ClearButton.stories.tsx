import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ClearButton } from "@kaizen/draft-form"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

export default {
  tags: ["autodocs"],
  title: "Components/Utilities/Forms/Clear Button",
  component: ClearButton,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { ClearButton } from "@kaizen/draft-form"',
      },
    },
  },
} satisfies Meta<typeof ClearButton>

export const DefaultStory: StoryFn<typeof ClearButton> = args => (
  <ClearButton {...args} />
)
DefaultStory.storyName = "Clear Button"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header headings={["Default", "Hover", "Focus"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <ClearButton isReversed={isReversed} />
        <ClearButton
          isReversed={isReversed}
          classNameOverride="story__clear-button-hover"
        />
        <ClearButton
          isReversed={isReversed}
          classNameOverride="story__clear-button-focus"
        />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
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
