import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/SplitButtonStories.elm").Elm
  .ElmStories.SplitButtonStories

loadElmStories(`${CATEGORIES.elm}/Split Button`, module, compiledElm, [
  "Default",
])
