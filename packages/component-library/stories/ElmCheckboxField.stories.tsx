import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories(
  "CheckboxField (Elm)",
  module,
  require("./CheckboxField.stories.elm"),
  [
    "On",
    "Mixed",
    "Off",
    "Disabled + on",
    "Disabled + mixed",
    "Disabled + off",
    "with bottom margin",
    "without bottom margin",
  ]
)
