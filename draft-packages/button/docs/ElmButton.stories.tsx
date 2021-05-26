import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/ButtonStories.elm").Elm.ElmStories
  .ButtonStories

loadElmStories("Button (Elm)", module, compiledElm, [
  "Default",
  "Primary",
  "Secondary",
  "Destructive",
  "Destructive w/ Icon",
  "Secondary Destructive",
  "Secondary Destructive w/ Icon",
])
