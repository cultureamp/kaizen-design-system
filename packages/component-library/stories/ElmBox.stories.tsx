import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/BoxStories.elm").Elm.ElmStories
  .BoxStories

loadElmStories("Elm/Box", module, compiledElm, [
  "Box Default",
  "Box With Margin",
  "Box With Padding",
  "Box With X And Y Padding",
])
