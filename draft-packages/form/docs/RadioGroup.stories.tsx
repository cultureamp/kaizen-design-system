import React from "react"
import { Label, RadioField, RadioGroup } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import { Story } from "@storybook/react"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
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

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      selectedOption: event.target.value,
    })
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
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=4496%3A481"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = () => (
  <RadioGroupExample
    render={({ selectedOption, onChangeHandler }) => (
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

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
      <StoryWrapper.Row rowTitle="Default">
        <RadioGroup labelText="Radio group label">
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-1"
            value="radio-1"
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-2"
            value="radio-2"
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-3"
            value="radio-3"
          />
        </RadioGroup>
        <RadioGroup labelText="Radio group label">
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-disabled-1"
            value="radio-1"
            disabled
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-disabled-2"
            value="radio-2"
            disabled
          />
          <RadioField
            labelText="Label"
            name="radio"
            id="radio-disabled-3"
            value="radio-3"
            disabled
          />
        </RadioGroup>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Bottom Margin">
        <div>
          <RadioGroup labelText="Radio group label">
            <RadioField
              labelText="Label"
              name="radio"
              id="radio-no-mb-1"
              value="radio-1"
            />
            <RadioField
              labelText="Label"
              name="radio"
              id="radio-no-mb-2"
              value="radio-2"
            />
          </RadioGroup>
          <Label
            id="test_label"
            htmlFor="test_label"
            automationId="test_label"
            labelText="Next line"
            labelType="radio"
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
