import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/TextFieldStories.elm").Elm.ElmStories
  .TextFieldStories

loadElmStories("TextField (Elm)", module, compiledElm, [
  "Default",
  "Default, Controlled, Prefilled Value",
  "Default, Uncontrolled, Prefilled Value",
  "Default /w icon",
  "Default /w string description",
  "Default /w html description",
])
