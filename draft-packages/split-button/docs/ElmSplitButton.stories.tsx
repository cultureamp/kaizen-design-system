import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/SplitButtonStories.elm").Elm
  .ElmStories.SplitButtonStories

loadElmStories("Elm/Split Button", module, compiledElm, ["Default"])
