import { TextAreaField } from "@kaizen/component-library/draft"
import { action } from "@storybook/addon-actions"
import React from "react"

const ExampleContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ width: "98%", margin: "1%" }}>{children}</div>
)

export default {
  title: "TextAreaField (React)",
}

export const DefaultKaizenSiteDemo = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your Reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
    />
  </ExampleContainer>
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const DefaultLarge = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your Reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
      rows={7}
    />
  </ExampleContainer>
)

DefaultLarge.story = {
  name: "Default, Large",
}

export const DefaultError = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your Reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
      status="error"
      validationMessage="Enter a reply"
    />
  </ExampleContainer>
)

DefaultError.story = {
  name: "Default, Error",
}
