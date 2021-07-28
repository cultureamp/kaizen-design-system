import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/ToggleSwitchFieldStories.elm").Elm
  .ElmStories.ToggleSwitchFieldStories

loadElmStories("Elm/Toggle Switch Field", module, compiledElm, [
  "Default theme",
  "Freemium theme",
  "Disabled Off",
  "Disabled On",
  "Label at end",
])
