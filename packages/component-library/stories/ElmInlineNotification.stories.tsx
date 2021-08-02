import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/InlineNotificationStories.elm").Elm
  .ElmStories.InlineNotificationStories

loadElmStories(`${CATEGORIES.elm}/Inline Notification`, module, compiledElm, [
  "Dismissible, Positive",
  "Dismissible, Informative",
  "Dismissible, Cautionary",
  "Dismissible, Negative",
  "Dismissible, Multiline",
  "Dismissible, Slim",
  "Persistent, Positive",
  "Persistent, Informative",
  "Persistent, Cautionary",
  "Persistent, Negative",
  "Persistent, Multiline",
  "Persistent, Slim",
  "Multiple Notification",
])
