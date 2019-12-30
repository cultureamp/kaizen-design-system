import { loadElmStories } from "@cultureamp/elm-storybook"
import { Button } from "@cultureamp/kaizen-component-library"
const configureIcon = require("@cultureamp/kaizen-component-library/icons/configure.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"

storiesOf("Button", module)
  .add("Default", () => <Button label="Label" />)
  .add("Full Width", () => <Button label="Label" fullWidth={true} />)
  .add("Full Width + Icon", () => (
    <Button label="Label" fullWidth={true} icon={configureIcon} />
  ))
  .add("Hyperlink", () => <Button label="Label" href="//example.com" />)
  .add("Hyperlink w/ onClick", () => (
    <Button
      label="Label"
      href="//example.com"
      onClick={action("I am an onClick handler")}
    />
  ))
  .add("Icon + Label", () => <Button label="Configure" icon={configureIcon} />)
  .add("Label + Icon", () => (
    <Button label="Configure" icon={configureIcon} iconPosition="end" />
  ))
  .add("Overflowing text", () => (
    <div style={{ width: 120 }}>
      <Button
        icon={configureIcon}
        label="Passez au rapport de synthèse"
        automationId="demo-button"
      />
    </div>
  ))
  .add("Form (Overflowing text)", () => (
    <div style={{ width: 120 }}>
      <Button
        form
        icon={configureIcon}
        label="Passez au rapport de synthèse"
        automationId="demo-button"
      />
    </div>
  ))
  .add("Disabled", () => <Button label="Label" disabled={true} />)
  .add("Form", () => <Button label="Label" form={true} />)
  .add("Primary", () => <Button label="Label" primary={true} />)
  .add("Primary Disabled", () => (
    <Button label="Label" primary={true} disabled={true} />
  ))
  .add("Secondary", () => <Button label="Label" secondary={true} />)
  .add("Secondary Disabled", () => (
    <Button label="Label" secondary={true} disabled={true} />
  ))
  .add("Secondary w/ Icon", () => (
    <Button label="Configure" icon={configureIcon} secondary={true} />
  ))
  .add("Secondary Disabled w/ Icon", () => (
    <Button
      label="Configure"
      icon={configureIcon}
      secondary={true}
      disabled={true}
    />
  ))
  .add("Destructive", () => <Button label="Label" destructive={true} />)
  .add("Destructive Disabled", () => (
    <Button label="Label" destructive={true} disabled={true} />
  ))
  .add("Reversed", () => <Button label="Label" reversed={true} />)
  .add("Reversed Disabled", () => (
    <Button label="Label" reversed={true} disabled={true} />
  ))
  .add("Primary Reversed", () => (
    <Button label="Label" primary={true} disabled={false} reversed={true} />
  ))
  .add("Primary Reversed Disabled", () => (
    <Button label="Label" primary={true} reversed={true} disabled={true} />
  ))
  .add("Primary Reversed Color Lapis", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="lapis"
    />
  ))
  .add("Primary Reversed Disabled Color Lapis", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="lapis"
    />
  ))
  .add("Primary Reversed Color Ocean", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="ocean"
    />
  ))
  .add("Primary Reversed Disabled Color Ocean", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="ocean"
    />
  ))
  .add("Primary Reversed Color Peach", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="peach"
    />
  ))
  .add("Primary Reversed Disabled Color Peach", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="peach"
    />
  ))
  .add("Primary Reversed Color Seedling", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="seedling"
    />
  ))
  .add("Primary Reversed Disabled Color Seedling", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="seedling"
    />
  ))
  .add("Primary Reversed Color Wisteria", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="wisteria"
    />
  ))
  .add("Primary Reversed Disabled Color Wisteria", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="wisteria"
    />
  ))
  .add("Primary Reversed Color Yuzu", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="yuzu"
    />
  ))
  .add("Primary Reversed Disabled Color Yuzu", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="yuzu"
    />
  ))
  .add("Secondary Reversed", () => (
    <Button label="Label" secondary={true} reversed={true} />
  ))
  .add("Secondary Reversed Disabled", () => (
    <Button label="Label" secondary={true} reversed={true} disabled={true} />
  ))
  .add("Secondary Reversed w/ Icon", () => (
    <Button
      label="Configure"
      secondary={true}
      reversed={true}
      icon={configureIcon}
    />
  ))
  .add("Secondary Reversed Disabled w/ Icon", () => (
    <Button
      label="Configure"
      secondary={true}
      reversed={true}
      disabled={true}
      icon={configureIcon}
    />
  ))
  .add("Type Submit", () => <Button label="Label" type="submit" />)
  .add("Type Reset", () => <Button label="Label" type="reset" />)
  .add("Multiple Buttons", () => (
    <div>
      <Button label="Save" primary automationId="demo-button-1" />
      <Button label="Exit" automationId="demo-button-2" />
    </div>
  ))

loadElmStories("Button (Elm)", module, require("./Button.stories.elm"), [
  "Default",
  "Primary",
  "Secondary",
  "Destructive",
  "Destructive w/ Icon",
  "Secondary Destructive w/ Icon",
])
