import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories(
  "SplitButton (Elm)",
  module,
  require("./SplitButtonStories.elm"),
  ["Default"]
)
