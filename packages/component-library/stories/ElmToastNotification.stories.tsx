import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/ToastNotificationStories.elm").Elm
  .ElmStories.ToastNotificationStories

loadElmStories(`${CATEGORIES.elm}/Toast Notification`, module, compiledElm, [
  "Positive",
  "Informative",
  "Cautionary",
  "Negative",
  "Multiple notifications",
])
