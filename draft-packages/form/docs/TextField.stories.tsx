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
  inputType: "text",
  defaultInputValue: "",
  labelText: "Label Text",
  placeholder: "Placeholder Text",
  description: "Example / description text",
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

export const DesignSheetDefaultReversed = () => (
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
            inputType="text"
            defaultInputValue="Input Text"
            labelText="Default Text Field"
            placeholder="Input text"
            description="Example/description text"
          />
        </StoryContainer>
        <StoryContainer>
          <TextField
            reversed={true}
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
            reversed={true}
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
            reversed={true}
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
        <Heading color="white" variant="heading-5" tag="h3">
          Disabled
        </Heading>
        <StoryContainer>
          <TextField
            reversed={true}
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
            reversed={true}
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
            reversed={true}
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
            reversed={true}
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
            reversed={true}
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
            reversed={true}
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
            reversed={true}
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
        <Heading color="white" variant="heading-5" tag="h3">
          Disabled
        </Heading>
        <StoryContainer>
          <TextField
            reversed={true}
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
            reversed={true}
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
            reversed={true}
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
            reversed={true}
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
DesignSheetDefaultReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}
