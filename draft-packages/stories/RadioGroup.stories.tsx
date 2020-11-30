import { Label, Radio, RadioGroup } from "@kaizen/draft-form"
import * as React from "react"
import styles from "./RadioGroup.stories.scss"

type RenderProps = {
  selectedOption: string
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Props = {
  render: (props: RenderProps) => JSX.Element
}

class RadioGroupExample extends React.Component<Props> {
  state = {
    selectedOption: "",
  }

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      selectedOption: event.target.value,
    })
  }

  render() {
    const { render } = this.props
    return (
      <div>
        {render({
          selectedOption: this.state.selectedOption,
          onChangeHandler: this.onChangeHandler,
        })}
      </div>
    )
  }
}

export default {
  title: "RadioGroup (React)",
  component: RadioGroup,
  parameters: {
    info: {
      text: `
      import { RadioGroup } from "@kaizen/draft-form"
      `,
    },
  },
}

export const DefaultKaizenSiteDemo = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }) => (
      <RadioGroup labelText="Radio group label">
        <Radio
          labelText="Label"
          name="radio"
          id="radio-1"
          selectedStatus={selectedOption === "radio-1"}
          onChange={onChangeHandler}
          value="radio-1"
        />
        <Radio
          labelText="Label"
          name="radio"
          id="radio-2"
          selectedStatus={selectedOption === "radio-2"}
          onChange={onChangeHandler}
          value="radio-2"
        />
        <Radio
          labelText="Label"
          name="radio"
          id="radio-3"
          selectedStatus={selectedOption === "radio-3"}
          onChange={onChangeHandler}
          value="radio-3"
        />
      </RadioGroup>
    )}
  />
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const WithDisabledRadios = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }) => (
      <RadioGroup labelText="Radio group label">
        <Radio
          labelText="Label"
          name="radio"
          id="radio-1"
          selectedStatus={selectedOption === "radio-1"}
          disabled
          onChange={onChangeHandler}
          value="radio-1"
        />
        <Radio
          labelText="Label"
          name="radio"
          id="radio-2"
          selectedStatus={selectedOption === "radio-2"}
          onChange={onChangeHandler}
          value="radio-2"
        />
        <Radio
          labelText="Label"
          name="radio"
          id="radio-3"
          selectedStatus={selectedOption === "radio-3"}
          onChange={onChangeHandler}
          value="radio-3"
        />
      </RadioGroup>
    )}
  />
)

WithDisabledRadios.storyName = "With disabled radios"

export const Rtl = () => (
  <div dir="rtl">
    <RadioGroupExample
      render={({ selectedOption, onChangeHandler }) => (
        <RadioGroup labelText="Radio group label">
          <Radio
            labelText="Label"
            name="radio"
            id="radio-1"
            selectedStatus={selectedOption === "radio-1"}
            onChange={onChangeHandler}
            value="radio-1"
          />
          <Radio
            labelText="Label"
            name="radio"
            id="radio-2"
            selectedStatus={selectedOption === "radio-2"}
            onChange={onChangeHandler}
            value="radio-2"
          />
          <Radio
            labelText="Label"
            name="radio"
            id="radio-3"
            selectedStatus={selectedOption === "radio-3"}
            onChange={onChangeHandler}
            value="radio-3"
          />
        </RadioGroup>
      )}
    />
  </div>
)

Rtl.storyName = "RTL"

export const RtlWithDisabledRadios = () => (
  <div dir="rtl">
    <RadioGroupExample
      render={({ selectedOption, onChangeHandler }) => (
        <RadioGroup labelText="Radio group label">
          <Radio
            labelText="Label"
            name="radio"
            id="radio-1"
            disabled
            selectedStatus={selectedOption === "radio-1"}
            onChange={onChangeHandler}
            value="radio-1"
          />
          <Radio
            labelText="Label"
            name="radio"
            id="radio-2"
            disabled
            selectedStatus={selectedOption === "radio-2"}
            onChange={onChangeHandler}
            value="radio-2"
          />
          <Radio
            labelText="Label"
            name="radio"
            id="radio-3"
            selectedStatus={selectedOption === "radio-3"}
            onChange={onChangeHandler}
            value="radio-3"
          />
        </RadioGroup>
      )}
    />
  </div>
)

RtlWithDisabledRadios.storyName = "RTL with disabled radios"

export const WithLinks = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }) => (
      <RadioGroup
        labelText={
          <div>
            Radio group label{" "}
            <a href="http://google.com" target="_blank">
              link
            </a>
          </div>
        }
      >
        <Radio
          labelText="Label 1"
          name="radio"
          id="radio-1"
          selectedStatus={selectedOption === "radio-1"}
          onChange={onChangeHandler}
          value="radio-1"
        />
        <Radio
          labelText="Label 2"
          name="radio"
          id="radio-2"
          selectedStatus={selectedOption === "radio-2"}
          onChange={onChangeHandler}
          value="radio-2"
        />
        <Radio
          labelText={
            <div>
              Label 3 with a{" "}
              <a href="http://google.com" target="_blank">
                link
              </a>
            </div>
          }
          name="radio"
          id="radio-3"
          selectedStatus={selectedOption === "radio-3"}
          onChange={onChangeHandler}
          value="radio-3"
        />
      </RadioGroup>
    )}
  />
)

WithLinks.storyName = "With links"

export const WithoutBottomMargin = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }) => (
      <>
        <RadioGroup noBottomMargin labelText="Radio group label">
          <Radio
            labelText="Label"
            name="radio"
            id="radio-1"
            selectedStatus={selectedOption === "radio-1"}
            onChange={onChangeHandler}
            value="radio-1"
          />
          <Radio
            labelText="Label"
            name="radio"
            id="radio-2"
            selectedStatus={selectedOption === "radio-2"}
            onChange={onChangeHandler}
            value="radio-2"
          />
          <Radio
            labelText="Label"
            name="radio"
            id="radio-3"
            selectedStatus={selectedOption === "radio-3"}
            onChange={onChangeHandler}
            value="radio-3"
          />
        </RadioGroup>

        <Label
          id="test_label"
          htmlFor="test_label"
          automationId="test_label"
          labelText="Next line"
          labelType="radio"
        />
      </>
    )}
  />
)

WithoutBottomMargin.storyName = "Without bottom margin"

export const WithBottomMargin = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }) => (
      <>
        <RadioGroup labelText="Radio group label">
          <Radio
            labelText="Label"
            name="radio"
            id="radio-1"
            selectedStatus={selectedOption === "radio-1"}
            onChange={onChangeHandler}
            value="radio-1"
          />
          <Radio
            labelText="Label"
            name="radio"
            id="radio-2"
            selectedStatus={selectedOption === "radio-2"}
            onChange={onChangeHandler}
            value="radio-2"
          />
          <Radio
            labelText="Label"
            name="radio"
            id="radio-3"
            selectedStatus={selectedOption === "radio-3"}
            onChange={onChangeHandler}
            value="radio-3"
          />
        </RadioGroup>

        <Label
          id="test_label"
          htmlFor="test_label"
          automationId="test_label"
          labelText="Next line"
          labelType="radio"
        />
      </>
    )}
  />
)

WithBottomMargin.storyName = "With bottom margin"
