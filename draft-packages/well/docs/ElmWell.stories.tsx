import { loadElmStories } from "elm-storybook"
const compiledElm = require("../ElmStories/WellStories.elm").Elm.ElmStories
  .WellStories

import React from "react"
import { storiesOf } from "@storybook/react"

storiesOf("ElmWell", module).add("with some emoji", () => (
  <div> 😀 😎 👍 💯</div>
))

loadElmStories("Well (Elm)", module, compiledElm, [
  "Default with solid border",
  "Default with dashed border",
  "Default without border",
  "Default with no margin",
  "Positive",
  "Negative",
  "Informative",
  "Cautionary",
  "Informative with dashed border",
])
