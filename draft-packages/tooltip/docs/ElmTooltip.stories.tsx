import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/TooltipStories.elm").Elm.ElmStories
  .TooltipStories

loadElmStories("Elm/Tooltip", module, compiledElm, [
  "Default - Below",
  "Default - Above",
  "Default - dontTakeUpSpaceWhenHiddenQuickFix",
])
