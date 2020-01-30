import { IconButton } from "@kaizen/component-library"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"

storiesOf("IconButton (React)", module)
  .add("Default", () => (
    <IconButton icon={configureIcon} label="Label" automationId="demo-button" />
  ))
  .add("Hyperlink", () => (
    <IconButton icon={configureIcon} label="Label" href="//example.com" />
  ))
  .add("Hyperlink w/ onClick", () => (
    <IconButton
      icon={configureIcon}
      label="Label"
      href="//example.com"
      onClick={action("I am an onClick handler")}
    />
  ))
  .add("Disabled", () => (
    <IconButton icon={configureIcon} label="Label" disabled={true} />
  ))
  .add("Destructive", () => (
    <IconButton icon={configureIcon} label="Label" destructive={true} />
  ))
  .add("Destructive, Disabled", () => (
    <IconButton
      icon={configureIcon}
      label="Label"
      destructive={true}
      disabled={true}
    />
  ))
  .add("Reversed", () => (
    <IconButton icon={configureIcon} label="Label" reversed />
  ))
  .add("Reversed, Disabled", () => (
    <IconButton
      icon={configureIcon}
      label="Label"
      reversed={true}
      disabled={true}
    />
  ))
  .add("Form (discouraged)", () => (
    <IconButton icon={configureIcon} label="Label" form={true} />
  ))
