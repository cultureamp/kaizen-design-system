import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Button, CustomButtonProps, ButtonRef } from "../button"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import React, { useCallback, useRef } from "react"

export default {
  title: "Button (Zen) (React)",
  component: Button,
  parameters: {
    info: {
      text: `
        import { Button } from "@kaizen/draft-button";
      `,
    },
  },
}

export const DefaultKaizenSiteDemo = () => <Button label="Label" />

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const DefaultDisabled = () => <Button label="Label" disabled={true} />

DefaultDisabled.storyName = "Default, Disabled"

export const Primary = () => <Button label="Label" primary={true} />

export const PrimaryDisabled = () => (
  <Button label="Label" primary={true} disabled={true} />
)

PrimaryDisabled.storyName = "Primary, Disabled"

export const Destructive = () => <Button label="Label" destructive={true} />

export const DestructiveDisabled = () => (
  <Button label="Label" destructive={true} disabled={true} />
)

DestructiveDisabled.storyName = "Destructive, Disabled"

export const Secondary = () => <Button label="Label" secondary={true} />

export const SecondaryDisabled = () => (
  <Button label="Label" secondary={true} disabled={true} />
)

SecondaryDisabled.storyName = "Secondary, Disabled"

export const SecondaryWIcon = () => (
  <Button label="Configure" icon={configureIcon} secondary={true} />
)

SecondaryWIcon.storyName = "Secondary w/ Icon"

export const SecondaryWIconDisabled = () => (
  <Button
    label="Configure"
    icon={configureIcon}
    secondary={true}
    disabled={true}
  />
)

SecondaryWIconDisabled.storyName = "Secondary w/ Icon, Disabled"

export const IconLabel = () => <Button label="Configure" icon={configureIcon} />

IconLabel.storyName = "Icon + Label"

export const LabelIcon = () => (
  <Button label="Configure" icon={configureIcon} iconPosition="end" />
)

LabelIcon.storyName = "Label + Icon"

export const FullWidth = () => <Button label="Label" fullWidth={true} />

export const FullWidthIcon = () => (
  <Button label="Label" fullWidth={true} icon={configureIcon} />
)

FullWidthIcon.storyName = "Full Width + Icon"

export const Hyperlink = () => <Button label="Label" href="//example.com" />

export const HyperlinkWOnClick = () => (
  <Button label="Label" href="//example.com" onClick={() => undefined} />
)

HyperlinkWOnClick.storyName = "Hyperlink w/ onClick"

export const ReversedDefault = () => <Button label="Label" reversed={true} />

ReversedDefault.storyName = "Reversed, Default"
ReversedDefault.parameters = {
  backgrounds: [
    {
      name: "Wisteria 700",
      value: colorTokens.kz.color.wisteria[700],
      default: true,
    },
  ],
}

export const ReversedDefaultDisabled = () => (
  <Button label="Label" reversed={true} disabled={true} />
)

ReversedDefaultDisabled.storyName = "Reversed, Default, Disabled"
ReversedDefaultDisabled.parameters = {
  backgrounds: [
    {
      name: "Wisteria 700",
      value: colorTokens.kz.color.wisteria[700],
      default: true,
    },
  ],
}

export const ReversedPrimary = () => (
  <Button label="Label" primary={true} disabled={false} reversed={true} />
)

ReversedPrimary.storyName = "Reversed, Primary"
ReversedPrimary.parameters = {
  backgrounds: [
    {
      name: "Wisteria 700",
      value: colorTokens.kz.color.wisteria[700],
      default: true,
    },
  ],
}

export const ReversedPrimaryDisabled = () => (
  <Button label="Label" primary={true} reversed={true} disabled={true} />
)

ReversedPrimaryDisabled.storyName = "Reversed, Primary, Disabled"
ReversedPrimaryDisabled.parameters = {
  backgrounds: [
    {
      name: "Wisteria 700",
      value: colorTokens.kz.color.wisteria[700],
      default: true,
    },
  ],
}

export const ReversedSecondary = () => (
  <Button label="Label" secondary={true} reversed={true} />
)

ReversedSecondary.storyName = "Reversed, Secondary"
ReversedSecondary.parameters = {
  backgrounds: [
    {
      name: "Wisteria 700",
      value: colorTokens.kz.color.wisteria[700],
      default: true,
    },
  ],
}

export const ReversedSecondaryDisabled = () => (
  <Button label="Label" secondary={true} reversed={true} disabled={true} />
)

ReversedSecondaryDisabled.storyName = "Reversed, Secondary, Disabled"
ReversedSecondaryDisabled.parameters = {
  backgrounds: [
    {
      name: "Wisteria 700",
      value: colorTokens.kz.color.wisteria[700],
      default: true,
    },
  ],
}

export const ReversedSecondaryWIcon = () => (
  <Button
    label="Configure"
    secondary={true}
    reversed={true}
    icon={configureIcon}
  />
)

ReversedSecondaryWIcon.storyName = "Reversed, Secondary w/ Icon"
ReversedSecondaryWIcon.parameters = {
  backgrounds: [
    {
      name: "Wisteria 700",
      value: colorTokens.kz.color.wisteria[700],
      default: true,
    },
  ],
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

ReversedSecondaryWIconDisabled.storyName =
  "Reversed, Secondary w/ Icon, Disabled"
ReversedSecondaryWIconDisabled.parameters = {
  backgrounds: [
    {
      name: "Wisteria 700",
      value: colorTokens.kz.color.wisteria[700],
      default: true,
    },
  ],
}

export const TypeSubmit = () => <Button label="Label" type="submit" />

TypeSubmit.storyName = "Type, Submit"

export const TypeReset = () => <Button label="Label" type="reset" />

TypeReset.storyName = "Type, Reset"

export const OverflowingTextIconLabelTestCase = () => (
  <div style={{ width: 120 }}>
    <Button
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      data-automation-id="demo-button"
    />
  </div>
)

OverflowingTextIconLabelTestCase.storyName =
  "Overflowing text, Icon + Label (test case)"

export const OverflowingTextFormTestCase = () => (
  <div style={{ width: 120 }}>
    <Button
      form
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      data-automation-id="demo-button"
    />
  </div>
)

export const FocusExample = () => {
  const ref = useRef<ButtonRef>()
  const handleClick = useCallback(() => {
    ref.current?.focus()
  }, [])
  return (
    <>
      <Button label="Label" ref={ref} />
      <hr />
      <p>
        This story is to test the ability to imperatively call the `focus`
        function.
      </p>
      <button onClick={handleClick}>
        Click here to focus the button above
      </button>
    </>
  )
}

OverflowingTextFormTestCase.storyName = "Overflowing text, Form (test case)"

export const MultipleButtons = () => (
  <div>
    <Button label="Save" primary data-automation-id="demo-button-1" />
    <Button label="Exit" data-automation-id="demo-button-2" />
  </div>
)

export const CustomComponent = () => {
  const CustomLink = (buttonProps: CustomButtonProps) => (
    <a href={buttonProps.href} {...buttonProps} />
  )
  // ^ In actual usage - this would be a react-router <Link> component or similar

  return <Button label="Custom component button" component={CustomLink} />
}
