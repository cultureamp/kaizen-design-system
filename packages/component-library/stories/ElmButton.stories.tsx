import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/ButtonStories.elm").Elm.ElmStories
  .ButtonStories

loadElmStories("Button (deprecated) (Elm)", module, compiledElm, [
  "Default",
  "Primary",
  "Secondary",
  "Destructive",
  "Destructive w/ Icon",
  "Secondary Destructive",
  "Secondary Destructive w/ Icon",
])
