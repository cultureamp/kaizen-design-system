import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/CardStories.elm").Elm.ElmStories
  .CardStories

loadElmStories("Elm/Card", module, compiledElm, ["Default"])
