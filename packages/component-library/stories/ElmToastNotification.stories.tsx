import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/ToastNotificationStories.elm").Elm
  .ElmStories.ToastNotificationStories

loadElmStories("Elm/Toast Notification", module, compiledElm, [
  "Positive",
  "Informative",
  "Cautionary",
  "Negative",
  "Multiple notifications",
])
