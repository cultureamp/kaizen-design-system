import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/DividerStories.elm").Elm.ElmStories
  .DividerStories

loadElmStories(`${CATEGORIES.elm}/Divider`, module, compiledElm, [
  "Default",
  "Canvas",
  "Canvas (Reversed)",
  "Content",
  "Content (Reversed)",
])
