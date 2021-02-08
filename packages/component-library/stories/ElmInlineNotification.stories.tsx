import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/InlineNotificationStories.elm").Elm
  .ElmStories.InlineNotificationStories

loadElmStories("InlineNotification (Elm)", module, compiledElm, [
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
