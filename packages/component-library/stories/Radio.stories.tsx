import { Radio } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const ExampleContent = () => (
  <div style={{ padding: "1em 2em", maxWidth: "400px" }} />
)
type RenderProps = {
  selectedStatus: boolean
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Props = {
  render: (props: RenderProps) => JSX.Element
}

class RadioFieldExample extends React.Component<Props> {
  state = {
    selectedStatus: false,
  }

  constructor(props: Props) {
    super(props)

    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      selectedStatus: true,
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
          selectedStatus: this.state.selectedStatus,
          onChangeHandler: this.onChangeHandler,
        })}
      </div>
    )
  }
}
storiesOf("Radio (React)", module)
  .add("Interactive", () => (
    <RadioFieldExample
      render={({ selectedStatus, onChangeHandler }) => (
        <Radio
          name="radio"
          onChange={onChangeHandler}
          id="radio-1"
          selectedStatus={selectedStatus as any}
          value="radio-1"
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
  ))

  .add("Unselected disabled", () => (
    <Radio
      name="radio"
      id="radio-1"
      labelText="Label"
      selectedStatus={false}
      disabled={true}
      value="radio-1"
    >
      <ExampleContent />
    </Radio>
  ))

  .add("Unselected default", () => (
    <Radio
      name="radio"
      id="radio-1"
      labelText="Label"
      selectedStatus={false}
      disabled={false}
      value="radio-1"
    >
      <ExampleContent />
    </Radio>
  ))

  .add("Selected default", () => (
    <Radio
      name="radio"
      id="radio-1"
      labelText="Label"
      selectedStatus={true}
      disabled={false}
      value="radio-1"
    >
      <ExampleContent />
    </Radio>
  ))

  .add("Selected disabled", () => (
    <Radio
      name="radio"
      id="radio-1"
      labelText="Label"
      selectedStatus={true}
      disabled={true}
      value="radio-1"
    >
      <ExampleContent />
    </Radio>
  ))

  .add("RTL", () => (
    <div dir="rtl">
      <Radio
        name="radio"
        id="radio-1"
        labelText="Label"
        selectedStatus={true}
        disabled={true}
        value="radio-1"
      >
        <ExampleContent />
      </Radio>
    </div>
  ))
