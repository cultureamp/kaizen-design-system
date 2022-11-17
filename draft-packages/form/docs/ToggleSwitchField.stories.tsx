import React from "react"
import { withDesign } from "storybook-addon-designs"
import { ToggledStatus, ToggleSwitchField } from "@kaizen/draft-form"
import { Heading } from "@kaizen/typography"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
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

  render() {
    return (
      <div>
        {this.props.children({
          toggledStatus: this.state.toggledStatus,
          toggle: this.toggle,
        })}
      </div>
    )
  }

  toggle = () => {
    const { toggledStatus } = this.state
    const newStatus =
      toggledStatus === ToggledStatus.ON ? ToggledStatus.OFF : ToggledStatus.ON
    this.setState({ toggledStatus: newStatus })
  }
}

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Toggle Switch Field`,
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
}

export const Default = props => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
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

export const StickerSheetDefault = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(200px, 400px))",
      rowGap: "20px",
    }}
  >
    <div>
      <Heading variant="heading-5" tag="h2">
        Default
      </Heading>
    </div>
    <div>
      <Heading variant="heading-5" tag="h2">
        Label Position End
      </Heading>
    </div>
    <div>
      <Heading variant="heading-5" tag="h2">
        Disabled
      </Heading>
    </div>
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          id="1"
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
        />
      )}
    </ToggleStateContainer>
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          id="2"
          labelText="Label"
          labelPosition="end"
          toggledStatus={toggledStatus}
          onToggle={toggle}
        />
      )}
    </ToggleStateContainer>
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          id="3"
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          disabled
        />
      )}
    </ToggleStateContainer>
  </div>
)
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(200px, 400px))",
      rowGap: "20px",
    }}
  >
    <div>
      <Heading variant="heading-5" tag="h2" color="white">
        Default
      </Heading>
    </div>
    <div>
      <Heading variant="heading-5" tag="h2" color="white">
        Label Position End
      </Heading>
    </div>
    <div>
      <Heading variant="heading-5" tag="h2" color="white">
        Disabled
      </Heading>
    </div>
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          id="4"
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          reversed
        />
      )}
    </ToggleStateContainer>
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          id="5"
          labelText="Label"
          labelPosition="end"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          reversed
        />
      )}
    </ToggleStateContainer>
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          id="6"
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          disabled
          reversed
        />
      )}
    </ToggleStateContainer>
  </div>
)
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
