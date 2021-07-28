import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/TableStories.elm").Elm.ElmStories
  .TableStories

loadElmStories("Elm/Table", module, compiledElm, ["Default"])
