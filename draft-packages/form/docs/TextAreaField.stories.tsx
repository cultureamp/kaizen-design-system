import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { TextAreaField } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  tags: ["autodocs"],
  title: "Components/Text Input/Text Area Field",
  component: TextAreaField,
  parameters: {
    docs: {
      description: {
        component: 'import { TextAreaField } from "@kaizen/draft-form"',
      },
    },
  },
  args: {
    status: "default",
    variant: "default",
  },
  argTypes: {
    autogrow: {
      table: { defaultValue: { summary: false } },
    },
  },
} satisfies Meta<typeof TextAreaField>

export const DefaultStory: StoryFn<typeof TextAreaField> = args => (
  <TextAreaField {...args} />
)
DefaultStory.args = {
  labelText: "Your reply",
  autogrow: false,
  inline: false,
  reversed: false,
  validationMessage: "",
  description: "",
}
DefaultStory.argTypes = {
  textAreaRef: {
    control: {
      disable: true,
    },
  },
}
DefaultStory.storyName = "Default (Kaizen Demo)"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
    <StoryWrapper.Row rowTitle="Default">
      <TextAreaField reversed={isReversed} labelText="Default" />
      <TextAreaField reversed={isReversed} disabled labelText="Default" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Description">
      <TextAreaField
        reversed={isReversed}
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
      />
      <TextAreaField
        reversed={isReversed}
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
        disabled
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Prominent">
      <TextAreaField
        reversed={isReversed}
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
      />
      <TextAreaField
        reversed={isReversed}
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
        disabled
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Negative" gridColumns={2}>
      <TextAreaField
        reversed={isReversed}
        labelText="Error"
        description="Example/description text"
        defaultValue="Filled input text"
        status="error"
        validationMessage="Error message"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Cautionary" gridColumns={2}>
      <TextAreaField
        reversed={isReversed}
        labelText="Caution"
        description="Example/description text"
        defaultValue="Filled input text"
        status="caution"
        validationMessage="Error message"
      />
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
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
