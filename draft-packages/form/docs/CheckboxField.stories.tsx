import React from "react"
import { Story } from "@storybook/react"
import { CheckboxField } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const REVERSED_BG = {
  backgrounds: {
    default: "Purple 700",
  },
}

type RenderProps = {
  checkedStatus: string
  onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Props = {
  render: (props: RenderProps) => JSX.Element
}

class CheckboxFieldExample extends React.Component<Props> {
  state = {
    checkedStatus: "off",
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
      <>
        {render({
          checkedStatus: this.state.checkedStatus,
          onCheckHandler: this.onCheckHandler,
        })}
      </>
    )
  }
}

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Checkbox Field`,
  component: CheckboxField,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component: 'import { CheckboxField } from "@kaizen/draft-form";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14462%3A196"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenDemo = () => (
  <CheckboxFieldExample
    render={({ checkedStatus, onCheckHandler }) => (
      <CheckboxField
        onCheck={onCheckHandler}
        id="checkbox-1"
        checkedStatus={checkedStatus as any}
        labelText="This is a label"
      />
    )}
  />
)
DefaultKaizenDemo.storyName = "Default (Kaizen Demo)"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
    <StoryWrapper.Row rowTitle="On">
      <CheckboxField
        id="checkbox-1"
        checkedStatus="on"
        labelText="Label"
        reversed={isReversed}
      />
      <CheckboxField
        id="checkbox-2"
        checkedStatus="on"
        disabled
        labelText="Label"
        reversed={isReversed}
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Off">
      <CheckboxField
        id="checkbox-3"
        checkedStatus="off"
        labelText="Label"
        reversed={isReversed}
      />
      <CheckboxField
        id="checkbox-4"
        checkedStatus="off"
        labelText="Label"
        disabled
        reversed={isReversed}
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Mixed">
      <CheckboxField
        id="checkbox-5"
        checkedStatus="mixed"
        labelText="Label"
        reversed={isReversed}
      />
      <CheckboxField
        id="checkbox-6"
        checkedStatus="mixed"
        labelText="Label"
        disabled
        reversed={isReversed}
      />
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
