import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/EmptyStateStories.elm").Elm
  .ElmStories.EmptyStateStories

loadElmStories(`${CATEGORIES.elm}/Empty State`, module, compiledElm, [
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
