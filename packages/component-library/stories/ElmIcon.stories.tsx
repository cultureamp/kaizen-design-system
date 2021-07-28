import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/IconStories.elm").Elm.ElmStories
  .IconStories

loadElmStories("Elm/Icon", module, compiledElm, [
  "Meaningful",
  "Presentational",
  "Inherit Size",
])
