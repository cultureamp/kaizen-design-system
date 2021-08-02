import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/BoxStories.elm").Elm.ElmStories
  .BoxStories

loadElmStories(`${CATEGORIES.elm}/Box`, module, compiledElm, [
  "Box Default",
  "Box With Margin",
  "Box With Padding",
  "Box With X And Y Padding",
])
