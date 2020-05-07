import { TextAreaField } from "@kaizen/component-library/draft"
import { action } from "@storybook/addon-actions"
import React from "react"

interface RenderProps {
  controlledValue: string
  updateValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => any
}

interface Props {
  render: (props: RenderProps) => JSX.Element
}

class WithState extends React.Component<Props> {
  public state = {
    controlledValue: "Controlled value",
  }

  constructor(props: Props) {
    super(props)
    this.updateValue = this.updateValue.bind(this)
  }

  public updateValue(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      controlledValue: event.target.value,
    })
  }

  public render() {
    const { render } = this.props
    return (
      <div>
        {render({
          controlledValue: this.state.controlledValue,
          updateValue: this.updateValue,
        })}
      </div>
    )
  }
}

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

export const DefaultPrefilled = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your Reply"
      onChange={action("user input")}
      defaultValue="A prefilled value in uncontrolled mode"
    />
  </ExampleContainer>
)

DefaultPrefilled.story = {
  name: "Default, Prefilled & uncontrolled",
}

export const DefaultControlled = () => (
  <ExampleContainer>
    <WithState
      render={({ controlledValue, updateValue }) => (
        <TextAreaField
          id="reply"
          labelText="Your Reply"
          value={controlledValue}
          onChange={updateValue}
        />
      )}
    />
  </ExampleContainer>
)

DefaultControlled.story = {
  name: "Default, Controlled",
}

export const DefaultWithDesc = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your Reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
      description="Your reply will only be seen by you"
    />
  </ExampleContainer>
)

DefaultWithDesc.story = {
  name: "Default, With description",
}

export const DefaultInline = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your Reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
      inline={true}
    />
  </ExampleContainer>
)

DefaultInline.story = {
  name: "Default, Inline",
}
