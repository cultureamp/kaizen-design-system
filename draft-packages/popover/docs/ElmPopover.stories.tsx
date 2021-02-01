import { loadElmStories } from "@cultureamp/elm-storybook"
const compiledElm = require("../ElmStories/PopoverStories.elm").Elm.ElmStories
  .PopoverStories

loadElmStories("Popover (Elm)", module, compiledElm, [
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
