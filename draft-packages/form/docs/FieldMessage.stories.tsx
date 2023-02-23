import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { FieldMessage } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/${SUB_COMPONENTS_FOLDER_NAME}/Field Message`,
  component: FieldMessage,
  parameters: {
    docs: {
      description: {
        component: 'import { FieldMessage } from "@kaizen/draft-form"',
      },
    },
  },
} as ComponentMeta<typeof FieldMessage>

export const DefaultKaizenSiteDemo: ComponentStory<
  typeof FieldMessage
> = args => <FieldMessage {...args}></FieldMessage>
DefaultKaizenSiteDemo.storyName = "FieldMessage"
DefaultKaizenSiteDemo.args = {
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum.",
  status: "default",
  position: "bottom",
  reversed: false,
}
DefaultKaizenSiteDemo.parameters = {
  chromatic: { disable: false },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
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
