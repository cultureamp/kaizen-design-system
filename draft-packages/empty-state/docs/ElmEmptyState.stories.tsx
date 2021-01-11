import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories(
  "EmptyState (Elm)",
  module,
  require("./EmptyState.stories.elm"),
  [
    "Default",
    "Default (minimal props)",
    "Layout, Content-only",
    "Positive",
    "Informative",
    "Action",
    "Action, button",
    "Neutral",
    "Negative",
    "RTL, Action",
  ]
)
