import { loadElmStories } from "@cultureamp/elm-storybook"
import { boolean, radios, text, withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { Icon } from "@kaizen/component-library"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default

storiesOf("Icon (React)", module)
  .add("with Knobs", () => {
    return (
      <Icon
        icon={configureIcon}
        inheritSize={boolean("inheritSize (optional)", false)}
        //@ts-ignore
        role={radios("role (optional)", ["img", "presentation"], "img")}
        title={text("title (optional)", "Warning")}
        desc={text("desc (optional)", "Aliens approaching!")}
      />
    )
  })
  .add("Meaningful (Kaizen Site Demo)", () => (
    <Icon
      icon={configureIcon}
      title="Warning"
      desc="Aliens approaching!"
      role="img"
    />
  ))
  .add("Presentational", () => (
    <Icon icon={configureIcon} role="presentation" />
  ))
  .add("Inherit Size", () => (
    <div style={{ width: "100%" }}>
      <Icon icon={configureIcon} role="presentation" inheritSize={true} />
    </div>
  ))

loadElmStories("Icon (Elm)", module, require("./Icon.stories.elm"), [
  "Meaningful",
  "Presentational",
  "Inherit Size",
])
