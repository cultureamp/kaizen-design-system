import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"
const compiledElm = require("../ElmStories/PopoverStories.elm").Elm.ElmStories
  .PopoverStories

loadElmStories(`${CATEGORIES.elm}/Popover`, module, compiledElm, [
  "Default",
  "Informative",
  "Positive",
  "Negative",
  "Cautionary",
  "Dismissible",
  "Arrow above",
  "Arrow start",
  "Arrow end",
])
