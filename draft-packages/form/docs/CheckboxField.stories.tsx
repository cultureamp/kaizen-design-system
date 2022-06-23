import React from "react"
import { CheckboxField } from "@kaizen/draft-form"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

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

  state = {
    checkedStatus: "mixed",
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
ReversedOn.storyName = "Reversed + on"
ReversedOn.parameters = { ...REVERSED_BG }

export const ReversedDisabledOn = () => (
  <CheckboxField
    id="checkbox-2"
    checkedStatus="on"
    labelText="Label"
    reversed
    disabled
  />
)
ReversedDisabledOn.storyName = "Reversed Disabled + on"
ReversedDisabledOn.parameters = { ...REVERSED_BG }

export const ReversedOff = () => (
  <CheckboxField
    id="checkbox-2"
    checkedStatus="off"
    labelText="Label"
    reversed
  />
)
ReversedOff.storyName = "Reversed + off"
ReversedOff.parameters = { ...REVERSED_BG }

export const ReversedDisabledOff = () => (
  <CheckboxField
    id="checkbox-2"
    checkedStatus="off"
    labelText="Label"
    reversed
    disabled
  />
)
ReversedDisabledOff.storyName = "Reversed Disabled + off"
ReversedDisabledOff.parameters = { ...REVERSED_BG }
