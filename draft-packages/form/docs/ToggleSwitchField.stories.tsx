import React from "react"
import { Decorator, Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { ToggledStatus, ToggleSwitchField } from "../../form"

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

const meta = {
  tags: ["autodocs"],
  title: "Components/Toggle Switch Field",
  component: ToggleSwitchField,
  args: {
    labelText: "Label",
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "npm install @kaizen/draft-form",
      "import { ToggledStatus, ToggleSwitchField } from '@kaizen/draft-form'",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/master/draft-packages/form/KaizenDraft/Form/ToggleSwitchField",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-37849&t=tTe9WARWi1kIWalg-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075638160/Toggle+Switch",
    },
    alternatives: [
      "components-checkbox-group--docs",
      "components-radio-group--docs",
    ],
  },
} satisfies Meta<typeof ToggleSwitchField>

export default meta

const PlaygroundDecorator: Decorator = (Story, { args }) => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }): JSX.Element => (
      <ToggleSwitchField
        {...args}
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
      />
    )}
  </ToggleStateContainer>
)

/**
 * A Toggle Switch lets people turn a single setting on or off immediately.
 */
export const Playground: StoryObj<typeof meta> = {
  decorators: [PlaygroundDecorator],
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

/**
 * You can set the default toggle state by using the `toggleStatus` prop
 */
export const ManuallyUpdateToggledStatus: StoryFn<
  typeof ToggleSwitchField
> = () => (
  <StickerSheet>
    <StickerSheet.Header headings={["On", "Off"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
          {({ toggledStatus, toggle }): JSX.Element => (
            <ToggleSwitchField
              id="toggle-switch-field--start"
              labelText="Label"
              toggledStatus={toggledStatus}
              onToggle={toggle}
            />
          )}
        </ToggleStateContainer>
        <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
          {({ toggledStatus, toggle }): JSX.Element => (
            <ToggleSwitchField
              id="toggle-switch-field--end"
              labelText="Label"
              toggledStatus={toggledStatus}
              onToggle={toggle}
              labelPosition="end"
            />
          )}
        </ToggleStateContainer>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)
/**
 * Change the position of the label using the `labelPosition` prop with values `start` or `end`. (default: `start`)
 * (Note: Terminology is for RTL friendly context)
 */
export const AdjustLabelPosition: StoryFn<typeof ToggleSwitchField> = () => (
  <StickerSheet>
    <StickerSheet.Header headings={["Start", "End"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
          {({ toggledStatus, toggle }): JSX.Element => (
            <ToggleSwitchField
              id="toggle-switch-field--start"
              labelText="Label"
              toggledStatus={toggledStatus}
              onToggle={toggle}
            />
          )}
        </ToggleStateContainer>
        <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
          {({ toggledStatus, toggle }): JSX.Element => (
            <ToggleSwitchField
              id="toggle-switch-field--end"
              labelText="Label"
              toggledStatus={toggledStatus}
              onToggle={toggle}
              labelPosition="end"
            />
          )}
        </ToggleStateContainer>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const Disabled: StoryFn<typeof ToggleSwitchField> = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }): JSX.Element => (
      <ToggleSwitchField
        id="toggle-switch-field--disabled"
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
        disabled
      />
    )}
  </ToggleStateContainer>
)

export const FullWidth: StoryFn<typeof ToggleSwitchField> = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }): JSX.Element => (
      <ToggleSwitchField
        id="toggle-switch-field--fullwidth"
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
        fullWidth
      />
    )}
  </ToggleStateContainer>
)

export const Reversed: StoryFn<{ isReversed?: boolean }> = ({ isReversed }) => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }): JSX.Element => (
      <ToggleSwitchField
        id="toggle-switch-field--reversed"
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
        reversed={isReversed}
      />
    )}
  </ToggleStateContainer>
)

Reversed.args = { isReversed: true }
Reversed.parameters = {
  backgrounds: { default: "Purple 700" },
}
