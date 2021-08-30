import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../src/ElmStories/GlobalNotificationStories.elm")
  .Elm.ElmStories.GlobalNotificationStories

loadElmStories(`${CATEGORIES.elm}/Global Notification`, module, compiledElm, [
  "Positive",
  "Informative",
  "Cautionary",
  "Negative",
  "Multiple notifications",
])
