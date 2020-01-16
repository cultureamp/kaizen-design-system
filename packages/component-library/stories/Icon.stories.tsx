import { loadElmStories } from "@cultureamp/elm-storybook"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { Icon } from "@cultureamp/kaizen-component-library"
const configureIcon = require("@cultureamp/kaizen-component-library/icons/configure.icon.svg")
  .default

storiesOf("Icon (React)", module)
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
