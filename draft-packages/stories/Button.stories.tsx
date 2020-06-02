import { Button } from "../button"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { action } from "@storybook/addon-actions"
import * as React from "react"

export default {
  title: "Button (Zen) (React)",
}

export const DefaultKaizenSiteDemo = () => <Button label="Label" />

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const DefaultDisabled = () => <Button label="Label" disabled={true} />

DefaultDisabled.story = {
  name: "Default, Disabled",
}

export const Primary = () => <Button label="Label" primary={true} />

export const PrimaryDisabled = () => (
  <Button label="Label" primary={true} disabled={true} />
)

PrimaryDisabled.story = {
  name: "Primary, Disabled",
}

export const Destructive = () => <Button label="Label" destructive={true} />

export const DestructiveDisabled = () => (
  <Button label="Label" destructive={true} disabled={true} />
)

DestructiveDisabled.story = {
  name: "Destructive, Disabled",
}

export const Secondary = () => <Button label="Label" secondary={true} />

export const SecondaryDisabled = () => (
  <Button label="Label" secondary={true} disabled={true} />
)

SecondaryDisabled.story = {
  name: "Secondary, Disabled",
}

export const SecondaryWIcon = () => (
  <Button label="Configure" icon={configureIcon} secondary={true} />
)

SecondaryWIcon.story = {
  name: "Secondary w/ Icon",
}

export const SecondaryWIconDisabled = () => (
  <Button
    label="Configure"
    icon={configureIcon}
    secondary={true}
    disabled={true}
  />
)

SecondaryWIconDisabled.story = {
  name: "Secondary w/ Icon, Disabled",
}

export const IconLabel = () => <Button label="Configure" icon={configureIcon} />

IconLabel.story = {
  name: "Icon + Label",
}

export const LabelIcon = () => (
  <Button label="Configure" icon={configureIcon} iconPosition="end" />
)

LabelIcon.story = {
  name: "Label + Icon",
}

export const FullWidth = () => <Button label="Label" fullWidth={true} />

export const FullWidthIcon = () => (
  <Button label="Label" fullWidth={true} icon={configureIcon} />
)

FullWidthIcon.story = {
  name: "Full Width + Icon",
}

export const Hyperlink = () => <Button label="Label" href="//example.com" />

export const HyperlinkWOnClick = () => (
  <Button
    label="Label"
    href="//example.com"
    onClick={action("I am an onClick handler")}
  />
)

HyperlinkWOnClick.story = {
  name: "Hyperlink w/ onClick",
}

export const ReversedDefault = () => <Button label="Label" reversed={true} />

ReversedDefault.story = {
  name: "Reversed, Default",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const ReversedDefaultDisabled = () => (
  <Button label="Label" reversed={true} disabled={true} />
)

ReversedDefaultDisabled.story = {
  name: "Reversed, Default, Disabled",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const ReversedPrimary = () => (
  <Button label="Label" primary={true} disabled={false} reversed={true} />
)

ReversedPrimary.story = {
  name: "Reversed, Primary",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const ReversedPrimaryDisabled = () => (
  <Button label="Label" primary={true} reversed={true} disabled={true} />
)

ReversedPrimaryDisabled.story = {
  name: "Reversed, Primary, Disabled",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const ReversedSecondary = () => (
  <Button label="Label" secondary={true} reversed={true} />
)

ReversedSecondary.story = {
  name: "Reversed, Secondary",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const ReversedSecondaryDisabled = () => (
  <Button label="Label" secondary={true} reversed={true} disabled={true} />
)

ReversedSecondaryDisabled.story = {
  name: "Reversed, Secondary, Disabled",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const ReversedSecondaryWIcon = () => (
  <Button
    label="Configure"
    secondary={true}
    reversed={true}
    icon={configureIcon}
  />
)

ReversedSecondaryWIcon.story = {
  name: "Reversed, Secondary w/ Icon",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const ReversedSecondaryWIconDisabled = () => (
  <Button
    label="Configure"
    secondary={true}
    reversed={true}
    disabled={true}
    icon={configureIcon}
  />
)

ReversedSecondaryWIconDisabled.story = {
  name: "Reversed, Secondary w/ Icon, Disabled",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const TypeSubmit = () => <Button label="Label" type="submit" />

TypeSubmit.story = {
  name: "Type, Submit",
}

export const TypeReset = () => <Button label="Label" type="reset" />

TypeReset.story = {
  name: "Type, Reset",
}

export const OverflowingTextIconLabelTestCase = () => (
  <div style={{ width: 120 }}>
    <Button
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      automationId="demo-button"
    />
  </div>
)

OverflowingTextIconLabelTestCase.story = {
  name: "Overflowing text, Icon + Label (test case)",
}

export const OverflowingTextFormTestCase = () => (
  <div style={{ width: 120 }}>
    <Button
      form
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      automationId="demo-button"
    />
  </div>
)

OverflowingTextFormTestCase.story = {
  name: "Overflowing text, Form (test case)",
}

export const MultipleButtons = () => (
  <div>
    <Button label="Save" primary automationId="demo-button-1" />
    <Button label="Exit" automationId="demo-button-2" />
  </div>
)
