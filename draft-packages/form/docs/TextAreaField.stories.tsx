import React from "react"
import { Heading } from "@kaizen/component-library"
import { TextAreaField } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

const StoryContainer: React.FunctionComponent = ({ children }) => (
  <div
    style={{ display: "inline-flex", width: "100%", flexDirection: "column" }}
  >
    {children}
  </div>
)

const StoryColumn: React.FunctionComponent = ({ children }) => (
  <div
    style={{
      display: "grid",
      rowGap: "25px",
    }}
  >
    {children}
  </div>
)

const StoryGrid: React.FunctionComponent = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(10px, 195px))",
      columnGap: "45px",
      rowGap: "12px",
    }}
  >
    {children}
  </div>
)

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
  <StoryGrid>
    <StoryColumn>
      <Heading variant="heading-5" tag="h3">
        Base
      </Heading>
      <StoryContainer>
        <TextAreaField id="text-area-default" labelText="Default" />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          id="text-area-default"
          defaultValue="Filled input text"
          labelText="With description"
          description="Example/description text"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          id="text-area-error"
          labelText="Error"
          description="Example/description text"
          defaultValue="Filled input text"
          status="error"
          validationMessage="Error message"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          id="text-area-caution"
          labelText="Caution"
          description="Example/description text"
          defaultValue="Filled input text"
          status="caution"
          validationMessage="Error message"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          id="text-area-prominent"
          labelText="Prominent"
          description="Example/description text"
          defaultValue="Filled input text"
          variant="prominent"
        />
      </StoryContainer>
    </StoryColumn>
    <StoryColumn>
      <Heading variant="heading-5" tag="h3">
        Disabled
      </Heading>
      <StoryContainer>
        <TextAreaField id="text-area-default" labelText="Default" disabled />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          id="text-area-default"
          defaultValue="Filled input text"
          labelText="With description"
          description="Example/description text"
          disabled
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          id="text-area-error"
          labelText="Error"
          description="Example/description text"
          defaultValue="Filled input text"
          status="error"
          validationMessage="Error message"
          disabled
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          id="text-area-caution"
          labelText="Caution"
          description="Example/description text"
          defaultValue="Filled input text"
          status="caution"
          validationMessage="Error message"
          disabled
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          id="text-area-prominent"
          labelText="Prominent"
          description="Example/description text"
          defaultValue="Filled input text"
          variant="prominent"
          disabled
        />
      </StoryContainer>
    </StoryColumn>
  </StoryGrid>
)

StickerSheetDefault.storyName = "Sticker Sheet (Default)"

export const StickerSheetReversed = () => (
  <StoryGrid>
    <StoryColumn>
      <Heading color="white" variant="heading-5" tag="h3">
        Base
      </Heading>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-default"
          labelText="Default"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-default"
          defaultValue="Filled input text"
          labelText="With description"
          description="Example/description text"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-error"
          labelText="Error"
          description="Example/description text"
          defaultValue="Filled input text"
          status="error"
          validationMessage="Error message"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-caution"
          labelText="Caution"
          description="Example/description text"
          defaultValue="Filled input text"
          status="caution"
          validationMessage="Error message"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-prominent"
          labelText="Prominent"
          description="Example/description text"
          defaultValue="Filled input text"
          variant="prominent"
        />
      </StoryContainer>
    </StoryColumn>
    <StoryColumn>
      <Heading color="white" variant="heading-5" tag="h3">
        Disabled
      </Heading>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-default"
          labelText="Default"
          disabled
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-default"
          defaultValue="Filled input text"
          labelText="With description"
          description="Example/description text"
          disabled
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-error"
          labelText="Error"
          description="Example/description text"
          defaultValue="Filled input text"
          status="error"
          validationMessage="Error message"
          disabled
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-caution"
          labelText="Caution"
          description="Example/description text"
          defaultValue="Filled input text"
          status="caution"
          validationMessage="Error message"
          disabled
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed={true}
          id="text-area-prominent"
          labelText="Prominent"
          description="Example/description text"
          defaultValue="Filled input text"
          variant="prominent"
          disabled
        />
      </StoryContainer>
    </StoryColumn>
  </StoryGrid>
)

StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"

StickerSheetReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}
