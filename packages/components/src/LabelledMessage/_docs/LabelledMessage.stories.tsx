import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { LabelledMessage } from "../LabelledMessage"

export default {
  title: "Components/Labelled Message",
  component: LabelledMessage,
  parameters: {
    docs: {
      description: {
        component: 'import { LabelledMessage } from "@kaizen/components"',
      },
    },
  },
}

export const DefaultStory: ComponentStory<typeof LabelledMessage> = args => (
  <LabelledMessage {...args} />
)
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  label: "Label",
  message: "Custom message here",
}

const StickerSheetTemplate: Story = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row rowTitle="LTR" dir="ltr">
        <LabelledMessage label="Label" message="Custom message here" />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="RTL" dir="rtl">
        <LabelledMessage label="Label" message="Custom message here" />
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
