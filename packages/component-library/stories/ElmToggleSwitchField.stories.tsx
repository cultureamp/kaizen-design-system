import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories(
  "ToggleSwitchField (Elm)",
  module,
  require("./ToggleSwitchField.stories.elm"),
  ["Default theme", "Freemium theme", "Disabled Off", "Disabled On"]
)
