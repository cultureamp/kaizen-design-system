import { loadElmStories } from "@cultureamp/elm-storybook"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { Icon } from "@kaizen/component-library"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default

storiesOf("Icon (React)", module)
  .add("Meaningful (Kaizen Site Demo)", () => (
    // the wrapper with the fixed with is to solve a problem when this is used
    // as a site demo: the iframe was getting a height of 0px in Firefox
    <div style={{ width: "20px" }}>
      <Icon
        icon={configureIcon}
        title="Warning"
        desc="Aliens approaching!"
        role="img"
        inheritSize={true}
      />
    </div>
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
