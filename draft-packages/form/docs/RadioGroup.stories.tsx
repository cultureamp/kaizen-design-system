import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Label, RadioField, RadioGroup } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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
  render(): JSX.Element {
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

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      selectedOption: event.target.value,
    })
  }
}

export default {
  tags: ["autodocs"],
  title: "Components/Radio/Radio Group",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'import { RadioGroup } from "@kaizen/draft-form"',
      },
    },
  },
} satisfies Meta<typeof RadioGroup>

export const DefaultKaizenSiteDemo: StoryFn = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }): JSX.Element => (
      <RadioGroup labelText="Radio group label" labelId="RadioGroupLabel">
        <RadioField
          labelText="Option one"
          name="radio"
          id="radio-1"
          selectedStatus={selectedOption === "radio-1"}
          onChange={onChangeHandler}
          value="radio-1"
        />
        <RadioField
          labelText="Option two"
          name="radio"
          id="radio-2"
          selectedStatus={selectedOption === "radio-2"}
          onChange={onChangeHandler}
          value="radio-2"
        />
        <RadioField
          labelText="Option three"
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

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
      <StoryWrapper.Row rowTitle="Default">
        <RadioGroup labelText="Radio group label" reversed={isReversed}>
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-1"
            value="radio-1"
            reversed={isReversed}
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-2"
            value="radio-2"
            reversed={isReversed}
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-3"
            value="radio-3"
            reversed={isReversed}
          />
        </RadioGroup>
        <RadioGroup labelText="Radio group label" reversed={isReversed}>
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-disabled-1"
            value="radio-1"
            disabled
            reversed={isReversed}
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-disabled-2"
            value="radio-2"
            disabled
            reversed={isReversed}
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-disabled-3"
            value="radio-3"
            disabled
            reversed={isReversed}
          />
        </RadioGroup>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Bottom Margin">
        <div>
          <RadioGroup labelText="Radio group label" reversed={isReversed}>
            <RadioField
              labelText="Label"
              name="radio"
              id="radio-no-mb-1"
              value="radio-1"
              reversed={isReversed}
            />
            <RadioField
              labelText="Label"
              name="radio"
              id="radio-no-mb-2"
              value="radio-2"
              reversed={isReversed}
            />
          </RadioGroup>
          <Label
            id="test_label"
            htmlFor="test_label"
            automationId="test_label"
            labelText="Next line"
            labelType="radio"
            reversed={isReversed}
          />
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
