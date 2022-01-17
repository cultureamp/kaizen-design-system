import { TextAreaField } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import React from "react"
import { Heading } from "@kaizen/component-library"
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
      <StoryContainer></StoryContainer>
    </StoryColumn>
  </StoryGrid>
)

StickerSheetDefault.storyName = "Sticker Sheet (Default)"

export const StickerSheetReversed = () => (
  <StoryGrid>
    <StoryColumn>
      <Heading variant="heading-5" color="white" tag="h3">
        Base
      </Heading>
      <StoryContainer></StoryContainer>
    </StoryColumn>
  </StoryGrid>
)

StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
