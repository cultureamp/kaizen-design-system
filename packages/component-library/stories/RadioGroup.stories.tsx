import { Radio, RadioGroup } from "@cultureamp/kaizen-component-library/draft"
import { Label } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"
const styles = require("./RadioGroup.stories.scss")

type RenderProps = {
  selectedOption: string
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Props = {
  render: (props: RenderProps) => JSX.Element
}

export default class RadioGroupExample extends React.Component<Props> {
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

storiesOf("RadioGroup (React)", module)
  .add("Default (Kaizen Site Demo)", () => (
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
  ))
  .add("With disabled radios", () => (
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
  ))
  .add("RTL", () => (
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
  ))
  .add("RTL with disabled radios", () => (
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
  ))

  .add("With links", () => (
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
  ))
  .add("Without bottom margin", () => (
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
  ))
  .add("With bottom margin", () => (
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
  ))
