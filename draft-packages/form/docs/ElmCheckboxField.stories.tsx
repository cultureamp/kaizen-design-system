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
    "with description",
    "with description + reversed",
    "On + reversed",
    "Disabled, on + reversed",
    "Disabled, off + reversed",
    "Disabled, mixed + reversed",
    "On + reversed",
    "Off + reversed",
    "Mixed + reversed",
    "Error",
    "Error, Reversed",
  ]
)
