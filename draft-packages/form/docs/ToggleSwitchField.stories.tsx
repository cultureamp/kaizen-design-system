import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { ToggledStatus, ToggleSwitchField } from "@kaizen/draft-form"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { figmaEmbed } from "../../../storybook/helpers"

class ToggleStateContainer extends React.Component<
  {
    initialToggledStatus: ToggledStatus
    children: (renderProps: {
      toggledStatus: ToggledStatus
      toggle: () => void
    }) => React.ReactNode
  },
  { toggledStatus: ToggledStatus }
> {
  state = {
    toggledStatus: this.props.initialToggledStatus,
  }

  render(): JSX.Element {
    return (
      <div>
        {this.props.children({
          toggledStatus: this.state.toggledStatus,
          toggle: this.toggle,
        })}
      </div>
    )
  }

  toggle = (): void => {
    const { toggledStatus } = this.state
    const newStatus =
      toggledStatus === ToggledStatus.ON ? ToggledStatus.OFF : ToggledStatus.ON
    this.setState({ toggledStatus: newStatus })
  }
}

export default {
  title: "Components/Form/Toggle Switch Field",
  component: ToggleSwitchField,
  parameters: {
    docs: {
      description: {
        component:
          'import { ToggledStatus, ToggleSwitchField } from "@kaizen/draft-form"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14361%3A67850"
    ),
  },
  decorators: [withDesign],
} as ComponentMeta<typeof ToggleSwitchField>

export const Default: ComponentStory<typeof ToggleSwitchField> = props => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }): JSX.Element => (
      <ToggleSwitchField
        {...props}
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
      />
    )}
  </ToggleStateContainer>
)
Default.storyName = "Default (Kaizen Demo)"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header
      headings={["Default", "Label Position End", "Disabled"]}
      headingsWidth="12rem"
    />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
          {({ toggledStatus, toggle }): JSX.Element => (
            <ToggleSwitchField
              reversed={isReversed}
              id="toggle-switch-field--default"
              labelText="Label"
              toggledStatus={toggledStatus}
              onToggle={toggle}
            />
          )}
        </ToggleStateContainer>
        <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
          {({ toggledStatus, toggle }): JSX.Element => (
            <ToggleSwitchField
              reversed={isReversed}
              id="toggle-switch-field--label-end"
              labelText="Label"
              labelPosition="end"
              toggledStatus={toggledStatus}
              onToggle={toggle}
            />
          )}
        </ToggleStateContainer>
        <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
          {({ toggledStatus, toggle }): JSX.Element => (
            <ToggleSwitchField
              reversed={isReversed}
              id="toggle-switch-field--disabled"
              labelText="Label"
              toggledStatus={toggledStatus}
              onToggle={toggle}
              disabled
            />
          )}
        </ToggleStateContainer>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
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
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
