import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { ClearButton } from "@kaizen/draft-form"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { SUB_COMPONENTS_FOLDER_NAME } from "../../../storybook/constants"

export default {
  title: `Components/Form/${SUB_COMPONENTS_FOLDER_NAME}/Clear Button`,
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
} as ComponentMeta<typeof ClearButton>

export const DefaultStory: ComponentStory<typeof ClearButton> = args => (
  <ClearButton {...args} />
)
DefaultStory.storyName = "Clear Button"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header headings={["Default", "Hover", "Focus"]} />
    <StickerSheet.Row>
      <ClearButton isReversed={isReversed} />
      <ClearButton
        isReversed={isReversed}
        classNameOverride="story__clear-button-hover"
      />
      <ClearButton isReversed={isReversed} classNameOverride="focus-visible" />
    </StickerSheet.Row>
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
