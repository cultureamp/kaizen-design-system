import { CheckboxField } from "@kaizen/component-library/draft"
import * as React from "react"

type RenderProps = {
  checkedStatus: string
  onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Props = {
  render: (props: RenderProps) => JSX.Element
}

class CheckboxFieldExample extends React.Component<Props> {
  state = {
    checkedStatus: "mixed",
  }

  constructor(props: Props) {
    super(props)

    this.onCheckHandler = this.onCheckHandler.bind(this)
  }

  onCheckHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      checkedStatus: this.state.checkedStatus === "on" ? "off" : "on",
    })
  }

  render() {
    const { render } = this.props

    return (
      <div
        style={{
          paddingTop: 24,
        }}
      >
        {render({
          checkedStatus: this.state.checkedStatus,
          onCheckHandler: this.onCheckHandler,
        })}
      </div>
    )
  }
}

export default {
  title: "CheckboxField (React)",
}

export const InteractiveKaizenSiteDemo = () => (
  <CheckboxFieldExample
    render={({ checkedStatus, onCheckHandler }) => (
      <CheckboxField
        onCheck={onCheckHandler}
        id="checkbox-1"
        checkedStatus={checkedStatus as any}
        labelText={
          <div>
            This is a label with a{" "}
            <a href="http://google.com" target="_blank">
              link
            </a>
          </div>
        }
      />
    )}
  />
)

InteractiveKaizenSiteDemo.story = {
  name: "Interactive (Kaizen Site Demo)",
}

export const On = () => (
  <CheckboxField
    id="checkbox-2"
    checkedStatus="on"
    disabled={false}
    labelText="Label"
  />
)

export const Mixed = () => (
  <CheckboxField
    id="checkbox-3"
    checkedStatus="mixed"
    disabled={false}
    labelText="Label"
  />
)

export const Off = () => (
  <CheckboxField
    id="checkbox-4"
    checkedStatus="off"
    disabled={false}
    labelText="Label"
  />
)

export const DisabledOn = () => (
  <CheckboxField
    id="checkbox-5"
    checkedStatus="on"
    disabled={true}
    labelText="Label"
  />
)

DisabledOn.story = {
  name: "Disabled + on",
}

export const DisabledMixed = () => (
  <CheckboxField
    id="checkbox-6"
    checkedStatus="mixed"
    disabled={true}
    labelText="Label"
  />
)

DisabledMixed.story = {
  name: "Disabled + mixed",
}

export const DisabledOff = () => (
  <CheckboxField
    id="checkbox-7"
    checkedStatus="off"
    disabled={true}
    labelText="Label"
  />
)

DisabledOff.story = {
  name: "Disabled + off",
}

export const WithBottomMargin = () => (
  <div>
    <CheckboxField
      id="checkbox-1"
      checkedStatus="off"
      disabled={false}
      labelText="Label"
    />
    <CheckboxField
      id="checkbox-2"
      checkedStatus="off"
      disabled={false}
      labelText="Label"
    />
  </div>
)

WithBottomMargin.story = {
  name: "with bottom margin",
}

export const WithoutBottomMargin = () => (
  <div>
    <CheckboxField
      noBottomMargin
      id="checkbox-1"
      checkedStatus="off"
      disabled={false}
      labelText="Label"
    />
    <CheckboxField
      noBottomMargin
      id="checkbox-2"
      checkedStatus="off"
      disabled={false}
      labelText="Label"
    />
  </div>
)

WithoutBottomMargin.story = {
  name: "without bottom margin",
}
