import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Label } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'import { Label } from "@kaizen/draft-form"',
      },
    },
  },
} as Meta<typeof Label>

export const DefaultKaizenSiteDemo: StoryFn<typeof Label> = args => (
  <Label {...args}></Label>
)
DefaultKaizenSiteDemo.storyName = "Label"
DefaultKaizenSiteDemo.args = { labelText: "Label Text" }
DefaultKaizenSiteDemo.parameters = {
  chromatic: { disable: false },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Default", "Disabled", "Prominent"]} />
    <StoryWrapper.Row rowTitle="Base">
      <Label labelText="Label Text" reversed={isReversed}></Label>
      <Label labelText="Label Text" reversed={isReversed} disabled></Label>
      <Label
        labelText="Label Text"
        reversed={isReversed}
        variant="prominent"
      ></Label>
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
