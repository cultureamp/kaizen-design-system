import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/IconStories.elm").Elm.ElmStories
  .IconStories

loadElmStories(`${CATEGORIES.elm}/Icon`, module, compiledElm, [
  "Meaningful",
  "Presentational",
  "Inherit Size",
])
