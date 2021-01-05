import { loadElmStories } from "@cultureamp/elm-storybook"
import Ports from "./ports"

loadElmStories(
  "Select (Elm)",
  module,
  require("./SelectStories.elm"),
  ["Single (Kaizen Site Demo)", "Single Searchable", "Multi-Select Searchable"],
  Ports
)
