import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories(
  "GlobalNotification (Elm)",
  module,
  require("./GlobalNotification.stories.elm"),
  [
    "Positive",
    "Informative",
    "Cautionary",
    "Negative",
    "Multiple notifications",
  ]
)
