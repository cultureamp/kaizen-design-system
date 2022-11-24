import React from "react"
import { withDesign } from "storybook-addon-designs"
import { TextAreaField } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Text Area Field`,
  component: TextAreaField,
  parameters: {
    docs: {
      description: {
        component: 'import { TextAreaField } from "@kaizen/draft-form"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14539%3A69482"
    ),
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
  decorators: [withDesign],
}

export const DefaultStory = args => <TextAreaField {...args} />
DefaultStory.args = {
  id: "reply",
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

export const StickerSheetDefault = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
    <StoryWrapper.Row rowTitle="Default">
      <TextAreaField id="text-area-default-base" labelText="Default" />
      <TextAreaField
        disabled
        id="text-area-default-disabled"
        labelText="Default"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Description">
      <TextAreaField
        id="text-area-default-description-base"
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
      />
      <TextAreaField
        id="text-area-default-description-disabled"
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
        disabled
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Prominent">
      <TextAreaField
        id="text-area-prominent-base"
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
      />
      <TextAreaField
        id="text-area-prominent-disabled"
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
        disabled
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Negative" gridColumns={2}>
      <TextAreaField
        id="text-area-error-base"
        labelText="Error"
        description="Example/description text"
        defaultValue="Filled input text"
        status="error"
        validationMessage="Error message"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Cautionary" gridColumns={2}>
      <TextAreaField
        id="text-area-caution-base"
        labelText="Caution"
        description="Example/description text"
        defaultValue="Filled input text"
        status="caution"
        validationMessage="Error message"
      />
    </StoryWrapper.Row>
  </StoryWrapper>
)
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = () => (
  <StoryWrapper isReversed>
    <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
    <StoryWrapper.Row rowTitle="Default">
      <TextAreaField id="text-area-default-base" labelText="Default" reversed />
      <TextAreaField
        disabled
        id="text-area-default-disabled-reversed"
        labelText="Default"
        reversed
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Description">
      <TextAreaField
        id="text-area-description-base-reversed"
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
        reversed
      />
      <TextAreaField
        id="text-area-description-disabled-reversed"
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
        disabled
        reversed
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Prominent">
      <TextAreaField
        id="text-area-prominent-base-reversed"
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
        reversed
      />
      <TextAreaField
        id="text-area-prominent-disabled-reversed"
        labelText="Prominent-base"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
        disabled
        reversed
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Negative" gridColumns={2}>
      <TextAreaField
        id="text-area-error-base-reversed"
        labelText="Error"
        description="Example/description text"
        defaultValue="Filled input text"
        status="error"
        validationMessage="Error message"
        reversed
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Cautionary" gridColumns={2}>
      <TextAreaField
        id="text-area-caution-base-reversed"
        labelText="Caution"
        description="Example/description text"
        defaultValue="Filled input text"
        status="caution"
        validationMessage="Error message"
        reversed
      />
    </StoryWrapper.Row>
  </StoryWrapper>
)
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
