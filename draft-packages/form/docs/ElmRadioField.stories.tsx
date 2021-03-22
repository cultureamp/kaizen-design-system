import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/RadioFieldStories.elm").Elm
  .ElmStories.RadioFieldStories

loadElmStories("RadioField (Elm)", module, compiledElm, [
  "Interactive",
  "Unselected disabled",
  "Unselected default",
  "Selected default",
  "Selected disabled",
  "RTL",
])
