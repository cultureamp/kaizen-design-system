import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/TableStories.elm").Elm.ElmStories
  .TableStories

loadElmStories("Table (Elm)", module, compiledElm, ["Default"])
