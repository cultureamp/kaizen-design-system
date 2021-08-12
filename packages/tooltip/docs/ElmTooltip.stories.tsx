import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/TooltipStories.elm").Elm.ElmStories
  .TooltipStories

loadElmStories(`${CATEGORIES.elm}/Tooltip`, module, compiledElm, [
  "Default - Below",
  "Default - Above",
  "Default - dontTakeUpSpaceWhenHiddenQuickFix",
])
