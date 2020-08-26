import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories(
  "TextAreaField (Elm)",
  module,
  require("./TextAreaField.stories.elm"),
  [
    "Default",
    "Default, Prefilled Value",
    "Default, Description",
    "Default, Error",
    "Default, Error & Description",
    "Default, Reversed",
    "Default, Reversed, Error",
    "Default, Reversed, Error & Description",
  ]
)
