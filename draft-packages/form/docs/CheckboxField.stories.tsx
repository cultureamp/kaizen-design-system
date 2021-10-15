import { CheckboxField } from "@kaizen/draft-form"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

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
    docs: {
      description: {
        component: 'import { CheckboxField } from "@kaizen/draft-form";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14462%3A196"
    ),
  },
  decorators: [withDesign],
}

const reversedBg = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const InteractiveKaizenSiteDemo = () => (
  <CheckboxFieldExample
    render={({ checkedStatus, onCheckHandler }) => (
      <CheckboxField
        onCheck={onCheckHandler}
        id="checkbox-1"
        checkedStatus={checkedStatus as any}
        labelText={
          <span>
            This is a label with a{" "}
            <a href="http://google.com" target="_blank">
              link
            </a>
          </span>
        }
      />
    )}
  />
)

InteractiveKaizenSiteDemo.storyName = "Interactive (Kaizen Site Demo)"

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

DisabledOn.storyName = "Disabled + on"

export const DisabledMixed = () => (
  <CheckboxField
    id="checkbox-6"
    checkedStatus="mixed"
    disabled={true}
    labelText="Label"
  />
)

DisabledMixed.storyName = "Disabled + mixed"

export const DisabledOff = () => (
  <CheckboxField
    id="checkbox-7"
    checkedStatus="off"
    disabled={true}
    labelText="Label"
  />
)

DisabledOff.storyName = "Disabled + off"

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

WithBottomMargin.storyName = "with bottom margin"

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

WithoutBottomMargin.storyName = "without bottom margin"

export const ReversedOn = () => (
  <CheckboxField
    id="checkbox-2"
    checkedStatus="on"
    labelText="Label"
    reversed
  />
)
ReversedOn.story = {
  name: "Reversed + on",
  parameters: {
    ...reversedBg,
  },
}

export const ReversedDisabledOn = () => (
  <CheckboxField
    id="checkbox-2"
    checkedStatus="on"
    labelText="Label"
    reversed
    disabled
  />
)
ReversedDisabledOn.story = {
  name: "Reversed Disabled + on",
  parameters: {
    ...reversedBg,
  },
}

export const ReversedOff = () => (
  <CheckboxField
    id="checkbox-2"
    checkedStatus="off"
    labelText="Label"
    reversed
  />
)
ReversedOff.story = {
  name: "Reversed + off",
  parameters: {
    ...reversedBg,
  },
}

export const ReversedDisabledOff = () => (
  <CheckboxField
    id="checkbox-2"
    checkedStatus="off"
    labelText="Label"
    reversed
    disabled
  />
)
ReversedDisabledOff.story = {
  name: "Reversed Disabled + off",
  parameters: {
    ...reversedBg,
  },
}
