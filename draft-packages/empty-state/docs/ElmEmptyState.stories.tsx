import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/EmptyStateStories.elm").Elm
  .ElmStories.ElmEmptyStateStories

loadElmStories("EmptyState (Elm)", module, compiledElm, [
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
])
