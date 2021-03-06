import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import * as React from "react"
import { IconButton } from ".."

export default {
  title: "IconButton (React)",
  component: IconButton,
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

export const Reversed = () => (
  <IconButton icon={configureIcon} label="Label" reversed />
)
Reversed.parameters = {
  backgrounds: {
    default: "Wisteria 700",
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
    default: "Wisteria 700",
  },
}

export const FormDiscouraged = () => (
  <IconButton icon={configureIcon} label="Label" form={true} />
)

FormDiscouraged.storyName = "Form (discouraged)"
