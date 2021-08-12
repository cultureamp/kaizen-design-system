import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/RadioFieldStories.elm").Elm
  .ElmStories.RadioFieldStories

loadElmStories(`${CATEGORIES.elm}/Radio Field`, module, compiledElm, [
  "Interactive",
  "Unselected disabled",
  "Unselected default",
  "Selected default",
  "Selected disabled",
  "RTL",
])
