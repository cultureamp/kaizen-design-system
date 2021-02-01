import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/GlobalNotificationStories.elm").Elm
  .ElmStories.GlobalNotificationStories

loadElmStories("GlobalNotification (Elm)", module, compiledElm, [
  "Positive",
  "Informative",
  "Cautionary",
  "Negative",
  "Multiple notifications",
])
