import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories(
  "ToastNotification (Elm)",
  module,
  require("./ToastNotification.stories.elm"),
  [
    "Positive",
    "Informative",
    "Cautionary",
    "Negative",
    "Multiple notifications",
  ]
)
