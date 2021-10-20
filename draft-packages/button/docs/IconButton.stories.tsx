import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import * as React from "react"
import { IconButton } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/Icon Button`,
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: 'import { IconButton } from "@kaizen/draft-button";',
      },
    },
  },
}

export const DefaultKaizenSiteDemo = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    data-automation-id="demo-button"
  />
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Hyperlink = () => (
  <IconButton icon={configureIcon} label="Label" href="//example.com" />
)

export const HyperlinkWOnClick = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    href="//example.com"
    onClick={() => undefined}
  />
)

HyperlinkWOnClick.storyName = "Hyperlink w/ onClick"

export const Disabled = () => (
  <IconButton icon={configureIcon} label="Label" disabled={true} />
)

export const Primary = () => (
  <IconButton icon={configureIcon} label="Label" primary />
)
Primary.storyName = "Primary"

export const PrimaryDisabled = () => (
  <IconButton icon={configureIcon} label="Label" primary disabled />
)
PrimaryDisabled.storyName = "Primary, Disabled"

export const PrimaryReversed = () => (
  <IconButton icon={configureIcon} label="Label" primary reversed />
)
PrimaryReversed.storyName = "Primary, Reversed"
PrimaryReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const PrimaryReversedDisabled = () => (
  <IconButton icon={configureIcon} label="Label" primary reversed disabled />
)
PrimaryReversedDisabled.storyName = "Primary, Reversed, Disabled"
PrimaryReversedDisabled.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const Destructive = () => (
  <IconButton icon={configureIcon} label="Label" destructive={true} />
)

export const DestructiveDisabled = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    destructive={true}
    disabled={true}
  />
)
DestructiveDisabled.storyName = "Destructive, Disabled"

export const Secondary = () => (
  <IconButton icon={configureIcon} label="Label" secondary={true} />
)

export const SecondaryDisabled = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    secondary={true}
    disabled={true}
  />
)
DestructiveDisabled.storyName = "Secondary, Disabled"

export const DestructiveSecondary = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    destructive={true}
    secondary={true}
  />
)
DestructiveSecondary.storyName = "Destructive, Secondary"

export const DestructiveSecondaryDisabled = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    destructive={true}
    secondary={true}
    disabled={true}
  />
)
DestructiveSecondaryDisabled.storyName = "Destructive, Secondary, Disabled"

export const Reversed = () => (
  <IconButton icon={configureIcon} label="Label" reversed />
)
Reversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const ReversedDisabled = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    reversed={true}
    disabled={true}
  />
)
ReversedDisabled.storyName = "Reversed, Disabled"
ReversedDisabled.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const ReversedSecondary = () => (
  <IconButton icon={configureIcon} label="Label" reversed secondary={true} />
)
ReversedSecondary.storyName = "Reversed, Secondary"
ReversedSecondary.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const ReversedSecondaryDisabled = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    reversed
    secondary={true}
    disabled={true}
  />
)
ReversedSecondaryDisabled.storyName = "Reversed, Secondary Disabled"
ReversedSecondaryDisabled.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const FormDiscouraged = () => (
  <IconButton icon={configureIcon} label="Label" form={true} />
)
FormDiscouraged.storyName = "Form (discouraged)"
