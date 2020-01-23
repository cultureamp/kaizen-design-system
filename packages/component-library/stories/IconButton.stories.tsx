import { IconButton } from "@kaizen/component-library"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import { boolean, radios, text, withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import * as React from "react"

storiesOf("IconButton (React)", module)
  .addDecorator(withKnobs)
  .add("with Knobs", () => {
    return (
      <IconButton
        icon={configureIcon}
        id={text("id (optional)", "button-1")}
        label={text("label", "Label")}
        destructive={boolean("destructive (optional)", false)}
        disabled={boolean("disabled (optional)", false)}
        form={boolean("form (optional)", false)}
        reversed={boolean("reversed (optional)", false)}
        newTabAndIUnderstandTheAccessibilityImplications={boolean(
          "newTabAndIUnderstandTheAccessibilityImplications (optional)",
          false
        )}
        automationId={text("automationId (optional)", "button-1")}
        fullWidth={boolean("fullWidth (optional)", false)}
        disableTabFocusAndIUnderstandTheAccessibilityImplications={boolean(
          "disableTabFocusAndIUnderstandTheAccessibilityImplications (optional)",
          false
        )}
      />
    )
  })
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
