import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/GlobalNotificationStories.elm").Elm
  .ElmStories.GlobalNotificationStories

loadElmStories("Elm/Global Notification", module, compiledElm, [
  "Positive",
  "Informative",
  "Cautionary",
  "Negative",
  "Multiple notifications",
])
