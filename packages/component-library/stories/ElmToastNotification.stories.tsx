import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/ToastNotificationStories.elm").Elm
  .ElmStories.ToastNotificationStories

loadElmStories("ToastNotification (Elm)", module, compiledElm, [
  "Positive",
  "Informative",
  "Cautionary",
  "Negative",
  "Multiple notifications",
])
