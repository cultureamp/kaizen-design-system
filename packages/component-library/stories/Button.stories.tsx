import { loadElmStories } from "@cultureamp/elm-storybook"
import { Button } from "@cultureamp/kaizen-component-library"
const configureIcon = require("@cultureamp/kaizen-component-library/icons/configure.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import focusVisible from "focus-visible"
import * as React from "react"

focusVisible // This causes the :focus-visible polyfill to load

storiesOf("Button", module)
  .add("Default", () => <Button label="Label" />, {
    backgrounds: { disable: true },
  })
  .add("Full Width", () => <Button label="Label" fullWidth={true} />, {
    backgrounds: { disable: true },
  })
  .add(
    "Full Width + Icon",
    () => <Button label="Label" fullWidth={true} icon={configureIcon} />,
    {
      backgrounds: { disable: true },
    }
  )
  .add("Hyperlink", () => <Button label="Label" href="//example.com" />, {
    backgrounds: { disable: true },
  })
  .add(
    "Hyperlink w/ onClick",
    () => (
      <Button
        label="Label"
        href="//example.com"
        onClick={action("I am an onClick handler")}
      />
    ),
    {
      backgrounds: { disable: true },
    }
  )
  .add(
    "Icon + Label",
    () => <Button label="Configure" icon={configureIcon} />,
    {
      backgrounds: { disable: true },
    }
  )
  .add(
    "Label + Icon",
    () => <Button label="Configure" icon={configureIcon} iconPosition="end" />,
    {
      backgrounds: { disable: true },
    }
  )
  .add(
    "Overflowing text",
    () => (
      <div style={{ width: 120 }}>
        <Button
          icon={configureIcon}
          label="Passez au rapport de synthèse"
          automationId="demo-button"
        />
      </div>
    ),
    {
      backgrounds: { disable: true },
    }
  )
  .add(
    "Form (Overflowing text)",
    () => (
      <div style={{ width: 120 }}>
        <Button
          form
          icon={configureIcon}
          label="Passez au rapport de synthèse"
          automationId="demo-button"
        />
      </div>
    ),
    {
      backgrounds: { disable: true },
    }
  )
  .add("Disabled", () => <Button label="Label" disabled={true} />, {
    backgrounds: { disable: true },
  })
  .add("Form", () => <Button label="Label" form={true} />, {
    backgrounds: { disable: true },
  })
  .add("Primary", () => <Button label="Label" primary={true} />, {
    backgrounds: { disable: true },
  })
  .add(
    "Primary Disabled",
    () => <Button label="Label" primary={true} disabled={true} />,
    {
      backgrounds: { disable: true },
    }
  )
  .add("Secondary", () => <Button label="Label" secondary={true} />, {
    backgrounds: { disable: true },
  })
  .add(
    "Secondary Disabled",
    () => <Button label="Label" secondary={true} disabled={true} />,
    {
      backgrounds: { disable: true },
    }
  )
  .add(
    "Secondary w/ Icon",
    () => <Button label="Configure" icon={configureIcon} secondary={true} />,
    {
      backgrounds: { disable: true },
    }
  )
  .add(
    "Secondary Disabled w/ Icon",
    () => (
      <Button
        label="Configure"
        icon={configureIcon}
        secondary={true}
        disabled={true}
      />
    ),
    {
      backgrounds: { disable: true },
    }
  )
  .add("Destructive", () => <Button label="Label" destructive={true} />, {
    backgrounds: { disable: true },
  })
  .add(
    "Destructive Disabled",
    () => <Button label="Label" destructive={true} disabled={true} />,
    {
      backgrounds: { disable: true },
    }
  )
  .add("Reversed", () => <Button label="Label" reversed={true} />)
  .add("Reversed Disabled", () => (
    <Button label="Label" reversed={true} disabled={true} />
  ))
  .add("Primary Reversed", () => (
    <Button label="Label" primary={true} disabled={true} reverseColor="ocean" />
  ))
  .add("Primary Reversed Disabled", () => (
    <Button label="Label" primary={true} reversed={true} disabled={true} />
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
  .add("Type Submit", () => <Button label="Label" type="submit" />, {
    backgrounds: { disable: true },
  })
  .add("Type Reset", () => <Button label="Label" type="reset" />, {
    backgrounds: { disable: true },
  })
  .add(
    "Multiple Buttons",
    () => (
      <div>
        <Button label="Save" primary automationId="demo-button-1" />
        <Button label="Exit" automationId="demo-button-2" />
      </div>
    ),
    {
      backgrounds: { disable: true },
    }
  )

loadElmStories("Button (Elm)", module, require("./Button.stories.elm"), [
  "Default",
  "Primary",
  "Secondary",
  "Destructive",
  "Destructive w/ Icon",
  "Secondary Destructive w/ Icon",
])
