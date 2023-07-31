import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Label } from "@kaizen/draft-form"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

export default {
  tags: ["autodocs"],
  title: "Components/Label",
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'import { Label } from "@kaizen/draft-form"',
      },
    },
  },
} satisfies Meta<typeof Label>

export const DefaultKaizenSiteDemo: StoryFn<typeof Label> = args => (
  <Label {...args} />
)
DefaultKaizenSiteDemo.storyName = "Label"
DefaultKaizenSiteDemo.args = { labelText: "Label Text" }

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <div>
    <StickerSheet isReversed={isReversed} heading="Label">
      <StickerSheet.Header headings={["Default", "Disabled", "Prominent"]} />
      <StickerSheet.Row>
        <Label labelText="Label Text" reversed={isReversed} />
        <Label labelText="Label Text" reversed={isReversed} disabled />
        <Label
          labelText="Label Text"
          reversed={isReversed}
          variant="prominent"
        />
      </StickerSheet.Row>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Label type">
      <StickerSheet.Header headings={["Text", "Checkbox", "Toggle", "Radio"]} />
      <StickerSheet.Row>
        <Label labelText="Label Text" reversed={isReversed} labelType="text" />
        <Label
          labelText="Label Text"
          reversed={isReversed}
          labelType="checkbox"
        />
        <Label
          labelText="Label Text"
          reversed={isReversed}
          labelType="toggle"
        />
        <Label labelText="Label Text" reversed={isReversed} labelType="radio" />
      </StickerSheet.Row>
    </StickerSheet>
  </div>
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
