import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/CardStories.elm").Elm.ElmStories
  .CardStories

loadElmStories("Card (Elm)", module, compiledElm, ["Default"])
