import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Button, CustomButtonProps, ButtonRef } from "../button"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import React, { useCallback, useRef } from "react"

export default {
  title: "Button (Zen) (React)",
  component: Button,
  args: {
    label: "hello",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    info: {
      text: `
        import { Button } from "@kaizen/draft-button";
      `,
    },
  },
}

export const DefaultKaizenSiteDemo = args => <Button {...args} />
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const DefaultDisabled = args => (
  <Button label="Label" disabled={true} {...args} />
)
DefaultDisabled.storyName = "Default, Disabled"

export const Primary = args => <Button label="Label" primary={true} {...args} />

export const PrimaryDisabled = args => (
  <Button label="Label" primary={true} disabled={true} {...args} />
)
PrimaryDisabled.storyName = "Primary, Disabled"

export const Destructive = args => (
  <Button label="Label" destructive={true} {...args} />
)

export const DestructiveDisabled = args => (
  <Button label="Label" destructive={true} disabled={true} {...args} />
)
DestructiveDisabled.storyName = "Destructive, Disabled"

export const Secondary = args => (
  <Button label="Label" secondary={true} {...args} />
)

export const SecondaryDisabled = args => (
  <Button label="Label" secondary={true} disabled={true} {...args} />
)
SecondaryDisabled.storyName = "Secondary, Disabled"

export const SecondaryWIcon = args => (
  <Button label="Configure" icon={configureIcon} secondary={true} {...args} />
)
SecondaryWIcon.storyName = "Secondary w/ Icon"

export const SecondaryWIconDisabled = args => (
  <Button
    label="Configure"
    icon={configureIcon}
    secondary={true}
    disabled={true}
    {...args}
  />
)
SecondaryWIconDisabled.storyName = "Secondary w/ Icon, Disabled"

export const IconLabel = args => (
  <Button label="Configure" icon={configureIcon} {...args} />
)
IconLabel.storyName = "Icon + Label"

export const LabelIcon = args => (
  <Button label="Configure" icon={configureIcon} iconPosition="end" {...args} />
)
LabelIcon.storyName = "Label + Icon"

export const FullWidth = args => (
  <Button label="Label" fullWidth={true} {...args} />
)

export const FullWidthIcon = args => (
  <Button label="Label" fullWidth={true} icon={configureIcon} {...args} />
)
FullWidthIcon.storyName = "Full Width + Icon"

export const Hyperlink = args => (
  <Button label="Label" href="//example.com" {...args} />
)

export const HyperlinkWOnClick = args => (
  <Button
    label="Label"
    href="//example.com"
    onClick={() => undefined}
    {...args}
  />
)
HyperlinkWOnClick.storyName = "Hyperlink w/ onClick"

export const ReversedDefault = args => (
  <Button label="Label" reversed={true} {...args} />
)
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

export const ReversedDefaultDisabled = args => (
  <Button label="Label" reversed={true} disabled={true} {...args} />
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

export const ReversedPrimary = args => (
  <Button
    label="Label"
    primary={true}
    disabled={false}
    reversed={true}
    {...args}
  />
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

export const ReversedPrimaryDisabled = args => (
  <Button
    label="Label"
    primary={true}
    reversed={true}
    disabled={true}
    {...args}
  />
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

export const ReversedSecondary = args => (
  <Button label="Label" secondary={true} reversed={true} {...args} />
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

export const ReversedSecondaryDisabled = args => (
  <Button
    label="Label"
    secondary={true}
    reversed={true}
    disabled={true}
    {...args}
  />
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

export const ReversedSecondaryWIcon = args => (
  <Button
    label="Configure"
    secondary={true}
    reversed={true}
    icon={configureIcon}
    {...args}
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

export const ReversedSecondaryWIconDisabled = args => (
  <Button
    label="Configure"
    secondary={true}
    reversed={true}
    disabled={true}
    icon={configureIcon}
    {...args}
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

export const TypeSubmit = args => (
  <Button label="Label" type="submit" {...args} />
)
TypeSubmit.storyName = "Type, Submit"

export const TypeReset = args => <Button label="Label" type="reset" {...args} />
TypeReset.storyName = "Type, Reset"

export const OverflowingTextIconLabelTestCase = args => (
  <div style={{ width: 120 }}>
    <Button
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      data-automation-id="demo-button"
      {...args}
    />
  </div>
)
OverflowingTextIconLabelTestCase.storyName =
  "Overflowing text, Icon + Label (test case)"

export const OverflowingTextFormTestCase = args => (
  <div style={{ width: 120 }}>
    <Button
      form
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      data-automation-id="demo-button"
      {...args}
    />
  </div>
)

export const FocusExample = args => {
  const ref = useRef<ButtonRef>()
  const handleClick = useCallback(() => {
    ref.current?.focus()
  }, [])
  return (
    <>
      <Button label="Label" ref={ref} {...args} />
      <hr {...args} />
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

export const MultipleButtons = args => (
  <div>
    <Button label="Save" primary data-automation-id="demo-button-1" {...args} />
    <Button label="Exit" data-automation-id="demo-button-2" {...args} />
  </div>
)

export const CustomComponent = args => {
  const CustomLink = (buttonProps: CustomButtonProps) => (
    <a href={buttonProps.href} {...buttonProps} {...args} />
  )
  // ^ In actual usage - this would be a react-router <Link> component or similar

  return (
    <Button label="Custom component button" component={CustomLink} {...args} />
  )
}
