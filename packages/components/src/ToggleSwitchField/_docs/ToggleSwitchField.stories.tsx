import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ToggledStatus, ToggleSwitchField } from "~components/ToggleSwitchField"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"

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
  tags: ["autodocs"],
  title: "KAIO-staging/Toggle Switch Field",
  component: ToggleSwitchField,
  parameters: {
    docs: {
      description: {
        component:
          'import { ToggledStatus, ToggleSwitchField } from "@components/ToggleSwitchField"',
      },
    },
  },
} satisfies Meta<typeof ToggleSwitchField>

export const Default: StoryFn<typeof ToggleSwitchField> = props => (
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

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
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
