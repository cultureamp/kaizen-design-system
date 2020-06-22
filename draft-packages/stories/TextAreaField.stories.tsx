import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { TextAreaField } from "@kaizen/draft-form"
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

const ReversedBg = {
  parameters: {
    backgrounds: [{ value: colorTokens.kz.color.wisteria[700], default: true }],
  },
}

export default {
  title: "TextAreaField (React)",
  component: TextAreaField,
  parameters: {
    info: {
      text: `
      import { TextAreaField } from "@kaizen/draft-form"
      `,
    },
  },
}

export const DefaultKaizenSiteDemo = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
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
      labelText="Your reply"
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
      labelText="Your reply"
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
      labelText="Your reply"
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
          labelText="Your reply"
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
      labelText="Your reply"
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
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
      inline={true}
    />
  </ExampleContainer>
)

DefaultInline.story = {
  name: "Default, Inline",
}

export const DefaultErrorAndDesc = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
      status="error"
      validationMessage="Enter a reply"
      description="Your reply will only be seen by you"
    />
  </ExampleContainer>
)

DefaultErrorAndDesc.story = {
  name: "Default, Error & Description",
}

export const Reversed = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
      reversed
    />
  </ExampleContainer>
)

Reversed.story = {
  name: "Reversed",
  ...ReversedBg,
}

export const ReversedErrorAndDesc = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={action("user input")}
      status="error"
      validationMessage="Enter a reply"
      description="Your reply will only be seen by you"
      reversed
    />
  </ExampleContainer>
)

ReversedErrorAndDesc.story = {
  name: "Reversed, Error & Description",
  ...ReversedBg,
}
