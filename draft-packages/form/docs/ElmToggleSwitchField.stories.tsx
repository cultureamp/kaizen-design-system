import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/ToggleSwitchFieldStories.elm").Elm
  .ElmStories.ToggleSwitchFieldStories

loadElmStories("ToggleSwitchField (Elm)", module, compiledElm, [
  "Default theme",
  "Freemium theme",
  "Disabled Off",
  "Disabled On",
  "Label at end",
])
