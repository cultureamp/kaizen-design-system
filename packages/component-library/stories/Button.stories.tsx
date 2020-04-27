import { Button } from "@kaizen/component-library"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import * as React from "react"

export default {
  title: "Button (React)",
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

export const SecondaryDestructiveNotYetImplemented = () => (
  <Button label="Delete" secondary={true} disabled={false} destructive={true} />
)

SecondaryDestructiveNotYetImplemented.story = {
  name: "Secondary, Destructive (not yet implemented)",
}

export const SecondaryWIconDestructiveNotYetImplemented = () => (
  <Button
    label="Delete"
    icon={configureIcon}
    secondary={true}
    disabled={false}
    destructive={true}
  />
)

SecondaryWIconDestructiveNotYetImplemented.story = {
  name: "Secondary w/ Icon, Destructive (not yet implemented)",
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
}

export const ReversedDefaultDisabled = () => (
  <Button label="Label" reversed={true} disabled={true} />
)

ReversedDefaultDisabled.story = {
  name: "Reversed, Default, Disabled",
}

export const ReversedPrimary = () => (
  <Button label="Label" primary={true} disabled={false} reversed={true} />
)

ReversedPrimary.story = {
  name: "Reversed, Primary",
}

export const ReversedPrimaryDisabled = () => (
  <Button label="Label" primary={true} reversed={true} disabled={true} />
)

ReversedPrimaryDisabled.story = {
  name: "Reversed, Primary, Disabled",
}

export const ReversedColorLapisDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={false}
    reversed={true}
    reverseColor="lapis"
  />
)

ReversedColorLapisDiscouraged.story = {
  name: "Reversed, Color, Lapis (discouraged)",
}

export const ReversedPrimaryDisabledColorLapisDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={true}
    reversed={true}
    reverseColor="lapis"
  />
)

ReversedPrimaryDisabledColorLapisDiscouraged.story = {
  name: "Reversed, Primary, Disabled, Color, Lapis (discouraged)",
}

export const ReversedPrimaryColorOceanDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={false}
    reversed={true}
    reverseColor="ocean"
  />
)

ReversedPrimaryColorOceanDiscouraged.story = {
  name: "Reversed, Primary, Color, Ocean (discouraged)",
}

export const ReversedPrimaryDisabledColorOceanDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={true}
    reversed={true}
    reverseColor="ocean"
  />
)

ReversedPrimaryDisabledColorOceanDiscouraged.story = {
  name: "Reversed, Primary, Disabled, Color, Ocean (discouraged)",
}

export const ReversedPrimaryColorPeachDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={false}
    reversed={true}
    reverseColor="peach"
  />
)

ReversedPrimaryColorPeachDiscouraged.story = {
  name: "Reversed, Primary, Color, Peach (discouraged)",
}

export const ReversedPrimaryDisabledColorPeachDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={true}
    reversed={true}
    reverseColor="peach"
  />
)

ReversedPrimaryDisabledColorPeachDiscouraged.story = {
  name: "Reversed, Primary, Disabled, Color, Peach (discouraged)",
}

export const ReversedPrimaryColorSeedlingDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={false}
    reversed={true}
    reverseColor="seedling"
  />
)

ReversedPrimaryColorSeedlingDiscouraged.story = {
  name: "Reversed, Primary, Color, Seedling (discouraged)",
}

export const ReversedPrimaryDisabledColorSeedlingDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={true}
    reversed={true}
    reverseColor="seedling"
  />
)

ReversedPrimaryDisabledColorSeedlingDiscouraged.story = {
  name: "Reversed, Primary, Disabled, Color, Seedling (discouraged)",
}

export const ReversedPrimaryColorWisteriaDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={false}
    reversed={true}
    reverseColor="wisteria"
  />
)

ReversedPrimaryColorWisteriaDiscouraged.story = {
  name: "Reversed, Primary, Color, Wisteria (discouraged)",
}

export const ReversedPrimaryDisabledColorWisteriaDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={true}
    reversed={true}
    reverseColor="wisteria"
  />
)

ReversedPrimaryDisabledColorWisteriaDiscouraged.story = {
  name: "Reversed, Primary, Disabled, Color, Wisteria (discouraged)",
}

export const ReversedPrimaryColorYuzuDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={false}
    reversed={true}
    reverseColor="yuzu"
  />
)

ReversedPrimaryColorYuzuDiscouraged.story = {
  name: "Reversed, Primary, Color, Yuzu (discouraged)",
}

export const ReversedPrimaryDisabledColorYuzuDiscouraged = () => (
  <Button
    label="Label"
    primary={true}
    disabled={true}
    reversed={true}
    reverseColor="yuzu"
  />
)

ReversedPrimaryDisabledColorYuzuDiscouraged.story = {
  name: "Reversed, Primary, Disabled, Color, Yuzu (discouraged)",
}

export const ReversedSecondary = () => (
  <Button label="Label" secondary={true} reversed={true} />
)

ReversedSecondary.story = {
  name: "Reversed, Secondary",
}

export const ReversedSecondaryDisabled = () => (
  <Button label="Label" secondary={true} reversed={true} disabled={true} />
)

ReversedSecondaryDisabled.story = {
  name: "Reversed, Secondary, Disabled",
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
}

export const TypeSubmit = () => <Button label="Label" type="submit" />

TypeSubmit.story = {
  name: "Type, Submit",
}

export const TypeReset = () => <Button label="Label" type="reset" />

TypeReset.story = {
  name: "Type, Reset",
}

export const FormDiscouraged = () => <Button label="Label" form={true} />

FormDiscouraged.story = {
  name: "Form (discouraged)",
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
