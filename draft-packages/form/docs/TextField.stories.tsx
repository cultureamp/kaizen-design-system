import React from "react"
import { withDesign } from "storybook-addon-designs"
import dateIcon from "@kaizen/component-library/icons/date-start.icon.svg"
import { TextField } from "@kaizen/draft-form"
import { Heading } from "@kaizen/typography"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

const StoryContainer = ({ children }) => (
  <div
    style={{ display: "inline-flex", width: "100%", flexDirection: "column" }}
  >
    {children}
  </div>
)

const StoryColumn = ({ children }) => (
  <div
    style={{
      display: "grid",
      rowGap: "25px",
    }}
  >
    {children}
  </div>
)

const StoryGrid = ({ children }) => (
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
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Text Field`,
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'import { TextField } from "@kaizen/draft-form"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14363%3A67837"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => (
  <StoryContainer>
    <TextField {...args} />
  </StoryContainer>
)
DefaultStory.args = {
  id: "kaizen-demo-text-field",
  labelText: "Label Text",
  inputType: "text",
  defaultInputValue: "test",
  placeholder: "",
  description: "Example / description text",
  validationMessage: "",
  inputValue: "",
  status: "default",
  inline: false,
  reversed: false,
}
DefaultStory.argTypes = {
  inputRef: {
    control: {
      disable: true,
    },
  },
  icon: {
    control: {
      disabled: true,
    },
  },
  placeholder: {
    description:
      "It is advised that this is only used to give an example response",
  },
  validationMessage: {
    description:
      "A message that describes `status` for error or caution states. The Storybook example uses a String but the component can also take HTML or React Nodes",
  },
}
DefaultStory.storyName = "Default (Kaizen Demo)"

export const StickerSheetDefault = () => (
  <>
    <Heading variant="heading-3" tag="h2">
      Default
    </Heading>
    <StoryGrid>
      <StoryColumn>
        <Heading variant="heading-5" tag="h3">
          Base
        </Heading>
        <StoryContainer>
          <TextField
            id="text-default"
            inputType="email"
            defaultInputValue=""
            labelText="Default"
            placeholder=""
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue=""
            labelText="Description"
            placeholder=""
            description="Description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue=""
            labelText="Placeholder"
            placeholder="jane.doe@email.com"
            description="Description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Positive"
            placeholder="jane.doe@email.com"
            status="success"
            description="Description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Negative"
            placeholder="jane.doe@email.com"
            status="error"
            description="Description text"
            validationMessage={<span>Error message</span>}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Cautionary"
            placeholder="jane.doe@email.com"
            status="caution"
            description="Description text"
            validationMessage="Error message"
          />
        </StoryContainer>
      </StoryColumn>
      <StoryColumn>
        <Heading variant="heading-5" tag="h3">
          Disabled
        </Heading>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue=""
            labelText="Default"
            placeholder=""
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue=""
            labelText="Description"
            placeholder=""
            description="Description text"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Placeholder"
            placeholder="jane.doe@email.com"
            description="Description text"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Positive"
            placeholder="jane.doe@email.com"
            status="success"
            description="Description text"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Negative"
            placeholder="jane.doe@email.com"
            status="error"
            description="Description text"
            validationMessage="Error message"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Cautionary"
            placeholder="jane.doe@email.com"
            status="caution"
            description="Description text"
            validationMessage="Error message"
            disabled={true}
          />
        </StoryContainer>
      </StoryColumn>
    </StoryGrid>
    <Heading variant="heading-3" tag="h2">
      Icon
    </Heading>
    <StoryGrid>
      <StoryColumn>
        <Heading variant="heading-5" tag="h3">
          Base
        </Heading>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Default"
            placeholder="jane.doe@email.com"
            description="Description text"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Positive"
            placeholder="jane.doe@email.com"
            status="success"
            description="Description text"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Negative"
            placeholder="jane.doe@email.com"
            status="error"
            description="Description text"
            validationMessage="Error message"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Cautionary"
            placeholder="jane.doe@email.com"
            status="caution"
            description="Description text"
            validationMessage="Error message"
            icon={dateIcon}
          />
        </StoryContainer>
      </StoryColumn>
      <StoryColumn>
        <Heading variant="heading-5" tag="h3">
          Disabled
        </Heading>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Default"
            placeholder="jane.doe@email.com"
            description="Description text"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Positive"
            placeholder="jane.doe@email.com"
            status="success"
            description="Description text"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Negative"
            placeholder="jane.doe@email.com"
            status="error"
            description="Description text"
            validationMessage="Error message"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Cautionary"
            placeholder="jane.doe@email.com"
            status="caution"
            description="Description text"
            validationMessage="Error message"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
      </StoryColumn>
    </StoryGrid>
  </>
)
StickerSheetDefault.storyName = "Sticker Sheet (Default)"

export const StickerSheetReversed = () => (
  <>
    <Heading color="white" variant="heading-3" tag="h2">
      Default
    </Heading>
    <StoryGrid>
      <StoryColumn>
        <Heading color="white" variant="heading-5" tag="h3">
          Base
        </Heading>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue=""
            labelText="Default"
            placeholder=""
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue=""
            labelText="Description"
            placeholder=""
            description="Description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue=""
            labelText="Placeholder"
            placeholder="jane.doe@email.com"
            description="Description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Positive"
            placeholder="jane.doe@email.com"
            status="success"
            description="Description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Negative"
            placeholder="jane.doe@email.com"
            status="error"
            description="Description text"
            validationMessage="Error message"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Cautionary"
            placeholder="jane.doe@email.com"
            status="caution"
            description="Description text"
            validationMessage="Error message"
          />
        </StoryContainer>
      </StoryColumn>
      <StoryColumn>
        <Heading color="white" variant="heading-5" tag="h3">
          Disabled
        </Heading>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            labelText="Default"
            placeholder=""
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            labelText="Description"
            placeholder=""
            description="Description text"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Placeholder"
            placeholder="jane.doe@email.com"
            description="Description text"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Positive"
            placeholder="jane.doe@email.com"
            status="success"
            description="Description text"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Negative"
            placeholder="jane.doe@email.com"
            status="error"
            description="Description text"
            validationMessage="Error message"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Cautionary"
            placeholder="jane.doe@email.com"
            status="caution"
            description="Description text"
            validationMessage="Error message"
            disabled={true}
          />
        </StoryContainer>
      </StoryColumn>
    </StoryGrid>
    <Heading color="white" variant="heading-3" tag="h2">
      Icon
    </Heading>
    <StoryGrid>
      <StoryColumn>
        <Heading color="white" variant="heading-5" tag="h3">
          Base
        </Heading>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Default"
            placeholder="jane.doe@email.com"
            description="Description text"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Positive"
            placeholder="jane.doe@email.com"
            status="success"
            description="Description text"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Negative"
            placeholder="jane.doe@email.com"
            status="error"
            description="Description text"
            validationMessage="Error message"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Cautionary"
            placeholder="jane.doe@email.com"
            status="caution"
            description="Description text"
            validationMessage="Error message"
            icon={dateIcon}
          />
        </StoryContainer>
      </StoryColumn>
      <StoryColumn>
        <Heading color="white" variant="heading-5" tag="h3">
          Disabled
        </Heading>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Default"
            placeholder="jane.doe@email.com"
            description="Description text"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Positive"
            placeholder="jane.doe@email.com"
            status="success"
            description="Description text"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Negative"
            placeholder="jane.doe@email.com"
            status="error"
            description="Description text"
            validationMessage="Error message"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
            id="text"
            inputType="email"
            defaultInputValue="Input Text"
            labelText="Cautionary"
            placeholder="jane.doe@email.com"
            status="caution"
            description="Description text"
            validationMessage="Error message"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
      </StoryColumn>
    </StoryGrid>
  </>
)
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
