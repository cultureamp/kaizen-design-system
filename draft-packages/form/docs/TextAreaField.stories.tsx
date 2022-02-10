import React from "react"
import { Heading } from "@kaizen/component-library"
import { TextAreaField } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import {
  StorybookGridWrapper,
  StorybookRowWrapper,
} from "../../../storybook/components/storybook-wrapper"

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
  autogrow: {
    defaultValue: { summary: "false" },
  },
  status: {
    defaultValue: "default",
  },
  variant: {
    defaultValue: "default",
  },
}

DefaultStory.storyName = "Default (Kaizen Demo)"

export const StickerSheetDefault = () => (
  <StorybookGridWrapper>
    <StorybookRowWrapper isTopHeader>
      <Heading variant="heading-5" tag="h3">
        Base
      </Heading>
      <Heading variant="heading-5" tag="h3">
        Disabled
      </Heading>
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Default">
      <TextAreaField id="text-area-default" labelText="Default" />
      <TextAreaField disabled id="text-area-default" labelText="Default" />
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Default">
      <TextAreaField
        id="text-area-default"
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
      />
      <TextAreaField
        id="text-area-default"
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
        disabled
      />
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Prominent">
      <TextAreaField
        id="text-area-prominent"
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
      />
      <TextAreaField
        id="text-area-prominent"
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
        disabled
      />
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Negative">
      <TextAreaField
        id="text-area-error"
        labelText="Error"
        description="Example/description text"
        defaultValue="Filled input text"
        status="error"
        validationMessage="Error message"
      />
      <TextAreaField
        id="text-area-error"
        labelText="Error"
        description="Example/description text"
        defaultValue="Filled input text"
        status="error"
        validationMessage="Error message"
        disabled
      />
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Cautionary" gridColumns={2}>
      <TextAreaField
        id="text-area-caution"
        labelText="Caution"
        description="Example/description text"
        defaultValue="Filled input text"
        status="caution"
        validationMessage="Error message"
      />
      <TextAreaField
        id="text-area-caution"
        labelText="Caution"
        description="Example/description text"
        defaultValue="Filled input text"
        status="caution"
        validationMessage="Error message"
        disabled
      />
    </StorybookRowWrapper>
  </StorybookGridWrapper>
)

StickerSheetDefault.storyName = "Sticker Sheet (Default)"

export const StickerSheetReversed = () => (
  <StorybookGridWrapper>
    <StorybookRowWrapper isTopHeader>
      <Heading color="white" variant="heading-5" tag="h3">
        Base
      </Heading>
      <Heading color="white" variant="heading-5" tag="h3">
        Disabled
      </Heading>
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Default" isReversed>
      <TextAreaField id="text-area-default" labelText="Default" reversed />
      <TextAreaField
        disabled
        id="text-area-default"
        labelText="Default"
        reversed
      />
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Default" isReversed>
      <TextAreaField
        id="text-area-default"
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
        reversed
      />
      <TextAreaField
        id="text-area-default"
        defaultValue="Filled input text"
        labelText="With description"
        description="Example/description text"
        disabled
        reversed
      />
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Prominent" isReversed>
      <TextAreaField
        id="text-area-prominent"
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
        reversed
      />
      <TextAreaField
        id="text-area-prominent"
        labelText="Prominent"
        description="Example/description text"
        defaultValue="Filled input text"
        variant="prominent"
        disabled
        reversed
      />
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Negative" isReversed>
      <TextAreaField
        id="text-area-error"
        labelText="Error"
        description="Example/description text"
        defaultValue="Filled input text"
        status="error"
        validationMessage="Error message"
        reversed
      />
      <TextAreaField
        id="text-area-error"
        labelText="Error"
        description="Example/description text"
        defaultValue="Filled input text"
        status="error"
        validationMessage="Error message"
        disabled
        reversed
      />
    </StorybookRowWrapper>
    <StorybookRowWrapper rowTitle="Cautionary" isReversed>
      <TextAreaField
        id="text-area-caution"
        labelText="Caution"
        description="Example/description text"
        defaultValue="Filled input text"
        status="caution"
        validationMessage="Error message"
        reversed
      />
      <TextAreaField
        id="text-area-caution"
        labelText="Caution"
        description="Example/description text"
        defaultValue="Filled input text"
        status="caution"
        validationMessage="Error message"
        disabled
        reversed
      />
    </StorybookRowWrapper>
  </StorybookGridWrapper>
)

StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"

StickerSheetReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}
