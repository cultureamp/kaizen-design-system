import { IconButton } from "../button"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import * as React from "react"

export default {
  title: "IconButton (React)",
}

export const DefaultKaizenSiteDemo = () => (
  <IconButton icon={configureIcon} label="Label" automationId="demo-button" />
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const Hyperlink = () => (
  <IconButton icon={configureIcon} label="Label" href="//example.com" />
)

export const HyperlinkWOnClick = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    href="//example.com"
    onClick={action("I am an onClick handler")}
  />
)

HyperlinkWOnClick.story = {
  name: "Hyperlink w/ onClick",
}

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

DestructiveDisabled.story = {
  name: "Destructive, Disabled",
}

export const Reversed = () => (
  <IconButton icon={configureIcon} label="Label" reversed />
)

export const ReversedDisabled = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    reversed={true}
    disabled={true}
  />
)

ReversedDisabled.story = {
  name: "Reversed, Disabled",
}

export const FormDiscouraged = () => (
  <IconButton icon={configureIcon} label="Label" form={true} />
)

FormDiscouraged.story = {
  name: "Form (discouraged)",
}
