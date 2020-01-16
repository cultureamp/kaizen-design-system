import { loadElmStories } from "@cultureamp/elm-storybook"
import { Button } from "@cultureamp/kaizen-component-library"
const configureIcon = require("@cultureamp/kaizen-component-library/icons/configure.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"

storiesOf("Button (React)", module)
  .add("Default (Kaizen Site Demo)", () => <Button label="Label" />)
  .add("Default, Disabled", () => <Button label="Label" disabled={true} />)
  .add("Primary", () => <Button label="Label" primary={true} />)
  .add("Primary, Disabled", () => (
    <Button label="Label" primary={true} disabled={true} />
  ))
  .add("Destructive", () => <Button label="Label" destructive={true} />)
  .add("Destructive, Disabled", () => (
    <Button label="Label" destructive={true} disabled={true} />
  ))
  .add("Secondary", () => <Button label="Label" secondary={true} />)
  .add("Secondary, Disabled", () => (
    <Button label="Label" secondary={true} disabled={true} />
  ))
  .add("Secondary w/ Icon", () => (
    <Button label="Configure" icon={configureIcon} secondary={true} />
  ))
  .add("Secondary w/ Icon, Disabled", () => (
    <Button
      label="Configure"
      icon={configureIcon}
      secondary={true}
      disabled={true}
    />
  ))
  .add("Secondary, Destructive (not yet implemented)", () => (
    <Button
      label="Delete"
      secondary={true}
      disabled={false}
      destructive={true}
    />
  ))
  .add("Secondary w/ Icon, Destructive (not yet implemented)", () => (
    <Button
      label="Delete"
      icon={configureIcon}
      secondary={true}
      disabled={false}
      destructive={true}
    />
  ))
  .add("Icon + Label", () => <Button label="Configure" icon={configureIcon} />)
  .add("Label + Icon", () => (
    <Button label="Configure" icon={configureIcon} iconPosition="end" />
  ))
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
  .add("Reversed, Default", () => <Button label="Label" reversed={true} />)
  .add("Reversed, Default, Disabled", () => (
    <Button label="Label" reversed={true} disabled={true} />
  ))
  .add("Reversed, Primary", () => (
    <Button label="Label" primary={true} disabled={false} reversed={true} />
  ))
  .add("Reversed, Primary, Disabled", () => (
    <Button label="Label" primary={true} reversed={true} disabled={true} />
  ))
  .add("Reversed, Color, Lapis (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="lapis"
    />
  ))
  .add("Reversed, Primary, Disabled, Color, Lapis (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="lapis"
    />
  ))
  .add("Reversed, Primary, Color, Ocean (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="ocean"
    />
  ))
  .add("Reversed, Primary, Disabled, Color, Ocean (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="ocean"
    />
  ))
  .add("Reversed, Primary, Color, Peach (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="peach"
    />
  ))
  .add("Reversed, Primary, Disabled, Color, Peach (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="peach"
    />
  ))
  .add("Reversed, Primary, Color, Seedling (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="seedling"
    />
  ))
  .add("Reversed, Primary, Disabled, Color, Seedling (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="seedling"
    />
  ))
  .add("Reversed, Primary, Color, Wisteria (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="wisteria"
    />
  ))
  .add("Reversed, Primary, Disabled, Color, Wisteria (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="wisteria"
    />
  ))
  .add("Reversed, Primary, Color, Yuzu (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={false}
      reversed={true}
      reverseColor="yuzu"
    />
  ))
  .add("Reversed, Primary, Disabled, Color, Yuzu (discouraged)", () => (
    <Button
      label="Label"
      primary={true}
      disabled={true}
      reversed={true}
      reverseColor="yuzu"
    />
  ))
  .add("Reversed, Secondary", () => (
    <Button label="Label" secondary={true} reversed={true} />
  ))
  .add("Reversed, Secondary, Disabled", () => (
    <Button label="Label" secondary={true} reversed={true} disabled={true} />
  ))
  .add("Reversed, Secondary w/ Icon", () => (
    <Button
      label="Configure"
      secondary={true}
      reversed={true}
      icon={configureIcon}
    />
  ))
  .add("Reversed, Secondary w/ Icon, Disabled", () => (
    <Button
      label="Configure"
      secondary={true}
      reversed={true}
      disabled={true}
      icon={configureIcon}
    />
  ))
  .add("Type, Submit", () => <Button label="Label" type="submit" />)
  .add("Type, Reset", () => <Button label="Label" type="reset" />)
  .add("Form", () => <Button label="Label" form={true} />)
  .add("Overflowing text, Icon + Label (test case)", () => (
    <div style={{ width: 120 }}>
      <Button
        icon={configureIcon}
        label="Passez au rapport de synthèse"
        automationId="demo-button"
      />
    </div>
  ))
  .add("Overflowing text, Form (test case)", () => (
    <div style={{ width: 120 }}>
      <Button
        form
        icon={configureIcon}
        label="Passez au rapport de synthèse"
        automationId="demo-button"
      />
    </div>
  ))
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
  "Secondary Destructive",
  "Secondary Destructive w/ Icon",
])
