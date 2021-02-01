import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/TooltipStories.elm").Elm.ElmStories
  .TooltipStories

loadElmStories("Tooltip (Elm)", module, compiledElm, [
  "Default - Below",
  "Default - Above",
])
