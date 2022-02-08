import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/ButtonStories.elm").Elm.ElmStories
  .ButtonStories

loadElmStories(`${CATEGORIES.elm}/Button`, module, compiledElm, [
  "Default",
  "Primary",
  "Secondary",
  "Destructive",
  "Destructive w/ Icon",
  "Secondary Destructive",
  "Secondary Destructive w/ Icon",
])
