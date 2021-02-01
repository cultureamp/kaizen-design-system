import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/DividerStories.elm").Elm.ElmStories
  .DividerStories

loadElmStories("Divider (Elm)", module, compiledElm, [
  "Default",
  "Canvas",
  "Canvas (Reversed)",
  "Content",
  "Content (Reversed)",
])
