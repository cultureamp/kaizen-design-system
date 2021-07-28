import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/DividerStories.elm").Elm.ElmStories
  .DividerStories

loadElmStories("Elm/Divider", module, compiledElm, [
  "Default",
  "Canvas",
  "Canvas (Reversed)",
  "Content",
  "Content (Reversed)",
])
