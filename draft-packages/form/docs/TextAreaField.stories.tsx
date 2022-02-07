import React from "react"
import { Heading } from "@kaizen/component-library"
import { TextAreaField } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import {
  StorybookGridWrapper as StorybookGridWrapperProposed,
  StorybookRowWrapper as StorybookRowWrapperProposed,
} from "../../../storybook/components/storybook-wrapper-proposed-update"
import {
  StorybookGridWrapper,
  StorybookRowWrapper,
} from "../../../storybook/components/storybook-wrapper"

const StoryContainer: React.FunctionComponent = ({ children }) => (
  <div
    style={{ display: "inline-flex", width: "100%", flexDirection: "column" }}
  >
    {children}
  </div>
)

const StoryRow: React.FunctionComponent = ({ children }) => (
  <div
    style={{
      display: "grid",
      columnGap: "45px",
      gridTemplateColumns: "repeat(2, minmax(10px, 195px)",
    }}
  >
    {children}
  </div>
)

const StoryGrid: React.FunctionComponent = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr",
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
  <StorybookGridWrapper>
    <StorybookRowWrapper>
      <Heading variant="heading-5" tag="h3">
        Base
      </Heading>
      <Heading variant="heading-5" tag="h3">
        Disabled
      </Heading>
    </StorybookRowWrapper>
    <StorybookRowWrapper hasTopHeader title="Default">
      <StoryContainer>
        <TextAreaField id="text-area-default" labelText="Default" />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField disabled id="text-area-default" labelText="Default" />
      </StoryContainer>
    </StorybookRowWrapper>
    <StorybookRowWrapper title="Default">
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
          id="text-area-default"
          defaultValue="Filled input text"
          labelText="With description"
          description="Example/description text"
          disabled
        />
      </StoryContainer>
    </StorybookRowWrapper>
    <StorybookRowWrapper title="Prominent">
      <StoryContainer>
        <TextAreaField
          id="text-area-prominent"
          labelText="Prominent"
          description="Example/description text"
          defaultValue="Filled input text"
          variant="prominent"
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
    </StorybookRowWrapper>
    <StorybookRowWrapper title="Negative">
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
    </StorybookRowWrapper>
    <StorybookRowWrapper title="Cautionary">
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
    </StorybookRowWrapper>
  </StorybookGridWrapper>
)

StickerSheetDefault.storyName = "Sticker Sheet (Default - original)"

export const StickerSheetDefaultWithUpdate = () => (
  <StorybookGridWrapperProposed>
    <StorybookRowWrapperProposed isTopHeader>
      <Heading variant="heading-5" tag="h3">
        Base
      </Heading>
      <Heading variant="heading-5" tag="h3">
        Disabled
      </Heading>
    </StorybookRowWrapperProposed>
    <StorybookRowWrapperProposed rowTitle="Default">
      <StoryContainer>
        <TextAreaField id="text-area-default" labelText="Default" />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField disabled id="text-area-default" labelText="Default" />
      </StoryContainer>
    </StorybookRowWrapperProposed>
    <StorybookRowWrapperProposed rowTitle="Default">
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
          id="text-area-default"
          defaultValue="Filled input text"
          labelText="With description"
          description="Example/description text"
          disabled
        />
      </StoryContainer>
    </StorybookRowWrapperProposed>
    <StorybookRowWrapperProposed rowTitle="Prominent">
      <StoryContainer>
        <TextAreaField
          id="text-area-prominent"
          labelText="Prominent"
          description="Example/description text"
          defaultValue="Filled input text"
          variant="prominent"
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
    </StorybookRowWrapperProposed>
    <StorybookRowWrapperProposed rowTitle="Negative" gridColumns={2}>
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
    </StorybookRowWrapperProposed>
    <StorybookRowWrapperProposed rowTitle="Cautionary" gridColumns={2}>
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
    </StorybookRowWrapperProposed>
  </StorybookGridWrapperProposed>
)

StickerSheetDefaultWithUpdate.storyName = "Sticker Sheet (Default - proposed)"

export const StickerSheetReversed = () => (
  <StoryGrid>
    <StoryRow>
      <Heading color="white" variant="heading-5" tag="h3">
        Base
      </Heading>
      <Heading color="white" variant="heading-5" tag="h3">
        Disabled
      </Heading>
    </StoryRow>
    <StoryRow>
      <StoryContainer>
        <TextAreaField reversed id="text-area-default" labelText="Default" />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed
          disabled
          id="text-area-default"
          labelText="Default"
        />
      </StoryContainer>
    </StoryRow>
    <StoryRow>
      <StoryContainer>
        <TextAreaField
          reversed
          id="text-area-default"
          defaultValue="Filled input text"
          labelText="With description"
          description="Example/description text"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed
          id="text-area-default"
          defaultValue="Filled input text"
          labelText="With description"
          description="Example/description text"
          disabled
        />
      </StoryContainer>
    </StoryRow>
    <StoryRow>
      <StoryContainer>
        <TextAreaField
          reversed
          id="text-area-prominent"
          labelText="Prominent"
          description="Example/description text"
          defaultValue="Filled input text"
          variant="prominent"
        />
      </StoryContainer>
      <StoryContainer>
        <TextAreaField
          reversed
          id="text-area-prominent"
          labelText="Prominent"
          description="Example/description text"
          defaultValue="Filled input text"
          variant="prominent"
          disabled
        />
      </StoryContainer>
    </StoryRow>
    <StoryRow>
      <StoryContainer>
        <TextAreaField
          reversed
          id="text-area-error"
          labelText="Error"
          description="Example/description text"
          defaultValue="Filled input text"
          status="error"
          validationMessage="Error message"
        />
      </StoryContainer>
    </StoryRow>
    <StoryRow>
      <StoryContainer>
        <TextAreaField
          reversed
          id="text-area-caution"
          labelText="Caution"
          description="Example/description text"
          defaultValue="Filled input text"
          status="caution"
          validationMessage="Error message"
        />
      </StoryContainer>
    </StoryRow>
  </StoryGrid>
)

StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"

StickerSheetReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}
