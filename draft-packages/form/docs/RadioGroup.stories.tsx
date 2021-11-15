import { Label, RadioField, RadioGroup } from "@kaizen/draft-form"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

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
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Radio Group`,
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'import { RadioGroup } from "@kaizen/draft-form"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=4496%3A481"
    ),
  },
  decorators: [withDesign],
}

const reversedBg = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const DefaultKaizenSiteDemo = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }) => (
      <RadioGroup labelText="Radio group label">
        <RadioField
          labelText="Label"
          name="radio"
          id="radio-1"
          selectedStatus={selectedOption === "radio-1"}
          onChange={onChangeHandler}
          value="radio-1"
        />
        <RadioField
          labelText="Label"
          name="radio"
          id="radio-2"
          selectedStatus={selectedOption === "radio-2"}
          onChange={onChangeHandler}
          value="radio-2"
        />
        <RadioField
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
        <RadioField
          labelText="Label"
          name="radio"
          id="radio-1"
          selectedStatus={selectedOption === "radio-1"}
          disabled
          onChange={onChangeHandler}
          value="radio-1"
        />
        <RadioField
          labelText="Label"
          name="radio"
          id="radio-2"
          selectedStatus={selectedOption === "radio-2"}
          onChange={onChangeHandler}
          value="radio-2"
        />
        <RadioField
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
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-1"
            selectedStatus={selectedOption === "radio-1"}
            onChange={onChangeHandler}
            value="radio-1"
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-2"
            selectedStatus={selectedOption === "radio-2"}
            onChange={onChangeHandler}
            value="radio-2"
          />
          <RadioField
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
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-1"
            disabled
            selectedStatus={selectedOption === "radio-1"}
            onChange={onChangeHandler}
            value="radio-1"
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-2"
            disabled
            selectedStatus={selectedOption === "radio-2"}
            onChange={onChangeHandler}
            value="radio-2"
          />
          <RadioField
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
        <RadioField
          labelText="Label 1"
          name="radio"
          id="radio-1"
          selectedStatus={selectedOption === "radio-1"}
          onChange={onChangeHandler}
          value="radio-1"
        />
        <RadioField
          labelText="Label 2"
          name="radio"
          id="radio-2"
          selectedStatus={selectedOption === "radio-2"}
          onChange={onChangeHandler}
          value="radio-2"
        />
        <RadioField
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
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-1"
            selectedStatus={selectedOption === "radio-1"}
            onChange={onChangeHandler}
            value="radio-1"
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-2"
            selectedStatus={selectedOption === "radio-2"}
            onChange={onChangeHandler}
            value="radio-2"
          />
          <RadioField
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
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-1"
            selectedStatus={selectedOption === "radio-1"}
            onChange={onChangeHandler}
            value="radio-1"
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-2"
            selectedStatus={selectedOption === "radio-2"}
            onChange={onChangeHandler}
            value="radio-2"
          />
          <RadioField
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

export const ReversedDefault = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }) => (
      <RadioGroup reversed labelText="Radio group label">
        <RadioField
          labelText="Label"
          name="radio"
          id="radio-1"
          selectedStatus={selectedOption === "radio-1"}
          onChange={onChangeHandler}
          value="radio-1"
          reversed
        />
        <RadioField
          labelText="Label"
          name="radio"
          id="radio-2"
          selectedStatus={selectedOption === "radio-2"}
          onChange={onChangeHandler}
          value="radio-2"
          reversed
        />
        <RadioField
          labelText="Label"
          name="radio"
          id="radio-3"
          selectedStatus={selectedOption === "radio-3"}
          onChange={onChangeHandler}
          value="radio-3"
          reversed
        />
      </RadioGroup>
    )}
  />
)
ReversedDefault.story = {
  name: "Reversed Default",
  parameters: {
    ...reversedBg,
  },
}
