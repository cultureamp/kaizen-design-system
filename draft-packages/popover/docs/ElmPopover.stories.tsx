import { loadElmStories } from "elm-storybook"
const compiledElm = require("../ElmStories/PopoverStories.elm").Elm.ElmStories
  .PopoverStories

loadElmStories("Elm/Popover", module, compiledElm, [
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
