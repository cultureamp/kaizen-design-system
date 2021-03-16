import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/SplitButtonStories.elm").Elm
  .ElmStories.SplitButtonStories

loadElmStories("SplitButton (Elm)", module, compiledElm, ["Default"])
