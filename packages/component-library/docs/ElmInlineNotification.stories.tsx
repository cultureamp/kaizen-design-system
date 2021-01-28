import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories(
  "InlineNotification (Elm)",
  module,
  require("./InlineNotification.stories.elm"),
  [
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
  ]
)
