import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/ToggleSwitchFieldStories.elm").Elm
  .ElmStories.ToggleSwitchFieldStories

loadElmStories(`${CATEGORIES.elm}/Toggle Switch Field`, module, compiledElm, [
  "Default theme",
  "Freemium theme",
  "Disabled Off",
  "Disabled On",
  "Label at end",
])
