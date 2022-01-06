import React from "react"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { TextField } from "@kaizen/draft-form"

import dateIcon from "@kaizen/component-library/icons/date-start.icon.svg"
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

const ReversedBg = {
  backgrounds: {
    default: "Purple 700",
  },
}

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
  id: "email",
  inputType: "email",
  defaultInputValue: "",
  labelText: (
    <span>
      {" "}
      This is a label with a{" "}
      <a href="http://google.com" target="_blank">
        {" "}
        link{" "}
      </a>
    </span>
  ),
  placeholder: "Please enter your email",
  description: "Valid email addresses must have an @ and a suffix",
}

DefaultStory.storyName = "Default (Kaizen Demo)"

export const DesignSheetDefault = () => (
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
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Default Text Field"
            placeholder="Input text"
            description="Example/description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Positive Text Field"
            placeholder="Input text"
            status="success"
            description="Example/description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Negative Text Field"
            placeholder="Input text"
            status="error"
            description="Example/description text"
            validationMessage="Error message"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Cautionary Text Field"
            placeholder="Input text"
            status="caution"
            description="Example/description text"
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
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Default Text Field"
            placeholder="Input text"
            description="Example/description text"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Positive Text Field"
            placeholder="Input text"
            status="success"
            description="Example/description text"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Negative Text Field"
            placeholder="Input text"
            status="error"
            description="Example/description text"
            validationMessage="Error message"
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Cautionary Text Field"
            placeholder="Input text"
            status="caution"
            description="Example/description text"
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
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Default Text Field"
            placeholder="Input text"
            description="Example/description text"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Positive Text Field"
            placeholder="Input text"
            status="success"
            description="Example/description text"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Negative Text Field"
            placeholder="Input text"
            status="error"
            description="Example/description text"
            validationMessage="Error message"
            icon={dateIcon}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Cautionary Text Field"
            placeholder="Input text"
            status="caution"
            description="Example/description text"
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
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Default Text Field"
            placeholder="Input text"
            description="Example/description text"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Positive Text Field"
            placeholder="Input text"
            status="success"
            description="Example/description text"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Negative Text Field"
            placeholder="Input text"
            status="error"
            description="Example/description text"
            validationMessage="Error message"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            id="text"
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Cautionary Text Field"
            placeholder="Input text"
            status="caution"
            description="Example/description text"
            validationMessage="Error message"
            icon={dateIcon}
            disabled={true}
          />
        </StoryContainer>
      </StoryColumn>
    </StoryGrid>
  </>
)
