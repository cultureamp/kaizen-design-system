import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/RadioFieldStories.elm").Elm
  .ElmStories.RadioFieldStories

loadElmStories("Elm/Radio Field", module, compiledElm, [
  "Interactive",
  "Unselected disabled",
  "Unselected default",
  "Selected default",
  "Selected disabled",
  "RTL",
])
