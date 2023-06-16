import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { FieldMessage } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  tags: ["autodocs"],
  title: "Components/Field Status Message",
  component: FieldMessage,
  parameters: {
    docs: {
      description: {
        component: 'import { FieldMessage } from "@kaizen/draft-form"',
      },
    },
  },
} satisfies Meta<typeof FieldMessage>

export const DefaultKaizenSiteDemo: StoryFn<typeof FieldMessage> = args => (
  <FieldMessage {...args}></FieldMessage>
)
DefaultKaizenSiteDemo.storyName = "FieldMessage"
DefaultKaizenSiteDemo.args = {
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum.",
  status: "default",
  position: "bottom",
  reversed: false,
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader
      headings={["Default", "Success", "Error", "Caution"]}
    />
    <StoryWrapper.Row rowTitle="Base">
      <FieldMessage
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum."
        status="default"
        reversed={isReversed}
      ></FieldMessage>
      <FieldMessage
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum."
        status="success"
        reversed={isReversed}
      ></FieldMessage>
      <FieldMessage
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum."
        status="error"
        reversed={isReversed}
      ></FieldMessage>
      <FieldMessage
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum."
        status="caution"
        reversed={isReversed}
      ></FieldMessage>
    </StoryWrapper.Row>
  </StoryWrapper>
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
