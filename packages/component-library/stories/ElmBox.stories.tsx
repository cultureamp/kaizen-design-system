import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/BoxStories.elm").Elm.ElmStories
  .BoxStories

loadElmStories("Box (Elm)", module, compiledElm, [
  "Box Default",
  "Box With Margin",
  "Box With Padding",
  "Box With X And Y Padding",
])
