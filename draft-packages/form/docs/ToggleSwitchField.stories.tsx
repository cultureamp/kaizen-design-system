import {
  ToggledStatus,
  ToggleSwitchField,
  ToggleTheme,
} from "@kaizen/draft-form"
import * as React from "react"

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
  toggle = () => {
    const { toggledStatus } = this.state
    const newStatus =
      toggledStatus === ToggledStatus.ON ? ToggledStatus.OFF : ToggledStatus.ON
    this.setState({ toggledStatus: newStatus })
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "0.2rem",
        }}
      >
        {this.props.children({
          toggledStatus: this.state.toggledStatus,
          toggle: this.toggle,
        })}
      </div>
    )
  }
}

const RtlContainer = ({ children }: { children: React.ReactNode }) => (
  <div dir="rtl">{children}</div>
)

export default {
  title: "ToggleSwitchField (React)",
  component: ToggleSwitchField,
  parameters: {
    info: {
      text: `
      import { ToggledStatus, ToggleSwitchField, ToggleTheme } from "@kaizen/draft-form"
      `,
    },
  },
}

export const OnKaizenSiteDemo = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <ToggleSwitchField
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
      />
    )}
  </ToggleStateContainer>
)

OnKaizenSiteDemo.storyName = "On (Kaizen Site Demo)"

export const Off = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
    {({ toggledStatus, toggle }) => (
      <ToggleSwitchField
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
      />
    )}
  </ToggleStateContainer>
)

export const OnRtl = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <RtlContainer>
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
        />
      </RtlContainer>
    )}
  </ToggleStateContainer>
)

OnRtl.storyName = "On (RTL)"

export const OffRtl = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
    {({ toggledStatus, toggle }) => (
      <RtlContainer>
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
        />
      </RtlContainer>
    )}
  </ToggleStateContainer>
)

OffRtl.storyName = "Off (RTL)"

export const DisabledOn = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <ToggleSwitchField
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
        disabled
      />
    )}
  </ToggleStateContainer>
)

export const DisabledOff = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
    {({ toggledStatus, toggle }) => (
      <ToggleSwitchField
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
        disabled
      />
    )}
  </ToggleStateContainer>
)

export const DisabledOnRtl = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <RtlContainer>
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          disabled
        />
      </RtlContainer>
    )}
  </ToggleStateContainer>
)

DisabledOnRtl.storyName = "Disabled On (RTL)"

export const DisabledOffRtl = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
    {({ toggledStatus, toggle }) => (
      <RtlContainer>
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          disabled
        />
      </RtlContainer>
    )}
  </ToggleStateContainer>
)

DisabledOffRtl.storyName = "Disabled Off (RTL)"

export const FullWidth = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <div style={{ width: "100%" }}>
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          fullWidth
        />
      </div>
    )}
  </ToggleStateContainer>
)

FullWidth.storyName = "Full width"

export const FullWidthRtl = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <div style={{ width: "100%" }}>
        <RtlContainer>
          <ToggleSwitchField
            labelText="Label"
            toggledStatus={toggledStatus}
            onToggle={toggle}
            fullWidth
          />
        </RtlContainer>
      </div>
    )}
  </ToggleStateContainer>
)

FullWidthRtl.storyName = "Full width (RTL)"

export const FreemiumTheme = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <ToggleSwitchField
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
        theme={ToggleTheme.FREEMIUM}
      />
    )}
  </ToggleStateContainer>
)

FreemiumTheme.storyName = "Freemium theme"

export const LabelAtEnd = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <ToggleSwitchField
        labelText="Label"
        toggledStatus={toggledStatus}
        onToggle={toggle}
        labelPosition="end"
      />
    )}
  </ToggleStateContainer>
)

LabelAtEnd.storyName = "Label at end"

export const LabelAtEndRtl = () => (
  <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
    {({ toggledStatus, toggle }) => (
      <RtlContainer>
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          labelPosition="end"
        />
      </RtlContainer>
    )}
  </ToggleStateContainer>
)

LabelAtEndRtl.storyName = "Label at end (RTL)"
